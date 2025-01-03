import { jsx as k, jsxs as Fe, Fragment as Ur } from "react/jsx-runtime";
import * as _ from "react";
import P, { useState as $e, useEffect as ae, useRef as F, useMemo as Pp, useLayoutEffect as Sr, useContext as St } from "react";
import nn, { unstable_batchedUpdates as on, flushSync as Or } from "react-dom";
const Hr = ({ name: e, className: t }) => /* @__PURE__ */ k("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ k(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), Dl = ({ style: e, text: t }) => /* @__PURE__ */ Fe("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ k("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ k("span", { className: "text-base", children: t })
] }), d0 = ({
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
  const [u, p] = $e(""), c = () => {
    o && n === "1C" && (p("Отправляем запрос в 1С"), setTimeout(
      () => p(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  ae(() => {
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
  return /* @__PURE__ */ Fe(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: d,
      ...l,
      children: [
        o ? /* @__PURE__ */ k(Dl, { text: n === "1C" ? u : void 0 }) : e,
        a && !o && /* @__PURE__ */ k(
          Hr,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, ei = ({ error: e }) => /* @__PURE__ */ k("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ k("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), p0 = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: l
}) => /* @__PURE__ */ Fe(Ur, { children: [
  /* @__PURE__ */ Fe(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ k(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ k("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ k(
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
  a && /* @__PURE__ */ k(ei, { error: a })
] }), f0 = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ k("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ k(Ur, { children: o.title ? /* @__PURE__ */ k(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ k(Ur, {}) })) });
function ti(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var ar;
(function(e) {
  e.event = "event", e.props = "prop";
})(ar || (ar = {}));
function ut() {
}
function Ap(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function At(e) {
  return !!(e || "").match(/\d/);
}
function Pt(e) {
  return e == null;
}
function Rp(e) {
  return typeof e == "number" && isNaN(e);
}
function Nl(e) {
  return Pt(e) || Rp(e) || typeof e == "number" && !isFinite(e);
}
function Cl(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Tp(e) {
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
function $p(e, t, r) {
  var n = Tp(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function Vp(e) {
  var t = F(e);
  t.current = e;
  var r = F(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function ri(e, t) {
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
function Mp(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function _l(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function va(e, t) {
  return Array(t + 1).join(e);
}
function Il(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + va("0", Math.abs(a)) + o : a >= s ? o = o + va("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function ya(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = ri(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, l = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : l.toFixed(t), p = u.split("."), c = i;
  i && Number(p[0]) && (c = i.split("").reverse().reduce(function(b, f, y) {
    return b.length > y ? (Number(b[0]) + Number(f)).toString() + b.substring(1, b.length) : f + b;
  }, p[0]));
  var d = _l(p[1] || "", t, r), m = s ? "-" : "", h = n ? "." : "";
  return "" + m + c + h + d;
}
function gt(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var Pl = Ap(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), Lp = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Bp(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function mn(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Fp() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Al(e) {
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
function Rl(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Gp(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function kp(e, t, r, n, o, i, a) {
  a === void 0 && (a = Gp);
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
function qr(e, t, r, n) {
  var o = e.length;
  if (t = Bp(t, 0, o), n === "left") {
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
function Wp(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(At(e[r]) || At(e[r - 1]));
  return t;
}
function Tl(e, t, r, n, o, i) {
  i === void 0 && (i = ut);
  var a = Vp(function(h, b) {
    var f, y;
    return Nl(h) ? (y = "", f = "") : typeof h == "number" || b ? (y = typeof h == "number" ? Il(h) : h, f = n(y)) : (y = o(h, void 0), f = n(y)), { formattedValue: f, numAsString: y };
  }), s = $e(function() {
    return a(Pt(e) ? t : e, r);
  }), l = s[0], u = s[1], p = function(h, b) {
    h.formattedValue !== l.formattedValue && u({
      formattedValue: h.formattedValue,
      numAsString: h.value
    }), i(h, b);
  }, c = e, d = r;
  Pt(e) && (c = l.numAsString, d = !0);
  var m = a(c, d);
  return Pp(function() {
    u(m);
  }, [m.formattedValue]), [l, p];
}
function jp(e) {
  return e.replace(/[^0-9]/g, "");
}
function zp(e) {
  return e;
}
function $l(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = zp);
  var s = e.removeFormatting;
  s === void 0 && (s = jp);
  var l = e.defaultValue, u = e.valueIsNumericString, p = e.onValueChange, c = e.isAllowed, d = e.onChange;
  d === void 0 && (d = ut);
  var m = e.onKeyDown;
  m === void 0 && (m = ut);
  var h = e.onMouseUp;
  h === void 0 && (h = ut);
  var b = e.onFocus;
  b === void 0 && (b = ut);
  var f = e.onBlur;
  f === void 0 && (f = ut);
  var y = e.value, w = e.getCaretBoundary;
  w === void 0 && (w = Wp);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = At);
  var v = e.isCharacterSame, g = ti(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), x = Tl(y, l, !!u, a, s, p), N = x[0], C = N.formattedValue, $ = N.numAsString, A = x[1], R = F(), I = F({ formattedValue: C, numAsString: $ }), V = function(M, U) {
    I.current = { formattedValue: M.formattedValue, numAsString: M.value }, A(M, U);
  }, H = $e(!1), J = H[0], T = H[1], L = F(null), G = F({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ae(function() {
    return T(!0), function() {
      clearTimeout(G.current.setCaretTimeout), clearTimeout(G.current.focusTimeout);
    };
  }, []);
  var W = a, z = function(M, U) {
    var te = parseFloat(U);
    return {
      formattedValue: M,
      value: U,
      floatValue: isNaN(te) ? void 0 : te
    };
  }, B = function(M, U, te) {
    M.selectionStart === 0 && M.selectionEnd === M.value.length || (gt(M, U), G.current.setCaretTimeout = setTimeout(function() {
      M.value === te && M.selectionStart !== U && gt(M, U);
    }, 0));
  }, Z = function(M, U, te) {
    return qr(M, U, w(M), te);
  }, ee = function(M, U, te) {
    var Ae = w(U), Xe = kp(U, C, M, te, Ae, E, v);
    return Xe = qr(U, Xe, Ae), Xe;
  }, oe = function(M) {
    var U = M.formattedValue;
    U === void 0 && (U = "");
    var te = M.input, Ae = M.source, Xe = M.event, Re = M.numAsString, _e;
    if (te) {
      var ct = M.inputValue || te.value, dt = mn(te);
      te.value = U, _e = ee(ct, U, dt), _e !== void 0 && B(te, _e, U);
    }
    U !== C && V(z(U, Re), { event: Xe, source: Ae });
  };
  ae(function() {
    var M = I.current, U = M.formattedValue, te = M.numAsString;
    (C !== U || $ !== te) && V(z(C, $), {
      event: void 0,
      source: ar.props
    });
  }, [C, $]);
  var ie = L.current ? mn(L.current) : void 0, ue = typeof window < "u" ? Sr : ae;
  ue(function() {
    var M = L.current;
    if (C !== I.current.formattedValue && M) {
      var U = ee(I.current.formattedValue, C, ie);
      M.value = C, B(M, U, C);
    }
  }, [C]);
  var re = function(M, U, te) {
    var Ae = U.target, Xe = R.current ? Lp(R.current, Ae.selectionEnd) : Pl(C, M), Re = Object.assign(Object.assign({}, Xe), { lastValue: C }), _e = s(M, Re), ct = W(_e);
    if (_e = s(ct, void 0), c && !c(z(ct, _e))) {
      var dt = U.target, pt = mn(dt), fn = ee(M, C, pt);
      return dt.value = C, B(dt, fn, C), !1;
    }
    return oe({
      formattedValue: ct,
      numAsString: _e,
      inputValue: M,
      event: U,
      source: te,
      input: U.target
    }), !0;
  }, se = function(M, U) {
    U === void 0 && (U = 0);
    var te = M.selectionStart, Ae = M.selectionEnd;
    R.current = { selectionStart: te, selectionEnd: Ae + U };
  }, q = function(M) {
    var U = M.target, te = U.value, Ae = re(te, M, ar.event);
    Ae && d(M), R.current = void 0;
  }, ce = function(M) {
    var U = M.target, te = M.key, Ae = U.selectionStart, Xe = U.selectionEnd, Re = U.value;
    Re === void 0 && (Re = "");
    var _e;
    te === "ArrowLeft" || te === "Backspace" ? _e = Math.max(Ae - 1, 0) : te === "ArrowRight" ? _e = Math.min(Ae + 1, Re.length) : te === "Delete" && (_e = Ae);
    var ct = 0;
    te === "Delete" && Ae === Xe && (ct = 1);
    var dt = te === "ArrowLeft" || te === "ArrowRight";
    if (_e === void 0 || Ae !== Xe && !dt) {
      m(M), se(U, ct);
      return;
    }
    var pt = _e;
    if (dt) {
      var fn = te === "ArrowLeft" ? "left" : "right";
      pt = Z(Re, _e, fn), pt !== _e && M.preventDefault();
    } else te === "Delete" && !E(Re[_e]) ? pt = Z(Re, _e, "right") : te === "Backspace" && !E(Re[_e]) && (pt = Z(Re, _e, "left"));
    pt !== _e && B(U, pt, Re), m(M), se(U, ct);
  }, Ve = function(M) {
    var U = M.target, te = function() {
      var Ae = U.selectionStart, Xe = U.selectionEnd, Re = U.value;
      if (Re === void 0 && (Re = ""), Ae === Xe) {
        var _e = Z(Re, Ae);
        _e !== Ae && B(U, _e, Re);
      }
    };
    te(), requestAnimationFrame(function() {
      te();
    }), h(M), se(U);
  }, S = function(M) {
    M.persist && M.persist();
    var U = M.target, te = M.currentTarget;
    L.current = U, G.current.focusTimeout = setTimeout(function() {
      var Ae = U.selectionStart, Xe = U.selectionEnd, Re = U.value;
      Re === void 0 && (Re = "");
      var _e = Z(Re, Ae);
      _e !== Ae && !(Ae === 0 && Xe === Re.length) && B(U, _e, Re), b(Object.assign(Object.assign({}, M), { currentTarget: te }));
    }, 0);
  }, le = function(M) {
    L.current = null, clearTimeout(G.current.focusTimeout), clearTimeout(G.current.setCaretTimeout), f(M);
  }, O = J && Fp() ? "numeric" : void 0, de = Object.assign({ inputMode: O }, g, {
    type: t,
    value: C,
    onChange: q,
    onKeyDown: ce,
    onMouseUp: Ve,
    onFocus: S,
    onBlur: le
  });
  if (r === "text")
    return o ? P.createElement(P.Fragment, null, o(C, g) || null) : P.createElement("span", Object.assign({}, g, { ref: i }), C);
  if (n) {
    var Te = n;
    return P.createElement(Te, Object.assign({}, de, { ref: i }));
  }
  return P.createElement("input", Object.assign({}, de, { ref: i }));
}
function Ea(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = an(t), u = l.thousandSeparator, p = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && n, d = ri(e, a), m = d.beforeDecimal, h = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (h = _l(h, r, !!n)), u && (m = $p(m, u, s)), o && (m = o + m), i && (h = h + i), b && (m = "-" + m), e = m + (c && p || "") + h, e;
}
function an(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Up(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function Hp(e, t) {
  return new RegExp("(^-)|[0-9]|" + Cl(e), "g");
}
function qp(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Yp(e, t, r) {
  var n;
  t === void 0 && (t = Al(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, u = t.to, p = u.start, c = u.end, d = an(r), m = d.allowedDecimalSeparators, h = d.decimalSeparator, b = e[c] === h;
  if (At(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - p === 1 && m.indexOf(e[p]) !== -1) {
    var f = s === 0 ? "" : h;
    e = e.substring(0, p) + f + e.substring(p + 1, e.length);
  }
  var y = function(L, G, W) {
    var z = !1, B = !1;
    i.startsWith("-") ? z = !1 : L.startsWith("--") ? (z = !1, B = !0) : a.startsWith("-") && L.length === a.length ? z = !1 : L[0] === "-" && (z = !0);
    var Z = z ? 1 : 0;
    return B && (Z = 2), Z && (L = L.substring(Z), G -= Z, W -= Z), { value: L, start: G, end: W, hasNegation: z };
  }, w = y(e, p, c), E = w.hasNegation;
  n = w, e = n.value, p = n.start, c = n.end;
  var v = y(t.lastValue, l.start, l.end), g = v.start, x = v.end, N = v.value, C = e.substring(p, c);
  e.length && N.length && (g > N.length - a.length || x < i.length) && !(C && a.startsWith(C)) && (e = N);
  var $ = 0;
  e.startsWith(i) ? $ += i.length : p < i.length && ($ = p), e = e.substring($), c -= $;
  var A = e.length, R = e.length - a.length;
  e.endsWith(a) ? A = R : (c > R || c > e.length - a.length) && (A = c), e = e.substring(0, A), e = Up(E ? "-" + e : e, o), e = (e.match(Hp(h)) || []).join("");
  var I = e.indexOf(h);
  e = e.replace(new RegExp(Cl(h), "g"), function(L, G) {
    return G === I ? "." : "";
  });
  var V = ri(e, o), H = V.beforeDecimal, J = V.afterDecimal, T = V.addNegation;
  return u.end - u.start < l.end - l.start && H === "" && b && !parseFloat(J) && (e = T ? "-" : ""), e;
}
function Kp(e, t) {
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
function Xp(e) {
  var t = an(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function Jp(e) {
  e = Xp(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = ut);
  var i = e.onBlur;
  i === void 0 && (i = ut);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var p = e.defaultValue, c = e.value, d = e.valueIsNumericString, m = e.onValueChange, h = ti(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = an(e), f = b.decimalSeparator, y = b.allowedDecimalSeparators, w = function(T) {
    return Ea(T, e);
  }, E = function(T, L) {
    return Yp(T, L, e);
  }, v = Pt(c) ? p : c, g = d ?? qp(v, u, t);
  Pt(c) ? Pt(p) || (g = g || typeof p == "number") : g = g || typeof c == "number";
  var x = function(T) {
    return Nl(T) ? T : (typeof T == "number" && (T = Il(T)), g && typeof s == "number" ? ya(T, s, !!l) : T);
  }, N = Tl(x(c), x(p), !!g, w, E, m), C = N[0], $ = C.numAsString, A = C.formattedValue, R = N[1], I = function(T) {
    var L = T.target, G = T.key, W = L.selectionStart, z = L.selectionEnd, B = L.value;
    if (B === void 0 && (B = ""), (G === "Backspace" || G === "Delete") && z < u.length) {
      T.preventDefault();
      return;
    }
    if (W !== z) {
      o(T);
      return;
    }
    G === "Backspace" && B[0] === "-" && W === u.length + 1 && r && gt(L, 1), s && l && (G === "Backspace" && B[W - 1] === f ? (gt(L, W - 1), T.preventDefault()) : G === "Delete" && B[W] === f && T.preventDefault()), y != null && y.includes(G) && B[W] === f && gt(L, W + 1);
    var Z = a === !0 ? "," : a;
    G === "Backspace" && B[W - 1] === Z && gt(L, W - 1), G === "Delete" && B[W] === Z && gt(L, W + 1), o(T);
  }, V = function(T) {
    var L = $;
    if (L.match(/\d/g) || (L = ""), n || (L = Mp(L)), l && s && (L = ya(L, s, l)), L !== $) {
      var G = Ea(L, e);
      R({
        formattedValue: G,
        value: L,
        floatValue: parseFloat(L)
      }, {
        event: T,
        source: ar.event
      });
    }
    i(T);
  }, H = function(T) {
    return T === f ? !0 : At(T);
  }, J = function(T) {
    var L = T.currentValue, G = T.lastValue, W = T.formattedValue, z = T.currentValueIndex, B = T.formattedValueIndex, Z = L[z], ee = W[B], oe = Pl(G, L), ie = oe.to, ue = function(re) {
      return E(re).indexOf(".") + u.length;
    };
    return c === 0 && l && s && L[ie.start] === f && ue(L) < z && ue(W) > B ? !1 : z >= ie.start && z < ie.end && y && y.includes(Z) && ee === f ? !0 : Z === ee;
  };
  return Object.assign(Object.assign({}, h), {
    value: A,
    valueIsNumericString: !1,
    isValidInputCharacter: H,
    isCharacterSame: J,
    onValueChange: R,
    format: w,
    removeFormatting: E,
    getCaretBoundary: function(T) {
      return Kp(T, e);
    },
    onKeyDown: I,
    onBlur: V
  });
}
function Zp(e) {
  var t = Jp(e);
  return P.createElement($l, Object.assign({}, t));
}
function Qp(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), l = 0, u = r.length; l < u; l++)
    r[l] === i && (s[l] = e[a] || Rl(o, a), a += 1);
  return s.join("");
}
function ef(e, t, r) {
  t === void 0 && (t = Al(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(f) {
    return n[f] === o;
  }, u = function(f, y) {
    for (var w = "", E = 0; E < f.length; E++)
      l(y + E) && At(f[E]) && (w += f[E]);
    return w;
  }, p = function(f) {
    return f.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return p(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var c = "", d = 0; d < e.length; d++)
      if (l(d))
        At(e[d]) && (c += e[d]);
      else if (e[d] !== n[d])
        return p(e);
    return c;
  }
  var m = s.substring(0, i.start), h = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(m, 0) + p(h) + u(b, i.end);
}
function tf(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(d, m) {
    var h = void 0;
    d === o && (a++, h = Rl(n, a - 1), s === -1 && e[m] === h && (s = m)), l[m] = h;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== l[d];
  }, p = 0, c = i.length; p < c; p++)
    i[p] = p === s || u(p) || u(p - 1);
  return i[r.indexOf(o)] = !0, i;
}
function rf(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function nf(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function of(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = ut);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = ti(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  rf(e);
  var u = function(h) {
    return tf(h, e);
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
      v = qr(E, v, u(E), g);
    } else t[v] !== o && b !== "ArrowLeft" && b !== "ArrowRight" && (v = qr(E, v + 1, u(E), "right"));
    v !== y && gt(f, v), n(h);
  }, c = Pt(i) ? a : i, d = s ?? nf(c, t), m = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(h) {
      return Qp(h, m);
    },
    removeFormatting: function(h, b) {
      return ef(h, b, m);
    },
    getCaretBoundary: u,
    onKeyDown: p
  });
}
function af(e) {
  var t = of(e);
  return P.createElement($l, Object.assign({}, t));
}
const sf = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, m0 = ({
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
  return /* @__PURE__ */ Fe("label", { children: [
    p && /* @__PURE__ */ k("span", { className: `text-primary ${s}`, children: p }),
    i ? /* @__PURE__ */ k(
      af,
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
    ) : e === "number" ? /* @__PURE__ */ Fe(
      "div",
      {
        className: `${m ? d : ""} ${a} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ k(
            Zp,
            {
              decimalScale: l,
              onValueChange: (f) => {
                var y;
                return t == null ? void 0 : t.onChange((y = f.value.replace("_", "")) == null ? void 0 : y.toString());
              },
              value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`,
              ...c,
              ...sf.number
            }
          ),
          n ? /* @__PURE__ */ k("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ k(
      "input",
      {
        ...t,
        ...c,
        type: e,
        className: `${m ? d : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`
      }
    ),
    /* @__PURE__ */ k(ei, { error: m })
  ] });
}, Vl = ({
  children: e,
  className: t
}) => /* @__PURE__ */ k("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), g0 = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = $e(null);
  return /* @__PURE__ */ k(Vl, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ k("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ Fe(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ k("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ k("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, ni = "-", cf = (e) => {
  const t = uf(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(ni);
      return s[0] === "" && s.length !== 1 && s.shift(), Ml(s, t) || lf(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, Ml = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Ml(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(ni);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, xa = /^\[(.+)\]$/, lf = (e) => {
  if (xa.test(e)) {
    const t = xa.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, uf = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return pf(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    mo(a, n, i, t);
  }), n;
}, mo = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : wa(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (df(o)) {
        mo(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      mo(a, wa(t, i), r, n);
    });
  });
}, wa = (e, t) => {
  let r = e;
  return t.split(ni).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, df = (e) => e.isThemeGetter, pf = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, ff = (e) => {
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
}, Ll = "!", mf = (e) => {
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
    const d = l.length === 0 ? s : s.substring(p), m = d.startsWith(Ll), h = m ? d.substring(1) : d, b = c && c > p ? c - p : void 0;
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
}, gf = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, bf = (e) => ({
  cache: ff(e.cacheSize),
  parseClassName: mf(e),
  ...cf(e)
}), hf = /\s+/, vf = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(hf);
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
    const f = gf(p).join(":"), y = c ? f + Ll : f, w = y + b;
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
function yf() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Bl(t)) && (n && (n += " "), n += r);
  return n;
}
const Bl = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Bl(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Ef(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const u = t.reduce((p, c) => c(p), e());
    return r = bf(u), n = r.cache.get, o = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const u = n(l);
    if (u)
      return u;
    const p = vf(l, r);
    return o(l, p), p;
  }
  return function() {
    return i(yf.apply(null, arguments));
  };
}
const Pe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Fl = /^\[(?:([a-z-]+):)?(.+)\]$/i, xf = /^\d+\/\d+$/, wf = /* @__PURE__ */ new Set(["px", "full", "screen"]), Sf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Of = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Df = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Nf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, lt = (e) => Gt(e) || wf.has(e) || xf.test(e), ft = (e) => qt(e, "length", Vf), Gt = (e) => !!e && !Number.isNaN(Number(e)), gn = (e) => qt(e, "number", Gt), Xt = (e) => !!e && Number.isInteger(Number(e)), _f = (e) => e.endsWith("%") && Gt(e.slice(0, -1)), Q = (e) => Fl.test(e), mt = (e) => Sf.test(e), If = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Pf = (e) => qt(e, If, Gl), Af = (e) => qt(e, "position", Gl), Rf = /* @__PURE__ */ new Set(["image", "url"]), Tf = (e) => qt(e, Rf, Lf), $f = (e) => qt(e, "", Mf), Jt = () => !0, qt = (e, t, r) => {
  const n = Fl.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Vf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Of.test(e) && !Df.test(e)
), Gl = () => !1, Mf = (e) => Nf.test(e), Lf = (e) => Cf.test(e), Bf = () => {
  const e = Pe("colors"), t = Pe("spacing"), r = Pe("blur"), n = Pe("brightness"), o = Pe("borderColor"), i = Pe("borderRadius"), a = Pe("borderSpacing"), s = Pe("borderWidth"), l = Pe("contrast"), u = Pe("grayscale"), p = Pe("hueRotate"), c = Pe("invert"), d = Pe("gap"), m = Pe("gradientColorStops"), h = Pe("gradientColorStopPositions"), b = Pe("inset"), f = Pe("margin"), y = Pe("opacity"), w = Pe("padding"), E = Pe("saturate"), v = Pe("scale"), g = Pe("sepia"), x = Pe("skew"), N = Pe("space"), C = Pe("translate"), $ = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", Q, t], I = () => [Q, t], V = () => ["", lt, ft], H = () => ["auto", Gt, Q], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], W = () => ["", "0", Q], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [Gt, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Jt],
      spacing: [lt, ft],
      blur: ["none", "", mt, Q],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", mt, Q],
      borderSpacing: I(),
      borderWidth: V(),
      contrast: B(),
      grayscale: W(),
      hueRotate: B(),
      invert: W(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [_f, ft],
      inset: R(),
      margin: R(),
      opacity: B(),
      padding: I(),
      saturate: B(),
      scale: B(),
      sepia: W(),
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
        aspect: ["auto", "square", "video", Q]
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
        columns: [mt]
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
        object: [...J(), Q]
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
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
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
        z: ["auto", Xt, Q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: R()
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
        flex: ["1", "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: W()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: W()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Xt, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Jt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Xt, Q]
        }, Q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Jt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Xt, Q]
        }, Q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
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
        justify: ["normal", ...G()]
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
        content: ["normal", ...G(), "baseline"]
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
        "place-content": [...G(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Q, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [mt]
        }, mt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Q, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", mt, ft]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", gn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Jt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Gt, gn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", lt, Q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
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
        decoration: [...T(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", lt, ft]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", lt, Q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
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
        content: ["none", Q]
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
        bg: [...J(), Af]
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
        bg: ["auto", "cover", "contain", Pf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Tf]
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
        border: [...T(), "hidden"]
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
        divide: T()
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
        outline: ["", ...T()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [lt, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [lt, ft]
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
        ring: V()
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
        "ring-offset": [lt, ft]
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
        shadow: ["", "inner", "none", mt, $f]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Jt]
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
        "drop-shadow": ["", "none", mt, Q]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
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
        ease: ["linear", "in", "out", "in-out", Q]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
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
        rotate: [Xt, Q]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
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
        "will-change": ["auto", "scroll", "contents", "transform", Q]
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
        stroke: [lt, ft, gn]
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
}, Ff = /* @__PURE__ */ Ef(Bf);
function kl(e, t) {
  const [r, n] = $e(e);
  return ae(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const b0 = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = $e(!1), [a, s] = $e(""), l = kl(a, 100), u = F(null);
  ae(() => {
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
  return /* @__PURE__ */ Fe("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ Fe("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ k(
        Hr,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ k(
        "input",
        {
          ...n,
          ref: u,
          className: Ff(
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
    o && /* @__PURE__ */ k("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (c) => c.label.toLowerCase().includes(l.toLowerCase())
    ).map((c) => {
      var d;
      return /* @__PURE__ */ k(
        "li",
        {
          onClick: () => p(c.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ Fe("div", { className: "flex flex-row", children: [
            c.icon && /* @__PURE__ */ k(Hr, { name: c.icon }),
            /* @__PURE__ */ k(
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
}, h0 = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = $e(r), s = kl(i, 300);
  return ae(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ Fe("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ k(
      Hr,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ k(
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
}, v0 = ({
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
}) => /* @__PURE__ */ Fe("label", { children: [
  l && /* @__PURE__ */ k("span", { className: `text-primary ${i}`, children: l }),
  /* @__PURE__ */ k(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ Fe(
        "select",
        {
          ...n,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ k("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((p, c) => /* @__PURE__ */ k("option", { value: p.value, className: "text-black", children: p.label }, c))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ k(ei, { error: o == null ? void 0 : o.error })
] });
function sr(e) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sr(e);
}
function Gf(e, t) {
  if (sr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kf(e) {
  var t = Gf(e, "string");
  return sr(t) == "symbol" ? t : t + "";
}
function Wf(e, t, r) {
  return (t = kf(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Sa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sa(Object(r), !0).forEach(function(n) {
      Wf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Je(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Da = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), bn = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Na = {
  INIT: "@@redux/INIT" + bn(),
  REPLACE: "@@redux/REPLACE" + bn(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + bn();
  }
};
function jf(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function zf(e) {
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
  if (qf(e)) return "date";
  if (Hf(e)) return "error";
  var r = Uf(e);
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
function Uf(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Hf(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function qf(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function _t(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = zf(e)), t;
}
function Wl(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Je(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Je(1) : "Expected the enhancer to be a function. Instead, received: '" + _t(r) + "'");
    return r(Wl)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Je(2) : "Expected the root reducer to be a function. Instead, received: '" + _t(e) + "'");
  var o = e, i = t, a = [], s = a, l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function p() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Je(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Je(4) : "Expected the listener to be a function. Instead, received: '" + _t(b) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Je(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var f = !0;
    return u(), s.push(b), function() {
      if (f) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? Je(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        f = !1, u();
        var w = s.indexOf(b);
        s.splice(w, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!jf(b))
      throw new Error(process.env.NODE_ENV === "production" ? Je(7) : "Actions must be plain objects. Instead, the actual type was: '" + _t(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Je(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Je(9) : "Reducers may not dispatch actions.");
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
      throw new Error(process.env.NODE_ENV === "production" ? Je(10) : "Expected the nextReducer to be a function. Instead, received: '" + _t(b));
    o = b, d({
      type: Na.REPLACE
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
          throw new Error(process.env.NODE_ENV === "production" ? Je(11) : "Expected the observer to be an object. Instead, received: '" + _t(w) + "'");
        function E() {
          w.next && w.next(p());
        }
        E();
        var v = f(E);
        return {
          unsubscribe: v
        };
      }
    }, b[Da] = function() {
      return this;
    }, b;
  }
  return d({
    type: Na.INIT
  }), n = {
    dispatch: d,
    subscribe: c,
    getState: p,
    replaceReducer: m
  }, n[Da] = h, n;
}
function Ca(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function _a(e, t) {
  if (typeof e == "function")
    return Ca(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Je(16) : "bindActionCreators expected an object or a function, but instead received: '" + _t(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = Ca(o, t));
  }
  return r;
}
function jl() {
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
function Yf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Je(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = jl.apply(void 0, s)(o.dispatch), Oa(Oa({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var go = { exports: {} }, hn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Xf() {
  if (Ia) return hn;
  Ia = 1;
  var e = P;
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
  return hn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, hn;
}
var vn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Jf() {
  return Pa || (Pa = 1, process.env.NODE_ENV !== "production" && function() {
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
    var o = P, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    vn.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), vn;
}
process.env.NODE_ENV === "production" ? go.exports = Xf() : go.exports = Jf();
var oi = go.exports, yn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function Zf() {
  if (Aa) return yn;
  Aa = 1;
  var e = P, t = oi;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return yn.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
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
  }, yn;
}
var En = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Qf() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = P, r = oi, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    En.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
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
  }()), En;
}
process.env.NODE_ENV === "production" ? Zf() : Qf();
function em(e) {
  e();
}
let zl = em;
const tm = (e) => zl = e, rm = () => zl, Ta = Symbol.for("react-redux-context"), $a = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function nm() {
  var e;
  if (!_.createContext) return {};
  const t = (e = $a[Ta]) != null ? e : $a[Ta] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const Ul = /* @__PURE__ */ nm(), om = () => {
  throw new Error("uSES not initialized!");
};
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bt.apply(null, arguments);
}
function Hl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var bo = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function im() {
  if (Va) return pe;
  Va = 1;
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
  return pe.AsyncMode = l, pe.ConcurrentMode = u, pe.ContextConsumer = s, pe.ContextProvider = a, pe.Element = t, pe.ForwardRef = p, pe.Fragment = n, pe.Lazy = h, pe.Memo = m, pe.Portal = r, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = c, pe.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, pe.isConcurrentMode = v, pe.isContextConsumer = function(g) {
    return E(g) === s;
  }, pe.isContextProvider = function(g) {
    return E(g) === a;
  }, pe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, pe.isForwardRef = function(g) {
    return E(g) === p;
  }, pe.isFragment = function(g) {
    return E(g) === n;
  }, pe.isLazy = function(g) {
    return E(g) === h;
  }, pe.isMemo = function(g) {
    return E(g) === m;
  }, pe.isPortal = function(g) {
    return E(g) === r;
  }, pe.isProfiler = function(g) {
    return E(g) === i;
  }, pe.isStrictMode = function(g) {
    return E(g) === o;
  }, pe.isSuspense = function(g) {
    return E(g) === c;
  }, pe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, pe.typeOf = E, pe;
}
var fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function am() {
  return Ma || (Ma = 1, process.env.NODE_ENV !== "production" && function() {
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
            var O = S.type;
            switch (O) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return O;
              default:
                var de = O && O.$$typeof;
                switch (de) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return de;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, $ = t, A = p, R = n, I = h, V = m, H = r, J = i, T = o, L = c, G = !1;
    function W(S) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(S) || v(S) === l;
    }
    function z(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Z(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function oe(S) {
      return v(S) === p;
    }
    function ie(S) {
      return v(S) === n;
    }
    function ue(S) {
      return v(S) === h;
    }
    function re(S) {
      return v(S) === m;
    }
    function se(S) {
      return v(S) === r;
    }
    function q(S) {
      return v(S) === i;
    }
    function ce(S) {
      return v(S) === o;
    }
    function Ve(S) {
      return v(S) === c;
    }
    fe.AsyncMode = g, fe.ConcurrentMode = x, fe.ContextConsumer = N, fe.ContextProvider = C, fe.Element = $, fe.ForwardRef = A, fe.Fragment = R, fe.Lazy = I, fe.Memo = V, fe.Portal = H, fe.Profiler = J, fe.StrictMode = T, fe.Suspense = L, fe.isAsyncMode = W, fe.isConcurrentMode = z, fe.isContextConsumer = B, fe.isContextProvider = Z, fe.isElement = ee, fe.isForwardRef = oe, fe.isFragment = ie, fe.isLazy = ue, fe.isMemo = re, fe.isPortal = se, fe.isProfiler = q, fe.isStrictMode = ce, fe.isSuspense = Ve, fe.isValidElementType = E, fe.typeOf = v;
  }()), fe;
}
process.env.NODE_ENV === "production" ? bo.exports = im() : bo.exports = am();
var sm = bo.exports, ii = sm, cm = {
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
}, lm = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, um = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ql = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ai = {};
ai[ii.ForwardRef] = um;
ai[ii.Memo] = ql;
function La(e) {
  return ii.isMemo(e) ? ql : ai[e.$$typeof] || cm;
}
var dm = Object.defineProperty, pm = Object.getOwnPropertyNames, Ba = Object.getOwnPropertySymbols, fm = Object.getOwnPropertyDescriptor, mm = Object.getPrototypeOf, Fa = Object.prototype;
function Yl(e, t, r) {
  if (typeof t != "string") {
    if (Fa) {
      var n = mm(t);
      n && n !== Fa && Yl(e, n, r);
    }
    var o = pm(t);
    Ba && (o = o.concat(Ba(t)));
    for (var i = La(e), a = La(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!lm[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = fm(t, l);
        try {
          dm(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var gm = Yl;
const Ga = /* @__PURE__ */ Kf(gm);
var ho = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function bm() {
  if (ka) return me;
  ka = 1;
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
  return me.ContextConsumer = a, me.ContextProvider = i, me.Element = e, me.ForwardRef = l, me.Fragment = r, me.Lazy = d, me.Memo = c, me.Portal = t, me.Profiler = o, me.StrictMode = n, me.Suspense = u, me.SuspenseList = p, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(f) {
    return b(f) === a;
  }, me.isContextProvider = function(f) {
    return b(f) === i;
  }, me.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, me.isForwardRef = function(f) {
    return b(f) === l;
  }, me.isFragment = function(f) {
    return b(f) === r;
  }, me.isLazy = function(f) {
    return b(f) === d;
  }, me.isMemo = function(f) {
    return b(f) === c;
  }, me.isPortal = function(f) {
    return b(f) === t;
  }, me.isProfiler = function(f) {
    return b(f) === o;
  }, me.isStrictMode = function(f) {
    return b(f) === n;
  }, me.isSuspense = function(f) {
    return b(f) === u;
  }, me.isSuspenseList = function(f) {
    return b(f) === p;
  }, me.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, me.typeOf = b, me;
}
var ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function hm() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === o || w || O === n || O === u || O === p || y || O === m || h || b || f || typeof O == "object" && O !== null && (O.$$typeof === d || O.$$typeof === c || O.$$typeof === i || O.$$typeof === a || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === E || O.getModuleId !== void 0));
    }
    function g(O) {
      if (typeof O == "object" && O !== null) {
        var de = O.$$typeof;
        switch (de) {
          case e:
            var Te = O.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var M = Te && Te.$$typeof;
                switch (M) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return M;
                  default:
                    return de;
                }
            }
          case t:
            return de;
        }
      }
    }
    var x = a, N = i, C = e, $ = l, A = r, R = d, I = c, V = t, H = o, J = n, T = u, L = p, G = !1, W = !1;
    function z(O) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(O) {
      return W || (W = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(O) {
      return g(O) === a;
    }
    function ee(O) {
      return g(O) === i;
    }
    function oe(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function ie(O) {
      return g(O) === l;
    }
    function ue(O) {
      return g(O) === r;
    }
    function re(O) {
      return g(O) === d;
    }
    function se(O) {
      return g(O) === c;
    }
    function q(O) {
      return g(O) === t;
    }
    function ce(O) {
      return g(O) === o;
    }
    function Ve(O) {
      return g(O) === n;
    }
    function S(O) {
      return g(O) === u;
    }
    function le(O) {
      return g(O) === p;
    }
    ge.ContextConsumer = x, ge.ContextProvider = N, ge.Element = C, ge.ForwardRef = $, ge.Fragment = A, ge.Lazy = R, ge.Memo = I, ge.Portal = V, ge.Profiler = H, ge.StrictMode = J, ge.Suspense = T, ge.SuspenseList = L, ge.isAsyncMode = z, ge.isConcurrentMode = B, ge.isContextConsumer = Z, ge.isContextProvider = ee, ge.isElement = oe, ge.isForwardRef = ie, ge.isFragment = ue, ge.isLazy = re, ge.isMemo = se, ge.isPortal = q, ge.isProfiler = ce, ge.isStrictMode = Ve, ge.isSuspense = S, ge.isSuspenseList = le, ge.isValidElementType = v, ge.typeOf = g;
  }()), ge;
}
process.env.NODE_ENV === "production" ? ho.exports = bm() : ho.exports = hm();
var ja = ho.exports;
function si(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function xn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || si(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function vm(e, t, r) {
  xn(e, "mapStateToProps"), xn(t, "mapDispatchToProps"), xn(r, "mergeProps");
}
const ym = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Em(e, t, r, n, {
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
function xm(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Hl(t, ym);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && vm(a, s, l), Em(a, s, l, e, i);
}
function wm(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function Sm(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Kl(e, t, r) {
  Sm(e) || si(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function vo(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function za(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Xl(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = za(e);
      let u = i(s, l);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = za(u), u = i(s, l)), process.env.NODE_ENV !== "production" && Kl(u, o, t), u;
    }, i;
  };
}
function ci(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Om(e) {
  return e && typeof e == "object" ? vo((t) => (
    // @ts-ignore
    wm(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Xl(e, "mapDispatchToProps")
  ) : ci(e, "mapDispatchToProps") : vo((t) => ({
    dispatch: t
  }));
}
function Dm(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Xl(e, "mapStateToProps")
  ) : ci(e, "mapStateToProps") : vo(() => ({}));
}
function Nm(e, t, r) {
  return bt({}, r, e, t);
}
function Cm(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, u, p) {
      const c = e(l, u, p);
      return i ? o(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && Kl(a, n, "mergeProps")), a;
    };
  };
}
function _m(e) {
  return e ? typeof e == "function" ? Cm(e) : ci(e, "mergeProps") : () => Nm;
}
function Im() {
  const e = rm();
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
const Ua = {
  notify() {
  },
  get: () => []
};
function Jl(e, t) {
  let r, n = Ua, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = Im());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Ua);
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
const Pm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yr = Pm ? _.useLayoutEffect : _.useEffect;
function Ha(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function wn(e, t) {
  if (Ha(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Ha(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const Am = ["reactReduxForwardedRef"];
let Zl = om;
const Rm = (e) => {
  Zl = e;
}, Tm = [null, null], $m = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Vm(e, t, r) {
  Yr(() => e(...t), r);
}
function Mm(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Lm(e, t, r, n, o, i, a, s, l, u, p) {
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
function Bm(e, t) {
  return e === t;
}
let qa = !1;
function Ql(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Bm,
  areOwnPropsEqual: i = wn,
  areStatePropsEqual: a = wn,
  areMergedPropsEqual: s = wn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = Ul
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !qa && (qa = !0, si('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = Dm(e), d = Om(t), m = _m(r), h = !!e;
  return (f) => {
    if (process.env.NODE_ENV !== "production" && !ja.isValidElementType(f))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${$m(f)}`);
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
      const [C, $, A] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: S
        } = N, le = Hl(N, Am);
        return [N.context, S, le];
      }, [N]), R = _.useMemo(() => C && C.Consumer && // @ts-ignore
      ja.isContextConsumer(/* @__PURE__ */ _.createElement(C.Consumer, null)) ? C : p, [C, p]), I = _.useContext(R), V = !!N.store && !!N.store.getState && !!N.store.dispatch, H = !!I && !!I.store;
      if (process.env.NODE_ENV !== "production" && !V && !H)
        throw new Error(`Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`);
      const J = V ? N.store : I.store, T = H ? I.getServerState : J.getState, L = _.useMemo(() => xm(J.dispatch, E), [J]), [G, W] = _.useMemo(() => {
        if (!h) return Tm;
        const S = Jl(J, V ? void 0 : I.subscription), le = S.notifyNestedSubs.bind(S);
        return [S, le];
      }, [J, V, I]), z = _.useMemo(() => V ? I : bt({}, I, {
        subscription: G
      }), [V, I, G]), B = _.useRef(), Z = _.useRef(A), ee = _.useRef(), oe = _.useRef(!1);
      _.useRef(!1);
      const ie = _.useRef(!1), ue = _.useRef();
      Yr(() => (ie.current = !0, () => {
        ie.current = !1;
      }), []);
      const re = _.useMemo(() => () => ee.current && A === Z.current ? ee.current : L(J.getState(), A), [J, A]), se = _.useMemo(() => (le) => G ? Lm(
        h,
        J,
        G,
        // @ts-ignore
        L,
        Z,
        B,
        oe,
        ie,
        ee,
        W,
        le
      ) : () => {
      }, [G]);
      Vm(Mm, [Z, B, oe, A, ee, W]);
      let q;
      try {
        q = Zl(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          se,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          re,
          T ? () => L(T(), A) : re
        );
      } catch (S) {
        throw ue.current && (S.message += `
The error may be correlated with this previous error:
${ue.current.stack}

`), S;
      }
      Yr(() => {
        ue.current = void 0, ee.current = void 0, B.current = q;
      });
      const ce = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(f, bt({}, q, {
          ref: $
        }))
      ), [$, f, q]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(R.Provider, {
        value: z
      }, ce) : ce, [R, ce, z]);
    }
    const x = _.memo(v);
    if (x.WrappedComponent = f, x.displayName = v.displayName = w, l) {
      const C = _.forwardRef(function(A, R) {
        return /* @__PURE__ */ _.createElement(x, bt({}, A, {
          reactReduxForwardedRef: R
        }));
      });
      return C.displayName = w, C.WrappedComponent = f, Ga(C, f);
    }
    return Ga(x, f);
  };
}
function Fm({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = _.useMemo(() => {
    const u = Jl(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = _.useMemo(() => e.getState(), [e]);
  Yr(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || Ul;
  return /* @__PURE__ */ _.createElement(l.Provider, {
    value: a
  }, r);
}
Rm(oi.useSyncExternalStore);
tm(on);
function Gm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function eu(e, t) {
  var r = $e(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = F(!0), o = F(r), i = n.current || !!(t && o.current.inputs && Gm(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ae(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function km(e, t) {
  return eu(function() {
    return e;
  }, t);
}
var ne = eu, j = km, Wm = process.env.NODE_ENV === "production", Sn = "Invariant failed";
function Ya(e, t) {
  if (Wm)
    throw new Error(Sn);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Sn, ": ").concat(r) : Sn;
  throw new Error(n);
}
var st = function(t) {
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
}, li = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Ka = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, jm = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, On = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ui = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? On : n, i = t.border, a = i === void 0 ? On : i, s = t.padding, l = s === void 0 ? On : s, u = st(li(r, o)), p = st(Ka(r, a)), c = st(Ka(p, l));
  return {
    marginBox: u,
    borderBox: st(r),
    paddingBox: p,
    contentBox: c,
    margin: o,
    border: a,
    padding: l
  };
}, tt = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Ya(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Ya()), o;
}, zm = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Kr = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = jm(n, r);
  return ui({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Xr = function(t, r) {
  return r === void 0 && (r = zm()), Kr(t, r);
}, tu = function(t, r) {
  var n = {
    top: tt(r.marginTop),
    right: tt(r.marginRight),
    bottom: tt(r.marginBottom),
    left: tt(r.marginLeft)
  }, o = {
    top: tt(r.paddingTop),
    right: tt(r.paddingRight),
    bottom: tt(r.paddingBottom),
    left: tt(r.paddingLeft)
  }, i = {
    top: tt(r.borderTopWidth),
    right: tt(r.borderRightWidth),
    bottom: tt(r.borderBottomWidth),
    left: tt(r.borderLeftWidth)
  };
  return ui({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, ru = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return tu(r, n);
}, Xa = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Um(e, t) {
  return !!(e === t || Xa(e) && Xa(t));
}
function Hm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Um(e[r], t[r]))
      return !1;
  return !0;
}
function Ge(e, t) {
  t === void 0 && (t = Hm);
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
var cr = function(t) {
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
const qm = process.env.NODE_ENV === "production", Ym = /[ \t]{2,}/g, Km = /^[ \t]*/gm, Ja = (e) => e.replace(Ym, " ").replace(Km, "").trim(), Xm = (e) => Ja(`
  %c@hello-pangea/dnd

  %c${Ja(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Jm = (e) => [Xm(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Zm = "__@hello-pangea/dnd-disable-dev-warnings";
function nu(e, t) {
  qm || typeof window < "u" && window[Zm] || console[e](...Jm(t));
}
const Ie = nu.bind(null, "warn"), yo = nu.bind(null, "error");
function ht() {
}
function Qm(e, t) {
  return {
    ...e,
    ...t
  };
}
function it(e, t, r) {
  const n = t.map((o) => {
    const i = Qm(r, o.options);
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
const eg = process.env.NODE_ENV === "production", Za = "Invariant failed";
class lr extends Error {
}
lr.prototype.toString = function() {
  return this.message;
};
function D(e, t) {
  throw eg ? new lr(Za) : new lr(`${Za}: ${t || ""}`);
}
class tg extends P.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = ht, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Ie(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof lr && (r.preventDefault(), process.env.NODE_ENV !== "production" && yo(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = it(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof lr) {
      process.env.NODE_ENV !== "production" && yo(t.message), this.setState({});
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
const rg = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Jr = (e) => e + 1, ng = (e) => `
  You have lifted an item in position ${Jr(e.source.index)}
`, ou = (e, t) => {
  const r = e.droppableId === t.droppableId, n = Jr(e.index), o = Jr(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, iu = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, og = (e) => {
  const t = e.destination;
  if (t)
    return ou(e.source, t);
  const r = e.combine;
  return r ? iu(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Qa = (e) => `
  The item has returned to its starting position
  of ${Jr(e.index)}
`, ig = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Qa(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${ou(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${iu(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Qa(e.source)}
  `;
}, ag = {
  dragHandleUsageInstructions: rg,
  onDragStart: ng,
  onDragUpdate: og,
  onDragEnd: ig
};
var Br = ag;
const ke = {
  x: 0,
  y: 0
}, Ue = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Ze = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), vt = (e, t) => e.x === t.x && e.y === t.y, Yt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Rt = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, ur = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), es = (e, t) => Math.min(...t.map((r) => ur(e, r))), au = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var sg = (e, t) => {
  const r = st({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Dr = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), ts = (e) => [{
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
}], cg = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, lg = (e, t) => t ? Dr(e, t.scroll.diff.displacement) : e, ug = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, dg = (e, t) => t && t.shouldClipSubject ? sg(t.pageMarginBox, e) : st(e);
var zt = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = lg(e.marginBox, n), i = ug(o, r, t), a = dg(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, di = (e, t) => {
  e.frame || (process.env.NODE_ENV, D());
  const r = e.frame, n = Ze(t, r.scroll.initial), o = Yt(n), i = {
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
  }, a = zt({
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
const su = Ge((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), cu = Ge((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), sn = Ge((e) => Object.values(e)), pg = Ge((e) => Object.values(e));
var Mt = Ge((e, t) => pg(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function pi(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function cn(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var ln = Ge((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), fg = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !pi(o))
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
  const u = ln(t, n);
  if (!l) {
    if (!u.length)
      return null;
    const m = u[u.length - 1];
    return a(m.descriptor.id);
  }
  const p = u.findIndex((m) => m.descriptor.id === l);
  p === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Could not find displaced item in set") : D());
  const c = p - 1;
  if (c < 0)
    return null;
  const d = u[c];
  return a(d.descriptor.id);
}, Kt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const lu = {
  point: ke,
  value: 0
}, dr = {
  invisible: {},
  visible: {},
  all: []
}, mg = {
  displaced: dr,
  displacedBy: lu,
  at: null
};
var gg = mg, at = (e, t) => (r) => e <= r && r <= t, uu = (e) => {
  const t = at(e.top, e.bottom), r = at(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const l = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return l && u ? !0 : l && a || u && i;
  };
}, bg = (e) => {
  const t = at(e.top, e.bottom), r = at(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const fi = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, du = {
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
var hg = (e) => (t) => {
  const r = at(t.top, t.bottom), n = at(t.left, t.right);
  return (o) => e === fi ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const vg = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : ke;
  return Dr(e, r);
}, yg = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, Eg = (e, t, r) => r(t)(e), mi = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? vg(e, t) : e;
  return yg(i, t, o) && Eg(i, r, o);
}, xg = (e) => mi({
  ...e,
  isVisibleThroughFrameFn: uu
}), pu = (e) => mi({
  ...e,
  isVisibleThroughFrameFn: bg
}), wg = (e) => mi({
  ...e,
  isVisibleThroughFrameFn: hg(e.destination.axis)
}), Sg = (e, t, r) => {
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
function Og(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return st(li(r, n));
}
function pr({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, l) {
    const u = Og(l, r), p = l.descriptor.id;
    if (s.all.push(p), !xg({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const d = Sg(p, i, o), m = {
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
function Dg(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function rs({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = Dg(e, {
    inHomeList: t
  });
  return {
    displaced: dr,
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
function Zr({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = Kt(e, r);
  if (a == null)
    return rs({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const u = t.find((h) => h.descriptor.index === a);
  if (!u)
    return rs({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const p = ln(e, t), c = t.indexOf(u), d = p.slice(c);
  return {
    displaced: pr({
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
function wt(e, t) {
  return !!t.effected[e];
}
var Ng = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return wt(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, Cg = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, _g = ({
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
  if (u || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot move in direction without previous impact location") : D()), u.type === "REORDER") {
    const c = Cg({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return c == null ? null : Zr({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const p = Ng({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: l
  });
  return p == null ? null : Zr({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, Ig = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return wt(r, t) ? o ? ke : Yt(n.point) : o ? n.point : ke;
}, Pg = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = cn(t);
  n || (process.env.NODE_ENV, D());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = Ig({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ue(i, a);
};
const fu = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Ag = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, gi = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, ns = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Rt(e.line, t.marginBox[e.end] + fu(e, r), gi(e, t.marginBox, r)), os = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Rt(e.line, t.marginBox[e.start] - Ag(e, r), gi(e, t.marginBox, r)), Rg = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Rt(e.line, t.contentBox[e.start] + fu(e, r), gi(e, t.contentBox, r));
var Tg = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = Mt(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return Rg({
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
    if (wt(p, o))
      return os({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const m = Kr(d.page, u.point);
    return os({
      axis: s,
      moveRelativeTo: m,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (wt(c.descriptor.id, o)) {
    const d = Kr(c.page, Yt(o.displacedBy.point));
    return ns({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return ns({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, Eo = (e, t) => {
  const r = e.frame;
  return r ? Ue(t, r.scroll.diff.displacement) : t;
};
const $g = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? Tg({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : Pg({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var un = (e) => {
  const t = $g(e), r = e.droppable;
  return r ? Eo(r, t) : t;
}, mu = (e, t) => {
  const r = Ze(t, e.scroll.initial), n = Yt(r);
  return {
    frame: st({
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
function is(e, t) {
  return e.map((r) => t[r]);
}
function Vg(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Mg = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = mu(t, Ue(t.scroll.current, o)), a = r.frame ? di(r, Ue(r.frame.scroll.current, o)) : r, s = e.displaced, l = pr({
    afterDragging: is(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = pr({
    afterDragging: is(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, c = {}, d = [s, l, u];
  return s.all.forEach((h) => {
    const b = Vg(h, d);
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
}, Lg = (e, t) => Ue(e.scroll.diff.displacement, t), bi = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Lg(r, e), o = Ze(n, t.page.borderBox.center);
  return Ue(t.client.borderBox.center, o);
}, gu = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Ze(r, e.page.borderBox.center), l = {
    target: Dr(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? wg(l) : pu(l);
}, Bg = ({
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
  const u = Mt(r.descriptor.id, n), p = Kt(t, r), c = fg({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || _g({
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
  const d = un({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: l
  });
  if (gu({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: bi({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const h = Ze(d, a), b = Mg({
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
const Ke = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot get clipped area from droppable") : D()), t;
};
var Fg = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = at(i[a.start], i[a.end]), l = sn(n).filter((p) => p !== r).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => uu(o.frame)(Ke(p))).filter((p) => {
    const c = Ke(p);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const c = Ke(p), d = at(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((p, c) => {
    const d = Ke(p)[a.crossAxisStart], m = Ke(c)[a.crossAxisStart];
    return e ? d - m : m - d;
  }).filter((p, c, d) => Ke(p)[a.crossAxisStart] === Ke(d[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const u = l.filter((p) => at(Ke(p)[a.start], Ke(p)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((p, c) => Ke(p)[a.start] - Ke(c)[a.start])[0] : l.sort((p, c) => {
    const d = es(t, ts(Ke(p))), m = es(t, ts(Ke(c)));
    return d !== m ? d - m : Ke(p)[a.start] - Ke(c)[a.start];
  })[0];
};
const as = (e, t) => {
  const r = e.page.borderBox.center;
  return wt(e.descriptor.id, t) ? Ze(r, t.displacedBy.point) : r;
}, Gg = (e, t) => {
  const r = e.page.borderBox;
  return wt(e.descriptor.id, t) ? Dr(r, Yt(t.displacedBy.point)) : r;
};
var kg = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => pu({
  target: Gg(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = ur(e, Eo(r, as(a, o))), u = ur(e, Eo(r, as(s, o)));
  return l < u ? -1 : u < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Nr = Ge(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: Rt(t.line, n)
  };
});
const Wg = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return Rt(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], l = Mt(e.descriptor.id, r).reduce((u, p) => u + p.client.marginBox[n.size], 0) + t[n.line] - o;
  return l <= 0 ? null : Rt(n.line, l);
}, bu = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), hu = (e, t, r) => {
  const n = e.frame;
  Kt(t, e) && (process.env.NODE_ENV !== "production" ? D(!1, "Should not add placeholder space to home list") : D()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot add placeholder size to a subject when it already has one") : D());
  const o = Nr(e.axis, t.displaceBy).point, i = Wg(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const p = zt({
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
  const s = i ? Ue(n.scroll.max, i) : n.scroll.max, l = bu(n, s), u = zt({
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
}, jg = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot remove placeholder form subject when there was none") : D());
  const r = e.frame;
  if (!r) {
    const a = zt({
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
  n || (process.env.NODE_ENV !== "production" ? D(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : D());
  const o = bu(r, n), i = zt({
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
var zg = ({
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
      displaced: dr,
      displacedBy: lu,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = un({
      impact: c,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), m = Kt(n, i) ? i : hu(i, n, o);
    return gu({
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
  })(), p = Nr(i.axis, n.displaceBy);
  return Zr({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: dr,
    index: u
  });
}, Ug = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = Fg({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const u = Mt(l.descriptor.id, o), p = kg({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }), c = zg({
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
  const d = un({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: bi({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, Qe = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Hg = (e, t) => {
  const r = Qe(e);
  return r ? t[r] : null;
};
var qg = ({
  state: e,
  type: t
}) => {
  const r = Hg(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: d
  } = e.dimensions;
  return s ? Bg({
    isMovingForward: l,
    previousPageBorderBoxCenter: p,
    draggable: u,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Ug({
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
function It(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function vu(e) {
  const t = at(e.top, e.bottom), r = at(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Yg(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Kg({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = Rt(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: ur(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Xg({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = sn(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Yg(e, i))
      return !1;
    if (vu(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], u = e[a.crossAxisEnd], p = at(i[a.crossAxisStart], i[a.crossAxisEnd]), c = p(l), d = p(u);
    return !c && !d ? !0 : c ? l < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Kg({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const yu = (e, t) => st(Dr(e, t));
var Jg = (e, t) => {
  const r = e.frame;
  return r ? yu(t, r.scroll.diff.value) : t;
};
function Eu({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Zg({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Qg = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = Nr(r.axis, t.displaceBy), u = l.value, p = e[s.start], c = e[s.end], m = ln(t, n).find((b) => {
    const f = b.descriptor.id, y = b.page.borderBox.center[s.line], w = wt(f, a), E = Eu({
      displaced: o,
      id: f
    });
    return w ? E ? c <= y : p < y - u : E ? c <= y + u : p < y;
  }) || null, h = Zg({
    draggable: t,
    closest: m,
    inHomeList: Kt(t, r)
  });
  return Zr({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: l,
    index: h
  });
};
const eb = 4;
var tb = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Nr(n.axis, e.displaceBy), l = s.value, u = t[a.start], p = t[a.end], d = ln(e, o).find((h) => {
    const b = h.descriptor.id, f = h.page.borderBox, w = f[a.size] / eb, E = wt(b, i), v = Eu({
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
}, xu = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = yu(t.page.borderBox, e), l = Xg({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!l)
    return gg;
  const u = n[l], p = Mt(u.descriptor.id, r), c = Jg(u, s);
  return tb({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: p,
    afterCritical: a
  }) || Qg({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: u,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, hi = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const rb = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = Qe(e), o = Qe(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = jg(i);
  return hi(r, a);
};
var nb = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = rb({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = Qe(o);
  if (!a)
    return i;
  const s = r[a];
  if (Kt(e, s) || s.subject.withPlaceholder)
    return i;
  const l = hu(s, e, t);
  return hi(i, l);
}, tr = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, u = Ze(l, e.initial.client.selection), p = {
    offset: u,
    selection: l,
    borderBoxCenter: Ue(e.initial.client.borderBoxCenter, u)
  }, c = {
    selection: Ue(p.selection, a.scroll.current),
    borderBoxCenter: Ue(p.borderBoxCenter, a.scroll.current),
    offset: Ue(p.offset, a.scroll.diff.value)
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
  const m = s.draggables[e.critical.draggable.id], h = o || xu({
    pageOffset: c.offset,
    draggable: m,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = nb({
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
function ob(e, t) {
  return e.map((r) => t[r]);
}
var wu = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = ob(i.all, r), s = pr({
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
}, Su = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = un({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return bi({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, Ou = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, D());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], u = Qe(n);
  u || (process.env.NODE_ENV !== "production" ? D(!1, "Must be over a destination in SNAP movement mode") : D());
  const p = s[u], c = wu({
    impact: n,
    viewport: o,
    destination: p,
    draggables: a
  }), d = Su({
    impact: c,
    draggable: l,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return tr({
    impact: c,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, ib = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Du = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Nr(t.axis, e.displaceBy), i = Mt(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Expected draggable to be inside home list") : D());
  const s = i.slice(a + 1), l = s.reduce((d, m) => (d[m.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: pr({
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
        destination: ib(e.descriptor)
      }
    },
    afterCritical: u
  };
}, ab = (e, t) => ({
  draggables: e.draggables,
  droppables: hi(e.droppables, t)
});
const Cr = (e) => {
  process.env.NODE_ENV;
}, _r = (e) => {
  process.env.NODE_ENV;
};
var sb = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = Kr(e.client, t), o = Xr(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, cb = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Expected Droppable to have a frame") : D()), t;
}, lb = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], l = cb(a).scroll.diff.value, u = Ue(n, l);
    return sb({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, ub = ({
  state: e,
  published: t
}) => {
  Cr();
  const r = t.modified.map((y) => {
    const w = e.dimensions.droppables[y.droppableId];
    return di(w, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...su(r)
  }, o = cu(lb({
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
  }, s = Qe(e.impact), l = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: d
  } = Du({
    draggable: u,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), m = l && l.isCombineEnabled ? e.impact : c, h = xu({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: m,
    viewport: e.viewport,
    afterCritical: d
  });
  _r();
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
const xo = (e) => e.movementMode === "SNAP", Dn = (e, t, r) => {
  const n = ab(e.dimensions, t);
  return !xo(e) || r ? tr({
    state: e,
    dimensions: n
  }) : Ou({
    state: e,
    dimensions: n
  });
};
function Nn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ss = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var db = (e = ss, t) => {
  if (t.type === "FLUSH")
    return {
      ...ss,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "INITIAL_PUBLISH must come after a IDLE phase") : D());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], l = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: ke
    }, p = {
      client: u,
      page: {
        selection: Ue(u.selection, o.scroll.initial),
        borderBoxCenter: Ue(u.selection, o.scroll.initial),
        offset: Ue(u.selection, o.scroll.diff.value)
      }
    }, c = sn(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: m
    } = Du({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, `Collection cannot start from phase ${e.phase}`) : D()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : D()), ub({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    It(e) || (process.env.NODE_ENV !== "production" ? D(!1, `${t.type} not permitted in phase ${e.phase}`) : D());
    const {
      client: r
    } = t.payload;
    return vt(r, e.current.client.selection) ? e : tr({
      state: e,
      clientSelection: r,
      impact: xo(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Nn(e);
    It(e) || (process.env.NODE_ENV !== "production" ? D(!1, `${t.type} not permitted in phase ${e.phase}`) : D());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = di(o, n);
    return Dn(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    It(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Attempting to move in an unsupported phase ${e.phase}`) : D());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : D()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? D(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : D());
    const i = {
      ...o,
      isEnabled: n
    };
    return Dn(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    It(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Attempting to move in an unsupported phase ${e.phase}`) : D());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : D()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? D(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : D());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return Dn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    It(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot move by window in phase ${e.phase}`) : D()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? D(!1, "Window scrolling is currently not supported for fixed lists") : D());
    const r = t.payload.newScroll;
    if (vt(e.viewport.scroll.current, r))
      return Nn(e);
    const n = mu(e.viewport, r);
    return xo(e) ? Ou({
      state: e,
      viewport: n
    }) : tr({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!It(e))
      return e;
    const r = t.payload.maxScroll;
    if (vt(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, `${t.type} received while not in DRAGGING phase`) : D());
    const r = qg({
      state: e,
      type: t.type
    });
    return r ? tr({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? D(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : D()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot animate drop from phase ${e.phase}`) : D()), {
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
const pb = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), fb = (e) => ({
  type: "LIFT",
  payload: e
}), mb = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), gb = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), bb = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), hb = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), vb = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), yb = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Nu = (e) => ({
  type: "MOVE",
  payload: e
}), Eb = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), xb = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), wb = () => ({
  type: "MOVE_UP",
  payload: null
}), Sb = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Ob = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Db = () => ({
  type: "MOVE_LEFT",
  payload: null
}), vi = () => ({
  type: "FLUSH",
  payload: null
}), Nb = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), yi = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Cu = (e) => ({
  type: "DROP",
  payload: e
}), Cb = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), _u = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function _b(e) {
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
  process.env.NODE_ENV !== "production" && Ie(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function Ib(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Mt(e.droppable.id, t.draggables);
    _b(r);
  }
}
var Pb = (e) => ({
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
  l.phase === "DROP_ANIMATING" && r(yi({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Unexpected phase to start a drag") : D()), r(vi()), r(pb({
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
  Ib(c, d), r(mb({
    critical: c,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: m
  }));
}, Ab = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Ei = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, fr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Iu = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ot = `${Iu.outOfTheWay}s ${Ei.outOfTheWay}`, rr = {
  fluid: `opacity ${Ot}`,
  snap: `transform ${Ot}, opacity ${Ot}`,
  drop: (e) => {
    const t = `${e}s ${Ei.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ot}`,
  placeholder: `height ${Ot}, width ${Ot}, margin ${Ot}`
}, cs = (e) => vt(e, ke) ? void 0 : `translate(${e.x}px, ${e.y}px)`, wo = {
  moveTo: cs,
  drop: (e, t) => {
    const r = cs(e);
    if (r)
      return t ? `${r} scale(${fr.scale.drop})` : r;
  }
}, {
  minDropTime: So,
  maxDropTime: Pu
} = Iu, Rb = Pu - So, ls = 1500, Tb = 0.6;
var $b = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = ur(e, t);
  if (n <= 0)
    return So;
  if (n >= ls)
    return Pu;
  const o = n / ls, i = So + Rb * o, a = r === "CANCEL" ? i * Tb : i;
  return Number(a.toFixed(2));
}, Vb = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = Qe(e), l = s ? a[s] : null, u = a[t.descriptor.droppableId], p = Su({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || u,
    viewport: n
  });
  return Ze(p, t.client.borderBox.center);
}, Mb = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: wu({
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
    displaced: dr
  },
  didDropInsideDroppable: !0
};
const Lb = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Cb({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? D(!1, "A DROP action occurred while DROP_PENDING and still waiting") : D()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot drop in phase: ${o.phase}`) : D());
  const s = o.critical, l = o.dimensions, u = l.draggables[o.critical.draggable.id], {
    impact: p,
    didDropInsideDroppable: c
  } = Mb({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = c ? pi(p) : null, m = c ? cn(p) : null, h = {
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
  }, f = Vb({
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
  if (!(!vt(o.current.client.offset, f) || !!b.combine)) {
    t(yi({
      completed: y
    }));
    return;
  }
  const E = $b({
    current: o.current.client.offset,
    destination: f,
    reason: i
  });
  t(Nb({
    newHomeClientOffset: f,
    dropDuration: E,
    completed: y
  }));
};
var Bb = Lb, Au = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Fb(e) {
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
function Gb({
  onWindowScroll: e
}) {
  function t() {
    e(Au());
  }
  const r = cr(t), n = Fb(r);
  let o = ht;
  function i() {
    return o !== ht;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start scroll listener when already active") : D()), o = it(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop scroll listener when not active") : D()), r.cancel(), o(), o = ht;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const kb = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Wb = (e) => {
  const t = Gb({
    onWindowScroll: (r) => {
      e.dispatch(Eb({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && kb(n) && t.stop(), r(n);
  };
};
var jb = Wb, zb = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && Ie("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && Ie(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Ub = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Could not find timer") : D());
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
const Hb = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, qb = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Yb = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, Zt = (e, t) => {
  Cr(), t(), _r();
}, Ar = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Cn(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = zb(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Kb = (e, t) => {
  const r = Ub();
  let n = null;
  const o = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : D()), Zt("onBeforeCapture", () => {
      const m = e().onBeforeCapture;
      m && m({
        draggableId: c,
        mode: d
      });
    });
  }, i = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : D()), Zt("onBeforeDragStart", () => {
      const m = e().onBeforeDragStart;
      m && m(Ar(c, d));
    });
  }, a = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : D());
    const m = Ar(c, d);
    n = {
      mode: d,
      lastCritical: c,
      lastLocation: m.source,
      lastCombine: null
    }, r.add(() => {
      Zt("onDragStart", () => Cn(e().onDragStart, m, t, Br.onDragStart));
    });
  }, s = (c, d) => {
    const m = pi(d), h = cn(d);
    n || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onDragMove when onDragStart has not been called") : D());
    const b = !Yb(c, n.lastCritical);
    b && (n.lastCritical = c);
    const f = !Hb(n.lastLocation, m);
    f && (n.lastLocation = m);
    const y = !qb(n.lastCombine, h);
    if (y && (n.lastCombine = h), !b && !f && !y)
      return;
    const w = {
      ...Ar(c, n.mode),
      combine: h,
      destination: m
    };
    r.add(() => {
      Zt("onDragUpdate", () => Cn(e().onDragUpdate, w, t, Br.onDragUpdate));
    });
  }, l = () => {
    n || (process.env.NODE_ENV !== "production" ? D(!1, "Can only flush responders while dragging") : D()), r.flush();
  }, u = (c) => {
    n || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : D()), n = null, Zt("onDragEnd", () => Cn(e().onDragEnd, c, t, Br.onDragEnd));
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
        ...Ar(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(c);
    }
  };
}, Xb = (e, t) => {
  const r = Kb(e, t);
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
const Jb = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot finish a drop animating when no drop is occurring") : D()), e.dispatch(yi({
    completed: n.completed
  }));
};
var Zb = Jb;
const Qb = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(_u());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = it(window, [a]);
    });
  };
};
var eh = Qb, th = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, rh = (e) => {
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
const nh = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var oh = (e) => (t) => (r) => (n) => {
  if (nh(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : D()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const ih = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Cu({
    reason: n.reason
  })));
};
var ah = ih;
const sh = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : jl;
var ch = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => Wl(db, sh(Yf(Ab(r), th(e), Pb(e), Bb, Zb, eh, ah, oh(i), jb, rh(t), Xb(n, o))));
const _n = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function lh({
  registry: e,
  callbacks: t
}) {
  let r = _n(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, Cr();
      const {
        additions: l,
        removals: u,
        modified: p
      } = r, c = Object.keys(l).map((h) => e.draggable.getById(h).getDimension(ke)).sort((h, b) => h.descriptor.index - b.descriptor.index), d = Object.keys(p).map((h) => {
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
      r = _n(), _r(), t.publish(m);
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
      n && (cancelAnimationFrame(n), n = null, r = _n());
    }
  };
}
var Ru = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Ze({
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
}, Tu = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find document.documentElement") : D()), e;
}, $u = () => {
  const e = Tu();
  return Ru({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, uh = () => {
  const e = Au(), t = $u(), r = e.y, n = e.x, o = Tu(), i = o.clientWidth, a = o.clientHeight, s = n + i, l = r + a;
  return {
    frame: st({
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
        value: ke,
        displacement: ke
      }
    }
  };
}, dh = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Cr();
  const n = uh(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), l = {
    draggables: cu(s),
    droppables: su(a)
  };
  return _r(), {
    dimensions: l,
    critical: e,
    viewport: n
  };
};
function us(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Ie(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var ph = (e, t) => {
  let r = null;
  const n = lh({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, m) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : D()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: m
    });
  }, i = (d, m) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : D()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: m
    }));
  }, a = (d, m) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : D()), t.updateDroppableScroll({
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
    r || (process.env.NODE_ENV !== "production" ? D(!1, "Should only be subscribed when a collection is occurring") : D());
    const m = r.critical.draggable;
    d.type === "ADDITION" && us(e, m, d.value) && n.add(d.value), d.type === "REMOVAL" && us(e, m, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start capturing critical dimensions as there is already a collection") : D());
      const m = e.draggable.getById(d.draggableId), h = e.droppable.getById(m.descriptor.droppableId), b = {
        draggable: m.descriptor,
        droppable: h.descriptor
      }, f = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: f
      }, dh({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: l
  };
}, Vu = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", fh = (e) => {
  window.scrollBy(e.x, e.y);
};
const mh = Ge((e) => sn(e).filter((t) => !(!t.isEnabled || !t.frame))), gh = (e, t) => mh(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? D(!1, "Invalid result") : D()), vu(n.frame.pageMarginBox)(e))) || null;
var bh = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return gh(e, r);
};
const mr = {
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
var hh = (e, t, r = () => mr) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Mu = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && Ie(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, xi = 1, vh = (e, t, r = () => mr) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return xi;
  const i = 1 - Mu({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, yh = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return xi;
  const p = Mu({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), c = e * n.ease(p);
  return Math.ceil(c);
}, ds = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = vh(e, t, o);
  return i === 0 ? 0 : n ? Math.max(yh(i, r, o), xi) : i;
}, ps = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = hh(e, n, i);
  return t[n.end] < t[n.start] ? ds({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * ds({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Eh = ({
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
const xh = au((e) => e === 0 ? 0 : e);
var Lu = ({
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
  }, s = ps({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: fi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = ps({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: du,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = xh({
    x: l,
    y: s
  });
  if (vt(u, ke))
    return null;
  const p = Eh({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return p ? vt(p, ke) ? null : p : null;
};
const wh = au((e) => e === 0 ? 0 : e > 0 ? 1 : -1), wi = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = Ue(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return vt(i, ke) ? null : i;
  };
})(), Bu = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = wh(r), i = wi({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Si = (e, t) => Bu({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Sh = (e, t) => {
  if (!Si(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return wi({
    current: n,
    max: r,
    change: t
  });
}, Oi = (e, t) => {
  const r = e.frame;
  return r ? Bu({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, Oh = (e, t) => {
  const r = e.frame;
  return !r || !Oi(e, t) ? null : wi({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var Dh = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Lu({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Si(e, a) ? a : null;
}, Nh = ({
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
  const s = Lu({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Oi(e, s) ? s : null;
}, fs = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, d = Dh({
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
  const u = bh({
    center: a,
    destination: Qe(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const p = Nh({
    dragStartTime: t,
    droppable: u,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  p && o(u.descriptor.id, p);
}, Ch = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => mr
}) => {
  const n = cr(e), o = cr(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fluid scroll if not dragging") : D());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: c
    } = i;
    fs({
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
      Cr(), i && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start auto scrolling when already started") : D());
      const p = Date.now();
      let c = !1;
      const d = () => {
        c = !0;
      };
      fs({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: c
      }, _r(), c && a(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, _h = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, l) => {
    const u = Ue(s.current.client.selection, l);
    e({
      client: u
    });
  }, o = (s, l) => {
    if (!Oi(s, l))
      return l;
    const u = Oh(s, l);
    if (!u)
      return t(s.descriptor.id, l), null;
    const p = Ze(l, u);
    return t(s.descriptor.id, p), Ze(l, p);
  }, i = (s, l, u) => {
    if (!s || !Si(l, u))
      return u;
    const p = Sh(l, u);
    if (!p)
      return r(u), null;
    const c = Ze(u, p);
    return r(c), Ze(u, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const u = Qe(s.impact);
    u || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot perform a jump scroll when there is no destination") : D());
    const p = o(s.dimensions.droppables[u], l);
    if (!p)
      return;
    const c = s.viewport, d = i(s.isWindowScrollAllowed, c, p);
    d && n(s, d);
  };
}, Ih = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = Ch({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = _h({
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
const Ut = "data-rfd", Ht = (() => {
  const e = `${Ut}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Oo = (() => {
  const e = `${Ut}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Ph = (() => {
  const e = `${Ut}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ms = {
  contextId: `${Ut}-scroll-container-context-id`
}, Ah = (e) => (t) => `[${t}="${e}"]`, Qt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), Rh = "pointer-events: none;";
var Th = (e) => {
  const t = Ah(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Ht.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: Rh,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${rr.outOfTheWay};
    `;
    return {
      selector: t(Oo.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(Ph.contextId),
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
    always: Qt(a, "always"),
    resting: Qt(a, "resting"),
    dragging: Qt(a, "dragging"),
    dropAnimating: Qt(a, "dropAnimating"),
    userCancel: Qt(a, "userCancel")
  };
};
const $h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Sr : ae;
var et = $h;
const In = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find the head to append a style to") : D()), e;
}, gs = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Vh(e, t) {
  const r = ne(() => Th(e), [e]), n = F(null), o = F(null), i = j(Ge((c) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot set dynamic style element if it is not set") : D()), d.textContent = c;
  }), []), a = j((c) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot set dynamic style element if it is not set") : D()), d.textContent = c;
  }, []);
  et(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? D(!1, "style elements already mounted") : D());
    const c = gs(t), d = gs(t);
    return n.current = c, o.current = d, c.setAttribute(`${Ut}-always`, e), d.setAttribute(`${Ut}-dynamic`, e), In().appendChild(c), In().appendChild(d), a(r.always), i(r.resting), () => {
      const m = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot unmount ref as it is not set") : D()), In().removeChild(b), h.current = null;
      };
      m(n), m(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = j(() => i(r.dragging), [i, r.dragging]), l = j((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = j(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return ne(() => ({
    dragging: s,
    dropping: l,
    resting: u
  }), [s, l, u]);
}
function Fu(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Gu = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ir(e) {
  return e instanceof Gu(e).HTMLElement;
}
function ku(e, t) {
  const r = `[${Ht.contextId}="${e}"]`, n = Fu(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Ie(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Ht.draggableId) === t);
  return o ? Ir(o) ? o : (process.env.NODE_ENV !== "production" && Ie("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ie(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Mh(e) {
  const t = F({}), r = F(null), n = F(null), o = F(!1), i = j(function(d, m) {
    const h = {
      id: d,
      focus: m
    };
    return t.current[d] = h, function() {
      const f = t.current;
      f[d] !== h && delete f[d];
    };
  }, []), a = j(function(d) {
    const m = ku(e, d);
    m && m !== document.activeElement && m.focus();
  }, [e]), s = j(function(d, m) {
    r.current === d && (r.current = m);
  }, []), l = j(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = j(function(d) {
    r.current = null;
    const m = document.activeElement;
    m && m.getAttribute(Ht.draggableId) === d && (r.current = d);
  }, []);
  return et(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), ne(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, u, l, s]);
}
function Lh() {
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
    return d || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find draggable entry with id [${c}]`) : D()), d;
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
    return d || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find droppable entry with id [${c}]`) : D()), d;
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
function Bh() {
  const e = ne(Lh, []);
  return ae(() => function() {
    P.version.startsWith("16") || P.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Di = P.createContext(null), gr = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find document.body") : D()), e;
};
const Fh = {
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
var Gh = Fh;
const kh = (e) => `rfd-announcement-${e}`;
function Wh(e) {
  const t = ne(() => kh(e), [e]), r = F(null);
  return ae(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), bt(i.style, Gh), gr().appendChild(i), function() {
      setTimeout(function() {
        const l = gr();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), j((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && Ie(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let jh = 0;
const Wu = {
  separator: "::"
};
function zh(e, t = Wu) {
  return ne(() => `${e}${t.separator}${jh++}`, [t.separator, e]);
}
function Uh(e, t = Wu) {
  const r = P.useId();
  return ne(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Ni = "useId" in P ? Uh : zh;
function Hh({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function qh({
  contextId: e,
  text: t
}) {
  const r = Ni("hidden-text", {
    separator: "-"
  }), n = ne(() => Hh({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ae(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", gr().appendChild(i), function() {
      const s = gr();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var dn = P.createContext(null), Yh = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Kh = /(\d+)\.(\d+)\.(\d+)/, bs = (e) => {
  const t = Kh.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? D(!1, `Unable to parse React version ${e}`) : D());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Xh = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Jh = (e, t) => {
  const r = bs(e), n = bs(t);
  Xh(r, n) || process.env.NODE_ENV !== "production" && Ie(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Pn = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Zh = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Ie(`
      No <!doctype html> found.

      ${Pn}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Ie(`
      Unexpected <!doctype> found: (${t.name})

      ${Pn}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Ie(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Pn}
    `);
};
function Ci(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Pr(e, t) {
  Ci(() => {
    ae(() => {
      try {
        e();
      } catch (r) {
        yo(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Qh() {
  Pr(() => {
    Jh(Yh.react, P.version), Zh(document);
  }, []);
}
function _i(e) {
  const t = F(e);
  return ae(() => {
    t.current = e;
  }), t;
}
function ev() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function n(a) {
    e && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot claim lock as it is already claimed") : D());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot release lock when there is no lock") : D()), e = null;
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
function br(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const tv = 9, rv = 13, Ii = 27, ju = 32, nv = 33, ov = 34, iv = 35, av = 36, sv = 37, cv = 38, lv = 39, uv = 40, dv = {
  [rv]: !0,
  [tv]: !0
};
var zu = (e) => {
  dv[e.keyCode] && e.preventDefault();
};
const pv = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var pn = pv;
const Uu = 0, hs = 5;
function fv(e, t) {
  return Math.abs(t.x - e.x) >= hs || Math.abs(t.y - e.y) >= hs;
}
const vs = {
  type: "IDLE"
};
function mv({
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
      if (i !== Uu)
        return;
      const l = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(l);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot be IDLE") : D());
      const p = u.point;
      if (!fv(p, l))
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
      if (o.keyCode === Ii) {
        o.preventDefault(), e();
        return;
      }
      zu(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Unexpected phase") : D()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: pn,
    fn: e
  }];
}
function gv(e) {
  const t = F(vs), r = F(ht), n = ne(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== Uu || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
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
  }), [e]), o = ne(() => ({
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
  }), [e]), i = j(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = it(window, [o, n], c);
  }, [o, n]), a = j(() => {
    t.current.type !== "IDLE" && (t.current = vs, r.current(), i());
  }, [i]), s = j(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), l = j(function() {
    const c = {
      capture: !0,
      passive: !1
    }, d = mv({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (m) => {
        t.current = m;
      }
    });
    r.current = it(window, d, c);
  }, [s, a]), u = j(function(c, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected to move from IDLE to PENDING drag") : D()), t.current = {
      type: "PENDING",
      point: d,
      actions: c
    }, l();
  }, [l]);
  et(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function bv() {
}
const hv = {
  [ov]: !0,
  [nv]: !0,
  [av]: !0,
  [iv]: !0
};
function vv(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Ii) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === ju) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === uv) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === cv) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === lv) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === sv) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (hv[o.keyCode]) {
        o.preventDefault();
        return;
      }
      zu(o);
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
    eventName: pn,
    fn: r
  }];
}
function yv(e) {
  const t = F(bv), r = ne(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== ju)
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
        l || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop capturing a keyboard drag when not capturing") : D()), l = !1, t.current(), n();
      }
      t.current = it(window, vv(u, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = j(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = it(window, [r], i);
  }, [r]);
  et(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const An = {
  type: "IDLE"
}, Ev = 120, xv = 0.15;
function wv({
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
      r.keyCode === Ii && r.preventDefault(), e();
    }
  }, {
    eventName: pn,
    fn: e
  }];
}
function Sv({
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
      o.type === "IDLE" && (process.env.NODE_ENV, D());
      const i = n.touches[0];
      if (!i || !(i.force >= xv))
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
    eventName: pn,
    fn: e
  }];
}
function Ov(e) {
  const t = F(An), r = F(ht), n = j(function() {
    return t.current;
  }, []), o = j(function(m) {
    t.current = m;
  }, []), i = ne(() => ({
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
  }), [e]), a = j(function() {
    const m = {
      capture: !0,
      passive: !1
    };
    r.current = it(window, [i], m);
  }, [i]), s = j(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(An), r.current(), a());
  }, [a, o]), l = j(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = j(function() {
    const m = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: l,
      completed: s,
      getPhase: n
    }, b = it(window, Sv(h), m), f = it(window, wv(h), m);
    r.current = function() {
      b(), f();
    };
  }, [l, n, s]), p = j(function() {
    const m = n();
    m.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? D(!1, `Cannot start dragging from phase ${m.type}`) : D());
    const h = m.actions.fluidLift(m.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [n, o]), c = j(function(m, h) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected to move from IDLE to PENDING drag") : D());
    const b = setTimeout(p, Ev);
    o({
      type: "PENDING",
      point: h,
      actions: m,
      longPressTimerId: b
    }), u();
  }, [u, n, o, p]);
  et(function() {
    return a(), function() {
      r.current();
      const h = n();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(An));
    };
  }, [n, a, o]), et(function() {
    return it(window, [{
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
function Dv(e) {
  Ci(() => {
    const t = _i(e);
    Pr(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot change the amount of sensor hooks after mounting") : D(!1));
    });
  });
}
const Nv = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Hu(e, t) {
  if (t == null)
    return !1;
  if (Nv.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Hu(e, t.parentElement);
}
function Cv(e, t) {
  const r = t.target;
  return Ir(r) ? Hu(e, r) : !1;
}
var _v = (e) => st(e.getBoundingClientRect()).center;
function Iv(e) {
  return e instanceof Gu(e).Element;
}
const Pv = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function qu(e, t) {
  return e == null ? null : e[Pv](t) ? e : qu(e.parentElement, t);
}
function Av(e, t) {
  return e.closest ? e.closest(t) : qu(e, t);
}
function Rv(e) {
  return `[${Ht.contextId}="${e}"]`;
}
function Tv(e, t) {
  const r = t.target;
  if (!Iv(r))
    return process.env.NODE_ENV !== "production" && Ie("event.target must be a Element"), null;
  const n = Rv(e), o = Av(r, n);
  return o ? Ir(o) ? o : (process.env.NODE_ENV !== "production" && Ie("drag handle must be a HTMLElement"), null) : null;
}
function $v(e, t) {
  const r = Tv(e, t);
  return r ? r.getAttribute(Ht.draggableId) : null;
}
function Vv(e, t) {
  const r = `[${Oo.contextId}="${e}"]`, o = Fu(document, r).find((i) => i.getAttribute(Oo.id) === t);
  return o ? Ir(o) ? o : (process.env.NODE_ENV !== "production" && Ie("Draggable element is not a HTMLElement"), null) : null;
}
function Mv(e) {
  e.preventDefault();
}
function Rr({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && Ie(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && Ie(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Yu({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !Vu(t.getState(), n)) : (process.env.NODE_ENV !== "production" && Ie(`Unable to find draggable with id: ${n}`), !1);
}
function Lv({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Yu({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const l = n.draggable.getById(o), u = Vv(t, l.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && Ie(`Unable to find draggable element with id: ${o}`), null;
  if (a && !l.options.canDragInteractiveElements && Cv(u, a))
    return null;
  const p = e.claim(i || ht);
  let c = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(p);
  }
  function h(g, x) {
    Rr({
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
    c !== "PRE_DRAG" && (x(), process.env.NODE_ENV !== "production" ? D(!1, `Cannot lift in phase ${c}`) : D()), r.dispatch(fb(g.liftActionArgs)), c = "DRAGGING";
    function N(C, $ = {
      shouldBlockNextClick: !1
    }) {
      if (g.cleanup(), $.shouldBlockNextClick) {
        const A = it(window, [{
          eventName: "click",
          fn: Mv,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(A);
      }
      x(), r.dispatch(Cu({
        reason: C
      }));
    }
    return {
      isActive: () => Rr({
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
    const x = cr((C) => {
      b(() => Nu({
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
      moveUp: () => b(wb),
      moveRight: () => b(Ob),
      moveDown: () => b(Sb),
      moveLeft: () => b(Db)
    };
    return f({
      liftActionArgs: {
        id: o,
        clientSelection: _v(u),
        movementMode: "SNAP"
      },
      cleanup: ht,
      actions: g
    });
  }
  function E() {
    Rr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: m,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Rr({
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
const Bv = [gv, yv, Ov];
function Fv({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? Bv : [], ...n || []], a = $e(() => ev())[0], s = j(function(f, y) {
    br(f) && !br(y) && a.tryAbandon();
  }, [a]);
  et(function() {
    let f = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      s(f, w), f = w;
    });
  }, [a, t, s]), et(() => a.tryAbandon, [a.tryAbandon]);
  const l = j((b) => Yu({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = j((b, f, y) => Lv({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: f || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), p = j((b) => $v(e, b), [e]), c = j((b) => {
    const f = r.draggable.findById(b);
    return f ? f.options : null;
  }, [r.draggable]), d = j(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(vi()));
  }, [a, t]), m = j(() => a.isClaimed(), [a]), h = ne(() => ({
    canGetLock: l,
    tryGetLock: u,
    findClosestDraggableId: p,
    findOptionsForDraggable: c,
    tryReleaseLock: d,
    isLockClaimed: m
  }), [l, u, p, c, d, m]);
  Dv(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const Gv = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    P.version.startsWith("16") || P.version.startsWith("17") ? r() : Or(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), kv = (e) => ({
  ...mr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...mr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function er(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find store from lazy ref") : D()), e.current;
}
function Wv(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = F(null);
  Qh();
  const s = _i(e), l = j(() => Gv(s.current), [s]), u = j(() => kv(s.current), [s]), p = Wh(t), c = qh({
    contextId: t,
    text: i
  }), d = Vh(t, o), m = j((A) => {
    er(a).dispatch(A);
  }, []), h = ne(() => _a({
    publishWhileDragging: gb,
    updateDroppableScroll: hb,
    updateDroppableIsEnabled: vb,
    updateDroppableIsCombineEnabled: yb,
    collectionStarting: bb
  }, m), [m]), b = Bh(), f = ne(() => ph(b, h), [b, h]), y = ne(() => Ih({
    scrollWindow: fh,
    scrollDroppable: f.scrollDroppable,
    getAutoScrollerOptions: u,
    ..._a({
      move: Nu
    }, m)
  }), [f.scrollDroppable, m, u]), w = Mh(t), E = ne(() => ch({
    announce: p,
    autoScroller: y,
    dimensionMarshal: f,
    focusMarshal: w,
    getResponders: l,
    styleMarshal: d
  }), [p, y, f, w, l, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && Ie("unexpected store change"), a.current = E;
  const v = j(() => {
    const A = er(a);
    A.getState().phase !== "IDLE" && A.dispatch(vi());
  }, []), g = j(() => {
    const A = er(a).getState();
    return A.phase === "DROP_ANIMATING" ? !0 : A.phase === "IDLE" ? !1 : A.isDragging;
  }, []), x = ne(() => ({
    isDragging: g,
    tryAbort: v
  }), [g, v]);
  r(x);
  const N = j((A) => Vu(er(a).getState(), A), []), C = j(() => It(er(a).getState()), []), $ = ne(() => ({
    marshal: f,
    focus: w,
    contextId: t,
    canLift: N,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: c,
    registry: b
  }), [t, f, c, w, N, C, b]);
  return Fv({
    contextId: t,
    store: E,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ae(() => v, [v]), P.createElement(dn.Provider, {
    value: $
  }, P.createElement(Fm, {
    context: Di,
    store: E
  }, e.children));
}
let jv = 0;
function zv() {
  return ne(() => `${jv++}`, []);
}
function Uv() {
  return P.useId();
}
var Hv = "useId" in P ? Uv : zv;
function qv(e) {
  const t = Hv(), r = e.dragHandleUsageInstructions || Br.dragHandleUsageInstructions;
  return P.createElement(tg, null, (n) => P.createElement(Wv, {
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
const ys = {
  dragging: 5e3,
  dropAnimating: 4500
}, Yv = (e, t) => t ? rr.drop(t.duration) : e ? rr.snap : rr.fluid, Kv = (e, t) => {
  if (e)
    return t ? fr.opacity.drop : fr.opacity.combining;
}, Xv = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Jv(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Xv(e), l = !!i, u = l ? wo.drop(n, a) : wo.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Yv(s, i),
    transform: u,
    opacity: Kv(a, l),
    zIndex: l ? ys.dropAnimating : ys.dragging,
    pointerEvents: "none"
  };
}
function Zv(e) {
  return {
    transform: wo.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Qv(e) {
  return e.type === "DRAGGING" ? Jv(e) : Zv(e);
}
function ey(e, t, r = ke) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = tu(o, n), a = Xr(i, r), s = {
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
function ty(e) {
  const t = Ni("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = ne(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = j((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot get dimension when no ref is set") : D()), ey(r, h, m);
  }, [r, o]), p = ne(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = F(p), d = F(!0);
  et(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), et(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var Pi = P.createContext(null);
function Ku(e) {
  e && Ir(e) || (process.env.NODE_ENV !== "production" ? D(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : D());
}
function ry(e, t, r) {
  Pr(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? D(!1, "Draggable requires a draggableId") : D(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? D(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : D(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? D(!1, `${n(o)} requires an integer index prop`) : D(!1)), e.mapped.type !== "DRAGGING" && (Ku(r()), e.isEnabled && (ku(t, o) || (process.env.NODE_ENV !== "production" ? D(!1, `${n(o)} Unable to find drag handle`) : D(!1))));
  });
}
function ny(e) {
  Ci(() => {
    const t = F(e);
    Pr(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? D(!1, "Draggable isClone prop value changed during component life") : D(!1));
    }, [e]);
  });
}
function Qr(e) {
  const t = St(e);
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find required context") : D()), t;
}
function oy(e) {
  e.preventDefault();
}
const iy = (e) => {
  const t = F(null), r = j((x = null) => {
    t.current = x;
  }, []), n = j(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Qr(dn), {
    type: s,
    droppableId: l
  } = Qr(Pi), u = ne(() => ({
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
  if (ry(e, o, n), ny(b), !b) {
    const x = ne(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    ty(x);
  }
  const w = ne(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: oy
  } : null, [o, i, c, d]), E = j((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (P.version.startsWith("16") || P.version.startsWith("17") ? y() : Or(y));
  }, [y, f]), v = ne(() => {
    const x = Qv(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
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
  }, [o, w, c, f, E, r]), g = ne(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return P.createElement(P.Fragment, null, p(v, f.snapshot, g));
};
var ay = iy, Xu = (e, t) => e === t, Ju = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const sy = (e) => e.combine ? e.combine.draggableId : null, cy = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function ly() {
  const e = Ge((o, i) => ({
    x: o,
    y: i
  })), t = Ge((o, i, a = null, s = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = Ge((o, i, a, s, l = null, u = null, p = null) => ({
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
    if (br(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = Qe(o.impact), u = cy(o.impact), p = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, l, u, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], u = a.result, p = u.mode, c = Ju(u), d = sy(u), h = {
        duration: o.dropDuration,
        curve: Ei.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? fr.opacity.drop : null,
        scale: d ? fr.scale.drop : null
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
function Zu(e = null) {
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
const uy = {
  mapped: {
    type: "SECONDARY",
    offset: ke,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Zu(null)
  }
};
function dy() {
  const e = Ge((a, s) => ({
    x: a,
    y: s
  })), t = Ge(Zu), r = Ge((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(ke, a, !0) : null, o = (a, s, l, u) => {
    const p = l.displaced.visible[a], c = !!(u.inVirtualList && u.effected[a]), d = cn(l), m = d && d.draggableId === a ? s : null;
    if (!p) {
      if (!c)
        return n(m);
      if (l.displaced.invisible[a])
        return null;
      const f = Yt(u.displacedBy.point), y = e(f.x, f.y);
      return r(y, m, !0);
    }
    if (c)
      return n(m);
    const h = l.displacedBy.point, b = e(h.x, h.y);
    return r(b, m, p.shouldAnimate);
  };
  return (a, s) => {
    if (br(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const py = () => {
  const e = ly(), t = dy();
  return (n, o) => e(n, o) || t(n, o) || uy;
}, fy = {
  dropAnimationFinished: _u
}, my = Ql(py, fy, null, {
  context: Di,
  areStatePropsEqual: Xu
})(ay);
var gy = my;
function Qu(e) {
  return Qr(Pi).isUsingCloneFor === e.draggableId && !e.isClone ? null : P.createElement(gy, e);
}
function by(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return P.createElement(Qu, bt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Ai = (e) => (t) => e === t, hy = Ai("scroll"), vy = Ai("auto"), yy = Ai("visible"), Es = (e, t) => t(e.overflowX) || t(e.overflowY), Ey = (e, t) => t(e.overflowX) && t(e.overflowY), ed = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Es(r, hy) || Es(r, vy);
}, xy = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = gr(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, D()), !ed(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Ey(n, yy) || process.env.NODE_ENV !== "production" && Ie(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ri = (e) => e == null ? null : e === document.body ? xy() ? e : null : e === document.documentElement ? null : ed(e) ? e : Ri(e.parentElement);
var wy = (e) => {
  !e || !Ri(e.parentElement) || process.env.NODE_ENV !== "production" && Ie(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Do = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const td = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : td(e.parentElement) : !1;
var Sy = (e) => {
  const t = Ri(e), r = td(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Oy = ({
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
    } = s, h = Ru({
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
          value: ke,
          displacement: ke
        }
      }
    };
  })(), u = o === "vertical" ? fi : du, p = zt({
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
const Dy = (e, t) => {
  const r = ru(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, l = li({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return ui({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Ny = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = Dy(e, l), p = Xr(u, n), c = (() => {
    if (!l)
      return null;
    const m = ru(l), h = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: m,
      page: Xr(m, n),
      scroll: Do(l),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return Oy({
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
const Cy = {
  passive: !1
}, _y = {
  passive: !0
};
var xs = (e) => e.shouldPublishImmediately ? Cy : _y;
const Tr = (e) => e && e.env.closestScrollable || null;
function Iy(e) {
  const t = F(null), r = Qr(dn), n = Ni("droppable"), {
    registry: o,
    marshal: i
  } = r, a = _i(e), s = ne(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = F(s), u = ne(() => Ge((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? D(!1, "Can only update scroll when dragging") : D());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = j(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? ke : Do(v.env.closestScrollable);
  }, []), c = j(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = ne(() => cr(c), [c]), m = j(() => {
    const v = t.current, g = Tr(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find scroll options while scrolling") : D()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = j((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot collect a droppable while a drag is occurring") : D());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot collect without a droppable ref") : D());
    const C = Sy(N), $ = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = $;
    const A = Ny({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), R = C.closestScrollable;
    return R && (R.setAttribute(ms.contextId, r.contextId), R.addEventListener("scroll", m, xs($.scrollOptions)), process.env.NODE_ENV !== "production" && wy(R)), A;
  }, [r.contextId, s, m, a]), b = j(() => {
    const v = t.current, g = Tr(v);
    return v && g || (process.env.NODE_ENV !== "production" ? D(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : D()), Do(g);
  }, []), f = j(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop drag when no active drag") : D());
    const g = Tr(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(ms.contextId), g.removeEventListener("scroll", m, xs(v.scrollOptions)));
  }, [m, d]), y = j((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot scroll when there is no drag") : D());
    const x = Tr(g);
    x || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot scroll a droppable with no closest scrollable") : D()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = ne(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = ne(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  et(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ie("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), et(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), et(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Rn() {
}
const ws = {
  width: 0,
  height: 0,
  margin: cg
}, Py = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? ws : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Ay = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = Py({
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
    transition: r !== "none" ? rr.placeholder : null
  };
}, Ry = (e) => {
  const t = F(null), r = j(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = $e(e.animate === "open");
  ae(() => s ? n !== "open" ? (r(), l(!1), Rn) : t.current ? Rn : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Rn, [n, s, r]);
  const u = j((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = Ay({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return P.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var Ty = P.memo(Ry);
function Tn(e) {
  return typeof e == "boolean";
}
function $n(e, t) {
  t.forEach((r) => r(e));
}
const $y = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? D(!1, "A Droppable requires a droppableId prop") : D()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? D(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : D());
}, function({
  props: t
}) {
  Tn(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? D(!1, "isDropDisabled must be a boolean") : D()), Tn(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? D(!1, "isCombineEnabled must be a boolean") : D()), Tn(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? D(!1, "ignoreContainerClipping must be a boolean") : D());
}, function({
  getDroppableRef: t
}) {
  Ku(t());
}], Vy = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Ie(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], My = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? D(!1, "Must provide a clone render function (renderClone) for virtual lists") : D());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? D(!1, "Expected virtual list to not have a placeholder") : D());
}];
function Ly(e) {
  Pr(() => {
    $n(e, $y), e.props.mode === "standard" && $n(e, Vy), e.props.mode === "virtual" && $n(e, My);
  });
}
class By extends P.PureComponent {
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
const Fy = (e) => {
  const t = St(dn);
  t || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find app context") : D());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = F(null), i = F(null), {
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
  } = e, w = j(() => o.current, []), E = j((I = null) => {
    o.current = I;
  }, []), v = j(() => i.current, []), g = j((I = null) => {
    i.current = I;
  }, []);
  Ly({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = j(() => {
    n() && f({
      maxScroll: $u()
    });
  }, [n, f]);
  Iy({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = ne(() => P.createElement(By, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: V,
    animate: H
  }) => P.createElement(Ty, {
    placeholder: V,
    onClose: I,
    innerRef: g,
    animate: H,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = ne(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), $ = b ? b.dragging.draggableId : null, A = ne(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: $
  }), [s, $, l]);
  function R() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: V
    } = b, H = P.createElement(Qu, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, T) => V(J, T, I));
    return nn.createPortal(H, y());
  }
  return P.createElement(Pi.Provider, {
    value: A
  }, a(C, h), R());
};
var Gy = Fy;
function ky() {
  return document.body || (process.env.NODE_ENV !== "production" ? D(!1, "document.body is not ready") : D()), document.body;
}
const Ss = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: ky
}, rd = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Ss)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Ss[r]
    });
  return t;
}, Vn = (e, t) => e === t.droppable.type, Os = (e, t) => t.draggables[e.draggable.id], Wy = () => {
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
  }, r = Ge((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = Ge((i, a, s, l, u, p) => {
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
    const s = rd(a), l = s.droppableId, u = s.type, p = !s.isDropDisabled, c = s.renderClone;
    if (br(i)) {
      const d = i.critical;
      if (!Vn(u, d))
        return t;
      const m = Os(d, i.dimensions), h = Qe(i.impact) === l;
      return n(l, p, h, h, m, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!Vn(u, d.critical))
        return t;
      const m = Os(d.critical, i.dimensions);
      return n(l, p, Ju(d.result) === l, Qe(d.impact) === l, m, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!Vn(u, d.critical))
        return t;
      const m = Qe(d.impact) === l, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === l;
      return m ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, jy = {
  updateViewportMaxScroll: xb
}, zy = Ql(Wy, jy, (e, t, r) => ({
  ...rd(r),
  ...e,
  ...t
}), {
  context: Di,
  areStatePropsEqual: Xu
})(Gy);
var Uy = zy;
const y0 = ({
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
  const [p, c] = $e(null), [d, m] = $e(e);
  ae(() => {
    m(e);
  }, [e]);
  const h = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (y) => {
    a == null || a(y), c(y);
  }, f = (y) => {
    if (!y.destination || !(d != null && d.length)) return;
    const w = y.source.index, E = y.destination.index, v = [...d], [g] = v.splice(w, 1);
    v.splice(E, 0, g), m(v);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ Fe("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ k("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ k("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ k(Dl, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ k(Vl, { className: u, children: /* @__PURE__ */ k("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ k("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ k(qv, { onDragEnd: f, children: /* @__PURE__ */ k(Uy, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ Fe("table", { className: "w-full", children: [
    /* @__PURE__ */ k("thead", { children: /* @__PURE__ */ k("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((w, E) => /* @__PURE__ */ k(
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
    /* @__PURE__ */ Fe(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          d == null ? void 0 : d.map((w, E) => {
            var v;
            return /* @__PURE__ */ k(
              by,
              {
                isDragDisabled: o,
                draggableId: (v = w == null ? void 0 : w.id) == null ? void 0 : v.toString(),
                index: E,
                children: (g) => {
                  const x = {
                    ...g.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ k(
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
                        let $ = (A = N == null ? void 0 : N.name) == null ? void 0 : A.reduce(
                          (R, I) => R == null ? void 0 : R[I],
                          d == null ? void 0 : d[E]
                        );
                        return /* @__PURE__ */ k(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${l && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: N.transform ? N.transform($, E) : $
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
}, E0 = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ k(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Hy = ({ name: e, className: t }) => /* @__PURE__ */ k("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ k(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), qy = ({ style: e, text: t }) => /* @__PURE__ */ Fe("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ k("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ k("span", { className: "text-base", children: t })
] });
var Ds;
(function(e) {
  e.event = "event", e.props = "prop";
})(Ds || (Ds = {}));
var Mn = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Mn(), "" + Mn();
function Yy() {
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
function Ky(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var No = { exports: {} }, Ln = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns;
function Xy() {
  if (Ns) return Ln;
  Ns = 1;
  var e = P;
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
  return Ln.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Ln;
}
var Cs = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function Jy() {
  return _s || (_s = 1, process.env.NODE_ENV !== "production" && function() {
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
    var o = P, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Cs.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Cs;
}
process.env.NODE_ENV === "production" ? No.exports = Xy() : No.exports = Jy();
var Ti = No.exports, Bn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function Zy() {
  if (Is) return Bn;
  Is = 1;
  var e = P, t = Ti;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Bn.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
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
  }, Bn;
}
var Ps = {};
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
function Qy() {
  return As || (As = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = P, r = Ti, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Ps.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
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
  }()), Ps;
}
process.env.NODE_ENV === "production" ? Zy() : Qy();
function eE(e) {
  e();
}
let nd = eE;
const tE = (e) => nd = e, rE = () => nd, Rs = Symbol.for("react-redux-context"), Ts = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function nE() {
  var e;
  if (!_.createContext) return {};
  const t = (e = Ts[Rs]) != null ? e : Ts[Rs] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const oE = /* @__PURE__ */ nE(), iE = () => {
  throw new Error("uSES not initialized!");
};
function kt() {
  return kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kt.apply(null, arguments);
}
function od(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Co = { exports: {} }, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s;
function aE() {
  if ($s) return be;
  $s = 1;
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
  return be.AsyncMode = l, be.ConcurrentMode = u, be.ContextConsumer = s, be.ContextProvider = a, be.Element = t, be.ForwardRef = p, be.Fragment = n, be.Lazy = h, be.Memo = m, be.Portal = r, be.Profiler = i, be.StrictMode = o, be.Suspense = c, be.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, be.isConcurrentMode = v, be.isContextConsumer = function(g) {
    return E(g) === s;
  }, be.isContextProvider = function(g) {
    return E(g) === a;
  }, be.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, be.isForwardRef = function(g) {
    return E(g) === p;
  }, be.isFragment = function(g) {
    return E(g) === n;
  }, be.isLazy = function(g) {
    return E(g) === h;
  }, be.isMemo = function(g) {
    return E(g) === m;
  }, be.isPortal = function(g) {
    return E(g) === r;
  }, be.isProfiler = function(g) {
    return E(g) === i;
  }, be.isStrictMode = function(g) {
    return E(g) === o;
  }, be.isSuspense = function(g) {
    return E(g) === c;
  }, be.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, be.typeOf = E, be;
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
var Vs;
function sE() {
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
            var O = S.type;
            switch (O) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return O;
              default:
                var de = O && O.$$typeof;
                switch (de) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return de;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, $ = t, A = p, R = n, I = h, V = m, H = r, J = i, T = o, L = c, G = !1;
    function W(S) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(S) || v(S) === l;
    }
    function z(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Z(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function oe(S) {
      return v(S) === p;
    }
    function ie(S) {
      return v(S) === n;
    }
    function ue(S) {
      return v(S) === h;
    }
    function re(S) {
      return v(S) === m;
    }
    function se(S) {
      return v(S) === r;
    }
    function q(S) {
      return v(S) === i;
    }
    function ce(S) {
      return v(S) === o;
    }
    function Ve(S) {
      return v(S) === c;
    }
    we.AsyncMode = g, we.ConcurrentMode = x, we.ContextConsumer = N, we.ContextProvider = C, we.Element = $, we.ForwardRef = A, we.Fragment = R, we.Lazy = I, we.Memo = V, we.Portal = H, we.Profiler = J, we.StrictMode = T, we.Suspense = L, we.isAsyncMode = W, we.isConcurrentMode = z, we.isContextConsumer = B, we.isContextProvider = Z, we.isElement = ee, we.isForwardRef = oe, we.isFragment = ie, we.isLazy = ue, we.isMemo = re, we.isPortal = se, we.isProfiler = q, we.isStrictMode = ce, we.isSuspense = Ve, we.isValidElementType = E, we.typeOf = v;
  }()), we;
}
process.env.NODE_ENV === "production" ? Co.exports = aE() : Co.exports = sE();
var cE = Co.exports, $i = cE, lE = {
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
}, uE = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, dE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, id = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Vi = {};
Vi[$i.ForwardRef] = dE;
Vi[$i.Memo] = id;
function Ms(e) {
  return $i.isMemo(e) ? id : Vi[e.$$typeof] || lE;
}
var pE = Object.defineProperty, fE = Object.getOwnPropertyNames, Ls = Object.getOwnPropertySymbols, mE = Object.getOwnPropertyDescriptor, gE = Object.getPrototypeOf, Bs = Object.prototype;
function ad(e, t, r) {
  if (typeof t != "string") {
    if (Bs) {
      var n = gE(t);
      n && n !== Bs && ad(e, n, r);
    }
    var o = fE(t);
    Ls && (o = o.concat(Ls(t)));
    for (var i = Ms(e), a = Ms(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!uE[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = mE(t, l);
        try {
          pE(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var bE = ad;
const Fs = /* @__PURE__ */ Ky(bE);
var _o = { exports: {} }, he = {};
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
function hE() {
  if (Gs) return he;
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
  return he.ContextConsumer = a, he.ContextProvider = i, he.Element = e, he.ForwardRef = l, he.Fragment = r, he.Lazy = d, he.Memo = c, he.Portal = t, he.Profiler = o, he.StrictMode = n, he.Suspense = u, he.SuspenseList = p, he.isAsyncMode = function() {
    return !1;
  }, he.isConcurrentMode = function() {
    return !1;
  }, he.isContextConsumer = function(f) {
    return b(f) === a;
  }, he.isContextProvider = function(f) {
    return b(f) === i;
  }, he.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, he.isForwardRef = function(f) {
    return b(f) === l;
  }, he.isFragment = function(f) {
    return b(f) === r;
  }, he.isLazy = function(f) {
    return b(f) === d;
  }, he.isMemo = function(f) {
    return b(f) === c;
  }, he.isPortal = function(f) {
    return b(f) === t;
  }, he.isProfiler = function(f) {
    return b(f) === o;
  }, he.isStrictMode = function(f) {
    return b(f) === n;
  }, he.isSuspense = function(f) {
    return b(f) === u;
  }, he.isSuspenseList = function(f) {
    return b(f) === p;
  }, he.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, he.typeOf = b, he;
}
var Se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks;
function vE() {
  return ks || (ks = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === o || w || O === n || O === u || O === p || y || O === m || h || b || f || typeof O == "object" && O !== null && (O.$$typeof === d || O.$$typeof === c || O.$$typeof === i || O.$$typeof === a || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === E || O.getModuleId !== void 0));
    }
    function g(O) {
      if (typeof O == "object" && O !== null) {
        var de = O.$$typeof;
        switch (de) {
          case e:
            var Te = O.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var M = Te && Te.$$typeof;
                switch (M) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return M;
                  default:
                    return de;
                }
            }
          case t:
            return de;
        }
      }
    }
    var x = a, N = i, C = e, $ = l, A = r, R = d, I = c, V = t, H = o, J = n, T = u, L = p, G = !1, W = !1;
    function z(O) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(O) {
      return W || (W = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(O) {
      return g(O) === a;
    }
    function ee(O) {
      return g(O) === i;
    }
    function oe(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function ie(O) {
      return g(O) === l;
    }
    function ue(O) {
      return g(O) === r;
    }
    function re(O) {
      return g(O) === d;
    }
    function se(O) {
      return g(O) === c;
    }
    function q(O) {
      return g(O) === t;
    }
    function ce(O) {
      return g(O) === o;
    }
    function Ve(O) {
      return g(O) === n;
    }
    function S(O) {
      return g(O) === u;
    }
    function le(O) {
      return g(O) === p;
    }
    Se.ContextConsumer = x, Se.ContextProvider = N, Se.Element = C, Se.ForwardRef = $, Se.Fragment = A, Se.Lazy = R, Se.Memo = I, Se.Portal = V, Se.Profiler = H, Se.StrictMode = J, Se.Suspense = T, Se.SuspenseList = L, Se.isAsyncMode = z, Se.isConcurrentMode = B, Se.isContextConsumer = Z, Se.isContextProvider = ee, Se.isElement = oe, Se.isForwardRef = ie, Se.isFragment = ue, Se.isLazy = re, Se.isMemo = se, Se.isPortal = q, Se.isProfiler = ce, Se.isStrictMode = Ve, Se.isSuspense = S, Se.isSuspenseList = le, Se.isValidElementType = v, Se.typeOf = g;
  }()), Se;
}
process.env.NODE_ENV === "production" ? _o.exports = hE() : _o.exports = vE();
var Ws = _o.exports;
function Mi(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Fn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Mi(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function yE(e, t, r) {
  Fn(e, "mapStateToProps"), Fn(t, "mapDispatchToProps"), Fn(r, "mergeProps");
}
const EE = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function xE(e, t, r, n, {
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
function wE(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = od(t, EE);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && yE(a, s, l), xE(a, s, l, e, i);
}
function SE(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function OE(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function sd(e, t, r) {
  OE(e) || Mi(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Io(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function js(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function cd(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = js(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = js(s), s = o(i, a)), process.env.NODE_ENV !== "production" && sd(s, n, t), s;
    }, o;
  };
}
function Li(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function DE(e) {
  return e && typeof e == "object" ? Io((t) => (
    // @ts-ignore
    SE(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    cd(e, "mapDispatchToProps")
  ) : Li(e, "mapDispatchToProps") : Io((t) => ({
    dispatch: t
  }));
}
function NE(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    cd(e, "mapStateToProps")
  ) : Li(e, "mapStateToProps") : Io(() => ({}));
}
function CE(e, t, r) {
  return kt({}, r, e, t);
}
function _E(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && sd(i, r, "mergeProps")), i;
    };
  };
}
function IE(e) {
  return e ? typeof e == "function" ? _E(e) : Li(e, "mergeProps") : () => CE;
}
function PE() {
  const e = rE();
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
function AE(e, t) {
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = PE());
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
const RE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Po = RE ? _.useLayoutEffect : _.useEffect;
function Us(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Gn(e, t) {
  if (Us(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Us(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const TE = ["reactReduxForwardedRef"];
let ld = iE;
const $E = (e) => {
  ld = e;
}, VE = [null, null], ME = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function LE(e, t, r) {
  Po(() => e(...t), r);
}
function BE(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function FE(e, t, r, n, o, i, a, s, l, u, p) {
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
function GE(e, t) {
  return e === t;
}
let Hs = !1;
function ud(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = GE,
  areOwnPropsEqual: i = Gn,
  areStatePropsEqual: a = Gn,
  areMergedPropsEqual: s = Gn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = oE
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Hs && (Hs = !0, Mi('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = NE(e), d = DE(t), m = IE(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Ws.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ME(b)}`);
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
          reactReduxForwardedRef: q
        } = g, ce = od(g, TE);
        return [g.context, q, ce];
      }, [g]), $ = _.useMemo(() => x && x.Consumer && // @ts-ignore
      Ws.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext($), R = !!g.store && !!g.store.getState && !!g.store.dispatch, I = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !R && !I)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const V = R ? g.store : A.store, H = I ? A.getServerState : V.getState, J = _.useMemo(() => wE(V.dispatch, w), [V]), [T, L] = _.useMemo(() => {
        if (!h) return VE;
        const q = AE(V, R ? void 0 : A.subscription), ce = q.notifyNestedSubs.bind(q);
        return [q, ce];
      }, [V, R, A]), G = _.useMemo(() => R ? A : kt({}, A, {
        subscription: T
      }), [R, A, T]), W = _.useRef(), z = _.useRef(C), B = _.useRef(), Z = _.useRef(!1);
      _.useRef(!1);
      const ee = _.useRef(!1), oe = _.useRef();
      Po(() => (ee.current = !0, () => {
        ee.current = !1;
      }), []);
      const ie = _.useMemo(() => () => B.current && C === z.current ? B.current : J(V.getState(), C), [V, C]), ue = _.useMemo(() => (q) => T ? FE(
        h,
        V,
        T,
        // @ts-ignore
        J,
        z,
        W,
        Z,
        ee,
        B,
        L,
        q
      ) : () => {
      }, [T]);
      LE(BE, [z, W, Z, C, B, L]);
      let re;
      try {
        re = ld(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ue,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ie,
          H ? () => J(H(), C) : ie
        );
      } catch (q) {
        throw oe.current && (q.message += `
The error may be correlated with this previous error:
${oe.current.stack}

`), q;
      }
      Po(() => {
        oe.current = void 0, B.current = void 0, W.current = re;
      });
      const se = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, kt({}, re, {
          ref: N
        }))
      ), [N, b, re]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement($.Provider, {
        value: G
      }, se) : se, [$, se, G]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, kt({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, Fs(g, b);
    }
    return Fs(v, b);
  };
}
$E(Ti.useSyncExternalStore);
tE(on);
function kE(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function dd(e, t) {
  var r = $e(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = F(!0), o = F(r), i = n.current || !!(t && o.current.inputs && kE(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ae(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function WE(e, t) {
  return dd(function() {
    return e;
  }, t);
}
var We = dd, Me = WE, jE = process.env.NODE_ENV === "production", kn = "Invariant failed";
function qs(e, t) {
  if (jE)
    throw new Error(kn);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(kn, ": ").concat(r) : kn;
  throw new Error(n);
}
var Lt = function(e) {
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
}, pd = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Ys = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, zE = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Wn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Bi = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Wn : r, o = e.border, i = o === void 0 ? Wn : o, a = e.padding, s = a === void 0 ? Wn : a, l = Lt(pd(t, n)), u = Lt(Ys(t, i)), p = Lt(Ys(u, s));
  return {
    marginBox: l,
    borderBox: Lt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, rt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? qs(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : qs()), n;
}, UE = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, HE = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = zE(r, t);
  return Bi({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, Ao = function(e, t) {
  return t === void 0 && (t = UE()), HE(e, t);
}, fd = function(e, t) {
  var r = {
    top: rt(t.marginTop),
    right: rt(t.marginRight),
    bottom: rt(t.marginBottom),
    left: rt(t.marginLeft)
  }, n = {
    top: rt(t.paddingTop),
    right: rt(t.paddingRight),
    bottom: rt(t.paddingBottom),
    left: rt(t.paddingLeft)
  }, o = {
    top: rt(t.borderTopWidth),
    right: rt(t.borderRightWidth),
    bottom: rt(t.borderBottomWidth),
    left: rt(t.borderLeftWidth)
  };
  return Bi({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, md = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return fd(t, r);
}, Ks = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function qE(e, t) {
  return !!(e === t || Ks(e) && Ks(t));
}
function YE(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!qE(e[r], t[r]))
      return !1;
  return !0;
}
function He(e, t) {
  t === void 0 && (t = YE);
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
var KE = function(e) {
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
const XE = process.env.NODE_ENV === "production", JE = /[ \t]{2,}/g, ZE = /^[ \t]*/gm, Xs = (e) => e.replace(JE, " ").replace(ZE, "").trim(), QE = (e) => Xs(`
  %c@hello-pangea/dnd

  %c${Xs(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), ex = (e) => [QE(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], tx = "__@hello-pangea/dnd-disable-dev-warnings";
function gd(e, t) {
  XE || typeof window < "u" && window[tx] || console[e](...ex(t));
}
const yt = gd.bind(null, "warn"), Ro = gd.bind(null, "error");
function rx() {
}
function nx(e, t) {
  return {
    ...e,
    ...t
  };
}
function ox(e, t, r) {
  const n = t.map((o) => {
    const i = nx(r, o.options);
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
const ix = process.env.NODE_ENV === "production", Js = "Invariant failed";
class hr extends Error {
}
hr.prototype.toString = function() {
  return this.message;
};
function Y(e, t) {
  throw ix ? new hr(Js) : new hr(`${Js}: ${t || ""}`);
}
class x0 extends P.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = rx, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && yt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof hr && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ro(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = ox(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof hr) {
      process.env.NODE_ENV !== "production" && Ro(t.message), this.setState({});
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
const Tt = {
  x: 0,
  y: 0
}, ax = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), sx = (e, t) => e.x === t.x && e.y === t.y, cx = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), lx = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var ux = (e, t) => {
  const r = Lt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const dx = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), px = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, fx = (e, t) => t ? dx(e, t.scroll.diff.displacement) : e, mx = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, gx = (e, t) => t && t.shouldClipSubject ? ux(t.pageMarginBox, e) : Lt(e);
var bx = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = fx(e.marginBox, n), i = mx(o, r, t), a = gx(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
He((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
He((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const hx = He((e) => Object.values(e)), vx = He((e) => Object.values(e));
He((e, t) => vx(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function yx(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
He((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const Ex = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, xx = {
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
He(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: lx(e.line, r)
  };
});
var Fr = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const wx = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Sx = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Fi = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, vr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Ox = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Dt = `${Ox.outOfTheWay}s ${Fi.outOfTheWay}`, Gr = {
  fluid: `opacity ${Dt}`,
  snap: `transform ${Dt}, opacity ${Dt}`,
  drop: (e) => {
    const t = `${e}s ${Fi.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Dt}`,
  placeholder: `height ${Dt}, width ${Dt}, margin ${Dt}`
}, Zs = (e) => sx(e, Tt) ? void 0 : `translate(${e.x}px, ${e.y}px)`, To = {
  moveTo: Zs,
  drop: (e, t) => {
    const r = Zs(e);
    if (r)
      return t ? `${r} scale(${vr.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var bd = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = ax({
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
}, Dx = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? Y(!1, "Cannot find document.documentElement") : Y()), e;
}, Nx = () => {
  const e = Dx();
  return bd({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
He((e) => hx(e).filter((t) => !(!t.isEnabled || !t.frame)));
const hd = "data-rfd", Qs = (() => {
  const e = `${hd}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), ec = {
  contextId: `${hd}-scroll-container-context-id`
}, Cx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Sr : ae;
var nr = Cx;
function _x(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Ix = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function vd(e) {
  return e instanceof Ix(e).HTMLElement;
}
function Px(e, t) {
  const r = `[${Qs.contextId}="${e}"]`, n = _x(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && yt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Qs.draggableId) === t);
  return o ? vd(o) ? o : (process.env.NODE_ENV !== "production" && yt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && yt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var yd = P.createContext(null), Ax = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? Y(!1, "Cannot find document.body") : Y()), e;
};
let Rx = 0;
const Ed = {
  separator: "::"
};
function Tx(e, t = Ed) {
  return We(() => `${e}${t.separator}${Rx++}`, [t.separator, e]);
}
function $x(e, t = Ed) {
  const r = P.useId();
  return We(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var xd = "useId" in P ? $x : Tx, Gi = P.createContext(null);
function wd(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ki(e, t) {
  wd(() => {
    ae(() => {
      try {
        e();
      } catch (r) {
        Ro(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Vx(e) {
  const t = F(e);
  return ae(() => {
    t.current = e;
  }), t;
}
function Wi(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const tc = {
  dragging: 5e3,
  dropAnimating: 4500
}, Mx = (e, t) => t ? Gr.drop(t.duration) : e ? Gr.snap : Gr.fluid, Lx = (e, t) => {
  if (e)
    return t ? vr.opacity.drop : vr.opacity.combining;
}, Bx = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Fx(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = Bx(e), s = !!o, l = s ? To.drop(r, i) : To.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Mx(a, o),
    transform: l,
    opacity: Lx(i, s),
    zIndex: s ? tc.dropAnimating : tc.dragging,
    pointerEvents: "none"
  };
}
function Gx(e) {
  return {
    transform: To.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function kx(e) {
  return e.type === "DRAGGING" ? Fx(e) : Gx(e);
}
function Wx(e, t, r = Tt) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = fd(o, n), a = Ao(i, r), s = {
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
function jx(e) {
  const t = xd("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = We(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Me((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? Y(!1, "Cannot get dimension when no ref is set") : Y()), Wx(r, h, m);
  }, [r, o]), p = We(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = F(p), d = F(!0);
  nr(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), nr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var ji = P.createContext(null);
function Sd(e) {
  e && vd(e) || (process.env.NODE_ENV !== "production" ? Y(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : Y());
}
function zx(e, t, r) {
  ki(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? Y(!1, "Draggable requires a draggableId") : Y(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? Y(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : Y(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? Y(!1, `${n(o)} requires an integer index prop`) : Y(!1)), e.mapped.type !== "DRAGGING" && (Sd(r()), e.isEnabled && (Px(t, o) || (process.env.NODE_ENV !== "production" ? Y(!1, `${n(o)} Unable to find drag handle`) : Y(!1))));
  });
}
function Ux(e) {
  wd(() => {
    const t = F(e);
    ki(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? Y(!1, "Draggable isClone prop value changed during component life") : Y(!1));
    }, [e]);
  });
}
function en(e) {
  const t = St(e);
  return t || (process.env.NODE_ENV !== "production" ? Y(!1, "Could not find required context") : Y()), t;
}
function Hx(e) {
  e.preventDefault();
}
const qx = (e) => {
  const t = F(null), r = Me((x = null) => {
    t.current = x;
  }, []), n = Me(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = en(Gi), {
    type: s,
    droppableId: l
  } = en(ji), u = We(() => ({
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
  if (zx(e, o, n), Ux(b), !b) {
    const x = We(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    jx(x);
  }
  const w = We(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Hx
  } : null, [o, i, c, d]), E = Me((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (P.version.startsWith("16") || P.version.startsWith("17") ? y() : Or(y));
  }, [y, f]), v = We(() => {
    const x = kx(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
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
  }, [o, w, c, f, E, r]), g = We(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return P.createElement(P.Fragment, null, p(v, f.snapshot, g));
};
var Yx = qx, Od = (e, t) => e === t, Dd = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Kx = (e) => e.combine ? e.combine.draggableId : null, Xx = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Jx() {
  const e = He((n, o) => ({
    x: n,
    y: o
  })), t = He((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = He((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (Wi(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = Fr(n.impact), l = Xx(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Dd(l), c = Kx(l), d = {
        duration: n.dropDuration,
        curve: Fi.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? vr.opacity.drop : null,
        scale: c ? vr.scale.drop : null
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
function Nd(e = null) {
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
const Zx = {
  mapped: {
    type: "SECONDARY",
    offset: Tt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Nd(null)
  }
};
function Qx() {
  const e = He((i, a) => ({
    x: i,
    y: a
  })), t = He(Nd), r = He((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(Tt, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = yx(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = cx(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Wi(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const ew = () => {
  const e = Jx(), t = Qx();
  return (r, n) => e(r, n) || t(r, n) || Zx;
}, tw = {
  dropAnimationFinished: Sx
}, rw = ud(ew, tw, null, {
  context: yd,
  areStatePropsEqual: Od
})(Yx);
var nw = rw;
function ow(e) {
  return en(ji).isUsingCloneFor === e.draggableId && !e.isClone ? null : P.createElement(nw, e);
}
const zi = (e) => (t) => e === t, iw = zi("scroll"), aw = zi("auto"), sw = zi("visible"), rc = (e, t) => t(e.overflowX) || t(e.overflowY), cw = (e, t) => t(e.overflowX) && t(e.overflowY), Cd = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return rc(r, iw) || rc(r, aw);
}, lw = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Ax(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, Y()), !Cd(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return cw(n, sw) || process.env.NODE_ENV !== "production" && yt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ui = (e) => e == null ? null : e === document.body ? lw() ? e : null : e === document.documentElement ? null : Cd(e) ? e : Ui(e.parentElement);
var uw = (e) => {
  !e || !Ui(e.parentElement) || process.env.NODE_ENV !== "production" && yt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, $o = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const _d = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : _d(e.parentElement) : !1;
var dw = (e) => {
  const t = Ui(e), r = _d(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, pw = ({
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
    } = s, m = bd({
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
          value: Tt,
          displacement: Tt
        }
      }
    };
  })(), u = o === "vertical" ? Ex : xx, p = bx({
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
const fw = (e, t) => {
  const r = md(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = pd({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Bi({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var mw = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = fw(e, l), p = Ao(u, n), c = (() => {
    if (!l)
      return null;
    const d = md(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: Ao(d, n),
      scroll: $o(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return pw({
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
const gw = {
  passive: !1
}, bw = {
  passive: !0
};
var nc = (e) => e.shouldPublishImmediately ? gw : bw;
const $r = (e) => e && e.env.closestScrollable || null;
function hw(e) {
  const t = F(null), r = en(Gi), n = xd("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Vx(e), s = We(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = F(s), u = We(() => He((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? Y(!1, "Can only update scroll when dragging") : Y());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = Me(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? Tt : $o(v.env.closestScrollable);
  }, []), c = Me(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = We(() => KE(c), [c]), m = Me(() => {
    const v = t.current, g = $r(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? Y(!1, "Could not find scroll options while scrolling") : Y()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Me((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? Y(!1, "Cannot collect a droppable while a drag is occurring") : Y());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? Y(!1, "Cannot collect without a droppable ref") : Y());
    const C = dw(N), $ = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = $;
    const A = mw({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), R = C.closestScrollable;
    return R && (R.setAttribute(ec.contextId, r.contextId), R.addEventListener("scroll", m, nc($.scrollOptions)), process.env.NODE_ENV !== "production" && uw(R)), A;
  }, [r.contextId, s, m, a]), b = Me(() => {
    const v = t.current, g = $r(v);
    return v && g || (process.env.NODE_ENV !== "production" ? Y(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : Y()), $o(g);
  }, []), f = Me(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? Y(!1, "Cannot stop drag when no active drag") : Y());
    const g = $r(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(ec.contextId), g.removeEventListener("scroll", m, nc(v.scrollOptions)));
  }, [m, d]), y = Me((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? Y(!1, "Cannot scroll when there is no drag") : Y());
    const x = $r(g);
    x || (process.env.NODE_ENV !== "production" ? Y(!1, "Cannot scroll a droppable with no closest scrollable") : Y()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = We(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = We(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  nr(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && yt("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), nr(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), nr(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function jn() {
}
const vw = {
  width: 0,
  height: 0,
  margin: px
}, yw = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? vw : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Ew = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = yw({
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
    transition: r !== "none" ? Gr.placeholder : null
  };
}, xw = (e) => {
  const t = F(null), r = Me(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = $e(e.animate === "open");
  ae(() => s ? n !== "open" ? (r(), l(!1), jn) : t.current ? jn : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : jn, [n, s, r]);
  const u = Me((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = Ew({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return P.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var ww = P.memo(xw);
function zn(e) {
  return typeof e == "boolean";
}
function Un(e, t) {
  t.forEach((r) => r(e));
}
const Sw = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? Y(!1, "A Droppable requires a droppableId prop") : Y()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? Y(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : Y());
}, function({
  props: e
}) {
  zn(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? Y(!1, "isDropDisabled must be a boolean") : Y()), zn(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? Y(!1, "isCombineEnabled must be a boolean") : Y()), zn(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? Y(!1, "ignoreContainerClipping must be a boolean") : Y());
}, function({
  getDroppableRef: e
}) {
  Sd(e());
}], Ow = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && yt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Dw = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? Y(!1, "Must provide a clone render function (renderClone) for virtual lists") : Y());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? Y(!1, "Expected virtual list to not have a placeholder") : Y());
}];
function Nw(e) {
  ki(() => {
    Un(e, Sw), e.props.mode === "standard" && Un(e, Ow), e.props.mode === "virtual" && Un(e, Dw);
  });
}
class Cw extends P.PureComponent {
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
const _w = (e) => {
  const t = St(Gi);
  t || (process.env.NODE_ENV !== "production" ? Y(!1, "Could not find app context") : Y());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = F(null), i = F(null), {
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
  } = e, w = Me(() => o.current, []), E = Me((I = null) => {
    o.current = I;
  }, []), v = Me(() => i.current, []), g = Me((I = null) => {
    i.current = I;
  }, []);
  Nw({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = Me(() => {
    n() && f({
      maxScroll: Nx()
    });
  }, [n, f]);
  hw({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = We(() => P.createElement(Cw, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: V,
    animate: H
  }) => P.createElement(ww, {
    placeholder: V,
    onClose: I,
    innerRef: g,
    animate: H,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = We(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), $ = b ? b.dragging.draggableId : null, A = We(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: $
  }), [s, $, l]);
  function R() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: V
    } = b, H = P.createElement(ow, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, T) => V(J, T, I));
    return nn.createPortal(H, y());
  }
  return P.createElement(ji.Provider, {
    value: A
  }, a(C, h), R());
};
var Iw = _w;
function Pw() {
  return document.body || (process.env.NODE_ENV !== "production" ? Y(!1, "document.body is not ready") : Y()), document.body;
}
const oc = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Pw
}, Id = (e) => {
  let t = {
    ...e
  }, r;
  for (r in oc)
    e[r] === void 0 && (t = {
      ...t,
      [r]: oc[r]
    });
  return t;
}, Hn = (e, t) => e === t.droppable.type, ic = (e, t) => t.draggables[e.draggable.id], Aw = () => {
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
  }, r = He((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = He((o, i, a, s, l, u) => {
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
    const a = Id(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (Wi(o)) {
      const c = o.critical;
      if (!Hn(l, c))
        return t;
      const d = ic(c, o.dimensions), m = Fr(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!Hn(l, c.critical))
        return t;
      const d = ic(c.critical, o.dimensions);
      return n(s, u, Dd(c.result) === s, Fr(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!Hn(l, c.critical))
        return t;
      const d = Fr(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, Rw = {
  updateViewportMaxScroll: wx
};
ud(Aw, Rw, (e, t, r) => ({
  ...Id(r),
  ...e,
  ...t
}), {
  context: yd,
  areStatePropsEqual: Od
})(Iw);
var ac;
(function(e) {
  e.event = "event", e.props = "prop";
})(ac || (ac = {}));
var sc = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + sc(), "" + sc();
function Tw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vo = { exports: {} }, qn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cc;
function $w() {
  if (cc) return qn;
  cc = 1;
  var e = P;
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
  return qn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, qn;
}
var lc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uc;
function Vw() {
  return uc || (uc = 1, process.env.NODE_ENV !== "production" && function() {
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
    var o = P, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    lc.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), lc;
}
process.env.NODE_ENV === "production" ? Vo.exports = $w() : Vo.exports = Vw();
var Hi = Vo.exports, Yn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dc;
function Mw() {
  if (dc) return Yn;
  dc = 1;
  var e = P, t = Hi;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Yn.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
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
  }, Yn;
}
var pc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fc;
function Lw() {
  return fc || (fc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = P, r = Hi, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    pc.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
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
  }()), pc;
}
process.env.NODE_ENV === "production" ? Mw() : Lw();
function Bw(e) {
  e();
}
let Pd = Bw;
const Fw = (e) => Pd = e, Gw = () => Pd, mc = Symbol.for("react-redux-context"), gc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function kw() {
  var e;
  if (!_.createContext) return {};
  const t = (e = gc[mc]) != null ? e : gc[mc] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const Ww = /* @__PURE__ */ kw(), jw = () => {
  throw new Error("uSES not initialized!");
};
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wt.apply(null, arguments);
}
function Ad(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Mo = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bc;
function zw() {
  if (bc) return ve;
  bc = 1;
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
  return ve.AsyncMode = l, ve.ConcurrentMode = u, ve.ContextConsumer = s, ve.ContextProvider = a, ve.Element = t, ve.ForwardRef = p, ve.Fragment = n, ve.Lazy = h, ve.Memo = m, ve.Portal = r, ve.Profiler = i, ve.StrictMode = o, ve.Suspense = c, ve.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, ve.isConcurrentMode = v, ve.isContextConsumer = function(g) {
    return E(g) === s;
  }, ve.isContextProvider = function(g) {
    return E(g) === a;
  }, ve.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ve.isForwardRef = function(g) {
    return E(g) === p;
  }, ve.isFragment = function(g) {
    return E(g) === n;
  }, ve.isLazy = function(g) {
    return E(g) === h;
  }, ve.isMemo = function(g) {
    return E(g) === m;
  }, ve.isPortal = function(g) {
    return E(g) === r;
  }, ve.isProfiler = function(g) {
    return E(g) === i;
  }, ve.isStrictMode = function(g) {
    return E(g) === o;
  }, ve.isSuspense = function(g) {
    return E(g) === c;
  }, ve.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, ve.typeOf = E, ve;
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
var hc;
function Uw() {
  return hc || (hc = 1, process.env.NODE_ENV !== "production" && function() {
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
            var O = S.type;
            switch (O) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return O;
              default:
                var de = O && O.$$typeof;
                switch (de) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return de;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, $ = t, A = p, R = n, I = h, V = m, H = r, J = i, T = o, L = c, G = !1;
    function W(S) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(S) || v(S) === l;
    }
    function z(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Z(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function oe(S) {
      return v(S) === p;
    }
    function ie(S) {
      return v(S) === n;
    }
    function ue(S) {
      return v(S) === h;
    }
    function re(S) {
      return v(S) === m;
    }
    function se(S) {
      return v(S) === r;
    }
    function q(S) {
      return v(S) === i;
    }
    function ce(S) {
      return v(S) === o;
    }
    function Ve(S) {
      return v(S) === c;
    }
    Oe.AsyncMode = g, Oe.ConcurrentMode = x, Oe.ContextConsumer = N, Oe.ContextProvider = C, Oe.Element = $, Oe.ForwardRef = A, Oe.Fragment = R, Oe.Lazy = I, Oe.Memo = V, Oe.Portal = H, Oe.Profiler = J, Oe.StrictMode = T, Oe.Suspense = L, Oe.isAsyncMode = W, Oe.isConcurrentMode = z, Oe.isContextConsumer = B, Oe.isContextProvider = Z, Oe.isElement = ee, Oe.isForwardRef = oe, Oe.isFragment = ie, Oe.isLazy = ue, Oe.isMemo = re, Oe.isPortal = se, Oe.isProfiler = q, Oe.isStrictMode = ce, Oe.isSuspense = Ve, Oe.isValidElementType = E, Oe.typeOf = v;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? Mo.exports = zw() : Mo.exports = Uw();
var Hw = Mo.exports, qi = Hw, qw = {
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
}, Yw = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Kw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Rd = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Yi = {};
Yi[qi.ForwardRef] = Kw;
Yi[qi.Memo] = Rd;
function vc(e) {
  return qi.isMemo(e) ? Rd : Yi[e.$$typeof] || qw;
}
var Xw = Object.defineProperty, Jw = Object.getOwnPropertyNames, yc = Object.getOwnPropertySymbols, Zw = Object.getOwnPropertyDescriptor, Qw = Object.getPrototypeOf, Ec = Object.prototype;
function Td(e, t, r) {
  if (typeof t != "string") {
    if (Ec) {
      var n = Qw(t);
      n && n !== Ec && Td(e, n, r);
    }
    var o = Jw(t);
    yc && (o = o.concat(yc(t)));
    for (var i = vc(e), a = vc(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!Yw[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = Zw(t, l);
        try {
          Xw(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var eS = Td;
const xc = /* @__PURE__ */ Tw(eS);
var Lo = { exports: {} }, ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wc;
function tS() {
  if (wc) return ye;
  wc = 1;
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
  return ye.ContextConsumer = a, ye.ContextProvider = i, ye.Element = e, ye.ForwardRef = l, ye.Fragment = r, ye.Lazy = d, ye.Memo = c, ye.Portal = t, ye.Profiler = o, ye.StrictMode = n, ye.Suspense = u, ye.SuspenseList = p, ye.isAsyncMode = function() {
    return !1;
  }, ye.isConcurrentMode = function() {
    return !1;
  }, ye.isContextConsumer = function(f) {
    return b(f) === a;
  }, ye.isContextProvider = function(f) {
    return b(f) === i;
  }, ye.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, ye.isForwardRef = function(f) {
    return b(f) === l;
  }, ye.isFragment = function(f) {
    return b(f) === r;
  }, ye.isLazy = function(f) {
    return b(f) === d;
  }, ye.isMemo = function(f) {
    return b(f) === c;
  }, ye.isPortal = function(f) {
    return b(f) === t;
  }, ye.isProfiler = function(f) {
    return b(f) === o;
  }, ye.isStrictMode = function(f) {
    return b(f) === n;
  }, ye.isSuspense = function(f) {
    return b(f) === u;
  }, ye.isSuspenseList = function(f) {
    return b(f) === p;
  }, ye.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, ye.typeOf = b, ye;
}
var De = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sc;
function rS() {
  return Sc || (Sc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === o || w || O === n || O === u || O === p || y || O === m || h || b || f || typeof O == "object" && O !== null && (O.$$typeof === d || O.$$typeof === c || O.$$typeof === i || O.$$typeof === a || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === E || O.getModuleId !== void 0));
    }
    function g(O) {
      if (typeof O == "object" && O !== null) {
        var de = O.$$typeof;
        switch (de) {
          case e:
            var Te = O.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var M = Te && Te.$$typeof;
                switch (M) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return M;
                  default:
                    return de;
                }
            }
          case t:
            return de;
        }
      }
    }
    var x = a, N = i, C = e, $ = l, A = r, R = d, I = c, V = t, H = o, J = n, T = u, L = p, G = !1, W = !1;
    function z(O) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(O) {
      return W || (W = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(O) {
      return g(O) === a;
    }
    function ee(O) {
      return g(O) === i;
    }
    function oe(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function ie(O) {
      return g(O) === l;
    }
    function ue(O) {
      return g(O) === r;
    }
    function re(O) {
      return g(O) === d;
    }
    function se(O) {
      return g(O) === c;
    }
    function q(O) {
      return g(O) === t;
    }
    function ce(O) {
      return g(O) === o;
    }
    function Ve(O) {
      return g(O) === n;
    }
    function S(O) {
      return g(O) === u;
    }
    function le(O) {
      return g(O) === p;
    }
    De.ContextConsumer = x, De.ContextProvider = N, De.Element = C, De.ForwardRef = $, De.Fragment = A, De.Lazy = R, De.Memo = I, De.Portal = V, De.Profiler = H, De.StrictMode = J, De.Suspense = T, De.SuspenseList = L, De.isAsyncMode = z, De.isConcurrentMode = B, De.isContextConsumer = Z, De.isContextProvider = ee, De.isElement = oe, De.isForwardRef = ie, De.isFragment = ue, De.isLazy = re, De.isMemo = se, De.isPortal = q, De.isProfiler = ce, De.isStrictMode = Ve, De.isSuspense = S, De.isSuspenseList = le, De.isValidElementType = v, De.typeOf = g;
  }()), De;
}
process.env.NODE_ENV === "production" ? Lo.exports = tS() : Lo.exports = rS();
var Oc = Lo.exports;
function Ki(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Kn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ki(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function nS(e, t, r) {
  Kn(e, "mapStateToProps"), Kn(t, "mapDispatchToProps"), Kn(r, "mergeProps");
}
const oS = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function iS(e, t, r, n, {
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
function aS(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Ad(t, oS);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && nS(a, s, l), iS(a, s, l, e, i);
}
function sS(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function cS(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function $d(e, t, r) {
  cS(e) || Ki(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Bo(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Dc(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Vd(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = Dc(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = Dc(s), s = o(i, a)), process.env.NODE_ENV !== "production" && $d(s, n, t), s;
    }, o;
  };
}
function Xi(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function lS(e) {
  return e && typeof e == "object" ? Bo((t) => (
    // @ts-ignore
    sS(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Vd(e, "mapDispatchToProps")
  ) : Xi(e, "mapDispatchToProps") : Bo((t) => ({
    dispatch: t
  }));
}
function uS(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Vd(e, "mapStateToProps")
  ) : Xi(e, "mapStateToProps") : Bo(() => ({}));
}
function dS(e, t, r) {
  return Wt({}, r, e, t);
}
function pS(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && $d(i, r, "mergeProps")), i;
    };
  };
}
function fS(e) {
  return e ? typeof e == "function" ? pS(e) : Xi(e, "mergeProps") : () => dS;
}
function mS() {
  const e = Gw();
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
const Nc = {
  notify() {
  },
  get: () => []
};
function gS(e, t) {
  let r, n = Nc, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = mS());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Nc);
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
const bS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Fo = bS ? _.useLayoutEffect : _.useEffect;
function Cc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Xn(e, t) {
  if (Cc(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Cc(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const hS = ["reactReduxForwardedRef"];
let Md = jw;
const vS = (e) => {
  Md = e;
}, yS = [null, null], ES = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function xS(e, t, r) {
  Fo(() => e(...t), r);
}
function wS(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function SS(e, t, r, n, o, i, a, s, l, u, p) {
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
function OS(e, t) {
  return e === t;
}
let _c = !1;
function Ld(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = OS,
  areOwnPropsEqual: i = Xn,
  areStatePropsEqual: a = Xn,
  areMergedPropsEqual: s = Xn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = Ww
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !_c && (_c = !0, Ki('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = uS(e), d = lS(t), m = fS(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Oc.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ES(b)}`);
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
          reactReduxForwardedRef: q
        } = g, ce = Ad(g, hS);
        return [g.context, q, ce];
      }, [g]), $ = _.useMemo(() => x && x.Consumer && // @ts-ignore
      Oc.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext($), R = !!g.store && !!g.store.getState && !!g.store.dispatch, I = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !R && !I)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const V = R ? g.store : A.store, H = I ? A.getServerState : V.getState, J = _.useMemo(() => aS(V.dispatch, w), [V]), [T, L] = _.useMemo(() => {
        if (!h) return yS;
        const q = gS(V, R ? void 0 : A.subscription), ce = q.notifyNestedSubs.bind(q);
        return [q, ce];
      }, [V, R, A]), G = _.useMemo(() => R ? A : Wt({}, A, {
        subscription: T
      }), [R, A, T]), W = _.useRef(), z = _.useRef(C), B = _.useRef(), Z = _.useRef(!1);
      _.useRef(!1);
      const ee = _.useRef(!1), oe = _.useRef();
      Fo(() => (ee.current = !0, () => {
        ee.current = !1;
      }), []);
      const ie = _.useMemo(() => () => B.current && C === z.current ? B.current : J(V.getState(), C), [V, C]), ue = _.useMemo(() => (q) => T ? SS(
        h,
        V,
        T,
        // @ts-ignore
        J,
        z,
        W,
        Z,
        ee,
        B,
        L,
        q
      ) : () => {
      }, [T]);
      xS(wS, [z, W, Z, C, B, L]);
      let re;
      try {
        re = Md(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ue,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ie,
          H ? () => J(H(), C) : ie
        );
      } catch (q) {
        throw oe.current && (q.message += `
The error may be correlated with this previous error:
${oe.current.stack}

`), q;
      }
      Fo(() => {
        oe.current = void 0, B.current = void 0, W.current = re;
      });
      const se = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, Wt({}, re, {
          ref: N
        }))
      ), [N, b, re]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement($.Provider, {
        value: G
      }, se) : se, [$, se, G]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, Wt({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, xc(g, b);
    }
    return xc(v, b);
  };
}
vS(Hi.useSyncExternalStore);
Fw(on);
function DS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Bd(e, t) {
  var r = $e(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = F(!0), o = F(r), i = n.current || !!(t && o.current.inputs && DS(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ae(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function NS(e, t) {
  return Bd(function() {
    return e;
  }, t);
}
var je = Bd, Le = NS, CS = process.env.NODE_ENV === "production", Jn = "Invariant failed";
function Ic(e, t) {
  if (CS)
    throw new Error(Jn);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Jn, ": ").concat(r) : Jn;
  throw new Error(n);
}
var Bt = function(e) {
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
}, Fd = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Pc = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, _S = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Zn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ji = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Zn : r, o = e.border, i = o === void 0 ? Zn : o, a = e.padding, s = a === void 0 ? Zn : a, l = Bt(Fd(t, n)), u = Bt(Pc(t, i)), p = Bt(Pc(u, s));
  return {
    marginBox: l,
    borderBox: Bt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, nt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Ic(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Ic()), n;
}, IS = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, PS = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = _S(r, t);
  return Ji({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, Go = function(e, t) {
  return t === void 0 && (t = IS()), PS(e, t);
}, Gd = function(e, t) {
  var r = {
    top: nt(t.marginTop),
    right: nt(t.marginRight),
    bottom: nt(t.marginBottom),
    left: nt(t.marginLeft)
  }, n = {
    top: nt(t.paddingTop),
    right: nt(t.paddingRight),
    bottom: nt(t.paddingBottom),
    left: nt(t.paddingLeft)
  }, o = {
    top: nt(t.borderTopWidth),
    right: nt(t.borderRightWidth),
    bottom: nt(t.borderBottomWidth),
    left: nt(t.borderLeftWidth)
  };
  return Ji({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, kd = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Gd(t, r);
}, Ac = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function AS(e, t) {
  return !!(e === t || Ac(e) && Ac(t));
}
function RS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!AS(e[r], t[r]))
      return !1;
  return !0;
}
function qe(e, t) {
  t === void 0 && (t = RS);
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
var TS = function(e) {
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
const $S = process.env.NODE_ENV === "production", VS = /[ \t]{2,}/g, MS = /^[ \t]*/gm, Rc = (e) => e.replace(VS, " ").replace(MS, "").trim(), LS = (e) => Rc(`
  %c@hello-pangea/dnd

  %c${Rc(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), BS = (e) => [LS(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], FS = "__@hello-pangea/dnd-disable-dev-warnings";
function Wd(e, t) {
  $S || typeof window < "u" && window[FS] || console[e](...BS(t));
}
const Et = Wd.bind(null, "warn"), ko = Wd.bind(null, "error");
function GS() {
}
function kS(e, t) {
  return {
    ...e,
    ...t
  };
}
function WS(e, t, r) {
  const n = t.map((o) => {
    const i = kS(r, o.options);
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
const jS = process.env.NODE_ENV === "production", Tc = "Invariant failed";
class yr extends Error {
}
yr.prototype.toString = function() {
  return this.message;
};
function K(e, t) {
  throw jS ? new yr(Tc) : new yr(`${Tc}: ${t || ""}`);
}
class w0 extends P.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = GS, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Et(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof yr && (r.preventDefault(), process.env.NODE_ENV !== "production" && ko(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = WS(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof yr) {
      process.env.NODE_ENV !== "production" && ko(t.message), this.setState({});
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
const $t = {
  x: 0,
  y: 0
}, zS = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), US = (e, t) => e.x === t.x && e.y === t.y, HS = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), qS = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var YS = (e, t) => {
  const r = Bt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const KS = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), XS = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, JS = (e, t) => t ? KS(e, t.scroll.diff.displacement) : e, ZS = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, QS = (e, t) => t && t.shouldClipSubject ? YS(t.pageMarginBox, e) : Bt(e);
var eO = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = JS(e.marginBox, n), i = ZS(o, r, t), a = QS(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
qe((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
qe((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const tO = qe((e) => Object.values(e)), rO = qe((e) => Object.values(e));
qe((e, t) => rO(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function nO(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
qe((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const oO = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, iO = {
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
qe(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: qS(e.line, r)
  };
});
var kr = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const aO = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), sO = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Zi = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Er = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, cO = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Nt = `${cO.outOfTheWay}s ${Zi.outOfTheWay}`, Wr = {
  fluid: `opacity ${Nt}`,
  snap: `transform ${Nt}, opacity ${Nt}`,
  drop: (e) => {
    const t = `${e}s ${Zi.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Nt}`,
  placeholder: `height ${Nt}, width ${Nt}, margin ${Nt}`
}, $c = (e) => US(e, $t) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Wo = {
  moveTo: $c,
  drop: (e, t) => {
    const r = $c(e);
    if (r)
      return t ? `${r} scale(${Er.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var jd = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = zS({
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
}, lO = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot find document.documentElement") : K()), e;
}, uO = () => {
  const e = lO();
  return jd({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
qe((e) => tO(e).filter((t) => !(!t.isEnabled || !t.frame)));
const zd = "data-rfd", Vc = (() => {
  const e = `${zd}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Mc = {
  contextId: `${zd}-scroll-container-context-id`
}, dO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Sr : ae;
var or = dO;
function pO(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var fO = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ud(e) {
  return e instanceof fO(e).HTMLElement;
}
function mO(e, t) {
  const r = `[${Vc.contextId}="${e}"]`, n = pO(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Et(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Vc.draggableId) === t);
  return o ? Ud(o) ? o : (process.env.NODE_ENV !== "production" && Et("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Et(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Hd = P.createContext(null), gO = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot find document.body") : K()), e;
};
let bO = 0;
const qd = {
  separator: "::"
};
function hO(e, t = qd) {
  return je(() => `${e}${t.separator}${bO++}`, [t.separator, e]);
}
function vO(e, t = qd) {
  const r = P.useId();
  return je(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Yd = "useId" in P ? vO : hO, Qi = P.createContext(null);
function Kd(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ea(e, t) {
  Kd(() => {
    ae(() => {
      try {
        e();
      } catch (r) {
        ko(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function yO(e) {
  const t = F(e);
  return ae(() => {
    t.current = e;
  }), t;
}
function ta(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Lc = {
  dragging: 5e3,
  dropAnimating: 4500
}, EO = (e, t) => t ? Wr.drop(t.duration) : e ? Wr.snap : Wr.fluid, xO = (e, t) => {
  if (e)
    return t ? Er.opacity.drop : Er.opacity.combining;
}, wO = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function SO(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = wO(e), s = !!o, l = s ? Wo.drop(r, i) : Wo.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: EO(a, o),
    transform: l,
    opacity: xO(i, s),
    zIndex: s ? Lc.dropAnimating : Lc.dragging,
    pointerEvents: "none"
  };
}
function OO(e) {
  return {
    transform: Wo.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function DO(e) {
  return e.type === "DRAGGING" ? SO(e) : OO(e);
}
function NO(e, t, r = $t) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Gd(o, n), a = Go(i, r), s = {
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
function CO(e) {
  const t = Yd("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = je(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Le((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot get dimension when no ref is set") : K()), NO(r, h, m);
  }, [r, o]), p = je(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = F(p), d = F(!0);
  or(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), or(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var ra = P.createContext(null);
function Xd(e) {
  e && Ud(e) || (process.env.NODE_ENV !== "production" ? K(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : K());
}
function _O(e, t, r) {
  ea(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? K(!1, "Draggable requires a draggableId") : K(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? K(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : K(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? K(!1, `${n(o)} requires an integer index prop`) : K(!1)), e.mapped.type !== "DRAGGING" && (Xd(r()), e.isEnabled && (mO(t, o) || (process.env.NODE_ENV !== "production" ? K(!1, `${n(o)} Unable to find drag handle`) : K(!1))));
  });
}
function IO(e) {
  Kd(() => {
    const t = F(e);
    ea(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? K(!1, "Draggable isClone prop value changed during component life") : K(!1));
    }, [e]);
  });
}
function tn(e) {
  const t = St(e);
  return t || (process.env.NODE_ENV !== "production" ? K(!1, "Could not find required context") : K()), t;
}
function PO(e) {
  e.preventDefault();
}
const AO = (e) => {
  const t = F(null), r = Le((x = null) => {
    t.current = x;
  }, []), n = Le(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = tn(Qi), {
    type: s,
    droppableId: l
  } = tn(ra), u = je(() => ({
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
  if (_O(e, o, n), IO(b), !b) {
    const x = je(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    CO(x);
  }
  const w = je(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: PO
  } : null, [o, i, c, d]), E = Le((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (P.version.startsWith("16") || P.version.startsWith("17") ? y() : Or(y));
  }, [y, f]), v = je(() => {
    const x = DO(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
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
  }, [o, w, c, f, E, r]), g = je(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return P.createElement(P.Fragment, null, p(v, f.snapshot, g));
};
var RO = AO, Jd = (e, t) => e === t, Zd = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const TO = (e) => e.combine ? e.combine.draggableId : null, $O = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function VO() {
  const e = qe((n, o) => ({
    x: n,
    y: o
  })), t = qe((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = qe((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (ta(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = kr(n.impact), l = $O(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Zd(l), c = TO(l), d = {
        duration: n.dropDuration,
        curve: Zi.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? Er.opacity.drop : null,
        scale: c ? Er.scale.drop : null
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
function Qd(e = null) {
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
const MO = {
  mapped: {
    type: "SECONDARY",
    offset: $t,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Qd(null)
  }
};
function LO() {
  const e = qe((i, a) => ({
    x: i,
    y: a
  })), t = qe(Qd), r = qe((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r($t, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = nO(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = HS(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (ta(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const BO = () => {
  const e = VO(), t = LO();
  return (r, n) => e(r, n) || t(r, n) || MO;
}, FO = {
  dropAnimationFinished: sO
}, GO = Ld(BO, FO, null, {
  context: Hd,
  areStatePropsEqual: Jd
})(RO);
var kO = GO;
function WO(e) {
  return tn(ra).isUsingCloneFor === e.draggableId && !e.isClone ? null : P.createElement(kO, e);
}
const na = (e) => (t) => e === t, jO = na("scroll"), zO = na("auto"), UO = na("visible"), Bc = (e, t) => t(e.overflowX) || t(e.overflowY), HO = (e, t) => t(e.overflowX) && t(e.overflowY), ep = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Bc(r, jO) || Bc(r, zO);
}, qO = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = gO(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, K()), !ep(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return HO(n, UO) || process.env.NODE_ENV !== "production" && Et(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, oa = (e) => e == null ? null : e === document.body ? qO() ? e : null : e === document.documentElement ? null : ep(e) ? e : oa(e.parentElement);
var YO = (e) => {
  !e || !oa(e.parentElement) || process.env.NODE_ENV !== "production" && Et(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, jo = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const tp = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : tp(e.parentElement) : !1;
var KO = (e) => {
  const t = oa(e), r = tp(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, XO = ({
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
    } = s, m = jd({
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
          value: $t,
          displacement: $t
        }
      }
    };
  })(), u = o === "vertical" ? oO : iO, p = eO({
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
const JO = (e, t) => {
  const r = kd(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = Fd({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Ji({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var ZO = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = JO(e, l), p = Go(u, n), c = (() => {
    if (!l)
      return null;
    const d = kd(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: Go(d, n),
      scroll: jo(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return XO({
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
const QO = {
  passive: !1
}, eD = {
  passive: !0
};
var Fc = (e) => e.shouldPublishImmediately ? QO : eD;
const Vr = (e) => e && e.env.closestScrollable || null;
function tD(e) {
  const t = F(null), r = tn(Qi), n = Yd("droppable"), {
    registry: o,
    marshal: i
  } = r, a = yO(e), s = je(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = F(s), u = je(() => qe((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? K(!1, "Can only update scroll when dragging") : K());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = Le(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? $t : jo(v.env.closestScrollable);
  }, []), c = Le(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = je(() => TS(c), [c]), m = Le(() => {
    const v = t.current, g = Vr(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? K(!1, "Could not find scroll options while scrolling") : K()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Le((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? K(!1, "Cannot collect a droppable while a drag is occurring") : K());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot collect without a droppable ref") : K());
    const C = KO(N), $ = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = $;
    const A = ZO({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), R = C.closestScrollable;
    return R && (R.setAttribute(Mc.contextId, r.contextId), R.addEventListener("scroll", m, Fc($.scrollOptions)), process.env.NODE_ENV !== "production" && YO(R)), A;
  }, [r.contextId, s, m, a]), b = Le(() => {
    const v = t.current, g = Vr(v);
    return v && g || (process.env.NODE_ENV !== "production" ? K(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : K()), jo(g);
  }, []), f = Le(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot stop drag when no active drag") : K());
    const g = Vr(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(Mc.contextId), g.removeEventListener("scroll", m, Fc(v.scrollOptions)));
  }, [m, d]), y = Le((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot scroll when there is no drag") : K());
    const x = Vr(g);
    x || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot scroll a droppable with no closest scrollable") : K()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = je(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = je(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  or(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Et("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), or(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), or(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Qn() {
}
const rD = {
  width: 0,
  height: 0,
  margin: XS
}, nD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? rD : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, oD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = nD({
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
    transition: r !== "none" ? Wr.placeholder : null
  };
}, iD = (e) => {
  const t = F(null), r = Le(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = $e(e.animate === "open");
  ae(() => s ? n !== "open" ? (r(), l(!1), Qn) : t.current ? Qn : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Qn, [n, s, r]);
  const u = Le((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = oD({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return P.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var aD = P.memo(iD);
function eo(e) {
  return typeof e == "boolean";
}
function to(e, t) {
  t.forEach((r) => r(e));
}
const sD = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? K(!1, "A Droppable requires a droppableId prop") : K()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? K(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : K());
}, function({
  props: e
}) {
  eo(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? K(!1, "isDropDisabled must be a boolean") : K()), eo(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? K(!1, "isCombineEnabled must be a boolean") : K()), eo(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? K(!1, "ignoreContainerClipping must be a boolean") : K());
}, function({
  getDroppableRef: e
}) {
  Xd(e());
}], cD = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Et(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], lD = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? K(!1, "Must provide a clone render function (renderClone) for virtual lists") : K());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? K(!1, "Expected virtual list to not have a placeholder") : K());
}];
function uD(e) {
  ea(() => {
    to(e, sD), e.props.mode === "standard" && to(e, cD), e.props.mode === "virtual" && to(e, lD);
  });
}
class dD extends P.PureComponent {
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
const pD = (e) => {
  const t = St(Qi);
  t || (process.env.NODE_ENV !== "production" ? K(!1, "Could not find app context") : K());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = F(null), i = F(null), {
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
  } = e, w = Le(() => o.current, []), E = Le((I = null) => {
    o.current = I;
  }, []), v = Le(() => i.current, []), g = Le((I = null) => {
    i.current = I;
  }, []);
  uD({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = Le(() => {
    n() && f({
      maxScroll: uO()
    });
  }, [n, f]);
  tD({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = je(() => P.createElement(dD, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: V,
    animate: H
  }) => P.createElement(aD, {
    placeholder: V,
    onClose: I,
    innerRef: g,
    animate: H,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = je(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), $ = b ? b.dragging.draggableId : null, A = je(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: $
  }), [s, $, l]);
  function R() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: V
    } = b, H = P.createElement(WO, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, T) => V(J, T, I));
    return nn.createPortal(H, y());
  }
  return P.createElement(ra.Provider, {
    value: A
  }, a(C, h), R());
};
var fD = pD;
function mD() {
  return document.body || (process.env.NODE_ENV !== "production" ? K(!1, "document.body is not ready") : K()), document.body;
}
const Gc = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: mD
}, rp = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Gc)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Gc[r]
    });
  return t;
}, ro = (e, t) => e === t.droppable.type, kc = (e, t) => t.draggables[e.draggable.id], gD = () => {
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
  }, r = qe((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = qe((o, i, a, s, l, u) => {
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
    const a = rp(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (ta(o)) {
      const c = o.critical;
      if (!ro(l, c))
        return t;
      const d = kc(c, o.dimensions), m = kr(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!ro(l, c.critical))
        return t;
      const d = kc(c.critical, o.dimensions);
      return n(s, u, Zd(c.result) === s, kr(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!ro(l, c.critical))
        return t;
      const d = kr(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, bD = {
  updateViewportMaxScroll: aO
};
Ld(gD, bD, (e, t, r) => ({
  ...rp(r),
  ...e,
  ...t
}), {
  context: Hd,
  areStatePropsEqual: Jd
})(fD);
var Wc;
(function(e) {
  e.event = "event", e.props = "prop";
})(Wc || (Wc = {}));
var jc = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + jc(), "" + jc();
function hD(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zo = { exports: {} }, no = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc;
function vD() {
  if (zc) return no;
  zc = 1;
  var e = P;
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
  return no.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, no;
}
var Uc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc;
function yD() {
  return Hc || (Hc = 1, process.env.NODE_ENV !== "production" && function() {
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
    var o = P, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Uc.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Uc;
}
process.env.NODE_ENV === "production" ? zo.exports = vD() : zo.exports = yD();
var ia = zo.exports, oo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qc;
function ED() {
  if (qc) return oo;
  qc = 1;
  var e = P, t = ia;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return oo.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
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
  }, oo;
}
var Yc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kc;
function xD() {
  return Kc || (Kc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = P, r = ia, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Yc.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
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
  }()), Yc;
}
process.env.NODE_ENV === "production" ? ED() : xD();
function wD(e) {
  e();
}
let np = wD;
const SD = (e) => np = e, OD = () => np, Xc = Symbol.for("react-redux-context"), Jc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function DD() {
  var e;
  if (!_.createContext) return {};
  const t = (e = Jc[Xc]) != null ? e : Jc[Xc] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const ND = /* @__PURE__ */ DD(), CD = () => {
  throw new Error("uSES not initialized!");
};
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jt.apply(null, arguments);
}
function op(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Uo = { exports: {} }, Ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;
function _D() {
  if (Zc) return Ee;
  Zc = 1;
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
  return Ee.AsyncMode = l, Ee.ConcurrentMode = u, Ee.ContextConsumer = s, Ee.ContextProvider = a, Ee.Element = t, Ee.ForwardRef = p, Ee.Fragment = n, Ee.Lazy = h, Ee.Memo = m, Ee.Portal = r, Ee.Profiler = i, Ee.StrictMode = o, Ee.Suspense = c, Ee.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, Ee.isConcurrentMode = v, Ee.isContextConsumer = function(g) {
    return E(g) === s;
  }, Ee.isContextProvider = function(g) {
    return E(g) === a;
  }, Ee.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Ee.isForwardRef = function(g) {
    return E(g) === p;
  }, Ee.isFragment = function(g) {
    return E(g) === n;
  }, Ee.isLazy = function(g) {
    return E(g) === h;
  }, Ee.isMemo = function(g) {
    return E(g) === m;
  }, Ee.isPortal = function(g) {
    return E(g) === r;
  }, Ee.isProfiler = function(g) {
    return E(g) === i;
  }, Ee.isStrictMode = function(g) {
    return E(g) === o;
  }, Ee.isSuspense = function(g) {
    return E(g) === c;
  }, Ee.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, Ee.typeOf = E, Ee;
}
var Ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc;
function ID() {
  return Qc || (Qc = 1, process.env.NODE_ENV !== "production" && function() {
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
            var O = S.type;
            switch (O) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return O;
              default:
                var de = O && O.$$typeof;
                switch (de) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return de;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, $ = t, A = p, R = n, I = h, V = m, H = r, J = i, T = o, L = c, G = !1;
    function W(S) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(S) || v(S) === l;
    }
    function z(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Z(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function oe(S) {
      return v(S) === p;
    }
    function ie(S) {
      return v(S) === n;
    }
    function ue(S) {
      return v(S) === h;
    }
    function re(S) {
      return v(S) === m;
    }
    function se(S) {
      return v(S) === r;
    }
    function q(S) {
      return v(S) === i;
    }
    function ce(S) {
      return v(S) === o;
    }
    function Ve(S) {
      return v(S) === c;
    }
    Ne.AsyncMode = g, Ne.ConcurrentMode = x, Ne.ContextConsumer = N, Ne.ContextProvider = C, Ne.Element = $, Ne.ForwardRef = A, Ne.Fragment = R, Ne.Lazy = I, Ne.Memo = V, Ne.Portal = H, Ne.Profiler = J, Ne.StrictMode = T, Ne.Suspense = L, Ne.isAsyncMode = W, Ne.isConcurrentMode = z, Ne.isContextConsumer = B, Ne.isContextProvider = Z, Ne.isElement = ee, Ne.isForwardRef = oe, Ne.isFragment = ie, Ne.isLazy = ue, Ne.isMemo = re, Ne.isPortal = se, Ne.isProfiler = q, Ne.isStrictMode = ce, Ne.isSuspense = Ve, Ne.isValidElementType = E, Ne.typeOf = v;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? Uo.exports = _D() : Uo.exports = ID();
var PD = Uo.exports, aa = PD, AD = {
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
}, RD = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, TD = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ip = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, sa = {};
sa[aa.ForwardRef] = TD;
sa[aa.Memo] = ip;
function el(e) {
  return aa.isMemo(e) ? ip : sa[e.$$typeof] || AD;
}
var $D = Object.defineProperty, VD = Object.getOwnPropertyNames, tl = Object.getOwnPropertySymbols, MD = Object.getOwnPropertyDescriptor, LD = Object.getPrototypeOf, rl = Object.prototype;
function ap(e, t, r) {
  if (typeof t != "string") {
    if (rl) {
      var n = LD(t);
      n && n !== rl && ap(e, n, r);
    }
    var o = VD(t);
    tl && (o = o.concat(tl(t)));
    for (var i = el(e), a = el(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!RD[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = MD(t, l);
        try {
          $D(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var BD = ap;
const nl = /* @__PURE__ */ hD(BD);
var Ho = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol;
function FD() {
  if (ol) return xe;
  ol = 1;
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
  return xe.ContextConsumer = a, xe.ContextProvider = i, xe.Element = e, xe.ForwardRef = l, xe.Fragment = r, xe.Lazy = d, xe.Memo = c, xe.Portal = t, xe.Profiler = o, xe.StrictMode = n, xe.Suspense = u, xe.SuspenseList = p, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(f) {
    return b(f) === a;
  }, xe.isContextProvider = function(f) {
    return b(f) === i;
  }, xe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, xe.isForwardRef = function(f) {
    return b(f) === l;
  }, xe.isFragment = function(f) {
    return b(f) === r;
  }, xe.isLazy = function(f) {
    return b(f) === d;
  }, xe.isMemo = function(f) {
    return b(f) === c;
  }, xe.isPortal = function(f) {
    return b(f) === t;
  }, xe.isProfiler = function(f) {
    return b(f) === o;
  }, xe.isStrictMode = function(f) {
    return b(f) === n;
  }, xe.isSuspense = function(f) {
    return b(f) === u;
  }, xe.isSuspenseList = function(f) {
    return b(f) === p;
  }, xe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, xe.typeOf = b, xe;
}
var Ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var il;
function GD() {
  return il || (il = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === o || w || O === n || O === u || O === p || y || O === m || h || b || f || typeof O == "object" && O !== null && (O.$$typeof === d || O.$$typeof === c || O.$$typeof === i || O.$$typeof === a || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === E || O.getModuleId !== void 0));
    }
    function g(O) {
      if (typeof O == "object" && O !== null) {
        var de = O.$$typeof;
        switch (de) {
          case e:
            var Te = O.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var M = Te && Te.$$typeof;
                switch (M) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return M;
                  default:
                    return de;
                }
            }
          case t:
            return de;
        }
      }
    }
    var x = a, N = i, C = e, $ = l, A = r, R = d, I = c, V = t, H = o, J = n, T = u, L = p, G = !1, W = !1;
    function z(O) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(O) {
      return W || (W = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(O) {
      return g(O) === a;
    }
    function ee(O) {
      return g(O) === i;
    }
    function oe(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function ie(O) {
      return g(O) === l;
    }
    function ue(O) {
      return g(O) === r;
    }
    function re(O) {
      return g(O) === d;
    }
    function se(O) {
      return g(O) === c;
    }
    function q(O) {
      return g(O) === t;
    }
    function ce(O) {
      return g(O) === o;
    }
    function Ve(O) {
      return g(O) === n;
    }
    function S(O) {
      return g(O) === u;
    }
    function le(O) {
      return g(O) === p;
    }
    Ce.ContextConsumer = x, Ce.ContextProvider = N, Ce.Element = C, Ce.ForwardRef = $, Ce.Fragment = A, Ce.Lazy = R, Ce.Memo = I, Ce.Portal = V, Ce.Profiler = H, Ce.StrictMode = J, Ce.Suspense = T, Ce.SuspenseList = L, Ce.isAsyncMode = z, Ce.isConcurrentMode = B, Ce.isContextConsumer = Z, Ce.isContextProvider = ee, Ce.isElement = oe, Ce.isForwardRef = ie, Ce.isFragment = ue, Ce.isLazy = re, Ce.isMemo = se, Ce.isPortal = q, Ce.isProfiler = ce, Ce.isStrictMode = Ve, Ce.isSuspense = S, Ce.isSuspenseList = le, Ce.isValidElementType = v, Ce.typeOf = g;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? Ho.exports = FD() : Ho.exports = GD();
var al = Ho.exports;
function ca(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function io(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ca(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function kD(e, t, r) {
  io(e, "mapStateToProps"), io(t, "mapDispatchToProps"), io(r, "mergeProps");
}
const WD = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function jD(e, t, r, n, {
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
function zD(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = op(t, WD);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && kD(a, s, l), jD(a, s, l, e, i);
}
function UD(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function HD(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function sp(e, t, r) {
  HD(e) || ca(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function qo(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function sl(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function cp(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = sl(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = sl(s), s = o(i, a)), process.env.NODE_ENV !== "production" && sp(s, n, t), s;
    }, o;
  };
}
function la(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function qD(e) {
  return e && typeof e == "object" ? qo((t) => (
    // @ts-ignore
    UD(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    cp(e, "mapDispatchToProps")
  ) : la(e, "mapDispatchToProps") : qo((t) => ({
    dispatch: t
  }));
}
function YD(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    cp(e, "mapStateToProps")
  ) : la(e, "mapStateToProps") : qo(() => ({}));
}
function KD(e, t, r) {
  return jt({}, r, e, t);
}
function XD(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && sp(i, r, "mergeProps")), i;
    };
  };
}
function JD(e) {
  return e ? typeof e == "function" ? XD(e) : la(e, "mergeProps") : () => KD;
}
function ZD() {
  const e = OD();
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
const cl = {
  notify() {
  },
  get: () => []
};
function QD(e, t) {
  let r, n = cl, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = ZD());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = cl);
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
const eN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yo = eN ? _.useLayoutEffect : _.useEffect;
function ll(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ao(e, t) {
  if (ll(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !ll(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const tN = ["reactReduxForwardedRef"];
let lp = CD;
const rN = (e) => {
  lp = e;
}, nN = [null, null], oN = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function iN(e, t, r) {
  Yo(() => e(...t), r);
}
function aN(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function sN(e, t, r, n, o, i, a, s, l, u, p) {
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
function cN(e, t) {
  return e === t;
}
let ul = !1;
function up(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = cN,
  areOwnPropsEqual: i = ao,
  areStatePropsEqual: a = ao,
  areMergedPropsEqual: s = ao,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = ND
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !ul && (ul = !0, ca('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = YD(e), d = qD(t), m = JD(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !al.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${oN(b)}`);
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
          reactReduxForwardedRef: q
        } = g, ce = op(g, tN);
        return [g.context, q, ce];
      }, [g]), $ = _.useMemo(() => x && x.Consumer && // @ts-ignore
      al.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext($), R = !!g.store && !!g.store.getState && !!g.store.dispatch, I = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !R && !I)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const V = R ? g.store : A.store, H = I ? A.getServerState : V.getState, J = _.useMemo(() => zD(V.dispatch, w), [V]), [T, L] = _.useMemo(() => {
        if (!h) return nN;
        const q = QD(V, R ? void 0 : A.subscription), ce = q.notifyNestedSubs.bind(q);
        return [q, ce];
      }, [V, R, A]), G = _.useMemo(() => R ? A : jt({}, A, {
        subscription: T
      }), [R, A, T]), W = _.useRef(), z = _.useRef(C), B = _.useRef(), Z = _.useRef(!1);
      _.useRef(!1);
      const ee = _.useRef(!1), oe = _.useRef();
      Yo(() => (ee.current = !0, () => {
        ee.current = !1;
      }), []);
      const ie = _.useMemo(() => () => B.current && C === z.current ? B.current : J(V.getState(), C), [V, C]), ue = _.useMemo(() => (q) => T ? sN(
        h,
        V,
        T,
        // @ts-ignore
        J,
        z,
        W,
        Z,
        ee,
        B,
        L,
        q
      ) : () => {
      }, [T]);
      iN(aN, [z, W, Z, C, B, L]);
      let re;
      try {
        re = lp(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ue,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ie,
          H ? () => J(H(), C) : ie
        );
      } catch (q) {
        throw oe.current && (q.message += `
The error may be correlated with this previous error:
${oe.current.stack}

`), q;
      }
      Yo(() => {
        oe.current = void 0, B.current = void 0, W.current = re;
      });
      const se = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, jt({}, re, {
          ref: N
        }))
      ), [N, b, re]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement($.Provider, {
        value: G
      }, se) : se, [$, se, G]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, jt({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, nl(g, b);
    }
    return nl(v, b);
  };
}
rN(ia.useSyncExternalStore);
SD(on);
function lN(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function dp(e, t) {
  var r = $e(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = F(!0), o = F(r), i = n.current || !!(t && o.current.inputs && lN(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ae(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function uN(e, t) {
  return dp(function() {
    return e;
  }, t);
}
var ze = dp, Be = uN, dN = process.env.NODE_ENV === "production", so = "Invariant failed";
function dl(e, t) {
  if (dN)
    throw new Error(so);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(so, ": ").concat(r) : so;
  throw new Error(n);
}
var Ft = function(e) {
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
}, pp = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, pl = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, pN = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, co = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ua = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? co : r, o = e.border, i = o === void 0 ? co : o, a = e.padding, s = a === void 0 ? co : a, l = Ft(pp(t, n)), u = Ft(pl(t, i)), p = Ft(pl(u, s));
  return {
    marginBox: l,
    borderBox: Ft(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, ot = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? dl(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : dl()), n;
}, fN = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, mN = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = pN(r, t);
  return ua({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, Ko = function(e, t) {
  return t === void 0 && (t = fN()), mN(e, t);
}, fp = function(e, t) {
  var r = {
    top: ot(t.marginTop),
    right: ot(t.marginRight),
    bottom: ot(t.marginBottom),
    left: ot(t.marginLeft)
  }, n = {
    top: ot(t.paddingTop),
    right: ot(t.paddingRight),
    bottom: ot(t.paddingBottom),
    left: ot(t.paddingLeft)
  }, o = {
    top: ot(t.borderTopWidth),
    right: ot(t.borderRightWidth),
    bottom: ot(t.borderBottomWidth),
    left: ot(t.borderLeftWidth)
  };
  return ua({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, mp = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return fp(t, r);
}, fl = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function gN(e, t) {
  return !!(e === t || fl(e) && fl(t));
}
function bN(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!gN(e[r], t[r]))
      return !1;
  return !0;
}
function Ye(e, t) {
  t === void 0 && (t = bN);
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
var hN = function(e) {
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
const vN = process.env.NODE_ENV === "production", yN = /[ \t]{2,}/g, EN = /^[ \t]*/gm, ml = (e) => e.replace(yN, " ").replace(EN, "").trim(), xN = (e) => ml(`
  %c@hello-pangea/dnd

  %c${ml(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), wN = (e) => [xN(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], SN = "__@hello-pangea/dnd-disable-dev-warnings";
function gp(e, t) {
  vN || typeof window < "u" && window[SN] || console[e](...wN(t));
}
const xt = gp.bind(null, "warn"), Xo = gp.bind(null, "error");
function ON() {
}
function DN(e, t) {
  return {
    ...e,
    ...t
  };
}
function NN(e, t, r) {
  const n = t.map((o) => {
    const i = DN(r, o.options);
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
const CN = process.env.NODE_ENV === "production", gl = "Invariant failed";
class xr extends Error {
}
xr.prototype.toString = function() {
  return this.message;
};
function X(e, t) {
  throw CN ? new xr(gl) : new xr(`${gl}: ${t || ""}`);
}
class S0 extends P.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = ON, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && xt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof xr && (r.preventDefault(), process.env.NODE_ENV !== "production" && Xo(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = NN(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof xr) {
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
const Vt = {
  x: 0,
  y: 0
}, _N = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), IN = (e, t) => e.x === t.x && e.y === t.y, PN = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), AN = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var RN = (e, t) => {
  const r = Ft({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const TN = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), $N = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, VN = (e, t) => t ? TN(e, t.scroll.diff.displacement) : e, MN = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, LN = (e, t) => t && t.shouldClipSubject ? RN(t.pageMarginBox, e) : Ft(e);
var BN = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = VN(e.marginBox, n), i = MN(o, r, t), a = LN(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Ye((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Ye((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const FN = Ye((e) => Object.values(e)), GN = Ye((e) => Object.values(e));
Ye((e, t) => GN(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function kN(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Ye((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const WN = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, jN = {
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
Ye(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: AN(e.line, r)
  };
});
var jr = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const zN = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), UN = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), da = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, wr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, HN = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ct = `${HN.outOfTheWay}s ${da.outOfTheWay}`, zr = {
  fluid: `opacity ${Ct}`,
  snap: `transform ${Ct}, opacity ${Ct}`,
  drop: (e) => {
    const t = `${e}s ${da.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ct}`,
  placeholder: `height ${Ct}, width ${Ct}, margin ${Ct}`
}, bl = (e) => IN(e, Vt) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Jo = {
  moveTo: bl,
  drop: (e, t) => {
    const r = bl(e);
    if (r)
      return t ? `${r} scale(${wr.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var bp = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = _N({
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
}, qN = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot find document.documentElement") : X()), e;
}, YN = () => {
  const e = qN();
  return bp({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Ye((e) => FN(e).filter((t) => !(!t.isEnabled || !t.frame)));
const hp = "data-rfd", hl = (() => {
  const e = `${hp}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), vl = {
  contextId: `${hp}-scroll-container-context-id`
}, KN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Sr : ae;
var ir = KN;
function XN(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var JN = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function vp(e) {
  return e instanceof JN(e).HTMLElement;
}
function ZN(e, t) {
  const r = `[${hl.contextId}="${e}"]`, n = XN(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && xt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(hl.draggableId) === t);
  return o ? vp(o) ? o : (process.env.NODE_ENV !== "production" && xt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && xt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var yp = P.createContext(null), QN = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot find document.body") : X()), e;
};
let eC = 0;
const Ep = {
  separator: "::"
};
function tC(e, t = Ep) {
  return ze(() => `${e}${t.separator}${eC++}`, [t.separator, e]);
}
function rC(e, t = Ep) {
  const r = P.useId();
  return ze(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var xp = "useId" in P ? rC : tC, pa = P.createContext(null);
function wp(e) {
  process.env.NODE_ENV !== "production" && e();
}
function fa(e, t) {
  wp(() => {
    ae(() => {
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
function nC(e) {
  const t = F(e);
  return ae(() => {
    t.current = e;
  }), t;
}
function ma(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const yl = {
  dragging: 5e3,
  dropAnimating: 4500
}, oC = (e, t) => t ? zr.drop(t.duration) : e ? zr.snap : zr.fluid, iC = (e, t) => {
  if (e)
    return t ? wr.opacity.drop : wr.opacity.combining;
}, aC = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function sC(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = aC(e), s = !!o, l = s ? Jo.drop(r, i) : Jo.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: oC(a, o),
    transform: l,
    opacity: iC(i, s),
    zIndex: s ? yl.dropAnimating : yl.dragging,
    pointerEvents: "none"
  };
}
function cC(e) {
  return {
    transform: Jo.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function lC(e) {
  return e.type === "DRAGGING" ? sC(e) : cC(e);
}
function uC(e, t, r = Vt) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = fp(o, n), a = Ko(i, r), s = {
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
function dC(e) {
  const t = xp("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = ze(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Be((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot get dimension when no ref is set") : X()), uC(r, h, m);
  }, [r, o]), p = ze(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = F(p), d = F(!0);
  ir(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), ir(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var ga = P.createContext(null);
function Sp(e) {
  e && vp(e) || (process.env.NODE_ENV !== "production" ? X(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : X());
}
function pC(e, t, r) {
  fa(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? X(!1, "Draggable requires a draggableId") : X(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? X(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : X(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? X(!1, `${n(o)} requires an integer index prop`) : X(!1)), e.mapped.type !== "DRAGGING" && (Sp(r()), e.isEnabled && (ZN(t, o) || (process.env.NODE_ENV !== "production" ? X(!1, `${n(o)} Unable to find drag handle`) : X(!1))));
  });
}
function fC(e) {
  wp(() => {
    const t = F(e);
    fa(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? X(!1, "Draggable isClone prop value changed during component life") : X(!1));
    }, [e]);
  });
}
function rn(e) {
  const t = St(e);
  return t || (process.env.NODE_ENV !== "production" ? X(!1, "Could not find required context") : X()), t;
}
function mC(e) {
  e.preventDefault();
}
const gC = (e) => {
  const t = F(null), r = Be((x = null) => {
    t.current = x;
  }, []), n = Be(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = rn(pa), {
    type: s,
    droppableId: l
  } = rn(ga), u = ze(() => ({
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
  if (pC(e, o, n), fC(b), !b) {
    const x = ze(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    dC(x);
  }
  const w = ze(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: mC
  } : null, [o, i, c, d]), E = Be((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (P.version.startsWith("16") || P.version.startsWith("17") ? y() : Or(y));
  }, [y, f]), v = ze(() => {
    const x = lC(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
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
  }, [o, w, c, f, E, r]), g = ze(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return P.createElement(P.Fragment, null, p(v, f.snapshot, g));
};
var bC = gC, Op = (e, t) => e === t, Dp = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const hC = (e) => e.combine ? e.combine.draggableId : null, vC = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function yC() {
  const e = Ye((n, o) => ({
    x: n,
    y: o
  })), t = Ye((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Ye((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (ma(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = jr(n.impact), l = vC(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Dp(l), c = hC(l), d = {
        duration: n.dropDuration,
        curve: da.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? wr.opacity.drop : null,
        scale: c ? wr.scale.drop : null
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
function Np(e = null) {
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
const EC = {
  mapped: {
    type: "SECONDARY",
    offset: Vt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Np(null)
  }
};
function xC() {
  const e = Ye((i, a) => ({
    x: i,
    y: a
  })), t = Ye(Np), r = Ye((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(Vt, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = kN(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = PN(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (ma(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const wC = () => {
  const e = yC(), t = xC();
  return (r, n) => e(r, n) || t(r, n) || EC;
}, SC = {
  dropAnimationFinished: UN
}, OC = up(wC, SC, null, {
  context: yp,
  areStatePropsEqual: Op
})(bC);
var DC = OC;
function NC(e) {
  return rn(ga).isUsingCloneFor === e.draggableId && !e.isClone ? null : P.createElement(DC, e);
}
const ba = (e) => (t) => e === t, CC = ba("scroll"), _C = ba("auto"), IC = ba("visible"), El = (e, t) => t(e.overflowX) || t(e.overflowY), PC = (e, t) => t(e.overflowX) && t(e.overflowY), Cp = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return El(r, CC) || El(r, _C);
}, AC = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = QN(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, X()), !Cp(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return PC(n, IC) || process.env.NODE_ENV !== "production" && xt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ha = (e) => e == null ? null : e === document.body ? AC() ? e : null : e === document.documentElement ? null : Cp(e) ? e : ha(e.parentElement);
var RC = (e) => {
  !e || !ha(e.parentElement) || process.env.NODE_ENV !== "production" && xt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Zo = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const _p = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : _p(e.parentElement) : !1;
var TC = (e) => {
  const t = ha(e), r = _p(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, $C = ({
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
    } = s, m = bp({
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
          value: Vt,
          displacement: Vt
        }
      }
    };
  })(), u = o === "vertical" ? WN : jN, p = BN({
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
const VC = (e, t) => {
  const r = mp(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = pp({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return ua({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var MC = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = VC(e, l), p = Ko(u, n), c = (() => {
    if (!l)
      return null;
    const d = mp(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: Ko(d, n),
      scroll: Zo(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return $C({
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
const LC = {
  passive: !1
}, BC = {
  passive: !0
};
var xl = (e) => e.shouldPublishImmediately ? LC : BC;
const Mr = (e) => e && e.env.closestScrollable || null;
function FC(e) {
  const t = F(null), r = rn(pa), n = xp("droppable"), {
    registry: o,
    marshal: i
  } = r, a = nC(e), s = ze(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = F(s), u = ze(() => Ye((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? X(!1, "Can only update scroll when dragging") : X());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = Be(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? Vt : Zo(v.env.closestScrollable);
  }, []), c = Be(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = ze(() => hN(c), [c]), m = Be(() => {
    const v = t.current, g = Mr(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? X(!1, "Could not find scroll options while scrolling") : X()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Be((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? X(!1, "Cannot collect a droppable while a drag is occurring") : X());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot collect without a droppable ref") : X());
    const C = TC(N), $ = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = $;
    const A = MC({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), R = C.closestScrollable;
    return R && (R.setAttribute(vl.contextId, r.contextId), R.addEventListener("scroll", m, xl($.scrollOptions)), process.env.NODE_ENV !== "production" && RC(R)), A;
  }, [r.contextId, s, m, a]), b = Be(() => {
    const v = t.current, g = Mr(v);
    return v && g || (process.env.NODE_ENV !== "production" ? X(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : X()), Zo(g);
  }, []), f = Be(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot stop drag when no active drag") : X());
    const g = Mr(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(vl.contextId), g.removeEventListener("scroll", m, xl(v.scrollOptions)));
  }, [m, d]), y = Be((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot scroll when there is no drag") : X());
    const x = Mr(g);
    x || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot scroll a droppable with no closest scrollable") : X()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = ze(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = ze(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  ir(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && xt("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), ir(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ir(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function lo() {
}
const GC = {
  width: 0,
  height: 0,
  margin: $N
}, kC = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? GC : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, WC = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = kC({
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
    transition: r !== "none" ? zr.placeholder : null
  };
}, jC = (e) => {
  const t = F(null), r = Be(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = $e(e.animate === "open");
  ae(() => s ? n !== "open" ? (r(), l(!1), lo) : t.current ? lo : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : lo, [n, s, r]);
  const u = Be((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = WC({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return P.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var zC = P.memo(jC);
function uo(e) {
  return typeof e == "boolean";
}
function po(e, t) {
  t.forEach((r) => r(e));
}
const UC = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? X(!1, "A Droppable requires a droppableId prop") : X()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? X(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : X());
}, function({
  props: e
}) {
  uo(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? X(!1, "isDropDisabled must be a boolean") : X()), uo(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? X(!1, "isCombineEnabled must be a boolean") : X()), uo(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? X(!1, "ignoreContainerClipping must be a boolean") : X());
}, function({
  getDroppableRef: e
}) {
  Sp(e());
}], HC = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && xt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], qC = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? X(!1, "Must provide a clone render function (renderClone) for virtual lists") : X());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? X(!1, "Expected virtual list to not have a placeholder") : X());
}];
function YC(e) {
  fa(() => {
    po(e, UC), e.props.mode === "standard" && po(e, HC), e.props.mode === "virtual" && po(e, qC);
  });
}
class KC extends P.PureComponent {
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
const XC = (e) => {
  const t = St(pa);
  t || (process.env.NODE_ENV !== "production" ? X(!1, "Could not find app context") : X());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = F(null), i = F(null), {
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
  } = e, w = Be(() => o.current, []), E = Be((I = null) => {
    o.current = I;
  }, []), v = Be(() => i.current, []), g = Be((I = null) => {
    i.current = I;
  }, []);
  YC({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = Be(() => {
    n() && f({
      maxScroll: YN()
    });
  }, [n, f]);
  FC({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = ze(() => P.createElement(KC, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: V,
    animate: H
  }) => P.createElement(zC, {
    placeholder: V,
    onClose: I,
    innerRef: g,
    animate: H,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = ze(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), $ = b ? b.dragging.draggableId : null, A = ze(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: $
  }), [s, $, l]);
  function R() {
    if (!b)
      return null;
    const {
      dragging: I,
      render: V
    } = b, H = P.createElement(NC, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, T) => V(J, T, I));
    return nn.createPortal(H, y());
  }
  return P.createElement(ga.Provider, {
    value: A
  }, a(C, h), R());
};
var JC = XC;
function ZC() {
  return document.body || (process.env.NODE_ENV !== "production" ? X(!1, "document.body is not ready") : X()), document.body;
}
const wl = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: ZC
}, Ip = (e) => {
  let t = {
    ...e
  }, r;
  for (r in wl)
    e[r] === void 0 && (t = {
      ...t,
      [r]: wl[r]
    });
  return t;
}, fo = (e, t) => e === t.droppable.type, Sl = (e, t) => t.draggables[e.draggable.id], QC = () => {
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
  }, r = Ye((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = Ye((o, i, a, s, l, u) => {
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
    const a = Ip(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (ma(o)) {
      const c = o.critical;
      if (!fo(l, c))
        return t;
      const d = Sl(c, o.dimensions), m = jr(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!fo(l, c.critical))
        return t;
      const d = Sl(c.critical, o.dimensions);
      return n(s, u, Dp(c.result) === s, jr(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!fo(l, c.critical))
        return t;
      const d = jr(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, e0 = {
  updateViewportMaxScroll: zN
};
up(QC, e0, (e, t, r) => ({
  ...Ip(r),
  ...e,
  ...t
}), {
  context: yp,
  areStatePropsEqual: Op
})(JC);
var Qo = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new WeakMap(), Ol = 0, t0 = void 0;
function r0(e) {
  return e ? (Lr.has(e) || (Ol += 1, Lr.set(e, Ol.toString())), Lr.get(e)) : "0";
}
function n0(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? r0(e.root) : e[t]}`).toString();
}
function o0(e) {
  const t = n0(e);
  let r = Qo.get(t);
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
    }, Qo.set(t, r);
  }
  return r;
}
function i0(e, t, r = {}, n = t0) {
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
  const { id: o, observer: i, elements: a } = o0(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), Qo.delete(o));
  };
}
function a0({
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
      return E = i0(
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
const s0 = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = $e(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return ae(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ k(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ k(
        Hy,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, O0 = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: l, data: u } = e, p = u == null ? void 0 : u.pages.flatMap((m) => m), { ref: c, inView: d } = a0();
  return ae(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ Fe(Ur, { children: [
    o && /* @__PURE__ */ k(s0, { className: n }),
    /* @__PURE__ */ k(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(p != null && p.length) && p.map((m, h) => t(m, h))
      }
    ),
    /* @__PURE__ */ k(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: c,
        children: (s || l) && /* @__PURE__ */ k(qy, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && /* @__PURE__ */ k("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, D0 = () => {
  const e = F(null);
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
  d0 as Button,
  p0 as Checkbox,
  f0 as Chips,
  ei as ErrorText,
  Hr as Icon,
  O0 as InfiniteScroll,
  m0 as Input,
  g0 as List,
  Dl as Loader,
  b0 as MultiSelectSearch,
  s0 as ScrollTopButton,
  h0 as Search,
  v0 as Select,
  y0 as Table,
  E0 as Textarea,
  Vl as Wrapper,
  kl as useDebounce,
  D0 as useScroll
};
