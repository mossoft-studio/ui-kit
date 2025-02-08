import { jsx as I, jsxs as de, Fragment as Bt } from "react/jsx-runtime";
import * as W from "react";
import B, { useState as be, useEffect as se, useRef as H, useMemo as oa, useLayoutEffect as No, useContext as So } from "react";
import ia, { unstable_batchedUpdates as aa, flushSync as Co } from "react-dom";
const mt = ({ name: e, className: t, ...r }) => /* @__PURE__ */ I(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ I(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), Vr = ({ style: e, text: t }) => /* @__PURE__ */ de("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ I("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ I("span", { className: "text-base", children: t })
] }), Rp = ({
  children: e,
  onClick: t,
  className: r,
  loadType: n,
  isLoading: o,
  variant: i,
  icon: a,
  disabled: s,
  ...c
}) => {
  const [u, f] = be(""), l = () => {
    o && n === "1C" && (f("Отправляем запрос в 1С"), setTimeout(
      () => f(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  se(() => {
    n === "1C" && l();
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
  return /* @__PURE__ */ de(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: d,
      ...c,
      children: [
        o ? /* @__PURE__ */ I(Vr, { text: n === "1C" ? u : void 0 }) : e,
        a && !o && /* @__PURE__ */ I(
          mt,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Mr = ({ error: e }) => /* @__PURE__ */ I("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ I("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), Tp = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: c
}) => /* @__PURE__ */ de(Bt, { children: [
  /* @__PURE__ */ de(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ I(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ I("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ I(
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
  a && /* @__PURE__ */ I(Mr, { error: a })
] }), Vp = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ I("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ I(Bt, { children: o.title ? /* @__PURE__ */ I(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ I(Bt, {}) })) });
function $r(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var gt;
(function(e) {
  e.event = "event", e.props = "prop";
})(gt || (gt = {}));
function Me() {
}
function sa(e) {
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
function ca(e) {
  return typeof e == "number" && isNaN(e);
}
function Oo(e) {
  return Ye(e) || ca(e) || typeof e == "number" && !isFinite(e);
}
function Io(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function la(e) {
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
function ua(e, t, r) {
  var n = la(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function da(e) {
  var t = H(e);
  t.current = e;
  var r = H(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Br(e, t) {
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
function fa(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function Ao(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function gn(e, t) {
  return Array(t + 1).join(e);
}
function _o(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + gn("0", Math.abs(a)) + o : a >= s ? o = o + gn("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function bn(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = Br(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, c = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : c.toFixed(t), f = u.split("."), l = i;
  i && Number(f[0]) && (l = i.split("").reverse().reduce(function(b, m, v) {
    return b.length > v ? (Number(b[0]) + Number(m)).toString() + b.substring(1, b.length) : m + b;
  }, f[0]));
  var d = Ao(f[1] || "", t, r), p = s ? "-" : "", g = n ? "." : "";
  return "" + p + l + g + d;
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
var Po = sa(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), pa = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function ma(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Qt(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function ga() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Ro(e) {
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
function To(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function ba(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function ha(e, t, r, n, o, i, a) {
  a === void 0 && (a = ba);
  var s = o.findIndex(function(E) {
    return E;
  }), c = e.slice(0, s);
  !t && !r.startsWith(c) && (t = c, r = c + r, n = n + c.length);
  for (var u = r.length, f = e.length, l = {}, d = new Array(u), p = 0; p < u; p++) {
    d[p] = -1;
    for (var g = 0, b = f; g < b; g++) {
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
  for (var v = n; v < u && (d[v] === -1 || !i(r[v])); )
    v++;
  var x = v === u || d[v] === -1 ? f : d[v];
  for (v = n - 1; v > 0 && d[v] === -1; )
    v--;
  var w = v === -1 || d[v] === -1 ? 0 : d[v] + 1;
  return w > x ? x : n - w < x - n ? w : x;
}
function Lt(e, t, r, n) {
  var o = e.length;
  if (t = ma(t, 0, o), n === "left") {
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
function va(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(Ke(e[r]) || Ke(e[r - 1]));
  return t;
}
function Vo(e, t, r, n, o, i) {
  i === void 0 && (i = Me);
  var a = da(function(g, b) {
    var m, v;
    return Oo(g) ? (v = "", m = "") : typeof g == "number" || b ? (v = typeof g == "number" ? _o(g) : g, m = n(v)) : (v = o(g, void 0), m = n(v)), { formattedValue: m, numAsString: v };
  }), s = be(function() {
    return a(Ye(e) ? t : e, r);
  }), c = s[0], u = s[1], f = function(g, b) {
    g.formattedValue !== c.formattedValue && u({
      formattedValue: g.formattedValue,
      numAsString: g.value
    }), i(g, b);
  }, l = e, d = r;
  Ye(e) && (l = c.numAsString, d = !0);
  var p = a(l, d);
  return oa(function() {
    u(p);
  }, [p.formattedValue]), [c, f];
}
function ya(e) {
  return e.replace(/[^0-9]/g, "");
}
function xa(e) {
  return e;
}
function Mo(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = xa);
  var s = e.removeFormatting;
  s === void 0 && (s = ya);
  var c = e.defaultValue, u = e.valueIsNumericString, f = e.onValueChange, l = e.isAllowed, d = e.onChange;
  d === void 0 && (d = Me);
  var p = e.onKeyDown;
  p === void 0 && (p = Me);
  var g = e.onMouseUp;
  g === void 0 && (g = Me);
  var b = e.onFocus;
  b === void 0 && (b = Me);
  var m = e.onBlur;
  m === void 0 && (m = Me);
  var v = e.value, x = e.getCaretBoundary;
  x === void 0 && (x = va);
  var w = e.isValidInputCharacter;
  w === void 0 && (w = Ke);
  var E = e.isCharacterSame, y = $r(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), D = Vo(v, c, !!u, a, s, f), O = D[0], N = O.formattedValue, G = O.numAsString, M = D[1], j = H(), A = H({ formattedValue: N, numAsString: G }), Q = function(C, R) {
    A.current = { formattedValue: C.formattedValue, numAsString: C.value }, M(C, R);
  }, ae = be(!1), ie = ae[0], T = ae[1], V = H(null), L = H({
    setCaretTimeout: null,
    focusTimeout: null
  });
  se(function() {
    return T(!0), function() {
      clearTimeout(L.current.setCaretTimeout), clearTimeout(L.current.focusTimeout);
    };
  }, []);
  var z = a, J = function(C, R) {
    var k = parseFloat(R);
    return {
      formattedValue: C,
      value: R,
      floatValue: isNaN(k) ? void 0 : k
    };
  }, F = function(C, R, k) {
    C.selectionStart === 0 && C.selectionEnd === C.value.length || (ke(C, R), L.current.setCaretTimeout = setTimeout(function() {
      C.value === k && C.selectionStart !== R && ke(C, R);
    }, 0));
  }, te = function(C, R, k) {
    return Lt(C, R, x(C), k);
  }, fe = function(C, R, k) {
    var ne = x(R), me = ha(R, N, C, k, ne, w, E);
    return me = Lt(R, me, ne), me;
  }, Oe = function(C) {
    var R = C.formattedValue;
    R === void 0 && (R = "");
    var k = C.input, ne = C.source, me = C.event, oe = C.numAsString, Z;
    if (k) {
      var Te = C.inputValue || k.value, $e = Qt(k);
      k.value = R, Z = fe(Te, R, $e), Z !== void 0 && F(k, Z, R);
    }
    R !== N && Q(J(R, oe), { event: me, source: ne });
  };
  se(function() {
    var C = A.current, R = C.formattedValue, k = C.numAsString;
    (N !== R || G !== k) && Q(J(N, G), {
      event: void 0,
      source: gt.props
    });
  }, [N, G]);
  var he = V.current ? Qt(V.current) : void 0, we = typeof window < "u" ? No : se;
  we(function() {
    var C = V.current;
    if (N !== A.current.formattedValue && C) {
      var R = fe(A.current.formattedValue, N, he);
      C.value = N, F(C, R, N);
    }
  }, [N]);
  var Ie = function(C, R, k) {
    var ne = R.target, me = j.current ? pa(j.current, ne.selectionEnd) : Po(N, C), oe = Object.assign(Object.assign({}, me), { lastValue: N }), Z = s(C, oe), Te = z(Z);
    if (Z = s(Te, void 0), l && !l(J(Te, Z))) {
      var $e = R.target, Be = Qt($e), Zt = fe(C, N, Be);
      return $e.value = N, F($e, Zt, N), !1;
    }
    return Oe({
      formattedValue: Te,
      numAsString: Z,
      inputValue: C,
      event: R,
      source: k,
      input: R.target
    }), !0;
  }, _e = function(C, R) {
    R === void 0 && (R = 0);
    var k = C.selectionStart, ne = C.selectionEnd;
    j.current = { selectionStart: k, selectionEnd: ne + R };
  }, Ae = function(C) {
    var R = C.target, k = R.value, ne = Ie(k, C, gt.event);
    ne && d(C), j.current = void 0;
  }, Pe = function(C) {
    var R = C.target, k = C.key, ne = R.selectionStart, me = R.selectionEnd, oe = R.value;
    oe === void 0 && (oe = "");
    var Z;
    k === "ArrowLeft" || k === "Backspace" ? Z = Math.max(ne - 1, 0) : k === "ArrowRight" ? Z = Math.min(ne + 1, oe.length) : k === "Delete" && (Z = ne);
    var Te = 0;
    k === "Delete" && ne === me && (Te = 1);
    var $e = k === "ArrowLeft" || k === "ArrowRight";
    if (Z === void 0 || ne !== me && !$e) {
      p(C), _e(R, Te);
      return;
    }
    var Be = Z;
    if ($e) {
      var Zt = k === "ArrowLeft" ? "left" : "right";
      Be = te(oe, Z, Zt), Be !== Z && C.preventDefault();
    } else k === "Delete" && !w(oe[Z]) ? Be = te(oe, Z, "right") : k === "Backspace" && !w(oe[Z]) && (Be = te(oe, Z, "left"));
    Be !== Z && F(R, Be, oe), p(C), _e(R, Te);
  }, Ze = function(C) {
    var R = C.target, k = function() {
      var ne = R.selectionStart, me = R.selectionEnd, oe = R.value;
      if (oe === void 0 && (oe = ""), ne === me) {
        var Z = te(oe, ne);
        Z !== ne && F(R, Z, oe);
      }
    };
    k(), requestAnimationFrame(function() {
      k();
    }), g(C), _e(R);
  }, S = function(C) {
    C.persist && C.persist();
    var R = C.target, k = C.currentTarget;
    V.current = R, L.current.focusTimeout = setTimeout(function() {
      var ne = R.selectionStart, me = R.selectionEnd, oe = R.value;
      oe === void 0 && (oe = "");
      var Z = te(oe, ne);
      Z !== ne && !(ne === 0 && me === oe.length) && F(R, Z, oe), b(Object.assign(Object.assign({}, C), { currentTarget: k }));
    }, 0);
  }, ve = function(C) {
    V.current = null, clearTimeout(L.current.focusTimeout), clearTimeout(L.current.setCaretTimeout), m(C);
  }, _ = ie && ga() ? "numeric" : void 0, Re = Object.assign({ inputMode: _ }, y, {
    type: t,
    value: N,
    onChange: Ae,
    onKeyDown: Pe,
    onMouseUp: Ze,
    onFocus: S,
    onBlur: ve
  });
  if (r === "text")
    return o ? B.createElement(B.Fragment, null, o(N, y) || null) : B.createElement("span", Object.assign({}, y, { ref: i }), N);
  if (n) {
    var Qe = n;
    return B.createElement(Qe, Object.assign({}, Re, { ref: i }));
  }
  return B.createElement("input", Object.assign({}, Re, { ref: i }));
}
function hn(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = zt(t), u = c.thousandSeparator, f = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, d = Br(e, a), p = d.beforeDecimal, g = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (g = Ao(g, r, !!n)), u && (p = ua(p, u, s)), o && (p = o + p), i && (g = g + i), b && (p = "-" + p), e = p + (l && f || "") + g, e;
}
function zt(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Ea(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function wa(e, t) {
  return new RegExp("(^-)|[0-9]|" + Io(e), "g");
}
function Da(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Na(e, t, r) {
  var n;
  t === void 0 && (t = Ro(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, u = t.to, f = u.start, l = u.end, d = zt(r), p = d.allowedDecimalSeparators, g = d.decimalSeparator, b = e[l] === g;
  if (Ke(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (l - f === 1 && p.indexOf(e[f]) !== -1) {
    var m = s === 0 ? "" : g;
    e = e.substring(0, f) + m + e.substring(f + 1, e.length);
  }
  var v = function(V, L, z) {
    var J = !1, F = !1;
    i.startsWith("-") ? J = !1 : V.startsWith("--") ? (J = !1, F = !0) : a.startsWith("-") && V.length === a.length ? J = !1 : V[0] === "-" && (J = !0);
    var te = J ? 1 : 0;
    return F && (te = 2), te && (V = V.substring(te), L -= te, z -= te), { value: V, start: L, end: z, hasNegation: J };
  }, x = v(e, f, l), w = x.hasNegation;
  n = x, e = n.value, f = n.start, l = n.end;
  var E = v(t.lastValue, c.start, c.end), y = E.start, D = E.end, O = E.value, N = e.substring(f, l);
  e.length && O.length && (y > O.length - a.length || D < i.length) && !(N && a.startsWith(N)) && (e = O);
  var G = 0;
  e.startsWith(i) ? G += i.length : f < i.length && (G = f), e = e.substring(G), l -= G;
  var M = e.length, j = e.length - a.length;
  e.endsWith(a) ? M = j : (l > j || l > e.length - a.length) && (M = l), e = e.substring(0, M), e = Ea(w ? "-" + e : e, o), e = (e.match(wa(g)) || []).join("");
  var A = e.indexOf(g);
  e = e.replace(new RegExp(Io(g), "g"), function(V, L) {
    return L === A ? "." : "";
  });
  var Q = Br(e, o), ae = Q.beforeDecimal, ie = Q.afterDecimal, T = Q.addNegation;
  return u.end - u.start < c.end - c.start && ae === "" && b && !parseFloat(ie) && (e = T ? "-" : ""), e;
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
function Ca(e) {
  var t = zt(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function Oa(e) {
  e = Ca(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Me);
  var i = e.onBlur;
  i === void 0 && (i = Me);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var f = e.defaultValue, l = e.value, d = e.valueIsNumericString, p = e.onValueChange, g = $r(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = zt(e), m = b.decimalSeparator, v = b.allowedDecimalSeparators, x = function(T) {
    return hn(T, e);
  }, w = function(T, V) {
    return Na(T, V, e);
  }, E = Ye(l) ? f : l, y = d ?? Da(E, u, t);
  Ye(l) ? Ye(f) || (y = y || typeof f == "number") : y = y || typeof l == "number";
  var D = function(T) {
    return Oo(T) ? T : (typeof T == "number" && (T = _o(T)), y && typeof s == "number" ? bn(T, s, !!c) : T);
  }, O = Vo(D(l), D(f), !!y, x, w, p), N = O[0], G = N.numAsString, M = N.formattedValue, j = O[1], A = function(T) {
    var V = T.target, L = T.key, z = V.selectionStart, J = V.selectionEnd, F = V.value;
    if (F === void 0 && (F = ""), (L === "Backspace" || L === "Delete") && J < u.length) {
      T.preventDefault();
      return;
    }
    if (z !== J) {
      o(T);
      return;
    }
    L === "Backspace" && F[0] === "-" && z === u.length + 1 && r && ke(V, 1), s && c && (L === "Backspace" && F[z - 1] === m ? (ke(V, z - 1), T.preventDefault()) : L === "Delete" && F[z] === m && T.preventDefault()), v != null && v.includes(L) && F[z] === m && ke(V, z + 1);
    var te = a === !0 ? "," : a;
    L === "Backspace" && F[z - 1] === te && ke(V, z - 1), L === "Delete" && F[z] === te && ke(V, z + 1), o(T);
  }, Q = function(T) {
    var V = G;
    if (V.match(/\d/g) || (V = ""), n || (V = fa(V)), c && s && (V = bn(V, s, c)), V !== G) {
      var L = hn(V, e);
      j({
        formattedValue: L,
        value: V,
        floatValue: parseFloat(V)
      }, {
        event: T,
        source: gt.event
      });
    }
    i(T);
  }, ae = function(T) {
    return T === m ? !0 : Ke(T);
  }, ie = function(T) {
    var V = T.currentValue, L = T.lastValue, z = T.formattedValue, J = T.currentValueIndex, F = T.formattedValueIndex, te = V[J], fe = z[F], Oe = Po(L, V), he = Oe.to, we = function(Ie) {
      return w(Ie).indexOf(".") + u.length;
    };
    return l === 0 && c && s && V[he.start] === m && we(V) < J && we(z) > F ? !1 : J >= he.start && J < he.end && v && v.includes(te) && fe === m ? !0 : te === fe;
  };
  return Object.assign(Object.assign({}, g), {
    value: M,
    valueIsNumericString: !1,
    isValidInputCharacter: ae,
    isCharacterSame: ie,
    onValueChange: j,
    format: x,
    removeFormatting: w,
    getCaretBoundary: function(T) {
      return Sa(T, e);
    },
    onKeyDown: A,
    onBlur: Q
  });
}
function Ia(e) {
  var t = Oa(e);
  return B.createElement(Mo, Object.assign({}, t));
}
function Aa(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (s[c] = e[a] || To(o, a), a += 1);
  return s.join("");
}
function _a(e, t, r) {
  t === void 0 && (t = Ro(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(m) {
    return n[m] === o;
  }, u = function(m, v) {
    for (var x = "", w = 0; w < m.length; w++)
      c(v + w) && Ke(m[w]) && (x += m[w]);
    return x;
  }, f = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return f(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var l = "", d = 0; d < e.length; d++)
      if (c(d))
        Ke(e[d]) && (l += e[d]);
      else if (e[d] !== n[d])
        return f(e);
    return l;
  }
  var p = s.substring(0, i.start), g = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(p, 0) + f(g) + u(b, i.end);
}
function Pa(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(d, p) {
    var g = void 0;
    d === o && (a++, g = To(n, a - 1), s === -1 && e[p] === g && (s = p)), c[p] = g;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== c[d];
  }, f = 0, l = i.length; f < l; f++)
    i[f] = f === s || u(f) || u(f - 1);
  return i[r.indexOf(o)] = !0, i;
}
function Ra(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Ta(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Va(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = Me);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = $r(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Ra(e);
  var u = function(g) {
    return Pa(g, e);
  }, f = function(g) {
    var b = g.key, m = g.target, v = m.selectionStart, x = m.selectionEnd, w = m.value;
    if (v !== x) {
      n(g);
      return;
    }
    var E = v;
    if (b === "Backspace" || b === "Delete") {
      var y = "right";
      if (b === "Backspace") {
        for (; E > 0 && t[E - 1] !== o; )
          E--;
        y = "left";
      } else {
        for (var D = t.length; E < D && t[E] !== o; )
          E++;
        y = "right";
      }
      E = Lt(w, E, u(w), y);
    } else t[E] !== o && b !== "ArrowLeft" && b !== "ArrowRight" && (E = Lt(w, E + 1, u(w), "right"));
    E !== v && ke(m, E), n(g);
  }, l = Ye(i) ? a : i, d = s ?? Ta(l, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(g) {
      return Aa(g, p);
    },
    removeFormatting: function(g, b) {
      return _a(g, b, p);
    },
    getCaretBoundary: u,
    onKeyDown: f
  });
}
function Ma(e) {
  var t = Va(e);
  return B.createElement(Mo, Object.assign({}, t));
}
const $a = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, Mp = ({
  type: e,
  field: t,
  label: r,
  fieldState: n,
  postfix: o,
  labelClassName: i,
  errorPlace: a = "right",
  parentClassName: s,
  className: c,
  numberWrapperClassname: u,
  format: f,
  decimalScale: l = 1,
  ...d
}) => {
  var g, b, m;
  const p = "!border-danger";
  return /* @__PURE__ */ de("label", { className: "relative", children: [
    r && /* @__PURE__ */ I("span", { className: `text-primary ${i}`, children: r }),
    f ? /* @__PURE__ */ I(
      Ma,
      {
        onValueChange: (v) => {
          var x;
          t == null || t.onChange((x = v.value.replace("_", "")) == null ? void 0 : x.toString());
        },
        value: (g = t == null ? void 0 : t.value) == null ? void 0 : g.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${n != null && n.error ? p : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
        format: f,
        ...d
      }
    ) : e === "number" ? /* @__PURE__ */ de(
      "div",
      {
        className: `${n != null && n.error ? p : ""} ${s} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ I(
            Ia,
            {
              decimalScale: l,
              onValueChange: (v) => {
                var x;
                return t == null ? void 0 : t.onChange((x = v.value.replace("_", "")) == null ? void 0 : x.toString());
              },
              value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
              ...d,
              ...$a.number
            }
          ),
          o ? /* @__PURE__ */ I("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: o }) : null
        ]
      }
    ) : /* @__PURE__ */ I(
      "input",
      {
        ...t,
        ...d,
        type: e,
        className: `${n != null && n.error ? p : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    /* @__PURE__ */ I("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (n == null ? void 0 : n.error) && ((m = Object.keys(n == null ? void 0 : n.error)) == null ? void 0 : m.length) && /* @__PURE__ */ I(Mr, { error: n == null ? void 0 : n.error }) })
  ] });
}, $o = ({
  children: e,
  className: t
}) => /* @__PURE__ */ I("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), $p = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = be(null);
  return /* @__PURE__ */ I($o, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ I("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ de(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ I("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ I("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, Lr = "-", Ba = (e) => {
  const t = Fa(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Lr);
      return s[0] === "" && s.length !== 1 && s.shift(), Bo(s, t) || La(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, Bo = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Bo(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Lr);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, vn = /^\[(.+)\]$/, La = (e) => {
  if (vn.test(e)) {
    const t = vn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Fa = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ga(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    Er(a, n, i, t);
  }), n;
}, Er = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : yn(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ka(o)) {
        Er(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Er(a, yn(t, i), r, n);
    });
  });
}, yn = (e, t) => {
  let r = e;
  return t.split(Lr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ka = (e) => e.isThemeGetter, Ga = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, Wa = (e) => {
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
}, Lo = "!", ja = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], i = t.length, a = (s) => {
    const c = [];
    let u = 0, f = 0, l;
    for (let m = 0; m < s.length; m++) {
      let v = s[m];
      if (u === 0) {
        if (v === o && (n || s.slice(m, m + i) === t)) {
          c.push(s.slice(f, m)), f = m + i;
          continue;
        }
        if (v === "/") {
          l = m;
          continue;
        }
      }
      v === "[" ? u++ : v === "]" && u--;
    }
    const d = c.length === 0 ? s : s.substring(f), p = d.startsWith(Lo), g = p ? d.substring(1) : d, b = l && l > f ? l - f : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: b
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, Ua = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, za = (e) => ({
  cache: Wa(e.cacheSize),
  parseClassName: ja(e),
  ...Ba(e)
}), Ha = /\s+/, qa = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(Ha);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: f,
      hasImportantModifier: l,
      baseClassName: d,
      maybePostfixModifierPosition: p
    } = r(u);
    let g = !!p, b = n(g ? d.substring(0, p) : d);
    if (!b) {
      if (!g) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (b = n(d), !b) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      g = !1;
    }
    const m = Ua(f).join(":"), v = l ? m + Lo : m, x = v + b;
    if (i.includes(x))
      continue;
    i.push(x);
    const w = o(b, g);
    for (let E = 0; E < w.length; ++E) {
      const y = w[E];
      i.push(v + y);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Ya() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Fo(t)) && (n && (n += " "), n += r);
  return n;
}
const Fo = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Fo(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Ka(e, ...t) {
  let r, n, o, i = a;
  function a(c) {
    const u = t.reduce((f, l) => l(f), e());
    return r = za(u), n = r.cache.get, o = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const f = qa(c, r);
    return o(c, f), f;
  }
  return function() {
    return i(Ya.apply(null, arguments));
  };
}
const re = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, ko = /^\[(?:([a-z-]+):)?(.+)\]$/i, Xa = /^\d+\/\d+$/, Ja = /* @__PURE__ */ new Set(["px", "full", "screen"]), Za = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qa = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, es = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ts = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (e) => et(e) || Ja.has(e) || Xa.test(e), Le = (e) => ot(e, "length", us), et = (e) => !!e && !Number.isNaN(Number(e)), er = (e) => ot(e, "number", et), st = (e) => !!e && Number.isInteger(Number(e)), ns = (e) => e.endsWith("%") && et(e.slice(0, -1)), $ = (e) => ko.test(e), Fe = (e) => Za.test(e), os = /* @__PURE__ */ new Set(["length", "size", "percentage"]), is = (e) => ot(e, os, Go), as = (e) => ot(e, "position", Go), ss = /* @__PURE__ */ new Set(["image", "url"]), cs = (e) => ot(e, ss, fs), ls = (e) => ot(e, "", ds), ct = () => !0, ot = (e, t, r) => {
  const n = ko.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, us = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Qa.test(e) && !es.test(e)
), Go = () => !1, ds = (e) => ts.test(e), fs = (e) => rs.test(e), ps = () => {
  const e = re("colors"), t = re("spacing"), r = re("blur"), n = re("brightness"), o = re("borderColor"), i = re("borderRadius"), a = re("borderSpacing"), s = re("borderWidth"), c = re("contrast"), u = re("grayscale"), f = re("hueRotate"), l = re("invert"), d = re("gap"), p = re("gradientColorStops"), g = re("gradientColorStopPositions"), b = re("inset"), m = re("margin"), v = re("opacity"), x = re("padding"), w = re("saturate"), E = re("scale"), y = re("sepia"), D = re("skew"), O = re("space"), N = re("translate"), G = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", $, t], A = () => [$, t], Q = () => ["", Ve, Le], ae = () => ["auto", et, $], ie = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", $], J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [et, $];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ct],
      spacing: [Ve, Le],
      blur: ["none", "", Fe, $],
      brightness: F(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Fe, $],
      borderSpacing: A(),
      borderWidth: Q(),
      contrast: F(),
      grayscale: z(),
      hueRotate: F(),
      invert: z(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ns, Le],
      inset: j(),
      margin: j(),
      opacity: F(),
      padding: A(),
      saturate: F(),
      scale: F(),
      sepia: z(),
      skew: F(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", $]
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
        "break-after": J()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": J()
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
        object: [...ie(), $]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: G()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": G()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": G()
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
        z: ["auto", st, $]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: j()
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
        flex: ["1", "auto", "initial", "none", $]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", st, $]
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
          span: ["full", st, $]
        }, $]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ae()
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
          span: [st, $]
        }, $]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ae()
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
        "auto-cols": ["auto", "min", "max", "fr", $]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", $]
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
        justify: ["normal", ...L()]
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
        content: ["normal", ...L(), "baseline"]
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
        "place-content": [...L(), "baseline"]
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
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
        "space-x": [O]
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
        "space-y": [O]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", $, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [$, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [$, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Fe]
        }, Fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [$, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [$, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Fe, Le]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", er]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", et, er]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ve, $]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", $]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", $]
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
        decoration: [...T(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ve, Le]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ve, $]
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
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $]
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
        content: ["none", $]
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
        bg: [...ie(), as]
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
        bg: ["auto", "cover", "contain", is]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, cs]
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
        "border-opacity": [v]
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
        "divide-opacity": [v]
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
        "outline-offset": [Ve, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ve, Le]
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
        ring: Q()
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
        "ring-offset": [Ve, Le]
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
        shadow: ["", "inner", "none", Fe, ls]
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
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...V(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Fe, $]
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
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [y]
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
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [y]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", $]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", $]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [st, $]
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
        "skew-x": [D]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [D]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        "will-change": ["auto", "scroll", "contents", "transform", $]
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
        stroke: [Ve, Le, er]
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
}, ms = /* @__PURE__ */ Ka(ps);
function Wo(e, t) {
  const [r, n] = be(e);
  return se(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const Bp = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = be(!1), [a, s] = be(""), c = Wo(a, 100), u = H(null);
  se(() => {
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
  return /* @__PURE__ */ de("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ de("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ I(
        mt,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ I(
        "input",
        {
          ...n,
          ref: u,
          className: ms(
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
    o && /* @__PURE__ */ I("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(c.toLowerCase())
    ).map((l) => {
      var d;
      return /* @__PURE__ */ I(
        "li",
        {
          onClick: () => f(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ de("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ I(mt, { name: l.icon }),
            /* @__PURE__ */ I(
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
}, Lp = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = be(r), s = Wo(i, 300);
  return se(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ de("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ I(
      mt,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ I(
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
}, Fp = ({
  placeholder: e,
  options: t,
  className: r,
  field: n,
  fieldState: o,
  labelClassName: i,
  parentClassName: a,
  formState: s,
  label: c,
  ...u
}) => /* @__PURE__ */ de("label", { children: [
  c && /* @__PURE__ */ I("span", { className: `text-primary ${i}`, children: c }),
  /* @__PURE__ */ I(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ de(
        "select",
        {
          ...n,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ I("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((f, l) => /* @__PURE__ */ I("option", { value: f.value, className: "text-black", children: f.label }, l))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ I(Mr, { error: o == null ? void 0 : o.error })
] });
function bt(e) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bt(e);
}
function gs(e, t) {
  if (bt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (bt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bs(e) {
  var t = gs(e, "string");
  return bt(t) == "symbol" ? t : t + "";
}
function hs(e, t, r) {
  return (t = bs(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function xn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function En(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xn(Object(r), !0).forEach(function(n) {
      hs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ge(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var wn = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), tr = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Dn = {
  INIT: "@@redux/INIT" + tr(),
  REPLACE: "@@redux/REPLACE" + tr(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + tr();
  }
};
function vs(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ys(e) {
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
  if (ws(e)) return "date";
  if (Es(e)) return "error";
  var r = xs(e);
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
function xs(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Es(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ws(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function He(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = ys(e)), t;
}
function jo(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(1) : "Expected the enhancer to be a function. Instead, received: '" + He(r) + "'");
    return r(jo)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(2) : "Expected the root reducer to be a function. Instead, received: '" + He(e) + "'");
  var o = e, i = t, a = [], s = a, c = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? ge(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function l(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(4) : "Expected the listener to be a function. Instead, received: '" + He(b) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? ge(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return u(), s.push(b), function() {
      if (m) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? ge(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, u();
        var x = s.indexOf(b);
        s.splice(x, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!vs(b))
      throw new Error(process.env.NODE_ENV === "production" ? ge(7) : "Actions must be plain objects. Instead, the actual type was: '" + He(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? ge(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? ge(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = o(i, b);
    } finally {
      c = !1;
    }
    for (var m = a = s, v = 0; v < m.length; v++) {
      var x = m[v];
      x();
    }
    return b;
  }
  function p(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(10) : "Expected the nextReducer to be a function. Instead, received: '" + He(b));
    o = b, d({
      type: Dn.REPLACE
    });
  }
  function g() {
    var b, m = l;
    return b = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error(process.env.NODE_ENV === "production" ? ge(11) : "Expected the observer to be an object. Instead, received: '" + He(x) + "'");
        function w() {
          x.next && x.next(f());
        }
        w();
        var E = m(w);
        return {
          unsubscribe: E
        };
      }
    }, b[wn] = function() {
      return this;
    }, b;
  }
  return d({
    type: Dn.INIT
  }), n = {
    dispatch: d,
    subscribe: l,
    getState: f,
    replaceReducer: p
  }, n[wn] = g, n;
}
function Nn(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Sn(e, t) {
  if (typeof e == "function")
    return Nn(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? ge(16) : "bindActionCreators expected an object or a function, but instead received: '" + He(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = Nn(o, t));
  }
  return r;
}
function Uo() {
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
function Ds() {
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
      }, s = t.map(function(c) {
        return c(a);
      });
      return i = Uo.apply(void 0, s)(o.dispatch), En(En({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wr = { exports: {} }, rr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function Ss() {
  if (Cn) return rr;
  Cn = 1;
  var e = B;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var p = d(), g = n({ inst: { value: p, getSnapshot: d } }), b = g[0].inst, m = g[1];
    return i(
      function() {
        b.value = p, b.getSnapshot = d, c(b) && m({ inst: b });
      },
      [l, p, d]
    ), o(
      function() {
        return c(b) && m({ inst: b }), l(function() {
          c(b) && m({ inst: b });
        });
      },
      [l]
    ), a(p), p;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var p = d();
      return !r(l, p);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return rr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, rr;
}
var nr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function Cs() {
  return On || (On = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p, g) {
      return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
    }
    function t(p, g) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = g();
      if (!l) {
        var m = g();
        i(b, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      m = a({
        inst: { value: b, getSnapshot: g }
      });
      var v = m[0].inst, x = m[1];
      return c(
        function() {
          v.value = b, v.getSnapshot = g, r(v) && x({ inst: v });
        },
        [p, b, g]
      ), s(
        function() {
          return r(v) && x({ inst: v }), p(function() {
            r(v) && x({ inst: v });
          });
        },
        [p]
      ), u(b), b;
    }
    function r(p) {
      var g = p.getSnapshot;
      p = p.value;
      try {
        var b = g();
        return !i(p, b);
      } catch {
        return !0;
      }
    }
    function n(p, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = B, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, c = o.useLayoutEffect, u = o.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    nr.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), nr;
}
process.env.NODE_ENV === "production" ? wr.exports = Ss() : wr.exports = Cs();
var Fr = wr.exports, or = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Os() {
  if (In) return or;
  In = 1;
  var e = B, t = Fr;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return or.useSyncExternalStoreWithSelector = function(u, f, l, d, p) {
    var g = i(null);
    if (g.current === null) {
      var b = { hasValue: !1, value: null };
      g.current = b;
    } else b = g.current;
    g = s(
      function() {
        function v(D) {
          if (!x) {
            if (x = !0, w = D, D = d(D), p !== void 0 && b.hasValue) {
              var O = b.value;
              if (p(O, D))
                return E = O;
            }
            return E = D;
          }
          if (O = E, n(w, D)) return O;
          var N = d(D);
          return p !== void 0 && p(O, N) ? (w = D, O) : (w = D, E = N);
        }
        var x = !1, w, E, y = l === void 0 ? null : l;
        return [
          function() {
            return v(f());
          },
          y === null ? void 0 : function() {
            return v(y());
          }
        ];
      },
      [f, l, d, p]
    );
    var m = o(u, g[0], g[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = m;
      },
      [m]
    ), c(m), m;
  }, or;
}
var ir = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function Is() {
  return An || (An = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = B, r = Fr, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    ir.useSyncExternalStoreWithSelector = function(u, f, l, d, p) {
      var g = i(null);
      if (g.current === null) {
        var b = { hasValue: !1, value: null };
        g.current = b;
      } else b = g.current;
      g = s(
        function() {
          function v(D) {
            if (!x) {
              if (x = !0, w = D, D = d(D), p !== void 0 && b.hasValue) {
                var O = b.value;
                if (p(O, D))
                  return E = O;
              }
              return E = D;
            }
            if (O = E, n(w, D))
              return O;
            var N = d(D);
            return p !== void 0 && p(O, N) ? (w = D, O) : (w = D, E = N);
          }
          var x = !1, w, E, y = l === void 0 ? null : l;
          return [
            function() {
              return v(f());
            },
            y === null ? void 0 : function() {
              return v(y());
            }
          ];
        },
        [f, l, d, p]
      );
      var m = o(u, g[0], g[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = m;
        },
        [m]
      ), c(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ir;
}
process.env.NODE_ENV === "production" ? Os() : Is();
function As(e) {
  e();
}
let zo = As;
const _s = (e) => zo = e, Ps = () => zo, _n = Symbol.for("react-redux-context"), Pn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Rs() {
  var e;
  if (!W.createContext) return {};
  const t = (e = Pn[_n]) != null ? e : Pn[_n] = /* @__PURE__ */ new Map();
  let r = t.get(W.createContext);
  return r || (r = W.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(W.createContext, r)), r;
}
const Ho = /* @__PURE__ */ Rs(), Ts = () => {
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
function qo(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Dr = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Vs() {
  if (Rn) return q;
  Rn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var D = y.$$typeof;
      switch (D) {
        case t:
          switch (y = y.type, y) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case l:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case f:
                case g:
                case p:
                case a:
                  return y;
                default:
                  return D;
              }
          }
        case r:
          return D;
      }
    }
  }
  function E(y) {
    return w(y) === u;
  }
  return q.AsyncMode = c, q.ConcurrentMode = u, q.ContextConsumer = s, q.ContextProvider = a, q.Element = t, q.ForwardRef = f, q.Fragment = n, q.Lazy = g, q.Memo = p, q.Portal = r, q.Profiler = i, q.StrictMode = o, q.Suspense = l, q.isAsyncMode = function(y) {
    return E(y) || w(y) === c;
  }, q.isConcurrentMode = E, q.isContextConsumer = function(y) {
    return w(y) === s;
  }, q.isContextProvider = function(y) {
    return w(y) === a;
  }, q.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, q.isForwardRef = function(y) {
    return w(y) === f;
  }, q.isFragment = function(y) {
    return w(y) === n;
  }, q.isLazy = function(y) {
    return w(y) === g;
  }, q.isMemo = function(y) {
    return w(y) === p;
  }, q.isPortal = function(y) {
    return w(y) === r;
  }, q.isProfiler = function(y) {
    return w(y) === i;
  }, q.isStrictMode = function(y) {
    return w(y) === o;
  }, q.isSuspense = function(y) {
    return w(y) === l;
  }, q.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === i || y === o || y === l || y === d || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === p || y.$$typeof === a || y.$$typeof === s || y.$$typeof === f || y.$$typeof === m || y.$$typeof === v || y.$$typeof === x || y.$$typeof === b);
  }, q.typeOf = w, q;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function Ms() {
  return Tn || (Tn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function w(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === l || S === d || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === p || S.$$typeof === a || S.$$typeof === s || S.$$typeof === f || S.$$typeof === m || S.$$typeof === v || S.$$typeof === x || S.$$typeof === b);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var ve = S.$$typeof;
        switch (ve) {
          case t:
            var _ = S.type;
            switch (_) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case l:
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
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var y = c, D = u, O = s, N = a, G = t, M = f, j = n, A = g, Q = p, ae = r, ie = i, T = o, V = l, L = !1;
    function z(S) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), J(S) || E(S) === c;
    }
    function J(S) {
      return E(S) === u;
    }
    function F(S) {
      return E(S) === s;
    }
    function te(S) {
      return E(S) === a;
    }
    function fe(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Oe(S) {
      return E(S) === f;
    }
    function he(S) {
      return E(S) === n;
    }
    function we(S) {
      return E(S) === g;
    }
    function Ie(S) {
      return E(S) === p;
    }
    function _e(S) {
      return E(S) === r;
    }
    function Ae(S) {
      return E(S) === i;
    }
    function Pe(S) {
      return E(S) === o;
    }
    function Ze(S) {
      return E(S) === l;
    }
    Y.AsyncMode = y, Y.ConcurrentMode = D, Y.ContextConsumer = O, Y.ContextProvider = N, Y.Element = G, Y.ForwardRef = M, Y.Fragment = j, Y.Lazy = A, Y.Memo = Q, Y.Portal = ae, Y.Profiler = ie, Y.StrictMode = T, Y.Suspense = V, Y.isAsyncMode = z, Y.isConcurrentMode = J, Y.isContextConsumer = F, Y.isContextProvider = te, Y.isElement = fe, Y.isForwardRef = Oe, Y.isFragment = he, Y.isLazy = we, Y.isMemo = Ie, Y.isPortal = _e, Y.isProfiler = Ae, Y.isStrictMode = Pe, Y.isSuspense = Ze, Y.isValidElementType = w, Y.typeOf = E;
  }()), Y;
}
process.env.NODE_ENV === "production" ? Dr.exports = Vs() : Dr.exports = Ms();
var $s = Dr.exports, kr = $s, Bs = {
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
}, Ls = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Fs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gr = {};
Gr[kr.ForwardRef] = Fs;
Gr[kr.Memo] = Yo;
function Vn(e) {
  return kr.isMemo(e) ? Yo : Gr[e.$$typeof] || Bs;
}
var ks = Object.defineProperty, Gs = Object.getOwnPropertyNames, Mn = Object.getOwnPropertySymbols, Ws = Object.getOwnPropertyDescriptor, js = Object.getPrototypeOf, $n = Object.prototype;
function Ko(e, t, r) {
  if (typeof t != "string") {
    if ($n) {
      var n = js(t);
      n && n !== $n && Ko(e, n, r);
    }
    var o = Gs(t);
    Mn && (o = o.concat(Mn(t)));
    for (var i = Vn(e), a = Vn(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!Ls[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = Ws(t, c);
        try {
          ks(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Us = Ko;
const Bn = /* @__PURE__ */ Ns(Us);
var Nr = { exports: {} }, K = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function zs() {
  if (Ln) return K;
  Ln = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var v = m.$$typeof;
      switch (v) {
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return K.ContextConsumer = a, K.ContextProvider = i, K.Element = e, K.ForwardRef = c, K.Fragment = r, K.Lazy = d, K.Memo = l, K.Portal = t, K.Profiler = o, K.StrictMode = n, K.Suspense = u, K.SuspenseList = f, K.isAsyncMode = function() {
    return !1;
  }, K.isConcurrentMode = function() {
    return !1;
  }, K.isContextConsumer = function(m) {
    return b(m) === a;
  }, K.isContextProvider = function(m) {
    return b(m) === i;
  }, K.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, K.isForwardRef = function(m) {
    return b(m) === c;
  }, K.isFragment = function(m) {
    return b(m) === r;
  }, K.isLazy = function(m) {
    return b(m) === d;
  }, K.isMemo = function(m) {
    return b(m) === l;
  }, K.isPortal = function(m) {
    return b(m) === t;
  }, K.isProfiler = function(m) {
    return b(m) === o;
  }, K.isStrictMode = function(m) {
    return b(m) === n;
  }, K.isSuspense = function(m) {
    return b(m) === u;
  }, K.isSuspenseList = function(m) {
    return b(m) === f;
  }, K.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === l || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === g || m.getModuleId !== void 0);
  }, K.typeOf = b, K;
}
var X = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function Hs() {
  return Fn || (Fn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, b = !1, m = !1, v = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function E(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === r || _ === o || x || _ === n || _ === u || _ === f || v || _ === p || g || b || m || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === l || _.$$typeof === i || _.$$typeof === a || _.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === w || _.getModuleId !== void 0));
    }
    function y(_) {
      if (typeof _ == "object" && _ !== null) {
        var Re = _.$$typeof;
        switch (Re) {
          case e:
            var Qe = _.type;
            switch (Qe) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return Qe;
              default:
                var C = Qe && Qe.$$typeof;
                switch (C) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return C;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var D = a, O = i, N = e, G = c, M = r, j = d, A = l, Q = t, ae = o, ie = n, T = u, V = f, L = !1, z = !1;
    function J(_) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(_) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(_) {
      return y(_) === a;
    }
    function fe(_) {
      return y(_) === i;
    }
    function Oe(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function he(_) {
      return y(_) === c;
    }
    function we(_) {
      return y(_) === r;
    }
    function Ie(_) {
      return y(_) === d;
    }
    function _e(_) {
      return y(_) === l;
    }
    function Ae(_) {
      return y(_) === t;
    }
    function Pe(_) {
      return y(_) === o;
    }
    function Ze(_) {
      return y(_) === n;
    }
    function S(_) {
      return y(_) === u;
    }
    function ve(_) {
      return y(_) === f;
    }
    X.ContextConsumer = D, X.ContextProvider = O, X.Element = N, X.ForwardRef = G, X.Fragment = M, X.Lazy = j, X.Memo = A, X.Portal = Q, X.Profiler = ae, X.StrictMode = ie, X.Suspense = T, X.SuspenseList = V, X.isAsyncMode = J, X.isConcurrentMode = F, X.isContextConsumer = te, X.isContextProvider = fe, X.isElement = Oe, X.isForwardRef = he, X.isFragment = we, X.isLazy = Ie, X.isMemo = _e, X.isPortal = Ae, X.isProfiler = Pe, X.isStrictMode = Ze, X.isSuspense = S, X.isSuspenseList = ve, X.isValidElementType = E, X.typeOf = y;
  }()), X;
}
process.env.NODE_ENV === "production" ? Nr.exports = zs() : Nr.exports = Hs();
var kn = Nr.exports;
function Wr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ar(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Wr(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function qs(e, t, r) {
  ar(e, "mapStateToProps"), ar(t, "mapDispatchToProps"), ar(r, "mergeProps");
}
const Ys = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Ks(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function p(x, w) {
    return c = x, u = w, f = e(c, u), l = t(n, u), d = r(f, l, u), s = !0, d;
  }
  function g() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function m() {
    const x = e(c, u), w = !a(x, f);
    return f = x, w && (d = r(f, l, u)), d;
  }
  function v(x, w) {
    const E = !i(w, u), y = !o(x, c, w, u);
    return c = x, u = w, E && y ? g() : E ? b() : y ? m() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : p(w, E);
  };
}
function Xs(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = qo(t, Ys);
  const a = r(e, i), s = n(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && qs(a, s, c), Ks(a, s, c, e, i);
}
function Js(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function Zs(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Xo(e, t, r) {
  Zs(e) || Wr(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Sr(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Gn(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Jo(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Gn(e);
      let u = i(s, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Gn(u), u = i(s, c)), process.env.NODE_ENV !== "production" && Xo(u, o, t), u;
    }, i;
  };
}
function jr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Qs(e) {
  return e && typeof e == "object" ? Sr((t) => (
    // @ts-ignore
    Js(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Jo(e, "mapDispatchToProps")
  ) : jr(e, "mapDispatchToProps") : Sr((t) => ({
    dispatch: t
  }));
}
function ec(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Jo(e, "mapStateToProps")
  ) : jr(e, "mapStateToProps") : Sr(() => ({}));
}
function tc(e, t, r) {
  return Ge({}, r, e, t);
}
function rc(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(c, u, f) {
      const l = e(c, u, f);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && Xo(a, n, "mergeProps")), a;
    };
  };
}
function nc(e) {
  return e ? typeof e == "function" ? rc(e) : jr(e, "mergeProps") : () => tc;
}
function oc() {
  const e = Ps();
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
const Wn = {
  notify() {
  },
  get: () => []
};
function Zo(e, t) {
  let r, n = Wn, o = 0, i = !1;
  function a(b) {
    f();
    const m = n.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, m(), l());
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
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = oc());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Wn);
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
const ic = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ft = ic ? W.useLayoutEffect : W.useEffect;
function jn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function sr(e, t) {
  if (jn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !jn(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const ac = ["reactReduxForwardedRef"];
let Qo = Ts;
const sc = (e) => {
  Qo = e;
}, cc = [null, null], lc = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function uc(e, t, r) {
  Ft(() => e(...t), r);
}
function dc(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function fc(e, t, r, n, o, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const p = () => {
    if (l || !s.current)
      return;
    const b = t.getState();
    let m, v;
    try {
      m = n(b, o.current);
    } catch (x) {
      v = x, d = x;
    }
    v || (d = null), m === i.current ? a.current || u() : (i.current = m, c.current = m, a.current = !0, f());
  };
  return r.onStateChange = p, r.trySubscribe(), p(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function pc(e, t) {
  return e === t;
}
let Un = !1;
function ei(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = pc,
  areOwnPropsEqual: i = sr,
  areStatePropsEqual: a = sr,
  areMergedPropsEqual: s = sr,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = Ho
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Un && (Un = !0, Wr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = ec(e), d = Qs(t), p = nc(r), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !kn.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${lc(m)}`);
    const v = m.displayName || m.name || "Component", x = `Connect(${v})`, w = {
      shouldHandleStateChanges: g,
      displayName: x,
      wrappedComponentName: v,
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
    function E(O) {
      const [N, G, M] = W.useMemo(() => {
        const {
          reactReduxForwardedRef: S
        } = O, ve = qo(O, ac);
        return [O.context, S, ve];
      }, [O]), j = W.useMemo(() => N && N.Consumer && // @ts-ignore
      kn.isContextConsumer(/* @__PURE__ */ W.createElement(N.Consumer, null)) ? N : f, [N, f]), A = W.useContext(j), Q = !!O.store && !!O.store.getState && !!O.store.dispatch, ae = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !Q && !ae)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const ie = Q ? O.store : A.store, T = ae ? A.getServerState : ie.getState, V = W.useMemo(() => Xs(ie.dispatch, w), [ie]), [L, z] = W.useMemo(() => {
        if (!g) return cc;
        const S = Zo(ie, Q ? void 0 : A.subscription), ve = S.notifyNestedSubs.bind(S);
        return [S, ve];
      }, [ie, Q, A]), J = W.useMemo(() => Q ? A : Ge({}, A, {
        subscription: L
      }), [Q, A, L]), F = W.useRef(), te = W.useRef(M), fe = W.useRef(), Oe = W.useRef(!1);
      W.useRef(!1);
      const he = W.useRef(!1), we = W.useRef();
      Ft(() => (he.current = !0, () => {
        he.current = !1;
      }), []);
      const Ie = W.useMemo(() => () => fe.current && M === te.current ? fe.current : V(ie.getState(), M), [ie, M]), _e = W.useMemo(() => (ve) => L ? fc(
        g,
        ie,
        L,
        // @ts-ignore
        V,
        te,
        F,
        Oe,
        he,
        fe,
        z,
        ve
      ) : () => {
      }, [L]);
      uc(dc, [te, F, Oe, M, fe, z]);
      let Ae;
      try {
        Ae = Qo(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          _e,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ie,
          T ? () => V(T(), M) : Ie
        );
      } catch (S) {
        throw we.current && (S.message += `
The error may be correlated with this previous error:
${we.current.stack}

`), S;
      }
      Ft(() => {
        we.current = void 0, fe.current = void 0, F.current = Ae;
      });
      const Pe = W.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ W.createElement(m, Ge({}, Ae, {
          ref: G
        }))
      ), [G, m, Ae]);
      return W.useMemo(() => g ? /* @__PURE__ */ W.createElement(j.Provider, {
        value: J
      }, Pe) : Pe, [j, Pe, J]);
    }
    const D = W.memo(E);
    if (D.WrappedComponent = m, D.displayName = E.displayName = x, c) {
      const N = W.forwardRef(function(M, j) {
        return /* @__PURE__ */ W.createElement(D, Ge({}, M, {
          reactReduxForwardedRef: j
        }));
      });
      return N.displayName = x, N.WrappedComponent = m, Bn(N, m);
    }
    return Bn(D, m);
  };
}
function mc({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = W.useMemo(() => {
    const u = Zo(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = W.useMemo(() => e.getState(), [e]);
  Ft(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || Ho;
  return /* @__PURE__ */ W.createElement(c.Provider, {
    value: a
  }, r);
}
sc(Fr.useSyncExternalStore);
_s(aa);
function gc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function ti(e, t) {
  var r = be(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = H(!0), o = H(r), i = n.current || !!(t && o.current.inputs && gc(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return se(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function bc(e, t) {
  return ti(function() {
    return e;
  }, t);
}
var U = ti, P = bc, hc = process.env.NODE_ENV === "production", cr = "Invariant failed";
function zn(e, t) {
  if (hc)
    throw new Error(cr);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(cr, ": ").concat(r) : cr;
  throw new Error(n);
}
var Ce = function(t) {
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
}, Ur = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Hn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, vc = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, lr = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, zr = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? lr : n, i = t.border, a = i === void 0 ? lr : i, s = t.padding, c = s === void 0 ? lr : s, u = Ce(Ur(r, o)), f = Ce(Hn(r, a)), l = Ce(Hn(f, c));
  return {
    marginBox: u,
    borderBox: Ce(r),
    paddingBox: f,
    contentBox: l,
    margin: o,
    border: a,
    padding: c
  };
}, De = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? zn(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : zn()), o;
}, yc = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, kt = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = vc(n, r);
  return zr({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Gt = function(t, r) {
  return r === void 0 && (r = yc()), kt(t, r);
}, ri = function(t, r) {
  var n = {
    top: De(r.marginTop),
    right: De(r.marginRight),
    bottom: De(r.marginBottom),
    left: De(r.marginLeft)
  }, o = {
    top: De(r.paddingTop),
    right: De(r.paddingRight),
    bottom: De(r.paddingBottom),
    left: De(r.paddingLeft)
  }, i = {
    top: De(r.borderTopWidth),
    right: De(r.borderRightWidth),
    bottom: De(r.borderBottomWidth),
    left: De(r.borderLeftWidth)
  };
  return zr({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, ni = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return ri(r, n);
}, qn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function xc(e, t) {
  return !!(e === t || qn(e) && qn(t));
}
function Ec(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!xc(e[r], t[r]))
      return !1;
  return !0;
}
function ce(e, t) {
  t === void 0 && (t = Ec);
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
var ht = function(t) {
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
const wc = process.env.NODE_ENV === "production", Dc = /[ \t]{2,}/g, Nc = /^[ \t]*/gm, Yn = (e) => e.replace(Dc, " ").replace(Nc, "").trim(), Sc = (e) => Yn(`
  %c@hello-pangea/dnd

  %c${Yn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Cc = (e) => [Sc(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Oc = "__@hello-pangea/dnd-disable-dev-warnings";
function oi(e, t) {
  wc || typeof window < "u" && window[Oc] || console[e](...Cc(t));
}
const ee = oi.bind(null, "warn"), Cr = oi.bind(null, "error");
function We() {
}
function Ic(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ne(e, t, r) {
  const n = t.map((o) => {
    const i = Ic(r, o.options);
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
const Ac = process.env.NODE_ENV === "production", Kn = "Invariant failed";
class vt extends Error {
}
vt.prototype.toString = function() {
  return this.message;
};
function h(e, t) {
  throw Ac ? new vt(Kn) : new vt(`${Kn}: ${t || ""}`);
}
class _c extends B.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = We, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && ee(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof vt && (r.preventDefault(), process.env.NODE_ENV !== "production" && Cr(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Ne(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof vt) {
      process.env.NODE_ENV !== "production" && Cr(t.message), this.setState({});
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
const Pc = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Wt = (e) => e + 1, Rc = (e) => `
  You have lifted an item in position ${Wt(e.source.index)}
`, ii = (e, t) => {
  const r = e.droppableId === t.droppableId, n = Wt(e.index), o = Wt(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, ai = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Tc = (e) => {
  const t = e.destination;
  if (t)
    return ii(e.source, t);
  const r = e.combine;
  return r ? ai(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Xn = (e) => `
  The item has returned to its starting position
  of ${Wt(e.index)}
`, Vc = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Xn(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${ii(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${ai(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Xn(e.source)}
  `;
}, Mc = {
  dragHandleUsageInstructions: Pc,
  onDragStart: Rc,
  onDragUpdate: Tc,
  onDragEnd: Vc
};
var $t = Mc;
const le = {
  x: 0,
  y: 0
}, ue = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), ye = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), je = (e, t) => e.x === t.x && e.y === t.y, it = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Xe = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, yt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Jn = (e, t) => Math.min(...t.map((r) => yt(e, r))), si = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var $c = (e, t) => {
  const r = Ce({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Ct = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Zn = (e) => [{
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
}], Bc = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Lc = (e, t) => t ? Ct(e, t.scroll.diff.displacement) : e, Fc = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, kc = (e, t) => t && t.shouldClipSubject ? $c(t.pageMarginBox, e) : Ce(e);
var tt = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Lc(e.marginBox, n), i = Fc(o, r, t), a = kc(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Hr = (e, t) => {
  e.frame || (process.env.NODE_ENV, h());
  const r = e.frame, n = ye(t, r.scroll.initial), o = it(n), i = {
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
const ci = ce((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), li = ce((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Ht = ce((e) => Object.values(e)), Gc = ce((e) => Object.values(e));
var Je = ce((e, t) => Gc(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function qr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function qt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Yt = ce((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Wc = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !qr(o))
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
  const u = Yt(t, n);
  if (!c) {
    if (!u.length)
      return null;
    const p = u[u.length - 1];
    return a(p.descriptor.id);
  }
  const f = u.findIndex((p) => p.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Could not find displaced item in set") : h());
  const l = f - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return a(d.descriptor.id);
}, at = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const ui = {
  point: le,
  value: 0
}, xt = {
  invisible: {},
  visible: {},
  all: []
}, jc = {
  displaced: xt,
  displacedBy: ui,
  at: null
};
var Uc = jc, Se = (e, t) => (r) => e <= r && r <= t, di = (e) => {
  const t = Se(e.top, e.bottom), r = Se(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const c = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return c && u ? !0 : c && a || u && i;
  };
}, zc = (e) => {
  const t = Se(e.top, e.bottom), r = Se(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Yr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, fi = {
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
var Hc = (e) => (t) => {
  const r = Se(t.top, t.bottom), n = Se(t.left, t.right);
  return (o) => e === Yr ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const qc = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : le;
  return Ct(e, r);
}, Yc = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, Kc = (e, t, r) => r(t)(e), Kr = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? qc(e, t) : e;
  return Yc(i, t, o) && Kc(i, r, o);
}, Xc = (e) => Kr({
  ...e,
  isVisibleThroughFrameFn: di
}), pi = (e) => Kr({
  ...e,
  isVisibleThroughFrameFn: zc
}), Jc = (e) => Kr({
  ...e,
  isVisibleThroughFrameFn: Hc(e.destination.axis)
}), Zc = (e, t, r) => {
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
function Qc(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Ce(Ur(r, n));
}
function Et({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, c) {
    const u = Qc(c, r), f = c.descriptor.id;
    if (s.all.push(f), !Xc({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const d = Zc(f, i, o), p = {
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
function el(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Qn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = el(e, {
    inHomeList: t
  });
  return {
    displaced: xt,
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
function jt({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const c = at(e, r);
  if (a == null)
    return Qn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((g) => g.descriptor.index === a);
  if (!u)
    return Qn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const f = Yt(e, t), l = t.indexOf(u), d = f.slice(l);
  return {
    displaced: Et({
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
function Ue(e, t) {
  return !!t.effected[e];
}
var tl = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return Ue(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, rl = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, nl = ({
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
  if (u || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot move in direction without previous impact location") : h()), u.type === "REORDER") {
    const l = rl({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return l == null ? null : jt({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const f = tl({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: c
  });
  return f == null ? null : jt({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, ol = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return Ue(r, t) ? o ? le : it(n.point) : o ? n.point : le;
}, il = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = qt(t);
  n || (process.env.NODE_ENV, h());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = ol({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return ue(i, a);
};
const mi = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, al = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Xr = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, eo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Xe(e.line, t.marginBox[e.end] + mi(e, r), Xr(e, t.marginBox, r)), to = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Xe(e.line, t.marginBox[e.start] - al(e, r), Xr(e, t.marginBox, r)), sl = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Xe(e.line, t.contentBox[e.start] + mi(e, r), Xr(e, t.contentBox, r));
var cl = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = Je(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return sl({
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
    if (Ue(f, o))
      return to({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const p = kt(d.page, u.point);
    return to({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Ue(l.descriptor.id, o)) {
    const d = kt(l.page, it(o.displacedBy.point));
    return eo({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return eo({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, Or = (e, t) => {
  const r = e.frame;
  return r ? ue(t, r.scroll.diff.displacement) : t;
};
const ll = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? cl({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : il({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Kt = (e) => {
  const t = ll(e), r = e.droppable;
  return r ? Or(r, t) : t;
}, gi = (e, t) => {
  const r = ye(t, e.scroll.initial), n = it(r);
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
function ro(e, t) {
  return e.map((r) => t[r]);
}
function ul(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var dl = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = gi(t, ue(t.scroll.current, o)), a = r.frame ? Hr(r, ue(r.frame.scroll.current, o)) : r, s = e.displaced, c = Et({
    afterDragging: ro(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Et({
    afterDragging: ro(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [s, c, u];
  return s.all.forEach((g) => {
    const b = ul(g, d);
    if (b) {
      l[g] = b;
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
}, fl = (e, t) => ue(e.scroll.diff.displacement, t), Jr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = fl(r, e), o = ye(n, t.page.borderBox.center);
  return ue(t.client.borderBox.center, o);
}, bi = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = ye(r, e.page.borderBox.center), c = {
    target: Ct(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? Jc(c) : pi(c);
}, pl = ({
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
  const u = Je(r.descriptor.id, n), f = at(t, r), l = Wc({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || nl({
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
  const d = Kt({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: c
  });
  if (bi({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Jr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const g = ye(d, a), b = dl({
    impact: l,
    viewport: i,
    destination: r,
    draggables: n,
    maxScrollChange: g
  });
  return {
    clientSelection: s,
    impact: b,
    scrollJumpRequest: g
  };
};
const pe = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get clipped area from droppable") : h()), t;
};
var ml = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Se(i[a.start], i[a.end]), c = Ht(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => di(o.frame)(pe(f))).filter((f) => {
    const l = pe(f);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const l = pe(f), d = Se(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((f, l) => {
    const d = pe(f)[a.crossAxisStart], p = pe(l)[a.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, l, d) => pe(f)[a.crossAxisStart] === pe(d[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((f) => Se(pe(f)[a.start], pe(f)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((f, l) => pe(f)[a.start] - pe(l)[a.start])[0] : c.sort((f, l) => {
    const d = Jn(t, Zn(pe(f))), p = Jn(t, Zn(pe(l)));
    return d !== p ? d - p : pe(f)[a.start] - pe(l)[a.start];
  })[0];
};
const no = (e, t) => {
  const r = e.page.borderBox.center;
  return Ue(e.descriptor.id, t) ? ye(r, t.displacedBy.point) : r;
}, gl = (e, t) => {
  const r = e.page.borderBox;
  return Ue(e.descriptor.id, t) ? Ct(r, it(t.displacedBy.point)) : r;
};
var bl = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => pi({
  target: gl(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = yt(e, Or(r, no(a, o))), u = yt(e, Or(r, no(s, o)));
  return c < u ? -1 : u < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Ot = ce(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: Xe(t.line, n)
  };
});
const hl = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return Xe(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = Je(e.descriptor.id, r).reduce((u, f) => u + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : Xe(n.line, c);
}, hi = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), vi = (e, t, r) => {
  const n = e.frame;
  at(t, e) && (process.env.NODE_ENV !== "production" ? h(!1, "Should not add placeholder space to home list") : h()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot add placeholder size to a subject when it already has one") : h());
  const o = Ot(e.axis, t.displaceBy).point, i = hl(e, o, r), a = {
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
  const s = i ? ue(n.scroll.max, i) : n.scroll.max, c = hi(n, s), u = tt({
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
}, vl = (e) => {
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
  const o = hi(r, n), i = tt({
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
var yl = ({
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
      displaced: xt,
      displacedBy: ui,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = Kt({
      impact: l,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), p = at(n, i) ? i : vi(i, n, o);
    return bi({
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
  })(), f = Ot(i.axis, n.displaceBy);
  return jt({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: xt,
    index: u
  });
}, xl = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = ml({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const u = Je(c.descriptor.id, o), f = bl({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }), l = yl({
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
  const d = Kt({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Jr({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, xe = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const El = (e, t) => {
  const r = xe(e);
  return r ? t[r] : null;
};
var wl = ({
  state: e,
  type: t
}) => {
  const r = El(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return s ? pl({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : xl({
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
function qe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function yi(e) {
  const t = Se(e.top, e.bottom), r = Se(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Dl(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Nl({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = Xe(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: yt(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Sl({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Ht(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Dl(e, i))
      return !1;
    if (yi(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], u = e[a.crossAxisEnd], f = Se(i[a.crossAxisStart], i[a.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Nl({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const xi = (e, t) => Ce(Ct(e, t));
var Cl = (e, t) => {
  const r = e.frame;
  return r ? xi(t, r.scroll.diff.value) : t;
};
function Ei({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Ol({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Il = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = Ot(r.axis, t.displaceBy), u = c.value, f = e[s.start], l = e[s.end], p = Yt(t, n).find((b) => {
    const m = b.descriptor.id, v = b.page.borderBox.center[s.line], x = Ue(m, a), w = Ei({
      displaced: o,
      id: m
    });
    return x ? w ? l <= v : f < v - u : w ? l <= v + u : f < v;
  }) || null, g = Ol({
    draggable: t,
    closest: p,
    inHomeList: at(t, r)
  });
  return jt({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: c,
    index: g
  });
};
const Al = 4;
var _l = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Ot(n.axis, e.displaceBy), c = s.value, u = t[a.start], f = t[a.end], d = Yt(e, o).find((g) => {
    const b = g.descriptor.id, m = g.page.borderBox, x = m[a.size] / Al, w = Ue(b, i), E = Ei({
      displaced: r.displaced,
      id: b
    });
    return w ? E ? f > m[a.start] + x && f < m[a.end] - x : u > m[a.start] - c + x && u < m[a.end] - c - x : E ? f > m[a.start] + c + x && f < m[a.end] + c - x : u > m[a.start] + x && u < m[a.end] - x;
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
}, wi = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = xi(t.page.borderBox, e), c = Sl({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!c)
    return Uc;
  const u = n[c], f = Je(u.descriptor.id, r), l = Cl(u, s);
  return _l({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: f,
    afterCritical: a
  }) || Il({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, Zr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Pl = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = xe(e), o = xe(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = vl(i);
  return Zr(r, a);
};
var Rl = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Pl({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = xe(o);
  if (!a)
    return i;
  const s = r[a];
  if (at(e, s) || s.subject.withPlaceholder)
    return i;
  const c = vi(s, e, t);
  return Zr(i, c);
}, ft = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, c = t || e.current.client.selection, u = ye(c, e.initial.client.selection), f = {
    offset: u,
    selection: c,
    borderBoxCenter: ue(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: ue(f.selection, a.scroll.current),
    borderBoxCenter: ue(f.borderBoxCenter, a.scroll.current),
    offset: ue(f.offset, a.scroll.diff.value)
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
  const p = s.draggables[e.critical.draggable.id], g = o || wi({
    pageOffset: l.offset,
    draggable: p,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = Rl({
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
      droppables: b
    },
    impact: g,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Tl(e, t) {
  return e.map((r) => t[r]);
}
var Di = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Tl(i.all, r), s = Et({
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
}, Ni = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = Kt({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Jr({
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
  } = i, c = a[e.critical.draggable.id], u = xe(n);
  u || (process.env.NODE_ENV !== "production" ? h(!1, "Must be over a destination in SNAP movement mode") : h());
  const f = s[u], l = Di({
    impact: n,
    viewport: o,
    destination: f,
    draggables: a
  }), d = Ni({
    impact: l,
    draggable: c,
    droppable: f,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return ft({
    impact: l,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Vl = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Ci = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Ot(t.axis, e.displaceBy), i = Je(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Expected draggable to be inside home list") : h());
  const s = i.slice(a + 1), c = s.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: Et({
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
        destination: Vl(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Ml = (e, t) => ({
  draggables: e.draggables,
  droppables: Zr(e.droppables, t)
});
const It = (e) => {
  process.env.NODE_ENV;
}, At = (e) => {
  process.env.NODE_ENV;
};
var $l = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = kt(e.client, t), o = Gt(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, Bl = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Expected Droppable to have a frame") : h()), t;
}, Ll = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Bl(a).scroll.diff.value, u = ue(n, c);
    return $l({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Fl = ({
  state: e,
  published: t
}) => {
  It();
  const r = t.modified.map((v) => {
    const x = e.dimensions.droppables[v.droppableId];
    return Hr(x, v.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...ci(r)
  }, o = li(Ll({
    additions: t.additions,
    updatedDroppables: n,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((v) => {
    delete i[v];
  });
  const a = {
    droppables: n,
    draggables: i
  }, s = xe(e.impact), c = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = Ci({
    draggable: u,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : l, g = wi({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: d
  });
  At();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: g,
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
const Ir = (e) => e.movementMode === "SNAP", ur = (e, t, r) => {
  const n = Ml(e.dimensions, t);
  return !Ir(e) || r ? ft({
    state: e,
    dimensions: n
  }) : Si({
    state: e,
    dimensions: n
  });
};
function dr(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const oo = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var kl = (e = oo, t) => {
  if (t.type === "FLUSH")
    return {
      ...oo,
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
    } = t.payload, s = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: le
    }, f = {
      client: u,
      page: {
        selection: ue(u.selection, o.scroll.initial),
        borderBoxCenter: ue(u.selection, o.scroll.initial),
        offset: ue(u.selection, o.scroll.diff.value)
      }
    }, l = Ht(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = Ci({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, `Collection cannot start from phase ${e.phase}`) : h()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : h()), Fl({
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
    return je(r, e.current.client.selection) ? e : ft({
      state: e,
      clientSelection: r,
      impact: Ir(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return dr(e);
    qe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} not permitted in phase ${e.phase}`) : h());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = Hr(o, n);
    return ur(e, i, !1);
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
    return ur(e, i, !0);
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
    return ur(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot move by window in phase ${e.phase}`) : h()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? h(!1, "Window scrolling is currently not supported for fixed lists") : h());
    const r = t.payload.newScroll;
    if (je(e.viewport.scroll.current, r))
      return dr(e);
    const n = gi(e.viewport, r);
    return Ir(e) ? Si({
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
    if (je(r, e.viewport.scroll.max))
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
    const r = wl({
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
const Gl = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Wl = (e) => ({
  type: "LIFT",
  payload: e
}), jl = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Ul = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), zl = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Hl = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), ql = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Yl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Oi = (e) => ({
  type: "MOVE",
  payload: e
}), Kl = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Xl = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Jl = () => ({
  type: "MOVE_UP",
  payload: null
}), Zl = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Ql = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), eu = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Qr = () => ({
  type: "FLUSH",
  payload: null
}), tu = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), en = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Ii = (e) => ({
  type: "DROP",
  payload: e
}), ru = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ai = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function nu(e) {
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
  process.env.NODE_ENV !== "production" && ee(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function ou(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Je(e.droppable.id, t.draggables);
    nu(r);
  }
}
var iu = (e) => ({
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
  c.phase === "DROP_ANIMATING" && r(en({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase to start a drag") : h()), r(Qr()), r(Gl({
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
  ou(l, d), r(jl({
    critical: l,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: p
  }));
}, au = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const tn = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, wt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, _i = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ze = `${_i.outOfTheWay}s ${tn.outOfTheWay}`, pt = {
  fluid: `opacity ${ze}`,
  snap: `transform ${ze}, opacity ${ze}`,
  drop: (e) => {
    const t = `${e}s ${tn.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ze}`,
  placeholder: `height ${ze}, width ${ze}, margin ${ze}`
}, io = (e) => je(e, le) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ar = {
  moveTo: io,
  drop: (e, t) => {
    const r = io(e);
    if (r)
      return t ? `${r} scale(${wt.scale.drop})` : r;
  }
}, {
  minDropTime: _r,
  maxDropTime: Pi
} = _i, su = Pi - _r, ao = 1500, cu = 0.6;
var lu = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = yt(e, t);
  if (n <= 0)
    return _r;
  if (n >= ao)
    return Pi;
  const o = n / ao, i = _r + su * o, a = r === "CANCEL" ? i * cu : i;
  return Number(a.toFixed(2));
}, uu = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = xe(e), c = s ? a[s] : null, u = a[t.descriptor.droppableId], f = Ni({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return ye(f, t.client.borderBox.center);
}, du = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Di({
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
    displaced: xt
  },
  didDropInsideDroppable: !0
};
const fu = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(ru({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? h(!1, "A DROP action occurred while DROP_PENDING and still waiting") : h()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot drop in phase: ${o.phase}`) : h());
  const s = o.critical, c = o.dimensions, u = c.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: l
  } = du({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = l ? qr(f) : null, p = l ? qt(f) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: p
  }, m = uu({
    impact: f,
    draggable: u,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), v = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: f
  };
  if (!(!je(o.current.client.offset, m) || !!b.combine)) {
    t(en({
      completed: v
    }));
    return;
  }
  const w = lu({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(tu({
    newHomeClientOffset: m,
    dropDuration: w,
    completed: v
  }));
};
var pu = fu, Ri = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function mu(e) {
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
function gu({
  onWindowScroll: e
}) {
  function t() {
    e(Ri());
  }
  const r = ht(t), n = mu(r);
  let o = We;
  function i() {
    return o !== We;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start scroll listener when already active") : h()), o = Ne(window, [n]);
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
const bu = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", hu = (e) => {
  const t = gu({
    onWindowScroll: (r) => {
      e.dispatch(Kl({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && bu(n) && t.stop(), r(n);
  };
};
var vu = hu, yu = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ee("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && ee(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, xu = () => {
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
const Eu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, wu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Du = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, lt = (e, t) => {
  It(), t(), At();
}, Rt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function fr(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = yu(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Nu = (e, t) => {
  const r = xu();
  let n = null;
  const o = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : h()), lt("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: l,
        mode: d
      });
    });
  }, i = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h()), lt("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Rt(l, d));
    });
  }, a = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h());
    const p = Rt(l, d);
    n = {
      mode: d,
      lastCritical: l,
      lastLocation: p.source,
      lastCombine: null
    }, r.add(() => {
      lt("onDragStart", () => fr(e().onDragStart, p, t, $t.onDragStart));
    });
  }, s = (l, d) => {
    const p = qr(d), g = qt(d);
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragMove when onDragStart has not been called") : h());
    const b = !Du(l, n.lastCritical);
    b && (n.lastCritical = l);
    const m = !Eu(n.lastLocation, p);
    m && (n.lastLocation = p);
    const v = !wu(n.lastCombine, g);
    if (v && (n.lastCombine = g), !b && !m && !v)
      return;
    const x = {
      ...Rt(l, n.mode),
      combine: g,
      destination: p
    };
    r.add(() => {
      lt("onDragUpdate", () => fr(e().onDragUpdate, x, t, $t.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Can only flush responders while dragging") : h()), r.flush();
  }, u = (l) => {
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : h()), n = null, lt("onDragEnd", () => fr(e().onDragEnd, l, t, $t.onDragEnd));
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
        ...Rt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, Su = (e, t) => {
  const r = Nu(e, t);
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
const Cu = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot finish a drop animating when no drop is occurring") : h()), e.dispatch(en({
    completed: n.completed
  }));
};
var Ou = Cu;
const Iu = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ai());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = Ne(window, [a]);
    });
  };
};
var Au = Iu, _u = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Pu = (e) => {
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
const Ru = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Tu = (e) => (t) => (r) => (n) => {
  if (Ru(n)) {
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
const Vu = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Ii({
    reason: n.reason
  })));
};
var Mu = Vu;
const $u = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Uo;
var Bu = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => jo(kl, $u(Ds(au(r), _u(e), iu(e), pu, Ou, Au, Mu, Tu(i), vu, Pu(t), Su(n, o))));
const pr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Lu({
  registry: e,
  callbacks: t
}) {
  let r = pr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, It();
      const {
        additions: c,
        removals: u,
        modified: f
      } = r, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(le)).sort((g, b) => g.descriptor.index - b.descriptor.index), d = Object.keys(f).map((g) => {
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
      r = pr(), At(), t.publish(p);
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
      n && (cancelAnimationFrame(n), n = null, r = pr());
    }
  };
}
var Ti = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = ye({
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
}, Vi = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.documentElement") : h()), e;
}, Mi = () => {
  const e = Vi();
  return Ti({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Fu = () => {
  const e = Ri(), t = Mi(), r = e.y, n = e.x, o = Vi(), i = o.clientWidth, a = o.clientHeight, s = n + i, c = r + a;
  return {
    frame: Ce({
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
        value: le,
        displacement: le
      }
    }
  };
}, ku = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  It();
  const n = Fu(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: li(s),
    droppables: ci(a)
  };
  return At(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function so(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ee(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Gu = (e, t) => {
  let r = null;
  const n = Lu({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, p) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : h()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, i = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : h()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, a = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : h()), t.updateDroppableScroll({
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
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Should only be subscribed when a collection is occurring") : h());
    const p = r.critical.draggable;
    d.type === "ADDITION" && so(e, p, d.value) && n.add(d.value), d.type === "REMOVAL" && so(e, p, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start capturing critical dimensions as there is already a collection") : h());
      const p = e.draggable.getById(d.draggableId), g = e.droppable.getById(p.descriptor.droppableId), b = {
        draggable: p.descriptor,
        droppable: g.descriptor
      }, m = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: m
      }, ku({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, $i = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Wu = (e) => {
  window.scrollBy(e.x, e.y);
};
const ju = ce((e) => Ht(e).filter((t) => !(!t.isEnabled || !t.frame))), Uu = (e, t) => ju(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? h(!1, "Invalid result") : h()), yi(n.frame.pageMarginBox)(e))) || null;
var zu = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Uu(e, r);
};
const Dt = {
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
var Hu = (e, t, r = () => Dt) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Bi = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && ee(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, rn = 1, qu = (e, t, r = () => Dt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return rn;
  const i = 1 - Bi({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, Yu = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return rn;
  const f = Bi({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, co = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = qu(e, t, o);
  return i === 0 ? 0 : n ? Math.max(Yu(i, r, o), rn) : i;
}, lo = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Hu(e, n, i);
  return t[n.end] < t[n.start] ? co({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * co({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Ku = ({
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
const Xu = si((e) => e === 0 ? 0 : e);
var Li = ({
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
  }, s = lo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Yr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = lo({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: fi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = Xu({
    x: c,
    y: s
  });
  if (je(u, le))
    return null;
  const f = Ku({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? je(f, le) ? null : f : null;
};
const Ju = si((e) => e === 0 ? 0 : e > 0 ? 1 : -1), nn = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = ue(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return je(i, le) ? null : i;
  };
})(), Fi = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Ju(r), i = nn({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, on = (e, t) => Fi({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Zu = (e, t) => {
  if (!on(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return nn({
    current: n,
    max: r,
    change: t
  });
}, an = (e, t) => {
  const r = e.frame;
  return r ? Fi({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, Qu = (e, t) => {
  const r = e.frame;
  return !r || !an(e, t) ? null : nn({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var ed = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Li({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && on(e, a) ? a : null;
}, td = ({
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
  const s = Li({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && an(e, s) ? s : null;
}, uo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = ed({
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
  const u = zu({
    center: a,
    destination: xe(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const f = td({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && o(u.descriptor.id, f);
}, rd = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Dt
}) => {
  const n = ht(e), o = ht(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fluid scroll if not dragging") : h());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: l
    } = i;
    uo({
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
      It(), i && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start auto scrolling when already started") : h());
      const f = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      uo({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: l
      }, At(), l && a(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, nd = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, c) => {
    const u = ue(s.current.client.selection, c);
    e({
      client: u
    });
  }, o = (s, c) => {
    if (!an(s, c))
      return c;
    const u = Qu(s, c);
    if (!u)
      return t(s.descriptor.id, c), null;
    const f = ye(c, u);
    return t(s.descriptor.id, f), ye(c, f);
  }, i = (s, c, u) => {
    if (!s || !on(c, u))
      return u;
    const f = Zu(c, u);
    if (!f)
      return r(u), null;
    const l = ye(u, f);
    return r(l), ye(u, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const u = xe(s.impact);
    u || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot perform a jump scroll when there is no destination") : h());
    const f = o(s.dimensions.droppables[u], c);
    if (!f)
      return;
    const l = s.viewport, d = i(s.isWindowScrollAllowed, l, f);
    d && n(s, d);
  };
}, od = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = rd({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = nd({
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
const rt = "data-rfd", nt = (() => {
  const e = `${rt}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Pr = (() => {
  const e = `${rt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), id = (() => {
  const e = `${rt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), fo = {
  contextId: `${rt}-scroll-container-context-id`
}, ad = (e) => (t) => `[${t}="${e}"]`, ut = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), sd = "pointer-events: none;";
var cd = (e) => {
  const t = ad(e), r = (() => {
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
        dragging: sd,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${pt.outOfTheWay};
    `;
    return {
      selector: t(Pr.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(id.contextId),
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
const ld = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? No : se;
var Ee = ld;
const mr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find the head to append a style to") : h()), e;
}, po = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function ud(e, t) {
  const r = U(() => cd(e), [e]), n = H(null), o = H(null), i = P(ce((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h()), d.textContent = l;
  }), []), a = P((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h()), d.textContent = l;
  }, []);
  Ee(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? h(!1, "style elements already mounted") : h());
    const l = po(t), d = po(t);
    return n.current = l, o.current = d, l.setAttribute(`${rt}-always`, e), d.setAttribute(`${rt}-dynamic`, e), mr().appendChild(l), mr().appendChild(d), a(r.always), i(r.resting), () => {
      const p = (g) => {
        const b = g.current;
        b || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot unmount ref as it is not set") : h()), mr().removeChild(b), g.current = null;
      };
      p(n), p(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = P(() => i(r.dragging), [i, r.dragging]), c = P((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = P(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return U(() => ({
    dragging: s,
    dropping: c,
    resting: u
  }), [s, c, u]);
}
function ki(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Gi = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function _t(e) {
  return e instanceof Gi(e).HTMLElement;
}
function Wi(e, t) {
  const r = `[${nt.contextId}="${e}"]`, n = ki(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && ee(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(nt.draggableId) === t);
  return o ? _t(o) ? o : (process.env.NODE_ENV !== "production" && ee("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ee(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function dd(e) {
  const t = H({}), r = H(null), n = H(null), o = H(!1), i = P(function(d, p) {
    const g = {
      id: d,
      focus: p
    };
    return t.current[d] = g, function() {
      const m = t.current;
      m[d] !== g && delete m[d];
    };
  }, []), a = P(function(d) {
    const p = Wi(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), s = P(function(d, p) {
    r.current === d && (r.current = p);
  }, []), c = P(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = P(function(d) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(nt.draggableId) === d && (r.current = d);
  }, []);
  return Ee(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), U(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, u, c, s]);
}
function fd() {
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
    return d || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find draggable entry with id [${l}]`) : h()), d;
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
    return d || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find droppable entry with id [${l}]`) : h()), d;
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
function pd() {
  const e = U(fd, []);
  return se(() => function() {
    B.version.startsWith("16") || B.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var sn = B.createContext(null), Nt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.body") : h()), e;
};
const md = {
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
var gd = md;
const bd = (e) => `rfd-announcement-${e}`;
function hd(e) {
  const t = U(() => bd(e), [e]), r = H(null);
  return se(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Ge(i.style, gd), Nt().appendChild(i), function() {
      setTimeout(function() {
        const c = Nt();
        c.contains(i) && c.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), P((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && ee(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let vd = 0;
const ji = {
  separator: "::"
};
function yd(e, t = ji) {
  return U(() => `${e}${t.separator}${vd++}`, [t.separator, e]);
}
function xd(e, t = ji) {
  const r = B.useId();
  return U(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var cn = "useId" in B ? xd : yd;
function Ed({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function wd({
  contextId: e,
  text: t
}) {
  const r = cn("hidden-text", {
    separator: "-"
  }), n = U(() => Ed({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return se(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", Nt().appendChild(i), function() {
      const s = Nt();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var Xt = B.createContext(null), Dd = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Nd = /(\d+)\.(\d+)\.(\d+)/, mo = (e) => {
  const t = Nd.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? h(!1, `Unable to parse React version ${e}`) : h());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Sd = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Cd = (e, t) => {
  const r = mo(e), n = mo(t);
  Sd(r, n) || process.env.NODE_ENV !== "production" && ee(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const gr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Od = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ee(`
      No <!doctype html> found.

      ${gr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ee(`
      Unexpected <!doctype> found: (${t.name})

      ${gr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ee(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${gr}
    `);
};
function ln(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Pt(e, t) {
  ln(() => {
    se(() => {
      try {
        e();
      } catch (r) {
        Cr(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Id() {
  Pt(() => {
    Cd(Dd.react, B.version), Od(document);
  }, []);
}
function un(e) {
  const t = H(e);
  return se(() => {
    t.current = e;
  }), t;
}
function Ad() {
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
function St(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const _d = 9, Pd = 13, dn = 27, Ui = 32, Rd = 33, Td = 34, Vd = 35, Md = 36, $d = 37, Bd = 38, Ld = 39, Fd = 40, kd = {
  [Pd]: !0,
  [_d]: !0
};
var zi = (e) => {
  kd[e.keyCode] && e.preventDefault();
};
const Gd = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Jt = Gd;
const Hi = 0, go = 5;
function Wd(e, t) {
  return Math.abs(t.x - e.x) >= go || Math.abs(t.y - e.y) >= go;
}
const bo = {
  type: "IDLE"
};
function jd({
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
      if (i !== Hi)
        return;
      const c = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot be IDLE") : h());
      const f = u.point;
      if (!Wd(f, c))
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
      if (o.keyCode === dn) {
        o.preventDefault(), e();
        return;
      }
      zi(o);
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
    eventName: Jt,
    fn: e
  }];
}
function Ud(e) {
  const t = H(bo), r = H(We), n = U(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Hi || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
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
  }), [e]), o = U(() => ({
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
  }), [e]), i = P(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = Ne(window, [o, n], l);
  }, [o, n]), a = P(() => {
    t.current.type !== "IDLE" && (t.current = bo, r.current(), i());
  }, [i]), s = P(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = P(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = jd({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = Ne(window, d, l);
  }, [s, a]), u = P(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h()), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  Ee(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function zd() {
}
const Hd = {
  [Td]: !0,
  [Rd]: !0,
  [Md]: !0,
  [Vd]: !0
};
function qd(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === dn) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Ui) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Fd) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Bd) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Ld) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === $d) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Hd[o.keyCode]) {
        o.preventDefault();
        return;
      }
      zi(o);
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
    eventName: Jt,
    fn: r
  }];
}
function Yd(e) {
  const t = H(zd), r = U(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Ui)
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
        c || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop capturing a keyboard drag when not capturing") : h()), c = !1, t.current(), n();
      }
      t.current = Ne(window, qd(u, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = P(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Ne(window, [r], i);
  }, [r]);
  Ee(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const br = {
  type: "IDLE"
}, Kd = 120, Xd = 0.15;
function Jd({
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
      r.keyCode === dn && r.preventDefault(), e();
    }
  }, {
    eventName: Jt,
    fn: e
  }];
}
function Zd({
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
      if (!i || !(i.force >= Xd))
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
    eventName: Jt,
    fn: e
  }];
}
function Qd(e) {
  const t = H(br), r = H(We), n = P(function() {
    return t.current;
  }, []), o = P(function(p) {
    t.current = p;
  }, []), i = U(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(p);
      if (!g)
        return;
      const b = e.tryGetLock(g, s, {
        sourceEvent: p
      });
      if (!b)
        return;
      const m = p.touches[0], {
        clientX: v,
        clientY: x
      } = m, w = {
        x: v,
        y: x
      };
      r.current(), l(b, w);
    }
  }), [e]), a = P(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = Ne(window, [i], p);
  }, [i]), s = P(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(br), r.current(), a());
  }, [a, o]), c = P(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = P(function() {
    const p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: s,
      getPhase: n
    }, b = Ne(window, Zd(g), p), m = Ne(window, Jd(g), p);
    r.current = function() {
      b(), m();
    };
  }, [c, n, s]), f = P(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, `Cannot start dragging from phase ${p.type}`) : h());
    const g = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, o]), l = P(function(p, g) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h());
    const b = setTimeout(f, Kd);
    o({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: b
    }), u();
  }, [u, n, o, f]);
  Ee(function() {
    return a(), function() {
      r.current();
      const g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(br));
    };
  }, [n, a, o]), Ee(function() {
    return Ne(window, [{
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
function ef(e) {
  ln(() => {
    const t = un(e);
    Pt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot change the amount of sensor hooks after mounting") : h(!1));
    });
  });
}
const tf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function qi(e, t) {
  if (t == null)
    return !1;
  if (tf.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : qi(e, t.parentElement);
}
function rf(e, t) {
  const r = t.target;
  return _t(r) ? qi(e, r) : !1;
}
var nf = (e) => Ce(e.getBoundingClientRect()).center;
function of(e) {
  return e instanceof Gi(e).Element;
}
const af = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Yi(e, t) {
  return e == null ? null : e[af](t) ? e : Yi(e.parentElement, t);
}
function sf(e, t) {
  return e.closest ? e.closest(t) : Yi(e, t);
}
function cf(e) {
  return `[${nt.contextId}="${e}"]`;
}
function lf(e, t) {
  const r = t.target;
  if (!of(r))
    return process.env.NODE_ENV !== "production" && ee("event.target must be a Element"), null;
  const n = cf(e), o = sf(r, n);
  return o ? _t(o) ? o : (process.env.NODE_ENV !== "production" && ee("drag handle must be a HTMLElement"), null) : null;
}
function uf(e, t) {
  const r = lf(e, t);
  return r ? r.getAttribute(nt.draggableId) : null;
}
function df(e, t) {
  const r = `[${Pr.contextId}="${e}"]`, o = ki(document, r).find((i) => i.getAttribute(Pr.id) === t);
  return o ? _t(o) ? o : (process.env.NODE_ENV !== "production" && ee("Draggable element is not a HTMLElement"), null) : null;
}
function ff(e) {
  e.preventDefault();
}
function Tt({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && ee(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && ee(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Ki({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !$i(t.getState(), n)) : (process.env.NODE_ENV !== "production" && ee(`Unable to find draggable with id: ${n}`), !1);
}
function pf({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Ki({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), u = df(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && ee(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && rf(u, a))
    return null;
  const f = e.claim(i || We);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function g(y, D) {
    Tt({
      expected: y,
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(D());
  }
  const b = g.bind(null, "DRAGGING");
  function m(y) {
    function D() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (D(), process.env.NODE_ENV !== "production" ? h(!1, `Cannot lift in phase ${l}`) : h()), r.dispatch(Wl(y.liftActionArgs)), l = "DRAGGING";
    function O(N, G = {
      shouldBlockNextClick: !1
    }) {
      if (y.cleanup(), G.shouldBlockNextClick) {
        const M = Ne(window, [{
          eventName: "click",
          fn: ff,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(M);
      }
      D(), r.dispatch(Ii({
        reason: N
      }));
    }
    return {
      isActive: () => Tt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (N) => O("DROP", N),
      cancel: (N) => O("CANCEL", N),
      ...y.actions
    };
  }
  function v(y) {
    const D = ht((N) => {
      b(() => Oi({
        client: N
      }));
    });
    return {
      ...m({
        liftActionArgs: {
          id: o,
          clientSelection: y,
          movementMode: "FLUID"
        },
        cleanup: () => D.cancel(),
        actions: {
          move: D
        }
      }),
      move: D
    };
  }
  function x() {
    const y = {
      moveUp: () => b(Jl),
      moveRight: () => b(Ql),
      moveDown: () => b(Zl),
      moveLeft: () => b(eu)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: nf(u),
        movementMode: "SNAP"
      },
      cleanup: We,
      actions: y
    });
  }
  function w() {
    Tt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Tt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: v,
    snapLift: x,
    abort: w
  };
}
const mf = [Ud, Yd, Qd];
function gf({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? mf : [], ...n || []], a = be(() => Ad())[0], s = P(function(m, v) {
    St(m) && !St(v) && a.tryAbandon();
  }, [a]);
  Ee(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      s(m, x), m = x;
    });
  }, [a, t, s]), Ee(() => a.tryAbandon, [a.tryAbandon]);
  const c = P((b) => Ki({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = P((b, m, v) => pf({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: m || null,
    sourceEvent: v && v.sourceEvent ? v.sourceEvent : null
  }), [e, a, r, t]), f = P((b) => uf(e, b), [e]), l = P((b) => {
    const m = r.draggable.findById(b);
    return m ? m.options : null;
  }, [r.draggable]), d = P(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Qr()));
  }, [a, t]), p = P(() => a.isClaimed(), [a]), g = U(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, u, f, l, d, p]);
  ef(i);
  for (let b = 0; b < i.length; b++)
    i[b](g);
}
const bf = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    B.version.startsWith("16") || B.version.startsWith("17") ? r() : Co(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), hf = (e) => ({
  ...Dt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Dt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function dt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find store from lazy ref") : h()), e.current;
}
function vf(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = H(null);
  Id();
  const s = un(e), c = P(() => bf(s.current), [s]), u = P(() => hf(s.current), [s]), f = hd(t), l = wd({
    contextId: t,
    text: i
  }), d = ud(t, o), p = P((M) => {
    dt(a).dispatch(M);
  }, []), g = U(() => Sn({
    publishWhileDragging: Ul,
    updateDroppableScroll: Hl,
    updateDroppableIsEnabled: ql,
    updateDroppableIsCombineEnabled: Yl,
    collectionStarting: zl
  }, p), [p]), b = pd(), m = U(() => Gu(b, g), [b, g]), v = U(() => od({
    scrollWindow: Wu,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Sn({
      move: Oi
    }, p)
  }), [m.scrollDroppable, p, u]), x = dd(t), w = U(() => Bu({
    announce: f,
    autoScroller: v,
    dimensionMarshal: m,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: d
  }), [f, v, m, x, c, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== w && process.env.NODE_ENV !== "production" && ee("unexpected store change"), a.current = w;
  const E = P(() => {
    const M = dt(a);
    M.getState().phase !== "IDLE" && M.dispatch(Qr());
  }, []), y = P(() => {
    const M = dt(a).getState();
    return M.phase === "DROP_ANIMATING" ? !0 : M.phase === "IDLE" ? !1 : M.isDragging;
  }, []), D = U(() => ({
    isDragging: y,
    tryAbort: E
  }), [y, E]);
  r(D);
  const O = P((M) => $i(dt(a).getState(), M), []), N = P(() => qe(dt(a).getState()), []), G = U(() => ({
    marshal: m,
    focus: x,
    contextId: t,
    canLift: O,
    isMovementAllowed: N,
    dragHandleUsageInstructionsId: l,
    registry: b
  }), [t, m, l, x, O, N, b]);
  return gf({
    contextId: t,
    store: w,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), se(() => E, [E]), B.createElement(Xt.Provider, {
    value: G
  }, B.createElement(mc, {
    context: sn,
    store: w
  }, e.children));
}
let yf = 0;
function xf() {
  return U(() => `${yf++}`, []);
}
function Ef() {
  return B.useId();
}
var wf = "useId" in B ? Ef : xf;
function Df(e) {
  const t = wf(), r = e.dragHandleUsageInstructions || $t.dragHandleUsageInstructions;
  return B.createElement(_c, null, (n) => B.createElement(vf, {
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
const ho = {
  dragging: 5e3,
  dropAnimating: 4500
}, Nf = (e, t) => t ? pt.drop(t.duration) : e ? pt.snap : pt.fluid, Sf = (e, t) => {
  if (e)
    return t ? wt.opacity.drop : wt.opacity.combining;
}, Cf = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Of(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Cf(e), c = !!i, u = c ? Ar.drop(n, a) : Ar.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Nf(s, i),
    transform: u,
    opacity: Sf(a, c),
    zIndex: c ? ho.dropAnimating : ho.dragging,
    pointerEvents: "none"
  };
}
function If(e) {
  return {
    transform: Ar.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Af(e) {
  return e.type === "DRAGGING" ? Of(e) : If(e);
}
function _f(e, t, r = le) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = ri(o, n), a = Gt(i, r), s = {
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
function Pf(e) {
  const t = cn("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = U(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = P((p) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get dimension when no ref is set") : h()), _f(r, g, p);
  }, [r, o]), f = U(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = H(f), d = H(!0);
  Ee(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), Ee(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var fn = B.createContext(null);
function Xi(e) {
  e && _t(e) || (process.env.NODE_ENV !== "production" ? h(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : h());
}
function Rf(e, t, r) {
  Pt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? h(!1, "Draggable requires a draggableId") : h(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : h(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? h(!1, `${n(o)} requires an integer index prop`) : h(!1)), e.mapped.type !== "DRAGGING" && (Xi(r()), e.isEnabled && (Wi(t, o) || (process.env.NODE_ENV !== "production" ? h(!1, `${n(o)} Unable to find drag handle`) : h(!1))));
  });
}
function Tf(e) {
  ln(() => {
    const t = H(e);
    Pt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Draggable isClone prop value changed during component life") : h(!1));
    }, [e]);
  });
}
function Ut(e) {
  const t = So(e);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find required context") : h()), t;
}
function Vf(e) {
  e.preventDefault();
}
const Mf = (e) => {
  const t = H(null), r = P((D = null) => {
    t.current = D;
  }, []), n = P(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ut(Xt), {
    type: s,
    droppableId: c
  } = Ut(fn), u = U(() => ({
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
    isClone: b,
    mapped: m,
    dropAnimationFinished: v
  } = e;
  if (Rf(e, o, n), Tf(b), !b) {
    const D = U(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: g,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [u, a, n, g, p, d]);
    Pf(D);
  }
  const x = U(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Vf
  } : null, [o, i, l, d]), w = P((D) => {
    m.type === "DRAGGING" && m.dropping && D.propertyName === "transform" && (B.version.startsWith("16") || B.version.startsWith("17") ? v() : Co(v));
  }, [v, m]), E = U(() => {
    const D = Af(m), O = m.type === "DRAGGING" && m.dropping ? w : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: D,
        onTransitionEnd: O
      },
      dragHandleProps: x
    };
  }, [o, x, l, m, w, r]), y = U(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return B.createElement(B.Fragment, null, f(E, m.snapshot, y));
};
var $f = Mf, Ji = (e, t) => e === t, Zi = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Bf = (e) => e.combine ? e.combine.draggableId : null, Lf = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Ff() {
  const e = ce((o, i) => ({
    x: o,
    y: i
  })), t = ce((o, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = ce((o, i, a, s, c = null, u = null, f = null) => ({
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
    if (St(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = xe(o.impact), u = Lf(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, c, u, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], u = a.result, f = u.mode, l = Zi(u), d = Bf(u), g = {
        duration: o.dropDuration,
        curve: tn.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? wt.opacity.drop : null,
        scale: d ? wt.scale.drop : null
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
function Qi(e = null) {
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
const kf = {
  mapped: {
    type: "SECONDARY",
    offset: le,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Qi(null)
  }
};
function Gf() {
  const e = ce((a, s) => ({
    x: a,
    y: s
  })), t = ce(Qi), r = ce((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(le, a, !0) : null, o = (a, s, c, u) => {
    const f = c.displaced.visible[a], l = !!(u.inVirtualList && u.effected[a]), d = qt(c), p = d && d.draggableId === a ? s : null;
    if (!f) {
      if (!l)
        return n(p);
      if (c.displaced.invisible[a])
        return null;
      const m = it(u.displacedBy.point), v = e(m.x, m.y);
      return r(v, p, !0);
    }
    if (l)
      return n(p);
    const g = c.displacedBy.point, b = e(g.x, g.y);
    return r(b, p, f.shouldAnimate);
  };
  return (a, s) => {
    if (St(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : o(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Wf = () => {
  const e = Ff(), t = Gf();
  return (n, o) => e(n, o) || t(n, o) || kf;
}, jf = {
  dropAnimationFinished: Ai
}, Uf = ei(Wf, jf, null, {
  context: sn,
  areStatePropsEqual: Ji
})($f);
var zf = Uf;
function ea(e) {
  return Ut(fn).isUsingCloneFor === e.draggableId && !e.isClone ? null : B.createElement(zf, e);
}
function Hf(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return B.createElement(ea, Ge({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const pn = (e) => (t) => e === t, qf = pn("scroll"), Yf = pn("auto"), Kf = pn("visible"), vo = (e, t) => t(e.overflowX) || t(e.overflowY), Xf = (e, t) => t(e.overflowX) && t(e.overflowY), ta = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return vo(r, qf) || vo(r, Yf);
}, Jf = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Nt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, h()), !ta(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Xf(n, Kf) || process.env.NODE_ENV !== "production" && ee(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, mn = (e) => e == null ? null : e === document.body ? Jf() ? e : null : e === document.documentElement ? null : ta(e) ? e : mn(e.parentElement);
var Zf = (e) => {
  !e || !mn(e.parentElement) || process.env.NODE_ENV !== "production" && ee(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Rr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ra = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ra(e.parentElement) : !1;
var Qf = (e) => {
  const t = mn(e), r = ra(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, ep = ({
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
    } = s, g = Ti({
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
          value: le,
          displacement: le
        }
      }
    };
  })(), u = o === "vertical" ? Yr : fi, f = tt({
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
const tp = (e, t) => {
  const r = ni(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, c = Ur({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return zr({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var rp = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = tp(e, c), f = Gt(u, n), l = (() => {
    if (!c)
      return null;
    const p = ni(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: Gt(p, n),
      scroll: Rr(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return ep({
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
const np = {
  passive: !1
}, op = {
  passive: !0
};
var yo = (e) => e.shouldPublishImmediately ? np : op;
const Vt = (e) => e && e.env.closestScrollable || null;
function ip(e) {
  const t = H(null), r = Ut(Xt), n = cn("droppable"), {
    registry: o,
    marshal: i
  } = r, a = un(e), s = U(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = H(s), u = U(() => ce((E, y) => {
    t.current || (process.env.NODE_ENV !== "production" ? h(!1, "Can only update scroll when dragging") : h());
    const D = {
      x: E,
      y
    };
    i.updateDroppableScroll(s.id, D);
  }), [s.id, i]), f = P(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? le : Rr(E.env.closestScrollable);
  }, []), l = P(() => {
    const E = f();
    u(E.x, E.y);
  }, [f, u]), d = U(() => ht(l), [l]), p = P(() => {
    const E = t.current, y = Vt(E);
    if (E && y || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find scroll options while scrolling") : h()), E.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), g = P((E, y) => {
    t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect a droppable while a drag is occurring") : h());
    const D = a.current, O = D.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect without a droppable ref") : h());
    const N = Qf(O), G = {
      ref: O,
      descriptor: s,
      env: N,
      scrollOptions: y
    };
    t.current = G;
    const M = rp({
      ref: O,
      descriptor: s,
      env: N,
      windowScroll: E,
      direction: D.direction,
      isDropDisabled: D.isDropDisabled,
      isCombineEnabled: D.isCombineEnabled,
      shouldClipSubject: !D.ignoreContainerClipping
    }), j = N.closestScrollable;
    return j && (j.setAttribute(fo.contextId, r.contextId), j.addEventListener("scroll", p, yo(G.scrollOptions)), process.env.NODE_ENV !== "production" && Zf(j)), M;
  }, [r.contextId, s, p, a]), b = P(() => {
    const E = t.current, y = Vt(E);
    return E && y || (process.env.NODE_ENV !== "production" ? h(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : h()), Rr(y);
  }, []), m = P(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop drag when no active drag") : h());
    const y = Vt(E);
    t.current = null, y && (d.cancel(), y.removeAttribute(fo.contextId), y.removeEventListener("scroll", p, yo(E.scrollOptions)));
  }, [p, d]), v = P((E) => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll when there is no drag") : h());
    const D = Vt(y);
    D || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll a droppable with no closest scrollable") : h()), D.scrollTop += E.y, D.scrollLeft += E.x;
  }, []), x = U(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: b,
    dragStopped: m,
    scroll: v
  }), [m, g, b, v]), w = U(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  Ee(() => (c.current = w.descriptor, o.droppable.register(w), () => {
    t.current && (process.env.NODE_ENV !== "production" && ee("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(w);
  }), [x, s, m, w, i, o.droppable]), Ee(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ee(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function hr() {
}
const xo = {
  width: 0,
  height: 0,
  margin: Bc
}, ap = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? xo : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, sp = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = ap({
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
}, cp = (e) => {
  const t = H(null), r = P(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = be(e.animate === "open");
  se(() => s ? n !== "open" ? (r(), c(!1), hr) : t.current ? hr : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : hr, [n, s, r]);
  const u = P((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), f = sp({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return B.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var lp = B.memo(cp);
function vr(e) {
  return typeof e == "boolean";
}
function yr(e, t) {
  t.forEach((r) => r(e));
}
const up = [function({
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
  Xi(t());
}], dp = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && ee(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], fp = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? h(!1, "Must provide a clone render function (renderClone) for virtual lists") : h());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? h(!1, "Expected virtual list to not have a placeholder") : h());
}];
function pp(e) {
  Pt(() => {
    yr(e, up), e.props.mode === "standard" && yr(e, dp), e.props.mode === "virtual" && yr(e, fp);
  });
}
class mp extends B.PureComponent {
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
const gp = (e) => {
  const t = So(Xt);
  t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find app context") : h());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = H(null), i = H(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: g,
    useClone: b,
    updateViewportMaxScroll: m,
    getContainerForClone: v
  } = e, x = P(() => o.current, []), w = P((A = null) => {
    o.current = A;
  }, []), E = P(() => i.current, []), y = P((A = null) => {
    i.current = A;
  }, []);
  pp({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: E
  });
  const D = P(() => {
    n() && m({
      maxScroll: Mi()
    });
  }, [n, m]);
  ip({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: l,
    getDroppableRef: x
  });
  const O = U(() => B.createElement(mp, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: A,
    data: Q,
    animate: ae
  }) => B.createElement(lp, {
    placeholder: Q,
    onClose: A,
    innerRef: y,
    animate: ae,
    contextId: r,
    onTransitionEnd: D
  })), [r, D, e.placeholder, e.shouldAnimatePlaceholder, y]), N = U(() => ({
    innerRef: w,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, O, w]), G = b ? b.dragging.draggableId : null, M = U(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: G
  }), [s, G, c]);
  function j() {
    if (!b)
      return null;
    const {
      dragging: A,
      render: Q
    } = b, ae = B.createElement(ea, {
      draggableId: A.draggableId,
      index: A.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (ie, T) => Q(ie, T, A));
    return ia.createPortal(ae, v());
  }
  return B.createElement(fn.Provider, {
    value: M
  }, a(N, g), j());
};
var bp = gp;
function hp() {
  return document.body || (process.env.NODE_ENV !== "production" ? h(!1, "document.body is not ready") : h()), document.body;
}
const Eo = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: hp
}, na = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Eo)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Eo[r]
    });
  return t;
}, xr = (e, t) => e === t.droppable.type, wo = (e, t) => t.draggables[e.draggable.id], vp = () => {
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
  }, r = ce((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = ce((i, a, s, c, u, f) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const g = f ? {
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
    const s = na(a), c = s.droppableId, u = s.type, f = !s.isDropDisabled, l = s.renderClone;
    if (St(i)) {
      const d = i.critical;
      if (!xr(u, d))
        return t;
      const p = wo(d, i.dimensions), g = xe(i.impact) === c;
      return n(c, f, g, g, p, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!xr(u, d.critical))
        return t;
      const p = wo(d.critical, i.dimensions);
      return n(c, f, Zi(d.result) === c, xe(d.impact) === c, p, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!xr(u, d.critical))
        return t;
      const p = xe(d.impact) === c, g = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === c;
      return p ? g ? e : t : b ? e : t;
    }
    return t;
  };
}, yp = {
  updateViewportMaxScroll: Xl
}, xp = ei(vp, yp, (e, t, r) => ({
  ...na(r),
  ...e,
  ...t
}), {
  context: sn,
  areStatePropsEqual: Ji
})(bp);
var Ep = xp;
const kp = ({
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
  const [f, l] = be(null), [d, p] = be(e);
  se(() => {
    p(e);
  }, [e]);
  const g = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (v) => {
    a == null || a(v), l(v);
  }, m = (v) => {
    if (!v.destination || !(d != null && d.length)) return;
    const x = v.source.index, w = v.destination.index, E = [...d], [y] = E.splice(x, 1);
    E.splice(w, 0, y), p(E);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ de("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ I("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ I("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ I(Vr, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ I($o, { className: u, children: /* @__PURE__ */ I("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ I("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ I(Df, { onDragEnd: m, children: /* @__PURE__ */ I(Ep, { droppableId: "dropArray", direction: "vertical", children: (v) => /* @__PURE__ */ de("table", { className: "w-full", children: [
    /* @__PURE__ */ I("thead", { children: /* @__PURE__ */ I("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((x, w) => /* @__PURE__ */ I(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === x.name.find((E) => E) ? `-${x.name.find((E) => E) ?? ""}` : x.name.find((E) => E) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === x.name.find((E) => E) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: x.title
      },
      w
    )) }) }),
    /* @__PURE__ */ de(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...v.droppableProps,
        ref: v.innerRef,
        children: [
          d == null ? void 0 : d.map((x, w) => {
            var E;
            return /* @__PURE__ */ I(
              Hf,
              {
                isDragDisabled: o,
                draggableId: (E = x == null ? void 0 : x.id) == null ? void 0 : E.toString(),
                index: w,
                children: (y) => {
                  const D = {
                    ...y.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ I(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === d[w] && g}`,
                      onClick: () => b(
                        s ? x[s] : x.id
                      ),
                      ref: y.innerRef,
                      ...y.draggableProps,
                      ...y.dragHandleProps,
                      style: D,
                      children: t.map((O, N) => {
                        var M;
                        let G = (M = O == null ? void 0 : O.name) == null ? void 0 : M.reduce(
                          (j, A) => j == null ? void 0 : j[A],
                          d == null ? void 0 : d[w]
                        );
                        return /* @__PURE__ */ I(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: O.transform ? O.transform(G, w) : G
                          },
                          N
                        );
                      })
                    }
                  );
                }
              },
              x == null ? void 0 : x.id
            );
          }),
          v.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, Gp = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ I(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
);
var Tr = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new WeakMap(), Do = 0, wp = void 0;
function Dp(e) {
  return e ? (Mt.has(e) || (Do += 1, Mt.set(e, Do.toString())), Mt.get(e)) : "0";
}
function Np(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Dp(e.root) : e[t]}`).toString();
}
function Sp(e) {
  const t = Np(e);
  let r = Tr.get(t);
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
    }, Tr.set(t, r);
  }
  return r;
}
function Cp(e, t, r = {}, n = wp) {
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
  const { id: o, observer: i, elements: a } = Sp(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), Tr.delete(o));
  };
}
function Op({
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
  const [l, d] = W.useState(null), p = W.useRef(u), [g, b] = W.useState({
    inView: !!s,
    entry: void 0
  });
  p.current = u, W.useEffect(
    () => {
      if (a || !l) return;
      let w;
      return w = Cp(
        l,
        (E, y) => {
          b({
            inView: E,
            entry: y
          }), p.current && p.current(E, y), y.isIntersecting && i && w && (w(), w = void 0);
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
        w && w();
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
  const m = (f = g.entry) == null ? void 0 : f.target, v = W.useRef(void 0);
  !l && m && !i && !a && v.current !== m && (v.current = m, b({
    inView: !!s,
    entry: void 0
  }));
  const x = [d, g.inView, g.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const Ip = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = be(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return se(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ I(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ I(
        mt,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, Wp = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: c, data: u } = e, f = u == null ? void 0 : u.pages.flatMap((p) => p), { ref: l, inView: d } = Op();
  return se(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ de(Bt, { children: [
    o && /* @__PURE__ */ I(Ip, { className: n }),
    /* @__PURE__ */ I(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(f != null && f.length) && f.map((p, g) => t(p, g))
      }
    ),
    /* @__PURE__ */ I(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: l,
        children: (s || c) && /* @__PURE__ */ I(Vr, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(f != null && f.length) && /* @__PURE__ */ I("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, jp = () => {
  const e = H(null);
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
  Rp as Button,
  Tp as Checkbox,
  Vp as Chips,
  Mr as ErrorText,
  mt as Icon,
  Wp as InfiniteScroll,
  Mp as Input,
  $p as List,
  Vr as Loader,
  Bp as MultiSelectSearch,
  Ip as ScrollTopButton,
  Lp as Search,
  Fp as Select,
  kp as Table,
  Gp as Textarea,
  $o as Wrapper,
  Wo as useDebounce,
  jp as useScroll
};
