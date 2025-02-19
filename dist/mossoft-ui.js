import { jsx as oe, jsxs as Ae, Fragment as It } from "react/jsx-runtime";
import * as de from "react";
import ue, { useState as Re, useEffect as Se, useRef as he, useMemo as Ll, useLayoutEffect as Bi, useContext as $i } from "react";
import ji, { unstable_batchedUpdates as Ml, flushSync as qi } from "react-dom";
const Ct = ({ name: e, className: t, ...r }) => /* @__PURE__ */ oe(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ oe(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), yn = ({ style: e, text: t }) => /* @__PURE__ */ Ae("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ oe("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ oe("span", { className: "text-base", children: t })
] }), V0 = ({
  children: e,
  onClick: t,
  className: r,
  loadType: n,
  isLoading: o,
  variant: a,
  icon: u,
  disabled: c,
  ...f
}) => {
  const [p, d] = Re(""), l = () => {
    o && n === "1C" && (d("Отправляем запрос в 1С"), setTimeout(
      () => d(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  Se(() => {
    n === "1C" && l();
  }, [o]);
  const i = [
    "flex items-center justify-center py-[14px] px-[6px] w-full h-fit rounded-[30px] md:rounded-[15px] text-base md:text-lg uppercase font-medium border border-transparent active:opacity-[0.6] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-[0.6]",
    r,
    a === "primary" && "text-white bg-primary",
    a === "secondary" && "text-primary bg-primary bg-opacity-10",
    a === "small-secondary" && "!normal-case !py-[6px] !text-sm text-primary bg-primary bg-opacity-20",
    a === "small-primary" && "!normal-case !py-[6px] !text-sm text-white bg-primary",
    a === "small-danger" && "!normal-case !py-[6px] !text-sm text-danger bg-danger bg-opacity-10",
    a === "danger" && "text-danger bg-danger bg-opacity-10",
    a === "link" && "text-primary !text-sm !py-0 !px-1 !normal-case !w-fit",
    a === "tab" && "bg-primary text-white text-sm md:!text-base !px-5 !py-2 !font-normal rounded-[30px] md:!rounded-[15px] !normal-case !w-fit"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Ae(
    "button",
    {
      disabled: c || o,
      onClick: t,
      className: i,
      ...f,
      children: [
        o ? /* @__PURE__ */ oe(yn, { text: n === "1C" ? p : void 0 }) : e,
        u && !o && /* @__PURE__ */ oe(
          Ct,
          {
            name: u,
            className: a.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, pr = ({ error: e }) => /* @__PURE__ */ oe("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ oe("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), F0 = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: a,
  error: u,
  checked: c,
  disabled: f
}) => /* @__PURE__ */ Ae(It, { children: [
  /* @__PURE__ */ Ae(
    "label",
    {
      onClick: (p) => p.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ oe(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${a}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ oe("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ oe(
          "input",
          {
            disabled: f,
            checked: c,
            onChange: (p) => e(p.target.checked),
            type: "checkbox",
            className: o
          }
        )
      ]
    }
  ),
  u && /* @__PURE__ */ oe(pr, { error: u })
] }), G0 = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ oe("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ oe(It, { children: o.title ? /* @__PURE__ */ oe(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ oe(It, {}) })) });
function bn(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var Rt;
(function(e) {
  e.event = "event", e.props = "prop";
})(Rt || (Rt = {}));
function He() {
}
function Bl(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(a, u) {
      return a === t[u];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function at(e) {
  return !!(e || "").match(/\d/);
}
function it(e) {
  return e == null;
}
function $l(e) {
  return typeof e == "number" && isNaN(e);
}
function Vi(e) {
  return it(e) || $l(e) || typeof e == "number" && !isFinite(e);
}
function Fi(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function jl(e) {
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
function ql(e, t, r) {
  var n = jl(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function Vl(e) {
  var t = he(e);
  t.current = e;
  var r = he(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function En(e, t) {
  t === void 0 && (t = !0);
  var r = e[0] === "-", n = r && t;
  e = e.replace("-", "");
  var o = e.split("."), a = o[0], u = o[1] || "";
  return {
    beforeDecimal: a,
    afterDecimal: u,
    hasNegation: r,
    addNegation: n
  };
}
function Fl(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function Gi(e, t, r) {
  for (var n = "", o = r ? "0" : "", a = 0; a <= t - 1; a++)
    n += e[a] || o;
  return n;
}
function eo(e, t) {
  return Array(t + 1).join(e);
}
function Ui(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], a = n[1];
  if (a = Number(a), !a)
    return r + o;
  o = o.replace(".", "");
  var u = 1 + a, c = o.length;
  return u < 0 ? o = "0." + eo("0", Math.abs(u)) + o : u >= c ? o = o + eo("0", u - c) : o = (o.substring(0, u) || "0") + "." + o.substring(u), r + o;
}
function to(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = En(e), a = o.beforeDecimal, u = o.afterDecimal, c = o.hasNegation, f = parseFloat("0." + (u || "0")), p = u.length <= t ? "0." + u : f.toFixed(t), d = p.split("."), l = a;
  a && Number(d[0]) && (l = a.split("").reverse().reduce(function(v, h, g) {
    return v.length > g ? (Number(v[0]) + Number(h)).toString() + v.substring(1, v.length) : h + v;
  }, d[0]));
  var i = Gi(d[1] || "", t, r), s = c ? "-" : "", m = n ? "." : "";
  return "" + s + l + m + i;
}
function Ze(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var Hi = Bl(function(e, t) {
  for (var r = 0, n = 0, o = e.length, a = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[a - 1 - n] && a - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: a - n }
  };
}), Gl = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Ul(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Dr(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Hl() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function zi(e) {
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
function Wi(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function zl(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Wl(e, t, r, n, o, a, u) {
  u === void 0 && (u = zl);
  var c = o.findIndex(function(y) {
    return y;
  }), f = e.slice(0, c);
  !t && !r.startsWith(f) && (t = f, r = f + r, n = n + f.length);
  for (var p = r.length, d = e.length, l = {}, i = new Array(p), s = 0; s < p; s++) {
    i[s] = -1;
    for (var m = 0, v = d; m < v; m++) {
      var h = u({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: s,
        formattedValueIndex: m
      });
      if (h && l[m] !== !0) {
        i[s] = m, l[m] = !0;
        break;
      }
    }
  }
  for (var g = n; g < p && (i[g] === -1 || !a(r[g])); )
    g++;
  var b = g === p || i[g] === -1 ? d : i[g];
  for (g = n - 1; g > 0 && i[g] === -1; )
    g--;
  var _ = g === -1 || i[g] === -1 ? 0 : i[g] + 1;
  return _ > b ? b : n - _ < b - n ? _ : b;
}
function rr(e, t, r, n) {
  var o = e.length;
  if (t = Ul(t, 0, o), n === "left") {
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
function Kl(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(at(e[r]) || at(e[r - 1]));
  return t;
}
function Ki(e, t, r, n, o, a) {
  a === void 0 && (a = He);
  var u = Vl(function(m, v) {
    var h, g;
    return Vi(m) ? (g = "", h = "") : typeof m == "number" || v ? (g = typeof m == "number" ? Ui(m) : m, h = n(g)) : (g = o(m, void 0), h = n(g)), { formattedValue: h, numAsString: g };
  }), c = Re(function() {
    return u(it(e) ? t : e, r);
  }), f = c[0], p = c[1], d = function(m, v) {
    m.formattedValue !== f.formattedValue && p({
      formattedValue: m.formattedValue,
      numAsString: m.value
    }), a(m, v);
  }, l = e, i = r;
  it(e) && (l = f.numAsString, i = !0);
  var s = u(l, i);
  return Ll(function() {
    p(s);
  }, [s.formattedValue]), [f, d];
}
function Yl(e) {
  return e.replace(/[^0-9]/g, "");
}
function Zl(e) {
  return e;
}
function Yi(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, a = e.getInputRef, u = e.format;
  u === void 0 && (u = Zl);
  var c = e.removeFormatting;
  c === void 0 && (c = Yl);
  var f = e.defaultValue, p = e.valueIsNumericString, d = e.onValueChange, l = e.isAllowed, i = e.onChange;
  i === void 0 && (i = He);
  var s = e.onKeyDown;
  s === void 0 && (s = He);
  var m = e.onMouseUp;
  m === void 0 && (m = He);
  var v = e.onFocus;
  v === void 0 && (v = He);
  var h = e.onBlur;
  h === void 0 && (h = He);
  var g = e.value, b = e.getCaretBoundary;
  b === void 0 && (b = Kl);
  var _ = e.isValidInputCharacter;
  _ === void 0 && (_ = at);
  var y = e.isCharacterSame, E = bn(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), A = Ki(g, f, !!p, u, c, d), w = A[0], S = w.formattedValue, P = w.numAsString, N = A[1], O = he(), x = he({ formattedValue: S, numAsString: P }), T = function(ee, G) {
    x.current = { formattedValue: ee.formattedValue, numAsString: ee.value }, N(ee, G);
  }, I = Re(!1), L = I[0], B = I[1], $ = he(null), K = he({
    setCaretTimeout: null,
    focusTimeout: null
  });
  Se(function() {
    return B(!0), function() {
      clearTimeout(K.current.setCaretTimeout), clearTimeout(K.current.focusTimeout);
    };
  }, []);
  var j = u, k = function(ee, G) {
    var H = parseFloat(G);
    return {
      formattedValue: ee,
      value: G,
      floatValue: isNaN(H) ? void 0 : H
    };
  }, D = function(ee, G, H) {
    ee.selectionStart === 0 && ee.selectionEnd === ee.value.length || (Ze(ee, G), K.current.setCaretTimeout = setTimeout(function() {
      ee.value === H && ee.selectionStart !== G && Ze(ee, G);
    }, 0));
  }, R = function(ee, G, H) {
    return rr(ee, G, b(ee), H);
  }, M = function(ee, G, H) {
    var J = b(G), te = Wl(G, S, ee, H, J, _, y);
    return te = rr(G, te, J), te;
  }, U = function(ee) {
    var G = ee.formattedValue;
    G === void 0 && (G = "");
    var H = ee.input, J = ee.source, te = ee.event, Y = ee.numAsString, ne;
    if (H) {
      var le = ee.inputValue || H.value, se = Dr(H);
      H.value = G, ne = M(le, G, se), ne !== void 0 && D(H, ne, G);
    }
    G !== S && T(k(G, Y), { event: te, source: J });
  };
  Se(function() {
    var ee = x.current, G = ee.formattedValue, H = ee.numAsString;
    (S !== G || P !== H) && T(k(S, P), {
      event: void 0,
      source: Rt.props
    });
  }, [S, P]);
  var F = $.current ? Dr($.current) : void 0, C = typeof window < "u" ? Bi : Se;
  C(function() {
    var ee = $.current;
    if (S !== x.current.formattedValue && ee) {
      var G = M(x.current.formattedValue, S, F);
      ee.value = S, D(ee, G, S);
    }
  }, [S]);
  var q = function(ee, G, H) {
    var J = G.target, te = O.current ? Gl(O.current, J.selectionEnd) : Hi(S, ee), Y = Object.assign(Object.assign({}, te), { lastValue: S }), ne = c(ee, Y), le = j(ne);
    if (ne = c(le, void 0), l && !l(k(le, ne))) {
      var se = G.target, we = Dr(se), ke = M(ee, S, we);
      return se.value = S, D(se, ke, S), !1;
    }
    return U({
      formattedValue: le,
      numAsString: ne,
      inputValue: ee,
      event: G,
      source: H,
      input: G.target
    }), !0;
  }, W = function(ee, G) {
    G === void 0 && (G = 0);
    var H = ee.selectionStart, J = ee.selectionEnd;
    O.current = { selectionStart: H, selectionEnd: J + G };
  }, z = function(ee) {
    var G = ee.target, H = G.value, J = q(H, ee, Rt.event);
    J && i(ee), O.current = void 0;
  }, Z = function(ee) {
    var G = ee.target, H = ee.key, J = G.selectionStart, te = G.selectionEnd, Y = G.value;
    Y === void 0 && (Y = "");
    var ne;
    H === "ArrowLeft" || H === "Backspace" ? ne = Math.max(J - 1, 0) : H === "ArrowRight" ? ne = Math.min(J + 1, Y.length) : H === "Delete" && (ne = J);
    var le = 0;
    H === "Delete" && J === te && (le = 1);
    var se = H === "ArrowLeft" || H === "ArrowRight";
    if (ne === void 0 || J !== te && !se) {
      s(ee), W(G, le);
      return;
    }
    var we = ne;
    if (se) {
      var ke = H === "ArrowLeft" ? "left" : "right";
      we = R(Y, ne, ke), we !== ne && ee.preventDefault();
    } else H === "Delete" && !_(Y[ne]) ? we = R(Y, ne, "right") : H === "Backspace" && !_(Y[ne]) && (we = R(Y, ne, "left"));
    we !== ne && D(G, we, Y), s(ee), W(G, le);
  }, re = function(ee) {
    var G = ee.target, H = function() {
      var J = G.selectionStart, te = G.selectionEnd, Y = G.value;
      if (Y === void 0 && (Y = ""), J === te) {
        var ne = R(Y, J);
        ne !== J && D(G, ne, Y);
      }
    };
    H(), requestAnimationFrame(function() {
      H();
    }), m(ee), W(G);
  }, X = function(ee) {
    ee.persist && ee.persist();
    var G = ee.target, H = ee.currentTarget;
    $.current = G, K.current.focusTimeout = setTimeout(function() {
      var J = G.selectionStart, te = G.selectionEnd, Y = G.value;
      Y === void 0 && (Y = "");
      var ne = R(Y, J);
      ne !== J && !(J === 0 && te === Y.length) && D(G, ne, Y), v(Object.assign(Object.assign({}, ee), { currentTarget: H }));
    }, 0);
  }, ae = function(ee) {
    $.current = null, clearTimeout(K.current.focusTimeout), clearTimeout(K.current.setCaretTimeout), h(ee);
  }, Q = L && Hl() ? "numeric" : void 0, fe = Object.assign({ inputMode: Q }, E, {
    type: t,
    value: S,
    onChange: z,
    onKeyDown: Z,
    onMouseUp: re,
    onFocus: X,
    onBlur: ae
  });
  if (r === "text")
    return o ? ue.createElement(ue.Fragment, null, o(S, E) || null) : ue.createElement("span", Object.assign({}, E, { ref: a }), S);
  if (n) {
    var xe = n;
    return ue.createElement(xe, Object.assign({}, fe, { ref: a }));
  }
  return ue.createElement("input", Object.assign({}, fe, { ref: a }));
}
function ro(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var a = t.suffix;
  a === void 0 && (a = "");
  var u = t.allowNegative, c = t.thousandsGroupStyle;
  if (c === void 0 && (c = "thousand"), e === "" || e === "-")
    return e;
  var f = hr(t), p = f.thousandSeparator, d = f.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, i = En(e, u), s = i.beforeDecimal, m = i.afterDecimal, v = i.addNegation;
  return r !== void 0 && (m = Gi(m, r, !!n)), p && (s = ql(s, p, c)), o && (s = o + s), a && (m = m + a), v && (s = "-" + s), e = s + (l && d || "") + m, e;
}
function hr(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Xl(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), a = n.test(e);
  return e = e.replace(/-/g, ""), o && !a && t && (e = "-" + e), e;
}
function Jl(e, t) {
  return new RegExp("(^-)|[0-9]|" + Fi(e), "g");
}
function Ql(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function es(e, t, r) {
  var n;
  t === void 0 && (t = zi(e));
  var o = r.allowNegative, a = r.prefix;
  a === void 0 && (a = "");
  var u = r.suffix;
  u === void 0 && (u = "");
  var c = r.decimalScale, f = t.from, p = t.to, d = p.start, l = p.end, i = hr(r), s = i.allowedDecimalSeparators, m = i.decimalSeparator, v = e[l] === m;
  if (at(e) && (e === a || e === u) && t.lastValue === "")
    return e;
  if (l - d === 1 && s.indexOf(e[d]) !== -1) {
    var h = c === 0 ? "" : m;
    e = e.substring(0, d) + h + e.substring(d + 1, e.length);
  }
  var g = function($, K, j) {
    var k = !1, D = !1;
    a.startsWith("-") ? k = !1 : $.startsWith("--") ? (k = !1, D = !0) : u.startsWith("-") && $.length === u.length ? k = !1 : $[0] === "-" && (k = !0);
    var R = k ? 1 : 0;
    return D && (R = 2), R && ($ = $.substring(R), K -= R, j -= R), { value: $, start: K, end: j, hasNegation: k };
  }, b = g(e, d, l), _ = b.hasNegation;
  n = b, e = n.value, d = n.start, l = n.end;
  var y = g(t.lastValue, f.start, f.end), E = y.start, A = y.end, w = y.value, S = e.substring(d, l);
  e.length && w.length && (E > w.length - u.length || A < a.length) && !(S && u.startsWith(S)) && (e = w);
  var P = 0;
  e.startsWith(a) ? P += a.length : d < a.length && (P = d), e = e.substring(P), l -= P;
  var N = e.length, O = e.length - u.length;
  e.endsWith(u) ? N = O : (l > O || l > e.length - u.length) && (N = l), e = e.substring(0, N), e = Xl(_ ? "-" + e : e, o), e = (e.match(Jl(m)) || []).join("");
  var x = e.indexOf(m);
  e = e.replace(new RegExp(Fi(m), "g"), function($, K) {
    return K === x ? "." : "";
  });
  var T = En(e, o), I = T.beforeDecimal, L = T.afterDecimal, B = T.addNegation;
  return p.end - p.start < f.end - f.start && I === "" && v && !parseFloat(L) && (e = B ? "-" : ""), e;
}
function ts(e, t) {
  var r = t.prefix;
  r === void 0 && (r = "");
  var n = t.suffix;
  n === void 0 && (n = "");
  var o = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = e[0] === "-";
  o.fill(!1, 0, r.length + (a ? 1 : 0));
  var u = e.length;
  return o.fill(!1, u - n.length + 1, u + 1), o;
}
function rs(e) {
  var t = hr(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
  o === void 0 && (o = "");
  var a = e.allowNegative;
  if (a === void 0 && (a = !0), r === n)
    throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + r + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + n + ` (default value for decimalSeparator is .)
     `);
  return o.startsWith("-") && a && (console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` + o + `
      allowNegative: ` + a + `
    `), a = !1), Object.assign(Object.assign({}, e), { allowNegative: a });
}
function ns(e) {
  e = rs(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = He);
  var a = e.onBlur;
  a === void 0 && (a = He);
  var u = e.thousandSeparator, c = e.decimalScale, f = e.fixedDecimalScale, p = e.prefix;
  p === void 0 && (p = "");
  var d = e.defaultValue, l = e.value, i = e.valueIsNumericString, s = e.onValueChange, m = bn(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), v = hr(e), h = v.decimalSeparator, g = v.allowedDecimalSeparators, b = function(B) {
    return ro(B, e);
  }, _ = function(B, $) {
    return es(B, $, e);
  }, y = it(l) ? d : l, E = i ?? Ql(y, p, t);
  it(l) ? it(d) || (E = E || typeof d == "number") : E = E || typeof l == "number";
  var A = function(B) {
    return Vi(B) ? B : (typeof B == "number" && (B = Ui(B)), E && typeof c == "number" ? to(B, c, !!f) : B);
  }, w = Ki(A(l), A(d), !!E, b, _, s), S = w[0], P = S.numAsString, N = S.formattedValue, O = w[1], x = function(B) {
    var $ = B.target, K = B.key, j = $.selectionStart, k = $.selectionEnd, D = $.value;
    if (D === void 0 && (D = ""), (K === "Backspace" || K === "Delete") && k < p.length) {
      B.preventDefault();
      return;
    }
    if (j !== k) {
      o(B);
      return;
    }
    K === "Backspace" && D[0] === "-" && j === p.length + 1 && r && Ze($, 1), c && f && (K === "Backspace" && D[j - 1] === h ? (Ze($, j - 1), B.preventDefault()) : K === "Delete" && D[j] === h && B.preventDefault()), g != null && g.includes(K) && D[j] === h && Ze($, j + 1);
    var R = u === !0 ? "," : u;
    K === "Backspace" && D[j - 1] === R && Ze($, j - 1), K === "Delete" && D[j] === R && Ze($, j + 1), o(B);
  }, T = function(B) {
    var $ = P;
    if ($.match(/\d/g) || ($ = ""), n || ($ = Fl($)), f && c && ($ = to($, c, f)), $ !== P) {
      var K = ro($, e);
      O({
        formattedValue: K,
        value: $,
        floatValue: parseFloat($)
      }, {
        event: B,
        source: Rt.event
      });
    }
    a(B);
  }, I = function(B) {
    return B === h ? !0 : at(B);
  }, L = function(B) {
    var $ = B.currentValue, K = B.lastValue, j = B.formattedValue, k = B.currentValueIndex, D = B.formattedValueIndex, R = $[k], M = j[D], U = Hi(K, $), F = U.to, C = function(q) {
      return _(q).indexOf(".") + p.length;
    };
    return l === 0 && f && c && $[F.start] === h && C($) < k && C(j) > D ? !1 : k >= F.start && k < F.end && g && g.includes(R) && M === h ? !0 : R === M;
  };
  return Object.assign(Object.assign({}, m), {
    value: N,
    valueIsNumericString: !1,
    isValidInputCharacter: I,
    isCharacterSame: L,
    onValueChange: O,
    format: b,
    removeFormatting: _,
    getCaretBoundary: function(B) {
      return ts(B, e);
    },
    onKeyDown: x,
    onBlur: T
  });
}
function os(e) {
  var t = ns(e);
  return ue.createElement(Yi, Object.assign({}, t));
}
function is(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, a = t.patternChar;
  if (a === void 0 && (a = "#"), e === "" && !n)
    return "";
  for (var u = 0, c = r.split(""), f = 0, p = r.length; f < p; f++)
    r[f] === a && (c[f] = e[u] || Wi(o, u), u += 1);
  return c.join("");
}
function as(e, t, r) {
  t === void 0 && (t = zi(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var a = t.from, u = t.to, c = t.lastValue;
  c === void 0 && (c = "");
  var f = function(h) {
    return n[h] === o;
  }, p = function(h, g) {
    for (var b = "", _ = 0; _ < h.length; _++)
      f(g + _) && at(h[_]) && (b += h[_]);
    return b;
  }, d = function(h) {
    return h.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return d(e);
  if ((c === "" || a.end - a.start === c.length) && e.length === n.length) {
    for (var l = "", i = 0; i < e.length; i++)
      if (f(i))
        at(e[i]) && (l += e[i]);
      else if (e[i] !== n[i])
        return d(e);
    return l;
  }
  var s = c.substring(0, a.start), m = e.substring(u.start, u.end), v = c.substring(a.end);
  return "" + p(s, 0) + d(m) + p(v, a.end);
}
function ls(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var a = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), u = 0, c = -1, f = {};
  r.split("").forEach(function(i, s) {
    var m = void 0;
    i === o && (u++, m = Wi(n, u - 1), c === -1 && e[s] === m && (c = s)), f[s] = m;
  });
  for (var p = function(i) {
    return r[i] === o && e[i] !== f[i];
  }, d = 0, l = a.length; d < l; d++)
    a[d] = d === c || p(d) || p(d - 1);
  return a[r.indexOf(o)] = !0, a;
}
function ss(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function us(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function cs(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = He);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var a = e.value, u = e.defaultValue, c = e.valueIsNumericString, f = bn(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  ss(e);
  var p = function(m) {
    return ls(m, e);
  }, d = function(m) {
    var v = m.key, h = m.target, g = h.selectionStart, b = h.selectionEnd, _ = h.value;
    if (g !== b) {
      n(m);
      return;
    }
    var y = g;
    if (v === "Backspace" || v === "Delete") {
      var E = "right";
      if (v === "Backspace") {
        for (; y > 0 && t[y - 1] !== o; )
          y--;
        E = "left";
      } else {
        for (var A = t.length; y < A && t[y] !== o; )
          y++;
        E = "right";
      }
      y = rr(_, y, p(_), E);
    } else t[y] !== o && v !== "ArrowLeft" && v !== "ArrowRight" && (y = rr(_, y + 1, p(_), "right"));
    y !== g && Ze(h, y), n(m);
  }, l = it(a) ? u : a, i = c ?? us(l, t), s = Object.assign(Object.assign({}, e), { valueIsNumericString: i });
  return Object.assign(Object.assign({}, f), {
    value: a,
    defaultValue: u,
    valueIsNumericString: i,
    inputMode: r,
    format: function(m) {
      return is(m, s);
    },
    removeFormatting: function(m, v) {
      return as(m, v, s);
    },
    getCaretBoundary: p,
    onKeyDown: d
  });
}
function fs(e) {
  var t = cs(e);
  return ue.createElement(Yi, Object.assign({}, t));
}
const ds = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, U0 = ({
  type: e,
  field: t,
  label: r,
  fieldState: n,
  postfix: o,
  labelClassName: a,
  errorPlace: u = "right",
  parentClassName: c,
  className: f,
  formState: p,
  numberWrapperClassname: d,
  format: l,
  decimalScale: i = 1,
  ...s
}) => {
  var v, h, g;
  const m = "!border-danger";
  return /* @__PURE__ */ Ae("label", { className: "relative", children: [
    r && /* @__PURE__ */ oe("span", { className: `text-primary  ${a}`, children: r }),
    l ? /* @__PURE__ */ oe(
      fs,
      {
        onValueChange: (b) => {
          var _;
          t == null || t.onChange((_ = b.value.replace("_", "")) == null ? void 0 : _.toString());
        },
        value: (v = t == null ? void 0 : t.value) == null ? void 0 : v.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        style: { fontSize: "16px" },
        className: `${n != null && n.error ? m : ""} w-full border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${f}`,
        format: l,
        ...s
      }
    ) : e === "number" ? /* @__PURE__ */ Ae(
      "div",
      {
        className: `${n != null && n.error ? m : ""} ${c} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ oe(
            os,
            {
              decimalScale: i,
              style: { fontSize: "16px" },
              onValueChange: (b) => {
                var _;
                return t == null ? void 0 : t.onChange((_ = b.value.replace("_", "")) == null ? void 0 : _.toString());
              },
              value: (h = t == null ? void 0 : t.value) == null ? void 0 : h.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${f}`,
              ...s,
              ...ds.number
            }
          ),
          o ? /* @__PURE__ */ oe("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: o }) : null
        ]
      }
    ) : /* @__PURE__ */ oe(
      "input",
      {
        ...t,
        ...s,
        type: e,
        style: { fontSize: "16px" },
        className: `${n != null && n.error ? m : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${f}`
      }
    ),
    /* @__PURE__ */ oe("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (n == null ? void 0 : n.error) && ((g = Object.keys(n == null ? void 0 : n.error)) == null ? void 0 : g.length) && /* @__PURE__ */ oe(pr, { error: n == null ? void 0 : n.error }) })
  ] });
}, Zi = ({
  children: e,
  className: t
}) => /* @__PURE__ */ oe("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), H0 = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Re(null);
  return /* @__PURE__ */ oe(Zi, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ oe("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((a) => /* @__PURE__ */ Ae(
    "div",
    {
      onClick: () => r(a.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === a.value && n}`,
      children: [
        /* @__PURE__ */ oe("span", { className: " text-sm text-black font-normal transition-all duration-300", children: a.label }),
        a.row && /* @__PURE__ */ oe("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: a.row })
      ]
    },
    a.value
  )) }) });
}, _n = "-", ps = (e) => {
  const t = vs(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (u) => {
      const c = u.split(_n);
      return c[0] === "" && c.length !== 1 && c.shift(), Xi(c, t) || hs(u);
    },
    getConflictingClassGroupIds: (u, c) => {
      const f = r[u] || [];
      return c && n[u] ? [...f, ...n[u]] : f;
    }
  };
}, Xi = (e, t) => {
  var u;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Xi(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(_n);
  return (u = t.validators.find(({
    validator: c
  }) => c(a))) == null ? void 0 : u.classGroupId;
}, no = /^\[(.+)\]$/, hs = (e) => {
  if (no.test(e)) {
    const t = no.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, vs = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ms(Object.entries(e.classGroups), r).forEach(([a, u]) => {
    Qr(u, n, a, t);
  }), n;
}, Qr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : oo(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (gs(o)) {
        Qr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, u]) => {
      Qr(u, oo(t, a), r, n);
    });
  });
}, oo = (e, t) => {
  let r = e;
  return t.split(_n).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, gs = (e) => e.isThemeGetter, ms = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([u, c]) => [t + u, c])) : a);
  return [r, o];
}) : e, ys = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, u) => {
    r.set(a, u), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let u = r.get(a);
      if (u !== void 0)
        return u;
      if ((u = n.get(a)) !== void 0)
        return o(a, u), u;
    },
    set(a, u) {
      r.has(a) ? r.set(a, u) : o(a, u);
    }
  };
}, Ji = "!", bs = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length, u = (c) => {
    const f = [];
    let p = 0, d = 0, l;
    for (let h = 0; h < c.length; h++) {
      let g = c[h];
      if (p === 0) {
        if (g === o && (n || c.slice(h, h + a) === t)) {
          f.push(c.slice(d, h)), d = h + a;
          continue;
        }
        if (g === "/") {
          l = h;
          continue;
        }
      }
      g === "[" ? p++ : g === "]" && p--;
    }
    const i = f.length === 0 ? c : c.substring(d), s = i.startsWith(Ji), m = s ? i.substring(1) : i, v = l && l > d ? l - d : void 0;
    return {
      modifiers: f,
      hasImportantModifier: s,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  return r ? (c) => r({
    className: c,
    parseClassName: u
  }) : u;
}, Es = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, _s = (e) => ({
  cache: ys(e.cacheSize),
  parseClassName: bs(e),
  ...ps(e)
}), Os = /\s+/, xs = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], u = e.trim().split(Os);
  let c = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const p = u[f], {
      modifiers: d,
      hasImportantModifier: l,
      baseClassName: i,
      maybePostfixModifierPosition: s
    } = r(p);
    let m = !!s, v = n(m ? i.substring(0, s) : i);
    if (!v) {
      if (!m) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (v = n(i), !v) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      m = !1;
    }
    const h = Es(d).join(":"), g = l ? h + Ji : h, b = g + v;
    if (a.includes(b))
      continue;
    a.push(b);
    const _ = o(v, m);
    for (let y = 0; y < _.length; ++y) {
      const E = _[y];
      a.push(g + E);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function ws() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Qi(t)) && (n && (n += " "), n += r);
  return n;
}
const Qi = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Qi(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Ns(e, ...t) {
  let r, n, o, a = u;
  function u(f) {
    const p = t.reduce((d, l) => l(d), e());
    return r = _s(p), n = r.cache.get, o = r.cache.set, a = c, c(f);
  }
  function c(f) {
    const p = n(f);
    if (p)
      return p;
    const d = xs(f, r);
    return o(f, d), d;
  }
  return function() {
    return a(ws.apply(null, arguments));
  };
}
const Ee = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, ea = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ss = /^\d+\/\d+$/, As = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ds = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ts = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ps = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Is = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ue = (e) => ut(e) || As.has(e) || Ss.test(e), Ke = (e) => pt(e, "length", qs), ut = (e) => !!e && !Number.isNaN(Number(e)), Tr = (e) => pt(e, "number", ut), Ot = (e) => !!e && Number.isInteger(Number(e)), Rs = (e) => e.endsWith("%") && ut(e.slice(0, -1)), ce = (e) => ea.test(e), Ye = (e) => Ds.test(e), ks = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ls = (e) => pt(e, ks, ta), Ms = (e) => pt(e, "position", ta), Bs = /* @__PURE__ */ new Set(["image", "url"]), $s = (e) => pt(e, Bs, Fs), js = (e) => pt(e, "", Vs), xt = () => !0, pt = (e, t, r) => {
  const n = ea.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, qs = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ts.test(e) && !Ps.test(e)
), ta = () => !1, Vs = (e) => Is.test(e), Fs = (e) => Cs.test(e), Gs = () => {
  const e = Ee("colors"), t = Ee("spacing"), r = Ee("blur"), n = Ee("brightness"), o = Ee("borderColor"), a = Ee("borderRadius"), u = Ee("borderSpacing"), c = Ee("borderWidth"), f = Ee("contrast"), p = Ee("grayscale"), d = Ee("hueRotate"), l = Ee("invert"), i = Ee("gap"), s = Ee("gradientColorStops"), m = Ee("gradientColorStopPositions"), v = Ee("inset"), h = Ee("margin"), g = Ee("opacity"), b = Ee("padding"), _ = Ee("saturate"), y = Ee("scale"), E = Ee("sepia"), A = Ee("skew"), w = Ee("space"), S = Ee("translate"), P = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", ce, t], x = () => [ce, t], T = () => ["", Ue, Ke], I = () => ["auto", ut, ce], L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", ce], k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], D = () => [ut, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [xt],
      spacing: [Ue, Ke],
      blur: ["none", "", Ye, ce],
      brightness: D(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ye, ce],
      borderSpacing: x(),
      borderWidth: T(),
      contrast: D(),
      grayscale: j(),
      hueRotate: D(),
      invert: j(),
      gap: x(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Rs, Ke],
      inset: O(),
      margin: O(),
      opacity: D(),
      padding: x(),
      saturate: D(),
      scale: D(),
      sepia: j(),
      skew: D(),
      space: x(),
      translate: x()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ce]
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
        columns: [Ye]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": k()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": k()
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
        object: [...L(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        z: ["auto", Ot, ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O()
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
        flex: ["1", "auto", "initial", "none", ce]
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
        order: ["first", "last", "none", Ot, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [xt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ot, ce]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [xt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ot, ce]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [i]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [i]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [i]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
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
        content: ["normal", ...K(), "baseline"]
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
        "place-content": [...K(), "baseline"]
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
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [w]
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
        "space-y": [w]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ce, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ce, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ye]
        }, Ye]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ce, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ye, Ke]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Tr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xt]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ut, Tr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ue, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        "placeholder-opacity": [g]
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
        "text-opacity": [g]
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
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ue, Ke]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ue, ce]
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
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        "bg-opacity": [g]
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
        bg: [...L(), Ms]
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
        bg: ["auto", "cover", "contain", Ls]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $s]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [s]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [s]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [s]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [g]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
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
        "divide-y": [c]
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
        "divide-opacity": [g]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: B()
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
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
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
        outline: ["", ...B()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ue, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ue, Ke]
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
        "ring-opacity": [g]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ue, Ke]
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
        shadow: ["", "inner", "none", Ye, js]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [xt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
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
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ye, ce]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
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
        saturate: [_]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
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
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
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
        "backdrop-opacity": [g]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: D()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: D()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        rotate: [Ot, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [S]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [S]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
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
        stroke: [Ue, Ke, Tr]
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
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}, Us = /* @__PURE__ */ Ns(Gs);
function ra(e, t) {
  const [r, n] = Re(e);
  return Se(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const z0 = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, a] = Re(!1), [u, c] = Re(""), f = ra(u, 100), p = he(null);
  Se(() => {
    const l = (i) => {
      p.current && !p.current.contains(i.target) && a(!1);
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, []);
  const d = (l) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(l)) && (t == null ? void 0 : t.value.filter((i) => i !== l)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, l] || [l]
    );
  };
  return /* @__PURE__ */ Ae("div", { ref: p, className: "relative", children: [
    /* @__PURE__ */ Ae("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ oe(
        Ct,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ oe(
        "input",
        {
          ...n,
          ref: p,
          className: Us(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && u || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (l) => {
              var i;
              return (i = e.find((s) => s.value === l)) == null ? void 0 : i.label;
            }
          ).join(", ")) || "",
          onFocus: () => a(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (l) => c(l.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ oe("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(f.toLowerCase())
    ).map((l) => {
      var i;
      return /* @__PURE__ */ oe(
        "li",
        {
          onClick: () => d(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ Ae("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ oe(Ct, { name: l.icon }),
            /* @__PURE__ */ oe(
              "button",
              {
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((i = t == null ? void 0 : t.value) == null ? void 0 : i.includes(l.value)) && "text-primary"}`,
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
}, W0 = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [a, u] = Re(r), c = ra(a, 300);
  return Se(() => {
    t == null || t(c);
  }, [c]), /* @__PURE__ */ Ae("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ oe(
      Ct,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ oe(
      "input",
      {
        placeholder: e,
        onChange: (f) => u(f.target.value),
        value: a,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${n}`
      }
    )
  ] });
}, K0 = ({
  placeholder: e,
  options: t,
  className: r,
  field: n,
  fieldState: o,
  labelClassName: a,
  parentClassName: u,
  formState: c,
  label: f,
  ...p
}) => {
  var l;
  return /* @__PURE__ */ Ae("label", { className: "relative", children: [
    f && /* @__PURE__ */ oe("span", { className: `text-primary  ${a}`, children: f }),
    /* @__PURE__ */ oe(
      "div",
      {
        className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${u}`,
        children: /* @__PURE__ */ Ae(
          "select",
          {
            ...n,
            ...p,
            className: `w-full ${o != null && o.error ? "!border-danger" : ""} cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
            children: [
              /* @__PURE__ */ oe("option", { value: "", selected: !0, children: e }),
              t == null ? void 0 : t.map((i, s) => /* @__PURE__ */ oe("option", { value: i.value, className: "text-black", children: i.label }, s))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ oe("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((l = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : l.length) && /* @__PURE__ */ oe(pr, { error: o == null ? void 0 : o.error }) })
  ] });
};
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(e);
}
function Hs(e, t) {
  if (kt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (kt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zs(e) {
  var t = Hs(e, "string");
  return kt(t) == "symbol" ? t : t + "";
}
function Ws(e, t, r) {
  return (t = zs(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function io(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? io(Object(r), !0).forEach(function(n) {
      Ws(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : io(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ce(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var lo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Pr = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, so = {
  INIT: "@@redux/INIT" + Pr(),
  REPLACE: "@@redux/REPLACE" + Pr(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Pr();
  }
};
function Ks(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ys(e) {
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
  if (Js(e)) return "date";
  if (Xs(e)) return "error";
  var r = Zs(e);
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
function Zs(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Xs(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Js(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function rt(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Ys(e)), t;
}
function na(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ce(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ce(1) : "Expected the enhancer to be a function. Instead, received: '" + rt(r) + "'");
    return r(na)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ce(2) : "Expected the root reducer to be a function. Instead, received: '" + rt(e) + "'");
  var o = e, a = t, u = [], c = u, f = !1;
  function p() {
    c === u && (c = u.slice());
  }
  function d() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ce(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return a;
  }
  function l(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ce(4) : "Expected the listener to be a function. Instead, received: '" + rt(v) + "'");
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ce(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var h = !0;
    return p(), c.push(v), function() {
      if (h) {
        if (f)
          throw new Error(process.env.NODE_ENV === "production" ? Ce(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        h = !1, p();
        var b = c.indexOf(v);
        c.splice(b, 1), u = null;
      }
    };
  }
  function i(v) {
    if (!Ks(v))
      throw new Error(process.env.NODE_ENV === "production" ? Ce(7) : "Actions must be plain objects. Instead, the actual type was: '" + rt(v) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof v.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ce(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ce(9) : "Reducers may not dispatch actions.");
    try {
      f = !0, a = o(a, v);
    } finally {
      f = !1;
    }
    for (var h = u = c, g = 0; g < h.length; g++) {
      var b = h[g];
      b();
    }
    return v;
  }
  function s(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ce(10) : "Expected the nextReducer to be a function. Instead, received: '" + rt(v));
    o = v, i({
      type: so.REPLACE
    });
  }
  function m() {
    var v, h = l;
    return v = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(b) {
        if (typeof b != "object" || b === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ce(11) : "Expected the observer to be an object. Instead, received: '" + rt(b) + "'");
        function _() {
          b.next && b.next(d());
        }
        _();
        var y = h(_);
        return {
          unsubscribe: y
        };
      }
    }, v[lo] = function() {
      return this;
    }, v;
  }
  return i({
    type: so.INIT
  }), n = {
    dispatch: i,
    subscribe: l,
    getState: d,
    replaceReducer: s
  }, n[lo] = m, n;
}
function uo(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function co(e, t) {
  if (typeof e == "function")
    return uo(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Ce(16) : "bindActionCreators expected an object or a function, but instead received: '" + rt(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = uo(o, t));
  }
  return r;
}
function oa() {
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
function Qs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), a = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Ce(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, u = {
        getState: o.getState,
        dispatch: function() {
          return a.apply(void 0, arguments);
        }
      }, c = t.map(function(f) {
        return f(u);
      });
      return a = oa.apply(void 0, c)(o.dispatch), ao(ao({}, o), {}, {
        dispatch: a
      });
    };
  };
}
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ia(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var en = { exports: {} }, Ir = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function eu() {
  if (fo) return Ir;
  fo = 1;
  var e = ue;
  function t(l, i) {
    return l === i && (l !== 0 || 1 / l === 1 / i) || l !== l && i !== i;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, u = e.useDebugValue;
  function c(l, i) {
    var s = i(), m = n({ inst: { value: s, getSnapshot: i } }), v = m[0].inst, h = m[1];
    return a(
      function() {
        v.value = s, v.getSnapshot = i, f(v) && h({ inst: v });
      },
      [l, s, i]
    ), o(
      function() {
        return f(v) && h({ inst: v }), l(function() {
          f(v) && h({ inst: v });
        });
      },
      [l]
    ), u(s), s;
  }
  function f(l) {
    var i = l.getSnapshot;
    l = l.value;
    try {
      var s = i();
      return !r(l, s);
    } catch {
      return !0;
    }
  }
  function p(l, i) {
    return i();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : c;
  return Ir.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Ir;
}
var Cr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function tu() {
  return po || (po = 1, process.env.NODE_ENV !== "production" && function() {
    function e(s, m) {
      return s === m && (s !== 0 || 1 / s === 1 / m) || s !== s && m !== m;
    }
    function t(s, m) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var v = m();
      if (!l) {
        var h = m();
        a(v, h) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      h = u({
        inst: { value: v, getSnapshot: m }
      });
      var g = h[0].inst, b = h[1];
      return f(
        function() {
          g.value = v, g.getSnapshot = m, r(g) && b({ inst: g });
        },
        [s, v, m]
      ), c(
        function() {
          return r(g) && b({ inst: g }), s(function() {
            r(g) && b({ inst: g });
          });
        },
        [s]
      ), p(v), v;
    }
    function r(s) {
      var m = s.getSnapshot;
      s = s.value;
      try {
        var v = m();
        return !a(s, v);
      } catch {
        return !0;
      }
    }
    function n(s, m) {
      return m();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = ue, a = typeof Object.is == "function" ? Object.is : e, u = o.useState, c = o.useEffect, f = o.useLayoutEffect, p = o.useDebugValue, d = !1, l = !1, i = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Cr.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : i, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Cr;
}
process.env.NODE_ENV === "production" ? en.exports = eu() : en.exports = tu();
var On = en.exports, Rr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function ru() {
  if (ho) return Rr;
  ho = 1;
  var e = ue, t = On;
  function r(p, d) {
    return p === d && (p !== 0 || 1 / p === 1 / d) || p !== p && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, a = e.useRef, u = e.useEffect, c = e.useMemo, f = e.useDebugValue;
  return Rr.useSyncExternalStoreWithSelector = function(p, d, l, i, s) {
    var m = a(null);
    if (m.current === null) {
      var v = { hasValue: !1, value: null };
      m.current = v;
    } else v = m.current;
    m = c(
      function() {
        function g(A) {
          if (!b) {
            if (b = !0, _ = A, A = i(A), s !== void 0 && v.hasValue) {
              var w = v.value;
              if (s(w, A))
                return y = w;
            }
            return y = A;
          }
          if (w = y, n(_, A)) return w;
          var S = i(A);
          return s !== void 0 && s(w, S) ? (_ = A, w) : (_ = A, y = S);
        }
        var b = !1, _, y, E = l === void 0 ? null : l;
        return [
          function() {
            return g(d());
          },
          E === null ? void 0 : function() {
            return g(E());
          }
        ];
      },
      [d, l, i, s]
    );
    var h = o(p, m[0], m[1]);
    return u(
      function() {
        v.hasValue = !0, v.value = h;
      },
      [h]
    ), f(h), h;
  }, Rr;
}
var kr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function nu() {
  return vo || (vo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p, d) {
      return p === d && (p !== 0 || 1 / p === 1 / d) || p !== p && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = ue, r = On, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, a = t.useRef, u = t.useEffect, c = t.useMemo, f = t.useDebugValue;
    kr.useSyncExternalStoreWithSelector = function(p, d, l, i, s) {
      var m = a(null);
      if (m.current === null) {
        var v = { hasValue: !1, value: null };
        m.current = v;
      } else v = m.current;
      m = c(
        function() {
          function g(A) {
            if (!b) {
              if (b = !0, _ = A, A = i(A), s !== void 0 && v.hasValue) {
                var w = v.value;
                if (s(w, A))
                  return y = w;
              }
              return y = A;
            }
            if (w = y, n(_, A))
              return w;
            var S = i(A);
            return s !== void 0 && s(w, S) ? (_ = A, w) : (_ = A, y = S);
          }
          var b = !1, _, y, E = l === void 0 ? null : l;
          return [
            function() {
              return g(d());
            },
            E === null ? void 0 : function() {
              return g(E());
            }
          ];
        },
        [d, l, i, s]
      );
      var h = o(p, m[0], m[1]);
      return u(
        function() {
          v.hasValue = !0, v.value = h;
        },
        [h]
      ), f(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), kr;
}
process.env.NODE_ENV === "production" ? ru() : nu();
function ou(e) {
  e();
}
let aa = ou;
const iu = (e) => aa = e, au = () => aa, go = Symbol.for("react-redux-context"), mo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function lu() {
  var e;
  if (!de.createContext) return {};
  const t = (e = mo[go]) != null ? e : mo[go] = /* @__PURE__ */ new Map();
  let r = t.get(de.createContext);
  return r || (r = de.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(de.createContext, r)), r;
}
const la = /* @__PURE__ */ lu(), su = () => {
  throw new Error("uSES not initialized!");
};
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xe.apply(null, arguments);
}
function sa(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var tn = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function uu() {
  if (yo) return ve;
  yo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, i = e ? Symbol.for("react.suspense_list") : 60120, s = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function _(E) {
    if (typeof E == "object" && E !== null) {
      var A = E.$$typeof;
      switch (A) {
        case t:
          switch (E = E.type, E) {
            case f:
            case p:
            case n:
            case a:
            case o:
            case l:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case c:
                case d:
                case m:
                case s:
                case u:
                  return E;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function y(E) {
    return _(E) === p;
  }
  return ve.AsyncMode = f, ve.ConcurrentMode = p, ve.ContextConsumer = c, ve.ContextProvider = u, ve.Element = t, ve.ForwardRef = d, ve.Fragment = n, ve.Lazy = m, ve.Memo = s, ve.Portal = r, ve.Profiler = a, ve.StrictMode = o, ve.Suspense = l, ve.isAsyncMode = function(E) {
    return y(E) || _(E) === f;
  }, ve.isConcurrentMode = y, ve.isContextConsumer = function(E) {
    return _(E) === c;
  }, ve.isContextProvider = function(E) {
    return _(E) === u;
  }, ve.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, ve.isForwardRef = function(E) {
    return _(E) === d;
  }, ve.isFragment = function(E) {
    return _(E) === n;
  }, ve.isLazy = function(E) {
    return _(E) === m;
  }, ve.isMemo = function(E) {
    return _(E) === s;
  }, ve.isPortal = function(E) {
    return _(E) === r;
  }, ve.isProfiler = function(E) {
    return _(E) === a;
  }, ve.isStrictMode = function(E) {
    return _(E) === o;
  }, ve.isSuspense = function(E) {
    return _(E) === l;
  }, ve.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === p || E === a || E === o || E === l || E === i || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === s || E.$$typeof === u || E.$$typeof === c || E.$$typeof === d || E.$$typeof === h || E.$$typeof === g || E.$$typeof === b || E.$$typeof === v);
  }, ve.typeOf = _, ve;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function cu() {
  return bo || (bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, i = e ? Symbol.for("react.suspense_list") : 60120, s = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function _(X) {
      return typeof X == "string" || typeof X == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      X === n || X === p || X === a || X === o || X === l || X === i || typeof X == "object" && X !== null && (X.$$typeof === m || X.$$typeof === s || X.$$typeof === u || X.$$typeof === c || X.$$typeof === d || X.$$typeof === h || X.$$typeof === g || X.$$typeof === b || X.$$typeof === v);
    }
    function y(X) {
      if (typeof X == "object" && X !== null) {
        var ae = X.$$typeof;
        switch (ae) {
          case t:
            var Q = X.type;
            switch (Q) {
              case f:
              case p:
              case n:
              case a:
              case o:
              case l:
                return Q;
              default:
                var fe = Q && Q.$$typeof;
                switch (fe) {
                  case c:
                  case d:
                  case m:
                  case s:
                  case u:
                    return fe;
                  default:
                    return ae;
                }
            }
          case r:
            return ae;
        }
      }
    }
    var E = f, A = p, w = c, S = u, P = t, N = d, O = n, x = m, T = s, I = r, L = a, B = o, $ = l, K = !1;
    function j(X) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(X) || y(X) === f;
    }
    function k(X) {
      return y(X) === p;
    }
    function D(X) {
      return y(X) === c;
    }
    function R(X) {
      return y(X) === u;
    }
    function M(X) {
      return typeof X == "object" && X !== null && X.$$typeof === t;
    }
    function U(X) {
      return y(X) === d;
    }
    function F(X) {
      return y(X) === n;
    }
    function C(X) {
      return y(X) === m;
    }
    function q(X) {
      return y(X) === s;
    }
    function W(X) {
      return y(X) === r;
    }
    function z(X) {
      return y(X) === a;
    }
    function Z(X) {
      return y(X) === o;
    }
    function re(X) {
      return y(X) === l;
    }
    ge.AsyncMode = E, ge.ConcurrentMode = A, ge.ContextConsumer = w, ge.ContextProvider = S, ge.Element = P, ge.ForwardRef = N, ge.Fragment = O, ge.Lazy = x, ge.Memo = T, ge.Portal = I, ge.Profiler = L, ge.StrictMode = B, ge.Suspense = $, ge.isAsyncMode = j, ge.isConcurrentMode = k, ge.isContextConsumer = D, ge.isContextProvider = R, ge.isElement = M, ge.isForwardRef = U, ge.isFragment = F, ge.isLazy = C, ge.isMemo = q, ge.isPortal = W, ge.isProfiler = z, ge.isStrictMode = Z, ge.isSuspense = re, ge.isValidElementType = _, ge.typeOf = y;
  }()), ge;
}
process.env.NODE_ENV === "production" ? tn.exports = uu() : tn.exports = cu();
var fu = tn.exports, xn = fu, du = {
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
}, pu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, hu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ua = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, wn = {};
wn[xn.ForwardRef] = hu;
wn[xn.Memo] = ua;
function Eo(e) {
  return xn.isMemo(e) ? ua : wn[e.$$typeof] || du;
}
var vu = Object.defineProperty, gu = Object.getOwnPropertyNames, _o = Object.getOwnPropertySymbols, mu = Object.getOwnPropertyDescriptor, yu = Object.getPrototypeOf, Oo = Object.prototype;
function ca(e, t, r) {
  if (typeof t != "string") {
    if (Oo) {
      var n = yu(t);
      n && n !== Oo && ca(e, n, r);
    }
    var o = gu(t);
    _o && (o = o.concat(_o(t)));
    for (var a = Eo(e), u = Eo(t), c = 0; c < o.length; ++c) {
      var f = o[c];
      if (!pu[f] && !(r && r[f]) && !(u && u[f]) && !(a && a[f])) {
        var p = mu(t, f);
        try {
          vu(e, f, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var bu = ca;
const xo = /* @__PURE__ */ ia(bu);
var rn = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function Eu() {
  if (wo) return me;
  wo = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), i = Symbol.for("react.lazy"), s = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function v(h) {
    if (typeof h == "object" && h !== null) {
      var g = h.$$typeof;
      switch (g) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case p:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case u:
                case f:
                case i:
                case l:
                case a:
                  return h;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return me.ContextConsumer = u, me.ContextProvider = a, me.Element = e, me.ForwardRef = f, me.Fragment = r, me.Lazy = i, me.Memo = l, me.Portal = t, me.Profiler = o, me.StrictMode = n, me.Suspense = p, me.SuspenseList = d, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(h) {
    return v(h) === u;
  }, me.isContextProvider = function(h) {
    return v(h) === a;
  }, me.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, me.isForwardRef = function(h) {
    return v(h) === f;
  }, me.isFragment = function(h) {
    return v(h) === r;
  }, me.isLazy = function(h) {
    return v(h) === i;
  }, me.isMemo = function(h) {
    return v(h) === l;
  }, me.isPortal = function(h) {
    return v(h) === t;
  }, me.isProfiler = function(h) {
    return v(h) === o;
  }, me.isStrictMode = function(h) {
    return v(h) === n;
  }, me.isSuspense = function(h) {
    return v(h) === p;
  }, me.isSuspenseList = function(h) {
    return v(h) === d;
  }, me.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === p || h === d || h === s || typeof h == "object" && h !== null && (h.$$typeof === i || h.$$typeof === l || h.$$typeof === a || h.$$typeof === u || h.$$typeof === f || h.$$typeof === m || h.getModuleId !== void 0);
  }, me.typeOf = v, me;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var No;
function _u() {
  return No || (No = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), i = Symbol.for("react.lazy"), s = Symbol.for("react.offscreen"), m = !1, v = !1, h = !1, g = !1, b = !1, _;
    _ = Symbol.for("react.module.reference");
    function y(Q) {
      return !!(typeof Q == "string" || typeof Q == "function" || Q === r || Q === o || b || Q === n || Q === p || Q === d || g || Q === s || m || v || h || typeof Q == "object" && Q !== null && (Q.$$typeof === i || Q.$$typeof === l || Q.$$typeof === a || Q.$$typeof === u || Q.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Q.$$typeof === _ || Q.getModuleId !== void 0));
    }
    function E(Q) {
      if (typeof Q == "object" && Q !== null) {
        var fe = Q.$$typeof;
        switch (fe) {
          case e:
            var xe = Q.type;
            switch (xe) {
              case r:
              case o:
              case n:
              case p:
              case d:
                return xe;
              default:
                var ee = xe && xe.$$typeof;
                switch (ee) {
                  case c:
                  case u:
                  case f:
                  case i:
                  case l:
                  case a:
                    return ee;
                  default:
                    return fe;
                }
            }
          case t:
            return fe;
        }
      }
    }
    var A = u, w = a, S = e, P = f, N = r, O = i, x = l, T = t, I = o, L = n, B = p, $ = d, K = !1, j = !1;
    function k(Q) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function D(Q) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(Q) {
      return E(Q) === u;
    }
    function M(Q) {
      return E(Q) === a;
    }
    function U(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === e;
    }
    function F(Q) {
      return E(Q) === f;
    }
    function C(Q) {
      return E(Q) === r;
    }
    function q(Q) {
      return E(Q) === i;
    }
    function W(Q) {
      return E(Q) === l;
    }
    function z(Q) {
      return E(Q) === t;
    }
    function Z(Q) {
      return E(Q) === o;
    }
    function re(Q) {
      return E(Q) === n;
    }
    function X(Q) {
      return E(Q) === p;
    }
    function ae(Q) {
      return E(Q) === d;
    }
    ye.ContextConsumer = A, ye.ContextProvider = w, ye.Element = S, ye.ForwardRef = P, ye.Fragment = N, ye.Lazy = O, ye.Memo = x, ye.Portal = T, ye.Profiler = I, ye.StrictMode = L, ye.Suspense = B, ye.SuspenseList = $, ye.isAsyncMode = k, ye.isConcurrentMode = D, ye.isContextConsumer = R, ye.isContextProvider = M, ye.isElement = U, ye.isForwardRef = F, ye.isFragment = C, ye.isLazy = q, ye.isMemo = W, ye.isPortal = z, ye.isProfiler = Z, ye.isStrictMode = re, ye.isSuspense = X, ye.isSuspenseList = ae, ye.isValidElementType = y, ye.typeOf = E;
  }()), ye;
}
process.env.NODE_ENV === "production" ? rn.exports = Eu() : rn.exports = _u();
var So = rn.exports;
function Nn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Lr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Nn(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Ou(e, t, r) {
  Lr(e, "mapStateToProps"), Lr(t, "mapDispatchToProps"), Lr(r, "mergeProps");
}
const xu = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function wu(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: a,
  areStatePropsEqual: u
}) {
  let c = !1, f, p, d, l, i;
  function s(b, _) {
    return f = b, p = _, d = e(f, p), l = t(n, p), i = r(d, l, p), c = !0, i;
  }
  function m() {
    return d = e(f, p), t.dependsOnOwnProps && (l = t(n, p)), i = r(d, l, p), i;
  }
  function v() {
    return e.dependsOnOwnProps && (d = e(f, p)), t.dependsOnOwnProps && (l = t(n, p)), i = r(d, l, p), i;
  }
  function h() {
    const b = e(f, p), _ = !u(b, d);
    return d = b, _ && (i = r(d, l, p)), i;
  }
  function g(b, _) {
    const y = !a(_, p), E = !o(b, f, _, p);
    return f = b, p = _, y && E ? m() : y ? v() : E ? h() : i;
  }
  return function(_, y) {
    return c ? g(_, y) : s(_, y);
  };
}
function Nu(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, a = sa(t, xu);
  const u = r(e, a), c = n(e, a), f = o(e, a);
  return process.env.NODE_ENV !== "production" && Ou(u, c, f), wu(u, c, f, e, a);
}
function Su(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...a) => t(o(...a)));
  }
  return r;
}
function Au(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function fa(e, t, r) {
  Au(e) || Nn(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function nn(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Ao(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function da(e, t) {
  return function(n, {
    displayName: o
  }) {
    const a = function(c, f) {
      return a.dependsOnOwnProps ? a.mapToProps(c, f) : a.mapToProps(c, void 0);
    };
    return a.dependsOnOwnProps = !0, a.mapToProps = function(c, f) {
      a.mapToProps = e, a.dependsOnOwnProps = Ao(e);
      let p = a(c, f);
      return typeof p == "function" && (a.mapToProps = p, a.dependsOnOwnProps = Ao(p), p = a(c, f)), process.env.NODE_ENV !== "production" && fa(p, o, t), p;
    }, a;
  };
}
function Sn(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Du(e) {
  return e && typeof e == "object" ? nn((t) => (
    // @ts-ignore
    Su(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    da(e, "mapDispatchToProps")
  ) : Sn(e, "mapDispatchToProps") : nn((t) => ({
    dispatch: t
  }));
}
function Tu(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    da(e, "mapStateToProps")
  ) : Sn(e, "mapStateToProps") : nn(() => ({}));
}
function Pu(e, t, r) {
  return Xe({}, r, e, t);
}
function Iu(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let a = !1, u;
    return function(f, p, d) {
      const l = e(f, p, d);
      return a ? o(l, u) || (u = l) : (a = !0, u = l, process.env.NODE_ENV !== "production" && fa(u, n, "mergeProps")), u;
    };
  };
}
function Cu(e) {
  return e ? typeof e == "function" ? Iu(e) : Sn(e, "mergeProps") : () => Pu;
}
function Ru() {
  const e = au();
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
      let o = !0, a = r = {
        callback: n,
        next: null,
        prev: r
      };
      return a.prev ? a.prev.next = a : t = a, function() {
        !o || t === null || (o = !1, a.next ? a.next.prev = a.prev : r = a.prev, a.prev ? a.prev.next = a.next : t = a.next);
      };
    }
  };
}
const Do = {
  notify() {
  },
  get: () => []
};
function pa(e, t) {
  let r, n = Do, o = 0, a = !1;
  function u(v) {
    d();
    const h = n.subscribe(v);
    let g = !1;
    return () => {
      g || (g = !0, h(), l());
    };
  }
  function c() {
    n.notify();
  }
  function f() {
    m.onStateChange && m.onStateChange();
  }
  function p() {
    return a;
  }
  function d() {
    o++, r || (r = t ? t.addNestedSub(f) : e.subscribe(f), n = Ru());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Do);
  }
  function i() {
    a || (a = !0, d());
  }
  function s() {
    a && (a = !1, l());
  }
  const m = {
    addNestedSub: u,
    notifyNestedSubs: c,
    handleChangeWrapper: f,
    isSubscribed: p,
    trySubscribe: i,
    tryUnsubscribe: s,
    getListeners: () => n
  };
  return m;
}
const ku = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", nr = ku ? de.useLayoutEffect : de.useEffect;
function To(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Mr(e, t) {
  if (To(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !To(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const Lu = ["reactReduxForwardedRef"];
let ha = su;
const Mu = (e) => {
  ha = e;
}, Bu = [null, null], $u = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function ju(e, t, r) {
  nr(() => e(...t), r);
}
function qu(e, t, r, n, o, a) {
  e.current = n, r.current = !1, o.current && (o.current = null, a());
}
function Vu(e, t, r, n, o, a, u, c, f, p, d) {
  if (!e) return () => {
  };
  let l = !1, i = null;
  const s = () => {
    if (l || !c.current)
      return;
    const v = t.getState();
    let h, g;
    try {
      h = n(v, o.current);
    } catch (b) {
      g = b, i = b;
    }
    g || (i = null), h === a.current ? u.current || p() : (a.current = h, f.current = h, u.current = !0, d());
  };
  return r.onStateChange = s, r.trySubscribe(), s(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, i)
      throw i;
  };
}
function Fu(e, t) {
  return e === t;
}
let Po = !1;
function va(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Fu,
  areOwnPropsEqual: a = Mr,
  areStatePropsEqual: u = Mr,
  areMergedPropsEqual: c = Mr,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: f = !1,
  // the context consumer to use
  context: p = la
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Po && (Po = !0, Nn('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const d = p, l = Tu(e), i = Du(t), s = Cu(r), m = !!e;
  return (h) => {
    if (process.env.NODE_ENV !== "production" && !So.isValidElementType(h))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${$u(h)}`);
    const g = h.displayName || h.name || "Component", b = `Connect(${g})`, _ = {
      shouldHandleStateChanges: m,
      displayName: b,
      wrappedComponentName: g,
      WrappedComponent: h,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: i,
      initMergeProps: s,
      areStatesEqual: o,
      areStatePropsEqual: u,
      areOwnPropsEqual: a,
      areMergedPropsEqual: c
    };
    function y(w) {
      const [S, P, N] = de.useMemo(() => {
        const {
          reactReduxForwardedRef: X
        } = w, ae = sa(w, Lu);
        return [w.context, X, ae];
      }, [w]), O = de.useMemo(() => S && S.Consumer && // @ts-ignore
      So.isContextConsumer(/* @__PURE__ */ de.createElement(S.Consumer, null)) ? S : d, [S, d]), x = de.useContext(O), T = !!w.store && !!w.store.getState && !!w.store.dispatch, I = !!x && !!x.store;
      if (process.env.NODE_ENV !== "production" && !T && !I)
        throw new Error(`Could not find "store" in the context of "${b}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${b} in connect options.`);
      const L = T ? w.store : x.store, B = I ? x.getServerState : L.getState, $ = de.useMemo(() => Nu(L.dispatch, _), [L]), [K, j] = de.useMemo(() => {
        if (!m) return Bu;
        const X = pa(L, T ? void 0 : x.subscription), ae = X.notifyNestedSubs.bind(X);
        return [X, ae];
      }, [L, T, x]), k = de.useMemo(() => T ? x : Xe({}, x, {
        subscription: K
      }), [T, x, K]), D = de.useRef(), R = de.useRef(N), M = de.useRef(), U = de.useRef(!1);
      de.useRef(!1);
      const F = de.useRef(!1), C = de.useRef();
      nr(() => (F.current = !0, () => {
        F.current = !1;
      }), []);
      const q = de.useMemo(() => () => M.current && N === R.current ? M.current : $(L.getState(), N), [L, N]), W = de.useMemo(() => (ae) => K ? Vu(
        m,
        L,
        K,
        // @ts-ignore
        $,
        R,
        D,
        U,
        F,
        M,
        j,
        ae
      ) : () => {
      }, [K]);
      ju(qu, [R, D, U, N, M, j]);
      let z;
      try {
        z = ha(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          W,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          q,
          B ? () => $(B(), N) : q
        );
      } catch (X) {
        throw C.current && (X.message += `
The error may be correlated with this previous error:
${C.current.stack}

`), X;
      }
      nr(() => {
        C.current = void 0, M.current = void 0, D.current = z;
      });
      const Z = de.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ de.createElement(h, Xe({}, z, {
          ref: P
        }))
      ), [P, h, z]);
      return de.useMemo(() => m ? /* @__PURE__ */ de.createElement(O.Provider, {
        value: k
      }, Z) : Z, [O, Z, k]);
    }
    const A = de.memo(y);
    if (A.WrappedComponent = h, A.displayName = y.displayName = b, f) {
      const S = de.forwardRef(function(N, O) {
        return /* @__PURE__ */ de.createElement(A, Xe({}, N, {
          reactReduxForwardedRef: O
        }));
      });
      return S.displayName = b, S.WrappedComponent = h, xo(S, h);
    }
    return xo(A, h);
  };
}
function Gu({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: a = "once"
}) {
  const u = de.useMemo(() => {
    const p = pa(e);
    return {
      store: e,
      subscription: p,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: a
    };
  }, [e, n, o, a]), c = de.useMemo(() => e.getState(), [e]);
  nr(() => {
    const {
      subscription: p
    } = u;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), c !== e.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [u, c]);
  const f = t || la;
  return /* @__PURE__ */ de.createElement(f.Provider, {
    value: u
  }, r);
}
Mu(On.useSyncExternalStore);
iu(Ml);
function Uu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function ga(e, t) {
  var r = Re(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = he(!0), o = he(r), a = n.current || !!(t && o.current.inputs && Uu(t, o.current.inputs)), u = a ? o.current : {
    inputs: t,
    result: e()
  };
  return Se(function() {
    n.current = !1, o.current = u;
  }, [u]), u.result;
}
function Hu(e, t) {
  return ga(function() {
    return e;
  }, t);
}
var pe = ga, ie = Hu, zu = process.env.NODE_ENV === "production", Br = "Invariant failed";
function Io(e, t) {
  if (zu)
    throw new Error(Br);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Br, ": ").concat(r) : Br;
  throw new Error(n);
}
var Fe = function(t) {
  var r = t.top, n = t.right, o = t.bottom, a = t.left, u = n - a, c = o - r, f = {
    top: r,
    right: n,
    bottom: o,
    left: a,
    width: u,
    height: c,
    x: a,
    y: r,
    center: {
      x: (n + a) / 2,
      y: (o + r) / 2
    }
  };
  return f;
}, An = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Co = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Wu = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, $r = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Dn = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? $r : n, a = t.border, u = a === void 0 ? $r : a, c = t.padding, f = c === void 0 ? $r : c, p = Fe(An(r, o)), d = Fe(Co(r, u)), l = Fe(Co(d, f));
  return {
    marginBox: p,
    borderBox: Fe(r),
    paddingBox: d,
    contentBox: l,
    margin: o,
    border: u,
    padding: f
  };
}, je = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Io(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Io()), o;
}, Ku = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, or = function(t, r) {
  var n = t.borderBox, o = t.border, a = t.margin, u = t.padding, c = Wu(n, r);
  return Dn({
    borderBox: c,
    border: o,
    margin: a,
    padding: u
  });
}, ir = function(t, r) {
  return r === void 0 && (r = Ku()), or(t, r);
}, ma = function(t, r) {
  var n = {
    top: je(r.marginTop),
    right: je(r.marginRight),
    bottom: je(r.marginBottom),
    left: je(r.marginLeft)
  }, o = {
    top: je(r.paddingTop),
    right: je(r.paddingRight),
    bottom: je(r.paddingBottom),
    left: je(r.paddingLeft)
  }, a = {
    top: je(r.borderTopWidth),
    right: je(r.borderRightWidth),
    bottom: je(r.borderBottomWidth),
    left: je(r.borderLeftWidth)
  };
  return Dn({
    borderBox: t,
    margin: n,
    padding: o,
    border: a
  });
}, ya = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return ma(r, n);
}, Ro = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Yu(e, t) {
  return !!(e === t || Ro(e) && Ro(t));
}
function Zu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Yu(e[r], t[r]))
      return !1;
  return !0;
}
function De(e, t) {
  t === void 0 && (t = Zu);
  var r = null;
  function n() {
    for (var o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    if (r && r.lastThis === this && t(o, r.lastArgs))
      return r.lastResult;
    var u = e.apply(this, o);
    return r = {
      lastResult: u,
      lastArgs: o,
      lastThis: this
    }, u;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
var Lt = function(t) {
  var r = [], n = null, o = function() {
    for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    r = c, !n && (n = requestAnimationFrame(function() {
      n = null, t.apply(void 0, r);
    }));
  };
  return o.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, o;
};
const Xu = process.env.NODE_ENV === "production", Ju = /[ \t]{2,}/g, Qu = /^[ \t]*/gm, ko = (e) => e.replace(Ju, " ").replace(Qu, "").trim(), ec = (e) => ko(`
  %c@hello-pangea/dnd

  %c${ko(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), tc = (e) => [ec(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], rc = "__@hello-pangea/dnd-disable-dev-warnings";
function ba(e, t) {
  Xu || typeof window < "u" && window[rc] || console[e](...tc(t));
}
const be = ba.bind(null, "warn"), on = ba.bind(null, "error");
function Je() {
}
function nc(e, t) {
  return {
    ...e,
    ...t
  };
}
function qe(e, t, r) {
  const n = t.map((o) => {
    const a = nc(r, o.options);
    return e.addEventListener(o.eventName, o.fn, a), function() {
      e.removeEventListener(o.eventName, o.fn, a);
    };
  });
  return function() {
    n.forEach((a) => {
      a();
    });
  };
}
const oc = process.env.NODE_ENV === "production", Lo = "Invariant failed";
class Mt extends Error {
}
Mt.prototype.toString = function() {
  return this.message;
};
function V(e, t) {
  throw oc ? new Mt(Lo) : new Mt(`${Lo}: ${t || ""}`);
}
class ic extends ue.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Je, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && be(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Mt && (r.preventDefault(), process.env.NODE_ENV !== "production" && on(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = qe(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Mt) {
      process.env.NODE_ENV !== "production" && on(t.message), this.setState({});
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
const ac = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, ar = (e) => e + 1, lc = (e) => `
  You have lifted an item in position ${ar(e.source.index)}
`, Ea = (e, t) => {
  const r = e.droppableId === t.droppableId, n = ar(e.index), o = ar(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, _a = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, sc = (e) => {
  const t = e.destination;
  if (t)
    return Ea(e.source, t);
  const r = e.combine;
  return r ? _a(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Mo = (e) => `
  The item has returned to its starting position
  of ${ar(e.index)}
`, uc = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Mo(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Ea(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${_a(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Mo(e.source)}
  `;
}, cc = {
  dragHandleUsageInstructions: ac,
  onDragStart: lc,
  onDragUpdate: sc,
  onDragEnd: uc
};
var tr = cc;
const Te = {
  x: 0,
  y: 0
}, Pe = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Me = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Qe = (e, t) => e.x === t.x && e.y === t.y, ht = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), lt = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Bt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Bo = (e, t) => Math.min(...t.map((r) => Bt(e, r))), Oa = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var fc = (e, t) => {
  const r = Fe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Ut = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), $o = (e) => [{
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
}], dc = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, pc = (e, t) => t ? Ut(e, t.scroll.diff.displacement) : e, hc = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, vc = (e, t) => t && t.shouldClipSubject ? fc(t.pageMarginBox, e) : Fe(e);
var ct = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = pc(e.marginBox, n), a = hc(o, r, t), u = vc(a, n);
  return {
    page: e,
    withPlaceholder: t,
    active: u
  };
}, Tn = (e, t) => {
  e.frame || (process.env.NODE_ENV, V());
  const r = e.frame, n = Me(t, r.scroll.initial), o = ht(n), a = {
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
  }, u = ct({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: a
  });
  return {
    ...e,
    frame: a,
    subject: u
  };
};
const xa = De((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), wa = De((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), vr = De((e) => Object.values(e)), gc = De((e) => Object.values(e));
var st = De((e, t) => gc(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Pn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function gr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var mr = De((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), mc = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Pn(o))
    return null;
  function u(s) {
    const m = {
      type: "COMBINE",
      combine: {
        draggableId: s,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: m
    };
  }
  const c = o.displaced.all, f = c.length ? c[0] : null;
  if (e)
    return f ? u(f) : null;
  const p = mr(t, n);
  if (!f) {
    if (!p.length)
      return null;
    const s = p[p.length - 1];
    return u(s.descriptor.id);
  }
  const d = p.findIndex((s) => s.descriptor.id === f);
  d === -1 && (process.env.NODE_ENV !== "production" ? V(!1, "Could not find displaced item in set") : V());
  const l = d - 1;
  if (l < 0)
    return null;
  const i = p[l];
  return u(i.descriptor.id);
}, vt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Na = {
  point: Te,
  value: 0
}, $t = {
  invisible: {},
  visible: {},
  all: []
}, yc = {
  displaced: $t,
  displacedBy: Na,
  at: null
};
var bc = yc, Ve = (e, t) => (r) => e <= r && r <= t, Sa = (e) => {
  const t = Ve(e.top, e.bottom), r = Ve(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const a = t(n.top) || t(n.bottom), u = r(n.left) || r(n.right);
    if (a && u)
      return !0;
    const f = n.top < e.top && n.bottom > e.bottom, p = n.left < e.left && n.right > e.right;
    return f && p ? !0 : f && u || p && a;
  };
}, Ec = (e) => {
  const t = Ve(e.top, e.bottom), r = Ve(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const In = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Aa = {
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
var _c = (e) => (t) => {
  const r = Ve(t.top, t.bottom), n = Ve(t.left, t.right);
  return (o) => e === In ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Oc = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Te;
  return Ut(e, r);
}, xc = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, wc = (e, t, r) => r(t)(e), Cn = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const a = n ? Oc(e, t) : e;
  return xc(a, t, o) && wc(a, r, o);
}, Nc = (e) => Cn({
  ...e,
  isVisibleThroughFrameFn: Sa
}), Da = (e) => Cn({
  ...e,
  isVisibleThroughFrameFn: Ec
}), Sc = (e) => Cn({
  ...e,
  isVisibleThroughFrameFn: _c(e.destination.axis)
}), Ac = (e, t, r) => {
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
  const a = o[e];
  return a ? a.shouldAnimate : !0;
};
function Dc(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Fe(An(r, n));
}
function jt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: a
}) {
  return e.reduce(function(c, f) {
    const p = Dc(f, r), d = f.descriptor.id;
    if (c.all.push(d), !Nc({
      target: p,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return c.invisible[f.descriptor.id] = !0, c;
    const i = Ac(d, a, o), s = {
      draggableId: d,
      shouldAnimate: i
    };
    return c.visible[d] = s, c;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function Tc(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function jo({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = Tc(e, {
    inHomeList: t
  });
  return {
    displaced: $t,
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
function lr({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: a,
  index: u,
  forceShouldAnimate: c
}) {
  const f = vt(e, r);
  if (u == null)
    return jo({
      insideDestination: t,
      inHomeList: f,
      displacedBy: o,
      destination: r
    });
  const p = t.find((m) => m.descriptor.index === u);
  if (!p)
    return jo({
      insideDestination: t,
      inHomeList: f,
      displacedBy: o,
      destination: r
    });
  const d = mr(e, t), l = t.indexOf(p), i = d.slice(l);
  return {
    displaced: jt({
      afterDragging: i,
      destination: r,
      displacedBy: o,
      last: a,
      viewport: n.frame,
      forceShouldAnimate: c
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: u
      }
    }
  };
}
function et(e, t) {
  return !!t.effected[e];
}
var Pc = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const a = n.draggableId, c = r[a].descriptor.index;
  return et(a, o) ? e ? c : c - 1 : e ? c + 1 : c;
}, Ic = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, a = e ? o + 1 : o - 1, u = r[0].descriptor.index, c = r[r.length - 1].descriptor.index, f = t ? c : c + 1;
  return a < u || a > f ? null : a;
}, Cc = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: n,
  destination: o,
  insideDestination: a,
  previousImpact: u,
  viewport: c,
  afterCritical: f
}) => {
  const p = u.at;
  if (p || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot move in direction without previous impact location") : V()), p.type === "REORDER") {
    const l = Ic({
      isMovingForward: e,
      isInHomeList: t,
      location: p.destination,
      insideDestination: a
    });
    return l == null ? null : lr({
      draggable: r,
      insideDestination: a,
      destination: o,
      viewport: c,
      last: u.displaced,
      displacedBy: u.displacedBy,
      index: l
    });
  }
  const d = Pc({
    isMovingForward: e,
    destination: o,
    displaced: u.displaced,
    draggables: n,
    combine: p.combine,
    afterCritical: f
  });
  return d == null ? null : lr({
    draggable: r,
    insideDestination: a,
    destination: o,
    viewport: c,
    last: u.displaced,
    displacedBy: u.displacedBy,
    index: d
  });
}, Rc = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return et(r, t) ? o ? Te : ht(n.point) : o ? n.point : Te;
}, kc = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = gr(t);
  n || (process.env.NODE_ENV, V());
  const o = n.draggableId, a = r[o].page.borderBox.center, u = Rc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Pe(a, u);
};
const Ta = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Lc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Rn = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, qo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => lt(e.line, t.marginBox[e.end] + Ta(e, r), Rn(e, t.marginBox, r)), Vo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => lt(e.line, t.marginBox[e.start] - Lc(e, r), Rn(e, t.marginBox, r)), Mc = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => lt(e.line, t.contentBox[e.start] + Ta(e, r), Rn(e, t.contentBox, r));
var Bc = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const a = st(n.descriptor.id, r), u = t.page, c = n.axis;
  if (!a.length)
    return Mc({
      axis: c,
      moveInto: n.page,
      isMoving: u
    });
  const {
    displaced: f,
    displacedBy: p
  } = e, d = f.all[0];
  if (d) {
    const i = r[d];
    if (et(d, o))
      return Vo({
        axis: c,
        moveRelativeTo: i.page,
        isMoving: u
      });
    const s = or(i.page, p.point);
    return Vo({
      axis: c,
      moveRelativeTo: s,
      isMoving: u
    });
  }
  const l = a[a.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return u.borderBox.center;
  if (et(l.descriptor.id, o)) {
    const i = or(l.page, ht(o.displacedBy.point));
    return qo({
      axis: c,
      moveRelativeTo: i,
      isMoving: u
    });
  }
  return qo({
    axis: c,
    moveRelativeTo: l.page,
    isMoving: u
  });
}, an = (e, t) => {
  const r = e.frame;
  return r ? Pe(t, r.scroll.diff.displacement) : t;
};
const $c = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const a = t.page.borderBox.center, u = e.at;
  return !r || !u ? a : u.type === "REORDER" ? Bc({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : kc({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var yr = (e) => {
  const t = $c(e), r = e.droppable;
  return r ? an(r, t) : t;
}, Pa = (e, t) => {
  const r = Me(t, e.scroll.initial), n = ht(r);
  return {
    frame: Fe({
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
function Fo(e, t) {
  return e.map((r) => t[r]);
}
function jc(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var qc = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const a = Pa(t, Pe(t.scroll.current, o)), u = r.frame ? Tn(r, Pe(r.frame.scroll.current, o)) : r, c = e.displaced, f = jt({
    afterDragging: Fo(c.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: a.frame,
    last: c,
    forceShouldAnimate: !1
  }), p = jt({
    afterDragging: Fo(c.all, n),
    destination: u,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: c,
    forceShouldAnimate: !1
  }), d = {}, l = {}, i = [c, f, p];
  return c.all.forEach((m) => {
    const v = jc(m, i);
    if (v) {
      l[m] = v;
      return;
    }
    d[m] = !0;
  }), {
    ...e,
    displaced: {
      all: c.all,
      invisible: d,
      visible: l
    }
  };
}, Vc = (e, t) => Pe(e.scroll.diff.displacement, t), kn = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Vc(r, e), o = Me(n, t.page.borderBox.center);
  return Pe(t.client.borderBox.center, o);
}, Ia = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: a = !1
}) => {
  const u = Me(r, e.page.borderBox.center), f = {
    target: Ut(e.page.borderBox, u),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return a ? Sc(f) : Da(f);
}, Fc = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: n,
  previousImpact: o,
  viewport: a,
  previousPageBorderBoxCenter: u,
  previousClientSelection: c,
  afterCritical: f
}) => {
  if (!r.isEnabled)
    return null;
  const p = st(r.descriptor.id, n), d = vt(t, r), l = mc({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: p,
    previousImpact: o
  }) || Cc({
    isMovingForward: e,
    isInHomeList: d,
    draggable: t,
    draggables: n,
    destination: r,
    insideDestination: p,
    previousImpact: o,
    viewport: a,
    afterCritical: f
  });
  if (!l)
    return null;
  const i = yr({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: f
  });
  if (Ia({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: i,
    viewport: a.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: kn({
        pageBorderBoxCenter: i,
        draggable: t,
        viewport: a
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const m = Me(i, u), v = qc({
    impact: l,
    viewport: a,
    destination: r,
    draggables: n,
    maxScrollChange: m
  });
  return {
    clientSelection: c,
    impact: v,
    scrollJumpRequest: m
  };
};
const Ie = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot get clipped area from droppable") : V()), t;
};
var Gc = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const a = r.subject.active;
  if (!a)
    return null;
  const u = r.axis, c = Ve(a[u.start], a[u.end]), f = vr(n).filter((d) => d !== r).filter((d) => d.isEnabled).filter((d) => !!d.subject.active).filter((d) => Sa(o.frame)(Ie(d))).filter((d) => {
    const l = Ie(d);
    return e ? a[u.crossAxisEnd] < l[u.crossAxisEnd] : l[u.crossAxisStart] < a[u.crossAxisStart];
  }).filter((d) => {
    const l = Ie(d), i = Ve(l[u.start], l[u.end]);
    return c(l[u.start]) || c(l[u.end]) || i(a[u.start]) || i(a[u.end]);
  }).sort((d, l) => {
    const i = Ie(d)[u.crossAxisStart], s = Ie(l)[u.crossAxisStart];
    return e ? i - s : s - i;
  }).filter((d, l, i) => Ie(d)[u.crossAxisStart] === Ie(i[0])[u.crossAxisStart]);
  if (!f.length)
    return null;
  if (f.length === 1)
    return f[0];
  const p = f.filter((d) => Ve(Ie(d)[u.start], Ie(d)[u.end])(t[u.line]));
  return p.length === 1 ? p[0] : p.length > 1 ? p.sort((d, l) => Ie(d)[u.start] - Ie(l)[u.start])[0] : f.sort((d, l) => {
    const i = Bo(t, $o(Ie(d))), s = Bo(t, $o(Ie(l)));
    return i !== s ? i - s : Ie(d)[u.start] - Ie(l)[u.start];
  })[0];
};
const Go = (e, t) => {
  const r = e.page.borderBox.center;
  return et(e.descriptor.id, t) ? Me(r, t.displacedBy.point) : r;
}, Uc = (e, t) => {
  const r = e.page.borderBox;
  return et(e.descriptor.id, t) ? Ut(r, ht(t.displacedBy.point)) : r;
};
var Hc = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((u) => Da({
  target: Uc(u, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((u, c) => {
  const f = Bt(e, an(r, Go(u, o))), p = Bt(e, an(r, Go(c, o)));
  return f < p ? -1 : p < f ? 1 : u.descriptor.index - c.descriptor.index;
})[0] || null, Ht = De(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: lt(t.line, n)
  };
});
const zc = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return lt(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], f = st(e.descriptor.id, r).reduce((p, d) => p + d.client.marginBox[n.size], 0) + t[n.line] - o;
  return f <= 0 ? null : lt(n.line, f);
}, Ca = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Ra = (e, t, r) => {
  const n = e.frame;
  vt(t, e) && (process.env.NODE_ENV !== "production" ? V(!1, "Should not add placeholder space to home list") : V()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot add placeholder size to a subject when it already has one") : V());
  const o = Ht(e.axis, t.displaceBy).point, a = zc(e, o, r), u = {
    placeholderSize: o,
    increasedBy: a,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const d = ct({
      page: e.subject.page,
      withPlaceholder: u,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: d
    };
  }
  const c = a ? Pe(n.scroll.max, a) : n.scroll.max, f = Ca(n, c), p = ct({
    page: e.subject.page,
    withPlaceholder: u,
    axis: e.axis,
    frame: f
  });
  return {
    ...e,
    subject: p,
    frame: f
  };
}, Wc = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot remove placeholder form subject when there was none") : V());
  const r = e.frame;
  if (!r) {
    const u = ct({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: u
    };
  }
  const n = t.oldFrameMaxScroll;
  n || (process.env.NODE_ENV !== "production" ? V(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : V());
  const o = Ca(r, n), a = ct({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: a,
    frame: o
  };
};
var Kc = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: r,
  draggable: n,
  draggables: o,
  destination: a,
  viewport: u,
  afterCritical: c
}) => {
  if (!t) {
    if (r.length)
      return null;
    const l = {
      displaced: $t,
      displacedBy: Na,
      at: {
        type: "REORDER",
        destination: {
          droppableId: a.descriptor.id,
          index: 0
        }
      }
    }, i = yr({
      impact: l,
      draggable: n,
      droppable: a,
      draggables: o,
      afterCritical: c
    }), s = vt(n, a) ? a : Ra(a, n, o);
    return Ia({
      draggable: n,
      destination: s,
      newPageBorderBoxCenter: i,
      viewport: u.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const f = e[a.axis.line] <= t.page.borderBox.center[a.axis.line], p = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || f ? l : l + 1;
  })(), d = Ht(a.axis, n.displaceBy);
  return lr({
    draggable: n,
    insideDestination: r,
    destination: a,
    viewport: u,
    displacedBy: d,
    last: $t,
    index: p
  });
}, Yc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: a,
  viewport: u,
  afterCritical: c
}) => {
  const f = Gc({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: a,
    viewport: u
  });
  if (!f)
    return null;
  const p = st(f.descriptor.id, o), d = Hc({
    pageBorderBoxCenter: t,
    viewport: u,
    destination: f,
    insideDestination: p,
    afterCritical: c
  }), l = Kc({
    previousPageBorderBoxCenter: t,
    destination: f,
    draggable: r,
    draggables: o,
    moveRelativeTo: d,
    insideDestination: p,
    viewport: u,
    afterCritical: c
  });
  if (!l)
    return null;
  const i = yr({
    impact: l,
    draggable: r,
    droppable: f,
    draggables: o,
    afterCritical: c
  });
  return {
    clientSelection: kn({
      pageBorderBoxCenter: i,
      draggable: r,
      viewport: u
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, Be = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Zc = (e, t) => {
  const r = Be(e);
  return r ? t[r] : null;
};
var Xc = ({
  state: e,
  type: t
}) => {
  const r = Zc(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], a = r || o, u = a.axis.direction, c = u === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || u === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (c && !n)
    return null;
  const f = t === "MOVE_DOWN" || t === "MOVE_RIGHT", p = e.dimensions.draggables[e.critical.draggable.id], d = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: i
  } = e.dimensions;
  return c ? Fc({
    isMovingForward: f,
    previousPageBorderBoxCenter: d,
    draggable: p,
    destination: a,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Yc({
    isMovingForward: f,
    previousPageBorderBoxCenter: d,
    draggable: p,
    isOver: a,
    draggables: l,
    droppables: i,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function nt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function ka(e) {
  const t = Ve(e.top, e.bottom), r = Ve(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Jc(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Qc({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((a) => {
    const u = a.axis, c = lt(a.axis.line, e.center[u.line], a.page.borderBox.center[u.crossAxisLine]);
    return {
      id: a.descriptor.id,
      distance: Bt(n, c)
    };
  }).sort((a, u) => u.distance - a.distance);
  return o[0] ? o[0].id : null;
}
function ef({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = vr(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const a = o.subject.active;
    if (!a || !Jc(e, a))
      return !1;
    if (ka(a)(e.center))
      return !0;
    const u = o.axis, c = a.center[u.crossAxisLine], f = e[u.crossAxisStart], p = e[u.crossAxisEnd], d = Ve(a[u.crossAxisStart], a[u.crossAxisEnd]), l = d(f), i = d(p);
    return !l && !i ? !0 : l ? f < c : p > c;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Qc({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const La = (e, t) => Fe(Ut(e, t));
var tf = (e, t) => {
  const r = e.frame;
  return r ? La(t, r.scroll.diff.value) : t;
};
function Ma({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function rf({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var nf = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: a,
  afterCritical: u
}) => {
  const c = r.axis, f = Ht(r.axis, t.displaceBy), p = f.value, d = e[c.start], l = e[c.end], s = mr(t, n).find((v) => {
    const h = v.descriptor.id, g = v.page.borderBox.center[c.line], b = et(h, u), _ = Ma({
      displaced: o,
      id: h
    });
    return b ? _ ? l <= g : d < g - p : _ ? l <= g + p : d < g;
  }) || null, m = rf({
    draggable: t,
    closest: s,
    inHomeList: vt(t, r)
  });
  return lr({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: a,
    last: o,
    displacedBy: f,
    index: m
  });
};
const of = 4;
var af = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: a
}) => {
  if (!n.isCombineEnabled)
    return null;
  const u = n.axis, c = Ht(n.axis, e.displaceBy), f = c.value, p = t[u.start], d = t[u.end], i = mr(e, o).find((m) => {
    const v = m.descriptor.id, h = m.page.borderBox, b = h[u.size] / of, _ = et(v, a), y = Ma({
      displaced: r.displaced,
      id: v
    });
    return _ ? y ? d > h[u.start] + b && d < h[u.end] - b : p > h[u.start] - f + b && p < h[u.end] - f - b : y ? d > h[u.start] + f + b && d < h[u.end] + f - b : p > h[u.start] + b && p < h[u.end] - b;
  });
  return i ? {
    displacedBy: c,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: i.descriptor.id,
        droppableId: n.descriptor.id
      }
    }
  } : null;
}, Ba = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: a,
  afterCritical: u
}) => {
  const c = La(t.page.borderBox, e), f = ef({
    pageBorderBox: c,
    draggable: t,
    droppables: n
  });
  if (!f)
    return bc;
  const p = n[f], d = st(p.descriptor.id, r), l = tf(p, c);
  return af({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: p,
    insideDestination: d,
    afterCritical: u
  }) || nf({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: p,
    insideDestination: d,
    last: o.displaced,
    viewport: a,
    afterCritical: u
  });
}, Ln = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const lf = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = Be(e), o = Be(t);
  if (!n || n === o)
    return r;
  const a = r[n];
  if (!a.subject.withPlaceholder)
    return r;
  const u = Wc(a);
  return Ln(r, u);
};
var sf = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const a = lf({
    previousImpact: n,
    impact: o,
    droppables: r
  }), u = Be(o);
  if (!u)
    return a;
  const c = r[u];
  if (vt(e, c) || c.subject.withPlaceholder)
    return a;
  const f = Ra(c, e, t);
  return Ln(a, f);
}, Tt = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: a
}) => {
  const u = n || e.viewport, c = r || e.dimensions, f = t || e.current.client.selection, p = Me(f, e.initial.client.selection), d = {
    offset: p,
    selection: f,
    borderBoxCenter: Pe(e.initial.client.borderBoxCenter, p)
  }, l = {
    selection: Pe(d.selection, u.scroll.current),
    borderBoxCenter: Pe(d.borderBoxCenter, u.scroll.current),
    offset: Pe(d.offset, u.scroll.diff.value)
  }, i = {
    client: d,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: c,
      viewport: u,
      current: i
    };
  const s = c.draggables[e.critical.draggable.id], m = o || Ba({
    pageOffset: l.offset,
    draggable: s,
    draggables: c.draggables,
    droppables: c.droppables,
    previousImpact: e.impact,
    viewport: u,
    afterCritical: e.afterCritical
  }), v = sf({
    draggable: s,
    impact: m,
    previousImpact: e.impact,
    draggables: c.draggables,
    droppables: c.droppables
  });
  return {
    ...e,
    current: i,
    dimensions: {
      draggables: c.draggables,
      droppables: v
    },
    impact: m,
    viewport: u,
    scrollJumpRequest: a || null,
    forceShouldAnimate: a ? !1 : null
  };
};
function uf(e, t) {
  return e.map((r) => t[r]);
}
var $a = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const a = e.displaced, u = uf(a.all, r), c = jt({
    afterDragging: u,
    destination: n,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: a
  });
  return {
    ...e,
    displaced: c
  };
}, ja = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: a
}) => {
  const u = yr({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: a
  });
  return kn({
    pageBorderBoxCenter: u,
    draggable: t,
    viewport: o
  });
}, qa = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, V());
  const n = e.impact, o = r || e.viewport, a = t || e.dimensions, {
    draggables: u,
    droppables: c
  } = a, f = u[e.critical.draggable.id], p = Be(n);
  p || (process.env.NODE_ENV !== "production" ? V(!1, "Must be over a destination in SNAP movement mode") : V());
  const d = c[p], l = $a({
    impact: n,
    viewport: o,
    destination: d,
    draggables: u
  }), i = ja({
    impact: l,
    draggable: f,
    droppable: d,
    draggables: u,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Tt({
    impact: l,
    clientSelection: i,
    state: e,
    dimensions: a,
    viewport: o
  });
}, cf = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Va = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Ht(t.axis, e.displaceBy), a = st(t.descriptor.id, r), u = a.indexOf(e);
  u === -1 && (process.env.NODE_ENV !== "production" ? V(!1, "Expected draggable to be inside home list") : V());
  const c = a.slice(u + 1), f = c.reduce((i, s) => (i[s.descriptor.id] = !0, i), {}), p = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: f
  };
  return {
    impact: {
      displaced: jt({
        afterDragging: c,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: n.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: cf(e.descriptor)
      }
    },
    afterCritical: p
  };
}, ff = (e, t) => ({
  draggables: e.draggables,
  droppables: Ln(e.droppables, t)
});
const zt = (e) => {
  process.env.NODE_ENV;
}, Wt = (e) => {
  process.env.NODE_ENV;
};
var df = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = or(e.client, t), o = ir(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, pf = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? V(!1, "Expected Droppable to have a frame") : V()), t;
}, hf = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const a = o.descriptor.droppableId, u = t[a], f = pf(u).scroll.diff.value, p = Pe(n, f);
    return df({
      draggable: o,
      offset: p,
      initialWindowScroll: r.scroll.initial
    });
  });
}, vf = ({
  state: e,
  published: t
}) => {
  zt();
  const r = t.modified.map((g) => {
    const b = e.dimensions.droppables[g.droppableId];
    return Tn(b, g.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...xa(r)
  }, o = wa(hf({
    additions: t.additions,
    updatedDroppables: n,
    viewport: e.viewport
  })), a = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((g) => {
    delete a[g];
  });
  const u = {
    droppables: n,
    draggables: a
  }, c = Be(e.impact), f = c ? u.droppables[c] : null, p = u.draggables[e.critical.draggable.id], d = u.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: i
  } = Va({
    draggable: p,
    home: d,
    draggables: a,
    viewport: e.viewport
  }), s = f && f.isCombineEnabled ? e.impact : l, m = Ba({
    pageOffset: e.current.page.offset,
    draggable: u.draggables[e.critical.draggable.id],
    draggables: u.draggables,
    droppables: u.droppables,
    previousImpact: s,
    viewport: e.viewport,
    afterCritical: i
  });
  Wt();
  const v = {
    ...e,
    phase: "DRAGGING",
    impact: m,
    onLiftImpact: l,
    dimensions: u,
    afterCritical: i,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? v : {
    ...v,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const ln = (e) => e.movementMode === "SNAP", jr = (e, t, r) => {
  const n = ff(e.dimensions, t);
  return !ln(e) || r ? Tt({
    state: e,
    dimensions: n
  }) : qa({
    state: e,
    dimensions: n
  });
};
function qr(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Uo = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var gf = (e = Uo, t) => {
  if (t.type === "FLUSH")
    return {
      ...Uo,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? V(!1, "INITIAL_PUBLISH must come after a IDLE phase") : V());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: a,
      movementMode: u
    } = t.payload, c = a.draggables[r.draggable.id], f = a.droppables[r.droppable.id], p = {
      selection: n,
      borderBoxCenter: c.client.borderBox.center,
      offset: Te
    }, d = {
      client: p,
      page: {
        selection: Pe(p.selection, o.scroll.initial),
        borderBoxCenter: Pe(p.selection, o.scroll.initial),
        offset: Pe(p.selection, o.scroll.diff.value)
      }
    }, l = vr(a.droppables).every((v) => !v.isFixedOnPage), {
      impact: i,
      afterCritical: s
    } = Va({
      draggable: c,
      home: f,
      draggables: a.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: r,
      movementMode: u,
      dimensions: a,
      initial: d,
      current: d,
      isWindowScrollAllowed: l,
      impact: i,
      afterCritical: s,
      onLiftImpact: i,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? V(!1, `Collection cannot start from phase ${e.phase}`) : V()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? V(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : V()), vf({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    nt(e) || (process.env.NODE_ENV !== "production" ? V(!1, `${t.type} not permitted in phase ${e.phase}`) : V());
    const {
      client: r
    } = t.payload;
    return Qe(r, e.current.client.selection) ? e : Tt({
      state: e,
      clientSelection: r,
      impact: ln(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return qr(e);
    nt(e) || (process.env.NODE_ENV !== "production" ? V(!1, `${t.type} not permitted in phase ${e.phase}`) : V());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const a = Tn(o, n);
    return jr(e, a, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    nt(e) || (process.env.NODE_ENV !== "production" ? V(!1, `Attempting to move in an unsupported phase ${e.phase}`) : V());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : V()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? V(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : V());
    const a = {
      ...o,
      isEnabled: n
    };
    return jr(e, a, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    nt(e) || (process.env.NODE_ENV !== "production" ? V(!1, `Attempting to move in an unsupported phase ${e.phase}`) : V());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : V()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? V(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : V());
    const a = {
      ...o,
      isCombineEnabled: n
    };
    return jr(e, a, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    nt(e) || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot move by window in phase ${e.phase}`) : V()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? V(!1, "Window scrolling is currently not supported for fixed lists") : V());
    const r = t.payload.newScroll;
    if (Qe(e.viewport.scroll.current, r))
      return qr(e);
    const n = Pa(e.viewport, r);
    return ln(e) ? qa({
      state: e,
      viewport: n
    }) : Tt({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!nt(e))
      return e;
    const r = t.payload.maxScroll;
    if (Qe(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? V(!1, `${t.type} received while not in DRAGGING phase`) : V());
    const r = Xc({
      state: e,
      type: t.type
    });
    return r ? Tt({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? V(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : V()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot animate drop from phase ${e.phase}`) : V()), {
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
const mf = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), yf = (e) => ({
  type: "LIFT",
  payload: e
}), bf = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Ef = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), _f = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Of = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), xf = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), wf = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Fa = (e) => ({
  type: "MOVE",
  payload: e
}), Nf = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Sf = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Af = () => ({
  type: "MOVE_UP",
  payload: null
}), Df = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Tf = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Pf = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Mn = () => ({
  type: "FLUSH",
  payload: null
}), If = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Bn = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Ga = (e) => ({
  type: "DROP",
  payload: e
}), Cf = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ua = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Rf(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), r = {};
  for (let o = 1; o < t.length; o++) {
    const a = t[o], u = t[o - 1];
    a !== u + 1 && (r[a] = !0);
  }
  if (!Object.keys(r).length)
    return;
  const n = t.map((o) => !!r[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && be(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function kf(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = st(e.droppable.id, t.draggables);
    Rf(r);
  }
}
var Lf = (e) => ({
  getState: t,
  dispatch: r
}) => (n) => (o) => {
  if (o.type !== "LIFT") {
    n(o);
    return;
  }
  const {
    id: a,
    clientSelection: u,
    movementMode: c
  } = o.payload, f = t();
  f.phase === "DROP_ANIMATING" && r(Bn({
    completed: f.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? V(!1, "Unexpected phase to start a drag") : V()), r(Mn()), r(mf({
    draggableId: a,
    movementMode: c
  }));
  const d = {
    draggableId: a,
    scrollOptions: {
      shouldPublishImmediately: c === "SNAP"
    }
  }, {
    critical: l,
    dimensions: i,
    viewport: s
  } = e.startPublishing(d);
  kf(l, i), r(bf({
    critical: l,
    dimensions: i,
    clientSelection: u,
    movementMode: c,
    viewport: s
  }));
}, Mf = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const $n = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, qt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Ha = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, tt = `${Ha.outOfTheWay}s ${$n.outOfTheWay}`, Pt = {
  fluid: `opacity ${tt}`,
  snap: `transform ${tt}, opacity ${tt}`,
  drop: (e) => {
    const t = `${e}s ${$n.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${tt}`,
  placeholder: `height ${tt}, width ${tt}, margin ${tt}`
}, Ho = (e) => Qe(e, Te) ? void 0 : `translate(${e.x}px, ${e.y}px)`, sn = {
  moveTo: Ho,
  drop: (e, t) => {
    const r = Ho(e);
    if (r)
      return t ? `${r} scale(${qt.scale.drop})` : r;
  }
}, {
  minDropTime: un,
  maxDropTime: za
} = Ha, Bf = za - un, zo = 1500, $f = 0.6;
var jf = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Bt(e, t);
  if (n <= 0)
    return un;
  if (n >= zo)
    return za;
  const o = n / zo, a = un + Bf * o, u = r === "CANCEL" ? a * $f : a;
  return Number(u.toFixed(2));
}, qf = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: a,
    droppables: u
  } = r, c = Be(e), f = c ? u[c] : null, p = u[t.descriptor.droppableId], d = ja({
    impact: e,
    draggable: t,
    draggables: a,
    afterCritical: o,
    droppable: f || p,
    viewport: n
  });
  return Me(d, t.client.borderBox.center);
}, Vf = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: a
}) => !r.at || t !== "DROP" ? {
  impact: $a({
    draggables: e,
    impact: a,
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
    displaced: $t
  },
  didDropInsideDroppable: !0
};
const Ff = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), a = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Cf({
      reason: a
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? V(!1, "A DROP action occurred while DROP_PENDING and still waiting") : V()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot drop in phase: ${o.phase}`) : V());
  const c = o.critical, f = o.dimensions, p = f.draggables[o.critical.draggable.id], {
    impact: d,
    didDropInsideDroppable: l
  } = Vf({
    reason: a,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), i = l ? Pn(d) : null, s = l ? gr(d) : null, m = {
    index: c.draggable.index,
    droppableId: c.droppable.id
  }, v = {
    draggableId: p.descriptor.id,
    type: p.descriptor.type,
    source: m,
    reason: a,
    mode: o.movementMode,
    destination: i,
    combine: s
  }, h = qf({
    impact: d,
    draggable: p,
    dimensions: f,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), g = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: v,
    impact: d
  };
  if (!(!Qe(o.current.client.offset, h) || !!v.combine)) {
    t(Bn({
      completed: g
    }));
    return;
  }
  const _ = jf({
    current: o.current.client.offset,
    destination: h,
    reason: a
  });
  t(If({
    newHomeClientOffset: h,
    dropDuration: _,
    completed: g
  }));
};
var Gf = Ff, Wa = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Uf(e) {
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
function Hf({
  onWindowScroll: e
}) {
  function t() {
    e(Wa());
  }
  const r = Lt(t), n = Uf(r);
  let o = Je;
  function a() {
    return o !== Je;
  }
  function u() {
    a() && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot start scroll listener when already active") : V()), o = qe(window, [n]);
  }
  function c() {
    a() || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot stop scroll listener when not active") : V()), r.cancel(), o(), o = Je;
  }
  return {
    start: u,
    stop: c,
    isActive: a
  };
}
const zf = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Wf = (e) => {
  const t = Hf({
    onWindowScroll: (r) => {
      e.dispatch(Nf({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && zf(n) && t.stop(), r(n);
  };
};
var Kf = Wf, Yf = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (a) => {
    if (t) {
      process.env.NODE_ENV !== "production" && be("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && be(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(a), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Zf = () => {
  const e = [], t = (o) => {
    const a = e.findIndex((c) => c.timerId === o);
    a === -1 && (process.env.NODE_ENV !== "production" ? V(!1, "Could not find timer") : V());
    const [u] = e.splice(a, 1);
    u.callback();
  };
  return {
    add: (o) => {
      const a = setTimeout(() => t(a)), u = {
        timerId: a,
        callback: o
      };
      e.push(u);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((a) => {
        clearTimeout(a.timerId), a.callback();
      });
    }
  };
};
const Xf = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Jf = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Qf = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, wt = (e, t) => {
  zt(), t(), Wt();
}, Zt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Vr(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Yf(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var ed = (e, t) => {
  const r = Zf();
  let n = null;
  const o = (l, i) => {
    n && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : V()), wt("onBeforeCapture", () => {
      const s = e().onBeforeCapture;
      s && s({
        draggableId: l,
        mode: i
      });
    });
  }, a = (l, i) => {
    n && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : V()), wt("onBeforeDragStart", () => {
      const s = e().onBeforeDragStart;
      s && s(Zt(l, i));
    });
  }, u = (l, i) => {
    n && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : V());
    const s = Zt(l, i);
    n = {
      mode: i,
      lastCritical: l,
      lastLocation: s.source,
      lastCombine: null
    }, r.add(() => {
      wt("onDragStart", () => Vr(e().onDragStart, s, t, tr.onDragStart));
    });
  }, c = (l, i) => {
    const s = Pn(i), m = gr(i);
    n || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot fire onDragMove when onDragStart has not been called") : V());
    const v = !Qf(l, n.lastCritical);
    v && (n.lastCritical = l);
    const h = !Xf(n.lastLocation, s);
    h && (n.lastLocation = s);
    const g = !Jf(n.lastCombine, m);
    if (g && (n.lastCombine = m), !v && !h && !g)
      return;
    const b = {
      ...Zt(l, n.mode),
      combine: m,
      destination: s
    };
    r.add(() => {
      wt("onDragUpdate", () => Vr(e().onDragUpdate, b, t, tr.onDragUpdate));
    });
  }, f = () => {
    n || (process.env.NODE_ENV !== "production" ? V(!1, "Can only flush responders while dragging") : V()), r.flush();
  }, p = (l) => {
    n || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : V()), n = null, wt("onDragEnd", () => Vr(e().onDragEnd, l, t, tr.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: a,
    start: u,
    update: c,
    flush: f,
    drop: p,
    abort: () => {
      if (!n)
        return;
      const l = {
        ...Zt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      p(l);
    }
  };
}, td = (e, t) => {
  const r = ed(e, t);
  return (n) => (o) => (a) => {
    if (a.type === "BEFORE_INITIAL_CAPTURE") {
      r.beforeCapture(a.payload.draggableId, a.payload.movementMode);
      return;
    }
    if (a.type === "INITIAL_PUBLISH") {
      const c = a.payload.critical;
      r.beforeStart(c, a.payload.movementMode), o(a), r.start(c, a.payload.movementMode);
      return;
    }
    if (a.type === "DROP_COMPLETE") {
      const c = a.payload.completed.result;
      r.flush(), o(a), r.drop(c);
      return;
    }
    if (o(a), a.type === "FLUSH") {
      r.abort();
      return;
    }
    const u = n.getState();
    u.phase === "DRAGGING" && r.update(u.critical, u.impact);
  };
};
const rd = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot finish a drop animating when no drop is occurring") : V()), e.dispatch(Bn({
    completed: n.completed
  }));
};
var nd = rd;
const od = (e) => {
  let t = null, r = null;
  function n() {
    r && (cancelAnimationFrame(r), r = null), t && (t(), t = null);
  }
  return (o) => (a) => {
    if ((a.type === "FLUSH" || a.type === "DROP_COMPLETE" || a.type === "DROP_ANIMATION_FINISHED") && n(), o(a), a.type !== "DROP_ANIMATE")
      return;
    const u = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ua());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = qe(window, [u]);
    });
  };
};
var id = od, ad = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, ld = (e) => {
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
const sd = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var ud = (e) => (t) => (r) => (n) => {
  if (sd(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? V(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : V()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const cd = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Ga({
    reason: n.reason
  })));
};
var fd = cd;
const dd = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : oa;
var pd = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: a
}) => na(gf, dd(Qs(Mf(r), ad(e), Lf(e), Gf, nd, id, fd, ud(a), Kf, ld(t), td(n, o))));
const Fr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function hd({
  registry: e,
  callbacks: t
}) {
  let r = Fr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, zt();
      const {
        additions: f,
        removals: p,
        modified: d
      } = r, l = Object.keys(f).map((m) => e.draggable.getById(m).getDimension(Te)).sort((m, v) => m.descriptor.index - v.descriptor.index), i = Object.keys(d).map((m) => {
        const h = e.droppable.getById(m).callbacks.getScrollWhileDragging();
        return {
          droppableId: m,
          scroll: h
        };
      }), s = {
        additions: l,
        removals: Object.keys(p),
        modified: i
      };
      r = Fr(), Wt(), t.publish(s);
    }));
  };
  return {
    add: (f) => {
      const p = f.descriptor.id;
      r.additions[p] = f, r.modified[f.descriptor.droppableId] = !0, r.removals[p] && delete r.removals[p], o();
    },
    remove: (f) => {
      const p = f.descriptor;
      r.removals[p.id] = !0, r.modified[p.droppableId] = !0, r.additions[p.id] && delete r.additions[p.id], o();
    },
    stop: () => {
      n && (cancelAnimationFrame(n), n = null, r = Fr());
    }
  };
}
var Ka = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Me({
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
}, Ya = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot find document.documentElement") : V()), e;
}, Za = () => {
  const e = Ya();
  return Ka({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, vd = () => {
  const e = Wa(), t = Za(), r = e.y, n = e.x, o = Ya(), a = o.clientWidth, u = o.clientHeight, c = n + a, f = r + u;
  return {
    frame: Fe({
      top: r,
      left: n,
      right: c,
      bottom: f
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: Te,
        displacement: Te
      }
    }
  };
}, gd = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  zt();
  const n = vd(), o = n.scroll.current, a = e.droppable, u = r.droppable.getAllByType(a.type).map((d) => d.callbacks.getDimensionAndWatchScroll(o, t)), c = r.draggable.getAllByType(e.draggable.type).map((d) => d.getDimension(o)), f = {
    draggables: wa(c),
    droppables: xa(u)
  };
  return Wt(), {
    dimensions: f,
    critical: e,
    viewport: n
  };
};
function Wo(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && be(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var md = (e, t) => {
  let r = null;
  const n = hd({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (i, s) => {
    e.droppable.exists(i) || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot update is enabled flag of Droppable ${i} as it is not registered`) : V()), r && t.updateDroppableIsEnabled({
      id: i,
      isEnabled: s
    });
  }, a = (i, s) => {
    r && (e.droppable.exists(i) || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot update isCombineEnabled flag of Droppable ${i} as it is not registered`) : V()), t.updateDroppableIsCombineEnabled({
      id: i,
      isCombineEnabled: s
    }));
  }, u = (i, s) => {
    r && (e.droppable.exists(i) || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot update the scroll on Droppable ${i} as it is not registered`) : V()), t.updateDroppableScroll({
      id: i,
      newScroll: s
    }));
  }, c = (i, s) => {
    r && e.droppable.getById(i).callbacks.scroll(s);
  }, f = () => {
    if (!r)
      return;
    n.stop();
    const i = r.critical.droppable;
    e.droppable.getAllByType(i.type).forEach((s) => s.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, p = (i) => {
    r || (process.env.NODE_ENV !== "production" ? V(!1, "Should only be subscribed when a collection is occurring") : V());
    const s = r.critical.draggable;
    i.type === "ADDITION" && Wo(e, s, i.value) && n.add(i.value), i.type === "REMOVAL" && Wo(e, s, i.value) && n.remove(i.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: a,
    scrollDroppable: c,
    updateDroppableScroll: u,
    startPublishing: (i) => {
      r && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot start capturing critical dimensions as there is already a collection") : V());
      const s = e.draggable.getById(i.draggableId), m = e.droppable.getById(s.descriptor.droppableId), v = {
        draggable: s.descriptor,
        droppable: m.descriptor
      }, h = e.subscribe(p);
      return r = {
        critical: v,
        unsubscribe: h
      }, gd({
        critical: v,
        registry: e,
        scrollOptions: i.scrollOptions
      });
    },
    stopPublishing: f
  };
}, Xa = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", yd = (e) => {
  window.scrollBy(e.x, e.y);
};
const bd = De((e) => vr(e).filter((t) => !(!t.isEnabled || !t.frame))), Ed = (e, t) => bd(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? V(!1, "Invalid result") : V()), ka(n.frame.pageMarginBox)(e))) || null;
var _d = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Ed(e, r);
};
const Vt = {
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
var Od = (e, t, r = () => Vt) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, a = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: a
  };
}, Ja = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && be(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, jn = 1, xd = (e, t, r = () => Vt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return jn;
  const a = 1 - Ja({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), u = n.maxPixelScroll * n.ease(a);
  return Math.ceil(u);
}, wd = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, a = n.durationDampening.stopDampeningAt, u = t, c = a, p = Date.now() - u;
  if (p >= a)
    return e;
  if (p < o)
    return jn;
  const d = Ja({
    startOfRange: o,
    endOfRange: c,
    current: p
  }), l = e * n.ease(d);
  return Math.ceil(l);
}, Ko = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const a = xd(e, t, o);
  return a === 0 ? 0 : n ? Math.max(wd(a, r, o), jn) : a;
}, Yo = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: a
}) => {
  const u = Od(e, n, a);
  return t[n.end] < t[n.start] ? Ko({
    distanceToEdge: t[n.end],
    thresholds: u,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: a
  }) : -1 * Ko({
    distanceToEdge: t[n.start],
    thresholds: u,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: a
  });
}, Nd = ({
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
const Sd = Oa((e) => e === 0 ? 0 : e);
var Qa = ({
  dragStartTime: e,
  container: t,
  subject: r,
  center: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: a
}) => {
  const u = {
    top: n.y - t.top,
    right: t.right - n.x,
    bottom: t.bottom - n.y,
    left: n.x - t.left
  }, c = Yo({
    container: t,
    distanceToEdges: u,
    dragStartTime: e,
    axis: In,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: a
  }), f = Yo({
    container: t,
    distanceToEdges: u,
    dragStartTime: e,
    axis: Aa,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: a
  }), p = Sd({
    x: f,
    y: c
  });
  if (Qe(p, Te))
    return null;
  const d = Nd({
    container: t,
    subject: r,
    proposedScroll: p
  });
  return d ? Qe(d, Te) ? null : d : null;
};
const Ad = Oa((e) => e === 0 ? 0 : e > 0 ? 1 : -1), qn = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = Pe(t, n), a = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return Qe(a, Te) ? null : a;
  };
})(), el = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Ad(r), a = qn({
    max: n,
    current: t,
    change: o
  });
  return !a || o.x !== 0 && a.x === 0 || o.y !== 0 && a.y === 0;
}, Vn = (e, t) => el({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Dd = (e, t) => {
  if (!Vn(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return qn({
    current: n,
    max: r,
    change: t
  });
}, Fn = (e, t) => {
  const r = e.frame;
  return r ? el({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, Td = (e, t) => {
  const r = e.frame;
  return !r || !Fn(e, t) ? null : qn({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var Pd = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: a
}) => {
  const u = Qa({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: a
  });
  return u && Vn(e, u) ? u : null;
}, Id = ({
  droppable: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: a
}) => {
  const u = e.frame;
  if (!u)
    return null;
  const c = Qa({
    dragStartTime: n,
    container: u.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: a
  });
  return c && Fn(e, c) ? c : null;
}, Zo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: a
}) => {
  const u = e.current.page.borderBoxCenter, f = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, i = Pd({
      dragStartTime: t,
      viewport: l,
      subject: f,
      center: u,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: a
    });
    if (i) {
      n(i);
      return;
    }
  }
  const p = _d({
    center: u,
    destination: Be(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!p)
    return;
  const d = Id({
    dragStartTime: t,
    droppable: p,
    subject: f,
    center: u,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: a
  });
  d && o(p.descriptor.id, d);
}, Cd = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Vt
}) => {
  const n = Lt(e), o = Lt(t);
  let a = null;
  const u = (p) => {
    a || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot fluid scroll if not dragging") : V());
    const {
      shouldUseTimeDampening: d,
      dragStartTime: l
    } = a;
    Zo({
      state: p,
      scrollWindow: n,
      scrollDroppable: o,
      dragStartTime: l,
      shouldUseTimeDampening: d,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (p) => {
      zt(), a && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot start auto scrolling when already started") : V());
      const d = Date.now();
      let l = !1;
      const i = () => {
        l = !0;
      };
      Zo({
        state: p,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: i,
        scrollDroppable: i,
        getAutoScrollerOptions: r
      }), a = {
        dragStartTime: d,
        shouldUseTimeDampening: l
      }, Wt(), l && u(p);
    },
    stop: () => {
      a && (n.cancel(), o.cancel(), a = null);
    },
    scroll: u
  };
}, Rd = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (c, f) => {
    const p = Pe(c.current.client.selection, f);
    e({
      client: p
    });
  }, o = (c, f) => {
    if (!Fn(c, f))
      return f;
    const p = Td(c, f);
    if (!p)
      return t(c.descriptor.id, f), null;
    const d = Me(f, p);
    return t(c.descriptor.id, d), Me(f, d);
  }, a = (c, f, p) => {
    if (!c || !Vn(f, p))
      return p;
    const d = Dd(f, p);
    if (!d)
      return r(p), null;
    const l = Me(p, d);
    return r(l), Me(p, l);
  };
  return (c) => {
    const f = c.scrollJumpRequest;
    if (!f)
      return;
    const p = Be(c.impact);
    p || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot perform a jump scroll when there is no destination") : V());
    const d = o(c.dimensions.droppables[p], f);
    if (!d)
      return;
    const l = c.viewport, i = a(c.isWindowScrollAllowed, l, d);
    i && n(c, i);
  };
}, kd = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = Cd({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), a = Rd({
    move: r,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (f) => {
      if (!(n().disabled || f.phase !== "DRAGGING")) {
        if (f.movementMode === "FLUID") {
          o.scroll(f);
          return;
        }
        f.scrollJumpRequest && a(f);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const ft = "data-rfd", dt = (() => {
  const e = `${ft}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), cn = (() => {
  const e = `${ft}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Ld = (() => {
  const e = `${ft}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Xo = {
  contextId: `${ft}-scroll-container-context-id`
}, Md = (e) => (t) => `[${t}="${e}"]`, Nt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), Bd = "pointer-events: none;";
var $d = (e) => {
  const t = Md(e), r = (() => {
    const c = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(dt.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: c,
        dragging: Bd,
        dropAnimating: c
      }
    };
  })(), n = (() => {
    const c = `
      transition: ${Pt.outOfTheWay};
    `;
    return {
      selector: t(cn.contextId),
      styles: {
        dragging: c,
        dropAnimating: c,
        userCancel: c
      }
    };
  })(), o = {
    selector: t(Ld.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, u = [n, r, o, {
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
    always: Nt(u, "always"),
    resting: Nt(u, "resting"),
    dragging: Nt(u, "dragging"),
    dropAnimating: Nt(u, "dropAnimating"),
    userCancel: Nt(u, "userCancel")
  };
};
const jd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Bi : Se;
var $e = jd;
const Gr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot find the head to append a style to") : V()), e;
}, Jo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function qd(e, t) {
  const r = pe(() => $d(e), [e]), n = he(null), o = he(null), a = ie(De((l) => {
    const i = o.current;
    i || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot set dynamic style element if it is not set") : V()), i.textContent = l;
  }), []), u = ie((l) => {
    const i = n.current;
    i || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot set dynamic style element if it is not set") : V()), i.textContent = l;
  }, []);
  $e(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? V(!1, "style elements already mounted") : V());
    const l = Jo(t), i = Jo(t);
    return n.current = l, o.current = i, l.setAttribute(`${ft}-always`, e), i.setAttribute(`${ft}-dynamic`, e), Gr().appendChild(l), Gr().appendChild(i), u(r.always), a(r.resting), () => {
      const s = (m) => {
        const v = m.current;
        v || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot unmount ref as it is not set") : V()), Gr().removeChild(v), m.current = null;
      };
      s(n), s(o);
    };
  }, [t, u, a, r.always, r.resting, e]);
  const c = ie(() => a(r.dragging), [a, r.dragging]), f = ie((l) => {
    if (l === "DROP") {
      a(r.dropAnimating);
      return;
    }
    a(r.userCancel);
  }, [a, r.dropAnimating, r.userCancel]), p = ie(() => {
    o.current && a(r.resting);
  }, [a, r.resting]);
  return pe(() => ({
    dragging: c,
    dropping: f,
    resting: p
  }), [c, f, p]);
}
function tl(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var rl = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Kt(e) {
  return e instanceof rl(e).HTMLElement;
}
function nl(e, t) {
  const r = `[${dt.contextId}="${e}"]`, n = tl(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && be(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((a) => a.getAttribute(dt.draggableId) === t);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && be("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && be(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Vd(e) {
  const t = he({}), r = he(null), n = he(null), o = he(!1), a = ie(function(i, s) {
    const m = {
      id: i,
      focus: s
    };
    return t.current[i] = m, function() {
      const h = t.current;
      h[i] !== m && delete h[i];
    };
  }, []), u = ie(function(i) {
    const s = nl(e, i);
    s && s !== document.activeElement && s.focus();
  }, [e]), c = ie(function(i, s) {
    r.current === i && (r.current = s);
  }, []), f = ie(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const i = r.current;
      i && u(i);
    }));
  }, [u]), p = ie(function(i) {
    r.current = null;
    const s = document.activeElement;
    s && s.getAttribute(dt.draggableId) === i && (r.current = i);
  }, []);
  return $e(() => (o.current = !0, function() {
    o.current = !1;
    const i = n.current;
    i && cancelAnimationFrame(i);
  }), []), pe(() => ({
    register: a,
    tryRecordFocus: p,
    tryRestoreFocusRecorded: f,
    tryShiftRecord: c
  }), [a, p, f, c]);
}
function Fd() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(l) {
    return t.push(l), function() {
      const s = t.indexOf(l);
      s !== -1 && t.splice(s, 1);
    };
  }
  function n(l) {
    t.length && t.forEach((i) => i(l));
  }
  function o(l) {
    return e.draggables[l] || null;
  }
  function a(l) {
    const i = o(l);
    return i || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot find draggable entry with id [${l}]`) : V()), i;
  }
  const u = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, n({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, i) => {
      const s = e.draggables[i.descriptor.id];
      s && s.uniqueId === l.uniqueId && (delete e.draggables[i.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const i = l.descriptor.id, s = o(i);
      s && l.uniqueId === s.uniqueId && (delete e.draggables[i], e.droppables[l.descriptor.droppableId] && n({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: a,
    findById: o,
    exists: (l) => !!o(l),
    getAllByType: (l) => Object.values(e.draggables).filter((i) => i.descriptor.type === l)
  };
  function c(l) {
    return e.droppables[l] || null;
  }
  function f(l) {
    const i = c(l);
    return i || (process.env.NODE_ENV !== "production" ? V(!1, `Cannot find droppable entry with id [${l}]`) : V()), i;
  }
  const p = {
    register: (l) => {
      e.droppables[l.descriptor.id] = l;
    },
    unregister: (l) => {
      const i = c(l.descriptor.id);
      i && l.uniqueId === i.uniqueId && delete e.droppables[l.descriptor.id];
    },
    getById: f,
    findById: c,
    exists: (l) => !!c(l),
    getAllByType: (l) => Object.values(e.droppables).filter((i) => i.descriptor.type === l)
  };
  function d() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: u,
    droppable: p,
    subscribe: r,
    clean: d
  };
}
function Gd() {
  const e = pe(Fd, []);
  return Se(() => function() {
    ue.version.startsWith("16") || ue.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Gn = ue.createContext(null), Ft = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot find document.body") : V()), e;
};
const Ud = {
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
var Hd = Ud;
const zd = (e) => `rfd-announcement-${e}`;
function Wd(e) {
  const t = pe(() => zd(e), [e]), r = he(null);
  return Se(function() {
    const a = document.createElement("div");
    return r.current = a, a.id = t, a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true"), Xe(a.style, Hd), Ft().appendChild(a), function() {
      setTimeout(function() {
        const f = Ft();
        f.contains(a) && f.removeChild(a), a === r.current && (r.current = null);
      });
    };
  }, [t]), ie((o) => {
    const a = r.current;
    if (a) {
      a.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && be(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Kd = 0;
const ol = {
  separator: "::"
};
function Yd(e, t = ol) {
  return pe(() => `${e}${t.separator}${Kd++}`, [t.separator, e]);
}
function Zd(e, t = ol) {
  const r = ue.useId();
  return pe(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Un = "useId" in ue ? Zd : Yd;
function Xd({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Jd({
  contextId: e,
  text: t
}) {
  const r = Un("hidden-text", {
    separator: "-"
  }), n = pe(() => Xd({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return Se(function() {
    const a = document.createElement("div");
    return a.id = n, a.textContent = t, a.style.display = "none", Ft().appendChild(a), function() {
      const c = Ft();
      c.contains(a) && c.removeChild(a);
    };
  }, [n, t]), n;
}
var br = ue.createContext(null), Qd = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const ep = /(\d+)\.(\d+)\.(\d+)/, Qo = (e) => {
  const t = ep.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? V(!1, `Unable to parse React version ${e}`) : V());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, tp = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var rp = (e, t) => {
  const r = Qo(e), n = Qo(t);
  tp(r, n) || process.env.NODE_ENV !== "production" && be(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Ur = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var np = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && be(`
      No <!doctype html> found.

      ${Ur}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && be(`
      Unexpected <!doctype> found: (${t.name})

      ${Ur}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && be(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Ur}
    `);
};
function Hn(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Yt(e, t) {
  Hn(() => {
    Se(() => {
      try {
        e();
      } catch (r) {
        on(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function op() {
  Yt(() => {
    rp(Qd.react, ue.version), np(document);
  }, []);
}
function zn(e) {
  const t = he(e);
  return Se(() => {
    t.current = e;
  }), t;
}
function ip() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(u) {
    return u === e;
  }
  function n(u) {
    e && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot claim lock as it is already claimed") : V());
    const c = {
      abandon: u
    };
    return e = c, c;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot release lock when there is no lock") : V()), e = null;
  }
  function a() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: r,
    claim: n,
    release: o,
    tryAbandon: a
  };
}
function Gt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const ap = 9, lp = 13, Wn = 27, il = 32, sp = 33, up = 34, cp = 35, fp = 36, dp = 37, pp = 38, hp = 39, vp = 40, gp = {
  [lp]: !0,
  [ap]: !0
};
var al = (e) => {
  gp[e.keyCode] && e.preventDefault();
};
const mp = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Er = mp;
const ll = 0, ei = 5;
function yp(e, t) {
  return Math.abs(t.x - e.x) >= ei || Math.abs(t.y - e.y) >= ei;
}
const ti = {
  type: "IDLE"
};
function bp({
  cancel: e,
  completed: t,
  getPhase: r,
  setPhase: n
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: a,
        clientX: u,
        clientY: c
      } = o;
      if (a !== ll)
        return;
      const f = {
        x: u,
        y: c
      }, p = r();
      if (p.type === "DRAGGING") {
        o.preventDefault(), p.actions.move(f);
        return;
      }
      p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot be IDLE") : V());
      const d = p.point;
      if (!yp(d, f))
        return;
      o.preventDefault();
      const l = p.actions.fluidLift(f);
      n({
        type: "DRAGGING",
        actions: l
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const a = r();
      if (a.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), a.actions.drop({
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
      if (o.keyCode === Wn) {
        o.preventDefault(), e();
        return;
      }
      al(o);
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
      const a = r();
      if (a.type === "IDLE" && (process.env.NODE_ENV !== "production" ? V(!1, "Unexpected phase") : V()), a.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Er,
    fn: e
  }];
}
function Ep(e) {
  const t = he(ti), r = he(Je), n = pe(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== ll || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const i = e.findClosestDraggableId(l);
      if (!i)
        return;
      const s = e.tryGetLock(i, u, {
        sourceEvent: l
      });
      if (!s)
        return;
      l.preventDefault();
      const m = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), p(s, m);
    }
  }), [e]), o = pe(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (d) => {
      if (d.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(d);
      if (!l)
        return;
      const i = e.findOptionsForDraggable(l);
      i && (i.shouldRespectForcePress || e.canGetLock(l) && d.preventDefault());
    }
  }), [e]), a = ie(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = qe(window, [o, n], l);
  }, [o, n]), u = ie(() => {
    t.current.type !== "IDLE" && (t.current = ti, r.current(), a());
  }, [a]), c = ie(() => {
    const d = t.current;
    u(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [u]), f = ie(function() {
    const l = {
      capture: !0,
      passive: !1
    }, i = bp({
      cancel: c,
      completed: u,
      getPhase: () => t.current,
      setPhase: (s) => {
        t.current = s;
      }
    });
    r.current = qe(window, i, l);
  }, [c, u]), p = ie(function(l, i) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? V(!1, "Expected to move from IDLE to PENDING drag") : V()), t.current = {
      type: "PENDING",
      point: i,
      actions: l
    }, f();
  }, [f]);
  $e(function() {
    return a(), function() {
      r.current();
    };
  }, [a]);
}
function _p() {
}
const Op = {
  [up]: !0,
  [sp]: !0,
  [fp]: !0,
  [cp]: !0
};
function xp(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Wn) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === il) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === vp) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === pp) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === hp) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === dp) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Op[o.keyCode]) {
        o.preventDefault();
        return;
      }
      al(o);
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
    eventName: Er,
    fn: r
  }];
}
function wp(e) {
  const t = he(_p), r = pe(() => ({
    eventName: "keydown",
    fn: function(a) {
      if (a.defaultPrevented || a.keyCode !== il)
        return;
      const u = e.findClosestDraggableId(a);
      if (!u)
        return;
      const c = e.tryGetLock(u, d, {
        sourceEvent: a
      });
      if (!c)
        return;
      a.preventDefault();
      let f = !0;
      const p = c.snapLift();
      t.current();
      function d() {
        f || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot stop capturing a keyboard drag when not capturing") : V()), f = !1, t.current(), n();
      }
      t.current = qe(window, xp(p, d), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = ie(function() {
    const a = {
      passive: !1,
      capture: !0
    };
    t.current = qe(window, [r], a);
  }, [r]);
  $e(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const Hr = {
  type: "IDLE"
}, Np = 120, Sp = 0.15;
function Ap({
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
      r.keyCode === Wn && r.preventDefault(), e();
    }
  }, {
    eventName: Er,
    fn: e
  }];
}
function Dp({
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
        clientX: a,
        clientY: u
      } = n.touches[0], c = {
        x: a,
        y: u
      };
      n.preventDefault(), o.actions.move(c);
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
      o.type === "IDLE" && (process.env.NODE_ENV, V());
      const a = n.touches[0];
      if (!a || !(a.force >= Sp))
        return;
      const c = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        c && e();
        return;
      }
      if (c) {
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
    eventName: Er,
    fn: e
  }];
}
function Tp(e) {
  const t = he(Hr), r = he(Je), n = ie(function() {
    return t.current;
  }, []), o = ie(function(s) {
    t.current = s;
  }, []), a = pe(() => ({
    eventName: "touchstart",
    fn: function(s) {
      if (s.defaultPrevented)
        return;
      const m = e.findClosestDraggableId(s);
      if (!m)
        return;
      const v = e.tryGetLock(m, c, {
        sourceEvent: s
      });
      if (!v)
        return;
      const h = s.touches[0], {
        clientX: g,
        clientY: b
      } = h, _ = {
        x: g,
        y: b
      };
      r.current(), l(v, _);
    }
  }), [e]), u = ie(function() {
    const s = {
      capture: !0,
      passive: !1
    };
    r.current = qe(window, [a], s);
  }, [a]), c = ie(() => {
    const i = t.current;
    i.type !== "IDLE" && (i.type === "PENDING" && clearTimeout(i.longPressTimerId), o(Hr), r.current(), u());
  }, [u, o]), f = ie(() => {
    const i = t.current;
    c(), i.type === "DRAGGING" && i.actions.cancel({
      shouldBlockNextClick: !0
    }), i.type === "PENDING" && i.actions.abort();
  }, [c]), p = ie(function() {
    const s = {
      capture: !0,
      passive: !1
    }, m = {
      cancel: f,
      completed: c,
      getPhase: n
    }, v = qe(window, Dp(m), s), h = qe(window, Ap(m), s);
    r.current = function() {
      v(), h();
    };
  }, [f, n, c]), d = ie(function() {
    const s = n();
    s.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? V(!1, `Cannot start dragging from phase ${s.type}`) : V());
    const m = s.actions.fluidLift(s.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [n, o]), l = ie(function(s, m) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? V(!1, "Expected to move from IDLE to PENDING drag") : V());
    const v = setTimeout(d, Np);
    o({
      type: "PENDING",
      point: m,
      actions: s,
      longPressTimerId: v
    }), p();
  }, [p, n, o, d]);
  $e(function() {
    return u(), function() {
      r.current();
      const m = n();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Hr));
    };
  }, [n, u, o]), $e(function() {
    return qe(window, [{
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
function Pp(e) {
  Hn(() => {
    const t = zn(e);
    Yt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot change the amount of sensor hooks after mounting") : V(!1));
    });
  });
}
const Ip = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function sl(e, t) {
  if (t == null)
    return !1;
  if (Ip.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : sl(e, t.parentElement);
}
function Cp(e, t) {
  const r = t.target;
  return Kt(r) ? sl(e, r) : !1;
}
var Rp = (e) => Fe(e.getBoundingClientRect()).center;
function kp(e) {
  return e instanceof rl(e).Element;
}
const Lp = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function ul(e, t) {
  return e == null ? null : e[Lp](t) ? e : ul(e.parentElement, t);
}
function Mp(e, t) {
  return e.closest ? e.closest(t) : ul(e, t);
}
function Bp(e) {
  return `[${dt.contextId}="${e}"]`;
}
function $p(e, t) {
  const r = t.target;
  if (!kp(r))
    return process.env.NODE_ENV !== "production" && be("event.target must be a Element"), null;
  const n = Bp(e), o = Mp(r, n);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && be("drag handle must be a HTMLElement"), null) : null;
}
function jp(e, t) {
  const r = $p(e, t);
  return r ? r.getAttribute(dt.draggableId) : null;
}
function qp(e, t) {
  const r = `[${cn.contextId}="${e}"]`, o = tl(document, r).find((a) => a.getAttribute(cn.id) === t);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && be("Draggable element is not a HTMLElement"), null) : null;
}
function Vp(e) {
  e.preventDefault();
}
function Xt({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && be(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && be(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function cl({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !Xa(t.getState(), n)) : (process.env.NODE_ENV !== "production" && be(`Unable to find draggable with id: ${n}`), !1);
}
function Fp({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: a,
  sourceEvent: u
}) {
  if (!cl({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const f = n.draggable.getById(o), p = qp(t, f.descriptor.id);
  if (!p)
    return process.env.NODE_ENV !== "production" && be(`Unable to find draggable element with id: ${o}`), null;
  if (u && !f.options.canDragInteractiveElements && Cp(p, u))
    return null;
  const d = e.claim(a || Je);
  let l = "PRE_DRAG";
  function i() {
    return f.options.shouldRespectForcePress;
  }
  function s() {
    return e.isActive(d);
  }
  function m(E, A) {
    Xt({
      expected: E,
      phase: l,
      isLockActive: s,
      shouldWarn: !0
    }) && r.dispatch(A());
  }
  const v = m.bind(null, "DRAGGING");
  function h(E) {
    function A() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (A(), process.env.NODE_ENV !== "production" ? V(!1, `Cannot lift in phase ${l}`) : V()), r.dispatch(yf(E.liftActionArgs)), l = "DRAGGING";
    function w(S, P = {
      shouldBlockNextClick: !1
    }) {
      if (E.cleanup(), P.shouldBlockNextClick) {
        const N = qe(window, [{
          eventName: "click",
          fn: Vp,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(N);
      }
      A(), r.dispatch(Ga({
        reason: S
      }));
    }
    return {
      isActive: () => Xt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: s,
        shouldWarn: !1
      }),
      shouldRespectForcePress: i,
      drop: (S) => w("DROP", S),
      cancel: (S) => w("CANCEL", S),
      ...E.actions
    };
  }
  function g(E) {
    const A = Lt((S) => {
      v(() => Fa({
        client: S
      }));
    });
    return {
      ...h({
        liftActionArgs: {
          id: o,
          clientSelection: E,
          movementMode: "FLUID"
        },
        cleanup: () => A.cancel(),
        actions: {
          move: A
        }
      }),
      move: A
    };
  }
  function b() {
    const E = {
      moveUp: () => v(Af),
      moveRight: () => v(Tf),
      moveDown: () => v(Df),
      moveLeft: () => v(Pf)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: Rp(p),
        movementMode: "SNAP"
      },
      cleanup: Je,
      actions: E
    });
  }
  function _() {
    Xt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: s,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Xt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: s,
      shouldWarn: !1
    }),
    shouldRespectForcePress: i,
    fluidLift: g,
    snapLift: b,
    abort: _
  };
}
const Gp = [Ep, wp, Tp];
function Up({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const a = [...o ? Gp : [], ...n || []], u = Re(() => ip())[0], c = ie(function(h, g) {
    Gt(h) && !Gt(g) && u.tryAbandon();
  }, [u]);
  $e(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const b = t.getState();
      c(h, b), h = b;
    });
  }, [u, t, c]), $e(() => u.tryAbandon, [u.tryAbandon]);
  const f = ie((v) => cl({
    lockAPI: u,
    registry: r,
    store: t,
    draggableId: v
  }), [u, r, t]), p = ie((v, h, g) => Fp({
    lockAPI: u,
    registry: r,
    contextId: e,
    store: t,
    draggableId: v,
    forceSensorStop: h || null,
    sourceEvent: g && g.sourceEvent ? g.sourceEvent : null
  }), [e, u, r, t]), d = ie((v) => jp(e, v), [e]), l = ie((v) => {
    const h = r.draggable.findById(v);
    return h ? h.options : null;
  }, [r.draggable]), i = ie(function() {
    u.isClaimed() && (u.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Mn()));
  }, [u, t]), s = ie(() => u.isClaimed(), [u]), m = pe(() => ({
    canGetLock: f,
    tryGetLock: p,
    findClosestDraggableId: d,
    findOptionsForDraggable: l,
    tryReleaseLock: i,
    isLockClaimed: s
  }), [f, p, d, l, i, s]);
  Pp(a);
  for (let v = 0; v < a.length; v++)
    a[v](m);
}
const Hp = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    ue.version.startsWith("16") || ue.version.startsWith("17") ? r() : qi(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), zp = (e) => ({
  ...Vt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Vt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function St(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? V(!1, "Could not find store from lazy ref") : V()), e.current;
}
function Wp(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: a
  } = e, u = he(null);
  op();
  const c = zn(e), f = ie(() => Hp(c.current), [c]), p = ie(() => zp(c.current), [c]), d = Wd(t), l = Jd({
    contextId: t,
    text: a
  }), i = qd(t, o), s = ie((N) => {
    St(u).dispatch(N);
  }, []), m = pe(() => co({
    publishWhileDragging: Ef,
    updateDroppableScroll: Of,
    updateDroppableIsEnabled: xf,
    updateDroppableIsCombineEnabled: wf,
    collectionStarting: _f
  }, s), [s]), v = Gd(), h = pe(() => md(v, m), [v, m]), g = pe(() => kd({
    scrollWindow: yd,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: p,
    ...co({
      move: Fa
    }, s)
  }), [h.scrollDroppable, s, p]), b = Vd(t), _ = pe(() => pd({
    announce: d,
    autoScroller: g,
    dimensionMarshal: h,
    focusMarshal: b,
    getResponders: f,
    styleMarshal: i
  }), [d, g, h, b, f, i]);
  process.env.NODE_ENV !== "production" && u.current && u.current !== _ && process.env.NODE_ENV !== "production" && be("unexpected store change"), u.current = _;
  const y = ie(() => {
    const N = St(u);
    N.getState().phase !== "IDLE" && N.dispatch(Mn());
  }, []), E = ie(() => {
    const N = St(u).getState();
    return N.phase === "DROP_ANIMATING" ? !0 : N.phase === "IDLE" ? !1 : N.isDragging;
  }, []), A = pe(() => ({
    isDragging: E,
    tryAbort: y
  }), [E, y]);
  r(A);
  const w = ie((N) => Xa(St(u).getState(), N), []), S = ie(() => nt(St(u).getState()), []), P = pe(() => ({
    marshal: h,
    focus: b,
    contextId: t,
    canLift: w,
    isMovementAllowed: S,
    dragHandleUsageInstructionsId: l,
    registry: v
  }), [t, h, l, b, w, S, v]);
  return Up({
    contextId: t,
    store: _,
    registry: v,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), Se(() => y, [y]), ue.createElement(br.Provider, {
    value: P
  }, ue.createElement(Gu, {
    context: Gn,
    store: _
  }, e.children));
}
let Kp = 0;
function Yp() {
  return pe(() => `${Kp++}`, []);
}
function Zp() {
  return ue.useId();
}
var Xp = "useId" in ue ? Zp : Yp;
function Jp(e) {
  const t = Xp(), r = e.dragHandleUsageInstructions || tr.dragHandleUsageInstructions;
  return ue.createElement(ic, null, (n) => ue.createElement(Wp, {
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
const ri = {
  dragging: 5e3,
  dropAnimating: 4500
}, Qp = (e, t) => t ? Pt.drop(t.duration) : e ? Pt.snap : Pt.fluid, eh = (e, t) => {
  if (e)
    return t ? qt.opacity.drop : qt.opacity.combining;
}, th = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function rh(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: a
  } = e, u = !!o, c = th(e), f = !!a, p = f ? sn.drop(n, u) : sn.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Qp(c, a),
    transform: p,
    opacity: eh(u, f),
    zIndex: f ? ri.dropAnimating : ri.dragging,
    pointerEvents: "none"
  };
}
function nh(e) {
  return {
    transform: sn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function oh(e) {
  return e.type === "DRAGGING" ? rh(e) : nh(e);
}
function ih(e, t, r = Te) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), a = ma(o, n), u = ir(a, r), c = {
    client: a,
    tagName: t.tagName.toLowerCase(),
    display: n.display
  }, f = {
    x: a.marginBox.width,
    y: a.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: c,
    displaceBy: f,
    client: a,
    page: u
  };
}
function ah(e) {
  const t = Un("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: a,
    shouldRespectForcePress: u,
    isEnabled: c
  } = e, f = pe(() => ({
    canDragInteractiveElements: a,
    shouldRespectForcePress: u,
    isEnabled: c
  }), [a, c, u]), p = ie((s) => {
    const m = o();
    return m || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot get dimension when no ref is set") : V()), ih(r, m, s);
  }, [r, o]), d = pe(() => ({
    uniqueId: t,
    descriptor: r,
    options: f,
    getDimension: p
  }), [r, p, f, t]), l = he(d), i = he(!0);
  $e(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), $e(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    const s = l.current;
    l.current = d, n.draggable.update(d, s);
  }, [d, n.draggable]);
}
var Kn = ue.createContext(null);
function fl(e) {
  e && Kt(e) || (process.env.NODE_ENV !== "production" ? V(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : V());
}
function lh(e, t, r) {
  Yt(() => {
    function n(a) {
      return `Draggable[id: ${a}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? V(!1, "Draggable requires a draggableId") : V(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? V(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : V(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? V(!1, `${n(o)} requires an integer index prop`) : V(!1)), e.mapped.type !== "DRAGGING" && (fl(r()), e.isEnabled && (nl(t, o) || (process.env.NODE_ENV !== "production" ? V(!1, `${n(o)} Unable to find drag handle`) : V(!1))));
  });
}
function sh(e) {
  Hn(() => {
    const t = he(e);
    Yt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? V(!1, "Draggable isClone prop value changed during component life") : V(!1));
    }, [e]);
  });
}
function sr(e) {
  const t = $i(e);
  return t || (process.env.NODE_ENV !== "production" ? V(!1, "Could not find required context") : V()), t;
}
function uh(e) {
  e.preventDefault();
}
const ch = (e) => {
  const t = he(null), r = ie((A = null) => {
    t.current = A;
  }, []), n = ie(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: a,
    registry: u
  } = sr(br), {
    type: c,
    droppableId: f
  } = sr(Kn), p = pe(() => ({
    id: e.draggableId,
    index: e.index,
    type: c,
    droppableId: f
  }), [e.draggableId, e.index, c, f]), {
    children: d,
    draggableId: l,
    isEnabled: i,
    shouldRespectForcePress: s,
    canDragInteractiveElements: m,
    isClone: v,
    mapped: h,
    dropAnimationFinished: g
  } = e;
  if (lh(e, o, n), sh(v), !v) {
    const A = pe(() => ({
      descriptor: p,
      registry: u,
      getDraggableRef: n,
      canDragInteractiveElements: m,
      shouldRespectForcePress: s,
      isEnabled: i
    }), [p, u, n, m, s, i]);
    ah(A);
  }
  const b = pe(() => i ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": a,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: uh
  } : null, [o, a, l, i]), _ = ie((A) => {
    h.type === "DRAGGING" && h.dropping && A.propertyName === "transform" && (ue.version.startsWith("16") || ue.version.startsWith("17") ? g() : qi(g));
  }, [g, h]), y = pe(() => {
    const A = oh(h), w = h.type === "DRAGGING" && h.dropping ? _ : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: A,
        onTransitionEnd: w
      },
      dragHandleProps: b
    };
  }, [o, b, l, h, _, r]), E = pe(() => ({
    draggableId: p.id,
    type: p.type,
    source: {
      index: p.index,
      droppableId: p.droppableId
    }
  }), [p.droppableId, p.id, p.index, p.type]);
  return ue.createElement(ue.Fragment, null, d(y, h.snapshot, E));
};
var fh = ch, dl = (e, t) => e === t, pl = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const dh = (e) => e.combine ? e.combine.draggableId : null, ph = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function hh() {
  const e = De((o, a) => ({
    x: o,
    y: a
  })), t = De((o, a, u = null, c = null, f = null) => ({
    isDragging: !0,
    isClone: a,
    isDropAnimating: !!f,
    dropAnimation: f,
    mode: o,
    draggingOver: u,
    combineWith: c,
    combineTargetFor: null
  })), r = De((o, a, u, c, f = null, p = null, d = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: f,
      combineWith: p,
      mode: a,
      offset: o,
      dimension: u,
      forceShouldAnimate: d,
      snapshot: t(a, c, f, p, null)
    }
  }));
  return (o, a) => {
    if (Gt(o)) {
      if (o.critical.draggable.id !== a.draggableId)
        return null;
      const u = o.current.client.offset, c = o.dimensions.draggables[a.draggableId], f = Be(o.impact), p = ph(o.impact), d = o.forceShouldAnimate;
      return r(e(u.x, u.y), o.movementMode, c, a.isClone, f, p, d);
    }
    if (o.phase === "DROP_ANIMATING") {
      const u = o.completed;
      if (u.result.draggableId !== a.draggableId)
        return null;
      const c = a.isClone, f = o.dimensions.draggables[a.draggableId], p = u.result, d = p.mode, l = pl(p), i = dh(p), m = {
        duration: o.dropDuration,
        curve: $n.drop,
        moveTo: o.newHomeClientOffset,
        opacity: i ? qt.opacity.drop : null,
        scale: i ? qt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: f,
          dropping: m,
          draggingOver: l,
          combineWith: i,
          mode: d,
          forceShouldAnimate: null,
          snapshot: t(d, c, l, i, m)
        }
      };
    }
    return null;
  };
}
function hl(e = null) {
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
const vh = {
  mapped: {
    type: "SECONDARY",
    offset: Te,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: hl(null)
  }
};
function gh() {
  const e = De((u, c) => ({
    x: u,
    y: c
  })), t = De(hl), r = De((u, c = null, f) => ({
    mapped: {
      type: "SECONDARY",
      offset: u,
      combineTargetFor: c,
      shouldAnimateDisplacement: f,
      snapshot: t(c)
    }
  })), n = (u) => u ? r(Te, u, !0) : null, o = (u, c, f, p) => {
    const d = f.displaced.visible[u], l = !!(p.inVirtualList && p.effected[u]), i = gr(f), s = i && i.draggableId === u ? c : null;
    if (!d) {
      if (!l)
        return n(s);
      if (f.displaced.invisible[u])
        return null;
      const h = ht(p.displacedBy.point), g = e(h.x, h.y);
      return r(g, s, !0);
    }
    if (l)
      return n(s);
    const m = f.displacedBy.point, v = e(m.x, m.y);
    return r(v, s, d.shouldAnimate);
  };
  return (u, c) => {
    if (Gt(u))
      return u.critical.draggable.id === c.draggableId ? null : o(c.draggableId, u.critical.draggable.id, u.impact, u.afterCritical);
    if (u.phase === "DROP_ANIMATING") {
      const f = u.completed;
      return f.result.draggableId === c.draggableId ? null : o(c.draggableId, f.result.draggableId, f.impact, f.afterCritical);
    }
    return null;
  };
}
const mh = () => {
  const e = hh(), t = gh();
  return (n, o) => e(n, o) || t(n, o) || vh;
}, yh = {
  dropAnimationFinished: Ua
}, bh = va(mh, yh, null, {
  context: Gn,
  areStatePropsEqual: dl
})(fh);
var Eh = bh;
function vl(e) {
  return sr(Kn).isUsingCloneFor === e.draggableId && !e.isClone ? null : ue.createElement(Eh, e);
}
function _h(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return ue.createElement(vl, Xe({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Yn = (e) => (t) => e === t, Oh = Yn("scroll"), xh = Yn("auto"), wh = Yn("visible"), ni = (e, t) => t(e.overflowX) || t(e.overflowY), Nh = (e, t) => t(e.overflowX) && t(e.overflowY), gl = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return ni(r, Oh) || ni(r, xh);
}, Sh = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Ft(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, V()), !gl(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Nh(n, wh) || process.env.NODE_ENV !== "production" && be(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Zn = (e) => e == null ? null : e === document.body ? Sh() ? e : null : e === document.documentElement ? null : gl(e) ? e : Zn(e.parentElement);
var Ah = (e) => {
  !e || !Zn(e.parentElement) || process.env.NODE_ENV !== "production" && be(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, fn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ml = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ml(e.parentElement) : !1;
var Dh = (e) => {
  const t = Zn(e), r = ml(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Th = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: n,
  direction: o,
  client: a,
  page: u,
  closest: c
}) => {
  const f = (() => {
    if (!c)
      return null;
    const {
      scrollSize: i,
      client: s
    } = c, m = Ka({
      scrollHeight: i.scrollHeight,
      scrollWidth: i.scrollWidth,
      height: s.paddingBox.height,
      width: s.paddingBox.width
    });
    return {
      pageMarginBox: c.page.marginBox,
      frameClient: s,
      scrollSize: i,
      shouldClipSubject: c.shouldClipSubject,
      scroll: {
        initial: c.scroll,
        current: c.scroll,
        max: m,
        diff: {
          value: Te,
          displacement: Te
        }
      }
    };
  })(), p = o === "vertical" ? In : Aa, d = ct({
    page: u,
    withPlaceholder: null,
    axis: p,
    frame: f
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: p,
    isEnabled: t,
    client: a,
    page: u,
    frame: f,
    subject: d
  };
};
const Ph = (e, t) => {
  const r = ya(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, a = n + t.scrollHeight, u = o + t.scrollWidth, f = An({
    top: n,
    right: u,
    bottom: a,
    left: o
  }, r.border);
  return Dn({
    borderBox: f,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Ih = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: a,
  isCombineEnabled: u,
  shouldClipSubject: c
}) => {
  const f = r.closestScrollable, p = Ph(e, f), d = ir(p, n), l = (() => {
    if (!f)
      return null;
    const s = ya(f), m = {
      scrollHeight: f.scrollHeight,
      scrollWidth: f.scrollWidth
    };
    return {
      client: s,
      page: ir(s, n),
      scroll: fn(f),
      scrollSize: m,
      shouldClipSubject: c
    };
  })();
  return Th({
    descriptor: t,
    isEnabled: !a,
    isCombineEnabled: u,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: p,
    page: d,
    closest: l
  });
};
const Ch = {
  passive: !1
}, Rh = {
  passive: !0
};
var oi = (e) => e.shouldPublishImmediately ? Ch : Rh;
const Jt = (e) => e && e.env.closestScrollable || null;
function kh(e) {
  const t = he(null), r = sr(br), n = Un("droppable"), {
    registry: o,
    marshal: a
  } = r, u = zn(e), c = pe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), f = he(c), p = pe(() => De((y, E) => {
    t.current || (process.env.NODE_ENV !== "production" ? V(!1, "Can only update scroll when dragging") : V());
    const A = {
      x: y,
      y: E
    };
    a.updateDroppableScroll(c.id, A);
  }), [c.id, a]), d = ie(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Te : fn(y.env.closestScrollable);
  }, []), l = ie(() => {
    const y = d();
    p(y.x, y.y);
  }, [d, p]), i = pe(() => Lt(l), [l]), s = ie(() => {
    const y = t.current, E = Jt(y);
    if (y && E || (process.env.NODE_ENV !== "production" ? V(!1, "Could not find scroll options while scrolling") : V()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    i();
  }, [i, l]), m = ie((y, E) => {
    t.current && (process.env.NODE_ENV !== "production" ? V(!1, "Cannot collect a droppable while a drag is occurring") : V());
    const A = u.current, w = A.getDroppableRef();
    w || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot collect without a droppable ref") : V());
    const S = Dh(w), P = {
      ref: w,
      descriptor: c,
      env: S,
      scrollOptions: E
    };
    t.current = P;
    const N = Ih({
      ref: w,
      descriptor: c,
      env: S,
      windowScroll: y,
      direction: A.direction,
      isDropDisabled: A.isDropDisabled,
      isCombineEnabled: A.isCombineEnabled,
      shouldClipSubject: !A.ignoreContainerClipping
    }), O = S.closestScrollable;
    return O && (O.setAttribute(Xo.contextId, r.contextId), O.addEventListener("scroll", s, oi(P.scrollOptions)), process.env.NODE_ENV !== "production" && Ah(O)), N;
  }, [r.contextId, c, s, u]), v = ie(() => {
    const y = t.current, E = Jt(y);
    return y && E || (process.env.NODE_ENV !== "production" ? V(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : V()), fn(E);
  }, []), h = ie(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot stop drag when no active drag") : V());
    const E = Jt(y);
    t.current = null, E && (i.cancel(), E.removeAttribute(Xo.contextId), E.removeEventListener("scroll", s, oi(y.scrollOptions)));
  }, [s, i]), g = ie((y) => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot scroll when there is no drag") : V());
    const A = Jt(E);
    A || (process.env.NODE_ENV !== "production" ? V(!1, "Cannot scroll a droppable with no closest scrollable") : V()), A.scrollTop += y.y, A.scrollLeft += y.x;
  }, []), b = pe(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: v,
    dragStopped: h,
    scroll: g
  }), [h, m, v, g]), _ = pe(() => ({
    uniqueId: n,
    descriptor: c,
    callbacks: b
  }), [b, c, n]);
  $e(() => (f.current = _.descriptor, o.droppable.register(_), () => {
    t.current && (process.env.NODE_ENV !== "production" && be("Unsupported: changing the droppableId or type of a Droppable during a drag"), h()), o.droppable.unregister(_);
  }), [b, c, h, _, a, o.droppable]), $e(() => {
    t.current && a.updateDroppableIsEnabled(f.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, a]), $e(() => {
    t.current && a.updateDroppableIsCombineEnabled(f.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, a]);
}
function zr() {
}
const ii = {
  width: 0,
  height: 0,
  margin: dc
}, Lh = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? ii : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Mh = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = Lh({
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
    transition: r !== "none" ? Pt.placeholder : null
  };
}, Bh = (e) => {
  const t = he(null), r = ie(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: a,
    contextId: u
  } = e, [c, f] = Re(e.animate === "open");
  Se(() => c ? n !== "open" ? (r(), f(!1), zr) : t.current ? zr : (t.current = setTimeout(() => {
    t.current = null, f(!1);
  }), r) : zr, [n, c, r]);
  const p = ie((l) => {
    l.propertyName === "height" && (o(), n === "close" && a());
  }, [n, a, o]), d = Mh({
    isAnimatingOpenOnMount: c,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return ue.createElement(e.placeholder.tagName, {
    style: d,
    "data-rfd-placeholder-context-id": u,
    onTransitionEnd: p,
    ref: e.innerRef
  });
};
var $h = ue.memo(Bh);
function Wr(e) {
  return typeof e == "boolean";
}
function Kr(e, t) {
  t.forEach((r) => r(e));
}
const jh = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? V(!1, "A Droppable requires a droppableId prop") : V()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? V(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : V());
}, function({
  props: t
}) {
  Wr(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? V(!1, "isDropDisabled must be a boolean") : V()), Wr(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? V(!1, "isCombineEnabled must be a boolean") : V()), Wr(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? V(!1, "ignoreContainerClipping must be a boolean") : V());
}, function({
  getDroppableRef: t
}) {
  fl(t());
}], qh = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && be(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Vh = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? V(!1, "Must provide a clone render function (renderClone) for virtual lists") : V());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? V(!1, "Expected virtual list to not have a placeholder") : V());
}];
function Fh(e) {
  Yt(() => {
    Kr(e, jh), e.props.mode === "standard" && Kr(e, qh), e.props.mode === "virtual" && Kr(e, Vh);
  });
}
class Gh extends ue.PureComponent {
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
const Uh = (e) => {
  const t = $i(br);
  t || (process.env.NODE_ENV !== "production" ? V(!1, "Could not find app context") : V());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = he(null), a = he(null), {
    children: u,
    droppableId: c,
    type: f,
    mode: p,
    direction: d,
    ignoreContainerClipping: l,
    isDropDisabled: i,
    isCombineEnabled: s,
    snapshot: m,
    useClone: v,
    updateViewportMaxScroll: h,
    getContainerForClone: g
  } = e, b = ie(() => o.current, []), _ = ie((x = null) => {
    o.current = x;
  }, []), y = ie(() => a.current, []), E = ie((x = null) => {
    a.current = x;
  }, []);
  Fh({
    props: e,
    getDroppableRef: b,
    getPlaceholderRef: y
  });
  const A = ie(() => {
    n() && h({
      maxScroll: Za()
    });
  }, [n, h]);
  kh({
    droppableId: c,
    type: f,
    mode: p,
    direction: d,
    isDropDisabled: i,
    isCombineEnabled: s,
    ignoreContainerClipping: l,
    getDroppableRef: b
  });
  const w = pe(() => ue.createElement(Gh, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: x,
    data: T,
    animate: I
  }) => ue.createElement($h, {
    placeholder: T,
    onClose: x,
    innerRef: E,
    animate: I,
    contextId: r,
    onTransitionEnd: A
  })), [r, A, e.placeholder, e.shouldAnimatePlaceholder, E]), S = pe(() => ({
    innerRef: _,
    placeholder: w,
    droppableProps: {
      "data-rfd-droppable-id": c,
      "data-rfd-droppable-context-id": r
    }
  }), [r, c, w, _]), P = v ? v.dragging.draggableId : null, N = pe(() => ({
    droppableId: c,
    type: f,
    isUsingCloneFor: P
  }), [c, P, f]);
  function O() {
    if (!v)
      return null;
    const {
      dragging: x,
      render: T
    } = v, I = ue.createElement(vl, {
      draggableId: x.draggableId,
      index: x.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (L, B) => T(L, B, x));
    return ji.createPortal(I, g());
  }
  return ue.createElement(Kn.Provider, {
    value: N
  }, u(S, m), O());
};
var Hh = Uh;
function zh() {
  return document.body || (process.env.NODE_ENV !== "production" ? V(!1, "document.body is not ready") : V()), document.body;
}
const ai = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: zh
}, yl = (e) => {
  let t = {
    ...e
  }, r;
  for (r in ai)
    e[r] === void 0 && (t = {
      ...t,
      [r]: ai[r]
    });
  return t;
}, Yr = (e, t) => e === t.droppable.type, li = (e, t) => t.draggables[e.draggable.id], Wh = () => {
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
  }, r = De((a) => ({
    draggableId: a.id,
    type: a.type,
    source: {
      index: a.index,
      droppableId: a.droppableId
    }
  })), n = De((a, u, c, f, p, d) => {
    const l = p.descriptor.id;
    if (p.descriptor.droppableId === a) {
      const m = d ? {
        render: d,
        dragging: r(p.descriptor)
      } : null, v = {
        isDraggingOver: c,
        draggingOverWith: c ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: p.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: v,
        useClone: m
      };
    }
    if (!u)
      return t;
    if (!f)
      return e;
    const s = {
      isDraggingOver: c,
      draggingOverWith: l,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: p.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: s,
      useClone: null
    };
  });
  return (a, u) => {
    const c = yl(u), f = c.droppableId, p = c.type, d = !c.isDropDisabled, l = c.renderClone;
    if (Gt(a)) {
      const i = a.critical;
      if (!Yr(p, i))
        return t;
      const s = li(i, a.dimensions), m = Be(a.impact) === f;
      return n(f, d, m, m, s, l);
    }
    if (a.phase === "DROP_ANIMATING") {
      const i = a.completed;
      if (!Yr(p, i.critical))
        return t;
      const s = li(i.critical, a.dimensions);
      return n(f, d, pl(i.result) === f, Be(i.impact) === f, s, l);
    }
    if (a.phase === "IDLE" && a.completed && !a.shouldFlush) {
      const i = a.completed;
      if (!Yr(p, i.critical))
        return t;
      const s = Be(i.impact) === f, m = !!(i.impact.at && i.impact.at.type === "COMBINE"), v = i.critical.droppable.id === f;
      return s ? m ? e : t : v ? e : t;
    }
    return t;
  };
}, Kh = {
  updateViewportMaxScroll: Sf
}, Yh = va(Wh, Kh, (e, t, r) => ({
  ...yl(r),
  ...e,
  ...t
}), {
  context: Gn,
  areStatePropsEqual: dl
})(Hh);
var Zh = Yh;
const Y0 = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: n,
  isDragDisabled: o = !0,
  isLoading: a,
  onRowClick: u,
  itemClickKey: c,
  haveLinks: f,
  className: p
}) => {
  const [d, l] = Re(null), [i, s] = Re(e);
  Se(() => {
    s(e);
  }, [e]);
  const m = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", v = (g) => {
    u == null || u(g), l(g);
  }, h = (g) => {
    if (!g.destination || !(i != null && i.length)) return;
    const b = g.source.index, _ = g.destination.index, y = [...i], [E] = y.splice(b, 1);
    y.splice(_, 0, E), s(y);
  };
  return !(e != null && e.length) && !a ? /* @__PURE__ */ Ae("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ oe("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : a ? /* @__PURE__ */ oe("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ oe(yn, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ oe(Zi, { className: p, children: /* @__PURE__ */ oe("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ oe("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ oe(Jp, { onDragEnd: h, children: /* @__PURE__ */ oe(Zh, { droppableId: "dropArray", direction: "vertical", children: (g) => /* @__PURE__ */ Ae("table", { className: "w-full", children: [
    /* @__PURE__ */ oe("thead", { children: /* @__PURE__ */ oe("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((b, _) => /* @__PURE__ */ oe(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === b.name.find((y) => y) ? `-${b.name.find((y) => y) ?? ""}` : b.name.find((y) => y) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === b.name.find((y) => y) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: b.title
      },
      _
    )) }) }),
    /* @__PURE__ */ Ae(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...g.droppableProps,
        ref: g.innerRef,
        children: [
          i == null ? void 0 : i.map((b, _) => {
            var y;
            return /* @__PURE__ */ oe(
              _h,
              {
                isDragDisabled: o,
                draggableId: (y = b == null ? void 0 : b.id) == null ? void 0 : y.toString(),
                index: _,
                children: (E) => {
                  const A = {
                    ...E.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ oe(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${d === i[_] && m}`,
                      onClick: () => v(
                        c ? b[c] : b.id
                      ),
                      ref: E.innerRef,
                      ...E.draggableProps,
                      ...E.dragHandleProps,
                      style: A,
                      children: t.map((w, S) => {
                        var N;
                        let P = (N = w == null ? void 0 : w.name) == null ? void 0 : N.reduce(
                          (O, x) => O == null ? void 0 : O[x],
                          i == null ? void 0 : i[_]
                        );
                        return /* @__PURE__ */ oe(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${f && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: w.transform ? w.transform(P, _) : P
                          },
                          S
                        );
                      })
                    }
                  );
                }
              },
              b == null ? void 0 : b.id
            );
          }),
          g.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, Z0 = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ oe(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
);
function Xh() {
  this.__data__ = [], this.size = 0;
}
var Jh = Xh;
function Qh(e, t) {
  return e === t || e !== e && t !== t;
}
var bl = Qh, ev = bl;
function tv(e, t) {
  for (var r = e.length; r--; )
    if (ev(e[r][0], t))
      return r;
  return -1;
}
var _r = tv, rv = _r, nv = Array.prototype, ov = nv.splice;
function iv(e) {
  var t = this.__data__, r = rv(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ov.call(t, r, 1), --this.size, !0;
}
var av = iv, lv = _r;
function sv(e) {
  var t = this.__data__, r = lv(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var uv = sv, cv = _r;
function fv(e) {
  return cv(this.__data__, e) > -1;
}
var dv = fv, pv = _r;
function hv(e, t) {
  var r = this.__data__, n = pv(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var vv = hv, gv = Jh, mv = av, yv = uv, bv = dv, Ev = vv;
function gt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
gt.prototype.clear = gv;
gt.prototype.delete = mv;
gt.prototype.get = yv;
gt.prototype.has = bv;
gt.prototype.set = Ev;
var Or = gt, _v = Or;
function Ov() {
  this.__data__ = new _v(), this.size = 0;
}
var xv = Ov;
function wv(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Nv = wv;
function Sv(e) {
  return this.__data__.get(e);
}
var Av = Sv;
function Dv(e) {
  return this.__data__.has(e);
}
var Tv = Dv, Pv = typeof Le == "object" && Le && Le.Object === Object && Le, El = Pv, Iv = El, Cv = typeof self == "object" && self && self.Object === Object && self, Rv = Iv || Cv || Function("return this")(), ze = Rv, kv = ze, Lv = kv.Symbol, Xn = Lv, si = Xn, _l = Object.prototype, Mv = _l.hasOwnProperty, Bv = _l.toString, At = si ? si.toStringTag : void 0;
function $v(e) {
  var t = Mv.call(e, At), r = e[At];
  try {
    e[At] = void 0;
    var n = !0;
  } catch {
  }
  var o = Bv.call(e);
  return n && (t ? e[At] = r : delete e[At]), o;
}
var jv = $v, qv = Object.prototype, Vv = qv.toString;
function Fv(e) {
  return Vv.call(e);
}
var Gv = Fv, ui = Xn, Uv = jv, Hv = Gv, zv = "[object Null]", Wv = "[object Undefined]", ci = ui ? ui.toStringTag : void 0;
function Kv(e) {
  return e == null ? e === void 0 ? Wv : zv : ci && ci in Object(e) ? Uv(e) : Hv(e);
}
var xr = Kv;
function Yv(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ol = Yv, Zv = xr, Xv = Ol, Jv = "[object AsyncFunction]", Qv = "[object Function]", eg = "[object GeneratorFunction]", tg = "[object Proxy]";
function rg(e) {
  if (!Xv(e))
    return !1;
  var t = Zv(e);
  return t == Qv || t == eg || t == Jv || t == tg;
}
var xl = rg, ng = ze, og = ng["__core-js_shared__"], ig = og, Zr = ig, fi = function() {
  var e = /[^.]+$/.exec(Zr && Zr.keys && Zr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ag(e) {
  return !!fi && fi in e;
}
var lg = ag, sg = Function.prototype, ug = sg.toString;
function cg(e) {
  if (e != null) {
    try {
      return ug.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wl = cg, fg = xl, dg = lg, pg = Ol, hg = wl, vg = /[\\^$.*+?()[\]{}|]/g, gg = /^\[object .+?Constructor\]$/, mg = Function.prototype, yg = Object.prototype, bg = mg.toString, Eg = yg.hasOwnProperty, _g = RegExp(
  "^" + bg.call(Eg).replace(vg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Og(e) {
  if (!pg(e) || dg(e))
    return !1;
  var t = fg(e) ? _g : gg;
  return t.test(hg(e));
}
var xg = Og;
function wg(e, t) {
  return e == null ? void 0 : e[t];
}
var Ng = wg, Sg = xg, Ag = Ng;
function Dg(e, t) {
  var r = Ag(e, t);
  return Sg(r) ? r : void 0;
}
var mt = Dg, Tg = mt, Pg = ze, Ig = Tg(Pg, "Map"), Jn = Ig, Cg = mt, Rg = Cg(Object, "create"), wr = Rg, di = wr;
function kg() {
  this.__data__ = di ? di(null) : {}, this.size = 0;
}
var Lg = kg;
function Mg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Bg = Mg, $g = wr, jg = "__lodash_hash_undefined__", qg = Object.prototype, Vg = qg.hasOwnProperty;
function Fg(e) {
  var t = this.__data__;
  if ($g) {
    var r = t[e];
    return r === jg ? void 0 : r;
  }
  return Vg.call(t, e) ? t[e] : void 0;
}
var Gg = Fg, Ug = wr, Hg = Object.prototype, zg = Hg.hasOwnProperty;
function Wg(e) {
  var t = this.__data__;
  return Ug ? t[e] !== void 0 : zg.call(t, e);
}
var Kg = Wg, Yg = wr, Zg = "__lodash_hash_undefined__";
function Xg(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Yg && t === void 0 ? Zg : t, this;
}
var Jg = Xg, Qg = Lg, em = Bg, tm = Gg, rm = Kg, nm = Jg;
function yt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yt.prototype.clear = Qg;
yt.prototype.delete = em;
yt.prototype.get = tm;
yt.prototype.has = rm;
yt.prototype.set = nm;
var om = yt, pi = om, im = Or, am = Jn;
function lm() {
  this.size = 0, this.__data__ = {
    hash: new pi(),
    map: new (am || im)(),
    string: new pi()
  };
}
var sm = lm;
function um(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var cm = um, fm = cm;
function dm(e, t) {
  var r = e.__data__;
  return fm(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Nr = dm, pm = Nr;
function hm(e) {
  var t = pm(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var vm = hm, gm = Nr;
function mm(e) {
  return gm(this, e).get(e);
}
var ym = mm, bm = Nr;
function Em(e) {
  return bm(this, e).has(e);
}
var _m = Em, Om = Nr;
function xm(e, t) {
  var r = Om(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var wm = xm, Nm = sm, Sm = vm, Am = ym, Dm = _m, Tm = wm;
function bt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
bt.prototype.clear = Nm;
bt.prototype.delete = Sm;
bt.prototype.get = Am;
bt.prototype.has = Dm;
bt.prototype.set = Tm;
var Nl = bt, Pm = Or, Im = Jn, Cm = Nl, Rm = 200;
function km(e, t) {
  var r = this.__data__;
  if (r instanceof Pm) {
    var n = r.__data__;
    if (!Im || n.length < Rm - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Cm(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Lm = km, Mm = Or, Bm = xv, $m = Nv, jm = Av, qm = Tv, Vm = Lm;
function Et(e) {
  var t = this.__data__ = new Mm(e);
  this.size = t.size;
}
Et.prototype.clear = Bm;
Et.prototype.delete = $m;
Et.prototype.get = jm;
Et.prototype.has = qm;
Et.prototype.set = Vm;
var Fm = Et, Gm = "__lodash_hash_undefined__";
function Um(e) {
  return this.__data__.set(e, Gm), this;
}
var Hm = Um;
function zm(e) {
  return this.__data__.has(e);
}
var Wm = zm, Km = Nl, Ym = Hm, Zm = Wm;
function ur(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Km(); ++t < r; )
    this.add(e[t]);
}
ur.prototype.add = ur.prototype.push = Ym;
ur.prototype.has = Zm;
var Xm = ur;
function Jm(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Qm = Jm;
function ey(e, t) {
  return e.has(t);
}
var ty = ey, ry = Xm, ny = Qm, oy = ty, iy = 1, ay = 2;
function ly(e, t, r, n, o, a) {
  var u = r & iy, c = e.length, f = t.length;
  if (c != f && !(u && f > c))
    return !1;
  var p = a.get(e), d = a.get(t);
  if (p && d)
    return p == t && d == e;
  var l = -1, i = !0, s = r & ay ? new ry() : void 0;
  for (a.set(e, t), a.set(t, e); ++l < c; ) {
    var m = e[l], v = t[l];
    if (n)
      var h = u ? n(v, m, l, t, e, a) : n(m, v, l, e, t, a);
    if (h !== void 0) {
      if (h)
        continue;
      i = !1;
      break;
    }
    if (s) {
      if (!ny(t, function(g, b) {
        if (!oy(s, b) && (m === g || o(m, g, r, n, a)))
          return s.push(b);
      })) {
        i = !1;
        break;
      }
    } else if (!(m === v || o(m, v, r, n, a))) {
      i = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), i;
}
var Sl = ly, sy = ze, uy = sy.Uint8Array, cy = uy;
function fy(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
var dy = fy;
function py(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var hy = py, hi = Xn, vi = cy, vy = bl, gy = Sl, my = dy, yy = hy, by = 1, Ey = 2, _y = "[object Boolean]", Oy = "[object Date]", xy = "[object Error]", wy = "[object Map]", Ny = "[object Number]", Sy = "[object RegExp]", Ay = "[object Set]", Dy = "[object String]", Ty = "[object Symbol]", Py = "[object ArrayBuffer]", Iy = "[object DataView]", gi = hi ? hi.prototype : void 0, Xr = gi ? gi.valueOf : void 0;
function Cy(e, t, r, n, o, a, u) {
  switch (r) {
    case Iy:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Py:
      return !(e.byteLength != t.byteLength || !a(new vi(e), new vi(t)));
    case _y:
    case Oy:
    case Ny:
      return vy(+e, +t);
    case xy:
      return e.name == t.name && e.message == t.message;
    case Sy:
    case Dy:
      return e == t + "";
    case wy:
      var c = my;
    case Ay:
      var f = n & by;
      if (c || (c = yy), e.size != t.size && !f)
        return !1;
      var p = u.get(e);
      if (p)
        return p == t;
      n |= Ey, u.set(e, t);
      var d = gy(c(e), c(t), n, o, a, u);
      return u.delete(e), d;
    case Ty:
      if (Xr)
        return Xr.call(e) == Xr.call(t);
  }
  return !1;
}
var Ry = Cy;
function ky(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Ly = ky, My = Array.isArray, Qn = My, By = Ly, $y = Qn;
function jy(e, t, r) {
  var n = t(e);
  return $y(e) ? n : By(n, r(e));
}
var qy = jy;
function Vy(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var u = e[r];
    t(u, r, e) && (a[o++] = u);
  }
  return a;
}
var Fy = Vy;
function Gy() {
  return [];
}
var Uy = Gy, Hy = Fy, zy = Uy, Wy = Object.prototype, Ky = Wy.propertyIsEnumerable, mi = Object.getOwnPropertySymbols, Yy = mi ? function(e) {
  return e == null ? [] : (e = Object(e), Hy(mi(e), function(t) {
    return Ky.call(e, t);
  }));
} : zy, Zy = Yy;
function Xy(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Jy = Xy;
function Qy(e) {
  return e != null && typeof e == "object";
}
var Sr = Qy, eb = xr, tb = Sr, rb = "[object Arguments]";
function nb(e) {
  return tb(e) && eb(e) == rb;
}
var ob = nb, yi = ob, ib = Sr, Al = Object.prototype, ab = Al.hasOwnProperty, lb = Al.propertyIsEnumerable, sb = yi(/* @__PURE__ */ function() {
  return arguments;
}()) ? yi : function(e) {
  return ib(e) && ab.call(e, "callee") && !lb.call(e, "callee");
}, ub = sb, cr = { exports: {} };
function cb() {
  return !1;
}
var fb = cb;
cr.exports;
(function(e, t) {
  var r = ze, n = fb, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, u = a && a.exports === o, c = u ? r.Buffer : void 0, f = c ? c.isBuffer : void 0, p = f || n;
  e.exports = p;
})(cr, cr.exports);
var Dl = cr.exports, db = 9007199254740991, pb = /^(?:0|[1-9]\d*)$/;
function hb(e, t) {
  var r = typeof e;
  return t = t ?? db, !!t && (r == "number" || r != "symbol" && pb.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var vb = hb, gb = 9007199254740991;
function mb(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gb;
}
var Tl = mb, yb = xr, bb = Tl, Eb = Sr, _b = "[object Arguments]", Ob = "[object Array]", xb = "[object Boolean]", wb = "[object Date]", Nb = "[object Error]", Sb = "[object Function]", Ab = "[object Map]", Db = "[object Number]", Tb = "[object Object]", Pb = "[object RegExp]", Ib = "[object Set]", Cb = "[object String]", Rb = "[object WeakMap]", kb = "[object ArrayBuffer]", Lb = "[object DataView]", Mb = "[object Float32Array]", Bb = "[object Float64Array]", $b = "[object Int8Array]", jb = "[object Int16Array]", qb = "[object Int32Array]", Vb = "[object Uint8Array]", Fb = "[object Uint8ClampedArray]", Gb = "[object Uint16Array]", Ub = "[object Uint32Array]", _e = {};
_e[Mb] = _e[Bb] = _e[$b] = _e[jb] = _e[qb] = _e[Vb] = _e[Fb] = _e[Gb] = _e[Ub] = !0;
_e[_b] = _e[Ob] = _e[kb] = _e[xb] = _e[Lb] = _e[wb] = _e[Nb] = _e[Sb] = _e[Ab] = _e[Db] = _e[Tb] = _e[Pb] = _e[Ib] = _e[Cb] = _e[Rb] = !1;
function Hb(e) {
  return Eb(e) && bb(e.length) && !!_e[yb(e)];
}
var zb = Hb;
function Wb(e) {
  return function(t) {
    return e(t);
  };
}
var Kb = Wb, fr = { exports: {} };
fr.exports;
(function(e, t) {
  var r = El, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, u = a && r.process, c = function() {
    try {
      var f = o && o.require && o.require("util").types;
      return f || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(fr, fr.exports);
var Yb = fr.exports, Zb = zb, Xb = Kb, bi = Yb, Ei = bi && bi.isTypedArray, Jb = Ei ? Xb(Ei) : Zb, Pl = Jb, Qb = Jy, e1 = ub, t1 = Qn, r1 = Dl, n1 = vb, o1 = Pl, i1 = Object.prototype, a1 = i1.hasOwnProperty;
function l1(e, t) {
  var r = t1(e), n = !r && e1(e), o = !r && !n && r1(e), a = !r && !n && !o && o1(e), u = r || n || o || a, c = u ? Qb(e.length, String) : [], f = c.length;
  for (var p in e)
    (t || a1.call(e, p)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    n1(p, f))) && c.push(p);
  return c;
}
var s1 = l1, u1 = Object.prototype;
function c1(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || u1;
  return e === r;
}
var f1 = c1;
function d1(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var p1 = d1, h1 = p1, v1 = h1(Object.keys, Object), g1 = v1, m1 = f1, y1 = g1, b1 = Object.prototype, E1 = b1.hasOwnProperty;
function _1(e) {
  if (!m1(e))
    return y1(e);
  var t = [];
  for (var r in Object(e))
    E1.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var O1 = _1, x1 = xl, w1 = Tl;
function N1(e) {
  return e != null && w1(e.length) && !x1(e);
}
var S1 = N1, A1 = s1, D1 = O1, T1 = S1;
function P1(e) {
  return T1(e) ? A1(e) : D1(e);
}
var I1 = P1, C1 = qy, R1 = Zy, k1 = I1;
function L1(e) {
  return C1(e, k1, R1);
}
var M1 = L1, _i = M1, B1 = 1, $1 = Object.prototype, j1 = $1.hasOwnProperty;
function q1(e, t, r, n, o, a) {
  var u = r & B1, c = _i(e), f = c.length, p = _i(t), d = p.length;
  if (f != d && !u)
    return !1;
  for (var l = f; l--; ) {
    var i = c[l];
    if (!(u ? i in t : j1.call(t, i)))
      return !1;
  }
  var s = a.get(e), m = a.get(t);
  if (s && m)
    return s == t && m == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var h = u; ++l < f; ) {
    i = c[l];
    var g = e[i], b = t[i];
    if (n)
      var _ = u ? n(b, g, i, t, e, a) : n(g, b, i, e, t, a);
    if (!(_ === void 0 ? g === b || o(g, b, r, n, a) : _)) {
      v = !1;
      break;
    }
    h || (h = i == "constructor");
  }
  if (v && !h) {
    var y = e.constructor, E = t.constructor;
    y != E && "constructor" in e && "constructor" in t && !(typeof y == "function" && y instanceof y && typeof E == "function" && E instanceof E) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var V1 = q1, F1 = mt, G1 = ze, U1 = F1(G1, "DataView"), H1 = U1, z1 = mt, W1 = ze, K1 = z1(W1, "Promise"), Y1 = K1, Z1 = mt, X1 = ze, J1 = Z1(X1, "Set"), Q1 = J1, e0 = mt, t0 = ze, r0 = e0(t0, "WeakMap"), n0 = r0, dn = H1, pn = Jn, hn = Y1, vn = Q1, gn = n0, Il = xr, _t = wl, Oi = "[object Map]", o0 = "[object Object]", xi = "[object Promise]", wi = "[object Set]", Ni = "[object WeakMap]", Si = "[object DataView]", i0 = _t(dn), a0 = _t(pn), l0 = _t(hn), s0 = _t(vn), u0 = _t(gn), ot = Il;
(dn && ot(new dn(new ArrayBuffer(1))) != Si || pn && ot(new pn()) != Oi || hn && ot(hn.resolve()) != xi || vn && ot(new vn()) != wi || gn && ot(new gn()) != Ni) && (ot = function(e) {
  var t = Il(e), r = t == o0 ? e.constructor : void 0, n = r ? _t(r) : "";
  if (n)
    switch (n) {
      case i0:
        return Si;
      case a0:
        return Oi;
      case l0:
        return xi;
      case s0:
        return wi;
      case u0:
        return Ni;
    }
  return t;
});
var c0 = ot, Jr = Fm, f0 = Sl, d0 = Ry, p0 = V1, Ai = c0, Di = Qn, Ti = Dl, h0 = Pl, v0 = 1, Pi = "[object Arguments]", Ii = "[object Array]", Qt = "[object Object]", g0 = Object.prototype, Ci = g0.hasOwnProperty;
function m0(e, t, r, n, o, a) {
  var u = Di(e), c = Di(t), f = u ? Ii : Ai(e), p = c ? Ii : Ai(t);
  f = f == Pi ? Qt : f, p = p == Pi ? Qt : p;
  var d = f == Qt, l = p == Qt, i = f == p;
  if (i && Ti(e)) {
    if (!Ti(t))
      return !1;
    u = !0, d = !1;
  }
  if (i && !d)
    return a || (a = new Jr()), u || h0(e) ? f0(e, t, r, n, o, a) : d0(e, t, f, r, n, o, a);
  if (!(r & v0)) {
    var s = d && Ci.call(e, "__wrapped__"), m = l && Ci.call(t, "__wrapped__");
    if (s || m) {
      var v = s ? e.value() : e, h = m ? t.value() : t;
      return a || (a = new Jr()), o(v, h, r, n, a);
    }
  }
  return i ? (a || (a = new Jr()), p0(e, t, r, n, o, a)) : !1;
}
var y0 = m0, b0 = y0, Ri = Sr;
function Cl(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Ri(e) && !Ri(t) ? e !== e && t !== t : b0(e, t, r, n, Cl, o);
}
var E0 = Cl, _0 = E0;
function O0(e, t) {
  return _0(e, t);
}
var x0 = O0, Rl = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(typeof self < "u" ? self : Le, function() {
    return (
      /******/
      function(r) {
        var n = {};
        function o(a) {
          if (n[a])
            return n[a].exports;
          var u = n[a] = {
            /******/
            i: a,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return r[a].call(u.exports, u, u.exports, o), u.l = !0, u.exports;
        }
        return o.m = r, o.c = n, o.d = function(a, u, c) {
          o.o(a, u) || Object.defineProperty(a, u, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: c
            /******/
          });
        }, o.n = function(a) {
          var u = a && a.__esModule ? (
            /******/
            function() {
              return a.default;
            }
          ) : (
            /******/
            function() {
              return a;
            }
          );
          return o.d(u, "a", u), u;
        }, o.o = function(a, u) {
          return Object.prototype.hasOwnProperty.call(a, u);
        }, o.p = "", o(o.s = 109);
      }([
        /* 0 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var a = o(17), u = o(18), c = o(19), f = o(45), p = o(46), d = o(47), l = o(48), i = o(49), s = o(12), m = o(32), v = o(33), h = o(31), g = o(1), b = {
            Scope: g.Scope,
            create: g.create,
            find: g.find,
            query: g.query,
            register: g.register,
            Container: a.default,
            Format: u.default,
            Leaf: c.default,
            Embed: l.default,
            Scroll: f.default,
            Block: d.default,
            Inline: p.default,
            Text: i.default,
            Attributor: {
              Attribute: s.default,
              Class: m.default,
              Style: v.default,
              Store: h.default
            }
          };
          n.default = b;
        },
        /* 1 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, b) {
              g.__proto__ = b;
            } || function(g, b) {
              for (var _ in b) b.hasOwnProperty(_) && (g[_] = b[_]);
            };
            return function(g, b) {
              h(g, b);
              function _() {
                this.constructor = g;
              }
              g.prototype = b === null ? Object.create(b) : (_.prototype = b.prototype, new _());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = (
            /** @class */
            function(h) {
              a(g, h);
              function g(b) {
                var _ = this;
                return b = "[Parchment] " + b, _ = h.call(this, b) || this, _.message = b, _.name = _.constructor.name, _;
              }
              return g;
            }(Error)
          );
          n.ParchmentError = u;
          var c = {}, f = {}, p = {}, d = {};
          n.DATA_KEY = "__blot";
          var l;
          (function(h) {
            h[h.TYPE = 3] = "TYPE", h[h.LEVEL = 12] = "LEVEL", h[h.ATTRIBUTE = 13] = "ATTRIBUTE", h[h.BLOT = 14] = "BLOT", h[h.INLINE = 7] = "INLINE", h[h.BLOCK = 11] = "BLOCK", h[h.BLOCK_BLOT = 10] = "BLOCK_BLOT", h[h.INLINE_BLOT = 6] = "INLINE_BLOT", h[h.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", h[h.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", h[h.ANY = 15] = "ANY";
          })(l = n.Scope || (n.Scope = {}));
          function i(h, g) {
            var b = m(h);
            if (b == null)
              throw new u("Unable to create " + h + " blot");
            var _ = b, y = (
              // @ts-ignore
              h instanceof Node || h.nodeType === Node.TEXT_NODE ? h : _.create(g)
            );
            return new _(y, g);
          }
          n.create = i;
          function s(h, g) {
            return g === void 0 && (g = !1), h == null ? null : h[n.DATA_KEY] != null ? h[n.DATA_KEY].blot : g ? s(h.parentNode, g) : null;
          }
          n.find = s;
          function m(h, g) {
            g === void 0 && (g = l.ANY);
            var b;
            if (typeof h == "string")
              b = d[h] || c[h];
            else if (h instanceof Text || h.nodeType === Node.TEXT_NODE)
              b = d.text;
            else if (typeof h == "number")
              h & l.LEVEL & l.BLOCK ? b = d.block : h & l.LEVEL & l.INLINE && (b = d.inline);
            else if (h instanceof HTMLElement) {
              var _ = (h.getAttribute("class") || "").split(/\s+/);
              for (var y in _)
                if (b = f[_[y]], b)
                  break;
              b = b || p[h.tagName];
            }
            return b == null ? null : g & l.LEVEL & b.scope && g & l.TYPE & b.scope ? b : null;
          }
          n.query = m;
          function v() {
            for (var h = [], g = 0; g < arguments.length; g++)
              h[g] = arguments[g];
            if (h.length > 1)
              return h.map(function(y) {
                return v(y);
              });
            var b = h[0];
            if (typeof b.blotName != "string" && typeof b.attrName != "string")
              throw new u("Invalid definition");
            if (b.blotName === "abstract")
              throw new u("Cannot register abstract class");
            if (d[b.blotName || b.attrName] = b, typeof b.keyName == "string")
              c[b.keyName] = b;
            else if (b.className != null && (f[b.className] = b), b.tagName != null) {
              Array.isArray(b.tagName) ? b.tagName = b.tagName.map(function(y) {
                return y.toUpperCase();
              }) : b.tagName = b.tagName.toUpperCase();
              var _ = Array.isArray(b.tagName) ? b.tagName : [b.tagName];
              _.forEach(function(y) {
                (p[y] == null || b.className == null) && (p[y] = b);
              });
            }
            return b;
          }
          n.register = v;
        },
        /* 2 */
        /***/
        function(r, n, o) {
          var a = o(51), u = o(11), c = o(3), f = o(20), p = "\0", d = function(l) {
            Array.isArray(l) ? this.ops = l : l != null && Array.isArray(l.ops) ? this.ops = l.ops : this.ops = [];
          };
          d.prototype.insert = function(l, i) {
            var s = {};
            return l.length === 0 ? this : (s.insert = l, i != null && typeof i == "object" && Object.keys(i).length > 0 && (s.attributes = i), this.push(s));
          }, d.prototype.delete = function(l) {
            return l <= 0 ? this : this.push({ delete: l });
          }, d.prototype.retain = function(l, i) {
            if (l <= 0) return this;
            var s = { retain: l };
            return i != null && typeof i == "object" && Object.keys(i).length > 0 && (s.attributes = i), this.push(s);
          }, d.prototype.push = function(l) {
            var i = this.ops.length, s = this.ops[i - 1];
            if (l = c(!0, {}, l), typeof s == "object") {
              if (typeof l.delete == "number" && typeof s.delete == "number")
                return this.ops[i - 1] = { delete: s.delete + l.delete }, this;
              if (typeof s.delete == "number" && l.insert != null && (i -= 1, s = this.ops[i - 1], typeof s != "object"))
                return this.ops.unshift(l), this;
              if (u(l.attributes, s.attributes)) {
                if (typeof l.insert == "string" && typeof s.insert == "string")
                  return this.ops[i - 1] = { insert: s.insert + l.insert }, typeof l.attributes == "object" && (this.ops[i - 1].attributes = l.attributes), this;
                if (typeof l.retain == "number" && typeof s.retain == "number")
                  return this.ops[i - 1] = { retain: s.retain + l.retain }, typeof l.attributes == "object" && (this.ops[i - 1].attributes = l.attributes), this;
              }
            }
            return i === this.ops.length ? this.ops.push(l) : this.ops.splice(i, 0, l), this;
          }, d.prototype.chop = function() {
            var l = this.ops[this.ops.length - 1];
            return l && l.retain && !l.attributes && this.ops.pop(), this;
          }, d.prototype.filter = function(l) {
            return this.ops.filter(l);
          }, d.prototype.forEach = function(l) {
            this.ops.forEach(l);
          }, d.prototype.map = function(l) {
            return this.ops.map(l);
          }, d.prototype.partition = function(l) {
            var i = [], s = [];
            return this.forEach(function(m) {
              var v = l(m) ? i : s;
              v.push(m);
            }), [i, s];
          }, d.prototype.reduce = function(l, i) {
            return this.ops.reduce(l, i);
          }, d.prototype.changeLength = function() {
            return this.reduce(function(l, i) {
              return i.insert ? l + f.length(i) : i.delete ? l - i.delete : l;
            }, 0);
          }, d.prototype.length = function() {
            return this.reduce(function(l, i) {
              return l + f.length(i);
            }, 0);
          }, d.prototype.slice = function(l, i) {
            l = l || 0, typeof i != "number" && (i = 1 / 0);
            for (var s = [], m = f.iterator(this.ops), v = 0; v < i && m.hasNext(); ) {
              var h;
              v < l ? h = m.next(l - v) : (h = m.next(i - v), s.push(h)), v += f.length(h);
            }
            return new d(s);
          }, d.prototype.compose = function(l) {
            var i = f.iterator(this.ops), s = f.iterator(l.ops), m = [], v = s.peek();
            if (v != null && typeof v.retain == "number" && v.attributes == null) {
              for (var h = v.retain; i.peekType() === "insert" && i.peekLength() <= h; )
                h -= i.peekLength(), m.push(i.next());
              v.retain - h > 0 && s.next(v.retain - h);
            }
            for (var g = new d(m); i.hasNext() || s.hasNext(); )
              if (s.peekType() === "insert")
                g.push(s.next());
              else if (i.peekType() === "delete")
                g.push(i.next());
              else {
                var b = Math.min(i.peekLength(), s.peekLength()), _ = i.next(b), y = s.next(b);
                if (typeof y.retain == "number") {
                  var E = {};
                  typeof _.retain == "number" ? E.retain = b : E.insert = _.insert;
                  var A = f.attributes.compose(_.attributes, y.attributes, typeof _.retain == "number");
                  if (A && (E.attributes = A), g.push(E), !s.hasNext() && u(g.ops[g.ops.length - 1], E)) {
                    var w = new d(i.rest());
                    return g.concat(w).chop();
                  }
                } else typeof y.delete == "number" && typeof _.retain == "number" && g.push(y);
              }
            return g.chop();
          }, d.prototype.concat = function(l) {
            var i = new d(this.ops.slice());
            return l.ops.length > 0 && (i.push(l.ops[0]), i.ops = i.ops.concat(l.ops.slice(1))), i;
          }, d.prototype.diff = function(l, i) {
            if (this.ops === l.ops)
              return new d();
            var s = [this, l].map(function(b) {
              return b.map(function(_) {
                if (_.insert != null)
                  return typeof _.insert == "string" ? _.insert : p;
                var y = b === l ? "on" : "with";
                throw new Error("diff() called " + y + " non-document");
              }).join("");
            }), m = new d(), v = a(s[0], s[1], i), h = f.iterator(this.ops), g = f.iterator(l.ops);
            return v.forEach(function(b) {
              for (var _ = b[1].length; _ > 0; ) {
                var y = 0;
                switch (b[0]) {
                  case a.INSERT:
                    y = Math.min(g.peekLength(), _), m.push(g.next(y));
                    break;
                  case a.DELETE:
                    y = Math.min(_, h.peekLength()), h.next(y), m.delete(y);
                    break;
                  case a.EQUAL:
                    y = Math.min(h.peekLength(), g.peekLength(), _);
                    var E = h.next(y), A = g.next(y);
                    u(E.insert, A.insert) ? m.retain(y, f.attributes.diff(E.attributes, A.attributes)) : m.push(A).delete(y);
                    break;
                }
                _ -= y;
              }
            }), m.chop();
          }, d.prototype.eachLine = function(l, i) {
            i = i || `
`;
            for (var s = f.iterator(this.ops), m = new d(), v = 0; s.hasNext(); ) {
              if (s.peekType() !== "insert") return;
              var h = s.peek(), g = f.length(h) - s.peekLength(), b = typeof h.insert == "string" ? h.insert.indexOf(i, g) - g : -1;
              if (b < 0)
                m.push(s.next());
              else if (b > 0)
                m.push(s.next(b));
              else {
                if (l(m, s.next(1).attributes || {}, v) === !1)
                  return;
                v += 1, m = new d();
              }
            }
            m.length() > 0 && l(m, {}, v);
          }, d.prototype.transform = function(l, i) {
            if (i = !!i, typeof l == "number")
              return this.transformPosition(l, i);
            for (var s = f.iterator(this.ops), m = f.iterator(l.ops), v = new d(); s.hasNext() || m.hasNext(); )
              if (s.peekType() === "insert" && (i || m.peekType() !== "insert"))
                v.retain(f.length(s.next()));
              else if (m.peekType() === "insert")
                v.push(m.next());
              else {
                var h = Math.min(s.peekLength(), m.peekLength()), g = s.next(h), b = m.next(h);
                if (g.delete)
                  continue;
                b.delete ? v.push(b) : v.retain(h, f.attributes.transform(g.attributes, b.attributes, i));
              }
            return v.chop();
          }, d.prototype.transformPosition = function(l, i) {
            i = !!i;
            for (var s = f.iterator(this.ops), m = 0; s.hasNext() && m <= l; ) {
              var v = s.peekLength(), h = s.peekType();
              if (s.next(), h === "delete") {
                l -= Math.min(v, l - m);
                continue;
              } else h === "insert" && (m < l || !i) && (l += v);
              m += v;
            }
            return l;
          }, r.exports = d;
        },
        /* 3 */
        /***/
        function(r, n) {
          var o = Object.prototype.hasOwnProperty, a = Object.prototype.toString, u = Object.defineProperty, c = Object.getOwnPropertyDescriptor, f = function(s) {
            return typeof Array.isArray == "function" ? Array.isArray(s) : a.call(s) === "[object Array]";
          }, p = function(s) {
            if (!s || a.call(s) !== "[object Object]")
              return !1;
            var m = o.call(s, "constructor"), v = s.constructor && s.constructor.prototype && o.call(s.constructor.prototype, "isPrototypeOf");
            if (s.constructor && !m && !v)
              return !1;
            var h;
            for (h in s)
              ;
            return typeof h > "u" || o.call(s, h);
          }, d = function(s, m) {
            u && m.name === "__proto__" ? u(s, m.name, {
              enumerable: !0,
              configurable: !0,
              value: m.newValue,
              writable: !0
            }) : s[m.name] = m.newValue;
          }, l = function(s, m) {
            if (m === "__proto__")
              if (o.call(s, m)) {
                if (c)
                  return c(s, m).value;
              } else return;
            return s[m];
          };
          r.exports = function i() {
            var s, m, v, h, g, b, _ = arguments[0], y = 1, E = arguments.length, A = !1;
            for (typeof _ == "boolean" && (A = _, _ = arguments[1] || {}, y = 2), (_ == null || typeof _ != "object" && typeof _ != "function") && (_ = {}); y < E; ++y)
              if (s = arguments[y], s != null)
                for (m in s)
                  v = l(_, m), h = l(s, m), _ !== h && (A && h && (p(h) || (g = f(h))) ? (g ? (g = !1, b = v && f(v) ? v : []) : b = v && p(v) ? v : {}, d(_, { name: m, newValue: i(A, b, h) })) : typeof h < "u" && d(_, { name: m, newValue: h }));
            return _;
          };
        },
        /* 4 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.BlockEmbed = n.bubbleFormats = void 0;
          var a = /* @__PURE__ */ function() {
            function O(x, T) {
              for (var I = 0; I < T.length; I++) {
                var L = T[I];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(x, L.key, L);
              }
            }
            return function(x, T, I) {
              return T && O(x.prototype, T), I && O(x, I), x;
            };
          }(), u = function O(x, T, I) {
            x === null && (x = Function.prototype);
            var L = Object.getOwnPropertyDescriptor(x, T);
            if (L === void 0) {
              var B = Object.getPrototypeOf(x);
              return B === null ? void 0 : O(B, T, I);
            } else {
              if ("value" in L)
                return L.value;
              var $ = L.get;
              return $ === void 0 ? void 0 : $.call(I);
            }
          }, c = o(3), f = _(c), p = o(2), d = _(p), l = o(0), i = _(l), s = o(16), m = _(s), v = o(6), h = _(v), g = o(7), b = _(g);
          function _(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function y(O, x) {
            if (!(O instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          function E(O, x) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return x && (typeof x == "object" || typeof x == "function") ? x : O;
          }
          function A(O, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof x);
            O.prototype = Object.create(x && x.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(O, x) : O.__proto__ = x);
          }
          var w = 1, S = function(O) {
            A(x, O);
            function x() {
              return y(this, x), E(this, (x.__proto__ || Object.getPrototypeOf(x)).apply(this, arguments));
            }
            return a(x, [{
              key: "attach",
              value: function() {
                u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "attach", this).call(this), this.attributes = new i.default.Attributor.Store(this.domNode);
              }
            }, {
              key: "delta",
              value: function() {
                return new d.default().insert(this.value(), (0, f.default)(this.formats(), this.attributes.values()));
              }
            }, {
              key: "format",
              value: function(I, L) {
                var B = i.default.query(I, i.default.Scope.BLOCK_ATTRIBUTE);
                B != null && this.attributes.attribute(B, L);
              }
            }, {
              key: "formatAt",
              value: function(I, L, B, $) {
                this.format(B, $);
              }
            }, {
              key: "insertAt",
              value: function(I, L, B) {
                if (typeof L == "string" && L.endsWith(`
`)) {
                  var $ = i.default.create(P.blotName);
                  this.parent.insertBefore($, I === 0 ? this : this.next), $.insertAt(0, L.slice(0, -1));
                } else
                  u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "insertAt", this).call(this, I, L, B);
              }
            }]), x;
          }(i.default.Embed);
          S.scope = i.default.Scope.BLOCK_BLOT;
          var P = function(O) {
            A(x, O);
            function x(T) {
              y(this, x);
              var I = E(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, T));
              return I.cache = {}, I;
            }
            return a(x, [{
              key: "delta",
              value: function() {
                return this.cache.delta == null && (this.cache.delta = this.descendants(i.default.Leaf).reduce(function(I, L) {
                  return L.length() === 0 ? I : I.insert(L.value(), N(L));
                }, new d.default()).insert(`
`, N(this))), this.cache.delta;
              }
            }, {
              key: "deleteAt",
              value: function(I, L) {
                u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "deleteAt", this).call(this, I, L), this.cache = {};
              }
            }, {
              key: "formatAt",
              value: function(I, L, B, $) {
                L <= 0 || (i.default.query(B, i.default.Scope.BLOCK) ? I + L === this.length() && this.format(B, $) : u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "formatAt", this).call(this, I, Math.min(L, this.length() - I - 1), B, $), this.cache = {});
              }
            }, {
              key: "insertAt",
              value: function(I, L, B) {
                if (B != null) return u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "insertAt", this).call(this, I, L, B);
                if (L.length !== 0) {
                  var $ = L.split(`
`), K = $.shift();
                  K.length > 0 && (I < this.length() - 1 || this.children.tail == null ? u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "insertAt", this).call(this, Math.min(I, this.length() - 1), K) : this.children.tail.insertAt(this.children.tail.length(), K), this.cache = {});
                  var j = this;
                  $.reduce(function(k, D) {
                    return j = j.split(k, !0), j.insertAt(0, D), D.length;
                  }, I + K.length);
                }
              }
            }, {
              key: "insertBefore",
              value: function(I, L) {
                var B = this.children.head;
                u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "insertBefore", this).call(this, I, L), B instanceof m.default && B.remove(), this.cache = {};
              }
            }, {
              key: "length",
              value: function() {
                return this.cache.length == null && (this.cache.length = u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "length", this).call(this) + w), this.cache.length;
              }
            }, {
              key: "moveChildren",
              value: function(I, L) {
                u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "moveChildren", this).call(this, I, L), this.cache = {};
              }
            }, {
              key: "optimize",
              value: function(I) {
                u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "optimize", this).call(this, I), this.cache = {};
              }
            }, {
              key: "path",
              value: function(I) {
                return u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "path", this).call(this, I, !0);
              }
            }, {
              key: "removeChild",
              value: function(I) {
                u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "removeChild", this).call(this, I), this.cache = {};
              }
            }, {
              key: "split",
              value: function(I) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (L && (I === 0 || I >= this.length() - w)) {
                  var B = this.clone();
                  return I === 0 ? (this.parent.insertBefore(B, this), this) : (this.parent.insertBefore(B, this.next), B);
                } else {
                  var $ = u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "split", this).call(this, I, L);
                  return this.cache = {}, $;
                }
              }
            }]), x;
          }(i.default.Block);
          P.blotName = "block", P.tagName = "P", P.defaultChild = "break", P.allowedChildren = [h.default, i.default.Embed, b.default];
          function N(O) {
            var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return O == null || (typeof O.formats == "function" && (x = (0, f.default)(x, O.formats())), O.parent == null || O.parent.blotName == "scroll" || O.parent.statics.scope !== O.statics.scope) ? x : N(O.parent, x);
          }
          n.bubbleFormats = N, n.BlockEmbed = S, n.default = P;
        },
        /* 5 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.overload = n.expandConfig = void 0;
          var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(j) {
            return typeof j;
          } : function(j) {
            return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
          }, u = /* @__PURE__ */ function() {
            function j(k, D) {
              var R = [], M = !0, U = !1, F = void 0;
              try {
                for (var C = k[Symbol.iterator](), q; !(M = (q = C.next()).done) && (R.push(q.value), !(D && R.length === D)); M = !0)
                  ;
              } catch (W) {
                U = !0, F = W;
              } finally {
                try {
                  !M && C.return && C.return();
                } finally {
                  if (U) throw F;
                }
              }
              return R;
            }
            return function(k, D) {
              if (Array.isArray(k))
                return k;
              if (Symbol.iterator in Object(k))
                return j(k, D);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), c = /* @__PURE__ */ function() {
            function j(k, D) {
              for (var R = 0; R < D.length; R++) {
                var M = D[R];
                M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(k, M.key, M);
              }
            }
            return function(k, D, R) {
              return D && j(k.prototype, D), R && j(k, R), k;
            };
          }();
          o(50);
          var f = o(2), p = N(f), d = o(14), l = N(d), i = o(8), s = N(i), m = o(9), v = N(m), h = o(0), g = N(h), b = o(15), _ = N(b), y = o(3), E = N(y), A = o(10), w = N(A), S = o(34), P = N(S);
          function N(j) {
            return j && j.__esModule ? j : { default: j };
          }
          function O(j, k, D) {
            return k in j ? Object.defineProperty(j, k, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : j[k] = D, j;
          }
          function x(j, k) {
            if (!(j instanceof k))
              throw new TypeError("Cannot call a class as a function");
          }
          var T = (0, w.default)("quill"), I = function() {
            c(j, null, [{
              key: "debug",
              value: function(D) {
                D === !0 && (D = "log"), w.default.level(D);
              }
            }, {
              key: "find",
              value: function(D) {
                return D.__quill || g.default.find(D);
              }
            }, {
              key: "import",
              value: function(D) {
                return this.imports[D] == null && T.error("Cannot import " + D + ". Are you sure it was registered?"), this.imports[D];
              }
            }, {
              key: "register",
              value: function(D, R) {
                var M = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (typeof D != "string") {
                  var F = D.attrName || D.blotName;
                  typeof F == "string" ? this.register("formats/" + F, D, R) : Object.keys(D).forEach(function(C) {
                    M.register(C, D[C], R);
                  });
                } else
                  this.imports[D] != null && !U && T.warn("Overwriting " + D + " with", R), this.imports[D] = R, (D.startsWith("blots/") || D.startsWith("formats/")) && R.blotName !== "abstract" ? g.default.register(R) : D.startsWith("modules") && typeof R.register == "function" && R.register();
              }
            }]);
            function j(k) {
              var D = this, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (x(this, j), this.options = L(k, R), this.container = this.options.container, this.container == null)
                return T.error("Invalid Quill container", k);
              this.options.debug && j.debug(this.options.debug);
              var M = this.container.innerHTML.trim();
              this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new s.default(), this.scroll = g.default.create(this.root, {
                emitter: this.emitter,
                whitelist: this.options.formats
              }), this.editor = new l.default(this.scroll), this.selection = new _.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(s.default.events.EDITOR_CHANGE, function(F) {
                F === s.default.events.TEXT_CHANGE && D.root.classList.toggle("ql-blank", D.editor.isBlank());
              }), this.emitter.on(s.default.events.SCROLL_UPDATE, function(F, C) {
                var q = D.selection.lastRange, W = q && q.length === 0 ? q.index : void 0;
                B.call(D, function() {
                  return D.editor.update(null, C, W);
                }, F);
              });
              var U = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + M + "<p><br></p></div>");
              this.setContents(U), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
            }
            return c(j, [{
              key: "addContainer",
              value: function(D) {
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (typeof D == "string") {
                  var M = D;
                  D = document.createElement("div"), D.classList.add(M);
                }
                return this.container.insertBefore(D, R), D;
              }
            }, {
              key: "blur",
              value: function() {
                this.selection.setRange(null);
              }
            }, {
              key: "deleteText",
              value: function(D, R, M) {
                var U = this, F = $(D, R, M), C = u(F, 4);
                return D = C[0], R = C[1], M = C[3], B.call(this, function() {
                  return U.editor.deleteText(D, R);
                }, M, D, -1 * R);
              }
            }, {
              key: "disable",
              value: function() {
                this.enable(!1);
              }
            }, {
              key: "enable",
              value: function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.scroll.enable(D), this.container.classList.toggle("ql-disabled", !D);
              }
            }, {
              key: "focus",
              value: function() {
                var D = this.scrollingContainer.scrollTop;
                this.selection.focus(), this.scrollingContainer.scrollTop = D, this.scrollIntoView();
              }
            }, {
              key: "format",
              value: function(D, R) {
                var M = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : s.default.sources.API;
                return B.call(this, function() {
                  var F = M.getSelection(!0), C = new p.default();
                  if (F == null)
                    return C;
                  if (g.default.query(D, g.default.Scope.BLOCK))
                    C = M.editor.formatLine(F.index, F.length, O({}, D, R));
                  else {
                    if (F.length === 0)
                      return M.selection.format(D, R), C;
                    C = M.editor.formatText(F.index, F.length, O({}, D, R));
                  }
                  return M.setSelection(F, s.default.sources.SILENT), C;
                }, U);
              }
            }, {
              key: "formatLine",
              value: function(D, R, M, U, F) {
                var C = this, q = void 0, W = $(D, R, M, U, F), z = u(W, 4);
                return D = z[0], R = z[1], q = z[2], F = z[3], B.call(this, function() {
                  return C.editor.formatLine(D, R, q);
                }, F, D, 0);
              }
            }, {
              key: "formatText",
              value: function(D, R, M, U, F) {
                var C = this, q = void 0, W = $(D, R, M, U, F), z = u(W, 4);
                return D = z[0], R = z[1], q = z[2], F = z[3], B.call(this, function() {
                  return C.editor.formatText(D, R, q);
                }, F, D, 0);
              }
            }, {
              key: "getBounds",
              value: function(D) {
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, M = void 0;
                typeof D == "number" ? M = this.selection.getBounds(D, R) : M = this.selection.getBounds(D.index, D.length);
                var U = this.container.getBoundingClientRect();
                return {
                  bottom: M.bottom - U.top,
                  height: M.height,
                  left: M.left - U.left,
                  right: M.right - U.left,
                  top: M.top - U.top,
                  width: M.width
                };
              }
            }, {
              key: "getContents",
              value: function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - D, M = $(D, R), U = u(M, 2);
                return D = U[0], R = U[1], this.editor.getContents(D, R);
              }
            }, {
              key: "getFormat",
              value: function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                return typeof D == "number" ? this.editor.getFormat(D, R) : this.editor.getFormat(D.index, D.length);
              }
            }, {
              key: "getIndex",
              value: function(D) {
                return D.offset(this.scroll);
              }
            }, {
              key: "getLength",
              value: function() {
                return this.scroll.length();
              }
            }, {
              key: "getLeaf",
              value: function(D) {
                return this.scroll.leaf(D);
              }
            }, {
              key: "getLine",
              value: function(D) {
                return this.scroll.line(D);
              }
            }, {
              key: "getLines",
              value: function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
                return typeof D != "number" ? this.scroll.lines(D.index, D.length) : this.scroll.lines(D, R);
              }
            }, {
              key: "getModule",
              value: function(D) {
                return this.theme.modules[D];
              }
            }, {
              key: "getSelection",
              value: function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                return D && this.focus(), this.update(), this.selection.getRange()[0];
              }
            }, {
              key: "getText",
              value: function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - D, M = $(D, R), U = u(M, 2);
                return D = U[0], R = U[1], this.editor.getText(D, R);
              }
            }, {
              key: "hasFocus",
              value: function() {
                return this.selection.hasFocus();
              }
            }, {
              key: "insertEmbed",
              value: function(D, R, M) {
                var U = this, F = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : j.sources.API;
                return B.call(this, function() {
                  return U.editor.insertEmbed(D, R, M);
                }, F, D);
              }
            }, {
              key: "insertText",
              value: function(D, R, M, U, F) {
                var C = this, q = void 0, W = $(D, 0, M, U, F), z = u(W, 4);
                return D = z[0], q = z[2], F = z[3], B.call(this, function() {
                  return C.editor.insertText(D, R, q);
                }, F, D, R.length);
              }
            }, {
              key: "isEnabled",
              value: function() {
                return !this.container.classList.contains("ql-disabled");
              }
            }, {
              key: "off",
              value: function() {
                return this.emitter.off.apply(this.emitter, arguments);
              }
            }, {
              key: "on",
              value: function() {
                return this.emitter.on.apply(this.emitter, arguments);
              }
            }, {
              key: "once",
              value: function() {
                return this.emitter.once.apply(this.emitter, arguments);
              }
            }, {
              key: "pasteHTML",
              value: function(D, R, M) {
                this.clipboard.dangerouslyPasteHTML(D, R, M);
              }
            }, {
              key: "removeFormat",
              value: function(D, R, M) {
                var U = this, F = $(D, R, M), C = u(F, 4);
                return D = C[0], R = C[1], M = C[3], B.call(this, function() {
                  return U.editor.removeFormat(D, R);
                }, M, D);
              }
            }, {
              key: "scrollIntoView",
              value: function() {
                this.selection.scrollIntoView(this.scrollingContainer);
              }
            }, {
              key: "setContents",
              value: function(D) {
                var R = this, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s.default.sources.API;
                return B.call(this, function() {
                  D = new p.default(D);
                  var U = R.getLength(), F = R.editor.deleteText(0, U), C = R.editor.applyDelta(D), q = C.ops[C.ops.length - 1];
                  q != null && typeof q.insert == "string" && q.insert[q.insert.length - 1] === `
` && (R.editor.deleteText(R.getLength() - 1, 1), C.delete(1));
                  var W = F.compose(C);
                  return W;
                }, M);
              }
            }, {
              key: "setSelection",
              value: function(D, R, M) {
                if (D == null)
                  this.selection.setRange(null, R || j.sources.API);
                else {
                  var U = $(D, R, M), F = u(U, 4);
                  D = F[0], R = F[1], M = F[3], this.selection.setRange(new b.Range(D, R), M), M !== s.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
                }
              }
            }, {
              key: "setText",
              value: function(D) {
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s.default.sources.API, M = new p.default().insert(D);
                return this.setContents(M, R);
              }
            }, {
              key: "update",
              value: function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s.default.sources.USER, R = this.scroll.update(D);
                return this.selection.update(D), R;
              }
            }, {
              key: "updateContents",
              value: function(D) {
                var R = this, M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s.default.sources.API;
                return B.call(this, function() {
                  return D = new p.default(D), R.editor.applyDelta(D, M);
                }, M, !0);
              }
            }]), j;
          }();
          I.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            scrollingContainer: null,
            strict: !0,
            theme: "default"
          }, I.events = s.default.events, I.sources = s.default.sources, I.version = "1.3.7", I.imports = {
            delta: p.default,
            parchment: g.default,
            "core/module": v.default,
            "core/theme": P.default
          };
          function L(j, k) {
            if (k = (0, E.default)(!0, {
              container: j,
              modules: {
                clipboard: !0,
                keyboard: !0,
                history: !0
              }
            }, k), !k.theme || k.theme === I.DEFAULTS.theme)
              k.theme = P.default;
            else if (k.theme = I.import("themes/" + k.theme), k.theme == null)
              throw new Error("Invalid theme " + k.theme + ". Did you register it?");
            var D = (0, E.default)(!0, {}, k.theme.DEFAULTS);
            [D, k].forEach(function(U) {
              U.modules = U.modules || {}, Object.keys(U.modules).forEach(function(F) {
                U.modules[F] === !0 && (U.modules[F] = {});
              });
            });
            var R = Object.keys(D.modules).concat(Object.keys(k.modules)), M = R.reduce(function(U, F) {
              var C = I.import("modules/" + F);
              return C == null ? T.error("Cannot load " + F + " module. Are you sure you registered it?") : U[F] = C.DEFAULTS || {}, U;
            }, {});
            return k.modules != null && k.modules.toolbar && k.modules.toolbar.constructor !== Object && (k.modules.toolbar = {
              container: k.modules.toolbar
            }), k = (0, E.default)(!0, {}, I.DEFAULTS, { modules: M }, D, k), ["bounds", "container", "scrollingContainer"].forEach(function(U) {
              typeof k[U] == "string" && (k[U] = document.querySelector(k[U]));
            }), k.modules = Object.keys(k.modules).reduce(function(U, F) {
              return k.modules[F] && (U[F] = k.modules[F]), U;
            }, {}), k;
          }
          function B(j, k, D, R) {
            if (this.options.strict && !this.isEnabled() && k === s.default.sources.USER)
              return new p.default();
            var M = D == null ? null : this.getSelection(), U = this.editor.delta, F = j();
            if (M != null && (D === !0 && (D = M.index), R == null ? M = K(M, F, k) : R !== 0 && (M = K(M, D, R, k)), this.setSelection(M, s.default.sources.SILENT)), F.length() > 0) {
              var C, q = [s.default.events.TEXT_CHANGE, F, U, k];
              if ((C = this.emitter).emit.apply(C, [s.default.events.EDITOR_CHANGE].concat(q)), k !== s.default.sources.SILENT) {
                var W;
                (W = this.emitter).emit.apply(W, q);
              }
            }
            return F;
          }
          function $(j, k, D, R, M) {
            var U = {};
            return typeof j.index == "number" && typeof j.length == "number" ? typeof k != "number" ? (M = R, R = D, D = k, k = j.length, j = j.index) : (k = j.length, j = j.index) : typeof k != "number" && (M = R, R = D, D = k, k = 0), (typeof D > "u" ? "undefined" : a(D)) === "object" ? (U = D, M = R) : typeof D == "string" && (R != null ? U[D] = R : M = D), M = M || s.default.sources.API, [j, k, U, M];
          }
          function K(j, k, D, R) {
            if (j == null) return null;
            var M = void 0, U = void 0;
            if (k instanceof p.default) {
              var F = [j.index, j.index + j.length].map(function(z) {
                return k.transformPosition(z, R !== s.default.sources.USER);
              }), C = u(F, 2);
              M = C[0], U = C[1];
            } else {
              var q = [j.index, j.index + j.length].map(function(z) {
                return z < k || z === k && R === s.default.sources.USER ? z : D >= 0 ? z + D : Math.max(k, z + D);
              }), W = u(q, 2);
              M = W[0], U = W[1];
            }
            return new b.Range(M, U - M);
          }
          n.expandConfig = L, n.overload = $, n.default = I;
        },
        /* 6 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function h(g, b) {
              for (var _ = 0; _ < b.length; _++) {
                var y = b[_];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(g, y.key, y);
              }
            }
            return function(g, b, _) {
              return b && h(g.prototype, b), _ && h(g, _), g;
            };
          }(), u = function h(g, b, _) {
            g === null && (g = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(g, b);
            if (y === void 0) {
              var E = Object.getPrototypeOf(g);
              return E === null ? void 0 : h(E, b, _);
            } else {
              if ("value" in y)
                return y.value;
              var A = y.get;
              return A === void 0 ? void 0 : A.call(_);
            }
          }, c = o(7), f = l(c), p = o(0), d = l(p);
          function l(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function i(h, g) {
            if (!(h instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(h, g) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : h;
          }
          function m(h, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            h.prototype = Object.create(g && g.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(h, g) : h.__proto__ = g);
          }
          var v = function(h) {
            m(g, h);
            function g() {
              return i(this, g), s(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
            }
            return a(g, [{
              key: "formatAt",
              value: function(_, y, E, A) {
                if (g.compare(this.statics.blotName, E) < 0 && d.default.query(E, d.default.Scope.BLOT)) {
                  var w = this.isolate(_, y);
                  A && w.wrap(E, A);
                } else
                  u(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "formatAt", this).call(this, _, y, E, A);
              }
            }, {
              key: "optimize",
              value: function(_) {
                if (u(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "optimize", this).call(this, _), this.parent instanceof g && g.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                  var y = this.parent.isolate(this.offset(), this.length());
                  this.moveChildren(y), y.wrap(this);
                }
              }
            }], [{
              key: "compare",
              value: function(_, y) {
                var E = g.order.indexOf(_), A = g.order.indexOf(y);
                return E >= 0 || A >= 0 ? E - A : _ === y ? 0 : _ < y ? -1 : 1;
              }
            }]), g;
          }(d.default.Inline);
          v.allowedChildren = [v, d.default.Embed, f.default], v.order = [
            "cursor",
            "inline",
            // Must be lower
            "underline",
            "strike",
            "italic",
            "bold",
            "script",
            "link",
            "code"
            // Must be higher
          ], n.default = v;
        },
        /* 7 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = o(0), u = c(a);
          function c(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function f(i, s) {
            if (!(i instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(i, s) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : i;
          }
          function d(i, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            i.prototype = Object.create(s && s.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(i, s) : i.__proto__ = s);
          }
          var l = function(i) {
            d(s, i);
            function s() {
              return f(this, s), p(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
            }
            return s;
          }(u.default.Text);
          n.default = l;
        },
        /* 8 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function b(_, y) {
              for (var E = 0; E < y.length; E++) {
                var A = y[E];
                A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(_, A.key, A);
              }
            }
            return function(_, y, E) {
              return y && b(_.prototype, y), E && b(_, E), _;
            };
          }(), u = function b(_, y, E) {
            _ === null && (_ = Function.prototype);
            var A = Object.getOwnPropertyDescriptor(_, y);
            if (A === void 0) {
              var w = Object.getPrototypeOf(_);
              return w === null ? void 0 : b(w, y, E);
            } else {
              if ("value" in A)
                return A.value;
              var S = A.get;
              return S === void 0 ? void 0 : S.call(E);
            }
          }, c = o(54), f = l(c), p = o(10), d = l(p);
          function l(b) {
            return b && b.__esModule ? b : { default: b };
          }
          function i(b, _) {
            if (!(b instanceof _))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(b, _) {
            if (!b)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return _ && (typeof _ == "object" || typeof _ == "function") ? _ : b;
          }
          function m(b, _) {
            if (typeof _ != "function" && _ !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof _);
            b.prototype = Object.create(_ && _.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(b, _) : b.__proto__ = _);
          }
          var v = (0, d.default)("quill:events"), h = ["selectionchange", "mousedown", "mouseup", "click"];
          h.forEach(function(b) {
            document.addEventListener(b, function() {
              for (var _ = arguments.length, y = Array(_), E = 0; E < _; E++)
                y[E] = arguments[E];
              [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(A) {
                if (A.__quill && A.__quill.emitter) {
                  var w;
                  (w = A.__quill.emitter).handleDOM.apply(w, y);
                }
              });
            });
          });
          var g = function(b) {
            m(_, b);
            function _() {
              i(this, _);
              var y = s(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this));
              return y.listeners = {}, y.on("error", v.error), y;
            }
            return a(_, [{
              key: "emit",
              value: function() {
                v.log.apply(v, arguments), u(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "emit", this).apply(this, arguments);
              }
            }, {
              key: "handleDOM",
              value: function(E) {
                for (var A = arguments.length, w = Array(A > 1 ? A - 1 : 0), S = 1; S < A; S++)
                  w[S - 1] = arguments[S];
                (this.listeners[E.type] || []).forEach(function(P) {
                  var N = P.node, O = P.handler;
                  (E.target === N || N.contains(E.target)) && O.apply(void 0, [E].concat(w));
                });
              }
            }, {
              key: "listenDOM",
              value: function(E, A, w) {
                this.listeners[E] || (this.listeners[E] = []), this.listeners[E].push({ node: A, handler: w });
              }
            }]), _;
          }(f.default);
          g.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
          }, g.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
          }, n.default = g;
        },
        /* 9 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          function a(c, f) {
            if (!(c instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          var u = function c(f) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            a(this, c), this.quill = f, this.options = p;
          };
          u.DEFAULTS = {}, n.default = u;
        },
        /* 10 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = ["error", "warn", "log", "info"], u = "warn";
          function c(p) {
            if (a.indexOf(p) <= a.indexOf(u)) {
              for (var d, l = arguments.length, i = Array(l > 1 ? l - 1 : 0), s = 1; s < l; s++)
                i[s - 1] = arguments[s];
              (d = console)[p].apply(d, i);
            }
          }
          function f(p) {
            return a.reduce(function(d, l) {
              return d[l] = c.bind(console, l, p), d;
            }, {});
          }
          c.level = f.level = function(p) {
            u = p;
          }, n.default = f;
        },
        /* 11 */
        /***/
        function(r, n, o) {
          var a = Array.prototype.slice, u = o(52), c = o(53), f = r.exports = function(i, s, m) {
            return m || (m = {}), i === s ? !0 : i instanceof Date && s instanceof Date ? i.getTime() === s.getTime() : !i || !s || typeof i != "object" && typeof s != "object" ? m.strict ? i === s : i == s : l(i, s, m);
          };
          function p(i) {
            return i == null;
          }
          function d(i) {
            return !(!i || typeof i != "object" || typeof i.length != "number" || typeof i.copy != "function" || typeof i.slice != "function" || i.length > 0 && typeof i[0] != "number");
          }
          function l(i, s, m) {
            var v, h;
            if (p(i) || p(s) || i.prototype !== s.prototype) return !1;
            if (c(i))
              return c(s) ? (i = a.call(i), s = a.call(s), f(i, s, m)) : !1;
            if (d(i)) {
              if (!d(s) || i.length !== s.length) return !1;
              for (v = 0; v < i.length; v++)
                if (i[v] !== s[v]) return !1;
              return !0;
            }
            try {
              var g = u(i), b = u(s);
            } catch {
              return !1;
            }
            if (g.length != b.length)
              return !1;
            for (g.sort(), b.sort(), v = g.length - 1; v >= 0; v--)
              if (g[v] != b[v])
                return !1;
            for (v = g.length - 1; v >= 0; v--)
              if (h = g[v], !f(i[h], s[h], m)) return !1;
            return typeof i == typeof s;
          }
        },
        /* 12 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var a = o(1), u = (
            /** @class */
            function() {
              function c(f, p, d) {
                d === void 0 && (d = {}), this.attrName = f, this.keyName = p;
                var l = a.Scope.TYPE & a.Scope.ATTRIBUTE;
                d.scope != null ? this.scope = d.scope & a.Scope.LEVEL | l : this.scope = a.Scope.ATTRIBUTE, d.whitelist != null && (this.whitelist = d.whitelist);
              }
              return c.keys = function(f) {
                return [].map.call(f.attributes, function(p) {
                  return p.name;
                });
              }, c.prototype.add = function(f, p) {
                return this.canAdd(f, p) ? (f.setAttribute(this.keyName, p), !0) : !1;
              }, c.prototype.canAdd = function(f, p) {
                var d = a.query(f, a.Scope.BLOT & (this.scope | a.Scope.TYPE));
                return d == null ? !1 : this.whitelist == null ? !0 : typeof p == "string" ? this.whitelist.indexOf(p.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(p) > -1;
              }, c.prototype.remove = function(f) {
                f.removeAttribute(this.keyName);
              }, c.prototype.value = function(f) {
                var p = f.getAttribute(this.keyName);
                return this.canAdd(f, p) && p ? p : "";
              }, c;
            }()
          );
          n.default = u;
        },
        /* 13 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.Code = void 0;
          var a = /* @__PURE__ */ function() {
            function S(P, N) {
              var O = [], x = !0, T = !1, I = void 0;
              try {
                for (var L = P[Symbol.iterator](), B; !(x = (B = L.next()).done) && (O.push(B.value), !(N && O.length === N)); x = !0)
                  ;
              } catch ($) {
                T = !0, I = $;
              } finally {
                try {
                  !x && L.return && L.return();
                } finally {
                  if (T) throw I;
                }
              }
              return O;
            }
            return function(P, N) {
              if (Array.isArray(P))
                return P;
              if (Symbol.iterator in Object(P))
                return S(P, N);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = /* @__PURE__ */ function() {
            function S(P, N) {
              for (var O = 0; O < N.length; O++) {
                var x = N[O];
                x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(P, x.key, x);
              }
            }
            return function(P, N, O) {
              return N && S(P.prototype, N), O && S(P, O), P;
            };
          }(), c = function S(P, N, O) {
            P === null && (P = Function.prototype);
            var x = Object.getOwnPropertyDescriptor(P, N);
            if (x === void 0) {
              var T = Object.getPrototypeOf(P);
              return T === null ? void 0 : S(T, N, O);
            } else {
              if ("value" in x)
                return x.value;
              var I = x.get;
              return I === void 0 ? void 0 : I.call(O);
            }
          }, f = o(2), p = b(f), d = o(0), l = b(d), i = o(4), s = b(i), m = o(6), v = b(m), h = o(7), g = b(h);
          function b(S) {
            return S && S.__esModule ? S : { default: S };
          }
          function _(S, P) {
            if (!(S instanceof P))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(S, P) {
            if (!S)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return P && (typeof P == "object" || typeof P == "function") ? P : S;
          }
          function E(S, P) {
            if (typeof P != "function" && P !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof P);
            S.prototype = Object.create(P && P.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } }), P && (Object.setPrototypeOf ? Object.setPrototypeOf(S, P) : S.__proto__ = P);
          }
          var A = function(S) {
            E(P, S);
            function P() {
              return _(this, P), y(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
            }
            return P;
          }(v.default);
          A.blotName = "code", A.tagName = "CODE";
          var w = function(S) {
            E(P, S);
            function P() {
              return _(this, P), y(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
            }
            return u(P, [{
              key: "delta",
              value: function() {
                var O = this, x = this.domNode.textContent;
                return x.endsWith(`
`) && (x = x.slice(0, -1)), x.split(`
`).reduce(function(T, I) {
                  return T.insert(I).insert(`
`, O.formats());
                }, new p.default());
              }
            }, {
              key: "format",
              value: function(O, x) {
                if (!(O === this.statics.blotName && x)) {
                  var T = this.descendant(g.default, this.length() - 1), I = a(T, 1), L = I[0];
                  L != null && L.deleteAt(L.length() - 1, 1), c(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "format", this).call(this, O, x);
                }
              }
            }, {
              key: "formatAt",
              value: function(O, x, T, I) {
                if (x !== 0 && !(l.default.query(T, l.default.Scope.BLOCK) == null || T === this.statics.blotName && I === this.statics.formats(this.domNode))) {
                  var L = this.newlineIndex(O);
                  if (!(L < 0 || L >= O + x)) {
                    var B = this.newlineIndex(O, !0) + 1, $ = L - B + 1, K = this.isolate(B, $), j = K.next;
                    K.format(T, I), j instanceof P && j.formatAt(0, O - B + x - $, T, I);
                  }
                }
              }
            }, {
              key: "insertAt",
              value: function(O, x, T) {
                if (T == null) {
                  var I = this.descendant(g.default, O), L = a(I, 2), B = L[0], $ = L[1];
                  B.insertAt($, x);
                }
              }
            }, {
              key: "length",
              value: function() {
                var O = this.domNode.textContent.length;
                return this.domNode.textContent.endsWith(`
`) ? O : O + 1;
              }
            }, {
              key: "newlineIndex",
              value: function(O) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (x)
                  return this.domNode.textContent.slice(0, O).lastIndexOf(`
`);
                var T = this.domNode.textContent.slice(O).indexOf(`
`);
                return T > -1 ? O + T : -1;
              }
            }, {
              key: "optimize",
              value: function(O) {
                this.domNode.textContent.endsWith(`
`) || this.appendChild(l.default.create("text", `
`)), c(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "optimize", this).call(this, O);
                var x = this.next;
                x != null && x.prev === this && x.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === x.statics.formats(x.domNode) && (x.optimize(O), x.moveChildren(this), x.remove());
              }
            }, {
              key: "replace",
              value: function(O) {
                c(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "replace", this).call(this, O), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(x) {
                  var T = l.default.find(x);
                  T == null ? x.parentNode.removeChild(x) : T instanceof l.default.Embed ? T.remove() : T.unwrap();
                });
              }
            }], [{
              key: "create",
              value: function(O) {
                var x = c(P.__proto__ || Object.getPrototypeOf(P), "create", this).call(this, O);
                return x.setAttribute("spellcheck", !1), x;
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), P;
          }(s.default);
          w.blotName = "code-block", w.tagName = "PRE", w.TAB = "  ", n.Code = A, n.default = w;
        },
        /* 14 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(j) {
            return typeof j;
          } : function(j) {
            return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
          }, u = /* @__PURE__ */ function() {
            function j(k, D) {
              var R = [], M = !0, U = !1, F = void 0;
              try {
                for (var C = k[Symbol.iterator](), q; !(M = (q = C.next()).done) && (R.push(q.value), !(D && R.length === D)); M = !0)
                  ;
              } catch (W) {
                U = !0, F = W;
              } finally {
                try {
                  !M && C.return && C.return();
                } finally {
                  if (U) throw F;
                }
              }
              return R;
            }
            return function(k, D) {
              if (Array.isArray(k))
                return k;
              if (Symbol.iterator in Object(k))
                return j(k, D);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), c = /* @__PURE__ */ function() {
            function j(k, D) {
              for (var R = 0; R < D.length; R++) {
                var M = D[R];
                M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(k, M.key, M);
              }
            }
            return function(k, D, R) {
              return D && j(k.prototype, D), R && j(k, R), k;
            };
          }(), f = o(2), p = x(f), d = o(20), l = x(d), i = o(0), s = x(i), m = o(13), v = x(m), h = o(24), g = x(h), b = o(4), _ = x(b), y = o(16), E = x(y), A = o(21), w = x(A), S = o(11), P = x(S), N = o(3), O = x(N);
          function x(j) {
            return j && j.__esModule ? j : { default: j };
          }
          function T(j, k, D) {
            return k in j ? Object.defineProperty(j, k, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : j[k] = D, j;
          }
          function I(j, k) {
            if (!(j instanceof k))
              throw new TypeError("Cannot call a class as a function");
          }
          var L = /^[ -~]*$/, B = function() {
            function j(k) {
              I(this, j), this.scroll = k, this.delta = this.getDelta();
            }
            return c(j, [{
              key: "applyDelta",
              value: function(D) {
                var R = this, M = !1;
                this.scroll.update();
                var U = this.scroll.length();
                return this.scroll.batchStart(), D = K(D), D.reduce(function(F, C) {
                  var q = C.retain || C.delete || C.insert.length || 1, W = C.attributes || {};
                  if (C.insert != null) {
                    if (typeof C.insert == "string") {
                      var z = C.insert;
                      z.endsWith(`
`) && M && (M = !1, z = z.slice(0, -1)), F >= U && !z.endsWith(`
`) && (M = !0), R.scroll.insertAt(F, z);
                      var Z = R.scroll.line(F), re = u(Z, 2), X = re[0], ae = re[1], Q = (0, O.default)({}, (0, b.bubbleFormats)(X));
                      if (X instanceof _.default) {
                        var fe = X.descendant(s.default.Leaf, ae), xe = u(fe, 1), ee = xe[0];
                        Q = (0, O.default)(Q, (0, b.bubbleFormats)(ee));
                      }
                      W = l.default.attributes.diff(Q, W) || {};
                    } else if (a(C.insert) === "object") {
                      var G = Object.keys(C.insert)[0];
                      if (G == null) return F;
                      R.scroll.insertAt(F, G, C.insert[G]);
                    }
                    U += q;
                  }
                  return Object.keys(W).forEach(function(H) {
                    R.scroll.formatAt(F, q, H, W[H]);
                  }), F + q;
                }, 0), D.reduce(function(F, C) {
                  return typeof C.delete == "number" ? (R.scroll.deleteAt(F, C.delete), F) : F + (C.retain || C.insert.length || 1);
                }, 0), this.scroll.batchEnd(), this.update(D);
              }
            }, {
              key: "deleteText",
              value: function(D, R) {
                return this.scroll.deleteAt(D, R), this.update(new p.default().retain(D).delete(R));
              }
            }, {
              key: "formatLine",
              value: function(D, R) {
                var M = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.scroll.update(), Object.keys(U).forEach(function(F) {
                  if (!(M.scroll.whitelist != null && !M.scroll.whitelist[F])) {
                    var C = M.scroll.lines(D, Math.max(R, 1)), q = R;
                    C.forEach(function(W) {
                      var z = W.length();
                      if (!(W instanceof v.default))
                        W.format(F, U[F]);
                      else {
                        var Z = D - W.offset(M.scroll), re = W.newlineIndex(Z + q) - Z + 1;
                        W.formatAt(Z, re, F, U[F]);
                      }
                      q -= z;
                    });
                  }
                }), this.scroll.optimize(), this.update(new p.default().retain(D).retain(R, (0, w.default)(U)));
              }
            }, {
              key: "formatText",
              value: function(D, R) {
                var M = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return Object.keys(U).forEach(function(F) {
                  M.scroll.formatAt(D, R, F, U[F]);
                }), this.update(new p.default().retain(D).retain(R, (0, w.default)(U)));
              }
            }, {
              key: "getContents",
              value: function(D, R) {
                return this.delta.slice(D, D + R);
              }
            }, {
              key: "getDelta",
              value: function() {
                return this.scroll.lines().reduce(function(D, R) {
                  return D.concat(R.delta());
                }, new p.default());
              }
            }, {
              key: "getFormat",
              value: function(D) {
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, M = [], U = [];
                R === 0 ? this.scroll.path(D).forEach(function(C) {
                  var q = u(C, 1), W = q[0];
                  W instanceof _.default ? M.push(W) : W instanceof s.default.Leaf && U.push(W);
                }) : (M = this.scroll.lines(D, R), U = this.scroll.descendants(s.default.Leaf, D, R));
                var F = [M, U].map(function(C) {
                  if (C.length === 0) return {};
                  for (var q = (0, b.bubbleFormats)(C.shift()); Object.keys(q).length > 0; ) {
                    var W = C.shift();
                    if (W == null) return q;
                    q = $((0, b.bubbleFormats)(W), q);
                  }
                  return q;
                });
                return O.default.apply(O.default, F);
              }
            }, {
              key: "getText",
              value: function(D, R) {
                return this.getContents(D, R).filter(function(M) {
                  return typeof M.insert == "string";
                }).map(function(M) {
                  return M.insert;
                }).join("");
              }
            }, {
              key: "insertEmbed",
              value: function(D, R, M) {
                return this.scroll.insertAt(D, R, M), this.update(new p.default().retain(D).insert(T({}, R, M)));
              }
            }, {
              key: "insertText",
              value: function(D, R) {
                var M = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return R = R.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(D, R), Object.keys(U).forEach(function(F) {
                  M.scroll.formatAt(D, R.length, F, U[F]);
                }), this.update(new p.default().retain(D).insert(R, (0, w.default)(U)));
              }
            }, {
              key: "isBlank",
              value: function() {
                if (this.scroll.children.length == 0) return !0;
                if (this.scroll.children.length > 1) return !1;
                var D = this.scroll.children.head;
                return D.statics.blotName !== _.default.blotName || D.children.length > 1 ? !1 : D.children.head instanceof E.default;
              }
            }, {
              key: "removeFormat",
              value: function(D, R) {
                var M = this.getText(D, R), U = this.scroll.line(D + R), F = u(U, 2), C = F[0], q = F[1], W = 0, z = new p.default();
                C != null && (C instanceof v.default ? W = C.newlineIndex(q) - q + 1 : W = C.length() - q, z = C.delta().slice(q, q + W - 1).insert(`
`));
                var Z = this.getContents(D, R + W), re = Z.diff(new p.default().insert(M).concat(z)), X = new p.default().retain(D).concat(re);
                return this.applyDelta(X);
              }
            }, {
              key: "update",
              value: function(D) {
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, U = this.delta;
                if (R.length === 1 && R[0].type === "characterData" && R[0].target.data.match(L) && s.default.find(R[0].target)) {
                  var F = s.default.find(R[0].target), C = (0, b.bubbleFormats)(F), q = F.offset(this.scroll), W = R[0].oldValue.replace(g.default.CONTENTS, ""), z = new p.default().insert(W), Z = new p.default().insert(F.value()), re = new p.default().retain(q).concat(z.diff(Z, M));
                  D = re.reduce(function(X, ae) {
                    return ae.insert ? X.insert(ae.insert, C) : X.push(ae);
                  }, new p.default()), this.delta = U.compose(D);
                } else
                  this.delta = this.getDelta(), (!D || !(0, P.default)(U.compose(D), this.delta)) && (D = U.diff(this.delta, M));
                return D;
              }
            }]), j;
          }();
          function $(j, k) {
            return Object.keys(k).reduce(function(D, R) {
              return j[R] == null || (k[R] === j[R] ? D[R] = k[R] : Array.isArray(k[R]) ? k[R].indexOf(j[R]) < 0 && (D[R] = k[R].concat([j[R]])) : D[R] = [k[R], j[R]]), D;
            }, {});
          }
          function K(j) {
            return j.reduce(function(k, D) {
              if (D.insert === 1) {
                var R = (0, w.default)(D.attributes);
                return delete R.image, k.insert({ image: D.attributes.image }, R);
              }
              if (D.attributes != null && (D.attributes.list === !0 || D.attributes.bullet === !0) && (D = (0, w.default)(D), D.attributes.list ? D.attributes.list = "ordered" : (D.attributes.list = "bullet", delete D.attributes.bullet)), typeof D.insert == "string") {
                var M = D.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
                return k.insert(M, D.attributes);
              }
              return k.push(D);
            }, new p.default());
          }
          n.default = B;
        },
        /* 15 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.Range = void 0;
          var a = /* @__PURE__ */ function() {
            function S(P, N) {
              var O = [], x = !0, T = !1, I = void 0;
              try {
                for (var L = P[Symbol.iterator](), B; !(x = (B = L.next()).done) && (O.push(B.value), !(N && O.length === N)); x = !0)
                  ;
              } catch ($) {
                T = !0, I = $;
              } finally {
                try {
                  !x && L.return && L.return();
                } finally {
                  if (T) throw I;
                }
              }
              return O;
            }
            return function(P, N) {
              if (Array.isArray(P))
                return P;
              if (Symbol.iterator in Object(P))
                return S(P, N);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = /* @__PURE__ */ function() {
            function S(P, N) {
              for (var O = 0; O < N.length; O++) {
                var x = N[O];
                x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(P, x.key, x);
              }
            }
            return function(P, N, O) {
              return N && S(P.prototype, N), O && S(P, O), P;
            };
          }(), c = o(0), f = g(c), p = o(21), d = g(p), l = o(11), i = g(l), s = o(8), m = g(s), v = o(10), h = g(v);
          function g(S) {
            return S && S.__esModule ? S : { default: S };
          }
          function b(S) {
            if (Array.isArray(S)) {
              for (var P = 0, N = Array(S.length); P < S.length; P++)
                N[P] = S[P];
              return N;
            } else
              return Array.from(S);
          }
          function _(S, P) {
            if (!(S instanceof P))
              throw new TypeError("Cannot call a class as a function");
          }
          var y = (0, h.default)("quill:selection"), E = function S(P) {
            var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            _(this, S), this.index = P, this.length = N;
          }, A = function() {
            function S(P, N) {
              var O = this;
              _(this, S), this.emitter = N, this.scroll = P, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = f.default.create("cursor", this), this.lastRange = this.savedRange = new E(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
                O.mouseDown || setTimeout(O.update.bind(O, m.default.sources.USER), 1);
              }), this.emitter.on(m.default.events.EDITOR_CHANGE, function(x, T) {
                x === m.default.events.TEXT_CHANGE && T.length() > 0 && O.update(m.default.sources.SILENT);
              }), this.emitter.on(m.default.events.SCROLL_BEFORE_UPDATE, function() {
                if (O.hasFocus()) {
                  var x = O.getNativeRange();
                  x != null && x.start.node !== O.cursor.textNode && O.emitter.once(m.default.events.SCROLL_UPDATE, function() {
                    try {
                      O.setNativeRange(x.start.node, x.start.offset, x.end.node, x.end.offset);
                    } catch {
                    }
                  });
                }
              }), this.emitter.on(m.default.events.SCROLL_OPTIMIZE, function(x, T) {
                if (T.range) {
                  var I = T.range, L = I.startNode, B = I.startOffset, $ = I.endNode, K = I.endOffset;
                  O.setNativeRange(L, B, $, K);
                }
              }), this.update(m.default.sources.SILENT);
            }
            return u(S, [{
              key: "handleComposition",
              value: function() {
                var N = this;
                this.root.addEventListener("compositionstart", function() {
                  N.composing = !0;
                }), this.root.addEventListener("compositionend", function() {
                  if (N.composing = !1, N.cursor.parent) {
                    var O = N.cursor.restore();
                    if (!O) return;
                    setTimeout(function() {
                      N.setNativeRange(O.startNode, O.startOffset, O.endNode, O.endOffset);
                    }, 1);
                  }
                });
              }
            }, {
              key: "handleDragging",
              value: function() {
                var N = this;
                this.emitter.listenDOM("mousedown", document.body, function() {
                  N.mouseDown = !0;
                }), this.emitter.listenDOM("mouseup", document.body, function() {
                  N.mouseDown = !1, N.update(m.default.sources.USER);
                });
              }
            }, {
              key: "focus",
              value: function() {
                this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
              }
            }, {
              key: "format",
              value: function(N, O) {
                if (!(this.scroll.whitelist != null && !this.scroll.whitelist[N])) {
                  this.scroll.update();
                  var x = this.getNativeRange();
                  if (!(x == null || !x.native.collapsed || f.default.query(N, f.default.Scope.BLOCK))) {
                    if (x.start.node !== this.cursor.textNode) {
                      var T = f.default.find(x.start.node, !1);
                      if (T == null) return;
                      if (T instanceof f.default.Leaf) {
                        var I = T.split(x.start.offset);
                        T.parent.insertBefore(this.cursor, I);
                      } else
                        T.insertBefore(this.cursor, x.start.node);
                      this.cursor.attach();
                    }
                    this.cursor.format(N, O), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                  }
                }
              }
            }, {
              key: "getBounds",
              value: function(N) {
                var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, x = this.scroll.length();
                N = Math.min(N, x - 1), O = Math.min(N + O, x - 1) - N;
                var T = void 0, I = this.scroll.leaf(N), L = a(I, 2), B = L[0], $ = L[1];
                if (B == null) return null;
                var K = B.position($, !0), j = a(K, 2);
                T = j[0], $ = j[1];
                var k = document.createRange();
                if (O > 0) {
                  k.setStart(T, $);
                  var D = this.scroll.leaf(N + O), R = a(D, 2);
                  if (B = R[0], $ = R[1], B == null) return null;
                  var M = B.position($, !0), U = a(M, 2);
                  return T = U[0], $ = U[1], k.setEnd(T, $), k.getBoundingClientRect();
                } else {
                  var F = "left", C = void 0;
                  return T instanceof Text ? ($ < T.data.length ? (k.setStart(T, $), k.setEnd(T, $ + 1)) : (k.setStart(T, $ - 1), k.setEnd(T, $), F = "right"), C = k.getBoundingClientRect()) : (C = B.domNode.getBoundingClientRect(), $ > 0 && (F = "right")), {
                    bottom: C.top + C.height,
                    height: C.height,
                    left: C[F],
                    right: C[F],
                    top: C.top,
                    width: 0
                  };
                }
              }
            }, {
              key: "getNativeRange",
              value: function() {
                var N = document.getSelection();
                if (N == null || N.rangeCount <= 0) return null;
                var O = N.getRangeAt(0);
                if (O == null) return null;
                var x = this.normalizeNative(O);
                return y.info("getNativeRange", x), x;
              }
            }, {
              key: "getRange",
              value: function() {
                var N = this.getNativeRange();
                if (N == null) return [null, null];
                var O = this.normalizedToRange(N);
                return [O, N];
              }
            }, {
              key: "hasFocus",
              value: function() {
                return document.activeElement === this.root;
              }
            }, {
              key: "normalizedToRange",
              value: function(N) {
                var O = this, x = [[N.start.node, N.start.offset]];
                N.native.collapsed || x.push([N.end.node, N.end.offset]);
                var T = x.map(function(B) {
                  var $ = a(B, 2), K = $[0], j = $[1], k = f.default.find(K, !0), D = k.offset(O.scroll);
                  return j === 0 ? D : k instanceof f.default.Container ? D + k.length() : D + k.index(K, j);
                }), I = Math.min(Math.max.apply(Math, b(T)), this.scroll.length() - 1), L = Math.min.apply(Math, [I].concat(b(T)));
                return new E(L, I - L);
              }
            }, {
              key: "normalizeNative",
              value: function(N) {
                if (!w(this.root, N.startContainer) || !N.collapsed && !w(this.root, N.endContainer))
                  return null;
                var O = {
                  start: { node: N.startContainer, offset: N.startOffset },
                  end: { node: N.endContainer, offset: N.endOffset },
                  native: N
                };
                return [O.start, O.end].forEach(function(x) {
                  for (var T = x.node, I = x.offset; !(T instanceof Text) && T.childNodes.length > 0; )
                    if (T.childNodes.length > I)
                      T = T.childNodes[I], I = 0;
                    else if (T.childNodes.length === I)
                      T = T.lastChild, I = T instanceof Text ? T.data.length : T.childNodes.length + 1;
                    else
                      break;
                  x.node = T, x.offset = I;
                }), O;
              }
            }, {
              key: "rangeToNative",
              value: function(N) {
                var O = this, x = N.collapsed ? [N.index] : [N.index, N.index + N.length], T = [], I = this.scroll.length();
                return x.forEach(function(L, B) {
                  L = Math.min(I - 1, L);
                  var $ = void 0, K = O.scroll.leaf(L), j = a(K, 2), k = j[0], D = j[1], R = k.position(D, B !== 0), M = a(R, 2);
                  $ = M[0], D = M[1], T.push($, D);
                }), T.length < 2 && (T = T.concat(T)), T;
              }
            }, {
              key: "scrollIntoView",
              value: function(N) {
                var O = this.lastRange;
                if (O != null) {
                  var x = this.getBounds(O.index, O.length);
                  if (x != null) {
                    var T = this.scroll.length() - 1, I = this.scroll.line(Math.min(O.index, T)), L = a(I, 1), B = L[0], $ = B;
                    if (O.length > 0) {
                      var K = this.scroll.line(Math.min(O.index + O.length, T)), j = a(K, 1);
                      $ = j[0];
                    }
                    if (!(B == null || $ == null)) {
                      var k = N.getBoundingClientRect();
                      x.top < k.top ? N.scrollTop -= k.top - x.top : x.bottom > k.bottom && (N.scrollTop += x.bottom - k.bottom);
                    }
                  }
                }
              }
            }, {
              key: "setNativeRange",
              value: function(N, O) {
                var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N, T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : O, I = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                if (y.info("setNativeRange", N, O, x, T), !(N != null && (this.root.parentNode == null || N.parentNode == null || x.parentNode == null))) {
                  var L = document.getSelection();
                  if (L != null)
                    if (N != null) {
                      this.hasFocus() || this.root.focus();
                      var B = (this.getNativeRange() || {}).native;
                      if (B == null || I || N !== B.startContainer || O !== B.startOffset || x !== B.endContainer || T !== B.endOffset) {
                        N.tagName == "BR" && (O = [].indexOf.call(N.parentNode.childNodes, N), N = N.parentNode), x.tagName == "BR" && (T = [].indexOf.call(x.parentNode.childNodes, x), x = x.parentNode);
                        var $ = document.createRange();
                        $.setStart(N, O), $.setEnd(x, T), L.removeAllRanges(), L.addRange($);
                      }
                    } else
                      L.removeAllRanges(), this.root.blur(), document.body.focus();
                }
              }
            }, {
              key: "setRange",
              value: function(N) {
                var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : m.default.sources.API;
                if (typeof O == "string" && (x = O, O = !1), y.info("setRange", N), N != null) {
                  var T = this.rangeToNative(N);
                  this.setNativeRange.apply(this, b(T).concat([O]));
                } else
                  this.setNativeRange(null);
                this.update(x);
              }
            }, {
              key: "update",
              value: function() {
                var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m.default.sources.USER, O = this.lastRange, x = this.getRange(), T = a(x, 2), I = T[0], L = T[1];
                if (this.lastRange = I, this.lastRange != null && (this.savedRange = this.lastRange), !(0, i.default)(O, this.lastRange)) {
                  var B;
                  !this.composing && L != null && L.native.collapsed && L.start.node !== this.cursor.textNode && this.cursor.restore();
                  var $ = [m.default.events.SELECTION_CHANGE, (0, d.default)(this.lastRange), (0, d.default)(O), N];
                  if ((B = this.emitter).emit.apply(B, [m.default.events.EDITOR_CHANGE].concat($)), N !== m.default.sources.SILENT) {
                    var K;
                    (K = this.emitter).emit.apply(K, $);
                  }
                }
              }
            }]), S;
          }();
          function w(S, P) {
            try {
              P.parentNode;
            } catch {
              return !1;
            }
            return P instanceof Text && (P = P.parentNode), S.contains(P);
          }
          n.Range = E, n.default = A;
        },
        /* 16 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function m(v, h) {
              for (var g = 0; g < h.length; g++) {
                var b = h[g];
                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(v, b.key, b);
              }
            }
            return function(v, h, g) {
              return h && m(v.prototype, h), g && m(v, g), v;
            };
          }(), u = function m(v, h, g) {
            v === null && (v = Function.prototype);
            var b = Object.getOwnPropertyDescriptor(v, h);
            if (b === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : m(_, h, g);
            } else {
              if ("value" in b)
                return b.value;
              var y = b.get;
              return y === void 0 ? void 0 : y.call(g);
            }
          }, c = o(0), f = p(c);
          function p(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function d(m, v) {
            if (!(m instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(m, v) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : m;
          }
          function i(m, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            m.prototype = Object.create(v && v.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(m, v) : m.__proto__ = v);
          }
          var s = function(m) {
            i(v, m);
            function v() {
              return d(this, v), l(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
            }
            return a(v, [{
              key: "insertInto",
              value: function(g, b) {
                g.children.length === 0 ? u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "insertInto", this).call(this, g, b) : this.remove();
              }
            }, {
              key: "length",
              value: function() {
                return 0;
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }], [{
              key: "value",
              value: function() {
              }
            }]), v;
          }(f.default.Embed);
          s.blotName = "break", s.tagName = "BR", n.default = s;
        },
        /* 17 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, s) {
              i.__proto__ = s;
            } || function(i, s) {
              for (var m in s) s.hasOwnProperty(m) && (i[m] = s[m]);
            };
            return function(i, s) {
              l(i, s);
              function m() {
                this.constructor = i;
              }
              i.prototype = s === null ? Object.create(s) : (m.prototype = s.prototype, new m());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(44), c = o(30), f = o(1), p = (
            /** @class */
            function(l) {
              a(i, l);
              function i(s) {
                var m = l.call(this, s) || this;
                return m.build(), m;
              }
              return i.prototype.appendChild = function(s) {
                this.insertBefore(s);
              }, i.prototype.attach = function() {
                l.prototype.attach.call(this), this.children.forEach(function(s) {
                  s.attach();
                });
              }, i.prototype.build = function() {
                var s = this;
                this.children = new u.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(m) {
                  try {
                    var v = d(m);
                    s.insertBefore(v, s.children.head || void 0);
                  } catch (h) {
                    if (h instanceof f.ParchmentError)
                      return;
                    throw h;
                  }
                });
              }, i.prototype.deleteAt = function(s, m) {
                if (s === 0 && m === this.length())
                  return this.remove();
                this.children.forEachAt(s, m, function(v, h, g) {
                  v.deleteAt(h, g);
                });
              }, i.prototype.descendant = function(s, m) {
                var v = this.children.find(m), h = v[0], g = v[1];
                return s.blotName == null && s(h) || s.blotName != null && h instanceof s ? [h, g] : h instanceof i ? h.descendant(s, g) : [null, -1];
              }, i.prototype.descendants = function(s, m, v) {
                m === void 0 && (m = 0), v === void 0 && (v = Number.MAX_VALUE);
                var h = [], g = v;
                return this.children.forEachAt(m, v, function(b, _, y) {
                  (s.blotName == null && s(b) || s.blotName != null && b instanceof s) && h.push(b), b instanceof i && (h = h.concat(b.descendants(s, _, g))), g -= y;
                }), h;
              }, i.prototype.detach = function() {
                this.children.forEach(function(s) {
                  s.detach();
                }), l.prototype.detach.call(this);
              }, i.prototype.formatAt = function(s, m, v, h) {
                this.children.forEachAt(s, m, function(g, b, _) {
                  g.formatAt(b, _, v, h);
                });
              }, i.prototype.insertAt = function(s, m, v) {
                var h = this.children.find(s), g = h[0], b = h[1];
                if (g)
                  g.insertAt(b, m, v);
                else {
                  var _ = v == null ? f.create("text", m) : f.create(m, v);
                  this.appendChild(_);
                }
              }, i.prototype.insertBefore = function(s, m) {
                if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(v) {
                  return s instanceof v;
                }))
                  throw new f.ParchmentError("Cannot insert " + s.statics.blotName + " into " + this.statics.blotName);
                s.insertInto(this, m);
              }, i.prototype.length = function() {
                return this.children.reduce(function(s, m) {
                  return s + m.length();
                }, 0);
              }, i.prototype.moveChildren = function(s, m) {
                this.children.forEach(function(v) {
                  s.insertBefore(v, m);
                });
              }, i.prototype.optimize = function(s) {
                if (l.prototype.optimize.call(this, s), this.children.length === 0)
                  if (this.statics.defaultChild != null) {
                    var m = f.create(this.statics.defaultChild);
                    this.appendChild(m), m.optimize(s);
                  } else
                    this.remove();
              }, i.prototype.path = function(s, m) {
                m === void 0 && (m = !1);
                var v = this.children.find(s, m), h = v[0], g = v[1], b = [[this, s]];
                return h instanceof i ? b.concat(h.path(g, m)) : (h != null && b.push([h, g]), b);
              }, i.prototype.removeChild = function(s) {
                this.children.remove(s);
              }, i.prototype.replace = function(s) {
                s instanceof i && s.moveChildren(this), l.prototype.replace.call(this, s);
              }, i.prototype.split = function(s, m) {
                if (m === void 0 && (m = !1), !m) {
                  if (s === 0)
                    return this;
                  if (s === this.length())
                    return this.next;
                }
                var v = this.clone();
                return this.parent.insertBefore(v, this.next), this.children.forEachAt(s, this.length(), function(h, g, b) {
                  h = h.split(g, m), v.appendChild(h);
                }), v;
              }, i.prototype.unwrap = function() {
                this.moveChildren(this.parent, this.next), this.remove();
              }, i.prototype.update = function(s, m) {
                var v = this, h = [], g = [];
                s.forEach(function(b) {
                  b.target === v.domNode && b.type === "childList" && (h.push.apply(h, b.addedNodes), g.push.apply(g, b.removedNodes));
                }), g.forEach(function(b) {
                  if (!(b.parentNode != null && // @ts-ignore
                  b.tagName !== "IFRAME" && document.body.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                    var _ = f.find(b);
                    _ != null && (_.domNode.parentNode == null || _.domNode.parentNode === v.domNode) && _.detach();
                  }
                }), h.filter(function(b) {
                  return b.parentNode == v.domNode;
                }).sort(function(b, _) {
                  return b === _ ? 0 : b.compareDocumentPosition(_) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
                }).forEach(function(b) {
                  var _ = null;
                  b.nextSibling != null && (_ = f.find(b.nextSibling));
                  var y = d(b);
                  (y.next != _ || y.next == null) && (y.parent != null && y.parent.removeChild(v), v.insertBefore(y, _ || void 0));
                });
              }, i;
            }(c.default)
          );
          function d(l) {
            var i = f.find(l);
            if (i == null)
              try {
                i = f.create(l);
              } catch {
                i = f.create(f.Scope.INLINE), [].slice.call(l.childNodes).forEach(function(m) {
                  i.domNode.appendChild(m);
                }), l.parentNode && l.parentNode.replaceChild(i.domNode, l), i.attach();
              }
            return i;
          }
          n.default = p;
        },
        /* 18 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, s) {
              i.__proto__ = s;
            } || function(i, s) {
              for (var m in s) s.hasOwnProperty(m) && (i[m] = s[m]);
            };
            return function(i, s) {
              l(i, s);
              function m() {
                this.constructor = i;
              }
              i.prototype = s === null ? Object.create(s) : (m.prototype = s.prototype, new m());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(12), c = o(31), f = o(17), p = o(1), d = (
            /** @class */
            function(l) {
              a(i, l);
              function i(s) {
                var m = l.call(this, s) || this;
                return m.attributes = new c.default(m.domNode), m;
              }
              return i.formats = function(s) {
                if (typeof this.tagName == "string")
                  return !0;
                if (Array.isArray(this.tagName))
                  return s.tagName.toLowerCase();
              }, i.prototype.format = function(s, m) {
                var v = p.query(s);
                v instanceof u.default ? this.attributes.attribute(v, m) : m && v != null && (s !== this.statics.blotName || this.formats()[s] !== m) && this.replaceWith(s, m);
              }, i.prototype.formats = function() {
                var s = this.attributes.values(), m = this.statics.formats(this.domNode);
                return m != null && (s[this.statics.blotName] = m), s;
              }, i.prototype.replaceWith = function(s, m) {
                var v = l.prototype.replaceWith.call(this, s, m);
                return this.attributes.copy(v), v;
              }, i.prototype.update = function(s, m) {
                var v = this;
                l.prototype.update.call(this, s, m), s.some(function(h) {
                  return h.target === v.domNode && h.type === "attributes";
                }) && this.attributes.build();
              }, i.prototype.wrap = function(s, m) {
                var v = l.prototype.wrap.call(this, s, m);
                return v instanceof i && v.statics.scope === this.statics.scope && this.attributes.move(v), v;
              }, i;
            }(f.default)
          );
          n.default = d;
        },
        /* 19 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var i in l) l.hasOwnProperty(i) && (d[i] = l[i]);
            };
            return function(d, l) {
              p(d, l);
              function i() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (i.prototype = l.prototype, new i());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(30), c = o(1), f = (
            /** @class */
            function(p) {
              a(d, p);
              function d() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return d.value = function(l) {
                return !0;
              }, d.prototype.index = function(l, i) {
                return this.domNode === l || this.domNode.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(i, 1) : -1;
              }, d.prototype.position = function(l, i) {
                var s = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                return l > 0 && (s += 1), [this.parent.domNode, s];
              }, d.prototype.value = function() {
                var l;
                return l = {}, l[this.statics.blotName] = this.statics.value(this.domNode) || !0, l;
              }, d.scope = c.Scope.INLINE_BLOT, d;
            }(u.default)
          );
          n.default = f;
        },
        /* 20 */
        /***/
        function(r, n, o) {
          var a = o(11), u = o(3), c = {
            attributes: {
              compose: function(p, d, l) {
                typeof p != "object" && (p = {}), typeof d != "object" && (d = {});
                var i = u(!0, {}, d);
                l || (i = Object.keys(i).reduce(function(m, v) {
                  return i[v] != null && (m[v] = i[v]), m;
                }, {}));
                for (var s in p)
                  p[s] !== void 0 && d[s] === void 0 && (i[s] = p[s]);
                return Object.keys(i).length > 0 ? i : void 0;
              },
              diff: function(p, d) {
                typeof p != "object" && (p = {}), typeof d != "object" && (d = {});
                var l = Object.keys(p).concat(Object.keys(d)).reduce(function(i, s) {
                  return a(p[s], d[s]) || (i[s] = d[s] === void 0 ? null : d[s]), i;
                }, {});
                return Object.keys(l).length > 0 ? l : void 0;
              },
              transform: function(p, d, l) {
                if (typeof p != "object") return d;
                if (typeof d == "object") {
                  if (!l) return d;
                  var i = Object.keys(d).reduce(function(s, m) {
                    return p[m] === void 0 && (s[m] = d[m]), s;
                  }, {});
                  return Object.keys(i).length > 0 ? i : void 0;
                }
              }
            },
            iterator: function(p) {
              return new f(p);
            },
            length: function(p) {
              return typeof p.delete == "number" ? p.delete : typeof p.retain == "number" ? p.retain : typeof p.insert == "string" ? p.insert.length : 1;
            }
          };
          function f(p) {
            this.ops = p, this.index = 0, this.offset = 0;
          }
          f.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0;
          }, f.prototype.next = function(p) {
            p || (p = 1 / 0);
            var d = this.ops[this.index];
            if (d) {
              var l = this.offset, i = c.length(d);
              if (p >= i - l ? (p = i - l, this.index += 1, this.offset = 0) : this.offset += p, typeof d.delete == "number")
                return { delete: p };
              var s = {};
              return d.attributes && (s.attributes = d.attributes), typeof d.retain == "number" ? s.retain = p : typeof d.insert == "string" ? s.insert = d.insert.substr(l, p) : s.insert = d.insert, s;
            } else
              return { retain: 1 / 0 };
          }, f.prototype.peek = function() {
            return this.ops[this.index];
          }, f.prototype.peekLength = function() {
            return this.ops[this.index] ? c.length(this.ops[this.index]) - this.offset : 1 / 0;
          }, f.prototype.peekType = function() {
            return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
          }, f.prototype.rest = function() {
            if (this.hasNext()) {
              if (this.offset === 0)
                return this.ops.slice(this.index);
              var p = this.offset, d = this.index, l = this.next(), i = this.ops.slice(this.index);
              return this.offset = p, this.index = d, [l].concat(i);
            } else return [];
          }, r.exports = c;
        },
        /* 21 */
        /***/
        function(r, n) {
          var o = function() {
            function a(v, h) {
              return h != null && v instanceof h;
            }
            var u;
            try {
              u = Map;
            } catch {
              u = function() {
              };
            }
            var c;
            try {
              c = Set;
            } catch {
              c = function() {
              };
            }
            var f;
            try {
              f = Promise;
            } catch {
              f = function() {
              };
            }
            function p(v, h, g, b, _) {
              typeof h == "object" && (g = h.depth, b = h.prototype, _ = h.includeNonEnumerable, h = h.circular);
              var y = [], E = [], A = typeof Buffer < "u";
              typeof h > "u" && (h = !0), typeof g > "u" && (g = 1 / 0);
              function w(S, P) {
                if (S === null)
                  return null;
                if (P === 0)
                  return S;
                var N, O;
                if (typeof S != "object")
                  return S;
                if (a(S, u))
                  N = new u();
                else if (a(S, c))
                  N = new c();
                else if (a(S, f))
                  N = new f(function(k, D) {
                    S.then(function(R) {
                      k(w(R, P - 1));
                    }, function(R) {
                      D(w(R, P - 1));
                    });
                  });
                else if (p.__isArray(S))
                  N = [];
                else if (p.__isRegExp(S))
                  N = new RegExp(S.source, m(S)), S.lastIndex && (N.lastIndex = S.lastIndex);
                else if (p.__isDate(S))
                  N = new Date(S.getTime());
                else {
                  if (A && Buffer.isBuffer(S))
                    return Buffer.allocUnsafe ? N = Buffer.allocUnsafe(S.length) : N = new Buffer(S.length), S.copy(N), N;
                  a(S, Error) ? N = Object.create(S) : typeof b > "u" ? (O = Object.getPrototypeOf(S), N = Object.create(O)) : (N = Object.create(b), O = b);
                }
                if (h) {
                  var x = y.indexOf(S);
                  if (x != -1)
                    return E[x];
                  y.push(S), E.push(N);
                }
                a(S, u) && S.forEach(function(k, D) {
                  var R = w(D, P - 1), M = w(k, P - 1);
                  N.set(R, M);
                }), a(S, c) && S.forEach(function(k) {
                  var D = w(k, P - 1);
                  N.add(D);
                });
                for (var T in S) {
                  var I;
                  O && (I = Object.getOwnPropertyDescriptor(O, T)), !(I && I.set == null) && (N[T] = w(S[T], P - 1));
                }
                if (Object.getOwnPropertySymbols)
                  for (var L = Object.getOwnPropertySymbols(S), T = 0; T < L.length; T++) {
                    var B = L[T], $ = Object.getOwnPropertyDescriptor(S, B);
                    $ && !$.enumerable && !_ || (N[B] = w(S[B], P - 1), $.enumerable || Object.defineProperty(N, B, {
                      enumerable: !1
                    }));
                  }
                if (_)
                  for (var K = Object.getOwnPropertyNames(S), T = 0; T < K.length; T++) {
                    var j = K[T], $ = Object.getOwnPropertyDescriptor(S, j);
                    $ && $.enumerable || (N[j] = w(S[j], P - 1), Object.defineProperty(N, j, {
                      enumerable: !1
                    }));
                  }
                return N;
              }
              return w(v, g);
            }
            p.clonePrototype = function(h) {
              if (h === null)
                return null;
              var g = function() {
              };
              return g.prototype = h, new g();
            };
            function d(v) {
              return Object.prototype.toString.call(v);
            }
            p.__objToStr = d;
            function l(v) {
              return typeof v == "object" && d(v) === "[object Date]";
            }
            p.__isDate = l;
            function i(v) {
              return typeof v == "object" && d(v) === "[object Array]";
            }
            p.__isArray = i;
            function s(v) {
              return typeof v == "object" && d(v) === "[object RegExp]";
            }
            p.__isRegExp = s;
            function m(v) {
              var h = "";
              return v.global && (h += "g"), v.ignoreCase && (h += "i"), v.multiline && (h += "m"), h;
            }
            return p.__getRegExpFlags = m, p;
          }();
          typeof r == "object" && r.exports && (r.exports = o);
        },
        /* 22 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function N(O, x) {
              var T = [], I = !0, L = !1, B = void 0;
              try {
                for (var $ = O[Symbol.iterator](), K; !(I = (K = $.next()).done) && (T.push(K.value), !(x && T.length === x)); I = !0)
                  ;
              } catch (j) {
                L = !0, B = j;
              } finally {
                try {
                  !I && $.return && $.return();
                } finally {
                  if (L) throw B;
                }
              }
              return T;
            }
            return function(O, x) {
              if (Array.isArray(O))
                return O;
              if (Symbol.iterator in Object(O))
                return N(O, x);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = /* @__PURE__ */ function() {
            function N(O, x) {
              for (var T = 0; T < x.length; T++) {
                var I = x[T];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(O, I.key, I);
              }
            }
            return function(O, x, T) {
              return x && N(O.prototype, x), T && N(O, T), O;
            };
          }(), c = function N(O, x, T) {
            O === null && (O = Function.prototype);
            var I = Object.getOwnPropertyDescriptor(O, x);
            if (I === void 0) {
              var L = Object.getPrototypeOf(O);
              return L === null ? void 0 : N(L, x, T);
            } else {
              if ("value" in I)
                return I.value;
              var B = I.get;
              return B === void 0 ? void 0 : B.call(T);
            }
          }, f = o(0), p = y(f), d = o(8), l = y(d), i = o(4), s = y(i), m = o(16), v = y(m), h = o(13), g = y(h), b = o(25), _ = y(b);
          function y(N) {
            return N && N.__esModule ? N : { default: N };
          }
          function E(N, O) {
            if (!(N instanceof O))
              throw new TypeError("Cannot call a class as a function");
          }
          function A(N, O) {
            if (!N)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return O && (typeof O == "object" || typeof O == "function") ? O : N;
          }
          function w(N, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof O);
            N.prototype = Object.create(O && O.prototype, { constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(N, O) : N.__proto__ = O);
          }
          function S(N) {
            return N instanceof s.default || N instanceof i.BlockEmbed;
          }
          var P = function(N) {
            w(O, N);
            function O(x, T) {
              E(this, O);
              var I = A(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, x));
              return I.emitter = T.emitter, Array.isArray(T.whitelist) && (I.whitelist = T.whitelist.reduce(function(L, B) {
                return L[B] = !0, L;
              }, {})), I.domNode.addEventListener("DOMNodeInserted", function() {
              }), I.optimize(), I.enable(), I;
            }
            return u(O, [{
              key: "batchStart",
              value: function() {
                this.batch = !0;
              }
            }, {
              key: "batchEnd",
              value: function() {
                this.batch = !1, this.optimize();
              }
            }, {
              key: "deleteAt",
              value: function(T, I) {
                var L = this.line(T), B = a(L, 2), $ = B[0], K = B[1], j = this.line(T + I), k = a(j, 1), D = k[0];
                if (c(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "deleteAt", this).call(this, T, I), D != null && $ !== D && K > 0) {
                  if ($ instanceof i.BlockEmbed || D instanceof i.BlockEmbed) {
                    this.optimize();
                    return;
                  }
                  if ($ instanceof g.default) {
                    var R = $.newlineIndex($.length(), !0);
                    if (R > -1 && ($ = $.split(R + 1), $ === D)) {
                      this.optimize();
                      return;
                    }
                  } else if (D instanceof g.default) {
                    var M = D.newlineIndex(0);
                    M > -1 && D.split(M + 1);
                  }
                  var U = D.children.head instanceof v.default ? null : D.children.head;
                  $.moveChildren(D, U), $.remove();
                }
                this.optimize();
              }
            }, {
              key: "enable",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.domNode.setAttribute("contenteditable", T);
              }
            }, {
              key: "formatAt",
              value: function(T, I, L, B) {
                this.whitelist != null && !this.whitelist[L] || (c(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "formatAt", this).call(this, T, I, L, B), this.optimize());
              }
            }, {
              key: "insertAt",
              value: function(T, I, L) {
                if (!(L != null && this.whitelist != null && !this.whitelist[I])) {
                  if (T >= this.length())
                    if (L == null || p.default.query(I, p.default.Scope.BLOCK) == null) {
                      var B = p.default.create(this.statics.defaultChild);
                      this.appendChild(B), L == null && I.endsWith(`
`) && (I = I.slice(0, -1)), B.insertAt(0, I, L);
                    } else {
                      var $ = p.default.create(I, L);
                      this.appendChild($);
                    }
                  else
                    c(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "insertAt", this).call(this, T, I, L);
                  this.optimize();
                }
              }
            }, {
              key: "insertBefore",
              value: function(T, I) {
                if (T.statics.scope === p.default.Scope.INLINE_BLOT) {
                  var L = p.default.create(this.statics.defaultChild);
                  L.appendChild(T), T = L;
                }
                c(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "insertBefore", this).call(this, T, I);
              }
            }, {
              key: "leaf",
              value: function(T) {
                return this.path(T).pop() || [null, -1];
              }
            }, {
              key: "line",
              value: function(T) {
                return T === this.length() ? this.line(T - 1) : this.descendant(S, T);
              }
            }, {
              key: "lines",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, L = function B($, K, j) {
                  var k = [], D = j;
                  return $.children.forEachAt(K, j, function(R, M, U) {
                    S(R) ? k.push(R) : R instanceof p.default.Container && (k = k.concat(B(R, M, D))), D -= U;
                  }), k;
                };
                return L(this, T, I);
              }
            }, {
              key: "optimize",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.batch !== !0 && (c(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "optimize", this).call(this, T, I), T.length > 0 && this.emitter.emit(l.default.events.SCROLL_OPTIMIZE, T, I));
              }
            }, {
              key: "path",
              value: function(T) {
                return c(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "path", this).call(this, T).slice(1);
              }
            }, {
              key: "update",
              value: function(T) {
                if (this.batch !== !0) {
                  var I = l.default.sources.USER;
                  typeof T == "string" && (I = T), Array.isArray(T) || (T = this.observer.takeRecords()), T.length > 0 && this.emitter.emit(l.default.events.SCROLL_BEFORE_UPDATE, I, T), c(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "update", this).call(this, T.concat([])), T.length > 0 && this.emitter.emit(l.default.events.SCROLL_UPDATE, I, T);
                }
              }
            }]), O;
          }(p.default.Scroll);
          P.blotName = "scroll", P.className = "ql-editor", P.tagName = "DIV", P.defaultChild = "block", P.allowedChildren = [s.default, i.BlockEmbed, _.default], n.default = P;
        },
        /* 23 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.SHORTKEY = n.default = void 0;
          var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
            return typeof C;
          } : function(C) {
            return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
          }, u = /* @__PURE__ */ function() {
            function C(q, W) {
              var z = [], Z = !0, re = !1, X = void 0;
              try {
                for (var ae = q[Symbol.iterator](), Q; !(Z = (Q = ae.next()).done) && (z.push(Q.value), !(W && z.length === W)); Z = !0)
                  ;
              } catch (fe) {
                re = !0, X = fe;
              } finally {
                try {
                  !Z && ae.return && ae.return();
                } finally {
                  if (re) throw X;
                }
              }
              return z;
            }
            return function(q, W) {
              if (Array.isArray(q))
                return q;
              if (Symbol.iterator in Object(q))
                return C(q, W);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), c = /* @__PURE__ */ function() {
            function C(q, W) {
              for (var z = 0; z < W.length; z++) {
                var Z = W[z];
                Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty(q, Z.key, Z);
              }
            }
            return function(q, W, z) {
              return W && C(q.prototype, W), z && C(q, z), q;
            };
          }(), f = o(21), p = N(f), d = o(11), l = N(d), i = o(3), s = N(i), m = o(2), v = N(m), h = o(20), g = N(h), b = o(0), _ = N(b), y = o(5), E = N(y), A = o(10), w = N(A), S = o(9), P = N(S);
          function N(C) {
            return C && C.__esModule ? C : { default: C };
          }
          function O(C, q, W) {
            return q in C ? Object.defineProperty(C, q, { value: W, enumerable: !0, configurable: !0, writable: !0 }) : C[q] = W, C;
          }
          function x(C, q) {
            if (!(C instanceof q))
              throw new TypeError("Cannot call a class as a function");
          }
          function T(C, q) {
            if (!C)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return q && (typeof q == "object" || typeof q == "function") ? q : C;
          }
          function I(C, q) {
            if (typeof q != "function" && q !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof q);
            C.prototype = Object.create(q && q.prototype, { constructor: { value: C, enumerable: !1, writable: !0, configurable: !0 } }), q && (Object.setPrototypeOf ? Object.setPrototypeOf(C, q) : C.__proto__ = q);
          }
          var L = (0, w.default)("quill:keyboard"), B = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", $ = function(C) {
            I(q, C), c(q, null, [{
              key: "match",
              value: function(z, Z) {
                return Z = F(Z), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(re) {
                  return !!Z[re] !== z[re] && Z[re] !== null;
                }) ? !1 : Z.key === (z.which || z.keyCode);
              }
            }]);
            function q(W, z) {
              x(this, q);
              var Z = T(this, (q.__proto__ || Object.getPrototypeOf(q)).call(this, W, z));
              return Z.bindings = {}, Object.keys(Z.options.bindings).forEach(function(re) {
                re === "list autofill" && W.scroll.whitelist != null && !W.scroll.whitelist.list || Z.options.bindings[re] && Z.addBinding(Z.options.bindings[re]);
              }), Z.addBinding({ key: q.keys.ENTER, shiftKey: null }, R), Z.addBinding({ key: q.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
              }), /Firefox/i.test(navigator.userAgent) ? (Z.addBinding({ key: q.keys.BACKSPACE }, { collapsed: !0 }, j), Z.addBinding({ key: q.keys.DELETE }, { collapsed: !0 }, k)) : (Z.addBinding({ key: q.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, j), Z.addBinding({ key: q.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, k)), Z.addBinding({ key: q.keys.BACKSPACE }, { collapsed: !1 }, D), Z.addBinding({ key: q.keys.DELETE }, { collapsed: !1 }, D), Z.addBinding({ key: q.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, j), Z.listen(), Z;
            }
            return c(q, [{
              key: "addBinding",
              value: function(z) {
                var Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, re = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, X = F(z);
                if (X == null || X.key == null)
                  return L.warn("Attempted to add invalid keyboard binding", X);
                typeof Z == "function" && (Z = { handler: Z }), typeof re == "function" && (re = { handler: re }), X = (0, s.default)(X, Z, re), this.bindings[X.key] = this.bindings[X.key] || [], this.bindings[X.key].push(X);
              }
            }, {
              key: "listen",
              value: function() {
                var z = this;
                this.quill.root.addEventListener("keydown", function(Z) {
                  if (!Z.defaultPrevented) {
                    var re = Z.which || Z.keyCode, X = (z.bindings[re] || []).filter(function(Ne) {
                      return q.match(Z, Ne);
                    });
                    if (X.length !== 0) {
                      var ae = z.quill.getSelection();
                      if (!(ae == null || !z.quill.hasFocus())) {
                        var Q = z.quill.getLine(ae.index), fe = u(Q, 2), xe = fe[0], ee = fe[1], G = z.quill.getLeaf(ae.index), H = u(G, 2), J = H[0], te = H[1], Y = ae.length === 0 ? [J, te] : z.quill.getLeaf(ae.index + ae.length), ne = u(Y, 2), le = ne[0], se = ne[1], we = J instanceof _.default.Text ? J.value().slice(0, te) : "", ke = le instanceof _.default.Text ? le.value().slice(se) : "", Oe = {
                          collapsed: ae.length === 0,
                          empty: ae.length === 0 && xe.length() <= 1,
                          format: z.quill.getFormat(ae),
                          offset: ee,
                          prefix: we,
                          suffix: ke
                        }, kl = X.some(function(Ne) {
                          if (Ne.collapsed != null && Ne.collapsed !== Oe.collapsed || Ne.empty != null && Ne.empty !== Oe.empty || Ne.offset != null && Ne.offset !== Oe.offset) return !1;
                          if (Array.isArray(Ne.format)) {
                            if (Ne.format.every(function(We) {
                              return Oe.format[We] == null;
                            }))
                              return !1;
                          } else if (a(Ne.format) === "object" && !Object.keys(Ne.format).every(function(We) {
                            return Ne.format[We] === !0 ? Oe.format[We] != null : Ne.format[We] === !1 ? Oe.format[We] == null : (0, l.default)(Ne.format[We], Oe.format[We]);
                          }))
                            return !1;
                          return Ne.prefix != null && !Ne.prefix.test(Oe.prefix) || Ne.suffix != null && !Ne.suffix.test(Oe.suffix) ? !1 : Ne.handler.call(z, ae, Oe) !== !0;
                        });
                        kl && Z.preventDefault();
                      }
                    }
                  }
                });
              }
            }]), q;
          }(P.default);
          $.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          }, $.DEFAULTS = {
            bindings: {
              bold: U("bold"),
              italic: U("italic"),
              underline: U("underline"),
              indent: {
                // highlight tab or tab at beginning of list, indent or blockquote
                key: $.keys.TAB,
                format: ["blockquote", "indent", "list"],
                handler: function(q, W) {
                  if (W.collapsed && W.offset !== 0) return !0;
                  this.quill.format("indent", "+1", E.default.sources.USER);
                }
              },
              outdent: {
                key: $.keys.TAB,
                shiftKey: !0,
                format: ["blockquote", "indent", "list"],
                // highlight tab or tab at beginning of list, indent or blockquote
                handler: function(q, W) {
                  if (W.collapsed && W.offset !== 0) return !0;
                  this.quill.format("indent", "-1", E.default.sources.USER);
                }
              },
              "outdent backspace": {
                key: $.keys.BACKSPACE,
                collapsed: !0,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ["indent", "list"],
                offset: 0,
                handler: function(q, W) {
                  W.format.indent != null ? this.quill.format("indent", "-1", E.default.sources.USER) : W.format.list != null && this.quill.format("list", !1, E.default.sources.USER);
                }
              },
              "indent code-block": M(!0),
              "outdent code-block": M(!1),
              "remove tab": {
                key: $.keys.TAB,
                shiftKey: !0,
                collapsed: !0,
                prefix: /\t$/,
                handler: function(q) {
                  this.quill.deleteText(q.index - 1, 1, E.default.sources.USER);
                }
              },
              tab: {
                key: $.keys.TAB,
                handler: function(q) {
                  this.quill.history.cutoff();
                  var W = new v.default().retain(q.index).delete(q.length).insert("	");
                  this.quill.updateContents(W, E.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(q.index + 1, E.default.sources.SILENT);
                }
              },
              "list empty enter": {
                key: $.keys.ENTER,
                collapsed: !0,
                format: ["list"],
                empty: !0,
                handler: function(q, W) {
                  this.quill.format("list", !1, E.default.sources.USER), W.format.indent && this.quill.format("indent", !1, E.default.sources.USER);
                }
              },
              "checklist enter": {
                key: $.keys.ENTER,
                collapsed: !0,
                format: { list: "checked" },
                handler: function(q) {
                  var W = this.quill.getLine(q.index), z = u(W, 2), Z = z[0], re = z[1], X = (0, s.default)({}, Z.formats(), { list: "checked" }), ae = new v.default().retain(q.index).insert(`
`, X).retain(Z.length() - re - 1).retain(1, { list: "unchecked" });
                  this.quill.updateContents(ae, E.default.sources.USER), this.quill.setSelection(q.index + 1, E.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "header enter": {
                key: $.keys.ENTER,
                collapsed: !0,
                format: ["header"],
                suffix: /^$/,
                handler: function(q, W) {
                  var z = this.quill.getLine(q.index), Z = u(z, 2), re = Z[0], X = Z[1], ae = new v.default().retain(q.index).insert(`
`, W.format).retain(re.length() - X - 1).retain(1, { header: null });
                  this.quill.updateContents(ae, E.default.sources.USER), this.quill.setSelection(q.index + 1, E.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "list autofill": {
                key: " ",
                collapsed: !0,
                format: { list: !1 },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler: function(q, W) {
                  var z = W.prefix.length, Z = this.quill.getLine(q.index), re = u(Z, 2), X = re[0], ae = re[1];
                  if (ae > z) return !0;
                  var Q = void 0;
                  switch (W.prefix.trim()) {
                    case "[]":
                    case "[ ]":
                      Q = "unchecked";
                      break;
                    case "[x]":
                      Q = "checked";
                      break;
                    case "-":
                    case "*":
                      Q = "bullet";
                      break;
                    default:
                      Q = "ordered";
                  }
                  this.quill.insertText(q.index, " ", E.default.sources.USER), this.quill.history.cutoff();
                  var fe = new v.default().retain(q.index - ae).delete(z + 1).retain(X.length() - 2 - ae).retain(1, { list: Q });
                  this.quill.updateContents(fe, E.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(q.index - z, E.default.sources.SILENT);
                }
              },
              "code exit": {
                key: $.keys.ENTER,
                collapsed: !0,
                format: ["code-block"],
                prefix: /\n\n$/,
                suffix: /^\s+$/,
                handler: function(q) {
                  var W = this.quill.getLine(q.index), z = u(W, 2), Z = z[0], re = z[1], X = new v.default().retain(q.index + Z.length() - re - 2).retain(1, { "code-block": null }).delete(1);
                  this.quill.updateContents(X, E.default.sources.USER);
                }
              },
              "embed left": K($.keys.LEFT, !1),
              "embed left shift": K($.keys.LEFT, !0),
              "embed right": K($.keys.RIGHT, !1),
              "embed right shift": K($.keys.RIGHT, !0)
            }
          };
          function K(C, q) {
            var W, z = C === $.keys.LEFT ? "prefix" : "suffix";
            return W = {
              key: C,
              shiftKey: q,
              altKey: null
            }, O(W, z, /^$/), O(W, "handler", function(re) {
              var X = re.index;
              C === $.keys.RIGHT && (X += re.length + 1);
              var ae = this.quill.getLeaf(X), Q = u(ae, 1), fe = Q[0];
              return fe instanceof _.default.Embed ? (C === $.keys.LEFT ? q ? this.quill.setSelection(re.index - 1, re.length + 1, E.default.sources.USER) : this.quill.setSelection(re.index - 1, E.default.sources.USER) : q ? this.quill.setSelection(re.index, re.length + 1, E.default.sources.USER) : this.quill.setSelection(re.index + re.length + 1, E.default.sources.USER), !1) : !0;
            }), W;
          }
          function j(C, q) {
            if (!(C.index === 0 || this.quill.getLength() <= 1)) {
              var W = this.quill.getLine(C.index), z = u(W, 1), Z = z[0], re = {};
              if (q.offset === 0) {
                var X = this.quill.getLine(C.index - 1), ae = u(X, 1), Q = ae[0];
                if (Q != null && Q.length() > 1) {
                  var fe = Z.formats(), xe = this.quill.getFormat(C.index - 1, 1);
                  re = g.default.attributes.diff(fe, xe) || {};
                }
              }
              var ee = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(q.prefix) ? 2 : 1;
              this.quill.deleteText(C.index - ee, ee, E.default.sources.USER), Object.keys(re).length > 0 && this.quill.formatLine(C.index - ee, ee, re, E.default.sources.USER), this.quill.focus();
            }
          }
          function k(C, q) {
            var W = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(q.suffix) ? 2 : 1;
            if (!(C.index >= this.quill.getLength() - W)) {
              var z = {}, Z = 0, re = this.quill.getLine(C.index), X = u(re, 1), ae = X[0];
              if (q.offset >= ae.length() - 1) {
                var Q = this.quill.getLine(C.index + 1), fe = u(Q, 1), xe = fe[0];
                if (xe) {
                  var ee = ae.formats(), G = this.quill.getFormat(C.index, 1);
                  z = g.default.attributes.diff(ee, G) || {}, Z = xe.length();
                }
              }
              this.quill.deleteText(C.index, W, E.default.sources.USER), Object.keys(z).length > 0 && this.quill.formatLine(C.index + Z - 1, W, z, E.default.sources.USER);
            }
          }
          function D(C) {
            var q = this.quill.getLines(C), W = {};
            if (q.length > 1) {
              var z = q[0].formats(), Z = q[q.length - 1].formats();
              W = g.default.attributes.diff(Z, z) || {};
            }
            this.quill.deleteText(C, E.default.sources.USER), Object.keys(W).length > 0 && this.quill.formatLine(C.index, 1, W, E.default.sources.USER), this.quill.setSelection(C.index, E.default.sources.SILENT), this.quill.focus();
          }
          function R(C, q) {
            var W = this;
            C.length > 0 && this.quill.scroll.deleteAt(C.index, C.length);
            var z = Object.keys(q.format).reduce(function(Z, re) {
              return _.default.query(re, _.default.Scope.BLOCK) && !Array.isArray(q.format[re]) && (Z[re] = q.format[re]), Z;
            }, {});
            this.quill.insertText(C.index, `
`, z, E.default.sources.USER), this.quill.setSelection(C.index + 1, E.default.sources.SILENT), this.quill.focus(), Object.keys(q.format).forEach(function(Z) {
              z[Z] == null && (Array.isArray(q.format[Z]) || Z !== "link" && W.quill.format(Z, q.format[Z], E.default.sources.USER));
            });
          }
          function M(C) {
            return {
              key: $.keys.TAB,
              shiftKey: !C,
              format: { "code-block": !0 },
              handler: function(W) {
                var z = _.default.query("code-block"), Z = W.index, re = W.length, X = this.quill.scroll.descendant(z, Z), ae = u(X, 2), Q = ae[0], fe = ae[1];
                if (Q != null) {
                  var xe = this.quill.getIndex(Q), ee = Q.newlineIndex(fe, !0) + 1, G = Q.newlineIndex(xe + fe + re), H = Q.domNode.textContent.slice(ee, G).split(`
`);
                  fe = 0, H.forEach(function(J, te) {
                    C ? (Q.insertAt(ee + fe, z.TAB), fe += z.TAB.length, te === 0 ? Z += z.TAB.length : re += z.TAB.length) : J.startsWith(z.TAB) && (Q.deleteAt(ee + fe, z.TAB.length), fe -= z.TAB.length, te === 0 ? Z -= z.TAB.length : re -= z.TAB.length), fe += J.length + 1;
                  }), this.quill.update(E.default.sources.USER), this.quill.setSelection(Z, re, E.default.sources.SILENT);
                }
              }
            };
          }
          function U(C) {
            return {
              key: C[0].toUpperCase(),
              shortKey: !0,
              handler: function(W, z) {
                this.quill.format(C, !z.format[C], E.default.sources.USER);
              }
            };
          }
          function F(C) {
            if (typeof C == "string" || typeof C == "number")
              return F({ key: C });
            if ((typeof C > "u" ? "undefined" : a(C)) === "object" && (C = (0, p.default)(C, !1)), typeof C.key == "string")
              if ($.keys[C.key.toUpperCase()] != null)
                C.key = $.keys[C.key.toUpperCase()];
              else if (C.key.length === 1)
                C.key = C.key.toUpperCase().charCodeAt(0);
              else
                return null;
            return C.shortKey && (C[B] = C.shortKey, delete C.shortKey), C;
          }
          n.default = $, n.SHORTKEY = B;
        },
        /* 24 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function g(b, _) {
              var y = [], E = !0, A = !1, w = void 0;
              try {
                for (var S = b[Symbol.iterator](), P; !(E = (P = S.next()).done) && (y.push(P.value), !(_ && y.length === _)); E = !0)
                  ;
              } catch (N) {
                A = !0, w = N;
              } finally {
                try {
                  !E && S.return && S.return();
                } finally {
                  if (A) throw w;
                }
              }
              return y;
            }
            return function(b, _) {
              if (Array.isArray(b))
                return b;
              if (Symbol.iterator in Object(b))
                return g(b, _);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = function g(b, _, y) {
            b === null && (b = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(b, _);
            if (E === void 0) {
              var A = Object.getPrototypeOf(b);
              return A === null ? void 0 : g(A, _, y);
            } else {
              if ("value" in E)
                return E.value;
              var w = E.get;
              return w === void 0 ? void 0 : w.call(y);
            }
          }, c = /* @__PURE__ */ function() {
            function g(b, _) {
              for (var y = 0; y < _.length; y++) {
                var E = _[y];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(b, E.key, E);
              }
            }
            return function(b, _, y) {
              return _ && g(b.prototype, _), y && g(b, y), b;
            };
          }(), f = o(0), p = i(f), d = o(7), l = i(d);
          function i(g) {
            return g && g.__esModule ? g : { default: g };
          }
          function s(g, b) {
            if (!(g instanceof b))
              throw new TypeError("Cannot call a class as a function");
          }
          function m(g, b) {
            if (!g)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && (typeof b == "object" || typeof b == "function") ? b : g;
          }
          function v(g, b) {
            if (typeof b != "function" && b !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            g.prototype = Object.create(b && b.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(g, b) : g.__proto__ = b);
          }
          var h = function(g) {
            v(b, g), c(b, null, [{
              key: "value",
              value: function() {
              }
            }]);
            function b(_, y) {
              s(this, b);
              var E = m(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, _));
              return E.selection = y, E.textNode = document.createTextNode(b.CONTENTS), E.domNode.appendChild(E.textNode), E._length = 0, E;
            }
            return c(b, [{
              key: "detach",
              value: function() {
                this.parent != null && this.parent.removeChild(this);
              }
            }, {
              key: "format",
              value: function(y, E) {
                if (this._length !== 0)
                  return u(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "format", this).call(this, y, E);
                for (var A = this, w = 0; A != null && A.statics.scope !== p.default.Scope.BLOCK_BLOT; )
                  w += A.offset(A.parent), A = A.parent;
                A != null && (this._length = b.CONTENTS.length, A.optimize(), A.formatAt(w, b.CONTENTS.length, y, E), this._length = 0);
              }
            }, {
              key: "index",
              value: function(y, E) {
                return y === this.textNode ? 0 : u(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "index", this).call(this, y, E);
              }
            }, {
              key: "length",
              value: function() {
                return this._length;
              }
            }, {
              key: "position",
              value: function() {
                return [this.textNode, this.textNode.data.length];
              }
            }, {
              key: "remove",
              value: function() {
                u(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "remove", this).call(this), this.parent = null;
              }
            }, {
              key: "restore",
              value: function() {
                if (!(this.selection.composing || this.parent == null)) {
                  var y = this.textNode, E = this.selection.getNativeRange(), A = void 0, w = void 0, S = void 0;
                  if (E != null && E.start.node === y && E.end.node === y) {
                    var P = [y, E.start.offset, E.end.offset];
                    A = P[0], w = P[1], S = P[2];
                  }
                  for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                  if (this.textNode.data !== b.CONTENTS) {
                    var N = this.textNode.data.split(b.CONTENTS).join("");
                    this.next instanceof l.default ? (A = this.next.domNode, this.next.insertAt(0, N), this.textNode.data = b.CONTENTS) : (this.textNode.data = N, this.parent.insertBefore(p.default.create(this.textNode), this), this.textNode = document.createTextNode(b.CONTENTS), this.domNode.appendChild(this.textNode));
                  }
                  if (this.remove(), w != null) {
                    var O = [w, S].map(function(T) {
                      return Math.max(0, Math.min(A.data.length, T - 1));
                    }), x = a(O, 2);
                    return w = x[0], S = x[1], {
                      startNode: A,
                      startOffset: w,
                      endNode: A,
                      endOffset: S
                    };
                  }
                }
              }
            }, {
              key: "update",
              value: function(y, E) {
                var A = this;
                if (y.some(function(S) {
                  return S.type === "characterData" && S.target === A.textNode;
                })) {
                  var w = this.restore();
                  w && (E.range = w);
                }
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }]), b;
          }(p.default.Embed);
          h.blotName = "cursor", h.className = "ql-cursor", h.tagName = "span", h.CONTENTS = "\uFEFF", n.default = h;
        },
        /* 25 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = o(0), u = p(a), c = o(4), f = p(c);
          function p(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function d(m, v) {
            if (!(m instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(m, v) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : m;
          }
          function i(m, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            m.prototype = Object.create(v && v.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(m, v) : m.__proto__ = v);
          }
          var s = function(m) {
            i(v, m);
            function v() {
              return d(this, v), l(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
            }
            return v;
          }(u.default.Container);
          s.allowedChildren = [f.default, c.BlockEmbed, s], n.default = s;
        },
        /* 26 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.ColorStyle = n.ColorClass = n.ColorAttributor = void 0;
          var a = /* @__PURE__ */ function() {
            function h(g, b) {
              for (var _ = 0; _ < b.length; _++) {
                var y = b[_];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(g, y.key, y);
              }
            }
            return function(g, b, _) {
              return b && h(g.prototype, b), _ && h(g, _), g;
            };
          }(), u = function h(g, b, _) {
            g === null && (g = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(g, b);
            if (y === void 0) {
              var E = Object.getPrototypeOf(g);
              return E === null ? void 0 : h(E, b, _);
            } else {
              if ("value" in y)
                return y.value;
              var A = y.get;
              return A === void 0 ? void 0 : A.call(_);
            }
          }, c = o(0), f = p(c);
          function p(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function d(h, g) {
            if (!(h instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(h, g) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : h;
          }
          function i(h, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            h.prototype = Object.create(g && g.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(h, g) : h.__proto__ = g);
          }
          var s = function(h) {
            i(g, h);
            function g() {
              return d(this, g), l(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
            }
            return a(g, [{
              key: "value",
              value: function(_) {
                var y = u(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "value", this).call(this, _);
                return y.startsWith("rgb(") ? (y = y.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + y.split(",").map(function(E) {
                  return ("00" + parseInt(E).toString(16)).slice(-2);
                }).join("")) : y;
              }
            }]), g;
          }(f.default.Attributor.Style), m = new f.default.Attributor.Class("color", "ql-color", {
            scope: f.default.Scope.INLINE
          }), v = new s("color", "color", {
            scope: f.default.Scope.INLINE
          });
          n.ColorAttributor = s, n.ColorClass = m, n.ColorStyle = v;
        },
        /* 27 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.sanitize = n.default = void 0;
          var a = /* @__PURE__ */ function() {
            function v(h, g) {
              for (var b = 0; b < g.length; b++) {
                var _ = g[b];
                _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(h, _.key, _);
              }
            }
            return function(h, g, b) {
              return g && v(h.prototype, g), b && v(h, b), h;
            };
          }(), u = function v(h, g, b) {
            h === null && (h = Function.prototype);
            var _ = Object.getOwnPropertyDescriptor(h, g);
            if (_ === void 0) {
              var y = Object.getPrototypeOf(h);
              return y === null ? void 0 : v(y, g, b);
            } else {
              if ("value" in _)
                return _.value;
              var E = _.get;
              return E === void 0 ? void 0 : E.call(b);
            }
          }, c = o(6), f = p(c);
          function p(v) {
            return v && v.__esModule ? v : { default: v };
          }
          function d(v, h) {
            if (!(v instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(v, h) {
            if (!v)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : v;
          }
          function i(v, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            v.prototype = Object.create(h && h.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(v, h) : v.__proto__ = h);
          }
          var s = function(v) {
            i(h, v);
            function h() {
              return d(this, h), l(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return a(h, [{
              key: "format",
              value: function(b, _) {
                if (b !== this.statics.blotName || !_) return u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "format", this).call(this, b, _);
                _ = this.constructor.sanitize(_), this.domNode.setAttribute("href", _);
              }
            }], [{
              key: "create",
              value: function(b) {
                var _ = u(h.__proto__ || Object.getPrototypeOf(h), "create", this).call(this, b);
                return b = this.sanitize(b), _.setAttribute("href", b), _.setAttribute("rel", "noopener noreferrer"), _.setAttribute("target", "_blank"), _;
              }
            }, {
              key: "formats",
              value: function(b) {
                return b.getAttribute("href");
              }
            }, {
              key: "sanitize",
              value: function(b) {
                return m(b, this.PROTOCOL_WHITELIST) ? b : this.SANITIZED_URL;
              }
            }]), h;
          }(f.default);
          s.blotName = "link", s.tagName = "A", s.SANITIZED_URL = "about:blank", s.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
          function m(v, h) {
            var g = document.createElement("a");
            g.href = v;
            var b = g.href.slice(0, g.href.indexOf(":"));
            return h.indexOf(b) > -1;
          }
          n.default = s, n.sanitize = m;
        },
        /* 28 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
            return typeof h;
          } : function(h) {
            return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
          }, u = /* @__PURE__ */ function() {
            function h(g, b) {
              for (var _ = 0; _ < b.length; _++) {
                var y = b[_];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(g, y.key, y);
              }
            }
            return function(g, b, _) {
              return b && h(g.prototype, b), _ && h(g, _), g;
            };
          }(), c = o(23), f = l(c), p = o(107), d = l(p);
          function l(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function i(h, g) {
            if (!(h instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          var s = 0;
          function m(h, g) {
            h.setAttribute(g, h.getAttribute(g) !== "true");
          }
          var v = function() {
            function h(g) {
              var b = this;
              i(this, h), this.select = g, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
                b.togglePicker();
              }), this.label.addEventListener("keydown", function(_) {
                switch (_.keyCode) {
                  case f.default.keys.ENTER:
                    b.togglePicker();
                    break;
                  case f.default.keys.ESCAPE:
                    b.escape(), _.preventDefault();
                    break;
                }
              }), this.select.addEventListener("change", this.update.bind(this));
            }
            return u(h, [{
              key: "togglePicker",
              value: function() {
                this.container.classList.toggle("ql-expanded"), m(this.label, "aria-expanded"), m(this.options, "aria-hidden");
              }
            }, {
              key: "buildItem",
              value: function(b) {
                var _ = this, y = document.createElement("span");
                return y.tabIndex = "0", y.setAttribute("role", "button"), y.classList.add("ql-picker-item"), b.hasAttribute("value") && y.setAttribute("data-value", b.getAttribute("value")), b.textContent && y.setAttribute("data-label", b.textContent), y.addEventListener("click", function() {
                  _.selectItem(y, !0);
                }), y.addEventListener("keydown", function(E) {
                  switch (E.keyCode) {
                    case f.default.keys.ENTER:
                      _.selectItem(y, !0), E.preventDefault();
                      break;
                    case f.default.keys.ESCAPE:
                      _.escape(), E.preventDefault();
                      break;
                  }
                }), y;
              }
            }, {
              key: "buildLabel",
              value: function() {
                var b = document.createElement("span");
                return b.classList.add("ql-picker-label"), b.innerHTML = d.default, b.tabIndex = "0", b.setAttribute("role", "button"), b.setAttribute("aria-expanded", "false"), this.container.appendChild(b), b;
              }
            }, {
              key: "buildOptions",
              value: function() {
                var b = this, _ = document.createElement("span");
                _.classList.add("ql-picker-options"), _.setAttribute("aria-hidden", "true"), _.tabIndex = "-1", _.id = "ql-picker-options-" + s, s += 1, this.label.setAttribute("aria-controls", _.id), this.options = _, [].slice.call(this.select.options).forEach(function(y) {
                  var E = b.buildItem(y);
                  _.appendChild(E), y.selected === !0 && b.selectItem(E);
                }), this.container.appendChild(_);
              }
            }, {
              key: "buildPicker",
              value: function() {
                var b = this;
                [].slice.call(this.select.attributes).forEach(function(_) {
                  b.container.setAttribute(_.name, _.value);
                }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
              }
            }, {
              key: "escape",
              value: function() {
                var b = this;
                this.close(), setTimeout(function() {
                  return b.label.focus();
                }, 1);
              }
            }, {
              key: "close",
              value: function() {
                this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
              }
            }, {
              key: "selectItem",
              value: function(b) {
                var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, y = this.container.querySelector(".ql-selected");
                if (b !== y && (y != null && y.classList.remove("ql-selected"), b != null && (b.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(b.parentNode.children, b), b.hasAttribute("data-value") ? this.label.setAttribute("data-value", b.getAttribute("data-value")) : this.label.removeAttribute("data-value"), b.hasAttribute("data-label") ? this.label.setAttribute("data-label", b.getAttribute("data-label")) : this.label.removeAttribute("data-label"), _))) {
                  if (typeof Event == "function")
                    this.select.dispatchEvent(new Event("change"));
                  else if ((typeof Event > "u" ? "undefined" : a(Event)) === "object") {
                    var E = document.createEvent("Event");
                    E.initEvent("change", !0, !0), this.select.dispatchEvent(E);
                  }
                  this.close();
                }
              }
            }, {
              key: "update",
              value: function() {
                var b = void 0;
                if (this.select.selectedIndex > -1) {
                  var _ = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                  b = this.select.options[this.select.selectedIndex], this.selectItem(_);
                } else
                  this.selectItem(null);
                var y = b != null && b !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("ql-active", y);
              }
            }]), h;
          }();
          n.default = v;
        },
        /* 29 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = o(0), u = L(a), c = o(5), f = L(c), p = o(4), d = L(p), l = o(16), i = L(l), s = o(25), m = L(s), v = o(24), h = L(v), g = o(35), b = L(g), _ = o(6), y = L(_), E = o(22), A = L(E), w = o(7), S = L(w), P = o(55), N = L(P), O = o(42), x = L(O), T = o(23), I = L(T);
          function L(B) {
            return B && B.__esModule ? B : { default: B };
          }
          f.default.register({
            "blots/block": d.default,
            "blots/block/embed": p.BlockEmbed,
            "blots/break": i.default,
            "blots/container": m.default,
            "blots/cursor": h.default,
            "blots/embed": b.default,
            "blots/inline": y.default,
            "blots/scroll": A.default,
            "blots/text": S.default,
            "modules/clipboard": N.default,
            "modules/history": x.default,
            "modules/keyboard": I.default
          }), u.default.register(d.default, i.default, h.default, y.default, A.default, S.default), n.default = f.default;
        },
        /* 30 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var a = o(1), u = (
            /** @class */
            function() {
              function c(f) {
                this.domNode = f, this.domNode[a.DATA_KEY] = { blot: this };
              }
              return Object.defineProperty(c.prototype, "statics", {
                // Hack for accessing inherited static methods
                get: function() {
                  return this.constructor;
                },
                enumerable: !0,
                configurable: !0
              }), c.create = function(f) {
                if (this.tagName == null)
                  throw new a.ParchmentError("Blot definition missing tagName");
                var p;
                return Array.isArray(this.tagName) ? (typeof f == "string" && (f = f.toUpperCase(), parseInt(f).toString() === f && (f = parseInt(f))), typeof f == "number" ? p = document.createElement(this.tagName[f - 1]) : this.tagName.indexOf(f) > -1 ? p = document.createElement(f) : p = document.createElement(this.tagName[0])) : p = document.createElement(this.tagName), this.className && p.classList.add(this.className), p;
              }, c.prototype.attach = function() {
                this.parent != null && (this.scroll = this.parent.scroll);
              }, c.prototype.clone = function() {
                var f = this.domNode.cloneNode(!1);
                return a.create(f);
              }, c.prototype.detach = function() {
                this.parent != null && this.parent.removeChild(this), delete this.domNode[a.DATA_KEY];
              }, c.prototype.deleteAt = function(f, p) {
                var d = this.isolate(f, p);
                d.remove();
              }, c.prototype.formatAt = function(f, p, d, l) {
                var i = this.isolate(f, p);
                if (a.query(d, a.Scope.BLOT) != null && l)
                  i.wrap(d, l);
                else if (a.query(d, a.Scope.ATTRIBUTE) != null) {
                  var s = a.create(this.statics.scope);
                  i.wrap(s), s.format(d, l);
                }
              }, c.prototype.insertAt = function(f, p, d) {
                var l = d == null ? a.create("text", p) : a.create(p, d), i = this.split(f);
                this.parent.insertBefore(l, i);
              }, c.prototype.insertInto = function(f, p) {
                p === void 0 && (p = null), this.parent != null && this.parent.children.remove(this);
                var d = null;
                f.children.insertBefore(this, p), p != null && (d = p.domNode), (this.domNode.parentNode != f.domNode || this.domNode.nextSibling != d) && f.domNode.insertBefore(this.domNode, d), this.parent = f, this.attach();
              }, c.prototype.isolate = function(f, p) {
                var d = this.split(f);
                return d.split(p), d;
              }, c.prototype.length = function() {
                return 1;
              }, c.prototype.offset = function(f) {
                return f === void 0 && (f = this.parent), this.parent == null || this == f ? 0 : this.parent.children.offset(this) + this.parent.offset(f);
              }, c.prototype.optimize = function(f) {
                this.domNode[a.DATA_KEY] != null && delete this.domNode[a.DATA_KEY].mutations;
              }, c.prototype.remove = function() {
                this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
              }, c.prototype.replace = function(f) {
                f.parent != null && (f.parent.insertBefore(this, f.next), f.remove());
              }, c.prototype.replaceWith = function(f, p) {
                var d = typeof f == "string" ? a.create(f, p) : f;
                return d.replace(this), d;
              }, c.prototype.split = function(f, p) {
                return f === 0 ? this : this.next;
              }, c.prototype.update = function(f, p) {
              }, c.prototype.wrap = function(f, p) {
                var d = typeof f == "string" ? a.create(f, p) : f;
                return this.parent != null && this.parent.insertBefore(d, this.next), d.appendChild(this), d;
              }, c.blotName = "abstract", c;
            }()
          );
          n.default = u;
        },
        /* 31 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var a = o(12), u = o(32), c = o(33), f = o(1), p = (
            /** @class */
            function() {
              function d(l) {
                this.attributes = {}, this.domNode = l, this.build();
              }
              return d.prototype.attribute = function(l, i) {
                i ? l.add(this.domNode, i) && (l.value(this.domNode) != null ? this.attributes[l.attrName] = l : delete this.attributes[l.attrName]) : (l.remove(this.domNode), delete this.attributes[l.attrName]);
              }, d.prototype.build = function() {
                var l = this;
                this.attributes = {};
                var i = a.default.keys(this.domNode), s = u.default.keys(this.domNode), m = c.default.keys(this.domNode);
                i.concat(s).concat(m).forEach(function(v) {
                  var h = f.query(v, f.Scope.ATTRIBUTE);
                  h instanceof a.default && (l.attributes[h.attrName] = h);
                });
              }, d.prototype.copy = function(l) {
                var i = this;
                Object.keys(this.attributes).forEach(function(s) {
                  var m = i.attributes[s].value(i.domNode);
                  l.format(s, m);
                });
              }, d.prototype.move = function(l) {
                var i = this;
                this.copy(l), Object.keys(this.attributes).forEach(function(s) {
                  i.attributes[s].remove(i.domNode);
                }), this.attributes = {};
              }, d.prototype.values = function() {
                var l = this;
                return Object.keys(this.attributes).reduce(function(i, s) {
                  return i[s] = l.attributes[s].value(l.domNode), i;
                }, {});
              }, d;
            }()
          );
          n.default = p;
        },
        /* 32 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var i in l) l.hasOwnProperty(i) && (d[i] = l[i]);
            };
            return function(d, l) {
              p(d, l);
              function i() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (i.prototype = l.prototype, new i());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(12);
          function c(p, d) {
            var l = p.getAttribute("class") || "";
            return l.split(/\s+/).filter(function(i) {
              return i.indexOf(d + "-") === 0;
            });
          }
          var f = (
            /** @class */
            function(p) {
              a(d, p);
              function d() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return d.keys = function(l) {
                return (l.getAttribute("class") || "").split(/\s+/).map(function(i) {
                  return i.split("-").slice(0, -1).join("-");
                });
              }, d.prototype.add = function(l, i) {
                return this.canAdd(l, i) ? (this.remove(l), l.classList.add(this.keyName + "-" + i), !0) : !1;
              }, d.prototype.remove = function(l) {
                var i = c(l, this.keyName);
                i.forEach(function(s) {
                  l.classList.remove(s);
                }), l.classList.length === 0 && l.removeAttribute("class");
              }, d.prototype.value = function(l) {
                var i = c(l, this.keyName)[0] || "", s = i.slice(this.keyName.length + 1);
                return this.canAdd(l, s) ? s : "";
              }, d;
            }(u.default)
          );
          n.default = f;
        },
        /* 33 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var i in l) l.hasOwnProperty(i) && (d[i] = l[i]);
            };
            return function(d, l) {
              p(d, l);
              function i() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (i.prototype = l.prototype, new i());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(12);
          function c(p) {
            var d = p.split("-"), l = d.slice(1).map(function(i) {
              return i[0].toUpperCase() + i.slice(1);
            }).join("");
            return d[0] + l;
          }
          var f = (
            /** @class */
            function(p) {
              a(d, p);
              function d() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return d.keys = function(l) {
                return (l.getAttribute("style") || "").split(";").map(function(i) {
                  var s = i.split(":");
                  return s[0].trim();
                });
              }, d.prototype.add = function(l, i) {
                return this.canAdd(l, i) ? (l.style[c(this.keyName)] = i, !0) : !1;
              }, d.prototype.remove = function(l) {
                l.style[c(this.keyName)] = "", l.getAttribute("style") || l.removeAttribute("style");
              }, d.prototype.value = function(l) {
                var i = l.style[c(this.keyName)];
                return this.canAdd(l, i) ? i : "";
              }, d;
            }(u.default)
          );
          n.default = f;
        },
        /* 34 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function f(p, d) {
              for (var l = 0; l < d.length; l++) {
                var i = d[l];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(p, i.key, i);
              }
            }
            return function(p, d, l) {
              return d && f(p.prototype, d), l && f(p, l), p;
            };
          }();
          function u(f, p) {
            if (!(f instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          var c = function() {
            function f(p, d) {
              u(this, f), this.quill = p, this.options = d, this.modules = {};
            }
            return a(f, [{
              key: "init",
              value: function() {
                var d = this;
                Object.keys(this.options.modules).forEach(function(l) {
                  d.modules[l] == null && d.addModule(l);
                });
              }
            }, {
              key: "addModule",
              value: function(d) {
                var l = this.quill.constructor.import("modules/" + d);
                return this.modules[d] = new l(this.quill, this.options.modules[d] || {}), this.modules[d];
              }
            }]), f;
          }();
          c.DEFAULTS = {
            modules: {}
          }, c.themes = {
            default: c
          }, n.default = c;
        },
        /* 35 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function g(b, _) {
              for (var y = 0; y < _.length; y++) {
                var E = _[y];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(b, E.key, E);
              }
            }
            return function(b, _, y) {
              return _ && g(b.prototype, _), y && g(b, y), b;
            };
          }(), u = function g(b, _, y) {
            b === null && (b = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(b, _);
            if (E === void 0) {
              var A = Object.getPrototypeOf(b);
              return A === null ? void 0 : g(A, _, y);
            } else {
              if ("value" in E)
                return E.value;
              var w = E.get;
              return w === void 0 ? void 0 : w.call(y);
            }
          }, c = o(0), f = l(c), p = o(7), d = l(p);
          function l(g) {
            return g && g.__esModule ? g : { default: g };
          }
          function i(g, b) {
            if (!(g instanceof b))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(g, b) {
            if (!g)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && (typeof b == "object" || typeof b == "function") ? b : g;
          }
          function m(g, b) {
            if (typeof b != "function" && b !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            g.prototype = Object.create(b && b.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(g, b) : g.__proto__ = b);
          }
          var v = "\uFEFF", h = function(g) {
            m(b, g);
            function b(_) {
              i(this, b);
              var y = s(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, _));
              return y.contentNode = document.createElement("span"), y.contentNode.setAttribute("contenteditable", !1), [].slice.call(y.domNode.childNodes).forEach(function(E) {
                y.contentNode.appendChild(E);
              }), y.leftGuard = document.createTextNode(v), y.rightGuard = document.createTextNode(v), y.domNode.appendChild(y.leftGuard), y.domNode.appendChild(y.contentNode), y.domNode.appendChild(y.rightGuard), y;
            }
            return a(b, [{
              key: "index",
              value: function(y, E) {
                return y === this.leftGuard ? 0 : y === this.rightGuard ? 1 : u(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "index", this).call(this, y, E);
              }
            }, {
              key: "restore",
              value: function(y) {
                var E = void 0, A = void 0, w = y.data.split(v).join("");
                if (y === this.leftGuard)
                  if (this.prev instanceof d.default) {
                    var S = this.prev.length();
                    this.prev.insertAt(S, w), E = {
                      startNode: this.prev.domNode,
                      startOffset: S + w.length
                    };
                  } else
                    A = document.createTextNode(w), this.parent.insertBefore(f.default.create(A), this), E = {
                      startNode: A,
                      startOffset: w.length
                    };
                else y === this.rightGuard && (this.next instanceof d.default ? (this.next.insertAt(0, w), E = {
                  startNode: this.next.domNode,
                  startOffset: w.length
                }) : (A = document.createTextNode(w), this.parent.insertBefore(f.default.create(A), this.next), E = {
                  startNode: A,
                  startOffset: w.length
                }));
                return y.data = v, E;
              }
            }, {
              key: "update",
              value: function(y, E) {
                var A = this;
                y.forEach(function(w) {
                  if (w.type === "characterData" && (w.target === A.leftGuard || w.target === A.rightGuard)) {
                    var S = A.restore(w.target);
                    S && (E.range = S);
                  }
                });
              }
            }]), b;
          }(f.default.Embed);
          n.default = h;
        },
        /* 36 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.AlignStyle = n.AlignClass = n.AlignAttribute = void 0;
          var a = o(0), u = c(a);
          function c(i) {
            return i && i.__esModule ? i : { default: i };
          }
          var f = {
            scope: u.default.Scope.BLOCK,
            whitelist: ["right", "center", "justify"]
          }, p = new u.default.Attributor.Attribute("align", "align", f), d = new u.default.Attributor.Class("align", "ql-align", f), l = new u.default.Attributor.Style("align", "text-align", f);
          n.AlignAttribute = p, n.AlignClass = d, n.AlignStyle = l;
        },
        /* 37 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.BackgroundStyle = n.BackgroundClass = void 0;
          var a = o(0), u = f(a), c = o(26);
          function f(l) {
            return l && l.__esModule ? l : { default: l };
          }
          var p = new u.default.Attributor.Class("background", "ql-bg", {
            scope: u.default.Scope.INLINE
          }), d = new c.ColorAttributor("background", "background-color", {
            scope: u.default.Scope.INLINE
          });
          n.BackgroundClass = p, n.BackgroundStyle = d;
        },
        /* 38 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.DirectionStyle = n.DirectionClass = n.DirectionAttribute = void 0;
          var a = o(0), u = c(a);
          function c(i) {
            return i && i.__esModule ? i : { default: i };
          }
          var f = {
            scope: u.default.Scope.BLOCK,
            whitelist: ["rtl"]
          }, p = new u.default.Attributor.Attribute("direction", "dir", f), d = new u.default.Attributor.Class("direction", "ql-direction", f), l = new u.default.Attributor.Style("direction", "direction", f);
          n.DirectionAttribute = p, n.DirectionClass = d, n.DirectionStyle = l;
        },
        /* 39 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.FontClass = n.FontStyle = void 0;
          var a = /* @__PURE__ */ function() {
            function g(b, _) {
              for (var y = 0; y < _.length; y++) {
                var E = _[y];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(b, E.key, E);
              }
            }
            return function(b, _, y) {
              return _ && g(b.prototype, _), y && g(b, y), b;
            };
          }(), u = function g(b, _, y) {
            b === null && (b = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(b, _);
            if (E === void 0) {
              var A = Object.getPrototypeOf(b);
              return A === null ? void 0 : g(A, _, y);
            } else {
              if ("value" in E)
                return E.value;
              var w = E.get;
              return w === void 0 ? void 0 : w.call(y);
            }
          }, c = o(0), f = p(c);
          function p(g) {
            return g && g.__esModule ? g : { default: g };
          }
          function d(g, b) {
            if (!(g instanceof b))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(g, b) {
            if (!g)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && (typeof b == "object" || typeof b == "function") ? b : g;
          }
          function i(g, b) {
            if (typeof b != "function" && b !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            g.prototype = Object.create(b && b.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(g, b) : g.__proto__ = b);
          }
          var s = {
            scope: f.default.Scope.INLINE,
            whitelist: ["serif", "monospace"]
          }, m = new f.default.Attributor.Class("font", "ql-font", s), v = function(g) {
            i(b, g);
            function b() {
              return d(this, b), l(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
            }
            return a(b, [{
              key: "value",
              value: function(y) {
                return u(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "value", this).call(this, y).replace(/["']/g, "");
              }
            }]), b;
          }(f.default.Attributor.Style), h = new v("font", "font-family", s);
          n.FontStyle = h, n.FontClass = m;
        },
        /* 40 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.SizeStyle = n.SizeClass = void 0;
          var a = o(0), u = c(a);
          function c(d) {
            return d && d.__esModule ? d : { default: d };
          }
          var f = new u.default.Attributor.Class("size", "ql-size", {
            scope: u.default.Scope.INLINE,
            whitelist: ["small", "large", "huge"]
          }), p = new u.default.Attributor.Style("size", "font-size", {
            scope: u.default.Scope.INLINE,
            whitelist: ["10px", "18px", "32px"]
          });
          n.SizeClass = f, n.SizeStyle = p;
        },
        /* 41 */
        /***/
        function(r, n, o) {
          r.exports = {
            align: {
              "": o(76),
              center: o(77),
              right: o(78),
              justify: o(79)
            },
            background: o(80),
            blockquote: o(81),
            bold: o(82),
            clean: o(83),
            code: o(58),
            "code-block": o(58),
            color: o(84),
            direction: {
              "": o(85),
              rtl: o(86)
            },
            float: {
              center: o(87),
              full: o(88),
              left: o(89),
              right: o(90)
            },
            formula: o(91),
            header: {
              1: o(92),
              2: o(93)
            },
            italic: o(94),
            image: o(95),
            indent: {
              "+1": o(96),
              "-1": o(97)
            },
            link: o(98),
            list: {
              ordered: o(99),
              bullet: o(100),
              check: o(101)
            },
            script: {
              sub: o(102),
              super: o(103)
            },
            strike: o(104),
            underline: o(105),
            video: o(106)
          };
        },
        /* 42 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.getLastChangeIndex = n.default = void 0;
          var a = /* @__PURE__ */ function() {
            function _(y, E) {
              for (var A = 0; A < E.length; A++) {
                var w = E[A];
                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(y, w.key, w);
              }
            }
            return function(y, E, A) {
              return E && _(y.prototype, E), A && _(y, A), y;
            };
          }(), u = o(0), c = i(u), f = o(5), p = i(f), d = o(9), l = i(d);
          function i(_) {
            return _ && _.__esModule ? _ : { default: _ };
          }
          function s(_, y) {
            if (!(_ instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          function m(_, y) {
            if (!_)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == "object" || typeof y == "function") ? y : _;
          }
          function v(_, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof y);
            _.prototype = Object.create(y && y.prototype, { constructor: { value: _, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(_, y) : _.__proto__ = y);
          }
          var h = function(_) {
            v(y, _);
            function y(E, A) {
              s(this, y);
              var w = m(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, E, A));
              return w.lastRecorded = 0, w.ignoreChange = !1, w.clear(), w.quill.on(p.default.events.EDITOR_CHANGE, function(S, P, N, O) {
                S !== p.default.events.TEXT_CHANGE || w.ignoreChange || (!w.options.userOnly || O === p.default.sources.USER ? w.record(P, N) : w.transform(P));
              }), w.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, w.undo.bind(w)), w.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, w.redo.bind(w)), /Win/i.test(navigator.platform) && w.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, w.redo.bind(w)), w;
            }
            return a(y, [{
              key: "change",
              value: function(A, w) {
                if (this.stack[A].length !== 0) {
                  var S = this.stack[A].pop();
                  this.stack[w].push(S), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(S[A], p.default.sources.USER), this.ignoreChange = !1;
                  var P = b(S[A]);
                  this.quill.setSelection(P);
                }
              }
            }, {
              key: "clear",
              value: function() {
                this.stack = { undo: [], redo: [] };
              }
            }, {
              key: "cutoff",
              value: function() {
                this.lastRecorded = 0;
              }
            }, {
              key: "record",
              value: function(A, w) {
                if (A.ops.length !== 0) {
                  this.stack.redo = [];
                  var S = this.quill.getContents().diff(w), P = Date.now();
                  if (this.lastRecorded + this.options.delay > P && this.stack.undo.length > 0) {
                    var N = this.stack.undo.pop();
                    S = S.compose(N.undo), A = N.redo.compose(A);
                  } else
                    this.lastRecorded = P;
                  this.stack.undo.push({
                    redo: A,
                    undo: S
                  }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                }
              }
            }, {
              key: "redo",
              value: function() {
                this.change("redo", "undo");
              }
            }, {
              key: "transform",
              value: function(A) {
                this.stack.undo.forEach(function(w) {
                  w.undo = A.transform(w.undo, !0), w.redo = A.transform(w.redo, !0);
                }), this.stack.redo.forEach(function(w) {
                  w.undo = A.transform(w.undo, !0), w.redo = A.transform(w.redo, !0);
                });
              }
            }, {
              key: "undo",
              value: function() {
                this.change("undo", "redo");
              }
            }]), y;
          }(l.default);
          h.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
          };
          function g(_) {
            var y = _.ops[_.ops.length - 1];
            return y == null ? !1 : y.insert != null ? typeof y.insert == "string" && y.insert.endsWith(`
`) : y.attributes != null ? Object.keys(y.attributes).some(function(E) {
              return c.default.query(E, c.default.Scope.BLOCK) != null;
            }) : !1;
          }
          function b(_) {
            var y = _.reduce(function(A, w) {
              return A += w.delete || 0, A;
            }, 0), E = _.length() - y;
            return g(_) && (E -= 1), E;
          }
          n.default = h, n.getLastChangeIndex = b;
        },
        /* 43 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.BaseTooltip = void 0;
          var a = /* @__PURE__ */ function() {
            function R(M, U) {
              for (var F = 0; F < U.length; F++) {
                var C = U[F];
                C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(M, C.key, C);
              }
            }
            return function(M, U, F) {
              return U && R(M.prototype, U), F && R(M, F), M;
            };
          }(), u = function R(M, U, F) {
            M === null && (M = Function.prototype);
            var C = Object.getOwnPropertyDescriptor(M, U);
            if (C === void 0) {
              var q = Object.getPrototypeOf(M);
              return q === null ? void 0 : R(q, U, F);
            } else {
              if ("value" in C)
                return C.value;
              var W = C.get;
              return W === void 0 ? void 0 : W.call(F);
            }
          }, c = o(3), f = P(c), p = o(2), d = P(p), l = o(8), i = P(l), s = o(23), m = P(s), v = o(34), h = P(v), g = o(59), b = P(g), _ = o(60), y = P(_), E = o(28), A = P(E), w = o(61), S = P(w);
          function P(R) {
            return R && R.__esModule ? R : { default: R };
          }
          function N(R, M) {
            if (!(R instanceof M))
              throw new TypeError("Cannot call a class as a function");
          }
          function O(R, M) {
            if (!R)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return M && (typeof M == "object" || typeof M == "function") ? M : R;
          }
          function x(R, M) {
            if (typeof M != "function" && M !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof M);
            R.prototype = Object.create(M && M.prototype, { constructor: { value: R, enumerable: !1, writable: !0, configurable: !0 } }), M && (Object.setPrototypeOf ? Object.setPrototypeOf(R, M) : R.__proto__ = M);
          }
          var T = [!1, "center", "right", "justify"], I = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], L = [!1, "serif", "monospace"], B = ["1", "2", "3", !1], $ = ["small", !1, "large", "huge"], K = function(R) {
            x(M, R);
            function M(U, F) {
              N(this, M);
              var C = O(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this, U, F)), q = function W(z) {
                if (!document.body.contains(U.root))
                  return document.body.removeEventListener("click", W);
                C.tooltip != null && !C.tooltip.root.contains(z.target) && document.activeElement !== C.tooltip.textbox && !C.quill.hasFocus() && C.tooltip.hide(), C.pickers != null && C.pickers.forEach(function(Z) {
                  Z.container.contains(z.target) || Z.close();
                });
              };
              return U.emitter.listenDOM("click", document.body, q), C;
            }
            return a(M, [{
              key: "addModule",
              value: function(F) {
                var C = u(M.prototype.__proto__ || Object.getPrototypeOf(M.prototype), "addModule", this).call(this, F);
                return F === "toolbar" && this.extendToolbar(C), C;
              }
            }, {
              key: "buildButtons",
              value: function(F, C) {
                F.forEach(function(q) {
                  var W = q.getAttribute("class") || "";
                  W.split(/\s+/).forEach(function(z) {
                    if (z.startsWith("ql-") && (z = z.slice(3), C[z] != null))
                      if (z === "direction")
                        q.innerHTML = C[z][""] + C[z].rtl;
                      else if (typeof C[z] == "string")
                        q.innerHTML = C[z];
                      else {
                        var Z = q.value || "";
                        Z != null && C[z][Z] && (q.innerHTML = C[z][Z]);
                      }
                  });
                });
              }
            }, {
              key: "buildPickers",
              value: function(F, C) {
                var q = this;
                this.pickers = F.map(function(z) {
                  if (z.classList.contains("ql-align"))
                    return z.querySelector("option") == null && D(z, T), new y.default(z, C.align);
                  if (z.classList.contains("ql-background") || z.classList.contains("ql-color")) {
                    var Z = z.classList.contains("ql-background") ? "background" : "color";
                    return z.querySelector("option") == null && D(z, I, Z === "background" ? "#ffffff" : "#000000"), new b.default(z, C[Z]);
                  } else
                    return z.querySelector("option") == null && (z.classList.contains("ql-font") ? D(z, L) : z.classList.contains("ql-header") ? D(z, B) : z.classList.contains("ql-size") && D(z, $)), new A.default(z);
                });
                var W = function() {
                  q.pickers.forEach(function(Z) {
                    Z.update();
                  });
                };
                this.quill.on(i.default.events.EDITOR_CHANGE, W);
              }
            }]), M;
          }(h.default);
          K.DEFAULTS = (0, f.default)(!0, {}, h.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  formula: function() {
                    this.quill.theme.tooltip.edit("formula");
                  },
                  image: function() {
                    var M = this, U = this.container.querySelector("input.ql-image[type=file]");
                    U == null && (U = document.createElement("input"), U.setAttribute("type", "file"), U.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), U.classList.add("ql-image"), U.addEventListener("change", function() {
                      if (U.files != null && U.files[0] != null) {
                        var F = new FileReader();
                        F.onload = function(C) {
                          var q = M.quill.getSelection(!0);
                          M.quill.updateContents(new d.default().retain(q.index).delete(q.length).insert({ image: C.target.result }), i.default.sources.USER), M.quill.setSelection(q.index + 1, i.default.sources.SILENT), U.value = "";
                        }, F.readAsDataURL(U.files[0]);
                      }
                    }), this.container.appendChild(U)), U.click();
                  },
                  video: function() {
                    this.quill.theme.tooltip.edit("video");
                  }
                }
              }
            }
          });
          var j = function(R) {
            x(M, R);
            function M(U, F) {
              N(this, M);
              var C = O(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this, U, F));
              return C.textbox = C.root.querySelector('input[type="text"]'), C.listen(), C;
            }
            return a(M, [{
              key: "listen",
              value: function() {
                var F = this;
                this.textbox.addEventListener("keydown", function(C) {
                  m.default.match(C, "enter") ? (F.save(), C.preventDefault()) : m.default.match(C, "escape") && (F.cancel(), C.preventDefault());
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.hide();
              }
            }, {
              key: "edit",
              value: function() {
                var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), C != null ? this.textbox.value = C : F !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + F) || ""), this.root.setAttribute("data-mode", F);
              }
            }, {
              key: "restoreFocus",
              value: function() {
                var F = this.quill.scrollingContainer.scrollTop;
                this.quill.focus(), this.quill.scrollingContainer.scrollTop = F;
              }
            }, {
              key: "save",
              value: function() {
                var F = this.textbox.value;
                switch (this.root.getAttribute("data-mode")) {
                  case "link": {
                    var C = this.quill.root.scrollTop;
                    this.linkRange ? (this.quill.formatText(this.linkRange, "link", F, i.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", F, i.default.sources.USER)), this.quill.root.scrollTop = C;
                    break;
                  }
                  case "video":
                    F = k(F);
                  case "formula": {
                    if (!F) break;
                    var q = this.quill.getSelection(!0);
                    if (q != null) {
                      var W = q.index + q.length;
                      this.quill.insertEmbed(W, this.root.getAttribute("data-mode"), F, i.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(W + 1, " ", i.default.sources.USER), this.quill.setSelection(W + 2, i.default.sources.USER);
                    }
                    break;
                  }
                }
                this.textbox.value = "", this.hide();
              }
            }]), M;
          }(S.default);
          function k(R) {
            var M = R.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || R.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
            return M ? (M[1] || "https") + "://www.youtube.com/embed/" + M[2] + "?showinfo=0" : (M = R.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (M[1] || "https") + "://player.vimeo.com/video/" + M[2] + "/" : R;
          }
          function D(R, M) {
            var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            M.forEach(function(F) {
              var C = document.createElement("option");
              F === U ? C.setAttribute("selected", "selected") : C.setAttribute("value", F), R.appendChild(C);
            });
          }
          n.BaseTooltip = j, n.default = K;
        },
        /* 44 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var a = (
            /** @class */
            function() {
              function u() {
                this.head = this.tail = null, this.length = 0;
              }
              return u.prototype.append = function() {
                for (var c = [], f = 0; f < arguments.length; f++)
                  c[f] = arguments[f];
                this.insertBefore(c[0], null), c.length > 1 && this.append.apply(this, c.slice(1));
              }, u.prototype.contains = function(c) {
                for (var f, p = this.iterator(); f = p(); )
                  if (f === c)
                    return !0;
                return !1;
              }, u.prototype.insertBefore = function(c, f) {
                c && (c.next = f, f != null ? (c.prev = f.prev, f.prev != null && (f.prev.next = c), f.prev = c, f === this.head && (this.head = c)) : this.tail != null ? (this.tail.next = c, c.prev = this.tail, this.tail = c) : (c.prev = null, this.head = this.tail = c), this.length += 1);
              }, u.prototype.offset = function(c) {
                for (var f = 0, p = this.head; p != null; ) {
                  if (p === c)
                    return f;
                  f += p.length(), p = p.next;
                }
                return -1;
              }, u.prototype.remove = function(c) {
                this.contains(c) && (c.prev != null && (c.prev.next = c.next), c.next != null && (c.next.prev = c.prev), c === this.head && (this.head = c.next), c === this.tail && (this.tail = c.prev), this.length -= 1);
              }, u.prototype.iterator = function(c) {
                return c === void 0 && (c = this.head), function() {
                  var f = c;
                  return c != null && (c = c.next), f;
                };
              }, u.prototype.find = function(c, f) {
                f === void 0 && (f = !1);
                for (var p, d = this.iterator(); p = d(); ) {
                  var l = p.length();
                  if (c < l || f && c === l && (p.next == null || p.next.length() !== 0))
                    return [p, c];
                  c -= l;
                }
                return [null, 0];
              }, u.prototype.forEach = function(c) {
                for (var f, p = this.iterator(); f = p(); )
                  c(f);
              }, u.prototype.forEachAt = function(c, f, p) {
                if (!(f <= 0))
                  for (var d = this.find(c), l = d[0], i = d[1], s, m = c - i, v = this.iterator(l); (s = v()) && m < c + f; ) {
                    var h = s.length();
                    c > m ? p(s, c - m, Math.min(f, m + h - c)) : p(s, 0, Math.min(h, c + f - m)), m += h;
                  }
              }, u.prototype.map = function(c) {
                return this.reduce(function(f, p) {
                  return f.push(c(p)), f;
                }, []);
              }, u.prototype.reduce = function(c, f) {
                for (var p, d = this.iterator(); p = d(); )
                  f = c(f, p);
                return f;
              }, u;
            }()
          );
          n.default = a;
        },
        /* 45 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, s) {
              i.__proto__ = s;
            } || function(i, s) {
              for (var m in s) s.hasOwnProperty(m) && (i[m] = s[m]);
            };
            return function(i, s) {
              l(i, s);
              function m() {
                this.constructor = i;
              }
              i.prototype = s === null ? Object.create(s) : (m.prototype = s.prototype, new m());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(17), c = o(1), f = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          }, p = 100, d = (
            /** @class */
            function(l) {
              a(i, l);
              function i(s) {
                var m = l.call(this, s) || this;
                return m.scroll = m, m.observer = new MutationObserver(function(v) {
                  m.update(v);
                }), m.observer.observe(m.domNode, f), m.attach(), m;
              }
              return i.prototype.detach = function() {
                l.prototype.detach.call(this), this.observer.disconnect();
              }, i.prototype.deleteAt = function(s, m) {
                this.update(), s === 0 && m === this.length() ? this.children.forEach(function(v) {
                  v.remove();
                }) : l.prototype.deleteAt.call(this, s, m);
              }, i.prototype.formatAt = function(s, m, v, h) {
                this.update(), l.prototype.formatAt.call(this, s, m, v, h);
              }, i.prototype.insertAt = function(s, m, v) {
                this.update(), l.prototype.insertAt.call(this, s, m, v);
              }, i.prototype.optimize = function(s, m) {
                var v = this;
                s === void 0 && (s = []), m === void 0 && (m = {}), l.prototype.optimize.call(this, m);
                for (var h = [].slice.call(this.observer.takeRecords()); h.length > 0; )
                  s.push(h.pop());
                for (var g = function(E, A) {
                  A === void 0 && (A = !0), !(E == null || E === v) && E.domNode.parentNode != null && (E.domNode[c.DATA_KEY].mutations == null && (E.domNode[c.DATA_KEY].mutations = []), A && g(E.parent));
                }, b = function(E) {
                  // @ts-ignore
                  E.domNode[c.DATA_KEY] == null || // @ts-ignore
                  E.domNode[c.DATA_KEY].mutations == null || (E instanceof u.default && E.children.forEach(b), E.optimize(m));
                }, _ = s, y = 0; _.length > 0; y += 1) {
                  if (y >= p)
                    throw new Error("[Parchment] Maximum optimize iterations reached");
                  for (_.forEach(function(E) {
                    var A = c.find(E.target, !0);
                    A != null && (A.domNode === E.target && (E.type === "childList" ? (g(c.find(E.previousSibling, !1)), [].forEach.call(E.addedNodes, function(w) {
                      var S = c.find(w, !1);
                      g(S, !1), S instanceof u.default && S.children.forEach(function(P) {
                        g(P, !1);
                      });
                    })) : E.type === "attributes" && g(A.prev)), g(A));
                  }), this.children.forEach(b), _ = [].slice.call(this.observer.takeRecords()), h = _.slice(); h.length > 0; )
                    s.push(h.pop());
                }
              }, i.prototype.update = function(s, m) {
                var v = this;
                m === void 0 && (m = {}), s = s || this.observer.takeRecords(), s.map(function(h) {
                  var g = c.find(h.target, !0);
                  return g == null ? null : g.domNode[c.DATA_KEY].mutations == null ? (g.domNode[c.DATA_KEY].mutations = [h], g) : (g.domNode[c.DATA_KEY].mutations.push(h), null);
                }).forEach(function(h) {
                  h == null || h === v || //@ts-ignore
                  h.domNode[c.DATA_KEY] == null || h.update(h.domNode[c.DATA_KEY].mutations || [], m);
                }), this.domNode[c.DATA_KEY].mutations != null && l.prototype.update.call(this, this.domNode[c.DATA_KEY].mutations, m), this.optimize(s, m);
              }, i.blotName = "scroll", i.defaultChild = "block", i.scope = c.Scope.BLOCK_BLOT, i.tagName = "DIV", i;
            }(u.default)
          );
          n.default = d;
        },
        /* 46 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, i) {
              l.__proto__ = i;
            } || function(l, i) {
              for (var s in i) i.hasOwnProperty(s) && (l[s] = i[s]);
            };
            return function(l, i) {
              d(l, i);
              function s() {
                this.constructor = l;
              }
              l.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(18), c = o(1);
          function f(d, l) {
            if (Object.keys(d).length !== Object.keys(l).length)
              return !1;
            for (var i in d)
              if (d[i] !== l[i])
                return !1;
            return !0;
          }
          var p = (
            /** @class */
            function(d) {
              a(l, d);
              function l() {
                return d !== null && d.apply(this, arguments) || this;
              }
              return l.formats = function(i) {
                if (i.tagName !== l.tagName)
                  return d.formats.call(this, i);
              }, l.prototype.format = function(i, s) {
                var m = this;
                i === this.statics.blotName && !s ? (this.children.forEach(function(v) {
                  v instanceof u.default || (v = v.wrap(l.blotName, !0)), m.attributes.copy(v);
                }), this.unwrap()) : d.prototype.format.call(this, i, s);
              }, l.prototype.formatAt = function(i, s, m, v) {
                if (this.formats()[m] != null || c.query(m, c.Scope.ATTRIBUTE)) {
                  var h = this.isolate(i, s);
                  h.format(m, v);
                } else
                  d.prototype.formatAt.call(this, i, s, m, v);
              }, l.prototype.optimize = function(i) {
                d.prototype.optimize.call(this, i);
                var s = this.formats();
                if (Object.keys(s).length === 0)
                  return this.unwrap();
                var m = this.next;
                m instanceof l && m.prev === this && f(s, m.formats()) && (m.moveChildren(this), m.remove());
              }, l.blotName = "inline", l.scope = c.Scope.INLINE_BLOT, l.tagName = "SPAN", l;
            }(u.default)
          );
          n.default = p;
        },
        /* 47 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var i in l) l.hasOwnProperty(i) && (d[i] = l[i]);
            };
            return function(d, l) {
              p(d, l);
              function i() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (i.prototype = l.prototype, new i());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(18), c = o(1), f = (
            /** @class */
            function(p) {
              a(d, p);
              function d() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return d.formats = function(l) {
                var i = c.query(d.blotName).tagName;
                if (l.tagName !== i)
                  return p.formats.call(this, l);
              }, d.prototype.format = function(l, i) {
                c.query(l, c.Scope.BLOCK) != null && (l === this.statics.blotName && !i ? this.replaceWith(d.blotName) : p.prototype.format.call(this, l, i));
              }, d.prototype.formatAt = function(l, i, s, m) {
                c.query(s, c.Scope.BLOCK) != null ? this.format(s, m) : p.prototype.formatAt.call(this, l, i, s, m);
              }, d.prototype.insertAt = function(l, i, s) {
                if (s == null || c.query(i, c.Scope.INLINE) != null)
                  p.prototype.insertAt.call(this, l, i, s);
                else {
                  var m = this.split(l), v = c.create(i, s);
                  m.parent.insertBefore(v, m);
                }
              }, d.prototype.update = function(l, i) {
                navigator.userAgent.match(/Trident/) ? this.build() : p.prototype.update.call(this, l, i);
              }, d.blotName = "block", d.scope = c.Scope.BLOCK_BLOT, d.tagName = "P", d;
            }(u.default)
          );
          n.default = f;
        },
        /* 48 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, d) {
              p.__proto__ = d;
            } || function(p, d) {
              for (var l in d) d.hasOwnProperty(l) && (p[l] = d[l]);
            };
            return function(p, d) {
              f(p, d);
              function l() {
                this.constructor = p;
              }
              p.prototype = d === null ? Object.create(d) : (l.prototype = d.prototype, new l());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(19), c = (
            /** @class */
            function(f) {
              a(p, f);
              function p() {
                return f !== null && f.apply(this, arguments) || this;
              }
              return p.formats = function(d) {
              }, p.prototype.format = function(d, l) {
                f.prototype.formatAt.call(this, 0, this.length(), d, l);
              }, p.prototype.formatAt = function(d, l, i, s) {
                d === 0 && l === this.length() ? this.format(i, s) : f.prototype.formatAt.call(this, d, l, i, s);
              }, p.prototype.formats = function() {
                return this.statics.formats(this.domNode);
              }, p;
            }(u.default)
          );
          n.default = c;
        },
        /* 49 */
        /***/
        function(r, n, o) {
          var a = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var i in l) l.hasOwnProperty(i) && (d[i] = l[i]);
            };
            return function(d, l) {
              p(d, l);
              function i() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (i.prototype = l.prototype, new i());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(19), c = o(1), f = (
            /** @class */
            function(p) {
              a(d, p);
              function d(l) {
                var i = p.call(this, l) || this;
                return i.text = i.statics.value(i.domNode), i;
              }
              return d.create = function(l) {
                return document.createTextNode(l);
              }, d.value = function(l) {
                var i = l.data;
                return i.normalize && (i = i.normalize()), i;
              }, d.prototype.deleteAt = function(l, i) {
                this.domNode.data = this.text = this.text.slice(0, l) + this.text.slice(l + i);
              }, d.prototype.index = function(l, i) {
                return this.domNode === l ? i : -1;
              }, d.prototype.insertAt = function(l, i, s) {
                s == null ? (this.text = this.text.slice(0, l) + i + this.text.slice(l), this.domNode.data = this.text) : p.prototype.insertAt.call(this, l, i, s);
              }, d.prototype.length = function() {
                return this.text.length;
              }, d.prototype.optimize = function(l) {
                p.prototype.optimize.call(this, l), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof d && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
              }, d.prototype.position = function(l, i) {
                return [this.domNode, l];
              }, d.prototype.split = function(l, i) {
                if (i === void 0 && (i = !1), !i) {
                  if (l === 0)
                    return this;
                  if (l === this.length())
                    return this.next;
                }
                var s = c.create(this.domNode.splitText(l));
                return this.parent.insertBefore(s, this.next), this.text = this.statics.value(this.domNode), s;
              }, d.prototype.update = function(l, i) {
                var s = this;
                l.some(function(m) {
                  return m.type === "characterData" && m.target === s.domNode;
                }) && (this.text = this.statics.value(this.domNode));
              }, d.prototype.value = function() {
                return this.text;
              }, d.blotName = "text", d.scope = c.Scope.INLINE_BLOT, d;
            }(u.default)
          );
          n.default = f;
        },
        /* 50 */
        /***/
        function(r, n, o) {
          var a = document.createElement("div");
          if (a.classList.toggle("test-class", !1), a.classList.contains("test-class")) {
            var u = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(c, f) {
              return arguments.length > 1 && !this.contains(c) == !f ? f : u.call(this, c);
            };
          }
          String.prototype.startsWith || (String.prototype.startsWith = function(c, f) {
            return f = f || 0, this.substr(f, c.length) === c;
          }), String.prototype.endsWith || (String.prototype.endsWith = function(c, f) {
            var p = this.toString();
            (typeof f != "number" || !isFinite(f) || Math.floor(f) !== f || f > p.length) && (f = p.length), f -= c.length;
            var d = p.indexOf(c, f);
            return d !== -1 && d === f;
          }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(f) {
              if (this === null)
                throw new TypeError("Array.prototype.find called on null or undefined");
              if (typeof f != "function")
                throw new TypeError("predicate must be a function");
              for (var p = Object(this), d = p.length >>> 0, l = arguments[1], i, s = 0; s < d; s++)
                if (i = p[s], f.call(l, i, s, p))
                  return i;
            }
          }), document.addEventListener("DOMContentLoaded", function() {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
          });
        },
        /* 51 */
        /***/
        function(r, n) {
          var o = -1, a = 1, u = 0;
          function c(y, E, A) {
            if (y == E)
              return y ? [[u, y]] : [];
            (A < 0 || y.length < A) && (A = null);
            var w = l(y, E), S = y.substring(0, w);
            y = y.substring(w), E = E.substring(w), w = i(y, E);
            var P = y.substring(y.length - w);
            y = y.substring(0, y.length - w), E = E.substring(0, E.length - w);
            var N = f(y, E);
            return S && N.unshift([u, S]), P && N.push([u, P]), m(N), A != null && (N = g(N, A)), N = b(N), N;
          }
          function f(y, E) {
            var A;
            if (!y)
              return [[a, E]];
            if (!E)
              return [[o, y]];
            var w = y.length > E.length ? y : E, S = y.length > E.length ? E : y, P = w.indexOf(S);
            if (P != -1)
              return A = [
                [a, w.substring(0, P)],
                [u, S],
                [a, w.substring(P + S.length)]
              ], y.length > E.length && (A[0][0] = A[2][0] = o), A;
            if (S.length == 1)
              return [[o, y], [a, E]];
            var N = s(y, E);
            if (N) {
              var O = N[0], x = N[1], T = N[2], I = N[3], L = N[4], B = c(O, T), $ = c(x, I);
              return B.concat([[u, L]], $);
            }
            return p(y, E);
          }
          function p(y, E) {
            for (var A = y.length, w = E.length, S = Math.ceil((A + w) / 2), P = S, N = 2 * S, O = new Array(N), x = new Array(N), T = 0; T < N; T++)
              O[T] = -1, x[T] = -1;
            O[P + 1] = 0, x[P + 1] = 0;
            for (var I = A - w, L = I % 2 != 0, B = 0, $ = 0, K = 0, j = 0, k = 0; k < S; k++) {
              for (var D = -k + B; D <= k - $; D += 2) {
                var R = P + D, M;
                D == -k || D != k && O[R - 1] < O[R + 1] ? M = O[R + 1] : M = O[R - 1] + 1;
                for (var U = M - D; M < A && U < w && y.charAt(M) == E.charAt(U); )
                  M++, U++;
                if (O[R] = M, M > A)
                  $ += 2;
                else if (U > w)
                  B += 2;
                else if (L) {
                  var F = P + I - D;
                  if (F >= 0 && F < N && x[F] != -1) {
                    var C = A - x[F];
                    if (M >= C)
                      return d(y, E, M, U);
                  }
                }
              }
              for (var q = -k + K; q <= k - j; q += 2) {
                var F = P + q, C;
                q == -k || q != k && x[F - 1] < x[F + 1] ? C = x[F + 1] : C = x[F - 1] + 1;
                for (var W = C - q; C < A && W < w && y.charAt(A - C - 1) == E.charAt(w - W - 1); )
                  C++, W++;
                if (x[F] = C, C > A)
                  j += 2;
                else if (W > w)
                  K += 2;
                else if (!L) {
                  var R = P + I - q;
                  if (R >= 0 && R < N && O[R] != -1) {
                    var M = O[R], U = P + M - R;
                    if (C = A - C, M >= C)
                      return d(y, E, M, U);
                  }
                }
              }
            }
            return [[o, y], [a, E]];
          }
          function d(y, E, A, w) {
            var S = y.substring(0, A), P = E.substring(0, w), N = y.substring(A), O = E.substring(w), x = c(S, P), T = c(N, O);
            return x.concat(T);
          }
          function l(y, E) {
            if (!y || !E || y.charAt(0) != E.charAt(0))
              return 0;
            for (var A = 0, w = Math.min(y.length, E.length), S = w, P = 0; A < S; )
              y.substring(P, S) == E.substring(P, S) ? (A = S, P = A) : w = S, S = Math.floor((w - A) / 2 + A);
            return S;
          }
          function i(y, E) {
            if (!y || !E || y.charAt(y.length - 1) != E.charAt(E.length - 1))
              return 0;
            for (var A = 0, w = Math.min(y.length, E.length), S = w, P = 0; A < S; )
              y.substring(y.length - S, y.length - P) == E.substring(E.length - S, E.length - P) ? (A = S, P = A) : w = S, S = Math.floor((w - A) / 2 + A);
            return S;
          }
          function s(y, E) {
            var A = y.length > E.length ? y : E, w = y.length > E.length ? E : y;
            if (A.length < 4 || w.length * 2 < A.length)
              return null;
            function S($, K, j) {
              for (var k = $.substring(j, j + Math.floor($.length / 4)), D = -1, R = "", M, U, F, C; (D = K.indexOf(k, D + 1)) != -1; ) {
                var q = l(
                  $.substring(j),
                  K.substring(D)
                ), W = i(
                  $.substring(0, j),
                  K.substring(0, D)
                );
                R.length < W + q && (R = K.substring(D - W, D) + K.substring(D, D + q), M = $.substring(0, j - W), U = $.substring(j + q), F = K.substring(0, D - W), C = K.substring(D + q));
              }
              return R.length * 2 >= $.length ? [
                M,
                U,
                F,
                C,
                R
              ] : null;
            }
            var P = S(
              A,
              w,
              Math.ceil(A.length / 4)
            ), N = S(
              A,
              w,
              Math.ceil(A.length / 2)
            ), O;
            if (!P && !N)
              return null;
            N ? P ? O = P[4].length > N[4].length ? P : N : O = N : O = P;
            var x, T, I, L;
            y.length > E.length ? (x = O[0], T = O[1], I = O[2], L = O[3]) : (I = O[0], L = O[1], x = O[2], T = O[3]);
            var B = O[4];
            return [x, T, I, L, B];
          }
          function m(y) {
            y.push([u, ""]);
            for (var E = 0, A = 0, w = 0, S = "", P = "", N; E < y.length; )
              switch (y[E][0]) {
                case a:
                  w++, P += y[E][1], E++;
                  break;
                case o:
                  A++, S += y[E][1], E++;
                  break;
                case u:
                  A + w > 1 ? (A !== 0 && w !== 0 && (N = l(P, S), N !== 0 && (E - A - w > 0 && y[E - A - w - 1][0] == u ? y[E - A - w - 1][1] += P.substring(0, N) : (y.splice(0, 0, [
                    u,
                    P.substring(0, N)
                  ]), E++), P = P.substring(N), S = S.substring(N)), N = i(P, S), N !== 0 && (y[E][1] = P.substring(P.length - N) + y[E][1], P = P.substring(0, P.length - N), S = S.substring(0, S.length - N))), A === 0 ? y.splice(
                    E - w,
                    A + w,
                    [a, P]
                  ) : w === 0 ? y.splice(
                    E - A,
                    A + w,
                    [o, S]
                  ) : y.splice(
                    E - A - w,
                    A + w,
                    [o, S],
                    [a, P]
                  ), E = E - A - w + (A ? 1 : 0) + (w ? 1 : 0) + 1) : E !== 0 && y[E - 1][0] == u ? (y[E - 1][1] += y[E][1], y.splice(E, 1)) : E++, w = 0, A = 0, S = "", P = "";
                  break;
              }
            y[y.length - 1][1] === "" && y.pop();
            var O = !1;
            for (E = 1; E < y.length - 1; )
              y[E - 1][0] == u && y[E + 1][0] == u && (y[E][1].substring(y[E][1].length - y[E - 1][1].length) == y[E - 1][1] ? (y[E][1] = y[E - 1][1] + y[E][1].substring(0, y[E][1].length - y[E - 1][1].length), y[E + 1][1] = y[E - 1][1] + y[E + 1][1], y.splice(E - 1, 1), O = !0) : y[E][1].substring(0, y[E + 1][1].length) == y[E + 1][1] && (y[E - 1][1] += y[E + 1][1], y[E][1] = y[E][1].substring(y[E + 1][1].length) + y[E + 1][1], y.splice(E + 1, 1), O = !0)), E++;
            O && m(y);
          }
          var v = c;
          v.INSERT = a, v.DELETE = o, v.EQUAL = u, r.exports = v;
          function h(y, E) {
            if (E === 0)
              return [u, y];
            for (var A = 0, w = 0; w < y.length; w++) {
              var S = y[w];
              if (S[0] === o || S[0] === u) {
                var P = A + S[1].length;
                if (E === P)
                  return [w + 1, y];
                if (E < P) {
                  y = y.slice();
                  var N = E - A, O = [S[0], S[1].slice(0, N)], x = [S[0], S[1].slice(N)];
                  return y.splice(w, 1, O, x), [w + 1, y];
                } else
                  A = P;
              }
            }
            throw new Error("cursor_pos is out of bounds!");
          }
          function g(y, E) {
            var A = h(y, E), w = A[1], S = A[0], P = w[S], N = w[S + 1];
            if (P == null)
              return y;
            if (P[0] !== u)
              return y;
            if (N != null && P[1] + N[1] === N[1] + P[1])
              return w.splice(S, 2, N, P), _(w, S, 2);
            if (N != null && N[1].indexOf(P[1]) === 0) {
              w.splice(S, 2, [N[0], P[1]], [0, P[1]]);
              var O = N[1].slice(P[1].length);
              return O.length > 0 && w.splice(S + 2, 0, [N[0], O]), _(w, S, 3);
            } else
              return y;
          }
          function b(y) {
            for (var E = !1, A = function(N) {
              return N.charCodeAt(0) >= 56320 && N.charCodeAt(0) <= 57343;
            }, w = function(N) {
              return N.charCodeAt(N.length - 1) >= 55296 && N.charCodeAt(N.length - 1) <= 56319;
            }, S = 2; S < y.length; S += 1)
              y[S - 2][0] === u && w(y[S - 2][1]) && y[S - 1][0] === o && A(y[S - 1][1]) && y[S][0] === a && A(y[S][1]) && (E = !0, y[S - 1][1] = y[S - 2][1].slice(-1) + y[S - 1][1], y[S][1] = y[S - 2][1].slice(-1) + y[S][1], y[S - 2][1] = y[S - 2][1].slice(0, -1));
            if (!E)
              return y;
            for (var P = [], S = 0; S < y.length; S += 1)
              y[S][1].length > 0 && P.push(y[S]);
            return P;
          }
          function _(y, E, A) {
            for (var w = E + A - 1; w >= 0 && w >= E - 1; w--)
              if (w + 1 < y.length) {
                var S = y[w], P = y[w + 1];
                S[0] === P[1] && y.splice(w, 2, [S[0], S[1] + P[1]]);
              }
            return y;
          }
        },
        /* 52 */
        /***/
        function(r, n) {
          n = r.exports = typeof Object.keys == "function" ? Object.keys : o, n.shim = o;
          function o(a) {
            var u = [];
            for (var c in a) u.push(c);
            return u;
          }
        },
        /* 53 */
        /***/
        function(r, n) {
          var o = function() {
            return Object.prototype.toString.call(arguments);
          }() == "[object Arguments]";
          n = r.exports = o ? a : u, n.supported = a;
          function a(c) {
            return Object.prototype.toString.call(c) == "[object Arguments]";
          }
          n.unsupported = u;
          function u(c) {
            return c && typeof c == "object" && typeof c.length == "number" && Object.prototype.hasOwnProperty.call(c, "callee") && !Object.prototype.propertyIsEnumerable.call(c, "callee") || !1;
          }
        },
        /* 54 */
        /***/
        function(r, n) {
          var o = Object.prototype.hasOwnProperty, a = "~";
          function u() {
          }
          Object.create && (u.prototype = /* @__PURE__ */ Object.create(null), new u().__proto__ || (a = !1));
          function c(p, d, l) {
            this.fn = p, this.context = d, this.once = l || !1;
          }
          function f() {
            this._events = new u(), this._eventsCount = 0;
          }
          f.prototype.eventNames = function() {
            var d = [], l, i;
            if (this._eventsCount === 0) return d;
            for (i in l = this._events)
              o.call(l, i) && d.push(a ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(l)) : d;
          }, f.prototype.listeners = function(d, l) {
            var i = a ? a + d : d, s = this._events[i];
            if (l) return !!s;
            if (!s) return [];
            if (s.fn) return [s.fn];
            for (var m = 0, v = s.length, h = new Array(v); m < v; m++)
              h[m] = s[m].fn;
            return h;
          }, f.prototype.emit = function(d, l, i, s, m, v) {
            var h = a ? a + d : d;
            if (!this._events[h]) return !1;
            var g = this._events[h], b = arguments.length, _, y;
            if (g.fn) {
              switch (g.once && this.removeListener(d, g.fn, void 0, !0), b) {
                case 1:
                  return g.fn.call(g.context), !0;
                case 2:
                  return g.fn.call(g.context, l), !0;
                case 3:
                  return g.fn.call(g.context, l, i), !0;
                case 4:
                  return g.fn.call(g.context, l, i, s), !0;
                case 5:
                  return g.fn.call(g.context, l, i, s, m), !0;
                case 6:
                  return g.fn.call(g.context, l, i, s, m, v), !0;
              }
              for (y = 1, _ = new Array(b - 1); y < b; y++)
                _[y - 1] = arguments[y];
              g.fn.apply(g.context, _);
            } else {
              var E = g.length, A;
              for (y = 0; y < E; y++)
                switch (g[y].once && this.removeListener(d, g[y].fn, void 0, !0), b) {
                  case 1:
                    g[y].fn.call(g[y].context);
                    break;
                  case 2:
                    g[y].fn.call(g[y].context, l);
                    break;
                  case 3:
                    g[y].fn.call(g[y].context, l, i);
                    break;
                  case 4:
                    g[y].fn.call(g[y].context, l, i, s);
                    break;
                  default:
                    if (!_) for (A = 1, _ = new Array(b - 1); A < b; A++)
                      _[A - 1] = arguments[A];
                    g[y].fn.apply(g[y].context, _);
                }
            }
            return !0;
          }, f.prototype.on = function(d, l, i) {
            var s = new c(l, i || this), m = a ? a + d : d;
            return this._events[m] ? this._events[m].fn ? this._events[m] = [this._events[m], s] : this._events[m].push(s) : (this._events[m] = s, this._eventsCount++), this;
          }, f.prototype.once = function(d, l, i) {
            var s = new c(l, i || this, !0), m = a ? a + d : d;
            return this._events[m] ? this._events[m].fn ? this._events[m] = [this._events[m], s] : this._events[m].push(s) : (this._events[m] = s, this._eventsCount++), this;
          }, f.prototype.removeListener = function(d, l, i, s) {
            var m = a ? a + d : d;
            if (!this._events[m]) return this;
            if (!l)
              return --this._eventsCount === 0 ? this._events = new u() : delete this._events[m], this;
            var v = this._events[m];
            if (v.fn)
              v.fn === l && (!s || v.once) && (!i || v.context === i) && (--this._eventsCount === 0 ? this._events = new u() : delete this._events[m]);
            else {
              for (var h = 0, g = [], b = v.length; h < b; h++)
                (v[h].fn !== l || s && !v[h].once || i && v[h].context !== i) && g.push(v[h]);
              g.length ? this._events[m] = g.length === 1 ? g[0] : g : --this._eventsCount === 0 ? this._events = new u() : delete this._events[m];
            }
            return this;
          }, f.prototype.removeAllListeners = function(d) {
            var l;
            return d ? (l = a ? a + d : d, this._events[l] && (--this._eventsCount === 0 ? this._events = new u() : delete this._events[l])) : (this._events = new u(), this._eventsCount = 0), this;
          }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prototype.setMaxListeners = function() {
            return this;
          }, f.prefixed = a, f.EventEmitter = f, typeof r < "u" && (r.exports = f);
        },
        /* 55 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.matchText = n.matchSpacing = n.matchNewline = n.matchBlot = n.matchAttributor = n.default = void 0;
          var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(G) {
            return typeof G;
          } : function(G) {
            return G && typeof Symbol == "function" && G.constructor === Symbol && G !== Symbol.prototype ? "symbol" : typeof G;
          }, u = /* @__PURE__ */ function() {
            function G(H, J) {
              var te = [], Y = !0, ne = !1, le = void 0;
              try {
                for (var se = H[Symbol.iterator](), we; !(Y = (we = se.next()).done) && (te.push(we.value), !(J && te.length === J)); Y = !0)
                  ;
              } catch (ke) {
                ne = !0, le = ke;
              } finally {
                try {
                  !Y && se.return && se.return();
                } finally {
                  if (ne) throw le;
                }
              }
              return te;
            }
            return function(H, J) {
              if (Array.isArray(H))
                return H;
              if (Symbol.iterator in Object(H))
                return G(H, J);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), c = /* @__PURE__ */ function() {
            function G(H, J) {
              for (var te = 0; te < J.length; te++) {
                var Y = J[te];
                Y.enumerable = Y.enumerable || !1, Y.configurable = !0, "value" in Y && (Y.writable = !0), Object.defineProperty(H, Y.key, Y);
              }
            }
            return function(H, J, te) {
              return J && G(H.prototype, J), te && G(H, te), H;
            };
          }(), f = o(3), p = x(f), d = o(2), l = x(d), i = o(0), s = x(i), m = o(5), v = x(m), h = o(10), g = x(h), b = o(9), _ = x(b), y = o(36), E = o(37), A = o(13), w = x(A), S = o(26), P = o(38), N = o(39), O = o(40);
          function x(G) {
            return G && G.__esModule ? G : { default: G };
          }
          function T(G, H, J) {
            return H in G ? Object.defineProperty(G, H, { value: J, enumerable: !0, configurable: !0, writable: !0 }) : G[H] = J, G;
          }
          function I(G, H) {
            if (!(G instanceof H))
              throw new TypeError("Cannot call a class as a function");
          }
          function L(G, H) {
            if (!G)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return H && (typeof H == "object" || typeof H == "function") ? H : G;
          }
          function B(G, H) {
            if (typeof H != "function" && H !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof H);
            G.prototype = Object.create(H && H.prototype, { constructor: { value: G, enumerable: !1, writable: !0, configurable: !0 } }), H && (Object.setPrototypeOf ? Object.setPrototypeOf(G, H) : G.__proto__ = H);
          }
          var $ = (0, g.default)("quill:clipboard"), K = "__ql-matcher", j = [[Node.TEXT_NODE, ee], [Node.TEXT_NODE, Q], ["br", re], [Node.ELEMENT_NODE, Q], [Node.ELEMENT_NODE, Z], [Node.ELEMENT_NODE, fe], [Node.ELEMENT_NODE, z], [Node.ELEMENT_NODE, xe], ["li", ae], ["b", W.bind(W, "bold")], ["i", W.bind(W, "italic")], ["style", X]], k = [y.AlignAttribute, P.DirectionAttribute].reduce(function(G, H) {
            return G[H.keyName] = H, G;
          }, {}), D = [y.AlignStyle, E.BackgroundStyle, S.ColorStyle, P.DirectionStyle, N.FontStyle, O.SizeStyle].reduce(function(G, H) {
            return G[H.keyName] = H, G;
          }, {}), R = function(G) {
            B(H, G);
            function H(J, te) {
              I(this, H);
              var Y = L(this, (H.__proto__ || Object.getPrototypeOf(H)).call(this, J, te));
              return Y.quill.root.addEventListener("paste", Y.onPaste.bind(Y)), Y.container = Y.quill.addContainer("ql-clipboard"), Y.container.setAttribute("contenteditable", !0), Y.container.setAttribute("tabindex", -1), Y.matchers = [], j.concat(Y.options.matchers).forEach(function(ne) {
                var le = u(ne, 2), se = le[0], we = le[1];
                !te.matchVisual && we === fe || Y.addMatcher(se, we);
              }), Y;
            }
            return c(H, [{
              key: "addMatcher",
              value: function(te, Y) {
                this.matchers.push([te, Y]);
              }
            }, {
              key: "convert",
              value: function(te) {
                if (typeof te == "string")
                  return this.container.innerHTML = te.replace(/\>\r?\n +\</g, "><"), this.convert();
                var Y = this.quill.getFormat(this.quill.selection.savedRange.index);
                if (Y[w.default.blotName]) {
                  var ne = this.container.innerText;
                  return this.container.innerHTML = "", new l.default().insert(ne, T({}, w.default.blotName, Y[w.default.blotName]));
                }
                var le = this.prepareMatching(), se = u(le, 2), we = se[0], ke = se[1], Oe = q(this.container, we, ke);
                return F(Oe, `
`) && Oe.ops[Oe.ops.length - 1].attributes == null && (Oe = Oe.compose(new l.default().retain(Oe.length() - 1).delete(1))), $.log("convert", this.container.innerHTML, Oe), this.container.innerHTML = "", Oe;
              }
            }, {
              key: "dangerouslyPasteHTML",
              value: function(te, Y) {
                var ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : v.default.sources.API;
                if (typeof te == "string")
                  this.quill.setContents(this.convert(te), Y), this.quill.setSelection(0, v.default.sources.SILENT);
                else {
                  var le = this.convert(Y);
                  this.quill.updateContents(new l.default().retain(te).concat(le), ne), this.quill.setSelection(te + le.length(), v.default.sources.SILENT);
                }
              }
            }, {
              key: "onPaste",
              value: function(te) {
                var Y = this;
                if (!(te.defaultPrevented || !this.quill.isEnabled())) {
                  var ne = this.quill.getSelection(), le = new l.default().retain(ne.index), se = this.quill.scrollingContainer.scrollTop;
                  this.container.focus(), this.quill.selection.update(v.default.sources.SILENT), setTimeout(function() {
                    le = le.concat(Y.convert()).delete(ne.length), Y.quill.updateContents(le, v.default.sources.USER), Y.quill.setSelection(le.length() - ne.length, v.default.sources.SILENT), Y.quill.scrollingContainer.scrollTop = se, Y.quill.focus();
                  }, 1);
                }
              }
            }, {
              key: "prepareMatching",
              value: function() {
                var te = this, Y = [], ne = [];
                return this.matchers.forEach(function(le) {
                  var se = u(le, 2), we = se[0], ke = se[1];
                  switch (we) {
                    case Node.TEXT_NODE:
                      ne.push(ke);
                      break;
                    case Node.ELEMENT_NODE:
                      Y.push(ke);
                      break;
                    default:
                      [].forEach.call(te.container.querySelectorAll(we), function(Oe) {
                        Oe[K] = Oe[K] || [], Oe[K].push(ke);
                      });
                      break;
                  }
                }), [Y, ne];
              }
            }]), H;
          }(_.default);
          R.DEFAULTS = {
            matchers: [],
            matchVisual: !0
          };
          function M(G, H, J) {
            return (typeof H > "u" ? "undefined" : a(H)) === "object" ? Object.keys(H).reduce(function(te, Y) {
              return M(te, Y, H[Y]);
            }, G) : G.reduce(function(te, Y) {
              return Y.attributes && Y.attributes[H] ? te.push(Y) : te.insert(Y.insert, (0, p.default)({}, T({}, H, J), Y.attributes));
            }, new l.default());
          }
          function U(G) {
            if (G.nodeType !== Node.ELEMENT_NODE) return {};
            var H = "__ql-computed-style";
            return G[H] || (G[H] = window.getComputedStyle(G));
          }
          function F(G, H) {
            for (var J = "", te = G.ops.length - 1; te >= 0 && J.length < H.length; --te) {
              var Y = G.ops[te];
              if (typeof Y.insert != "string") break;
              J = Y.insert + J;
            }
            return J.slice(-1 * H.length) === H;
          }
          function C(G) {
            if (G.childNodes.length === 0) return !1;
            var H = U(G);
            return ["block", "list-item"].indexOf(H.display) > -1;
          }
          function q(G, H, J) {
            return G.nodeType === G.TEXT_NODE ? J.reduce(function(te, Y) {
              return Y(G, te);
            }, new l.default()) : G.nodeType === G.ELEMENT_NODE ? [].reduce.call(G.childNodes || [], function(te, Y) {
              var ne = q(Y, H, J);
              return Y.nodeType === G.ELEMENT_NODE && (ne = H.reduce(function(le, se) {
                return se(Y, le);
              }, ne), ne = (Y[K] || []).reduce(function(le, se) {
                return se(Y, le);
              }, ne)), te.concat(ne);
            }, new l.default()) : new l.default();
          }
          function W(G, H, J) {
            return M(J, G, !0);
          }
          function z(G, H) {
            var J = s.default.Attributor.Attribute.keys(G), te = s.default.Attributor.Class.keys(G), Y = s.default.Attributor.Style.keys(G), ne = {};
            return J.concat(te).concat(Y).forEach(function(le) {
              var se = s.default.query(le, s.default.Scope.ATTRIBUTE);
              se != null && (ne[se.attrName] = se.value(G), ne[se.attrName]) || (se = k[le], se != null && (se.attrName === le || se.keyName === le) && (ne[se.attrName] = se.value(G) || void 0), se = D[le], se != null && (se.attrName === le || se.keyName === le) && (se = D[le], ne[se.attrName] = se.value(G) || void 0));
            }), Object.keys(ne).length > 0 && (H = M(H, ne)), H;
          }
          function Z(G, H) {
            var J = s.default.query(G);
            if (J == null) return H;
            if (J.prototype instanceof s.default.Embed) {
              var te = {}, Y = J.value(G);
              Y != null && (te[J.blotName] = Y, H = new l.default().insert(te, J.formats(G)));
            } else typeof J.formats == "function" && (H = M(H, J.blotName, J.formats(G)));
            return H;
          }
          function re(G, H) {
            return F(H, `
`) || H.insert(`
`), H;
          }
          function X() {
            return new l.default();
          }
          function ae(G, H) {
            var J = s.default.query(G);
            if (J == null || J.blotName !== "list-item" || !F(H, `
`))
              return H;
            for (var te = -1, Y = G.parentNode; !Y.classList.contains("ql-clipboard"); )
              (s.default.query(Y) || {}).blotName === "list" && (te += 1), Y = Y.parentNode;
            return te <= 0 ? H : H.compose(new l.default().retain(H.length() - 1).retain(1, { indent: te }));
          }
          function Q(G, H) {
            return F(H, `
`) || (C(G) || H.length() > 0 && G.nextSibling && C(G.nextSibling)) && H.insert(`
`), H;
          }
          function fe(G, H) {
            if (C(G) && G.nextElementSibling != null && !F(H, `

`)) {
              var J = G.offsetHeight + parseFloat(U(G).marginTop) + parseFloat(U(G).marginBottom);
              G.nextElementSibling.offsetTop > G.offsetTop + J * 1.5 && H.insert(`
`);
            }
            return H;
          }
          function xe(G, H) {
            var J = {}, te = G.style || {};
            return te.fontStyle && U(G).fontStyle === "italic" && (J.italic = !0), te.fontWeight && (U(G).fontWeight.startsWith("bold") || parseInt(U(G).fontWeight) >= 700) && (J.bold = !0), Object.keys(J).length > 0 && (H = M(H, J)), parseFloat(te.textIndent || 0) > 0 && (H = new l.default().insert("	").concat(H)), H;
          }
          function ee(G, H) {
            var J = G.data;
            if (G.parentNode.tagName === "O:P")
              return H.insert(J.trim());
            if (J.trim().length === 0 && G.parentNode.classList.contains("ql-clipboard"))
              return H;
            if (!U(G.parentNode).whiteSpace.startsWith("pre")) {
              var te = function(ne, le) {
                return le = le.replace(/[^\u00a0]/g, ""), le.length < 1 && ne ? " " : le;
              };
              J = J.replace(/\r\n/g, " ").replace(/\n/g, " "), J = J.replace(/\s\s+/g, te.bind(te, !0)), (G.previousSibling == null && C(G.parentNode) || G.previousSibling != null && C(G.previousSibling)) && (J = J.replace(/^\s+/, te.bind(te, !1))), (G.nextSibling == null && C(G.parentNode) || G.nextSibling != null && C(G.nextSibling)) && (J = J.replace(/\s+$/, te.bind(te, !1)));
            }
            return H.insert(J);
          }
          n.default = R, n.matchAttributor = z, n.matchBlot = Z, n.matchNewline = Q, n.matchSpacing = fe, n.matchText = ee;
        },
        /* 56 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function m(v, h) {
              for (var g = 0; g < h.length; g++) {
                var b = h[g];
                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(v, b.key, b);
              }
            }
            return function(v, h, g) {
              return h && m(v.prototype, h), g && m(v, g), v;
            };
          }(), u = function m(v, h, g) {
            v === null && (v = Function.prototype);
            var b = Object.getOwnPropertyDescriptor(v, h);
            if (b === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : m(_, h, g);
            } else {
              if ("value" in b)
                return b.value;
              var y = b.get;
              return y === void 0 ? void 0 : y.call(g);
            }
          }, c = o(6), f = p(c);
          function p(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function d(m, v) {
            if (!(m instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(m, v) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : m;
          }
          function i(m, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            m.prototype = Object.create(v && v.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(m, v) : m.__proto__ = v);
          }
          var s = function(m) {
            i(v, m);
            function v() {
              return d(this, v), l(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
            }
            return a(v, [{
              key: "optimize",
              value: function(g) {
                u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "optimize", this).call(this, g), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
              }
            }], [{
              key: "create",
              value: function() {
                return u(v.__proto__ || Object.getPrototypeOf(v), "create", this).call(this);
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), v;
          }(f.default);
          s.blotName = "bold", s.tagName = ["STRONG", "B"], n.default = s;
        },
        /* 57 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.addControls = n.default = void 0;
          var a = /* @__PURE__ */ function() {
            function O(x, T) {
              var I = [], L = !0, B = !1, $ = void 0;
              try {
                for (var K = x[Symbol.iterator](), j; !(L = (j = K.next()).done) && (I.push(j.value), !(T && I.length === T)); L = !0)
                  ;
              } catch (k) {
                B = !0, $ = k;
              } finally {
                try {
                  !L && K.return && K.return();
                } finally {
                  if (B) throw $;
                }
              }
              return I;
            }
            return function(x, T) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return O(x, T);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = /* @__PURE__ */ function() {
            function O(x, T) {
              for (var I = 0; I < T.length; I++) {
                var L = T[I];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(x, L.key, L);
              }
            }
            return function(x, T, I) {
              return T && O(x.prototype, T), I && O(x, I), x;
            };
          }(), c = o(2), f = g(c), p = o(0), d = g(p), l = o(5), i = g(l), s = o(10), m = g(s), v = o(9), h = g(v);
          function g(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function b(O, x, T) {
            return x in O ? Object.defineProperty(O, x, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : O[x] = T, O;
          }
          function _(O, x) {
            if (!(O instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(O, x) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return x && (typeof x == "object" || typeof x == "function") ? x : O;
          }
          function E(O, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof x);
            O.prototype = Object.create(x && x.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(O, x) : O.__proto__ = x);
          }
          var A = (0, m.default)("quill:toolbar"), w = function(O) {
            E(x, O);
            function x(T, I) {
              _(this, x);
              var L = y(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, T, I));
              if (Array.isArray(L.options.container)) {
                var B = document.createElement("div");
                P(B, L.options.container), T.container.parentNode.insertBefore(B, T.container), L.container = B;
              } else typeof L.options.container == "string" ? L.container = document.querySelector(L.options.container) : L.container = L.options.container;
              if (!(L.container instanceof HTMLElement)) {
                var $;
                return $ = A.error("Container required for toolbar", L.options), y(L, $);
              }
              return L.container.classList.add("ql-toolbar"), L.controls = [], L.handlers = {}, Object.keys(L.options.handlers).forEach(function(K) {
                L.addHandler(K, L.options.handlers[K]);
              }), [].forEach.call(L.container.querySelectorAll("button, select"), function(K) {
                L.attach(K);
              }), L.quill.on(i.default.events.EDITOR_CHANGE, function(K, j) {
                K === i.default.events.SELECTION_CHANGE && L.update(j);
              }), L.quill.on(i.default.events.SCROLL_OPTIMIZE, function() {
                var K = L.quill.selection.getRange(), j = a(K, 1), k = j[0];
                L.update(k);
              }), L;
            }
            return u(x, [{
              key: "addHandler",
              value: function(I, L) {
                this.handlers[I] = L;
              }
            }, {
              key: "attach",
              value: function(I) {
                var L = this, B = [].find.call(I.classList, function(K) {
                  return K.indexOf("ql-") === 0;
                });
                if (B) {
                  if (B = B.slice(3), I.tagName === "BUTTON" && I.setAttribute("type", "button"), this.handlers[B] == null) {
                    if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[B] == null) {
                      A.warn("ignoring attaching to disabled format", B, I);
                      return;
                    }
                    if (d.default.query(B) == null) {
                      A.warn("ignoring attaching to nonexistent format", B, I);
                      return;
                    }
                  }
                  var $ = I.tagName === "SELECT" ? "change" : "click";
                  I.addEventListener($, function(K) {
                    var j = void 0;
                    if (I.tagName === "SELECT") {
                      if (I.selectedIndex < 0) return;
                      var k = I.options[I.selectedIndex];
                      k.hasAttribute("selected") ? j = !1 : j = k.value || !1;
                    } else
                      I.classList.contains("ql-active") ? j = !1 : j = I.value || !I.hasAttribute("value"), K.preventDefault();
                    L.quill.focus();
                    var D = L.quill.selection.getRange(), R = a(D, 1), M = R[0];
                    if (L.handlers[B] != null)
                      L.handlers[B].call(L, j);
                    else if (d.default.query(B).prototype instanceof d.default.Embed) {
                      if (j = prompt("Enter " + B), !j) return;
                      L.quill.updateContents(new f.default().retain(M.index).delete(M.length).insert(b({}, B, j)), i.default.sources.USER);
                    } else
                      L.quill.format(B, j, i.default.sources.USER);
                    L.update(M);
                  }), this.controls.push([B, I]);
                }
              }
            }, {
              key: "update",
              value: function(I) {
                var L = I == null ? {} : this.quill.getFormat(I);
                this.controls.forEach(function(B) {
                  var $ = a(B, 2), K = $[0], j = $[1];
                  if (j.tagName === "SELECT") {
                    var k = void 0;
                    if (I == null)
                      k = null;
                    else if (L[K] == null)
                      k = j.querySelector("option[selected]");
                    else if (!Array.isArray(L[K])) {
                      var D = L[K];
                      typeof D == "string" && (D = D.replace(/\"/g, '\\"')), k = j.querySelector('option[value="' + D + '"]');
                    }
                    k == null ? (j.value = "", j.selectedIndex = -1) : k.selected = !0;
                  } else if (I == null)
                    j.classList.remove("ql-active");
                  else if (j.hasAttribute("value")) {
                    var R = L[K] === j.getAttribute("value") || L[K] != null && L[K].toString() === j.getAttribute("value") || L[K] == null && !j.getAttribute("value");
                    j.classList.toggle("ql-active", R);
                  } else
                    j.classList.toggle("ql-active", L[K] != null);
                });
              }
            }]), x;
          }(h.default);
          w.DEFAULTS = {};
          function S(O, x, T) {
            var I = document.createElement("button");
            I.setAttribute("type", "button"), I.classList.add("ql-" + x), T != null && (I.value = T), O.appendChild(I);
          }
          function P(O, x) {
            Array.isArray(x[0]) || (x = [x]), x.forEach(function(T) {
              var I = document.createElement("span");
              I.classList.add("ql-formats"), T.forEach(function(L) {
                if (typeof L == "string")
                  S(I, L);
                else {
                  var B = Object.keys(L)[0], $ = L[B];
                  Array.isArray($) ? N(I, B, $) : S(I, B, $);
                }
              }), O.appendChild(I);
            });
          }
          function N(O, x, T) {
            var I = document.createElement("select");
            I.classList.add("ql-" + x), T.forEach(function(L) {
              var B = document.createElement("option");
              L !== !1 ? B.setAttribute("value", L) : B.setAttribute("selected", "selected"), I.appendChild(B);
            }), O.appendChild(I);
          }
          w.DEFAULTS = {
            container: null,
            handlers: {
              clean: function() {
                var x = this, T = this.quill.getSelection();
                if (T != null)
                  if (T.length == 0) {
                    var I = this.quill.getFormat();
                    Object.keys(I).forEach(function(L) {
                      d.default.query(L, d.default.Scope.INLINE) != null && x.quill.format(L, !1);
                    });
                  } else
                    this.quill.removeFormat(T, i.default.sources.USER);
              },
              direction: function(x) {
                var T = this.quill.getFormat().align;
                x === "rtl" && T == null ? this.quill.format("align", "right", i.default.sources.USER) : !x && T === "right" && this.quill.format("align", !1, i.default.sources.USER), this.quill.format("direction", x, i.default.sources.USER);
              },
              indent: function(x) {
                var T = this.quill.getSelection(), I = this.quill.getFormat(T), L = parseInt(I.indent || 0);
                if (x === "+1" || x === "-1") {
                  var B = x === "+1" ? 1 : -1;
                  I.direction === "rtl" && (B *= -1), this.quill.format("indent", L + B, i.default.sources.USER);
                }
              },
              link: function(x) {
                x === !0 && (x = prompt("Enter link URL:")), this.quill.format("link", x, i.default.sources.USER);
              },
              list: function(x) {
                var T = this.quill.getSelection(), I = this.quill.getFormat(T);
                x === "check" ? I.list === "checked" || I.list === "unchecked" ? this.quill.format("list", !1, i.default.sources.USER) : this.quill.format("list", "unchecked", i.default.sources.USER) : this.quill.format("list", x, i.default.sources.USER);
              }
            }
          }, n.default = w, n.addControls = P;
        },
        /* 58 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
        },
        /* 59 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function m(v, h) {
              for (var g = 0; g < h.length; g++) {
                var b = h[g];
                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(v, b.key, b);
              }
            }
            return function(v, h, g) {
              return h && m(v.prototype, h), g && m(v, g), v;
            };
          }(), u = function m(v, h, g) {
            v === null && (v = Function.prototype);
            var b = Object.getOwnPropertyDescriptor(v, h);
            if (b === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : m(_, h, g);
            } else {
              if ("value" in b)
                return b.value;
              var y = b.get;
              return y === void 0 ? void 0 : y.call(g);
            }
          }, c = o(28), f = p(c);
          function p(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function d(m, v) {
            if (!(m instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(m, v) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : m;
          }
          function i(m, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            m.prototype = Object.create(v && v.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(m, v) : m.__proto__ = v);
          }
          var s = function(m) {
            i(v, m);
            function v(h, g) {
              d(this, v);
              var b = l(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, h));
              return b.label.innerHTML = g, b.container.classList.add("ql-color-picker"), [].slice.call(b.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(_) {
                _.classList.add("ql-primary");
              }), b;
            }
            return a(v, [{
              key: "buildItem",
              value: function(g) {
                var b = u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "buildItem", this).call(this, g);
                return b.style.backgroundColor = g.getAttribute("value") || "", b;
              }
            }, {
              key: "selectItem",
              value: function(g, b) {
                u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "selectItem", this).call(this, g, b);
                var _ = this.label.querySelector(".ql-color-label"), y = g && g.getAttribute("data-value") || "";
                _ && (_.tagName === "line" ? _.style.stroke = y : _.style.fill = y);
              }
            }]), v;
          }(f.default);
          n.default = s;
        },
        /* 60 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function m(v, h) {
              for (var g = 0; g < h.length; g++) {
                var b = h[g];
                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(v, b.key, b);
              }
            }
            return function(v, h, g) {
              return h && m(v.prototype, h), g && m(v, g), v;
            };
          }(), u = function m(v, h, g) {
            v === null && (v = Function.prototype);
            var b = Object.getOwnPropertyDescriptor(v, h);
            if (b === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : m(_, h, g);
            } else {
              if ("value" in b)
                return b.value;
              var y = b.get;
              return y === void 0 ? void 0 : y.call(g);
            }
          }, c = o(28), f = p(c);
          function p(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function d(m, v) {
            if (!(m instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(m, v) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : m;
          }
          function i(m, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            m.prototype = Object.create(v && v.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(m, v) : m.__proto__ = v);
          }
          var s = function(m) {
            i(v, m);
            function v(h, g) {
              d(this, v);
              var b = l(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, h));
              return b.container.classList.add("ql-icon-picker"), [].forEach.call(b.container.querySelectorAll(".ql-picker-item"), function(_) {
                _.innerHTML = g[_.getAttribute("data-value") || ""];
              }), b.defaultItem = b.container.querySelector(".ql-selected"), b.selectItem(b.defaultItem), b;
            }
            return a(v, [{
              key: "selectItem",
              value: function(g, b) {
                u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "selectItem", this).call(this, g, b), g = g || this.defaultItem, this.label.innerHTML = g.innerHTML;
              }
            }]), v;
          }(f.default);
          n.default = s;
        },
        /* 61 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function f(p, d) {
              for (var l = 0; l < d.length; l++) {
                var i = d[l];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(p, i.key, i);
              }
            }
            return function(p, d, l) {
              return d && f(p.prototype, d), l && f(p, l), p;
            };
          }();
          function u(f, p) {
            if (!(f instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          var c = function() {
            function f(p, d) {
              var l = this;
              u(this, f), this.quill = p, this.boundsContainer = d || document.body, this.root = p.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
                l.root.style.marginTop = -1 * l.quill.root.scrollTop + "px";
              }), this.hide();
            }
            return a(f, [{
              key: "hide",
              value: function() {
                this.root.classList.add("ql-hidden");
              }
            }, {
              key: "position",
              value: function(d) {
                var l = d.left + d.width / 2 - this.root.offsetWidth / 2, i = d.bottom + this.quill.root.scrollTop;
                this.root.style.left = l + "px", this.root.style.top = i + "px", this.root.classList.remove("ql-flip");
                var s = this.boundsContainer.getBoundingClientRect(), m = this.root.getBoundingClientRect(), v = 0;
                if (m.right > s.right && (v = s.right - m.right, this.root.style.left = l + v + "px"), m.left < s.left && (v = s.left - m.left, this.root.style.left = l + v + "px"), m.bottom > s.bottom) {
                  var h = m.bottom - m.top, g = d.bottom - d.top + h;
                  this.root.style.top = i - g + "px", this.root.classList.add("ql-flip");
                }
                return v;
              }
            }, {
              key: "show",
              value: function() {
                this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
              }
            }]), f;
          }();
          n.default = c;
        },
        /* 62 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function N(O, x) {
              var T = [], I = !0, L = !1, B = void 0;
              try {
                for (var $ = O[Symbol.iterator](), K; !(I = (K = $.next()).done) && (T.push(K.value), !(x && T.length === x)); I = !0)
                  ;
              } catch (j) {
                L = !0, B = j;
              } finally {
                try {
                  !I && $.return && $.return();
                } finally {
                  if (L) throw B;
                }
              }
              return T;
            }
            return function(O, x) {
              if (Array.isArray(O))
                return O;
              if (Symbol.iterator in Object(O))
                return N(O, x);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = function N(O, x, T) {
            O === null && (O = Function.prototype);
            var I = Object.getOwnPropertyDescriptor(O, x);
            if (I === void 0) {
              var L = Object.getPrototypeOf(O);
              return L === null ? void 0 : N(L, x, T);
            } else {
              if ("value" in I)
                return I.value;
              var B = I.get;
              return B === void 0 ? void 0 : B.call(T);
            }
          }, c = /* @__PURE__ */ function() {
            function N(O, x) {
              for (var T = 0; T < x.length; T++) {
                var I = x[T];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(O, I.key, I);
              }
            }
            return function(O, x, T) {
              return x && N(O.prototype, x), T && N(O, T), O;
            };
          }(), f = o(3), p = _(f), d = o(8), l = _(d), i = o(43), s = _(i), m = o(27), v = _(m), h = o(15), g = o(41), b = _(g);
          function _(N) {
            return N && N.__esModule ? N : { default: N };
          }
          function y(N, O) {
            if (!(N instanceof O))
              throw new TypeError("Cannot call a class as a function");
          }
          function E(N, O) {
            if (!N)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return O && (typeof O == "object" || typeof O == "function") ? O : N;
          }
          function A(N, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof O);
            N.prototype = Object.create(O && O.prototype, { constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(N, O) : N.__proto__ = O);
          }
          var w = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], S = function(N) {
            A(O, N);
            function O(x, T) {
              y(this, O), T.modules.toolbar != null && T.modules.toolbar.container == null && (T.modules.toolbar.container = w);
              var I = E(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, x, T));
              return I.quill.container.classList.add("ql-snow"), I;
            }
            return c(O, [{
              key: "extendToolbar",
              value: function(T) {
                T.container.classList.add("ql-snow"), this.buildButtons([].slice.call(T.container.querySelectorAll("button")), b.default), this.buildPickers([].slice.call(T.container.querySelectorAll("select")), b.default), this.tooltip = new P(this.quill, this.options.bounds), T.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(I, L) {
                  T.handlers.link.call(T, !L.format.link);
                });
              }
            }]), O;
          }(s.default);
          S.DEFAULTS = (0, p.default)(!0, {}, s.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(O) {
                    if (O) {
                      var x = this.quill.getSelection();
                      if (x == null || x.length == 0) return;
                      var T = this.quill.getText(x);
                      /^\S+@\S+\.\S+$/.test(T) && T.indexOf("mailto:") !== 0 && (T = "mailto:" + T);
                      var I = this.quill.theme.tooltip;
                      I.edit("link", T);
                    } else
                      this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var P = function(N) {
            A(O, N);
            function O(x, T) {
              y(this, O);
              var I = E(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, x, T));
              return I.preview = I.root.querySelector("a.ql-preview"), I;
            }
            return c(O, [{
              key: "listen",
              value: function() {
                var T = this;
                u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(I) {
                  T.root.classList.contains("ql-editing") ? T.save() : T.edit("link", T.preview.textContent), I.preventDefault();
                }), this.root.querySelector("a.ql-remove").addEventListener("click", function(I) {
                  if (T.linkRange != null) {
                    var L = T.linkRange;
                    T.restoreFocus(), T.quill.formatText(L, "link", !1, l.default.sources.USER), delete T.linkRange;
                  }
                  I.preventDefault(), T.hide();
                }), this.quill.on(l.default.events.SELECTION_CHANGE, function(I, L, B) {
                  if (I != null) {
                    if (I.length === 0 && B === l.default.sources.USER) {
                      var $ = T.quill.scroll.descendant(v.default, I.index), K = a($, 2), j = K[0], k = K[1];
                      if (j != null) {
                        T.linkRange = new h.Range(I.index - k, j.length());
                        var D = v.default.formats(j.domNode);
                        T.preview.textContent = D, T.preview.setAttribute("href", D), T.show(), T.position(T.quill.getBounds(T.linkRange));
                        return;
                      }
                    } else
                      delete T.linkRange;
                    T.hide();
                  }
                });
              }
            }, {
              key: "show",
              value: function() {
                u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
              }
            }]), O;
          }(i.BaseTooltip);
          P.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), n.default = S;
        },
        /* 63 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = o(29), u = Y(a), c = o(36), f = o(38), p = o(64), d = o(65), l = Y(d), i = o(66), s = Y(i), m = o(67), v = Y(m), h = o(37), g = o(26), b = o(39), _ = o(40), y = o(56), E = Y(y), A = o(68), w = Y(A), S = o(27), P = Y(S), N = o(69), O = Y(N), x = o(70), T = Y(x), I = o(71), L = Y(I), B = o(72), $ = Y(B), K = o(73), j = Y(K), k = o(13), D = Y(k), R = o(74), M = Y(R), U = o(75), F = Y(U), C = o(57), q = Y(C), W = o(41), z = Y(W), Z = o(28), re = Y(Z), X = o(59), ae = Y(X), Q = o(60), fe = Y(Q), xe = o(61), ee = Y(xe), G = o(108), H = Y(G), J = o(62), te = Y(J);
          function Y(ne) {
            return ne && ne.__esModule ? ne : { default: ne };
          }
          u.default.register({
            "attributors/attribute/direction": f.DirectionAttribute,
            "attributors/class/align": c.AlignClass,
            "attributors/class/background": h.BackgroundClass,
            "attributors/class/color": g.ColorClass,
            "attributors/class/direction": f.DirectionClass,
            "attributors/class/font": b.FontClass,
            "attributors/class/size": _.SizeClass,
            "attributors/style/align": c.AlignStyle,
            "attributors/style/background": h.BackgroundStyle,
            "attributors/style/color": g.ColorStyle,
            "attributors/style/direction": f.DirectionStyle,
            "attributors/style/font": b.FontStyle,
            "attributors/style/size": _.SizeStyle
          }, !0), u.default.register({
            "formats/align": c.AlignClass,
            "formats/direction": f.DirectionClass,
            "formats/indent": p.IndentClass,
            "formats/background": h.BackgroundStyle,
            "formats/color": g.ColorStyle,
            "formats/font": b.FontClass,
            "formats/size": _.SizeClass,
            "formats/blockquote": l.default,
            "formats/code-block": D.default,
            "formats/header": s.default,
            "formats/list": v.default,
            "formats/bold": E.default,
            "formats/code": k.Code,
            "formats/italic": w.default,
            "formats/link": P.default,
            "formats/script": O.default,
            "formats/strike": T.default,
            "formats/underline": L.default,
            "formats/image": $.default,
            "formats/video": j.default,
            "formats/list/item": m.ListItem,
            "modules/formula": M.default,
            "modules/syntax": F.default,
            "modules/toolbar": q.default,
            "themes/bubble": H.default,
            "themes/snow": te.default,
            "ui/icons": z.default,
            "ui/picker": re.default,
            "ui/icon-picker": fe.default,
            "ui/color-picker": ae.default,
            "ui/tooltip": ee.default
          }, !0), n.default = u.default;
        },
        /* 64 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.IndentClass = void 0;
          var a = /* @__PURE__ */ function() {
            function v(h, g) {
              for (var b = 0; b < g.length; b++) {
                var _ = g[b];
                _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(h, _.key, _);
              }
            }
            return function(h, g, b) {
              return g && v(h.prototype, g), b && v(h, b), h;
            };
          }(), u = function v(h, g, b) {
            h === null && (h = Function.prototype);
            var _ = Object.getOwnPropertyDescriptor(h, g);
            if (_ === void 0) {
              var y = Object.getPrototypeOf(h);
              return y === null ? void 0 : v(y, g, b);
            } else {
              if ("value" in _)
                return _.value;
              var E = _.get;
              return E === void 0 ? void 0 : E.call(b);
            }
          }, c = o(0), f = p(c);
          function p(v) {
            return v && v.__esModule ? v : { default: v };
          }
          function d(v, h) {
            if (!(v instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(v, h) {
            if (!v)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : v;
          }
          function i(v, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            v.prototype = Object.create(h && h.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(v, h) : v.__proto__ = h);
          }
          var s = function(v) {
            i(h, v);
            function h() {
              return d(this, h), l(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return a(h, [{
              key: "add",
              value: function(b, _) {
                if (_ === "+1" || _ === "-1") {
                  var y = this.value(b) || 0;
                  _ = _ === "+1" ? y + 1 : y - 1;
                }
                return _ === 0 ? (this.remove(b), !0) : u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "add", this).call(this, b, _);
              }
            }, {
              key: "canAdd",
              value: function(b, _) {
                return u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "canAdd", this).call(this, b, _) || u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "canAdd", this).call(this, b, parseInt(_));
              }
            }, {
              key: "value",
              value: function(b) {
                return parseInt(u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "value", this).call(this, b)) || void 0;
              }
            }]), h;
          }(f.default.Attributor.Class), m = new s("indent", "ql-indent", {
            scope: f.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
          });
          n.IndentClass = m;
        },
        /* 65 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = o(4), u = c(a);
          function c(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function f(i, s) {
            if (!(i instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(i, s) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : i;
          }
          function d(i, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            i.prototype = Object.create(s && s.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(i, s) : i.__proto__ = s);
          }
          var l = function(i) {
            d(s, i);
            function s() {
              return f(this, s), p(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
            }
            return s;
          }(u.default);
          l.blotName = "blockquote", l.tagName = "blockquote", n.default = l;
        },
        /* 66 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function s(m, v) {
              for (var h = 0; h < v.length; h++) {
                var g = v[h];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(m, g.key, g);
              }
            }
            return function(m, v, h) {
              return v && s(m.prototype, v), h && s(m, h), m;
            };
          }(), u = o(4), c = f(u);
          function f(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function p(s, m) {
            if (!(s instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(s, m) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return m && (typeof m == "object" || typeof m == "function") ? m : s;
          }
          function l(s, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof m);
            s.prototype = Object.create(m && m.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(s, m) : s.__proto__ = m);
          }
          var i = function(s) {
            l(m, s);
            function m() {
              return p(this, m), d(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments));
            }
            return a(m, null, [{
              key: "formats",
              value: function(h) {
                return this.tagName.indexOf(h.tagName) + 1;
              }
            }]), m;
          }(c.default);
          i.blotName = "header", i.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], n.default = i;
        },
        /* 67 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.ListItem = void 0;
          var a = /* @__PURE__ */ function() {
            function y(E, A) {
              for (var w = 0; w < A.length; w++) {
                var S = A[w];
                S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(E, S.key, S);
              }
            }
            return function(E, A, w) {
              return A && y(E.prototype, A), w && y(E, w), E;
            };
          }(), u = function y(E, A, w) {
            E === null && (E = Function.prototype);
            var S = Object.getOwnPropertyDescriptor(E, A);
            if (S === void 0) {
              var P = Object.getPrototypeOf(E);
              return P === null ? void 0 : y(P, A, w);
            } else {
              if ("value" in S)
                return S.value;
              var N = S.get;
              return N === void 0 ? void 0 : N.call(w);
            }
          }, c = o(0), f = s(c), p = o(4), d = s(p), l = o(25), i = s(l);
          function s(y) {
            return y && y.__esModule ? y : { default: y };
          }
          function m(y, E, A) {
            return E in y ? Object.defineProperty(y, E, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : y[E] = A, y;
          }
          function v(y, E) {
            if (!(y instanceof E))
              throw new TypeError("Cannot call a class as a function");
          }
          function h(y, E) {
            if (!y)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return E && (typeof E == "object" || typeof E == "function") ? E : y;
          }
          function g(y, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof E);
            y.prototype = Object.create(E && E.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(y, E) : y.__proto__ = E);
          }
          var b = function(y) {
            g(E, y);
            function E() {
              return v(this, E), h(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
            }
            return a(E, [{
              key: "format",
              value: function(w, S) {
                w === _.blotName && !S ? this.replaceWith(f.default.create(this.statics.scope)) : u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "format", this).call(this, w, S);
              }
            }, {
              key: "remove",
              value: function() {
                this.prev == null && this.next == null ? this.parent.remove() : u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "remove", this).call(this);
              }
            }, {
              key: "replaceWith",
              value: function(w, S) {
                return this.parent.isolate(this.offset(this.parent), this.length()), w === this.parent.statics.blotName ? (this.parent.replaceWith(w, S), this) : (this.parent.unwrap(), u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "replaceWith", this).call(this, w, S));
              }
            }], [{
              key: "formats",
              value: function(w) {
                return w.tagName === this.tagName ? void 0 : u(E.__proto__ || Object.getPrototypeOf(E), "formats", this).call(this, w);
              }
            }]), E;
          }(d.default);
          b.blotName = "list-item", b.tagName = "LI";
          var _ = function(y) {
            g(E, y), a(E, null, [{
              key: "create",
              value: function(w) {
                var S = w === "ordered" ? "OL" : "UL", P = u(E.__proto__ || Object.getPrototypeOf(E), "create", this).call(this, S);
                return (w === "checked" || w === "unchecked") && P.setAttribute("data-checked", w === "checked"), P;
              }
            }, {
              key: "formats",
              value: function(w) {
                if (w.tagName === "OL") return "ordered";
                if (w.tagName === "UL")
                  return w.hasAttribute("data-checked") ? w.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
              }
            }]);
            function E(A) {
              v(this, E);
              var w = h(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, A)), S = function(N) {
                if (N.target.parentNode === A) {
                  var O = w.statics.formats(A), x = f.default.find(N.target);
                  O === "checked" ? x.format("list", "unchecked") : O === "unchecked" && x.format("list", "checked");
                }
              };
              return A.addEventListener("touchstart", S), A.addEventListener("mousedown", S), w;
            }
            return a(E, [{
              key: "format",
              value: function(w, S) {
                this.children.length > 0 && this.children.tail.format(w, S);
              }
            }, {
              key: "formats",
              value: function() {
                return m({}, this.statics.blotName, this.statics.formats(this.domNode));
              }
            }, {
              key: "insertBefore",
              value: function(w, S) {
                if (w instanceof b)
                  u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertBefore", this).call(this, w, S);
                else {
                  var P = S == null ? this.length() : S.offset(this), N = this.split(P);
                  N.parent.insertBefore(w, N);
                }
              }
            }, {
              key: "optimize",
              value: function(w) {
                u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "optimize", this).call(this, w);
                var S = this.next;
                S != null && S.prev === this && S.statics.blotName === this.statics.blotName && S.domNode.tagName === this.domNode.tagName && S.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (S.moveChildren(this), S.remove());
              }
            }, {
              key: "replace",
              value: function(w) {
                if (w.statics.blotName !== this.statics.blotName) {
                  var S = f.default.create(this.statics.defaultChild);
                  w.moveChildren(S), this.appendChild(S);
                }
                u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "replace", this).call(this, w);
              }
            }]), E;
          }(i.default);
          _.blotName = "list", _.scope = f.default.Scope.BLOCK_BLOT, _.tagName = ["OL", "UL"], _.defaultChild = "list-item", _.allowedChildren = [b], n.ListItem = b, n.default = _;
        },
        /* 68 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = o(56), u = c(a);
          function c(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function f(i, s) {
            if (!(i instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(i, s) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : i;
          }
          function d(i, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            i.prototype = Object.create(s && s.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(i, s) : i.__proto__ = s);
          }
          var l = function(i) {
            d(s, i);
            function s() {
              return f(this, s), p(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
            }
            return s;
          }(u.default);
          l.blotName = "italic", l.tagName = ["EM", "I"], n.default = l;
        },
        /* 69 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function m(v, h) {
              for (var g = 0; g < h.length; g++) {
                var b = h[g];
                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(v, b.key, b);
              }
            }
            return function(v, h, g) {
              return h && m(v.prototype, h), g && m(v, g), v;
            };
          }(), u = function m(v, h, g) {
            v === null && (v = Function.prototype);
            var b = Object.getOwnPropertyDescriptor(v, h);
            if (b === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : m(_, h, g);
            } else {
              if ("value" in b)
                return b.value;
              var y = b.get;
              return y === void 0 ? void 0 : y.call(g);
            }
          }, c = o(6), f = p(c);
          function p(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function d(m, v) {
            if (!(m instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(m, v) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : m;
          }
          function i(m, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            m.prototype = Object.create(v && v.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(m, v) : m.__proto__ = v);
          }
          var s = function(m) {
            i(v, m);
            function v() {
              return d(this, v), l(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
            }
            return a(v, null, [{
              key: "create",
              value: function(g) {
                return g === "super" ? document.createElement("sup") : g === "sub" ? document.createElement("sub") : u(v.__proto__ || Object.getPrototypeOf(v), "create", this).call(this, g);
              }
            }, {
              key: "formats",
              value: function(g) {
                if (g.tagName === "SUB") return "sub";
                if (g.tagName === "SUP") return "super";
              }
            }]), v;
          }(f.default);
          s.blotName = "script", s.tagName = ["SUB", "SUP"], n.default = s;
        },
        /* 70 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = o(6), u = c(a);
          function c(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function f(i, s) {
            if (!(i instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(i, s) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : i;
          }
          function d(i, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            i.prototype = Object.create(s && s.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(i, s) : i.__proto__ = s);
          }
          var l = function(i) {
            d(s, i);
            function s() {
              return f(this, s), p(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
            }
            return s;
          }(u.default);
          l.blotName = "strike", l.tagName = "S", n.default = l;
        },
        /* 71 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = o(6), u = c(a);
          function c(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function f(i, s) {
            if (!(i instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(i, s) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : i;
          }
          function d(i, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            i.prototype = Object.create(s && s.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(i, s) : i.__proto__ = s);
          }
          var l = function(i) {
            d(s, i);
            function s() {
              return f(this, s), p(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
            }
            return s;
          }(u.default);
          l.blotName = "underline", l.tagName = "U", n.default = l;
        },
        /* 72 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function h(g, b) {
              for (var _ = 0; _ < b.length; _++) {
                var y = b[_];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(g, y.key, y);
              }
            }
            return function(g, b, _) {
              return b && h(g.prototype, b), _ && h(g, _), g;
            };
          }(), u = function h(g, b, _) {
            g === null && (g = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(g, b);
            if (y === void 0) {
              var E = Object.getPrototypeOf(g);
              return E === null ? void 0 : h(E, b, _);
            } else {
              if ("value" in y)
                return y.value;
              var A = y.get;
              return A === void 0 ? void 0 : A.call(_);
            }
          }, c = o(0), f = d(c), p = o(27);
          function d(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function l(h, g) {
            if (!(h instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(h, g) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : h;
          }
          function s(h, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            h.prototype = Object.create(g && g.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(h, g) : h.__proto__ = g);
          }
          var m = ["alt", "height", "width"], v = function(h) {
            s(g, h);
            function g() {
              return l(this, g), i(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
            }
            return a(g, [{
              key: "format",
              value: function(_, y) {
                m.indexOf(_) > -1 ? y ? this.domNode.setAttribute(_, y) : this.domNode.removeAttribute(_) : u(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "format", this).call(this, _, y);
              }
            }], [{
              key: "create",
              value: function(_) {
                var y = u(g.__proto__ || Object.getPrototypeOf(g), "create", this).call(this, _);
                return typeof _ == "string" && y.setAttribute("src", this.sanitize(_)), y;
              }
            }, {
              key: "formats",
              value: function(_) {
                return m.reduce(function(y, E) {
                  return _.hasAttribute(E) && (y[E] = _.getAttribute(E)), y;
                }, {});
              }
            }, {
              key: "match",
              value: function(_) {
                return /\.(jpe?g|gif|png)$/.test(_) || /^data:image\/.+;base64/.test(_);
              }
            }, {
              key: "sanitize",
              value: function(_) {
                return (0, p.sanitize)(_, ["http", "https", "data"]) ? _ : "//:0";
              }
            }, {
              key: "value",
              value: function(_) {
                return _.getAttribute("src");
              }
            }]), g;
          }(f.default.Embed);
          v.blotName = "image", v.tagName = "IMG", n.default = v;
        },
        /* 73 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var a = /* @__PURE__ */ function() {
            function h(g, b) {
              for (var _ = 0; _ < b.length; _++) {
                var y = b[_];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(g, y.key, y);
              }
            }
            return function(g, b, _) {
              return b && h(g.prototype, b), _ && h(g, _), g;
            };
          }(), u = function h(g, b, _) {
            g === null && (g = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(g, b);
            if (y === void 0) {
              var E = Object.getPrototypeOf(g);
              return E === null ? void 0 : h(E, b, _);
            } else {
              if ("value" in y)
                return y.value;
              var A = y.get;
              return A === void 0 ? void 0 : A.call(_);
            }
          }, c = o(4), f = o(27), p = d(f);
          function d(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function l(h, g) {
            if (!(h instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(h, g) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : h;
          }
          function s(h, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            h.prototype = Object.create(g && g.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(h, g) : h.__proto__ = g);
          }
          var m = ["height", "width"], v = function(h) {
            s(g, h);
            function g() {
              return l(this, g), i(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
            }
            return a(g, [{
              key: "format",
              value: function(_, y) {
                m.indexOf(_) > -1 ? y ? this.domNode.setAttribute(_, y) : this.domNode.removeAttribute(_) : u(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "format", this).call(this, _, y);
              }
            }], [{
              key: "create",
              value: function(_) {
                var y = u(g.__proto__ || Object.getPrototypeOf(g), "create", this).call(this, _);
                return y.setAttribute("frameborder", "0"), y.setAttribute("allowfullscreen", !0), y.setAttribute("src", this.sanitize(_)), y;
              }
            }, {
              key: "formats",
              value: function(_) {
                return m.reduce(function(y, E) {
                  return _.hasAttribute(E) && (y[E] = _.getAttribute(E)), y;
                }, {});
              }
            }, {
              key: "sanitize",
              value: function(_) {
                return p.default.sanitize(_);
              }
            }, {
              key: "value",
              value: function(_) {
                return _.getAttribute("src");
              }
            }]), g;
          }(c.BlockEmbed);
          v.blotName = "video", v.className = "ql-video", v.tagName = "IFRAME", n.default = v;
        },
        /* 74 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.FormulaBlot = void 0;
          var a = /* @__PURE__ */ function() {
            function _(y, E) {
              for (var A = 0; A < E.length; A++) {
                var w = E[A];
                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(y, w.key, w);
              }
            }
            return function(y, E, A) {
              return E && _(y.prototype, E), A && _(y, A), y;
            };
          }(), u = function _(y, E, A) {
            y === null && (y = Function.prototype);
            var w = Object.getOwnPropertyDescriptor(y, E);
            if (w === void 0) {
              var S = Object.getPrototypeOf(y);
              return S === null ? void 0 : _(S, E, A);
            } else {
              if ("value" in w)
                return w.value;
              var P = w.get;
              return P === void 0 ? void 0 : P.call(A);
            }
          }, c = o(35), f = s(c), p = o(5), d = s(p), l = o(9), i = s(l);
          function s(_) {
            return _ && _.__esModule ? _ : { default: _ };
          }
          function m(_, y) {
            if (!(_ instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          function v(_, y) {
            if (!_)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == "object" || typeof y == "function") ? y : _;
          }
          function h(_, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof y);
            _.prototype = Object.create(y && y.prototype, { constructor: { value: _, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(_, y) : _.__proto__ = y);
          }
          var g = function(_) {
            h(y, _);
            function y() {
              return m(this, y), v(this, (y.__proto__ || Object.getPrototypeOf(y)).apply(this, arguments));
            }
            return a(y, null, [{
              key: "create",
              value: function(A) {
                var w = u(y.__proto__ || Object.getPrototypeOf(y), "create", this).call(this, A);
                return typeof A == "string" && (window.katex.render(A, w, {
                  throwOnError: !1,
                  errorColor: "#f00"
                }), w.setAttribute("data-value", A)), w;
              }
            }, {
              key: "value",
              value: function(A) {
                return A.getAttribute("data-value");
              }
            }]), y;
          }(f.default);
          g.blotName = "formula", g.className = "ql-formula", g.tagName = "SPAN";
          var b = function(_) {
            h(y, _), a(y, null, [{
              key: "register",
              value: function() {
                d.default.register(g, !0);
              }
            }]);
            function y() {
              m(this, y);
              var E = v(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this));
              if (window.katex == null)
                throw new Error("Formula module requires KaTeX.");
              return E;
            }
            return y;
          }(i.default);
          n.FormulaBlot = g, n.default = b;
        },
        /* 75 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.CodeToken = n.CodeBlock = void 0;
          var a = /* @__PURE__ */ function() {
            function A(w, S) {
              for (var P = 0; P < S.length; P++) {
                var N = S[P];
                N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(w, N.key, N);
              }
            }
            return function(w, S, P) {
              return S && A(w.prototype, S), P && A(w, P), w;
            };
          }(), u = function A(w, S, P) {
            w === null && (w = Function.prototype);
            var N = Object.getOwnPropertyDescriptor(w, S);
            if (N === void 0) {
              var O = Object.getPrototypeOf(w);
              return O === null ? void 0 : A(O, S, P);
            } else {
              if ("value" in N)
                return N.value;
              var x = N.get;
              return x === void 0 ? void 0 : x.call(P);
            }
          }, c = o(0), f = v(c), p = o(5), d = v(p), l = o(9), i = v(l), s = o(13), m = v(s);
          function v(A) {
            return A && A.__esModule ? A : { default: A };
          }
          function h(A, w) {
            if (!(A instanceof w))
              throw new TypeError("Cannot call a class as a function");
          }
          function g(A, w) {
            if (!A)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return w && (typeof w == "object" || typeof w == "function") ? w : A;
          }
          function b(A, w) {
            if (typeof w != "function" && w !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof w);
            A.prototype = Object.create(w && w.prototype, { constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 } }), w && (Object.setPrototypeOf ? Object.setPrototypeOf(A, w) : A.__proto__ = w);
          }
          var _ = function(A) {
            b(w, A);
            function w() {
              return h(this, w), g(this, (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments));
            }
            return a(w, [{
              key: "replaceWith",
              value: function(P) {
                this.domNode.textContent = this.domNode.textContent, this.attach(), u(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "replaceWith", this).call(this, P);
              }
            }, {
              key: "highlight",
              value: function(P) {
                var N = this.domNode.textContent;
                this.cachedText !== N && ((N.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = P(N), this.domNode.normalize(), this.attach()), this.cachedText = N);
              }
            }]), w;
          }(m.default);
          _.className = "ql-syntax";
          var y = new f.default.Attributor.Class("token", "hljs", {
            scope: f.default.Scope.INLINE
          }), E = function(A) {
            b(w, A), a(w, null, [{
              key: "register",
              value: function() {
                d.default.register(y, !0), d.default.register(_, !0);
              }
            }]);
            function w(S, P) {
              h(this, w);
              var N = g(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this, S, P));
              if (typeof N.options.highlight != "function")
                throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
              var O = null;
              return N.quill.on(d.default.events.SCROLL_OPTIMIZE, function() {
                clearTimeout(O), O = setTimeout(function() {
                  N.highlight(), O = null;
                }, N.options.interval);
              }), N.highlight(), N;
            }
            return a(w, [{
              key: "highlight",
              value: function() {
                var P = this;
                if (!this.quill.selection.composing) {
                  this.quill.update(d.default.sources.USER);
                  var N = this.quill.getSelection();
                  this.quill.scroll.descendants(_).forEach(function(O) {
                    O.highlight(P.options.highlight);
                  }), this.quill.update(d.default.sources.SILENT), N != null && this.quill.setSelection(N, d.default.sources.SILENT);
                }
              }
            }]), w;
          }(i.default);
          E.DEFAULTS = {
            highlight: function() {
              return window.hljs == null ? null : function(A) {
                var w = window.hljs.highlightAuto(A);
                return w.value;
              };
            }(),
            interval: 1e3
          }, n.CodeBlock = _, n.CodeToken = y, n.default = E;
        },
        /* 76 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 77 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
        },
        /* 78 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 79 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
        },
        /* 80 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
        },
        /* 81 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
        },
        /* 82 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
        },
        /* 83 */
        /***/
        function(r, n) {
          r.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
        },
        /* 84 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
        },
        /* 85 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
        },
        /* 86 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
        },
        /* 87 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 88 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 89 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 90 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
        },
        /* 91 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
        },
        /* 92 */
        /***/
        function(r, n) {
          r.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
        },
        /* 93 */
        /***/
        function(r, n) {
          r.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
        },
        /* 94 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
        },
        /* 95 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
        },
        /* 96 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
        },
        /* 97 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
        },
        /* 98 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
        },
        /* 99 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
        },
        /* 100 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
        },
        /* 101 */
        /***/
        function(r, n) {
          r.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
        },
        /* 102 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
        },
        /* 103 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
        },
        /* 104 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
        },
        /* 105 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
        },
        /* 106 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
        },
        /* 107 */
        /***/
        function(r, n) {
          r.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
        },
        /* 108 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.BubbleTooltip = void 0;
          var a = function w(S, P, N) {
            S === null && (S = Function.prototype);
            var O = Object.getOwnPropertyDescriptor(S, P);
            if (O === void 0) {
              var x = Object.getPrototypeOf(S);
              return x === null ? void 0 : w(x, P, N);
            } else {
              if ("value" in O)
                return O.value;
              var T = O.get;
              return T === void 0 ? void 0 : T.call(N);
            }
          }, u = /* @__PURE__ */ function() {
            function w(S, P) {
              for (var N = 0; N < P.length; N++) {
                var O = P[N];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(S, O.key, O);
              }
            }
            return function(S, P, N) {
              return P && w(S.prototype, P), N && w(S, N), S;
            };
          }(), c = o(3), f = h(c), p = o(8), d = h(p), l = o(43), i = h(l), s = o(15), m = o(41), v = h(m);
          function h(w) {
            return w && w.__esModule ? w : { default: w };
          }
          function g(w, S) {
            if (!(w instanceof S))
              throw new TypeError("Cannot call a class as a function");
          }
          function b(w, S) {
            if (!w)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return S && (typeof S == "object" || typeof S == "function") ? S : w;
          }
          function _(w, S) {
            if (typeof S != "function" && S !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof S);
            w.prototype = Object.create(S && S.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(w, S) : w.__proto__ = S);
          }
          var y = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], E = function(w) {
            _(S, w);
            function S(P, N) {
              g(this, S), N.modules.toolbar != null && N.modules.toolbar.container == null && (N.modules.toolbar.container = y);
              var O = b(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, P, N));
              return O.quill.container.classList.add("ql-bubble"), O;
            }
            return u(S, [{
              key: "extendToolbar",
              value: function(N) {
                this.tooltip = new A(this.quill, this.options.bounds), this.tooltip.root.appendChild(N.container), this.buildButtons([].slice.call(N.container.querySelectorAll("button")), v.default), this.buildPickers([].slice.call(N.container.querySelectorAll("select")), v.default);
              }
            }]), S;
          }(i.default);
          E.DEFAULTS = (0, f.default)(!0, {}, i.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(S) {
                    S ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var A = function(w) {
            _(S, w);
            function S(P, N) {
              g(this, S);
              var O = b(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, P, N));
              return O.quill.on(d.default.events.EDITOR_CHANGE, function(x, T, I, L) {
                if (x === d.default.events.SELECTION_CHANGE)
                  if (T != null && T.length > 0 && L === d.default.sources.USER) {
                    O.show(), O.root.style.left = "0px", O.root.style.width = "", O.root.style.width = O.root.offsetWidth + "px";
                    var B = O.quill.getLines(T.index, T.length);
                    if (B.length === 1)
                      O.position(O.quill.getBounds(T));
                    else {
                      var $ = B[B.length - 1], K = O.quill.getIndex($), j = Math.min($.length() - 1, T.index + T.length - K), k = O.quill.getBounds(new s.Range(K, j));
                      O.position(k);
                    }
                  } else document.activeElement !== O.textbox && O.quill.hasFocus() && O.hide();
              }), O;
            }
            return u(S, [{
              key: "listen",
              value: function() {
                var N = this;
                a(S.prototype.__proto__ || Object.getPrototypeOf(S.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                  N.root.classList.remove("ql-editing");
                }), this.quill.on(d.default.events.SCROLL_OPTIMIZE, function() {
                  setTimeout(function() {
                    if (!N.root.classList.contains("ql-hidden")) {
                      var O = N.quill.getSelection();
                      O != null && N.position(N.quill.getBounds(O));
                    }
                  }, 1);
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.show();
              }
            }, {
              key: "position",
              value: function(N) {
                var O = a(S.prototype.__proto__ || Object.getPrototypeOf(S.prototype), "position", this).call(this, N), x = this.root.querySelector(".ql-tooltip-arrow");
                if (x.style.marginLeft = "", O === 0) return O;
                x.style.marginLeft = -1 * O - x.offsetWidth / 2 + "px";
              }
            }]), S;
          }(l.BaseTooltip);
          A.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), n.BubbleTooltip = A, n.default = E;
        },
        /* 109 */
        /***/
        function(r, n, o) {
          r.exports = o(63);
        }
        /******/
      ]).default
    );
  });
})(Rl);
var w0 = Rl.exports, N0 = Le && Le.__extends || /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var a in o) o.hasOwnProperty(a) && (n[a] = o[a]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), dr = Le && Le.__assign || function() {
  return dr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, dr.apply(this, arguments);
}, S0 = Le && Le.__spreadArrays || function() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), o = 0, t = 0; t < r; t++)
    for (var a = arguments[t], u = 0, c = a.length; u < c; u++, o++)
      n[o] = a[u];
  return n;
}, Ar = Le && Le.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Ge = Ar(ue), A0 = Ar(ji), Dt = Ar(x0), ki = Ar(w0), D0 = (
  /** @class */
  function(e) {
    N0(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      n.dirtyProps = [
        "modules",
        "formats",
        "bounds",
        "theme",
        "children"
      ], n.cleanProps = [
        "id",
        "className",
        "style",
        "placeholder",
        "tabIndex",
        "onChange",
        "onChangeSelection",
        "onFocus",
        "onBlur",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ], n.state = {
        generation: 0
      }, n.selection = null, n.onEditorChange = function(a, u, c, f) {
        var p, d, l, i;
        a === "text-change" ? (d = (p = n).onEditorChangeText) === null || d === void 0 || d.call(p, n.editor.root.innerHTML, u, f, n.unprivilegedEditor) : a === "selection-change" && ((i = (l = n).onEditorChangeSelection) === null || i === void 0 || i.call(l, u, f, n.unprivilegedEditor));
      };
      var o = n.isControlled() ? r.value : r.defaultValue;
      return n.value = o ?? "", n;
    }
    return t.prototype.validateProps = function(r) {
      var n;
      if (Ge.default.Children.count(r.children) > 1)
        throw new Error("The Quill editing area can only be composed of a single React element.");
      if (Ge.default.Children.count(r.children)) {
        var o = Ge.default.Children.only(r.children);
        if (((n = o) === null || n === void 0 ? void 0 : n.type) === "textarea")
          throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
      }
      if (this.lastDeltaChangeSet && r.value === this.lastDeltaChangeSet)
        throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
    }, t.prototype.shouldComponentUpdate = function(r, n) {
      var o = this, a;
      if (this.validateProps(r), !this.editor || this.state.generation !== n.generation)
        return !0;
      if ("value" in r) {
        var u = this.getEditorContents(), c = (a = r.value, a ?? "");
        this.isEqualValue(c, u) || this.setEditorContents(this.editor, c);
      }
      return r.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, r.readOnly), S0(this.cleanProps, this.dirtyProps).some(function(f) {
        return !Dt.default(r[f], o.props[f]);
      });
    }, t.prototype.shouldComponentRegenerate = function(r) {
      var n = this;
      return this.dirtyProps.some(function(o) {
        return !Dt.default(r[o], n.props[o]);
      });
    }, t.prototype.componentDidMount = function() {
      this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents());
    }, t.prototype.componentWillUnmount = function() {
      this.destroyEditor();
    }, t.prototype.componentDidUpdate = function(r, n) {
      var o = this;
      if (this.editor && this.shouldComponentRegenerate(r)) {
        var a = this.editor.getContents(), u = this.editor.getSelection();
        this.regenerationSnapshot = { delta: a, selection: u }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
      }
      if (this.state.generation !== n.generation) {
        var c = this.regenerationSnapshot, a = c.delta, f = c.selection;
        delete this.regenerationSnapshot, this.instantiateEditor();
        var p = this.editor;
        p.setContents(a), Li(function() {
          return o.setEditorSelection(p, f);
        });
      }
    }, t.prototype.instantiateEditor = function() {
      this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
    }, t.prototype.destroyEditor = function() {
      this.editor && this.unhookEditor(this.editor);
    }, t.prototype.isControlled = function() {
      return "value" in this.props;
    }, t.prototype.getEditorConfig = function() {
      return {
        bounds: this.props.bounds,
        formats: this.props.formats,
        modules: this.props.modules,
        placeholder: this.props.placeholder,
        readOnly: this.props.readOnly,
        scrollingContainer: this.props.scrollingContainer,
        tabIndex: this.props.tabIndex,
        theme: this.props.theme
      };
    }, t.prototype.getEditor = function() {
      if (!this.editor)
        throw new Error("Accessing non-instantiated editor");
      return this.editor;
    }, t.prototype.createEditor = function(r, n) {
      var o = new ki.default(r, n);
      return n.tabIndex != null && this.setEditorTabIndex(o, n.tabIndex), this.hookEditor(o), o;
    }, t.prototype.hookEditor = function(r) {
      this.unprivilegedEditor = this.makeUnprivilegedEditor(r), r.on("editor-change", this.onEditorChange);
    }, t.prototype.unhookEditor = function(r) {
      r.off("editor-change", this.onEditorChange);
    }, t.prototype.getEditorContents = function() {
      return this.value;
    }, t.prototype.getEditorSelection = function() {
      return this.selection;
    }, t.prototype.isDelta = function(r) {
      return r && r.ops;
    }, t.prototype.isEqualValue = function(r, n) {
      return this.isDelta(r) && this.isDelta(n) ? Dt.default(r.ops, n.ops) : Dt.default(r, n);
    }, t.prototype.setEditorContents = function(r, n) {
      var o = this;
      this.value = n;
      var a = this.getEditorSelection();
      typeof n == "string" ? r.setContents(r.clipboard.convert(n)) : r.setContents(n), Li(function() {
        return o.setEditorSelection(r, a);
      });
    }, t.prototype.setEditorSelection = function(r, n) {
      if (this.selection = n, n) {
        var o = r.getLength();
        n.index = Math.max(0, Math.min(n.index, o - 1)), n.length = Math.max(0, Math.min(n.length, o - 1 - n.index)), r.setSelection(n);
      }
    }, t.prototype.setEditorTabIndex = function(r, n) {
      var o, a;
      !((a = (o = r) === null || o === void 0 ? void 0 : o.scroll) === null || a === void 0) && a.domNode && (r.scroll.domNode.tabIndex = n);
    }, t.prototype.setEditorReadOnly = function(r, n) {
      n ? r.disable() : r.enable();
    }, t.prototype.makeUnprivilegedEditor = function(r) {
      var n = r;
      return {
        getHTML: function() {
          return n.root.innerHTML;
        },
        getLength: n.getLength.bind(n),
        getText: n.getText.bind(n),
        getContents: n.getContents.bind(n),
        getSelection: n.getSelection.bind(n),
        getBounds: n.getBounds.bind(n)
      };
    }, t.prototype.getEditingArea = function() {
      if (!this.editingArea)
        throw new Error("Instantiating on missing editing area");
      var r = A0.default.findDOMNode(this.editingArea);
      if (!r)
        throw new Error("Cannot find element for editing area");
      if (r.nodeType === 3)
        throw new Error("Editing area cannot be a text node");
      return r;
    }, t.prototype.renderEditingArea = function() {
      var r = this, n = this.props, o = n.children, a = n.preserveWhitespace, u = this.state.generation, c = {
        key: u,
        ref: function(f) {
          r.editingArea = f;
        }
      };
      return Ge.default.Children.count(o) ? Ge.default.cloneElement(Ge.default.Children.only(o), c) : a ? Ge.default.createElement("pre", dr({}, c)) : Ge.default.createElement("div", dr({}, c));
    }, t.prototype.render = function() {
      var r;
      return Ge.default.createElement("div", { id: this.props.id, style: this.props.style, key: this.state.generation, className: "quill " + (r = this.props.className, r ?? ""), onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
    }, t.prototype.onEditorChangeText = function(r, n, o, a) {
      var u, c;
      if (this.editor) {
        var f = this.isDelta(this.value) ? a.getContents() : a.getHTML();
        f !== this.getEditorContents() && (this.lastDeltaChangeSet = n, this.value = f, (c = (u = this.props).onChange) === null || c === void 0 || c.call(u, r, n, o, a));
      }
    }, t.prototype.onEditorChangeSelection = function(r, n, o) {
      var a, u, c, f, p, d;
      if (this.editor) {
        var l = this.getEditorSelection(), i = !l && r, s = l && !r;
        Dt.default(r, l) || (this.selection = r, (u = (a = this.props).onChangeSelection) === null || u === void 0 || u.call(a, r, n, o), i ? (f = (c = this.props).onFocus) === null || f === void 0 || f.call(c, r, n, o) : s && ((d = (p = this.props).onBlur) === null || d === void 0 || d.call(p, l, n, o)));
      }
    }, t.prototype.focus = function() {
      this.editor && this.editor.focus();
    }, t.prototype.blur = function() {
      this.editor && (this.selection = null, this.editor.blur());
    }, t.displayName = "React Quill", t.Quill = ki.default, t.defaultProps = {
      theme: "snow",
      modules: {},
      readOnly: !1
    }, t;
  }(Ge.default.Component)
);
function Li(e) {
  Promise.resolve().then(e);
}
var T0 = D0;
const P0 = /* @__PURE__ */ ia(T0), X0 = ({
  value: e,
  onChange: t,
  error: r,
  readOnly: n = !1,
  className: o,
  taskList: a = !1,
  image: u = !1
}) => /* @__PURE__ */ Ae(It, { children: [
  /* @__PURE__ */ oe(
    P0,
    {
      readOnly: n,
      value: e,
      onChange: t,
      theme: "snow",
      modules: a ? {
        toolbar: [
          [
            { list: "ordered" },
            { list: "bullet" },
            a && { list: "check" }
          ],
          ["bold", "italic", "underline"],
          u ? ["image"] : [],
          ["clean"]
          // ["link"],
        ]
      } : {
        toolbar: [
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          u ? ["image"] : [],
          ["clean"]
          // ["link"],
        ]
      },
      formats: [
        "list",
        "bullet",
        a ? "check" : "",
        "bold",
        "italic",
        u ? "image" : ""
        // "link",
      ],
      className: `${o} w-full bg-primary-light rounded-[30px] overflow-hidden md:border-white md:rounded-[15px] text-black text-sm md:text-base !border-none break-all`
    }
  ),
  /* @__PURE__ */ oe(pr, { error: r })
] });
var mn = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new WeakMap(), Mi = 0, I0 = void 0;
function C0(e) {
  return e ? (er.has(e) || (Mi += 1, er.set(e, Mi.toString())), er.get(e)) : "0";
}
function R0(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? C0(e.root) : e[t]}`).toString();
}
function k0(e) {
  const t = R0(e);
  let r = mn.get(t);
  if (!r) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const a = new IntersectionObserver((u) => {
      u.forEach((c) => {
        var f;
        const p = c.isIntersecting && o.some((d) => c.intersectionRatio >= d);
        e.trackVisibility && typeof c.isVisible > "u" && (c.isVisible = p), (f = n.get(c.target)) == null || f.forEach((d) => {
          d(p, c);
        });
      });
    }, e);
    o = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: a,
      elements: n
    }, mn.set(t, r);
  }
  return r;
}
function L0(e, t, r = {}, n = I0) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const f = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: f,
      intersectionRect: f,
      rootBounds: f
    }), () => {
    };
  }
  const { id: o, observer: a, elements: u } = k0(r), c = u.get(e) || [];
  return u.has(e) || u.set(e, c), c.push(t), a.observe(e), function() {
    c.splice(c.indexOf(t), 1), c.length === 0 && (u.delete(e), a.unobserve(e)), u.size === 0 && (a.disconnect(), mn.delete(o));
  };
}
function M0({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: n,
  root: o,
  triggerOnce: a,
  skip: u,
  initialInView: c,
  fallbackInView: f,
  onChange: p
} = {}) {
  var d;
  const [l, i] = de.useState(null), s = de.useRef(p), [m, v] = de.useState({
    inView: !!c,
    entry: void 0
  });
  s.current = p, de.useEffect(
    () => {
      if (u || !l) return;
      let _;
      return _ = L0(
        l,
        (y, E) => {
          v({
            inView: y,
            entry: E
          }), s.current && s.current(y, E), E.isIntersecting && a && _ && (_(), _ = void 0);
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
        f
      ), () => {
        _ && _();
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
      a,
      u,
      r,
      f,
      t
    ]
  );
  const h = (d = m.entry) == null ? void 0 : d.target, g = de.useRef(void 0);
  !l && h && !a && !u && g.current !== h && (g.current = h, v({
    inView: !!c,
    entry: void 0
  }));
  const b = [i, m.inView, m.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
const B0 = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = Re(!1), o = () => {
    const a = document.documentElement.scrollTop || document.body.scrollTop;
    n(a > 100);
  };
  return Se(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ oe(
    "div",
    {
      onClick: (a) => {
        t(), a.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ oe(
        Ct,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, J0 = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: a, fetchNextPage: u, isFetchingNextPage: c, isLoading: f, data: p } = e, d = p == null ? void 0 : p.pages.flatMap((s) => s), { ref: l, inView: i } = M0();
  return Se(() => {
    i && a && u();
  }, [u, i, a]), /* @__PURE__ */ Ae(It, { children: [
    o && /* @__PURE__ */ oe(B0, { className: n }),
    /* @__PURE__ */ oe(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(d != null && d.length) && d.map((s, m) => t(s, m))
      }
    ),
    /* @__PURE__ */ oe(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: l,
        children: (c || f) && /* @__PURE__ */ oe(yn, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(d != null && d.length) && /* @__PURE__ */ oe("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, Q0 = () => {
  const e = he(null);
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
  V0 as Button,
  F0 as Checkbox,
  G0 as Chips,
  pr as ErrorText,
  Ct as Icon,
  J0 as InfiniteScroll,
  U0 as Input,
  H0 as List,
  yn as Loader,
  z0 as MultiSelectSearch,
  B0 as ScrollTopButton,
  W0 as Search,
  K0 as Select,
  Y0 as Table,
  X0 as TextEdit,
  Z0 as Textarea,
  Zi as Wrapper,
  ra as useDebounce,
  Q0 as useScroll
};
