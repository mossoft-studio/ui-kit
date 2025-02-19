import { jsx as oe, jsxs as Ae, Fragment as It } from "react/jsx-runtime";
import * as de from "react";
import fe, { useState as Re, useEffect as Se, useRef as he, useMemo as Ol, useLayoutEffect as Ai, useContext as Di } from "react";
import Ti, { flushSync as Pi } from "react-dom";
const wl = ({ name: e, className: t, ...r }) => /* @__PURE__ */ oe(
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
), Ct = wl, Nl = ({ style: e, text: t }) => /* @__PURE__ */ Ae("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ oe("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ oe("span", { className: "text-base", children: t })
] }), pn = Nl, Sl = ({
  children: e,
  onClick: t,
  className: r,
  loadType: n,
  isLoading: o,
  variant: i,
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
  const a = [
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
  return /* @__PURE__ */ Ae(
    "button",
    {
      disabled: c || o,
      onClick: t,
      className: a,
      ...f,
      children: [
        o ? /* @__PURE__ */ oe(pn, { text: n === "1C" ? p : void 0 }) : e,
        u && !o && /* @__PURE__ */ oe(
          Ct,
          {
            name: u,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, F0 = Sl, Al = ({ error: e }) => /* @__PURE__ */ oe("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ oe("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), fr = Al, Dl = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
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
            className: `text-sm text-dark-gray font-normal ${i}`,
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
  u && /* @__PURE__ */ oe(fr, { error: u })
] }), V0 = Dl, Tl = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ oe("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ oe(It, { children: o.title ? /* @__PURE__ */ oe(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ oe(It, {}) })) }), U0 = Tl;
function hn(e, t) {
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
function Pl(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, u) {
      return i === t[u];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function at(e) {
  return !!(e || "").match(/\d/);
}
function it(e) {
  return e == null;
}
function Il(e) {
  return typeof e == "number" && isNaN(e);
}
function Ii(e) {
  return it(e) || Il(e) || typeof e == "number" && !isFinite(e);
}
function Ci(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Cl(e) {
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
function Rl(e, t, r) {
  var n = Cl(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function kl(e) {
  var t = he(e);
  t.current = e;
  var r = he(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function vn(e, t) {
  t === void 0 && (t = !0);
  var r = e[0] === "-", n = r && t;
  e = e.replace("-", "");
  var o = e.split("."), i = o[0], u = o[1] || "";
  return {
    beforeDecimal: i,
    afterDecimal: u,
    hasNegation: r,
    addNegation: n
  };
}
function Ll(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function Ri(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function Kn(e, t) {
  return Array(t + 1).join(e);
}
function ki(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var u = 1 + i, c = o.length;
  return u < 0 ? o = "0." + Kn("0", Math.abs(u)) + o : u >= c ? o = o + Kn("0", u - c) : o = (o.substring(0, u) || "0") + "." + o.substring(u), r + o;
}
function Yn(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = vn(e), i = o.beforeDecimal, u = o.afterDecimal, c = o.hasNegation, f = parseFloat("0." + (u || "0")), p = u.length <= t ? "0." + u : f.toFixed(t), d = p.split("."), l = i;
  i && Number(d[0]) && (l = i.split("").reverse().reduce(function(v, h, m) {
    return v.length > m ? (Number(v[0]) + Number(h)).toString() + v.substring(1, v.length) : h + v;
  }, d[0]));
  var a = Ri(d[1] || "", t, r), s = c ? "-" : "", b = n ? "." : "";
  return "" + s + l + b + a;
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
var Li = Pl(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), Ml = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Bl(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Sr(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function $l() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Mi(e) {
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
function Bi(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function jl(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function ql(e, t, r, n, o, i, u) {
  u === void 0 && (u = jl);
  var c = o.findIndex(function(g) {
    return g;
  }), f = e.slice(0, c);
  !t && !r.startsWith(f) && (t = f, r = f + r, n = n + f.length);
  for (var p = r.length, d = e.length, l = {}, a = new Array(p), s = 0; s < p; s++) {
    a[s] = -1;
    for (var b = 0, v = d; b < v; b++) {
      var h = u({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: s,
        formattedValueIndex: b
      });
      if (h && l[b] !== !0) {
        a[s] = b, l[b] = !0;
        break;
      }
    }
  }
  for (var m = n; m < p && (a[m] === -1 || !i(r[m])); )
    m++;
  var y = m === p || a[m] === -1 ? d : a[m];
  for (m = n - 1; m > 0 && a[m] === -1; )
    m--;
  var _ = m === -1 || a[m] === -1 ? 0 : a[m] + 1;
  return _ > y ? y : n - _ < y - n ? _ : y;
}
function rr(e, t, r, n) {
  var o = e.length;
  if (t = Bl(t, 0, o), n === "left") {
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
function Fl(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(at(e[r]) || at(e[r - 1]));
  return t;
}
function $i(e, t, r, n, o, i) {
  i === void 0 && (i = He);
  var u = kl(function(b, v) {
    var h, m;
    return Ii(b) ? (m = "", h = "") : typeof b == "number" || v ? (m = typeof b == "number" ? ki(b) : b, h = n(m)) : (m = o(b, void 0), h = n(m)), { formattedValue: h, numAsString: m };
  }), c = Re(function() {
    return u(it(e) ? t : e, r);
  }), f = c[0], p = c[1], d = function(b, v) {
    b.formattedValue !== f.formattedValue && p({
      formattedValue: b.formattedValue,
      numAsString: b.value
    }), i(b, v);
  }, l = e, a = r;
  it(e) && (l = f.numAsString, a = !0);
  var s = u(l, a);
  return Ol(function() {
    p(s);
  }, [s.formattedValue]), [f, d];
}
function Vl(e) {
  return e.replace(/[^0-9]/g, "");
}
function Ul(e) {
  return e;
}
function ji(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, u = e.format;
  u === void 0 && (u = Ul);
  var c = e.removeFormatting;
  c === void 0 && (c = Vl);
  var f = e.defaultValue, p = e.valueIsNumericString, d = e.onValueChange, l = e.isAllowed, a = e.onChange;
  a === void 0 && (a = He);
  var s = e.onKeyDown;
  s === void 0 && (s = He);
  var b = e.onMouseUp;
  b === void 0 && (b = He);
  var v = e.onFocus;
  v === void 0 && (v = He);
  var h = e.onBlur;
  h === void 0 && (h = He);
  var m = e.value, y = e.getCaretBoundary;
  y === void 0 && (y = Fl);
  var _ = e.isValidInputCharacter;
  _ === void 0 && (_ = at);
  var g = e.isCharacterSame, E = hn(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), A = $i(m, f, !!p, u, c, d), S = A[0], N = S.formattedValue, P = S.numAsString, w = A[1], x = he(), O = he({ formattedValue: N, numAsString: P }), T = function(ee, U) {
    O.current = { formattedValue: ee.formattedValue, numAsString: ee.value }, w(ee, U);
  }, I = Re(!1), L = I[0], B = I[1], $ = he(null), K = he({
    setCaretTimeout: null,
    focusTimeout: null
  });
  Se(function() {
    return B(!0), function() {
      clearTimeout(K.current.setCaretTimeout), clearTimeout(K.current.focusTimeout);
    };
  }, []);
  var j = u, k = function(ee, U) {
    var H = parseFloat(U);
    return {
      formattedValue: ee,
      value: U,
      floatValue: isNaN(H) ? void 0 : H
    };
  }, D = function(ee, U, H) {
    ee.selectionStart === 0 && ee.selectionEnd === ee.value.length || (Ze(ee, U), K.current.setCaretTimeout = setTimeout(function() {
      ee.value === H && ee.selectionStart !== U && Ze(ee, U);
    }, 0));
  }, R = function(ee, U, H) {
    return rr(ee, U, y(ee), H);
  }, M = function(ee, U, H) {
    var J = y(U), te = ql(U, N, ee, H, J, _, g);
    return te = rr(U, te, J), te;
  }, G = function(ee) {
    var U = ee.formattedValue;
    U === void 0 && (U = "");
    var H = ee.input, J = ee.source, te = ee.event, Y = ee.numAsString, ne;
    if (H) {
      var le = ee.inputValue || H.value, se = Sr(H);
      H.value = U, ne = M(le, U, se), ne !== void 0 && D(H, ne, U);
    }
    U !== N && T(k(U, Y), { event: te, source: J });
  };
  Se(function() {
    var ee = O.current, U = ee.formattedValue, H = ee.numAsString;
    (N !== U || P !== H) && T(k(N, P), {
      event: void 0,
      source: Rt.props
    });
  }, [N, P]);
  var V = $.current ? Sr($.current) : void 0, C = typeof window < "u" ? Ai : Se;
  C(function() {
    var ee = $.current;
    if (N !== O.current.formattedValue && ee) {
      var U = M(O.current.formattedValue, N, V);
      ee.value = N, D(ee, U, N);
    }
  }, [N]);
  var q = function(ee, U, H) {
    var J = U.target, te = x.current ? Ml(x.current, J.selectionEnd) : Li(N, ee), Y = Object.assign(Object.assign({}, te), { lastValue: N }), ne = c(ee, Y), le = j(ne);
    if (ne = c(le, void 0), l && !l(k(le, ne))) {
      var se = U.target, we = Sr(se), ke = M(ee, N, we);
      return se.value = N, D(se, ke, N), !1;
    }
    return G({
      formattedValue: le,
      numAsString: ne,
      inputValue: ee,
      event: U,
      source: H,
      input: U.target
    }), !0;
  }, W = function(ee, U) {
    U === void 0 && (U = 0);
    var H = ee.selectionStart, J = ee.selectionEnd;
    x.current = { selectionStart: H, selectionEnd: J + U };
  }, z = function(ee) {
    var U = ee.target, H = U.value, J = q(H, ee, Rt.event);
    J && a(ee), x.current = void 0;
  }, Z = function(ee) {
    var U = ee.target, H = ee.key, J = U.selectionStart, te = U.selectionEnd, Y = U.value;
    Y === void 0 && (Y = "");
    var ne;
    H === "ArrowLeft" || H === "Backspace" ? ne = Math.max(J - 1, 0) : H === "ArrowRight" ? ne = Math.min(J + 1, Y.length) : H === "Delete" && (ne = J);
    var le = 0;
    H === "Delete" && J === te && (le = 1);
    var se = H === "ArrowLeft" || H === "ArrowRight";
    if (ne === void 0 || J !== te && !se) {
      s(ee), W(U, le);
      return;
    }
    var we = ne;
    if (se) {
      var ke = H === "ArrowLeft" ? "left" : "right";
      we = R(Y, ne, ke), we !== ne && ee.preventDefault();
    } else H === "Delete" && !_(Y[ne]) ? we = R(Y, ne, "right") : H === "Backspace" && !_(Y[ne]) && (we = R(Y, ne, "left"));
    we !== ne && D(U, we, Y), s(ee), W(U, le);
  }, re = function(ee) {
    var U = ee.target, H = function() {
      var J = U.selectionStart, te = U.selectionEnd, Y = U.value;
      if (Y === void 0 && (Y = ""), J === te) {
        var ne = R(Y, J);
        ne !== J && D(U, ne, Y);
      }
    };
    H(), requestAnimationFrame(function() {
      H();
    }), b(ee), W(U);
  }, X = function(ee) {
    ee.persist && ee.persist();
    var U = ee.target, H = ee.currentTarget;
    $.current = U, K.current.focusTimeout = setTimeout(function() {
      var J = U.selectionStart, te = U.selectionEnd, Y = U.value;
      Y === void 0 && (Y = "");
      var ne = R(Y, J);
      ne !== J && !(J === 0 && te === Y.length) && D(U, ne, Y), v(Object.assign(Object.assign({}, ee), { currentTarget: H }));
    }, 0);
  }, ae = function(ee) {
    $.current = null, clearTimeout(K.current.focusTimeout), clearTimeout(K.current.setCaretTimeout), h(ee);
  }, Q = L && $l() ? "numeric" : void 0, ce = Object.assign({ inputMode: Q }, E, {
    type: t,
    value: N,
    onChange: z,
    onKeyDown: Z,
    onMouseUp: re,
    onFocus: X,
    onBlur: ae
  });
  if (r === "text")
    return o ? fe.createElement(fe.Fragment, null, o(N, E) || null) : fe.createElement("span", Object.assign({}, E, { ref: i }), N);
  if (n) {
    var Oe = n;
    return fe.createElement(Oe, Object.assign({}, ce, { ref: i }));
  }
  return fe.createElement("input", Object.assign({}, ce, { ref: i }));
}
function Zn(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var u = t.allowNegative, c = t.thousandsGroupStyle;
  if (c === void 0 && (c = "thousand"), e === "" || e === "-")
    return e;
  var f = dr(t), p = f.thousandSeparator, d = f.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, a = vn(e, u), s = a.beforeDecimal, b = a.afterDecimal, v = a.addNegation;
  return r !== void 0 && (b = Ri(b, r, !!n)), p && (s = Rl(s, p, c)), o && (s = o + s), i && (b = b + i), v && (s = "-" + s), e = s + (l && d || "") + b, e;
}
function dr(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Gl(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function Hl(e, t) {
  return new RegExp("(^-)|[0-9]|" + Ci(e), "g");
}
function zl(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Wl(e, t, r) {
  var n;
  t === void 0 && (t = Mi(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var u = r.suffix;
  u === void 0 && (u = "");
  var c = r.decimalScale, f = t.from, p = t.to, d = p.start, l = p.end, a = dr(r), s = a.allowedDecimalSeparators, b = a.decimalSeparator, v = e[l] === b;
  if (at(e) && (e === i || e === u) && t.lastValue === "")
    return e;
  if (l - d === 1 && s.indexOf(e[d]) !== -1) {
    var h = c === 0 ? "" : b;
    e = e.substring(0, d) + h + e.substring(d + 1, e.length);
  }
  var m = function($, K, j) {
    var k = !1, D = !1;
    i.startsWith("-") ? k = !1 : $.startsWith("--") ? (k = !1, D = !0) : u.startsWith("-") && $.length === u.length ? k = !1 : $[0] === "-" && (k = !0);
    var R = k ? 1 : 0;
    return D && (R = 2), R && ($ = $.substring(R), K -= R, j -= R), { value: $, start: K, end: j, hasNegation: k };
  }, y = m(e, d, l), _ = y.hasNegation;
  n = y, e = n.value, d = n.start, l = n.end;
  var g = m(t.lastValue, f.start, f.end), E = g.start, A = g.end, S = g.value, N = e.substring(d, l);
  e.length && S.length && (E > S.length - u.length || A < i.length) && !(N && u.startsWith(N)) && (e = S);
  var P = 0;
  e.startsWith(i) ? P += i.length : d < i.length && (P = d), e = e.substring(P), l -= P;
  var w = e.length, x = e.length - u.length;
  e.endsWith(u) ? w = x : (l > x || l > e.length - u.length) && (w = l), e = e.substring(0, w), e = Gl(_ ? "-" + e : e, o), e = (e.match(Hl(b)) || []).join("");
  var O = e.indexOf(b);
  e = e.replace(new RegExp(Ci(b), "g"), function($, K) {
    return K === O ? "." : "";
  });
  var T = vn(e, o), I = T.beforeDecimal, L = T.afterDecimal, B = T.addNegation;
  return p.end - p.start < f.end - f.start && I === "" && v && !parseFloat(L) && (e = B ? "-" : ""), e;
}
function Kl(e, t) {
  var r = t.prefix;
  r === void 0 && (r = "");
  var n = t.suffix;
  n === void 0 && (n = "");
  var o = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), i = e[0] === "-";
  o.fill(!1, 0, r.length + (i ? 1 : 0));
  var u = e.length;
  return o.fill(!1, u - n.length + 1, u + 1), o;
}
function Yl(e) {
  var t = dr(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function Zl(e) {
  e = Yl(e);
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = He);
  var i = e.onBlur;
  i === void 0 && (i = He);
  var u = e.thousandSeparator, c = e.decimalScale, f = e.fixedDecimalScale, p = e.prefix;
  p === void 0 && (p = "");
  var d = e.defaultValue, l = e.value, a = e.valueIsNumericString, s = e.onValueChange, b = hn(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), v = dr(e), h = v.decimalSeparator, m = v.allowedDecimalSeparators, y = function(B) {
    return Zn(B, e);
  }, _ = function(B, $) {
    return Wl(B, $, e);
  }, g = it(l) ? d : l, E = a ?? zl(g, p, t);
  it(l) ? it(d) || (E = E || typeof d == "number") : E = E || typeof l == "number";
  var A = function(B) {
    return Ii(B) ? B : (typeof B == "number" && (B = ki(B)), E && typeof c == "number" ? Yn(B, c, !!f) : B);
  }, S = $i(A(l), A(d), !!E, y, _, s), N = S[0], P = N.numAsString, w = N.formattedValue, x = S[1], O = function(B) {
    var $ = B.target, K = B.key, j = $.selectionStart, k = $.selectionEnd, D = $.value;
    if (D === void 0 && (D = ""), (K === "Backspace" || K === "Delete") && k < p.length) {
      B.preventDefault();
      return;
    }
    if (j !== k) {
      o(B);
      return;
    }
    K === "Backspace" && D[0] === "-" && j === p.length + 1 && r && Ze($, 1), c && f && (K === "Backspace" && D[j - 1] === h ? (Ze($, j - 1), B.preventDefault()) : K === "Delete" && D[j] === h && B.preventDefault()), m != null && m.includes(K) && D[j] === h && Ze($, j + 1);
    var R = u === !0 ? "," : u;
    K === "Backspace" && D[j - 1] === R && Ze($, j - 1), K === "Delete" && D[j] === R && Ze($, j + 1), o(B);
  }, T = function(B) {
    var $ = P;
    if ($.match(/\d/g) || ($ = ""), n || ($ = Ll($)), f && c && ($ = Yn($, c, f)), $ !== P) {
      var K = Zn($, e);
      x({
        formattedValue: K,
        value: $,
        floatValue: parseFloat($)
      }, {
        event: B,
        source: Rt.event
      });
    }
    i(B);
  }, I = function(B) {
    return B === h ? !0 : at(B);
  }, L = function(B) {
    var $ = B.currentValue, K = B.lastValue, j = B.formattedValue, k = B.currentValueIndex, D = B.formattedValueIndex, R = $[k], M = j[D], G = Li(K, $), V = G.to, C = function(q) {
      return _(q).indexOf(".") + p.length;
    };
    return l === 0 && f && c && $[V.start] === h && C($) < k && C(j) > D ? !1 : k >= V.start && k < V.end && m && m.includes(R) && M === h ? !0 : R === M;
  };
  return Object.assign(Object.assign({}, b), {
    value: w,
    valueIsNumericString: !1,
    isValidInputCharacter: I,
    isCharacterSame: L,
    onValueChange: x,
    format: y,
    removeFormatting: _,
    getCaretBoundary: function(B) {
      return Kl(B, e);
    },
    onKeyDown: O,
    onBlur: T
  });
}
function Xl(e) {
  var t = Zl(e);
  return fe.createElement(ji, Object.assign({}, t));
}
function Jl(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var u = 0, c = r.split(""), f = 0, p = r.length; f < p; f++)
    r[f] === i && (c[f] = e[u] || Bi(o, u), u += 1);
  return c.join("");
}
function Ql(e, t, r) {
  t === void 0 && (t = Mi(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, u = t.to, c = t.lastValue;
  c === void 0 && (c = "");
  var f = function(h) {
    return n[h] === o;
  }, p = function(h, m) {
    for (var y = "", _ = 0; _ < h.length; _++)
      f(m + _) && at(h[_]) && (y += h[_]);
    return y;
  }, d = function(h) {
    return h.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return d(e);
  if ((c === "" || i.end - i.start === c.length) && e.length === n.length) {
    for (var l = "", a = 0; a < e.length; a++)
      if (f(a))
        at(e[a]) && (l += e[a]);
      else if (e[a] !== n[a])
        return d(e);
    return l;
  }
  var s = c.substring(0, i.start), b = e.substring(u.start, u.end), v = c.substring(i.end);
  return "" + p(s, 0) + d(b) + p(v, i.end);
}
function es(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), u = 0, c = -1, f = {};
  r.split("").forEach(function(a, s) {
    var b = void 0;
    a === o && (u++, b = Bi(n, u - 1), c === -1 && e[s] === b && (c = s)), f[s] = b;
  });
  for (var p = function(a) {
    return r[a] === o && e[a] !== f[a];
  }, d = 0, l = i.length; d < l; d++)
    i[d] = d === c || p(d) || p(d - 1);
  return i[r.indexOf(o)] = !0, i;
}
function ts(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function rs(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function ns(e) {
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = He);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, u = e.defaultValue, c = e.valueIsNumericString, f = hn(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  ts(e);
  var p = function(b) {
    return es(b, e);
  }, d = function(b) {
    var v = b.key, h = b.target, m = h.selectionStart, y = h.selectionEnd, _ = h.value;
    if (m !== y) {
      n(b);
      return;
    }
    var g = m;
    if (v === "Backspace" || v === "Delete") {
      var E = "right";
      if (v === "Backspace") {
        for (; g > 0 && t[g - 1] !== o; )
          g--;
        E = "left";
      } else {
        for (var A = t.length; g < A && t[g] !== o; )
          g++;
        E = "right";
      }
      g = rr(_, g, p(_), E);
    } else t[g] !== o && v !== "ArrowLeft" && v !== "ArrowRight" && (g = rr(_, g + 1, p(_), "right"));
    g !== m && Ze(h, g), n(b);
  }, l = it(i) ? u : i, a = c ?? rs(l, t), s = Object.assign(Object.assign({}, e), { valueIsNumericString: a });
  return Object.assign(Object.assign({}, f), {
    value: i,
    defaultValue: u,
    valueIsNumericString: a,
    inputMode: r,
    format: function(b) {
      return Jl(b, s);
    },
    removeFormatting: function(b, v) {
      return Ql(b, v, s);
    },
    getCaretBoundary: p,
    onKeyDown: d
  });
}
function os(e) {
  var t = ns(e);
  return fe.createElement(ji, Object.assign({}, t));
}
const is = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, as = ({
  type: e,
  field: t,
  label: r,
  fieldState: n,
  postfix: o,
  labelClassName: i,
  errorPlace: u = "right",
  parentClassName: c,
  className: f,
  formState: p,
  numberWrapperClassname: d,
  format: l,
  decimalScale: a = 1,
  ...s
}) => {
  var v, h, m;
  const b = "!border-danger";
  return /* @__PURE__ */ Ae("label", { className: "relative", children: [
    r && /* @__PURE__ */ oe("span", { className: `text-primary  ${i}`, children: r }),
    l ? /* @__PURE__ */ oe(
      os,
      {
        onValueChange: (y) => {
          var _;
          t == null || t.onChange((_ = y.value.replace("_", "")) == null ? void 0 : _.toString());
        },
        value: (v = t == null ? void 0 : t.value) == null ? void 0 : v.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        style: { fontSize: "16px" },
        className: `${n != null && n.error ? b : ""} w-full border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${f}`,
        format: l,
        ...s
      }
    ) : e === "number" ? /* @__PURE__ */ Ae(
      "div",
      {
        className: `${n != null && n.error ? b : ""} ${c} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ oe(
            Xl,
            {
              decimalScale: a,
              style: { fontSize: "16px" },
              onValueChange: (y) => {
                var _;
                return t == null ? void 0 : t.onChange((_ = y.value.replace("_", "")) == null ? void 0 : _.toString());
              },
              value: (h = t == null ? void 0 : t.value) == null ? void 0 : h.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${f}`,
              ...s,
              ...is.number
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
        className: `${n != null && n.error ? b : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${f}`
      }
    ),
    /* @__PURE__ */ oe("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (n == null ? void 0 : n.error) && ((m = Object.keys(n == null ? void 0 : n.error)) == null ? void 0 : m.length) && /* @__PURE__ */ oe(fr, { error: n == null ? void 0 : n.error }) })
  ] });
}, G0 = as, ls = ({
  children: e,
  className: t
}) => /* @__PURE__ */ oe("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), qi = ls, ss = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Re(null);
  return /* @__PURE__ */ oe(qi, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ oe("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ Ae(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ oe("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ oe("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, H0 = ss, gn = "-", us = (e) => {
  const t = fs(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (u) => {
      const c = u.split(gn);
      return c[0] === "" && c.length !== 1 && c.shift(), Fi(c, t) || cs(u);
    },
    getConflictingClassGroupIds: (u, c) => {
      const f = r[u] || [];
      return c && n[u] ? [...f, ...n[u]] : f;
    }
  };
}, Fi = (e, t) => {
  var u;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Fi(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(gn);
  return (u = t.validators.find(({
    validator: c
  }) => c(i))) == null ? void 0 : u.classGroupId;
}, Xn = /^\[(.+)\]$/, cs = (e) => {
  if (Xn.test(e)) {
    const t = Xn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, fs = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ps(Object.entries(e.classGroups), r).forEach(([i, u]) => {
    Wr(u, n, i, t);
  }), n;
}, Wr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Jn(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ds(o)) {
        Wr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, u]) => {
      Wr(u, Jn(t, i), r, n);
    });
  });
}, Jn = (e, t) => {
  let r = e;
  return t.split(gn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ds = (e) => e.isThemeGetter, ps = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([u, c]) => [t + u, c])) : i);
  return [r, o];
}) : e, hs = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (i, u) => {
    r.set(i, u), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let u = r.get(i);
      if (u !== void 0)
        return u;
      if ((u = n.get(i)) !== void 0)
        return o(i, u), u;
    },
    set(i, u) {
      r.has(i) ? r.set(i, u) : o(i, u);
    }
  };
}, Vi = "!", vs = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], i = t.length, u = (c) => {
    const f = [];
    let p = 0, d = 0, l;
    for (let h = 0; h < c.length; h++) {
      let m = c[h];
      if (p === 0) {
        if (m === o && (n || c.slice(h, h + i) === t)) {
          f.push(c.slice(d, h)), d = h + i;
          continue;
        }
        if (m === "/") {
          l = h;
          continue;
        }
      }
      m === "[" ? p++ : m === "]" && p--;
    }
    const a = f.length === 0 ? c : c.substring(d), s = a.startsWith(Vi), b = s ? a.substring(1) : a, v = l && l > d ? l - d : void 0;
    return {
      modifiers: f,
      hasImportantModifier: s,
      baseClassName: b,
      maybePostfixModifierPosition: v
    };
  };
  return r ? (c) => r({
    className: c,
    parseClassName: u
  }) : u;
}, gs = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, ms = (e) => ({
  cache: hs(e.cacheSize),
  parseClassName: vs(e),
  ...us(e)
}), ys = /\s+/, bs = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], u = e.trim().split(ys);
  let c = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const p = u[f], {
      modifiers: d,
      hasImportantModifier: l,
      baseClassName: a,
      maybePostfixModifierPosition: s
    } = r(p);
    let b = !!s, v = n(b ? a.substring(0, s) : a);
    if (!v) {
      if (!b) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (v = n(a), !v) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const h = gs(d).join(":"), m = l ? h + Vi : h, y = m + v;
    if (i.includes(y))
      continue;
    i.push(y);
    const _ = o(v, b);
    for (let g = 0; g < _.length; ++g) {
      const E = _[g];
      i.push(m + E);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Es() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ui(t)) && (n && (n += " "), n += r);
  return n;
}
const Ui = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ui(e[n])) && (r && (r += " "), r += t);
  return r;
};
function _s(e, ...t) {
  let r, n, o, i = u;
  function u(f) {
    const p = t.reduce((d, l) => l(d), e());
    return r = ms(p), n = r.cache.get, o = r.cache.set, i = c, c(f);
  }
  function c(f) {
    const p = n(f);
    if (p)
      return p;
    const d = bs(f, r);
    return o(f, d), d;
  }
  return function() {
    return i(Es.apply(null, arguments));
  };
}
const Ee = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Gi = /^\[(?:([a-z-]+):)?(.+)\]$/i, xs = /^\d+\/\d+$/, Os = /* @__PURE__ */ new Set(["px", "full", "screen"]), ws = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ns = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ss = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, As = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ds = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ge = (e) => ut(e) || Os.has(e) || xs.test(e), Ke = (e) => pt(e, "length", Ms), ut = (e) => !!e && !Number.isNaN(Number(e)), Ar = (e) => pt(e, "number", ut), xt = (e) => !!e && Number.isInteger(Number(e)), Ts = (e) => e.endsWith("%") && ut(e.slice(0, -1)), ue = (e) => Gi.test(e), Ye = (e) => ws.test(e), Ps = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Is = (e) => pt(e, Ps, Hi), Cs = (e) => pt(e, "position", Hi), Rs = /* @__PURE__ */ new Set(["image", "url"]), ks = (e) => pt(e, Rs, $s), Ls = (e) => pt(e, "", Bs), Ot = () => !0, pt = (e, t, r) => {
  const n = Gi.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Ms = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ns.test(e) && !Ss.test(e)
), Hi = () => !1, Bs = (e) => As.test(e), $s = (e) => Ds.test(e), js = () => {
  const e = Ee("colors"), t = Ee("spacing"), r = Ee("blur"), n = Ee("brightness"), o = Ee("borderColor"), i = Ee("borderRadius"), u = Ee("borderSpacing"), c = Ee("borderWidth"), f = Ee("contrast"), p = Ee("grayscale"), d = Ee("hueRotate"), l = Ee("invert"), a = Ee("gap"), s = Ee("gradientColorStops"), b = Ee("gradientColorStopPositions"), v = Ee("inset"), h = Ee("margin"), m = Ee("opacity"), y = Ee("padding"), _ = Ee("saturate"), g = Ee("scale"), E = Ee("sepia"), A = Ee("skew"), S = Ee("space"), N = Ee("translate"), P = () => ["auto", "contain", "none"], w = () => ["auto", "hidden", "clip", "visible", "scroll"], x = () => ["auto", ue, t], O = () => [ue, t], T = () => ["", Ge, Ke], I = () => ["auto", ut, ue], L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", ue], k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], D = () => [ut, ue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ot],
      spacing: [Ge, Ke],
      blur: ["none", "", Ye, ue],
      brightness: D(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ye, ue],
      borderSpacing: O(),
      borderWidth: T(),
      contrast: D(),
      grayscale: j(),
      hueRotate: D(),
      invert: j(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ts, Ke],
      inset: x(),
      margin: x(),
      opacity: D(),
      padding: O(),
      saturate: D(),
      scale: D(),
      sepia: j(),
      skew: D(),
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
        aspect: ["auto", "square", "video", ue]
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
        object: [...L(), ue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: w()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": w()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": w()
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
        z: ["auto", xt, ue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: x()
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
        flex: ["1", "auto", "initial", "none", ue]
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
        order: ["first", "last", "none", xt, ue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ot]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", xt, ue]
        }, ue]
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
        "grid-rows": [Ot]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [xt, ue]
        }, ue]
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
        "auto-cols": ["auto", "min", "max", "fr", ue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [a]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [a]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [a]
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
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
        "space-x": [S]
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
        "space-y": [S]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ue, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ue, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ue, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ye]
        }, Ye]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ue, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ue, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ar]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ot]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ut, Ar]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ge, ue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ue]
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
        "placeholder-opacity": [m]
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
        "text-opacity": [m]
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
        decoration: ["auto", "from-font", Ge, Ke]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ge, ue]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue]
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
        content: ["none", ue]
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
        "bg-opacity": [m]
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
        bg: [...L(), Cs]
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
        bg: ["auto", "cover", "contain", Is]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ks]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
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
        "border-opacity": [m]
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
        "divide-opacity": [m]
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
        "outline-offset": [Ge, ue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ge, Ke]
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
        "ring-opacity": [m]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ge, Ke]
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
        shadow: ["", "inner", "none", Ye, Ls]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ot]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m]
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
        "drop-shadow": ["", "none", Ye, ue]
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
        "backdrop-opacity": [m]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ue]
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
        ease: ["linear", "in", "out", "in-out", ue]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ue]
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
        scale: [g]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [g]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [g]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [xt, ue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ue]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue]
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
        "will-change": ["auto", "scroll", "contents", "transform", ue]
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
        stroke: [Ge, Ke, Ar]
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
}, qs = /* @__PURE__ */ _s(js);
function zi(e, t) {
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
const Fs = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = Re(!1), [u, c] = Re(""), f = zi(u, 100), p = he(null);
  Se(() => {
    const l = (a) => {
      p.current && !p.current.contains(a.target) && i(!1);
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, []);
  const d = (l) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(l)) && (t == null ? void 0 : t.value.filter((a) => a !== l)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, l] || [l]
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
          className: qs(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && u || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (l) => {
              var a;
              return (a = e.find((s) => s.value === l)) == null ? void 0 : a.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (l) => c(l.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ oe("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(f.toLowerCase())
    ).map((l) => {
      var a;
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
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((a = t == null ? void 0 : t.value) == null ? void 0 : a.includes(l.value)) && "text-primary"}`,
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
}, z0 = Fs, Vs = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, u] = Re(r), c = zi(i, 300);
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
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${n}`
      }
    )
  ] });
}, W0 = Vs, Us = ({
  placeholder: e,
  options: t,
  className: r,
  field: n,
  fieldState: o,
  labelClassName: i,
  parentClassName: u,
  formState: c,
  label: f,
  ...p
}) => {
  var l;
  return /* @__PURE__ */ Ae("label", { className: "relative", children: [
    f && /* @__PURE__ */ oe("span", { className: `text-primary  ${i}`, children: f }),
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
              t == null ? void 0 : t.map((a, s) => /* @__PURE__ */ oe("option", { value: a.value, className: "text-black", children: a.label }, s))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ oe("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((l = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : l.length) && /* @__PURE__ */ oe(fr, { error: o == null ? void 0 : o.error }) })
  ] });
}, K0 = Us;
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(e);
}
function Gs(e, t) {
  if (kt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (kt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hs(e) {
  var t = Gs(e, "string");
  return kt(t) == "symbol" ? t : t + "";
}
function zs(e, t, r) {
  return (t = Hs(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Qn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qn(Object(r), !0).forEach(function(n) {
      zs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ce(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var to = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Dr = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, ro = {
  INIT: "@@redux/INIT" + Dr(),
  REPLACE: "@@redux/REPLACE" + Dr(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Dr();
  }
};
function Ws(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ks(e) {
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
  if (Xs(e)) return "date";
  if (Zs(e)) return "error";
  var r = Ys(e);
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
function Ys(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Zs(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Xs(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function rt(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Ks(e)), t;
}
function Wi(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ce(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ce(1) : "Expected the enhancer to be a function. Instead, received: '" + rt(r) + "'");
    return r(Wi)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ce(2) : "Expected the root reducer to be a function. Instead, received: '" + rt(e) + "'");
  var o = e, i = t, u = [], c = u, f = !1;
  function p() {
    c === u && (c = u.slice());
  }
  function d() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ce(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
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
        var y = c.indexOf(v);
        c.splice(y, 1), u = null;
      }
    };
  }
  function a(v) {
    if (!Ws(v))
      throw new Error(process.env.NODE_ENV === "production" ? Ce(7) : "Actions must be plain objects. Instead, the actual type was: '" + rt(v) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof v.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ce(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Ce(9) : "Reducers may not dispatch actions.");
    try {
      f = !0, i = o(i, v);
    } finally {
      f = !1;
    }
    for (var h = u = c, m = 0; m < h.length; m++) {
      var y = h[m];
      y();
    }
    return v;
  }
  function s(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ce(10) : "Expected the nextReducer to be a function. Instead, received: '" + rt(v));
    o = v, a({
      type: ro.REPLACE
    });
  }
  function b() {
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
      subscribe: function(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ce(11) : "Expected the observer to be an object. Instead, received: '" + rt(y) + "'");
        function _() {
          y.next && y.next(d());
        }
        _();
        var g = h(_);
        return {
          unsubscribe: g
        };
      }
    }, v[to] = function() {
      return this;
    }, v;
  }
  return a({
    type: ro.INIT
  }), n = {
    dispatch: a,
    subscribe: l,
    getState: d,
    replaceReducer: s
  }, n[to] = b, n;
}
function no(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function oo(e, t) {
  if (typeof e == "function")
    return no(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Ce(16) : "bindActionCreators expected an object or a function, but instead received: '" + rt(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = no(o, t));
  }
  return r;
}
function Ki() {
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
function Js() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Ce(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, u = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, c = t.map(function(f) {
        return f(u);
      });
      return i = Ki.apply(void 0, c)(o.dispatch), eo(eo({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Qs(e) {
  e();
}
let eu = Qs;
const tu = () => eu, io = Symbol.for("react-redux-context"), ao = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ru() {
  var e;
  if (!de.createContext) return {};
  const t = (e = ao[io]) != null ? e : ao[io] = /* @__PURE__ */ new Map();
  let r = t.get(de.createContext);
  return r || (r = de.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(de.createContext, r)), r;
}
const Zi = /* @__PURE__ */ ru(), nu = () => {
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
function Xi(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Kr = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function ou() {
  if (lo) return ve;
  lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, a = e ? Symbol.for("react.suspense_list") : 60120, s = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function _(E) {
    if (typeof E == "object" && E !== null) {
      var A = E.$$typeof;
      switch (A) {
        case t:
          switch (E = E.type, E) {
            case f:
            case p:
            case n:
            case i:
            case o:
            case l:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case c:
                case d:
                case b:
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
  function g(E) {
    return _(E) === p;
  }
  return ve.AsyncMode = f, ve.ConcurrentMode = p, ve.ContextConsumer = c, ve.ContextProvider = u, ve.Element = t, ve.ForwardRef = d, ve.Fragment = n, ve.Lazy = b, ve.Memo = s, ve.Portal = r, ve.Profiler = i, ve.StrictMode = o, ve.Suspense = l, ve.isAsyncMode = function(E) {
    return g(E) || _(E) === f;
  }, ve.isConcurrentMode = g, ve.isContextConsumer = function(E) {
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
    return _(E) === b;
  }, ve.isMemo = function(E) {
    return _(E) === s;
  }, ve.isPortal = function(E) {
    return _(E) === r;
  }, ve.isProfiler = function(E) {
    return _(E) === i;
  }, ve.isStrictMode = function(E) {
    return _(E) === o;
  }, ve.isSuspense = function(E) {
    return _(E) === l;
  }, ve.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === p || E === i || E === o || E === l || E === a || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === s || E.$$typeof === u || E.$$typeof === c || E.$$typeof === d || E.$$typeof === h || E.$$typeof === m || E.$$typeof === y || E.$$typeof === v);
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
var so;
function iu() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, a = e ? Symbol.for("react.suspense_list") : 60120, s = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function _(X) {
      return typeof X == "string" || typeof X == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      X === n || X === p || X === i || X === o || X === l || X === a || typeof X == "object" && X !== null && (X.$$typeof === b || X.$$typeof === s || X.$$typeof === u || X.$$typeof === c || X.$$typeof === d || X.$$typeof === h || X.$$typeof === m || X.$$typeof === y || X.$$typeof === v);
    }
    function g(X) {
      if (typeof X == "object" && X !== null) {
        var ae = X.$$typeof;
        switch (ae) {
          case t:
            var Q = X.type;
            switch (Q) {
              case f:
              case p:
              case n:
              case i:
              case o:
              case l:
                return Q;
              default:
                var ce = Q && Q.$$typeof;
                switch (ce) {
                  case c:
                  case d:
                  case b:
                  case s:
                  case u:
                    return ce;
                  default:
                    return ae;
                }
            }
          case r:
            return ae;
        }
      }
    }
    var E = f, A = p, S = c, N = u, P = t, w = d, x = n, O = b, T = s, I = r, L = i, B = o, $ = l, K = !1;
    function j(X) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(X) || g(X) === f;
    }
    function k(X) {
      return g(X) === p;
    }
    function D(X) {
      return g(X) === c;
    }
    function R(X) {
      return g(X) === u;
    }
    function M(X) {
      return typeof X == "object" && X !== null && X.$$typeof === t;
    }
    function G(X) {
      return g(X) === d;
    }
    function V(X) {
      return g(X) === n;
    }
    function C(X) {
      return g(X) === b;
    }
    function q(X) {
      return g(X) === s;
    }
    function W(X) {
      return g(X) === r;
    }
    function z(X) {
      return g(X) === i;
    }
    function Z(X) {
      return g(X) === o;
    }
    function re(X) {
      return g(X) === l;
    }
    ge.AsyncMode = E, ge.ConcurrentMode = A, ge.ContextConsumer = S, ge.ContextProvider = N, ge.Element = P, ge.ForwardRef = w, ge.Fragment = x, ge.Lazy = O, ge.Memo = T, ge.Portal = I, ge.Profiler = L, ge.StrictMode = B, ge.Suspense = $, ge.isAsyncMode = j, ge.isConcurrentMode = k, ge.isContextConsumer = D, ge.isContextProvider = R, ge.isElement = M, ge.isForwardRef = G, ge.isFragment = V, ge.isLazy = C, ge.isMemo = q, ge.isPortal = W, ge.isProfiler = z, ge.isStrictMode = Z, ge.isSuspense = re, ge.isValidElementType = _, ge.typeOf = g;
  }()), ge;
}
process.env.NODE_ENV === "production" ? Kr.exports = ou() : Kr.exports = iu();
var au = Kr.exports, mn = au, lu = {
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
}, su = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, uu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ji = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yn = {};
yn[mn.ForwardRef] = uu;
yn[mn.Memo] = Ji;
function uo(e) {
  return mn.isMemo(e) ? Ji : yn[e.$$typeof] || lu;
}
var cu = Object.defineProperty, fu = Object.getOwnPropertyNames, co = Object.getOwnPropertySymbols, du = Object.getOwnPropertyDescriptor, pu = Object.getPrototypeOf, fo = Object.prototype;
function Qi(e, t, r) {
  if (typeof t != "string") {
    if (fo) {
      var n = pu(t);
      n && n !== fo && Qi(e, n, r);
    }
    var o = fu(t);
    co && (o = o.concat(co(t)));
    for (var i = uo(e), u = uo(t), c = 0; c < o.length; ++c) {
      var f = o[c];
      if (!su[f] && !(r && r[f]) && !(u && u[f]) && !(i && i[f])) {
        var p = du(t, f);
        try {
          cu(e, f, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var hu = Qi;
const po = /* @__PURE__ */ Yi(hu);
var Yr = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function vu() {
  if (ho) return me;
  ho = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), s = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function v(h) {
    if (typeof h == "object" && h !== null) {
      var m = h.$$typeof;
      switch (m) {
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
                case a:
                case l:
                case i:
                  return h;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return me.ContextConsumer = u, me.ContextProvider = i, me.Element = e, me.ForwardRef = f, me.Fragment = r, me.Lazy = a, me.Memo = l, me.Portal = t, me.Profiler = o, me.StrictMode = n, me.Suspense = p, me.SuspenseList = d, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(h) {
    return v(h) === u;
  }, me.isContextProvider = function(h) {
    return v(h) === i;
  }, me.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, me.isForwardRef = function(h) {
    return v(h) === f;
  }, me.isFragment = function(h) {
    return v(h) === r;
  }, me.isLazy = function(h) {
    return v(h) === a;
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
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === p || h === d || h === s || typeof h == "object" && h !== null && (h.$$typeof === a || h.$$typeof === l || h.$$typeof === i || h.$$typeof === u || h.$$typeof === f || h.$$typeof === b || h.getModuleId !== void 0);
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
var vo;
function gu() {
  return vo || (vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), s = Symbol.for("react.offscreen"), b = !1, v = !1, h = !1, m = !1, y = !1, _;
    _ = Symbol.for("react.module.reference");
    function g(Q) {
      return !!(typeof Q == "string" || typeof Q == "function" || Q === r || Q === o || y || Q === n || Q === p || Q === d || m || Q === s || b || v || h || typeof Q == "object" && Q !== null && (Q.$$typeof === a || Q.$$typeof === l || Q.$$typeof === i || Q.$$typeof === u || Q.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Q.$$typeof === _ || Q.getModuleId !== void 0));
    }
    function E(Q) {
      if (typeof Q == "object" && Q !== null) {
        var ce = Q.$$typeof;
        switch (ce) {
          case e:
            var Oe = Q.type;
            switch (Oe) {
              case r:
              case o:
              case n:
              case p:
              case d:
                return Oe;
              default:
                var ee = Oe && Oe.$$typeof;
                switch (ee) {
                  case c:
                  case u:
                  case f:
                  case a:
                  case l:
                  case i:
                    return ee;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var A = u, S = i, N = e, P = f, w = r, x = a, O = l, T = t, I = o, L = n, B = p, $ = d, K = !1, j = !1;
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
      return E(Q) === i;
    }
    function G(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === e;
    }
    function V(Q) {
      return E(Q) === f;
    }
    function C(Q) {
      return E(Q) === r;
    }
    function q(Q) {
      return E(Q) === a;
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
    ye.ContextConsumer = A, ye.ContextProvider = S, ye.Element = N, ye.ForwardRef = P, ye.Fragment = w, ye.Lazy = x, ye.Memo = O, ye.Portal = T, ye.Profiler = I, ye.StrictMode = L, ye.Suspense = B, ye.SuspenseList = $, ye.isAsyncMode = k, ye.isConcurrentMode = D, ye.isContextConsumer = R, ye.isContextProvider = M, ye.isElement = G, ye.isForwardRef = V, ye.isFragment = C, ye.isLazy = q, ye.isMemo = W, ye.isPortal = z, ye.isProfiler = Z, ye.isStrictMode = re, ye.isSuspense = X, ye.isSuspenseList = ae, ye.isValidElementType = g, ye.typeOf = E;
  }()), ye;
}
process.env.NODE_ENV === "production" ? Yr.exports = vu() : Yr.exports = gu();
var go = Yr.exports;
function bn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Tr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || bn(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function mu(e, t, r) {
  Tr(e, "mapStateToProps"), Tr(t, "mapDispatchToProps"), Tr(r, "mergeProps");
}
const yu = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function bu(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: u
}) {
  let c = !1, f, p, d, l, a;
  function s(y, _) {
    return f = y, p = _, d = e(f, p), l = t(n, p), a = r(d, l, p), c = !0, a;
  }
  function b() {
    return d = e(f, p), t.dependsOnOwnProps && (l = t(n, p)), a = r(d, l, p), a;
  }
  function v() {
    return e.dependsOnOwnProps && (d = e(f, p)), t.dependsOnOwnProps && (l = t(n, p)), a = r(d, l, p), a;
  }
  function h() {
    const y = e(f, p), _ = !u(y, d);
    return d = y, _ && (a = r(d, l, p)), a;
  }
  function m(y, _) {
    const g = !i(_, p), E = !o(y, f, _, p);
    return f = y, p = _, g && E ? b() : g ? v() : E ? h() : a;
  }
  return function(_, g) {
    return c ? m(_, g) : s(_, g);
  };
}
function Eu(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Xi(t, yu);
  const u = r(e, i), c = n(e, i), f = o(e, i);
  return process.env.NODE_ENV !== "production" && mu(u, c, f), bu(u, c, f, e, i);
}
function _u(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function xu(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function ea(e, t, r) {
  xu(e) || bn(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Zr(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function mo(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ta(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(c, f) {
      return i.dependsOnOwnProps ? i.mapToProps(c, f) : i.mapToProps(c, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(c, f) {
      i.mapToProps = e, i.dependsOnOwnProps = mo(e);
      let p = i(c, f);
      return typeof p == "function" && (i.mapToProps = p, i.dependsOnOwnProps = mo(p), p = i(c, f)), process.env.NODE_ENV !== "production" && ea(p, o, t), p;
    }, i;
  };
}
function En(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Ou(e) {
  return e && typeof e == "object" ? Zr((t) => (
    // @ts-ignore
    _u(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ta(e, "mapDispatchToProps")
  ) : En(e, "mapDispatchToProps") : Zr((t) => ({
    dispatch: t
  }));
}
function wu(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ta(e, "mapStateToProps")
  ) : En(e, "mapStateToProps") : Zr(() => ({}));
}
function Nu(e, t, r) {
  return Xe({}, r, e, t);
}
function Su(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, u;
    return function(f, p, d) {
      const l = e(f, p, d);
      return i ? o(l, u) || (u = l) : (i = !0, u = l, process.env.NODE_ENV !== "production" && ea(u, n, "mergeProps")), u;
    };
  };
}
function Au(e) {
  return e ? typeof e == "function" ? Su(e) : En(e, "mergeProps") : () => Nu;
}
function Du() {
  const e = tu();
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
const yo = {
  notify() {
  },
  get: () => []
};
function ra(e, t) {
  let r, n = yo, o = 0, i = !1;
  function u(v) {
    d();
    const h = n.subscribe(v);
    let m = !1;
    return () => {
      m || (m = !0, h(), l());
    };
  }
  function c() {
    n.notify();
  }
  function f() {
    b.onStateChange && b.onStateChange();
  }
  function p() {
    return i;
  }
  function d() {
    o++, r || (r = t ? t.addNestedSub(f) : e.subscribe(f), n = Du());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = yo);
  }
  function a() {
    i || (i = !0, d());
  }
  function s() {
    i && (i = !1, l());
  }
  const b = {
    addNestedSub: u,
    notifyNestedSubs: c,
    handleChangeWrapper: f,
    isSubscribed: p,
    trySubscribe: a,
    tryUnsubscribe: s,
    getListeners: () => n
  };
  return b;
}
const Tu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", nr = Tu ? de.useLayoutEffect : de.useEffect;
function bo(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Pr(e, t) {
  if (bo(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !bo(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const Pu = ["reactReduxForwardedRef"];
let Iu = nu;
const Cu = [null, null], Ru = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function ku(e, t, r) {
  nr(() => e(...t), r);
}
function Lu(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Mu(e, t, r, n, o, i, u, c, f, p, d) {
  if (!e) return () => {
  };
  let l = !1, a = null;
  const s = () => {
    if (l || !c.current)
      return;
    const v = t.getState();
    let h, m;
    try {
      h = n(v, o.current);
    } catch (y) {
      m = y, a = y;
    }
    m || (a = null), h === i.current ? u.current || p() : (i.current = h, f.current = h, u.current = !0, d());
  };
  return r.onStateChange = s, r.trySubscribe(), s(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, a)
      throw a;
  };
}
function Bu(e, t) {
  return e === t;
}
let Eo = !1;
function na(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Bu,
  areOwnPropsEqual: i = Pr,
  areStatePropsEqual: u = Pr,
  areMergedPropsEqual: c = Pr,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: f = !1,
  // the context consumer to use
  context: p = Zi
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Eo && (Eo = !0, bn('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const d = p, l = wu(e), a = Ou(t), s = Au(r), b = !!e;
  return (h) => {
    if (process.env.NODE_ENV !== "production" && !go.isValidElementType(h))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Ru(h)}`);
    const m = h.displayName || h.name || "Component", y = `Connect(${m})`, _ = {
      shouldHandleStateChanges: b,
      displayName: y,
      wrappedComponentName: m,
      WrappedComponent: h,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: a,
      initMergeProps: s,
      areStatesEqual: o,
      areStatePropsEqual: u,
      areOwnPropsEqual: i,
      areMergedPropsEqual: c
    };
    function g(S) {
      const [N, P, w] = de.useMemo(() => {
        const {
          reactReduxForwardedRef: X
        } = S, ae = Xi(S, Pu);
        return [S.context, X, ae];
      }, [S]), x = de.useMemo(() => N && N.Consumer && // @ts-ignore
      go.isContextConsumer(/* @__PURE__ */ de.createElement(N.Consumer, null)) ? N : d, [N, d]), O = de.useContext(x), T = !!S.store && !!S.store.getState && !!S.store.dispatch, I = !!O && !!O.store;
      if (process.env.NODE_ENV !== "production" && !T && !I)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const L = T ? S.store : O.store, B = I ? O.getServerState : L.getState, $ = de.useMemo(() => Eu(L.dispatch, _), [L]), [K, j] = de.useMemo(() => {
        if (!b) return Cu;
        const X = ra(L, T ? void 0 : O.subscription), ae = X.notifyNestedSubs.bind(X);
        return [X, ae];
      }, [L, T, O]), k = de.useMemo(() => T ? O : Xe({}, O, {
        subscription: K
      }), [T, O, K]), D = de.useRef(), R = de.useRef(w), M = de.useRef(), G = de.useRef(!1);
      de.useRef(!1);
      const V = de.useRef(!1), C = de.useRef();
      nr(() => (V.current = !0, () => {
        V.current = !1;
      }), []);
      const q = de.useMemo(() => () => M.current && w === R.current ? M.current : $(L.getState(), w), [L, w]), W = de.useMemo(() => (ae) => K ? Mu(
        b,
        L,
        K,
        // @ts-ignore
        $,
        R,
        D,
        G,
        V,
        M,
        j,
        ae
      ) : () => {
      }, [K]);
      ku(Lu, [R, D, G, w, M, j]);
      let z;
      try {
        z = Iu(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          W,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          q,
          B ? () => $(B(), w) : q
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
      return de.useMemo(() => b ? /* @__PURE__ */ de.createElement(x.Provider, {
        value: k
      }, Z) : Z, [x, Z, k]);
    }
    const A = de.memo(g);
    if (A.WrappedComponent = h, A.displayName = g.displayName = y, f) {
      const N = de.forwardRef(function(w, x) {
        return /* @__PURE__ */ de.createElement(A, Xe({}, w, {
          reactReduxForwardedRef: x
        }));
      });
      return N.displayName = y, N.WrappedComponent = h, po(N, h);
    }
    return po(A, h);
  };
}
function $u({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const u = de.useMemo(() => {
    const p = ra(e);
    return {
      store: e,
      subscription: p,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), c = de.useMemo(() => e.getState(), [e]);
  nr(() => {
    const {
      subscription: p
    } = u;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), c !== e.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [u, c]);
  const f = t || Zi;
  return /* @__PURE__ */ de.createElement(f.Provider, {
    value: u
  }, r);
}
function ju(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function oa(e, t) {
  var r = Re(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = he(!0), o = he(r), i = n.current || !!(t && o.current.inputs && ju(t, o.current.inputs)), u = i ? o.current : {
    inputs: t,
    result: e()
  };
  return Se(function() {
    n.current = !1, o.current = u;
  }, [u]), u.result;
}
function qu(e, t) {
  return oa(function() {
    return e;
  }, t);
}
var pe = oa, ie = qu, Fu = process.env.NODE_ENV === "production", Ir = "Invariant failed";
function _o(e, t) {
  if (Fu)
    throw new Error(Ir);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Ir, ": ").concat(r) : Ir;
  throw new Error(n);
}
var Ve = function(t) {
  var r = t.top, n = t.right, o = t.bottom, i = t.left, u = n - i, c = o - r, f = {
    top: r,
    right: n,
    bottom: o,
    left: i,
    width: u,
    height: c,
    x: i,
    y: r,
    center: {
      x: (n + i) / 2,
      y: (o + r) / 2
    }
  };
  return f;
}, _n = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, xo = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Vu = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Cr = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, xn = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Cr : n, i = t.border, u = i === void 0 ? Cr : i, c = t.padding, f = c === void 0 ? Cr : c, p = Ve(_n(r, o)), d = Ve(xo(r, u)), l = Ve(xo(d, f));
  return {
    marginBox: p,
    borderBox: Ve(r),
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? _o(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : _o()), o;
}, Uu = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, or = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, u = t.padding, c = Vu(n, r);
  return xn({
    borderBox: c,
    border: o,
    margin: i,
    padding: u
  });
}, ir = function(t, r) {
  return r === void 0 && (r = Uu()), or(t, r);
}, ia = function(t, r) {
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
  }, i = {
    top: je(r.borderTopWidth),
    right: je(r.borderRightWidth),
    bottom: je(r.borderBottomWidth),
    left: je(r.borderLeftWidth)
  };
  return xn({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, aa = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return ia(r, n);
}, Oo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Gu(e, t) {
  return !!(e === t || Oo(e) && Oo(t));
}
function Hu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Gu(e[r], t[r]))
      return !1;
  return !0;
}
function De(e, t) {
  t === void 0 && (t = Hu);
  var r = null;
  function n() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
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
const zu = process.env.NODE_ENV === "production", Wu = /[ \t]{2,}/g, Ku = /^[ \t]*/gm, wo = (e) => e.replace(Wu, " ").replace(Ku, "").trim(), Yu = (e) => wo(`
  %c@hello-pangea/dnd

  %c${wo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Zu = (e) => [Yu(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Xu = "__@hello-pangea/dnd-disable-dev-warnings";
function la(e, t) {
  zu || typeof window < "u" && window[Xu] || console[e](...Zu(t));
}
const be = la.bind(null, "warn"), Xr = la.bind(null, "error");
function Je() {
}
function Ju(e, t) {
  return {
    ...e,
    ...t
  };
}
function qe(e, t, r) {
  const n = t.map((o) => {
    const i = Ju(r, o.options);
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
const Qu = process.env.NODE_ENV === "production", No = "Invariant failed";
class Mt extends Error {
}
Mt.prototype.toString = function() {
  return this.message;
};
function F(e, t) {
  throw Qu ? new Mt(No) : new Mt(`${No}: ${t || ""}`);
}
class ec extends fe.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Je, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && be(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Mt && (r.preventDefault(), process.env.NODE_ENV !== "production" && Xr(o.message));
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
      process.env.NODE_ENV !== "production" && Xr(t.message), this.setState({});
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
const tc = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, ar = (e) => e + 1, rc = (e) => `
  You have lifted an item in position ${ar(e.source.index)}
`, sa = (e, t) => {
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
}, ua = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, nc = (e) => {
  const t = e.destination;
  if (t)
    return sa(e.source, t);
  const r = e.combine;
  return r ? ua(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, So = (e) => `
  The item has returned to its starting position
  of ${ar(e.index)}
`, oc = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${So(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${sa(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${ua(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${So(e.source)}
  `;
}, ic = {
  dragHandleUsageInstructions: tc,
  onDragStart: rc,
  onDragUpdate: nc,
  onDragEnd: oc
};
var tr = ic;
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
}, Bt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Ao = (e, t) => Math.min(...t.map((r) => Bt(e, r))), ca = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var ac = (e, t) => {
  const r = Ve({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Gt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Do = (e) => [{
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
}], lc = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, sc = (e, t) => t ? Gt(e, t.scroll.diff.displacement) : e, uc = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, cc = (e, t) => t && t.shouldClipSubject ? ac(t.pageMarginBox, e) : Ve(e);
var ct = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = sc(e.marginBox, n), i = uc(o, r, t), u = cc(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: u
  };
}, On = (e, t) => {
  e.frame || (process.env.NODE_ENV, F());
  const r = e.frame, n = Me(t, r.scroll.initial), o = ht(n), i = {
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
    frame: i
  });
  return {
    ...e,
    frame: i,
    subject: u
  };
};
const fa = De((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), da = De((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), pr = De((e) => Object.values(e)), fc = De((e) => Object.values(e));
var st = De((e, t) => fc(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function wn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function hr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var vr = De((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), dc = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !wn(o))
    return null;
  function u(s) {
    const b = {
      type: "COMBINE",
      combine: {
        draggableId: s,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: b
    };
  }
  const c = o.displaced.all, f = c.length ? c[0] : null;
  if (e)
    return f ? u(f) : null;
  const p = vr(t, n);
  if (!f) {
    if (!p.length)
      return null;
    const s = p[p.length - 1];
    return u(s.descriptor.id);
  }
  const d = p.findIndex((s) => s.descriptor.id === f);
  d === -1 && (process.env.NODE_ENV !== "production" ? F(!1, "Could not find displaced item in set") : F());
  const l = d - 1;
  if (l < 0)
    return null;
  const a = p[l];
  return u(a.descriptor.id);
}, vt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const pa = {
  point: Te,
  value: 0
}, $t = {
  invisible: {},
  visible: {},
  all: []
}, pc = {
  displaced: $t,
  displacedBy: pa,
  at: null
};
var hc = pc, Fe = (e, t) => (r) => e <= r && r <= t, ha = (e) => {
  const t = Fe(e.top, e.bottom), r = Fe(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), u = r(n.left) || r(n.right);
    if (i && u)
      return !0;
    const f = n.top < e.top && n.bottom > e.bottom, p = n.left < e.left && n.right > e.right;
    return f && p ? !0 : f && u || p && i;
  };
}, vc = (e) => {
  const t = Fe(e.top, e.bottom), r = Fe(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Nn = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, va = {
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
var gc = (e) => (t) => {
  const r = Fe(t.top, t.bottom), n = Fe(t.left, t.right);
  return (o) => e === Nn ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const mc = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Te;
  return Gt(e, r);
}, yc = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, bc = (e, t, r) => r(t)(e), Sn = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? mc(e, t) : e;
  return yc(i, t, o) && bc(i, r, o);
}, Ec = (e) => Sn({
  ...e,
  isVisibleThroughFrameFn: ha
}), ga = (e) => Sn({
  ...e,
  isVisibleThroughFrameFn: vc
}), _c = (e) => Sn({
  ...e,
  isVisibleThroughFrameFn: gc(e.destination.axis)
}), xc = (e, t, r) => {
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
function Oc(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Ve(_n(r, n));
}
function jt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(c, f) {
    const p = Oc(f, r), d = f.descriptor.id;
    if (c.all.push(d), !Ec({
      target: p,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return c.invisible[f.descriptor.id] = !0, c;
    const a = xc(d, i, o), s = {
      draggableId: d,
      shouldAnimate: a
    };
    return c.visible[d] = s, c;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function wc(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function To({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = wc(e, {
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
  last: i,
  index: u,
  forceShouldAnimate: c
}) {
  const f = vt(e, r);
  if (u == null)
    return To({
      insideDestination: t,
      inHomeList: f,
      displacedBy: o,
      destination: r
    });
  const p = t.find((b) => b.descriptor.index === u);
  if (!p)
    return To({
      insideDestination: t,
      inHomeList: f,
      displacedBy: o,
      destination: r
    });
  const d = vr(e, t), l = t.indexOf(p), a = d.slice(l);
  return {
    displaced: jt({
      afterDragging: a,
      destination: r,
      displacedBy: o,
      last: i,
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
var Nc = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, c = r[i].descriptor.index;
  return et(i, o) ? e ? c : c - 1 : e ? c + 1 : c;
}, Sc = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, u = r[0].descriptor.index, c = r[r.length - 1].descriptor.index, f = t ? c : c + 1;
  return i < u || i > f ? null : i;
}, Ac = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: n,
  destination: o,
  insideDestination: i,
  previousImpact: u,
  viewport: c,
  afterCritical: f
}) => {
  const p = u.at;
  if (p || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot move in direction without previous impact location") : F()), p.type === "REORDER") {
    const l = Sc({
      isMovingForward: e,
      isInHomeList: t,
      location: p.destination,
      insideDestination: i
    });
    return l == null ? null : lr({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: c,
      last: u.displaced,
      displacedBy: u.displacedBy,
      index: l
    });
  }
  const d = Nc({
    isMovingForward: e,
    destination: o,
    displaced: u.displaced,
    draggables: n,
    combine: p.combine,
    afterCritical: f
  });
  return d == null ? null : lr({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: c,
    last: u.displaced,
    displacedBy: u.displacedBy,
    index: d
  });
}, Dc = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return et(r, t) ? o ? Te : ht(n.point) : o ? n.point : Te;
}, Tc = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = hr(t);
  n || (process.env.NODE_ENV, F());
  const o = n.draggableId, i = r[o].page.borderBox.center, u = Dc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Pe(i, u);
};
const ma = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Pc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, An = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Po = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => lt(e.line, t.marginBox[e.end] + ma(e, r), An(e, t.marginBox, r)), Io = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => lt(e.line, t.marginBox[e.start] - Pc(e, r), An(e, t.marginBox, r)), Ic = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => lt(e.line, t.contentBox[e.start] + ma(e, r), An(e, t.contentBox, r));
var Cc = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = st(n.descriptor.id, r), u = t.page, c = n.axis;
  if (!i.length)
    return Ic({
      axis: c,
      moveInto: n.page,
      isMoving: u
    });
  const {
    displaced: f,
    displacedBy: p
  } = e, d = f.all[0];
  if (d) {
    const a = r[d];
    if (et(d, o))
      return Io({
        axis: c,
        moveRelativeTo: a.page,
        isMoving: u
      });
    const s = or(a.page, p.point);
    return Io({
      axis: c,
      moveRelativeTo: s,
      isMoving: u
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return u.borderBox.center;
  if (et(l.descriptor.id, o)) {
    const a = or(l.page, ht(o.displacedBy.point));
    return Po({
      axis: c,
      moveRelativeTo: a,
      isMoving: u
    });
  }
  return Po({
    axis: c,
    moveRelativeTo: l.page,
    isMoving: u
  });
}, Jr = (e, t) => {
  const r = e.frame;
  return r ? Pe(t, r.scroll.diff.displacement) : t;
};
const Rc = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, u = e.at;
  return !r || !u ? i : u.type === "REORDER" ? Cc({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : Tc({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var gr = (e) => {
  const t = Rc(e), r = e.droppable;
  return r ? Jr(r, t) : t;
}, ya = (e, t) => {
  const r = Me(t, e.scroll.initial), n = ht(r);
  return {
    frame: Ve({
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
function Co(e, t) {
  return e.map((r) => t[r]);
}
function kc(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Lc = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = ya(t, Pe(t.scroll.current, o)), u = r.frame ? On(r, Pe(r.frame.scroll.current, o)) : r, c = e.displaced, f = jt({
    afterDragging: Co(c.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: c,
    forceShouldAnimate: !1
  }), p = jt({
    afterDragging: Co(c.all, n),
    destination: u,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: c,
    forceShouldAnimate: !1
  }), d = {}, l = {}, a = [c, f, p];
  return c.all.forEach((b) => {
    const v = kc(b, a);
    if (v) {
      l[b] = v;
      return;
    }
    d[b] = !0;
  }), {
    ...e,
    displaced: {
      all: c.all,
      invisible: d,
      visible: l
    }
  };
}, Mc = (e, t) => Pe(e.scroll.diff.displacement, t), Dn = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Mc(r, e), o = Me(n, t.page.borderBox.center);
  return Pe(t.client.borderBox.center, o);
}, ba = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const u = Me(r, e.page.borderBox.center), f = {
    target: Gt(e.page.borderBox, u),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? _c(f) : ga(f);
}, Bc = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: n,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: u,
  previousClientSelection: c,
  afterCritical: f
}) => {
  if (!r.isEnabled)
    return null;
  const p = st(r.descriptor.id, n), d = vt(t, r), l = dc({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: p,
    previousImpact: o
  }) || Ac({
    isMovingForward: e,
    isInHomeList: d,
    draggable: t,
    draggables: n,
    destination: r,
    insideDestination: p,
    previousImpact: o,
    viewport: i,
    afterCritical: f
  });
  if (!l)
    return null;
  const a = gr({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: f
  });
  if (ba({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: a,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Dn({
        pageBorderBoxCenter: a,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const b = Me(a, u), v = Lc({
    impact: l,
    viewport: i,
    destination: r,
    draggables: n,
    maxScrollChange: b
  });
  return {
    clientSelection: c,
    impact: v,
    scrollJumpRequest: b
  };
};
const Ie = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot get clipped area from droppable") : F()), t;
};
var $c = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const u = r.axis, c = Fe(i[u.start], i[u.end]), f = pr(n).filter((d) => d !== r).filter((d) => d.isEnabled).filter((d) => !!d.subject.active).filter((d) => ha(o.frame)(Ie(d))).filter((d) => {
    const l = Ie(d);
    return e ? i[u.crossAxisEnd] < l[u.crossAxisEnd] : l[u.crossAxisStart] < i[u.crossAxisStart];
  }).filter((d) => {
    const l = Ie(d), a = Fe(l[u.start], l[u.end]);
    return c(l[u.start]) || c(l[u.end]) || a(i[u.start]) || a(i[u.end]);
  }).sort((d, l) => {
    const a = Ie(d)[u.crossAxisStart], s = Ie(l)[u.crossAxisStart];
    return e ? a - s : s - a;
  }).filter((d, l, a) => Ie(d)[u.crossAxisStart] === Ie(a[0])[u.crossAxisStart]);
  if (!f.length)
    return null;
  if (f.length === 1)
    return f[0];
  const p = f.filter((d) => Fe(Ie(d)[u.start], Ie(d)[u.end])(t[u.line]));
  return p.length === 1 ? p[0] : p.length > 1 ? p.sort((d, l) => Ie(d)[u.start] - Ie(l)[u.start])[0] : f.sort((d, l) => {
    const a = Ao(t, Do(Ie(d))), s = Ao(t, Do(Ie(l)));
    return a !== s ? a - s : Ie(d)[u.start] - Ie(l)[u.start];
  })[0];
};
const Ro = (e, t) => {
  const r = e.page.borderBox.center;
  return et(e.descriptor.id, t) ? Me(r, t.displacedBy.point) : r;
}, jc = (e, t) => {
  const r = e.page.borderBox;
  return et(e.descriptor.id, t) ? Gt(r, ht(t.displacedBy.point)) : r;
};
var qc = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((u) => ga({
  target: jc(u, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((u, c) => {
  const f = Bt(e, Jr(r, Ro(u, o))), p = Bt(e, Jr(r, Ro(c, o)));
  return f < p ? -1 : p < f ? 1 : u.descriptor.index - c.descriptor.index;
})[0] || null, Ht = De(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: lt(t.line, n)
  };
});
const Fc = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return lt(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], f = st(e.descriptor.id, r).reduce((p, d) => p + d.client.marginBox[n.size], 0) + t[n.line] - o;
  return f <= 0 ? null : lt(n.line, f);
}, Ea = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), _a = (e, t, r) => {
  const n = e.frame;
  vt(t, e) && (process.env.NODE_ENV !== "production" ? F(!1, "Should not add placeholder space to home list") : F()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot add placeholder size to a subject when it already has one") : F());
  const o = Ht(e.axis, t.displaceBy).point, i = Fc(e, o, r), u = {
    placeholderSize: o,
    increasedBy: i,
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
  const c = i ? Pe(n.scroll.max, i) : n.scroll.max, f = Ea(n, c), p = ct({
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
}, Vc = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot remove placeholder form subject when there was none") : F());
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
  n || (process.env.NODE_ENV !== "production" ? F(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : F());
  const o = Ea(r, n), i = ct({
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
var Uc = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: r,
  draggable: n,
  draggables: o,
  destination: i,
  viewport: u,
  afterCritical: c
}) => {
  if (!t) {
    if (r.length)
      return null;
    const l = {
      displaced: $t,
      displacedBy: pa,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, a = gr({
      impact: l,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: c
    }), s = vt(n, i) ? i : _a(i, n, o);
    return ba({
      draggable: n,
      destination: s,
      newPageBorderBoxCenter: a,
      viewport: u.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const f = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], p = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || f ? l : l + 1;
  })(), d = Ht(i.axis, n.displaceBy);
  return lr({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: u,
    displacedBy: d,
    last: $t,
    index: p
  });
}, Gc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: u,
  afterCritical: c
}) => {
  const f = $c({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: u
  });
  if (!f)
    return null;
  const p = st(f.descriptor.id, o), d = qc({
    pageBorderBoxCenter: t,
    viewport: u,
    destination: f,
    insideDestination: p,
    afterCritical: c
  }), l = Uc({
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
  const a = gr({
    impact: l,
    draggable: r,
    droppable: f,
    draggables: o,
    afterCritical: c
  });
  return {
    clientSelection: Dn({
      pageBorderBoxCenter: a,
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
const Hc = (e, t) => {
  const r = Be(e);
  return r ? t[r] : null;
};
var zc = ({
  state: e,
  type: t
}) => {
  const r = Hc(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, u = i.axis.direction, c = u === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || u === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (c && !n)
    return null;
  const f = t === "MOVE_DOWN" || t === "MOVE_RIGHT", p = e.dimensions.draggables[e.critical.draggable.id], d = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: a
  } = e.dimensions;
  return c ? Bc({
    isMovingForward: f,
    previousPageBorderBoxCenter: d,
    draggable: p,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Gc({
    isMovingForward: f,
    previousPageBorderBoxCenter: d,
    draggable: p,
    isOver: i,
    draggables: l,
    droppables: a,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function nt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function xa(e) {
  const t = Fe(e.top, e.bottom), r = Fe(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Wc(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Kc({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const u = i.axis, c = lt(i.axis.line, e.center[u.line], i.page.borderBox.center[u.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Bt(n, c)
    };
  }).sort((i, u) => u.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Yc({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = pr(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Wc(e, i))
      return !1;
    if (xa(i)(e.center))
      return !0;
    const u = o.axis, c = i.center[u.crossAxisLine], f = e[u.crossAxisStart], p = e[u.crossAxisEnd], d = Fe(i[u.crossAxisStart], i[u.crossAxisEnd]), l = d(f), a = d(p);
    return !l && !a ? !0 : l ? f < c : p > c;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Kc({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Oa = (e, t) => Ve(Gt(e, t));
var Zc = (e, t) => {
  const r = e.frame;
  return r ? Oa(t, r.scroll.diff.value) : t;
};
function wa({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Xc({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Jc = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: u
}) => {
  const c = r.axis, f = Ht(r.axis, t.displaceBy), p = f.value, d = e[c.start], l = e[c.end], s = vr(t, n).find((v) => {
    const h = v.descriptor.id, m = v.page.borderBox.center[c.line], y = et(h, u), _ = wa({
      displaced: o,
      id: h
    });
    return y ? _ ? l <= m : d < m - p : _ ? l <= m + p : d < m;
  }) || null, b = Xc({
    draggable: t,
    closest: s,
    inHomeList: vt(t, r)
  });
  return lr({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: f,
    index: b
  });
};
const Qc = 4;
var ef = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const u = n.axis, c = Ht(n.axis, e.displaceBy), f = c.value, p = t[u.start], d = t[u.end], a = vr(e, o).find((b) => {
    const v = b.descriptor.id, h = b.page.borderBox, y = h[u.size] / Qc, _ = et(v, i), g = wa({
      displaced: r.displaced,
      id: v
    });
    return _ ? g ? d > h[u.start] + y && d < h[u.end] - y : p > h[u.start] - f + y && p < h[u.end] - f - y : g ? d > h[u.start] + f + y && d < h[u.end] + f - y : p > h[u.start] + y && p < h[u.end] - y;
  });
  return a ? {
    displacedBy: c,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: a.descriptor.id,
        droppableId: n.descriptor.id
      }
    }
  } : null;
}, Na = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: u
}) => {
  const c = Oa(t.page.borderBox, e), f = Yc({
    pageBorderBox: c,
    draggable: t,
    droppables: n
  });
  if (!f)
    return hc;
  const p = n[f], d = st(p.descriptor.id, r), l = Zc(p, c);
  return ef({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: p,
    insideDestination: d,
    afterCritical: u
  }) || Jc({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: p,
    insideDestination: d,
    last: o.displaced,
    viewport: i,
    afterCritical: u
  });
}, Tn = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const tf = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = Be(e), o = Be(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const u = Vc(i);
  return Tn(r, u);
};
var rf = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = tf({
    previousImpact: n,
    impact: o,
    droppables: r
  }), u = Be(o);
  if (!u)
    return i;
  const c = r[u];
  if (vt(e, c) || c.subject.withPlaceholder)
    return i;
  const f = _a(c, e, t);
  return Tn(i, f);
}, Tt = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const u = n || e.viewport, c = r || e.dimensions, f = t || e.current.client.selection, p = Me(f, e.initial.client.selection), d = {
    offset: p,
    selection: f,
    borderBoxCenter: Pe(e.initial.client.borderBoxCenter, p)
  }, l = {
    selection: Pe(d.selection, u.scroll.current),
    borderBoxCenter: Pe(d.borderBoxCenter, u.scroll.current),
    offset: Pe(d.offset, u.scroll.diff.value)
  }, a = {
    client: d,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: c,
      viewport: u,
      current: a
    };
  const s = c.draggables[e.critical.draggable.id], b = o || Na({
    pageOffset: l.offset,
    draggable: s,
    draggables: c.draggables,
    droppables: c.droppables,
    previousImpact: e.impact,
    viewport: u,
    afterCritical: e.afterCritical
  }), v = rf({
    draggable: s,
    impact: b,
    previousImpact: e.impact,
    draggables: c.draggables,
    droppables: c.droppables
  });
  return {
    ...e,
    current: a,
    dimensions: {
      draggables: c.draggables,
      droppables: v
    },
    impact: b,
    viewport: u,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function nf(e, t) {
  return e.map((r) => t[r]);
}
var Sa = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, u = nf(i.all, r), c = jt({
    afterDragging: u,
    destination: n,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return {
    ...e,
    displaced: c
  };
}, Aa = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const u = gr({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Dn({
    pageBorderBoxCenter: u,
    draggable: t,
    viewport: o
  });
}, Da = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, F());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: u,
    droppables: c
  } = i, f = u[e.critical.draggable.id], p = Be(n);
  p || (process.env.NODE_ENV !== "production" ? F(!1, "Must be over a destination in SNAP movement mode") : F());
  const d = c[p], l = Sa({
    impact: n,
    viewport: o,
    destination: d,
    draggables: u
  }), a = Aa({
    impact: l,
    draggable: f,
    droppable: d,
    draggables: u,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Tt({
    impact: l,
    clientSelection: a,
    state: e,
    dimensions: i,
    viewport: o
  });
}, of = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Ta = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Ht(t.axis, e.displaceBy), i = st(t.descriptor.id, r), u = i.indexOf(e);
  u === -1 && (process.env.NODE_ENV !== "production" ? F(!1, "Expected draggable to be inside home list") : F());
  const c = i.slice(u + 1), f = c.reduce((a, s) => (a[s.descriptor.id] = !0, a), {}), p = {
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
        destination: of(e.descriptor)
      }
    },
    afterCritical: p
  };
}, af = (e, t) => ({
  draggables: e.draggables,
  droppables: Tn(e.droppables, t)
});
const zt = (e) => {
  process.env.NODE_ENV;
}, Wt = (e) => {
  process.env.NODE_ENV;
};
var lf = ({
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
}, sf = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? F(!1, "Expected Droppable to have a frame") : F()), t;
}, uf = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, u = t[i], f = sf(u).scroll.diff.value, p = Pe(n, f);
    return lf({
      draggable: o,
      offset: p,
      initialWindowScroll: r.scroll.initial
    });
  });
}, cf = ({
  state: e,
  published: t
}) => {
  zt();
  const r = t.modified.map((m) => {
    const y = e.dimensions.droppables[m.droppableId];
    return On(y, m.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...fa(r)
  }, o = da(uf({
    additions: t.additions,
    updatedDroppables: n,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((m) => {
    delete i[m];
  });
  const u = {
    droppables: n,
    draggables: i
  }, c = Be(e.impact), f = c ? u.droppables[c] : null, p = u.draggables[e.critical.draggable.id], d = u.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: a
  } = Ta({
    draggable: p,
    home: d,
    draggables: i,
    viewport: e.viewport
  }), s = f && f.isCombineEnabled ? e.impact : l, b = Na({
    pageOffset: e.current.page.offset,
    draggable: u.draggables[e.critical.draggable.id],
    draggables: u.draggables,
    droppables: u.droppables,
    previousImpact: s,
    viewport: e.viewport,
    afterCritical: a
  });
  Wt();
  const v = {
    ...e,
    phase: "DRAGGING",
    impact: b,
    onLiftImpact: l,
    dimensions: u,
    afterCritical: a,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? v : {
    ...v,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Qr = (e) => e.movementMode === "SNAP", Rr = (e, t, r) => {
  const n = af(e.dimensions, t);
  return !Qr(e) || r ? Tt({
    state: e,
    dimensions: n
  }) : Da({
    state: e,
    dimensions: n
  });
};
function kr(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ko = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var ff = (e = ko, t) => {
  if (t.type === "FLUSH")
    return {
      ...ko,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? F(!1, "INITIAL_PUBLISH must come after a IDLE phase") : F());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: u
    } = t.payload, c = i.draggables[r.draggable.id], f = i.droppables[r.droppable.id], p = {
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
    }, l = pr(i.droppables).every((v) => !v.isFixedOnPage), {
      impact: a,
      afterCritical: s
    } = Ta({
      draggable: c,
      home: f,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: r,
      movementMode: u,
      dimensions: i,
      initial: d,
      current: d,
      isWindowScrollAllowed: l,
      impact: a,
      afterCritical: s,
      onLiftImpact: a,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? F(!1, `Collection cannot start from phase ${e.phase}`) : F()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? F(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : F()), cf({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    nt(e) || (process.env.NODE_ENV !== "production" ? F(!1, `${t.type} not permitted in phase ${e.phase}`) : F());
    const {
      client: r
    } = t.payload;
    return Qe(r, e.current.client.selection) ? e : Tt({
      state: e,
      clientSelection: r,
      impact: Qr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return kr(e);
    nt(e) || (process.env.NODE_ENV !== "production" ? F(!1, `${t.type} not permitted in phase ${e.phase}`) : F());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = On(o, n);
    return Rr(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    nt(e) || (process.env.NODE_ENV !== "production" ? F(!1, `Attempting to move in an unsupported phase ${e.phase}`) : F());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : F()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? F(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : F());
    const i = {
      ...o,
      isEnabled: n
    };
    return Rr(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    nt(e) || (process.env.NODE_ENV !== "production" ? F(!1, `Attempting to move in an unsupported phase ${e.phase}`) : F());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : F()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? F(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : F());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return Rr(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    nt(e) || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot move by window in phase ${e.phase}`) : F()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? F(!1, "Window scrolling is currently not supported for fixed lists") : F());
    const r = t.payload.newScroll;
    if (Qe(e.viewport.scroll.current, r))
      return kr(e);
    const n = ya(e.viewport, r);
    return Qr(e) ? Da({
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? F(!1, `${t.type} received while not in DRAGGING phase`) : F());
    const r = zc({
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
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? F(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : F()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot animate drop from phase ${e.phase}`) : F()), {
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
const df = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), pf = (e) => ({
  type: "LIFT",
  payload: e
}), hf = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), vf = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), gf = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), mf = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), yf = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), bf = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Pa = (e) => ({
  type: "MOVE",
  payload: e
}), Ef = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), _f = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), xf = () => ({
  type: "MOVE_UP",
  payload: null
}), Of = () => ({
  type: "MOVE_DOWN",
  payload: null
}), wf = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Nf = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Pn = () => ({
  type: "FLUSH",
  payload: null
}), Sf = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), In = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Ia = (e) => ({
  type: "DROP",
  payload: e
}), Af = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ca = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Df(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), r = {};
  for (let o = 1; o < t.length; o++) {
    const i = t[o], u = t[o - 1];
    i !== u + 1 && (r[i] = !0);
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
function Tf(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = st(e.droppable.id, t.draggables);
    Df(r);
  }
}
var Pf = (e) => ({
  getState: t,
  dispatch: r
}) => (n) => (o) => {
  if (o.type !== "LIFT") {
    n(o);
    return;
  }
  const {
    id: i,
    clientSelection: u,
    movementMode: c
  } = o.payload, f = t();
  f.phase === "DROP_ANIMATING" && r(In({
    completed: f.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? F(!1, "Unexpected phase to start a drag") : F()), r(Pn()), r(df({
    draggableId: i,
    movementMode: c
  }));
  const d = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: c === "SNAP"
    }
  }, {
    critical: l,
    dimensions: a,
    viewport: s
  } = e.startPublishing(d);
  Tf(l, a), r(hf({
    critical: l,
    dimensions: a,
    clientSelection: u,
    movementMode: c,
    viewport: s
  }));
}, If = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Cn = {
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
}, Ra = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, tt = `${Ra.outOfTheWay}s ${Cn.outOfTheWay}`, Pt = {
  fluid: `opacity ${tt}`,
  snap: `transform ${tt}, opacity ${tt}`,
  drop: (e) => {
    const t = `${e}s ${Cn.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${tt}`,
  placeholder: `height ${tt}, width ${tt}, margin ${tt}`
}, Lo = (e) => Qe(e, Te) ? void 0 : `translate(${e.x}px, ${e.y}px)`, en = {
  moveTo: Lo,
  drop: (e, t) => {
    const r = Lo(e);
    if (r)
      return t ? `${r} scale(${qt.scale.drop})` : r;
  }
}, {
  minDropTime: tn,
  maxDropTime: ka
} = Ra, Cf = ka - tn, Mo = 1500, Rf = 0.6;
var kf = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Bt(e, t);
  if (n <= 0)
    return tn;
  if (n >= Mo)
    return ka;
  const o = n / Mo, i = tn + Cf * o, u = r === "CANCEL" ? i * Rf : i;
  return Number(u.toFixed(2));
}, Lf = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: u
  } = r, c = Be(e), f = c ? u[c] : null, p = u[t.descriptor.droppableId], d = Aa({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: f || p,
    viewport: n
  });
  return Me(d, t.client.borderBox.center);
}, Mf = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Sa({
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
    displaced: $t
  },
  didDropInsideDroppable: !0
};
const Bf = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Af({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? F(!1, "A DROP action occurred while DROP_PENDING and still waiting") : F()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot drop in phase: ${o.phase}`) : F());
  const c = o.critical, f = o.dimensions, p = f.draggables[o.critical.draggable.id], {
    impact: d,
    didDropInsideDroppable: l
  } = Mf({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), a = l ? wn(d) : null, s = l ? hr(d) : null, b = {
    index: c.draggable.index,
    droppableId: c.droppable.id
  }, v = {
    draggableId: p.descriptor.id,
    type: p.descriptor.type,
    source: b,
    reason: i,
    mode: o.movementMode,
    destination: a,
    combine: s
  }, h = Lf({
    impact: d,
    draggable: p,
    dimensions: f,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), m = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: v,
    impact: d
  };
  if (!(!Qe(o.current.client.offset, h) || !!v.combine)) {
    t(In({
      completed: m
    }));
    return;
  }
  const _ = kf({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(Sf({
    newHomeClientOffset: h,
    dropDuration: _,
    completed: m
  }));
};
var $f = Bf, La = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function jf(e) {
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
function qf({
  onWindowScroll: e
}) {
  function t() {
    e(La());
  }
  const r = Lt(t), n = jf(r);
  let o = Je;
  function i() {
    return o !== Je;
  }
  function u() {
    i() && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot start scroll listener when already active") : F()), o = qe(window, [n]);
  }
  function c() {
    i() || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot stop scroll listener when not active") : F()), r.cancel(), o(), o = Je;
  }
  return {
    start: u,
    stop: c,
    isActive: i
  };
}
const Ff = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Vf = (e) => {
  const t = qf({
    onWindowScroll: (r) => {
      e.dispatch(Ef({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Ff(n) && t.stop(), r(n);
  };
};
var Uf = Vf, Gf = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
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
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Hf = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((c) => c.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? F(!1, "Could not find timer") : F());
    const [u] = e.splice(i, 1);
    u.callback();
  };
  return {
    add: (o) => {
      const i = setTimeout(() => t(i)), u = {
        timerId: i,
        callback: o
      };
      e.push(u);
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
const zf = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Wf = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Kf = (e, t) => {
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
function Lr(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Gf(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Yf = (e, t) => {
  const r = Hf();
  let n = null;
  const o = (l, a) => {
    n && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : F()), wt("onBeforeCapture", () => {
      const s = e().onBeforeCapture;
      s && s({
        draggableId: l,
        mode: a
      });
    });
  }, i = (l, a) => {
    n && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : F()), wt("onBeforeDragStart", () => {
      const s = e().onBeforeDragStart;
      s && s(Zt(l, a));
    });
  }, u = (l, a) => {
    n && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : F());
    const s = Zt(l, a);
    n = {
      mode: a,
      lastCritical: l,
      lastLocation: s.source,
      lastCombine: null
    }, r.add(() => {
      wt("onDragStart", () => Lr(e().onDragStart, s, t, tr.onDragStart));
    });
  }, c = (l, a) => {
    const s = wn(a), b = hr(a);
    n || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot fire onDragMove when onDragStart has not been called") : F());
    const v = !Kf(l, n.lastCritical);
    v && (n.lastCritical = l);
    const h = !zf(n.lastLocation, s);
    h && (n.lastLocation = s);
    const m = !Wf(n.lastCombine, b);
    if (m && (n.lastCombine = b), !v && !h && !m)
      return;
    const y = {
      ...Zt(l, n.mode),
      combine: b,
      destination: s
    };
    r.add(() => {
      wt("onDragUpdate", () => Lr(e().onDragUpdate, y, t, tr.onDragUpdate));
    });
  }, f = () => {
    n || (process.env.NODE_ENV !== "production" ? F(!1, "Can only flush responders while dragging") : F()), r.flush();
  }, p = (l) => {
    n || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : F()), n = null, wt("onDragEnd", () => Lr(e().onDragEnd, l, t, tr.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
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
}, Zf = (e, t) => {
  const r = Yf(e, t);
  return (n) => (o) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      r.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const c = i.payload.critical;
      r.beforeStart(c, i.payload.movementMode), o(i), r.start(c, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const c = i.payload.completed.result;
      r.flush(), o(i), r.drop(c);
      return;
    }
    if (o(i), i.type === "FLUSH") {
      r.abort();
      return;
    }
    const u = n.getState();
    u.phase === "DRAGGING" && r.update(u.critical, u.impact);
  };
};
const Xf = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot finish a drop animating when no drop is occurring") : F()), e.dispatch(In({
    completed: n.completed
  }));
};
var Jf = Xf;
const Qf = (e) => {
  let t = null, r = null;
  function n() {
    r && (cancelAnimationFrame(r), r = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && n(), o(i), i.type !== "DROP_ANIMATE")
      return;
    const u = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ca());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = qe(window, [u]);
    });
  };
};
var ed = Qf, td = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, rd = (e) => {
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
const nd = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var od = (e) => (t) => (r) => (n) => {
  if (nd(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? F(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : F()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const id = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Ia({
    reason: n.reason
  })));
};
var ad = id;
const ld = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Ki;
var sd = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => Wi(ff, ld(Js(If(r), td(e), Pf(e), $f, Jf, ed, ad, od(i), Uf, rd(t), Zf(n, o))));
const Mr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function ud({
  registry: e,
  callbacks: t
}) {
  let r = Mr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, zt();
      const {
        additions: f,
        removals: p,
        modified: d
      } = r, l = Object.keys(f).map((b) => e.draggable.getById(b).getDimension(Te)).sort((b, v) => b.descriptor.index - v.descriptor.index), a = Object.keys(d).map((b) => {
        const h = e.droppable.getById(b).callbacks.getScrollWhileDragging();
        return {
          droppableId: b,
          scroll: h
        };
      }), s = {
        additions: l,
        removals: Object.keys(p),
        modified: a
      };
      r = Mr(), Wt(), t.publish(s);
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
      n && (cancelAnimationFrame(n), n = null, r = Mr());
    }
  };
}
var Ma = ({
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
}, Ba = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot find document.documentElement") : F()), e;
}, $a = () => {
  const e = Ba();
  return Ma({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, cd = () => {
  const e = La(), t = $a(), r = e.y, n = e.x, o = Ba(), i = o.clientWidth, u = o.clientHeight, c = n + i, f = r + u;
  return {
    frame: Ve({
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
}, fd = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  zt();
  const n = cd(), o = n.scroll.current, i = e.droppable, u = r.droppable.getAllByType(i.type).map((d) => d.callbacks.getDimensionAndWatchScroll(o, t)), c = r.draggable.getAllByType(e.draggable.type).map((d) => d.getDimension(o)), f = {
    draggables: da(c),
    droppables: fa(u)
  };
  return Wt(), {
    dimensions: f,
    critical: e,
    viewport: n
  };
};
function Bo(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && be(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var dd = (e, t) => {
  let r = null;
  const n = ud({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (a, s) => {
    e.droppable.exists(a) || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot update is enabled flag of Droppable ${a} as it is not registered`) : F()), r && t.updateDroppableIsEnabled({
      id: a,
      isEnabled: s
    });
  }, i = (a, s) => {
    r && (e.droppable.exists(a) || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot update isCombineEnabled flag of Droppable ${a} as it is not registered`) : F()), t.updateDroppableIsCombineEnabled({
      id: a,
      isCombineEnabled: s
    }));
  }, u = (a, s) => {
    r && (e.droppable.exists(a) || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot update the scroll on Droppable ${a} as it is not registered`) : F()), t.updateDroppableScroll({
      id: a,
      newScroll: s
    }));
  }, c = (a, s) => {
    r && e.droppable.getById(a).callbacks.scroll(s);
  }, f = () => {
    if (!r)
      return;
    n.stop();
    const a = r.critical.droppable;
    e.droppable.getAllByType(a.type).forEach((s) => s.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, p = (a) => {
    r || (process.env.NODE_ENV !== "production" ? F(!1, "Should only be subscribed when a collection is occurring") : F());
    const s = r.critical.draggable;
    a.type === "ADDITION" && Bo(e, s, a.value) && n.add(a.value), a.type === "REMOVAL" && Bo(e, s, a.value) && n.remove(a.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: c,
    updateDroppableScroll: u,
    startPublishing: (a) => {
      r && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot start capturing critical dimensions as there is already a collection") : F());
      const s = e.draggable.getById(a.draggableId), b = e.droppable.getById(s.descriptor.droppableId), v = {
        draggable: s.descriptor,
        droppable: b.descriptor
      }, h = e.subscribe(p);
      return r = {
        critical: v,
        unsubscribe: h
      }, fd({
        critical: v,
        registry: e,
        scrollOptions: a.scrollOptions
      });
    },
    stopPublishing: f
  };
}, ja = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", pd = (e) => {
  window.scrollBy(e.x, e.y);
};
const hd = De((e) => pr(e).filter((t) => !(!t.isEnabled || !t.frame))), vd = (e, t) => hd(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? F(!1, "Invalid result") : F()), xa(n.frame.pageMarginBox)(e))) || null;
var gd = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return vd(e, r);
};
const Ft = {
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
var md = (e, t, r = () => Ft) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, qa = ({
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
}, Rn = 1, yd = (e, t, r = () => Ft) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Rn;
  const i = 1 - qa({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), u = n.maxPixelScroll * n.ease(i);
  return Math.ceil(u);
}, bd = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, u = t, c = i, p = Date.now() - u;
  if (p >= i)
    return e;
  if (p < o)
    return Rn;
  const d = qa({
    startOfRange: o,
    endOfRange: c,
    current: p
  }), l = e * n.ease(d);
  return Math.ceil(l);
}, $o = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = yd(e, t, o);
  return i === 0 ? 0 : n ? Math.max(bd(i, r, o), Rn) : i;
}, jo = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const u = md(e, n, i);
  return t[n.end] < t[n.start] ? $o({
    distanceToEdge: t[n.end],
    thresholds: u,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * $o({
    distanceToEdge: t[n.start],
    thresholds: u,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Ed = ({
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
const _d = ca((e) => e === 0 ? 0 : e);
var Fa = ({
  dragStartTime: e,
  container: t,
  subject: r,
  center: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const u = {
    top: n.y - t.top,
    right: t.right - n.x,
    bottom: t.bottom - n.y,
    left: n.x - t.left
  }, c = jo({
    container: t,
    distanceToEdges: u,
    dragStartTime: e,
    axis: Nn,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), f = jo({
    container: t,
    distanceToEdges: u,
    dragStartTime: e,
    axis: va,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), p = _d({
    x: f,
    y: c
  });
  if (Qe(p, Te))
    return null;
  const d = Ed({
    container: t,
    subject: r,
    proposedScroll: p
  });
  return d ? Qe(d, Te) ? null : d : null;
};
const xd = ca((e) => e === 0 ? 0 : e > 0 ? 1 : -1), kn = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = Pe(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return Qe(i, Te) ? null : i;
  };
})(), Va = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = xd(r), i = kn({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Ln = (e, t) => Va({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Od = (e, t) => {
  if (!Ln(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return kn({
    current: n,
    max: r,
    change: t
  });
}, Mn = (e, t) => {
  const r = e.frame;
  return r ? Va({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, wd = (e, t) => {
  const r = e.frame;
  return !r || !Mn(e, t) ? null : kn({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var Nd = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const u = Fa({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return u && Ln(e, u) ? u : null;
}, Sd = ({
  droppable: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const u = e.frame;
  if (!u)
    return null;
  const c = Fa({
    dragStartTime: n,
    container: u.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return c && Mn(e, c) ? c : null;
}, qo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const u = e.current.page.borderBoxCenter, f = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, a = Nd({
      dragStartTime: t,
      viewport: l,
      subject: f,
      center: u,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (a) {
      n(a);
      return;
    }
  }
  const p = gd({
    center: u,
    destination: Be(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!p)
    return;
  const d = Sd({
    dragStartTime: t,
    droppable: p,
    subject: f,
    center: u,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  d && o(p.descriptor.id, d);
}, Ad = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Ft
}) => {
  const n = Lt(e), o = Lt(t);
  let i = null;
  const u = (p) => {
    i || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot fluid scroll if not dragging") : F());
    const {
      shouldUseTimeDampening: d,
      dragStartTime: l
    } = i;
    qo({
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
      zt(), i && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot start auto scrolling when already started") : F());
      const d = Date.now();
      let l = !1;
      const a = () => {
        l = !0;
      };
      qo({
        state: p,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: a,
        scrollDroppable: a,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: d,
        shouldUseTimeDampening: l
      }, Wt(), l && u(p);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: u
  };
}, Dd = ({
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
    if (!Mn(c, f))
      return f;
    const p = wd(c, f);
    if (!p)
      return t(c.descriptor.id, f), null;
    const d = Me(f, p);
    return t(c.descriptor.id, d), Me(f, d);
  }, i = (c, f, p) => {
    if (!c || !Ln(f, p))
      return p;
    const d = Od(f, p);
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
    p || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot perform a jump scroll when there is no destination") : F());
    const d = o(c.dimensions.droppables[p], f);
    if (!d)
      return;
    const l = c.viewport, a = i(c.isWindowScrollAllowed, l, d);
    a && n(c, a);
  };
}, Td = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = Ad({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = Dd({
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
        f.scrollJumpRequest && i(f);
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
})(), rn = (() => {
  const e = `${ft}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Pd = (() => {
  const e = `${ft}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Fo = {
  contextId: `${ft}-scroll-container-context-id`
}, Id = (e) => (t) => `[${t}="${e}"]`, Nt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), Cd = "pointer-events: none;";
var Rd = (e) => {
  const t = Id(e), r = (() => {
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
        dragging: Cd,
        dropAnimating: c
      }
    };
  })(), n = (() => {
    const c = `
      transition: ${Pt.outOfTheWay};
    `;
    return {
      selector: t(rn.contextId),
      styles: {
        dragging: c,
        dropAnimating: c,
        userCancel: c
      }
    };
  })(), o = {
    selector: t(Pd.contextId),
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
const kd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Ai : Se;
var $e = kd;
const Br = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot find the head to append a style to") : F()), e;
}, Vo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Ld(e, t) {
  const r = pe(() => Rd(e), [e]), n = he(null), o = he(null), i = ie(De((l) => {
    const a = o.current;
    a || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot set dynamic style element if it is not set") : F()), a.textContent = l;
  }), []), u = ie((l) => {
    const a = n.current;
    a || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot set dynamic style element if it is not set") : F()), a.textContent = l;
  }, []);
  $e(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? F(!1, "style elements already mounted") : F());
    const l = Vo(t), a = Vo(t);
    return n.current = l, o.current = a, l.setAttribute(`${ft}-always`, e), a.setAttribute(`${ft}-dynamic`, e), Br().appendChild(l), Br().appendChild(a), u(r.always), i(r.resting), () => {
      const s = (b) => {
        const v = b.current;
        v || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot unmount ref as it is not set") : F()), Br().removeChild(v), b.current = null;
      };
      s(n), s(o);
    };
  }, [t, u, i, r.always, r.resting, e]);
  const c = ie(() => i(r.dragging), [i, r.dragging]), f = ie((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), p = ie(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return pe(() => ({
    dragging: c,
    dropping: f,
    resting: p
  }), [c, f, p]);
}
function Ua(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Ga = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Kt(e) {
  return e instanceof Ga(e).HTMLElement;
}
function Ha(e, t) {
  const r = `[${dt.contextId}="${e}"]`, n = Ua(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && be(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(dt.draggableId) === t);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && be("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && be(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Md(e) {
  const t = he({}), r = he(null), n = he(null), o = he(!1), i = ie(function(a, s) {
    const b = {
      id: a,
      focus: s
    };
    return t.current[a] = b, function() {
      const h = t.current;
      h[a] !== b && delete h[a];
    };
  }, []), u = ie(function(a) {
    const s = Ha(e, a);
    s && s !== document.activeElement && s.focus();
  }, [e]), c = ie(function(a, s) {
    r.current === a && (r.current = s);
  }, []), f = ie(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const a = r.current;
      a && u(a);
    }));
  }, [u]), p = ie(function(a) {
    r.current = null;
    const s = document.activeElement;
    s && s.getAttribute(dt.draggableId) === a && (r.current = a);
  }, []);
  return $e(() => (o.current = !0, function() {
    o.current = !1;
    const a = n.current;
    a && cancelAnimationFrame(a);
  }), []), pe(() => ({
    register: i,
    tryRecordFocus: p,
    tryRestoreFocusRecorded: f,
    tryShiftRecord: c
  }), [i, p, f, c]);
}
function Bd() {
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
    t.length && t.forEach((a) => a(l));
  }
  function o(l) {
    return e.draggables[l] || null;
  }
  function i(l) {
    const a = o(l);
    return a || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot find draggable entry with id [${l}]`) : F()), a;
  }
  const u = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, n({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, a) => {
      const s = e.draggables[a.descriptor.id];
      s && s.uniqueId === l.uniqueId && (delete e.draggables[a.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const a = l.descriptor.id, s = o(a);
      s && l.uniqueId === s.uniqueId && (delete e.draggables[a], e.droppables[l.descriptor.droppableId] && n({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: i,
    findById: o,
    exists: (l) => !!o(l),
    getAllByType: (l) => Object.values(e.draggables).filter((a) => a.descriptor.type === l)
  };
  function c(l) {
    return e.droppables[l] || null;
  }
  function f(l) {
    const a = c(l);
    return a || (process.env.NODE_ENV !== "production" ? F(!1, `Cannot find droppable entry with id [${l}]`) : F()), a;
  }
  const p = {
    register: (l) => {
      e.droppables[l.descriptor.id] = l;
    },
    unregister: (l) => {
      const a = c(l.descriptor.id);
      a && l.uniqueId === a.uniqueId && delete e.droppables[l.descriptor.id];
    },
    getById: f,
    findById: c,
    exists: (l) => !!c(l),
    getAllByType: (l) => Object.values(e.droppables).filter((a) => a.descriptor.type === l)
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
function $d() {
  const e = pe(Bd, []);
  return Se(() => function() {
    fe.version.startsWith("16") || fe.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Bn = fe.createContext(null), Vt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot find document.body") : F()), e;
};
const jd = {
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
var qd = jd;
const Fd = (e) => `rfd-announcement-${e}`;
function Vd(e) {
  const t = pe(() => Fd(e), [e]), r = he(null);
  return Se(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Xe(i.style, qd), Vt().appendChild(i), function() {
      setTimeout(function() {
        const f = Vt();
        f.contains(i) && f.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), ie((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
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
let Ud = 0;
const za = {
  separator: "::"
};
function Gd(e, t = za) {
  return pe(() => `${e}${t.separator}${Ud++}`, [t.separator, e]);
}
function Hd(e, t = za) {
  const r = fe.useId();
  return pe(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var $n = "useId" in fe ? Hd : Gd;
function zd({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Wd({
  contextId: e,
  text: t
}) {
  const r = $n("hidden-text", {
    separator: "-"
  }), n = pe(() => zd({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return Se(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", Vt().appendChild(i), function() {
      const c = Vt();
      c.contains(i) && c.removeChild(i);
    };
  }, [n, t]), n;
}
var mr = fe.createContext(null), Kd = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Yd = /(\d+)\.(\d+)\.(\d+)/, Uo = (e) => {
  const t = Yd.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? F(!1, `Unable to parse React version ${e}`) : F());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Zd = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Xd = (e, t) => {
  const r = Uo(e), n = Uo(t);
  Zd(r, n) || process.env.NODE_ENV !== "production" && be(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const $r = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Jd = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && be(`
      No <!doctype html> found.

      ${$r}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && be(`
      Unexpected <!doctype> found: (${t.name})

      ${$r}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && be(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${$r}
    `);
};
function jn(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Yt(e, t) {
  jn(() => {
    Se(() => {
      try {
        e();
      } catch (r) {
        Xr(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Qd() {
  Yt(() => {
    Xd(Kd.react, fe.version), Jd(document);
  }, []);
}
function qn(e) {
  const t = he(e);
  return Se(() => {
    t.current = e;
  }), t;
}
function ep() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(u) {
    return u === e;
  }
  function n(u) {
    e && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot claim lock as it is already claimed") : F());
    const c = {
      abandon: u
    };
    return e = c, c;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot release lock when there is no lock") : F()), e = null;
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
function Ut(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const tp = 9, rp = 13, Fn = 27, Wa = 32, np = 33, op = 34, ip = 35, ap = 36, lp = 37, sp = 38, up = 39, cp = 40, fp = {
  [rp]: !0,
  [tp]: !0
};
var Ka = (e) => {
  fp[e.keyCode] && e.preventDefault();
};
const dp = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var yr = dp;
const Ya = 0, Go = 5;
function pp(e, t) {
  return Math.abs(t.x - e.x) >= Go || Math.abs(t.y - e.y) >= Go;
}
const Ho = {
  type: "IDLE"
};
function hp({
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
        clientX: u,
        clientY: c
      } = o;
      if (i !== Ya)
        return;
      const f = {
        x: u,
        y: c
      }, p = r();
      if (p.type === "DRAGGING") {
        o.preventDefault(), p.actions.move(f);
        return;
      }
      p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot be IDLE") : F());
      const d = p.point;
      if (!pp(d, f))
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
      if (o.keyCode === Fn) {
        o.preventDefault(), e();
        return;
      }
      Ka(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? F(!1, "Unexpected phase") : F()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: yr,
    fn: e
  }];
}
function vp(e) {
  const t = he(Ho), r = he(Je), n = pe(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Ya || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const a = e.findClosestDraggableId(l);
      if (!a)
        return;
      const s = e.tryGetLock(a, u, {
        sourceEvent: l
      });
      if (!s)
        return;
      l.preventDefault();
      const b = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), p(s, b);
    }
  }), [e]), o = pe(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (d) => {
      if (d.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(d);
      if (!l)
        return;
      const a = e.findOptionsForDraggable(l);
      a && (a.shouldRespectForcePress || e.canGetLock(l) && d.preventDefault());
    }
  }), [e]), i = ie(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = qe(window, [o, n], l);
  }, [o, n]), u = ie(() => {
    t.current.type !== "IDLE" && (t.current = Ho, r.current(), i());
  }, [i]), c = ie(() => {
    const d = t.current;
    u(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [u]), f = ie(function() {
    const l = {
      capture: !0,
      passive: !1
    }, a = hp({
      cancel: c,
      completed: u,
      getPhase: () => t.current,
      setPhase: (s) => {
        t.current = s;
      }
    });
    r.current = qe(window, a, l);
  }, [c, u]), p = ie(function(l, a) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? F(!1, "Expected to move from IDLE to PENDING drag") : F()), t.current = {
      type: "PENDING",
      point: a,
      actions: l
    }, f();
  }, [f]);
  $e(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function gp() {
}
const mp = {
  [op]: !0,
  [np]: !0,
  [ap]: !0,
  [ip]: !0
};
function yp(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Fn) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Wa) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === cp) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === sp) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === up) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === lp) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (mp[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Ka(o);
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
    eventName: yr,
    fn: r
  }];
}
function bp(e) {
  const t = he(gp), r = pe(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Wa)
        return;
      const u = e.findClosestDraggableId(i);
      if (!u)
        return;
      const c = e.tryGetLock(u, d, {
        sourceEvent: i
      });
      if (!c)
        return;
      i.preventDefault();
      let f = !0;
      const p = c.snapLift();
      t.current();
      function d() {
        f || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot stop capturing a keyboard drag when not capturing") : F()), f = !1, t.current(), n();
      }
      t.current = qe(window, yp(p, d), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = ie(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = qe(window, [r], i);
  }, [r]);
  $e(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const jr = {
  type: "IDLE"
}, Ep = 120, _p = 0.15;
function xp({
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
      r.keyCode === Fn && r.preventDefault(), e();
    }
  }, {
    eventName: yr,
    fn: e
  }];
}
function Op({
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
        clientY: u
      } = n.touches[0], c = {
        x: i,
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
      o.type === "IDLE" && (process.env.NODE_ENV, F());
      const i = n.touches[0];
      if (!i || !(i.force >= _p))
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
    eventName: yr,
    fn: e
  }];
}
function wp(e) {
  const t = he(jr), r = he(Je), n = ie(function() {
    return t.current;
  }, []), o = ie(function(s) {
    t.current = s;
  }, []), i = pe(() => ({
    eventName: "touchstart",
    fn: function(s) {
      if (s.defaultPrevented)
        return;
      const b = e.findClosestDraggableId(s);
      if (!b)
        return;
      const v = e.tryGetLock(b, c, {
        sourceEvent: s
      });
      if (!v)
        return;
      const h = s.touches[0], {
        clientX: m,
        clientY: y
      } = h, _ = {
        x: m,
        y
      };
      r.current(), l(v, _);
    }
  }), [e]), u = ie(function() {
    const s = {
      capture: !0,
      passive: !1
    };
    r.current = qe(window, [i], s);
  }, [i]), c = ie(() => {
    const a = t.current;
    a.type !== "IDLE" && (a.type === "PENDING" && clearTimeout(a.longPressTimerId), o(jr), r.current(), u());
  }, [u, o]), f = ie(() => {
    const a = t.current;
    c(), a.type === "DRAGGING" && a.actions.cancel({
      shouldBlockNextClick: !0
    }), a.type === "PENDING" && a.actions.abort();
  }, [c]), p = ie(function() {
    const s = {
      capture: !0,
      passive: !1
    }, b = {
      cancel: f,
      completed: c,
      getPhase: n
    }, v = qe(window, Op(b), s), h = qe(window, xp(b), s);
    r.current = function() {
      v(), h();
    };
  }, [f, n, c]), d = ie(function() {
    const s = n();
    s.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? F(!1, `Cannot start dragging from phase ${s.type}`) : F());
    const b = s.actions.fluidLift(s.point);
    o({
      type: "DRAGGING",
      actions: b,
      hasMoved: !1
    });
  }, [n, o]), l = ie(function(s, b) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? F(!1, "Expected to move from IDLE to PENDING drag") : F());
    const v = setTimeout(d, Ep);
    o({
      type: "PENDING",
      point: b,
      actions: s,
      longPressTimerId: v
    }), p();
  }, [p, n, o, d]);
  $e(function() {
    return u(), function() {
      r.current();
      const b = n();
      b.type === "PENDING" && (clearTimeout(b.longPressTimerId), o(jr));
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
function Np(e) {
  jn(() => {
    const t = qn(e);
    Yt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot change the amount of sensor hooks after mounting") : F(!1));
    });
  });
}
const Sp = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Za(e, t) {
  if (t == null)
    return !1;
  if (Sp.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Za(e, t.parentElement);
}
function Ap(e, t) {
  const r = t.target;
  return Kt(r) ? Za(e, r) : !1;
}
var Dp = (e) => Ve(e.getBoundingClientRect()).center;
function Tp(e) {
  return e instanceof Ga(e).Element;
}
const Pp = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Xa(e, t) {
  return e == null ? null : e[Pp](t) ? e : Xa(e.parentElement, t);
}
function Ip(e, t) {
  return e.closest ? e.closest(t) : Xa(e, t);
}
function Cp(e) {
  return `[${dt.contextId}="${e}"]`;
}
function Rp(e, t) {
  const r = t.target;
  if (!Tp(r))
    return process.env.NODE_ENV !== "production" && be("event.target must be a Element"), null;
  const n = Cp(e), o = Ip(r, n);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && be("drag handle must be a HTMLElement"), null) : null;
}
function kp(e, t) {
  const r = Rp(e, t);
  return r ? r.getAttribute(dt.draggableId) : null;
}
function Lp(e, t) {
  const r = `[${rn.contextId}="${e}"]`, o = Ua(document, r).find((i) => i.getAttribute(rn.id) === t);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && be("Draggable element is not a HTMLElement"), null) : null;
}
function Mp(e) {
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
function Ja({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !ja(t.getState(), n)) : (process.env.NODE_ENV !== "production" && be(`Unable to find draggable with id: ${n}`), !1);
}
function Bp({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: u
}) {
  if (!Ja({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const f = n.draggable.getById(o), p = Lp(t, f.descriptor.id);
  if (!p)
    return process.env.NODE_ENV !== "production" && be(`Unable to find draggable element with id: ${o}`), null;
  if (u && !f.options.canDragInteractiveElements && Ap(p, u))
    return null;
  const d = e.claim(i || Je);
  let l = "PRE_DRAG";
  function a() {
    return f.options.shouldRespectForcePress;
  }
  function s() {
    return e.isActive(d);
  }
  function b(E, A) {
    Xt({
      expected: E,
      phase: l,
      isLockActive: s,
      shouldWarn: !0
    }) && r.dispatch(A());
  }
  const v = b.bind(null, "DRAGGING");
  function h(E) {
    function A() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (A(), process.env.NODE_ENV !== "production" ? F(!1, `Cannot lift in phase ${l}`) : F()), r.dispatch(pf(E.liftActionArgs)), l = "DRAGGING";
    function S(N, P = {
      shouldBlockNextClick: !1
    }) {
      if (E.cleanup(), P.shouldBlockNextClick) {
        const w = qe(window, [{
          eventName: "click",
          fn: Mp,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(w);
      }
      A(), r.dispatch(Ia({
        reason: N
      }));
    }
    return {
      isActive: () => Xt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: s,
        shouldWarn: !1
      }),
      shouldRespectForcePress: a,
      drop: (N) => S("DROP", N),
      cancel: (N) => S("CANCEL", N),
      ...E.actions
    };
  }
  function m(E) {
    const A = Lt((N) => {
      v(() => Pa({
        client: N
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
  function y() {
    const E = {
      moveUp: () => v(xf),
      moveRight: () => v(wf),
      moveDown: () => v(Of),
      moveLeft: () => v(Nf)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: Dp(p),
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
    shouldRespectForcePress: a,
    fluidLift: m,
    snapLift: y,
    abort: _
  };
}
const $p = [vp, bp, wp];
function jp({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? $p : [], ...n || []], u = Re(() => ep())[0], c = ie(function(h, m) {
    Ut(h) && !Ut(m) && u.tryAbandon();
  }, [u]);
  $e(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const y = t.getState();
      c(h, y), h = y;
    });
  }, [u, t, c]), $e(() => u.tryAbandon, [u.tryAbandon]);
  const f = ie((v) => Ja({
    lockAPI: u,
    registry: r,
    store: t,
    draggableId: v
  }), [u, r, t]), p = ie((v, h, m) => Bp({
    lockAPI: u,
    registry: r,
    contextId: e,
    store: t,
    draggableId: v,
    forceSensorStop: h || null,
    sourceEvent: m && m.sourceEvent ? m.sourceEvent : null
  }), [e, u, r, t]), d = ie((v) => kp(e, v), [e]), l = ie((v) => {
    const h = r.draggable.findById(v);
    return h ? h.options : null;
  }, [r.draggable]), a = ie(function() {
    u.isClaimed() && (u.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Pn()));
  }, [u, t]), s = ie(() => u.isClaimed(), [u]), b = pe(() => ({
    canGetLock: f,
    tryGetLock: p,
    findClosestDraggableId: d,
    findOptionsForDraggable: l,
    tryReleaseLock: a,
    isLockClaimed: s
  }), [f, p, d, l, a, s]);
  Np(i);
  for (let v = 0; v < i.length; v++)
    i[v](b);
}
const qp = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    fe.version.startsWith("16") || fe.version.startsWith("17") ? r() : Pi(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Fp = (e) => ({
  ...Ft,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Ft.durationDampening,
    ...e.autoScrollerOptions
  }
});
function St(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? F(!1, "Could not find store from lazy ref") : F()), e.current;
}
function Vp(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, u = he(null);
  Qd();
  const c = qn(e), f = ie(() => qp(c.current), [c]), p = ie(() => Fp(c.current), [c]), d = Vd(t), l = Wd({
    contextId: t,
    text: i
  }), a = Ld(t, o), s = ie((w) => {
    St(u).dispatch(w);
  }, []), b = pe(() => oo({
    publishWhileDragging: vf,
    updateDroppableScroll: mf,
    updateDroppableIsEnabled: yf,
    updateDroppableIsCombineEnabled: bf,
    collectionStarting: gf
  }, s), [s]), v = $d(), h = pe(() => dd(v, b), [v, b]), m = pe(() => Td({
    scrollWindow: pd,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: p,
    ...oo({
      move: Pa
    }, s)
  }), [h.scrollDroppable, s, p]), y = Md(t), _ = pe(() => sd({
    announce: d,
    autoScroller: m,
    dimensionMarshal: h,
    focusMarshal: y,
    getResponders: f,
    styleMarshal: a
  }), [d, m, h, y, f, a]);
  process.env.NODE_ENV !== "production" && u.current && u.current !== _ && process.env.NODE_ENV !== "production" && be("unexpected store change"), u.current = _;
  const g = ie(() => {
    const w = St(u);
    w.getState().phase !== "IDLE" && w.dispatch(Pn());
  }, []), E = ie(() => {
    const w = St(u).getState();
    return w.phase === "DROP_ANIMATING" ? !0 : w.phase === "IDLE" ? !1 : w.isDragging;
  }, []), A = pe(() => ({
    isDragging: E,
    tryAbort: g
  }), [E, g]);
  r(A);
  const S = ie((w) => ja(St(u).getState(), w), []), N = ie(() => nt(St(u).getState()), []), P = pe(() => ({
    marshal: h,
    focus: y,
    contextId: t,
    canLift: S,
    isMovementAllowed: N,
    dragHandleUsageInstructionsId: l,
    registry: v
  }), [t, h, l, y, S, N, v]);
  return jp({
    contextId: t,
    store: _,
    registry: v,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), Se(() => g, [g]), fe.createElement(mr.Provider, {
    value: P
  }, fe.createElement($u, {
    context: Bn,
    store: _
  }, e.children));
}
let Up = 0;
function Gp() {
  return pe(() => `${Up++}`, []);
}
function Hp() {
  return fe.useId();
}
var zp = "useId" in fe ? Hp : Gp;
function Wp(e) {
  const t = zp(), r = e.dragHandleUsageInstructions || tr.dragHandleUsageInstructions;
  return fe.createElement(ec, null, (n) => fe.createElement(Vp, {
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
const zo = {
  dragging: 5e3,
  dropAnimating: 4500
}, Kp = (e, t) => t ? Pt.drop(t.duration) : e ? Pt.snap : Pt.fluid, Yp = (e, t) => {
  if (e)
    return t ? qt.opacity.drop : qt.opacity.combining;
}, Zp = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Xp(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, u = !!o, c = Zp(e), f = !!i, p = f ? en.drop(n, u) : en.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Kp(c, i),
    transform: p,
    opacity: Yp(u, f),
    zIndex: f ? zo.dropAnimating : zo.dragging,
    pointerEvents: "none"
  };
}
function Jp(e) {
  return {
    transform: en.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Qp(e) {
  return e.type === "DRAGGING" ? Xp(e) : Jp(e);
}
function eh(e, t, r = Te) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = ia(o, n), u = ir(i, r), c = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: n.display
  }, f = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: c,
    displaceBy: f,
    client: i,
    page: u
  };
}
function th(e) {
  const t = $n("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: u,
    isEnabled: c
  } = e, f = pe(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: u,
    isEnabled: c
  }), [i, c, u]), p = ie((s) => {
    const b = o();
    return b || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot get dimension when no ref is set") : F()), eh(r, b, s);
  }, [r, o]), d = pe(() => ({
    uniqueId: t,
    descriptor: r,
    options: f,
    getDimension: p
  }), [r, p, f, t]), l = he(d), a = he(!0);
  $e(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), $e(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    const s = l.current;
    l.current = d, n.draggable.update(d, s);
  }, [d, n.draggable]);
}
var Vn = fe.createContext(null);
function Qa(e) {
  e && Kt(e) || (process.env.NODE_ENV !== "production" ? F(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : F());
}
function rh(e, t, r) {
  Yt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? F(!1, "Draggable requires a draggableId") : F(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? F(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : F(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? F(!1, `${n(o)} requires an integer index prop`) : F(!1)), e.mapped.type !== "DRAGGING" && (Qa(r()), e.isEnabled && (Ha(t, o) || (process.env.NODE_ENV !== "production" ? F(!1, `${n(o)} Unable to find drag handle`) : F(!1))));
  });
}
function nh(e) {
  jn(() => {
    const t = he(e);
    Yt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? F(!1, "Draggable isClone prop value changed during component life") : F(!1));
    }, [e]);
  });
}
function sr(e) {
  const t = Di(e);
  return t || (process.env.NODE_ENV !== "production" ? F(!1, "Could not find required context") : F()), t;
}
function oh(e) {
  e.preventDefault();
}
const ih = (e) => {
  const t = he(null), r = ie((A = null) => {
    t.current = A;
  }, []), n = ie(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: u
  } = sr(mr), {
    type: c,
    droppableId: f
  } = sr(Vn), p = pe(() => ({
    id: e.draggableId,
    index: e.index,
    type: c,
    droppableId: f
  }), [e.draggableId, e.index, c, f]), {
    children: d,
    draggableId: l,
    isEnabled: a,
    shouldRespectForcePress: s,
    canDragInteractiveElements: b,
    isClone: v,
    mapped: h,
    dropAnimationFinished: m
  } = e;
  if (rh(e, o, n), nh(v), !v) {
    const A = pe(() => ({
      descriptor: p,
      registry: u,
      getDraggableRef: n,
      canDragInteractiveElements: b,
      shouldRespectForcePress: s,
      isEnabled: a
    }), [p, u, n, b, s, a]);
    th(A);
  }
  const y = pe(() => a ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: oh
  } : null, [o, i, l, a]), _ = ie((A) => {
    h.type === "DRAGGING" && h.dropping && A.propertyName === "transform" && (fe.version.startsWith("16") || fe.version.startsWith("17") ? m() : Pi(m));
  }, [m, h]), g = pe(() => {
    const A = Qp(h), S = h.type === "DRAGGING" && h.dropping ? _ : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: A,
        onTransitionEnd: S
      },
      dragHandleProps: y
    };
  }, [o, y, l, h, _, r]), E = pe(() => ({
    draggableId: p.id,
    type: p.type,
    source: {
      index: p.index,
      droppableId: p.droppableId
    }
  }), [p.droppableId, p.id, p.index, p.type]);
  return fe.createElement(fe.Fragment, null, d(g, h.snapshot, E));
};
var ah = ih, el = (e, t) => e === t, tl = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const lh = (e) => e.combine ? e.combine.draggableId : null, sh = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function uh() {
  const e = De((o, i) => ({
    x: o,
    y: i
  })), t = De((o, i, u = null, c = null, f = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!f,
    dropAnimation: f,
    mode: o,
    draggingOver: u,
    combineWith: c,
    combineTargetFor: null
  })), r = De((o, i, u, c, f = null, p = null, d = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: f,
      combineWith: p,
      mode: i,
      offset: o,
      dimension: u,
      forceShouldAnimate: d,
      snapshot: t(i, c, f, p, null)
    }
  }));
  return (o, i) => {
    if (Ut(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const u = o.current.client.offset, c = o.dimensions.draggables[i.draggableId], f = Be(o.impact), p = sh(o.impact), d = o.forceShouldAnimate;
      return r(e(u.x, u.y), o.movementMode, c, i.isClone, f, p, d);
    }
    if (o.phase === "DROP_ANIMATING") {
      const u = o.completed;
      if (u.result.draggableId !== i.draggableId)
        return null;
      const c = i.isClone, f = o.dimensions.draggables[i.draggableId], p = u.result, d = p.mode, l = tl(p), a = lh(p), b = {
        duration: o.dropDuration,
        curve: Cn.drop,
        moveTo: o.newHomeClientOffset,
        opacity: a ? qt.opacity.drop : null,
        scale: a ? qt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: f,
          dropping: b,
          draggingOver: l,
          combineWith: a,
          mode: d,
          forceShouldAnimate: null,
          snapshot: t(d, c, l, a, b)
        }
      };
    }
    return null;
  };
}
function rl(e = null) {
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
const ch = {
  mapped: {
    type: "SECONDARY",
    offset: Te,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: rl(null)
  }
};
function fh() {
  const e = De((u, c) => ({
    x: u,
    y: c
  })), t = De(rl), r = De((u, c = null, f) => ({
    mapped: {
      type: "SECONDARY",
      offset: u,
      combineTargetFor: c,
      shouldAnimateDisplacement: f,
      snapshot: t(c)
    }
  })), n = (u) => u ? r(Te, u, !0) : null, o = (u, c, f, p) => {
    const d = f.displaced.visible[u], l = !!(p.inVirtualList && p.effected[u]), a = hr(f), s = a && a.draggableId === u ? c : null;
    if (!d) {
      if (!l)
        return n(s);
      if (f.displaced.invisible[u])
        return null;
      const h = ht(p.displacedBy.point), m = e(h.x, h.y);
      return r(m, s, !0);
    }
    if (l)
      return n(s);
    const b = f.displacedBy.point, v = e(b.x, b.y);
    return r(v, s, d.shouldAnimate);
  };
  return (u, c) => {
    if (Ut(u))
      return u.critical.draggable.id === c.draggableId ? null : o(c.draggableId, u.critical.draggable.id, u.impact, u.afterCritical);
    if (u.phase === "DROP_ANIMATING") {
      const f = u.completed;
      return f.result.draggableId === c.draggableId ? null : o(c.draggableId, f.result.draggableId, f.impact, f.afterCritical);
    }
    return null;
  };
}
const dh = () => {
  const e = uh(), t = fh();
  return (n, o) => e(n, o) || t(n, o) || ch;
}, ph = {
  dropAnimationFinished: Ca
}, hh = na(dh, ph, null, {
  context: Bn,
  areStatePropsEqual: el
})(ah);
var vh = hh;
function nl(e) {
  return sr(Vn).isUsingCloneFor === e.draggableId && !e.isClone ? null : fe.createElement(vh, e);
}
function gh(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return fe.createElement(nl, Xe({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Un = (e) => (t) => e === t, mh = Un("scroll"), yh = Un("auto"), bh = Un("visible"), Wo = (e, t) => t(e.overflowX) || t(e.overflowY), Eh = (e, t) => t(e.overflowX) && t(e.overflowY), ol = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Wo(r, mh) || Wo(r, yh);
}, _h = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Vt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, F()), !ol(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Eh(n, bh) || process.env.NODE_ENV !== "production" && be(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Gn = (e) => e == null ? null : e === document.body ? _h() ? e : null : e === document.documentElement ? null : ol(e) ? e : Gn(e.parentElement);
var xh = (e) => {
  !e || !Gn(e.parentElement) || process.env.NODE_ENV !== "production" && be(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, nn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const il = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : il(e.parentElement) : !1;
var Oh = (e) => {
  const t = Gn(e), r = il(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, wh = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: n,
  direction: o,
  client: i,
  page: u,
  closest: c
}) => {
  const f = (() => {
    if (!c)
      return null;
    const {
      scrollSize: a,
      client: s
    } = c, b = Ma({
      scrollHeight: a.scrollHeight,
      scrollWidth: a.scrollWidth,
      height: s.paddingBox.height,
      width: s.paddingBox.width
    });
    return {
      pageMarginBox: c.page.marginBox,
      frameClient: s,
      scrollSize: a,
      shouldClipSubject: c.shouldClipSubject,
      scroll: {
        initial: c.scroll,
        current: c.scroll,
        max: b,
        diff: {
          value: Te,
          displacement: Te
        }
      }
    };
  })(), p = o === "vertical" ? Nn : va, d = ct({
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
    client: i,
    page: u,
    frame: f,
    subject: d
  };
};
const Nh = (e, t) => {
  const r = aa(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, u = o + t.scrollWidth, f = _n({
    top: n,
    right: u,
    bottom: i,
    left: o
  }, r.border);
  return xn({
    borderBox: f,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Sh = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: u,
  shouldClipSubject: c
}) => {
  const f = r.closestScrollable, p = Nh(e, f), d = ir(p, n), l = (() => {
    if (!f)
      return null;
    const s = aa(f), b = {
      scrollHeight: f.scrollHeight,
      scrollWidth: f.scrollWidth
    };
    return {
      client: s,
      page: ir(s, n),
      scroll: nn(f),
      scrollSize: b,
      shouldClipSubject: c
    };
  })();
  return wh({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: u,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: p,
    page: d,
    closest: l
  });
};
const Ah = {
  passive: !1
}, Dh = {
  passive: !0
};
var Ko = (e) => e.shouldPublishImmediately ? Ah : Dh;
const Jt = (e) => e && e.env.closestScrollable || null;
function Th(e) {
  const t = he(null), r = sr(mr), n = $n("droppable"), {
    registry: o,
    marshal: i
  } = r, u = qn(e), c = pe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), f = he(c), p = pe(() => De((g, E) => {
    t.current || (process.env.NODE_ENV !== "production" ? F(!1, "Can only update scroll when dragging") : F());
    const A = {
      x: g,
      y: E
    };
    i.updateDroppableScroll(c.id, A);
  }), [c.id, i]), d = ie(() => {
    const g = t.current;
    return !g || !g.env.closestScrollable ? Te : nn(g.env.closestScrollable);
  }, []), l = ie(() => {
    const g = d();
    p(g.x, g.y);
  }, [d, p]), a = pe(() => Lt(l), [l]), s = ie(() => {
    const g = t.current, E = Jt(g);
    if (g && E || (process.env.NODE_ENV !== "production" ? F(!1, "Could not find scroll options while scrolling") : F()), g.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    a();
  }, [a, l]), b = ie((g, E) => {
    t.current && (process.env.NODE_ENV !== "production" ? F(!1, "Cannot collect a droppable while a drag is occurring") : F());
    const A = u.current, S = A.getDroppableRef();
    S || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot collect without a droppable ref") : F());
    const N = Oh(S), P = {
      ref: S,
      descriptor: c,
      env: N,
      scrollOptions: E
    };
    t.current = P;
    const w = Sh({
      ref: S,
      descriptor: c,
      env: N,
      windowScroll: g,
      direction: A.direction,
      isDropDisabled: A.isDropDisabled,
      isCombineEnabled: A.isCombineEnabled,
      shouldClipSubject: !A.ignoreContainerClipping
    }), x = N.closestScrollable;
    return x && (x.setAttribute(Fo.contextId, r.contextId), x.addEventListener("scroll", s, Ko(P.scrollOptions)), process.env.NODE_ENV !== "production" && xh(x)), w;
  }, [r.contextId, c, s, u]), v = ie(() => {
    const g = t.current, E = Jt(g);
    return g && E || (process.env.NODE_ENV !== "production" ? F(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : F()), nn(E);
  }, []), h = ie(() => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot stop drag when no active drag") : F());
    const E = Jt(g);
    t.current = null, E && (a.cancel(), E.removeAttribute(Fo.contextId), E.removeEventListener("scroll", s, Ko(g.scrollOptions)));
  }, [s, a]), m = ie((g) => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot scroll when there is no drag") : F());
    const A = Jt(E);
    A || (process.env.NODE_ENV !== "production" ? F(!1, "Cannot scroll a droppable with no closest scrollable") : F()), A.scrollTop += g.y, A.scrollLeft += g.x;
  }, []), y = pe(() => ({
    getDimensionAndWatchScroll: b,
    getScrollWhileDragging: v,
    dragStopped: h,
    scroll: m
  }), [h, b, v, m]), _ = pe(() => ({
    uniqueId: n,
    descriptor: c,
    callbacks: y
  }), [y, c, n]);
  $e(() => (f.current = _.descriptor, o.droppable.register(_), () => {
    t.current && (process.env.NODE_ENV !== "production" && be("Unsupported: changing the droppableId or type of a Droppable during a drag"), h()), o.droppable.unregister(_);
  }), [y, c, h, _, i, o.droppable]), $e(() => {
    t.current && i.updateDroppableIsEnabled(f.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), $e(() => {
    t.current && i.updateDroppableIsCombineEnabled(f.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function qr() {
}
const Yo = {
  width: 0,
  height: 0,
  margin: lc
}, Ph = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Yo : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Ih = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = Ph({
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
}, Ch = (e) => {
  const t = he(null), r = ie(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: u
  } = e, [c, f] = Re(e.animate === "open");
  Se(() => c ? n !== "open" ? (r(), f(!1), qr) : t.current ? qr : (t.current = setTimeout(() => {
    t.current = null, f(!1);
  }), r) : qr, [n, c, r]);
  const p = ie((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), d = Ih({
    isAnimatingOpenOnMount: c,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return fe.createElement(e.placeholder.tagName, {
    style: d,
    "data-rfd-placeholder-context-id": u,
    onTransitionEnd: p,
    ref: e.innerRef
  });
};
var Rh = fe.memo(Ch);
function Fr(e) {
  return typeof e == "boolean";
}
function Vr(e, t) {
  t.forEach((r) => r(e));
}
const kh = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? F(!1, "A Droppable requires a droppableId prop") : F()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? F(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : F());
}, function({
  props: t
}) {
  Fr(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? F(!1, "isDropDisabled must be a boolean") : F()), Fr(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? F(!1, "isCombineEnabled must be a boolean") : F()), Fr(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? F(!1, "ignoreContainerClipping must be a boolean") : F());
}, function({
  getDroppableRef: t
}) {
  Qa(t());
}], Lh = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && be(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Mh = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? F(!1, "Must provide a clone render function (renderClone) for virtual lists") : F());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? F(!1, "Expected virtual list to not have a placeholder") : F());
}];
function Bh(e) {
  Yt(() => {
    Vr(e, kh), e.props.mode === "standard" && Vr(e, Lh), e.props.mode === "virtual" && Vr(e, Mh);
  });
}
class $h extends fe.PureComponent {
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
const jh = (e) => {
  const t = Di(mr);
  t || (process.env.NODE_ENV !== "production" ? F(!1, "Could not find app context") : F());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = he(null), i = he(null), {
    children: u,
    droppableId: c,
    type: f,
    mode: p,
    direction: d,
    ignoreContainerClipping: l,
    isDropDisabled: a,
    isCombineEnabled: s,
    snapshot: b,
    useClone: v,
    updateViewportMaxScroll: h,
    getContainerForClone: m
  } = e, y = ie(() => o.current, []), _ = ie((O = null) => {
    o.current = O;
  }, []), g = ie(() => i.current, []), E = ie((O = null) => {
    i.current = O;
  }, []);
  Bh({
    props: e,
    getDroppableRef: y,
    getPlaceholderRef: g
  });
  const A = ie(() => {
    n() && h({
      maxScroll: $a()
    });
  }, [n, h]);
  Th({
    droppableId: c,
    type: f,
    mode: p,
    direction: d,
    isDropDisabled: a,
    isCombineEnabled: s,
    ignoreContainerClipping: l,
    getDroppableRef: y
  });
  const S = pe(() => fe.createElement($h, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: O,
    data: T,
    animate: I
  }) => fe.createElement(Rh, {
    placeholder: T,
    onClose: O,
    innerRef: E,
    animate: I,
    contextId: r,
    onTransitionEnd: A
  })), [r, A, e.placeholder, e.shouldAnimatePlaceholder, E]), N = pe(() => ({
    innerRef: _,
    placeholder: S,
    droppableProps: {
      "data-rfd-droppable-id": c,
      "data-rfd-droppable-context-id": r
    }
  }), [r, c, S, _]), P = v ? v.dragging.draggableId : null, w = pe(() => ({
    droppableId: c,
    type: f,
    isUsingCloneFor: P
  }), [c, P, f]);
  function x() {
    if (!v)
      return null;
    const {
      dragging: O,
      render: T
    } = v, I = fe.createElement(nl, {
      draggableId: O.draggableId,
      index: O.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (L, B) => T(L, B, O));
    return Ti.createPortal(I, m());
  }
  return fe.createElement(Vn.Provider, {
    value: w
  }, u(N, b), x());
};
var qh = jh;
function Fh() {
  return document.body || (process.env.NODE_ENV !== "production" ? F(!1, "document.body is not ready") : F()), document.body;
}
const Zo = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Fh
}, al = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Zo)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Zo[r]
    });
  return t;
}, Ur = (e, t) => e === t.droppable.type, Xo = (e, t) => t.draggables[e.draggable.id], Vh = () => {
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
  }, r = De((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = De((i, u, c, f, p, d) => {
    const l = p.descriptor.id;
    if (p.descriptor.droppableId === i) {
      const b = d ? {
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
        useClone: b
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
  return (i, u) => {
    const c = al(u), f = c.droppableId, p = c.type, d = !c.isDropDisabled, l = c.renderClone;
    if (Ut(i)) {
      const a = i.critical;
      if (!Ur(p, a))
        return t;
      const s = Xo(a, i.dimensions), b = Be(i.impact) === f;
      return n(f, d, b, b, s, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const a = i.completed;
      if (!Ur(p, a.critical))
        return t;
      const s = Xo(a.critical, i.dimensions);
      return n(f, d, tl(a.result) === f, Be(a.impact) === f, s, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const a = i.completed;
      if (!Ur(p, a.critical))
        return t;
      const s = Be(a.impact) === f, b = !!(a.impact.at && a.impact.at.type === "COMBINE"), v = a.critical.droppable.id === f;
      return s ? b ? e : t : v ? e : t;
    }
    return t;
  };
}, Uh = {
  updateViewportMaxScroll: _f
}, Gh = na(Vh, Uh, (e, t, r) => ({
  ...al(r),
  ...e,
  ...t
}), {
  context: Bn,
  areStatePropsEqual: el
})(qh);
var Hh = Gh;
const zh = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: n,
  isDragDisabled: o = !0,
  isLoading: i,
  onRowClick: u,
  itemClickKey: c,
  haveLinks: f,
  className: p
}) => {
  const [d, l] = Re(null), [a, s] = Re(e);
  Se(() => {
    s(e);
  }, [e]);
  const b = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", v = (m) => {
    u == null || u(m), l(m);
  }, h = (m) => {
    if (!m.destination || !(a != null && a.length)) return;
    const y = m.source.index, _ = m.destination.index, g = [...a], [E] = g.splice(y, 1);
    g.splice(_, 0, E), s(g);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ Ae("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ oe("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ oe("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ oe(pn, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ oe(qi, { className: p, children: /* @__PURE__ */ oe("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ oe("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ oe(Wp, { onDragEnd: h, children: /* @__PURE__ */ oe(Hh, { droppableId: "dropArray", direction: "vertical", children: (m) => /* @__PURE__ */ Ae("table", { className: "w-full", children: [
    /* @__PURE__ */ oe("thead", { children: /* @__PURE__ */ oe("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((y, _) => /* @__PURE__ */ oe(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === y.name.find((g) => g) ? `-${y.name.find((g) => g) ?? ""}` : y.name.find((g) => g) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === y.name.find((g) => g) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: y.title
      },
      _
    )) }) }),
    /* @__PURE__ */ Ae(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...m.droppableProps,
        ref: m.innerRef,
        children: [
          a == null ? void 0 : a.map((y, _) => {
            var g;
            return /* @__PURE__ */ oe(
              gh,
              {
                isDragDisabled: o,
                draggableId: (g = y == null ? void 0 : y.id) == null ? void 0 : g.toString(),
                index: _,
                children: (E) => {
                  const A = {
                    ...E.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ oe(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${d === a[_] && b}`,
                      onClick: () => v(
                        c ? y[c] : y.id
                      ),
                      ref: E.innerRef,
                      ...E.draggableProps,
                      ...E.dragHandleProps,
                      style: A,
                      children: t.map((S, N) => {
                        var w;
                        let P = (w = S == null ? void 0 : S.name) == null ? void 0 : w.reduce(
                          (x, O) => x == null ? void 0 : x[O],
                          a == null ? void 0 : a[_]
                        );
                        return /* @__PURE__ */ oe(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${f && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: S.transform ? S.transform(P, _) : P
                          },
                          N
                        );
                      })
                    }
                  );
                }
              },
              y == null ? void 0 : y.id
            );
          }),
          m.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, Y0 = zh, Wh = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ oe(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Z0 = Wh;
function Kh() {
  this.__data__ = [], this.size = 0;
}
var Yh = Kh;
function Zh(e, t) {
  return e === t || e !== e && t !== t;
}
var ll = Zh, Xh = ll;
function Jh(e, t) {
  for (var r = e.length; r--; )
    if (Xh(e[r][0], t))
      return r;
  return -1;
}
var br = Jh, Qh = br, ev = Array.prototype, tv = ev.splice;
function rv(e) {
  var t = this.__data__, r = Qh(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : tv.call(t, r, 1), --this.size, !0;
}
var nv = rv, ov = br;
function iv(e) {
  var t = this.__data__, r = ov(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var av = iv, lv = br;
function sv(e) {
  return lv(this.__data__, e) > -1;
}
var uv = sv, cv = br;
function fv(e, t) {
  var r = this.__data__, n = cv(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var dv = fv, pv = Yh, hv = nv, vv = av, gv = uv, mv = dv;
function gt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
gt.prototype.clear = pv;
gt.prototype.delete = hv;
gt.prototype.get = vv;
gt.prototype.has = gv;
gt.prototype.set = mv;
var Er = gt, yv = Er;
function bv() {
  this.__data__ = new yv(), this.size = 0;
}
var Ev = bv;
function _v(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var xv = _v;
function Ov(e) {
  return this.__data__.get(e);
}
var wv = Ov;
function Nv(e) {
  return this.__data__.has(e);
}
var Sv = Nv, Av = typeof Le == "object" && Le && Le.Object === Object && Le, sl = Av, Dv = sl, Tv = typeof self == "object" && self && self.Object === Object && self, Pv = Dv || Tv || Function("return this")(), ze = Pv, Iv = ze, Cv = Iv.Symbol, Hn = Cv, Jo = Hn, ul = Object.prototype, Rv = ul.hasOwnProperty, kv = ul.toString, At = Jo ? Jo.toStringTag : void 0;
function Lv(e) {
  var t = Rv.call(e, At), r = e[At];
  try {
    e[At] = void 0;
    var n = !0;
  } catch {
  }
  var o = kv.call(e);
  return n && (t ? e[At] = r : delete e[At]), o;
}
var Mv = Lv, Bv = Object.prototype, $v = Bv.toString;
function jv(e) {
  return $v.call(e);
}
var qv = jv, Qo = Hn, Fv = Mv, Vv = qv, Uv = "[object Null]", Gv = "[object Undefined]", ei = Qo ? Qo.toStringTag : void 0;
function Hv(e) {
  return e == null ? e === void 0 ? Gv : Uv : ei && ei in Object(e) ? Fv(e) : Vv(e);
}
var _r = Hv;
function zv(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var cl = zv, Wv = _r, Kv = cl, Yv = "[object AsyncFunction]", Zv = "[object Function]", Xv = "[object GeneratorFunction]", Jv = "[object Proxy]";
function Qv(e) {
  if (!Kv(e))
    return !1;
  var t = Wv(e);
  return t == Zv || t == Xv || t == Yv || t == Jv;
}
var fl = Qv, eg = ze, tg = eg["__core-js_shared__"], rg = tg, Gr = rg, ti = function() {
  var e = /[^.]+$/.exec(Gr && Gr.keys && Gr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ng(e) {
  return !!ti && ti in e;
}
var og = ng, ig = Function.prototype, ag = ig.toString;
function lg(e) {
  if (e != null) {
    try {
      return ag.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var dl = lg, sg = fl, ug = og, cg = cl, fg = dl, dg = /[\\^$.*+?()[\]{}|]/g, pg = /^\[object .+?Constructor\]$/, hg = Function.prototype, vg = Object.prototype, gg = hg.toString, mg = vg.hasOwnProperty, yg = RegExp(
  "^" + gg.call(mg).replace(dg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bg(e) {
  if (!cg(e) || ug(e))
    return !1;
  var t = sg(e) ? yg : pg;
  return t.test(fg(e));
}
var Eg = bg;
function _g(e, t) {
  return e == null ? void 0 : e[t];
}
var xg = _g, Og = Eg, wg = xg;
function Ng(e, t) {
  var r = wg(e, t);
  return Og(r) ? r : void 0;
}
var mt = Ng, Sg = mt, Ag = ze, Dg = Sg(Ag, "Map"), zn = Dg, Tg = mt, Pg = Tg(Object, "create"), xr = Pg, ri = xr;
function Ig() {
  this.__data__ = ri ? ri(null) : {}, this.size = 0;
}
var Cg = Ig;
function Rg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var kg = Rg, Lg = xr, Mg = "__lodash_hash_undefined__", Bg = Object.prototype, $g = Bg.hasOwnProperty;
function jg(e) {
  var t = this.__data__;
  if (Lg) {
    var r = t[e];
    return r === Mg ? void 0 : r;
  }
  return $g.call(t, e) ? t[e] : void 0;
}
var qg = jg, Fg = xr, Vg = Object.prototype, Ug = Vg.hasOwnProperty;
function Gg(e) {
  var t = this.__data__;
  return Fg ? t[e] !== void 0 : Ug.call(t, e);
}
var Hg = Gg, zg = xr, Wg = "__lodash_hash_undefined__";
function Kg(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = zg && t === void 0 ? Wg : t, this;
}
var Yg = Kg, Zg = Cg, Xg = kg, Jg = qg, Qg = Hg, em = Yg;
function yt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yt.prototype.clear = Zg;
yt.prototype.delete = Xg;
yt.prototype.get = Jg;
yt.prototype.has = Qg;
yt.prototype.set = em;
var tm = yt, ni = tm, rm = Er, nm = zn;
function om() {
  this.size = 0, this.__data__ = {
    hash: new ni(),
    map: new (nm || rm)(),
    string: new ni()
  };
}
var im = om;
function am(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var lm = am, sm = lm;
function um(e, t) {
  var r = e.__data__;
  return sm(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Or = um, cm = Or;
function fm(e) {
  var t = cm(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var dm = fm, pm = Or;
function hm(e) {
  return pm(this, e).get(e);
}
var vm = hm, gm = Or;
function mm(e) {
  return gm(this, e).has(e);
}
var ym = mm, bm = Or;
function Em(e, t) {
  var r = bm(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var _m = Em, xm = im, Om = dm, wm = vm, Nm = ym, Sm = _m;
function bt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
bt.prototype.clear = xm;
bt.prototype.delete = Om;
bt.prototype.get = wm;
bt.prototype.has = Nm;
bt.prototype.set = Sm;
var pl = bt, Am = Er, Dm = zn, Tm = pl, Pm = 200;
function Im(e, t) {
  var r = this.__data__;
  if (r instanceof Am) {
    var n = r.__data__;
    if (!Dm || n.length < Pm - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Tm(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Cm = Im, Rm = Er, km = Ev, Lm = xv, Mm = wv, Bm = Sv, $m = Cm;
function Et(e) {
  var t = this.__data__ = new Rm(e);
  this.size = t.size;
}
Et.prototype.clear = km;
Et.prototype.delete = Lm;
Et.prototype.get = Mm;
Et.prototype.has = Bm;
Et.prototype.set = $m;
var jm = Et, qm = "__lodash_hash_undefined__";
function Fm(e) {
  return this.__data__.set(e, qm), this;
}
var Vm = Fm;
function Um(e) {
  return this.__data__.has(e);
}
var Gm = Um, Hm = pl, zm = Vm, Wm = Gm;
function ur(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Hm(); ++t < r; )
    this.add(e[t]);
}
ur.prototype.add = ur.prototype.push = zm;
ur.prototype.has = Wm;
var Km = ur;
function Ym(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Zm = Ym;
function Xm(e, t) {
  return e.has(t);
}
var Jm = Xm, Qm = Km, ey = Zm, ty = Jm, ry = 1, ny = 2;
function oy(e, t, r, n, o, i) {
  var u = r & ry, c = e.length, f = t.length;
  if (c != f && !(u && f > c))
    return !1;
  var p = i.get(e), d = i.get(t);
  if (p && d)
    return p == t && d == e;
  var l = -1, a = !0, s = r & ny ? new Qm() : void 0;
  for (i.set(e, t), i.set(t, e); ++l < c; ) {
    var b = e[l], v = t[l];
    if (n)
      var h = u ? n(v, b, l, t, e, i) : n(b, v, l, e, t, i);
    if (h !== void 0) {
      if (h)
        continue;
      a = !1;
      break;
    }
    if (s) {
      if (!ey(t, function(m, y) {
        if (!ty(s, y) && (b === m || o(b, m, r, n, i)))
          return s.push(y);
      })) {
        a = !1;
        break;
      }
    } else if (!(b === v || o(b, v, r, n, i))) {
      a = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), a;
}
var hl = oy, iy = ze, ay = iy.Uint8Array, ly = ay;
function sy(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
var uy = sy;
function cy(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var fy = cy, oi = Hn, ii = ly, dy = ll, py = hl, hy = uy, vy = fy, gy = 1, my = 2, yy = "[object Boolean]", by = "[object Date]", Ey = "[object Error]", _y = "[object Map]", xy = "[object Number]", Oy = "[object RegExp]", wy = "[object Set]", Ny = "[object String]", Sy = "[object Symbol]", Ay = "[object ArrayBuffer]", Dy = "[object DataView]", ai = oi ? oi.prototype : void 0, Hr = ai ? ai.valueOf : void 0;
function Ty(e, t, r, n, o, i, u) {
  switch (r) {
    case Dy:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ay:
      return !(e.byteLength != t.byteLength || !i(new ii(e), new ii(t)));
    case yy:
    case by:
    case xy:
      return dy(+e, +t);
    case Ey:
      return e.name == t.name && e.message == t.message;
    case Oy:
    case Ny:
      return e == t + "";
    case _y:
      var c = hy;
    case wy:
      var f = n & gy;
      if (c || (c = vy), e.size != t.size && !f)
        return !1;
      var p = u.get(e);
      if (p)
        return p == t;
      n |= my, u.set(e, t);
      var d = py(c(e), c(t), n, o, i, u);
      return u.delete(e), d;
    case Sy:
      if (Hr)
        return Hr.call(e) == Hr.call(t);
  }
  return !1;
}
var Py = Ty;
function Iy(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Cy = Iy, Ry = Array.isArray, Wn = Ry, ky = Cy, Ly = Wn;
function My(e, t, r) {
  var n = t(e);
  return Ly(e) ? n : ky(n, r(e));
}
var By = My;
function $y(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
    var u = e[r];
    t(u, r, e) && (i[o++] = u);
  }
  return i;
}
var jy = $y;
function qy() {
  return [];
}
var Fy = qy, Vy = jy, Uy = Fy, Gy = Object.prototype, Hy = Gy.propertyIsEnumerable, li = Object.getOwnPropertySymbols, zy = li ? function(e) {
  return e == null ? [] : (e = Object(e), Vy(li(e), function(t) {
    return Hy.call(e, t);
  }));
} : Uy, Wy = zy;
function Ky(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Yy = Ky;
function Zy(e) {
  return e != null && typeof e == "object";
}
var wr = Zy, Xy = _r, Jy = wr, Qy = "[object Arguments]";
function eb(e) {
  return Jy(e) && Xy(e) == Qy;
}
var tb = eb, si = tb, rb = wr, vl = Object.prototype, nb = vl.hasOwnProperty, ob = vl.propertyIsEnumerable, ib = si(/* @__PURE__ */ function() {
  return arguments;
}()) ? si : function(e) {
  return rb(e) && nb.call(e, "callee") && !ob.call(e, "callee");
}, ab = ib, on = { exports: {} };
function lb() {
  return !1;
}
var sb = lb;
(function(e, t) {
  var r = ze, n = sb, o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, u = i && i.exports === o, c = u ? r.Buffer : void 0, f = c ? c.isBuffer : void 0, p = f || n;
  e.exports = p;
})(on, on.exports);
var gl = on.exports, ub = 9007199254740991, cb = /^(?:0|[1-9]\d*)$/;
function fb(e, t) {
  var r = typeof e;
  return t = t ?? ub, !!t && (r == "number" || r != "symbol" && cb.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var db = fb, pb = 9007199254740991;
function hb(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pb;
}
var ml = hb, vb = _r, gb = ml, mb = wr, yb = "[object Arguments]", bb = "[object Array]", Eb = "[object Boolean]", _b = "[object Date]", xb = "[object Error]", Ob = "[object Function]", wb = "[object Map]", Nb = "[object Number]", Sb = "[object Object]", Ab = "[object RegExp]", Db = "[object Set]", Tb = "[object String]", Pb = "[object WeakMap]", Ib = "[object ArrayBuffer]", Cb = "[object DataView]", Rb = "[object Float32Array]", kb = "[object Float64Array]", Lb = "[object Int8Array]", Mb = "[object Int16Array]", Bb = "[object Int32Array]", $b = "[object Uint8Array]", jb = "[object Uint8ClampedArray]", qb = "[object Uint16Array]", Fb = "[object Uint32Array]", _e = {};
_e[Rb] = _e[kb] = _e[Lb] = _e[Mb] = _e[Bb] = _e[$b] = _e[jb] = _e[qb] = _e[Fb] = !0;
_e[yb] = _e[bb] = _e[Ib] = _e[Eb] = _e[Cb] = _e[_b] = _e[xb] = _e[Ob] = _e[wb] = _e[Nb] = _e[Sb] = _e[Ab] = _e[Db] = _e[Tb] = _e[Pb] = !1;
function Vb(e) {
  return mb(e) && gb(e.length) && !!_e[vb(e)];
}
var Ub = Vb;
function Gb(e) {
  return function(t) {
    return e(t);
  };
}
var Hb = Gb, an = { exports: {} };
(function(e, t) {
  var r = sl, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, i = o && o.exports === n, u = i && r.process, c = function() {
    try {
      var f = o && o.require && o.require("util").types;
      return f || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(an, an.exports);
var zb = an.exports, Wb = Ub, Kb = Hb, ui = zb, ci = ui && ui.isTypedArray, Yb = ci ? Kb(ci) : Wb, yl = Yb, Zb = Yy, Xb = ab, Jb = Wn, Qb = gl, e1 = db, t1 = yl, r1 = Object.prototype, n1 = r1.hasOwnProperty;
function o1(e, t) {
  var r = Jb(e), n = !r && Xb(e), o = !r && !n && Qb(e), i = !r && !n && !o && t1(e), u = r || n || o || i, c = u ? Zb(e.length, String) : [], f = c.length;
  for (var p in e)
    (t || n1.call(e, p)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    e1(p, f))) && c.push(p);
  return c;
}
var i1 = o1, a1 = Object.prototype;
function l1(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || a1;
  return e === r;
}
var s1 = l1;
function u1(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var c1 = u1, f1 = c1, d1 = f1(Object.keys, Object), p1 = d1, h1 = s1, v1 = p1, g1 = Object.prototype, m1 = g1.hasOwnProperty;
function y1(e) {
  if (!h1(e))
    return v1(e);
  var t = [];
  for (var r in Object(e))
    m1.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var b1 = y1, E1 = fl, _1 = ml;
function x1(e) {
  return e != null && _1(e.length) && !E1(e);
}
var O1 = x1, w1 = i1, N1 = b1, S1 = O1;
function A1(e) {
  return S1(e) ? w1(e) : N1(e);
}
var D1 = A1, T1 = By, P1 = Wy, I1 = D1;
function C1(e) {
  return T1(e, I1, P1);
}
var R1 = C1, fi = R1, k1 = 1, L1 = Object.prototype, M1 = L1.hasOwnProperty;
function B1(e, t, r, n, o, i) {
  var u = r & k1, c = fi(e), f = c.length, p = fi(t), d = p.length;
  if (f != d && !u)
    return !1;
  for (var l = f; l--; ) {
    var a = c[l];
    if (!(u ? a in t : M1.call(t, a)))
      return !1;
  }
  var s = i.get(e), b = i.get(t);
  if (s && b)
    return s == t && b == e;
  var v = !0;
  i.set(e, t), i.set(t, e);
  for (var h = u; ++l < f; ) {
    a = c[l];
    var m = e[a], y = t[a];
    if (n)
      var _ = u ? n(y, m, a, t, e, i) : n(m, y, a, e, t, i);
    if (!(_ === void 0 ? m === y || o(m, y, r, n, i) : _)) {
      v = !1;
      break;
    }
    h || (h = a == "constructor");
  }
  if (v && !h) {
    var g = e.constructor, E = t.constructor;
    g != E && "constructor" in e && "constructor" in t && !(typeof g == "function" && g instanceof g && typeof E == "function" && E instanceof E) && (v = !1);
  }
  return i.delete(e), i.delete(t), v;
}
var $1 = B1, j1 = mt, q1 = ze, F1 = j1(q1, "DataView"), V1 = F1, U1 = mt, G1 = ze, H1 = U1(G1, "Promise"), z1 = H1, W1 = mt, K1 = ze, Y1 = W1(K1, "Set"), Z1 = Y1, X1 = mt, J1 = ze, Q1 = X1(J1, "WeakMap"), e0 = Q1, ln = V1, sn = zn, un = z1, cn = Z1, fn = e0, bl = _r, _t = dl, di = "[object Map]", t0 = "[object Object]", pi = "[object Promise]", hi = "[object Set]", vi = "[object WeakMap]", gi = "[object DataView]", r0 = _t(ln), n0 = _t(sn), o0 = _t(un), i0 = _t(cn), a0 = _t(fn), ot = bl;
(ln && ot(new ln(new ArrayBuffer(1))) != gi || sn && ot(new sn()) != di || un && ot(un.resolve()) != pi || cn && ot(new cn()) != hi || fn && ot(new fn()) != vi) && (ot = function(e) {
  var t = bl(e), r = t == t0 ? e.constructor : void 0, n = r ? _t(r) : "";
  if (n)
    switch (n) {
      case r0:
        return gi;
      case n0:
        return di;
      case o0:
        return pi;
      case i0:
        return hi;
      case a0:
        return vi;
    }
  return t;
});
var l0 = ot, zr = jm, s0 = hl, u0 = Py, c0 = $1, mi = l0, yi = Wn, bi = gl, f0 = yl, d0 = 1, Ei = "[object Arguments]", _i = "[object Array]", Qt = "[object Object]", p0 = Object.prototype, xi = p0.hasOwnProperty;
function h0(e, t, r, n, o, i) {
  var u = yi(e), c = yi(t), f = u ? _i : mi(e), p = c ? _i : mi(t);
  f = f == Ei ? Qt : f, p = p == Ei ? Qt : p;
  var d = f == Qt, l = p == Qt, a = f == p;
  if (a && bi(e)) {
    if (!bi(t))
      return !1;
    u = !0, d = !1;
  }
  if (a && !d)
    return i || (i = new zr()), u || f0(e) ? s0(e, t, r, n, o, i) : u0(e, t, f, r, n, o, i);
  if (!(r & d0)) {
    var s = d && xi.call(e, "__wrapped__"), b = l && xi.call(t, "__wrapped__");
    if (s || b) {
      var v = s ? e.value() : e, h = b ? t.value() : t;
      return i || (i = new zr()), o(v, h, r, n, i);
    }
  }
  return a ? (i || (i = new zr()), c0(e, t, r, n, o, i)) : !1;
}
var v0 = h0, g0 = v0, Oi = wr;
function El(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Oi(e) && !Oi(t) ? e !== e && t !== t : g0(e, t, r, n, El, o);
}
var m0 = El, y0 = m0;
function b0(e, t) {
  return y0(e, t);
}
var E0 = b0, _l = { exports: {} };
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
        function o(i) {
          if (n[i])
            return n[i].exports;
          var u = n[i] = {
            /******/
            i,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return r[i].call(u.exports, u, u.exports, o), u.l = !0, u.exports;
        }
        return o.m = r, o.c = n, o.d = function(i, u, c) {
          o.o(i, u) || Object.defineProperty(i, u, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: c
            /******/
          });
        }, o.n = function(i) {
          var u = i && i.__esModule ? (
            /******/
            function() {
              return i.default;
            }
          ) : (
            /******/
            function() {
              return i;
            }
          );
          return o.d(u, "a", u), u;
        }, o.o = function(i, u) {
          return Object.prototype.hasOwnProperty.call(i, u);
        }, o.p = "", o(o.s = 109);
      }([
        /* 0 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = o(17), u = o(18), c = o(19), f = o(45), p = o(46), d = o(47), l = o(48), a = o(49), s = o(12), b = o(32), v = o(33), h = o(31), m = o(1), y = {
            Scope: m.Scope,
            create: m.create,
            find: m.find,
            query: m.query,
            register: m.register,
            Container: i.default,
            Format: u.default,
            Leaf: c.default,
            Embed: l.default,
            Scroll: f.default,
            Block: d.default,
            Inline: p.default,
            Text: a.default,
            Attributor: {
              Attribute: s.default,
              Class: b.default,
              Style: v.default,
              Store: h.default
            }
          };
          n.default = y;
        },
        /* 1 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
            var h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, y) {
              m.__proto__ = y;
            } || function(m, y) {
              for (var _ in y) y.hasOwnProperty(_) && (m[_] = y[_]);
            };
            return function(m, y) {
              h(m, y);
              function _() {
                this.constructor = m;
              }
              m.prototype = y === null ? Object.create(y) : (_.prototype = y.prototype, new _());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = (
            /** @class */
            function(h) {
              i(m, h);
              function m(y) {
                var _ = this;
                return y = "[Parchment] " + y, _ = h.call(this, y) || this, _.message = y, _.name = _.constructor.name, _;
              }
              return m;
            }(Error)
          );
          n.ParchmentError = u;
          var c = {}, f = {}, p = {}, d = {};
          n.DATA_KEY = "__blot";
          var l;
          (function(h) {
            h[h.TYPE = 3] = "TYPE", h[h.LEVEL = 12] = "LEVEL", h[h.ATTRIBUTE = 13] = "ATTRIBUTE", h[h.BLOT = 14] = "BLOT", h[h.INLINE = 7] = "INLINE", h[h.BLOCK = 11] = "BLOCK", h[h.BLOCK_BLOT = 10] = "BLOCK_BLOT", h[h.INLINE_BLOT = 6] = "INLINE_BLOT", h[h.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", h[h.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", h[h.ANY = 15] = "ANY";
          })(l = n.Scope || (n.Scope = {}));
          function a(h, m) {
            var y = b(h);
            if (y == null)
              throw new u("Unable to create " + h + " blot");
            var _ = y, g = (
              // @ts-ignore
              h instanceof Node || h.nodeType === Node.TEXT_NODE ? h : _.create(m)
            );
            return new _(g, m);
          }
          n.create = a;
          function s(h, m) {
            return m === void 0 && (m = !1), h == null ? null : h[n.DATA_KEY] != null ? h[n.DATA_KEY].blot : m ? s(h.parentNode, m) : null;
          }
          n.find = s;
          function b(h, m) {
            m === void 0 && (m = l.ANY);
            var y;
            if (typeof h == "string")
              y = d[h] || c[h];
            else if (h instanceof Text || h.nodeType === Node.TEXT_NODE)
              y = d.text;
            else if (typeof h == "number")
              h & l.LEVEL & l.BLOCK ? y = d.block : h & l.LEVEL & l.INLINE && (y = d.inline);
            else if (h instanceof HTMLElement) {
              var _ = (h.getAttribute("class") || "").split(/\s+/);
              for (var g in _)
                if (y = f[_[g]], y)
                  break;
              y = y || p[h.tagName];
            }
            return y == null ? null : m & l.LEVEL & y.scope && m & l.TYPE & y.scope ? y : null;
          }
          n.query = b;
          function v() {
            for (var h = [], m = 0; m < arguments.length; m++)
              h[m] = arguments[m];
            if (h.length > 1)
              return h.map(function(g) {
                return v(g);
              });
            var y = h[0];
            if (typeof y.blotName != "string" && typeof y.attrName != "string")
              throw new u("Invalid definition");
            if (y.blotName === "abstract")
              throw new u("Cannot register abstract class");
            if (d[y.blotName || y.attrName] = y, typeof y.keyName == "string")
              c[y.keyName] = y;
            else if (y.className != null && (f[y.className] = y), y.tagName != null) {
              Array.isArray(y.tagName) ? y.tagName = y.tagName.map(function(g) {
                return g.toUpperCase();
              }) : y.tagName = y.tagName.toUpperCase();
              var _ = Array.isArray(y.tagName) ? y.tagName : [y.tagName];
              _.forEach(function(g) {
                (p[g] == null || y.className == null) && (p[g] = y);
              });
            }
            return y;
          }
          n.register = v;
        },
        /* 2 */
        /***/
        function(r, n, o) {
          var i = o(51), u = o(11), c = o(3), f = o(20), p = "\0", d = function(l) {
            Array.isArray(l) ? this.ops = l : l != null && Array.isArray(l.ops) ? this.ops = l.ops : this.ops = [];
          };
          d.prototype.insert = function(l, a) {
            var s = {};
            return l.length === 0 ? this : (s.insert = l, a != null && typeof a == "object" && Object.keys(a).length > 0 && (s.attributes = a), this.push(s));
          }, d.prototype.delete = function(l) {
            return l <= 0 ? this : this.push({ delete: l });
          }, d.prototype.retain = function(l, a) {
            if (l <= 0) return this;
            var s = { retain: l };
            return a != null && typeof a == "object" && Object.keys(a).length > 0 && (s.attributes = a), this.push(s);
          }, d.prototype.push = function(l) {
            var a = this.ops.length, s = this.ops[a - 1];
            if (l = c(!0, {}, l), typeof s == "object") {
              if (typeof l.delete == "number" && typeof s.delete == "number")
                return this.ops[a - 1] = { delete: s.delete + l.delete }, this;
              if (typeof s.delete == "number" && l.insert != null && (a -= 1, s = this.ops[a - 1], typeof s != "object"))
                return this.ops.unshift(l), this;
              if (u(l.attributes, s.attributes)) {
                if (typeof l.insert == "string" && typeof s.insert == "string")
                  return this.ops[a - 1] = { insert: s.insert + l.insert }, typeof l.attributes == "object" && (this.ops[a - 1].attributes = l.attributes), this;
                if (typeof l.retain == "number" && typeof s.retain == "number")
                  return this.ops[a - 1] = { retain: s.retain + l.retain }, typeof l.attributes == "object" && (this.ops[a - 1].attributes = l.attributes), this;
              }
            }
            return a === this.ops.length ? this.ops.push(l) : this.ops.splice(a, 0, l), this;
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
            var a = [], s = [];
            return this.forEach(function(b) {
              var v = l(b) ? a : s;
              v.push(b);
            }), [a, s];
          }, d.prototype.reduce = function(l, a) {
            return this.ops.reduce(l, a);
          }, d.prototype.changeLength = function() {
            return this.reduce(function(l, a) {
              return a.insert ? l + f.length(a) : a.delete ? l - a.delete : l;
            }, 0);
          }, d.prototype.length = function() {
            return this.reduce(function(l, a) {
              return l + f.length(a);
            }, 0);
          }, d.prototype.slice = function(l, a) {
            l = l || 0, typeof a != "number" && (a = 1 / 0);
            for (var s = [], b = f.iterator(this.ops), v = 0; v < a && b.hasNext(); ) {
              var h;
              v < l ? h = b.next(l - v) : (h = b.next(a - v), s.push(h)), v += f.length(h);
            }
            return new d(s);
          }, d.prototype.compose = function(l) {
            var a = f.iterator(this.ops), s = f.iterator(l.ops), b = [], v = s.peek();
            if (v != null && typeof v.retain == "number" && v.attributes == null) {
              for (var h = v.retain; a.peekType() === "insert" && a.peekLength() <= h; )
                h -= a.peekLength(), b.push(a.next());
              v.retain - h > 0 && s.next(v.retain - h);
            }
            for (var m = new d(b); a.hasNext() || s.hasNext(); )
              if (s.peekType() === "insert")
                m.push(s.next());
              else if (a.peekType() === "delete")
                m.push(a.next());
              else {
                var y = Math.min(a.peekLength(), s.peekLength()), _ = a.next(y), g = s.next(y);
                if (typeof g.retain == "number") {
                  var E = {};
                  typeof _.retain == "number" ? E.retain = y : E.insert = _.insert;
                  var A = f.attributes.compose(_.attributes, g.attributes, typeof _.retain == "number");
                  if (A && (E.attributes = A), m.push(E), !s.hasNext() && u(m.ops[m.ops.length - 1], E)) {
                    var S = new d(a.rest());
                    return m.concat(S).chop();
                  }
                } else typeof g.delete == "number" && typeof _.retain == "number" && m.push(g);
              }
            return m.chop();
          }, d.prototype.concat = function(l) {
            var a = new d(this.ops.slice());
            return l.ops.length > 0 && (a.push(l.ops[0]), a.ops = a.ops.concat(l.ops.slice(1))), a;
          }, d.prototype.diff = function(l, a) {
            if (this.ops === l.ops)
              return new d();
            var s = [this, l].map(function(y) {
              return y.map(function(_) {
                if (_.insert != null)
                  return typeof _.insert == "string" ? _.insert : p;
                var g = y === l ? "on" : "with";
                throw new Error("diff() called " + g + " non-document");
              }).join("");
            }), b = new d(), v = i(s[0], s[1], a), h = f.iterator(this.ops), m = f.iterator(l.ops);
            return v.forEach(function(y) {
              for (var _ = y[1].length; _ > 0; ) {
                var g = 0;
                switch (y[0]) {
                  case i.INSERT:
                    g = Math.min(m.peekLength(), _), b.push(m.next(g));
                    break;
                  case i.DELETE:
                    g = Math.min(_, h.peekLength()), h.next(g), b.delete(g);
                    break;
                  case i.EQUAL:
                    g = Math.min(h.peekLength(), m.peekLength(), _);
                    var E = h.next(g), A = m.next(g);
                    u(E.insert, A.insert) ? b.retain(g, f.attributes.diff(E.attributes, A.attributes)) : b.push(A).delete(g);
                    break;
                }
                _ -= g;
              }
            }), b.chop();
          }, d.prototype.eachLine = function(l, a) {
            a = a || `
`;
            for (var s = f.iterator(this.ops), b = new d(), v = 0; s.hasNext(); ) {
              if (s.peekType() !== "insert") return;
              var h = s.peek(), m = f.length(h) - s.peekLength(), y = typeof h.insert == "string" ? h.insert.indexOf(a, m) - m : -1;
              if (y < 0)
                b.push(s.next());
              else if (y > 0)
                b.push(s.next(y));
              else {
                if (l(b, s.next(1).attributes || {}, v) === !1)
                  return;
                v += 1, b = new d();
              }
            }
            b.length() > 0 && l(b, {}, v);
          }, d.prototype.transform = function(l, a) {
            if (a = !!a, typeof l == "number")
              return this.transformPosition(l, a);
            for (var s = f.iterator(this.ops), b = f.iterator(l.ops), v = new d(); s.hasNext() || b.hasNext(); )
              if (s.peekType() === "insert" && (a || b.peekType() !== "insert"))
                v.retain(f.length(s.next()));
              else if (b.peekType() === "insert")
                v.push(b.next());
              else {
                var h = Math.min(s.peekLength(), b.peekLength()), m = s.next(h), y = b.next(h);
                if (m.delete)
                  continue;
                y.delete ? v.push(y) : v.retain(h, f.attributes.transform(m.attributes, y.attributes, a));
              }
            return v.chop();
          }, d.prototype.transformPosition = function(l, a) {
            a = !!a;
            for (var s = f.iterator(this.ops), b = 0; s.hasNext() && b <= l; ) {
              var v = s.peekLength(), h = s.peekType();
              if (s.next(), h === "delete") {
                l -= Math.min(v, l - b);
                continue;
              } else h === "insert" && (b < l || !a) && (l += v);
              b += v;
            }
            return l;
          }, r.exports = d;
        },
        /* 3 */
        /***/
        function(r, n) {
          var o = Object.prototype.hasOwnProperty, i = Object.prototype.toString, u = Object.defineProperty, c = Object.getOwnPropertyDescriptor, f = function(s) {
            return typeof Array.isArray == "function" ? Array.isArray(s) : i.call(s) === "[object Array]";
          }, p = function(s) {
            if (!s || i.call(s) !== "[object Object]")
              return !1;
            var b = o.call(s, "constructor"), v = s.constructor && s.constructor.prototype && o.call(s.constructor.prototype, "isPrototypeOf");
            if (s.constructor && !b && !v)
              return !1;
            var h;
            for (h in s)
              ;
            return typeof h > "u" || o.call(s, h);
          }, d = function(s, b) {
            u && b.name === "__proto__" ? u(s, b.name, {
              enumerable: !0,
              configurable: !0,
              value: b.newValue,
              writable: !0
            }) : s[b.name] = b.newValue;
          }, l = function(s, b) {
            if (b === "__proto__")
              if (o.call(s, b)) {
                if (c)
                  return c(s, b).value;
              } else return;
            return s[b];
          };
          r.exports = function a() {
            var s, b, v, h, m, y, _ = arguments[0], g = 1, E = arguments.length, A = !1;
            for (typeof _ == "boolean" && (A = _, _ = arguments[1] || {}, g = 2), (_ == null || typeof _ != "object" && typeof _ != "function") && (_ = {}); g < E; ++g)
              if (s = arguments[g], s != null)
                for (b in s)
                  v = l(_, b), h = l(s, b), _ !== h && (A && h && (p(h) || (m = f(h))) ? (m ? (m = !1, y = v && f(v) ? v : []) : y = v && p(v) ? v : {}, d(_, { name: b, newValue: a(A, y, h) })) : typeof h < "u" && d(_, { name: b, newValue: h }));
            return _;
          };
        },
        /* 4 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.BlockEmbed = n.bubbleFormats = void 0;
          var i = /* @__PURE__ */ function() {
            function x(O, T) {
              for (var I = 0; I < T.length; I++) {
                var L = T[I];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(O, L.key, L);
              }
            }
            return function(O, T, I) {
              return T && x(O.prototype, T), I && x(O, I), O;
            };
          }(), u = function x(O, T, I) {
            O === null && (O = Function.prototype);
            var L = Object.getOwnPropertyDescriptor(O, T);
            if (L === void 0) {
              var B = Object.getPrototypeOf(O);
              return B === null ? void 0 : x(B, T, I);
            } else {
              if ("value" in L)
                return L.value;
              var $ = L.get;
              return $ === void 0 ? void 0 : $.call(I);
            }
          }, c = o(3), f = _(c), p = o(2), d = _(p), l = o(0), a = _(l), s = o(16), b = _(s), v = o(6), h = _(v), m = o(7), y = _(m);
          function _(x) {
            return x && x.__esModule ? x : { default: x };
          }
          function g(x, O) {
            if (!(x instanceof O))
              throw new TypeError("Cannot call a class as a function");
          }
          function E(x, O) {
            if (!x)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return O && (typeof O == "object" || typeof O == "function") ? O : x;
          }
          function A(x, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof O);
            x.prototype = Object.create(O && O.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(x, O) : x.__proto__ = O);
          }
          var S = 1, N = function(x) {
            A(O, x);
            function O() {
              return g(this, O), E(this, (O.__proto__ || Object.getPrototypeOf(O)).apply(this, arguments));
            }
            return i(O, [{
              key: "attach",
              value: function() {
                u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "attach", this).call(this), this.attributes = new a.default.Attributor.Store(this.domNode);
              }
            }, {
              key: "delta",
              value: function() {
                return new d.default().insert(this.value(), (0, f.default)(this.formats(), this.attributes.values()));
              }
            }, {
              key: "format",
              value: function(I, L) {
                var B = a.default.query(I, a.default.Scope.BLOCK_ATTRIBUTE);
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
                  var $ = a.default.create(P.blotName);
                  this.parent.insertBefore($, I === 0 ? this : this.next), $.insertAt(0, L.slice(0, -1));
                } else
                  u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "insertAt", this).call(this, I, L, B);
              }
            }]), O;
          }(a.default.Embed);
          N.scope = a.default.Scope.BLOCK_BLOT;
          var P = function(x) {
            A(O, x);
            function O(T) {
              g(this, O);
              var I = E(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, T));
              return I.cache = {}, I;
            }
            return i(O, [{
              key: "delta",
              value: function() {
                return this.cache.delta == null && (this.cache.delta = this.descendants(a.default.Leaf).reduce(function(I, L) {
                  return L.length() === 0 ? I : I.insert(L.value(), w(L));
                }, new d.default()).insert(`
`, w(this))), this.cache.delta;
              }
            }, {
              key: "deleteAt",
              value: function(I, L) {
                u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "deleteAt", this).call(this, I, L), this.cache = {};
              }
            }, {
              key: "formatAt",
              value: function(I, L, B, $) {
                L <= 0 || (a.default.query(B, a.default.Scope.BLOCK) ? I + L === this.length() && this.format(B, $) : u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "formatAt", this).call(this, I, Math.min(L, this.length() - I - 1), B, $), this.cache = {});
              }
            }, {
              key: "insertAt",
              value: function(I, L, B) {
                if (B != null) return u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "insertAt", this).call(this, I, L, B);
                if (L.length !== 0) {
                  var $ = L.split(`
`), K = $.shift();
                  K.length > 0 && (I < this.length() - 1 || this.children.tail == null ? u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "insertAt", this).call(this, Math.min(I, this.length() - 1), K) : this.children.tail.insertAt(this.children.tail.length(), K), this.cache = {});
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
                u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "insertBefore", this).call(this, I, L), B instanceof b.default && B.remove(), this.cache = {};
              }
            }, {
              key: "length",
              value: function() {
                return this.cache.length == null && (this.cache.length = u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "length", this).call(this) + S), this.cache.length;
              }
            }, {
              key: "moveChildren",
              value: function(I, L) {
                u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "moveChildren", this).call(this, I, L), this.cache = {};
              }
            }, {
              key: "optimize",
              value: function(I) {
                u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "optimize", this).call(this, I), this.cache = {};
              }
            }, {
              key: "path",
              value: function(I) {
                return u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "path", this).call(this, I, !0);
              }
            }, {
              key: "removeChild",
              value: function(I) {
                u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "removeChild", this).call(this, I), this.cache = {};
              }
            }, {
              key: "split",
              value: function(I) {
                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (L && (I === 0 || I >= this.length() - S)) {
                  var B = this.clone();
                  return I === 0 ? (this.parent.insertBefore(B, this), this) : (this.parent.insertBefore(B, this.next), B);
                } else {
                  var $ = u(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "split", this).call(this, I, L);
                  return this.cache = {}, $;
                }
              }
            }]), O;
          }(a.default.Block);
          P.blotName = "block", P.tagName = "P", P.defaultChild = "break", P.allowedChildren = [h.default, a.default.Embed, y.default];
          function w(x) {
            var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return x == null || (typeof x.formats == "function" && (O = (0, f.default)(O, x.formats())), x.parent == null || x.parent.blotName == "scroll" || x.parent.statics.scope !== x.statics.scope) ? O : w(x.parent, O);
          }
          n.bubbleFormats = w, n.BlockEmbed = N, n.default = P;
        },
        /* 5 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.overload = n.expandConfig = void 0;
          var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(j) {
            return typeof j;
          } : function(j) {
            return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
          }, u = /* @__PURE__ */ function() {
            function j(k, D) {
              var R = [], M = !0, G = !1, V = void 0;
              try {
                for (var C = k[Symbol.iterator](), q; !(M = (q = C.next()).done) && (R.push(q.value), !(D && R.length === D)); M = !0)
                  ;
              } catch (W) {
                G = !0, V = W;
              } finally {
                try {
                  !M && C.return && C.return();
                } finally {
                  if (G) throw V;
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
          var f = o(2), p = w(f), d = o(14), l = w(d), a = o(8), s = w(a), b = o(9), v = w(b), h = o(0), m = w(h), y = o(15), _ = w(y), g = o(3), E = w(g), A = o(10), S = w(A), N = o(34), P = w(N);
          function w(j) {
            return j && j.__esModule ? j : { default: j };
          }
          function x(j, k, D) {
            return k in j ? Object.defineProperty(j, k, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : j[k] = D, j;
          }
          function O(j, k) {
            if (!(j instanceof k))
              throw new TypeError("Cannot call a class as a function");
          }
          var T = (0, S.default)("quill"), I = function() {
            c(j, null, [{
              key: "debug",
              value: function(D) {
                D === !0 && (D = "log"), S.default.level(D);
              }
            }, {
              key: "find",
              value: function(D) {
                return D.__quill || m.default.find(D);
              }
            }, {
              key: "import",
              value: function(D) {
                return this.imports[D] == null && T.error("Cannot import " + D + ". Are you sure it was registered?"), this.imports[D];
              }
            }, {
              key: "register",
              value: function(D, R) {
                var M = this, G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (typeof D != "string") {
                  var V = D.attrName || D.blotName;
                  typeof V == "string" ? this.register("formats/" + V, D, R) : Object.keys(D).forEach(function(C) {
                    M.register(C, D[C], R);
                  });
                } else
                  this.imports[D] != null && !G && T.warn("Overwriting " + D + " with", R), this.imports[D] = R, (D.startsWith("blots/") || D.startsWith("formats/")) && R.blotName !== "abstract" ? m.default.register(R) : D.startsWith("modules") && typeof R.register == "function" && R.register();
              }
            }]);
            function j(k) {
              var D = this, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (O(this, j), this.options = L(k, R), this.container = this.options.container, this.container == null)
                return T.error("Invalid Quill container", k);
              this.options.debug && j.debug(this.options.debug);
              var M = this.container.innerHTML.trim();
              this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new s.default(), this.scroll = m.default.create(this.root, {
                emitter: this.emitter,
                whitelist: this.options.formats
              }), this.editor = new l.default(this.scroll), this.selection = new _.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(s.default.events.EDITOR_CHANGE, function(V) {
                V === s.default.events.TEXT_CHANGE && D.root.classList.toggle("ql-blank", D.editor.isBlank());
              }), this.emitter.on(s.default.events.SCROLL_UPDATE, function(V, C) {
                var q = D.selection.lastRange, W = q && q.length === 0 ? q.index : void 0;
                B.call(D, function() {
                  return D.editor.update(null, C, W);
                }, V);
              });
              var G = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + M + "<p><br></p></div>");
              this.setContents(G), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
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
                var G = this, V = $(D, R, M), C = u(V, 4);
                return D = C[0], R = C[1], M = C[3], B.call(this, function() {
                  return G.editor.deleteText(D, R);
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
                var M = this, G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : s.default.sources.API;
                return B.call(this, function() {
                  var V = M.getSelection(!0), C = new p.default();
                  if (V == null)
                    return C;
                  if (m.default.query(D, m.default.Scope.BLOCK))
                    C = M.editor.formatLine(V.index, V.length, x({}, D, R));
                  else {
                    if (V.length === 0)
                      return M.selection.format(D, R), C;
                    C = M.editor.formatText(V.index, V.length, x({}, D, R));
                  }
                  return M.setSelection(V, s.default.sources.SILENT), C;
                }, G);
              }
            }, {
              key: "formatLine",
              value: function(D, R, M, G, V) {
                var C = this, q = void 0, W = $(D, R, M, G, V), z = u(W, 4);
                return D = z[0], R = z[1], q = z[2], V = z[3], B.call(this, function() {
                  return C.editor.formatLine(D, R, q);
                }, V, D, 0);
              }
            }, {
              key: "formatText",
              value: function(D, R, M, G, V) {
                var C = this, q = void 0, W = $(D, R, M, G, V), z = u(W, 4);
                return D = z[0], R = z[1], q = z[2], V = z[3], B.call(this, function() {
                  return C.editor.formatText(D, R, q);
                }, V, D, 0);
              }
            }, {
              key: "getBounds",
              value: function(D) {
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, M = void 0;
                typeof D == "number" ? M = this.selection.getBounds(D, R) : M = this.selection.getBounds(D.index, D.length);
                var G = this.container.getBoundingClientRect();
                return {
                  bottom: M.bottom - G.top,
                  height: M.height,
                  left: M.left - G.left,
                  right: M.right - G.left,
                  top: M.top - G.top,
                  width: M.width
                };
              }
            }, {
              key: "getContents",
              value: function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - D, M = $(D, R), G = u(M, 2);
                return D = G[0], R = G[1], this.editor.getContents(D, R);
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
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - D, M = $(D, R), G = u(M, 2);
                return D = G[0], R = G[1], this.editor.getText(D, R);
              }
            }, {
              key: "hasFocus",
              value: function() {
                return this.selection.hasFocus();
              }
            }, {
              key: "insertEmbed",
              value: function(D, R, M) {
                var G = this, V = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : j.sources.API;
                return B.call(this, function() {
                  return G.editor.insertEmbed(D, R, M);
                }, V, D);
              }
            }, {
              key: "insertText",
              value: function(D, R, M, G, V) {
                var C = this, q = void 0, W = $(D, 0, M, G, V), z = u(W, 4);
                return D = z[0], q = z[2], V = z[3], B.call(this, function() {
                  return C.editor.insertText(D, R, q);
                }, V, D, R.length);
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
                var G = this, V = $(D, R, M), C = u(V, 4);
                return D = C[0], R = C[1], M = C[3], B.call(this, function() {
                  return G.editor.removeFormat(D, R);
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
                  var G = R.getLength(), V = R.editor.deleteText(0, G), C = R.editor.applyDelta(D), q = C.ops[C.ops.length - 1];
                  q != null && typeof q.insert == "string" && q.insert[q.insert.length - 1] === `
` && (R.editor.deleteText(R.getLength() - 1, 1), C.delete(1));
                  var W = V.compose(C);
                  return W;
                }, M);
              }
            }, {
              key: "setSelection",
              value: function(D, R, M) {
                if (D == null)
                  this.selection.setRange(null, R || j.sources.API);
                else {
                  var G = $(D, R, M), V = u(G, 4);
                  D = V[0], R = V[1], M = V[3], this.selection.setRange(new y.Range(D, R), M), M !== s.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
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
            parchment: m.default,
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
            [D, k].forEach(function(G) {
              G.modules = G.modules || {}, Object.keys(G.modules).forEach(function(V) {
                G.modules[V] === !0 && (G.modules[V] = {});
              });
            });
            var R = Object.keys(D.modules).concat(Object.keys(k.modules)), M = R.reduce(function(G, V) {
              var C = I.import("modules/" + V);
              return C == null ? T.error("Cannot load " + V + " module. Are you sure you registered it?") : G[V] = C.DEFAULTS || {}, G;
            }, {});
            return k.modules != null && k.modules.toolbar && k.modules.toolbar.constructor !== Object && (k.modules.toolbar = {
              container: k.modules.toolbar
            }), k = (0, E.default)(!0, {}, I.DEFAULTS, { modules: M }, D, k), ["bounds", "container", "scrollingContainer"].forEach(function(G) {
              typeof k[G] == "string" && (k[G] = document.querySelector(k[G]));
            }), k.modules = Object.keys(k.modules).reduce(function(G, V) {
              return k.modules[V] && (G[V] = k.modules[V]), G;
            }, {}), k;
          }
          function B(j, k, D, R) {
            if (this.options.strict && !this.isEnabled() && k === s.default.sources.USER)
              return new p.default();
            var M = D == null ? null : this.getSelection(), G = this.editor.delta, V = j();
            if (M != null && (D === !0 && (D = M.index), R == null ? M = K(M, V, k) : R !== 0 && (M = K(M, D, R, k)), this.setSelection(M, s.default.sources.SILENT)), V.length() > 0) {
              var C, q = [s.default.events.TEXT_CHANGE, V, G, k];
              if ((C = this.emitter).emit.apply(C, [s.default.events.EDITOR_CHANGE].concat(q)), k !== s.default.sources.SILENT) {
                var W;
                (W = this.emitter).emit.apply(W, q);
              }
            }
            return V;
          }
          function $(j, k, D, R, M) {
            var G = {};
            return typeof j.index == "number" && typeof j.length == "number" ? typeof k != "number" ? (M = R, R = D, D = k, k = j.length, j = j.index) : (k = j.length, j = j.index) : typeof k != "number" && (M = R, R = D, D = k, k = 0), (typeof D > "u" ? "undefined" : i(D)) === "object" ? (G = D, M = R) : typeof D == "string" && (R != null ? G[D] = R : M = D), M = M || s.default.sources.API, [j, k, G, M];
          }
          function K(j, k, D, R) {
            if (j == null) return null;
            var M = void 0, G = void 0;
            if (k instanceof p.default) {
              var V = [j.index, j.index + j.length].map(function(z) {
                return k.transformPosition(z, R !== s.default.sources.USER);
              }), C = u(V, 2);
              M = C[0], G = C[1];
            } else {
              var q = [j.index, j.index + j.length].map(function(z) {
                return z < k || z === k && R === s.default.sources.USER ? z : D >= 0 ? z + D : Math.max(k, z + D);
              }), W = u(q, 2);
              M = W[0], G = W[1];
            }
            return new y.Range(M, G - M);
          }
          n.expandConfig = L, n.overload = $, n.default = I;
        },
        /* 6 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = /* @__PURE__ */ function() {
            function h(m, y) {
              for (var _ = 0; _ < y.length; _++) {
                var g = y[_];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(m, g.key, g);
              }
            }
            return function(m, y, _) {
              return y && h(m.prototype, y), _ && h(m, _), m;
            };
          }(), u = function h(m, y, _) {
            m === null && (m = Function.prototype);
            var g = Object.getOwnPropertyDescriptor(m, y);
            if (g === void 0) {
              var E = Object.getPrototypeOf(m);
              return E === null ? void 0 : h(E, y, _);
            } else {
              if ("value" in g)
                return g.value;
              var A = g.get;
              return A === void 0 ? void 0 : A.call(_);
            }
          }, c = o(7), f = l(c), p = o(0), d = l(p);
          function l(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function a(h, m) {
            if (!(h instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(h, m) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return m && (typeof m == "object" || typeof m == "function") ? m : h;
          }
          function b(h, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof m);
            h.prototype = Object.create(m && m.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(h, m) : h.__proto__ = m);
          }
          var v = function(h) {
            b(m, h);
            function m() {
              return a(this, m), s(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments));
            }
            return i(m, [{
              key: "formatAt",
              value: function(_, g, E, A) {
                if (m.compare(this.statics.blotName, E) < 0 && d.default.query(E, d.default.Scope.BLOT)) {
                  var S = this.isolate(_, g);
                  A && S.wrap(E, A);
                } else
                  u(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "formatAt", this).call(this, _, g, E, A);
              }
            }, {
              key: "optimize",
              value: function(_) {
                if (u(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "optimize", this).call(this, _), this.parent instanceof m && m.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                  var g = this.parent.isolate(this.offset(), this.length());
                  this.moveChildren(g), g.wrap(this);
                }
              }
            }], [{
              key: "compare",
              value: function(_, g) {
                var E = m.order.indexOf(_), A = m.order.indexOf(g);
                return E >= 0 || A >= 0 ? E - A : _ === g ? 0 : _ < g ? -1 : 1;
              }
            }]), m;
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
          var i = o(0), u = c(i);
          function c(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function f(a, s) {
            if (!(a instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(a, s) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : a;
          }
          function d(a, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            a.prototype = Object.create(s && s.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : a.__proto__ = s);
          }
          var l = function(a) {
            d(s, a);
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
          var i = /* @__PURE__ */ function() {
            function y(_, g) {
              for (var E = 0; E < g.length; E++) {
                var A = g[E];
                A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(_, A.key, A);
              }
            }
            return function(_, g, E) {
              return g && y(_.prototype, g), E && y(_, E), _;
            };
          }(), u = function y(_, g, E) {
            _ === null && (_ = Function.prototype);
            var A = Object.getOwnPropertyDescriptor(_, g);
            if (A === void 0) {
              var S = Object.getPrototypeOf(_);
              return S === null ? void 0 : y(S, g, E);
            } else {
              if ("value" in A)
                return A.value;
              var N = A.get;
              return N === void 0 ? void 0 : N.call(E);
            }
          }, c = o(54), f = l(c), p = o(10), d = l(p);
          function l(y) {
            return y && y.__esModule ? y : { default: y };
          }
          function a(y, _) {
            if (!(y instanceof _))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(y, _) {
            if (!y)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return _ && (typeof _ == "object" || typeof _ == "function") ? _ : y;
          }
          function b(y, _) {
            if (typeof _ != "function" && _ !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof _);
            y.prototype = Object.create(_ && _.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(y, _) : y.__proto__ = _);
          }
          var v = (0, d.default)("quill:events"), h = ["selectionchange", "mousedown", "mouseup", "click"];
          h.forEach(function(y) {
            document.addEventListener(y, function() {
              for (var _ = arguments.length, g = Array(_), E = 0; E < _; E++)
                g[E] = arguments[E];
              [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(A) {
                if (A.__quill && A.__quill.emitter) {
                  var S;
                  (S = A.__quill.emitter).handleDOM.apply(S, g);
                }
              });
            });
          });
          var m = function(y) {
            b(_, y);
            function _() {
              a(this, _);
              var g = s(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this));
              return g.listeners = {}, g.on("error", v.error), g;
            }
            return i(_, [{
              key: "emit",
              value: function() {
                v.log.apply(v, arguments), u(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "emit", this).apply(this, arguments);
              }
            }, {
              key: "handleDOM",
              value: function(E) {
                for (var A = arguments.length, S = Array(A > 1 ? A - 1 : 0), N = 1; N < A; N++)
                  S[N - 1] = arguments[N];
                (this.listeners[E.type] || []).forEach(function(P) {
                  var w = P.node, x = P.handler;
                  (E.target === w || w.contains(E.target)) && x.apply(void 0, [E].concat(S));
                });
              }
            }, {
              key: "listenDOM",
              value: function(E, A, S) {
                this.listeners[E] || (this.listeners[E] = []), this.listeners[E].push({ node: A, handler: S });
              }
            }]), _;
          }(f.default);
          m.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
          }, m.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
          }, n.default = m;
        },
        /* 9 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          function i(c, f) {
            if (!(c instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          var u = function c(f) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            i(this, c), this.quill = f, this.options = p;
          };
          u.DEFAULTS = {}, n.default = u;
        },
        /* 10 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = ["error", "warn", "log", "info"], u = "warn";
          function c(p) {
            if (i.indexOf(p) <= i.indexOf(u)) {
              for (var d, l = arguments.length, a = Array(l > 1 ? l - 1 : 0), s = 1; s < l; s++)
                a[s - 1] = arguments[s];
              (d = console)[p].apply(d, a);
            }
          }
          function f(p) {
            return i.reduce(function(d, l) {
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
          var i = Array.prototype.slice, u = o(52), c = o(53), f = r.exports = function(a, s, b) {
            return b || (b = {}), a === s ? !0 : a instanceof Date && s instanceof Date ? a.getTime() === s.getTime() : !a || !s || typeof a != "object" && typeof s != "object" ? b.strict ? a === s : a == s : l(a, s, b);
          };
          function p(a) {
            return a == null;
          }
          function d(a) {
            return !(!a || typeof a != "object" || typeof a.length != "number" || typeof a.copy != "function" || typeof a.slice != "function" || a.length > 0 && typeof a[0] != "number");
          }
          function l(a, s, b) {
            var v, h;
            if (p(a) || p(s) || a.prototype !== s.prototype) return !1;
            if (c(a))
              return c(s) ? (a = i.call(a), s = i.call(s), f(a, s, b)) : !1;
            if (d(a)) {
              if (!d(s) || a.length !== s.length) return !1;
              for (v = 0; v < a.length; v++)
                if (a[v] !== s[v]) return !1;
              return !0;
            }
            try {
              var m = u(a), y = u(s);
            } catch {
              return !1;
            }
            if (m.length != y.length)
              return !1;
            for (m.sort(), y.sort(), v = m.length - 1; v >= 0; v--)
              if (m[v] != y[v])
                return !1;
            for (v = m.length - 1; v >= 0; v--)
              if (h = m[v], !f(a[h], s[h], b)) return !1;
            return typeof a == typeof s;
          }
        },
        /* 12 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = o(1), u = (
            /** @class */
            function() {
              function c(f, p, d) {
                d === void 0 && (d = {}), this.attrName = f, this.keyName = p;
                var l = i.Scope.TYPE & i.Scope.ATTRIBUTE;
                d.scope != null ? this.scope = d.scope & i.Scope.LEVEL | l : this.scope = i.Scope.ATTRIBUTE, d.whitelist != null && (this.whitelist = d.whitelist);
              }
              return c.keys = function(f) {
                return [].map.call(f.attributes, function(p) {
                  return p.name;
                });
              }, c.prototype.add = function(f, p) {
                return this.canAdd(f, p) ? (f.setAttribute(this.keyName, p), !0) : !1;
              }, c.prototype.canAdd = function(f, p) {
                var d = i.query(f, i.Scope.BLOT & (this.scope | i.Scope.TYPE));
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
          var i = /* @__PURE__ */ function() {
            function N(P, w) {
              var x = [], O = !0, T = !1, I = void 0;
              try {
                for (var L = P[Symbol.iterator](), B; !(O = (B = L.next()).done) && (x.push(B.value), !(w && x.length === w)); O = !0)
                  ;
              } catch ($) {
                T = !0, I = $;
              } finally {
                try {
                  !O && L.return && L.return();
                } finally {
                  if (T) throw I;
                }
              }
              return x;
            }
            return function(P, w) {
              if (Array.isArray(P))
                return P;
              if (Symbol.iterator in Object(P))
                return N(P, w);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = /* @__PURE__ */ function() {
            function N(P, w) {
              for (var x = 0; x < w.length; x++) {
                var O = w[x];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(P, O.key, O);
              }
            }
            return function(P, w, x) {
              return w && N(P.prototype, w), x && N(P, x), P;
            };
          }(), c = function N(P, w, x) {
            P === null && (P = Function.prototype);
            var O = Object.getOwnPropertyDescriptor(P, w);
            if (O === void 0) {
              var T = Object.getPrototypeOf(P);
              return T === null ? void 0 : N(T, w, x);
            } else {
              if ("value" in O)
                return O.value;
              var I = O.get;
              return I === void 0 ? void 0 : I.call(x);
            }
          }, f = o(2), p = y(f), d = o(0), l = y(d), a = o(4), s = y(a), b = o(6), v = y(b), h = o(7), m = y(h);
          function y(N) {
            return N && N.__esModule ? N : { default: N };
          }
          function _(N, P) {
            if (!(N instanceof P))
              throw new TypeError("Cannot call a class as a function");
          }
          function g(N, P) {
            if (!N)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return P && (typeof P == "object" || typeof P == "function") ? P : N;
          }
          function E(N, P) {
            if (typeof P != "function" && P !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof P);
            N.prototype = Object.create(P && P.prototype, { constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 } }), P && (Object.setPrototypeOf ? Object.setPrototypeOf(N, P) : N.__proto__ = P);
          }
          var A = function(N) {
            E(P, N);
            function P() {
              return _(this, P), g(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
            }
            return P;
          }(v.default);
          A.blotName = "code", A.tagName = "CODE";
          var S = function(N) {
            E(P, N);
            function P() {
              return _(this, P), g(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
            }
            return u(P, [{
              key: "delta",
              value: function() {
                var x = this, O = this.domNode.textContent;
                return O.endsWith(`
`) && (O = O.slice(0, -1)), O.split(`
`).reduce(function(T, I) {
                  return T.insert(I).insert(`
`, x.formats());
                }, new p.default());
              }
            }, {
              key: "format",
              value: function(x, O) {
                if (!(x === this.statics.blotName && O)) {
                  var T = this.descendant(m.default, this.length() - 1), I = i(T, 1), L = I[0];
                  L != null && L.deleteAt(L.length() - 1, 1), c(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "format", this).call(this, x, O);
                }
              }
            }, {
              key: "formatAt",
              value: function(x, O, T, I) {
                if (O !== 0 && !(l.default.query(T, l.default.Scope.BLOCK) == null || T === this.statics.blotName && I === this.statics.formats(this.domNode))) {
                  var L = this.newlineIndex(x);
                  if (!(L < 0 || L >= x + O)) {
                    var B = this.newlineIndex(x, !0) + 1, $ = L - B + 1, K = this.isolate(B, $), j = K.next;
                    K.format(T, I), j instanceof P && j.formatAt(0, x - B + O - $, T, I);
                  }
                }
              }
            }, {
              key: "insertAt",
              value: function(x, O, T) {
                if (T == null) {
                  var I = this.descendant(m.default, x), L = i(I, 2), B = L[0], $ = L[1];
                  B.insertAt($, O);
                }
              }
            }, {
              key: "length",
              value: function() {
                var x = this.domNode.textContent.length;
                return this.domNode.textContent.endsWith(`
`) ? x : x + 1;
              }
            }, {
              key: "newlineIndex",
              value: function(x) {
                var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (O)
                  return this.domNode.textContent.slice(0, x).lastIndexOf(`
`);
                var T = this.domNode.textContent.slice(x).indexOf(`
`);
                return T > -1 ? x + T : -1;
              }
            }, {
              key: "optimize",
              value: function(x) {
                this.domNode.textContent.endsWith(`
`) || this.appendChild(l.default.create("text", `
`)), c(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "optimize", this).call(this, x);
                var O = this.next;
                O != null && O.prev === this && O.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === O.statics.formats(O.domNode) && (O.optimize(x), O.moveChildren(this), O.remove());
              }
            }, {
              key: "replace",
              value: function(x) {
                c(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "replace", this).call(this, x), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(O) {
                  var T = l.default.find(O);
                  T == null ? O.parentNode.removeChild(O) : T instanceof l.default.Embed ? T.remove() : T.unwrap();
                });
              }
            }], [{
              key: "create",
              value: function(x) {
                var O = c(P.__proto__ || Object.getPrototypeOf(P), "create", this).call(this, x);
                return O.setAttribute("spellcheck", !1), O;
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), P;
          }(s.default);
          S.blotName = "code-block", S.tagName = "PRE", S.TAB = "  ", n.Code = A, n.default = S;
        },
        /* 14 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(j) {
            return typeof j;
          } : function(j) {
            return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
          }, u = /* @__PURE__ */ function() {
            function j(k, D) {
              var R = [], M = !0, G = !1, V = void 0;
              try {
                for (var C = k[Symbol.iterator](), q; !(M = (q = C.next()).done) && (R.push(q.value), !(D && R.length === D)); M = !0)
                  ;
              } catch (W) {
                G = !0, V = W;
              } finally {
                try {
                  !M && C.return && C.return();
                } finally {
                  if (G) throw V;
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
          }(), f = o(2), p = O(f), d = o(20), l = O(d), a = o(0), s = O(a), b = o(13), v = O(b), h = o(24), m = O(h), y = o(4), _ = O(y), g = o(16), E = O(g), A = o(21), S = O(A), N = o(11), P = O(N), w = o(3), x = O(w);
          function O(j) {
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
                var G = this.scroll.length();
                return this.scroll.batchStart(), D = K(D), D.reduce(function(V, C) {
                  var q = C.retain || C.delete || C.insert.length || 1, W = C.attributes || {};
                  if (C.insert != null) {
                    if (typeof C.insert == "string") {
                      var z = C.insert;
                      z.endsWith(`
`) && M && (M = !1, z = z.slice(0, -1)), V >= G && !z.endsWith(`
`) && (M = !0), R.scroll.insertAt(V, z);
                      var Z = R.scroll.line(V), re = u(Z, 2), X = re[0], ae = re[1], Q = (0, x.default)({}, (0, y.bubbleFormats)(X));
                      if (X instanceof _.default) {
                        var ce = X.descendant(s.default.Leaf, ae), Oe = u(ce, 1), ee = Oe[0];
                        Q = (0, x.default)(Q, (0, y.bubbleFormats)(ee));
                      }
                      W = l.default.attributes.diff(Q, W) || {};
                    } else if (i(C.insert) === "object") {
                      var U = Object.keys(C.insert)[0];
                      if (U == null) return V;
                      R.scroll.insertAt(V, U, C.insert[U]);
                    }
                    G += q;
                  }
                  return Object.keys(W).forEach(function(H) {
                    R.scroll.formatAt(V, q, H, W[H]);
                  }), V + q;
                }, 0), D.reduce(function(V, C) {
                  return typeof C.delete == "number" ? (R.scroll.deleteAt(V, C.delete), V) : V + (C.retain || C.insert.length || 1);
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
                var M = this, G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.scroll.update(), Object.keys(G).forEach(function(V) {
                  if (!(M.scroll.whitelist != null && !M.scroll.whitelist[V])) {
                    var C = M.scroll.lines(D, Math.max(R, 1)), q = R;
                    C.forEach(function(W) {
                      var z = W.length();
                      if (!(W instanceof v.default))
                        W.format(V, G[V]);
                      else {
                        var Z = D - W.offset(M.scroll), re = W.newlineIndex(Z + q) - Z + 1;
                        W.formatAt(Z, re, V, G[V]);
                      }
                      q -= z;
                    });
                  }
                }), this.scroll.optimize(), this.update(new p.default().retain(D).retain(R, (0, S.default)(G)));
              }
            }, {
              key: "formatText",
              value: function(D, R) {
                var M = this, G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return Object.keys(G).forEach(function(V) {
                  M.scroll.formatAt(D, R, V, G[V]);
                }), this.update(new p.default().retain(D).retain(R, (0, S.default)(G)));
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
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, M = [], G = [];
                R === 0 ? this.scroll.path(D).forEach(function(C) {
                  var q = u(C, 1), W = q[0];
                  W instanceof _.default ? M.push(W) : W instanceof s.default.Leaf && G.push(W);
                }) : (M = this.scroll.lines(D, R), G = this.scroll.descendants(s.default.Leaf, D, R));
                var V = [M, G].map(function(C) {
                  if (C.length === 0) return {};
                  for (var q = (0, y.bubbleFormats)(C.shift()); Object.keys(q).length > 0; ) {
                    var W = C.shift();
                    if (W == null) return q;
                    q = $((0, y.bubbleFormats)(W), q);
                  }
                  return q;
                });
                return x.default.apply(x.default, V);
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
                var M = this, G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return R = R.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(D, R), Object.keys(G).forEach(function(V) {
                  M.scroll.formatAt(D, R.length, V, G[V]);
                }), this.update(new p.default().retain(D).insert(R, (0, S.default)(G)));
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
                var M = this.getText(D, R), G = this.scroll.line(D + R), V = u(G, 2), C = V[0], q = V[1], W = 0, z = new p.default();
                C != null && (C instanceof v.default ? W = C.newlineIndex(q) - q + 1 : W = C.length() - q, z = C.delta().slice(q, q + W - 1).insert(`
`));
                var Z = this.getContents(D, R + W), re = Z.diff(new p.default().insert(M).concat(z)), X = new p.default().retain(D).concat(re);
                return this.applyDelta(X);
              }
            }, {
              key: "update",
              value: function(D) {
                var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, G = this.delta;
                if (R.length === 1 && R[0].type === "characterData" && R[0].target.data.match(L) && s.default.find(R[0].target)) {
                  var V = s.default.find(R[0].target), C = (0, y.bubbleFormats)(V), q = V.offset(this.scroll), W = R[0].oldValue.replace(m.default.CONTENTS, ""), z = new p.default().insert(W), Z = new p.default().insert(V.value()), re = new p.default().retain(q).concat(z.diff(Z, M));
                  D = re.reduce(function(X, ae) {
                    return ae.insert ? X.insert(ae.insert, C) : X.push(ae);
                  }, new p.default()), this.delta = G.compose(D);
                } else
                  this.delta = this.getDelta(), (!D || !(0, P.default)(G.compose(D), this.delta)) && (D = G.diff(this.delta, M));
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
                var R = (0, S.default)(D.attributes);
                return delete R.image, k.insert({ image: D.attributes.image }, R);
              }
              if (D.attributes != null && (D.attributes.list === !0 || D.attributes.bullet === !0) && (D = (0, S.default)(D), D.attributes.list ? D.attributes.list = "ordered" : (D.attributes.list = "bullet", delete D.attributes.bullet)), typeof D.insert == "string") {
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
          var i = /* @__PURE__ */ function() {
            function N(P, w) {
              var x = [], O = !0, T = !1, I = void 0;
              try {
                for (var L = P[Symbol.iterator](), B; !(O = (B = L.next()).done) && (x.push(B.value), !(w && x.length === w)); O = !0)
                  ;
              } catch ($) {
                T = !0, I = $;
              } finally {
                try {
                  !O && L.return && L.return();
                } finally {
                  if (T) throw I;
                }
              }
              return x;
            }
            return function(P, w) {
              if (Array.isArray(P))
                return P;
              if (Symbol.iterator in Object(P))
                return N(P, w);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = /* @__PURE__ */ function() {
            function N(P, w) {
              for (var x = 0; x < w.length; x++) {
                var O = w[x];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(P, O.key, O);
              }
            }
            return function(P, w, x) {
              return w && N(P.prototype, w), x && N(P, x), P;
            };
          }(), c = o(0), f = m(c), p = o(21), d = m(p), l = o(11), a = m(l), s = o(8), b = m(s), v = o(10), h = m(v);
          function m(N) {
            return N && N.__esModule ? N : { default: N };
          }
          function y(N) {
            if (Array.isArray(N)) {
              for (var P = 0, w = Array(N.length); P < N.length; P++)
                w[P] = N[P];
              return w;
            } else
              return Array.from(N);
          }
          function _(N, P) {
            if (!(N instanceof P))
              throw new TypeError("Cannot call a class as a function");
          }
          var g = (0, h.default)("quill:selection"), E = function N(P) {
            var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            _(this, N), this.index = P, this.length = w;
          }, A = function() {
            function N(P, w) {
              var x = this;
              _(this, N), this.emitter = w, this.scroll = P, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = f.default.create("cursor", this), this.lastRange = this.savedRange = new E(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
                x.mouseDown || setTimeout(x.update.bind(x, b.default.sources.USER), 1);
              }), this.emitter.on(b.default.events.EDITOR_CHANGE, function(O, T) {
                O === b.default.events.TEXT_CHANGE && T.length() > 0 && x.update(b.default.sources.SILENT);
              }), this.emitter.on(b.default.events.SCROLL_BEFORE_UPDATE, function() {
                if (x.hasFocus()) {
                  var O = x.getNativeRange();
                  O != null && O.start.node !== x.cursor.textNode && x.emitter.once(b.default.events.SCROLL_UPDATE, function() {
                    try {
                      x.setNativeRange(O.start.node, O.start.offset, O.end.node, O.end.offset);
                    } catch {
                    }
                  });
                }
              }), this.emitter.on(b.default.events.SCROLL_OPTIMIZE, function(O, T) {
                if (T.range) {
                  var I = T.range, L = I.startNode, B = I.startOffset, $ = I.endNode, K = I.endOffset;
                  x.setNativeRange(L, B, $, K);
                }
              }), this.update(b.default.sources.SILENT);
            }
            return u(N, [{
              key: "handleComposition",
              value: function() {
                var w = this;
                this.root.addEventListener("compositionstart", function() {
                  w.composing = !0;
                }), this.root.addEventListener("compositionend", function() {
                  if (w.composing = !1, w.cursor.parent) {
                    var x = w.cursor.restore();
                    if (!x) return;
                    setTimeout(function() {
                      w.setNativeRange(x.startNode, x.startOffset, x.endNode, x.endOffset);
                    }, 1);
                  }
                });
              }
            }, {
              key: "handleDragging",
              value: function() {
                var w = this;
                this.emitter.listenDOM("mousedown", document.body, function() {
                  w.mouseDown = !0;
                }), this.emitter.listenDOM("mouseup", document.body, function() {
                  w.mouseDown = !1, w.update(b.default.sources.USER);
                });
              }
            }, {
              key: "focus",
              value: function() {
                this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
              }
            }, {
              key: "format",
              value: function(w, x) {
                if (!(this.scroll.whitelist != null && !this.scroll.whitelist[w])) {
                  this.scroll.update();
                  var O = this.getNativeRange();
                  if (!(O == null || !O.native.collapsed || f.default.query(w, f.default.Scope.BLOCK))) {
                    if (O.start.node !== this.cursor.textNode) {
                      var T = f.default.find(O.start.node, !1);
                      if (T == null) return;
                      if (T instanceof f.default.Leaf) {
                        var I = T.split(O.start.offset);
                        T.parent.insertBefore(this.cursor, I);
                      } else
                        T.insertBefore(this.cursor, O.start.node);
                      this.cursor.attach();
                    }
                    this.cursor.format(w, x), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                  }
                }
              }
            }, {
              key: "getBounds",
              value: function(w) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, O = this.scroll.length();
                w = Math.min(w, O - 1), x = Math.min(w + x, O - 1) - w;
                var T = void 0, I = this.scroll.leaf(w), L = i(I, 2), B = L[0], $ = L[1];
                if (B == null) return null;
                var K = B.position($, !0), j = i(K, 2);
                T = j[0], $ = j[1];
                var k = document.createRange();
                if (x > 0) {
                  k.setStart(T, $);
                  var D = this.scroll.leaf(w + x), R = i(D, 2);
                  if (B = R[0], $ = R[1], B == null) return null;
                  var M = B.position($, !0), G = i(M, 2);
                  return T = G[0], $ = G[1], k.setEnd(T, $), k.getBoundingClientRect();
                } else {
                  var V = "left", C = void 0;
                  return T instanceof Text ? ($ < T.data.length ? (k.setStart(T, $), k.setEnd(T, $ + 1)) : (k.setStart(T, $ - 1), k.setEnd(T, $), V = "right"), C = k.getBoundingClientRect()) : (C = B.domNode.getBoundingClientRect(), $ > 0 && (V = "right")), {
                    bottom: C.top + C.height,
                    height: C.height,
                    left: C[V],
                    right: C[V],
                    top: C.top,
                    width: 0
                  };
                }
              }
            }, {
              key: "getNativeRange",
              value: function() {
                var w = document.getSelection();
                if (w == null || w.rangeCount <= 0) return null;
                var x = w.getRangeAt(0);
                if (x == null) return null;
                var O = this.normalizeNative(x);
                return g.info("getNativeRange", O), O;
              }
            }, {
              key: "getRange",
              value: function() {
                var w = this.getNativeRange();
                if (w == null) return [null, null];
                var x = this.normalizedToRange(w);
                return [x, w];
              }
            }, {
              key: "hasFocus",
              value: function() {
                return document.activeElement === this.root;
              }
            }, {
              key: "normalizedToRange",
              value: function(w) {
                var x = this, O = [[w.start.node, w.start.offset]];
                w.native.collapsed || O.push([w.end.node, w.end.offset]);
                var T = O.map(function(B) {
                  var $ = i(B, 2), K = $[0], j = $[1], k = f.default.find(K, !0), D = k.offset(x.scroll);
                  return j === 0 ? D : k instanceof f.default.Container ? D + k.length() : D + k.index(K, j);
                }), I = Math.min(Math.max.apply(Math, y(T)), this.scroll.length() - 1), L = Math.min.apply(Math, [I].concat(y(T)));
                return new E(L, I - L);
              }
            }, {
              key: "normalizeNative",
              value: function(w) {
                if (!S(this.root, w.startContainer) || !w.collapsed && !S(this.root, w.endContainer))
                  return null;
                var x = {
                  start: { node: w.startContainer, offset: w.startOffset },
                  end: { node: w.endContainer, offset: w.endOffset },
                  native: w
                };
                return [x.start, x.end].forEach(function(O) {
                  for (var T = O.node, I = O.offset; !(T instanceof Text) && T.childNodes.length > 0; )
                    if (T.childNodes.length > I)
                      T = T.childNodes[I], I = 0;
                    else if (T.childNodes.length === I)
                      T = T.lastChild, I = T instanceof Text ? T.data.length : T.childNodes.length + 1;
                    else
                      break;
                  O.node = T, O.offset = I;
                }), x;
              }
            }, {
              key: "rangeToNative",
              value: function(w) {
                var x = this, O = w.collapsed ? [w.index] : [w.index, w.index + w.length], T = [], I = this.scroll.length();
                return O.forEach(function(L, B) {
                  L = Math.min(I - 1, L);
                  var $ = void 0, K = x.scroll.leaf(L), j = i(K, 2), k = j[0], D = j[1], R = k.position(D, B !== 0), M = i(R, 2);
                  $ = M[0], D = M[1], T.push($, D);
                }), T.length < 2 && (T = T.concat(T)), T;
              }
            }, {
              key: "scrollIntoView",
              value: function(w) {
                var x = this.lastRange;
                if (x != null) {
                  var O = this.getBounds(x.index, x.length);
                  if (O != null) {
                    var T = this.scroll.length() - 1, I = this.scroll.line(Math.min(x.index, T)), L = i(I, 1), B = L[0], $ = B;
                    if (x.length > 0) {
                      var K = this.scroll.line(Math.min(x.index + x.length, T)), j = i(K, 1);
                      $ = j[0];
                    }
                    if (!(B == null || $ == null)) {
                      var k = w.getBoundingClientRect();
                      O.top < k.top ? w.scrollTop -= k.top - O.top : O.bottom > k.bottom && (w.scrollTop += O.bottom - k.bottom);
                    }
                  }
                }
              }
            }, {
              key: "setNativeRange",
              value: function(w, x) {
                var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : w, T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : x, I = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                if (g.info("setNativeRange", w, x, O, T), !(w != null && (this.root.parentNode == null || w.parentNode == null || O.parentNode == null))) {
                  var L = document.getSelection();
                  if (L != null)
                    if (w != null) {
                      this.hasFocus() || this.root.focus();
                      var B = (this.getNativeRange() || {}).native;
                      if (B == null || I || w !== B.startContainer || x !== B.startOffset || O !== B.endContainer || T !== B.endOffset) {
                        w.tagName == "BR" && (x = [].indexOf.call(w.parentNode.childNodes, w), w = w.parentNode), O.tagName == "BR" && (T = [].indexOf.call(O.parentNode.childNodes, O), O = O.parentNode);
                        var $ = document.createRange();
                        $.setStart(w, x), $.setEnd(O, T), L.removeAllRanges(), L.addRange($);
                      }
                    } else
                      L.removeAllRanges(), this.root.blur(), document.body.focus();
                }
              }
            }, {
              key: "setRange",
              value: function(w) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : b.default.sources.API;
                if (typeof x == "string" && (O = x, x = !1), g.info("setRange", w), w != null) {
                  var T = this.rangeToNative(w);
                  this.setNativeRange.apply(this, y(T).concat([x]));
                } else
                  this.setNativeRange(null);
                this.update(O);
              }
            }, {
              key: "update",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b.default.sources.USER, x = this.lastRange, O = this.getRange(), T = i(O, 2), I = T[0], L = T[1];
                if (this.lastRange = I, this.lastRange != null && (this.savedRange = this.lastRange), !(0, a.default)(x, this.lastRange)) {
                  var B;
                  !this.composing && L != null && L.native.collapsed && L.start.node !== this.cursor.textNode && this.cursor.restore();
                  var $ = [b.default.events.SELECTION_CHANGE, (0, d.default)(this.lastRange), (0, d.default)(x), w];
                  if ((B = this.emitter).emit.apply(B, [b.default.events.EDITOR_CHANGE].concat($)), w !== b.default.sources.SILENT) {
                    var K;
                    (K = this.emitter).emit.apply(K, $);
                  }
                }
              }
            }]), N;
          }();
          function S(N, P) {
            try {
              P.parentNode;
            } catch {
              return !1;
            }
            return P instanceof Text && (P = P.parentNode), N.contains(P);
          }
          n.Range = E, n.default = A;
        },
        /* 16 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = /* @__PURE__ */ function() {
            function b(v, h) {
              for (var m = 0; m < h.length; m++) {
                var y = h[m];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(v, y.key, y);
              }
            }
            return function(v, h, m) {
              return h && b(v.prototype, h), m && b(v, m), v;
            };
          }(), u = function b(v, h, m) {
            v === null && (v = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(v, h);
            if (y === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : b(_, h, m);
            } else {
              if ("value" in y)
                return y.value;
              var g = y.get;
              return g === void 0 ? void 0 : g.call(m);
            }
          }, c = o(0), f = p(c);
          function p(b) {
            return b && b.__esModule ? b : { default: b };
          }
          function d(b, v) {
            if (!(b instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(b, v) {
            if (!b)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : b;
          }
          function a(b, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            b.prototype = Object.create(v && v.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(b, v) : b.__proto__ = v);
          }
          var s = function(b) {
            a(v, b);
            function v() {
              return d(this, v), l(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
            }
            return i(v, [{
              key: "insertInto",
              value: function(m, y) {
                m.children.length === 0 ? u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "insertInto", this).call(this, m, y) : this.remove();
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
          var i = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, s) {
              a.__proto__ = s;
            } || function(a, s) {
              for (var b in s) s.hasOwnProperty(b) && (a[b] = s[b]);
            };
            return function(a, s) {
              l(a, s);
              function b() {
                this.constructor = a;
              }
              a.prototype = s === null ? Object.create(s) : (b.prototype = s.prototype, new b());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(44), c = o(30), f = o(1), p = (
            /** @class */
            function(l) {
              i(a, l);
              function a(s) {
                var b = l.call(this, s) || this;
                return b.build(), b;
              }
              return a.prototype.appendChild = function(s) {
                this.insertBefore(s);
              }, a.prototype.attach = function() {
                l.prototype.attach.call(this), this.children.forEach(function(s) {
                  s.attach();
                });
              }, a.prototype.build = function() {
                var s = this;
                this.children = new u.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(b) {
                  try {
                    var v = d(b);
                    s.insertBefore(v, s.children.head || void 0);
                  } catch (h) {
                    if (h instanceof f.ParchmentError)
                      return;
                    throw h;
                  }
                });
              }, a.prototype.deleteAt = function(s, b) {
                if (s === 0 && b === this.length())
                  return this.remove();
                this.children.forEachAt(s, b, function(v, h, m) {
                  v.deleteAt(h, m);
                });
              }, a.prototype.descendant = function(s, b) {
                var v = this.children.find(b), h = v[0], m = v[1];
                return s.blotName == null && s(h) || s.blotName != null && h instanceof s ? [h, m] : h instanceof a ? h.descendant(s, m) : [null, -1];
              }, a.prototype.descendants = function(s, b, v) {
                b === void 0 && (b = 0), v === void 0 && (v = Number.MAX_VALUE);
                var h = [], m = v;
                return this.children.forEachAt(b, v, function(y, _, g) {
                  (s.blotName == null && s(y) || s.blotName != null && y instanceof s) && h.push(y), y instanceof a && (h = h.concat(y.descendants(s, _, m))), m -= g;
                }), h;
              }, a.prototype.detach = function() {
                this.children.forEach(function(s) {
                  s.detach();
                }), l.prototype.detach.call(this);
              }, a.prototype.formatAt = function(s, b, v, h) {
                this.children.forEachAt(s, b, function(m, y, _) {
                  m.formatAt(y, _, v, h);
                });
              }, a.prototype.insertAt = function(s, b, v) {
                var h = this.children.find(s), m = h[0], y = h[1];
                if (m)
                  m.insertAt(y, b, v);
                else {
                  var _ = v == null ? f.create("text", b) : f.create(b, v);
                  this.appendChild(_);
                }
              }, a.prototype.insertBefore = function(s, b) {
                if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(v) {
                  return s instanceof v;
                }))
                  throw new f.ParchmentError("Cannot insert " + s.statics.blotName + " into " + this.statics.blotName);
                s.insertInto(this, b);
              }, a.prototype.length = function() {
                return this.children.reduce(function(s, b) {
                  return s + b.length();
                }, 0);
              }, a.prototype.moveChildren = function(s, b) {
                this.children.forEach(function(v) {
                  s.insertBefore(v, b);
                });
              }, a.prototype.optimize = function(s) {
                if (l.prototype.optimize.call(this, s), this.children.length === 0)
                  if (this.statics.defaultChild != null) {
                    var b = f.create(this.statics.defaultChild);
                    this.appendChild(b), b.optimize(s);
                  } else
                    this.remove();
              }, a.prototype.path = function(s, b) {
                b === void 0 && (b = !1);
                var v = this.children.find(s, b), h = v[0], m = v[1], y = [[this, s]];
                return h instanceof a ? y.concat(h.path(m, b)) : (h != null && y.push([h, m]), y);
              }, a.prototype.removeChild = function(s) {
                this.children.remove(s);
              }, a.prototype.replace = function(s) {
                s instanceof a && s.moveChildren(this), l.prototype.replace.call(this, s);
              }, a.prototype.split = function(s, b) {
                if (b === void 0 && (b = !1), !b) {
                  if (s === 0)
                    return this;
                  if (s === this.length())
                    return this.next;
                }
                var v = this.clone();
                return this.parent.insertBefore(v, this.next), this.children.forEachAt(s, this.length(), function(h, m, y) {
                  h = h.split(m, b), v.appendChild(h);
                }), v;
              }, a.prototype.unwrap = function() {
                this.moveChildren(this.parent, this.next), this.remove();
              }, a.prototype.update = function(s, b) {
                var v = this, h = [], m = [];
                s.forEach(function(y) {
                  y.target === v.domNode && y.type === "childList" && (h.push.apply(h, y.addedNodes), m.push.apply(m, y.removedNodes));
                }), m.forEach(function(y) {
                  if (!(y.parentNode != null && // @ts-ignore
                  y.tagName !== "IFRAME" && document.body.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                    var _ = f.find(y);
                    _ != null && (_.domNode.parentNode == null || _.domNode.parentNode === v.domNode) && _.detach();
                  }
                }), h.filter(function(y) {
                  return y.parentNode == v.domNode;
                }).sort(function(y, _) {
                  return y === _ ? 0 : y.compareDocumentPosition(_) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
                }).forEach(function(y) {
                  var _ = null;
                  y.nextSibling != null && (_ = f.find(y.nextSibling));
                  var g = d(y);
                  (g.next != _ || g.next == null) && (g.parent != null && g.parent.removeChild(v), v.insertBefore(g, _ || void 0));
                });
              }, a;
            }(c.default)
          );
          function d(l) {
            var a = f.find(l);
            if (a == null)
              try {
                a = f.create(l);
              } catch {
                a = f.create(f.Scope.INLINE), [].slice.call(l.childNodes).forEach(function(b) {
                  a.domNode.appendChild(b);
                }), l.parentNode && l.parentNode.replaceChild(a.domNode, l), a.attach();
              }
            return a;
          }
          n.default = p;
        },
        /* 18 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, s) {
              a.__proto__ = s;
            } || function(a, s) {
              for (var b in s) s.hasOwnProperty(b) && (a[b] = s[b]);
            };
            return function(a, s) {
              l(a, s);
              function b() {
                this.constructor = a;
              }
              a.prototype = s === null ? Object.create(s) : (b.prototype = s.prototype, new b());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(12), c = o(31), f = o(17), p = o(1), d = (
            /** @class */
            function(l) {
              i(a, l);
              function a(s) {
                var b = l.call(this, s) || this;
                return b.attributes = new c.default(b.domNode), b;
              }
              return a.formats = function(s) {
                if (typeof this.tagName == "string")
                  return !0;
                if (Array.isArray(this.tagName))
                  return s.tagName.toLowerCase();
              }, a.prototype.format = function(s, b) {
                var v = p.query(s);
                v instanceof u.default ? this.attributes.attribute(v, b) : b && v != null && (s !== this.statics.blotName || this.formats()[s] !== b) && this.replaceWith(s, b);
              }, a.prototype.formats = function() {
                var s = this.attributes.values(), b = this.statics.formats(this.domNode);
                return b != null && (s[this.statics.blotName] = b), s;
              }, a.prototype.replaceWith = function(s, b) {
                var v = l.prototype.replaceWith.call(this, s, b);
                return this.attributes.copy(v), v;
              }, a.prototype.update = function(s, b) {
                var v = this;
                l.prototype.update.call(this, s, b), s.some(function(h) {
                  return h.target === v.domNode && h.type === "attributes";
                }) && this.attributes.build();
              }, a.prototype.wrap = function(s, b) {
                var v = l.prototype.wrap.call(this, s, b);
                return v instanceof a && v.statics.scope === this.statics.scope && this.attributes.move(v), v;
              }, a;
            }(f.default)
          );
          n.default = d;
        },
        /* 19 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var a in l) l.hasOwnProperty(a) && (d[a] = l[a]);
            };
            return function(d, l) {
              p(d, l);
              function a() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (a.prototype = l.prototype, new a());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(30), c = o(1), f = (
            /** @class */
            function(p) {
              i(d, p);
              function d() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return d.value = function(l) {
                return !0;
              }, d.prototype.index = function(l, a) {
                return this.domNode === l || this.domNode.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(a, 1) : -1;
              }, d.prototype.position = function(l, a) {
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
          var i = o(11), u = o(3), c = {
            attributes: {
              compose: function(p, d, l) {
                typeof p != "object" && (p = {}), typeof d != "object" && (d = {});
                var a = u(!0, {}, d);
                l || (a = Object.keys(a).reduce(function(b, v) {
                  return a[v] != null && (b[v] = a[v]), b;
                }, {}));
                for (var s in p)
                  p[s] !== void 0 && d[s] === void 0 && (a[s] = p[s]);
                return Object.keys(a).length > 0 ? a : void 0;
              },
              diff: function(p, d) {
                typeof p != "object" && (p = {}), typeof d != "object" && (d = {});
                var l = Object.keys(p).concat(Object.keys(d)).reduce(function(a, s) {
                  return i(p[s], d[s]) || (a[s] = d[s] === void 0 ? null : d[s]), a;
                }, {});
                return Object.keys(l).length > 0 ? l : void 0;
              },
              transform: function(p, d, l) {
                if (typeof p != "object") return d;
                if (typeof d == "object") {
                  if (!l) return d;
                  var a = Object.keys(d).reduce(function(s, b) {
                    return p[b] === void 0 && (s[b] = d[b]), s;
                  }, {});
                  return Object.keys(a).length > 0 ? a : void 0;
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
              var l = this.offset, a = c.length(d);
              if (p >= a - l ? (p = a - l, this.index += 1, this.offset = 0) : this.offset += p, typeof d.delete == "number")
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
              var p = this.offset, d = this.index, l = this.next(), a = this.ops.slice(this.index);
              return this.offset = p, this.index = d, [l].concat(a);
            } else return [];
          }, r.exports = c;
        },
        /* 21 */
        /***/
        function(r, n) {
          var o = function() {
            function i(v, h) {
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
            function p(v, h, m, y, _) {
              typeof h == "object" && (m = h.depth, y = h.prototype, _ = h.includeNonEnumerable, h = h.circular);
              var g = [], E = [], A = typeof Buffer < "u";
              typeof h > "u" && (h = !0), typeof m > "u" && (m = 1 / 0);
              function S(N, P) {
                if (N === null)
                  return null;
                if (P === 0)
                  return N;
                var w, x;
                if (typeof N != "object")
                  return N;
                if (i(N, u))
                  w = new u();
                else if (i(N, c))
                  w = new c();
                else if (i(N, f))
                  w = new f(function(k, D) {
                    N.then(function(R) {
                      k(S(R, P - 1));
                    }, function(R) {
                      D(S(R, P - 1));
                    });
                  });
                else if (p.__isArray(N))
                  w = [];
                else if (p.__isRegExp(N))
                  w = new RegExp(N.source, b(N)), N.lastIndex && (w.lastIndex = N.lastIndex);
                else if (p.__isDate(N))
                  w = new Date(N.getTime());
                else {
                  if (A && Buffer.isBuffer(N))
                    return Buffer.allocUnsafe ? w = Buffer.allocUnsafe(N.length) : w = new Buffer(N.length), N.copy(w), w;
                  i(N, Error) ? w = Object.create(N) : typeof y > "u" ? (x = Object.getPrototypeOf(N), w = Object.create(x)) : (w = Object.create(y), x = y);
                }
                if (h) {
                  var O = g.indexOf(N);
                  if (O != -1)
                    return E[O];
                  g.push(N), E.push(w);
                }
                i(N, u) && N.forEach(function(k, D) {
                  var R = S(D, P - 1), M = S(k, P - 1);
                  w.set(R, M);
                }), i(N, c) && N.forEach(function(k) {
                  var D = S(k, P - 1);
                  w.add(D);
                });
                for (var T in N) {
                  var I;
                  x && (I = Object.getOwnPropertyDescriptor(x, T)), !(I && I.set == null) && (w[T] = S(N[T], P - 1));
                }
                if (Object.getOwnPropertySymbols)
                  for (var L = Object.getOwnPropertySymbols(N), T = 0; T < L.length; T++) {
                    var B = L[T], $ = Object.getOwnPropertyDescriptor(N, B);
                    $ && !$.enumerable && !_ || (w[B] = S(N[B], P - 1), $.enumerable || Object.defineProperty(w, B, {
                      enumerable: !1
                    }));
                  }
                if (_)
                  for (var K = Object.getOwnPropertyNames(N), T = 0; T < K.length; T++) {
                    var j = K[T], $ = Object.getOwnPropertyDescriptor(N, j);
                    $ && $.enumerable || (w[j] = S(N[j], P - 1), Object.defineProperty(w, j, {
                      enumerable: !1
                    }));
                  }
                return w;
              }
              return S(v, m);
            }
            p.clonePrototype = function(h) {
              if (h === null)
                return null;
              var m = function() {
              };
              return m.prototype = h, new m();
            };
            function d(v) {
              return Object.prototype.toString.call(v);
            }
            p.__objToStr = d;
            function l(v) {
              return typeof v == "object" && d(v) === "[object Date]";
            }
            p.__isDate = l;
            function a(v) {
              return typeof v == "object" && d(v) === "[object Array]";
            }
            p.__isArray = a;
            function s(v) {
              return typeof v == "object" && d(v) === "[object RegExp]";
            }
            p.__isRegExp = s;
            function b(v) {
              var h = "";
              return v.global && (h += "g"), v.ignoreCase && (h += "i"), v.multiline && (h += "m"), h;
            }
            return p.__getRegExpFlags = b, p;
          }();
          typeof r == "object" && r.exports && (r.exports = o);
        },
        /* 22 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = /* @__PURE__ */ function() {
            function w(x, O) {
              var T = [], I = !0, L = !1, B = void 0;
              try {
                for (var $ = x[Symbol.iterator](), K; !(I = (K = $.next()).done) && (T.push(K.value), !(O && T.length === O)); I = !0)
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
            return function(x, O) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return w(x, O);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = /* @__PURE__ */ function() {
            function w(x, O) {
              for (var T = 0; T < O.length; T++) {
                var I = O[T];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(x, I.key, I);
              }
            }
            return function(x, O, T) {
              return O && w(x.prototype, O), T && w(x, T), x;
            };
          }(), c = function w(x, O, T) {
            x === null && (x = Function.prototype);
            var I = Object.getOwnPropertyDescriptor(x, O);
            if (I === void 0) {
              var L = Object.getPrototypeOf(x);
              return L === null ? void 0 : w(L, O, T);
            } else {
              if ("value" in I)
                return I.value;
              var B = I.get;
              return B === void 0 ? void 0 : B.call(T);
            }
          }, f = o(0), p = g(f), d = o(8), l = g(d), a = o(4), s = g(a), b = o(16), v = g(b), h = o(13), m = g(h), y = o(25), _ = g(y);
          function g(w) {
            return w && w.__esModule ? w : { default: w };
          }
          function E(w, x) {
            if (!(w instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          function A(w, x) {
            if (!w)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return x && (typeof x == "object" || typeof x == "function") ? x : w;
          }
          function S(w, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof x);
            w.prototype = Object.create(x && x.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(w, x) : w.__proto__ = x);
          }
          function N(w) {
            return w instanceof s.default || w instanceof a.BlockEmbed;
          }
          var P = function(w) {
            S(x, w);
            function x(O, T) {
              E(this, x);
              var I = A(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, O));
              return I.emitter = T.emitter, Array.isArray(T.whitelist) && (I.whitelist = T.whitelist.reduce(function(L, B) {
                return L[B] = !0, L;
              }, {})), I.domNode.addEventListener("DOMNodeInserted", function() {
              }), I.optimize(), I.enable(), I;
            }
            return u(x, [{
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
                var L = this.line(T), B = i(L, 2), $ = B[0], K = B[1], j = this.line(T + I), k = i(j, 1), D = k[0];
                if (c(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "deleteAt", this).call(this, T, I), D != null && $ !== D && K > 0) {
                  if ($ instanceof a.BlockEmbed || D instanceof a.BlockEmbed) {
                    this.optimize();
                    return;
                  }
                  if ($ instanceof m.default) {
                    var R = $.newlineIndex($.length(), !0);
                    if (R > -1 && ($ = $.split(R + 1), $ === D)) {
                      this.optimize();
                      return;
                    }
                  } else if (D instanceof m.default) {
                    var M = D.newlineIndex(0);
                    M > -1 && D.split(M + 1);
                  }
                  var G = D.children.head instanceof v.default ? null : D.children.head;
                  $.moveChildren(D, G), $.remove();
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
                this.whitelist != null && !this.whitelist[L] || (c(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "formatAt", this).call(this, T, I, L, B), this.optimize());
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
                    c(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "insertAt", this).call(this, T, I, L);
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
                c(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "insertBefore", this).call(this, T, I);
              }
            }, {
              key: "leaf",
              value: function(T) {
                return this.path(T).pop() || [null, -1];
              }
            }, {
              key: "line",
              value: function(T) {
                return T === this.length() ? this.line(T - 1) : this.descendant(N, T);
              }
            }, {
              key: "lines",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, L = function B($, K, j) {
                  var k = [], D = j;
                  return $.children.forEachAt(K, j, function(R, M, G) {
                    N(R) ? k.push(R) : R instanceof p.default.Container && (k = k.concat(B(R, M, D))), D -= G;
                  }), k;
                };
                return L(this, T, I);
              }
            }, {
              key: "optimize",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.batch !== !0 && (c(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "optimize", this).call(this, T, I), T.length > 0 && this.emitter.emit(l.default.events.SCROLL_OPTIMIZE, T, I));
              }
            }, {
              key: "path",
              value: function(T) {
                return c(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "path", this).call(this, T).slice(1);
              }
            }, {
              key: "update",
              value: function(T) {
                if (this.batch !== !0) {
                  var I = l.default.sources.USER;
                  typeof T == "string" && (I = T), Array.isArray(T) || (T = this.observer.takeRecords()), T.length > 0 && this.emitter.emit(l.default.events.SCROLL_BEFORE_UPDATE, I, T), c(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "update", this).call(this, T.concat([])), T.length > 0 && this.emitter.emit(l.default.events.SCROLL_UPDATE, I, T);
                }
              }
            }]), x;
          }(p.default.Scroll);
          P.blotName = "scroll", P.className = "ql-editor", P.tagName = "DIV", P.defaultChild = "block", P.allowedChildren = [s.default, a.BlockEmbed, _.default], n.default = P;
        },
        /* 23 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.SHORTKEY = n.default = void 0;
          var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
            return typeof C;
          } : function(C) {
            return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
          }, u = /* @__PURE__ */ function() {
            function C(q, W) {
              var z = [], Z = !0, re = !1, X = void 0;
              try {
                for (var ae = q[Symbol.iterator](), Q; !(Z = (Q = ae.next()).done) && (z.push(Q.value), !(W && z.length === W)); Z = !0)
                  ;
              } catch (ce) {
                re = !0, X = ce;
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
          }(), f = o(21), p = w(f), d = o(11), l = w(d), a = o(3), s = w(a), b = o(2), v = w(b), h = o(20), m = w(h), y = o(0), _ = w(y), g = o(5), E = w(g), A = o(10), S = w(A), N = o(9), P = w(N);
          function w(C) {
            return C && C.__esModule ? C : { default: C };
          }
          function x(C, q, W) {
            return q in C ? Object.defineProperty(C, q, { value: W, enumerable: !0, configurable: !0, writable: !0 }) : C[q] = W, C;
          }
          function O(C, q) {
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
          var L = (0, S.default)("quill:keyboard"), B = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", $ = function(C) {
            I(q, C), c(q, null, [{
              key: "match",
              value: function(z, Z) {
                return Z = V(Z), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(re) {
                  return !!Z[re] !== z[re] && Z[re] !== null;
                }) ? !1 : Z.key === (z.which || z.keyCode);
              }
            }]);
            function q(W, z) {
              O(this, q);
              var Z = T(this, (q.__proto__ || Object.getPrototypeOf(q)).call(this, W, z));
              return Z.bindings = {}, Object.keys(Z.options.bindings).forEach(function(re) {
                re === "list autofill" && W.scroll.whitelist != null && !W.scroll.whitelist.list || Z.options.bindings[re] && Z.addBinding(Z.options.bindings[re]);
              }), Z.addBinding({ key: q.keys.ENTER, shiftKey: null }, R), Z.addBinding({ key: q.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
              }), /Firefox/i.test(navigator.userAgent) ? (Z.addBinding({ key: q.keys.BACKSPACE }, { collapsed: !0 }, j), Z.addBinding({ key: q.keys.DELETE }, { collapsed: !0 }, k)) : (Z.addBinding({ key: q.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, j), Z.addBinding({ key: q.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, k)), Z.addBinding({ key: q.keys.BACKSPACE }, { collapsed: !1 }, D), Z.addBinding({ key: q.keys.DELETE }, { collapsed: !1 }, D), Z.addBinding({ key: q.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, j), Z.listen(), Z;
            }
            return c(q, [{
              key: "addBinding",
              value: function(z) {
                var Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, re = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, X = V(z);
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
                        var Q = z.quill.getLine(ae.index), ce = u(Q, 2), Oe = ce[0], ee = ce[1], U = z.quill.getLeaf(ae.index), H = u(U, 2), J = H[0], te = H[1], Y = ae.length === 0 ? [J, te] : z.quill.getLeaf(ae.index + ae.length), ne = u(Y, 2), le = ne[0], se = ne[1], we = J instanceof _.default.Text ? J.value().slice(0, te) : "", ke = le instanceof _.default.Text ? le.value().slice(se) : "", xe = {
                          collapsed: ae.length === 0,
                          empty: ae.length === 0 && Oe.length() <= 1,
                          format: z.quill.getFormat(ae),
                          offset: ee,
                          prefix: we,
                          suffix: ke
                        }, xl = X.some(function(Ne) {
                          if (Ne.collapsed != null && Ne.collapsed !== xe.collapsed || Ne.empty != null && Ne.empty !== xe.empty || Ne.offset != null && Ne.offset !== xe.offset) return !1;
                          if (Array.isArray(Ne.format)) {
                            if (Ne.format.every(function(We) {
                              return xe.format[We] == null;
                            }))
                              return !1;
                          } else if (i(Ne.format) === "object" && !Object.keys(Ne.format).every(function(We) {
                            return Ne.format[We] === !0 ? xe.format[We] != null : Ne.format[We] === !1 ? xe.format[We] == null : (0, l.default)(Ne.format[We], xe.format[We]);
                          }))
                            return !1;
                          return Ne.prefix != null && !Ne.prefix.test(xe.prefix) || Ne.suffix != null && !Ne.suffix.test(xe.suffix) ? !1 : Ne.handler.call(z, ae, xe) !== !0;
                        });
                        xl && Z.preventDefault();
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
              bold: G("bold"),
              italic: G("italic"),
              underline: G("underline"),
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
                  var ce = new v.default().retain(q.index - ae).delete(z + 1).retain(X.length() - 2 - ae).retain(1, { list: Q });
                  this.quill.updateContents(ce, E.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(q.index - z, E.default.sources.SILENT);
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
            }, x(W, z, /^$/), x(W, "handler", function(re) {
              var X = re.index;
              C === $.keys.RIGHT && (X += re.length + 1);
              var ae = this.quill.getLeaf(X), Q = u(ae, 1), ce = Q[0];
              return ce instanceof _.default.Embed ? (C === $.keys.LEFT ? q ? this.quill.setSelection(re.index - 1, re.length + 1, E.default.sources.USER) : this.quill.setSelection(re.index - 1, E.default.sources.USER) : q ? this.quill.setSelection(re.index, re.length + 1, E.default.sources.USER) : this.quill.setSelection(re.index + re.length + 1, E.default.sources.USER), !1) : !0;
            }), W;
          }
          function j(C, q) {
            if (!(C.index === 0 || this.quill.getLength() <= 1)) {
              var W = this.quill.getLine(C.index), z = u(W, 1), Z = z[0], re = {};
              if (q.offset === 0) {
                var X = this.quill.getLine(C.index - 1), ae = u(X, 1), Q = ae[0];
                if (Q != null && Q.length() > 1) {
                  var ce = Z.formats(), Oe = this.quill.getFormat(C.index - 1, 1);
                  re = m.default.attributes.diff(ce, Oe) || {};
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
                var Q = this.quill.getLine(C.index + 1), ce = u(Q, 1), Oe = ce[0];
                if (Oe) {
                  var ee = ae.formats(), U = this.quill.getFormat(C.index, 1);
                  z = m.default.attributes.diff(ee, U) || {}, Z = Oe.length();
                }
              }
              this.quill.deleteText(C.index, W, E.default.sources.USER), Object.keys(z).length > 0 && this.quill.formatLine(C.index + Z - 1, W, z, E.default.sources.USER);
            }
          }
          function D(C) {
            var q = this.quill.getLines(C), W = {};
            if (q.length > 1) {
              var z = q[0].formats(), Z = q[q.length - 1].formats();
              W = m.default.attributes.diff(Z, z) || {};
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
                var z = _.default.query("code-block"), Z = W.index, re = W.length, X = this.quill.scroll.descendant(z, Z), ae = u(X, 2), Q = ae[0], ce = ae[1];
                if (Q != null) {
                  var Oe = this.quill.getIndex(Q), ee = Q.newlineIndex(ce, !0) + 1, U = Q.newlineIndex(Oe + ce + re), H = Q.domNode.textContent.slice(ee, U).split(`
`);
                  ce = 0, H.forEach(function(J, te) {
                    C ? (Q.insertAt(ee + ce, z.TAB), ce += z.TAB.length, te === 0 ? Z += z.TAB.length : re += z.TAB.length) : J.startsWith(z.TAB) && (Q.deleteAt(ee + ce, z.TAB.length), ce -= z.TAB.length, te === 0 ? Z -= z.TAB.length : re -= z.TAB.length), ce += J.length + 1;
                  }), this.quill.update(E.default.sources.USER), this.quill.setSelection(Z, re, E.default.sources.SILENT);
                }
              }
            };
          }
          function G(C) {
            return {
              key: C[0].toUpperCase(),
              shortKey: !0,
              handler: function(W, z) {
                this.quill.format(C, !z.format[C], E.default.sources.USER);
              }
            };
          }
          function V(C) {
            if (typeof C == "string" || typeof C == "number")
              return V({ key: C });
            if ((typeof C > "u" ? "undefined" : i(C)) === "object" && (C = (0, p.default)(C, !1)), typeof C.key == "string")
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
          var i = /* @__PURE__ */ function() {
            function m(y, _) {
              var g = [], E = !0, A = !1, S = void 0;
              try {
                for (var N = y[Symbol.iterator](), P; !(E = (P = N.next()).done) && (g.push(P.value), !(_ && g.length === _)); E = !0)
                  ;
              } catch (w) {
                A = !0, S = w;
              } finally {
                try {
                  !E && N.return && N.return();
                } finally {
                  if (A) throw S;
                }
              }
              return g;
            }
            return function(y, _) {
              if (Array.isArray(y))
                return y;
              if (Symbol.iterator in Object(y))
                return m(y, _);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = function m(y, _, g) {
            y === null && (y = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(y, _);
            if (E === void 0) {
              var A = Object.getPrototypeOf(y);
              return A === null ? void 0 : m(A, _, g);
            } else {
              if ("value" in E)
                return E.value;
              var S = E.get;
              return S === void 0 ? void 0 : S.call(g);
            }
          }, c = /* @__PURE__ */ function() {
            function m(y, _) {
              for (var g = 0; g < _.length; g++) {
                var E = _[g];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(y, E.key, E);
              }
            }
            return function(y, _, g) {
              return _ && m(y.prototype, _), g && m(y, g), y;
            };
          }(), f = o(0), p = a(f), d = o(7), l = a(d);
          function a(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function s(m, y) {
            if (!(m instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          function b(m, y) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == "object" || typeof y == "function") ? y : m;
          }
          function v(m, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof y);
            m.prototype = Object.create(y && y.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(m, y) : m.__proto__ = y);
          }
          var h = function(m) {
            v(y, m), c(y, null, [{
              key: "value",
              value: function() {
              }
            }]);
            function y(_, g) {
              s(this, y);
              var E = b(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, _));
              return E.selection = g, E.textNode = document.createTextNode(y.CONTENTS), E.domNode.appendChild(E.textNode), E._length = 0, E;
            }
            return c(y, [{
              key: "detach",
              value: function() {
                this.parent != null && this.parent.removeChild(this);
              }
            }, {
              key: "format",
              value: function(g, E) {
                if (this._length !== 0)
                  return u(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "format", this).call(this, g, E);
                for (var A = this, S = 0; A != null && A.statics.scope !== p.default.Scope.BLOCK_BLOT; )
                  S += A.offset(A.parent), A = A.parent;
                A != null && (this._length = y.CONTENTS.length, A.optimize(), A.formatAt(S, y.CONTENTS.length, g, E), this._length = 0);
              }
            }, {
              key: "index",
              value: function(g, E) {
                return g === this.textNode ? 0 : u(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "index", this).call(this, g, E);
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
                u(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "remove", this).call(this), this.parent = null;
              }
            }, {
              key: "restore",
              value: function() {
                if (!(this.selection.composing || this.parent == null)) {
                  var g = this.textNode, E = this.selection.getNativeRange(), A = void 0, S = void 0, N = void 0;
                  if (E != null && E.start.node === g && E.end.node === g) {
                    var P = [g, E.start.offset, E.end.offset];
                    A = P[0], S = P[1], N = P[2];
                  }
                  for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                  if (this.textNode.data !== y.CONTENTS) {
                    var w = this.textNode.data.split(y.CONTENTS).join("");
                    this.next instanceof l.default ? (A = this.next.domNode, this.next.insertAt(0, w), this.textNode.data = y.CONTENTS) : (this.textNode.data = w, this.parent.insertBefore(p.default.create(this.textNode), this), this.textNode = document.createTextNode(y.CONTENTS), this.domNode.appendChild(this.textNode));
                  }
                  if (this.remove(), S != null) {
                    var x = [S, N].map(function(T) {
                      return Math.max(0, Math.min(A.data.length, T - 1));
                    }), O = i(x, 2);
                    return S = O[0], N = O[1], {
                      startNode: A,
                      startOffset: S,
                      endNode: A,
                      endOffset: N
                    };
                  }
                }
              }
            }, {
              key: "update",
              value: function(g, E) {
                var A = this;
                if (g.some(function(N) {
                  return N.type === "characterData" && N.target === A.textNode;
                })) {
                  var S = this.restore();
                  S && (E.range = S);
                }
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }]), y;
          }(p.default.Embed);
          h.blotName = "cursor", h.className = "ql-cursor", h.tagName = "span", h.CONTENTS = "\uFEFF", n.default = h;
        },
        /* 25 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = o(0), u = p(i), c = o(4), f = p(c);
          function p(b) {
            return b && b.__esModule ? b : { default: b };
          }
          function d(b, v) {
            if (!(b instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(b, v) {
            if (!b)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : b;
          }
          function a(b, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            b.prototype = Object.create(v && v.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(b, v) : b.__proto__ = v);
          }
          var s = function(b) {
            a(v, b);
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
          var i = /* @__PURE__ */ function() {
            function h(m, y) {
              for (var _ = 0; _ < y.length; _++) {
                var g = y[_];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(m, g.key, g);
              }
            }
            return function(m, y, _) {
              return y && h(m.prototype, y), _ && h(m, _), m;
            };
          }(), u = function h(m, y, _) {
            m === null && (m = Function.prototype);
            var g = Object.getOwnPropertyDescriptor(m, y);
            if (g === void 0) {
              var E = Object.getPrototypeOf(m);
              return E === null ? void 0 : h(E, y, _);
            } else {
              if ("value" in g)
                return g.value;
              var A = g.get;
              return A === void 0 ? void 0 : A.call(_);
            }
          }, c = o(0), f = p(c);
          function p(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function d(h, m) {
            if (!(h instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(h, m) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return m && (typeof m == "object" || typeof m == "function") ? m : h;
          }
          function a(h, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof m);
            h.prototype = Object.create(m && m.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(h, m) : h.__proto__ = m);
          }
          var s = function(h) {
            a(m, h);
            function m() {
              return d(this, m), l(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments));
            }
            return i(m, [{
              key: "value",
              value: function(_) {
                var g = u(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "value", this).call(this, _);
                return g.startsWith("rgb(") ? (g = g.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + g.split(",").map(function(E) {
                  return ("00" + parseInt(E).toString(16)).slice(-2);
                }).join("")) : g;
              }
            }]), m;
          }(f.default.Attributor.Style), b = new f.default.Attributor.Class("color", "ql-color", {
            scope: f.default.Scope.INLINE
          }), v = new s("color", "color", {
            scope: f.default.Scope.INLINE
          });
          n.ColorAttributor = s, n.ColorClass = b, n.ColorStyle = v;
        },
        /* 27 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.sanitize = n.default = void 0;
          var i = /* @__PURE__ */ function() {
            function v(h, m) {
              for (var y = 0; y < m.length; y++) {
                var _ = m[y];
                _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(h, _.key, _);
              }
            }
            return function(h, m, y) {
              return m && v(h.prototype, m), y && v(h, y), h;
            };
          }(), u = function v(h, m, y) {
            h === null && (h = Function.prototype);
            var _ = Object.getOwnPropertyDescriptor(h, m);
            if (_ === void 0) {
              var g = Object.getPrototypeOf(h);
              return g === null ? void 0 : v(g, m, y);
            } else {
              if ("value" in _)
                return _.value;
              var E = _.get;
              return E === void 0 ? void 0 : E.call(y);
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
          function a(v, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            v.prototype = Object.create(h && h.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(v, h) : v.__proto__ = h);
          }
          var s = function(v) {
            a(h, v);
            function h() {
              return d(this, h), l(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return i(h, [{
              key: "format",
              value: function(y, _) {
                if (y !== this.statics.blotName || !_) return u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "format", this).call(this, y, _);
                _ = this.constructor.sanitize(_), this.domNode.setAttribute("href", _);
              }
            }], [{
              key: "create",
              value: function(y) {
                var _ = u(h.__proto__ || Object.getPrototypeOf(h), "create", this).call(this, y);
                return y = this.sanitize(y), _.setAttribute("href", y), _.setAttribute("rel", "noopener noreferrer"), _.setAttribute("target", "_blank"), _;
              }
            }, {
              key: "formats",
              value: function(y) {
                return y.getAttribute("href");
              }
            }, {
              key: "sanitize",
              value: function(y) {
                return b(y, this.PROTOCOL_WHITELIST) ? y : this.SANITIZED_URL;
              }
            }]), h;
          }(f.default);
          s.blotName = "link", s.tagName = "A", s.SANITIZED_URL = "about:blank", s.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
          function b(v, h) {
            var m = document.createElement("a");
            m.href = v;
            var y = m.href.slice(0, m.href.indexOf(":"));
            return h.indexOf(y) > -1;
          }
          n.default = s, n.sanitize = b;
        },
        /* 28 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
            return typeof h;
          } : function(h) {
            return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
          }, u = /* @__PURE__ */ function() {
            function h(m, y) {
              for (var _ = 0; _ < y.length; _++) {
                var g = y[_];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(m, g.key, g);
              }
            }
            return function(m, y, _) {
              return y && h(m.prototype, y), _ && h(m, _), m;
            };
          }(), c = o(23), f = l(c), p = o(107), d = l(p);
          function l(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function a(h, m) {
            if (!(h instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          var s = 0;
          function b(h, m) {
            h.setAttribute(m, h.getAttribute(m) !== "true");
          }
          var v = function() {
            function h(m) {
              var y = this;
              a(this, h), this.select = m, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
                y.togglePicker();
              }), this.label.addEventListener("keydown", function(_) {
                switch (_.keyCode) {
                  case f.default.keys.ENTER:
                    y.togglePicker();
                    break;
                  case f.default.keys.ESCAPE:
                    y.escape(), _.preventDefault();
                    break;
                }
              }), this.select.addEventListener("change", this.update.bind(this));
            }
            return u(h, [{
              key: "togglePicker",
              value: function() {
                this.container.classList.toggle("ql-expanded"), b(this.label, "aria-expanded"), b(this.options, "aria-hidden");
              }
            }, {
              key: "buildItem",
              value: function(y) {
                var _ = this, g = document.createElement("span");
                return g.tabIndex = "0", g.setAttribute("role", "button"), g.classList.add("ql-picker-item"), y.hasAttribute("value") && g.setAttribute("data-value", y.getAttribute("value")), y.textContent && g.setAttribute("data-label", y.textContent), g.addEventListener("click", function() {
                  _.selectItem(g, !0);
                }), g.addEventListener("keydown", function(E) {
                  switch (E.keyCode) {
                    case f.default.keys.ENTER:
                      _.selectItem(g, !0), E.preventDefault();
                      break;
                    case f.default.keys.ESCAPE:
                      _.escape(), E.preventDefault();
                      break;
                  }
                }), g;
              }
            }, {
              key: "buildLabel",
              value: function() {
                var y = document.createElement("span");
                return y.classList.add("ql-picker-label"), y.innerHTML = d.default, y.tabIndex = "0", y.setAttribute("role", "button"), y.setAttribute("aria-expanded", "false"), this.container.appendChild(y), y;
              }
            }, {
              key: "buildOptions",
              value: function() {
                var y = this, _ = document.createElement("span");
                _.classList.add("ql-picker-options"), _.setAttribute("aria-hidden", "true"), _.tabIndex = "-1", _.id = "ql-picker-options-" + s, s += 1, this.label.setAttribute("aria-controls", _.id), this.options = _, [].slice.call(this.select.options).forEach(function(g) {
                  var E = y.buildItem(g);
                  _.appendChild(E), g.selected === !0 && y.selectItem(E);
                }), this.container.appendChild(_);
              }
            }, {
              key: "buildPicker",
              value: function() {
                var y = this;
                [].slice.call(this.select.attributes).forEach(function(_) {
                  y.container.setAttribute(_.name, _.value);
                }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
              }
            }, {
              key: "escape",
              value: function() {
                var y = this;
                this.close(), setTimeout(function() {
                  return y.label.focus();
                }, 1);
              }
            }, {
              key: "close",
              value: function() {
                this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
              }
            }, {
              key: "selectItem",
              value: function(y) {
                var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = this.container.querySelector(".ql-selected");
                if (y !== g && (g != null && g.classList.remove("ql-selected"), y != null && (y.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(y.parentNode.children, y), y.hasAttribute("data-value") ? this.label.setAttribute("data-value", y.getAttribute("data-value")) : this.label.removeAttribute("data-value"), y.hasAttribute("data-label") ? this.label.setAttribute("data-label", y.getAttribute("data-label")) : this.label.removeAttribute("data-label"), _))) {
                  if (typeof Event == "function")
                    this.select.dispatchEvent(new Event("change"));
                  else if ((typeof Event > "u" ? "undefined" : i(Event)) === "object") {
                    var E = document.createEvent("Event");
                    E.initEvent("change", !0, !0), this.select.dispatchEvent(E);
                  }
                  this.close();
                }
              }
            }, {
              key: "update",
              value: function() {
                var y = void 0;
                if (this.select.selectedIndex > -1) {
                  var _ = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                  y = this.select.options[this.select.selectedIndex], this.selectItem(_);
                } else
                  this.selectItem(null);
                var g = y != null && y !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("ql-active", g);
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
          var i = o(0), u = L(i), c = o(5), f = L(c), p = o(4), d = L(p), l = o(16), a = L(l), s = o(25), b = L(s), v = o(24), h = L(v), m = o(35), y = L(m), _ = o(6), g = L(_), E = o(22), A = L(E), S = o(7), N = L(S), P = o(55), w = L(P), x = o(42), O = L(x), T = o(23), I = L(T);
          function L(B) {
            return B && B.__esModule ? B : { default: B };
          }
          f.default.register({
            "blots/block": d.default,
            "blots/block/embed": p.BlockEmbed,
            "blots/break": a.default,
            "blots/container": b.default,
            "blots/cursor": h.default,
            "blots/embed": y.default,
            "blots/inline": g.default,
            "blots/scroll": A.default,
            "blots/text": N.default,
            "modules/clipboard": w.default,
            "modules/history": O.default,
            "modules/keyboard": I.default
          }), u.default.register(d.default, a.default, h.default, g.default, A.default, N.default), n.default = f.default;
        },
        /* 30 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = o(1), u = (
            /** @class */
            function() {
              function c(f) {
                this.domNode = f, this.domNode[i.DATA_KEY] = { blot: this };
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
                  throw new i.ParchmentError("Blot definition missing tagName");
                var p;
                return Array.isArray(this.tagName) ? (typeof f == "string" && (f = f.toUpperCase(), parseInt(f).toString() === f && (f = parseInt(f))), typeof f == "number" ? p = document.createElement(this.tagName[f - 1]) : this.tagName.indexOf(f) > -1 ? p = document.createElement(f) : p = document.createElement(this.tagName[0])) : p = document.createElement(this.tagName), this.className && p.classList.add(this.className), p;
              }, c.prototype.attach = function() {
                this.parent != null && (this.scroll = this.parent.scroll);
              }, c.prototype.clone = function() {
                var f = this.domNode.cloneNode(!1);
                return i.create(f);
              }, c.prototype.detach = function() {
                this.parent != null && this.parent.removeChild(this), delete this.domNode[i.DATA_KEY];
              }, c.prototype.deleteAt = function(f, p) {
                var d = this.isolate(f, p);
                d.remove();
              }, c.prototype.formatAt = function(f, p, d, l) {
                var a = this.isolate(f, p);
                if (i.query(d, i.Scope.BLOT) != null && l)
                  a.wrap(d, l);
                else if (i.query(d, i.Scope.ATTRIBUTE) != null) {
                  var s = i.create(this.statics.scope);
                  a.wrap(s), s.format(d, l);
                }
              }, c.prototype.insertAt = function(f, p, d) {
                var l = d == null ? i.create("text", p) : i.create(p, d), a = this.split(f);
                this.parent.insertBefore(l, a);
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
                this.domNode[i.DATA_KEY] != null && delete this.domNode[i.DATA_KEY].mutations;
              }, c.prototype.remove = function() {
                this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
              }, c.prototype.replace = function(f) {
                f.parent != null && (f.parent.insertBefore(this, f.next), f.remove());
              }, c.prototype.replaceWith = function(f, p) {
                var d = typeof f == "string" ? i.create(f, p) : f;
                return d.replace(this), d;
              }, c.prototype.split = function(f, p) {
                return f === 0 ? this : this.next;
              }, c.prototype.update = function(f, p) {
              }, c.prototype.wrap = function(f, p) {
                var d = typeof f == "string" ? i.create(f, p) : f;
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
          var i = o(12), u = o(32), c = o(33), f = o(1), p = (
            /** @class */
            function() {
              function d(l) {
                this.attributes = {}, this.domNode = l, this.build();
              }
              return d.prototype.attribute = function(l, a) {
                a ? l.add(this.domNode, a) && (l.value(this.domNode) != null ? this.attributes[l.attrName] = l : delete this.attributes[l.attrName]) : (l.remove(this.domNode), delete this.attributes[l.attrName]);
              }, d.prototype.build = function() {
                var l = this;
                this.attributes = {};
                var a = i.default.keys(this.domNode), s = u.default.keys(this.domNode), b = c.default.keys(this.domNode);
                a.concat(s).concat(b).forEach(function(v) {
                  var h = f.query(v, f.Scope.ATTRIBUTE);
                  h instanceof i.default && (l.attributes[h.attrName] = h);
                });
              }, d.prototype.copy = function(l) {
                var a = this;
                Object.keys(this.attributes).forEach(function(s) {
                  var b = a.attributes[s].value(a.domNode);
                  l.format(s, b);
                });
              }, d.prototype.move = function(l) {
                var a = this;
                this.copy(l), Object.keys(this.attributes).forEach(function(s) {
                  a.attributes[s].remove(a.domNode);
                }), this.attributes = {};
              }, d.prototype.values = function() {
                var l = this;
                return Object.keys(this.attributes).reduce(function(a, s) {
                  return a[s] = l.attributes[s].value(l.domNode), a;
                }, {});
              }, d;
            }()
          );
          n.default = p;
        },
        /* 32 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var a in l) l.hasOwnProperty(a) && (d[a] = l[a]);
            };
            return function(d, l) {
              p(d, l);
              function a() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (a.prototype = l.prototype, new a());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(12);
          function c(p, d) {
            var l = p.getAttribute("class") || "";
            return l.split(/\s+/).filter(function(a) {
              return a.indexOf(d + "-") === 0;
            });
          }
          var f = (
            /** @class */
            function(p) {
              i(d, p);
              function d() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return d.keys = function(l) {
                return (l.getAttribute("class") || "").split(/\s+/).map(function(a) {
                  return a.split("-").slice(0, -1).join("-");
                });
              }, d.prototype.add = function(l, a) {
                return this.canAdd(l, a) ? (this.remove(l), l.classList.add(this.keyName + "-" + a), !0) : !1;
              }, d.prototype.remove = function(l) {
                var a = c(l, this.keyName);
                a.forEach(function(s) {
                  l.classList.remove(s);
                }), l.classList.length === 0 && l.removeAttribute("class");
              }, d.prototype.value = function(l) {
                var a = c(l, this.keyName)[0] || "", s = a.slice(this.keyName.length + 1);
                return this.canAdd(l, s) ? s : "";
              }, d;
            }(u.default)
          );
          n.default = f;
        },
        /* 33 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var a in l) l.hasOwnProperty(a) && (d[a] = l[a]);
            };
            return function(d, l) {
              p(d, l);
              function a() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (a.prototype = l.prototype, new a());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(12);
          function c(p) {
            var d = p.split("-"), l = d.slice(1).map(function(a) {
              return a[0].toUpperCase() + a.slice(1);
            }).join("");
            return d[0] + l;
          }
          var f = (
            /** @class */
            function(p) {
              i(d, p);
              function d() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return d.keys = function(l) {
                return (l.getAttribute("style") || "").split(";").map(function(a) {
                  var s = a.split(":");
                  return s[0].trim();
                });
              }, d.prototype.add = function(l, a) {
                return this.canAdd(l, a) ? (l.style[c(this.keyName)] = a, !0) : !1;
              }, d.prototype.remove = function(l) {
                l.style[c(this.keyName)] = "", l.getAttribute("style") || l.removeAttribute("style");
              }, d.prototype.value = function(l) {
                var a = l.style[c(this.keyName)];
                return this.canAdd(l, a) ? a : "";
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
          var i = /* @__PURE__ */ function() {
            function f(p, d) {
              for (var l = 0; l < d.length; l++) {
                var a = d[l];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(p, a.key, a);
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
            return i(f, [{
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
          var i = /* @__PURE__ */ function() {
            function m(y, _) {
              for (var g = 0; g < _.length; g++) {
                var E = _[g];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(y, E.key, E);
              }
            }
            return function(y, _, g) {
              return _ && m(y.prototype, _), g && m(y, g), y;
            };
          }(), u = function m(y, _, g) {
            y === null && (y = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(y, _);
            if (E === void 0) {
              var A = Object.getPrototypeOf(y);
              return A === null ? void 0 : m(A, _, g);
            } else {
              if ("value" in E)
                return E.value;
              var S = E.get;
              return S === void 0 ? void 0 : S.call(g);
            }
          }, c = o(0), f = l(c), p = o(7), d = l(p);
          function l(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function a(m, y) {
            if (!(m instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(m, y) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == "object" || typeof y == "function") ? y : m;
          }
          function b(m, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof y);
            m.prototype = Object.create(y && y.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(m, y) : m.__proto__ = y);
          }
          var v = "\uFEFF", h = function(m) {
            b(y, m);
            function y(_) {
              a(this, y);
              var g = s(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, _));
              return g.contentNode = document.createElement("span"), g.contentNode.setAttribute("contenteditable", !1), [].slice.call(g.domNode.childNodes).forEach(function(E) {
                g.contentNode.appendChild(E);
              }), g.leftGuard = document.createTextNode(v), g.rightGuard = document.createTextNode(v), g.domNode.appendChild(g.leftGuard), g.domNode.appendChild(g.contentNode), g.domNode.appendChild(g.rightGuard), g;
            }
            return i(y, [{
              key: "index",
              value: function(g, E) {
                return g === this.leftGuard ? 0 : g === this.rightGuard ? 1 : u(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "index", this).call(this, g, E);
              }
            }, {
              key: "restore",
              value: function(g) {
                var E = void 0, A = void 0, S = g.data.split(v).join("");
                if (g === this.leftGuard)
                  if (this.prev instanceof d.default) {
                    var N = this.prev.length();
                    this.prev.insertAt(N, S), E = {
                      startNode: this.prev.domNode,
                      startOffset: N + S.length
                    };
                  } else
                    A = document.createTextNode(S), this.parent.insertBefore(f.default.create(A), this), E = {
                      startNode: A,
                      startOffset: S.length
                    };
                else g === this.rightGuard && (this.next instanceof d.default ? (this.next.insertAt(0, S), E = {
                  startNode: this.next.domNode,
                  startOffset: S.length
                }) : (A = document.createTextNode(S), this.parent.insertBefore(f.default.create(A), this.next), E = {
                  startNode: A,
                  startOffset: S.length
                }));
                return g.data = v, E;
              }
            }, {
              key: "update",
              value: function(g, E) {
                var A = this;
                g.forEach(function(S) {
                  if (S.type === "characterData" && (S.target === A.leftGuard || S.target === A.rightGuard)) {
                    var N = A.restore(S.target);
                    N && (E.range = N);
                  }
                });
              }
            }]), y;
          }(f.default.Embed);
          n.default = h;
        },
        /* 36 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.AlignStyle = n.AlignClass = n.AlignAttribute = void 0;
          var i = o(0), u = c(i);
          function c(a) {
            return a && a.__esModule ? a : { default: a };
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
          var i = o(0), u = f(i), c = o(26);
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
          var i = o(0), u = c(i);
          function c(a) {
            return a && a.__esModule ? a : { default: a };
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
          var i = /* @__PURE__ */ function() {
            function m(y, _) {
              for (var g = 0; g < _.length; g++) {
                var E = _[g];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(y, E.key, E);
              }
            }
            return function(y, _, g) {
              return _ && m(y.prototype, _), g && m(y, g), y;
            };
          }(), u = function m(y, _, g) {
            y === null && (y = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(y, _);
            if (E === void 0) {
              var A = Object.getPrototypeOf(y);
              return A === null ? void 0 : m(A, _, g);
            } else {
              if ("value" in E)
                return E.value;
              var S = E.get;
              return S === void 0 ? void 0 : S.call(g);
            }
          }, c = o(0), f = p(c);
          function p(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function d(m, y) {
            if (!(m instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(m, y) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == "object" || typeof y == "function") ? y : m;
          }
          function a(m, y) {
            if (typeof y != "function" && y !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof y);
            m.prototype = Object.create(y && y.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(m, y) : m.__proto__ = y);
          }
          var s = {
            scope: f.default.Scope.INLINE,
            whitelist: ["serif", "monospace"]
          }, b = new f.default.Attributor.Class("font", "ql-font", s), v = function(m) {
            a(y, m);
            function y() {
              return d(this, y), l(this, (y.__proto__ || Object.getPrototypeOf(y)).apply(this, arguments));
            }
            return i(y, [{
              key: "value",
              value: function(g) {
                return u(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "value", this).call(this, g).replace(/["']/g, "");
              }
            }]), y;
          }(f.default.Attributor.Style), h = new v("font", "font-family", s);
          n.FontStyle = h, n.FontClass = b;
        },
        /* 40 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.SizeStyle = n.SizeClass = void 0;
          var i = o(0), u = c(i);
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
          var i = /* @__PURE__ */ function() {
            function _(g, E) {
              for (var A = 0; A < E.length; A++) {
                var S = E[A];
                S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(g, S.key, S);
              }
            }
            return function(g, E, A) {
              return E && _(g.prototype, E), A && _(g, A), g;
            };
          }(), u = o(0), c = a(u), f = o(5), p = a(f), d = o(9), l = a(d);
          function a(_) {
            return _ && _.__esModule ? _ : { default: _ };
          }
          function s(_, g) {
            if (!(_ instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function b(_, g) {
            if (!_)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : _;
          }
          function v(_, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            _.prototype = Object.create(g && g.prototype, { constructor: { value: _, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(_, g) : _.__proto__ = g);
          }
          var h = function(_) {
            v(g, _);
            function g(E, A) {
              s(this, g);
              var S = b(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, E, A));
              return S.lastRecorded = 0, S.ignoreChange = !1, S.clear(), S.quill.on(p.default.events.EDITOR_CHANGE, function(N, P, w, x) {
                N !== p.default.events.TEXT_CHANGE || S.ignoreChange || (!S.options.userOnly || x === p.default.sources.USER ? S.record(P, w) : S.transform(P));
              }), S.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, S.undo.bind(S)), S.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, S.redo.bind(S)), /Win/i.test(navigator.platform) && S.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, S.redo.bind(S)), S;
            }
            return i(g, [{
              key: "change",
              value: function(A, S) {
                if (this.stack[A].length !== 0) {
                  var N = this.stack[A].pop();
                  this.stack[S].push(N), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(N[A], p.default.sources.USER), this.ignoreChange = !1;
                  var P = y(N[A]);
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
              value: function(A, S) {
                if (A.ops.length !== 0) {
                  this.stack.redo = [];
                  var N = this.quill.getContents().diff(S), P = Date.now();
                  if (this.lastRecorded + this.options.delay > P && this.stack.undo.length > 0) {
                    var w = this.stack.undo.pop();
                    N = N.compose(w.undo), A = w.redo.compose(A);
                  } else
                    this.lastRecorded = P;
                  this.stack.undo.push({
                    redo: A,
                    undo: N
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
                this.stack.undo.forEach(function(S) {
                  S.undo = A.transform(S.undo, !0), S.redo = A.transform(S.redo, !0);
                }), this.stack.redo.forEach(function(S) {
                  S.undo = A.transform(S.undo, !0), S.redo = A.transform(S.redo, !0);
                });
              }
            }, {
              key: "undo",
              value: function() {
                this.change("undo", "redo");
              }
            }]), g;
          }(l.default);
          h.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
          };
          function m(_) {
            var g = _.ops[_.ops.length - 1];
            return g == null ? !1 : g.insert != null ? typeof g.insert == "string" && g.insert.endsWith(`
`) : g.attributes != null ? Object.keys(g.attributes).some(function(E) {
              return c.default.query(E, c.default.Scope.BLOCK) != null;
            }) : !1;
          }
          function y(_) {
            var g = _.reduce(function(A, S) {
              return A += S.delete || 0, A;
            }, 0), E = _.length() - g;
            return m(_) && (E -= 1), E;
          }
          n.default = h, n.getLastChangeIndex = y;
        },
        /* 43 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.BaseTooltip = void 0;
          var i = /* @__PURE__ */ function() {
            function R(M, G) {
              for (var V = 0; V < G.length; V++) {
                var C = G[V];
                C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(M, C.key, C);
              }
            }
            return function(M, G, V) {
              return G && R(M.prototype, G), V && R(M, V), M;
            };
          }(), u = function R(M, G, V) {
            M === null && (M = Function.prototype);
            var C = Object.getOwnPropertyDescriptor(M, G);
            if (C === void 0) {
              var q = Object.getPrototypeOf(M);
              return q === null ? void 0 : R(q, G, V);
            } else {
              if ("value" in C)
                return C.value;
              var W = C.get;
              return W === void 0 ? void 0 : W.call(V);
            }
          }, c = o(3), f = P(c), p = o(2), d = P(p), l = o(8), a = P(l), s = o(23), b = P(s), v = o(34), h = P(v), m = o(59), y = P(m), _ = o(60), g = P(_), E = o(28), A = P(E), S = o(61), N = P(S);
          function P(R) {
            return R && R.__esModule ? R : { default: R };
          }
          function w(R, M) {
            if (!(R instanceof M))
              throw new TypeError("Cannot call a class as a function");
          }
          function x(R, M) {
            if (!R)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return M && (typeof M == "object" || typeof M == "function") ? M : R;
          }
          function O(R, M) {
            if (typeof M != "function" && M !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof M);
            R.prototype = Object.create(M && M.prototype, { constructor: { value: R, enumerable: !1, writable: !0, configurable: !0 } }), M && (Object.setPrototypeOf ? Object.setPrototypeOf(R, M) : R.__proto__ = M);
          }
          var T = [!1, "center", "right", "justify"], I = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], L = [!1, "serif", "monospace"], B = ["1", "2", "3", !1], $ = ["small", !1, "large", "huge"], K = function(R) {
            O(M, R);
            function M(G, V) {
              w(this, M);
              var C = x(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this, G, V)), q = function W(z) {
                if (!document.body.contains(G.root))
                  return document.body.removeEventListener("click", W);
                C.tooltip != null && !C.tooltip.root.contains(z.target) && document.activeElement !== C.tooltip.textbox && !C.quill.hasFocus() && C.tooltip.hide(), C.pickers != null && C.pickers.forEach(function(Z) {
                  Z.container.contains(z.target) || Z.close();
                });
              };
              return G.emitter.listenDOM("click", document.body, q), C;
            }
            return i(M, [{
              key: "addModule",
              value: function(V) {
                var C = u(M.prototype.__proto__ || Object.getPrototypeOf(M.prototype), "addModule", this).call(this, V);
                return V === "toolbar" && this.extendToolbar(C), C;
              }
            }, {
              key: "buildButtons",
              value: function(V, C) {
                V.forEach(function(q) {
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
              value: function(V, C) {
                var q = this;
                this.pickers = V.map(function(z) {
                  if (z.classList.contains("ql-align"))
                    return z.querySelector("option") == null && D(z, T), new g.default(z, C.align);
                  if (z.classList.contains("ql-background") || z.classList.contains("ql-color")) {
                    var Z = z.classList.contains("ql-background") ? "background" : "color";
                    return z.querySelector("option") == null && D(z, I, Z === "background" ? "#ffffff" : "#000000"), new y.default(z, C[Z]);
                  } else
                    return z.querySelector("option") == null && (z.classList.contains("ql-font") ? D(z, L) : z.classList.contains("ql-header") ? D(z, B) : z.classList.contains("ql-size") && D(z, $)), new A.default(z);
                });
                var W = function() {
                  q.pickers.forEach(function(Z) {
                    Z.update();
                  });
                };
                this.quill.on(a.default.events.EDITOR_CHANGE, W);
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
                    var M = this, G = this.container.querySelector("input.ql-image[type=file]");
                    G == null && (G = document.createElement("input"), G.setAttribute("type", "file"), G.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), G.classList.add("ql-image"), G.addEventListener("change", function() {
                      if (G.files != null && G.files[0] != null) {
                        var V = new FileReader();
                        V.onload = function(C) {
                          var q = M.quill.getSelection(!0);
                          M.quill.updateContents(new d.default().retain(q.index).delete(q.length).insert({ image: C.target.result }), a.default.sources.USER), M.quill.setSelection(q.index + 1, a.default.sources.SILENT), G.value = "";
                        }, V.readAsDataURL(G.files[0]);
                      }
                    }), this.container.appendChild(G)), G.click();
                  },
                  video: function() {
                    this.quill.theme.tooltip.edit("video");
                  }
                }
              }
            }
          });
          var j = function(R) {
            O(M, R);
            function M(G, V) {
              w(this, M);
              var C = x(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this, G, V));
              return C.textbox = C.root.querySelector('input[type="text"]'), C.listen(), C;
            }
            return i(M, [{
              key: "listen",
              value: function() {
                var V = this;
                this.textbox.addEventListener("keydown", function(C) {
                  b.default.match(C, "enter") ? (V.save(), C.preventDefault()) : b.default.match(C, "escape") && (V.cancel(), C.preventDefault());
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
                var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), C != null ? this.textbox.value = C : V !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + V) || ""), this.root.setAttribute("data-mode", V);
              }
            }, {
              key: "restoreFocus",
              value: function() {
                var V = this.quill.scrollingContainer.scrollTop;
                this.quill.focus(), this.quill.scrollingContainer.scrollTop = V;
              }
            }, {
              key: "save",
              value: function() {
                var V = this.textbox.value;
                switch (this.root.getAttribute("data-mode")) {
                  case "link": {
                    var C = this.quill.root.scrollTop;
                    this.linkRange ? (this.quill.formatText(this.linkRange, "link", V, a.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", V, a.default.sources.USER)), this.quill.root.scrollTop = C;
                    break;
                  }
                  case "video":
                    V = k(V);
                  case "formula": {
                    if (!V) break;
                    var q = this.quill.getSelection(!0);
                    if (q != null) {
                      var W = q.index + q.length;
                      this.quill.insertEmbed(W, this.root.getAttribute("data-mode"), V, a.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(W + 1, " ", a.default.sources.USER), this.quill.setSelection(W + 2, a.default.sources.USER);
                    }
                    break;
                  }
                }
                this.textbox.value = "", this.hide();
              }
            }]), M;
          }(N.default);
          function k(R) {
            var M = R.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || R.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
            return M ? (M[1] || "https") + "://www.youtube.com/embed/" + M[2] + "?showinfo=0" : (M = R.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (M[1] || "https") + "://player.vimeo.com/video/" + M[2] + "/" : R;
          }
          function D(R, M) {
            var G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            M.forEach(function(V) {
              var C = document.createElement("option");
              V === G ? C.setAttribute("selected", "selected") : C.setAttribute("value", V), R.appendChild(C);
            });
          }
          n.BaseTooltip = j, n.default = K;
        },
        /* 44 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = (
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
                  for (var d = this.find(c), l = d[0], a = d[1], s, b = c - a, v = this.iterator(l); (s = v()) && b < c + f; ) {
                    var h = s.length();
                    c > b ? p(s, c - b, Math.min(f, b + h - c)) : p(s, 0, Math.min(h, c + f - b)), b += h;
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
          n.default = i;
        },
        /* 45 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, s) {
              a.__proto__ = s;
            } || function(a, s) {
              for (var b in s) s.hasOwnProperty(b) && (a[b] = s[b]);
            };
            return function(a, s) {
              l(a, s);
              function b() {
                this.constructor = a;
              }
              a.prototype = s === null ? Object.create(s) : (b.prototype = s.prototype, new b());
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
              i(a, l);
              function a(s) {
                var b = l.call(this, s) || this;
                return b.scroll = b, b.observer = new MutationObserver(function(v) {
                  b.update(v);
                }), b.observer.observe(b.domNode, f), b.attach(), b;
              }
              return a.prototype.detach = function() {
                l.prototype.detach.call(this), this.observer.disconnect();
              }, a.prototype.deleteAt = function(s, b) {
                this.update(), s === 0 && b === this.length() ? this.children.forEach(function(v) {
                  v.remove();
                }) : l.prototype.deleteAt.call(this, s, b);
              }, a.prototype.formatAt = function(s, b, v, h) {
                this.update(), l.prototype.formatAt.call(this, s, b, v, h);
              }, a.prototype.insertAt = function(s, b, v) {
                this.update(), l.prototype.insertAt.call(this, s, b, v);
              }, a.prototype.optimize = function(s, b) {
                var v = this;
                s === void 0 && (s = []), b === void 0 && (b = {}), l.prototype.optimize.call(this, b);
                for (var h = [].slice.call(this.observer.takeRecords()); h.length > 0; )
                  s.push(h.pop());
                for (var m = function(E, A) {
                  A === void 0 && (A = !0), !(E == null || E === v) && E.domNode.parentNode != null && (E.domNode[c.DATA_KEY].mutations == null && (E.domNode[c.DATA_KEY].mutations = []), A && m(E.parent));
                }, y = function(E) {
                  // @ts-ignore
                  E.domNode[c.DATA_KEY] == null || // @ts-ignore
                  E.domNode[c.DATA_KEY].mutations == null || (E instanceof u.default && E.children.forEach(y), E.optimize(b));
                }, _ = s, g = 0; _.length > 0; g += 1) {
                  if (g >= p)
                    throw new Error("[Parchment] Maximum optimize iterations reached");
                  for (_.forEach(function(E) {
                    var A = c.find(E.target, !0);
                    A != null && (A.domNode === E.target && (E.type === "childList" ? (m(c.find(E.previousSibling, !1)), [].forEach.call(E.addedNodes, function(S) {
                      var N = c.find(S, !1);
                      m(N, !1), N instanceof u.default && N.children.forEach(function(P) {
                        m(P, !1);
                      });
                    })) : E.type === "attributes" && m(A.prev)), m(A));
                  }), this.children.forEach(y), _ = [].slice.call(this.observer.takeRecords()), h = _.slice(); h.length > 0; )
                    s.push(h.pop());
                }
              }, a.prototype.update = function(s, b) {
                var v = this;
                b === void 0 && (b = {}), s = s || this.observer.takeRecords(), s.map(function(h) {
                  var m = c.find(h.target, !0);
                  return m == null ? null : m.domNode[c.DATA_KEY].mutations == null ? (m.domNode[c.DATA_KEY].mutations = [h], m) : (m.domNode[c.DATA_KEY].mutations.push(h), null);
                }).forEach(function(h) {
                  h == null || h === v || //@ts-ignore
                  h.domNode[c.DATA_KEY] == null || h.update(h.domNode[c.DATA_KEY].mutations || [], b);
                }), this.domNode[c.DATA_KEY].mutations != null && l.prototype.update.call(this, this.domNode[c.DATA_KEY].mutations, b), this.optimize(s, b);
              }, a.blotName = "scroll", a.defaultChild = "block", a.scope = c.Scope.BLOCK_BLOT, a.tagName = "DIV", a;
            }(u.default)
          );
          n.default = d;
        },
        /* 46 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
            var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, a) {
              l.__proto__ = a;
            } || function(l, a) {
              for (var s in a) a.hasOwnProperty(s) && (l[s] = a[s]);
            };
            return function(l, a) {
              d(l, a);
              function s() {
                this.constructor = l;
              }
              l.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(18), c = o(1);
          function f(d, l) {
            if (Object.keys(d).length !== Object.keys(l).length)
              return !1;
            for (var a in d)
              if (d[a] !== l[a])
                return !1;
            return !0;
          }
          var p = (
            /** @class */
            function(d) {
              i(l, d);
              function l() {
                return d !== null && d.apply(this, arguments) || this;
              }
              return l.formats = function(a) {
                if (a.tagName !== l.tagName)
                  return d.formats.call(this, a);
              }, l.prototype.format = function(a, s) {
                var b = this;
                a === this.statics.blotName && !s ? (this.children.forEach(function(v) {
                  v instanceof u.default || (v = v.wrap(l.blotName, !0)), b.attributes.copy(v);
                }), this.unwrap()) : d.prototype.format.call(this, a, s);
              }, l.prototype.formatAt = function(a, s, b, v) {
                if (this.formats()[b] != null || c.query(b, c.Scope.ATTRIBUTE)) {
                  var h = this.isolate(a, s);
                  h.format(b, v);
                } else
                  d.prototype.formatAt.call(this, a, s, b, v);
              }, l.prototype.optimize = function(a) {
                d.prototype.optimize.call(this, a);
                var s = this.formats();
                if (Object.keys(s).length === 0)
                  return this.unwrap();
                var b = this.next;
                b instanceof l && b.prev === this && f(s, b.formats()) && (b.moveChildren(this), b.remove());
              }, l.blotName = "inline", l.scope = c.Scope.INLINE_BLOT, l.tagName = "SPAN", l;
            }(u.default)
          );
          n.default = p;
        },
        /* 47 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var a in l) l.hasOwnProperty(a) && (d[a] = l[a]);
            };
            return function(d, l) {
              p(d, l);
              function a() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (a.prototype = l.prototype, new a());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(18), c = o(1), f = (
            /** @class */
            function(p) {
              i(d, p);
              function d() {
                return p !== null && p.apply(this, arguments) || this;
              }
              return d.formats = function(l) {
                var a = c.query(d.blotName).tagName;
                if (l.tagName !== a)
                  return p.formats.call(this, l);
              }, d.prototype.format = function(l, a) {
                c.query(l, c.Scope.BLOCK) != null && (l === this.statics.blotName && !a ? this.replaceWith(d.blotName) : p.prototype.format.call(this, l, a));
              }, d.prototype.formatAt = function(l, a, s, b) {
                c.query(s, c.Scope.BLOCK) != null ? this.format(s, b) : p.prototype.formatAt.call(this, l, a, s, b);
              }, d.prototype.insertAt = function(l, a, s) {
                if (s == null || c.query(a, c.Scope.INLINE) != null)
                  p.prototype.insertAt.call(this, l, a, s);
                else {
                  var b = this.split(l), v = c.create(a, s);
                  b.parent.insertBefore(v, b);
                }
              }, d.prototype.update = function(l, a) {
                navigator.userAgent.match(/Trident/) ? this.build() : p.prototype.update.call(this, l, a);
              }, d.blotName = "block", d.scope = c.Scope.BLOCK_BLOT, d.tagName = "P", d;
            }(u.default)
          );
          n.default = f;
        },
        /* 48 */
        /***/
        function(r, n, o) {
          var i = this && this.__extends || function() {
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
              i(p, f);
              function p() {
                return f !== null && f.apply(this, arguments) || this;
              }
              return p.formats = function(d) {
              }, p.prototype.format = function(d, l) {
                f.prototype.formatAt.call(this, 0, this.length(), d, l);
              }, p.prototype.formatAt = function(d, l, a, s) {
                d === 0 && l === this.length() ? this.format(a, s) : f.prototype.formatAt.call(this, d, l, a, s);
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
          var i = this && this.__extends || function() {
            var p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, l) {
              d.__proto__ = l;
            } || function(d, l) {
              for (var a in l) l.hasOwnProperty(a) && (d[a] = l[a]);
            };
            return function(d, l) {
              p(d, l);
              function a() {
                this.constructor = d;
              }
              d.prototype = l === null ? Object.create(l) : (a.prototype = l.prototype, new a());
            };
          }();
          Object.defineProperty(n, "__esModule", { value: !0 });
          var u = o(19), c = o(1), f = (
            /** @class */
            function(p) {
              i(d, p);
              function d(l) {
                var a = p.call(this, l) || this;
                return a.text = a.statics.value(a.domNode), a;
              }
              return d.create = function(l) {
                return document.createTextNode(l);
              }, d.value = function(l) {
                var a = l.data;
                return a.normalize && (a = a.normalize()), a;
              }, d.prototype.deleteAt = function(l, a) {
                this.domNode.data = this.text = this.text.slice(0, l) + this.text.slice(l + a);
              }, d.prototype.index = function(l, a) {
                return this.domNode === l ? a : -1;
              }, d.prototype.insertAt = function(l, a, s) {
                s == null ? (this.text = this.text.slice(0, l) + a + this.text.slice(l), this.domNode.data = this.text) : p.prototype.insertAt.call(this, l, a, s);
              }, d.prototype.length = function() {
                return this.text.length;
              }, d.prototype.optimize = function(l) {
                p.prototype.optimize.call(this, l), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof d && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
              }, d.prototype.position = function(l, a) {
                return [this.domNode, l];
              }, d.prototype.split = function(l, a) {
                if (a === void 0 && (a = !1), !a) {
                  if (l === 0)
                    return this;
                  if (l === this.length())
                    return this.next;
                }
                var s = c.create(this.domNode.splitText(l));
                return this.parent.insertBefore(s, this.next), this.text = this.statics.value(this.domNode), s;
              }, d.prototype.update = function(l, a) {
                var s = this;
                l.some(function(b) {
                  return b.type === "characterData" && b.target === s.domNode;
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
          var i = document.createElement("div");
          if (i.classList.toggle("test-class", !1), i.classList.contains("test-class")) {
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
              for (var p = Object(this), d = p.length >>> 0, l = arguments[1], a, s = 0; s < d; s++)
                if (a = p[s], f.call(l, a, s, p))
                  return a;
            }
          }), document.addEventListener("DOMContentLoaded", function() {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
          });
        },
        /* 51 */
        /***/
        function(r, n) {
          var o = -1, i = 1, u = 0;
          function c(g, E, A) {
            if (g == E)
              return g ? [[u, g]] : [];
            (A < 0 || g.length < A) && (A = null);
            var S = l(g, E), N = g.substring(0, S);
            g = g.substring(S), E = E.substring(S), S = a(g, E);
            var P = g.substring(g.length - S);
            g = g.substring(0, g.length - S), E = E.substring(0, E.length - S);
            var w = f(g, E);
            return N && w.unshift([u, N]), P && w.push([u, P]), b(w), A != null && (w = m(w, A)), w = y(w), w;
          }
          function f(g, E) {
            var A;
            if (!g)
              return [[i, E]];
            if (!E)
              return [[o, g]];
            var S = g.length > E.length ? g : E, N = g.length > E.length ? E : g, P = S.indexOf(N);
            if (P != -1)
              return A = [
                [i, S.substring(0, P)],
                [u, N],
                [i, S.substring(P + N.length)]
              ], g.length > E.length && (A[0][0] = A[2][0] = o), A;
            if (N.length == 1)
              return [[o, g], [i, E]];
            var w = s(g, E);
            if (w) {
              var x = w[0], O = w[1], T = w[2], I = w[3], L = w[4], B = c(x, T), $ = c(O, I);
              return B.concat([[u, L]], $);
            }
            return p(g, E);
          }
          function p(g, E) {
            for (var A = g.length, S = E.length, N = Math.ceil((A + S) / 2), P = N, w = 2 * N, x = new Array(w), O = new Array(w), T = 0; T < w; T++)
              x[T] = -1, O[T] = -1;
            x[P + 1] = 0, O[P + 1] = 0;
            for (var I = A - S, L = I % 2 != 0, B = 0, $ = 0, K = 0, j = 0, k = 0; k < N; k++) {
              for (var D = -k + B; D <= k - $; D += 2) {
                var R = P + D, M;
                D == -k || D != k && x[R - 1] < x[R + 1] ? M = x[R + 1] : M = x[R - 1] + 1;
                for (var G = M - D; M < A && G < S && g.charAt(M) == E.charAt(G); )
                  M++, G++;
                if (x[R] = M, M > A)
                  $ += 2;
                else if (G > S)
                  B += 2;
                else if (L) {
                  var V = P + I - D;
                  if (V >= 0 && V < w && O[V] != -1) {
                    var C = A - O[V];
                    if (M >= C)
                      return d(g, E, M, G);
                  }
                }
              }
              for (var q = -k + K; q <= k - j; q += 2) {
                var V = P + q, C;
                q == -k || q != k && O[V - 1] < O[V + 1] ? C = O[V + 1] : C = O[V - 1] + 1;
                for (var W = C - q; C < A && W < S && g.charAt(A - C - 1) == E.charAt(S - W - 1); )
                  C++, W++;
                if (O[V] = C, C > A)
                  j += 2;
                else if (W > S)
                  K += 2;
                else if (!L) {
                  var R = P + I - q;
                  if (R >= 0 && R < w && x[R] != -1) {
                    var M = x[R], G = P + M - R;
                    if (C = A - C, M >= C)
                      return d(g, E, M, G);
                  }
                }
              }
            }
            return [[o, g], [i, E]];
          }
          function d(g, E, A, S) {
            var N = g.substring(0, A), P = E.substring(0, S), w = g.substring(A), x = E.substring(S), O = c(N, P), T = c(w, x);
            return O.concat(T);
          }
          function l(g, E) {
            if (!g || !E || g.charAt(0) != E.charAt(0))
              return 0;
            for (var A = 0, S = Math.min(g.length, E.length), N = S, P = 0; A < N; )
              g.substring(P, N) == E.substring(P, N) ? (A = N, P = A) : S = N, N = Math.floor((S - A) / 2 + A);
            return N;
          }
          function a(g, E) {
            if (!g || !E || g.charAt(g.length - 1) != E.charAt(E.length - 1))
              return 0;
            for (var A = 0, S = Math.min(g.length, E.length), N = S, P = 0; A < N; )
              g.substring(g.length - N, g.length - P) == E.substring(E.length - N, E.length - P) ? (A = N, P = A) : S = N, N = Math.floor((S - A) / 2 + A);
            return N;
          }
          function s(g, E) {
            var A = g.length > E.length ? g : E, S = g.length > E.length ? E : g;
            if (A.length < 4 || S.length * 2 < A.length)
              return null;
            function N($, K, j) {
              for (var k = $.substring(j, j + Math.floor($.length / 4)), D = -1, R = "", M, G, V, C; (D = K.indexOf(k, D + 1)) != -1; ) {
                var q = l(
                  $.substring(j),
                  K.substring(D)
                ), W = a(
                  $.substring(0, j),
                  K.substring(0, D)
                );
                R.length < W + q && (R = K.substring(D - W, D) + K.substring(D, D + q), M = $.substring(0, j - W), G = $.substring(j + q), V = K.substring(0, D - W), C = K.substring(D + q));
              }
              return R.length * 2 >= $.length ? [
                M,
                G,
                V,
                C,
                R
              ] : null;
            }
            var P = N(
              A,
              S,
              Math.ceil(A.length / 4)
            ), w = N(
              A,
              S,
              Math.ceil(A.length / 2)
            ), x;
            if (!P && !w)
              return null;
            w ? P ? x = P[4].length > w[4].length ? P : w : x = w : x = P;
            var O, T, I, L;
            g.length > E.length ? (O = x[0], T = x[1], I = x[2], L = x[3]) : (I = x[0], L = x[1], O = x[2], T = x[3]);
            var B = x[4];
            return [O, T, I, L, B];
          }
          function b(g) {
            g.push([u, ""]);
            for (var E = 0, A = 0, S = 0, N = "", P = "", w; E < g.length; )
              switch (g[E][0]) {
                case i:
                  S++, P += g[E][1], E++;
                  break;
                case o:
                  A++, N += g[E][1], E++;
                  break;
                case u:
                  A + S > 1 ? (A !== 0 && S !== 0 && (w = l(P, N), w !== 0 && (E - A - S > 0 && g[E - A - S - 1][0] == u ? g[E - A - S - 1][1] += P.substring(0, w) : (g.splice(0, 0, [
                    u,
                    P.substring(0, w)
                  ]), E++), P = P.substring(w), N = N.substring(w)), w = a(P, N), w !== 0 && (g[E][1] = P.substring(P.length - w) + g[E][1], P = P.substring(0, P.length - w), N = N.substring(0, N.length - w))), A === 0 ? g.splice(
                    E - S,
                    A + S,
                    [i, P]
                  ) : S === 0 ? g.splice(
                    E - A,
                    A + S,
                    [o, N]
                  ) : g.splice(
                    E - A - S,
                    A + S,
                    [o, N],
                    [i, P]
                  ), E = E - A - S + (A ? 1 : 0) + (S ? 1 : 0) + 1) : E !== 0 && g[E - 1][0] == u ? (g[E - 1][1] += g[E][1], g.splice(E, 1)) : E++, S = 0, A = 0, N = "", P = "";
                  break;
              }
            g[g.length - 1][1] === "" && g.pop();
            var x = !1;
            for (E = 1; E < g.length - 1; )
              g[E - 1][0] == u && g[E + 1][0] == u && (g[E][1].substring(g[E][1].length - g[E - 1][1].length) == g[E - 1][1] ? (g[E][1] = g[E - 1][1] + g[E][1].substring(0, g[E][1].length - g[E - 1][1].length), g[E + 1][1] = g[E - 1][1] + g[E + 1][1], g.splice(E - 1, 1), x = !0) : g[E][1].substring(0, g[E + 1][1].length) == g[E + 1][1] && (g[E - 1][1] += g[E + 1][1], g[E][1] = g[E][1].substring(g[E + 1][1].length) + g[E + 1][1], g.splice(E + 1, 1), x = !0)), E++;
            x && b(g);
          }
          var v = c;
          v.INSERT = i, v.DELETE = o, v.EQUAL = u, r.exports = v;
          function h(g, E) {
            if (E === 0)
              return [u, g];
            for (var A = 0, S = 0; S < g.length; S++) {
              var N = g[S];
              if (N[0] === o || N[0] === u) {
                var P = A + N[1].length;
                if (E === P)
                  return [S + 1, g];
                if (E < P) {
                  g = g.slice();
                  var w = E - A, x = [N[0], N[1].slice(0, w)], O = [N[0], N[1].slice(w)];
                  return g.splice(S, 1, x, O), [S + 1, g];
                } else
                  A = P;
              }
            }
            throw new Error("cursor_pos is out of bounds!");
          }
          function m(g, E) {
            var A = h(g, E), S = A[1], N = A[0], P = S[N], w = S[N + 1];
            if (P == null)
              return g;
            if (P[0] !== u)
              return g;
            if (w != null && P[1] + w[1] === w[1] + P[1])
              return S.splice(N, 2, w, P), _(S, N, 2);
            if (w != null && w[1].indexOf(P[1]) === 0) {
              S.splice(N, 2, [w[0], P[1]], [0, P[1]]);
              var x = w[1].slice(P[1].length);
              return x.length > 0 && S.splice(N + 2, 0, [w[0], x]), _(S, N, 3);
            } else
              return g;
          }
          function y(g) {
            for (var E = !1, A = function(w) {
              return w.charCodeAt(0) >= 56320 && w.charCodeAt(0) <= 57343;
            }, S = function(w) {
              return w.charCodeAt(w.length - 1) >= 55296 && w.charCodeAt(w.length - 1) <= 56319;
            }, N = 2; N < g.length; N += 1)
              g[N - 2][0] === u && S(g[N - 2][1]) && g[N - 1][0] === o && A(g[N - 1][1]) && g[N][0] === i && A(g[N][1]) && (E = !0, g[N - 1][1] = g[N - 2][1].slice(-1) + g[N - 1][1], g[N][1] = g[N - 2][1].slice(-1) + g[N][1], g[N - 2][1] = g[N - 2][1].slice(0, -1));
            if (!E)
              return g;
            for (var P = [], N = 0; N < g.length; N += 1)
              g[N][1].length > 0 && P.push(g[N]);
            return P;
          }
          function _(g, E, A) {
            for (var S = E + A - 1; S >= 0 && S >= E - 1; S--)
              if (S + 1 < g.length) {
                var N = g[S], P = g[S + 1];
                N[0] === P[1] && g.splice(S, 2, [N[0], N[1] + P[1]]);
              }
            return g;
          }
        },
        /* 52 */
        /***/
        function(r, n) {
          n = r.exports = typeof Object.keys == "function" ? Object.keys : o, n.shim = o;
          function o(i) {
            var u = [];
            for (var c in i) u.push(c);
            return u;
          }
        },
        /* 53 */
        /***/
        function(r, n) {
          var o = function() {
            return Object.prototype.toString.call(arguments);
          }() == "[object Arguments]";
          n = r.exports = o ? i : u, n.supported = i;
          function i(c) {
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
          var o = Object.prototype.hasOwnProperty, i = "~";
          function u() {
          }
          Object.create && (u.prototype = /* @__PURE__ */ Object.create(null), new u().__proto__ || (i = !1));
          function c(p, d, l) {
            this.fn = p, this.context = d, this.once = l || !1;
          }
          function f() {
            this._events = new u(), this._eventsCount = 0;
          }
          f.prototype.eventNames = function() {
            var d = [], l, a;
            if (this._eventsCount === 0) return d;
            for (a in l = this._events)
              o.call(l, a) && d.push(i ? a.slice(1) : a);
            return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(l)) : d;
          }, f.prototype.listeners = function(d, l) {
            var a = i ? i + d : d, s = this._events[a];
            if (l) return !!s;
            if (!s) return [];
            if (s.fn) return [s.fn];
            for (var b = 0, v = s.length, h = new Array(v); b < v; b++)
              h[b] = s[b].fn;
            return h;
          }, f.prototype.emit = function(d, l, a, s, b, v) {
            var h = i ? i + d : d;
            if (!this._events[h]) return !1;
            var m = this._events[h], y = arguments.length, _, g;
            if (m.fn) {
              switch (m.once && this.removeListener(d, m.fn, void 0, !0), y) {
                case 1:
                  return m.fn.call(m.context), !0;
                case 2:
                  return m.fn.call(m.context, l), !0;
                case 3:
                  return m.fn.call(m.context, l, a), !0;
                case 4:
                  return m.fn.call(m.context, l, a, s), !0;
                case 5:
                  return m.fn.call(m.context, l, a, s, b), !0;
                case 6:
                  return m.fn.call(m.context, l, a, s, b, v), !0;
              }
              for (g = 1, _ = new Array(y - 1); g < y; g++)
                _[g - 1] = arguments[g];
              m.fn.apply(m.context, _);
            } else {
              var E = m.length, A;
              for (g = 0; g < E; g++)
                switch (m[g].once && this.removeListener(d, m[g].fn, void 0, !0), y) {
                  case 1:
                    m[g].fn.call(m[g].context);
                    break;
                  case 2:
                    m[g].fn.call(m[g].context, l);
                    break;
                  case 3:
                    m[g].fn.call(m[g].context, l, a);
                    break;
                  case 4:
                    m[g].fn.call(m[g].context, l, a, s);
                    break;
                  default:
                    if (!_) for (A = 1, _ = new Array(y - 1); A < y; A++)
                      _[A - 1] = arguments[A];
                    m[g].fn.apply(m[g].context, _);
                }
            }
            return !0;
          }, f.prototype.on = function(d, l, a) {
            var s = new c(l, a || this), b = i ? i + d : d;
            return this._events[b] ? this._events[b].fn ? this._events[b] = [this._events[b], s] : this._events[b].push(s) : (this._events[b] = s, this._eventsCount++), this;
          }, f.prototype.once = function(d, l, a) {
            var s = new c(l, a || this, !0), b = i ? i + d : d;
            return this._events[b] ? this._events[b].fn ? this._events[b] = [this._events[b], s] : this._events[b].push(s) : (this._events[b] = s, this._eventsCount++), this;
          }, f.prototype.removeListener = function(d, l, a, s) {
            var b = i ? i + d : d;
            if (!this._events[b]) return this;
            if (!l)
              return --this._eventsCount === 0 ? this._events = new u() : delete this._events[b], this;
            var v = this._events[b];
            if (v.fn)
              v.fn === l && (!s || v.once) && (!a || v.context === a) && (--this._eventsCount === 0 ? this._events = new u() : delete this._events[b]);
            else {
              for (var h = 0, m = [], y = v.length; h < y; h++)
                (v[h].fn !== l || s && !v[h].once || a && v[h].context !== a) && m.push(v[h]);
              m.length ? this._events[b] = m.length === 1 ? m[0] : m : --this._eventsCount === 0 ? this._events = new u() : delete this._events[b];
            }
            return this;
          }, f.prototype.removeAllListeners = function(d) {
            var l;
            return d ? (l = i ? i + d : d, this._events[l] && (--this._eventsCount === 0 ? this._events = new u() : delete this._events[l])) : (this._events = new u(), this._eventsCount = 0), this;
          }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prototype.setMaxListeners = function() {
            return this;
          }, f.prefixed = i, f.EventEmitter = f, typeof r < "u" && (r.exports = f);
        },
        /* 55 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.matchText = n.matchSpacing = n.matchNewline = n.matchBlot = n.matchAttributor = n.default = void 0;
          var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(U) {
            return typeof U;
          } : function(U) {
            return U && typeof Symbol == "function" && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U;
          }, u = /* @__PURE__ */ function() {
            function U(H, J) {
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
                return U(H, J);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), c = /* @__PURE__ */ function() {
            function U(H, J) {
              for (var te = 0; te < J.length; te++) {
                var Y = J[te];
                Y.enumerable = Y.enumerable || !1, Y.configurable = !0, "value" in Y && (Y.writable = !0), Object.defineProperty(H, Y.key, Y);
              }
            }
            return function(H, J, te) {
              return J && U(H.prototype, J), te && U(H, te), H;
            };
          }(), f = o(3), p = O(f), d = o(2), l = O(d), a = o(0), s = O(a), b = o(5), v = O(b), h = o(10), m = O(h), y = o(9), _ = O(y), g = o(36), E = o(37), A = o(13), S = O(A), N = o(26), P = o(38), w = o(39), x = o(40);
          function O(U) {
            return U && U.__esModule ? U : { default: U };
          }
          function T(U, H, J) {
            return H in U ? Object.defineProperty(U, H, { value: J, enumerable: !0, configurable: !0, writable: !0 }) : U[H] = J, U;
          }
          function I(U, H) {
            if (!(U instanceof H))
              throw new TypeError("Cannot call a class as a function");
          }
          function L(U, H) {
            if (!U)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return H && (typeof H == "object" || typeof H == "function") ? H : U;
          }
          function B(U, H) {
            if (typeof H != "function" && H !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof H);
            U.prototype = Object.create(H && H.prototype, { constructor: { value: U, enumerable: !1, writable: !0, configurable: !0 } }), H && (Object.setPrototypeOf ? Object.setPrototypeOf(U, H) : U.__proto__ = H);
          }
          var $ = (0, m.default)("quill:clipboard"), K = "__ql-matcher", j = [[Node.TEXT_NODE, ee], [Node.TEXT_NODE, Q], ["br", re], [Node.ELEMENT_NODE, Q], [Node.ELEMENT_NODE, Z], [Node.ELEMENT_NODE, ce], [Node.ELEMENT_NODE, z], [Node.ELEMENT_NODE, Oe], ["li", ae], ["b", W.bind(W, "bold")], ["i", W.bind(W, "italic")], ["style", X]], k = [g.AlignAttribute, P.DirectionAttribute].reduce(function(U, H) {
            return U[H.keyName] = H, U;
          }, {}), D = [g.AlignStyle, E.BackgroundStyle, N.ColorStyle, P.DirectionStyle, w.FontStyle, x.SizeStyle].reduce(function(U, H) {
            return U[H.keyName] = H, U;
          }, {}), R = function(U) {
            B(H, U);
            function H(J, te) {
              I(this, H);
              var Y = L(this, (H.__proto__ || Object.getPrototypeOf(H)).call(this, J, te));
              return Y.quill.root.addEventListener("paste", Y.onPaste.bind(Y)), Y.container = Y.quill.addContainer("ql-clipboard"), Y.container.setAttribute("contenteditable", !0), Y.container.setAttribute("tabindex", -1), Y.matchers = [], j.concat(Y.options.matchers).forEach(function(ne) {
                var le = u(ne, 2), se = le[0], we = le[1];
                !te.matchVisual && we === ce || Y.addMatcher(se, we);
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
                if (Y[S.default.blotName]) {
                  var ne = this.container.innerText;
                  return this.container.innerHTML = "", new l.default().insert(ne, T({}, S.default.blotName, Y[S.default.blotName]));
                }
                var le = this.prepareMatching(), se = u(le, 2), we = se[0], ke = se[1], xe = q(this.container, we, ke);
                return V(xe, `
`) && xe.ops[xe.ops.length - 1].attributes == null && (xe = xe.compose(new l.default().retain(xe.length() - 1).delete(1))), $.log("convert", this.container.innerHTML, xe), this.container.innerHTML = "", xe;
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
                      [].forEach.call(te.container.querySelectorAll(we), function(xe) {
                        xe[K] = xe[K] || [], xe[K].push(ke);
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
          function M(U, H, J) {
            return (typeof H > "u" ? "undefined" : i(H)) === "object" ? Object.keys(H).reduce(function(te, Y) {
              return M(te, Y, H[Y]);
            }, U) : U.reduce(function(te, Y) {
              return Y.attributes && Y.attributes[H] ? te.push(Y) : te.insert(Y.insert, (0, p.default)({}, T({}, H, J), Y.attributes));
            }, new l.default());
          }
          function G(U) {
            if (U.nodeType !== Node.ELEMENT_NODE) return {};
            var H = "__ql-computed-style";
            return U[H] || (U[H] = window.getComputedStyle(U));
          }
          function V(U, H) {
            for (var J = "", te = U.ops.length - 1; te >= 0 && J.length < H.length; --te) {
              var Y = U.ops[te];
              if (typeof Y.insert != "string") break;
              J = Y.insert + J;
            }
            return J.slice(-1 * H.length) === H;
          }
          function C(U) {
            if (U.childNodes.length === 0) return !1;
            var H = G(U);
            return ["block", "list-item"].indexOf(H.display) > -1;
          }
          function q(U, H, J) {
            return U.nodeType === U.TEXT_NODE ? J.reduce(function(te, Y) {
              return Y(U, te);
            }, new l.default()) : U.nodeType === U.ELEMENT_NODE ? [].reduce.call(U.childNodes || [], function(te, Y) {
              var ne = q(Y, H, J);
              return Y.nodeType === U.ELEMENT_NODE && (ne = H.reduce(function(le, se) {
                return se(Y, le);
              }, ne), ne = (Y[K] || []).reduce(function(le, se) {
                return se(Y, le);
              }, ne)), te.concat(ne);
            }, new l.default()) : new l.default();
          }
          function W(U, H, J) {
            return M(J, U, !0);
          }
          function z(U, H) {
            var J = s.default.Attributor.Attribute.keys(U), te = s.default.Attributor.Class.keys(U), Y = s.default.Attributor.Style.keys(U), ne = {};
            return J.concat(te).concat(Y).forEach(function(le) {
              var se = s.default.query(le, s.default.Scope.ATTRIBUTE);
              se != null && (ne[se.attrName] = se.value(U), ne[se.attrName]) || (se = k[le], se != null && (se.attrName === le || se.keyName === le) && (ne[se.attrName] = se.value(U) || void 0), se = D[le], se != null && (se.attrName === le || se.keyName === le) && (se = D[le], ne[se.attrName] = se.value(U) || void 0));
            }), Object.keys(ne).length > 0 && (H = M(H, ne)), H;
          }
          function Z(U, H) {
            var J = s.default.query(U);
            if (J == null) return H;
            if (J.prototype instanceof s.default.Embed) {
              var te = {}, Y = J.value(U);
              Y != null && (te[J.blotName] = Y, H = new l.default().insert(te, J.formats(U)));
            } else typeof J.formats == "function" && (H = M(H, J.blotName, J.formats(U)));
            return H;
          }
          function re(U, H) {
            return V(H, `
`) || H.insert(`
`), H;
          }
          function X() {
            return new l.default();
          }
          function ae(U, H) {
            var J = s.default.query(U);
            if (J == null || J.blotName !== "list-item" || !V(H, `
`))
              return H;
            for (var te = -1, Y = U.parentNode; !Y.classList.contains("ql-clipboard"); )
              (s.default.query(Y) || {}).blotName === "list" && (te += 1), Y = Y.parentNode;
            return te <= 0 ? H : H.compose(new l.default().retain(H.length() - 1).retain(1, { indent: te }));
          }
          function Q(U, H) {
            return V(H, `
`) || (C(U) || H.length() > 0 && U.nextSibling && C(U.nextSibling)) && H.insert(`
`), H;
          }
          function ce(U, H) {
            if (C(U) && U.nextElementSibling != null && !V(H, `

`)) {
              var J = U.offsetHeight + parseFloat(G(U).marginTop) + parseFloat(G(U).marginBottom);
              U.nextElementSibling.offsetTop > U.offsetTop + J * 1.5 && H.insert(`
`);
            }
            return H;
          }
          function Oe(U, H) {
            var J = {}, te = U.style || {};
            return te.fontStyle && G(U).fontStyle === "italic" && (J.italic = !0), te.fontWeight && (G(U).fontWeight.startsWith("bold") || parseInt(G(U).fontWeight) >= 700) && (J.bold = !0), Object.keys(J).length > 0 && (H = M(H, J)), parseFloat(te.textIndent || 0) > 0 && (H = new l.default().insert("	").concat(H)), H;
          }
          function ee(U, H) {
            var J = U.data;
            if (U.parentNode.tagName === "O:P")
              return H.insert(J.trim());
            if (J.trim().length === 0 && U.parentNode.classList.contains("ql-clipboard"))
              return H;
            if (!G(U.parentNode).whiteSpace.startsWith("pre")) {
              var te = function(ne, le) {
                return le = le.replace(/[^\u00a0]/g, ""), le.length < 1 && ne ? " " : le;
              };
              J = J.replace(/\r\n/g, " ").replace(/\n/g, " "), J = J.replace(/\s\s+/g, te.bind(te, !0)), (U.previousSibling == null && C(U.parentNode) || U.previousSibling != null && C(U.previousSibling)) && (J = J.replace(/^\s+/, te.bind(te, !1))), (U.nextSibling == null && C(U.parentNode) || U.nextSibling != null && C(U.nextSibling)) && (J = J.replace(/\s+$/, te.bind(te, !1)));
            }
            return H.insert(J);
          }
          n.default = R, n.matchAttributor = z, n.matchBlot = Z, n.matchNewline = Q, n.matchSpacing = ce, n.matchText = ee;
        },
        /* 56 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = /* @__PURE__ */ function() {
            function b(v, h) {
              for (var m = 0; m < h.length; m++) {
                var y = h[m];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(v, y.key, y);
              }
            }
            return function(v, h, m) {
              return h && b(v.prototype, h), m && b(v, m), v;
            };
          }(), u = function b(v, h, m) {
            v === null && (v = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(v, h);
            if (y === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : b(_, h, m);
            } else {
              if ("value" in y)
                return y.value;
              var g = y.get;
              return g === void 0 ? void 0 : g.call(m);
            }
          }, c = o(6), f = p(c);
          function p(b) {
            return b && b.__esModule ? b : { default: b };
          }
          function d(b, v) {
            if (!(b instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(b, v) {
            if (!b)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : b;
          }
          function a(b, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            b.prototype = Object.create(v && v.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(b, v) : b.__proto__ = v);
          }
          var s = function(b) {
            a(v, b);
            function v() {
              return d(this, v), l(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
            }
            return i(v, [{
              key: "optimize",
              value: function(m) {
                u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "optimize", this).call(this, m), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
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
          var i = /* @__PURE__ */ function() {
            function x(O, T) {
              var I = [], L = !0, B = !1, $ = void 0;
              try {
                for (var K = O[Symbol.iterator](), j; !(L = (j = K.next()).done) && (I.push(j.value), !(T && I.length === T)); L = !0)
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
            return function(O, T) {
              if (Array.isArray(O))
                return O;
              if (Symbol.iterator in Object(O))
                return x(O, T);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = /* @__PURE__ */ function() {
            function x(O, T) {
              for (var I = 0; I < T.length; I++) {
                var L = T[I];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(O, L.key, L);
              }
            }
            return function(O, T, I) {
              return T && x(O.prototype, T), I && x(O, I), O;
            };
          }(), c = o(2), f = m(c), p = o(0), d = m(p), l = o(5), a = m(l), s = o(10), b = m(s), v = o(9), h = m(v);
          function m(x) {
            return x && x.__esModule ? x : { default: x };
          }
          function y(x, O, T) {
            return O in x ? Object.defineProperty(x, O, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : x[O] = T, x;
          }
          function _(x, O) {
            if (!(x instanceof O))
              throw new TypeError("Cannot call a class as a function");
          }
          function g(x, O) {
            if (!x)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return O && (typeof O == "object" || typeof O == "function") ? O : x;
          }
          function E(x, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof O);
            x.prototype = Object.create(O && O.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(x, O) : x.__proto__ = O);
          }
          var A = (0, b.default)("quill:toolbar"), S = function(x) {
            E(O, x);
            function O(T, I) {
              _(this, O);
              var L = g(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, T, I));
              if (Array.isArray(L.options.container)) {
                var B = document.createElement("div");
                P(B, L.options.container), T.container.parentNode.insertBefore(B, T.container), L.container = B;
              } else typeof L.options.container == "string" ? L.container = document.querySelector(L.options.container) : L.container = L.options.container;
              if (!(L.container instanceof HTMLElement)) {
                var $;
                return $ = A.error("Container required for toolbar", L.options), g(L, $);
              }
              return L.container.classList.add("ql-toolbar"), L.controls = [], L.handlers = {}, Object.keys(L.options.handlers).forEach(function(K) {
                L.addHandler(K, L.options.handlers[K]);
              }), [].forEach.call(L.container.querySelectorAll("button, select"), function(K) {
                L.attach(K);
              }), L.quill.on(a.default.events.EDITOR_CHANGE, function(K, j) {
                K === a.default.events.SELECTION_CHANGE && L.update(j);
              }), L.quill.on(a.default.events.SCROLL_OPTIMIZE, function() {
                var K = L.quill.selection.getRange(), j = i(K, 1), k = j[0];
                L.update(k);
              }), L;
            }
            return u(O, [{
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
                    var D = L.quill.selection.getRange(), R = i(D, 1), M = R[0];
                    if (L.handlers[B] != null)
                      L.handlers[B].call(L, j);
                    else if (d.default.query(B).prototype instanceof d.default.Embed) {
                      if (j = prompt("Enter " + B), !j) return;
                      L.quill.updateContents(new f.default().retain(M.index).delete(M.length).insert(y({}, B, j)), a.default.sources.USER);
                    } else
                      L.quill.format(B, j, a.default.sources.USER);
                    L.update(M);
                  }), this.controls.push([B, I]);
                }
              }
            }, {
              key: "update",
              value: function(I) {
                var L = I == null ? {} : this.quill.getFormat(I);
                this.controls.forEach(function(B) {
                  var $ = i(B, 2), K = $[0], j = $[1];
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
            }]), O;
          }(h.default);
          S.DEFAULTS = {};
          function N(x, O, T) {
            var I = document.createElement("button");
            I.setAttribute("type", "button"), I.classList.add("ql-" + O), T != null && (I.value = T), x.appendChild(I);
          }
          function P(x, O) {
            Array.isArray(O[0]) || (O = [O]), O.forEach(function(T) {
              var I = document.createElement("span");
              I.classList.add("ql-formats"), T.forEach(function(L) {
                if (typeof L == "string")
                  N(I, L);
                else {
                  var B = Object.keys(L)[0], $ = L[B];
                  Array.isArray($) ? w(I, B, $) : N(I, B, $);
                }
              }), x.appendChild(I);
            });
          }
          function w(x, O, T) {
            var I = document.createElement("select");
            I.classList.add("ql-" + O), T.forEach(function(L) {
              var B = document.createElement("option");
              L !== !1 ? B.setAttribute("value", L) : B.setAttribute("selected", "selected"), I.appendChild(B);
            }), x.appendChild(I);
          }
          S.DEFAULTS = {
            container: null,
            handlers: {
              clean: function() {
                var O = this, T = this.quill.getSelection();
                if (T != null)
                  if (T.length == 0) {
                    var I = this.quill.getFormat();
                    Object.keys(I).forEach(function(L) {
                      d.default.query(L, d.default.Scope.INLINE) != null && O.quill.format(L, !1);
                    });
                  } else
                    this.quill.removeFormat(T, a.default.sources.USER);
              },
              direction: function(O) {
                var T = this.quill.getFormat().align;
                O === "rtl" && T == null ? this.quill.format("align", "right", a.default.sources.USER) : !O && T === "right" && this.quill.format("align", !1, a.default.sources.USER), this.quill.format("direction", O, a.default.sources.USER);
              },
              indent: function(O) {
                var T = this.quill.getSelection(), I = this.quill.getFormat(T), L = parseInt(I.indent || 0);
                if (O === "+1" || O === "-1") {
                  var B = O === "+1" ? 1 : -1;
                  I.direction === "rtl" && (B *= -1), this.quill.format("indent", L + B, a.default.sources.USER);
                }
              },
              link: function(O) {
                O === !0 && (O = prompt("Enter link URL:")), this.quill.format("link", O, a.default.sources.USER);
              },
              list: function(O) {
                var T = this.quill.getSelection(), I = this.quill.getFormat(T);
                O === "check" ? I.list === "checked" || I.list === "unchecked" ? this.quill.format("list", !1, a.default.sources.USER) : this.quill.format("list", "unchecked", a.default.sources.USER) : this.quill.format("list", O, a.default.sources.USER);
              }
            }
          }, n.default = S, n.addControls = P;
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
          var i = /* @__PURE__ */ function() {
            function b(v, h) {
              for (var m = 0; m < h.length; m++) {
                var y = h[m];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(v, y.key, y);
              }
            }
            return function(v, h, m) {
              return h && b(v.prototype, h), m && b(v, m), v;
            };
          }(), u = function b(v, h, m) {
            v === null && (v = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(v, h);
            if (y === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : b(_, h, m);
            } else {
              if ("value" in y)
                return y.value;
              var g = y.get;
              return g === void 0 ? void 0 : g.call(m);
            }
          }, c = o(28), f = p(c);
          function p(b) {
            return b && b.__esModule ? b : { default: b };
          }
          function d(b, v) {
            if (!(b instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(b, v) {
            if (!b)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : b;
          }
          function a(b, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            b.prototype = Object.create(v && v.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(b, v) : b.__proto__ = v);
          }
          var s = function(b) {
            a(v, b);
            function v(h, m) {
              d(this, v);
              var y = l(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, h));
              return y.label.innerHTML = m, y.container.classList.add("ql-color-picker"), [].slice.call(y.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(_) {
                _.classList.add("ql-primary");
              }), y;
            }
            return i(v, [{
              key: "buildItem",
              value: function(m) {
                var y = u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "buildItem", this).call(this, m);
                return y.style.backgroundColor = m.getAttribute("value") || "", y;
              }
            }, {
              key: "selectItem",
              value: function(m, y) {
                u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "selectItem", this).call(this, m, y);
                var _ = this.label.querySelector(".ql-color-label"), g = m && m.getAttribute("data-value") || "";
                _ && (_.tagName === "line" ? _.style.stroke = g : _.style.fill = g);
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
          var i = /* @__PURE__ */ function() {
            function b(v, h) {
              for (var m = 0; m < h.length; m++) {
                var y = h[m];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(v, y.key, y);
              }
            }
            return function(v, h, m) {
              return h && b(v.prototype, h), m && b(v, m), v;
            };
          }(), u = function b(v, h, m) {
            v === null && (v = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(v, h);
            if (y === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : b(_, h, m);
            } else {
              if ("value" in y)
                return y.value;
              var g = y.get;
              return g === void 0 ? void 0 : g.call(m);
            }
          }, c = o(28), f = p(c);
          function p(b) {
            return b && b.__esModule ? b : { default: b };
          }
          function d(b, v) {
            if (!(b instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(b, v) {
            if (!b)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : b;
          }
          function a(b, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            b.prototype = Object.create(v && v.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(b, v) : b.__proto__ = v);
          }
          var s = function(b) {
            a(v, b);
            function v(h, m) {
              d(this, v);
              var y = l(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, h));
              return y.container.classList.add("ql-icon-picker"), [].forEach.call(y.container.querySelectorAll(".ql-picker-item"), function(_) {
                _.innerHTML = m[_.getAttribute("data-value") || ""];
              }), y.defaultItem = y.container.querySelector(".ql-selected"), y.selectItem(y.defaultItem), y;
            }
            return i(v, [{
              key: "selectItem",
              value: function(m, y) {
                u(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "selectItem", this).call(this, m, y), m = m || this.defaultItem, this.label.innerHTML = m.innerHTML;
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
          var i = /* @__PURE__ */ function() {
            function f(p, d) {
              for (var l = 0; l < d.length; l++) {
                var a = d[l];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(p, a.key, a);
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
            return i(f, [{
              key: "hide",
              value: function() {
                this.root.classList.add("ql-hidden");
              }
            }, {
              key: "position",
              value: function(d) {
                var l = d.left + d.width / 2 - this.root.offsetWidth / 2, a = d.bottom + this.quill.root.scrollTop;
                this.root.style.left = l + "px", this.root.style.top = a + "px", this.root.classList.remove("ql-flip");
                var s = this.boundsContainer.getBoundingClientRect(), b = this.root.getBoundingClientRect(), v = 0;
                if (b.right > s.right && (v = s.right - b.right, this.root.style.left = l + v + "px"), b.left < s.left && (v = s.left - b.left, this.root.style.left = l + v + "px"), b.bottom > s.bottom) {
                  var h = b.bottom - b.top, m = d.bottom - d.top + h;
                  this.root.style.top = a - m + "px", this.root.classList.add("ql-flip");
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
          var i = /* @__PURE__ */ function() {
            function w(x, O) {
              var T = [], I = !0, L = !1, B = void 0;
              try {
                for (var $ = x[Symbol.iterator](), K; !(I = (K = $.next()).done) && (T.push(K.value), !(O && T.length === O)); I = !0)
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
            return function(x, O) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return w(x, O);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), u = function w(x, O, T) {
            x === null && (x = Function.prototype);
            var I = Object.getOwnPropertyDescriptor(x, O);
            if (I === void 0) {
              var L = Object.getPrototypeOf(x);
              return L === null ? void 0 : w(L, O, T);
            } else {
              if ("value" in I)
                return I.value;
              var B = I.get;
              return B === void 0 ? void 0 : B.call(T);
            }
          }, c = /* @__PURE__ */ function() {
            function w(x, O) {
              for (var T = 0; T < O.length; T++) {
                var I = O[T];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(x, I.key, I);
              }
            }
            return function(x, O, T) {
              return O && w(x.prototype, O), T && w(x, T), x;
            };
          }(), f = o(3), p = _(f), d = o(8), l = _(d), a = o(43), s = _(a), b = o(27), v = _(b), h = o(15), m = o(41), y = _(m);
          function _(w) {
            return w && w.__esModule ? w : { default: w };
          }
          function g(w, x) {
            if (!(w instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          function E(w, x) {
            if (!w)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return x && (typeof x == "object" || typeof x == "function") ? x : w;
          }
          function A(w, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof x);
            w.prototype = Object.create(x && x.prototype, { constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(w, x) : w.__proto__ = x);
          }
          var S = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], N = function(w) {
            A(x, w);
            function x(O, T) {
              g(this, x), T.modules.toolbar != null && T.modules.toolbar.container == null && (T.modules.toolbar.container = S);
              var I = E(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, O, T));
              return I.quill.container.classList.add("ql-snow"), I;
            }
            return c(x, [{
              key: "extendToolbar",
              value: function(T) {
                T.container.classList.add("ql-snow"), this.buildButtons([].slice.call(T.container.querySelectorAll("button")), y.default), this.buildPickers([].slice.call(T.container.querySelectorAll("select")), y.default), this.tooltip = new P(this.quill, this.options.bounds), T.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(I, L) {
                  T.handlers.link.call(T, !L.format.link);
                });
              }
            }]), x;
          }(s.default);
          N.DEFAULTS = (0, p.default)(!0, {}, s.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(x) {
                    if (x) {
                      var O = this.quill.getSelection();
                      if (O == null || O.length == 0) return;
                      var T = this.quill.getText(O);
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
          var P = function(w) {
            A(x, w);
            function x(O, T) {
              g(this, x);
              var I = E(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, O, T));
              return I.preview = I.root.querySelector("a.ql-preview"), I;
            }
            return c(x, [{
              key: "listen",
              value: function() {
                var T = this;
                u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(I) {
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
                      var $ = T.quill.scroll.descendant(v.default, I.index), K = i($, 2), j = K[0], k = K[1];
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
                u(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
              }
            }]), x;
          }(a.BaseTooltip);
          P.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), n.default = N;
        },
        /* 63 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = o(29), u = Y(i), c = o(36), f = o(38), p = o(64), d = o(65), l = Y(d), a = o(66), s = Y(a), b = o(67), v = Y(b), h = o(37), m = o(26), y = o(39), _ = o(40), g = o(56), E = Y(g), A = o(68), S = Y(A), N = o(27), P = Y(N), w = o(69), x = Y(w), O = o(70), T = Y(O), I = o(71), L = Y(I), B = o(72), $ = Y(B), K = o(73), j = Y(K), k = o(13), D = Y(k), R = o(74), M = Y(R), G = o(75), V = Y(G), C = o(57), q = Y(C), W = o(41), z = Y(W), Z = o(28), re = Y(Z), X = o(59), ae = Y(X), Q = o(60), ce = Y(Q), Oe = o(61), ee = Y(Oe), U = o(108), H = Y(U), J = o(62), te = Y(J);
          function Y(ne) {
            return ne && ne.__esModule ? ne : { default: ne };
          }
          u.default.register({
            "attributors/attribute/direction": f.DirectionAttribute,
            "attributors/class/align": c.AlignClass,
            "attributors/class/background": h.BackgroundClass,
            "attributors/class/color": m.ColorClass,
            "attributors/class/direction": f.DirectionClass,
            "attributors/class/font": y.FontClass,
            "attributors/class/size": _.SizeClass,
            "attributors/style/align": c.AlignStyle,
            "attributors/style/background": h.BackgroundStyle,
            "attributors/style/color": m.ColorStyle,
            "attributors/style/direction": f.DirectionStyle,
            "attributors/style/font": y.FontStyle,
            "attributors/style/size": _.SizeStyle
          }, !0), u.default.register({
            "formats/align": c.AlignClass,
            "formats/direction": f.DirectionClass,
            "formats/indent": p.IndentClass,
            "formats/background": h.BackgroundStyle,
            "formats/color": m.ColorStyle,
            "formats/font": y.FontClass,
            "formats/size": _.SizeClass,
            "formats/blockquote": l.default,
            "formats/code-block": D.default,
            "formats/header": s.default,
            "formats/list": v.default,
            "formats/bold": E.default,
            "formats/code": k.Code,
            "formats/italic": S.default,
            "formats/link": P.default,
            "formats/script": x.default,
            "formats/strike": T.default,
            "formats/underline": L.default,
            "formats/image": $.default,
            "formats/video": j.default,
            "formats/list/item": b.ListItem,
            "modules/formula": M.default,
            "modules/syntax": V.default,
            "modules/toolbar": q.default,
            "themes/bubble": H.default,
            "themes/snow": te.default,
            "ui/icons": z.default,
            "ui/picker": re.default,
            "ui/icon-picker": ce.default,
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
          var i = /* @__PURE__ */ function() {
            function v(h, m) {
              for (var y = 0; y < m.length; y++) {
                var _ = m[y];
                _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(h, _.key, _);
              }
            }
            return function(h, m, y) {
              return m && v(h.prototype, m), y && v(h, y), h;
            };
          }(), u = function v(h, m, y) {
            h === null && (h = Function.prototype);
            var _ = Object.getOwnPropertyDescriptor(h, m);
            if (_ === void 0) {
              var g = Object.getPrototypeOf(h);
              return g === null ? void 0 : v(g, m, y);
            } else {
              if ("value" in _)
                return _.value;
              var E = _.get;
              return E === void 0 ? void 0 : E.call(y);
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
          function a(v, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            v.prototype = Object.create(h && h.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(v, h) : v.__proto__ = h);
          }
          var s = function(v) {
            a(h, v);
            function h() {
              return d(this, h), l(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return i(h, [{
              key: "add",
              value: function(y, _) {
                if (_ === "+1" || _ === "-1") {
                  var g = this.value(y) || 0;
                  _ = _ === "+1" ? g + 1 : g - 1;
                }
                return _ === 0 ? (this.remove(y), !0) : u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "add", this).call(this, y, _);
              }
            }, {
              key: "canAdd",
              value: function(y, _) {
                return u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "canAdd", this).call(this, y, _) || u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "canAdd", this).call(this, y, parseInt(_));
              }
            }, {
              key: "value",
              value: function(y) {
                return parseInt(u(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "value", this).call(this, y)) || void 0;
              }
            }]), h;
          }(f.default.Attributor.Class), b = new s("indent", "ql-indent", {
            scope: f.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
          });
          n.IndentClass = b;
        },
        /* 65 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = o(4), u = c(i);
          function c(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function f(a, s) {
            if (!(a instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(a, s) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : a;
          }
          function d(a, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            a.prototype = Object.create(s && s.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : a.__proto__ = s);
          }
          var l = function(a) {
            d(s, a);
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
          var i = /* @__PURE__ */ function() {
            function s(b, v) {
              for (var h = 0; h < v.length; h++) {
                var m = v[h];
                m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(b, m.key, m);
              }
            }
            return function(b, v, h) {
              return v && s(b.prototype, v), h && s(b, h), b;
            };
          }(), u = o(4), c = f(u);
          function f(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function p(s, b) {
            if (!(s instanceof b))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(s, b) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && (typeof b == "object" || typeof b == "function") ? b : s;
          }
          function l(s, b) {
            if (typeof b != "function" && b !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            s.prototype = Object.create(b && b.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(s, b) : s.__proto__ = b);
          }
          var a = function(s) {
            l(b, s);
            function b() {
              return p(this, b), d(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
            }
            return i(b, null, [{
              key: "formats",
              value: function(h) {
                return this.tagName.indexOf(h.tagName) + 1;
              }
            }]), b;
          }(c.default);
          a.blotName = "header", a.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], n.default = a;
        },
        /* 67 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.ListItem = void 0;
          var i = /* @__PURE__ */ function() {
            function g(E, A) {
              for (var S = 0; S < A.length; S++) {
                var N = A[S];
                N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(E, N.key, N);
              }
            }
            return function(E, A, S) {
              return A && g(E.prototype, A), S && g(E, S), E;
            };
          }(), u = function g(E, A, S) {
            E === null && (E = Function.prototype);
            var N = Object.getOwnPropertyDescriptor(E, A);
            if (N === void 0) {
              var P = Object.getPrototypeOf(E);
              return P === null ? void 0 : g(P, A, S);
            } else {
              if ("value" in N)
                return N.value;
              var w = N.get;
              return w === void 0 ? void 0 : w.call(S);
            }
          }, c = o(0), f = s(c), p = o(4), d = s(p), l = o(25), a = s(l);
          function s(g) {
            return g && g.__esModule ? g : { default: g };
          }
          function b(g, E, A) {
            return E in g ? Object.defineProperty(g, E, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : g[E] = A, g;
          }
          function v(g, E) {
            if (!(g instanceof E))
              throw new TypeError("Cannot call a class as a function");
          }
          function h(g, E) {
            if (!g)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return E && (typeof E == "object" || typeof E == "function") ? E : g;
          }
          function m(g, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof E);
            g.prototype = Object.create(E && E.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(g, E) : g.__proto__ = E);
          }
          var y = function(g) {
            m(E, g);
            function E() {
              return v(this, E), h(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
            }
            return i(E, [{
              key: "format",
              value: function(S, N) {
                S === _.blotName && !N ? this.replaceWith(f.default.create(this.statics.scope)) : u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "format", this).call(this, S, N);
              }
            }, {
              key: "remove",
              value: function() {
                this.prev == null && this.next == null ? this.parent.remove() : u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "remove", this).call(this);
              }
            }, {
              key: "replaceWith",
              value: function(S, N) {
                return this.parent.isolate(this.offset(this.parent), this.length()), S === this.parent.statics.blotName ? (this.parent.replaceWith(S, N), this) : (this.parent.unwrap(), u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "replaceWith", this).call(this, S, N));
              }
            }], [{
              key: "formats",
              value: function(S) {
                return S.tagName === this.tagName ? void 0 : u(E.__proto__ || Object.getPrototypeOf(E), "formats", this).call(this, S);
              }
            }]), E;
          }(d.default);
          y.blotName = "list-item", y.tagName = "LI";
          var _ = function(g) {
            m(E, g), i(E, null, [{
              key: "create",
              value: function(S) {
                var N = S === "ordered" ? "OL" : "UL", P = u(E.__proto__ || Object.getPrototypeOf(E), "create", this).call(this, N);
                return (S === "checked" || S === "unchecked") && P.setAttribute("data-checked", S === "checked"), P;
              }
            }, {
              key: "formats",
              value: function(S) {
                if (S.tagName === "OL") return "ordered";
                if (S.tagName === "UL")
                  return S.hasAttribute("data-checked") ? S.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
              }
            }]);
            function E(A) {
              v(this, E);
              var S = h(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, A)), N = function(w) {
                if (w.target.parentNode === A) {
                  var x = S.statics.formats(A), O = f.default.find(w.target);
                  x === "checked" ? O.format("list", "unchecked") : x === "unchecked" && O.format("list", "checked");
                }
              };
              return A.addEventListener("touchstart", N), A.addEventListener("mousedown", N), S;
            }
            return i(E, [{
              key: "format",
              value: function(S, N) {
                this.children.length > 0 && this.children.tail.format(S, N);
              }
            }, {
              key: "formats",
              value: function() {
                return b({}, this.statics.blotName, this.statics.formats(this.domNode));
              }
            }, {
              key: "insertBefore",
              value: function(S, N) {
                if (S instanceof y)
                  u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertBefore", this).call(this, S, N);
                else {
                  var P = N == null ? this.length() : N.offset(this), w = this.split(P);
                  w.parent.insertBefore(S, w);
                }
              }
            }, {
              key: "optimize",
              value: function(S) {
                u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "optimize", this).call(this, S);
                var N = this.next;
                N != null && N.prev === this && N.statics.blotName === this.statics.blotName && N.domNode.tagName === this.domNode.tagName && N.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (N.moveChildren(this), N.remove());
              }
            }, {
              key: "replace",
              value: function(S) {
                if (S.statics.blotName !== this.statics.blotName) {
                  var N = f.default.create(this.statics.defaultChild);
                  S.moveChildren(N), this.appendChild(N);
                }
                u(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "replace", this).call(this, S);
              }
            }]), E;
          }(a.default);
          _.blotName = "list", _.scope = f.default.Scope.BLOCK_BLOT, _.tagName = ["OL", "UL"], _.defaultChild = "list-item", _.allowedChildren = [y], n.ListItem = y, n.default = _;
        },
        /* 68 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = o(56), u = c(i);
          function c(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function f(a, s) {
            if (!(a instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(a, s) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : a;
          }
          function d(a, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            a.prototype = Object.create(s && s.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : a.__proto__ = s);
          }
          var l = function(a) {
            d(s, a);
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
          var i = /* @__PURE__ */ function() {
            function b(v, h) {
              for (var m = 0; m < h.length; m++) {
                var y = h[m];
                y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(v, y.key, y);
              }
            }
            return function(v, h, m) {
              return h && b(v.prototype, h), m && b(v, m), v;
            };
          }(), u = function b(v, h, m) {
            v === null && (v = Function.prototype);
            var y = Object.getOwnPropertyDescriptor(v, h);
            if (y === void 0) {
              var _ = Object.getPrototypeOf(v);
              return _ === null ? void 0 : b(_, h, m);
            } else {
              if ("value" in y)
                return y.value;
              var g = y.get;
              return g === void 0 ? void 0 : g.call(m);
            }
          }, c = o(6), f = p(c);
          function p(b) {
            return b && b.__esModule ? b : { default: b };
          }
          function d(b, v) {
            if (!(b instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(b, v) {
            if (!b)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == "object" || typeof v == "function") ? v : b;
          }
          function a(b, v) {
            if (typeof v != "function" && v !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof v);
            b.prototype = Object.create(v && v.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(b, v) : b.__proto__ = v);
          }
          var s = function(b) {
            a(v, b);
            function v() {
              return d(this, v), l(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
            }
            return i(v, null, [{
              key: "create",
              value: function(m) {
                return m === "super" ? document.createElement("sup") : m === "sub" ? document.createElement("sub") : u(v.__proto__ || Object.getPrototypeOf(v), "create", this).call(this, m);
              }
            }, {
              key: "formats",
              value: function(m) {
                if (m.tagName === "SUB") return "sub";
                if (m.tagName === "SUP") return "super";
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
          var i = o(6), u = c(i);
          function c(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function f(a, s) {
            if (!(a instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(a, s) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : a;
          }
          function d(a, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            a.prototype = Object.create(s && s.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : a.__proto__ = s);
          }
          var l = function(a) {
            d(s, a);
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
          var i = o(6), u = c(i);
          function c(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function f(a, s) {
            if (!(a instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(a, s) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == "object" || typeof s == "function") ? s : a;
          }
          function d(a, s) {
            if (typeof s != "function" && s !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            a.prototype = Object.create(s && s.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : a.__proto__ = s);
          }
          var l = function(a) {
            d(s, a);
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
          var i = /* @__PURE__ */ function() {
            function h(m, y) {
              for (var _ = 0; _ < y.length; _++) {
                var g = y[_];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(m, g.key, g);
              }
            }
            return function(m, y, _) {
              return y && h(m.prototype, y), _ && h(m, _), m;
            };
          }(), u = function h(m, y, _) {
            m === null && (m = Function.prototype);
            var g = Object.getOwnPropertyDescriptor(m, y);
            if (g === void 0) {
              var E = Object.getPrototypeOf(m);
              return E === null ? void 0 : h(E, y, _);
            } else {
              if ("value" in g)
                return g.value;
              var A = g.get;
              return A === void 0 ? void 0 : A.call(_);
            }
          }, c = o(0), f = d(c), p = o(27);
          function d(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function l(h, m) {
            if (!(h instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(h, m) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return m && (typeof m == "object" || typeof m == "function") ? m : h;
          }
          function s(h, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof m);
            h.prototype = Object.create(m && m.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(h, m) : h.__proto__ = m);
          }
          var b = ["alt", "height", "width"], v = function(h) {
            s(m, h);
            function m() {
              return l(this, m), a(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments));
            }
            return i(m, [{
              key: "format",
              value: function(_, g) {
                b.indexOf(_) > -1 ? g ? this.domNode.setAttribute(_, g) : this.domNode.removeAttribute(_) : u(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "format", this).call(this, _, g);
              }
            }], [{
              key: "create",
              value: function(_) {
                var g = u(m.__proto__ || Object.getPrototypeOf(m), "create", this).call(this, _);
                return typeof _ == "string" && g.setAttribute("src", this.sanitize(_)), g;
              }
            }, {
              key: "formats",
              value: function(_) {
                return b.reduce(function(g, E) {
                  return _.hasAttribute(E) && (g[E] = _.getAttribute(E)), g;
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
            }]), m;
          }(f.default.Embed);
          v.blotName = "image", v.tagName = "IMG", n.default = v;
        },
        /* 73 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = /* @__PURE__ */ function() {
            function h(m, y) {
              for (var _ = 0; _ < y.length; _++) {
                var g = y[_];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(m, g.key, g);
              }
            }
            return function(m, y, _) {
              return y && h(m.prototype, y), _ && h(m, _), m;
            };
          }(), u = function h(m, y, _) {
            m === null && (m = Function.prototype);
            var g = Object.getOwnPropertyDescriptor(m, y);
            if (g === void 0) {
              var E = Object.getPrototypeOf(m);
              return E === null ? void 0 : h(E, y, _);
            } else {
              if ("value" in g)
                return g.value;
              var A = g.get;
              return A === void 0 ? void 0 : A.call(_);
            }
          }, c = o(4), f = o(27), p = d(f);
          function d(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function l(h, m) {
            if (!(h instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(h, m) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return m && (typeof m == "object" || typeof m == "function") ? m : h;
          }
          function s(h, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof m);
            h.prototype = Object.create(m && m.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(h, m) : h.__proto__ = m);
          }
          var b = ["height", "width"], v = function(h) {
            s(m, h);
            function m() {
              return l(this, m), a(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments));
            }
            return i(m, [{
              key: "format",
              value: function(_, g) {
                b.indexOf(_) > -1 ? g ? this.domNode.setAttribute(_, g) : this.domNode.removeAttribute(_) : u(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "format", this).call(this, _, g);
              }
            }], [{
              key: "create",
              value: function(_) {
                var g = u(m.__proto__ || Object.getPrototypeOf(m), "create", this).call(this, _);
                return g.setAttribute("frameborder", "0"), g.setAttribute("allowfullscreen", !0), g.setAttribute("src", this.sanitize(_)), g;
              }
            }, {
              key: "formats",
              value: function(_) {
                return b.reduce(function(g, E) {
                  return _.hasAttribute(E) && (g[E] = _.getAttribute(E)), g;
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
            }]), m;
          }(c.BlockEmbed);
          v.blotName = "video", v.className = "ql-video", v.tagName = "IFRAME", n.default = v;
        },
        /* 74 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.FormulaBlot = void 0;
          var i = /* @__PURE__ */ function() {
            function _(g, E) {
              for (var A = 0; A < E.length; A++) {
                var S = E[A];
                S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(g, S.key, S);
              }
            }
            return function(g, E, A) {
              return E && _(g.prototype, E), A && _(g, A), g;
            };
          }(), u = function _(g, E, A) {
            g === null && (g = Function.prototype);
            var S = Object.getOwnPropertyDescriptor(g, E);
            if (S === void 0) {
              var N = Object.getPrototypeOf(g);
              return N === null ? void 0 : _(N, E, A);
            } else {
              if ("value" in S)
                return S.value;
              var P = S.get;
              return P === void 0 ? void 0 : P.call(A);
            }
          }, c = o(35), f = s(c), p = o(5), d = s(p), l = o(9), a = s(l);
          function s(_) {
            return _ && _.__esModule ? _ : { default: _ };
          }
          function b(_, g) {
            if (!(_ instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function v(_, g) {
            if (!_)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : _;
          }
          function h(_, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            _.prototype = Object.create(g && g.prototype, { constructor: { value: _, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(_, g) : _.__proto__ = g);
          }
          var m = function(_) {
            h(g, _);
            function g() {
              return b(this, g), v(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
            }
            return i(g, null, [{
              key: "create",
              value: function(A) {
                var S = u(g.__proto__ || Object.getPrototypeOf(g), "create", this).call(this, A);
                return typeof A == "string" && (window.katex.render(A, S, {
                  throwOnError: !1,
                  errorColor: "#f00"
                }), S.setAttribute("data-value", A)), S;
              }
            }, {
              key: "value",
              value: function(A) {
                return A.getAttribute("data-value");
              }
            }]), g;
          }(f.default);
          m.blotName = "formula", m.className = "ql-formula", m.tagName = "SPAN";
          var y = function(_) {
            h(g, _), i(g, null, [{
              key: "register",
              value: function() {
                d.default.register(m, !0);
              }
            }]);
            function g() {
              b(this, g);
              var E = v(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
              if (window.katex == null)
                throw new Error("Formula module requires KaTeX.");
              return E;
            }
            return g;
          }(a.default);
          n.FormulaBlot = m, n.default = y;
        },
        /* 75 */
        /***/
        function(r, n, o) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = n.CodeToken = n.CodeBlock = void 0;
          var i = /* @__PURE__ */ function() {
            function A(S, N) {
              for (var P = 0; P < N.length; P++) {
                var w = N[P];
                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(S, w.key, w);
              }
            }
            return function(S, N, P) {
              return N && A(S.prototype, N), P && A(S, P), S;
            };
          }(), u = function A(S, N, P) {
            S === null && (S = Function.prototype);
            var w = Object.getOwnPropertyDescriptor(S, N);
            if (w === void 0) {
              var x = Object.getPrototypeOf(S);
              return x === null ? void 0 : A(x, N, P);
            } else {
              if ("value" in w)
                return w.value;
              var O = w.get;
              return O === void 0 ? void 0 : O.call(P);
            }
          }, c = o(0), f = v(c), p = o(5), d = v(p), l = o(9), a = v(l), s = o(13), b = v(s);
          function v(A) {
            return A && A.__esModule ? A : { default: A };
          }
          function h(A, S) {
            if (!(A instanceof S))
              throw new TypeError("Cannot call a class as a function");
          }
          function m(A, S) {
            if (!A)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return S && (typeof S == "object" || typeof S == "function") ? S : A;
          }
          function y(A, S) {
            if (typeof S != "function" && S !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof S);
            A.prototype = Object.create(S && S.prototype, { constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 } }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(A, S) : A.__proto__ = S);
          }
          var _ = function(A) {
            y(S, A);
            function S() {
              return h(this, S), m(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments));
            }
            return i(S, [{
              key: "replaceWith",
              value: function(P) {
                this.domNode.textContent = this.domNode.textContent, this.attach(), u(S.prototype.__proto__ || Object.getPrototypeOf(S.prototype), "replaceWith", this).call(this, P);
              }
            }, {
              key: "highlight",
              value: function(P) {
                var w = this.domNode.textContent;
                this.cachedText !== w && ((w.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = P(w), this.domNode.normalize(), this.attach()), this.cachedText = w);
              }
            }]), S;
          }(b.default);
          _.className = "ql-syntax";
          var g = new f.default.Attributor.Class("token", "hljs", {
            scope: f.default.Scope.INLINE
          }), E = function(A) {
            y(S, A), i(S, null, [{
              key: "register",
              value: function() {
                d.default.register(g, !0), d.default.register(_, !0);
              }
            }]);
            function S(N, P) {
              h(this, S);
              var w = m(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, N, P));
              if (typeof w.options.highlight != "function")
                throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
              var x = null;
              return w.quill.on(d.default.events.SCROLL_OPTIMIZE, function() {
                clearTimeout(x), x = setTimeout(function() {
                  w.highlight(), x = null;
                }, w.options.interval);
              }), w.highlight(), w;
            }
            return i(S, [{
              key: "highlight",
              value: function() {
                var P = this;
                if (!this.quill.selection.composing) {
                  this.quill.update(d.default.sources.USER);
                  var w = this.quill.getSelection();
                  this.quill.scroll.descendants(_).forEach(function(x) {
                    x.highlight(P.options.highlight);
                  }), this.quill.update(d.default.sources.SILENT), w != null && this.quill.setSelection(w, d.default.sources.SILENT);
                }
              }
            }]), S;
          }(a.default);
          E.DEFAULTS = {
            highlight: function() {
              return window.hljs == null ? null : function(A) {
                var S = window.hljs.highlightAuto(A);
                return S.value;
              };
            }(),
            interval: 1e3
          }, n.CodeBlock = _, n.CodeToken = g, n.default = E;
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
          var i = function S(N, P, w) {
            N === null && (N = Function.prototype);
            var x = Object.getOwnPropertyDescriptor(N, P);
            if (x === void 0) {
              var O = Object.getPrototypeOf(N);
              return O === null ? void 0 : S(O, P, w);
            } else {
              if ("value" in x)
                return x.value;
              var T = x.get;
              return T === void 0 ? void 0 : T.call(w);
            }
          }, u = /* @__PURE__ */ function() {
            function S(N, P) {
              for (var w = 0; w < P.length; w++) {
                var x = P[w];
                x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(N, x.key, x);
              }
            }
            return function(N, P, w) {
              return P && S(N.prototype, P), w && S(N, w), N;
            };
          }(), c = o(3), f = h(c), p = o(8), d = h(p), l = o(43), a = h(l), s = o(15), b = o(41), v = h(b);
          function h(S) {
            return S && S.__esModule ? S : { default: S };
          }
          function m(S, N) {
            if (!(S instanceof N))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(S, N) {
            if (!S)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return N && (typeof N == "object" || typeof N == "function") ? N : S;
          }
          function _(S, N) {
            if (typeof N != "function" && N !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof N);
            S.prototype = Object.create(N && N.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } }), N && (Object.setPrototypeOf ? Object.setPrototypeOf(S, N) : S.__proto__ = N);
          }
          var g = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], E = function(S) {
            _(N, S);
            function N(P, w) {
              m(this, N), w.modules.toolbar != null && w.modules.toolbar.container == null && (w.modules.toolbar.container = g);
              var x = y(this, (N.__proto__ || Object.getPrototypeOf(N)).call(this, P, w));
              return x.quill.container.classList.add("ql-bubble"), x;
            }
            return u(N, [{
              key: "extendToolbar",
              value: function(w) {
                this.tooltip = new A(this.quill, this.options.bounds), this.tooltip.root.appendChild(w.container), this.buildButtons([].slice.call(w.container.querySelectorAll("button")), v.default), this.buildPickers([].slice.call(w.container.querySelectorAll("select")), v.default);
              }
            }]), N;
          }(a.default);
          E.DEFAULTS = (0, f.default)(!0, {}, a.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(N) {
                    N ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var A = function(S) {
            _(N, S);
            function N(P, w) {
              m(this, N);
              var x = y(this, (N.__proto__ || Object.getPrototypeOf(N)).call(this, P, w));
              return x.quill.on(d.default.events.EDITOR_CHANGE, function(O, T, I, L) {
                if (O === d.default.events.SELECTION_CHANGE)
                  if (T != null && T.length > 0 && L === d.default.sources.USER) {
                    x.show(), x.root.style.left = "0px", x.root.style.width = "", x.root.style.width = x.root.offsetWidth + "px";
                    var B = x.quill.getLines(T.index, T.length);
                    if (B.length === 1)
                      x.position(x.quill.getBounds(T));
                    else {
                      var $ = B[B.length - 1], K = x.quill.getIndex($), j = Math.min($.length() - 1, T.index + T.length - K), k = x.quill.getBounds(new s.Range(K, j));
                      x.position(k);
                    }
                  } else document.activeElement !== x.textbox && x.quill.hasFocus() && x.hide();
              }), x;
            }
            return u(N, [{
              key: "listen",
              value: function() {
                var w = this;
                i(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                  w.root.classList.remove("ql-editing");
                }), this.quill.on(d.default.events.SCROLL_OPTIMIZE, function() {
                  setTimeout(function() {
                    if (!w.root.classList.contains("ql-hidden")) {
                      var x = w.quill.getSelection();
                      x != null && w.position(w.quill.getBounds(x));
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
              value: function(w) {
                var x = i(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "position", this).call(this, w), O = this.root.querySelector(".ql-tooltip-arrow");
                if (O.style.marginLeft = "", x === 0) return x;
                O.style.marginLeft = -1 * x - O.offsetWidth / 2 + "px";
              }
            }]), N;
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
})(_l);
var _0 = _l.exports, x0 = Le && Le.__extends || /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var i in o) o.hasOwnProperty(i) && (n[i] = o[i]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), cr = Le && Le.__assign || function() {
  return cr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, cr.apply(this, arguments);
}, O0 = Le && Le.__spreadArrays || function() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), o = 0, t = 0; t < r; t++)
    for (var i = arguments[t], u = 0, c = i.length; u < c; u++, o++)
      n[o] = i[u];
  return n;
}, Nr = Le && Le.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Ue = Nr(fe), w0 = Nr(Ti), Dt = Nr(E0), wi = Nr(_0), N0 = (
  /** @class */
  function(e) {
    x0(t, e);
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
      }, n.selection = null, n.onEditorChange = function(i, u, c, f) {
        var p, d, l, a;
        i === "text-change" ? (d = (p = n).onEditorChangeText) === null || d === void 0 || d.call(p, n.editor.root.innerHTML, u, f, n.unprivilegedEditor) : i === "selection-change" && ((a = (l = n).onEditorChangeSelection) === null || a === void 0 || a.call(l, u, f, n.unprivilegedEditor));
      };
      var o = n.isControlled() ? r.value : r.defaultValue;
      return n.value = o ?? "", n;
    }
    return t.prototype.validateProps = function(r) {
      var n;
      if (Ue.default.Children.count(r.children) > 1)
        throw new Error("The Quill editing area can only be composed of a single React element.");
      if (Ue.default.Children.count(r.children)) {
        var o = Ue.default.Children.only(r.children);
        if (((n = o) === null || n === void 0 ? void 0 : n.type) === "textarea")
          throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
      }
      if (this.lastDeltaChangeSet && r.value === this.lastDeltaChangeSet)
        throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
    }, t.prototype.shouldComponentUpdate = function(r, n) {
      var o = this, i;
      if (this.validateProps(r), !this.editor || this.state.generation !== n.generation)
        return !0;
      if ("value" in r) {
        var u = this.getEditorContents(), c = (i = r.value, i ?? "");
        this.isEqualValue(c, u) || this.setEditorContents(this.editor, c);
      }
      return r.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, r.readOnly), O0(this.cleanProps, this.dirtyProps).some(function(f) {
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
        var i = this.editor.getContents(), u = this.editor.getSelection();
        this.regenerationSnapshot = { delta: i, selection: u }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
      }
      if (this.state.generation !== n.generation) {
        var c = this.regenerationSnapshot, i = c.delta, f = c.selection;
        delete this.regenerationSnapshot, this.instantiateEditor();
        var p = this.editor;
        p.setContents(i), Ni(function() {
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
      var o = new wi.default(r, n);
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
      var i = this.getEditorSelection();
      typeof n == "string" ? r.setContents(r.clipboard.convert(n)) : r.setContents(n), Ni(function() {
        return o.setEditorSelection(r, i);
      });
    }, t.prototype.setEditorSelection = function(r, n) {
      if (this.selection = n, n) {
        var o = r.getLength();
        n.index = Math.max(0, Math.min(n.index, o - 1)), n.length = Math.max(0, Math.min(n.length, o - 1 - n.index)), r.setSelection(n);
      }
    }, t.prototype.setEditorTabIndex = function(r, n) {
      var o, i;
      !((i = (o = r) === null || o === void 0 ? void 0 : o.scroll) === null || i === void 0) && i.domNode && (r.scroll.domNode.tabIndex = n);
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
      var r = w0.default.findDOMNode(this.editingArea);
      if (!r)
        throw new Error("Cannot find element for editing area");
      if (r.nodeType === 3)
        throw new Error("Editing area cannot be a text node");
      return r;
    }, t.prototype.renderEditingArea = function() {
      var r = this, n = this.props, o = n.children, i = n.preserveWhitespace, u = this.state.generation, c = {
        key: u,
        ref: function(f) {
          r.editingArea = f;
        }
      };
      return Ue.default.Children.count(o) ? Ue.default.cloneElement(Ue.default.Children.only(o), c) : i ? Ue.default.createElement("pre", cr({}, c)) : Ue.default.createElement("div", cr({}, c));
    }, t.prototype.render = function() {
      var r;
      return Ue.default.createElement("div", { id: this.props.id, style: this.props.style, key: this.state.generation, className: "quill " + (r = this.props.className, r ?? ""), onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
    }, t.prototype.onEditorChangeText = function(r, n, o, i) {
      var u, c;
      if (this.editor) {
        var f = this.isDelta(this.value) ? i.getContents() : i.getHTML();
        f !== this.getEditorContents() && (this.lastDeltaChangeSet = n, this.value = f, (c = (u = this.props).onChange) === null || c === void 0 || c.call(u, r, n, o, i));
      }
    }, t.prototype.onEditorChangeSelection = function(r, n, o) {
      var i, u, c, f, p, d;
      if (this.editor) {
        var l = this.getEditorSelection(), a = !l && r, s = l && !r;
        Dt.default(r, l) || (this.selection = r, (u = (i = this.props).onChangeSelection) === null || u === void 0 || u.call(i, r, n, o), a ? (f = (c = this.props).onFocus) === null || f === void 0 || f.call(c, r, n, o) : s && ((d = (p = this.props).onBlur) === null || d === void 0 || d.call(p, l, n, o)));
      }
    }, t.prototype.focus = function() {
      this.editor && this.editor.focus();
    }, t.prototype.blur = function() {
      this.editor && (this.selection = null, this.editor.blur());
    }, t.displayName = "React Quill", t.Quill = wi.default, t.defaultProps = {
      theme: "snow",
      modules: {},
      readOnly: !1
    }, t;
  }(Ue.default.Component)
);
function Ni(e) {
  Promise.resolve().then(e);
}
var S0 = N0;
const A0 = /* @__PURE__ */ Yi(S0), D0 = ({
  value: e,
  onChange: t,
  error: r,
  readOnly: n = !1,
  className: o,
  taskList: i = !1,
  image: u = !1
}) => /* @__PURE__ */ Ae(It, { children: [
  /* @__PURE__ */ oe(
    A0,
    {
      readOnly: n,
      value: e,
      onChange: t,
      theme: "snow",
      modules: i ? {
        toolbar: [
          [
            { list: "ordered" },
            { list: "bullet" },
            i && { list: "check" }
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
        i ? "check" : "",
        "bold",
        "italic",
        u ? "image" : ""
        // "link",
      ],
      className: `${o} w-full bg-primary-light rounded-[30px] overflow-hidden md:border-white md:rounded-[15px] text-black text-sm md:text-base !border-none break-all`
    }
  ),
  /* @__PURE__ */ oe(fr, { error: r })
] }), X0 = D0;
var dn = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new WeakMap(), Si = 0, T0 = void 0;
function P0(e) {
  return e ? (er.has(e) || (Si += 1, er.set(e, Si.toString())), er.get(e)) : "0";
}
function I0(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? P0(e.root) : e[t]}`).toString();
}
function C0(e) {
  const t = I0(e);
  let r = dn.get(t);
  if (!r) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const i = new IntersectionObserver((u) => {
      u.forEach((c) => {
        var f;
        const p = c.isIntersecting && o.some((d) => c.intersectionRatio >= d);
        e.trackVisibility && typeof c.isVisible > "u" && (c.isVisible = p), (f = n.get(c.target)) == null || f.forEach((d) => {
          d(p, c);
        });
      });
    }, e);
    o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: n
    }, dn.set(t, r);
  }
  return r;
}
function R0(e, t, r = {}, n = T0) {
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
  const { id: o, observer: i, elements: u } = C0(r), c = u.get(e) || [];
  return u.has(e) || u.set(e, c), c.push(t), i.observe(e), function() {
    c.splice(c.indexOf(t), 1), c.length === 0 && (u.delete(e), i.unobserve(e)), u.size === 0 && (i.disconnect(), dn.delete(o));
  };
}
function k0({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: n,
  root: o,
  triggerOnce: i,
  skip: u,
  initialInView: c,
  fallbackInView: f,
  onChange: p
} = {}) {
  var d;
  const [l, a] = de.useState(null), s = de.useRef(p), [b, v] = de.useState({
    inView: !!c,
    entry: void 0
  });
  s.current = p, de.useEffect(
    () => {
      if (u || !l) return;
      let _;
      return _ = R0(
        l,
        (g, E) => {
          v({
            inView: g,
            entry: E
          }), s.current && s.current(g, E), E.isIntersecting && i && _ && (_(), _ = void 0);
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
      i,
      u,
      r,
      f,
      t
    ]
  );
  const h = (d = b.entry) == null ? void 0 : d.target, m = de.useRef(void 0);
  !l && h && !i && !u && m.current !== h && (m.current = h, v({
    inView: !!c,
    entry: void 0
  }));
  const y = [a, b.inView, b.entry];
  return y.ref = y[0], y.inView = y[1], y.entry = y[2], y;
}
const L0 = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = Re(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return Se(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ oe(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
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
}, M0 = L0, B0 = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: u, isFetchingNextPage: c, isLoading: f, data: p } = e, d = p == null ? void 0 : p.pages.flatMap((s) => s), { ref: l, inView: a } = k0();
  return Se(() => {
    a && i && u();
  }, [u, a, i]), /* @__PURE__ */ Ae(It, { children: [
    o && /* @__PURE__ */ oe(M0, { className: n }),
    /* @__PURE__ */ oe(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(d != null && d.length) && d.map((s, b) => t(s, b))
      }
    ),
    /* @__PURE__ */ oe(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: l,
        children: (c || f) && /* @__PURE__ */ oe(pn, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(d != null && d.length) && /* @__PURE__ */ oe("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, J0 = B0, Q0 = () => {
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
  F0 as Button,
  V0 as Checkbox,
  U0 as Chips,
  fr as ErrorText,
  Ct as Icon,
  J0 as InfiniteScroll,
  G0 as Input,
  H0 as List,
  pn as Loader,
  z0 as MultiSelectSearch,
  M0 as ScrollTopButton,
  W0 as Search,
  K0 as Select,
  Y0 as Table,
  X0 as TextEdit,
  Z0 as Textarea,
  qi as Wrapper,
  zi as useDebounce,
  Q0 as useScroll
};
