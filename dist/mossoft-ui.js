import { jsx as ne, jsxs as kt, Fragment as Ms } from "react/jsx-runtime";
import * as N from "react";
import _, { useState as Ee, useEffect as re, useRef as L, useMemo as wD, useLayoutEffect as lr, useContext as pt } from "react";
import dr, { unstable_batchedUpdates as pr, flushSync as ur } from "react-dom";
const ai = ({ name: e, className: t, ...r }) => /* @__PURE__ */ ne(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ ne(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), hv = ({ style: e, text: t }) => /* @__PURE__ */ kt("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ ne("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ ne("span", { className: "text-base", children: t })
] }), a7 = ({
  children: e,
  onClick: t,
  className: r,
  loadType: o,
  isLoading: n,
  variant: i,
  icon: a,
  disabled: s,
  ...l
}) => {
  const [u, m] = Ee(""), c = () => {
    n && o === "1C" && (m("Отправляем запрос в 1С"), setTimeout(
      () => m(o === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  re(() => {
    o === "1C" && c();
  }, [n]);
  const p = [
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
  return /* @__PURE__ */ kt(
    "button",
    {
      disabled: s || n,
      onClick: t,
      className: p,
      ...l,
      children: [
        n ? /* @__PURE__ */ ne(hv, { text: o === "1C" ? u : void 0 }) : e,
        a && !n && /* @__PURE__ */ ne(
          ai,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, wl = ({ error: e }) => /* @__PURE__ */ ne("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ ne("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), s7 = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: o,
  className: n,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: l
}) => /* @__PURE__ */ kt(Ms, { children: [
  /* @__PURE__ */ kt(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${o}`,
      children: [
        /* @__PURE__ */ ne(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ ne("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ ne(
          "input",
          {
            disabled: l,
            checked: s,
            onChange: (u) => e(u.target.checked),
            type: "checkbox",
            className: n
          }
        )
      ]
    }
  ),
  a && /* @__PURE__ */ ne(wl, { error: a })
] }), c7 = ({ items: e, disable: t, color: r, style: o }) => /* @__PURE__ */ ne("div", { className: "flex flex-wrap gap-[6px]", children: e.map((n) => /* @__PURE__ */ ne(Ms, { children: n.title ? /* @__PURE__ */ ne(
  "div",
  {
    style: o,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: n.title
  },
  n.title
) : /* @__PURE__ */ ne(Ms, {}) })) });
function Sl(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
      t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
  return r;
}
var qn;
(function(e) {
  e.event = "event", e.props = "prop";
})(qn || (qn = {}));
function gr() {
}
function SD(e) {
  var t, r = void 0;
  return function() {
    for (var o = [], n = arguments.length; n--; ) o[n] = arguments[n];
    return t && o.length === t.length && o.every(function(i, a) {
      return i === t[a];
    }) || (t = o, r = e.apply(void 0, o)), r;
  };
}
function qr(e) {
  return !!(e || "").match(/\d/);
}
function Ur(e) {
  return e == null;
}
function OD(e) {
  return typeof e == "number" && isNaN(e);
}
function yv(e) {
  return Ur(e) || OD(e) || typeof e == "number" && !isFinite(e);
}
function vv(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function DD(e) {
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
function ND(e, t, r) {
  var o = DD(r), n = e.search(/[1-9]/);
  return n = n === -1 ? e.length : n, e.substring(0, n) + e.substring(n, e.length).replace(o, "$1" + t);
}
function CD(e) {
  var t = L(e);
  t.current = e;
  var r = L(function() {
    for (var o = [], n = arguments.length; n--; ) o[n] = arguments[n];
    return t.current.apply(t, o);
  });
  return r.current;
}
function Ol(e, t) {
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
function _D(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), o = r[0].replace(/^0+/, "") || "0", n = r[1] || "";
  return (t ? "-" : "") + o + (n ? "." + n : "");
}
function Ev(e, t, r) {
  for (var o = "", n = r ? "0" : "", i = 0; i <= t - 1; i++)
    o += e[i] || n;
  return o;
}
function up(e, t) {
  return Array(t + 1).join(e);
}
function xv(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var o = t.split(/[eE]/g), n = o[0], i = o[1];
  if (i = Number(i), !i)
    return r + n;
  n = n.replace(".", "");
  var a = 1 + i, s = n.length;
  return a < 0 ? n = "0." + up("0", Math.abs(a)) + n : a >= s ? n = n + up("0", a - s) : n = (n.substring(0, a) || "0") + "." + n.substring(a), r + n;
}
function dp(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var o = (e.indexOf(".") !== -1 || r) && t, n = Ol(e), i = n.beforeDecimal, a = n.afterDecimal, s = n.hasNegation, l = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : l.toFixed(t), m = u.split("."), c = i;
  i && Number(m[0]) && (c = i.split("").reverse().reduce(function(b, d, x) {
    return b.length > x ? (Number(b[0]) + Number(d)).toString() + b.substring(1, b.length) : d + b;
  }, m[0]));
  var p = Ev(m[1] || "", t, r), g = s ? "-" : "", h = o ? "." : "";
  return "" + g + c + h + p;
}
function Er(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var wv = SD(function(e, t) {
  for (var r = 0, o = 0, n = e.length, i = t.length; e[r] === t[r] && r < n; )
    r++;
  for (; e[n - 1 - o] === t[i - 1 - o] && i - o > r && n - o > r; )
    o++;
  return {
    from: { start: r, end: n - o },
    to: { start: r, end: i - o }
  };
}), ID = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function PD(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function $i(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function $D() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Sv(e) {
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
function Ov(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function AD(e) {
  var t = e.currentValue, r = e.formattedValue, o = e.currentValueIndex, n = e.formattedValueIndex;
  return t[o] === r[n];
}
function TD(e, t, r, o, n, i, a) {
  a === void 0 && (a = AD);
  var s = n.findIndex(function(y) {
    return y;
  }), l = e.slice(0, s);
  !t && !r.startsWith(l) && (t = l, r = l + r, o = o + l.length);
  for (var u = r.length, m = e.length, c = {}, p = new Array(u), g = 0; g < u; g++) {
    p[g] = -1;
    for (var h = 0, b = m; h < b; h++) {
      var d = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: g,
        formattedValueIndex: h
      });
      if (d && c[h] !== !0) {
        p[g] = h, c[h] = !0;
        break;
      }
    }
  }
  for (var x = o; x < u && (p[x] === -1 || !i(r[x])); )
    x++;
  var O = x === u || p[x] === -1 ? m : p[x];
  for (x = o - 1; x > 0 && p[x] === -1; )
    x--;
  var E = x === -1 || p[x] === -1 ? 0 : p[x] + 1;
  return E > O ? O : o - E < O - o ? E : O;
}
function si(e, t, r, o) {
  var n = e.length;
  if (t = PD(t, 0, n), o === "left") {
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
function RD(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, o = t.length; r < o; r++)
    t[r] = !!(qr(e[r]) || qr(e[r - 1]));
  return t;
}
function Dv(e, t, r, o, n, i) {
  i === void 0 && (i = gr);
  var a = CD(function(h, b) {
    var d, x;
    return yv(h) ? (x = "", d = "") : typeof h == "number" || b ? (x = typeof h == "number" ? xv(h) : h, d = o(x)) : (x = n(h, void 0), d = o(x)), { formattedValue: d, numAsString: x };
  }), s = Ee(function() {
    return a(Ur(e) ? t : e, r);
  }), l = s[0], u = s[1], m = function(h, b) {
    h.formattedValue !== l.formattedValue && u({
      formattedValue: h.formattedValue,
      numAsString: h.value
    }), i(h, b);
  }, c = e, p = r;
  Ur(e) && (c = l.numAsString, p = !0);
  var g = a(c, p);
  return wD(function() {
    u(g);
  }, [g.formattedValue]), [l, m];
}
function VD(e) {
  return e.replace(/[^0-9]/g, "");
}
function MD(e) {
  return e;
}
function Nv(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var o = e.customInput, n = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = MD);
  var s = e.removeFormatting;
  s === void 0 && (s = VD);
  var l = e.defaultValue, u = e.valueIsNumericString, m = e.onValueChange, c = e.isAllowed, p = e.onChange;
  p === void 0 && (p = gr);
  var g = e.onKeyDown;
  g === void 0 && (g = gr);
  var h = e.onMouseUp;
  h === void 0 && (h = gr);
  var b = e.onFocus;
  b === void 0 && (b = gr);
  var d = e.onBlur;
  d === void 0 && (d = gr);
  var x = e.value, O = e.getCaretBoundary;
  O === void 0 && (O = RD);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = qr);
  var y = e.isCharacterSame, f = Sl(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), v = Dv(x, l, !!u, a, s, m), D = v[0], C = D.formattedValue, R = D.numAsString, P = v[1], A = L(), I = L({ formattedValue: C, numAsString: R }), T = function(U, ie) {
    I.current = { formattedValue: U.formattedValue, numAsString: U.value }, P(U, ie);
  }, F = Ee(!1), k = F[0], V = F[1], W = L(null), j = L({
    setCaretTimeout: null,
    focusTimeout: null
  });
  re(function() {
    return V(!0), function() {
      clearTimeout(j.current.setCaretTimeout), clearTimeout(j.current.focusTimeout);
    };
  }, []);
  var G = a, z = function(U, ie) {
    var ye = parseFloat(ie);
    return {
      formattedValue: U,
      value: ie,
      floatValue: isNaN(ye) ? void 0 : ye
    };
  }, B = function(U, ie, ye) {
    U.selectionStart === 0 && U.selectionEnd === U.value.length || (Er(U, ie), j.current.setCaretTimeout = setTimeout(function() {
      U.value === ye && U.selectionStart !== ie && Er(U, ie);
    }, 0));
  }, q = function(U, ie, ye) {
    return si(U, ie, O(U), ye);
  }, Y = function(U, ie, ye) {
    var ut = O(ie), Ht = TD(ie, C, U, ye, ut, E, y);
    return Ht = si(ie, Ht, ut), Ht;
  }, K = function(U) {
    var ie = U.formattedValue;
    ie === void 0 && (ie = "");
    var ye = U.input, ut = U.source, Ht = U.event, dt = U.numAsString, st;
    if (ye) {
      var fr = U.inputValue || ye.value, br = $i(ye);
      ye.value = ie, st = Y(fr, ie, br), st !== void 0 && B(ye, st, ie);
    }
    ie !== C && T(z(ie, dt), { event: Ht, source: ut });
  };
  re(function() {
    var U = I.current, ie = U.formattedValue, ye = U.numAsString;
    (C !== ie || R !== ye) && T(z(C, R), {
      event: void 0,
      source: qn.props
    });
  }, [C, R]);
  var Z = W.current ? $i(W.current) : void 0, te = typeof window < "u" ? lr : re;
  te(function() {
    var U = W.current;
    if (C !== I.current.formattedValue && U) {
      var ie = Y(I.current.formattedValue, C, Z);
      U.value = C, B(U, ie, C);
    }
  }, [C]);
  var H = function(U, ie, ye) {
    var ut = ie.target, Ht = A.current ? ID(A.current, ut.selectionEnd) : wv(C, U), dt = Object.assign(Object.assign({}, Ht), { lastValue: C }), st = s(U, dt), fr = G(st);
    if (st = s(fr, void 0), c && !c(z(fr, st))) {
      var br = ie.target, hr = $i(br), Pi = Y(U, C, hr);
      return br.value = C, B(br, Pi, C), !1;
    }
    return K({
      formattedValue: fr,
      numAsString: st,
      inputValue: U,
      event: ie,
      source: ye,
      input: ie.target
    }), !0;
  }, X = function(U, ie) {
    ie === void 0 && (ie = 0);
    var ye = U.selectionStart, ut = U.selectionEnd;
    A.current = { selectionStart: ye, selectionEnd: ut + ie };
  }, M = function(U) {
    var ie = U.target, ye = ie.value, ut = H(ye, U, qn.event);
    ut && p(U), A.current = void 0;
  }, J = function(U) {
    var ie = U.target, ye = U.key, ut = ie.selectionStart, Ht = ie.selectionEnd, dt = ie.value;
    dt === void 0 && (dt = "");
    var st;
    ye === "ArrowLeft" || ye === "Backspace" ? st = Math.max(ut - 1, 0) : ye === "ArrowRight" ? st = Math.min(ut + 1, dt.length) : ye === "Delete" && (st = ut);
    var fr = 0;
    ye === "Delete" && ut === Ht && (fr = 1);
    var br = ye === "ArrowLeft" || ye === "ArrowRight";
    if (st === void 0 || ut !== Ht && !br) {
      g(U), X(ie, fr);
      return;
    }
    var hr = st;
    if (br) {
      var Pi = ye === "ArrowLeft" ? "left" : "right";
      hr = q(dt, st, Pi), hr !== st && U.preventDefault();
    } else ye === "Delete" && !E(dt[st]) ? hr = q(dt, st, "right") : ye === "Backspace" && !E(dt[st]) && (hr = q(dt, st, "left"));
    hr !== st && B(ie, hr, dt), g(U), X(ie, fr);
  }, be = function(U) {
    var ie = U.target, ye = function() {
      var ut = ie.selectionStart, Ht = ie.selectionEnd, dt = ie.value;
      if (dt === void 0 && (dt = ""), ut === Ht) {
        var st = q(dt, ut);
        st !== ut && B(ie, st, dt);
      }
    };
    ye(), requestAnimationFrame(function() {
      ye();
    }), h(U), X(ie);
  }, w = function(U) {
    U.persist && U.persist();
    var ie = U.target, ye = U.currentTarget;
    W.current = ie, j.current.focusTimeout = setTimeout(function() {
      var ut = ie.selectionStart, Ht = ie.selectionEnd, dt = ie.value;
      dt === void 0 && (dt = "");
      var st = q(dt, ut);
      st !== ut && !(ut === 0 && Ht === dt.length) && B(ie, st, dt), b(Object.assign(Object.assign({}, U), { currentTarget: ye }));
    }, 0);
  }, ee = function(U) {
    W.current = null, clearTimeout(j.current.focusTimeout), clearTimeout(j.current.setCaretTimeout), d(U);
  }, S = k && $D() ? "numeric" : void 0, Q = Object.assign({ inputMode: S }, f, {
    type: t,
    value: C,
    onChange: M,
    onKeyDown: J,
    onMouseUp: be,
    onFocus: w,
    onBlur: ee
  });
  if (r === "text")
    return n ? _.createElement(_.Fragment, null, n(C, f) || null) : _.createElement("span", Object.assign({}, f, { ref: i }), C);
  if (o) {
    var ge = o;
    return _.createElement(ge, Object.assign({}, Q, { ref: i }));
  }
  return _.createElement("input", Object.assign({}, Q, { ref: i }));
}
function pp(e, t) {
  var r = t.decimalScale, o = t.fixedDecimalScale, n = t.prefix;
  n === void 0 && (n = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = Si(t), u = l.thousandSeparator, m = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && o, p = Ol(e, a), g = p.beforeDecimal, h = p.afterDecimal, b = p.addNegation;
  return r !== void 0 && (h = Ev(h, r, !!o)), u && (g = ND(g, u, s)), n && (g = n + g), i && (h = h + i), b && (g = "-" + g), e = g + (c && m || "") + h, e;
}
function Si(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, o = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), o || (o = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: o
  };
}
function LD(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), o = new RegExp("(-)(.)*(-)"), n = r.test(e), i = o.test(e);
  return e = e.replace(/-/g, ""), n && !i && t && (e = "-" + e), e;
}
function BD(e, t) {
  return new RegExp("(^-)|[0-9]|" + vv(e), "g");
}
function FD(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function jD(e, t, r) {
  var o;
  t === void 0 && (t = Sv(e));
  var n = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, u = t.to, m = u.start, c = u.end, p = Si(r), g = p.allowedDecimalSeparators, h = p.decimalSeparator, b = e[c] === h;
  if (qr(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - m === 1 && g.indexOf(e[m]) !== -1) {
    var d = s === 0 ? "" : h;
    e = e.substring(0, m) + d + e.substring(m + 1, e.length);
  }
  var x = function(W, j, G) {
    var z = !1, B = !1;
    i.startsWith("-") ? z = !1 : W.startsWith("--") ? (z = !1, B = !0) : a.startsWith("-") && W.length === a.length ? z = !1 : W[0] === "-" && (z = !0);
    var q = z ? 1 : 0;
    return B && (q = 2), q && (W = W.substring(q), j -= q, G -= q), { value: W, start: j, end: G, hasNegation: z };
  }, O = x(e, m, c), E = O.hasNegation;
  o = O, e = o.value, m = o.start, c = o.end;
  var y = x(t.lastValue, l.start, l.end), f = y.start, v = y.end, D = y.value, C = e.substring(m, c);
  e.length && D.length && (f > D.length - a.length || v < i.length) && !(C && a.startsWith(C)) && (e = D);
  var R = 0;
  e.startsWith(i) ? R += i.length : m < i.length && (R = m), e = e.substring(R), c -= R;
  var P = e.length, A = e.length - a.length;
  e.endsWith(a) ? P = A : (c > A || c > e.length - a.length) && (P = c), e = e.substring(0, P), e = LD(E ? "-" + e : e, n), e = (e.match(BD(h)) || []).join("");
  var I = e.indexOf(h);
  e = e.replace(new RegExp(vv(h), "g"), function(W, j) {
    return j === I ? "." : "";
  });
  var T = Ol(e, n), F = T.beforeDecimal, k = T.afterDecimal, V = T.addNegation;
  return u.end - u.start < l.end - l.start && F === "" && b && !parseFloat(k) && (e = V ? "-" : ""), e;
}
function WD(e, t) {
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
function GD(e) {
  var t = Si(e), r = t.thousandSeparator, o = t.decimalSeparator, n = e.prefix;
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
function kD(e) {
  e = GD(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, o = e.allowLeadingZeros, n = e.onKeyDown;
  n === void 0 && (n = gr);
  var i = e.onBlur;
  i === void 0 && (i = gr);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var m = e.defaultValue, c = e.value, p = e.valueIsNumericString, g = e.onValueChange, h = Sl(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = Si(e), d = b.decimalSeparator, x = b.allowedDecimalSeparators, O = function(V) {
    return pp(V, e);
  }, E = function(V, W) {
    return jD(V, W, e);
  }, y = Ur(c) ? m : c, f = p ?? FD(y, u, t);
  Ur(c) ? Ur(m) || (f = f || typeof m == "number") : f = f || typeof c == "number";
  var v = function(V) {
    return yv(V) ? V : (typeof V == "number" && (V = xv(V)), f && typeof s == "number" ? dp(V, s, !!l) : V);
  }, D = Dv(v(c), v(m), !!f, O, E, g), C = D[0], R = C.numAsString, P = C.formattedValue, A = D[1], I = function(V) {
    var W = V.target, j = V.key, G = W.selectionStart, z = W.selectionEnd, B = W.value;
    if (B === void 0 && (B = ""), (j === "Backspace" || j === "Delete") && z < u.length) {
      V.preventDefault();
      return;
    }
    if (G !== z) {
      n(V);
      return;
    }
    j === "Backspace" && B[0] === "-" && G === u.length + 1 && r && Er(W, 1), s && l && (j === "Backspace" && B[G - 1] === d ? (Er(W, G - 1), V.preventDefault()) : j === "Delete" && B[G] === d && V.preventDefault()), x != null && x.includes(j) && B[G] === d && Er(W, G + 1);
    var q = a === !0 ? "," : a;
    j === "Backspace" && B[G - 1] === q && Er(W, G - 1), j === "Delete" && B[G] === q && Er(W, G + 1), n(V);
  }, T = function(V) {
    var W = R;
    if (W.match(/\d/g) || (W = ""), o || (W = _D(W)), l && s && (W = dp(W, s, l)), W !== R) {
      var j = pp(W, e);
      A({
        formattedValue: j,
        value: W,
        floatValue: parseFloat(W)
      }, {
        event: V,
        source: qn.event
      });
    }
    i(V);
  }, F = function(V) {
    return V === d ? !0 : qr(V);
  }, k = function(V) {
    var W = V.currentValue, j = V.lastValue, G = V.formattedValue, z = V.currentValueIndex, B = V.formattedValueIndex, q = W[z], Y = G[B], K = wv(j, W), Z = K.to, te = function(H) {
      return E(H).indexOf(".") + u.length;
    };
    return c === 0 && l && s && W[Z.start] === d && te(W) < z && te(G) > B ? !1 : z >= Z.start && z < Z.end && x && x.includes(q) && Y === d ? !0 : q === Y;
  };
  return Object.assign(Object.assign({}, h), {
    value: P,
    valueIsNumericString: !1,
    isValidInputCharacter: F,
    isCharacterSame: k,
    onValueChange: A,
    format: O,
    removeFormatting: E,
    getCaretBoundary: function(V) {
      return WD(V, e);
    },
    onKeyDown: I,
    onBlur: T
  });
}
function zD(e) {
  var t = kD(e);
  return _.createElement(Nv, Object.assign({}, t));
}
function HD(e, t) {
  var r = t.format, o = t.allowEmptyFormatting, n = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !o)
    return "";
  for (var a = 0, s = r.split(""), l = 0, u = r.length; l < u; l++)
    r[l] === i && (s[l] = e[a] || Ov(n, a), a += 1);
  return s.join("");
}
function UD(e, t, r) {
  t === void 0 && (t = Sv(e));
  var o = r.format, n = r.patternChar;
  n === void 0 && (n = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(d) {
    return o[d] === n;
  }, u = function(d, x) {
    for (var O = "", E = 0; E < d.length; E++)
      l(x + E) && qr(d[E]) && (O += d[E]);
    return O;
  }, m = function(d) {
    return d.replace(/[^0-9]/g, "");
  };
  if (!o.match(/\d/))
    return m(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === o.length) {
    for (var c = "", p = 0; p < e.length; p++)
      if (l(p))
        qr(e[p]) && (c += e[p]);
      else if (e[p] !== o[p])
        return m(e);
    return c;
  }
  var g = s.substring(0, i.start), h = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(g, 0) + m(h) + u(b, i.end);
}
function qD(e, t) {
  var r = t.format, o = t.mask, n = t.patternChar;
  n === void 0 && (n = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(p, g) {
    var h = void 0;
    p === n && (a++, h = Ov(o, a - 1), s === -1 && e[g] === h && (s = g)), l[g] = h;
  });
  for (var u = function(p) {
    return r[p] === n && e[p] !== l[p];
  }, m = 0, c = i.length; m < c; m++)
    i[m] = m === s || u(m) || u(m - 1);
  return i[r.indexOf(n)] = !0, i;
}
function YD(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function KD(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function XD(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var o = e.onKeyDown;
  o === void 0 && (o = gr);
  var n = e.patternChar;
  n === void 0 && (n = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = Sl(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  YD(e);
  var u = function(h) {
    return qD(h, e);
  }, m = function(h) {
    var b = h.key, d = h.target, x = d.selectionStart, O = d.selectionEnd, E = d.value;
    if (x !== O) {
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
      y = si(E, y, u(E), f);
    } else t[y] !== n && b !== "ArrowLeft" && b !== "ArrowRight" && (y = si(E, y + 1, u(E), "right"));
    y !== x && Er(d, y), o(h);
  }, c = Ur(i) ? a : i, p = s ?? KD(c, t), g = Object.assign(Object.assign({}, e), { valueIsNumericString: p });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: p,
    inputMode: r,
    format: function(h) {
      return HD(h, g);
    },
    removeFormatting: function(h, b) {
      return UD(h, b, g);
    },
    getCaretBoundary: u,
    onKeyDown: m
  });
}
function JD(e) {
  var t = XD(e);
  return _.createElement(Nv, Object.assign({}, t));
}
const ZD = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, l7 = ({
  type: e,
  field: t,
  label: r,
  fieldState: o,
  postfix: n,
  labelClassName: i,
  errorPlace: a = "right",
  parentClassName: s,
  className: l,
  numberWrapperClassname: u,
  format: m,
  decimalScale: c = 1,
  ...p
}) => {
  var b, d;
  const g = "!border-danger", { error: h } = o;
  return /* @__PURE__ */ kt("label", { children: [
    r && /* @__PURE__ */ ne("span", { className: `text-primary ${i}`, children: r }),
    m ? /* @__PURE__ */ ne(
      JD,
      {
        onValueChange: (x) => {
          var O;
          t == null || t.onChange((O = x.value.replace("_", "")) == null ? void 0 : O.toString());
        },
        value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${h ? g : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${l}`,
        format: m,
        ...p
      }
    ) : e === "number" ? /* @__PURE__ */ kt(
      "div",
      {
        className: `${h ? g : ""} ${s} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ ne(
            zD,
            {
              decimalScale: c,
              onValueChange: (x) => {
                var O;
                return t == null ? void 0 : t.onChange((O = x.value.replace("_", "")) == null ? void 0 : O.toString());
              },
              value: (d = t == null ? void 0 : t.value) == null ? void 0 : d.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${l}`,
              ...p,
              ...ZD.number
            }
          ),
          n ? /* @__PURE__ */ ne("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ ne(
      "input",
      {
        ...t,
        ...p,
        type: e,
        className: `${h ? g : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${l}`
      }
    ),
    h && /* @__PURE__ */ ne(wl, { error: h })
  ] });
}, Cv = ({
  children: e,
  className: t
}) => /* @__PURE__ */ ne("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), u7 = ({ data: e, className: t, onClick: r }) => {
  const o = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [n] = Ee(null);
  return /* @__PURE__ */ ne(Cv, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ ne("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ kt(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${n === i.value && o}`,
      children: [
        /* @__PURE__ */ ne("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ ne("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, Dl = "-", QD = (e) => {
  const t = tN(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Dl);
      return s[0] === "" && s.length !== 1 && s.shift(), _v(s, t) || eN(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && o[a] ? [...l, ...o[a]] : l;
    }
  };
}, _v = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? _v(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const i = e.join(Dl);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, fp = /^\[(.+)\]$/, eN = (e) => {
  if (fp.test(e)) {
    const t = fp.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, tN = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return nN(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    Ls(a, o, i, t);
  }), o;
}, Ls = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? t : mp(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (rN(n)) {
        Ls(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([i, a]) => {
      Ls(a, mp(t, i), r, o);
    });
  });
}, mp = (e, t) => {
  let r = e;
  return t.split(Dl).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, rN = (e) => e.isThemeGetter, nN = (e, t) => t ? e.map(([r, o]) => {
  const n = o.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, n];
}) : e, oN = (e) => {
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
}, Iv = "!", iN = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, n = t[0], i = t.length, a = (s) => {
    const l = [];
    let u = 0, m = 0, c;
    for (let d = 0; d < s.length; d++) {
      let x = s[d];
      if (u === 0) {
        if (x === n && (o || s.slice(d, d + i) === t)) {
          l.push(s.slice(m, d)), m = d + i;
          continue;
        }
        if (x === "/") {
          c = d;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" && u--;
    }
    const p = l.length === 0 ? s : s.substring(m), g = p.startsWith(Iv), h = g ? p.substring(1) : p, b = c && c > m ? c - m : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: b
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, aN = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, sN = (e) => ({
  cache: oN(e.cacheSize),
  parseClassName: iN(e),
  ...QD(e)
}), cN = /\s+/, lN = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n
  } = t, i = [], a = e.trim().split(cN);
  let s = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const u = a[l], {
      modifiers: m,
      hasImportantModifier: c,
      baseClassName: p,
      maybePostfixModifierPosition: g
    } = r(u);
    let h = !!g, b = o(h ? p.substring(0, g) : p);
    if (!b) {
      if (!h) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (b = o(p), !b) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      h = !1;
    }
    const d = aN(m).join(":"), x = c ? d + Iv : d, O = x + b;
    if (i.includes(O))
      continue;
    i.push(O);
    const E = n(b, h);
    for (let y = 0; y < E.length; ++y) {
      const f = E[y];
      i.push(x + f);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function uN() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Pv(t)) && (o && (o += " "), o += r);
  return o;
}
const Pv = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Pv(e[o])) && (r && (r += " "), r += t);
  return r;
};
function dN(e, ...t) {
  let r, o, n, i = a;
  function a(l) {
    const u = t.reduce((m, c) => c(m), e());
    return r = sN(u), o = r.cache.get, n = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const u = o(l);
    if (u)
      return u;
    const m = lN(l, r);
    return n(l, m), m;
  }
  return function() {
    return i(uN.apply(null, arguments));
  };
}
const lt = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, $v = /^\[(?:([a-z-]+):)?(.+)\]$/i, pN = /^\d+\/\d+$/, fN = /* @__PURE__ */ new Set(["px", "full", "screen"]), mN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, hN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, mr = (e) => gn(e) || fN.has(e) || pN.test(e), yr = (e) => _n(e, "length", NN), gn = (e) => !!e && !Number.isNaN(Number(e)), Ai = (e) => _n(e, "number", gn), $n = (e) => !!e && Number.isInteger(Number(e)), vN = (e) => e.endsWith("%") && gn(e.slice(0, -1)), he = (e) => $v.test(e), vr = (e) => mN.test(e), EN = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xN = (e) => _n(e, EN, Av), wN = (e) => _n(e, "position", Av), SN = /* @__PURE__ */ new Set(["image", "url"]), ON = (e) => _n(e, SN, _N), DN = (e) => _n(e, "", CN), An = () => !0, _n = (e, t, r) => {
  const o = $v.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, NN = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gN.test(e) && !bN.test(e)
), Av = () => !1, CN = (e) => hN.test(e), _N = (e) => yN.test(e), IN = () => {
  const e = lt("colors"), t = lt("spacing"), r = lt("blur"), o = lt("brightness"), n = lt("borderColor"), i = lt("borderRadius"), a = lt("borderSpacing"), s = lt("borderWidth"), l = lt("contrast"), u = lt("grayscale"), m = lt("hueRotate"), c = lt("invert"), p = lt("gap"), g = lt("gradientColorStops"), h = lt("gradientColorStopPositions"), b = lt("inset"), d = lt("margin"), x = lt("opacity"), O = lt("padding"), E = lt("saturate"), y = lt("scale"), f = lt("sepia"), v = lt("skew"), D = lt("space"), C = lt("translate"), R = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", he, t], I = () => [he, t], T = () => ["", mr, yr], F = () => ["auto", gn, he], k = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", he], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [gn, he];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [An],
      spacing: [mr, yr],
      blur: ["none", "", vr, he],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", vr, he],
      borderSpacing: I(),
      borderWidth: T(),
      contrast: B(),
      grayscale: G(),
      hueRotate: B(),
      invert: G(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vN, yr],
      inset: A(),
      margin: A(),
      opacity: B(),
      padding: I(),
      saturate: B(),
      scale: B(),
      sepia: G(),
      skew: B(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", he]
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
        columns: [vr]
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
        object: [...k(), he]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
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
        z: ["auto", $n, he]
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
        flex: ["1", "auto", "initial", "none", he]
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
        order: ["first", "last", "none", $n, he]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [An]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", $n, he]
        }, he]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [An]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [$n, he]
        }, he]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": ["auto", "min", "max", "fr", he]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", he]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...j()]
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
        content: ["normal", ...j(), "baseline"]
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
        "place-content": [...j(), "baseline"]
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
        p: [O]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [O]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [O]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [O]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [O]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [O]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [O]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [O]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [O]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [d]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [d]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [d]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [d]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [d]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [d]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [d]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [d]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [d]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", he, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [he, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [he, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [vr]
        }, vr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [he, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [he, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [he, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [he, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", vr, yr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ai]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [An]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", he]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", gn, Ai]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mr, he]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", he]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", he]
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
        decoration: ["auto", "from-font", mr, yr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", mr, he]
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
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", he]
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
        content: ["none", he]
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
        bg: [...k(), wN]
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
        bg: ["auto", "cover", "contain", xN]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ON]
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
        "outline-offset": [mr, he]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [mr, yr]
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
        "ring-offset": [mr, yr]
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
        shadow: ["", "inner", "none", vr, DN]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [An]
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", vr, he]
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
        "backdrop-hue-rotate": [m]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", he]
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
        ease: ["linear", "in", "out", "in-out", he]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", he]
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
        rotate: [$n, he]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", he]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", he]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        "will-change": ["auto", "scroll", "contents", "transform", he]
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
        stroke: [mr, yr, Ai]
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
}, PN = /* @__PURE__ */ dN(IN);
function Tv(e, t) {
  const [r, o] = Ee(e);
  return re(() => {
    const n = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e]), r;
}
const d7 = ({
  options: e,
  field: t,
  className: r,
  ...o
}) => {
  const [n, i] = Ee(!1), [a, s] = Ee(""), l = Tv(a, 100), u = L(null);
  re(() => {
    const c = (p) => {
      u.current && !u.current.contains(p.target) && i(!1);
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, []);
  const m = (c) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(c)) && (t == null ? void 0 : t.value.filter((p) => p !== c)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, c] || [c]
    );
  };
  return /* @__PURE__ */ kt("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ kt("div", { className: "h-fit w-full", children: [
      n && /* @__PURE__ */ ne(
        ai,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ ne(
        "input",
        {
          ...o,
          ref: u,
          className: PN(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: n && a || !n && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (c) => {
              var p;
              return (p = e.find((g) => g.value === c)) == null ? void 0 : p.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: n ? "Поиск..." : "Выбрать",
          onChange: (c) => s(c.target.value),
          readOnly: !n
        }
      )
    ] }),
    n && /* @__PURE__ */ ne("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (c) => c.label.toLowerCase().includes(l.toLowerCase())
    ).map((c) => {
      var p;
      return /* @__PURE__ */ ne(
        "li",
        {
          onClick: () => m(c.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ kt("div", { className: "flex flex-row", children: [
            c.icon && /* @__PURE__ */ ne(ai, { name: c.icon }),
            /* @__PURE__ */ ne(
              "button",
              {
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((p = t == null ? void 0 : t.value) == null ? void 0 : p.includes(c.value)) && "text-primary"}`,
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
}, p7 = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: o,
  parentClassName: n
}) => {
  const [i, a] = Ee(r), s = Tv(i, 300);
  return re(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ kt("div", { className: `relative h-fit w-full ${n}`, children: [
    /* @__PURE__ */ ne(
      ai,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ ne(
      "input",
      {
        placeholder: e,
        onChange: (l) => a(l.target.value),
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${o}`
      }
    )
  ] });
}, f7 = ({
  placeholder: e,
  options: t,
  className: r,
  field: o,
  fieldState: n,
  labelClassName: i,
  parentClassName: a,
  formState: s,
  label: l,
  ...u
}) => /* @__PURE__ */ kt("label", { children: [
  l && /* @__PURE__ */ ne("span", { className: `text-primary ${i}`, children: l }),
  /* @__PURE__ */ ne(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ kt(
        "select",
        {
          ...o,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ ne("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((m, c) => /* @__PURE__ */ ne("option", { value: m.value, className: "text-black", children: m.label }, c))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ ne(wl, { error: n == null ? void 0 : n.error })
] });
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
}
function $N(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || "default");
    if (Yn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AN(e) {
  var t = $N(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function TN(e, t, r) {
  return (t = AN(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function gp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function bp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gp(Object(r), !0).forEach(function(o) {
      TN(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gp(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function Ut(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var hp = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ti = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, yp = {
  INIT: "@@redux/INIT" + Ti(),
  REPLACE: "@@redux/REPLACE" + Ti(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ti();
  }
};
function RN(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function VN(e) {
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
  if (BN(e)) return "date";
  if (LN(e)) return "error";
  var r = MN(e);
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
function MN(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function LN(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function BN(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function zr(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = VN(e)), t;
}
function Rv(e, t, r) {
  var o;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ut(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(1) : "Expected the enhancer to be a function. Instead, received: '" + zr(r) + "'");
    return r(Rv)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ut(2) : "Expected the root reducer to be a function. Instead, received: '" + zr(e) + "'");
  var n = e, i = t, a = [], s = a, l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function m() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ut(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(4) : "Expected the listener to be a function. Instead, received: '" + zr(b) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ut(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var d = !0;
    return u(), s.push(b), function() {
      if (d) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? Ut(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        d = !1, u();
        var O = s.indexOf(b);
        s.splice(O, 1), a = null;
      }
    };
  }
  function p(b) {
    if (!RN(b))
      throw new Error(process.env.NODE_ENV === "production" ? Ut(7) : "Actions must be plain objects. Instead, the actual type was: '" + zr(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ut(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = n(i, b);
    } finally {
      l = !1;
    }
    for (var d = a = s, x = 0; x < d.length; x++) {
      var O = d[x];
      O();
    }
    return b;
  }
  function g(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ut(10) : "Expected the nextReducer to be a function. Instead, received: '" + zr(b));
    n = b, p({
      type: yp.REPLACE
    });
  }
  function h() {
    var b, d = c;
    return b = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(O) {
        if (typeof O != "object" || O === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ut(11) : "Expected the observer to be an object. Instead, received: '" + zr(O) + "'");
        function E() {
          O.next && O.next(m());
        }
        E();
        var y = d(E);
        return {
          unsubscribe: y
        };
      }
    }, b[hp] = function() {
      return this;
    }, b;
  }
  return p({
    type: yp.INIT
  }), o = {
    dispatch: p,
    subscribe: c,
    getState: m,
    replaceReducer: g
  }, o[hp] = h, o;
}
function vp(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Ep(e, t) {
  if (typeof e == "function")
    return vp(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Ut(16) : "bindActionCreators expected an object or a function, but instead received: '" + zr(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var o in e) {
    var n = e[o];
    typeof n == "function" && (r[o] = vp(n, t));
  }
  return r;
}
function Vv() {
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
function FN() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(o) {
    return function() {
      var n = o.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Ut(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: n.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = Vv.apply(void 0, s)(n.dispatch), bp(bp({}, n), {}, {
        dispatch: i
      });
    };
  };
}
function jN(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bs = { exports: {} }, Ri = {};
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
function WN() {
  if (xp) return Ri;
  xp = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Ri.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Ri;
}
var Vi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp;
function GN() {
  return wp || (wp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Vi.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Vi;
}
process.env.NODE_ENV === "production" ? Bs.exports = WN() : Bs.exports = GN();
var Nl = Bs.exports, Mi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp;
function kN() {
  if (Sp) return Mi;
  Sp = 1;
  var e = _, t = Nl;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Mi.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, Mi;
}
var Li = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Op;
function zN() {
  return Op || (Op = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Nl, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Li.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Li;
}
process.env.NODE_ENV === "production" ? kN() : zN();
function HN(e) {
  e();
}
let Mv = HN;
const UN = (e) => Mv = e, qN = () => Mv, Dp = Symbol.for("react-redux-context"), Np = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function YN() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Np[Dp]) != null ? e : Np[Dp] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const Lv = /* @__PURE__ */ YN(), KN = () => {
  throw new Error("uSES not initialized!");
};
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, xr.apply(null, arguments);
}
function Bv(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Fs = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp;
function XN() {
  if (Cp) return xe;
  Cp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return xe.AsyncMode = l, xe.ConcurrentMode = u, xe.ContextConsumer = s, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = m, xe.Fragment = o, xe.Lazy = h, xe.Memo = g, xe.Portal = r, xe.Profiler = i, xe.StrictMode = n, xe.Suspense = c, xe.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
  }, xe.isConcurrentMode = y, xe.isContextConsumer = function(f) {
    return E(f) === s;
  }, xe.isContextProvider = function(f) {
    return E(f) === a;
  }, xe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, xe.isForwardRef = function(f) {
    return E(f) === m;
  }, xe.isFragment = function(f) {
    return E(f) === o;
  }, xe.isLazy = function(f) {
    return E(f) === h;
  }, xe.isMemo = function(f) {
    return E(f) === g;
  }, xe.isPortal = function(f) {
    return E(f) === r;
  }, xe.isProfiler = function(f) {
    return E(f) === i;
  }, xe.isStrictMode = function(f) {
    return E(f) === n;
  }, xe.isSuspense = function(f) {
    return E(f) === c;
  }, xe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, xe.typeOf = E, xe;
}
var we = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p;
function JN() {
  return _p || (_p = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    we.AsyncMode = f, we.ConcurrentMode = v, we.ContextConsumer = D, we.ContextProvider = C, we.Element = R, we.ForwardRef = P, we.Fragment = A, we.Lazy = I, we.Memo = T, we.Portal = F, we.Profiler = k, we.StrictMode = V, we.Suspense = W, we.isAsyncMode = G, we.isConcurrentMode = z, we.isContextConsumer = B, we.isContextProvider = q, we.isElement = Y, we.isForwardRef = K, we.isFragment = Z, we.isLazy = te, we.isMemo = H, we.isPortal = X, we.isProfiler = M, we.isStrictMode = J, we.isSuspense = be, we.isValidElementType = E, we.typeOf = y;
  }()), we;
}
process.env.NODE_ENV === "production" ? Fs.exports = XN() : Fs.exports = JN();
var ZN = Fs.exports, Cl = ZN, QN = {
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
}, e0 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, t0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Fv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, _l = {};
_l[Cl.ForwardRef] = t0;
_l[Cl.Memo] = Fv;
function Ip(e) {
  return Cl.isMemo(e) ? Fv : _l[e.$$typeof] || QN;
}
var r0 = Object.defineProperty, n0 = Object.getOwnPropertyNames, Pp = Object.getOwnPropertySymbols, o0 = Object.getOwnPropertyDescriptor, i0 = Object.getPrototypeOf, $p = Object.prototype;
function jv(e, t, r) {
  if (typeof t != "string") {
    if ($p) {
      var o = i0(t);
      o && o !== $p && jv(e, o, r);
    }
    var n = n0(t);
    Pp && (n = n.concat(Pp(t)));
    for (var i = Ip(e), a = Ip(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!e0[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = o0(t, l);
        try {
          r0(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var a0 = jv;
const Ap = /* @__PURE__ */ jN(a0);
var js = { exports: {} }, Se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tp;
function s0() {
  if (Tp) return Se;
  Tp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Se.ContextConsumer = a, Se.ContextProvider = i, Se.Element = e, Se.ForwardRef = l, Se.Fragment = r, Se.Lazy = p, Se.Memo = c, Se.Portal = t, Se.Profiler = n, Se.StrictMode = o, Se.Suspense = u, Se.SuspenseList = m, Se.isAsyncMode = function() {
    return !1;
  }, Se.isConcurrentMode = function() {
    return !1;
  }, Se.isContextConsumer = function(d) {
    return b(d) === a;
  }, Se.isContextProvider = function(d) {
    return b(d) === i;
  }, Se.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Se.isForwardRef = function(d) {
    return b(d) === l;
  }, Se.isFragment = function(d) {
    return b(d) === r;
  }, Se.isLazy = function(d) {
    return b(d) === p;
  }, Se.isMemo = function(d) {
    return b(d) === c;
  }, Se.isPortal = function(d) {
    return b(d) === t;
  }, Se.isProfiler = function(d) {
    return b(d) === n;
  }, Se.isStrictMode = function(d) {
    return b(d) === o;
  }, Se.isSuspense = function(d) {
    return b(d) === u;
  }, Se.isSuspenseList = function(d) {
    return b(d) === m;
  }, Se.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, Se.typeOf = b, Se;
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
var Rp;
function c0() {
  return Rp || (Rp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    Oe.ContextConsumer = v, Oe.ContextProvider = D, Oe.Element = C, Oe.ForwardRef = R, Oe.Fragment = P, Oe.Lazy = A, Oe.Memo = I, Oe.Portal = T, Oe.Profiler = F, Oe.StrictMode = k, Oe.Suspense = V, Oe.SuspenseList = W, Oe.isAsyncMode = z, Oe.isConcurrentMode = B, Oe.isContextConsumer = q, Oe.isContextProvider = Y, Oe.isElement = K, Oe.isForwardRef = Z, Oe.isFragment = te, Oe.isLazy = H, Oe.isMemo = X, Oe.isPortal = M, Oe.isProfiler = J, Oe.isStrictMode = be, Oe.isSuspense = w, Oe.isSuspenseList = ee, Oe.isValidElementType = y, Oe.typeOf = f;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? js.exports = s0() : js.exports = c0();
var Vp = js.exports;
function Il(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Bi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Il(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function l0(e, t, r) {
  Bi(e, "mapStateToProps"), Bi(t, "mapDispatchToProps"), Bi(r, "mergeProps");
}
const u0 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function d0(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(E, y) {
    return s ? x(E, y) : g(E, y);
  };
}
function p0(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Bv(t, u0);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && l0(a, s, l), d0(a, s, l, e, i);
}
function f0(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function m0(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Wv(e, t, r) {
  m0(e) || Il(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ws(e) {
  return function(r) {
    const o = e(r);
    function n() {
      return o;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Mp(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Gv(e, t) {
  return function(o, {
    displayName: n
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = Mp(e);
      let u = i(s, l);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Mp(u), u = i(s, l)), process.env.NODE_ENV !== "production" && Wv(u, n, t), u;
    }, i;
  };
}
function Pl(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function g0(e) {
  return e && typeof e == "object" ? Ws((t) => (
    // @ts-ignore
    f0(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Gv(e, "mapDispatchToProps")
  ) : Pl(e, "mapDispatchToProps") : Ws((t) => ({
    dispatch: t
  }));
}
function b0(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Gv(e, "mapStateToProps")
  ) : Pl(e, "mapStateToProps") : Ws(() => ({}));
}
function h0(e, t, r) {
  return xr({}, r, e, t);
}
function y0(e) {
  return function(r, {
    displayName: o,
    areMergedPropsEqual: n
  }) {
    let i = !1, a;
    return function(l, u, m) {
      const c = e(l, u, m);
      return i ? n(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && Wv(a, o, "mergeProps")), a;
    };
  };
}
function v0(e) {
  return e ? typeof e == "function" ? y0(e) : Pl(e, "mergeProps") : () => h0;
}
function E0() {
  const e = qN();
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
const Lp = {
  notify() {
  },
  get: () => []
};
function kv(e, t) {
  let r, o = Lp, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = E0());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Lp);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const x0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ci = x0 ? N.useLayoutEffect : N.useEffect;
function Bp(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Fi(e, t) {
  if (Bp(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Bp(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const w0 = ["reactReduxForwardedRef"];
let zv = KN;
const S0 = (e) => {
  zv = e;
}, O0 = [null, null], D0 = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function N0(e, t, r) {
  ci(() => e(...t), r);
}
function C0(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function _0(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const b = t.getState();
    let d, x;
    try {
      d = o(b, n.current);
    } catch (O) {
      x = O, p = O;
    }
    x || (p = null), d === i.current ? a.current || u() : (i.current = d, l.current = d, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function I0(e, t) {
  return e === t;
}
let Fp = !1;
function Hv(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = I0,
  areOwnPropsEqual: i = Fi,
  areStatePropsEqual: a = Fi,
  areMergedPropsEqual: s = Fi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = Lv
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Fp && (Fp = !0, Il('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = b0(e), p = g0(t), g = v0(r), h = !!e;
  return (d) => {
    if (process.env.NODE_ENV !== "production" && !Vp.isValidElementType(d))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${D0(d)}`);
    const x = d.displayName || d.name || "Component", O = `Connect(${x})`, E = {
      shouldHandleStateChanges: h,
      displayName: O,
      wrappedComponentName: x,
      WrappedComponent: d,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function y(D) {
      const [C, R, P] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: w
        } = D, ee = Bv(D, w0);
        return [D.context, w, ee];
      }, [D]), A = N.useMemo(() => C && C.Consumer && // @ts-ignore
      Vp.isContextConsumer(/* @__PURE__ */ N.createElement(C.Consumer, null)) ? C : m, [C, m]), I = N.useContext(A), T = !!D.store && !!D.store.getState && !!D.store.dispatch, F = !!I && !!I.store;
      if (process.env.NODE_ENV !== "production" && !T && !F)
        throw new Error(`Could not find "store" in the context of "${O}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${O} in connect options.`);
      const k = T ? D.store : I.store, V = F ? I.getServerState : k.getState, W = N.useMemo(() => p0(k.dispatch, E), [k]), [j, G] = N.useMemo(() => {
        if (!h) return O0;
        const w = kv(k, T ? void 0 : I.subscription), ee = w.notifyNestedSubs.bind(w);
        return [w, ee];
      }, [k, T, I]), z = N.useMemo(() => T ? I : xr({}, I, {
        subscription: j
      }), [T, I, j]), B = N.useRef(), q = N.useRef(P), Y = N.useRef(), K = N.useRef(!1);
      N.useRef(!1);
      const Z = N.useRef(!1), te = N.useRef();
      ci(() => (Z.current = !0, () => {
        Z.current = !1;
      }), []);
      const H = N.useMemo(() => () => Y.current && P === q.current ? Y.current : W(k.getState(), P), [k, P]), X = N.useMemo(() => (ee) => j ? _0(
        h,
        k,
        j,
        // @ts-ignore
        W,
        q,
        B,
        K,
        Z,
        Y,
        G,
        ee
      ) : () => {
      }, [j]);
      N0(C0, [q, B, K, P, Y, G]);
      let M;
      try {
        M = zv(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          X,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          H,
          V ? () => W(V(), P) : H
        );
      } catch (w) {
        throw te.current && (w.message += `
The error may be correlated with this previous error:
${te.current.stack}

`), w;
      }
      ci(() => {
        te.current = void 0, Y.current = void 0, B.current = M;
      });
      const J = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(d, xr({}, M, {
          ref: R
        }))
      ), [R, d, M]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(A.Provider, {
        value: z
      }, J) : J, [A, J, z]);
    }
    const v = N.memo(y);
    if (v.WrappedComponent = d, v.displayName = y.displayName = O, l) {
      const C = N.forwardRef(function(P, A) {
        return /* @__PURE__ */ N.createElement(v, xr({}, P, {
          reactReduxForwardedRef: A
        }));
      });
      return C.displayName = O, C.WrappedComponent = d, Ap(C, d);
    }
    return Ap(v, d);
  };
}
function P0({
  store: e,
  context: t,
  children: r,
  serverState: o,
  stabilityCheck: n = "once",
  noopCheck: i = "once"
}) {
  const a = N.useMemo(() => {
    const u = kv(e);
    return {
      store: e,
      subscription: u,
      getServerState: o ? () => o : void 0,
      stabilityCheck: n,
      noopCheck: i
    };
  }, [e, o, n, i]), s = N.useMemo(() => e.getState(), [e]);
  ci(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || Lv;
  return /* @__PURE__ */ N.createElement(l.Provider, {
    value: a
  }, r);
}
S0(Nl.useSyncExternalStore);
UN(pr);
function $0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Uv(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && $0(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function A0(e, t) {
  return Uv(function() {
    return e;
  }, t);
}
var ve = Uv, oe = A0, T0 = process.env.NODE_ENV === "production", ji = "Invariant failed";
function jp(e, t) {
  if (T0)
    throw new Error(ji);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(ji, ": ").concat(r) : ji;
  throw new Error(o);
}
var cr = function(t) {
  var r = t.top, o = t.right, n = t.bottom, i = t.left, a = o - i, s = n - r, l = {
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
  return l;
}, $l = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Wp = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, R0 = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Wi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Al = function(t) {
  var r = t.borderBox, o = t.margin, n = o === void 0 ? Wi : o, i = t.border, a = i === void 0 ? Wi : i, s = t.padding, l = s === void 0 ? Wi : s, u = cr($l(r, n)), m = cr(Wp(r, a)), c = cr(Wp(m, l));
  return {
    marginBox: u,
    borderBox: cr(r),
    paddingBox: m,
    contentBox: c,
    margin: n,
    border: a,
    padding: l
  };
}, Xt = function(t) {
  var r = t.slice(0, -2), o = t.slice(-2);
  if (o !== "px")
    return 0;
  var n = Number(r);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? jp(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : jp()), n;
}, V0 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, li = function(t, r) {
  var o = t.borderBox, n = t.border, i = t.margin, a = t.padding, s = R0(o, r);
  return Al({
    borderBox: s,
    border: n,
    margin: i,
    padding: a
  });
}, ui = function(t, r) {
  return r === void 0 && (r = V0()), li(t, r);
}, qv = function(t, r) {
  var o = {
    top: Xt(r.marginTop),
    right: Xt(r.marginRight),
    bottom: Xt(r.marginBottom),
    left: Xt(r.marginLeft)
  }, n = {
    top: Xt(r.paddingTop),
    right: Xt(r.paddingRight),
    bottom: Xt(r.paddingBottom),
    left: Xt(r.paddingLeft)
  }, i = {
    top: Xt(r.borderTopWidth),
    right: Xt(r.borderRightWidth),
    bottom: Xt(r.borderBottomWidth),
    left: Xt(r.borderLeftWidth)
  };
  return Al({
    borderBox: t,
    margin: o,
    padding: n,
    border: i
  });
}, Yv = function(t) {
  var r = t.getBoundingClientRect(), o = window.getComputedStyle(t);
  return qv(r, o);
}, Gp = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function M0(e, t) {
  return !!(e === t || Gp(e) && Gp(t));
}
function L0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!M0(e[r], t[r]))
      return !1;
  return !0;
}
function wt(e, t) {
  t === void 0 && (t = L0);
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
var Kn = function(t) {
  var r = [], o = null, n = function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    r = s, !o && (o = requestAnimationFrame(function() {
      o = null, t.apply(void 0, r);
    }));
  };
  return n.cancel = function() {
    o && (cancelAnimationFrame(o), o = null);
  }, n;
};
const B0 = process.env.NODE_ENV === "production", F0 = /[ \t]{2,}/g, j0 = /^[ \t]*/gm, kp = (e) => e.replace(F0, " ").replace(j0, "").trim(), W0 = (e) => kp(`
  %c@hello-pangea/dnd

  %c${kp(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), G0 = (e) => [W0(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], k0 = "__@hello-pangea/dnd-disable-dev-warnings";
function Kv(e, t) {
  B0 || typeof window < "u" && window[k0] || console[e](...G0(t));
}
const ct = Kv.bind(null, "warn"), Gs = Kv.bind(null, "error");
function wr() {
}
function z0(e, t) {
  return {
    ...e,
    ...t
  };
}
function ar(e, t, r) {
  const o = t.map((n) => {
    const i = z0(r, n.options);
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
const H0 = process.env.NODE_ENV === "production", zp = "Invariant failed";
class Xn extends Error {
}
Xn.prototype.toString = function() {
  return this.message;
};
function $(e, t) {
  throw H0 ? new Xn(zp) : new Xn(`${zp}: ${t || ""}`);
}
class U0 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = wr, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && ct(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Xn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Gs(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = ar(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Xn) {
      process.env.NODE_ENV !== "production" && Gs(t.message), this.setState({});
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
const q0 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, di = (e) => e + 1, Y0 = (e) => `
  You have lifted an item in position ${di(e.source.index)}
`, Xv = (e, t) => {
  const r = e.droppableId === t.droppableId, o = di(e.index), n = di(t.index);
  return r ? `
      You have moved the item from position ${o}
      to position ${n}
    ` : `
    You have moved the item from position ${o}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${n}
  `;
}, Jv = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, K0 = (e) => {
  const t = e.destination;
  if (t)
    return Xv(e.source, t);
  const r = e.combine;
  return r ? Jv(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Hp = (e) => `
  The item has returned to its starting position
  of ${di(e.index)}
`, X0 = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Hp(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Xv(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${Jv(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Hp(e.source)}
  `;
}, J0 = {
  dragHandleUsageInstructions: q0,
  onDragStart: Y0,
  onDragUpdate: K0,
  onDragEnd: X0
};
var Wo = J0;
const St = {
  x: 0,
  y: 0
}, Tt = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), qt = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Sr = (e, t) => e.x === t.x && e.y === t.y, In = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Yr = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Jn = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Up = (e, t) => Math.min(...t.map((r) => Jn(e, r))), Zv = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Z0 = (e, t) => {
  const r = cr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const So = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), qp = (e) => [{
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
}], Q0 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, eC = (e, t) => t ? So(e, t.scroll.diff.displacement) : e, tC = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, rC = (e, t) => t && t.shouldClipSubject ? Z0(t.pageMarginBox, e) : cr(e);
var Dn = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = eC(e.marginBox, o), i = tC(n, r, t), a = rC(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Tl = (e, t) => {
  e.frame || (process.env.NODE_ENV, $());
  const r = e.frame, o = qt(t, r.scroll.initial), n = In(o), i = {
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
  }, a = Dn({
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
const Qv = wt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), eE = wt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Oi = wt((e) => Object.values(e)), nC = wt((e) => Object.values(e));
var on = wt((e, t) => nC(t).filter((o) => e === o.descriptor.droppableId).sort((o, n) => o.descriptor.index - n.descriptor.index));
function Rl(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Di(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Ni = wt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), oC = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: o,
  previousImpact: n
}) => {
  if (!r.isCombineEnabled || !Rl(n))
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
  const s = n.displaced.all, l = s.length ? s[0] : null;
  if (e)
    return l ? a(l) : null;
  const u = Ni(t, o);
  if (!l) {
    if (!u.length)
      return null;
    const g = u[u.length - 1];
    return a(g.descriptor.id);
  }
  const m = u.findIndex((g) => g.descriptor.id === l);
  m === -1 && (process.env.NODE_ENV !== "production" ? $(!1, "Could not find displaced item in set") : $());
  const c = m - 1;
  if (c < 0)
    return null;
  const p = u[c];
  return a(p.descriptor.id);
}, Pn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const tE = {
  point: St,
  value: 0
}, Zn = {
  invisible: {},
  visible: {},
  all: []
}, iC = {
  displaced: Zn,
  displacedBy: tE,
  at: null
};
var aC = iC, sr = (e, t) => (r) => e <= r && r <= t, rE = (e) => {
  const t = sr(e.top, e.bottom), r = sr(e.left, e.right);
  return (o) => {
    if (t(o.top) && t(o.bottom) && r(o.left) && r(o.right))
      return !0;
    const i = t(o.top) || t(o.bottom), a = r(o.left) || r(o.right);
    if (i && a)
      return !0;
    const l = o.top < e.top && o.bottom > e.bottom, u = o.left < e.left && o.right > e.right;
    return l && u ? !0 : l && a || u && i;
  };
}, sC = (e) => {
  const t = sr(e.top, e.bottom), r = sr(e.left, e.right);
  return (o) => t(o.top) && t(o.bottom) && r(o.left) && r(o.right);
};
const Vl = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, nE = {
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
var cC = (e) => (t) => {
  const r = sr(t.top, t.bottom), o = sr(t.left, t.right);
  return (n) => e === Vl ? r(n.top) && r(n.bottom) : o(n.left) && o(n.right);
};
const lC = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : St;
  return So(e, r);
}, uC = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, dC = (e, t, r) => r(t)(e), Ml = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: o,
  isVisibleThroughFrameFn: n
}) => {
  const i = o ? lC(e, t) : e;
  return uC(i, t, n) && dC(i, r, n);
}, pC = (e) => Ml({
  ...e,
  isVisibleThroughFrameFn: rE
}), oE = (e) => Ml({
  ...e,
  isVisibleThroughFrameFn: sC
}), fC = (e) => Ml({
  ...e,
  isVisibleThroughFrameFn: cC(e.destination.axis)
}), mC = (e, t, r) => {
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
function gC(e, t) {
  const r = e.page.marginBox, o = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return cr($l(r, o));
}
function Qn({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: o,
  forceShouldAnimate: n,
  last: i
}) {
  return e.reduce(function(s, l) {
    const u = gC(l, r), m = l.descriptor.id;
    if (s.all.push(m), !pC({
      target: u,
      destination: t,
      viewport: o,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const p = mC(m, i, n), g = {
      draggableId: m,
      shouldAnimate: p
    };
    return s.visible[m] = g, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function bC(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Yp({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: o
}) {
  const n = bC(e, {
    inHomeList: t
  });
  return {
    displaced: Zn,
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
function pi({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: o,
  displacedBy: n,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = Pn(e, r);
  if (a == null)
    return Yp({
      insideDestination: t,
      inHomeList: l,
      displacedBy: n,
      destination: r
    });
  const u = t.find((h) => h.descriptor.index === a);
  if (!u)
    return Yp({
      insideDestination: t,
      inHomeList: l,
      displacedBy: n,
      destination: r
    });
  const m = Ni(e, t), c = t.indexOf(u), p = m.slice(c);
  return {
    displaced: Qn({
      afterDragging: p,
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
function Tr(e, t) {
  return !!t.effected[e];
}
var hC = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: o,
  afterCritical: n
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = o.draggableId, s = r[i].descriptor.index;
  return Tr(i, n) ? e ? s : s - 1 : e ? s + 1 : s;
}, yC = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: o
}) => {
  if (!r.length)
    return null;
  const n = o.index, i = e ? n + 1 : n - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, vC = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: o,
  destination: n,
  insideDestination: i,
  previousImpact: a,
  viewport: s,
  afterCritical: l
}) => {
  const u = a.at;
  if (u || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot move in direction without previous impact location") : $()), u.type === "REORDER") {
    const c = yC({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return c == null ? null : pi({
      draggable: r,
      insideDestination: i,
      destination: n,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const m = hC({
    isMovingForward: e,
    destination: n,
    displaced: a.displaced,
    draggables: o,
    combine: u.combine,
    afterCritical: l
  });
  return m == null ? null : pi({
    draggable: r,
    insideDestination: i,
    destination: n,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: m
  });
}, EC = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: o
}) => {
  const n = !!(e.visible[r] || e.invisible[r]);
  return Tr(r, t) ? n ? St : In(o.point) : n ? o.point : St;
}, xC = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const o = Di(t);
  o || (process.env.NODE_ENV, $());
  const n = o.draggableId, i = r[n].page.borderBox.center, a = EC({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: n,
    displacedBy: t.displacedBy
  });
  return Tt(i, a);
};
const iE = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, wC = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Ll = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Kp = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Yr(e.line, t.marginBox[e.end] + iE(e, r), Ll(e, t.marginBox, r)), Xp = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Yr(e.line, t.marginBox[e.start] - wC(e, r), Ll(e, t.marginBox, r)), SC = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Yr(e.line, t.contentBox[e.start] + iE(e, r), Ll(e, t.contentBox, r));
var OC = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: o,
  afterCritical: n
}) => {
  const i = on(o.descriptor.id, r), a = t.page, s = o.axis;
  if (!i.length)
    return SC({
      axis: s,
      moveInto: o.page,
      isMoving: a
    });
  const {
    displaced: l,
    displacedBy: u
  } = e, m = l.all[0];
  if (m) {
    const p = r[m];
    if (Tr(m, n))
      return Xp({
        axis: s,
        moveRelativeTo: p.page,
        isMoving: a
      });
    const g = li(p.page, u.point);
    return Xp({
      axis: s,
      moveRelativeTo: g,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Tr(c.descriptor.id, n)) {
    const p = li(c.page, In(n.displacedBy.point));
    return Kp({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  return Kp({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, ks = (e, t) => {
  const r = e.frame;
  return r ? Tt(t, r.scroll.diff.displacement) : t;
};
const DC = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: o,
  afterCritical: n
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? OC({
    impact: e,
    draggable: t,
    draggables: o,
    droppable: r,
    afterCritical: n
  }) : xC({
    impact: e,
    draggables: o,
    afterCritical: n
  });
};
var Ci = (e) => {
  const t = DC(e), r = e.droppable;
  return r ? ks(r, t) : t;
}, aE = (e, t) => {
  const r = qt(t, e.scroll.initial), o = In(r);
  return {
    frame: cr({
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
function Jp(e, t) {
  return e.map((r) => t[r]);
}
function NC(e, t) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r].visible[e];
    if (o)
      return o;
  }
  return null;
}
var CC = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: o,
  maxScrollChange: n
}) => {
  const i = aE(t, Tt(t.scroll.current, n)), a = r.frame ? Tl(r, Tt(r.frame.scroll.current, n)) : r, s = e.displaced, l = Qn({
    afterDragging: Jp(s.all, o),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Qn({
    afterDragging: Jp(s.all, o),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), m = {}, c = {}, p = [s, l, u];
  return s.all.forEach((h) => {
    const b = NC(h, p);
    if (b) {
      c[h] = b;
      return;
    }
    m[h] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: m,
      visible: c
    }
  };
}, _C = (e, t) => Tt(e.scroll.diff.displacement, t), Bl = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const o = _C(r, e), n = qt(o, t.page.borderBox.center);
  return Tt(t.client.borderBox.center, n);
}, sE = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: o,
  withDroppableDisplacement: n,
  onlyOnMainAxis: i = !1
}) => {
  const a = qt(r, e.page.borderBox.center), l = {
    target: So(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: n,
    viewport: o
  };
  return i ? fC(l) : oE(l);
}, IC = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: o,
  previousImpact: n,
  viewport: i,
  previousPageBorderBoxCenter: a,
  previousClientSelection: s,
  afterCritical: l
}) => {
  if (!r.isEnabled)
    return null;
  const u = on(r.descriptor.id, o), m = Pn(t, r), c = oC({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: n
  }) || vC({
    isMovingForward: e,
    isInHomeList: m,
    draggable: t,
    draggables: o,
    destination: r,
    insideDestination: u,
    previousImpact: n,
    viewport: i,
    afterCritical: l
  });
  if (!c)
    return null;
  const p = Ci({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: o,
    afterCritical: l
  });
  if (sE({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: p,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Bl({
        pageBorderBoxCenter: p,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const h = qt(p, a), b = CC({
    impact: c,
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
const zt = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot get clipped area from droppable") : $()), t;
};
var PC = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: o,
  viewport: n
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = sr(i[a.start], i[a.end]), l = Oi(o).filter((m) => m !== r).filter((m) => m.isEnabled).filter((m) => !!m.subject.active).filter((m) => rE(n.frame)(zt(m))).filter((m) => {
    const c = zt(m);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((m) => {
    const c = zt(m), p = sr(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || p(i[a.start]) || p(i[a.end]);
  }).sort((m, c) => {
    const p = zt(m)[a.crossAxisStart], g = zt(c)[a.crossAxisStart];
    return e ? p - g : g - p;
  }).filter((m, c, p) => zt(m)[a.crossAxisStart] === zt(p[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const u = l.filter((m) => sr(zt(m)[a.start], zt(m)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((m, c) => zt(m)[a.start] - zt(c)[a.start])[0] : l.sort((m, c) => {
    const p = Up(t, qp(zt(m))), g = Up(t, qp(zt(c)));
    return p !== g ? p - g : zt(m)[a.start] - zt(c)[a.start];
  })[0];
};
const Zp = (e, t) => {
  const r = e.page.borderBox.center;
  return Tr(e.descriptor.id, t) ? qt(r, t.displacedBy.point) : r;
}, $C = (e, t) => {
  const r = e.page.borderBox;
  return Tr(e.descriptor.id, t) ? So(r, In(t.displacedBy.point)) : r;
};
var AC = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: o,
  afterCritical: n
}) => o.filter((a) => oE({
  target: $C(a, n),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = Jn(e, ks(r, Zp(a, n))), u = Jn(e, ks(r, Zp(s, n)));
  return l < u ? -1 : u < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Oo = wt(function(t, r) {
  const o = r[t.line];
  return {
    value: o,
    point: Yr(t.line, o)
  };
});
const TC = (e, t, r) => {
  const o = e.axis;
  if (e.descriptor.mode === "virtual")
    return Yr(o.line, t[o.line]);
  const n = e.subject.page.contentBox[o.size], l = on(e.descriptor.id, r).reduce((u, m) => u + m.client.marginBox[o.size], 0) + t[o.line] - n;
  return l <= 0 ? null : Yr(o.line, l);
}, cE = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), lE = (e, t, r) => {
  const o = e.frame;
  Pn(t, e) && (process.env.NODE_ENV !== "production" ? $(!1, "Should not add placeholder space to home list") : $()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot add placeholder size to a subject when it already has one") : $());
  const n = Oo(e.axis, t.displaceBy).point, i = TC(e, n, r), a = {
    placeholderSize: n,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!o) {
    const m = Dn({
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
  const s = i ? Tt(o.scroll.max, i) : o.scroll.max, l = cE(o, s), u = Dn({
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
}, RC = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot remove placeholder form subject when there was none") : $());
  const r = e.frame;
  if (!r) {
    const a = Dn({
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
  o || (process.env.NODE_ENV !== "production" ? $(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : $());
  const n = cE(r, o), i = Dn({
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
var VC = ({
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
    const c = {
      displaced: Zn,
      displacedBy: tE,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, p = Ci({
      impact: c,
      draggable: o,
      droppable: i,
      draggables: n,
      afterCritical: s
    }), g = Pn(o, i) ? i : lE(i, o, n);
    return sE({
      draggable: o,
      destination: g,
      newPageBorderBoxCenter: p,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? c : null;
  }
  const l = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const c = t.descriptor.index;
    return t.descriptor.id === o.descriptor.id || l ? c : c + 1;
  })(), m = Oo(i.axis, o.displaceBy);
  return pi({
    draggable: o,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: m,
    last: Zn,
    index: u
  });
}, MC = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: o,
  draggables: n,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = PC({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: o,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const u = on(l.descriptor.id, n), m = AC({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }), c = VC({
    previousPageBorderBoxCenter: t,
    destination: l,
    draggable: r,
    draggables: n,
    moveRelativeTo: m,
    insideDestination: u,
    viewport: a,
    afterCritical: s
  });
  if (!c)
    return null;
  const p = Ci({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: n,
    afterCritical: s
  });
  return {
    clientSelection: Bl({
      pageBorderBoxCenter: p,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, Yt = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const LC = (e, t) => {
  const r = Yt(e);
  return r ? t[r] : null;
};
var BC = ({
  state: e,
  type: t
}) => {
  const r = LC(e.impact, e.dimensions.droppables), o = !!r, n = e.dimensions.droppables[e.critical.droppable.id], i = r || n, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !o)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], m = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: p
  } = e.dimensions;
  return s ? IC({
    isMovingForward: l,
    previousPageBorderBoxCenter: m,
    draggable: u,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : MC({
    isMovingForward: l,
    previousPageBorderBoxCenter: m,
    draggable: u,
    isOver: i,
    draggables: c,
    droppables: p,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function Hr(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function uE(e) {
  const t = sr(e.top, e.bottom), r = sr(e.left, e.right);
  return function(n) {
    return t(n.y) && r(n.x);
  };
}
function FC(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function jC({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const o = t.page.borderBox.center, n = r.map((i) => {
    const a = i.axis, s = Yr(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Jn(o, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return n[0] ? n[0].id : null;
}
function WC({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const o = Oi(r).filter((n) => {
    if (!n.isEnabled)
      return !1;
    const i = n.subject.active;
    if (!i || !FC(e, i))
      return !1;
    if (uE(i)(e.center))
      return !0;
    const a = n.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], u = e[a.crossAxisEnd], m = sr(i[a.crossAxisStart], i[a.crossAxisEnd]), c = m(l), p = m(u);
    return !c && !p ? !0 : c ? l < s : u > s;
  });
  return o.length ? o.length === 1 ? o[0].descriptor.id : jC({
    pageBorderBox: e,
    draggable: t,
    candidates: o
  }) : null;
}
const dE = (e, t) => cr(So(e, t));
var GC = (e, t) => {
  const r = e.frame;
  return r ? dE(t, r.scroll.diff.value) : t;
};
function pE({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function kC({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var zC = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: o,
  last: n,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = Oo(r.axis, t.displaceBy), u = l.value, m = e[s.start], c = e[s.end], g = Ni(t, o).find((b) => {
    const d = b.descriptor.id, x = b.page.borderBox.center[s.line], O = Tr(d, a), E = pE({
      displaced: n,
      id: d
    });
    return O ? E ? c <= x : m < x - u : E ? c <= x + u : m < x;
  }) || null, h = kC({
    draggable: t,
    closest: g,
    inHomeList: Pn(t, r)
  });
  return pi({
    draggable: t,
    insideDestination: o,
    destination: r,
    viewport: i,
    last: n,
    displacedBy: l,
    index: h
  });
};
const HC = 4;
var UC = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: o,
  insideDestination: n,
  afterCritical: i
}) => {
  if (!o.isCombineEnabled)
    return null;
  const a = o.axis, s = Oo(o.axis, e.displaceBy), l = s.value, u = t[a.start], m = t[a.end], p = Ni(e, n).find((h) => {
    const b = h.descriptor.id, d = h.page.borderBox, O = d[a.size] / HC, E = Tr(b, i), y = pE({
      displaced: r.displaced,
      id: b
    });
    return E ? y ? m > d[a.start] + O && m < d[a.end] - O : u > d[a.start] - l + O && u < d[a.end] - l - O : y ? m > d[a.start] + l + O && m < d[a.end] + l - O : u > d[a.start] + O && u < d[a.end] - O;
  });
  return p ? {
    displacedBy: s,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: p.descriptor.id,
        droppableId: o.descriptor.id
      }
    }
  } : null;
}, fE = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: o,
  previousImpact: n,
  viewport: i,
  afterCritical: a
}) => {
  const s = dE(t.page.borderBox, e), l = WC({
    pageBorderBox: s,
    draggable: t,
    droppables: o
  });
  if (!l)
    return aC;
  const u = o[l], m = on(u.descriptor.id, r), c = GC(u, s);
  return UC({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: n,
    destination: u,
    insideDestination: m,
    afterCritical: a
  }) || zC({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: u,
    insideDestination: m,
    last: n.displaced,
    viewport: i,
    afterCritical: a
  });
}, Fl = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const qC = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const o = Yt(e), n = Yt(t);
  if (!o || o === n)
    return r;
  const i = r[o];
  if (!i.subject.withPlaceholder)
    return r;
  const a = RC(i);
  return Fl(r, a);
};
var YC = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: o,
  impact: n
}) => {
  const i = qC({
    previousImpact: o,
    impact: n,
    droppables: r
  }), a = Yt(n);
  if (!a)
    return i;
  const s = r[a];
  if (Pn(e, s) || s.subject.withPlaceholder)
    return i;
  const l = lE(s, e, t);
  return Fl(i, l);
}, Mn = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: o,
  impact: n,
  scrollJumpRequest: i
}) => {
  const a = o || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, u = qt(l, e.initial.client.selection), m = {
    offset: u,
    selection: l,
    borderBoxCenter: Tt(e.initial.client.borderBoxCenter, u)
  }, c = {
    selection: Tt(m.selection, a.scroll.current),
    borderBoxCenter: Tt(m.borderBoxCenter, a.scroll.current),
    offset: Tt(m.offset, a.scroll.diff.value)
  }, p = {
    client: m,
    page: c
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: p
    };
  const g = s.draggables[e.critical.draggable.id], h = n || fE({
    pageOffset: c.offset,
    draggable: g,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = YC({
    draggable: g,
    impact: h,
    previousImpact: e.impact,
    draggables: s.draggables,
    droppables: s.droppables
  });
  return {
    ...e,
    current: p,
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
function KC(e, t) {
  return e.map((r) => t[r]);
}
var mE = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: o,
  forceShouldAnimate: n
}) => {
  const i = e.displaced, a = KC(i.all, r), s = Qn({
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
}, gE = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: o,
  viewport: n,
  afterCritical: i
}) => {
  const a = Ci({
    impact: e,
    draggable: t,
    draggables: o,
    droppable: r,
    afterCritical: i
  });
  return Bl({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: n
  });
}, bE = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, $());
  const o = e.impact, n = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], u = Yt(o);
  u || (process.env.NODE_ENV !== "production" ? $(!1, "Must be over a destination in SNAP movement mode") : $());
  const m = s[u], c = mE({
    impact: o,
    viewport: n,
    destination: m,
    draggables: a
  }), p = gE({
    impact: c,
    draggable: l,
    droppable: m,
    draggables: a,
    viewport: n,
    afterCritical: e.afterCritical
  });
  return Mn({
    impact: c,
    clientSelection: p,
    state: e,
    dimensions: i,
    viewport: n
  });
}, XC = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), hE = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: o
}) => {
  const n = Oo(t.axis, e.displaceBy), i = on(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? $(!1, "Expected draggable to be inside home list") : $());
  const s = i.slice(a + 1), l = s.reduce((p, g) => (p[g.descriptor.id] = !0, p), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: n,
    effected: l
  };
  return {
    impact: {
      displaced: Qn({
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
        destination: XC(e.descriptor)
      }
    },
    afterCritical: u
  };
}, JC = (e, t) => ({
  draggables: e.draggables,
  droppables: Fl(e.droppables, t)
});
const Do = (e) => {
  process.env.NODE_ENV;
}, No = (e) => {
  process.env.NODE_ENV;
};
var ZC = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const o = li(e.client, t), n = ui(o, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: o
    },
    client: o,
    page: n
  };
}, QC = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? $(!1, "Expected Droppable to have a frame") : $()), t;
}, e_ = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const o = r.scroll.diff.value;
  return e.map((n) => {
    const i = n.descriptor.droppableId, a = t[i], l = QC(a).scroll.diff.value, u = Tt(o, l);
    return ZC({
      draggable: n,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, t_ = ({
  state: e,
  published: t
}) => {
  Do();
  const r = t.modified.map((x) => {
    const O = e.dimensions.droppables[x.droppableId];
    return Tl(O, x.scroll);
  }), o = {
    ...e.dimensions.droppables,
    ...Qv(r)
  }, n = eE(e_({
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
  }, s = Yt(e.impact), l = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], m = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: p
  } = hE({
    draggable: u,
    home: m,
    draggables: i,
    viewport: e.viewport
  }), g = l && l.isCombineEnabled ? e.impact : c, h = fE({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: g,
    viewport: e.viewport,
    afterCritical: p
  });
  No();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: h,
    onLiftImpact: c,
    dimensions: a,
    afterCritical: p,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? b : {
    ...b,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const zs = (e) => e.movementMode === "SNAP", Gi = (e, t, r) => {
  const o = JC(e.dimensions, t);
  return !zs(e) || r ? Mn({
    state: e,
    dimensions: o
  }) : bE({
    state: e,
    dimensions: o
  });
};
function ki(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Qp = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var r_ = (e = Qp, t) => {
  if (t.type === "FLUSH")
    return {
      ...Qp,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? $(!1, "INITIAL_PUBLISH must come after a IDLE phase") : $());
    const {
      critical: r,
      clientSelection: o,
      viewport: n,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], l = i.droppables[r.droppable.id], u = {
      selection: o,
      borderBoxCenter: s.client.borderBox.center,
      offset: St
    }, m = {
      client: u,
      page: {
        selection: Tt(u.selection, n.scroll.initial),
        borderBoxCenter: Tt(u.selection, n.scroll.initial),
        offset: Tt(u.selection, n.scroll.diff.value)
      }
    }, c = Oi(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: p,
      afterCritical: g
    } = hE({
      draggable: s,
      home: l,
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
      isWindowScrollAllowed: c,
      impact: p,
      afterCritical: g,
      onLiftImpact: p,
      viewport: n,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? $(!1, `Collection cannot start from phase ${e.phase}`) : $()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? $(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : $()), t_({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Hr(e) || (process.env.NODE_ENV !== "production" ? $(!1, `${t.type} not permitted in phase ${e.phase}`) : $());
    const {
      client: r
    } = t.payload;
    return Sr(r, e.current.client.selection) ? e : Mn({
      state: e,
      clientSelection: r,
      impact: zs(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return ki(e);
    Hr(e) || (process.env.NODE_ENV !== "production" ? $(!1, `${t.type} not permitted in phase ${e.phase}`) : $());
    const {
      id: r,
      newScroll: o
    } = t.payload, n = e.dimensions.droppables[r];
    if (!n)
      return e;
    const i = Tl(n, o);
    return Gi(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Hr(e) || (process.env.NODE_ENV !== "production" ? $(!1, `Attempting to move in an unsupported phase ${e.phase}`) : $());
    const {
      id: r,
      isEnabled: o
    } = t.payload, n = e.dimensions.droppables[r];
    n || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : $()), n.isEnabled === o && (process.env.NODE_ENV !== "production" ? $(!1, `Trying to set droppable isEnabled to ${String(o)}
      but it is already ${String(n.isEnabled)}`) : $());
    const i = {
      ...n,
      isEnabled: o
    };
    return Gi(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Hr(e) || (process.env.NODE_ENV !== "production" ? $(!1, `Attempting to move in an unsupported phase ${e.phase}`) : $());
    const {
      id: r,
      isCombineEnabled: o
    } = t.payload, n = e.dimensions.droppables[r];
    n || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : $()), n.isCombineEnabled === o && (process.env.NODE_ENV !== "production" ? $(!1, `Trying to set droppable isCombineEnabled to ${String(o)}
      but it is already ${String(n.isCombineEnabled)}`) : $());
    const i = {
      ...n,
      isCombineEnabled: o
    };
    return Gi(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Hr(e) || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot move by window in phase ${e.phase}`) : $()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? $(!1, "Window scrolling is currently not supported for fixed lists") : $());
    const r = t.payload.newScroll;
    if (Sr(e.viewport.scroll.current, r))
      return ki(e);
    const o = aE(e.viewport, r);
    return zs(e) ? bE({
      state: e,
      viewport: o
    }) : Mn({
      state: e,
      viewport: o
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Hr(e))
      return e;
    const r = t.payload.maxScroll;
    if (Sr(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? $(!1, `${t.type} received while not in DRAGGING phase`) : $());
    const r = BC({
      state: e,
      type: t.type
    });
    return r ? Mn({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? $(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : $()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot animate drop from phase ${e.phase}`) : $()), {
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
const n_ = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), o_ = (e) => ({
  type: "LIFT",
  payload: e
}), i_ = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), a_ = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), s_ = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), c_ = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), l_ = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), u_ = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), yE = (e) => ({
  type: "MOVE",
  payload: e
}), d_ = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), p_ = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), f_ = () => ({
  type: "MOVE_UP",
  payload: null
}), m_ = () => ({
  type: "MOVE_DOWN",
  payload: null
}), g_ = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), b_ = () => ({
  type: "MOVE_LEFT",
  payload: null
}), jl = () => ({
  type: "FLUSH",
  payload: null
}), h_ = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Wl = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), vE = (e) => ({
  type: "DROP",
  payload: e
}), y_ = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), EE = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function v_(e) {
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
  process.env.NODE_ENV !== "production" && ct(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${o}
  `);
}
function E_(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = on(e.droppable.id, t.draggables);
    v_(r);
  }
}
var x_ = (e) => ({
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
  } = n.payload, l = t();
  l.phase === "DROP_ANIMATING" && r(Wl({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? $(!1, "Unexpected phase to start a drag") : $()), r(jl()), r(n_({
    draggableId: i,
    movementMode: s
  }));
  const m = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: c,
    dimensions: p,
    viewport: g
  } = e.startPublishing(m);
  E_(c, p), r(i_({
    critical: c,
    dimensions: p,
    clientSelection: a,
    movementMode: s,
    viewport: g
  }));
}, w_ = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Gl = {
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
}, xE = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Rr = `${xE.outOfTheWay}s ${Gl.outOfTheWay}`, Ln = {
  fluid: `opacity ${Rr}`,
  snap: `transform ${Rr}, opacity ${Rr}`,
  drop: (e) => {
    const t = `${e}s ${Gl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Rr}`,
  placeholder: `height ${Rr}, width ${Rr}, margin ${Rr}`
}, ef = (e) => Sr(e, St) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Hs = {
  moveTo: ef,
  drop: (e, t) => {
    const r = ef(e);
    if (r)
      return t ? `${r} scale(${eo.scale.drop})` : r;
  }
}, {
  minDropTime: Us,
  maxDropTime: wE
} = xE, S_ = wE - Us, tf = 1500, O_ = 0.6;
var D_ = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const o = Jn(e, t);
  if (o <= 0)
    return Us;
  if (o >= tf)
    return wE;
  const n = o / tf, i = Us + S_ * n, a = r === "CANCEL" ? i * O_ : i;
  return Number(a.toFixed(2));
}, N_ = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: o,
  afterCritical: n
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = Yt(e), l = s ? a[s] : null, u = a[t.descriptor.droppableId], m = gE({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: n,
    droppable: l || u,
    viewport: o
  });
  return qt(m, t.client.borderBox.center);
}, C_ = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: o,
  viewport: n,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: mE({
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
    displaced: Zn
  },
  didDropInsideDroppable: !0
};
const __ = ({
  getState: e,
  dispatch: t
}) => (r) => (o) => {
  if (o.type !== "DROP") {
    r(o);
    return;
  }
  const n = e(), i = o.payload.reason;
  if (n.phase === "COLLECTING") {
    t(y_({
      reason: i
    }));
    return;
  }
  if (n.phase === "IDLE")
    return;
  n.phase === "DROP_PENDING" && n.isWaiting && (process.env.NODE_ENV !== "production" ? $(!1, "A DROP action occurred while DROP_PENDING and still waiting") : $()), n.phase === "DRAGGING" || n.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot drop in phase: ${n.phase}`) : $());
  const s = n.critical, l = n.dimensions, u = l.draggables[n.critical.draggable.id], {
    impact: m,
    didDropInsideDroppable: c
  } = C_({
    reason: i,
    lastImpact: n.impact,
    afterCritical: n.afterCritical,
    onLiftImpact: n.onLiftImpact,
    home: n.dimensions.droppables[n.critical.droppable.id],
    viewport: n.viewport,
    draggables: n.dimensions.draggables
  }), p = c ? Rl(m) : null, g = c ? Di(m) : null, h = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: h,
    reason: i,
    mode: n.movementMode,
    destination: p,
    combine: g
  }, d = N_({
    impact: m,
    draggable: u,
    dimensions: l,
    viewport: n.viewport,
    afterCritical: n.afterCritical
  }), x = {
    critical: n.critical,
    afterCritical: n.afterCritical,
    result: b,
    impact: m
  };
  if (!(!Sr(n.current.client.offset, d) || !!b.combine)) {
    t(Wl({
      completed: x
    }));
    return;
  }
  const E = D_({
    current: n.current.client.offset,
    destination: d,
    reason: i
  });
  t(h_({
    newHomeClientOffset: d,
    dropDuration: E,
    completed: x
  }));
};
var I_ = __, SE = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function P_(e) {
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
function $_({
  onWindowScroll: e
}) {
  function t() {
    e(SE());
  }
  const r = Kn(t), o = P_(r);
  let n = wr;
  function i() {
    return n !== wr;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot start scroll listener when already active") : $()), n = ar(window, [o]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot stop scroll listener when not active") : $()), r.cancel(), n(), n = wr;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const A_ = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", T_ = (e) => {
  const t = $_({
    onWindowScroll: (r) => {
      e.dispatch(d_({
        newScroll: r
      }));
    }
  });
  return (r) => (o) => {
    !t.isActive() && o.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && A_(o) && t.stop(), r(o);
  };
};
var R_ = T_, V_ = (e) => {
  let t = !1, r = !1;
  const o = setTimeout(() => {
    r = !0;
  }), n = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ct("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && ct(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(o);
  };
  return n.wasCalled = () => t, n;
}, M_ = () => {
  const e = [], t = (n) => {
    const i = e.findIndex((s) => s.timerId === n);
    i === -1 && (process.env.NODE_ENV !== "production" ? $(!1, "Could not find timer") : $());
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
const L_ = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, B_ = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, F_ = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, o = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && o;
}, Tn = (e, t) => {
  Do(), t(), No();
}, Io = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function zi(e, t, r, o) {
  if (!e) {
    r(o(t));
    return;
  }
  const n = V_(r);
  e(t, {
    announce: n
  }), n.wasCalled() || r(o(t));
}
var j_ = (e, t) => {
  const r = M_();
  let o = null;
  const n = (c, p) => {
    o && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : $()), Tn("onBeforeCapture", () => {
      const g = e().onBeforeCapture;
      g && g({
        draggableId: c,
        mode: p
      });
    });
  }, i = (c, p) => {
    o && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : $()), Tn("onBeforeDragStart", () => {
      const g = e().onBeforeDragStart;
      g && g(Io(c, p));
    });
  }, a = (c, p) => {
    o && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : $());
    const g = Io(c, p);
    o = {
      mode: p,
      lastCritical: c,
      lastLocation: g.source,
      lastCombine: null
    }, r.add(() => {
      Tn("onDragStart", () => zi(e().onDragStart, g, t, Wo.onDragStart));
    });
  }, s = (c, p) => {
    const g = Rl(p), h = Di(p);
    o || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot fire onDragMove when onDragStart has not been called") : $());
    const b = !F_(c, o.lastCritical);
    b && (o.lastCritical = c);
    const d = !L_(o.lastLocation, g);
    d && (o.lastLocation = g);
    const x = !B_(o.lastCombine, h);
    if (x && (o.lastCombine = h), !b && !d && !x)
      return;
    const O = {
      ...Io(c, o.mode),
      combine: h,
      destination: g
    };
    r.add(() => {
      Tn("onDragUpdate", () => zi(e().onDragUpdate, O, t, Wo.onDragUpdate));
    });
  }, l = () => {
    o || (process.env.NODE_ENV !== "production" ? $(!1, "Can only flush responders while dragging") : $()), r.flush();
  }, u = (c) => {
    o || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : $()), o = null, Tn("onDragEnd", () => zi(e().onDragEnd, c, t, Wo.onDragEnd));
  };
  return {
    beforeCapture: n,
    beforeStart: i,
    start: a,
    update: s,
    flush: l,
    drop: u,
    abort: () => {
      if (!o)
        return;
      const c = {
        ...Io(o.lastCritical, o.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(c);
    }
  };
}, W_ = (e, t) => {
  const r = j_(e, t);
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
const G_ = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const o = e.getState();
  o.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot finish a drop animating when no drop is occurring") : $()), e.dispatch(Wl({
    completed: o.completed
  }));
};
var k_ = G_;
const z_ = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(EE());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = ar(window, [a]);
    });
  };
};
var H_ = z_, U_ = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, q_ = (e) => {
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
const Y_ = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var K_ = (e) => (t) => (r) => (o) => {
  if (Y_(o)) {
    e.stop(), r(o);
    return;
  }
  if (o.type === "INITIAL_PUBLISH") {
    r(o);
    const n = t.getState();
    n.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? $(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : $()), e.start(n);
    return;
  }
  r(o), e.scroll(t.getState());
};
const X_ = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const o = e.getState();
  o.phase === "DROP_PENDING" && (o.isWaiting || e.dispatch(vE({
    reason: o.reason
  })));
};
var J_ = X_;
const Z_ = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Vv;
var Q_ = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: o,
  announce: n,
  autoScroller: i
}) => Rv(r_, Z_(FN(w_(r), U_(e), x_(e), I_, k_, H_, J_, K_(i), R_, q_(t), W_(o, n))));
const Hi = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function e1({
  registry: e,
  callbacks: t
}) {
  let r = Hi(), o = null;
  const n = () => {
    o || (t.collectionStarting(), o = requestAnimationFrame(() => {
      o = null, Do();
      const {
        additions: l,
        removals: u,
        modified: m
      } = r, c = Object.keys(l).map((h) => e.draggable.getById(h).getDimension(St)).sort((h, b) => h.descriptor.index - b.descriptor.index), p = Object.keys(m).map((h) => {
        const d = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
          scroll: d
        };
      }), g = {
        additions: c,
        removals: Object.keys(u),
        modified: p
      };
      r = Hi(), No(), t.publish(g);
    }));
  };
  return {
    add: (l) => {
      const u = l.descriptor.id;
      r.additions[u] = l, r.modified[l.descriptor.droppableId] = !0, r.removals[u] && delete r.removals[u], n();
    },
    remove: (l) => {
      const u = l.descriptor;
      r.removals[u.id] = !0, r.modified[u.droppableId] = !0, r.additions[u.id] && delete r.additions[u.id], n();
    },
    stop: () => {
      o && (cancelAnimationFrame(o), o = null, r = Hi());
    }
  };
}
var OE = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = qt({
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
}, DE = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot find document.documentElement") : $()), e;
}, NE = () => {
  const e = DE();
  return OE({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, t1 = () => {
  const e = SE(), t = NE(), r = e.y, o = e.x, n = DE(), i = n.clientWidth, a = n.clientHeight, s = o + i, l = r + a;
  return {
    frame: cr({
      top: r,
      left: o,
      right: s,
      bottom: l
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: St,
        displacement: St
      }
    }
  };
}, r1 = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Do();
  const o = t1(), n = o.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((m) => m.callbacks.getDimensionAndWatchScroll(n, t)), s = r.draggable.getAllByType(e.draggable.type).map((m) => m.getDimension(n)), l = {
    draggables: eE(s),
    droppables: Qv(a)
  };
  return No(), {
    dimensions: l,
    critical: e,
    viewport: o
  };
};
function rf(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ct(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var n1 = (e, t) => {
  let r = null;
  const o = e1({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), n = (p, g) => {
    e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot update is enabled flag of Droppable ${p} as it is not registered`) : $()), r && t.updateDroppableIsEnabled({
      id: p,
      isEnabled: g
    });
  }, i = (p, g) => {
    r && (e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot update isCombineEnabled flag of Droppable ${p} as it is not registered`) : $()), t.updateDroppableIsCombineEnabled({
      id: p,
      isCombineEnabled: g
    }));
  }, a = (p, g) => {
    r && (e.droppable.exists(p) || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot update the scroll on Droppable ${p} as it is not registered`) : $()), t.updateDroppableScroll({
      id: p,
      newScroll: g
    }));
  }, s = (p, g) => {
    r && e.droppable.getById(p).callbacks.scroll(g);
  }, l = () => {
    if (!r)
      return;
    o.stop();
    const p = r.critical.droppable;
    e.droppable.getAllByType(p.type).forEach((g) => g.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (p) => {
    r || (process.env.NODE_ENV !== "production" ? $(!1, "Should only be subscribed when a collection is occurring") : $());
    const g = r.critical.draggable;
    p.type === "ADDITION" && rf(e, g, p.value) && o.add(p.value), p.type === "REMOVAL" && rf(e, g, p.value) && o.remove(p.value);
  };
  return {
    updateDroppableIsEnabled: n,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (p) => {
      r && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot start capturing critical dimensions as there is already a collection") : $());
      const g = e.draggable.getById(p.draggableId), h = e.droppable.getById(g.descriptor.droppableId), b = {
        draggable: g.descriptor,
        droppable: h.descriptor
      }, d = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: d
      }, r1({
        critical: b,
        registry: e,
        scrollOptions: p.scrollOptions
      });
    },
    stopPublishing: l
  };
}, CE = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", o1 = (e) => {
  window.scrollBy(e.x, e.y);
};
const i1 = wt((e) => Oi(e).filter((t) => !(!t.isEnabled || !t.frame))), a1 = (e, t) => i1(t).find((o) => (o.frame || (process.env.NODE_ENV !== "production" ? $(!1, "Invalid result") : $()), uE(o.frame.pageMarginBox)(e))) || null;
var s1 = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const n = r[t];
    return n.frame ? n : null;
  }
  return a1(e, r);
};
const to = {
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
var c1 = (e, t, r = () => to) => {
  const o = r(), n = e[t.size] * o.startFromPercentage, i = e[t.size] * o.maxScrollAtPercentage;
  return {
    startScrollingFrom: n,
    maxScrollValueAt: i
  };
}, _E = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const o = t - e;
  return o === 0 ? (process.env.NODE_ENV !== "production" && ct(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / o;
}, kl = 1, l1 = (e, t, r = () => to) => {
  const o = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return o.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return kl;
  const i = 1 - _E({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = o.maxPixelScroll * o.ease(i);
  return Math.ceil(a);
}, u1 = (e, t, r) => {
  const o = r(), n = o.durationDampening.accelerateAt, i = o.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < n)
    return kl;
  const m = _E({
    startOfRange: n,
    endOfRange: s,
    current: u
  }), c = e * o.ease(m);
  return Math.ceil(c);
}, nf = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: n
}) => {
  const i = l1(e, t, n);
  return i === 0 ? 0 : o ? Math.max(u1(i, r, n), kl) : i;
}, of = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = c1(e, o, i);
  return t[o.end] < t[o.start] ? nf({
    distanceToEdge: t[o.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }) : -1 * nf({
    distanceToEdge: t[o.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
}, d1 = ({
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
const p1 = Zv((e) => e === 0 ? 0 : e);
var IE = ({
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
  }, s = of({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Vl,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }), l = of({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: nE,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }), u = p1({
    x: l,
    y: s
  });
  if (Sr(u, St))
    return null;
  const m = d1({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return m ? Sr(m, St) ? null : m : null;
};
const f1 = Zv((e) => e === 0 ? 0 : e > 0 ? 1 : -1), zl = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: o
  }) => {
    const n = Tt(t, o), i = {
      x: e(n.x, r.x),
      y: e(n.y, r.y)
    };
    return Sr(i, St) ? null : i;
  };
})(), PE = ({
  max: e,
  current: t,
  change: r
}) => {
  const o = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, n = f1(r), i = zl({
    max: o,
    current: t,
    change: n
  });
  return !i || n.x !== 0 && i.x === 0 || n.y !== 0 && i.y === 0;
}, Hl = (e, t) => PE({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), m1 = (e, t) => {
  if (!Hl(e, t))
    return null;
  const r = e.scroll.max, o = e.scroll.current;
  return zl({
    current: o,
    max: r,
    change: t
  });
}, Ul = (e, t) => {
  const r = e.frame;
  return r ? PE({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, g1 = (e, t) => {
  const r = e.frame;
  return !r || !Ul(e, t) ? null : zl({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var b1 = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = IE({
    dragStartTime: o,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  return a && Hl(e, a) ? a : null;
}, h1 = ({
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
  const s = IE({
    dragStartTime: o,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  return s && Ul(e, s) ? s : null;
}, af = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: o,
  scrollDroppable: n,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, p = b1({
      dragStartTime: t,
      viewport: c,
      subject: l,
      center: a,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (p) {
      o(p);
      return;
    }
  }
  const u = s1({
    center: a,
    destination: Yt(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const m = h1({
    dragStartTime: t,
    droppable: u,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  m && n(u.descriptor.id, m);
}, y1 = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => to
}) => {
  const o = Kn(e), n = Kn(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot fluid scroll if not dragging") : $());
    const {
      shouldUseTimeDampening: m,
      dragStartTime: c
    } = i;
    af({
      state: u,
      scrollWindow: o,
      scrollDroppable: n,
      dragStartTime: c,
      shouldUseTimeDampening: m,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (u) => {
      Do(), i && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot start auto scrolling when already started") : $());
      const m = Date.now();
      let c = !1;
      const p = () => {
        c = !0;
      };
      af({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: p,
        scrollDroppable: p,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: m,
        shouldUseTimeDampening: c
      }, No(), c && a(u);
    },
    stop: () => {
      i && (o.cancel(), n.cancel(), i = null);
    },
    scroll: a
  };
}, v1 = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const o = (s, l) => {
    const u = Tt(s.current.client.selection, l);
    e({
      client: u
    });
  }, n = (s, l) => {
    if (!Ul(s, l))
      return l;
    const u = g1(s, l);
    if (!u)
      return t(s.descriptor.id, l), null;
    const m = qt(l, u);
    return t(s.descriptor.id, m), qt(l, m);
  }, i = (s, l, u) => {
    if (!s || !Hl(l, u))
      return u;
    const m = m1(l, u);
    if (!m)
      return r(u), null;
    const c = qt(u, m);
    return r(c), qt(u, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const u = Yt(s.impact);
    u || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot perform a jump scroll when there is no destination") : $());
    const m = n(s.dimensions.droppables[u], l);
    if (!m)
      return;
    const c = s.viewport, p = i(s.isWindowScrollAllowed, c, m);
    p && o(s, p);
  };
}, E1 = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: o
}) => {
  const n = y1({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: o
  }), i = v1({
    move: r,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (l) => {
      if (!(o().disabled || l.phase !== "DRAGGING")) {
        if (l.movementMode === "FLUID") {
          n.scroll(l);
          return;
        }
        l.scrollJumpRequest && i(l);
      }
    },
    start: n.start,
    stop: n.stop
  };
};
const Nn = "data-rfd", Cn = (() => {
  const e = `${Nn}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), qs = (() => {
  const e = `${Nn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), x1 = (() => {
  const e = `${Nn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), sf = {
  contextId: `${Nn}-scroll-container-context-id`
}, w1 = (e) => (t) => `[${t}="${e}"]`, Rn = (e, t) => e.map((r) => {
  const o = r.styles[t];
  return o ? `${r.selector} { ${o} }` : "";
}).join(" "), S1 = "pointer-events: none;";
var O1 = (e) => {
  const t = w1(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Cn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: S1,
        dropAnimating: s
      }
    };
  })(), o = (() => {
    const s = `
      transition: ${Ln.outOfTheWay};
    `;
    return {
      selector: t(qs.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), n = {
    selector: t(x1.contextId),
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
    always: Rn(a, "always"),
    resting: Rn(a, "resting"),
    dragging: Rn(a, "dragging"),
    dropAnimating: Rn(a, "dropAnimating"),
    userCancel: Rn(a, "userCancel")
  };
};
const D1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var Kt = D1;
const Ui = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot find the head to append a style to") : $()), e;
}, cf = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function N1(e, t) {
  const r = ve(() => O1(e), [e]), o = L(null), n = L(null), i = oe(wt((c) => {
    const p = n.current;
    p || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot set dynamic style element if it is not set") : $()), p.textContent = c;
  }), []), a = oe((c) => {
    const p = o.current;
    p || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot set dynamic style element if it is not set") : $()), p.textContent = c;
  }, []);
  Kt(() => {
    !o.current && !n.current || (process.env.NODE_ENV !== "production" ? $(!1, "style elements already mounted") : $());
    const c = cf(t), p = cf(t);
    return o.current = c, n.current = p, c.setAttribute(`${Nn}-always`, e), p.setAttribute(`${Nn}-dynamic`, e), Ui().appendChild(c), Ui().appendChild(p), a(r.always), i(r.resting), () => {
      const g = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot unmount ref as it is not set") : $()), Ui().removeChild(b), h.current = null;
      };
      g(o), g(n);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = oe(() => i(r.dragging), [i, r.dragging]), l = oe((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = oe(() => {
    n.current && i(r.resting);
  }, [i, r.resting]);
  return ve(() => ({
    dragging: s,
    dropping: l,
    resting: u
  }), [s, l, u]);
}
function $E(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var AE = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Co(e) {
  return e instanceof AE(e).HTMLElement;
}
function TE(e, t) {
  const r = `[${Cn.contextId}="${e}"]`, o = $E(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && ct(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Cn.draggableId) === t);
  return n ? Co(n) ? n : (process.env.NODE_ENV !== "production" && ct("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ct(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function C1(e) {
  const t = L({}), r = L(null), o = L(null), n = L(!1), i = oe(function(p, g) {
    const h = {
      id: p,
      focus: g
    };
    return t.current[p] = h, function() {
      const d = t.current;
      d[p] !== h && delete d[p];
    };
  }, []), a = oe(function(p) {
    const g = TE(e, p);
    g && g !== document.activeElement && g.focus();
  }, [e]), s = oe(function(p, g) {
    r.current === p && (r.current = g);
  }, []), l = oe(function() {
    o.current || n.current && (o.current = requestAnimationFrame(() => {
      o.current = null;
      const p = r.current;
      p && a(p);
    }));
  }, [a]), u = oe(function(p) {
    r.current = null;
    const g = document.activeElement;
    g && g.getAttribute(Cn.draggableId) === p && (r.current = p);
  }, []);
  return Kt(() => (n.current = !0, function() {
    n.current = !1;
    const p = o.current;
    p && cancelAnimationFrame(p);
  }), []), ve(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, u, l, s]);
}
function _1() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(c) {
    return t.push(c), function() {
      const g = t.indexOf(c);
      g !== -1 && t.splice(g, 1);
    };
  }
  function o(c) {
    t.length && t.forEach((p) => p(c));
  }
  function n(c) {
    return e.draggables[c] || null;
  }
  function i(c) {
    const p = n(c);
    return p || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot find draggable entry with id [${c}]`) : $()), p;
  }
  const a = {
    register: (c) => {
      e.draggables[c.descriptor.id] = c, o({
        type: "ADDITION",
        value: c
      });
    },
    update: (c, p) => {
      const g = e.draggables[p.descriptor.id];
      g && g.uniqueId === c.uniqueId && (delete e.draggables[p.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: (c) => {
      const p = c.descriptor.id, g = n(p);
      g && c.uniqueId === g.uniqueId && (delete e.draggables[p], e.droppables[c.descriptor.droppableId] && o({
        type: "REMOVAL",
        value: c
      }));
    },
    getById: i,
    findById: n,
    exists: (c) => !!n(c),
    getAllByType: (c) => Object.values(e.draggables).filter((p) => p.descriptor.type === c)
  };
  function s(c) {
    return e.droppables[c] || null;
  }
  function l(c) {
    const p = s(c);
    return p || (process.env.NODE_ENV !== "production" ? $(!1, `Cannot find droppable entry with id [${c}]`) : $()), p;
  }
  const u = {
    register: (c) => {
      e.droppables[c.descriptor.id] = c;
    },
    unregister: (c) => {
      const p = s(c.descriptor.id);
      p && c.uniqueId === p.uniqueId && delete e.droppables[c.descriptor.id];
    },
    getById: l,
    findById: s,
    exists: (c) => !!s(c),
    getAllByType: (c) => Object.values(e.droppables).filter((p) => p.descriptor.type === c)
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
function I1() {
  const e = ve(_1, []);
  return re(() => function() {
    _.version.startsWith("16") || _.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var ql = _.createContext(null), ro = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot find document.body") : $()), e;
};
const P1 = {
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
var $1 = P1;
const A1 = (e) => `rfd-announcement-${e}`;
function T1(e) {
  const t = ve(() => A1(e), [e]), r = L(null);
  return re(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), xr(i.style, $1), ro().appendChild(i), function() {
      setTimeout(function() {
        const l = ro();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), oe((n) => {
    const i = r.current;
    if (i) {
      i.textContent = n;
      return;
    }
    process.env.NODE_ENV !== "production" && ct(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${n}"
    `);
  }, []);
}
let R1 = 0;
const RE = {
  separator: "::"
};
function V1(e, t = RE) {
  return ve(() => `${e}${t.separator}${R1++}`, [t.separator, e]);
}
function M1(e, t = RE) {
  const r = _.useId();
  return ve(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Yl = "useId" in _ ? M1 : V1;
function L1({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function B1({
  contextId: e,
  text: t
}) {
  const r = Yl("hidden-text", {
    separator: "-"
  }), o = ve(() => L1({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return re(function() {
    const i = document.createElement("div");
    return i.id = o, i.textContent = t, i.style.display = "none", ro().appendChild(i), function() {
      const s = ro();
      s.contains(i) && s.removeChild(i);
    };
  }, [o, t]), o;
}
var _i = _.createContext(null), F1 = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const j1 = /(\d+)\.(\d+)\.(\d+)/, lf = (e) => {
  const t = j1.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? $(!1, `Unable to parse React version ${e}`) : $());
  const r = Number(t[1]), o = Number(t[2]), n = Number(t[3]);
  return {
    major: r,
    minor: o,
    patch: n,
    raw: e
  };
}, W1 = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var G1 = (e, t) => {
  const r = lf(e), o = lf(t);
  W1(r, o) || process.env.NODE_ENV !== "production" && ct(`
    React version: [${o.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const qi = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var k1 = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ct(`
      No <!doctype html> found.

      ${qi}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ct(`
      Unexpected <!doctype> found: (${t.name})

      ${qi}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ct(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${qi}
    `);
};
function Kl(e) {
  process.env.NODE_ENV !== "production" && e();
}
function _o(e, t) {
  Kl(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        Gs(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function z1() {
  _o(() => {
    G1(F1.react, _.version), k1(document);
  }, []);
}
function Xl(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function H1() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function o(a) {
    e && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot claim lock as it is already claimed") : $());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function n() {
    e || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot release lock when there is no lock") : $()), e = null;
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
function no(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const U1 = 9, q1 = 13, Jl = 27, VE = 32, Y1 = 33, K1 = 34, X1 = 35, J1 = 36, Z1 = 37, Q1 = 38, eI = 39, tI = 40, rI = {
  [q1]: !0,
  [U1]: !0
};
var ME = (e) => {
  rI[e.keyCode] && e.preventDefault();
};
const nI = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((o) => `on${o}` in document) || e;
})();
var Ii = nI;
const LE = 0, uf = 5;
function oI(e, t) {
  return Math.abs(t.x - e.x) >= uf || Math.abs(t.y - e.y) >= uf;
}
const df = {
  type: "IDLE"
};
function iI({
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
      if (i !== LE)
        return;
      const l = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        n.preventDefault(), u.actions.move(l);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot be IDLE") : $());
      const m = u.point;
      if (!oI(m, l))
        return;
      n.preventDefault();
      const c = u.actions.fluidLift(l);
      o({
        type: "DRAGGING",
        actions: c
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
      if (n.keyCode === Jl) {
        n.preventDefault(), e();
        return;
      }
      ME(n);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? $(!1, "Unexpected phase") : $()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      n.preventDefault();
    }
  }, {
    eventName: Ii,
    fn: e
  }];
}
function aI(e) {
  const t = L(df), r = L(wr), o = ve(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== LE || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
        return;
      const p = e.findClosestDraggableId(c);
      if (!p)
        return;
      const g = e.tryGetLock(p, a, {
        sourceEvent: c
      });
      if (!g)
        return;
      c.preventDefault();
      const h = {
        x: c.clientX,
        y: c.clientY
      };
      r.current(), u(g, h);
    }
  }), [e]), n = ve(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (m) => {
      if (m.defaultPrevented)
        return;
      const c = e.findClosestDraggableId(m);
      if (!c)
        return;
      const p = e.findOptionsForDraggable(c);
      p && (p.shouldRespectForcePress || e.canGetLock(c) && m.preventDefault());
    }
  }), [e]), i = oe(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = ar(window, [n, o], c);
  }, [n, o]), a = oe(() => {
    t.current.type !== "IDLE" && (t.current = df, r.current(), i());
  }, [i]), s = oe(() => {
    const m = t.current;
    a(), m.type === "DRAGGING" && m.actions.cancel({
      shouldBlockNextClick: !0
    }), m.type === "PENDING" && m.actions.abort();
  }, [a]), l = oe(function() {
    const c = {
      capture: !0,
      passive: !1
    }, p = iI({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (g) => {
        t.current = g;
      }
    });
    r.current = ar(window, p, c);
  }, [s, a]), u = oe(function(c, p) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? $(!1, "Expected to move from IDLE to PENDING drag") : $()), t.current = {
      type: "PENDING",
      point: p,
      actions: c
    }, l();
  }, [l]);
  Kt(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function sI() {
}
const cI = {
  [K1]: !0,
  [Y1]: !0,
  [J1]: !0,
  [X1]: !0
};
function lI(e, t) {
  function r() {
    t(), e.cancel();
  }
  function o() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (n) => {
      if (n.keyCode === Jl) {
        n.preventDefault(), r();
        return;
      }
      if (n.keyCode === VE) {
        n.preventDefault(), o();
        return;
      }
      if (n.keyCode === tI) {
        n.preventDefault(), e.moveDown();
        return;
      }
      if (n.keyCode === Q1) {
        n.preventDefault(), e.moveUp();
        return;
      }
      if (n.keyCode === eI) {
        n.preventDefault(), e.moveRight();
        return;
      }
      if (n.keyCode === Z1) {
        n.preventDefault(), e.moveLeft();
        return;
      }
      if (cI[n.keyCode]) {
        n.preventDefault();
        return;
      }
      ME(n);
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
    eventName: Ii,
    fn: r
  }];
}
function uI(e) {
  const t = L(sI), r = ve(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== VE)
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
      let l = !0;
      const u = s.snapLift();
      t.current();
      function m() {
        l || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot stop capturing a keyboard drag when not capturing") : $()), l = !1, t.current(), o();
      }
      t.current = ar(window, lI(u, m), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), o = oe(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = ar(window, [r], i);
  }, [r]);
  Kt(function() {
    return o(), function() {
      t.current();
    };
  }, [o]);
}
const Yi = {
  type: "IDLE"
}, dI = 120, pI = 0.15;
function fI({
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
      r.keyCode === Jl && r.preventDefault(), e();
    }
  }, {
    eventName: Ii,
    fn: e
  }];
}
function mI({
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
      n.type === "IDLE" && (process.env.NODE_ENV, $());
      const i = o.touches[0];
      if (!i || !(i.force >= pI))
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
    eventName: Ii,
    fn: e
  }];
}
function gI(e) {
  const t = L(Yi), r = L(wr), o = oe(function() {
    return t.current;
  }, []), n = oe(function(g) {
    t.current = g;
  }, []), i = ve(() => ({
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
      const d = g.touches[0], {
        clientX: x,
        clientY: O
      } = d, E = {
        x,
        y: O
      };
      r.current(), c(b, E);
    }
  }), [e]), a = oe(function() {
    const g = {
      capture: !0,
      passive: !1
    };
    r.current = ar(window, [i], g);
  }, [i]), s = oe(() => {
    const p = t.current;
    p.type !== "IDLE" && (p.type === "PENDING" && clearTimeout(p.longPressTimerId), n(Yi), r.current(), a());
  }, [a, n]), l = oe(() => {
    const p = t.current;
    s(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [s]), u = oe(function() {
    const g = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: l,
      completed: s,
      getPhase: o
    }, b = ar(window, mI(h), g), d = ar(window, fI(h), g);
    r.current = function() {
      b(), d();
    };
  }, [l, o, s]), m = oe(function() {
    const g = o();
    g.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? $(!1, `Cannot start dragging from phase ${g.type}`) : $());
    const h = g.actions.fluidLift(g.point);
    n({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [o, n]), c = oe(function(g, h) {
    o().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? $(!1, "Expected to move from IDLE to PENDING drag") : $());
    const b = setTimeout(m, dI);
    n({
      type: "PENDING",
      point: h,
      actions: g,
      longPressTimerId: b
    }), u();
  }, [u, o, n, m]);
  Kt(function() {
    return a(), function() {
      r.current();
      const h = o();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), n(Yi));
    };
  }, [o, a, n]), Kt(function() {
    return ar(window, [{
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
function bI(e) {
  Kl(() => {
    const t = Xl(e);
    _o(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot change the amount of sensor hooks after mounting") : $(!1));
    });
  });
}
const hI = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function BE(e, t) {
  if (t == null)
    return !1;
  if (hI.includes(t.tagName.toLowerCase()))
    return !0;
  const o = t.getAttribute("contenteditable");
  return o === "true" || o === "" ? !0 : t === e ? !1 : BE(e, t.parentElement);
}
function yI(e, t) {
  const r = t.target;
  return Co(r) ? BE(e, r) : !1;
}
var vI = (e) => cr(e.getBoundingClientRect()).center;
function EI(e) {
  return e instanceof AE(e).Element;
}
const xI = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((o) => o in Element.prototype) || e;
})();
function FE(e, t) {
  return e == null ? null : e[xI](t) ? e : FE(e.parentElement, t);
}
function wI(e, t) {
  return e.closest ? e.closest(t) : FE(e, t);
}
function SI(e) {
  return `[${Cn.contextId}="${e}"]`;
}
function OI(e, t) {
  const r = t.target;
  if (!EI(r))
    return process.env.NODE_ENV !== "production" && ct("event.target must be a Element"), null;
  const o = SI(e), n = wI(r, o);
  return n ? Co(n) ? n : (process.env.NODE_ENV !== "production" && ct("drag handle must be a HTMLElement"), null) : null;
}
function DI(e, t) {
  const r = OI(e, t);
  return r ? r.getAttribute(Cn.draggableId) : null;
}
function NI(e, t) {
  const r = `[${qs.contextId}="${e}"]`, n = $E(document, r).find((i) => i.getAttribute(qs.id) === t);
  return n ? Co(n) ? n : (process.env.NODE_ENV !== "production" && ct("Draggable element is not a HTMLElement"), null) : null;
}
function CI(e) {
  e.preventDefault();
}
function Po({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: o
}) {
  return r() ? e !== t ? (o && process.env.NODE_ENV !== "production" && ct(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (o && process.env.NODE_ENV !== "production" && ct(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function jE({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: o
}) {
  if (e.isClaimed())
    return !1;
  const n = r.draggable.findById(o);
  return n ? !(!n.options.isEnabled || !CE(t.getState(), o)) : (process.env.NODE_ENV !== "production" && ct(`Unable to find draggable with id: ${o}`), !1);
}
function _I({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: o,
  draggableId: n,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!jE({
    lockAPI: e,
    store: r,
    registry: o,
    draggableId: n
  }))
    return null;
  const l = o.draggable.getById(n), u = NI(t, l.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && ct(`Unable to find draggable element with id: ${n}`), null;
  if (a && !l.options.canDragInteractiveElements && yI(u, a))
    return null;
  const m = e.claim(i || wr);
  let c = "PRE_DRAG";
  function p() {
    return l.options.shouldRespectForcePress;
  }
  function g() {
    return e.isActive(m);
  }
  function h(f, v) {
    Po({
      expected: f,
      phase: c,
      isLockActive: g,
      shouldWarn: !0
    }) && r.dispatch(v());
  }
  const b = h.bind(null, "DRAGGING");
  function d(f) {
    function v() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (v(), process.env.NODE_ENV !== "production" ? $(!1, `Cannot lift in phase ${c}`) : $()), r.dispatch(o_(f.liftActionArgs)), c = "DRAGGING";
    function D(C, R = {
      shouldBlockNextClick: !1
    }) {
      if (f.cleanup(), R.shouldBlockNextClick) {
        const P = ar(window, [{
          eventName: "click",
          fn: CI,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(P);
      }
      v(), r.dispatch(vE({
        reason: C
      }));
    }
    return {
      isActive: () => Po({
        expected: "DRAGGING",
        phase: c,
        isLockActive: g,
        shouldWarn: !1
      }),
      shouldRespectForcePress: p,
      drop: (C) => D("DROP", C),
      cancel: (C) => D("CANCEL", C),
      ...f.actions
    };
  }
  function x(f) {
    const v = Kn((C) => {
      b(() => yE({
        client: C
      }));
    });
    return {
      ...d({
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
  function O() {
    const f = {
      moveUp: () => b(f_),
      moveRight: () => b(g_),
      moveDown: () => b(m_),
      moveLeft: () => b(b_)
    };
    return d({
      liftActionArgs: {
        id: n,
        clientSelection: vI(u),
        movementMode: "SNAP"
      },
      cleanup: wr,
      actions: f
    });
  }
  function E() {
    Po({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: g,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Po({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: g,
      shouldWarn: !1
    }),
    shouldRespectForcePress: p,
    fluidLift: x,
    snapLift: O,
    abort: E
  };
}
const II = [aI, uI, gI];
function PI({
  contextId: e,
  store: t,
  registry: r,
  customSensors: o,
  enableDefaultSensors: n
}) {
  const i = [...n ? II : [], ...o || []], a = Ee(() => H1())[0], s = oe(function(d, x) {
    no(d) && !no(x) && a.tryAbandon();
  }, [a]);
  Kt(function() {
    let d = t.getState();
    return t.subscribe(() => {
      const O = t.getState();
      s(d, O), d = O;
    });
  }, [a, t, s]), Kt(() => a.tryAbandon, [a.tryAbandon]);
  const l = oe((b) => jE({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = oe((b, d, x) => _I({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: d || null,
    sourceEvent: x && x.sourceEvent ? x.sourceEvent : null
  }), [e, a, r, t]), m = oe((b) => DI(e, b), [e]), c = oe((b) => {
    const d = r.draggable.findById(b);
    return d ? d.options : null;
  }, [r.draggable]), p = oe(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(jl()));
  }, [a, t]), g = oe(() => a.isClaimed(), [a]), h = ve(() => ({
    canGetLock: l,
    tryGetLock: u,
    findClosestDraggableId: m,
    findOptionsForDraggable: c,
    tryReleaseLock: p,
    isLockClaimed: g
  }), [l, u, m, c, p, g]);
  bI(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const $I = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    _.version.startsWith("16") || _.version.startsWith("17") ? r() : ur(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), AI = (e) => ({
  ...to,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...to.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Vn(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? $(!1, "Could not find store from lazy ref") : $()), e.current;
}
function TI(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: o,
    nonce: n,
    dragHandleUsageInstructions: i
  } = e, a = L(null);
  z1();
  const s = Xl(e), l = oe(() => $I(s.current), [s]), u = oe(() => AI(s.current), [s]), m = T1(t), c = B1({
    contextId: t,
    text: i
  }), p = N1(t, n), g = oe((P) => {
    Vn(a).dispatch(P);
  }, []), h = ve(() => Ep({
    publishWhileDragging: a_,
    updateDroppableScroll: c_,
    updateDroppableIsEnabled: l_,
    updateDroppableIsCombineEnabled: u_,
    collectionStarting: s_
  }, g), [g]), b = I1(), d = ve(() => n1(b, h), [b, h]), x = ve(() => E1({
    scrollWindow: o1,
    scrollDroppable: d.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Ep({
      move: yE
    }, g)
  }), [d.scrollDroppable, g, u]), O = C1(t), E = ve(() => Q_({
    announce: m,
    autoScroller: x,
    dimensionMarshal: d,
    focusMarshal: O,
    getResponders: l,
    styleMarshal: p
  }), [m, x, d, O, l, p]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && ct("unexpected store change"), a.current = E;
  const y = oe(() => {
    const P = Vn(a);
    P.getState().phase !== "IDLE" && P.dispatch(jl());
  }, []), f = oe(() => {
    const P = Vn(a).getState();
    return P.phase === "DROP_ANIMATING" ? !0 : P.phase === "IDLE" ? !1 : P.isDragging;
  }, []), v = ve(() => ({
    isDragging: f,
    tryAbort: y
  }), [f, y]);
  r(v);
  const D = oe((P) => CE(Vn(a).getState(), P), []), C = oe(() => Hr(Vn(a).getState()), []), R = ve(() => ({
    marshal: d,
    focus: O,
    contextId: t,
    canLift: D,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: c,
    registry: b
  }), [t, d, c, O, D, C, b]);
  return PI({
    contextId: t,
    store: E,
    registry: b,
    customSensors: o || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), re(() => y, [y]), _.createElement(_i.Provider, {
    value: R
  }, _.createElement(P0, {
    context: ql,
    store: E
  }, e.children));
}
let RI = 0;
function VI() {
  return ve(() => `${RI++}`, []);
}
function MI() {
  return _.useId();
}
var LI = "useId" in _ ? MI : VI;
function BI(e) {
  const t = LI(), r = e.dragHandleUsageInstructions || Wo.dragHandleUsageInstructions;
  return _.createElement(U0, null, (o) => _.createElement(TI, {
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
const pf = {
  dragging: 5e3,
  dropAnimating: 4500
}, FI = (e, t) => t ? Ln.drop(t.duration) : e ? Ln.snap : Ln.fluid, jI = (e, t) => {
  if (e)
    return t ? eo.opacity.drop : eo.opacity.combining;
}, WI = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function GI(e) {
  const r = e.dimension.client, {
    offset: o,
    combineWith: n,
    dropping: i
  } = e, a = !!n, s = WI(e), l = !!i, u = l ? Hs.drop(o, a) : Hs.moveTo(o);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: FI(s, i),
    transform: u,
    opacity: jI(a, l),
    zIndex: l ? pf.dropAnimating : pf.dragging,
    pointerEvents: "none"
  };
}
function kI(e) {
  return {
    transform: Hs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function zI(e) {
  return e.type === "DRAGGING" ? GI(e) : kI(e);
}
function HI(e, t, r = St) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = qv(n, o), a = ui(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function UI(e) {
  const t = Yl("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = ve(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = oe((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot get dimension when no ref is set") : $()), HI(r, h, g);
  }, [r, n]), m = ve(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  Kt(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), Kt(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Zl = _.createContext(null);
function WE(e) {
  e && Co(e) || (process.env.NODE_ENV !== "production" ? $(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : $());
}
function qI(e, t, r) {
  _o(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? $(!1, "Draggable requires a draggableId") : $(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? $(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : $(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? $(!1, `${o(n)} requires an integer index prop`) : $(!1)), e.mapped.type !== "DRAGGING" && (WE(r()), e.isEnabled && (TE(t, n) || (process.env.NODE_ENV !== "production" ? $(!1, `${o(n)} Unable to find drag handle`) : $(!1))));
  });
}
function YI(e) {
  Kl(() => {
    const t = L(e);
    _o(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? $(!1, "Draggable isClone prop value changed during component life") : $(!1));
    }, [e]);
  });
}
function fi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? $(!1, "Could not find required context") : $()), t;
}
function KI(e) {
  e.preventDefault();
}
const XI = (e) => {
  const t = L(null), r = oe((v = null) => {
    t.current = v;
  }, []), o = oe(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = fi(_i), {
    type: s,
    droppableId: l
  } = fi(Zl), u = ve(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (qI(e, n, o), YI(b), !b) {
    const v = ve(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    UI(v);
  }
  const O = ve(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: KI
  } : null, [n, i, c, p]), E = oe((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = ve(() => {
    const v = zI(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = ve(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var JI = XI, GE = (e, t) => e === t, kE = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const ZI = (e) => e.combine ? e.combine.draggableId : null, QI = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function eP() {
  const e = wt((n, i) => ({
    x: n,
    y: i
  })), t = wt((n, i, a = null, s = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: n,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = wt((n, i, a, s, l = null, u = null, m = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: l,
      combineWith: u,
      mode: i,
      offset: n,
      dimension: a,
      forceShouldAnimate: m,
      snapshot: t(i, s, l, u, null)
    }
  }));
  return (n, i) => {
    if (no(n)) {
      if (n.critical.draggable.id !== i.draggableId)
        return null;
      const a = n.current.client.offset, s = n.dimensions.draggables[i.draggableId], l = Yt(n.impact), u = QI(n.impact), m = n.forceShouldAnimate;
      return r(e(a.x, a.y), n.movementMode, s, i.isClone, l, u, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const a = n.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = n.dimensions.draggables[i.draggableId], u = a.result, m = u.mode, c = kE(u), p = ZI(u), h = {
        duration: n.dropDuration,
        curve: Gl.drop,
        moveTo: n.newHomeClientOffset,
        opacity: p ? eo.opacity.drop : null,
        scale: p ? eo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: l,
          dropping: h,
          draggingOver: c,
          combineWith: p,
          mode: m,
          forceShouldAnimate: null,
          snapshot: t(m, s, c, p, h)
        }
      };
    }
    return null;
  };
}
function zE(e = null) {
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
const tP = {
  mapped: {
    type: "SECONDARY",
    offset: St,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: zE(null)
  }
};
function rP() {
  const e = wt((a, s) => ({
    x: a,
    y: s
  })), t = wt(zE), r = wt((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), o = (a) => a ? r(St, a, !0) : null, n = (a, s, l, u) => {
    const m = l.displaced.visible[a], c = !!(u.inVirtualList && u.effected[a]), p = Di(l), g = p && p.draggableId === a ? s : null;
    if (!m) {
      if (!c)
        return o(g);
      if (l.displaced.invisible[a])
        return null;
      const d = In(u.displacedBy.point), x = e(d.x, d.y);
      return r(x, g, !0);
    }
    if (c)
      return o(g);
    const h = l.displacedBy.point, b = e(h.x, h.y);
    return r(b, g, m.shouldAnimate);
  };
  return (a, s) => {
    if (no(a))
      return a.critical.draggable.id === s.draggableId ? null : n(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : n(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const nP = () => {
  const e = eP(), t = rP();
  return (o, n) => e(o, n) || t(o, n) || tP;
}, oP = {
  dropAnimationFinished: EE
}, iP = Hv(nP, oP, null, {
  context: ql,
  areStatePropsEqual: GE
})(JI);
var aP = iP;
function HE(e) {
  return fi(Zl).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(aP, e);
}
function sP(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, o = !!e.shouldRespectForcePress;
  return _.createElement(HE, xr({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: o
  }));
}
const Ql = (e) => (t) => e === t, cP = Ql("scroll"), lP = Ql("auto"), uP = Ql("visible"), ff = (e, t) => t(e.overflowX) || t(e.overflowY), dP = (e, t) => t(e.overflowX) && t(e.overflowY), UE = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return ff(r, cP) || ff(r, lP);
}, pP = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = ro(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, $()), !UE(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return dP(o, uP) || process.env.NODE_ENV !== "production" && ct(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, eu = (e) => e == null ? null : e === document.body ? pP() ? e : null : e === document.documentElement ? null : UE(e) ? e : eu(e.parentElement);
var fP = (e) => {
  !e || !eu(e.parentElement) || process.env.NODE_ENV !== "production" && ct(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ys = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const qE = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : qE(e.parentElement) : !1;
var mP = (e) => {
  const t = eu(e), r = qE(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, gP = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: p,
      client: g
    } = s, h = OE({
      scrollHeight: p.scrollHeight,
      scrollWidth: p.scrollWidth,
      height: g.paddingBox.height,
      width: g.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: g,
      scrollSize: p,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: h,
        diff: {
          value: St,
          displacement: St
        }
      }
    };
  })(), u = n === "vertical" ? Vl : nE, m = Dn({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const bP = (e, t) => {
  const r = Yv(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, l = $l({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Al({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var hP = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = bP(e, l), m = ui(u, o), c = (() => {
    if (!l)
      return null;
    const g = Yv(l), h = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: g,
      page: ui(g, o),
      scroll: Ys(l),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return gP({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const yP = {
  passive: !1
}, vP = {
  passive: !0
};
var mf = (e) => e.shouldPublishImmediately ? yP : vP;
const $o = (e) => e && e.env.closestScrollable || null;
function EP(e) {
  const t = L(null), r = fi(_i), o = Yl("droppable"), {
    registry: n,
    marshal: i
  } = r, a = Xl(e), s = ve(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = ve(() => wt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? $(!1, "Can only update scroll when dragging") : $());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = oe(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? St : Ys(y.env.closestScrollable);
  }, []), c = oe(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = ve(() => Kn(c), [c]), g = oe(() => {
    const y = t.current, f = $o(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? $(!1, "Could not find scroll options while scrolling") : $()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = oe((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? $(!1, "Cannot collect a droppable while a drag is occurring") : $());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot collect without a droppable ref") : $());
    const C = mP(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = hP({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(sf.contextId, r.contextId), A.addEventListener("scroll", g, mf(R.scrollOptions)), process.env.NODE_ENV !== "production" && fP(A)), P;
  }, [r.contextId, s, g, a]), b = oe(() => {
    const y = t.current, f = $o(y);
    return y && f || (process.env.NODE_ENV !== "production" ? $(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : $()), Ys(f);
  }, []), d = oe(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot stop drag when no active drag") : $());
    const f = $o(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(sf.contextId), f.removeEventListener("scroll", g, mf(y.scrollOptions)));
  }, [g, p]), x = oe((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot scroll when there is no drag") : $());
    const v = $o(f);
    v || (process.env.NODE_ENV !== "production" ? $(!1, "Cannot scroll a droppable with no closest scrollable") : $()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = ve(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = ve(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  Kt(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && ct("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), Kt(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Kt(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ki() {
}
const gf = {
  width: 0,
  height: 0,
  margin: Q0
}, xP = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? gf : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, wP = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = xP({
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
    transition: r !== "none" ? Ln.placeholder : null
  };
}, SP = (e) => {
  const t = L(null), r = oe(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), Ki) : t.current ? Ki : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Ki, [o, s, r]);
  const u = oe((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = wP({
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
var OP = _.memo(SP);
function Xi(e) {
  return typeof e == "boolean";
}
function Ji(e, t) {
  t.forEach((r) => r(e));
}
const DP = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? $(!1, "A Droppable requires a droppableId prop") : $()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? $(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : $());
}, function({
  props: t
}) {
  Xi(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? $(!1, "isDropDisabled must be a boolean") : $()), Xi(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? $(!1, "isCombineEnabled must be a boolean") : $()), Xi(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? $(!1, "ignoreContainerClipping must be a boolean") : $());
}, function({
  getDroppableRef: t
}) {
  WE(t());
}], NP = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && ct(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], CP = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? $(!1, "Must provide a clone render function (renderClone) for virtual lists") : $());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? $(!1, "Expected virtual list to not have a placeholder") : $());
}];
function _P(e) {
  _o(() => {
    Ji(e, DP), e.props.mode === "standard" && Ji(e, NP), e.props.mode === "virtual" && Ji(e, CP);
  });
}
class IP extends _.PureComponent {
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
const PP = (e) => {
  const t = pt(_i);
  t || (process.env.NODE_ENV !== "production" ? $(!1, "Could not find app context") : $());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = oe(() => n.current, []), E = oe((I = null) => {
    n.current = I;
  }, []), y = oe(() => i.current, []), f = oe((I = null) => {
    i.current = I;
  }, []);
  _P({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = oe(() => {
    o() && d({
      maxScroll: NE()
    });
  }, [o, d]);
  EP({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = ve(() => _.createElement(IP, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(OP, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = ve(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = ve(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(HE, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(Zl.Provider, {
    value: P
  }, a(C, h), A());
};
var $P = PP;
function AP() {
  return document.body || (process.env.NODE_ENV !== "production" ? $(!1, "document.body is not ready") : $()), document.body;
}
const bf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: AP
}, YE = (e) => {
  let t = {
    ...e
  }, r;
  for (r in bf)
    e[r] === void 0 && (t = {
      ...t,
      [r]: bf[r]
    });
  return t;
}, Zi = (e, t) => e === t.droppable.type, hf = (e, t) => t.draggables[e.draggable.id], TP = () => {
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
  }, r = wt((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), o = wt((i, a, s, l, u, m) => {
    const c = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const h = m ? {
        render: m,
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
    const g = {
      isDraggingOver: s,
      draggingOverWith: c,
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
    const s = YE(a), l = s.droppableId, u = s.type, m = !s.isDropDisabled, c = s.renderClone;
    if (no(i)) {
      const p = i.critical;
      if (!Zi(u, p))
        return t;
      const g = hf(p, i.dimensions), h = Yt(i.impact) === l;
      return o(l, m, h, h, g, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const p = i.completed;
      if (!Zi(u, p.critical))
        return t;
      const g = hf(p.critical, i.dimensions);
      return o(l, m, kE(p.result) === l, Yt(p.impact) === l, g, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const p = i.completed;
      if (!Zi(u, p.critical))
        return t;
      const g = Yt(p.impact) === l, h = !!(p.impact.at && p.impact.at.type === "COMBINE"), b = p.critical.droppable.id === l;
      return g ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, RP = {
  updateViewportMaxScroll: p_
}, VP = Hv(TP, RP, (e, t, r) => ({
  ...YE(r),
  ...e,
  ...t
}), {
  context: ql,
  areStatePropsEqual: GE
})($P);
var MP = VP;
const m7 = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: o,
  isDragDisabled: n = !0,
  isLoading: i,
  onRowClick: a,
  itemClickKey: s,
  haveLinks: l,
  className: u
}) => {
  const [m, c] = Ee(null), [p, g] = Ee(e);
  re(() => {
    g(e);
  }, [e]);
  const h = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (x) => {
    a == null || a(x), c(x);
  }, d = (x) => {
    if (!x.destination || !(p != null && p.length)) return;
    const O = x.source.index, E = x.destination.index, y = [...p], [f] = y.splice(O, 1);
    y.splice(E, 0, f), g(y);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ kt("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ ne("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ ne("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ ne(hv, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ ne(Cv, { className: u, children: /* @__PURE__ */ ne("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ ne("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ ne(BI, { onDragEnd: d, children: /* @__PURE__ */ ne(MP, { droppableId: "dropArray", direction: "vertical", children: (x) => /* @__PURE__ */ kt("table", { className: "w-full", children: [
    /* @__PURE__ */ ne("thead", { children: /* @__PURE__ */ ne("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((O, E) => /* @__PURE__ */ ne(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          o === O.name.find((y) => y) ? `-${O.name.find((y) => y) ?? ""}` : O.name.find((y) => y) ?? ""
        ),
        className: `${o && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${o === O.name.find((y) => y) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: O.title
      },
      E
    )) }) }),
    /* @__PURE__ */ kt(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...x.droppableProps,
        ref: x.innerRef,
        children: [
          p == null ? void 0 : p.map((O, E) => {
            var y;
            return /* @__PURE__ */ ne(
              sP,
              {
                isDragDisabled: n,
                draggableId: (y = O == null ? void 0 : O.id) == null ? void 0 : y.toString(),
                index: E,
                children: (f) => {
                  const v = {
                    ...f.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ ne(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${m === p[E] && h}`,
                      onClick: () => b(
                        s ? O[s] : O.id
                      ),
                      ref: f.innerRef,
                      ...f.draggableProps,
                      ...f.dragHandleProps,
                      style: v,
                      children: t.map((D, C) => {
                        var P;
                        let R = (P = D == null ? void 0 : D.name) == null ? void 0 : P.reduce(
                          (A, I) => A == null ? void 0 : A[I],
                          p == null ? void 0 : p[E]
                        );
                        return /* @__PURE__ */ ne(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${l && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: D.transform ? D.transform(R, E) : R
                          },
                          C
                        );
                      })
                    }
                  );
                }
              },
              O == null ? void 0 : O.id
            );
          }),
          x.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, g7 = ({ className: e, field: t, fieldState: r, ...o }) => /* @__PURE__ */ ne(
  "textarea",
  {
    ...t,
    ...o,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), b7 = () => {
  const e = L(null);
  return [() => {
    var r;
    return (r = e.current) == null ? void 0 : r.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, e];
}, LP = ({ name: e, className: t, ...r }) => /* @__PURE__ */ ne(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ ne(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
);
var yf;
(function(e) {
  e.event = "event", e.props = "prop";
})(yf || (yf = {}));
var Qi = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Qi(), "" + Qi();
function BP() {
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
function FP(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ks = { exports: {} }, ea = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vf;
function jP() {
  if (vf) return ea;
  vf = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ea.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, ea;
}
var Ef = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function WP() {
  return xf || (xf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Ef.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ef;
}
process.env.NODE_ENV === "production" ? Ks.exports = jP() : Ks.exports = WP();
var tu = Ks.exports, ta = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf;
function GP() {
  if (wf) return ta;
  wf = 1;
  var e = _, t = tu;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return ta.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, ta;
}
var Sf = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Of;
function kP() {
  return Of || (Of = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = tu, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Sf.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Sf;
}
process.env.NODE_ENV === "production" ? GP() : kP();
function zP(e) {
  e();
}
let KE = zP;
const HP = (e) => KE = e, UP = () => KE, Df = Symbol.for("react-redux-context"), Nf = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function qP() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Nf[Df]) != null ? e : Nf[Df] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const YP = /* @__PURE__ */ qP(), KP = () => {
  throw new Error("uSES not initialized!");
};
function bn() {
  return bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, bn.apply(null, arguments);
}
function XE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Xs = { exports: {} }, De = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf;
function XP() {
  if (Cf) return De;
  Cf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return De.AsyncMode = l, De.ConcurrentMode = u, De.ContextConsumer = s, De.ContextProvider = a, De.Element = t, De.ForwardRef = m, De.Fragment = o, De.Lazy = h, De.Memo = g, De.Portal = r, De.Profiler = i, De.StrictMode = n, De.Suspense = c, De.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
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
    return E(f) === c;
  }, De.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, De.typeOf = E, De;
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
var _f;
function JP() {
  return _f || (_f = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    ke.AsyncMode = f, ke.ConcurrentMode = v, ke.ContextConsumer = D, ke.ContextProvider = C, ke.Element = R, ke.ForwardRef = P, ke.Fragment = A, ke.Lazy = I, ke.Memo = T, ke.Portal = F, ke.Profiler = k, ke.StrictMode = V, ke.Suspense = W, ke.isAsyncMode = G, ke.isConcurrentMode = z, ke.isContextConsumer = B, ke.isContextProvider = q, ke.isElement = Y, ke.isForwardRef = K, ke.isFragment = Z, ke.isLazy = te, ke.isMemo = H, ke.isPortal = X, ke.isProfiler = M, ke.isStrictMode = J, ke.isSuspense = be, ke.isValidElementType = E, ke.typeOf = y;
  }()), ke;
}
process.env.NODE_ENV === "production" ? Xs.exports = XP() : Xs.exports = JP();
var ZP = Xs.exports, ru = ZP, QP = {
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
}, e$ = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, t$ = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, JE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, nu = {};
nu[ru.ForwardRef] = t$;
nu[ru.Memo] = JE;
function If(e) {
  return ru.isMemo(e) ? JE : nu[e.$$typeof] || QP;
}
var r$ = Object.defineProperty, n$ = Object.getOwnPropertyNames, Pf = Object.getOwnPropertySymbols, o$ = Object.getOwnPropertyDescriptor, i$ = Object.getPrototypeOf, $f = Object.prototype;
function ZE(e, t, r) {
  if (typeof t != "string") {
    if ($f) {
      var o = i$(t);
      o && o !== $f && ZE(e, o, r);
    }
    var n = n$(t);
    Pf && (n = n.concat(Pf(t)));
    for (var i = If(e), a = If(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!e$[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = o$(t, l);
        try {
          r$(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var a$ = ZE;
const Af = /* @__PURE__ */ FP(a$);
var Js = { exports: {} }, Ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tf;
function s$() {
  if (Tf) return Ne;
  Tf = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Ne.ContextConsumer = a, Ne.ContextProvider = i, Ne.Element = e, Ne.ForwardRef = l, Ne.Fragment = r, Ne.Lazy = p, Ne.Memo = c, Ne.Portal = t, Ne.Profiler = n, Ne.StrictMode = o, Ne.Suspense = u, Ne.SuspenseList = m, Ne.isAsyncMode = function() {
    return !1;
  }, Ne.isConcurrentMode = function() {
    return !1;
  }, Ne.isContextConsumer = function(d) {
    return b(d) === a;
  }, Ne.isContextProvider = function(d) {
    return b(d) === i;
  }, Ne.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Ne.isForwardRef = function(d) {
    return b(d) === l;
  }, Ne.isFragment = function(d) {
    return b(d) === r;
  }, Ne.isLazy = function(d) {
    return b(d) === p;
  }, Ne.isMemo = function(d) {
    return b(d) === c;
  }, Ne.isPortal = function(d) {
    return b(d) === t;
  }, Ne.isProfiler = function(d) {
    return b(d) === n;
  }, Ne.isStrictMode = function(d) {
    return b(d) === o;
  }, Ne.isSuspense = function(d) {
    return b(d) === u;
  }, Ne.isSuspenseList = function(d) {
    return b(d) === m;
  }, Ne.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, Ne.typeOf = b, Ne;
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
var Rf;
function c$() {
  return Rf || (Rf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    ze.ContextConsumer = v, ze.ContextProvider = D, ze.Element = C, ze.ForwardRef = R, ze.Fragment = P, ze.Lazy = A, ze.Memo = I, ze.Portal = T, ze.Profiler = F, ze.StrictMode = k, ze.Suspense = V, ze.SuspenseList = W, ze.isAsyncMode = z, ze.isConcurrentMode = B, ze.isContextConsumer = q, ze.isContextProvider = Y, ze.isElement = K, ze.isForwardRef = Z, ze.isFragment = te, ze.isLazy = H, ze.isMemo = X, ze.isPortal = M, ze.isProfiler = J, ze.isStrictMode = be, ze.isSuspense = w, ze.isSuspenseList = ee, ze.isValidElementType = y, ze.typeOf = f;
  }()), ze;
}
process.env.NODE_ENV === "production" ? Js.exports = s$() : Js.exports = c$();
var Vf = Js.exports;
function ou(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ra(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ou(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function l$(e, t, r) {
  ra(e, "mapStateToProps"), ra(t, "mapDispatchToProps"), ra(r, "mergeProps");
}
const u$ = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function d$(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function p$(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = XE(t, u$);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && l$(a, s, l), d$(a, s, l, e, i);
}
function f$(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function m$(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function QE(e, t, r) {
  m$(e) || ou(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Zs(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Mf(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ex(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Mf(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Mf(s), s = n(i, a)), process.env.NODE_ENV !== "production" && QE(s, o, t), s;
    }, n;
  };
}
function iu(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function g$(e) {
  return e && typeof e == "object" ? Zs((t) => (
    // @ts-ignore
    f$(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ex(e, "mapDispatchToProps")
  ) : iu(e, "mapDispatchToProps") : Zs((t) => ({
    dispatch: t
  }));
}
function b$(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ex(e, "mapStateToProps")
  ) : iu(e, "mapStateToProps") : Zs(() => ({}));
}
function h$(e, t, r) {
  return bn({}, r, e, t);
}
function y$(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && QE(i, r, "mergeProps")), i;
    };
  };
}
function v$(e) {
  return e ? typeof e == "function" ? y$(e) : iu(e, "mergeProps") : () => h$;
}
function E$() {
  const e = UP();
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
const Lf = {
  notify() {
  },
  get: () => []
};
function x$(e, t) {
  let r, o = Lf, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = E$());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Lf);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const w$ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Qs = w$ ? N.useLayoutEffect : N.useEffect;
function Bf(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function na(e, t) {
  if (Bf(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Bf(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const S$ = ["reactReduxForwardedRef"];
let tx = KP;
const O$ = (e) => {
  tx = e;
}, D$ = [null, null], N$ = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function C$(e, t, r) {
  Qs(() => e(...t), r);
}
function _$(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function I$(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function P$(e, t) {
  return e === t;
}
let Ff = !1;
function rx(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = P$,
  areOwnPropsEqual: i = na,
  areStatePropsEqual: a = na,
  areMergedPropsEqual: s = na,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = YP
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Ff && (Ff = !0, ou('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = b$(e), p = g$(t), g = v$(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Vf.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${N$(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = XE(f, S$);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Vf.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => p$(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return D$;
        const M = x$(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : bn({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Qs(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? I$(
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
      C$(_$, [z, G, q, C, B, W]);
      let H;
      try {
        H = tx(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Qs(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, bn({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, bn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Af(f, b);
    }
    return Af(y, b);
  };
}
O$(tu.useSyncExternalStore);
HP(pr);
function $$(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function nx(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && $$(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function A$(e, t) {
  return nx(function() {
    return e;
  }, t);
}
var Ot = nx, ft = A$, T$ = process.env.NODE_ENV === "production", oa = "Invariant failed";
function jf(e, t) {
  if (T$)
    throw new Error(oa);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(oa, ": ").concat(r) : oa;
  throw new Error(o);
}
var an = function(e) {
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
}, ox = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Wf = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, R$ = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, ia = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, au = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ia : r, n = e.border, i = n === void 0 ? ia : n, a = e.padding, s = a === void 0 ? ia : a, l = an(ox(t, o)), u = an(Wf(t, i)), m = an(Wf(u, s));
  return {
    marginBox: l,
    borderBox: an(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, Jt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? jf(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : jf()), o;
}, V$ = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, M$ = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = R$(r, t);
  return au({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, ec = function(e, t) {
  return t === void 0 && (t = V$()), M$(e, t);
}, ix = function(e, t) {
  var r = {
    top: Jt(t.marginTop),
    right: Jt(t.marginRight),
    bottom: Jt(t.marginBottom),
    left: Jt(t.marginLeft)
  }, o = {
    top: Jt(t.paddingTop),
    right: Jt(t.paddingRight),
    bottom: Jt(t.paddingBottom),
    left: Jt(t.paddingLeft)
  }, n = {
    top: Jt(t.borderTopWidth),
    right: Jt(t.borderRightWidth),
    bottom: Jt(t.borderBottomWidth),
    left: Jt(t.borderLeftWidth)
  };
  return au({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, ax = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return ix(t, r);
}, Gf = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function L$(e, t) {
  return !!(e === t || Gf(e) && Gf(t));
}
function B$(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!L$(e[r], t[r]))
      return !1;
  return !0;
}
function Rt(e, t) {
  t === void 0 && (t = B$);
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
var F$ = function(e) {
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
const j$ = process.env.NODE_ENV === "production", W$ = /[ \t]{2,}/g, G$ = /^[ \t]*/gm, kf = (e) => e.replace(W$, " ").replace(G$, "").trim(), k$ = (e) => kf(`
  %c@hello-pangea/dnd

  %c${kf(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), z$ = (e) => [k$(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], H$ = "__@hello-pangea/dnd-disable-dev-warnings";
function sx(e, t) {
  j$ || typeof window < "u" && window[H$] || console[e](...z$(t));
}
const Or = sx.bind(null, "warn"), tc = sx.bind(null, "error");
function U$() {
}
function q$(e, t) {
  return {
    ...e,
    ...t
  };
}
function Y$(e, t, r) {
  const o = t.map((n) => {
    const i = q$(r, n.options);
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
const K$ = process.env.NODE_ENV === "production", zf = "Invariant failed";
class oo extends Error {
}
oo.prototype.toString = function() {
  return this.message;
};
function ae(e, t) {
  throw K$ ? new oo(zf) : new oo(`${zf}: ${t || ""}`);
}
class h7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = U$, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Or(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof oo && (r.preventDefault(), process.env.NODE_ENV !== "production" && tc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Y$(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof oo) {
      process.env.NODE_ENV !== "production" && tc(t.message), this.setState({});
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
const Kr = {
  x: 0,
  y: 0
}, X$ = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), J$ = (e, t) => e.x === t.x && e.y === t.y, Z$ = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Q$ = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var eA = (e, t) => {
  const r = an({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const tA = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), rA = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, nA = (e, t) => t ? tA(e, t.scroll.diff.displacement) : e, oA = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, iA = (e, t) => t && t.shouldClipSubject ? eA(t.pageMarginBox, e) : an(e);
var aA = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = nA(e.marginBox, o), i = oA(n, r, t), a = iA(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Rt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Rt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const sA = Rt((e) => Object.values(e)), cA = Rt((e) => Object.values(e));
Rt((e, t) => cA(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function lA(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Rt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const uA = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, dA = {
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
    point: Q$(e.line, r)
  };
});
var Go = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const pA = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), fA = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), su = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, io = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, mA = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Vr = `${mA.outOfTheWay}s ${su.outOfTheWay}`, ko = {
  fluid: `opacity ${Vr}`,
  snap: `transform ${Vr}, opacity ${Vr}`,
  drop: (e) => {
    const t = `${e}s ${su.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Vr}`,
  placeholder: `height ${Vr}, width ${Vr}, margin ${Vr}`
}, Hf = (e) => J$(e, Kr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, rc = {
  moveTo: Hf,
  drop: (e, t) => {
    const r = Hf(e);
    if (r)
      return t ? `${r} scale(${io.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var cx = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = X$({
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
}, gA = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot find document.documentElement") : ae()), e;
}, bA = () => {
  const e = gA();
  return cx({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Rt((e) => sA(e).filter((t) => !(!t.isEnabled || !t.frame)));
const lx = "data-rfd", Uf = (() => {
  const e = `${lx}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), qf = {
  contextId: `${lx}-scroll-container-context-id`
}, hA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var Bn = hA;
function yA(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var vA = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function ux(e) {
  return e instanceof vA(e).HTMLElement;
}
function EA(e, t) {
  const r = `[${Uf.contextId}="${e}"]`, o = yA(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Or(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Uf.draggableId) === t);
  return n ? ux(n) ? n : (process.env.NODE_ENV !== "production" && Or("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Or(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var dx = _.createContext(null), xA = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot find document.body") : ae()), e;
};
let wA = 0;
const px = {
  separator: "::"
};
function SA(e, t = px) {
  return Ot(() => `${e}${t.separator}${wA++}`, [t.separator, e]);
}
function OA(e, t = px) {
  const r = _.useId();
  return Ot(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var fx = "useId" in _ ? OA : SA, cu = _.createContext(null);
function mx(e) {
  process.env.NODE_ENV !== "production" && e();
}
function lu(e, t) {
  mx(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        tc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function DA(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function uu(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Yf = {
  dragging: 5e3,
  dropAnimating: 4500
}, NA = (e, t) => t ? ko.drop(t.duration) : e ? ko.snap : ko.fluid, CA = (e, t) => {
  if (e)
    return t ? io.opacity.drop : io.opacity.combining;
}, _A = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function IA(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = _A(e), s = !!n, l = s ? rc.drop(r, i) : rc.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: NA(a, n),
    transform: l,
    opacity: CA(i, s),
    zIndex: s ? Yf.dropAnimating : Yf.dragging,
    pointerEvents: "none"
  };
}
function PA(e) {
  return {
    transform: rc.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function $A(e) {
  return e.type === "DRAGGING" ? IA(e) : PA(e);
}
function AA(e, t, r = Kr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = ix(n, o), a = ec(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function TA(e) {
  const t = fx("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Ot(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ft((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot get dimension when no ref is set") : ae()), AA(r, h, g);
  }, [r, n]), m = Ot(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  Bn(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), Bn(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var du = _.createContext(null);
function gx(e) {
  e && ux(e) || (process.env.NODE_ENV !== "production" ? ae(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ae());
}
function RA(e, t, r) {
  lu(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ae(!1, "Draggable requires a draggableId") : ae(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ae(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ae(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ae(!1, `${o(n)} requires an integer index prop`) : ae(!1)), e.mapped.type !== "DRAGGING" && (gx(r()), e.isEnabled && (EA(t, n) || (process.env.NODE_ENV !== "production" ? ae(!1, `${o(n)} Unable to find drag handle`) : ae(!1))));
  });
}
function VA(e) {
  mx(() => {
    const t = L(e);
    lu(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ae(!1, "Draggable isClone prop value changed during component life") : ae(!1));
    }, [e]);
  });
}
function mi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find required context") : ae()), t;
}
function MA(e) {
  e.preventDefault();
}
const LA = (e) => {
  const t = L(null), r = ft((v = null) => {
    t.current = v;
  }, []), o = ft(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = mi(cu), {
    type: s,
    droppableId: l
  } = mi(du), u = Ot(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (RA(e, n, o), VA(b), !b) {
    const v = Ot(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    TA(v);
  }
  const O = Ot(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: MA
  } : null, [n, i, c, p]), E = ft((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = Ot(() => {
    const v = $A(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = Ot(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var BA = LA, bx = (e, t) => e === t, hx = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const FA = (e) => e.combine ? e.combine.draggableId : null, jA = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function WA() {
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
  })), r = Rt((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (uu(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Go(o.impact), l = jA(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = hx(l), c = FA(l), p = {
        duration: o.dropDuration,
        curve: su.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? io.opacity.drop : null,
        scale: c ? io.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function yx(e = null) {
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
const GA = {
  mapped: {
    type: "SECONDARY",
    offset: Kr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: yx(null)
  }
};
function kA() {
  const e = Rt((i, a) => ({
    x: i,
    y: a
  })), t = Rt(yx), r = Rt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Kr, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = lA(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = Z$(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (uu(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const zA = () => {
  const e = WA(), t = kA();
  return (r, o) => e(r, o) || t(r, o) || GA;
}, HA = {
  dropAnimationFinished: fA
}, UA = rx(zA, HA, null, {
  context: dx,
  areStatePropsEqual: bx
})(BA);
var qA = UA;
function YA(e) {
  return mi(du).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(qA, e);
}
const pu = (e) => (t) => e === t, KA = pu("scroll"), XA = pu("auto"), JA = pu("visible"), Kf = (e, t) => t(e.overflowX) || t(e.overflowY), ZA = (e, t) => t(e.overflowX) && t(e.overflowY), vx = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Kf(r, KA) || Kf(r, XA);
}, QA = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = xA(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ae()), !vx(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return ZA(o, JA) || process.env.NODE_ENV !== "production" && Or(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, fu = (e) => e == null ? null : e === document.body ? QA() ? e : null : e === document.documentElement ? null : vx(e) ? e : fu(e.parentElement);
var eT = (e) => {
  !e || !fu(e.parentElement) || process.env.NODE_ENV !== "production" && Or(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, nc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ex = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ex(e.parentElement) : !1;
var tT = (e) => {
  const t = fu(e), r = Ex(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, rT = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = cx({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Kr,
          displacement: Kr
        }
      }
    };
  })(), u = n === "vertical" ? uA : dA, m = aA({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const nT = (e, t) => {
  const r = ax(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = ox({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return au({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var oT = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = nT(e, l), m = ec(u, o), c = (() => {
    if (!l)
      return null;
    const p = ax(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: ec(p, o),
      scroll: nc(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return rT({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const iT = {
  passive: !1
}, aT = {
  passive: !0
};
var Xf = (e) => e.shouldPublishImmediately ? iT : aT;
const Ao = (e) => e && e.env.closestScrollable || null;
function sT(e) {
  const t = L(null), r = mi(cu), o = fx("droppable"), {
    registry: n,
    marshal: i
  } = r, a = DA(e), s = Ot(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = Ot(() => Rt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? ae(!1, "Can only update scroll when dragging") : ae());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = ft(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Kr : nc(y.env.closestScrollable);
  }, []), c = ft(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = Ot(() => F$(c), [c]), g = ft(() => {
    const y = t.current, f = Ao(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find scroll options while scrolling") : ae()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = ft((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot collect a droppable while a drag is occurring") : ae());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot collect without a droppable ref") : ae());
    const C = tT(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = oT({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(qf.contextId, r.contextId), A.addEventListener("scroll", g, Xf(R.scrollOptions)), process.env.NODE_ENV !== "production" && eT(A)), P;
  }, [r.contextId, s, g, a]), b = ft(() => {
    const y = t.current, f = Ao(y);
    return y && f || (process.env.NODE_ENV !== "production" ? ae(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ae()), nc(f);
  }, []), d = ft(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot stop drag when no active drag") : ae());
    const f = Ao(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(qf.contextId), f.removeEventListener("scroll", g, Xf(y.scrollOptions)));
  }, [g, p]), x = ft((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot scroll when there is no drag") : ae());
    const v = Ao(f);
    v || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot scroll a droppable with no closest scrollable") : ae()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = Ot(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = Ot(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  Bn(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Or("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), Bn(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Bn(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function aa() {
}
const cT = {
  width: 0,
  height: 0,
  margin: rA
}, lT = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? cT : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, uT = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = lT({
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
    transition: r !== "none" ? ko.placeholder : null
  };
}, dT = (e) => {
  const t = L(null), r = ft(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), aa) : t.current ? aa : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : aa, [o, s, r]);
  const u = ft((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = uT({
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
var pT = _.memo(dT);
function sa(e) {
  return typeof e == "boolean";
}
function ca(e, t) {
  t.forEach((r) => r(e));
}
const fT = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ae(!1, "A Droppable requires a droppableId prop") : ae()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ae(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ae());
}, function({
  props: e
}) {
  sa(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ae(!1, "isDropDisabled must be a boolean") : ae()), sa(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ae(!1, "isCombineEnabled must be a boolean") : ae()), sa(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ae(!1, "ignoreContainerClipping must be a boolean") : ae());
}, function({
  getDroppableRef: e
}) {
  gx(e());
}], mT = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Or(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], gT = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ae(!1, "Must provide a clone render function (renderClone) for virtual lists") : ae());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ae(!1, "Expected virtual list to not have a placeholder") : ae());
}];
function bT(e) {
  lu(() => {
    ca(e, fT), e.props.mode === "standard" && ca(e, mT), e.props.mode === "virtual" && ca(e, gT);
  });
}
class hT extends _.PureComponent {
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
const yT = (e) => {
  const t = pt(cu);
  t || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find app context") : ae());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = ft(() => n.current, []), E = ft((I = null) => {
    n.current = I;
  }, []), y = ft(() => i.current, []), f = ft((I = null) => {
    i.current = I;
  }, []);
  bT({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = ft(() => {
    o() && d({
      maxScroll: bA()
    });
  }, [o, d]);
  sT({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = Ot(() => _.createElement(hT, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(pT, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Ot(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = Ot(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(YA, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(du.Provider, {
    value: P
  }, a(C, h), A());
};
var vT = yT;
function ET() {
  return document.body || (process.env.NODE_ENV !== "production" ? ae(!1, "document.body is not ready") : ae()), document.body;
}
const Jf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: ET
}, xx = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Jf)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Jf[r]
    });
  return t;
}, la = (e, t) => e === t.droppable.type, Zf = (e, t) => t.draggables[e.draggable.id], xT = () => {
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
  })), o = Rt((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = xx(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (uu(n)) {
      const c = n.critical;
      if (!la(l, c))
        return t;
      const p = Zf(c, n.dimensions), g = Go(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!la(l, c.critical))
        return t;
      const p = Zf(c.critical, n.dimensions);
      return o(s, u, hx(c.result) === s, Go(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!la(l, c.critical))
        return t;
      const p = Go(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, wT = {
  updateViewportMaxScroll: pA
};
rx(xT, wT, (e, t, r) => ({
  ...xx(r),
  ...e,
  ...t
}), {
  context: dx,
  areStatePropsEqual: bx
})(vT);
var Qf;
(function(e) {
  e.event = "event", e.props = "prop";
})(Qf || (Qf = {}));
var em = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + em(), "" + em();
function ST(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oc = { exports: {} }, ua = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function OT() {
  if (tm) return ua;
  tm = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ua.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, ua;
}
var rm = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nm;
function DT() {
  return nm || (nm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    rm.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), rm;
}
process.env.NODE_ENV === "production" ? oc.exports = OT() : oc.exports = DT();
var mu = oc.exports, da = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var om;
function NT() {
  if (om) return da;
  om = 1;
  var e = _, t = mu;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return da.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, da;
}
var im = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var am;
function CT() {
  return am || (am = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = mu, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    im.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), im;
}
process.env.NODE_ENV === "production" ? NT() : CT();
function _T(e) {
  e();
}
let wx = _T;
const IT = (e) => wx = e, PT = () => wx, sm = Symbol.for("react-redux-context"), cm = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function $T() {
  var e;
  if (!N.createContext) return {};
  const t = (e = cm[sm]) != null ? e : cm[sm] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const AT = /* @__PURE__ */ $T(), TT = () => {
  throw new Error("uSES not initialized!");
};
function hn() {
  return hn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, hn.apply(null, arguments);
}
function Sx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var ic = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lm;
function RT() {
  if (lm) return Ce;
  lm = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return Ce.AsyncMode = l, Ce.ConcurrentMode = u, Ce.ContextConsumer = s, Ce.ContextProvider = a, Ce.Element = t, Ce.ForwardRef = m, Ce.Fragment = o, Ce.Lazy = h, Ce.Memo = g, Ce.Portal = r, Ce.Profiler = i, Ce.StrictMode = n, Ce.Suspense = c, Ce.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
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
    return E(f) === c;
  }, Ce.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, Ce.typeOf = E, Ce;
}
var He = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var um;
function VT() {
  return um || (um = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    He.AsyncMode = f, He.ConcurrentMode = v, He.ContextConsumer = D, He.ContextProvider = C, He.Element = R, He.ForwardRef = P, He.Fragment = A, He.Lazy = I, He.Memo = T, He.Portal = F, He.Profiler = k, He.StrictMode = V, He.Suspense = W, He.isAsyncMode = G, He.isConcurrentMode = z, He.isContextConsumer = B, He.isContextProvider = q, He.isElement = Y, He.isForwardRef = K, He.isFragment = Z, He.isLazy = te, He.isMemo = H, He.isPortal = X, He.isProfiler = M, He.isStrictMode = J, He.isSuspense = be, He.isValidElementType = E, He.typeOf = y;
  }()), He;
}
process.env.NODE_ENV === "production" ? ic.exports = RT() : ic.exports = VT();
var MT = ic.exports, gu = MT, LT = {
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
}, BT = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, FT = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ox = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, bu = {};
bu[gu.ForwardRef] = FT;
bu[gu.Memo] = Ox;
function dm(e) {
  return gu.isMemo(e) ? Ox : bu[e.$$typeof] || LT;
}
var jT = Object.defineProperty, WT = Object.getOwnPropertyNames, pm = Object.getOwnPropertySymbols, GT = Object.getOwnPropertyDescriptor, kT = Object.getPrototypeOf, fm = Object.prototype;
function Dx(e, t, r) {
  if (typeof t != "string") {
    if (fm) {
      var o = kT(t);
      o && o !== fm && Dx(e, o, r);
    }
    var n = WT(t);
    pm && (n = n.concat(pm(t)));
    for (var i = dm(e), a = dm(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!BT[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = GT(t, l);
        try {
          jT(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var zT = Dx;
const mm = /* @__PURE__ */ ST(zT);
var ac = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gm;
function HT() {
  if (gm) return _e;
  gm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return _e.ContextConsumer = a, _e.ContextProvider = i, _e.Element = e, _e.ForwardRef = l, _e.Fragment = r, _e.Lazy = p, _e.Memo = c, _e.Portal = t, _e.Profiler = n, _e.StrictMode = o, _e.Suspense = u, _e.SuspenseList = m, _e.isAsyncMode = function() {
    return !1;
  }, _e.isConcurrentMode = function() {
    return !1;
  }, _e.isContextConsumer = function(d) {
    return b(d) === a;
  }, _e.isContextProvider = function(d) {
    return b(d) === i;
  }, _e.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, _e.isForwardRef = function(d) {
    return b(d) === l;
  }, _e.isFragment = function(d) {
    return b(d) === r;
  }, _e.isLazy = function(d) {
    return b(d) === p;
  }, _e.isMemo = function(d) {
    return b(d) === c;
  }, _e.isPortal = function(d) {
    return b(d) === t;
  }, _e.isProfiler = function(d) {
    return b(d) === n;
  }, _e.isStrictMode = function(d) {
    return b(d) === o;
  }, _e.isSuspense = function(d) {
    return b(d) === u;
  }, _e.isSuspenseList = function(d) {
    return b(d) === m;
  }, _e.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, _e.typeOf = b, _e;
}
var Ue = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bm;
function UT() {
  return bm || (bm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    Ue.ContextConsumer = v, Ue.ContextProvider = D, Ue.Element = C, Ue.ForwardRef = R, Ue.Fragment = P, Ue.Lazy = A, Ue.Memo = I, Ue.Portal = T, Ue.Profiler = F, Ue.StrictMode = k, Ue.Suspense = V, Ue.SuspenseList = W, Ue.isAsyncMode = z, Ue.isConcurrentMode = B, Ue.isContextConsumer = q, Ue.isContextProvider = Y, Ue.isElement = K, Ue.isForwardRef = Z, Ue.isFragment = te, Ue.isLazy = H, Ue.isMemo = X, Ue.isPortal = M, Ue.isProfiler = J, Ue.isStrictMode = be, Ue.isSuspense = w, Ue.isSuspenseList = ee, Ue.isValidElementType = y, Ue.typeOf = f;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? ac.exports = HT() : ac.exports = UT();
var hm = ac.exports;
function hu(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function pa(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || hu(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function qT(e, t, r) {
  pa(e, "mapStateToProps"), pa(t, "mapDispatchToProps"), pa(r, "mergeProps");
}
const YT = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function KT(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function XT(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Sx(t, YT);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && qT(a, s, l), KT(a, s, l, e, i);
}
function JT(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function ZT(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Nx(e, t, r) {
  ZT(e) || hu(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function sc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function ym(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Cx(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = ym(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = ym(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Nx(s, o, t), s;
    }, n;
  };
}
function yu(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function QT(e) {
  return e && typeof e == "object" ? sc((t) => (
    // @ts-ignore
    JT(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Cx(e, "mapDispatchToProps")
  ) : yu(e, "mapDispatchToProps") : sc((t) => ({
    dispatch: t
  }));
}
function eR(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Cx(e, "mapStateToProps")
  ) : yu(e, "mapStateToProps") : sc(() => ({}));
}
function tR(e, t, r) {
  return hn({}, r, e, t);
}
function rR(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Nx(i, r, "mergeProps")), i;
    };
  };
}
function nR(e) {
  return e ? typeof e == "function" ? rR(e) : yu(e, "mergeProps") : () => tR;
}
function oR() {
  const e = PT();
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
const vm = {
  notify() {
  },
  get: () => []
};
function iR(e, t) {
  let r, o = vm, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = oR());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = vm);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const aR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", cc = aR ? N.useLayoutEffect : N.useEffect;
function Em(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function fa(e, t) {
  if (Em(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Em(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const sR = ["reactReduxForwardedRef"];
let _x = TT;
const cR = (e) => {
  _x = e;
}, lR = [null, null], uR = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function dR(e, t, r) {
  cc(() => e(...t), r);
}
function pR(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function fR(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function mR(e, t) {
  return e === t;
}
let xm = !1;
function Ix(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = mR,
  areOwnPropsEqual: i = fa,
  areStatePropsEqual: a = fa,
  areMergedPropsEqual: s = fa,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = AT
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !xm && (xm = !0, hu('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = eR(e), p = QT(t), g = nR(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !hm.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${uR(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = Sx(f, sR);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      hm.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => XT(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return lR;
        const M = iR(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : hn({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      cc(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? fR(
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
      dR(pR, [z, G, q, C, B, W]);
      let H;
      try {
        H = _x(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      cc(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, hn({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, hn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, mm(f, b);
    }
    return mm(y, b);
  };
}
cR(mu.useSyncExternalStore);
IT(pr);
function gR(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Px(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && gR(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function bR(e, t) {
  return Px(function() {
    return e;
  }, t);
}
var Dt = Px, mt = bR, hR = process.env.NODE_ENV === "production", ma = "Invariant failed";
function wm(e, t) {
  if (hR)
    throw new Error(ma);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(ma, ": ").concat(r) : ma;
  throw new Error(o);
}
var sn = function(e) {
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
}, $x = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Sm = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, yR = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, ga = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, vu = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ga : r, n = e.border, i = n === void 0 ? ga : n, a = e.padding, s = a === void 0 ? ga : a, l = sn($x(t, o)), u = sn(Sm(t, i)), m = sn(Sm(u, s));
  return {
    marginBox: l,
    borderBox: sn(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, Zt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? wm(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : wm()), o;
}, vR = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, ER = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = yR(r, t);
  return vu({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, lc = function(e, t) {
  return t === void 0 && (t = vR()), ER(e, t);
}, Ax = function(e, t) {
  var r = {
    top: Zt(t.marginTop),
    right: Zt(t.marginRight),
    bottom: Zt(t.marginBottom),
    left: Zt(t.marginLeft)
  }, o = {
    top: Zt(t.paddingTop),
    right: Zt(t.paddingRight),
    bottom: Zt(t.paddingBottom),
    left: Zt(t.paddingLeft)
  }, n = {
    top: Zt(t.borderTopWidth),
    right: Zt(t.borderRightWidth),
    bottom: Zt(t.borderBottomWidth),
    left: Zt(t.borderLeftWidth)
  };
  return vu({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, Tx = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Ax(t, r);
}, Om = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function xR(e, t) {
  return !!(e === t || Om(e) && Om(t));
}
function wR(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!xR(e[r], t[r]))
      return !1;
  return !0;
}
function Vt(e, t) {
  t === void 0 && (t = wR);
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
var SR = function(e) {
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
const OR = process.env.NODE_ENV === "production", DR = /[ \t]{2,}/g, NR = /^[ \t]*/gm, Dm = (e) => e.replace(DR, " ").replace(NR, "").trim(), CR = (e) => Dm(`
  %c@hello-pangea/dnd

  %c${Dm(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), _R = (e) => [CR(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], IR = "__@hello-pangea/dnd-disable-dev-warnings";
function Rx(e, t) {
  OR || typeof window < "u" && window[IR] || console[e](..._R(t));
}
const Dr = Rx.bind(null, "warn"), uc = Rx.bind(null, "error");
function PR() {
}
function $R(e, t) {
  return {
    ...e,
    ...t
  };
}
function AR(e, t, r) {
  const o = t.map((n) => {
    const i = $R(r, n.options);
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
const TR = process.env.NODE_ENV === "production", Nm = "Invariant failed";
class ao extends Error {
}
ao.prototype.toString = function() {
  return this.message;
};
function se(e, t) {
  throw TR ? new ao(Nm) : new ao(`${Nm}: ${t || ""}`);
}
class y7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = PR, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Dr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof ao && (r.preventDefault(), process.env.NODE_ENV !== "production" && uc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = AR(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof ao) {
      process.env.NODE_ENV !== "production" && uc(t.message), this.setState({});
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
const Xr = {
  x: 0,
  y: 0
}, RR = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), VR = (e, t) => e.x === t.x && e.y === t.y, MR = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), LR = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var BR = (e, t) => {
  const r = sn({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const FR = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), jR = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, WR = (e, t) => t ? FR(e, t.scroll.diff.displacement) : e, GR = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, kR = (e, t) => t && t.shouldClipSubject ? BR(t.pageMarginBox, e) : sn(e);
var zR = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = WR(e.marginBox, o), i = GR(n, r, t), a = kR(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Vt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Vt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const HR = Vt((e) => Object.values(e)), UR = Vt((e) => Object.values(e));
Vt((e, t) => UR(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function qR(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Vt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const YR = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, KR = {
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
    point: LR(e.line, r)
  };
});
var zo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const XR = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), JR = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Eu = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, so = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, ZR = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Mr = `${ZR.outOfTheWay}s ${Eu.outOfTheWay}`, Ho = {
  fluid: `opacity ${Mr}`,
  snap: `transform ${Mr}, opacity ${Mr}`,
  drop: (e) => {
    const t = `${e}s ${Eu.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Mr}`,
  placeholder: `height ${Mr}, width ${Mr}, margin ${Mr}`
}, Cm = (e) => VR(e, Xr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, dc = {
  moveTo: Cm,
  drop: (e, t) => {
    const r = Cm(e);
    if (r)
      return t ? `${r} scale(${so.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Vx = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = RR({
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
}, QR = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot find document.documentElement") : se()), e;
}, eV = () => {
  const e = QR();
  return Vx({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Vt((e) => HR(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Mx = "data-rfd", _m = (() => {
  const e = `${Mx}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Im = {
  contextId: `${Mx}-scroll-container-context-id`
}, tV = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var Fn = tV;
function rV(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var nV = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Lx(e) {
  return e instanceof nV(e).HTMLElement;
}
function oV(e, t) {
  const r = `[${_m.contextId}="${e}"]`, o = rV(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Dr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(_m.draggableId) === t);
  return n ? Lx(n) ? n : (process.env.NODE_ENV !== "production" && Dr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Dr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Bx = _.createContext(null), iV = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot find document.body") : se()), e;
};
let aV = 0;
const Fx = {
  separator: "::"
};
function sV(e, t = Fx) {
  return Dt(() => `${e}${t.separator}${aV++}`, [t.separator, e]);
}
function cV(e, t = Fx) {
  const r = _.useId();
  return Dt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var jx = "useId" in _ ? cV : sV, xu = _.createContext(null);
function Wx(e) {
  process.env.NODE_ENV !== "production" && e();
}
function wu(e, t) {
  Wx(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        uc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function lV(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function Su(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Pm = {
  dragging: 5e3,
  dropAnimating: 4500
}, uV = (e, t) => t ? Ho.drop(t.duration) : e ? Ho.snap : Ho.fluid, dV = (e, t) => {
  if (e)
    return t ? so.opacity.drop : so.opacity.combining;
}, pV = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function fV(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = pV(e), s = !!n, l = s ? dc.drop(r, i) : dc.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: uV(a, n),
    transform: l,
    opacity: dV(i, s),
    zIndex: s ? Pm.dropAnimating : Pm.dragging,
    pointerEvents: "none"
  };
}
function mV(e) {
  return {
    transform: dc.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function gV(e) {
  return e.type === "DRAGGING" ? fV(e) : mV(e);
}
function bV(e, t, r = Xr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Ax(n, o), a = lc(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function hV(e) {
  const t = jx("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Dt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = mt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot get dimension when no ref is set") : se()), bV(r, h, g);
  }, [r, n]), m = Dt(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  Fn(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), Fn(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Ou = _.createContext(null);
function Gx(e) {
  e && Lx(e) || (process.env.NODE_ENV !== "production" ? se(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : se());
}
function yV(e, t, r) {
  wu(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? se(!1, "Draggable requires a draggableId") : se(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? se(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : se(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? se(!1, `${o(n)} requires an integer index prop`) : se(!1)), e.mapped.type !== "DRAGGING" && (Gx(r()), e.isEnabled && (oV(t, n) || (process.env.NODE_ENV !== "production" ? se(!1, `${o(n)} Unable to find drag handle`) : se(!1))));
  });
}
function vV(e) {
  Wx(() => {
    const t = L(e);
    wu(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? se(!1, "Draggable isClone prop value changed during component life") : se(!1));
    }, [e]);
  });
}
function gi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find required context") : se()), t;
}
function EV(e) {
  e.preventDefault();
}
const xV = (e) => {
  const t = L(null), r = mt((v = null) => {
    t.current = v;
  }, []), o = mt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = gi(xu), {
    type: s,
    droppableId: l
  } = gi(Ou), u = Dt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (yV(e, n, o), vV(b), !b) {
    const v = Dt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    hV(v);
  }
  const O = Dt(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: EV
  } : null, [n, i, c, p]), E = mt((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = Dt(() => {
    const v = gV(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = Dt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var wV = xV, kx = (e, t) => e === t, zx = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const SV = (e) => e.combine ? e.combine.draggableId : null, OV = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function DV() {
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
  })), r = Vt((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (Su(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = zo(o.impact), l = OV(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = zx(l), c = SV(l), p = {
        duration: o.dropDuration,
        curve: Eu.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? so.opacity.drop : null,
        scale: c ? so.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function Hx(e = null) {
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
const NV = {
  mapped: {
    type: "SECONDARY",
    offset: Xr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Hx(null)
  }
};
function CV() {
  const e = Vt((i, a) => ({
    x: i,
    y: a
  })), t = Vt(Hx), r = Vt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Xr, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = qR(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = MR(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (Su(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const _V = () => {
  const e = DV(), t = CV();
  return (r, o) => e(r, o) || t(r, o) || NV;
}, IV = {
  dropAnimationFinished: JR
}, PV = Ix(_V, IV, null, {
  context: Bx,
  areStatePropsEqual: kx
})(wV);
var $V = PV;
function AV(e) {
  return gi(Ou).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement($V, e);
}
const Du = (e) => (t) => e === t, TV = Du("scroll"), RV = Du("auto"), VV = Du("visible"), $m = (e, t) => t(e.overflowX) || t(e.overflowY), MV = (e, t) => t(e.overflowX) && t(e.overflowY), Ux = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return $m(r, TV) || $m(r, RV);
}, LV = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = iV(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, se()), !Ux(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return MV(o, VV) || process.env.NODE_ENV !== "production" && Dr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Nu = (e) => e == null ? null : e === document.body ? LV() ? e : null : e === document.documentElement ? null : Ux(e) ? e : Nu(e.parentElement);
var BV = (e) => {
  !e || !Nu(e.parentElement) || process.env.NODE_ENV !== "production" && Dr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, pc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const qx = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : qx(e.parentElement) : !1;
var FV = (e) => {
  const t = Nu(e), r = qx(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, jV = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = Vx({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Xr,
          displacement: Xr
        }
      }
    };
  })(), u = n === "vertical" ? YR : KR, m = zR({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const WV = (e, t) => {
  const r = Tx(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = $x({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return vu({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var GV = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = WV(e, l), m = lc(u, o), c = (() => {
    if (!l)
      return null;
    const p = Tx(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: lc(p, o),
      scroll: pc(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return jV({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const kV = {
  passive: !1
}, zV = {
  passive: !0
};
var Am = (e) => e.shouldPublishImmediately ? kV : zV;
const To = (e) => e && e.env.closestScrollable || null;
function HV(e) {
  const t = L(null), r = gi(xu), o = jx("droppable"), {
    registry: n,
    marshal: i
  } = r, a = lV(e), s = Dt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = Dt(() => Vt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? se(!1, "Can only update scroll when dragging") : se());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = mt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Xr : pc(y.env.closestScrollable);
  }, []), c = mt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = Dt(() => SR(c), [c]), g = mt(() => {
    const y = t.current, f = To(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find scroll options while scrolling") : se()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = mt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? se(!1, "Cannot collect a droppable while a drag is occurring") : se());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot collect without a droppable ref") : se());
    const C = FV(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = GV({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Im.contextId, r.contextId), A.addEventListener("scroll", g, Am(R.scrollOptions)), process.env.NODE_ENV !== "production" && BV(A)), P;
  }, [r.contextId, s, g, a]), b = mt(() => {
    const y = t.current, f = To(y);
    return y && f || (process.env.NODE_ENV !== "production" ? se(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : se()), pc(f);
  }, []), d = mt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot stop drag when no active drag") : se());
    const f = To(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(Im.contextId), f.removeEventListener("scroll", g, Am(y.scrollOptions)));
  }, [g, p]), x = mt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot scroll when there is no drag") : se());
    const v = To(f);
    v || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot scroll a droppable with no closest scrollable") : se()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = Dt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = Dt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  Fn(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Dr("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), Fn(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Fn(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ba() {
}
const UV = {
  width: 0,
  height: 0,
  margin: jR
}, qV = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? UV : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, YV = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = qV({
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
    transition: r !== "none" ? Ho.placeholder : null
  };
}, KV = (e) => {
  const t = L(null), r = mt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), ba) : t.current ? ba : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : ba, [o, s, r]);
  const u = mt((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = YV({
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
var XV = _.memo(KV);
function ha(e) {
  return typeof e == "boolean";
}
function ya(e, t) {
  t.forEach((r) => r(e));
}
const JV = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? se(!1, "A Droppable requires a droppableId prop") : se()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? se(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : se());
}, function({
  props: e
}) {
  ha(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? se(!1, "isDropDisabled must be a boolean") : se()), ha(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? se(!1, "isCombineEnabled must be a boolean") : se()), ha(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? se(!1, "ignoreContainerClipping must be a boolean") : se());
}, function({
  getDroppableRef: e
}) {
  Gx(e());
}], ZV = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Dr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], QV = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? se(!1, "Must provide a clone render function (renderClone) for virtual lists") : se());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? se(!1, "Expected virtual list to not have a placeholder") : se());
}];
function eM(e) {
  wu(() => {
    ya(e, JV), e.props.mode === "standard" && ya(e, ZV), e.props.mode === "virtual" && ya(e, QV);
  });
}
class tM extends _.PureComponent {
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
const rM = (e) => {
  const t = pt(xu);
  t || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find app context") : se());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = mt(() => n.current, []), E = mt((I = null) => {
    n.current = I;
  }, []), y = mt(() => i.current, []), f = mt((I = null) => {
    i.current = I;
  }, []);
  eM({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = mt(() => {
    o() && d({
      maxScroll: eV()
    });
  }, [o, d]);
  HV({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = Dt(() => _.createElement(tM, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(XV, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Dt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = Dt(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(AV, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(Ou.Provider, {
    value: P
  }, a(C, h), A());
};
var nM = rM;
function oM() {
  return document.body || (process.env.NODE_ENV !== "production" ? se(!1, "document.body is not ready") : se()), document.body;
}
const Tm = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: oM
}, Yx = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Tm)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Tm[r]
    });
  return t;
}, va = (e, t) => e === t.droppable.type, Rm = (e, t) => t.draggables[e.draggable.id], iM = () => {
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
  })), o = Vt((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = Yx(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Su(n)) {
      const c = n.critical;
      if (!va(l, c))
        return t;
      const p = Rm(c, n.dimensions), g = zo(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!va(l, c.critical))
        return t;
      const p = Rm(c.critical, n.dimensions);
      return o(s, u, zx(c.result) === s, zo(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!va(l, c.critical))
        return t;
      const p = zo(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, aM = {
  updateViewportMaxScroll: XR
};
Ix(iM, aM, (e, t, r) => ({
  ...Yx(r),
  ...e,
  ...t
}), {
  context: Bx,
  areStatePropsEqual: kx
})(nM);
var Vm;
(function(e) {
  e.event = "event", e.props = "prop";
})(Vm || (Vm = {}));
var Mm = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Mm(), "" + Mm();
function sM(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fc = { exports: {} }, Ea = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lm;
function cM() {
  if (Lm) return Ea;
  Lm = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Ea.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Ea;
}
var Bm = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fm;
function lM() {
  return Fm || (Fm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Bm.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Bm;
}
process.env.NODE_ENV === "production" ? fc.exports = cM() : fc.exports = lM();
var Cu = fc.exports, xa = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm;
function uM() {
  if (jm) return xa;
  jm = 1;
  var e = _, t = Cu;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return xa.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, xa;
}
var Wm = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gm;
function dM() {
  return Gm || (Gm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Cu, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Wm.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Wm;
}
process.env.NODE_ENV === "production" ? uM() : dM();
function pM(e) {
  e();
}
let Kx = pM;
const fM = (e) => Kx = e, mM = () => Kx, km = Symbol.for("react-redux-context"), zm = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function gM() {
  var e;
  if (!N.createContext) return {};
  const t = (e = zm[km]) != null ? e : zm[km] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const bM = /* @__PURE__ */ gM(), hM = () => {
  throw new Error("uSES not initialized!");
};
function yn() {
  return yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, yn.apply(null, arguments);
}
function Xx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var mc = { exports: {} }, Ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hm;
function yM() {
  if (Hm) return Ie;
  Hm = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return Ie.AsyncMode = l, Ie.ConcurrentMode = u, Ie.ContextConsumer = s, Ie.ContextProvider = a, Ie.Element = t, Ie.ForwardRef = m, Ie.Fragment = o, Ie.Lazy = h, Ie.Memo = g, Ie.Portal = r, Ie.Profiler = i, Ie.StrictMode = n, Ie.Suspense = c, Ie.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
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
    return E(f) === c;
  }, Ie.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, Ie.typeOf = E, Ie;
}
var qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Um;
function vM() {
  return Um || (Um = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    qe.AsyncMode = f, qe.ConcurrentMode = v, qe.ContextConsumer = D, qe.ContextProvider = C, qe.Element = R, qe.ForwardRef = P, qe.Fragment = A, qe.Lazy = I, qe.Memo = T, qe.Portal = F, qe.Profiler = k, qe.StrictMode = V, qe.Suspense = W, qe.isAsyncMode = G, qe.isConcurrentMode = z, qe.isContextConsumer = B, qe.isContextProvider = q, qe.isElement = Y, qe.isForwardRef = K, qe.isFragment = Z, qe.isLazy = te, qe.isMemo = H, qe.isPortal = X, qe.isProfiler = M, qe.isStrictMode = J, qe.isSuspense = be, qe.isValidElementType = E, qe.typeOf = y;
  }()), qe;
}
process.env.NODE_ENV === "production" ? mc.exports = yM() : mc.exports = vM();
var EM = mc.exports, _u = EM, xM = {
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
}, wM = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, SM = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Jx = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Iu = {};
Iu[_u.ForwardRef] = SM;
Iu[_u.Memo] = Jx;
function qm(e) {
  return _u.isMemo(e) ? Jx : Iu[e.$$typeof] || xM;
}
var OM = Object.defineProperty, DM = Object.getOwnPropertyNames, Ym = Object.getOwnPropertySymbols, NM = Object.getOwnPropertyDescriptor, CM = Object.getPrototypeOf, Km = Object.prototype;
function Zx(e, t, r) {
  if (typeof t != "string") {
    if (Km) {
      var o = CM(t);
      o && o !== Km && Zx(e, o, r);
    }
    var n = DM(t);
    Ym && (n = n.concat(Ym(t)));
    for (var i = qm(e), a = qm(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!wM[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = NM(t, l);
        try {
          OM(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var _M = Zx;
const Xm = /* @__PURE__ */ sM(_M);
var gc = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jm;
function IM() {
  if (Jm) return Pe;
  Jm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Pe.ContextConsumer = a, Pe.ContextProvider = i, Pe.Element = e, Pe.ForwardRef = l, Pe.Fragment = r, Pe.Lazy = p, Pe.Memo = c, Pe.Portal = t, Pe.Profiler = n, Pe.StrictMode = o, Pe.Suspense = u, Pe.SuspenseList = m, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(d) {
    return b(d) === a;
  }, Pe.isContextProvider = function(d) {
    return b(d) === i;
  }, Pe.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Pe.isForwardRef = function(d) {
    return b(d) === l;
  }, Pe.isFragment = function(d) {
    return b(d) === r;
  }, Pe.isLazy = function(d) {
    return b(d) === p;
  }, Pe.isMemo = function(d) {
    return b(d) === c;
  }, Pe.isPortal = function(d) {
    return b(d) === t;
  }, Pe.isProfiler = function(d) {
    return b(d) === n;
  }, Pe.isStrictMode = function(d) {
    return b(d) === o;
  }, Pe.isSuspense = function(d) {
    return b(d) === u;
  }, Pe.isSuspenseList = function(d) {
    return b(d) === m;
  }, Pe.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, Pe.typeOf = b, Pe;
}
var Ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zm;
function PM() {
  return Zm || (Zm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    Ye.ContextConsumer = v, Ye.ContextProvider = D, Ye.Element = C, Ye.ForwardRef = R, Ye.Fragment = P, Ye.Lazy = A, Ye.Memo = I, Ye.Portal = T, Ye.Profiler = F, Ye.StrictMode = k, Ye.Suspense = V, Ye.SuspenseList = W, Ye.isAsyncMode = z, Ye.isConcurrentMode = B, Ye.isContextConsumer = q, Ye.isContextProvider = Y, Ye.isElement = K, Ye.isForwardRef = Z, Ye.isFragment = te, Ye.isLazy = H, Ye.isMemo = X, Ye.isPortal = M, Ye.isProfiler = J, Ye.isStrictMode = be, Ye.isSuspense = w, Ye.isSuspenseList = ee, Ye.isValidElementType = y, Ye.typeOf = f;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? gc.exports = IM() : gc.exports = PM();
var Qm = gc.exports;
function Pu(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function wa(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Pu(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function $M(e, t, r) {
  wa(e, "mapStateToProps"), wa(t, "mapDispatchToProps"), wa(r, "mergeProps");
}
const AM = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function TM(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function RM(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Xx(t, AM);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && $M(a, s, l), TM(a, s, l, e, i);
}
function VM(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function MM(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Qx(e, t, r) {
  MM(e) || Pu(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function bc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function eg(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ew(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = eg(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = eg(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Qx(s, o, t), s;
    }, n;
  };
}
function $u(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function LM(e) {
  return e && typeof e == "object" ? bc((t) => (
    // @ts-ignore
    VM(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ew(e, "mapDispatchToProps")
  ) : $u(e, "mapDispatchToProps") : bc((t) => ({
    dispatch: t
  }));
}
function BM(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ew(e, "mapStateToProps")
  ) : $u(e, "mapStateToProps") : bc(() => ({}));
}
function FM(e, t, r) {
  return yn({}, r, e, t);
}
function jM(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Qx(i, r, "mergeProps")), i;
    };
  };
}
function WM(e) {
  return e ? typeof e == "function" ? jM(e) : $u(e, "mergeProps") : () => FM;
}
function GM() {
  const e = mM();
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
const tg = {
  notify() {
  },
  get: () => []
};
function kM(e, t) {
  let r, o = tg, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = GM());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = tg);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const zM = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", hc = zM ? N.useLayoutEffect : N.useEffect;
function rg(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Sa(e, t) {
  if (rg(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !rg(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const HM = ["reactReduxForwardedRef"];
let tw = hM;
const UM = (e) => {
  tw = e;
}, qM = [null, null], YM = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function KM(e, t, r) {
  hc(() => e(...t), r);
}
function XM(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function JM(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function ZM(e, t) {
  return e === t;
}
let ng = !1;
function rw(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = ZM,
  areOwnPropsEqual: i = Sa,
  areStatePropsEqual: a = Sa,
  areMergedPropsEqual: s = Sa,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = bM
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !ng && (ng = !0, Pu('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = BM(e), p = LM(t), g = WM(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Qm.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${YM(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = Xx(f, HM);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Qm.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => RM(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return qM;
        const M = kM(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : yn({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      hc(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? JM(
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
      KM(XM, [z, G, q, C, B, W]);
      let H;
      try {
        H = tw(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      hc(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, yn({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, yn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Xm(f, b);
    }
    return Xm(y, b);
  };
}
UM(Cu.useSyncExternalStore);
fM(pr);
function QM(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function nw(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && QM(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function eL(e, t) {
  return nw(function() {
    return e;
  }, t);
}
var Nt = nw, gt = eL, tL = process.env.NODE_ENV === "production", Oa = "Invariant failed";
function og(e, t) {
  if (tL)
    throw new Error(Oa);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Oa, ": ").concat(r) : Oa;
  throw new Error(o);
}
var cn = function(e) {
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
}, ow = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, ig = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, rL = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Da = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Au = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Da : r, n = e.border, i = n === void 0 ? Da : n, a = e.padding, s = a === void 0 ? Da : a, l = cn(ow(t, o)), u = cn(ig(t, i)), m = cn(ig(u, s));
  return {
    marginBox: l,
    borderBox: cn(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, Qt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? og(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : og()), o;
}, nL = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, oL = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = rL(r, t);
  return Au({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, yc = function(e, t) {
  return t === void 0 && (t = nL()), oL(e, t);
}, iw = function(e, t) {
  var r = {
    top: Qt(t.marginTop),
    right: Qt(t.marginRight),
    bottom: Qt(t.marginBottom),
    left: Qt(t.marginLeft)
  }, o = {
    top: Qt(t.paddingTop),
    right: Qt(t.paddingRight),
    bottom: Qt(t.paddingBottom),
    left: Qt(t.paddingLeft)
  }, n = {
    top: Qt(t.borderTopWidth),
    right: Qt(t.borderRightWidth),
    bottom: Qt(t.borderBottomWidth),
    left: Qt(t.borderLeftWidth)
  };
  return Au({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, aw = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return iw(t, r);
}, ag = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function iL(e, t) {
  return !!(e === t || ag(e) && ag(t));
}
function aL(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!iL(e[r], t[r]))
      return !1;
  return !0;
}
function Mt(e, t) {
  t === void 0 && (t = aL);
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
var sL = function(e) {
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
const cL = process.env.NODE_ENV === "production", lL = /[ \t]{2,}/g, uL = /^[ \t]*/gm, sg = (e) => e.replace(lL, " ").replace(uL, "").trim(), dL = (e) => sg(`
  %c@hello-pangea/dnd

  %c${sg(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), pL = (e) => [dL(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], fL = "__@hello-pangea/dnd-disable-dev-warnings";
function sw(e, t) {
  cL || typeof window < "u" && window[fL] || console[e](...pL(t));
}
const Nr = sw.bind(null, "warn"), vc = sw.bind(null, "error");
function mL() {
}
function gL(e, t) {
  return {
    ...e,
    ...t
  };
}
function bL(e, t, r) {
  const o = t.map((n) => {
    const i = gL(r, n.options);
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
const hL = process.env.NODE_ENV === "production", cg = "Invariant failed";
class co extends Error {
}
co.prototype.toString = function() {
  return this.message;
};
function ce(e, t) {
  throw hL ? new co(cg) : new co(`${cg}: ${t || ""}`);
}
class v7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = mL, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Nr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof co && (r.preventDefault(), process.env.NODE_ENV !== "production" && vc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = bL(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof co) {
      process.env.NODE_ENV !== "production" && vc(t.message), this.setState({});
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
const Jr = {
  x: 0,
  y: 0
}, yL = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), vL = (e, t) => e.x === t.x && e.y === t.y, EL = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), xL = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var wL = (e, t) => {
  const r = cn({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const SL = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), OL = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, DL = (e, t) => t ? SL(e, t.scroll.diff.displacement) : e, NL = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, CL = (e, t) => t && t.shouldClipSubject ? wL(t.pageMarginBox, e) : cn(e);
var _L = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = DL(e.marginBox, o), i = NL(n, r, t), a = CL(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Mt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Mt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const IL = Mt((e) => Object.values(e)), PL = Mt((e) => Object.values(e));
Mt((e, t) => PL(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function $L(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Mt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const AL = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, TL = {
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
Mt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: xL(e.line, r)
  };
});
var Uo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const RL = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), VL = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Tu = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, lo = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, ML = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Lr = `${ML.outOfTheWay}s ${Tu.outOfTheWay}`, qo = {
  fluid: `opacity ${Lr}`,
  snap: `transform ${Lr}, opacity ${Lr}`,
  drop: (e) => {
    const t = `${e}s ${Tu.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Lr}`,
  placeholder: `height ${Lr}, width ${Lr}, margin ${Lr}`
}, lg = (e) => vL(e, Jr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ec = {
  moveTo: lg,
  drop: (e, t) => {
    const r = lg(e);
    if (r)
      return t ? `${r} scale(${lo.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var cw = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = yL({
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
}, LL = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot find document.documentElement") : ce()), e;
}, BL = () => {
  const e = LL();
  return cw({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Mt((e) => IL(e).filter((t) => !(!t.isEnabled || !t.frame)));
const lw = "data-rfd", ug = (() => {
  const e = `${lw}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), dg = {
  contextId: `${lw}-scroll-container-context-id`
}, FL = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var jn = FL;
function jL(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var WL = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function uw(e) {
  return e instanceof WL(e).HTMLElement;
}
function GL(e, t) {
  const r = `[${ug.contextId}="${e}"]`, o = jL(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Nr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(ug.draggableId) === t);
  return n ? uw(n) ? n : (process.env.NODE_ENV !== "production" && Nr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Nr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var dw = _.createContext(null), kL = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot find document.body") : ce()), e;
};
let zL = 0;
const pw = {
  separator: "::"
};
function HL(e, t = pw) {
  return Nt(() => `${e}${t.separator}${zL++}`, [t.separator, e]);
}
function UL(e, t = pw) {
  const r = _.useId();
  return Nt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var fw = "useId" in _ ? UL : HL, Ru = _.createContext(null);
function mw(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Vu(e, t) {
  mw(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        vc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function qL(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function Mu(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const pg = {
  dragging: 5e3,
  dropAnimating: 4500
}, YL = (e, t) => t ? qo.drop(t.duration) : e ? qo.snap : qo.fluid, KL = (e, t) => {
  if (e)
    return t ? lo.opacity.drop : lo.opacity.combining;
}, XL = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function JL(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = XL(e), s = !!n, l = s ? Ec.drop(r, i) : Ec.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: YL(a, n),
    transform: l,
    opacity: KL(i, s),
    zIndex: s ? pg.dropAnimating : pg.dragging,
    pointerEvents: "none"
  };
}
function ZL(e) {
  return {
    transform: Ec.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function QL(e) {
  return e.type === "DRAGGING" ? JL(e) : ZL(e);
}
function eB(e, t, r = Jr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = iw(n, o), a = yc(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function tB(e) {
  const t = fw("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Nt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = gt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot get dimension when no ref is set") : ce()), eB(r, h, g);
  }, [r, n]), m = Nt(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  jn(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), jn(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Lu = _.createContext(null);
function gw(e) {
  e && uw(e) || (process.env.NODE_ENV !== "production" ? ce(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ce());
}
function rB(e, t, r) {
  Vu(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ce(!1, "Draggable requires a draggableId") : ce(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ce(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ce(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ce(!1, `${o(n)} requires an integer index prop`) : ce(!1)), e.mapped.type !== "DRAGGING" && (gw(r()), e.isEnabled && (GL(t, n) || (process.env.NODE_ENV !== "production" ? ce(!1, `${o(n)} Unable to find drag handle`) : ce(!1))));
  });
}
function nB(e) {
  mw(() => {
    const t = L(e);
    Vu(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ce(!1, "Draggable isClone prop value changed during component life") : ce(!1));
    }, [e]);
  });
}
function bi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find required context") : ce()), t;
}
function oB(e) {
  e.preventDefault();
}
const iB = (e) => {
  const t = L(null), r = gt((v = null) => {
    t.current = v;
  }, []), o = gt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = bi(Ru), {
    type: s,
    droppableId: l
  } = bi(Lu), u = Nt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (rB(e, n, o), nB(b), !b) {
    const v = Nt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    tB(v);
  }
  const O = Nt(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: oB
  } : null, [n, i, c, p]), E = gt((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = Nt(() => {
    const v = QL(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = Nt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var aB = iB, bw = (e, t) => e === t, hw = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const sB = (e) => e.combine ? e.combine.draggableId : null, cB = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function lB() {
  const e = Mt((o, n) => ({
    x: o,
    y: n
  })), t = Mt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Mt((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (Mu(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Uo(o.impact), l = cB(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = hw(l), c = sB(l), p = {
        duration: o.dropDuration,
        curve: Tu.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? lo.opacity.drop : null,
        scale: c ? lo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function yw(e = null) {
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
const uB = {
  mapped: {
    type: "SECONDARY",
    offset: Jr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: yw(null)
  }
};
function dB() {
  const e = Mt((i, a) => ({
    x: i,
    y: a
  })), t = Mt(yw), r = Mt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Jr, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = $L(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = EL(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (Mu(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const pB = () => {
  const e = lB(), t = dB();
  return (r, o) => e(r, o) || t(r, o) || uB;
}, fB = {
  dropAnimationFinished: VL
}, mB = rw(pB, fB, null, {
  context: dw,
  areStatePropsEqual: bw
})(aB);
var gB = mB;
function bB(e) {
  return bi(Lu).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(gB, e);
}
const Bu = (e) => (t) => e === t, hB = Bu("scroll"), yB = Bu("auto"), vB = Bu("visible"), fg = (e, t) => t(e.overflowX) || t(e.overflowY), EB = (e, t) => t(e.overflowX) && t(e.overflowY), vw = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return fg(r, hB) || fg(r, yB);
}, xB = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = kL(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ce()), !vw(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return EB(o, vB) || process.env.NODE_ENV !== "production" && Nr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Fu = (e) => e == null ? null : e === document.body ? xB() ? e : null : e === document.documentElement ? null : vw(e) ? e : Fu(e.parentElement);
var wB = (e) => {
  !e || !Fu(e.parentElement) || process.env.NODE_ENV !== "production" && Nr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, xc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ew = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ew(e.parentElement) : !1;
var SB = (e) => {
  const t = Fu(e), r = Ew(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, OB = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = cw({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Jr,
          displacement: Jr
        }
      }
    };
  })(), u = n === "vertical" ? AL : TL, m = _L({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const DB = (e, t) => {
  const r = aw(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = ow({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Au({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var NB = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = DB(e, l), m = yc(u, o), c = (() => {
    if (!l)
      return null;
    const p = aw(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: yc(p, o),
      scroll: xc(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return OB({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const CB = {
  passive: !1
}, _B = {
  passive: !0
};
var mg = (e) => e.shouldPublishImmediately ? CB : _B;
const Ro = (e) => e && e.env.closestScrollable || null;
function IB(e) {
  const t = L(null), r = bi(Ru), o = fw("droppable"), {
    registry: n,
    marshal: i
  } = r, a = qL(e), s = Nt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = Nt(() => Mt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? ce(!1, "Can only update scroll when dragging") : ce());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = gt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Jr : xc(y.env.closestScrollable);
  }, []), c = gt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = Nt(() => sL(c), [c]), g = gt(() => {
    const y = t.current, f = Ro(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find scroll options while scrolling") : ce()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = gt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot collect a droppable while a drag is occurring") : ce());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot collect without a droppable ref") : ce());
    const C = SB(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = NB({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(dg.contextId, r.contextId), A.addEventListener("scroll", g, mg(R.scrollOptions)), process.env.NODE_ENV !== "production" && wB(A)), P;
  }, [r.contextId, s, g, a]), b = gt(() => {
    const y = t.current, f = Ro(y);
    return y && f || (process.env.NODE_ENV !== "production" ? ce(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ce()), xc(f);
  }, []), d = gt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot stop drag when no active drag") : ce());
    const f = Ro(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(dg.contextId), f.removeEventListener("scroll", g, mg(y.scrollOptions)));
  }, [g, p]), x = gt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot scroll when there is no drag") : ce());
    const v = Ro(f);
    v || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot scroll a droppable with no closest scrollable") : ce()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = Nt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = Nt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  jn(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Nr("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), jn(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), jn(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Na() {
}
const PB = {
  width: 0,
  height: 0,
  margin: OL
}, $B = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? PB : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, AB = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = $B({
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
    transition: r !== "none" ? qo.placeholder : null
  };
}, TB = (e) => {
  const t = L(null), r = gt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), Na) : t.current ? Na : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Na, [o, s, r]);
  const u = gt((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = AB({
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
var RB = _.memo(TB);
function Ca(e) {
  return typeof e == "boolean";
}
function _a(e, t) {
  t.forEach((r) => r(e));
}
const VB = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ce(!1, "A Droppable requires a droppableId prop") : ce()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ce(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ce());
}, function({
  props: e
}) {
  Ca(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ce(!1, "isDropDisabled must be a boolean") : ce()), Ca(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ce(!1, "isCombineEnabled must be a boolean") : ce()), Ca(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ce(!1, "ignoreContainerClipping must be a boolean") : ce());
}, function({
  getDroppableRef: e
}) {
  gw(e());
}], MB = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Nr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], LB = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ce(!1, "Must provide a clone render function (renderClone) for virtual lists") : ce());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ce(!1, "Expected virtual list to not have a placeholder") : ce());
}];
function BB(e) {
  Vu(() => {
    _a(e, VB), e.props.mode === "standard" && _a(e, MB), e.props.mode === "virtual" && _a(e, LB);
  });
}
class FB extends _.PureComponent {
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
const jB = (e) => {
  const t = pt(Ru);
  t || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find app context") : ce());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = gt(() => n.current, []), E = gt((I = null) => {
    n.current = I;
  }, []), y = gt(() => i.current, []), f = gt((I = null) => {
    i.current = I;
  }, []);
  BB({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = gt(() => {
    o() && d({
      maxScroll: BL()
    });
  }, [o, d]);
  IB({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = Nt(() => _.createElement(FB, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(RB, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Nt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = Nt(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(bB, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(Lu.Provider, {
    value: P
  }, a(C, h), A());
};
var WB = jB;
function GB() {
  return document.body || (process.env.NODE_ENV !== "production" ? ce(!1, "document.body is not ready") : ce()), document.body;
}
const gg = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: GB
}, xw = (e) => {
  let t = {
    ...e
  }, r;
  for (r in gg)
    e[r] === void 0 && (t = {
      ...t,
      [r]: gg[r]
    });
  return t;
}, Ia = (e, t) => e === t.droppable.type, bg = (e, t) => t.draggables[e.draggable.id], kB = () => {
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
  }, r = Mt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Mt((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = xw(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Mu(n)) {
      const c = n.critical;
      if (!Ia(l, c))
        return t;
      const p = bg(c, n.dimensions), g = Uo(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!Ia(l, c.critical))
        return t;
      const p = bg(c.critical, n.dimensions);
      return o(s, u, hw(c.result) === s, Uo(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!Ia(l, c.critical))
        return t;
      const p = Uo(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, zB = {
  updateViewportMaxScroll: RL
};
rw(kB, zB, (e, t, r) => ({
  ...xw(r),
  ...e,
  ...t
}), {
  context: dw,
  areStatePropsEqual: bw
})(WB);
var hg;
(function(e) {
  e.event = "event", e.props = "prop";
})(hg || (hg = {}));
var yg = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + yg(), "" + yg();
function HB(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wc = { exports: {} }, Pa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg;
function UB() {
  if (vg) return Pa;
  vg = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Pa.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Pa;
}
var Eg = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xg;
function qB() {
  return xg || (xg = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Eg.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Eg;
}
process.env.NODE_ENV === "production" ? wc.exports = UB() : wc.exports = qB();
var ju = wc.exports, $a = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wg;
function YB() {
  if (wg) return $a;
  wg = 1;
  var e = _, t = ju;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return $a.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, $a;
}
var Sg = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Og;
function KB() {
  return Og || (Og = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = ju, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Sg.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Sg;
}
process.env.NODE_ENV === "production" ? YB() : KB();
function XB(e) {
  e();
}
let ww = XB;
const JB = (e) => ww = e, ZB = () => ww, Dg = Symbol.for("react-redux-context"), Ng = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function QB() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Ng[Dg]) != null ? e : Ng[Dg] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const eF = /* @__PURE__ */ QB(), tF = () => {
  throw new Error("uSES not initialized!");
};
function vn() {
  return vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, vn.apply(null, arguments);
}
function Sw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Sc = { exports: {} }, $e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cg;
function rF() {
  if (Cg) return $e;
  Cg = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return $e.AsyncMode = l, $e.ConcurrentMode = u, $e.ContextConsumer = s, $e.ContextProvider = a, $e.Element = t, $e.ForwardRef = m, $e.Fragment = o, $e.Lazy = h, $e.Memo = g, $e.Portal = r, $e.Profiler = i, $e.StrictMode = n, $e.Suspense = c, $e.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
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
    return E(f) === c;
  }, $e.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, $e.typeOf = E, $e;
}
var Ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _g;
function nF() {
  return _g || (_g = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    Ke.AsyncMode = f, Ke.ConcurrentMode = v, Ke.ContextConsumer = D, Ke.ContextProvider = C, Ke.Element = R, Ke.ForwardRef = P, Ke.Fragment = A, Ke.Lazy = I, Ke.Memo = T, Ke.Portal = F, Ke.Profiler = k, Ke.StrictMode = V, Ke.Suspense = W, Ke.isAsyncMode = G, Ke.isConcurrentMode = z, Ke.isContextConsumer = B, Ke.isContextProvider = q, Ke.isElement = Y, Ke.isForwardRef = K, Ke.isFragment = Z, Ke.isLazy = te, Ke.isMemo = H, Ke.isPortal = X, Ke.isProfiler = M, Ke.isStrictMode = J, Ke.isSuspense = be, Ke.isValidElementType = E, Ke.typeOf = y;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Sc.exports = rF() : Sc.exports = nF();
var oF = Sc.exports, Wu = oF, iF = {
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
}, aF = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, sF = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ow = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gu = {};
Gu[Wu.ForwardRef] = sF;
Gu[Wu.Memo] = Ow;
function Ig(e) {
  return Wu.isMemo(e) ? Ow : Gu[e.$$typeof] || iF;
}
var cF = Object.defineProperty, lF = Object.getOwnPropertyNames, Pg = Object.getOwnPropertySymbols, uF = Object.getOwnPropertyDescriptor, dF = Object.getPrototypeOf, $g = Object.prototype;
function Dw(e, t, r) {
  if (typeof t != "string") {
    if ($g) {
      var o = dF(t);
      o && o !== $g && Dw(e, o, r);
    }
    var n = lF(t);
    Pg && (n = n.concat(Pg(t)));
    for (var i = Ig(e), a = Ig(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!aF[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = uF(t, l);
        try {
          cF(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var pF = Dw;
const Ag = /* @__PURE__ */ HB(pF);
var Oc = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tg;
function fF() {
  if (Tg) return Ae;
  Tg = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Ae.ContextConsumer = a, Ae.ContextProvider = i, Ae.Element = e, Ae.ForwardRef = l, Ae.Fragment = r, Ae.Lazy = p, Ae.Memo = c, Ae.Portal = t, Ae.Profiler = n, Ae.StrictMode = o, Ae.Suspense = u, Ae.SuspenseList = m, Ae.isAsyncMode = function() {
    return !1;
  }, Ae.isConcurrentMode = function() {
    return !1;
  }, Ae.isContextConsumer = function(d) {
    return b(d) === a;
  }, Ae.isContextProvider = function(d) {
    return b(d) === i;
  }, Ae.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Ae.isForwardRef = function(d) {
    return b(d) === l;
  }, Ae.isFragment = function(d) {
    return b(d) === r;
  }, Ae.isLazy = function(d) {
    return b(d) === p;
  }, Ae.isMemo = function(d) {
    return b(d) === c;
  }, Ae.isPortal = function(d) {
    return b(d) === t;
  }, Ae.isProfiler = function(d) {
    return b(d) === n;
  }, Ae.isStrictMode = function(d) {
    return b(d) === o;
  }, Ae.isSuspense = function(d) {
    return b(d) === u;
  }, Ae.isSuspenseList = function(d) {
    return b(d) === m;
  }, Ae.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, Ae.typeOf = b, Ae;
}
var Xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rg;
function mF() {
  return Rg || (Rg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    Xe.ContextConsumer = v, Xe.ContextProvider = D, Xe.Element = C, Xe.ForwardRef = R, Xe.Fragment = P, Xe.Lazy = A, Xe.Memo = I, Xe.Portal = T, Xe.Profiler = F, Xe.StrictMode = k, Xe.Suspense = V, Xe.SuspenseList = W, Xe.isAsyncMode = z, Xe.isConcurrentMode = B, Xe.isContextConsumer = q, Xe.isContextProvider = Y, Xe.isElement = K, Xe.isForwardRef = Z, Xe.isFragment = te, Xe.isLazy = H, Xe.isMemo = X, Xe.isPortal = M, Xe.isProfiler = J, Xe.isStrictMode = be, Xe.isSuspense = w, Xe.isSuspenseList = ee, Xe.isValidElementType = y, Xe.typeOf = f;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Oc.exports = fF() : Oc.exports = mF();
var Vg = Oc.exports;
function ku(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Aa(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ku(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function gF(e, t, r) {
  Aa(e, "mapStateToProps"), Aa(t, "mapDispatchToProps"), Aa(r, "mergeProps");
}
const bF = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function hF(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function yF(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Sw(t, bF);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && gF(a, s, l), hF(a, s, l, e, i);
}
function vF(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function EF(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Nw(e, t, r) {
  EF(e) || ku(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Dc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Mg(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Cw(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Mg(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Mg(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Nw(s, o, t), s;
    }, n;
  };
}
function zu(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function xF(e) {
  return e && typeof e == "object" ? Dc((t) => (
    // @ts-ignore
    vF(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Cw(e, "mapDispatchToProps")
  ) : zu(e, "mapDispatchToProps") : Dc((t) => ({
    dispatch: t
  }));
}
function wF(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Cw(e, "mapStateToProps")
  ) : zu(e, "mapStateToProps") : Dc(() => ({}));
}
function SF(e, t, r) {
  return vn({}, r, e, t);
}
function OF(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Nw(i, r, "mergeProps")), i;
    };
  };
}
function DF(e) {
  return e ? typeof e == "function" ? OF(e) : zu(e, "mergeProps") : () => SF;
}
function NF() {
  const e = ZB();
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
const Lg = {
  notify() {
  },
  get: () => []
};
function CF(e, t) {
  let r, o = Lg, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = NF());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Lg);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const _F = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Nc = _F ? N.useLayoutEffect : N.useEffect;
function Bg(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ta(e, t) {
  if (Bg(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Bg(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const IF = ["reactReduxForwardedRef"];
let _w = tF;
const PF = (e) => {
  _w = e;
}, $F = [null, null], AF = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function TF(e, t, r) {
  Nc(() => e(...t), r);
}
function RF(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function VF(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function MF(e, t) {
  return e === t;
}
let Fg = !1;
function Iw(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = MF,
  areOwnPropsEqual: i = Ta,
  areStatePropsEqual: a = Ta,
  areMergedPropsEqual: s = Ta,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = eF
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Fg && (Fg = !0, ku('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = wF(e), p = xF(t), g = DF(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Vg.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${AF(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = Sw(f, IF);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Vg.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => yF(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return $F;
        const M = CF(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : vn({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Nc(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? VF(
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
      TF(RF, [z, G, q, C, B, W]);
      let H;
      try {
        H = _w(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Nc(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, vn({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, vn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Ag(f, b);
    }
    return Ag(y, b);
  };
}
PF(ju.useSyncExternalStore);
JB(pr);
function LF(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Pw(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && LF(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function BF(e, t) {
  return Pw(function() {
    return e;
  }, t);
}
var Ct = Pw, bt = BF, FF = process.env.NODE_ENV === "production", Ra = "Invariant failed";
function jg(e, t) {
  if (FF)
    throw new Error(Ra);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Ra, ": ").concat(r) : Ra;
  throw new Error(o);
}
var ln = function(e) {
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
}, $w = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Wg = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, jF = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Va = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Hu = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Va : r, n = e.border, i = n === void 0 ? Va : n, a = e.padding, s = a === void 0 ? Va : a, l = ln($w(t, o)), u = ln(Wg(t, i)), m = ln(Wg(u, s));
  return {
    marginBox: l,
    borderBox: ln(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, er = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? jg(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : jg()), o;
}, WF = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, GF = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = jF(r, t);
  return Hu({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Cc = function(e, t) {
  return t === void 0 && (t = WF()), GF(e, t);
}, Aw = function(e, t) {
  var r = {
    top: er(t.marginTop),
    right: er(t.marginRight),
    bottom: er(t.marginBottom),
    left: er(t.marginLeft)
  }, o = {
    top: er(t.paddingTop),
    right: er(t.paddingRight),
    bottom: er(t.paddingBottom),
    left: er(t.paddingLeft)
  }, n = {
    top: er(t.borderTopWidth),
    right: er(t.borderRightWidth),
    bottom: er(t.borderBottomWidth),
    left: er(t.borderLeftWidth)
  };
  return Hu({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, Tw = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Aw(t, r);
}, Gg = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function kF(e, t) {
  return !!(e === t || Gg(e) && Gg(t));
}
function zF(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!kF(e[r], t[r]))
      return !1;
  return !0;
}
function Lt(e, t) {
  t === void 0 && (t = zF);
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
var HF = function(e) {
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
const UF = process.env.NODE_ENV === "production", qF = /[ \t]{2,}/g, YF = /^[ \t]*/gm, kg = (e) => e.replace(qF, " ").replace(YF, "").trim(), KF = (e) => kg(`
  %c@hello-pangea/dnd

  %c${kg(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), XF = (e) => [KF(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], JF = "__@hello-pangea/dnd-disable-dev-warnings";
function Rw(e, t) {
  UF || typeof window < "u" && window[JF] || console[e](...XF(t));
}
const Cr = Rw.bind(null, "warn"), _c = Rw.bind(null, "error");
function ZF() {
}
function QF(e, t) {
  return {
    ...e,
    ...t
  };
}
function ej(e, t, r) {
  const o = t.map((n) => {
    const i = QF(r, n.options);
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
const tj = process.env.NODE_ENV === "production", zg = "Invariant failed";
class uo extends Error {
}
uo.prototype.toString = function() {
  return this.message;
};
function le(e, t) {
  throw tj ? new uo(zg) : new uo(`${zg}: ${t || ""}`);
}
class E7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = ZF, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Cr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof uo && (r.preventDefault(), process.env.NODE_ENV !== "production" && _c(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = ej(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof uo) {
      process.env.NODE_ENV !== "production" && _c(t.message), this.setState({});
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
const Zr = {
  x: 0,
  y: 0
}, rj = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), nj = (e, t) => e.x === t.x && e.y === t.y, oj = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), ij = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var aj = (e, t) => {
  const r = ln({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const sj = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), cj = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, lj = (e, t) => t ? sj(e, t.scroll.diff.displacement) : e, uj = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, dj = (e, t) => t && t.shouldClipSubject ? aj(t.pageMarginBox, e) : ln(e);
var pj = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = lj(e.marginBox, o), i = uj(n, r, t), a = dj(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Lt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Lt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const fj = Lt((e) => Object.values(e)), mj = Lt((e) => Object.values(e));
Lt((e, t) => mj(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function gj(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Lt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const bj = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, hj = {
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
Lt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: ij(e.line, r)
  };
});
var Yo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const yj = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), vj = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Uu = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, po = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Ej = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Br = `${Ej.outOfTheWay}s ${Uu.outOfTheWay}`, Ko = {
  fluid: `opacity ${Br}`,
  snap: `transform ${Br}, opacity ${Br}`,
  drop: (e) => {
    const t = `${e}s ${Uu.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Br}`,
  placeholder: `height ${Br}, width ${Br}, margin ${Br}`
}, Hg = (e) => nj(e, Zr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ic = {
  moveTo: Hg,
  drop: (e, t) => {
    const r = Hg(e);
    if (r)
      return t ? `${r} scale(${po.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Vw = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = rj({
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
}, xj = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot find document.documentElement") : le()), e;
}, wj = () => {
  const e = xj();
  return Vw({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Lt((e) => fj(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Mw = "data-rfd", Ug = (() => {
  const e = `${Mw}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), qg = {
  contextId: `${Mw}-scroll-container-context-id`
}, Sj = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var Wn = Sj;
function Oj(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Dj = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Lw(e) {
  return e instanceof Dj(e).HTMLElement;
}
function Nj(e, t) {
  const r = `[${Ug.contextId}="${e}"]`, o = Oj(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Cr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Ug.draggableId) === t);
  return n ? Lw(n) ? n : (process.env.NODE_ENV !== "production" && Cr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Cr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Bw = _.createContext(null), Cj = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot find document.body") : le()), e;
};
let _j = 0;
const Fw = {
  separator: "::"
};
function Ij(e, t = Fw) {
  return Ct(() => `${e}${t.separator}${_j++}`, [t.separator, e]);
}
function Pj(e, t = Fw) {
  const r = _.useId();
  return Ct(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var jw = "useId" in _ ? Pj : Ij, qu = _.createContext(null);
function Ww(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Yu(e, t) {
  Ww(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        _c(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function $j(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function Ku(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Yg = {
  dragging: 5e3,
  dropAnimating: 4500
}, Aj = (e, t) => t ? Ko.drop(t.duration) : e ? Ko.snap : Ko.fluid, Tj = (e, t) => {
  if (e)
    return t ? po.opacity.drop : po.opacity.combining;
}, Rj = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Vj(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = Rj(e), s = !!n, l = s ? Ic.drop(r, i) : Ic.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Aj(a, n),
    transform: l,
    opacity: Tj(i, s),
    zIndex: s ? Yg.dropAnimating : Yg.dragging,
    pointerEvents: "none"
  };
}
function Mj(e) {
  return {
    transform: Ic.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Lj(e) {
  return e.type === "DRAGGING" ? Vj(e) : Mj(e);
}
function Bj(e, t, r = Zr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Aw(n, o), a = Cc(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function Fj(e) {
  const t = jw("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Ct(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = bt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot get dimension when no ref is set") : le()), Bj(r, h, g);
  }, [r, n]), m = Ct(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  Wn(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), Wn(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Xu = _.createContext(null);
function Gw(e) {
  e && Lw(e) || (process.env.NODE_ENV !== "production" ? le(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : le());
}
function jj(e, t, r) {
  Yu(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? le(!1, "Draggable requires a draggableId") : le(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? le(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : le(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? le(!1, `${o(n)} requires an integer index prop`) : le(!1)), e.mapped.type !== "DRAGGING" && (Gw(r()), e.isEnabled && (Nj(t, n) || (process.env.NODE_ENV !== "production" ? le(!1, `${o(n)} Unable to find drag handle`) : le(!1))));
  });
}
function Wj(e) {
  Ww(() => {
    const t = L(e);
    Yu(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? le(!1, "Draggable isClone prop value changed during component life") : le(!1));
    }, [e]);
  });
}
function hi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find required context") : le()), t;
}
function Gj(e) {
  e.preventDefault();
}
const kj = (e) => {
  const t = L(null), r = bt((v = null) => {
    t.current = v;
  }, []), o = bt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = hi(qu), {
    type: s,
    droppableId: l
  } = hi(Xu), u = Ct(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (jj(e, n, o), Wj(b), !b) {
    const v = Ct(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    Fj(v);
  }
  const O = Ct(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: Gj
  } : null, [n, i, c, p]), E = bt((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = Ct(() => {
    const v = Lj(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = Ct(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var zj = kj, kw = (e, t) => e === t, zw = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Hj = (e) => e.combine ? e.combine.draggableId : null, Uj = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function qj() {
  const e = Lt((o, n) => ({
    x: o,
    y: n
  })), t = Lt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Lt((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (Ku(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Yo(o.impact), l = Uj(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = zw(l), c = Hj(l), p = {
        duration: o.dropDuration,
        curve: Uu.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? po.opacity.drop : null,
        scale: c ? po.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function Hw(e = null) {
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
const Yj = {
  mapped: {
    type: "SECONDARY",
    offset: Zr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Hw(null)
  }
};
function Kj() {
  const e = Lt((i, a) => ({
    x: i,
    y: a
  })), t = Lt(Hw), r = Lt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Zr, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = gj(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = oj(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (Ku(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const Xj = () => {
  const e = qj(), t = Kj();
  return (r, o) => e(r, o) || t(r, o) || Yj;
}, Jj = {
  dropAnimationFinished: vj
}, Zj = Iw(Xj, Jj, null, {
  context: Bw,
  areStatePropsEqual: kw
})(zj);
var Qj = Zj;
function eW(e) {
  return hi(Xu).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(Qj, e);
}
const Ju = (e) => (t) => e === t, tW = Ju("scroll"), rW = Ju("auto"), nW = Ju("visible"), Kg = (e, t) => t(e.overflowX) || t(e.overflowY), oW = (e, t) => t(e.overflowX) && t(e.overflowY), Uw = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Kg(r, tW) || Kg(r, rW);
}, iW = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Cj(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, le()), !Uw(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return oW(o, nW) || process.env.NODE_ENV !== "production" && Cr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Zu = (e) => e == null ? null : e === document.body ? iW() ? e : null : e === document.documentElement ? null : Uw(e) ? e : Zu(e.parentElement);
var aW = (e) => {
  !e || !Zu(e.parentElement) || process.env.NODE_ENV !== "production" && Cr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Pc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const qw = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : qw(e.parentElement) : !1;
var sW = (e) => {
  const t = Zu(e), r = qw(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, cW = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = Vw({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Zr,
          displacement: Zr
        }
      }
    };
  })(), u = n === "vertical" ? bj : hj, m = pj({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const lW = (e, t) => {
  const r = Tw(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = $w({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Hu({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var uW = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = lW(e, l), m = Cc(u, o), c = (() => {
    if (!l)
      return null;
    const p = Tw(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: Cc(p, o),
      scroll: Pc(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return cW({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const dW = {
  passive: !1
}, pW = {
  passive: !0
};
var Xg = (e) => e.shouldPublishImmediately ? dW : pW;
const Vo = (e) => e && e.env.closestScrollable || null;
function fW(e) {
  const t = L(null), r = hi(qu), o = jw("droppable"), {
    registry: n,
    marshal: i
  } = r, a = $j(e), s = Ct(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = Ct(() => Lt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? le(!1, "Can only update scroll when dragging") : le());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = bt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Zr : Pc(y.env.closestScrollable);
  }, []), c = bt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = Ct(() => HF(c), [c]), g = bt(() => {
    const y = t.current, f = Vo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find scroll options while scrolling") : le()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = bt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? le(!1, "Cannot collect a droppable while a drag is occurring") : le());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot collect without a droppable ref") : le());
    const C = sW(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = uW({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(qg.contextId, r.contextId), A.addEventListener("scroll", g, Xg(R.scrollOptions)), process.env.NODE_ENV !== "production" && aW(A)), P;
  }, [r.contextId, s, g, a]), b = bt(() => {
    const y = t.current, f = Vo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? le(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : le()), Pc(f);
  }, []), d = bt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot stop drag when no active drag") : le());
    const f = Vo(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(qg.contextId), f.removeEventListener("scroll", g, Xg(y.scrollOptions)));
  }, [g, p]), x = bt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot scroll when there is no drag") : le());
    const v = Vo(f);
    v || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot scroll a droppable with no closest scrollable") : le()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = Ct(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = Ct(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  Wn(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Cr("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), Wn(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Wn(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ma() {
}
const mW = {
  width: 0,
  height: 0,
  margin: cj
}, gW = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? mW : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, bW = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = gW({
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
    transition: r !== "none" ? Ko.placeholder : null
  };
}, hW = (e) => {
  const t = L(null), r = bt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), Ma) : t.current ? Ma : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Ma, [o, s, r]);
  const u = bt((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = bW({
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
var yW = _.memo(hW);
function La(e) {
  return typeof e == "boolean";
}
function Ba(e, t) {
  t.forEach((r) => r(e));
}
const vW = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? le(!1, "A Droppable requires a droppableId prop") : le()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? le(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : le());
}, function({
  props: e
}) {
  La(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? le(!1, "isDropDisabled must be a boolean") : le()), La(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? le(!1, "isCombineEnabled must be a boolean") : le()), La(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? le(!1, "ignoreContainerClipping must be a boolean") : le());
}, function({
  getDroppableRef: e
}) {
  Gw(e());
}], EW = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Cr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], xW = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? le(!1, "Must provide a clone render function (renderClone) for virtual lists") : le());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? le(!1, "Expected virtual list to not have a placeholder") : le());
}];
function wW(e) {
  Yu(() => {
    Ba(e, vW), e.props.mode === "standard" && Ba(e, EW), e.props.mode === "virtual" && Ba(e, xW);
  });
}
class SW extends _.PureComponent {
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
const OW = (e) => {
  const t = pt(qu);
  t || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find app context") : le());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = bt(() => n.current, []), E = bt((I = null) => {
    n.current = I;
  }, []), y = bt(() => i.current, []), f = bt((I = null) => {
    i.current = I;
  }, []);
  wW({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = bt(() => {
    o() && d({
      maxScroll: wj()
    });
  }, [o, d]);
  fW({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = Ct(() => _.createElement(SW, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(yW, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Ct(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = Ct(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(eW, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(Xu.Provider, {
    value: P
  }, a(C, h), A());
};
var DW = OW;
function NW() {
  return document.body || (process.env.NODE_ENV !== "production" ? le(!1, "document.body is not ready") : le()), document.body;
}
const Jg = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: NW
}, Yw = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Jg)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Jg[r]
    });
  return t;
}, Fa = (e, t) => e === t.droppable.type, Zg = (e, t) => t.draggables[e.draggable.id], CW = () => {
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
  }, r = Lt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Lt((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = Yw(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Ku(n)) {
      const c = n.critical;
      if (!Fa(l, c))
        return t;
      const p = Zg(c, n.dimensions), g = Yo(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!Fa(l, c.critical))
        return t;
      const p = Zg(c.critical, n.dimensions);
      return o(s, u, zw(c.result) === s, Yo(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!Fa(l, c.critical))
        return t;
      const p = Yo(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, _W = {
  updateViewportMaxScroll: yj
};
Iw(CW, _W, (e, t, r) => ({
  ...Yw(r),
  ...e,
  ...t
}), {
  context: Bw,
  areStatePropsEqual: kw
})(DW);
var Qg;
(function(e) {
  e.event = "event", e.props = "prop";
})(Qg || (Qg = {}));
var eb = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + eb(), "" + eb();
function IW(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $c = { exports: {} }, ja = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tb;
function PW() {
  if (tb) return ja;
  tb = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ja.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, ja;
}
var rb = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nb;
function $W() {
  return nb || (nb = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    rb.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), rb;
}
process.env.NODE_ENV === "production" ? $c.exports = PW() : $c.exports = $W();
var Qu = $c.exports, Wa = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ob;
function AW() {
  if (ob) return Wa;
  ob = 1;
  var e = _, t = Qu;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Wa.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, Wa;
}
var ib = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ab;
function TW() {
  return ab || (ab = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Qu, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    ib.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ib;
}
process.env.NODE_ENV === "production" ? AW() : TW();
function RW(e) {
  e();
}
let Kw = RW;
const VW = (e) => Kw = e, MW = () => Kw, sb = Symbol.for("react-redux-context"), cb = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function LW() {
  var e;
  if (!N.createContext) return {};
  const t = (e = cb[sb]) != null ? e : cb[sb] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const BW = /* @__PURE__ */ LW(), FW = () => {
  throw new Error("uSES not initialized!");
};
function En() {
  return En = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, En.apply(null, arguments);
}
function Xw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Ac = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lb;
function jW() {
  if (lb) return Te;
  lb = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return Te.AsyncMode = l, Te.ConcurrentMode = u, Te.ContextConsumer = s, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = m, Te.Fragment = o, Te.Lazy = h, Te.Memo = g, Te.Portal = r, Te.Profiler = i, Te.StrictMode = n, Te.Suspense = c, Te.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
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
    return E(f) === c;
  }, Te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, Te.typeOf = E, Te;
}
var Je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ub;
function WW() {
  return ub || (ub = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    Je.AsyncMode = f, Je.ConcurrentMode = v, Je.ContextConsumer = D, Je.ContextProvider = C, Je.Element = R, Je.ForwardRef = P, Je.Fragment = A, Je.Lazy = I, Je.Memo = T, Je.Portal = F, Je.Profiler = k, Je.StrictMode = V, Je.Suspense = W, Je.isAsyncMode = G, Je.isConcurrentMode = z, Je.isContextConsumer = B, Je.isContextProvider = q, Je.isElement = Y, Je.isForwardRef = K, Je.isFragment = Z, Je.isLazy = te, Je.isMemo = H, Je.isPortal = X, Je.isProfiler = M, Je.isStrictMode = J, Je.isSuspense = be, Je.isValidElementType = E, Je.typeOf = y;
  }()), Je;
}
process.env.NODE_ENV === "production" ? Ac.exports = jW() : Ac.exports = WW();
var GW = Ac.exports, ed = GW, kW = {
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
}, zW = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, HW = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Jw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, td = {};
td[ed.ForwardRef] = HW;
td[ed.Memo] = Jw;
function db(e) {
  return ed.isMemo(e) ? Jw : td[e.$$typeof] || kW;
}
var UW = Object.defineProperty, qW = Object.getOwnPropertyNames, pb = Object.getOwnPropertySymbols, YW = Object.getOwnPropertyDescriptor, KW = Object.getPrototypeOf, fb = Object.prototype;
function Zw(e, t, r) {
  if (typeof t != "string") {
    if (fb) {
      var o = KW(t);
      o && o !== fb && Zw(e, o, r);
    }
    var n = qW(t);
    pb && (n = n.concat(pb(t)));
    for (var i = db(e), a = db(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!zW[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = YW(t, l);
        try {
          UW(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var XW = Zw;
const mb = /* @__PURE__ */ IW(XW);
var Tc = { exports: {} }, Re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gb;
function JW() {
  if (gb) return Re;
  gb = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Re.ContextConsumer = a, Re.ContextProvider = i, Re.Element = e, Re.ForwardRef = l, Re.Fragment = r, Re.Lazy = p, Re.Memo = c, Re.Portal = t, Re.Profiler = n, Re.StrictMode = o, Re.Suspense = u, Re.SuspenseList = m, Re.isAsyncMode = function() {
    return !1;
  }, Re.isConcurrentMode = function() {
    return !1;
  }, Re.isContextConsumer = function(d) {
    return b(d) === a;
  }, Re.isContextProvider = function(d) {
    return b(d) === i;
  }, Re.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Re.isForwardRef = function(d) {
    return b(d) === l;
  }, Re.isFragment = function(d) {
    return b(d) === r;
  }, Re.isLazy = function(d) {
    return b(d) === p;
  }, Re.isMemo = function(d) {
    return b(d) === c;
  }, Re.isPortal = function(d) {
    return b(d) === t;
  }, Re.isProfiler = function(d) {
    return b(d) === n;
  }, Re.isStrictMode = function(d) {
    return b(d) === o;
  }, Re.isSuspense = function(d) {
    return b(d) === u;
  }, Re.isSuspenseList = function(d) {
    return b(d) === m;
  }, Re.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, Re.typeOf = b, Re;
}
var Ze = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bb;
function ZW() {
  return bb || (bb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    Ze.ContextConsumer = v, Ze.ContextProvider = D, Ze.Element = C, Ze.ForwardRef = R, Ze.Fragment = P, Ze.Lazy = A, Ze.Memo = I, Ze.Portal = T, Ze.Profiler = F, Ze.StrictMode = k, Ze.Suspense = V, Ze.SuspenseList = W, Ze.isAsyncMode = z, Ze.isConcurrentMode = B, Ze.isContextConsumer = q, Ze.isContextProvider = Y, Ze.isElement = K, Ze.isForwardRef = Z, Ze.isFragment = te, Ze.isLazy = H, Ze.isMemo = X, Ze.isPortal = M, Ze.isProfiler = J, Ze.isStrictMode = be, Ze.isSuspense = w, Ze.isSuspenseList = ee, Ze.isValidElementType = y, Ze.typeOf = f;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? Tc.exports = JW() : Tc.exports = ZW();
var hb = Tc.exports;
function rd(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ga(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || rd(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function QW(e, t, r) {
  Ga(e, "mapStateToProps"), Ga(t, "mapDispatchToProps"), Ga(r, "mergeProps");
}
const eG = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function tG(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function rG(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Xw(t, eG);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && QW(a, s, l), tG(a, s, l, e, i);
}
function nG(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function oG(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Qw(e, t, r) {
  oG(e) || rd(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Rc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function yb(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function eS(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = yb(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = yb(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Qw(s, o, t), s;
    }, n;
  };
}
function nd(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function iG(e) {
  return e && typeof e == "object" ? Rc((t) => (
    // @ts-ignore
    nG(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    eS(e, "mapDispatchToProps")
  ) : nd(e, "mapDispatchToProps") : Rc((t) => ({
    dispatch: t
  }));
}
function aG(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    eS(e, "mapStateToProps")
  ) : nd(e, "mapStateToProps") : Rc(() => ({}));
}
function sG(e, t, r) {
  return En({}, r, e, t);
}
function cG(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Qw(i, r, "mergeProps")), i;
    };
  };
}
function lG(e) {
  return e ? typeof e == "function" ? cG(e) : nd(e, "mergeProps") : () => sG;
}
function uG() {
  const e = MW();
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
const vb = {
  notify() {
  },
  get: () => []
};
function dG(e, t) {
  let r, o = vb, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = uG());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = vb);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const pG = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vc = pG ? N.useLayoutEffect : N.useEffect;
function Eb(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ka(e, t) {
  if (Eb(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Eb(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const fG = ["reactReduxForwardedRef"];
let tS = FW;
const mG = (e) => {
  tS = e;
}, gG = [null, null], bG = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function hG(e, t, r) {
  Vc(() => e(...t), r);
}
function yG(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function vG(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function EG(e, t) {
  return e === t;
}
let xb = !1;
function rS(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = EG,
  areOwnPropsEqual: i = ka,
  areStatePropsEqual: a = ka,
  areMergedPropsEqual: s = ka,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = BW
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !xb && (xb = !0, rd('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = aG(e), p = iG(t), g = lG(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !hb.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${bG(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = Xw(f, fG);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      hb.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => rG(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return gG;
        const M = dG(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : En({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Vc(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? vG(
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
      hG(yG, [z, G, q, C, B, W]);
      let H;
      try {
        H = tS(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Vc(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, En({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, En({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, mb(f, b);
    }
    return mb(y, b);
  };
}
mG(Qu.useSyncExternalStore);
VW(pr);
function xG(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function nS(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && xG(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function wG(e, t) {
  return nS(function() {
    return e;
  }, t);
}
var _t = nS, ht = wG, SG = process.env.NODE_ENV === "production", za = "Invariant failed";
function wb(e, t) {
  if (SG)
    throw new Error(za);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(za, ": ").concat(r) : za;
  throw new Error(o);
}
var un = function(e) {
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
}, oS = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Sb = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, OG = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Ha = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, od = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Ha : r, n = e.border, i = n === void 0 ? Ha : n, a = e.padding, s = a === void 0 ? Ha : a, l = un(oS(t, o)), u = un(Sb(t, i)), m = un(Sb(u, s));
  return {
    marginBox: l,
    borderBox: un(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, tr = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? wb(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : wb()), o;
}, DG = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, NG = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = OG(r, t);
  return od({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Mc = function(e, t) {
  return t === void 0 && (t = DG()), NG(e, t);
}, iS = function(e, t) {
  var r = {
    top: tr(t.marginTop),
    right: tr(t.marginRight),
    bottom: tr(t.marginBottom),
    left: tr(t.marginLeft)
  }, o = {
    top: tr(t.paddingTop),
    right: tr(t.paddingRight),
    bottom: tr(t.paddingBottom),
    left: tr(t.paddingLeft)
  }, n = {
    top: tr(t.borderTopWidth),
    right: tr(t.borderRightWidth),
    bottom: tr(t.borderBottomWidth),
    left: tr(t.borderLeftWidth)
  };
  return od({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, aS = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return iS(t, r);
}, Ob = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function CG(e, t) {
  return !!(e === t || Ob(e) && Ob(t));
}
function _G(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!CG(e[r], t[r]))
      return !1;
  return !0;
}
function Bt(e, t) {
  t === void 0 && (t = _G);
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
var IG = function(e) {
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
const PG = process.env.NODE_ENV === "production", $G = /[ \t]{2,}/g, AG = /^[ \t]*/gm, Db = (e) => e.replace($G, " ").replace(AG, "").trim(), TG = (e) => Db(`
  %c@hello-pangea/dnd

  %c${Db(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), RG = (e) => [TG(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], VG = "__@hello-pangea/dnd-disable-dev-warnings";
function sS(e, t) {
  PG || typeof window < "u" && window[VG] || console[e](...RG(t));
}
const _r = sS.bind(null, "warn"), Lc = sS.bind(null, "error");
function MG() {
}
function LG(e, t) {
  return {
    ...e,
    ...t
  };
}
function BG(e, t, r) {
  const o = t.map((n) => {
    const i = LG(r, n.options);
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
const FG = process.env.NODE_ENV === "production", Nb = "Invariant failed";
class fo extends Error {
}
fo.prototype.toString = function() {
  return this.message;
};
function ue(e, t) {
  throw FG ? new fo(Nb) : new fo(`${Nb}: ${t || ""}`);
}
class x7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = MG, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && _r(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof fo && (r.preventDefault(), process.env.NODE_ENV !== "production" && Lc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = BG(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof fo) {
      process.env.NODE_ENV !== "production" && Lc(t.message), this.setState({});
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
const Qr = {
  x: 0,
  y: 0
}, jG = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), WG = (e, t) => e.x === t.x && e.y === t.y, GG = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), kG = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var zG = (e, t) => {
  const r = un({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const HG = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), UG = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, qG = (e, t) => t ? HG(e, t.scroll.diff.displacement) : e, YG = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, KG = (e, t) => t && t.shouldClipSubject ? zG(t.pageMarginBox, e) : un(e);
var XG = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = qG(e.marginBox, o), i = YG(n, r, t), a = KG(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Bt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Bt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const JG = Bt((e) => Object.values(e)), ZG = Bt((e) => Object.values(e));
Bt((e, t) => ZG(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function QG(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Bt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const ek = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, tk = {
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
Bt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: kG(e.line, r)
  };
});
var Xo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const rk = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), nk = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), id = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, mo = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, ok = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Fr = `${ok.outOfTheWay}s ${id.outOfTheWay}`, Jo = {
  fluid: `opacity ${Fr}`,
  snap: `transform ${Fr}, opacity ${Fr}`,
  drop: (e) => {
    const t = `${e}s ${id.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Fr}`,
  placeholder: `height ${Fr}, width ${Fr}, margin ${Fr}`
}, Cb = (e) => WG(e, Qr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Bc = {
  moveTo: Cb,
  drop: (e, t) => {
    const r = Cb(e);
    if (r)
      return t ? `${r} scale(${mo.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var cS = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = jG({
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
}, ik = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot find document.documentElement") : ue()), e;
}, ak = () => {
  const e = ik();
  return cS({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Bt((e) => JG(e).filter((t) => !(!t.isEnabled || !t.frame)));
const lS = "data-rfd", _b = (() => {
  const e = `${lS}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ib = {
  contextId: `${lS}-scroll-container-context-id`
}, sk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var Gn = sk;
function ck(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var lk = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function uS(e) {
  return e instanceof lk(e).HTMLElement;
}
function uk(e, t) {
  const r = `[${_b.contextId}="${e}"]`, o = ck(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && _r(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(_b.draggableId) === t);
  return n ? uS(n) ? n : (process.env.NODE_ENV !== "production" && _r("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && _r(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var dS = _.createContext(null), dk = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot find document.body") : ue()), e;
};
let pk = 0;
const pS = {
  separator: "::"
};
function fk(e, t = pS) {
  return _t(() => `${e}${t.separator}${pk++}`, [t.separator, e]);
}
function mk(e, t = pS) {
  const r = _.useId();
  return _t(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var fS = "useId" in _ ? mk : fk, ad = _.createContext(null);
function mS(e) {
  process.env.NODE_ENV !== "production" && e();
}
function sd(e, t) {
  mS(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        Lc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function gk(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function cd(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Pb = {
  dragging: 5e3,
  dropAnimating: 4500
}, bk = (e, t) => t ? Jo.drop(t.duration) : e ? Jo.snap : Jo.fluid, hk = (e, t) => {
  if (e)
    return t ? mo.opacity.drop : mo.opacity.combining;
}, yk = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function vk(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = yk(e), s = !!n, l = s ? Bc.drop(r, i) : Bc.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: bk(a, n),
    transform: l,
    opacity: hk(i, s),
    zIndex: s ? Pb.dropAnimating : Pb.dragging,
    pointerEvents: "none"
  };
}
function Ek(e) {
  return {
    transform: Bc.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function xk(e) {
  return e.type === "DRAGGING" ? vk(e) : Ek(e);
}
function wk(e, t, r = Qr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = iS(n, o), a = Mc(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function Sk(e) {
  const t = fS("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = _t(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ht((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot get dimension when no ref is set") : ue()), wk(r, h, g);
  }, [r, n]), m = _t(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  Gn(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), Gn(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var ld = _.createContext(null);
function gS(e) {
  e && uS(e) || (process.env.NODE_ENV !== "production" ? ue(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ue());
}
function Ok(e, t, r) {
  sd(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ue(!1, "Draggable requires a draggableId") : ue(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ue(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ue(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ue(!1, `${o(n)} requires an integer index prop`) : ue(!1)), e.mapped.type !== "DRAGGING" && (gS(r()), e.isEnabled && (uk(t, n) || (process.env.NODE_ENV !== "production" ? ue(!1, `${o(n)} Unable to find drag handle`) : ue(!1))));
  });
}
function Dk(e) {
  mS(() => {
    const t = L(e);
    sd(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ue(!1, "Draggable isClone prop value changed during component life") : ue(!1));
    }, [e]);
  });
}
function yi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find required context") : ue()), t;
}
function Nk(e) {
  e.preventDefault();
}
const Ck = (e) => {
  const t = L(null), r = ht((v = null) => {
    t.current = v;
  }, []), o = ht(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = yi(ad), {
    type: s,
    droppableId: l
  } = yi(ld), u = _t(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (Ok(e, n, o), Dk(b), !b) {
    const v = _t(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    Sk(v);
  }
  const O = _t(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: Nk
  } : null, [n, i, c, p]), E = ht((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = _t(() => {
    const v = xk(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = _t(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var _k = Ck, bS = (e, t) => e === t, hS = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Ik = (e) => e.combine ? e.combine.draggableId : null, Pk = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function $k() {
  const e = Bt((o, n) => ({
    x: o,
    y: n
  })), t = Bt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Bt((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (cd(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Xo(o.impact), l = Pk(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = hS(l), c = Ik(l), p = {
        duration: o.dropDuration,
        curve: id.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? mo.opacity.drop : null,
        scale: c ? mo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function yS(e = null) {
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
const Ak = {
  mapped: {
    type: "SECONDARY",
    offset: Qr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: yS(null)
  }
};
function Tk() {
  const e = Bt((i, a) => ({
    x: i,
    y: a
  })), t = Bt(yS), r = Bt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Qr, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = QG(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = GG(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (cd(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const Rk = () => {
  const e = $k(), t = Tk();
  return (r, o) => e(r, o) || t(r, o) || Ak;
}, Vk = {
  dropAnimationFinished: nk
}, Mk = rS(Rk, Vk, null, {
  context: dS,
  areStatePropsEqual: bS
})(_k);
var Lk = Mk;
function Bk(e) {
  return yi(ld).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(Lk, e);
}
const ud = (e) => (t) => e === t, Fk = ud("scroll"), jk = ud("auto"), Wk = ud("visible"), $b = (e, t) => t(e.overflowX) || t(e.overflowY), Gk = (e, t) => t(e.overflowX) && t(e.overflowY), vS = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return $b(r, Fk) || $b(r, jk);
}, kk = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = dk(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ue()), !vS(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Gk(o, Wk) || process.env.NODE_ENV !== "production" && _r(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, dd = (e) => e == null ? null : e === document.body ? kk() ? e : null : e === document.documentElement ? null : vS(e) ? e : dd(e.parentElement);
var zk = (e) => {
  !e || !dd(e.parentElement) || process.env.NODE_ENV !== "production" && _r(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Fc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ES = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ES(e.parentElement) : !1;
var Hk = (e) => {
  const t = dd(e), r = ES(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Uk = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = cS({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Qr,
          displacement: Qr
        }
      }
    };
  })(), u = n === "vertical" ? ek : tk, m = XG({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const qk = (e, t) => {
  const r = aS(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = oS({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return od({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Yk = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = qk(e, l), m = Mc(u, o), c = (() => {
    if (!l)
      return null;
    const p = aS(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: Mc(p, o),
      scroll: Fc(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return Uk({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const Kk = {
  passive: !1
}, Xk = {
  passive: !0
};
var Ab = (e) => e.shouldPublishImmediately ? Kk : Xk;
const Mo = (e) => e && e.env.closestScrollable || null;
function Jk(e) {
  const t = L(null), r = yi(ad), o = fS("droppable"), {
    registry: n,
    marshal: i
  } = r, a = gk(e), s = _t(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = _t(() => Bt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? ue(!1, "Can only update scroll when dragging") : ue());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = ht(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Qr : Fc(y.env.closestScrollable);
  }, []), c = ht(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = _t(() => IG(c), [c]), g = ht(() => {
    const y = t.current, f = Mo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find scroll options while scrolling") : ue()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = ht((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot collect a droppable while a drag is occurring") : ue());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot collect without a droppable ref") : ue());
    const C = Hk(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = Yk({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Ib.contextId, r.contextId), A.addEventListener("scroll", g, Ab(R.scrollOptions)), process.env.NODE_ENV !== "production" && zk(A)), P;
  }, [r.contextId, s, g, a]), b = ht(() => {
    const y = t.current, f = Mo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? ue(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ue()), Fc(f);
  }, []), d = ht(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot stop drag when no active drag") : ue());
    const f = Mo(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(Ib.contextId), f.removeEventListener("scroll", g, Ab(y.scrollOptions)));
  }, [g, p]), x = ht((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot scroll when there is no drag") : ue());
    const v = Mo(f);
    v || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot scroll a droppable with no closest scrollable") : ue()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = _t(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = _t(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  Gn(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && _r("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), Gn(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Gn(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ua() {
}
const Zk = {
  width: 0,
  height: 0,
  margin: UG
}, Qk = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Zk : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, ez = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = Qk({
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
    transition: r !== "none" ? Jo.placeholder : null
  };
}, tz = (e) => {
  const t = L(null), r = ht(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), Ua) : t.current ? Ua : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Ua, [o, s, r]);
  const u = ht((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = ez({
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
var rz = _.memo(tz);
function qa(e) {
  return typeof e == "boolean";
}
function Ya(e, t) {
  t.forEach((r) => r(e));
}
const nz = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ue(!1, "A Droppable requires a droppableId prop") : ue()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ue(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ue());
}, function({
  props: e
}) {
  qa(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ue(!1, "isDropDisabled must be a boolean") : ue()), qa(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ue(!1, "isCombineEnabled must be a boolean") : ue()), qa(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ue(!1, "ignoreContainerClipping must be a boolean") : ue());
}, function({
  getDroppableRef: e
}) {
  gS(e());
}], oz = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && _r(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], iz = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ue(!1, "Must provide a clone render function (renderClone) for virtual lists") : ue());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ue(!1, "Expected virtual list to not have a placeholder") : ue());
}];
function az(e) {
  sd(() => {
    Ya(e, nz), e.props.mode === "standard" && Ya(e, oz), e.props.mode === "virtual" && Ya(e, iz);
  });
}
class sz extends _.PureComponent {
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
const cz = (e) => {
  const t = pt(ad);
  t || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find app context") : ue());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = ht(() => n.current, []), E = ht((I = null) => {
    n.current = I;
  }, []), y = ht(() => i.current, []), f = ht((I = null) => {
    i.current = I;
  }, []);
  az({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = ht(() => {
    o() && d({
      maxScroll: ak()
    });
  }, [o, d]);
  Jk({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = _t(() => _.createElement(sz, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(rz, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = _t(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = _t(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(Bk, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(ld.Provider, {
    value: P
  }, a(C, h), A());
};
var lz = cz;
function uz() {
  return document.body || (process.env.NODE_ENV !== "production" ? ue(!1, "document.body is not ready") : ue()), document.body;
}
const Tb = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: uz
}, xS = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Tb)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Tb[r]
    });
  return t;
}, Ka = (e, t) => e === t.droppable.type, Rb = (e, t) => t.draggables[e.draggable.id], dz = () => {
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
  }, r = Bt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Bt((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = xS(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (cd(n)) {
      const c = n.critical;
      if (!Ka(l, c))
        return t;
      const p = Rb(c, n.dimensions), g = Xo(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!Ka(l, c.critical))
        return t;
      const p = Rb(c.critical, n.dimensions);
      return o(s, u, hS(c.result) === s, Xo(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!Ka(l, c.critical))
        return t;
      const p = Xo(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, pz = {
  updateViewportMaxScroll: rk
};
rS(dz, pz, (e, t, r) => ({
  ...xS(r),
  ...e,
  ...t
}), {
  context: dS,
  areStatePropsEqual: bS
})(lz);
var Vb;
(function(e) {
  e.event = "event", e.props = "prop";
})(Vb || (Vb = {}));
var Mb = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Mb(), "" + Mb();
function fz(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jc = { exports: {} }, Xa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lb;
function mz() {
  if (Lb) return Xa;
  Lb = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Xa.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Xa;
}
var Bb = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fb;
function gz() {
  return Fb || (Fb = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Bb.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Bb;
}
process.env.NODE_ENV === "production" ? jc.exports = mz() : jc.exports = gz();
var pd = jc.exports, Ja = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jb;
function bz() {
  if (jb) return Ja;
  jb = 1;
  var e = _, t = pd;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Ja.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, Ja;
}
var Wb = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gb;
function hz() {
  return Gb || (Gb = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = pd, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Wb.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Wb;
}
process.env.NODE_ENV === "production" ? bz() : hz();
function yz(e) {
  e();
}
let wS = yz;
const vz = (e) => wS = e, Ez = () => wS, kb = Symbol.for("react-redux-context"), zb = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function xz() {
  var e;
  if (!N.createContext) return {};
  const t = (e = zb[kb]) != null ? e : zb[kb] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const wz = /* @__PURE__ */ xz(), Sz = () => {
  throw new Error("uSES not initialized!");
};
function xn() {
  return xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, xn.apply(null, arguments);
}
function SS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Wc = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb;
function Oz() {
  if (Hb) return Ve;
  Hb = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return Ve.AsyncMode = l, Ve.ConcurrentMode = u, Ve.ContextConsumer = s, Ve.ContextProvider = a, Ve.Element = t, Ve.ForwardRef = m, Ve.Fragment = o, Ve.Lazy = h, Ve.Memo = g, Ve.Portal = r, Ve.Profiler = i, Ve.StrictMode = n, Ve.Suspense = c, Ve.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
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
    return E(f) === c;
  }, Ve.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, Ve.typeOf = E, Ve;
}
var Qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function Dz() {
  return Ub || (Ub = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    Qe.AsyncMode = f, Qe.ConcurrentMode = v, Qe.ContextConsumer = D, Qe.ContextProvider = C, Qe.Element = R, Qe.ForwardRef = P, Qe.Fragment = A, Qe.Lazy = I, Qe.Memo = T, Qe.Portal = F, Qe.Profiler = k, Qe.StrictMode = V, Qe.Suspense = W, Qe.isAsyncMode = G, Qe.isConcurrentMode = z, Qe.isContextConsumer = B, Qe.isContextProvider = q, Qe.isElement = Y, Qe.isForwardRef = K, Qe.isFragment = Z, Qe.isLazy = te, Qe.isMemo = H, Qe.isPortal = X, Qe.isProfiler = M, Qe.isStrictMode = J, Qe.isSuspense = be, Qe.isValidElementType = E, Qe.typeOf = y;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? Wc.exports = Oz() : Wc.exports = Dz();
var Nz = Wc.exports, fd = Nz, Cz = {
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
}, _z = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Iz = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, OS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, md = {};
md[fd.ForwardRef] = Iz;
md[fd.Memo] = OS;
function qb(e) {
  return fd.isMemo(e) ? OS : md[e.$$typeof] || Cz;
}
var Pz = Object.defineProperty, $z = Object.getOwnPropertyNames, Yb = Object.getOwnPropertySymbols, Az = Object.getOwnPropertyDescriptor, Tz = Object.getPrototypeOf, Kb = Object.prototype;
function DS(e, t, r) {
  if (typeof t != "string") {
    if (Kb) {
      var o = Tz(t);
      o && o !== Kb && DS(e, o, r);
    }
    var n = $z(t);
    Yb && (n = n.concat(Yb(t)));
    for (var i = qb(e), a = qb(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!_z[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = Az(t, l);
        try {
          Pz(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Rz = DS;
const Xb = /* @__PURE__ */ fz(Rz);
var Gc = { exports: {} }, Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jb;
function Vz() {
  if (Jb) return Me;
  Jb = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Me.ContextConsumer = a, Me.ContextProvider = i, Me.Element = e, Me.ForwardRef = l, Me.Fragment = r, Me.Lazy = p, Me.Memo = c, Me.Portal = t, Me.Profiler = n, Me.StrictMode = o, Me.Suspense = u, Me.SuspenseList = m, Me.isAsyncMode = function() {
    return !1;
  }, Me.isConcurrentMode = function() {
    return !1;
  }, Me.isContextConsumer = function(d) {
    return b(d) === a;
  }, Me.isContextProvider = function(d) {
    return b(d) === i;
  }, Me.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Me.isForwardRef = function(d) {
    return b(d) === l;
  }, Me.isFragment = function(d) {
    return b(d) === r;
  }, Me.isLazy = function(d) {
    return b(d) === p;
  }, Me.isMemo = function(d) {
    return b(d) === c;
  }, Me.isPortal = function(d) {
    return b(d) === t;
  }, Me.isProfiler = function(d) {
    return b(d) === n;
  }, Me.isStrictMode = function(d) {
    return b(d) === o;
  }, Me.isSuspense = function(d) {
    return b(d) === u;
  }, Me.isSuspenseList = function(d) {
    return b(d) === m;
  }, Me.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, Me.typeOf = b, Me;
}
var et = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zb;
function Mz() {
  return Zb || (Zb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    et.ContextConsumer = v, et.ContextProvider = D, et.Element = C, et.ForwardRef = R, et.Fragment = P, et.Lazy = A, et.Memo = I, et.Portal = T, et.Profiler = F, et.StrictMode = k, et.Suspense = V, et.SuspenseList = W, et.isAsyncMode = z, et.isConcurrentMode = B, et.isContextConsumer = q, et.isContextProvider = Y, et.isElement = K, et.isForwardRef = Z, et.isFragment = te, et.isLazy = H, et.isMemo = X, et.isPortal = M, et.isProfiler = J, et.isStrictMode = be, et.isSuspense = w, et.isSuspenseList = ee, et.isValidElementType = y, et.typeOf = f;
  }()), et;
}
process.env.NODE_ENV === "production" ? Gc.exports = Vz() : Gc.exports = Mz();
var Qb = Gc.exports;
function gd(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Za(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || gd(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Lz(e, t, r) {
  Za(e, "mapStateToProps"), Za(t, "mapDispatchToProps"), Za(r, "mergeProps");
}
const Bz = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Fz(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function jz(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = SS(t, Bz);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && Lz(a, s, l), Fz(a, s, l, e, i);
}
function Wz(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function Gz(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function NS(e, t, r) {
  Gz(e) || gd(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function kc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function eh(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function CS(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = eh(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = eh(s), s = n(i, a)), process.env.NODE_ENV !== "production" && NS(s, o, t), s;
    }, n;
  };
}
function bd(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function kz(e) {
  return e && typeof e == "object" ? kc((t) => (
    // @ts-ignore
    Wz(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    CS(e, "mapDispatchToProps")
  ) : bd(e, "mapDispatchToProps") : kc((t) => ({
    dispatch: t
  }));
}
function zz(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    CS(e, "mapStateToProps")
  ) : bd(e, "mapStateToProps") : kc(() => ({}));
}
function Hz(e, t, r) {
  return xn({}, r, e, t);
}
function Uz(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && NS(i, r, "mergeProps")), i;
    };
  };
}
function qz(e) {
  return e ? typeof e == "function" ? Uz(e) : bd(e, "mergeProps") : () => Hz;
}
function Yz() {
  const e = Ez();
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
const th = {
  notify() {
  },
  get: () => []
};
function Kz(e, t) {
  let r, o = th, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = Yz());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = th);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const Xz = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", zc = Xz ? N.useLayoutEffect : N.useEffect;
function rh(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Qa(e, t) {
  if (rh(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !rh(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const Jz = ["reactReduxForwardedRef"];
let _S = Sz;
const Zz = (e) => {
  _S = e;
}, Qz = [null, null], e6 = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function t6(e, t, r) {
  zc(() => e(...t), r);
}
function r6(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function n6(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function o6(e, t) {
  return e === t;
}
let nh = !1;
function IS(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = o6,
  areOwnPropsEqual: i = Qa,
  areStatePropsEqual: a = Qa,
  areMergedPropsEqual: s = Qa,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = wz
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !nh && (nh = !0, gd('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = zz(e), p = kz(t), g = qz(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Qb.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${e6(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = SS(f, Jz);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Qb.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => jz(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return Qz;
        const M = Kz(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : xn({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      zc(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? n6(
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
      t6(r6, [z, G, q, C, B, W]);
      let H;
      try {
        H = _S(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      zc(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, xn({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, xn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Xb(f, b);
    }
    return Xb(y, b);
  };
}
Zz(pd.useSyncExternalStore);
vz(pr);
function i6(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function PS(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && i6(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function a6(e, t) {
  return PS(function() {
    return e;
  }, t);
}
var It = PS, yt = a6, s6 = process.env.NODE_ENV === "production", es = "Invariant failed";
function oh(e, t) {
  if (s6)
    throw new Error(es);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(es, ": ").concat(r) : es;
  throw new Error(o);
}
var dn = function(e) {
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
}, $S = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, ih = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, c6 = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, ts = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, hd = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ts : r, n = e.border, i = n === void 0 ? ts : n, a = e.padding, s = a === void 0 ? ts : a, l = dn($S(t, o)), u = dn(ih(t, i)), m = dn(ih(u, s));
  return {
    marginBox: l,
    borderBox: dn(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, rr = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? oh(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : oh()), o;
}, l6 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, u6 = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = c6(r, t);
  return hd({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Hc = function(e, t) {
  return t === void 0 && (t = l6()), u6(e, t);
}, AS = function(e, t) {
  var r = {
    top: rr(t.marginTop),
    right: rr(t.marginRight),
    bottom: rr(t.marginBottom),
    left: rr(t.marginLeft)
  }, o = {
    top: rr(t.paddingTop),
    right: rr(t.paddingRight),
    bottom: rr(t.paddingBottom),
    left: rr(t.paddingLeft)
  }, n = {
    top: rr(t.borderTopWidth),
    right: rr(t.borderRightWidth),
    bottom: rr(t.borderBottomWidth),
    left: rr(t.borderLeftWidth)
  };
  return hd({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, TS = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return AS(t, r);
}, ah = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function d6(e, t) {
  return !!(e === t || ah(e) && ah(t));
}
function p6(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!d6(e[r], t[r]))
      return !1;
  return !0;
}
function Ft(e, t) {
  t === void 0 && (t = p6);
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
var f6 = function(e) {
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
const m6 = process.env.NODE_ENV === "production", g6 = /[ \t]{2,}/g, b6 = /^[ \t]*/gm, sh = (e) => e.replace(g6, " ").replace(b6, "").trim(), h6 = (e) => sh(`
  %c@hello-pangea/dnd

  %c${sh(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), y6 = (e) => [h6(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], v6 = "__@hello-pangea/dnd-disable-dev-warnings";
function RS(e, t) {
  m6 || typeof window < "u" && window[v6] || console[e](...y6(t));
}
const Ir = RS.bind(null, "warn"), Uc = RS.bind(null, "error");
function E6() {
}
function x6(e, t) {
  return {
    ...e,
    ...t
  };
}
function w6(e, t, r) {
  const o = t.map((n) => {
    const i = x6(r, n.options);
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
const S6 = process.env.NODE_ENV === "production", ch = "Invariant failed";
class go extends Error {
}
go.prototype.toString = function() {
  return this.message;
};
function de(e, t) {
  throw S6 ? new go(ch) : new go(`${ch}: ${t || ""}`);
}
class w7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = E6, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Ir(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof go && (r.preventDefault(), process.env.NODE_ENV !== "production" && Uc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = w6(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof go) {
      process.env.NODE_ENV !== "production" && Uc(t.message), this.setState({});
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
const en = {
  x: 0,
  y: 0
}, O6 = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), D6 = (e, t) => e.x === t.x && e.y === t.y, N6 = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), C6 = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var _6 = (e, t) => {
  const r = dn({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const I6 = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), P6 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, $6 = (e, t) => t ? I6(e, t.scroll.diff.displacement) : e, A6 = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, T6 = (e, t) => t && t.shouldClipSubject ? _6(t.pageMarginBox, e) : dn(e);
var R6 = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = $6(e.marginBox, o), i = A6(n, r, t), a = T6(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Ft((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Ft((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const V6 = Ft((e) => Object.values(e)), M6 = Ft((e) => Object.values(e));
Ft((e, t) => M6(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function L6(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Ft((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const B6 = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, F6 = {
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
Ft(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: C6(e.line, r)
  };
});
var Zo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const j6 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), W6 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), yd = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, bo = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, G6 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, jr = `${G6.outOfTheWay}s ${yd.outOfTheWay}`, Qo = {
  fluid: `opacity ${jr}`,
  snap: `transform ${jr}, opacity ${jr}`,
  drop: (e) => {
    const t = `${e}s ${yd.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${jr}`,
  placeholder: `height ${jr}, width ${jr}, margin ${jr}`
}, lh = (e) => D6(e, en) ? void 0 : `translate(${e.x}px, ${e.y}px)`, qc = {
  moveTo: lh,
  drop: (e, t) => {
    const r = lh(e);
    if (r)
      return t ? `${r} scale(${bo.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var VS = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = O6({
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
}, k6 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot find document.documentElement") : de()), e;
}, z6 = () => {
  const e = k6();
  return VS({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Ft((e) => V6(e).filter((t) => !(!t.isEnabled || !t.frame)));
const MS = "data-rfd", uh = (() => {
  const e = `${MS}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), dh = {
  contextId: `${MS}-scroll-container-context-id`
}, H6 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var kn = H6;
function U6(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var q6 = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function LS(e) {
  return e instanceof q6(e).HTMLElement;
}
function Y6(e, t) {
  const r = `[${uh.contextId}="${e}"]`, o = U6(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Ir(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(uh.draggableId) === t);
  return n ? LS(n) ? n : (process.env.NODE_ENV !== "production" && Ir("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ir(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var BS = _.createContext(null), K6 = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot find document.body") : de()), e;
};
let X6 = 0;
const FS = {
  separator: "::"
};
function J6(e, t = FS) {
  return It(() => `${e}${t.separator}${X6++}`, [t.separator, e]);
}
function Z6(e, t = FS) {
  const r = _.useId();
  return It(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var jS = "useId" in _ ? Z6 : J6, vd = _.createContext(null);
function WS(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ed(e, t) {
  WS(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        Uc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Q6(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function xd(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const ph = {
  dragging: 5e3,
  dropAnimating: 4500
}, eH = (e, t) => t ? Qo.drop(t.duration) : e ? Qo.snap : Qo.fluid, tH = (e, t) => {
  if (e)
    return t ? bo.opacity.drop : bo.opacity.combining;
}, rH = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function nH(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = rH(e), s = !!n, l = s ? qc.drop(r, i) : qc.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: eH(a, n),
    transform: l,
    opacity: tH(i, s),
    zIndex: s ? ph.dropAnimating : ph.dragging,
    pointerEvents: "none"
  };
}
function oH(e) {
  return {
    transform: qc.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function iH(e) {
  return e.type === "DRAGGING" ? nH(e) : oH(e);
}
function aH(e, t, r = en) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = AS(n, o), a = Hc(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function sH(e) {
  const t = jS("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = It(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = yt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot get dimension when no ref is set") : de()), aH(r, h, g);
  }, [r, n]), m = It(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  kn(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), kn(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var wd = _.createContext(null);
function GS(e) {
  e && LS(e) || (process.env.NODE_ENV !== "production" ? de(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : de());
}
function cH(e, t, r) {
  Ed(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? de(!1, "Draggable requires a draggableId") : de(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? de(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : de(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? de(!1, `${o(n)} requires an integer index prop`) : de(!1)), e.mapped.type !== "DRAGGING" && (GS(r()), e.isEnabled && (Y6(t, n) || (process.env.NODE_ENV !== "production" ? de(!1, `${o(n)} Unable to find drag handle`) : de(!1))));
  });
}
function lH(e) {
  WS(() => {
    const t = L(e);
    Ed(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? de(!1, "Draggable isClone prop value changed during component life") : de(!1));
    }, [e]);
  });
}
function vi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? de(!1, "Could not find required context") : de()), t;
}
function uH(e) {
  e.preventDefault();
}
const dH = (e) => {
  const t = L(null), r = yt((v = null) => {
    t.current = v;
  }, []), o = yt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = vi(vd), {
    type: s,
    droppableId: l
  } = vi(wd), u = It(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (cH(e, n, o), lH(b), !b) {
    const v = It(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    sH(v);
  }
  const O = It(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: uH
  } : null, [n, i, c, p]), E = yt((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = It(() => {
    const v = iH(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = It(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var pH = dH, kS = (e, t) => e === t, zS = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const fH = (e) => e.combine ? e.combine.draggableId : null, mH = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function gH() {
  const e = Ft((o, n) => ({
    x: o,
    y: n
  })), t = Ft((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Ft((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (xd(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Zo(o.impact), l = mH(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = zS(l), c = fH(l), p = {
        duration: o.dropDuration,
        curve: yd.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? bo.opacity.drop : null,
        scale: c ? bo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function HS(e = null) {
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
const bH = {
  mapped: {
    type: "SECONDARY",
    offset: en,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: HS(null)
  }
};
function hH() {
  const e = Ft((i, a) => ({
    x: i,
    y: a
  })), t = Ft(HS), r = Ft((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(en, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = L6(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = N6(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (xd(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const yH = () => {
  const e = gH(), t = hH();
  return (r, o) => e(r, o) || t(r, o) || bH;
}, vH = {
  dropAnimationFinished: W6
}, EH = IS(yH, vH, null, {
  context: BS,
  areStatePropsEqual: kS
})(pH);
var xH = EH;
function wH(e) {
  return vi(wd).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(xH, e);
}
const Sd = (e) => (t) => e === t, SH = Sd("scroll"), OH = Sd("auto"), DH = Sd("visible"), fh = (e, t) => t(e.overflowX) || t(e.overflowY), NH = (e, t) => t(e.overflowX) && t(e.overflowY), US = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return fh(r, SH) || fh(r, OH);
}, CH = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = K6(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, de()), !US(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return NH(o, DH) || process.env.NODE_ENV !== "production" && Ir(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Od = (e) => e == null ? null : e === document.body ? CH() ? e : null : e === document.documentElement ? null : US(e) ? e : Od(e.parentElement);
var _H = (e) => {
  !e || !Od(e.parentElement) || process.env.NODE_ENV !== "production" && Ir(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Yc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const qS = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : qS(e.parentElement) : !1;
var IH = (e) => {
  const t = Od(e), r = qS(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, PH = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = VS({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: en,
          displacement: en
        }
      }
    };
  })(), u = n === "vertical" ? B6 : F6, m = R6({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const $H = (e, t) => {
  const r = TS(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = $S({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return hd({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var AH = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = $H(e, l), m = Hc(u, o), c = (() => {
    if (!l)
      return null;
    const p = TS(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: Hc(p, o),
      scroll: Yc(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return PH({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const TH = {
  passive: !1
}, RH = {
  passive: !0
};
var mh = (e) => e.shouldPublishImmediately ? TH : RH;
const Lo = (e) => e && e.env.closestScrollable || null;
function VH(e) {
  const t = L(null), r = vi(vd), o = jS("droppable"), {
    registry: n,
    marshal: i
  } = r, a = Q6(e), s = It(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = It(() => Ft((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? de(!1, "Can only update scroll when dragging") : de());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = yt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? en : Yc(y.env.closestScrollable);
  }, []), c = yt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = It(() => f6(c), [c]), g = yt(() => {
    const y = t.current, f = Lo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? de(!1, "Could not find scroll options while scrolling") : de()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = yt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? de(!1, "Cannot collect a droppable while a drag is occurring") : de());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot collect without a droppable ref") : de());
    const C = IH(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = AH({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(dh.contextId, r.contextId), A.addEventListener("scroll", g, mh(R.scrollOptions)), process.env.NODE_ENV !== "production" && _H(A)), P;
  }, [r.contextId, s, g, a]), b = yt(() => {
    const y = t.current, f = Lo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? de(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : de()), Yc(f);
  }, []), d = yt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot stop drag when no active drag") : de());
    const f = Lo(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(dh.contextId), f.removeEventListener("scroll", g, mh(y.scrollOptions)));
  }, [g, p]), x = yt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot scroll when there is no drag") : de());
    const v = Lo(f);
    v || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot scroll a droppable with no closest scrollable") : de()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = It(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = It(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  kn(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ir("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), kn(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), kn(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function rs() {
}
const MH = {
  width: 0,
  height: 0,
  margin: P6
}, LH = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? MH : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, BH = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = LH({
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
    transition: r !== "none" ? Qo.placeholder : null
  };
}, FH = (e) => {
  const t = L(null), r = yt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), rs) : t.current ? rs : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : rs, [o, s, r]);
  const u = yt((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = BH({
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
var jH = _.memo(FH);
function ns(e) {
  return typeof e == "boolean";
}
function os(e, t) {
  t.forEach((r) => r(e));
}
const WH = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? de(!1, "A Droppable requires a droppableId prop") : de()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? de(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : de());
}, function({
  props: e
}) {
  ns(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? de(!1, "isDropDisabled must be a boolean") : de()), ns(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? de(!1, "isCombineEnabled must be a boolean") : de()), ns(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? de(!1, "ignoreContainerClipping must be a boolean") : de());
}, function({
  getDroppableRef: e
}) {
  GS(e());
}], GH = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Ir(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], kH = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? de(!1, "Must provide a clone render function (renderClone) for virtual lists") : de());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? de(!1, "Expected virtual list to not have a placeholder") : de());
}];
function zH(e) {
  Ed(() => {
    os(e, WH), e.props.mode === "standard" && os(e, GH), e.props.mode === "virtual" && os(e, kH);
  });
}
class HH extends _.PureComponent {
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
const UH = (e) => {
  const t = pt(vd);
  t || (process.env.NODE_ENV !== "production" ? de(!1, "Could not find app context") : de());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = yt(() => n.current, []), E = yt((I = null) => {
    n.current = I;
  }, []), y = yt(() => i.current, []), f = yt((I = null) => {
    i.current = I;
  }, []);
  zH({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = yt(() => {
    o() && d({
      maxScroll: z6()
    });
  }, [o, d]);
  VH({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = It(() => _.createElement(HH, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(jH, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = It(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = It(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(wH, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(wd.Provider, {
    value: P
  }, a(C, h), A());
};
var qH = UH;
function YH() {
  return document.body || (process.env.NODE_ENV !== "production" ? de(!1, "document.body is not ready") : de()), document.body;
}
const gh = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: YH
}, YS = (e) => {
  let t = {
    ...e
  }, r;
  for (r in gh)
    e[r] === void 0 && (t = {
      ...t,
      [r]: gh[r]
    });
  return t;
}, is = (e, t) => e === t.droppable.type, bh = (e, t) => t.draggables[e.draggable.id], KH = () => {
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
  }, r = Ft((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Ft((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = YS(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (xd(n)) {
      const c = n.critical;
      if (!is(l, c))
        return t;
      const p = bh(c, n.dimensions), g = Zo(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!is(l, c.critical))
        return t;
      const p = bh(c.critical, n.dimensions);
      return o(s, u, zS(c.result) === s, Zo(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!is(l, c.critical))
        return t;
      const p = Zo(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, XH = {
  updateViewportMaxScroll: j6
};
IS(KH, XH, (e, t, r) => ({
  ...YS(r),
  ...e,
  ...t
}), {
  context: BS,
  areStatePropsEqual: kS
})(qH);
var hh;
(function(e) {
  e.event = "event", e.props = "prop";
})(hh || (hh = {}));
var yh = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + yh(), "" + yh();
function JH(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kc = { exports: {} }, as = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vh;
function ZH() {
  if (vh) return as;
  vh = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return as.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, as;
}
var Eh = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xh;
function QH() {
  return xh || (xh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Eh.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Eh;
}
process.env.NODE_ENV === "production" ? Kc.exports = ZH() : Kc.exports = QH();
var Dd = Kc.exports, ss = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wh;
function eU() {
  if (wh) return ss;
  wh = 1;
  var e = _, t = Dd;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return ss.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, ss;
}
var Sh = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oh;
function tU() {
  return Oh || (Oh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Dd, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Sh.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Sh;
}
process.env.NODE_ENV === "production" ? eU() : tU();
function rU(e) {
  e();
}
let KS = rU;
const nU = (e) => KS = e, oU = () => KS, Dh = Symbol.for("react-redux-context"), Nh = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function iU() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Nh[Dh]) != null ? e : Nh[Dh] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const aU = /* @__PURE__ */ iU(), sU = () => {
  throw new Error("uSES not initialized!");
};
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, wn.apply(null, arguments);
}
function XS(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Xc = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ch;
function cU() {
  if (Ch) return Le;
  Ch = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return Le.AsyncMode = l, Le.ConcurrentMode = u, Le.ContextConsumer = s, Le.ContextProvider = a, Le.Element = t, Le.ForwardRef = m, Le.Fragment = o, Le.Lazy = h, Le.Memo = g, Le.Portal = r, Le.Profiler = i, Le.StrictMode = n, Le.Suspense = c, Le.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
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
    return E(f) === c;
  }, Le.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, Le.typeOf = E, Le;
}
var tt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _h;
function lU() {
  return _h || (_h = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    tt.AsyncMode = f, tt.ConcurrentMode = v, tt.ContextConsumer = D, tt.ContextProvider = C, tt.Element = R, tt.ForwardRef = P, tt.Fragment = A, tt.Lazy = I, tt.Memo = T, tt.Portal = F, tt.Profiler = k, tt.StrictMode = V, tt.Suspense = W, tt.isAsyncMode = G, tt.isConcurrentMode = z, tt.isContextConsumer = B, tt.isContextProvider = q, tt.isElement = Y, tt.isForwardRef = K, tt.isFragment = Z, tt.isLazy = te, tt.isMemo = H, tt.isPortal = X, tt.isProfiler = M, tt.isStrictMode = J, tt.isSuspense = be, tt.isValidElementType = E, tt.typeOf = y;
  }()), tt;
}
process.env.NODE_ENV === "production" ? Xc.exports = cU() : Xc.exports = lU();
var uU = Xc.exports, Nd = uU, dU = {
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
}, pU = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, fU = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, JS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cd = {};
Cd[Nd.ForwardRef] = fU;
Cd[Nd.Memo] = JS;
function Ih(e) {
  return Nd.isMemo(e) ? JS : Cd[e.$$typeof] || dU;
}
var mU = Object.defineProperty, gU = Object.getOwnPropertyNames, Ph = Object.getOwnPropertySymbols, bU = Object.getOwnPropertyDescriptor, hU = Object.getPrototypeOf, $h = Object.prototype;
function ZS(e, t, r) {
  if (typeof t != "string") {
    if ($h) {
      var o = hU(t);
      o && o !== $h && ZS(e, o, r);
    }
    var n = gU(t);
    Ph && (n = n.concat(Ph(t)));
    for (var i = Ih(e), a = Ih(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!pU[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = bU(t, l);
        try {
          mU(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var yU = ZS;
const Ah = /* @__PURE__ */ JH(yU);
var Jc = { exports: {} }, Be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Th;
function vU() {
  if (Th) return Be;
  Th = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Be.ContextConsumer = a, Be.ContextProvider = i, Be.Element = e, Be.ForwardRef = l, Be.Fragment = r, Be.Lazy = p, Be.Memo = c, Be.Portal = t, Be.Profiler = n, Be.StrictMode = o, Be.Suspense = u, Be.SuspenseList = m, Be.isAsyncMode = function() {
    return !1;
  }, Be.isConcurrentMode = function() {
    return !1;
  }, Be.isContextConsumer = function(d) {
    return b(d) === a;
  }, Be.isContextProvider = function(d) {
    return b(d) === i;
  }, Be.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Be.isForwardRef = function(d) {
    return b(d) === l;
  }, Be.isFragment = function(d) {
    return b(d) === r;
  }, Be.isLazy = function(d) {
    return b(d) === p;
  }, Be.isMemo = function(d) {
    return b(d) === c;
  }, Be.isPortal = function(d) {
    return b(d) === t;
  }, Be.isProfiler = function(d) {
    return b(d) === n;
  }, Be.isStrictMode = function(d) {
    return b(d) === o;
  }, Be.isSuspense = function(d) {
    return b(d) === u;
  }, Be.isSuspenseList = function(d) {
    return b(d) === m;
  }, Be.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, Be.typeOf = b, Be;
}
var rt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rh;
function EU() {
  return Rh || (Rh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    rt.ContextConsumer = v, rt.ContextProvider = D, rt.Element = C, rt.ForwardRef = R, rt.Fragment = P, rt.Lazy = A, rt.Memo = I, rt.Portal = T, rt.Profiler = F, rt.StrictMode = k, rt.Suspense = V, rt.SuspenseList = W, rt.isAsyncMode = z, rt.isConcurrentMode = B, rt.isContextConsumer = q, rt.isContextProvider = Y, rt.isElement = K, rt.isForwardRef = Z, rt.isFragment = te, rt.isLazy = H, rt.isMemo = X, rt.isPortal = M, rt.isProfiler = J, rt.isStrictMode = be, rt.isSuspense = w, rt.isSuspenseList = ee, rt.isValidElementType = y, rt.typeOf = f;
  }()), rt;
}
process.env.NODE_ENV === "production" ? Jc.exports = vU() : Jc.exports = EU();
var Vh = Jc.exports;
function _d(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function cs(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || _d(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function xU(e, t, r) {
  cs(e, "mapStateToProps"), cs(t, "mapDispatchToProps"), cs(r, "mergeProps");
}
const wU = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function SU(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function OU(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = XS(t, wU);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && xU(a, s, l), SU(a, s, l, e, i);
}
function DU(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function NU(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function QS(e, t, r) {
  NU(e) || _d(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Zc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Mh(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function eO(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Mh(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Mh(s), s = n(i, a)), process.env.NODE_ENV !== "production" && QS(s, o, t), s;
    }, n;
  };
}
function Id(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function CU(e) {
  return e && typeof e == "object" ? Zc((t) => (
    // @ts-ignore
    DU(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    eO(e, "mapDispatchToProps")
  ) : Id(e, "mapDispatchToProps") : Zc((t) => ({
    dispatch: t
  }));
}
function _U(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    eO(e, "mapStateToProps")
  ) : Id(e, "mapStateToProps") : Zc(() => ({}));
}
function IU(e, t, r) {
  return wn({}, r, e, t);
}
function PU(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && QS(i, r, "mergeProps")), i;
    };
  };
}
function $U(e) {
  return e ? typeof e == "function" ? PU(e) : Id(e, "mergeProps") : () => IU;
}
function AU() {
  const e = oU();
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
const Lh = {
  notify() {
  },
  get: () => []
};
function TU(e, t) {
  let r, o = Lh, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = AU());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Lh);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const RU = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Qc = RU ? N.useLayoutEffect : N.useEffect;
function Bh(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ls(e, t) {
  if (Bh(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Bh(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const VU = ["reactReduxForwardedRef"];
let tO = sU;
const MU = (e) => {
  tO = e;
}, LU = [null, null], BU = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function FU(e, t, r) {
  Qc(() => e(...t), r);
}
function jU(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function WU(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function GU(e, t) {
  return e === t;
}
let Fh = !1;
function rO(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = GU,
  areOwnPropsEqual: i = ls,
  areStatePropsEqual: a = ls,
  areMergedPropsEqual: s = ls,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = aU
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Fh && (Fh = !0, _d('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = _U(e), p = CU(t), g = $U(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Vh.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${BU(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = XS(f, VU);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Vh.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => OU(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return LU;
        const M = TU(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : wn({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Qc(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? WU(
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
      FU(jU, [z, G, q, C, B, W]);
      let H;
      try {
        H = tO(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Qc(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, wn({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, wn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Ah(f, b);
    }
    return Ah(y, b);
  };
}
MU(Dd.useSyncExternalStore);
nU(pr);
function kU(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function nO(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && kU(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function zU(e, t) {
  return nO(function() {
    return e;
  }, t);
}
var Pt = nO, vt = zU, HU = process.env.NODE_ENV === "production", us = "Invariant failed";
function jh(e, t) {
  if (HU)
    throw new Error(us);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(us, ": ").concat(r) : us;
  throw new Error(o);
}
var pn = function(e) {
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
}, oO = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Wh = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, UU = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, ds = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Pd = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ds : r, n = e.border, i = n === void 0 ? ds : n, a = e.padding, s = a === void 0 ? ds : a, l = pn(oO(t, o)), u = pn(Wh(t, i)), m = pn(Wh(u, s));
  return {
    marginBox: l,
    borderBox: pn(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, nr = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? jh(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : jh()), o;
}, qU = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, YU = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = UU(r, t);
  return Pd({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, el = function(e, t) {
  return t === void 0 && (t = qU()), YU(e, t);
}, iO = function(e, t) {
  var r = {
    top: nr(t.marginTop),
    right: nr(t.marginRight),
    bottom: nr(t.marginBottom),
    left: nr(t.marginLeft)
  }, o = {
    top: nr(t.paddingTop),
    right: nr(t.paddingRight),
    bottom: nr(t.paddingBottom),
    left: nr(t.paddingLeft)
  }, n = {
    top: nr(t.borderTopWidth),
    right: nr(t.borderRightWidth),
    bottom: nr(t.borderBottomWidth),
    left: nr(t.borderLeftWidth)
  };
  return Pd({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, aO = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return iO(t, r);
}, Gh = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function KU(e, t) {
  return !!(e === t || Gh(e) && Gh(t));
}
function XU(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!KU(e[r], t[r]))
      return !1;
  return !0;
}
function jt(e, t) {
  t === void 0 && (t = XU);
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
var JU = function(e) {
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
const ZU = process.env.NODE_ENV === "production", QU = /[ \t]{2,}/g, eq = /^[ \t]*/gm, kh = (e) => e.replace(QU, " ").replace(eq, "").trim(), tq = (e) => kh(`
  %c@hello-pangea/dnd

  %c${kh(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), rq = (e) => [tq(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], nq = "__@hello-pangea/dnd-disable-dev-warnings";
function sO(e, t) {
  ZU || typeof window < "u" && window[nq] || console[e](...rq(t));
}
const Pr = sO.bind(null, "warn"), tl = sO.bind(null, "error");
function oq() {
}
function iq(e, t) {
  return {
    ...e,
    ...t
  };
}
function aq(e, t, r) {
  const o = t.map((n) => {
    const i = iq(r, n.options);
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
const sq = process.env.NODE_ENV === "production", zh = "Invariant failed";
class ho extends Error {
}
ho.prototype.toString = function() {
  return this.message;
};
function pe(e, t) {
  throw sq ? new ho(zh) : new ho(`${zh}: ${t || ""}`);
}
class S7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = oq, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Pr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof ho && (r.preventDefault(), process.env.NODE_ENV !== "production" && tl(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = aq(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof ho) {
      process.env.NODE_ENV !== "production" && tl(t.message), this.setState({});
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
const tn = {
  x: 0,
  y: 0
}, cq = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), lq = (e, t) => e.x === t.x && e.y === t.y, uq = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), dq = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var pq = (e, t) => {
  const r = pn({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const fq = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), mq = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, gq = (e, t) => t ? fq(e, t.scroll.diff.displacement) : e, bq = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, hq = (e, t) => t && t.shouldClipSubject ? pq(t.pageMarginBox, e) : pn(e);
var yq = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = gq(e.marginBox, o), i = bq(n, r, t), a = hq(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
jt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
jt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const vq = jt((e) => Object.values(e)), Eq = jt((e) => Object.values(e));
jt((e, t) => Eq(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function xq(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
jt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const wq = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Sq = {
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
jt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: dq(e.line, r)
  };
});
var ei = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Oq = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Dq = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), $d = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, yo = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Nq = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Wr = `${Nq.outOfTheWay}s ${$d.outOfTheWay}`, ti = {
  fluid: `opacity ${Wr}`,
  snap: `transform ${Wr}, opacity ${Wr}`,
  drop: (e) => {
    const t = `${e}s ${$d.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Wr}`,
  placeholder: `height ${Wr}, width ${Wr}, margin ${Wr}`
}, Hh = (e) => lq(e, tn) ? void 0 : `translate(${e.x}px, ${e.y}px)`, rl = {
  moveTo: Hh,
  drop: (e, t) => {
    const r = Hh(e);
    if (r)
      return t ? `${r} scale(${yo.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var cO = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = cq({
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
}, Cq = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot find document.documentElement") : pe()), e;
}, _q = () => {
  const e = Cq();
  return cO({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
jt((e) => vq(e).filter((t) => !(!t.isEnabled || !t.frame)));
const lO = "data-rfd", Uh = (() => {
  const e = `${lO}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), qh = {
  contextId: `${lO}-scroll-container-context-id`
}, Iq = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var zn = Iq;
function Pq(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var $q = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function uO(e) {
  return e instanceof $q(e).HTMLElement;
}
function Aq(e, t) {
  const r = `[${Uh.contextId}="${e}"]`, o = Pq(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Pr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Uh.draggableId) === t);
  return n ? uO(n) ? n : (process.env.NODE_ENV !== "production" && Pr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Pr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var dO = _.createContext(null), Tq = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot find document.body") : pe()), e;
};
let Rq = 0;
const pO = {
  separator: "::"
};
function Vq(e, t = pO) {
  return Pt(() => `${e}${t.separator}${Rq++}`, [t.separator, e]);
}
function Mq(e, t = pO) {
  const r = _.useId();
  return Pt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var fO = "useId" in _ ? Mq : Vq, Ad = _.createContext(null);
function mO(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Td(e, t) {
  mO(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        tl(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Lq(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function Rd(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Yh = {
  dragging: 5e3,
  dropAnimating: 4500
}, Bq = (e, t) => t ? ti.drop(t.duration) : e ? ti.snap : ti.fluid, Fq = (e, t) => {
  if (e)
    return t ? yo.opacity.drop : yo.opacity.combining;
}, jq = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Wq(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = jq(e), s = !!n, l = s ? rl.drop(r, i) : rl.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Bq(a, n),
    transform: l,
    opacity: Fq(i, s),
    zIndex: s ? Yh.dropAnimating : Yh.dragging,
    pointerEvents: "none"
  };
}
function Gq(e) {
  return {
    transform: rl.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function kq(e) {
  return e.type === "DRAGGING" ? Wq(e) : Gq(e);
}
function zq(e, t, r = tn) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = iO(n, o), a = el(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function Hq(e) {
  const t = fO("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Pt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = vt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot get dimension when no ref is set") : pe()), zq(r, h, g);
  }, [r, n]), m = Pt(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  zn(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), zn(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Vd = _.createContext(null);
function gO(e) {
  e && uO(e) || (process.env.NODE_ENV !== "production" ? pe(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : pe());
}
function Uq(e, t, r) {
  Td(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? pe(!1, "Draggable requires a draggableId") : pe(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? pe(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : pe(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? pe(!1, `${o(n)} requires an integer index prop`) : pe(!1)), e.mapped.type !== "DRAGGING" && (gO(r()), e.isEnabled && (Aq(t, n) || (process.env.NODE_ENV !== "production" ? pe(!1, `${o(n)} Unable to find drag handle`) : pe(!1))));
  });
}
function qq(e) {
  mO(() => {
    const t = L(e);
    Td(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? pe(!1, "Draggable isClone prop value changed during component life") : pe(!1));
    }, [e]);
  });
}
function Ei(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? pe(!1, "Could not find required context") : pe()), t;
}
function Yq(e) {
  e.preventDefault();
}
const Kq = (e) => {
  const t = L(null), r = vt((v = null) => {
    t.current = v;
  }, []), o = vt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ei(Ad), {
    type: s,
    droppableId: l
  } = Ei(Vd), u = Pt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (Uq(e, n, o), qq(b), !b) {
    const v = Pt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    Hq(v);
  }
  const O = Pt(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: Yq
  } : null, [n, i, c, p]), E = vt((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = Pt(() => {
    const v = kq(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = Pt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var Xq = Kq, bO = (e, t) => e === t, hO = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Jq = (e) => e.combine ? e.combine.draggableId : null, Zq = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Qq() {
  const e = jt((o, n) => ({
    x: o,
    y: n
  })), t = jt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = jt((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (Rd(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = ei(o.impact), l = Zq(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = hO(l), c = Jq(l), p = {
        duration: o.dropDuration,
        curve: $d.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? yo.opacity.drop : null,
        scale: c ? yo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function yO(e = null) {
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
const eY = {
  mapped: {
    type: "SECONDARY",
    offset: tn,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: yO(null)
  }
};
function tY() {
  const e = jt((i, a) => ({
    x: i,
    y: a
  })), t = jt(yO), r = jt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(tn, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = xq(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = uq(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (Rd(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const rY = () => {
  const e = Qq(), t = tY();
  return (r, o) => e(r, o) || t(r, o) || eY;
}, nY = {
  dropAnimationFinished: Dq
}, oY = rO(rY, nY, null, {
  context: dO,
  areStatePropsEqual: bO
})(Xq);
var iY = oY;
function aY(e) {
  return Ei(Vd).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(iY, e);
}
const Md = (e) => (t) => e === t, sY = Md("scroll"), cY = Md("auto"), lY = Md("visible"), Kh = (e, t) => t(e.overflowX) || t(e.overflowY), uY = (e, t) => t(e.overflowX) && t(e.overflowY), vO = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Kh(r, sY) || Kh(r, cY);
}, dY = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Tq(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, pe()), !vO(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return uY(o, lY) || process.env.NODE_ENV !== "production" && Pr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ld = (e) => e == null ? null : e === document.body ? dY() ? e : null : e === document.documentElement ? null : vO(e) ? e : Ld(e.parentElement);
var pY = (e) => {
  !e || !Ld(e.parentElement) || process.env.NODE_ENV !== "production" && Pr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, nl = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const EO = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : EO(e.parentElement) : !1;
var fY = (e) => {
  const t = Ld(e), r = EO(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, mY = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = cO({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: tn,
          displacement: tn
        }
      }
    };
  })(), u = n === "vertical" ? wq : Sq, m = yq({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const gY = (e, t) => {
  const r = aO(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = oO({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Pd({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var bY = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = gY(e, l), m = el(u, o), c = (() => {
    if (!l)
      return null;
    const p = aO(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: el(p, o),
      scroll: nl(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return mY({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const hY = {
  passive: !1
}, yY = {
  passive: !0
};
var Xh = (e) => e.shouldPublishImmediately ? hY : yY;
const Bo = (e) => e && e.env.closestScrollable || null;
function vY(e) {
  const t = L(null), r = Ei(Ad), o = fO("droppable"), {
    registry: n,
    marshal: i
  } = r, a = Lq(e), s = Pt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = Pt(() => jt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? pe(!1, "Can only update scroll when dragging") : pe());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = vt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? tn : nl(y.env.closestScrollable);
  }, []), c = vt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = Pt(() => JU(c), [c]), g = vt(() => {
    const y = t.current, f = Bo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? pe(!1, "Could not find scroll options while scrolling") : pe()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = vt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot collect a droppable while a drag is occurring") : pe());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot collect without a droppable ref") : pe());
    const C = fY(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = bY({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(qh.contextId, r.contextId), A.addEventListener("scroll", g, Xh(R.scrollOptions)), process.env.NODE_ENV !== "production" && pY(A)), P;
  }, [r.contextId, s, g, a]), b = vt(() => {
    const y = t.current, f = Bo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? pe(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : pe()), nl(f);
  }, []), d = vt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot stop drag when no active drag") : pe());
    const f = Bo(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(qh.contextId), f.removeEventListener("scroll", g, Xh(y.scrollOptions)));
  }, [g, p]), x = vt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot scroll when there is no drag") : pe());
    const v = Bo(f);
    v || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot scroll a droppable with no closest scrollable") : pe()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = Pt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = Pt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  zn(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Pr("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), zn(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), zn(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ps() {
}
const EY = {
  width: 0,
  height: 0,
  margin: mq
}, xY = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? EY : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, wY = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = xY({
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
    transition: r !== "none" ? ti.placeholder : null
  };
}, SY = (e) => {
  const t = L(null), r = vt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), ps) : t.current ? ps : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : ps, [o, s, r]);
  const u = vt((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = wY({
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
var OY = _.memo(SY);
function fs(e) {
  return typeof e == "boolean";
}
function ms(e, t) {
  t.forEach((r) => r(e));
}
const DY = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? pe(!1, "A Droppable requires a droppableId prop") : pe()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? pe(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : pe());
}, function({
  props: e
}) {
  fs(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? pe(!1, "isDropDisabled must be a boolean") : pe()), fs(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? pe(!1, "isCombineEnabled must be a boolean") : pe()), fs(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? pe(!1, "ignoreContainerClipping must be a boolean") : pe());
}, function({
  getDroppableRef: e
}) {
  gO(e());
}], NY = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Pr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], CY = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? pe(!1, "Must provide a clone render function (renderClone) for virtual lists") : pe());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? pe(!1, "Expected virtual list to not have a placeholder") : pe());
}];
function _Y(e) {
  Td(() => {
    ms(e, DY), e.props.mode === "standard" && ms(e, NY), e.props.mode === "virtual" && ms(e, CY);
  });
}
class IY extends _.PureComponent {
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
const PY = (e) => {
  const t = pt(Ad);
  t || (process.env.NODE_ENV !== "production" ? pe(!1, "Could not find app context") : pe());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = vt(() => n.current, []), E = vt((I = null) => {
    n.current = I;
  }, []), y = vt(() => i.current, []), f = vt((I = null) => {
    i.current = I;
  }, []);
  _Y({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = vt(() => {
    o() && d({
      maxScroll: _q()
    });
  }, [o, d]);
  vY({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = Pt(() => _.createElement(IY, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(OY, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Pt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = Pt(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(aY, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(Vd.Provider, {
    value: P
  }, a(C, h), A());
};
var $Y = PY;
function AY() {
  return document.body || (process.env.NODE_ENV !== "production" ? pe(!1, "document.body is not ready") : pe()), document.body;
}
const Jh = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: AY
}, xO = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Jh)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Jh[r]
    });
  return t;
}, gs = (e, t) => e === t.droppable.type, Zh = (e, t) => t.draggables[e.draggable.id], TY = () => {
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
  }, r = jt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = jt((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = xO(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Rd(n)) {
      const c = n.critical;
      if (!gs(l, c))
        return t;
      const p = Zh(c, n.dimensions), g = ei(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!gs(l, c.critical))
        return t;
      const p = Zh(c.critical, n.dimensions);
      return o(s, u, hO(c.result) === s, ei(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!gs(l, c.critical))
        return t;
      const p = ei(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, RY = {
  updateViewportMaxScroll: Oq
};
rO(TY, RY, (e, t, r) => ({
  ...xO(r),
  ...e,
  ...t
}), {
  context: dO,
  areStatePropsEqual: bO
})($Y);
var Qh;
(function(e) {
  e.event = "event", e.props = "prop";
})(Qh || (Qh = {}));
var ey = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + ey(), "" + ey();
function VY(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ol = { exports: {} }, bs = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ty;
function MY() {
  if (ty) return bs;
  ty = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return bs.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, bs;
}
var ry = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ny;
function LY() {
  return ny || (ny = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    ry.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ry;
}
process.env.NODE_ENV === "production" ? ol.exports = MY() : ol.exports = LY();
var Bd = ol.exports, hs = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oy;
function BY() {
  if (oy) return hs;
  oy = 1;
  var e = _, t = Bd;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return hs.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, hs;
}
var iy = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ay;
function FY() {
  return ay || (ay = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Bd, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    iy.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), iy;
}
process.env.NODE_ENV === "production" ? BY() : FY();
function jY(e) {
  e();
}
let wO = jY;
const WY = (e) => wO = e, GY = () => wO, sy = Symbol.for("react-redux-context"), cy = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function kY() {
  var e;
  if (!N.createContext) return {};
  const t = (e = cy[sy]) != null ? e : cy[sy] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const zY = /* @__PURE__ */ kY(), HY = () => {
  throw new Error("uSES not initialized!");
};
function Sn() {
  return Sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Sn.apply(null, arguments);
}
function SO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var il = { exports: {} }, Fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ly;
function UY() {
  if (ly) return Fe;
  ly = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return Fe.AsyncMode = l, Fe.ConcurrentMode = u, Fe.ContextConsumer = s, Fe.ContextProvider = a, Fe.Element = t, Fe.ForwardRef = m, Fe.Fragment = o, Fe.Lazy = h, Fe.Memo = g, Fe.Portal = r, Fe.Profiler = i, Fe.StrictMode = n, Fe.Suspense = c, Fe.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
  }, Fe.isConcurrentMode = y, Fe.isContextConsumer = function(f) {
    return E(f) === s;
  }, Fe.isContextProvider = function(f) {
    return E(f) === a;
  }, Fe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, Fe.isForwardRef = function(f) {
    return E(f) === m;
  }, Fe.isFragment = function(f) {
    return E(f) === o;
  }, Fe.isLazy = function(f) {
    return E(f) === h;
  }, Fe.isMemo = function(f) {
    return E(f) === g;
  }, Fe.isPortal = function(f) {
    return E(f) === r;
  }, Fe.isProfiler = function(f) {
    return E(f) === i;
  }, Fe.isStrictMode = function(f) {
    return E(f) === n;
  }, Fe.isSuspense = function(f) {
    return E(f) === c;
  }, Fe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, Fe.typeOf = E, Fe;
}
var nt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uy;
function qY() {
  return uy || (uy = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    nt.AsyncMode = f, nt.ConcurrentMode = v, nt.ContextConsumer = D, nt.ContextProvider = C, nt.Element = R, nt.ForwardRef = P, nt.Fragment = A, nt.Lazy = I, nt.Memo = T, nt.Portal = F, nt.Profiler = k, nt.StrictMode = V, nt.Suspense = W, nt.isAsyncMode = G, nt.isConcurrentMode = z, nt.isContextConsumer = B, nt.isContextProvider = q, nt.isElement = Y, nt.isForwardRef = K, nt.isFragment = Z, nt.isLazy = te, nt.isMemo = H, nt.isPortal = X, nt.isProfiler = M, nt.isStrictMode = J, nt.isSuspense = be, nt.isValidElementType = E, nt.typeOf = y;
  }()), nt;
}
process.env.NODE_ENV === "production" ? il.exports = UY() : il.exports = qY();
var YY = il.exports, Fd = YY, KY = {
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
}, XY = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, JY = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, OO = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, jd = {};
jd[Fd.ForwardRef] = JY;
jd[Fd.Memo] = OO;
function dy(e) {
  return Fd.isMemo(e) ? OO : jd[e.$$typeof] || KY;
}
var ZY = Object.defineProperty, QY = Object.getOwnPropertyNames, py = Object.getOwnPropertySymbols, e2 = Object.getOwnPropertyDescriptor, t2 = Object.getPrototypeOf, fy = Object.prototype;
function DO(e, t, r) {
  if (typeof t != "string") {
    if (fy) {
      var o = t2(t);
      o && o !== fy && DO(e, o, r);
    }
    var n = QY(t);
    py && (n = n.concat(py(t)));
    for (var i = dy(e), a = dy(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!XY[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = e2(t, l);
        try {
          ZY(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var r2 = DO;
const my = /* @__PURE__ */ VY(r2);
var al = { exports: {} }, je = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gy;
function n2() {
  if (gy) return je;
  gy = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return je.ContextConsumer = a, je.ContextProvider = i, je.Element = e, je.ForwardRef = l, je.Fragment = r, je.Lazy = p, je.Memo = c, je.Portal = t, je.Profiler = n, je.StrictMode = o, je.Suspense = u, je.SuspenseList = m, je.isAsyncMode = function() {
    return !1;
  }, je.isConcurrentMode = function() {
    return !1;
  }, je.isContextConsumer = function(d) {
    return b(d) === a;
  }, je.isContextProvider = function(d) {
    return b(d) === i;
  }, je.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, je.isForwardRef = function(d) {
    return b(d) === l;
  }, je.isFragment = function(d) {
    return b(d) === r;
  }, je.isLazy = function(d) {
    return b(d) === p;
  }, je.isMemo = function(d) {
    return b(d) === c;
  }, je.isPortal = function(d) {
    return b(d) === t;
  }, je.isProfiler = function(d) {
    return b(d) === n;
  }, je.isStrictMode = function(d) {
    return b(d) === o;
  }, je.isSuspense = function(d) {
    return b(d) === u;
  }, je.isSuspenseList = function(d) {
    return b(d) === m;
  }, je.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, je.typeOf = b, je;
}
var ot = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var by;
function o2() {
  return by || (by = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    ot.ContextConsumer = v, ot.ContextProvider = D, ot.Element = C, ot.ForwardRef = R, ot.Fragment = P, ot.Lazy = A, ot.Memo = I, ot.Portal = T, ot.Profiler = F, ot.StrictMode = k, ot.Suspense = V, ot.SuspenseList = W, ot.isAsyncMode = z, ot.isConcurrentMode = B, ot.isContextConsumer = q, ot.isContextProvider = Y, ot.isElement = K, ot.isForwardRef = Z, ot.isFragment = te, ot.isLazy = H, ot.isMemo = X, ot.isPortal = M, ot.isProfiler = J, ot.isStrictMode = be, ot.isSuspense = w, ot.isSuspenseList = ee, ot.isValidElementType = y, ot.typeOf = f;
  }()), ot;
}
process.env.NODE_ENV === "production" ? al.exports = n2() : al.exports = o2();
var hy = al.exports;
function Wd(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ys(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Wd(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function i2(e, t, r) {
  ys(e, "mapStateToProps"), ys(t, "mapDispatchToProps"), ys(r, "mergeProps");
}
const a2 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function s2(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function c2(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = SO(t, a2);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && i2(a, s, l), s2(a, s, l, e, i);
}
function l2(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function u2(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function NO(e, t, r) {
  u2(e) || Wd(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function sl(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function yy(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function CO(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = yy(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = yy(s), s = n(i, a)), process.env.NODE_ENV !== "production" && NO(s, o, t), s;
    }, n;
  };
}
function Gd(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function d2(e) {
  return e && typeof e == "object" ? sl((t) => (
    // @ts-ignore
    l2(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    CO(e, "mapDispatchToProps")
  ) : Gd(e, "mapDispatchToProps") : sl((t) => ({
    dispatch: t
  }));
}
function p2(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    CO(e, "mapStateToProps")
  ) : Gd(e, "mapStateToProps") : sl(() => ({}));
}
function f2(e, t, r) {
  return Sn({}, r, e, t);
}
function m2(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && NO(i, r, "mergeProps")), i;
    };
  };
}
function g2(e) {
  return e ? typeof e == "function" ? m2(e) : Gd(e, "mergeProps") : () => f2;
}
function b2() {
  const e = GY();
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
const vy = {
  notify() {
  },
  get: () => []
};
function h2(e, t) {
  let r, o = vy, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = b2());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = vy);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const y2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", cl = y2 ? N.useLayoutEffect : N.useEffect;
function Ey(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function vs(e, t) {
  if (Ey(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Ey(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const v2 = ["reactReduxForwardedRef"];
let _O = HY;
const E2 = (e) => {
  _O = e;
}, x2 = [null, null], w2 = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function S2(e, t, r) {
  cl(() => e(...t), r);
}
function O2(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function D2(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function N2(e, t) {
  return e === t;
}
let xy = !1;
function IO(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = N2,
  areOwnPropsEqual: i = vs,
  areStatePropsEqual: a = vs,
  areMergedPropsEqual: s = vs,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = zY
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !xy && (xy = !0, Wd('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = p2(e), p = d2(t), g = g2(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !hy.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${w2(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = SO(f, v2);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      hy.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => c2(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return x2;
        const M = h2(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : Sn({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      cl(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? D2(
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
      S2(O2, [z, G, q, C, B, W]);
      let H;
      try {
        H = _O(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      cl(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, Sn({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, Sn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, my(f, b);
    }
    return my(y, b);
  };
}
E2(Bd.useSyncExternalStore);
WY(pr);
function C2(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function PO(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && C2(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function _2(e, t) {
  return PO(function() {
    return e;
  }, t);
}
var $t = PO, Et = _2, I2 = process.env.NODE_ENV === "production", Es = "Invariant failed";
function wy(e, t) {
  if (I2)
    throw new Error(Es);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Es, ": ").concat(r) : Es;
  throw new Error(o);
}
var fn = function(e) {
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
}, $O = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Sy = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, P2 = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, xs = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, kd = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? xs : r, n = e.border, i = n === void 0 ? xs : n, a = e.padding, s = a === void 0 ? xs : a, l = fn($O(t, o)), u = fn(Sy(t, i)), m = fn(Sy(u, s));
  return {
    marginBox: l,
    borderBox: fn(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, or = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? wy(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : wy()), o;
}, $2 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, A2 = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = P2(r, t);
  return kd({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, ll = function(e, t) {
  return t === void 0 && (t = $2()), A2(e, t);
}, AO = function(e, t) {
  var r = {
    top: or(t.marginTop),
    right: or(t.marginRight),
    bottom: or(t.marginBottom),
    left: or(t.marginLeft)
  }, o = {
    top: or(t.paddingTop),
    right: or(t.paddingRight),
    bottom: or(t.paddingBottom),
    left: or(t.paddingLeft)
  }, n = {
    top: or(t.borderTopWidth),
    right: or(t.borderRightWidth),
    bottom: or(t.borderBottomWidth),
    left: or(t.borderLeftWidth)
  };
  return kd({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, TO = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return AO(t, r);
}, Oy = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function T2(e, t) {
  return !!(e === t || Oy(e) && Oy(t));
}
function R2(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!T2(e[r], t[r]))
      return !1;
  return !0;
}
function Wt(e, t) {
  t === void 0 && (t = R2);
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
var V2 = function(e) {
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
const M2 = process.env.NODE_ENV === "production", L2 = /[ \t]{2,}/g, B2 = /^[ \t]*/gm, Dy = (e) => e.replace(L2, " ").replace(B2, "").trim(), F2 = (e) => Dy(`
  %c@hello-pangea/dnd

  %c${Dy(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), j2 = (e) => [F2(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], W2 = "__@hello-pangea/dnd-disable-dev-warnings";
function RO(e, t) {
  M2 || typeof window < "u" && window[W2] || console[e](...j2(t));
}
const $r = RO.bind(null, "warn"), ul = RO.bind(null, "error");
function G2() {
}
function k2(e, t) {
  return {
    ...e,
    ...t
  };
}
function z2(e, t, r) {
  const o = t.map((n) => {
    const i = k2(r, n.options);
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
const H2 = process.env.NODE_ENV === "production", Ny = "Invariant failed";
class vo extends Error {
}
vo.prototype.toString = function() {
  return this.message;
};
function fe(e, t) {
  throw H2 ? new vo(Ny) : new vo(`${Ny}: ${t || ""}`);
}
class O7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = G2, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && $r(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof vo && (r.preventDefault(), process.env.NODE_ENV !== "production" && ul(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = z2(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof vo) {
      process.env.NODE_ENV !== "production" && ul(t.message), this.setState({});
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
const rn = {
  x: 0,
  y: 0
}, U2 = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), q2 = (e, t) => e.x === t.x && e.y === t.y, Y2 = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), K2 = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var X2 = (e, t) => {
  const r = fn({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const J2 = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Z2 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Q2 = (e, t) => t ? J2(e, t.scroll.diff.displacement) : e, eK = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, tK = (e, t) => t && t.shouldClipSubject ? X2(t.pageMarginBox, e) : fn(e);
var rK = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = Q2(e.marginBox, o), i = eK(n, r, t), a = tK(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Wt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Wt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const nK = Wt((e) => Object.values(e)), oK = Wt((e) => Object.values(e));
Wt((e, t) => oK(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function iK(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Wt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const aK = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, sK = {
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
Wt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: K2(e.line, r)
  };
});
var ri = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const cK = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), lK = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), zd = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Eo = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, uK = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Gr = `${uK.outOfTheWay}s ${zd.outOfTheWay}`, ni = {
  fluid: `opacity ${Gr}`,
  snap: `transform ${Gr}, opacity ${Gr}`,
  drop: (e) => {
    const t = `${e}s ${zd.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Gr}`,
  placeholder: `height ${Gr}, width ${Gr}, margin ${Gr}`
}, Cy = (e) => q2(e, rn) ? void 0 : `translate(${e.x}px, ${e.y}px)`, dl = {
  moveTo: Cy,
  drop: (e, t) => {
    const r = Cy(e);
    if (r)
      return t ? `${r} scale(${Eo.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var VO = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = U2({
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
}, dK = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot find document.documentElement") : fe()), e;
}, pK = () => {
  const e = dK();
  return VO({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Wt((e) => nK(e).filter((t) => !(!t.isEnabled || !t.frame)));
const MO = "data-rfd", _y = (() => {
  const e = `${MO}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Iy = {
  contextId: `${MO}-scroll-container-context-id`
}, fK = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var Hn = fK;
function mK(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var gK = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function LO(e) {
  return e instanceof gK(e).HTMLElement;
}
function bK(e, t) {
  const r = `[${_y.contextId}="${e}"]`, o = mK(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && $r(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(_y.draggableId) === t);
  return n ? LO(n) ? n : (process.env.NODE_ENV !== "production" && $r("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && $r(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var BO = _.createContext(null), hK = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot find document.body") : fe()), e;
};
let yK = 0;
const FO = {
  separator: "::"
};
function vK(e, t = FO) {
  return $t(() => `${e}${t.separator}${yK++}`, [t.separator, e]);
}
function EK(e, t = FO) {
  const r = _.useId();
  return $t(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var jO = "useId" in _ ? EK : vK, Hd = _.createContext(null);
function WO(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ud(e, t) {
  WO(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        ul(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function xK(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function qd(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Py = {
  dragging: 5e3,
  dropAnimating: 4500
}, wK = (e, t) => t ? ni.drop(t.duration) : e ? ni.snap : ni.fluid, SK = (e, t) => {
  if (e)
    return t ? Eo.opacity.drop : Eo.opacity.combining;
}, OK = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function DK(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = OK(e), s = !!n, l = s ? dl.drop(r, i) : dl.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: wK(a, n),
    transform: l,
    opacity: SK(i, s),
    zIndex: s ? Py.dropAnimating : Py.dragging,
    pointerEvents: "none"
  };
}
function NK(e) {
  return {
    transform: dl.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function CK(e) {
  return e.type === "DRAGGING" ? DK(e) : NK(e);
}
function _K(e, t, r = rn) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = AO(n, o), a = ll(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function IK(e) {
  const t = jO("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = $t(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Et((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot get dimension when no ref is set") : fe()), _K(r, h, g);
  }, [r, n]), m = $t(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  Hn(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), Hn(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Yd = _.createContext(null);
function GO(e) {
  e && LO(e) || (process.env.NODE_ENV !== "production" ? fe(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : fe());
}
function PK(e, t, r) {
  Ud(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? fe(!1, "Draggable requires a draggableId") : fe(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? fe(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : fe(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? fe(!1, `${o(n)} requires an integer index prop`) : fe(!1)), e.mapped.type !== "DRAGGING" && (GO(r()), e.isEnabled && (bK(t, n) || (process.env.NODE_ENV !== "production" ? fe(!1, `${o(n)} Unable to find drag handle`) : fe(!1))));
  });
}
function $K(e) {
  WO(() => {
    const t = L(e);
    Ud(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? fe(!1, "Draggable isClone prop value changed during component life") : fe(!1));
    }, [e]);
  });
}
function xi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? fe(!1, "Could not find required context") : fe()), t;
}
function AK(e) {
  e.preventDefault();
}
const TK = (e) => {
  const t = L(null), r = Et((v = null) => {
    t.current = v;
  }, []), o = Et(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = xi(Hd), {
    type: s,
    droppableId: l
  } = xi(Yd), u = $t(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (PK(e, n, o), $K(b), !b) {
    const v = $t(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    IK(v);
  }
  const O = $t(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: AK
  } : null, [n, i, c, p]), E = Et((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = $t(() => {
    const v = CK(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = $t(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var RK = TK, kO = (e, t) => e === t, zO = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const VK = (e) => e.combine ? e.combine.draggableId : null, MK = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function LK() {
  const e = Wt((o, n) => ({
    x: o,
    y: n
  })), t = Wt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Wt((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (qd(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = ri(o.impact), l = MK(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = zO(l), c = VK(l), p = {
        duration: o.dropDuration,
        curve: zd.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? Eo.opacity.drop : null,
        scale: c ? Eo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function HO(e = null) {
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
const BK = {
  mapped: {
    type: "SECONDARY",
    offset: rn,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: HO(null)
  }
};
function FK() {
  const e = Wt((i, a) => ({
    x: i,
    y: a
  })), t = Wt(HO), r = Wt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(rn, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = iK(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = Y2(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (qd(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const jK = () => {
  const e = LK(), t = FK();
  return (r, o) => e(r, o) || t(r, o) || BK;
}, WK = {
  dropAnimationFinished: lK
}, GK = IO(jK, WK, null, {
  context: BO,
  areStatePropsEqual: kO
})(RK);
var kK = GK;
function zK(e) {
  return xi(Yd).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(kK, e);
}
const Kd = (e) => (t) => e === t, HK = Kd("scroll"), UK = Kd("auto"), qK = Kd("visible"), $y = (e, t) => t(e.overflowX) || t(e.overflowY), YK = (e, t) => t(e.overflowX) && t(e.overflowY), UO = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return $y(r, HK) || $y(r, UK);
}, KK = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = hK(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, fe()), !UO(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return YK(o, qK) || process.env.NODE_ENV !== "production" && $r(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Xd = (e) => e == null ? null : e === document.body ? KK() ? e : null : e === document.documentElement ? null : UO(e) ? e : Xd(e.parentElement);
var XK = (e) => {
  !e || !Xd(e.parentElement) || process.env.NODE_ENV !== "production" && $r(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, pl = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const qO = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : qO(e.parentElement) : !1;
var JK = (e) => {
  const t = Xd(e), r = qO(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, ZK = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = VO({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: rn,
          displacement: rn
        }
      }
    };
  })(), u = n === "vertical" ? aK : sK, m = rK({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const QK = (e, t) => {
  const r = TO(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = $O({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return kd({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var eX = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = QK(e, l), m = ll(u, o), c = (() => {
    if (!l)
      return null;
    const p = TO(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: ll(p, o),
      scroll: pl(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return ZK({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const tX = {
  passive: !1
}, rX = {
  passive: !0
};
var Ay = (e) => e.shouldPublishImmediately ? tX : rX;
const Fo = (e) => e && e.env.closestScrollable || null;
function nX(e) {
  const t = L(null), r = xi(Hd), o = jO("droppable"), {
    registry: n,
    marshal: i
  } = r, a = xK(e), s = $t(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = $t(() => Wt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? fe(!1, "Can only update scroll when dragging") : fe());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = Et(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? rn : pl(y.env.closestScrollable);
  }, []), c = Et(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = $t(() => V2(c), [c]), g = Et(() => {
    const y = t.current, f = Fo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? fe(!1, "Could not find scroll options while scrolling") : fe()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = Et((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot collect a droppable while a drag is occurring") : fe());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot collect without a droppable ref") : fe());
    const C = JK(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = eX({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Iy.contextId, r.contextId), A.addEventListener("scroll", g, Ay(R.scrollOptions)), process.env.NODE_ENV !== "production" && XK(A)), P;
  }, [r.contextId, s, g, a]), b = Et(() => {
    const y = t.current, f = Fo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? fe(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : fe()), pl(f);
  }, []), d = Et(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot stop drag when no active drag") : fe());
    const f = Fo(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(Iy.contextId), f.removeEventListener("scroll", g, Ay(y.scrollOptions)));
  }, [g, p]), x = Et((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot scroll when there is no drag") : fe());
    const v = Fo(f);
    v || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot scroll a droppable with no closest scrollable") : fe()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = $t(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = $t(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  Hn(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && $r("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), Hn(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Hn(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ws() {
}
const oX = {
  width: 0,
  height: 0,
  margin: Z2
}, iX = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? oX : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, aX = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = iX({
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
    transition: r !== "none" ? ni.placeholder : null
  };
}, sX = (e) => {
  const t = L(null), r = Et(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), ws) : t.current ? ws : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : ws, [o, s, r]);
  const u = Et((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = aX({
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
var cX = _.memo(sX);
function Ss(e) {
  return typeof e == "boolean";
}
function Os(e, t) {
  t.forEach((r) => r(e));
}
const lX = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? fe(!1, "A Droppable requires a droppableId prop") : fe()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? fe(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : fe());
}, function({
  props: e
}) {
  Ss(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? fe(!1, "isDropDisabled must be a boolean") : fe()), Ss(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? fe(!1, "isCombineEnabled must be a boolean") : fe()), Ss(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? fe(!1, "ignoreContainerClipping must be a boolean") : fe());
}, function({
  getDroppableRef: e
}) {
  GO(e());
}], uX = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && $r(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], dX = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? fe(!1, "Must provide a clone render function (renderClone) for virtual lists") : fe());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? fe(!1, "Expected virtual list to not have a placeholder") : fe());
}];
function pX(e) {
  Ud(() => {
    Os(e, lX), e.props.mode === "standard" && Os(e, uX), e.props.mode === "virtual" && Os(e, dX);
  });
}
class fX extends _.PureComponent {
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
const mX = (e) => {
  const t = pt(Hd);
  t || (process.env.NODE_ENV !== "production" ? fe(!1, "Could not find app context") : fe());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = Et(() => n.current, []), E = Et((I = null) => {
    n.current = I;
  }, []), y = Et(() => i.current, []), f = Et((I = null) => {
    i.current = I;
  }, []);
  pX({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = Et(() => {
    o() && d({
      maxScroll: pK()
    });
  }, [o, d]);
  nX({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = $t(() => _.createElement(fX, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(cX, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = $t(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = $t(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(zK, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(Yd.Provider, {
    value: P
  }, a(C, h), A());
};
var gX = mX;
function bX() {
  return document.body || (process.env.NODE_ENV !== "production" ? fe(!1, "document.body is not ready") : fe()), document.body;
}
const Ty = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: bX
}, YO = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Ty)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Ty[r]
    });
  return t;
}, Ds = (e, t) => e === t.droppable.type, Ry = (e, t) => t.draggables[e.draggable.id], hX = () => {
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
  }, r = Wt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Wt((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = YO(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (qd(n)) {
      const c = n.critical;
      if (!Ds(l, c))
        return t;
      const p = Ry(c, n.dimensions), g = ri(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!Ds(l, c.critical))
        return t;
      const p = Ry(c.critical, n.dimensions);
      return o(s, u, zO(c.result) === s, ri(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!Ds(l, c.critical))
        return t;
      const p = ri(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, yX = {
  updateViewportMaxScroll: cK
};
IO(hX, yX, (e, t, r) => ({
  ...YO(r),
  ...e,
  ...t
}), {
  context: BO,
  areStatePropsEqual: kO
})(gX);
var Vy;
(function(e) {
  e.event = "event", e.props = "prop";
})(Vy || (Vy = {}));
var My = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + My(), "" + My();
function vX(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fl = { exports: {} }, Ns = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ly;
function EX() {
  if (Ly) return Ns;
  Ly = 1;
  var e = _;
  function t(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, p) {
    var g = p(), h = o({ inst: { value: g, getSnapshot: p } }), b = h[0].inst, d = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = p, l(b) && d({ inst: b });
      },
      [c, g, p]
    ), n(
      function() {
        return l(b) && d({ inst: b }), c(function() {
          l(b) && d({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var g = p();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, p) {
    return p();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Ns.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Ns;
}
var By = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fy;
function xX() {
  return Fy || (Fy = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var d = h();
        i(b, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      d = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = d[0].inst, O = d[1];
      return l(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && O({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && O({ inst: x }), g(function() {
            r(x) && O({ inst: x });
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
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, l = n.useLayoutEffect, u = n.useDebugValue, m = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    By.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), By;
}
process.env.NODE_ENV === "production" ? fl.exports = EX() : fl.exports = xX();
var Jd = fl.exports, Cs = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jy;
function wX() {
  if (jy) return Cs;
  jy = 1;
  var e = _, t = Jd;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Cs.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!O) {
            if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = p(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var O = !1, E, y, f = c === void 0 ? null : c;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, c, p, g]
    );
    var d = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = d;
      },
      [d]
    ), l(d), d;
  }, Cs;
}
var Wy = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gy;
function SX() {
  return Gy || (Gy = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Jd, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Wy.useSyncExternalStoreWithSelector = function(u, m, c, p, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!O) {
              if (O = !0, E = v, v = p(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = p(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var O = !1, E, y, f = c === void 0 ? null : c;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, c, p, g]
      );
      var d = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = d;
        },
        [d]
      ), l(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Wy;
}
process.env.NODE_ENV === "production" ? wX() : SX();
function OX(e) {
  e();
}
let KO = OX;
const DX = (e) => KO = e, NX = () => KO, ky = Symbol.for("react-redux-context"), zy = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function CX() {
  var e;
  if (!N.createContext) return {};
  const t = (e = zy[ky]) != null ? e : zy[ky] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const _X = /* @__PURE__ */ CX(), IX = () => {
  throw new Error("uSES not initialized!");
};
function On() {
  return On = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, On.apply(null, arguments);
}
function XO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var ml = { exports: {} }, We = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hy;
function PX() {
  if (Hy) return We;
  Hy = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case l:
            case u:
            case o:
            case i:
            case n:
            case c:
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
  return We.AsyncMode = l, We.ConcurrentMode = u, We.ContextConsumer = s, We.ContextProvider = a, We.Element = t, We.ForwardRef = m, We.Fragment = o, We.Lazy = h, We.Memo = g, We.Portal = r, We.Profiler = i, We.StrictMode = n, We.Suspense = c, We.isAsyncMode = function(f) {
    return y(f) || E(f) === l;
  }, We.isConcurrentMode = y, We.isContextConsumer = function(f) {
    return E(f) === s;
  }, We.isContextProvider = function(f) {
    return E(f) === a;
  }, We.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, We.isForwardRef = function(f) {
    return E(f) === m;
  }, We.isFragment = function(f) {
    return E(f) === o;
  }, We.isLazy = function(f) {
    return E(f) === h;
  }, We.isMemo = function(f) {
    return E(f) === g;
  }, We.isPortal = function(f) {
    return E(f) === r;
  }, We.isProfiler = function(f) {
    return E(f) === i;
  }, We.isStrictMode = function(f) {
    return E(f) === n;
  }, We.isSuspense = function(f) {
    return E(f) === c;
  }, We.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === c || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === d || f.$$typeof === x || f.$$typeof === O || f.$$typeof === b);
  }, We.typeOf = E, We;
}
var it = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uy;
function $X() {
  return Uy || (Uy = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === c || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === m || w.$$typeof === d || w.$$typeof === x || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ee = w.$$typeof;
        switch (ee) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case o:
              case i:
              case n:
              case c:
                return S;
              default:
                var Q = S && S.$$typeof;
                switch (Q) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return Q;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var f = l, v = u, D = s, C = a, R = t, P = m, A = o, I = h, T = g, F = r, k = i, V = n, W = c, j = !1;
    function G(w) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === l;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function q(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === m;
    }
    function Z(w) {
      return y(w) === o;
    }
    function te(w) {
      return y(w) === h;
    }
    function H(w) {
      return y(w) === g;
    }
    function X(w) {
      return y(w) === r;
    }
    function M(w) {
      return y(w) === i;
    }
    function J(w) {
      return y(w) === n;
    }
    function be(w) {
      return y(w) === c;
    }
    it.AsyncMode = f, it.ConcurrentMode = v, it.ContextConsumer = D, it.ContextProvider = C, it.Element = R, it.ForwardRef = P, it.Fragment = A, it.Lazy = I, it.Memo = T, it.Portal = F, it.Profiler = k, it.StrictMode = V, it.Suspense = W, it.isAsyncMode = G, it.isConcurrentMode = z, it.isContextConsumer = B, it.isContextProvider = q, it.isElement = Y, it.isForwardRef = K, it.isFragment = Z, it.isLazy = te, it.isMemo = H, it.isPortal = X, it.isProfiler = M, it.isStrictMode = J, it.isSuspense = be, it.isValidElementType = E, it.typeOf = y;
  }()), it;
}
process.env.NODE_ENV === "production" ? ml.exports = PX() : ml.exports = $X();
var AX = ml.exports, Zd = AX, TX = {
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
}, RX = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, VX = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, JO = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qd = {};
Qd[Zd.ForwardRef] = VX;
Qd[Zd.Memo] = JO;
function qy(e) {
  return Zd.isMemo(e) ? JO : Qd[e.$$typeof] || TX;
}
var MX = Object.defineProperty, LX = Object.getOwnPropertyNames, Yy = Object.getOwnPropertySymbols, BX = Object.getOwnPropertyDescriptor, FX = Object.getPrototypeOf, Ky = Object.prototype;
function ZO(e, t, r) {
  if (typeof t != "string") {
    if (Ky) {
      var o = FX(t);
      o && o !== Ky && ZO(e, o, r);
    }
    var n = LX(t);
    Yy && (n = n.concat(Yy(t)));
    for (var i = qy(e), a = qy(t), s = 0; s < n.length; ++s) {
      var l = n[s];
      if (!RX[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = BX(t, l);
        try {
          MX(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var jX = ZO;
const Xy = /* @__PURE__ */ vX(jX);
var gl = { exports: {} }, Ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jy;
function WX() {
  if (Jy) return Ge;
  Jy = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case l:
                case p:
                case c:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Ge.ContextConsumer = a, Ge.ContextProvider = i, Ge.Element = e, Ge.ForwardRef = l, Ge.Fragment = r, Ge.Lazy = p, Ge.Memo = c, Ge.Portal = t, Ge.Profiler = n, Ge.StrictMode = o, Ge.Suspense = u, Ge.SuspenseList = m, Ge.isAsyncMode = function() {
    return !1;
  }, Ge.isConcurrentMode = function() {
    return !1;
  }, Ge.isContextConsumer = function(d) {
    return b(d) === a;
  }, Ge.isContextProvider = function(d) {
    return b(d) === i;
  }, Ge.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Ge.isForwardRef = function(d) {
    return b(d) === l;
  }, Ge.isFragment = function(d) {
    return b(d) === r;
  }, Ge.isLazy = function(d) {
    return b(d) === p;
  }, Ge.isMemo = function(d) {
    return b(d) === c;
  }, Ge.isPortal = function(d) {
    return b(d) === t;
  }, Ge.isProfiler = function(d) {
    return b(d) === n;
  }, Ge.isStrictMode = function(d) {
    return b(d) === o;
  }, Ge.isSuspense = function(d) {
    return b(d) === u;
  }, Ge.isSuspenseList = function(d) {
    return b(d) === m;
  }, Ge.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === n || d === o || d === u || d === m || d === g || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === c || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || d.$$typeof === h || d.getModuleId !== void 0);
  }, Ge.typeOf = b, Ge;
}
var at = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zy;
function GX() {
  return Zy || (Zy = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, d = !1, x = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === m || x || S === g || h || b || d || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var Q = S.$$typeof;
        switch (Q) {
          case e:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return ge;
              default:
                var U = ge && ge.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case l:
                  case p:
                  case c:
                  case i:
                    return U;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var v = a, D = i, C = e, R = l, P = r, A = p, I = c, T = t, F = n, k = o, V = u, W = m, j = !1, G = !1;
    function z(S) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
      return f(S) === l;
    }
    function te(S) {
      return f(S) === r;
    }
    function H(S) {
      return f(S) === p;
    }
    function X(S) {
      return f(S) === c;
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
    function w(S) {
      return f(S) === u;
    }
    function ee(S) {
      return f(S) === m;
    }
    at.ContextConsumer = v, at.ContextProvider = D, at.Element = C, at.ForwardRef = R, at.Fragment = P, at.Lazy = A, at.Memo = I, at.Portal = T, at.Profiler = F, at.StrictMode = k, at.Suspense = V, at.SuspenseList = W, at.isAsyncMode = z, at.isConcurrentMode = B, at.isContextConsumer = q, at.isContextProvider = Y, at.isElement = K, at.isForwardRef = Z, at.isFragment = te, at.isLazy = H, at.isMemo = X, at.isPortal = M, at.isProfiler = J, at.isStrictMode = be, at.isSuspense = w, at.isSuspenseList = ee, at.isValidElementType = y, at.typeOf = f;
  }()), at;
}
process.env.NODE_ENV === "production" ? gl.exports = WX() : gl.exports = GX();
var Qy = gl.exports;
function ep(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function _s(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ep(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function kX(e, t, r) {
  _s(e, "mapStateToProps"), _s(t, "mapDispatchToProps"), _s(r, "mergeProps");
}
const zX = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function HX(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, m, c, p;
  function g(O, E) {
    return l = O, u = E, m = e(l, u), c = t(o, u), p = r(m, c, u), s = !0, p;
  }
  function h() {
    return m = e(l, u), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(l, u)), t.dependsOnOwnProps && (c = t(o, u)), p = r(m, c, u), p;
  }
  function d() {
    const O = e(l, u), E = !a(O, m);
    return m = O, E && (p = r(m, c, u)), p;
  }
  function x(O, E) {
    const y = !i(E, u), f = !n(O, l, E, u);
    return l = O, u = E, y && f ? h() : y ? b() : f ? d() : p;
  }
  return function(O, E) {
    return s ? x(O, E) : g(O, E);
  };
}
function UX(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = XO(t, zX);
  const a = r(e, i), s = o(e, i), l = n(e, i);
  return process.env.NODE_ENV !== "production" && kX(a, s, l), HX(a, s, l, e, i);
}
function qX(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function YX(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function QO(e, t, r) {
  YX(e) || ep(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function bl(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function ev(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function eD(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = ev(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = ev(s), s = n(i, a)), process.env.NODE_ENV !== "production" && QO(s, o, t), s;
    }, n;
  };
}
function tp(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function KX(e) {
  return e && typeof e == "object" ? bl((t) => (
    // @ts-ignore
    qX(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    eD(e, "mapDispatchToProps")
  ) : tp(e, "mapDispatchToProps") : bl((t) => ({
    dispatch: t
  }));
}
function XX(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    eD(e, "mapStateToProps")
  ) : tp(e, "mapStateToProps") : bl(() => ({}));
}
function JX(e, t, r) {
  return On({}, r, e, t);
}
function ZX(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && QO(i, r, "mergeProps")), i;
    };
  };
}
function QX(e) {
  return e ? typeof e == "function" ? ZX(e) : tp(e, "mergeProps") : () => JX;
}
function e3() {
  const e = NX();
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
const tv = {
  notify() {
  },
  get: () => []
};
function t3(e, t) {
  let r, o = tv, n = 0, i = !1;
  function a(b) {
    m();
    const d = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, d(), c());
    };
  }
  function s() {
    o.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), o = e3());
  }
  function c() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = tv);
  }
  function p() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const r3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", hl = r3 ? N.useLayoutEffect : N.useEffect;
function rv(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Is(e, t) {
  if (rv(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !rv(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const n3 = ["reactReduxForwardedRef"];
let tD = IX;
const o3 = (e) => {
  tD = e;
}, i3 = [null, null], a3 = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function s3(e, t, r) {
  hl(() => e(...t), r);
}
function c3(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function l3(e, t, r, o, n, i, a, s, l, u, m) {
  if (!e) return () => {
  };
  let c = !1, p = null;
  const g = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, d;
    try {
      b = o(h, n.current);
    } catch (x) {
      d = x, p = x;
    }
    d || (p = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, p)
      throw p;
  };
}
function u3(e, t) {
  return e === t;
}
let nv = !1;
function rD(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = u3,
  areOwnPropsEqual: i = Is,
  areStatePropsEqual: a = Is,
  areMergedPropsEqual: s = Is,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = _X
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !nv && (nv = !0, ep('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, c = XX(e), p = KX(t), g = QX(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Qy.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${a3(b)}`);
    const d = b.displayName || b.name || "Component", x = `Connect(${d})`, O = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: d,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: p,
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
        } = f, J = XO(f, n3);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Qy.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), P = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, I = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !A && !I)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : P.store, F = I ? P.getServerState : T.getState, k = N.useMemo(() => UX(T.dispatch, O), [T]), [V, W] = N.useMemo(() => {
        if (!h) return i3;
        const M = t3(T, A ? void 0 : P.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, P]), j = N.useMemo(() => A ? P : On({}, P, {
        subscription: V
      }), [A, P, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      hl(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), te = N.useMemo(() => (M) => V ? l3(
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
      s3(c3, [z, G, q, C, B, W]);
      let H;
      try {
        H = tD(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          F ? () => k(F(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      hl(() => {
        K.current = void 0, B.current = void 0, G.current = H;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, On({}, H, {
          ref: D
        }))
      ), [D, b, H]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: j
      }, X) : X, [R, X, j]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, l) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, On({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Xy(f, b);
    }
    return Xy(y, b);
  };
}
o3(Jd.useSyncExternalStore);
DX(pr);
function d3(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function nD(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && d3(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return re(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function p3(e, t) {
  return nD(function() {
    return e;
  }, t);
}
var At = nD, xt = p3, f3 = process.env.NODE_ENV === "production", Ps = "Invariant failed";
function ov(e, t) {
  if (f3)
    throw new Error(Ps);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Ps, ": ").concat(r) : Ps;
  throw new Error(o);
}
var mn = function(e) {
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
}, oD = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, iv = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, m3 = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, $s = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, rp = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? $s : r, n = e.border, i = n === void 0 ? $s : n, a = e.padding, s = a === void 0 ? $s : a, l = mn(oD(t, o)), u = mn(iv(t, i)), m = mn(iv(u, s));
  return {
    marginBox: l,
    borderBox: mn(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, ir = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? ov(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : ov()), o;
}, g3 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, b3 = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = m3(r, t);
  return rp({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, yl = function(e, t) {
  return t === void 0 && (t = g3()), b3(e, t);
}, iD = function(e, t) {
  var r = {
    top: ir(t.marginTop),
    right: ir(t.marginRight),
    bottom: ir(t.marginBottom),
    left: ir(t.marginLeft)
  }, o = {
    top: ir(t.paddingTop),
    right: ir(t.paddingRight),
    bottom: ir(t.paddingBottom),
    left: ir(t.paddingLeft)
  }, n = {
    top: ir(t.borderTopWidth),
    right: ir(t.borderRightWidth),
    bottom: ir(t.borderBottomWidth),
    left: ir(t.borderLeftWidth)
  };
  return rp({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, aD = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return iD(t, r);
}, av = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function h3(e, t) {
  return !!(e === t || av(e) && av(t));
}
function y3(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!h3(e[r], t[r]))
      return !1;
  return !0;
}
function Gt(e, t) {
  t === void 0 && (t = y3);
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
var v3 = function(e) {
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
const E3 = process.env.NODE_ENV === "production", x3 = /[ \t]{2,}/g, w3 = /^[ \t]*/gm, sv = (e) => e.replace(x3, " ").replace(w3, "").trim(), S3 = (e) => sv(`
  %c@hello-pangea/dnd

  %c${sv(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), O3 = (e) => [S3(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], D3 = "__@hello-pangea/dnd-disable-dev-warnings";
function sD(e, t) {
  E3 || typeof window < "u" && window[D3] || console[e](...O3(t));
}
const Ar = sD.bind(null, "warn"), vl = sD.bind(null, "error");
function N3() {
}
function C3(e, t) {
  return {
    ...e,
    ...t
  };
}
function _3(e, t, r) {
  const o = t.map((n) => {
    const i = C3(r, n.options);
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
const I3 = process.env.NODE_ENV === "production", cv = "Invariant failed";
class xo extends Error {
}
xo.prototype.toString = function() {
  return this.message;
};
function me(e, t) {
  throw I3 ? new xo(cv) : new xo(`${cv}: ${t || ""}`);
}
class D7 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = N3, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Ar(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof xo && (r.preventDefault(), process.env.NODE_ENV !== "production" && vl(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = _3(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof xo) {
      process.env.NODE_ENV !== "production" && vl(t.message), this.setState({});
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
const nn = {
  x: 0,
  y: 0
}, P3 = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), $3 = (e, t) => e.x === t.x && e.y === t.y, A3 = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), T3 = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var R3 = (e, t) => {
  const r = mn({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const V3 = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), M3 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, L3 = (e, t) => t ? V3(e, t.scroll.diff.displacement) : e, B3 = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, F3 = (e, t) => t && t.shouldClipSubject ? R3(t.pageMarginBox, e) : mn(e);
var j3 = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = L3(e.marginBox, o), i = B3(n, r, t), a = F3(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Gt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Gt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const W3 = Gt((e) => Object.values(e)), G3 = Gt((e) => Object.values(e));
Gt((e, t) => G3(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function k3(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Gt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const z3 = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, H3 = {
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
Gt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: T3(e.line, r)
  };
});
var oi = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const U3 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), q3 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), np = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, wo = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Y3 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, kr = `${Y3.outOfTheWay}s ${np.outOfTheWay}`, ii = {
  fluid: `opacity ${kr}`,
  snap: `transform ${kr}, opacity ${kr}`,
  drop: (e) => {
    const t = `${e}s ${np.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${kr}`,
  placeholder: `height ${kr}, width ${kr}, margin ${kr}`
}, lv = (e) => $3(e, nn) ? void 0 : `translate(${e.x}px, ${e.y}px)`, El = {
  moveTo: lv,
  drop: (e, t) => {
    const r = lv(e);
    if (r)
      return t ? `${r} scale(${wo.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var cD = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = P3({
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
}, K3 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? me(!1, "Cannot find document.documentElement") : me()), e;
}, X3 = () => {
  const e = K3();
  return cD({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Gt((e) => W3(e).filter((t) => !(!t.isEnabled || !t.frame)));
const lD = "data-rfd", uv = (() => {
  const e = `${lD}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), dv = {
  contextId: `${lD}-scroll-container-context-id`
}, J3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? lr : re;
var Un = J3;
function Z3(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Q3 = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function uD(e) {
  return e instanceof Q3(e).HTMLElement;
}
function e5(e, t) {
  const r = `[${uv.contextId}="${e}"]`, o = Z3(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Ar(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(uv.draggableId) === t);
  return n ? uD(n) ? n : (process.env.NODE_ENV !== "production" && Ar("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ar(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var dD = _.createContext(null), t5 = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? me(!1, "Cannot find document.body") : me()), e;
};
let r5 = 0;
const pD = {
  separator: "::"
};
function n5(e, t = pD) {
  return At(() => `${e}${t.separator}${r5++}`, [t.separator, e]);
}
function o5(e, t = pD) {
  const r = _.useId();
  return At(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var fD = "useId" in _ ? o5 : n5, op = _.createContext(null);
function mD(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ip(e, t) {
  mD(() => {
    re(() => {
      try {
        e();
      } catch (r) {
        vl(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function i5(e) {
  const t = L(e);
  return re(() => {
    t.current = e;
  }), t;
}
function ap(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const pv = {
  dragging: 5e3,
  dropAnimating: 4500
}, a5 = (e, t) => t ? ii.drop(t.duration) : e ? ii.snap : ii.fluid, s5 = (e, t) => {
  if (e)
    return t ? wo.opacity.drop : wo.opacity.combining;
}, c5 = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function l5(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = c5(e), s = !!n, l = s ? El.drop(r, i) : El.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: a5(a, n),
    transform: l,
    opacity: s5(i, s),
    zIndex: s ? pv.dropAnimating : pv.dragging,
    pointerEvents: "none"
  };
}
function u5(e) {
  return {
    transform: El.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function d5(e) {
  return e.type === "DRAGGING" ? l5(e) : u5(e);
}
function p5(e, t, r = nn) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = iD(n, o), a = yl(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function f5(e) {
  const t = fD("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = At(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = xt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? me(!1, "Cannot get dimension when no ref is set") : me()), p5(r, h, g);
  }, [r, n]), m = At(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = L(m), p = L(!0);
  Un(() => (o.draggable.register(c.current), () => o.draggable.unregister(c.current)), [o.draggable]), Un(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const g = c.current;
    c.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var sp = _.createContext(null);
function gD(e) {
  e && uD(e) || (process.env.NODE_ENV !== "production" ? me(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : me());
}
function m5(e, t, r) {
  ip(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? me(!1, "Draggable requires a draggableId") : me(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? me(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : me(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? me(!1, `${o(n)} requires an integer index prop`) : me(!1)), e.mapped.type !== "DRAGGING" && (gD(r()), e.isEnabled && (e5(t, n) || (process.env.NODE_ENV !== "production" ? me(!1, `${o(n)} Unable to find drag handle`) : me(!1))));
  });
}
function g5(e) {
  mD(() => {
    const t = L(e);
    ip(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? me(!1, "Draggable isClone prop value changed during component life") : me(!1));
    }, [e]);
  });
}
function wi(e) {
  const t = pt(e);
  return t || (process.env.NODE_ENV !== "production" ? me(!1, "Could not find required context") : me()), t;
}
function b5(e) {
  e.preventDefault();
}
const h5 = (e) => {
  const t = L(null), r = xt((v = null) => {
    t.current = v;
  }, []), o = xt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = wi(op), {
    type: s,
    droppableId: l
  } = wi(sp), u = At(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: m,
    draggableId: c,
    isEnabled: p,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: d,
    dropAnimationFinished: x
  } = e;
  if (m5(e, n, o), g5(b), !b) {
    const v = At(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: p
    }), [u, a, o, h, g, p]);
    f5(v);
  }
  const O = At(() => p ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: b5
  } : null, [n, i, c, p]), E = xt((v) => {
    d.type === "DRAGGING" && d.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : ur(x));
  }, [x, d]), y = At(() => {
    const v = d5(d), D = d.type === "DRAGGING" && d.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": c,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: O
    };
  }, [n, O, c, d, E, r]), f = At(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, d.snapshot, f));
};
var y5 = h5, bD = (e, t) => e === t, hD = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const v5 = (e) => e.combine ? e.combine.draggableId : null, E5 = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function x5() {
  const e = Gt((o, n) => ({
    x: o,
    y: n
  })), t = Gt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Gt((o, n, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, l, null)
    }
  }));
  return (o, n) => {
    if (ap(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = oi(o.impact), l = E5(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], l = i.result, u = l.mode, m = hD(l), c = v5(l), p = {
        duration: o.dropDuration,
        curve: np.drop,
        moveTo: o.newHomeClientOffset,
        opacity: c ? wo.opacity.drop : null,
        scale: c ? wo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: p,
          draggingOver: m,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, c, p)
        }
      };
    }
    return null;
  };
}
function yD(e = null) {
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
const w5 = {
  mapped: {
    type: "SECONDARY",
    offset: nn,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: yD(null)
  }
};
function S5() {
  const e = Gt((i, a) => ({
    x: i,
    y: a
  })), t = Gt(yD), r = Gt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(nn, i, !0) : null, n = (i, a, s, l) => {
    const u = s.displaced.visible[i], m = !!(l.inVirtualList && l.effected[i]), c = k3(s), p = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(p);
      if (s.displaced.invisible[i])
        return null;
      const b = A3(l.displacedBy.point), d = e(b.x, b.y);
      return r(d, p, !0);
    }
    if (m)
      return o(p);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (ap(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const O5 = () => {
  const e = x5(), t = S5();
  return (r, o) => e(r, o) || t(r, o) || w5;
}, D5 = {
  dropAnimationFinished: q3
}, N5 = rD(O5, D5, null, {
  context: dD,
  areStatePropsEqual: bD
})(y5);
var C5 = N5;
function _5(e) {
  return wi(sp).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(C5, e);
}
const cp = (e) => (t) => e === t, I5 = cp("scroll"), P5 = cp("auto"), $5 = cp("visible"), fv = (e, t) => t(e.overflowX) || t(e.overflowY), A5 = (e, t) => t(e.overflowX) && t(e.overflowY), vD = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return fv(r, I5) || fv(r, P5);
}, T5 = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = t5(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, me()), !vD(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return A5(o, $5) || process.env.NODE_ENV !== "production" && Ar(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, lp = (e) => e == null ? null : e === document.body ? T5() ? e : null : e === document.documentElement ? null : vD(e) ? e : lp(e.parentElement);
var R5 = (e) => {
  !e || !lp(e.parentElement) || process.env.NODE_ENV !== "production" && Ar(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, xl = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ED = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ED(e.parentElement) : !1;
var V5 = (e) => {
  const t = lp(e), r = ED(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, M5 = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: c,
      client: p
    } = s, g = cD({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: nn,
          displacement: nn
        }
      }
    };
  })(), u = n === "vertical" ? z3 : H3, m = j3({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: m
  };
};
const L5 = (e, t) => {
  const r = aD(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = oD({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return rp({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var B5 = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = L5(e, l), m = yl(u, o), c = (() => {
    if (!l)
      return null;
    const p = aD(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: yl(p, o),
      scroll: xl(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return M5({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: c
  });
};
const F5 = {
  passive: !1
}, j5 = {
  passive: !0
};
var mv = (e) => e.shouldPublishImmediately ? F5 : j5;
const jo = (e) => e && e.env.closestScrollable || null;
function W5(e) {
  const t = L(null), r = wi(op), o = fD("droppable"), {
    registry: n,
    marshal: i
  } = r, a = i5(e), s = At(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = L(s), u = At(() => Gt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? me(!1, "Can only update scroll when dragging") : me());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = xt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? nn : xl(y.env.closestScrollable);
  }, []), c = xt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), p = At(() => v3(c), [c]), g = xt(() => {
    const y = t.current, f = jo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? me(!1, "Could not find scroll options while scrolling") : me()), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    p();
  }, [p, c]), h = xt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? me(!1, "Cannot collect a droppable while a drag is occurring") : me());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? me(!1, "Cannot collect without a droppable ref") : me());
    const C = V5(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const P = B5({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(dv.contextId, r.contextId), A.addEventListener("scroll", g, mv(R.scrollOptions)), process.env.NODE_ENV !== "production" && R5(A)), P;
  }, [r.contextId, s, g, a]), b = xt(() => {
    const y = t.current, f = jo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? me(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : me()), xl(f);
  }, []), d = xt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? me(!1, "Cannot stop drag when no active drag") : me());
    const f = jo(y);
    t.current = null, f && (p.cancel(), f.removeAttribute(dv.contextId), f.removeEventListener("scroll", g, mv(y.scrollOptions)));
  }, [g, p]), x = xt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? me(!1, "Cannot scroll when there is no drag") : me());
    const v = jo(f);
    v || (process.env.NODE_ENV !== "production" ? me(!1, "Cannot scroll a droppable with no closest scrollable") : me()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), O = At(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: d,
    scroll: x
  }), [d, h, b, x]), E = At(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  Un(() => (l.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ar("Unsupported: changing the droppableId or type of a Droppable during a drag"), d()), n.droppable.unregister(E);
  }), [O, s, d, E, i, n.droppable]), Un(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Un(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function As() {
}
const G5 = {
  width: 0,
  height: 0,
  margin: M3
}, k5 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? G5 : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, z5 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = k5({
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
    transition: r !== "none" ? ii.placeholder : null
  };
}, H5 = (e) => {
  const t = L(null), r = xt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  re(() => s ? o !== "open" ? (r(), l(!1), As) : t.current ? As : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : As, [o, s, r]);
  const u = xt((c) => {
    c.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = z5({
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
var U5 = _.memo(H5);
function Ts(e) {
  return typeof e == "boolean";
}
function Rs(e, t) {
  t.forEach((r) => r(e));
}
const q5 = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? me(!1, "A Droppable requires a droppableId prop") : me()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? me(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : me());
}, function({
  props: e
}) {
  Ts(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? me(!1, "isDropDisabled must be a boolean") : me()), Ts(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? me(!1, "isCombineEnabled must be a boolean") : me()), Ts(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? me(!1, "ignoreContainerClipping must be a boolean") : me());
}, function({
  getDroppableRef: e
}) {
  gD(e());
}], Y5 = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Ar(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], K5 = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? me(!1, "Must provide a clone render function (renderClone) for virtual lists") : me());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? me(!1, "Expected virtual list to not have a placeholder") : me());
}];
function X5(e) {
  ip(() => {
    Rs(e, q5), e.props.mode === "standard" && Rs(e, Y5), e.props.mode === "virtual" && Rs(e, K5);
  });
}
class J5 extends _.PureComponent {
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
const Z5 = (e) => {
  const t = pt(op);
  t || (process.env.NODE_ENV !== "production" ? me(!1, "Could not find app context") : me());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    ignoreContainerClipping: c,
    isDropDisabled: p,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: d,
    getContainerForClone: x
  } = e, O = xt(() => n.current, []), E = xt((I = null) => {
    n.current = I;
  }, []), y = xt(() => i.current, []), f = xt((I = null) => {
    i.current = I;
  }, []);
  X5({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const v = xt(() => {
    o() && d({
      maxScroll: X3()
    });
  }, [o, d]);
  W5({
    droppableId: s,
    type: l,
    mode: u,
    direction: m,
    isDropDisabled: p,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const D = At(() => _.createElement(J5, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: T,
    animate: F
  }) => _.createElement(U5, {
    placeholder: T,
    onClose: I,
    innerRef: f,
    animate: F,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = At(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, P = At(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: R
  }), [s, R, l]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: T
    } = b, F = _.createElement(_5, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, I));
    return dr.createPortal(F, x());
  }
  return _.createElement(sp.Provider, {
    value: P
  }, a(C, h), A());
};
var Q5 = Z5;
function e7() {
  return document.body || (process.env.NODE_ENV !== "production" ? me(!1, "document.body is not ready") : me()), document.body;
}
const gv = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: e7
}, xD = (e) => {
  let t = {
    ...e
  }, r;
  for (r in gv)
    e[r] === void 0 && (t = {
      ...t,
      [r]: gv[r]
    });
  return t;
}, Vs = (e, t) => e === t.droppable.type, bv = (e, t) => t.draggables[e.draggable.id], t7 = () => {
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
  }, r = Gt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Gt((n, i, a, s, l, u) => {
    const m = l.descriptor.id;
    if (l.descriptor.droppableId === n) {
      const p = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: p
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: m,
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
  return (n, i) => {
    const a = xD(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (ap(n)) {
      const c = n.critical;
      if (!Vs(l, c))
        return t;
      const p = bv(c, n.dimensions), g = oi(n.impact) === s;
      return o(s, u, g, g, p, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const c = n.completed;
      if (!Vs(l, c.critical))
        return t;
      const p = bv(c.critical, n.dimensions);
      return o(s, u, hD(c.result) === s, oi(c.impact) === s, p, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const c = n.completed;
      if (!Vs(l, c.critical))
        return t;
      const p = oi(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, r7 = {
  updateViewportMaxScroll: U3
};
rD(t7, r7, (e, t, r) => ({
  ...xD(r),
  ...e,
  ...t
}), {
  context: dD,
  areStatePropsEqual: bD
})(Q5);
const N7 = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, o] = Ee(!1), n = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    o(i > 100);
  };
  return re(() => (window.addEventListener("scroll", n), () => {
    window.removeEventListener("scroll", n);
  }), []), r ? /* @__PURE__ */ ne(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ ne(
        LP,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
};
export {
  a7 as Button,
  s7 as Checkbox,
  c7 as Chips,
  wl as ErrorText,
  ai as Icon,
  l7 as Input,
  u7 as List,
  hv as Loader,
  d7 as MultiSelectSearch,
  N7 as ScrollTopButton,
  p7 as Search,
  f7 as Select,
  m7 as Table,
  g7 as Textarea,
  Cv as Wrapper,
  Tv as useDebounce,
  b7 as useScroll
};
