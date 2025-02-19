import { jsx as S, jsxs as de, Fragment as Mt } from "react/jsx-runtime";
import * as G from "react";
import W, { useState as be, useEffect as ae, useRef as H, useMemo as Hi, useLayoutEffect as mo, useContext as go } from "react";
import qi, { flushSync as bo } from "react-dom";
const Yi = ({ name: e, className: t, ...r }) => /* @__PURE__ */ S(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ S(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), mt = Yi, Ki = ({ style: e, text: t }) => /* @__PURE__ */ de("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ S("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ S("span", { className: "text-base", children: t })
] }), Ar = Ki, Xi = ({
  children: e,
  onClick: t,
  className: r,
  loadType: n,
  isLoading: o,
  variant: i,
  icon: s,
  disabled: a,
  ...c
}) => {
  const [u, p] = be(""), l = () => {
    o && n === "1C" && (p("Отправляем запрос в 1С"), setTimeout(
      () => p(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  ae(() => {
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
      disabled: a || o,
      onClick: t,
      className: d,
      ...c,
      children: [
        o ? /* @__PURE__ */ S(Ar, { text: n === "1C" ? u : void 0 }) : e,
        s && !o && /* @__PURE__ */ S(
          mt,
          {
            name: s,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Rf = Xi, Ji = ({ error: e }) => /* @__PURE__ */ S("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ S("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), Pr = Ji, Zi = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: s,
  checked: a,
  disabled: c
}) => /* @__PURE__ */ de(Mt, { children: [
  /* @__PURE__ */ de(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ S(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ S("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ S(
          "input",
          {
            disabled: c,
            checked: a,
            onChange: (u) => e(u.target.checked),
            type: "checkbox",
            className: o
          }
        )
      ]
    }
  ),
  s && /* @__PURE__ */ S(Pr, { error: s })
] }), _f = Zi, Qi = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ S("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ S(Mt, { children: o.title ? /* @__PURE__ */ S(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ S(Mt, {}) })) }), Tf = Qi;
function Rr(e, t) {
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
function $e() {
}
function es(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, s) {
      return i === t[s];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function Ke(e) {
  return !!(e || "").match(/\d/);
}
function Ye(e) {
  return e == null;
}
function ts(e) {
  return typeof e == "number" && isNaN(e);
}
function ho(e) {
  return Ye(e) || ts(e) || typeof e == "number" && !isFinite(e);
}
function vo(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function rs(e) {
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
function ns(e, t, r) {
  var n = rs(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function os(e) {
  var t = H(e);
  t.current = e;
  var r = H(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function _r(e, t) {
  t === void 0 && (t = !0);
  var r = e[0] === "-", n = r && t;
  e = e.replace("-", "");
  var o = e.split("."), i = o[0], s = o[1] || "";
  return {
    beforeDecimal: i,
    afterDecimal: s,
    hasNegation: r,
    addNegation: n
  };
}
function is(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function yo(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function ln(e, t) {
  return Array(t + 1).join(e);
}
function xo(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var s = 1 + i, a = o.length;
  return s < 0 ? o = "0." + ln("0", Math.abs(s)) + o : s >= a ? o = o + ln("0", s - a) : o = (o.substring(0, s) || "0") + "." + o.substring(s), r + o;
}
function un(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = _r(e), i = o.beforeDecimal, s = o.afterDecimal, a = o.hasNegation, c = parseFloat("0." + (s || "0")), u = s.length <= t ? "0." + s : c.toFixed(t), p = u.split("."), l = i;
  i && Number(p[0]) && (l = i.split("").reverse().reduce(function(h, m, y) {
    return h.length > y ? (Number(h[0]) + Number(m)).toString() + h.substring(1, h.length) : m + h;
  }, p[0]));
  var d = yo(p[1] || "", t, r), f = a ? "-" : "", g = n ? "." : "";
  return "" + f + l + g + d;
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
var Eo = es(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), ss = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function as(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Qt(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function cs() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function wo(e) {
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
function Do(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function ls(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function us(e, t, r, n, o, i, s) {
  s === void 0 && (s = ls);
  var a = o.findIndex(function(E) {
    return E;
  }), c = e.slice(0, a);
  !t && !r.startsWith(c) && (t = c, r = c + r, n = n + c.length);
  for (var u = r.length, p = e.length, l = {}, d = new Array(u), f = 0; f < u; f++) {
    d[f] = -1;
    for (var g = 0, h = p; g < h; g++) {
      var m = s({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: f,
        formattedValueIndex: g
      });
      if (m && l[g] !== !0) {
        d[f] = g, l[g] = !0;
        break;
      }
    }
  }
  for (var y = n; y < u && (d[y] === -1 || !i(r[y])); )
    y++;
  var x = y === u || d[y] === -1 ? p : d[y];
  for (y = n - 1; y > 0 && d[y] === -1; )
    y--;
  var w = y === -1 || d[y] === -1 ? 0 : d[y] + 1;
  return w > x ? x : n - w < x - n ? w : x;
}
function Lt(e, t, r, n) {
  var o = e.length;
  if (t = as(t, 0, o), n === "left") {
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
function ds(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(Ke(e[r]) || Ke(e[r - 1]));
  return t;
}
function No(e, t, r, n, o, i) {
  i === void 0 && (i = $e);
  var s = os(function(g, h) {
    var m, y;
    return ho(g) ? (y = "", m = "") : typeof g == "number" || h ? (y = typeof g == "number" ? xo(g) : g, m = n(y)) : (y = o(g, void 0), m = n(y)), { formattedValue: m, numAsString: y };
  }), a = be(function() {
    return s(Ye(e) ? t : e, r);
  }), c = a[0], u = a[1], p = function(g, h) {
    g.formattedValue !== c.formattedValue && u({
      formattedValue: g.formattedValue,
      numAsString: g.value
    }), i(g, h);
  }, l = e, d = r;
  Ye(e) && (l = c.numAsString, d = !0);
  var f = s(l, d);
  return Hi(function() {
    u(f);
  }, [f.formattedValue]), [c, p];
}
function ps(e) {
  return e.replace(/[^0-9]/g, "");
}
function fs(e) {
  return e;
}
function So(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, s = e.format;
  s === void 0 && (s = fs);
  var a = e.removeFormatting;
  a === void 0 && (a = ps);
  var c = e.defaultValue, u = e.valueIsNumericString, p = e.onValueChange, l = e.isAllowed, d = e.onChange;
  d === void 0 && (d = $e);
  var f = e.onKeyDown;
  f === void 0 && (f = $e);
  var g = e.onMouseUp;
  g === void 0 && (g = $e);
  var h = e.onFocus;
  h === void 0 && (h = $e);
  var m = e.onBlur;
  m === void 0 && (m = $e);
  var y = e.value, x = e.getCaretBoundary;
  x === void 0 && (x = ds);
  var w = e.isValidInputCharacter;
  w === void 0 && (w = Ke);
  var E = e.isCharacterSame, v = Rr(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), C = No(y, c, !!u, s, a, p), V = C[0], I = V.formattedValue, k = V.numAsString, $ = C[1], j = H(), O = H({ formattedValue: I, numAsString: k }), Q = function(N, R) {
    O.current = { formattedValue: N.formattedValue, numAsString: N.value }, $(N, R);
  }, se = be(!1), ie = se[0], _ = se[1], T = H(null), M = H({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ae(function() {
    return _(!0), function() {
      clearTimeout(M.current.setCaretTimeout), clearTimeout(M.current.focusTimeout);
    };
  }, []);
  var z = s, J = function(N, R) {
    var F = parseFloat(R);
    return {
      formattedValue: N,
      value: R,
      floatValue: isNaN(F) ? void 0 : F
    };
  }, L = function(N, R, F) {
    N.selectionStart === 0 && N.selectionEnd === N.value.length || (ke(N, R), M.current.setCaretTimeout = setTimeout(function() {
      N.value === F && N.selectionStart !== R && ke(N, R);
    }, 0));
  }, te = function(N, R, F) {
    return Lt(N, R, x(N), F);
  }, pe = function(N, R, F) {
    var ne = x(R), me = us(R, I, N, F, ne, w, E);
    return me = Lt(R, me, ne), me;
  }, Ie = function(N) {
    var R = N.formattedValue;
    R === void 0 && (R = "");
    var F = N.input, ne = N.source, me = N.event, oe = N.numAsString, Z;
    if (F) {
      var Te = N.inputValue || F.value, Be = Qt(F);
      F.value = R, Z = pe(Te, R, Be), Z !== void 0 && L(F, Z, R);
    }
    R !== I && Q(J(R, oe), { event: me, source: ne });
  };
  ae(function() {
    var N = O.current, R = N.formattedValue, F = N.numAsString;
    (I !== R || k !== F) && Q(J(I, k), {
      event: void 0,
      source: gt.props
    });
  }, [I, k]);
  var he = T.current ? Qt(T.current) : void 0, we = typeof window < "u" ? mo : ae;
  we(function() {
    var N = T.current;
    if (I !== O.current.formattedValue && N) {
      var R = pe(O.current.formattedValue, I, he);
      N.value = I, L(N, R, I);
    }
  }, [I]);
  var Oe = function(N, R, F) {
    var ne = R.target, me = j.current ? ss(j.current, ne.selectionEnd) : Eo(I, N), oe = Object.assign(Object.assign({}, me), { lastValue: I }), Z = a(N, oe), Te = z(Z);
    if (Z = a(Te, void 0), l && !l(J(Te, Z))) {
      var Be = R.target, Me = Qt(Be), Zt = pe(N, I, Me);
      return Be.value = I, L(Be, Zt, I), !1;
    }
    return Ie({
      formattedValue: Te,
      numAsString: Z,
      inputValue: N,
      event: R,
      source: F,
      input: R.target
    }), !0;
  }, Pe = function(N, R) {
    R === void 0 && (R = 0);
    var F = N.selectionStart, ne = N.selectionEnd;
    j.current = { selectionStart: F, selectionEnd: ne + R };
  }, Ae = function(N) {
    var R = N.target, F = R.value, ne = Oe(F, N, gt.event);
    ne && d(N), j.current = void 0;
  }, Re = function(N) {
    var R = N.target, F = N.key, ne = R.selectionStart, me = R.selectionEnd, oe = R.value;
    oe === void 0 && (oe = "");
    var Z;
    F === "ArrowLeft" || F === "Backspace" ? Z = Math.max(ne - 1, 0) : F === "ArrowRight" ? Z = Math.min(ne + 1, oe.length) : F === "Delete" && (Z = ne);
    var Te = 0;
    F === "Delete" && ne === me && (Te = 1);
    var Be = F === "ArrowLeft" || F === "ArrowRight";
    if (Z === void 0 || ne !== me && !Be) {
      f(N), Pe(R, Te);
      return;
    }
    var Me = Z;
    if (Be) {
      var Zt = F === "ArrowLeft" ? "left" : "right";
      Me = te(oe, Z, Zt), Me !== Z && N.preventDefault();
    } else F === "Delete" && !w(oe[Z]) ? Me = te(oe, Z, "right") : F === "Backspace" && !w(oe[Z]) && (Me = te(oe, Z, "left"));
    Me !== Z && L(R, Me, oe), f(N), Pe(R, Te);
  }, Ze = function(N) {
    var R = N.target, F = function() {
      var ne = R.selectionStart, me = R.selectionEnd, oe = R.value;
      if (oe === void 0 && (oe = ""), ne === me) {
        var Z = te(oe, ne);
        Z !== ne && L(R, Z, oe);
      }
    };
    F(), requestAnimationFrame(function() {
      F();
    }), g(N), Pe(R);
  }, D = function(N) {
    N.persist && N.persist();
    var R = N.target, F = N.currentTarget;
    T.current = R, M.current.focusTimeout = setTimeout(function() {
      var ne = R.selectionStart, me = R.selectionEnd, oe = R.value;
      oe === void 0 && (oe = "");
      var Z = te(oe, ne);
      Z !== ne && !(ne === 0 && me === oe.length) && L(R, Z, oe), h(Object.assign(Object.assign({}, N), { currentTarget: F }));
    }, 0);
  }, ve = function(N) {
    T.current = null, clearTimeout(M.current.focusTimeout), clearTimeout(M.current.setCaretTimeout), m(N);
  }, A = ie && cs() ? "numeric" : void 0, _e = Object.assign({ inputMode: A }, v, {
    type: t,
    value: I,
    onChange: Ae,
    onKeyDown: Re,
    onMouseUp: Ze,
    onFocus: D,
    onBlur: ve
  });
  if (r === "text")
    return o ? W.createElement(W.Fragment, null, o(I, v) || null) : W.createElement("span", Object.assign({}, v, { ref: i }), I);
  if (n) {
    var Qe = n;
    return W.createElement(Qe, Object.assign({}, _e, { ref: i }));
  }
  return W.createElement("input", Object.assign({}, _e, { ref: i }));
}
function dn(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var s = t.allowNegative, a = t.thousandsGroupStyle;
  if (a === void 0 && (a = "thousand"), e === "" || e === "-")
    return e;
  var c = zt(t), u = c.thousandSeparator, p = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, d = _r(e, s), f = d.beforeDecimal, g = d.afterDecimal, h = d.addNegation;
  return r !== void 0 && (g = yo(g, r, !!n)), u && (f = ns(f, u, a)), o && (f = o + f), i && (g = g + i), h && (f = "-" + f), e = f + (l && p || "") + g, e;
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
function ms(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function gs(e, t) {
  return new RegExp("(^-)|[0-9]|" + vo(e), "g");
}
function bs(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function hs(e, t, r) {
  var n;
  t === void 0 && (t = wo(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var s = r.suffix;
  s === void 0 && (s = "");
  var a = r.decimalScale, c = t.from, u = t.to, p = u.start, l = u.end, d = zt(r), f = d.allowedDecimalSeparators, g = d.decimalSeparator, h = e[l] === g;
  if (Ke(e) && (e === i || e === s) && t.lastValue === "")
    return e;
  if (l - p === 1 && f.indexOf(e[p]) !== -1) {
    var m = a === 0 ? "" : g;
    e = e.substring(0, p) + m + e.substring(p + 1, e.length);
  }
  var y = function(T, M, z) {
    var J = !1, L = !1;
    i.startsWith("-") ? J = !1 : T.startsWith("--") ? (J = !1, L = !0) : s.startsWith("-") && T.length === s.length ? J = !1 : T[0] === "-" && (J = !0);
    var te = J ? 1 : 0;
    return L && (te = 2), te && (T = T.substring(te), M -= te, z -= te), { value: T, start: M, end: z, hasNegation: J };
  }, x = y(e, p, l), w = x.hasNegation;
  n = x, e = n.value, p = n.start, l = n.end;
  var E = y(t.lastValue, c.start, c.end), v = E.start, C = E.end, V = E.value, I = e.substring(p, l);
  e.length && V.length && (v > V.length - s.length || C < i.length) && !(I && s.startsWith(I)) && (e = V);
  var k = 0;
  e.startsWith(i) ? k += i.length : p < i.length && (k = p), e = e.substring(k), l -= k;
  var $ = e.length, j = e.length - s.length;
  e.endsWith(s) ? $ = j : (l > j || l > e.length - s.length) && ($ = l), e = e.substring(0, $), e = ms(w ? "-" + e : e, o), e = (e.match(gs(g)) || []).join("");
  var O = e.indexOf(g);
  e = e.replace(new RegExp(vo(g), "g"), function(T, M) {
    return M === O ? "." : "";
  });
  var Q = _r(e, o), se = Q.beforeDecimal, ie = Q.afterDecimal, _ = Q.addNegation;
  return u.end - u.start < c.end - c.start && se === "" && h && !parseFloat(ie) && (e = _ ? "-" : ""), e;
}
function vs(e, t) {
  var r = t.prefix;
  r === void 0 && (r = "");
  var n = t.suffix;
  n === void 0 && (n = "");
  var o = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), i = e[0] === "-";
  o.fill(!1, 0, r.length + (i ? 1 : 0));
  var s = e.length;
  return o.fill(!1, s - n.length + 1, s + 1), o;
}
function ys(e) {
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
function xs(e) {
  e = ys(e);
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = $e);
  var i = e.onBlur;
  i === void 0 && (i = $e);
  var s = e.thousandSeparator, a = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var p = e.defaultValue, l = e.value, d = e.valueIsNumericString, f = e.onValueChange, g = Rr(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), h = zt(e), m = h.decimalSeparator, y = h.allowedDecimalSeparators, x = function(_) {
    return dn(_, e);
  }, w = function(_, T) {
    return hs(_, T, e);
  }, E = Ye(l) ? p : l, v = d ?? bs(E, u, t);
  Ye(l) ? Ye(p) || (v = v || typeof p == "number") : v = v || typeof l == "number";
  var C = function(_) {
    return ho(_) ? _ : (typeof _ == "number" && (_ = xo(_)), v && typeof a == "number" ? un(_, a, !!c) : _);
  }, V = No(C(l), C(p), !!v, x, w, f), I = V[0], k = I.numAsString, $ = I.formattedValue, j = V[1], O = function(_) {
    var T = _.target, M = _.key, z = T.selectionStart, J = T.selectionEnd, L = T.value;
    if (L === void 0 && (L = ""), (M === "Backspace" || M === "Delete") && J < u.length) {
      _.preventDefault();
      return;
    }
    if (z !== J) {
      o(_);
      return;
    }
    M === "Backspace" && L[0] === "-" && z === u.length + 1 && r && ke(T, 1), a && c && (M === "Backspace" && L[z - 1] === m ? (ke(T, z - 1), _.preventDefault()) : M === "Delete" && L[z] === m && _.preventDefault()), y != null && y.includes(M) && L[z] === m && ke(T, z + 1);
    var te = s === !0 ? "," : s;
    M === "Backspace" && L[z - 1] === te && ke(T, z - 1), M === "Delete" && L[z] === te && ke(T, z + 1), o(_);
  }, Q = function(_) {
    var T = k;
    if (T.match(/\d/g) || (T = ""), n || (T = is(T)), c && a && (T = un(T, a, c)), T !== k) {
      var M = dn(T, e);
      j({
        formattedValue: M,
        value: T,
        floatValue: parseFloat(T)
      }, {
        event: _,
        source: gt.event
      });
    }
    i(_);
  }, se = function(_) {
    return _ === m ? !0 : Ke(_);
  }, ie = function(_) {
    var T = _.currentValue, M = _.lastValue, z = _.formattedValue, J = _.currentValueIndex, L = _.formattedValueIndex, te = T[J], pe = z[L], Ie = Eo(M, T), he = Ie.to, we = function(Oe) {
      return w(Oe).indexOf(".") + u.length;
    };
    return l === 0 && c && a && T[he.start] === m && we(T) < J && we(z) > L ? !1 : J >= he.start && J < he.end && y && y.includes(te) && pe === m ? !0 : te === pe;
  };
  return Object.assign(Object.assign({}, g), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: se,
    isCharacterSame: ie,
    onValueChange: j,
    format: x,
    removeFormatting: w,
    getCaretBoundary: function(_) {
      return vs(_, e);
    },
    onKeyDown: O,
    onBlur: Q
  });
}
function Es(e) {
  var t = xs(e);
  return W.createElement(So, Object.assign({}, t));
}
function ws(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var s = 0, a = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (a[c] = e[s] || Do(o, s), s += 1);
  return a.join("");
}
function Ds(e, t, r) {
  t === void 0 && (t = wo(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, s = t.to, a = t.lastValue;
  a === void 0 && (a = "");
  var c = function(m) {
    return n[m] === o;
  }, u = function(m, y) {
    for (var x = "", w = 0; w < m.length; w++)
      c(y + w) && Ke(m[w]) && (x += m[w]);
    return x;
  }, p = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return p(e);
  if ((a === "" || i.end - i.start === a.length) && e.length === n.length) {
    for (var l = "", d = 0; d < e.length; d++)
      if (c(d))
        Ke(e[d]) && (l += e[d]);
      else if (e[d] !== n[d])
        return p(e);
    return l;
  }
  var f = a.substring(0, i.start), g = e.substring(s.start, s.end), h = a.substring(i.end);
  return "" + u(f, 0) + p(g) + u(h, i.end);
}
function Ns(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), s = 0, a = -1, c = {};
  r.split("").forEach(function(d, f) {
    var g = void 0;
    d === o && (s++, g = Do(n, s - 1), a === -1 && e[f] === g && (a = f)), c[f] = g;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== c[d];
  }, p = 0, l = i.length; p < l; p++)
    i[p] = p === a || u(p) || u(p - 1);
  return i[r.indexOf(o)] = !0, i;
}
function Ss(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Cs(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Is(e) {
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = $e);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, s = e.defaultValue, a = e.valueIsNumericString, c = Rr(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Ss(e);
  var u = function(g) {
    return Ns(g, e);
  }, p = function(g) {
    var h = g.key, m = g.target, y = m.selectionStart, x = m.selectionEnd, w = m.value;
    if (y !== x) {
      n(g);
      return;
    }
    var E = y;
    if (h === "Backspace" || h === "Delete") {
      var v = "right";
      if (h === "Backspace") {
        for (; E > 0 && t[E - 1] !== o; )
          E--;
        v = "left";
      } else {
        for (var C = t.length; E < C && t[E] !== o; )
          E++;
        v = "right";
      }
      E = Lt(w, E, u(w), v);
    } else t[E] !== o && h !== "ArrowLeft" && h !== "ArrowRight" && (E = Lt(w, E + 1, u(w), "right"));
    E !== y && ke(m, E), n(g);
  }, l = Ye(i) ? s : i, d = a ?? Cs(l, t), f = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: s,
    valueIsNumericString: d,
    inputMode: r,
    format: function(g) {
      return ws(g, f);
    },
    removeFormatting: function(g, h) {
      return Ds(g, h, f);
    },
    getCaretBoundary: u,
    onKeyDown: p
  });
}
function Os(e) {
  var t = Is(e);
  return W.createElement(So, Object.assign({}, t));
}
const As = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, Ps = ({
  type: e,
  field: t,
  label: r,
  fieldState: n,
  postfix: o,
  labelClassName: i,
  errorPlace: s = "right",
  parentClassName: a,
  className: c,
  formState: u,
  numberWrapperClassname: p,
  format: l,
  decimalScale: d = 1,
  ...f
}) => {
  var h, m, y;
  const g = "!border-danger";
  return /* @__PURE__ */ de("label", { className: "relative", children: [
    r && /* @__PURE__ */ S("span", { className: `text-primary  ${i}`, children: r }),
    l ? /* @__PURE__ */ S(
      Os,
      {
        onValueChange: (x) => {
          var w;
          t == null || t.onChange((w = x.value.replace("_", "")) == null ? void 0 : w.toString());
        },
        value: (h = t == null ? void 0 : t.value) == null ? void 0 : h.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        style: { fontSize: "16px" },
        className: `${n != null && n.error ? g : ""} w-full border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
        format: l,
        ...f
      }
    ) : e === "number" ? /* @__PURE__ */ de(
      "div",
      {
        className: `${n != null && n.error ? g : ""} ${a} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ S(
            Es,
            {
              decimalScale: d,
              style: { fontSize: "16px" },
              onValueChange: (x) => {
                var w;
                return t == null ? void 0 : t.onChange((w = x.value.replace("_", "")) == null ? void 0 : w.toString());
              },
              value: (m = t == null ? void 0 : t.value) == null ? void 0 : m.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
              ...f,
              ...As.number
            }
          ),
          o ? /* @__PURE__ */ S("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: o }) : null
        ]
      }
    ) : /* @__PURE__ */ S(
      "input",
      {
        ...t,
        ...f,
        type: e,
        style: { fontSize: "16px" },
        className: `${n != null && n.error ? g : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    /* @__PURE__ */ S("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (n == null ? void 0 : n.error) && ((y = Object.keys(n == null ? void 0 : n.error)) == null ? void 0 : y.length) && /* @__PURE__ */ S(Pr, { error: n == null ? void 0 : n.error }) })
  ] });
}, Vf = Ps, Rs = ({
  children: e,
  className: t
}) => /* @__PURE__ */ S("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), Co = Rs, _s = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = be(null);
  return /* @__PURE__ */ S(Co, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ S("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ de(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ S("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ S("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, $f = _s, Tr = "-", Ts = (e) => {
  const t = $s(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(Tr);
      return a[0] === "" && a.length !== 1 && a.shift(), Io(a, t) || Vs(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const c = r[s] || [];
      return a && n[s] ? [...c, ...n[s]] : c;
    }
  };
}, Io = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Io(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Tr);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, pn = /^\[(.+)\]$/, Vs = (e) => {
  if (pn.test(e)) {
    const t = pn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, $s = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ms(Object.entries(e.classGroups), r).forEach(([i, s]) => {
    hr(s, n, i, t);
  }), n;
}, hr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : fn(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Bs(o)) {
        hr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      hr(s, fn(t, i), r, n);
    });
  });
}, fn = (e, t) => {
  let r = e;
  return t.split(Tr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Bs = (e) => e.isThemeGetter, Ms = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
  return [r, o];
}) : e, Ls = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    r.set(i, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = r.get(i);
      if (s !== void 0)
        return s;
      if ((s = n.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      r.has(i) ? r.set(i, s) : o(i, s);
    }
  };
}, Oo = "!", Fs = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], i = t.length, s = (a) => {
    const c = [];
    let u = 0, p = 0, l;
    for (let m = 0; m < a.length; m++) {
      let y = a[m];
      if (u === 0) {
        if (y === o && (n || a.slice(m, m + i) === t)) {
          c.push(a.slice(p, m)), p = m + i;
          continue;
        }
        if (y === "/") {
          l = m;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const d = c.length === 0 ? a : a.substring(p), f = d.startsWith(Oo), g = f ? d.substring(1) : d, h = l && l > p ? l - p : void 0;
    return {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: g,
      maybePostfixModifierPosition: h
    };
  };
  return r ? (a) => r({
    className: a,
    parseClassName: s
  }) : s;
}, ks = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Gs = (e) => ({
  cache: Ls(e.cacheSize),
  parseClassName: Fs(e),
  ...Ts(e)
}), Ws = /\s+/, js = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(Ws);
  let a = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const u = s[c], {
      modifiers: p,
      hasImportantModifier: l,
      baseClassName: d,
      maybePostfixModifierPosition: f
    } = r(u);
    let g = !!f, h = n(g ? d.substring(0, f) : d);
    if (!h) {
      if (!g) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (h = n(d), !h) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      g = !1;
    }
    const m = ks(p).join(":"), y = l ? m + Oo : m, x = y + h;
    if (i.includes(x))
      continue;
    i.push(x);
    const w = o(h, g);
    for (let E = 0; E < w.length; ++E) {
      const v = w[E];
      i.push(y + v);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Us() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ao(t)) && (n && (n += " "), n += r);
  return n;
}
const Ao = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ao(e[n])) && (r && (r += " "), r += t);
  return r;
};
function zs(e, ...t) {
  let r, n, o, i = s;
  function s(c) {
    const u = t.reduce((p, l) => l(p), e());
    return r = Gs(u), n = r.cache.get, o = r.cache.set, i = a, a(c);
  }
  function a(c) {
    const u = n(c);
    if (u)
      return u;
    const p = js(c, r);
    return o(c, p), p;
  }
  return function() {
    return i(Us.apply(null, arguments));
  };
}
const re = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Po = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hs = /^\d+\/\d+$/, qs = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ys = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ks = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Js = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (e) => et(e) || qs.has(e) || Hs.test(e), Le = (e) => ot(e, "length", sa), et = (e) => !!e && !Number.isNaN(Number(e)), er = (e) => ot(e, "number", et), at = (e) => !!e && Number.isInteger(Number(e)), Qs = (e) => e.endsWith("%") && et(e.slice(0, -1)), B = (e) => Po.test(e), Fe = (e) => Ys.test(e), ea = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ta = (e) => ot(e, ea, Ro), ra = (e) => ot(e, "position", Ro), na = /* @__PURE__ */ new Set(["image", "url"]), oa = (e) => ot(e, na, ca), ia = (e) => ot(e, "", aa), ct = () => !0, ot = (e, t, r) => {
  const n = Po.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, sa = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ks.test(e) && !Xs.test(e)
), Ro = () => !1, aa = (e) => Js.test(e), ca = (e) => Zs.test(e), la = () => {
  const e = re("colors"), t = re("spacing"), r = re("blur"), n = re("brightness"), o = re("borderColor"), i = re("borderRadius"), s = re("borderSpacing"), a = re("borderWidth"), c = re("contrast"), u = re("grayscale"), p = re("hueRotate"), l = re("invert"), d = re("gap"), f = re("gradientColorStops"), g = re("gradientColorStopPositions"), h = re("inset"), m = re("margin"), y = re("opacity"), x = re("padding"), w = re("saturate"), E = re("scale"), v = re("sepia"), C = re("skew"), V = re("space"), I = re("translate"), k = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", B, t], O = () => [B, t], Q = () => ["", Ve, Le], se = () => ["auto", et, B], ie = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _ = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", B], J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [et, B];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ct],
      spacing: [Ve, Le],
      blur: ["none", "", Fe, B],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Fe, B],
      borderSpacing: O(),
      borderWidth: Q(),
      contrast: L(),
      grayscale: z(),
      hueRotate: L(),
      invert: z(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Qs, Le],
      inset: j(),
      margin: j(),
      opacity: L(),
      padding: O(),
      saturate: L(),
      scale: L(),
      sepia: z(),
      skew: L(),
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
        aspect: ["auto", "square", "video", B]
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
        object: [...ie(), B]
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
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", at, B]
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
        flex: ["1", "auto", "initial", "none", B]
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
        order: ["first", "last", "none", at, B]
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
          span: ["full", at, B]
        }, B]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": se()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": se()
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
          span: [at, B]
        }, B]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": se()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": se()
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
        "auto-cols": ["auto", "min", "max", "fr", B]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", B]
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
        justify: ["normal", ...M()]
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
        content: ["normal", ...M(), "baseline"]
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
        "place-content": [...M(), "baseline"]
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
        "space-x": [V]
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
        "space-y": [V]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", B, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [B, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [B, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Fe]
        }, Fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [B, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [B, t, "auto", "min", "max", "fit"]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", B]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ve, B]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", B]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", B]
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
        decoration: [..._(), "wavy"]
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
        "underline-offset": ["auto", Ve, B]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", B]
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
        content: ["none", B]
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
        bg: [...ie(), ra]
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
        bg: ["auto", "cover", "contain", ta]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, oa]
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
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
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
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
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
        border: [..._(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
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
        "divide-y": [a]
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
        divide: _()
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
        outline: ["", ..._()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ve, B]
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
        "ring-opacity": [y]
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
        shadow: ["", "inner", "none", Fe, ia]
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Fe, B]
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
        sepia: [v]
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
        "backdrop-hue-rotate": [p]
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
        "backdrop-opacity": [y]
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
        "backdrop-sepia": [v]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", B]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: L()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: L()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", B]
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
        rotate: [at, B]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", B]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", B]
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
        "will-change": ["auto", "scroll", "contents", "transform", B]
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
}, ua = /* @__PURE__ */ zs(la);
function _o(e, t) {
  const [r, n] = be(e);
  return ae(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const da = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = be(!1), [s, a] = be(""), c = _o(s, 100), u = H(null);
  ae(() => {
    const l = (d) => {
      u.current && !u.current.contains(d.target) && i(!1);
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, []);
  const p = (l) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(l)) && (t == null ? void 0 : t.value.filter((d) => d !== l)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, l] || [l]
    );
  };
  return /* @__PURE__ */ de("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ de("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ S(
        mt,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ S(
        "input",
        {
          ...n,
          ref: u,
          className: ua(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && s || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (l) => {
              var d;
              return (d = e.find((f) => f.value === l)) == null ? void 0 : d.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (l) => a(l.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ S("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(c.toLowerCase())
    ).map((l) => {
      var d;
      return /* @__PURE__ */ S(
        "li",
        {
          onClick: () => p(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ de("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ S(mt, { name: l.icon }),
            /* @__PURE__ */ S(
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
}, Bf = da, pa = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, s] = be(r), a = _o(i, 300);
  return ae(() => {
    t == null || t(a);
  }, [a]), /* @__PURE__ */ de("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ S(
      mt,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ S(
      "input",
      {
        placeholder: e,
        onChange: (c) => s(c.target.value),
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${n}`
      }
    )
  ] });
}, Mf = pa, fa = ({
  placeholder: e,
  options: t,
  className: r,
  field: n,
  fieldState: o,
  labelClassName: i,
  parentClassName: s,
  formState: a,
  label: c,
  ...u
}) => {
  var l;
  return /* @__PURE__ */ de("label", { className: "relative", children: [
    c && /* @__PURE__ */ S("span", { className: `text-primary  ${i}`, children: c }),
    /* @__PURE__ */ S(
      "div",
      {
        className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${s}`,
        children: /* @__PURE__ */ de(
          "select",
          {
            ...n,
            ...u,
            className: `w-full ${o != null && o.error ? "!border-danger" : ""} cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
            children: [
              /* @__PURE__ */ S("option", { value: "", selected: !0, children: e }),
              t == null ? void 0 : t.map((d, f) => /* @__PURE__ */ S("option", { value: d.value, className: "text-black", children: d.label }, f))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ S("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((l = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : l.length) && /* @__PURE__ */ S(Pr, { error: o == null ? void 0 : o.error }) })
  ] });
}, Lf = fa;
function bt(e) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bt(e);
}
function ma(e, t) {
  if (bt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (bt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ga(e) {
  var t = ma(e, "string");
  return bt(t) == "symbol" ? t : t + "";
}
function ba(e, t, r) {
  return (t = ga(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function mn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mn(Object(r), !0).forEach(function(n) {
      ba(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ge(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var bn = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), tr = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, hn = {
  INIT: "@@redux/INIT" + tr(),
  REPLACE: "@@redux/REPLACE" + tr(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + tr();
  }
};
function ha(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function va(e) {
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
  if (Ea(e)) return "date";
  if (xa(e)) return "error";
  var r = ya(e);
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
function ya(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function xa(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Ea(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function He(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = va(e)), t;
}
function To(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(1) : "Expected the enhancer to be a function. Instead, received: '" + He(r) + "'");
    return r(To)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(2) : "Expected the root reducer to be a function. Instead, received: '" + He(e) + "'");
  var o = e, i = t, s = [], a = s, c = !1;
  function u() {
    a === s && (a = s.slice());
  }
  function p() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? ge(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function l(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(4) : "Expected the listener to be a function. Instead, received: '" + He(h) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? ge(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return u(), a.push(h), function() {
      if (m) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? ge(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, u();
        var x = a.indexOf(h);
        a.splice(x, 1), s = null;
      }
    };
  }
  function d(h) {
    if (!ha(h))
      throw new Error(process.env.NODE_ENV === "production" ? ge(7) : "Actions must be plain objects. Instead, the actual type was: '" + He(h) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? ge(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? ge(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = o(i, h);
    } finally {
      c = !1;
    }
    for (var m = s = a, y = 0; y < m.length; y++) {
      var x = m[y];
      x();
    }
    return h;
  }
  function f(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(10) : "Expected the nextReducer to be a function. Instead, received: '" + He(h));
    o = h, d({
      type: hn.REPLACE
    });
  }
  function g() {
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
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error(process.env.NODE_ENV === "production" ? ge(11) : "Expected the observer to be an object. Instead, received: '" + He(x) + "'");
        function w() {
          x.next && x.next(p());
        }
        w();
        var E = m(w);
        return {
          unsubscribe: E
        };
      }
    }, h[bn] = function() {
      return this;
    }, h;
  }
  return d({
    type: hn.INIT
  }), n = {
    dispatch: d,
    subscribe: l,
    getState: p,
    replaceReducer: f
  }, n[bn] = g, n;
}
function vn(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function yn(e, t) {
  if (typeof e == "function")
    return vn(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? ge(16) : "bindActionCreators expected an object or a function, but instead received: '" + He(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = vn(o, t));
  }
  return r;
}
function Vo() {
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
function wa() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? ge(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(s);
      });
      return i = Vo.apply(void 0, a)(o.dispatch), gn(gn({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Da(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Na(e) {
  e();
}
let Sa = Na;
const Ca = () => Sa, xn = Symbol.for("react-redux-context"), En = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ia() {
  var e;
  if (!G.createContext) return {};
  const t = (e = En[xn]) != null ? e : En[xn] = /* @__PURE__ */ new Map();
  let r = t.get(G.createContext);
  return r || (r = G.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(G.createContext, r)), r;
}
const $o = /* @__PURE__ */ Ia(), Oa = () => {
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
function Bo(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var vr = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function Aa() {
  if (wn) return q;
  wn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function w(v) {
    if (typeof v == "object" && v !== null) {
      var C = v.$$typeof;
      switch (C) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case l:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case p:
                case g:
                case f:
                case s:
                  return v;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function E(v) {
    return w(v) === u;
  }
  return q.AsyncMode = c, q.ConcurrentMode = u, q.ContextConsumer = a, q.ContextProvider = s, q.Element = t, q.ForwardRef = p, q.Fragment = n, q.Lazy = g, q.Memo = f, q.Portal = r, q.Profiler = i, q.StrictMode = o, q.Suspense = l, q.isAsyncMode = function(v) {
    return E(v) || w(v) === c;
  }, q.isConcurrentMode = E, q.isContextConsumer = function(v) {
    return w(v) === a;
  }, q.isContextProvider = function(v) {
    return w(v) === s;
  }, q.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, q.isForwardRef = function(v) {
    return w(v) === p;
  }, q.isFragment = function(v) {
    return w(v) === n;
  }, q.isLazy = function(v) {
    return w(v) === g;
  }, q.isMemo = function(v) {
    return w(v) === f;
  }, q.isPortal = function(v) {
    return w(v) === r;
  }, q.isProfiler = function(v) {
    return w(v) === i;
  }, q.isStrictMode = function(v) {
    return w(v) === o;
  }, q.isSuspense = function(v) {
    return w(v) === l;
  }, q.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === u || v === i || v === o || v === l || v === d || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === f || v.$$typeof === s || v.$$typeof === a || v.$$typeof === p || v.$$typeof === m || v.$$typeof === y || v.$$typeof === x || v.$$typeof === h);
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
var Dn;
function Pa() {
  return Dn || (Dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function w(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === i || D === o || D === l || D === d || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === f || D.$$typeof === s || D.$$typeof === a || D.$$typeof === p || D.$$typeof === m || D.$$typeof === y || D.$$typeof === x || D.$$typeof === h);
    }
    function E(D) {
      if (typeof D == "object" && D !== null) {
        var ve = D.$$typeof;
        switch (ve) {
          case t:
            var A = D.type;
            switch (A) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case l:
                return A;
              default:
                var _e = A && A.$$typeof;
                switch (_e) {
                  case a:
                  case p:
                  case g:
                  case f:
                  case s:
                    return _e;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var v = c, C = u, V = a, I = s, k = t, $ = p, j = n, O = g, Q = f, se = r, ie = i, _ = o, T = l, M = !1;
    function z(D) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), J(D) || E(D) === c;
    }
    function J(D) {
      return E(D) === u;
    }
    function L(D) {
      return E(D) === a;
    }
    function te(D) {
      return E(D) === s;
    }
    function pe(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Ie(D) {
      return E(D) === p;
    }
    function he(D) {
      return E(D) === n;
    }
    function we(D) {
      return E(D) === g;
    }
    function Oe(D) {
      return E(D) === f;
    }
    function Pe(D) {
      return E(D) === r;
    }
    function Ae(D) {
      return E(D) === i;
    }
    function Re(D) {
      return E(D) === o;
    }
    function Ze(D) {
      return E(D) === l;
    }
    Y.AsyncMode = v, Y.ConcurrentMode = C, Y.ContextConsumer = V, Y.ContextProvider = I, Y.Element = k, Y.ForwardRef = $, Y.Fragment = j, Y.Lazy = O, Y.Memo = Q, Y.Portal = se, Y.Profiler = ie, Y.StrictMode = _, Y.Suspense = T, Y.isAsyncMode = z, Y.isConcurrentMode = J, Y.isContextConsumer = L, Y.isContextProvider = te, Y.isElement = pe, Y.isForwardRef = Ie, Y.isFragment = he, Y.isLazy = we, Y.isMemo = Oe, Y.isPortal = Pe, Y.isProfiler = Ae, Y.isStrictMode = Re, Y.isSuspense = Ze, Y.isValidElementType = w, Y.typeOf = E;
  }()), Y;
}
process.env.NODE_ENV === "production" ? vr.exports = Aa() : vr.exports = Pa();
var Ra = vr.exports, Vr = Ra, _a = {
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
}, Ta = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Va = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Mo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $r = {};
$r[Vr.ForwardRef] = Va;
$r[Vr.Memo] = Mo;
function Nn(e) {
  return Vr.isMemo(e) ? Mo : $r[e.$$typeof] || _a;
}
var $a = Object.defineProperty, Ba = Object.getOwnPropertyNames, Sn = Object.getOwnPropertySymbols, Ma = Object.getOwnPropertyDescriptor, La = Object.getPrototypeOf, Cn = Object.prototype;
function Lo(e, t, r) {
  if (typeof t != "string") {
    if (Cn) {
      var n = La(t);
      n && n !== Cn && Lo(e, n, r);
    }
    var o = Ba(t);
    Sn && (o = o.concat(Sn(t)));
    for (var i = Nn(e), s = Nn(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!Ta[c] && !(r && r[c]) && !(s && s[c]) && !(i && i[c])) {
        var u = Ma(t, c);
        try {
          $a(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Fa = Lo;
const In = /* @__PURE__ */ Da(Fa);
var yr = { exports: {} }, K = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function ka() {
  if (On) return K;
  On = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
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
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case s:
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
  return K.ContextConsumer = s, K.ContextProvider = i, K.Element = e, K.ForwardRef = c, K.Fragment = r, K.Lazy = d, K.Memo = l, K.Portal = t, K.Profiler = o, K.StrictMode = n, K.Suspense = u, K.SuspenseList = p, K.isAsyncMode = function() {
    return !1;
  }, K.isConcurrentMode = function() {
    return !1;
  }, K.isContextConsumer = function(m) {
    return h(m) === s;
  }, K.isContextProvider = function(m) {
    return h(m) === i;
  }, K.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, K.isForwardRef = function(m) {
    return h(m) === c;
  }, K.isFragment = function(m) {
    return h(m) === r;
  }, K.isLazy = function(m) {
    return h(m) === d;
  }, K.isMemo = function(m) {
    return h(m) === l;
  }, K.isPortal = function(m) {
    return h(m) === t;
  }, K.isProfiler = function(m) {
    return h(m) === o;
  }, K.isStrictMode = function(m) {
    return h(m) === n;
  }, K.isSuspense = function(m) {
    return h(m) === u;
  }, K.isSuspenseList = function(m) {
    return h(m) === p;
  }, K.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === p || m === f || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === l || m.$$typeof === i || m.$$typeof === s || m.$$typeof === c || m.$$typeof === g || m.getModuleId !== void 0);
  }, K.typeOf = h, K;
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
var An;
function Ga() {
  return An || (An = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), g = !1, h = !1, m = !1, y = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function E(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === o || x || A === n || A === u || A === p || y || A === f || g || h || m || typeof A == "object" && A !== null && (A.$$typeof === d || A.$$typeof === l || A.$$typeof === i || A.$$typeof === s || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === w || A.getModuleId !== void 0));
    }
    function v(A) {
      if (typeof A == "object" && A !== null) {
        var _e = A.$$typeof;
        switch (_e) {
          case e:
            var Qe = A.type;
            switch (Qe) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Qe;
              default:
                var N = Qe && Qe.$$typeof;
                switch (N) {
                  case a:
                  case s:
                  case c:
                  case d:
                  case l:
                  case i:
                    return N;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var C = s, V = i, I = e, k = c, $ = r, j = d, O = l, Q = t, se = o, ie = n, _ = u, T = p, M = !1, z = !1;
    function J(A) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(A) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(A) {
      return v(A) === s;
    }
    function pe(A) {
      return v(A) === i;
    }
    function Ie(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function he(A) {
      return v(A) === c;
    }
    function we(A) {
      return v(A) === r;
    }
    function Oe(A) {
      return v(A) === d;
    }
    function Pe(A) {
      return v(A) === l;
    }
    function Ae(A) {
      return v(A) === t;
    }
    function Re(A) {
      return v(A) === o;
    }
    function Ze(A) {
      return v(A) === n;
    }
    function D(A) {
      return v(A) === u;
    }
    function ve(A) {
      return v(A) === p;
    }
    X.ContextConsumer = C, X.ContextProvider = V, X.Element = I, X.ForwardRef = k, X.Fragment = $, X.Lazy = j, X.Memo = O, X.Portal = Q, X.Profiler = se, X.StrictMode = ie, X.Suspense = _, X.SuspenseList = T, X.isAsyncMode = J, X.isConcurrentMode = L, X.isContextConsumer = te, X.isContextProvider = pe, X.isElement = Ie, X.isForwardRef = he, X.isFragment = we, X.isLazy = Oe, X.isMemo = Pe, X.isPortal = Ae, X.isProfiler = Re, X.isStrictMode = Ze, X.isSuspense = D, X.isSuspenseList = ve, X.isValidElementType = E, X.typeOf = v;
  }()), X;
}
process.env.NODE_ENV === "production" ? yr.exports = ka() : yr.exports = Ga();
var Pn = yr.exports;
function Br(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function rr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Br(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Wa(e, t, r) {
  rr(e, "mapStateToProps"), rr(t, "mapDispatchToProps"), rr(r, "mergeProps");
}
const ja = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Ua(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, c, u, p, l, d;
  function f(x, w) {
    return c = x, u = w, p = e(c, u), l = t(n, u), d = r(p, l, u), a = !0, d;
  }
  function g() {
    return p = e(c, u), t.dependsOnOwnProps && (l = t(n, u)), d = r(p, l, u), d;
  }
  function h() {
    return e.dependsOnOwnProps && (p = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(p, l, u), d;
  }
  function m() {
    const x = e(c, u), w = !s(x, p);
    return p = x, w && (d = r(p, l, u)), d;
  }
  function y(x, w) {
    const E = !i(w, u), v = !o(x, c, w, u);
    return c = x, u = w, E && v ? g() : E ? h() : v ? m() : d;
  }
  return function(w, E) {
    return a ? y(w, E) : f(w, E);
  };
}
function za(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Bo(t, ja);
  const s = r(e, i), a = n(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && Wa(s, a, c), Ua(s, a, c, e, i);
}
function Ha(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function qa(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Fo(e, t, r) {
  qa(e) || Br(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function xr(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Rn(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ko(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Rn(e);
      let u = i(a, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Rn(u), u = i(a, c)), process.env.NODE_ENV !== "production" && Fo(u, o, t), u;
    }, i;
  };
}
function Mr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Ya(e) {
  return e && typeof e == "object" ? xr((t) => (
    // @ts-ignore
    Ha(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ko(e, "mapDispatchToProps")
  ) : Mr(e, "mapDispatchToProps") : xr((t) => ({
    dispatch: t
  }));
}
function Ka(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ko(e, "mapStateToProps")
  ) : Mr(e, "mapStateToProps") : xr(() => ({}));
}
function Xa(e, t, r) {
  return Ge({}, r, e, t);
}
function Ja(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(c, u, p) {
      const l = e(c, u, p);
      return i ? o(l, s) || (s = l) : (i = !0, s = l, process.env.NODE_ENV !== "production" && Fo(s, n, "mergeProps")), s;
    };
  };
}
function Za(e) {
  return e ? typeof e == "function" ? Ja(e) : Mr(e, "mergeProps") : () => Xa;
}
function Qa() {
  const e = Ca();
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
const _n = {
  notify() {
  },
  get: () => []
};
function Go(e, t) {
  let r, n = _n, o = 0, i = !1;
  function s(h) {
    p();
    const m = n.subscribe(h);
    let y = !1;
    return () => {
      y || (y = !0, m(), l());
    };
  }
  function a() {
    n.notify();
  }
  function c() {
    g.onStateChange && g.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = Qa());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = _n);
  }
  function d() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, l());
  }
  const g = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return g;
}
const ec = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ft = ec ? G.useLayoutEffect : G.useEffect;
function Tn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function nr(e, t) {
  if (Tn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Tn(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const tc = ["reactReduxForwardedRef"];
let rc = Oa;
const nc = [null, null], oc = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function ic(e, t, r) {
  Ft(() => e(...t), r);
}
function sc(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function ac(e, t, r, n, o, i, s, a, c, u, p) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const f = () => {
    if (l || !a.current)
      return;
    const h = t.getState();
    let m, y;
    try {
      m = n(h, o.current);
    } catch (x) {
      y = x, d = x;
    }
    y || (d = null), m === i.current ? s.current || u() : (i.current = m, c.current = m, s.current = !0, p());
  };
  return r.onStateChange = f, r.trySubscribe(), f(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function cc(e, t) {
  return e === t;
}
let Vn = !1;
function Wo(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = cc,
  areOwnPropsEqual: i = nr,
  areStatePropsEqual: s = nr,
  areMergedPropsEqual: a = nr,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = $o
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Vn && (Vn = !0, Br('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, l = Ka(e), d = Ya(t), f = Za(r), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !Pn.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${oc(m)}`);
    const y = m.displayName || m.name || "Component", x = `Connect(${y})`, w = {
      shouldHandleStateChanges: g,
      displayName: x,
      wrappedComponentName: y,
      WrappedComponent: m,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: s,
      areOwnPropsEqual: i,
      areMergedPropsEqual: a
    };
    function E(V) {
      const [I, k, $] = G.useMemo(() => {
        const {
          reactReduxForwardedRef: D
        } = V, ve = Bo(V, tc);
        return [V.context, D, ve];
      }, [V]), j = G.useMemo(() => I && I.Consumer && // @ts-ignore
      Pn.isContextConsumer(/* @__PURE__ */ G.createElement(I.Consumer, null)) ? I : p, [I, p]), O = G.useContext(j), Q = !!V.store && !!V.store.getState && !!V.store.dispatch, se = !!O && !!O.store;
      if (process.env.NODE_ENV !== "production" && !Q && !se)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const ie = Q ? V.store : O.store, _ = se ? O.getServerState : ie.getState, T = G.useMemo(() => za(ie.dispatch, w), [ie]), [M, z] = G.useMemo(() => {
        if (!g) return nc;
        const D = Go(ie, Q ? void 0 : O.subscription), ve = D.notifyNestedSubs.bind(D);
        return [D, ve];
      }, [ie, Q, O]), J = G.useMemo(() => Q ? O : Ge({}, O, {
        subscription: M
      }), [Q, O, M]), L = G.useRef(), te = G.useRef($), pe = G.useRef(), Ie = G.useRef(!1);
      G.useRef(!1);
      const he = G.useRef(!1), we = G.useRef();
      Ft(() => (he.current = !0, () => {
        he.current = !1;
      }), []);
      const Oe = G.useMemo(() => () => pe.current && $ === te.current ? pe.current : T(ie.getState(), $), [ie, $]), Pe = G.useMemo(() => (ve) => M ? ac(
        g,
        ie,
        M,
        // @ts-ignore
        T,
        te,
        L,
        Ie,
        he,
        pe,
        z,
        ve
      ) : () => {
      }, [M]);
      ic(sc, [te, L, Ie, $, pe, z]);
      let Ae;
      try {
        Ae = rc(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Pe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Oe,
          _ ? () => T(_(), $) : Oe
        );
      } catch (D) {
        throw we.current && (D.message += `
The error may be correlated with this previous error:
${we.current.stack}

`), D;
      }
      Ft(() => {
        we.current = void 0, pe.current = void 0, L.current = Ae;
      });
      const Re = G.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ G.createElement(m, Ge({}, Ae, {
          ref: k
        }))
      ), [k, m, Ae]);
      return G.useMemo(() => g ? /* @__PURE__ */ G.createElement(j.Provider, {
        value: J
      }, Re) : Re, [j, Re, J]);
    }
    const C = G.memo(E);
    if (C.WrappedComponent = m, C.displayName = E.displayName = x, c) {
      const I = G.forwardRef(function($, j) {
        return /* @__PURE__ */ G.createElement(C, Ge({}, $, {
          reactReduxForwardedRef: j
        }));
      });
      return I.displayName = x, I.WrappedComponent = m, In(I, m);
    }
    return In(C, m);
  };
}
function lc({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = G.useMemo(() => {
    const u = Go(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), a = G.useMemo(() => e.getState(), [e]);
  Ft(() => {
    const {
      subscription: u
    } = s;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || $o;
  return /* @__PURE__ */ G.createElement(c.Provider, {
    value: s
  }, r);
}
function uc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function jo(e, t) {
  var r = be(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = H(!0), o = H(r), i = n.current || !!(t && o.current.inputs && uc(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ae(function() {
    n.current = !1, o.current = s;
  }, [s]), s.result;
}
function dc(e, t) {
  return jo(function() {
    return e;
  }, t);
}
var U = jo, P = dc, pc = process.env.NODE_ENV === "production", or = "Invariant failed";
function $n(e, t) {
  if (pc)
    throw new Error(or);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(or, ": ").concat(r) : or;
  throw new Error(n);
}
var Ce = function(t) {
  var r = t.top, n = t.right, o = t.bottom, i = t.left, s = n - i, a = o - r, c = {
    top: r,
    right: n,
    bottom: o,
    left: i,
    width: s,
    height: a,
    x: i,
    y: r,
    center: {
      x: (n + i) / 2,
      y: (o + r) / 2
    }
  };
  return c;
}, Lr = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Bn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, fc = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, ir = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Fr = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? ir : n, i = t.border, s = i === void 0 ? ir : i, a = t.padding, c = a === void 0 ? ir : a, u = Ce(Lr(r, o)), p = Ce(Bn(r, s)), l = Ce(Bn(p, c));
  return {
    marginBox: u,
    borderBox: Ce(r),
    paddingBox: p,
    contentBox: l,
    margin: o,
    border: s,
    padding: c
  };
}, De = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? $n(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : $n()), o;
}, mc = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, kt = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = fc(n, r);
  return Fr({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, Gt = function(t, r) {
  return r === void 0 && (r = mc()), kt(t, r);
}, Uo = function(t, r) {
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
  return Fr({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, zo = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Uo(r, n);
}, Mn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function gc(e, t) {
  return !!(e === t || Mn(e) && Mn(t));
}
function bc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!gc(e[r], t[r]))
      return !1;
  return !0;
}
function ce(e, t) {
  t === void 0 && (t = bc);
  var r = null;
  function n() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (r && r.lastThis === this && t(o, r.lastArgs))
      return r.lastResult;
    var s = e.apply(this, o);
    return r = {
      lastResult: s,
      lastArgs: o,
      lastThis: this
    }, s;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
var ht = function(t) {
  var r = [], n = null, o = function() {
    for (var s = arguments.length, a = new Array(s), c = 0; c < s; c++)
      a[c] = arguments[c];
    r = a, !n && (n = requestAnimationFrame(function() {
      n = null, t.apply(void 0, r);
    }));
  };
  return o.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, o;
};
const hc = process.env.NODE_ENV === "production", vc = /[ \t]{2,}/g, yc = /^[ \t]*/gm, Ln = (e) => e.replace(vc, " ").replace(yc, "").trim(), xc = (e) => Ln(`
  %c@hello-pangea/dnd

  %c${Ln(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Ec = (e) => [xc(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], wc = "__@hello-pangea/dnd-disable-dev-warnings";
function Ho(e, t) {
  hc || typeof window < "u" && window[wc] || console[e](...Ec(t));
}
const ee = Ho.bind(null, "warn"), Er = Ho.bind(null, "error");
function We() {
}
function Dc(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ne(e, t, r) {
  const n = t.map((o) => {
    const i = Dc(r, o.options);
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
const Nc = process.env.NODE_ENV === "production", Fn = "Invariant failed";
class vt extends Error {
}
vt.prototype.toString = function() {
  return this.message;
};
function b(e, t) {
  throw Nc ? new vt(Fn) : new vt(`${Fn}: ${t || ""}`);
}
class Sc extends W.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = We, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && ee(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof vt && (r.preventDefault(), process.env.NODE_ENV !== "production" && Er(o.message));
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
      process.env.NODE_ENV !== "production" && Er(t.message), this.setState({});
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
const Cc = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Wt = (e) => e + 1, Ic = (e) => `
  You have lifted an item in position ${Wt(e.source.index)}
`, qo = (e, t) => {
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
}, Yo = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Oc = (e) => {
  const t = e.destination;
  if (t)
    return qo(e.source, t);
  const r = e.combine;
  return r ? Yo(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, kn = (e) => `
  The item has returned to its starting position
  of ${Wt(e.index)}
`, Ac = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${kn(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${qo(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${Yo(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${kn(e.source)}
  `;
}, Pc = {
  dragHandleUsageInstructions: Cc,
  onDragStart: Ic,
  onDragUpdate: Oc,
  onDragEnd: Ac
};
var Bt = Pc;
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
}, yt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Gn = (e, t) => Math.min(...t.map((r) => yt(e, r))), Ko = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Rc = (e, t) => {
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
}), Wn = (e) => [{
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
}], _c = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Tc = (e, t) => t ? Ct(e, t.scroll.diff.displacement) : e, Vc = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, $c = (e, t) => t && t.shouldClipSubject ? Rc(t.pageMarginBox, e) : Ce(e);
var tt = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Tc(e.marginBox, n), i = Vc(o, r, t), s = $c(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, kr = (e, t) => {
  e.frame || (process.env.NODE_ENV, b());
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
  }, s = tt({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  });
  return {
    ...e,
    frame: i,
    subject: s
  };
};
const Xo = ce((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Jo = ce((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Ht = ce((e) => Object.values(e)), Bc = ce((e) => Object.values(e));
var Je = ce((e, t) => Bc(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Gr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function qt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Yt = ce((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Mc = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Gr(o))
    return null;
  function s(f) {
    const g = {
      type: "COMBINE",
      combine: {
        draggableId: f,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: g
    };
  }
  const a = o.displaced.all, c = a.length ? a[0] : null;
  if (e)
    return c ? s(c) : null;
  const u = Yt(t, n);
  if (!c) {
    if (!u.length)
      return null;
    const f = u[u.length - 1];
    return s(f.descriptor.id);
  }
  const p = u.findIndex((f) => f.descriptor.id === c);
  p === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find displaced item in set") : b());
  const l = p - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return s(d.descriptor.id);
}, st = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Zo = {
  point: le,
  value: 0
}, xt = {
  invisible: {},
  visible: {},
  all: []
}, Lc = {
  displaced: xt,
  displacedBy: Zo,
  at: null
};
var Fc = Lc, Se = (e, t) => (r) => e <= r && r <= t, Qo = (e) => {
  const t = Se(e.top, e.bottom), r = Se(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), s = r(n.left) || r(n.right);
    if (i && s)
      return !0;
    const c = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return c && u ? !0 : c && s || u && i;
  };
}, kc = (e) => {
  const t = Se(e.top, e.bottom), r = Se(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Wr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, ei = {
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
var Gc = (e) => (t) => {
  const r = Se(t.top, t.bottom), n = Se(t.left, t.right);
  return (o) => e === Wr ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Wc = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : le;
  return Ct(e, r);
}, jc = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, Uc = (e, t, r) => r(t)(e), jr = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? Wc(e, t) : e;
  return jc(i, t, o) && Uc(i, r, o);
}, zc = (e) => jr({
  ...e,
  isVisibleThroughFrameFn: Qo
}), ti = (e) => jr({
  ...e,
  isVisibleThroughFrameFn: kc
}), Hc = (e) => jr({
  ...e,
  isVisibleThroughFrameFn: Gc(e.destination.axis)
}), qc = (e, t, r) => {
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
function Yc(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Ce(Lr(r, n));
}
function Et({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, c) {
    const u = Yc(c, r), p = c.descriptor.id;
    if (a.all.push(p), !zc({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const d = qc(p, i, o), f = {
      draggableId: p,
      shouldAnimate: d
    };
    return a.visible[p] = f, a;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function Kc(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function jn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = Kc(e, {
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
  index: s,
  forceShouldAnimate: a
}) {
  const c = st(e, r);
  if (s == null)
    return jn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((g) => g.descriptor.index === s);
  if (!u)
    return jn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const p = Yt(e, t), l = t.indexOf(u), d = p.slice(l);
  return {
    displaced: Et({
      afterDragging: d,
      destination: r,
      displacedBy: o,
      last: i,
      viewport: n.frame,
      forceShouldAnimate: a
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: s
      }
    }
  };
}
function Ue(e, t) {
  return !!t.effected[e];
}
var Xc = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, a = r[i].descriptor.index;
  return Ue(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, Jc = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, s = r[0].descriptor.index, a = r[r.length - 1].descriptor.index, c = t ? a : a + 1;
  return i < s || i > c ? null : i;
}, Zc = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: n,
  destination: o,
  insideDestination: i,
  previousImpact: s,
  viewport: a,
  afterCritical: c
}) => {
  const u = s.at;
  if (u || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot move in direction without previous impact location") : b()), u.type === "REORDER") {
    const l = Jc({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return l == null ? null : jt({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: l
    });
  }
  const p = Xc({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: c
  });
  return p == null ? null : jt({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: p
  });
}, Qc = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return Ue(r, t) ? o ? le : it(n.point) : o ? n.point : le;
}, el = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = qt(t);
  n || (process.env.NODE_ENV, b());
  const o = n.draggableId, i = r[o].page.borderBox.center, s = Qc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return ue(i, s);
};
const ri = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, tl = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Ur = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Un = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Xe(e.line, t.marginBox[e.end] + ri(e, r), Ur(e, t.marginBox, r)), zn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Xe(e.line, t.marginBox[e.start] - tl(e, r), Ur(e, t.marginBox, r)), rl = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Xe(e.line, t.contentBox[e.start] + ri(e, r), Ur(e, t.contentBox, r));
var nl = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = Je(n.descriptor.id, r), s = t.page, a = n.axis;
  if (!i.length)
    return rl({
      axis: a,
      moveInto: n.page,
      isMoving: s
    });
  const {
    displaced: c,
    displacedBy: u
  } = e, p = c.all[0];
  if (p) {
    const d = r[p];
    if (Ue(p, o))
      return zn({
        axis: a,
        moveRelativeTo: d.page,
        isMoving: s
      });
    const f = kt(d.page, u.point);
    return zn({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (Ue(l.descriptor.id, o)) {
    const d = kt(l.page, it(o.displacedBy.point));
    return Un({
      axis: a,
      moveRelativeTo: d,
      isMoving: s
    });
  }
  return Un({
    axis: a,
    moveRelativeTo: l.page,
    isMoving: s
  });
}, wr = (e, t) => {
  const r = e.frame;
  return r ? ue(t, r.scroll.diff.displacement) : t;
};
const ol = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !r || !s ? i : s.type === "REORDER" ? nl({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : el({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Kt = (e) => {
  const t = ol(e), r = e.droppable;
  return r ? wr(r, t) : t;
}, ni = (e, t) => {
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
function Hn(e, t) {
  return e.map((r) => t[r]);
}
function il(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var sl = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = ni(t, ue(t.scroll.current, o)), s = r.frame ? kr(r, ue(r.frame.scroll.current, o)) : r, a = e.displaced, c = Et({
    afterDragging: Hn(a.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = Et({
    afterDragging: Hn(a.all, n),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), p = {}, l = {}, d = [a, c, u];
  return a.all.forEach((g) => {
    const h = il(g, d);
    if (h) {
      l[g] = h;
      return;
    }
    p[g] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: p,
      visible: l
    }
  };
}, al = (e, t) => ue(e.scroll.diff.displacement, t), zr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = al(r, e), o = ye(n, t.page.borderBox.center);
  return ue(t.client.borderBox.center, o);
}, oi = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = ye(r, e.page.borderBox.center), c = {
    target: Ct(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? Hc(c) : ti(c);
}, cl = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: n,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: s,
  previousClientSelection: a,
  afterCritical: c
}) => {
  if (!r.isEnabled)
    return null;
  const u = Je(r.descriptor.id, n), p = st(t, r), l = Mc({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || Zc({
    isMovingForward: e,
    isInHomeList: p,
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
  if (oi({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: zr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const g = ye(d, s), h = sl({
    impact: l,
    viewport: i,
    destination: r,
    draggables: n,
    maxScrollChange: g
  });
  return {
    clientSelection: a,
    impact: h,
    scrollJumpRequest: g
  };
};
const fe = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get clipped area from droppable") : b()), t;
};
var ll = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const s = r.axis, a = Se(i[s.start], i[s.end]), c = Ht(n).filter((p) => p !== r).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => Qo(o.frame)(fe(p))).filter((p) => {
    const l = fe(p);
    return e ? i[s.crossAxisEnd] < l[s.crossAxisEnd] : l[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((p) => {
    const l = fe(p), d = Se(l[s.start], l[s.end]);
    return a(l[s.start]) || a(l[s.end]) || d(i[s.start]) || d(i[s.end]);
  }).sort((p, l) => {
    const d = fe(p)[s.crossAxisStart], f = fe(l)[s.crossAxisStart];
    return e ? d - f : f - d;
  }).filter((p, l, d) => fe(p)[s.crossAxisStart] === fe(d[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((p) => Se(fe(p)[s.start], fe(p)[s.end])(t[s.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((p, l) => fe(p)[s.start] - fe(l)[s.start])[0] : c.sort((p, l) => {
    const d = Gn(t, Wn(fe(p))), f = Gn(t, Wn(fe(l)));
    return d !== f ? d - f : fe(p)[s.start] - fe(l)[s.start];
  })[0];
};
const qn = (e, t) => {
  const r = e.page.borderBox.center;
  return Ue(e.descriptor.id, t) ? ye(r, t.displacedBy.point) : r;
}, ul = (e, t) => {
  const r = e.page.borderBox;
  return Ue(e.descriptor.id, t) ? Ct(r, it(t.displacedBy.point)) : r;
};
var dl = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((s) => ti({
  target: ul(s, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const c = yt(e, wr(r, qn(s, o))), u = yt(e, wr(r, qn(a, o)));
  return c < u ? -1 : u < c ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, It = ce(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: Xe(t.line, n)
  };
});
const pl = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return Xe(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = Je(e.descriptor.id, r).reduce((u, p) => u + p.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : Xe(n.line, c);
}, ii = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), si = (e, t, r) => {
  const n = e.frame;
  st(t, e) && (process.env.NODE_ENV !== "production" ? b(!1, "Should not add placeholder space to home list") : b()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot add placeholder size to a subject when it already has one") : b());
  const o = It(e.axis, t.displaceBy).point, i = pl(e, o, r), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const p = tt({
      page: e.subject.page,
      withPlaceholder: s,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: p
    };
  }
  const a = i ? ue(n.scroll.max, i) : n.scroll.max, c = ii(n, a), u = tt({
    page: e.subject.page,
    withPlaceholder: s,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: u,
    frame: c
  };
}, fl = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot remove placeholder form subject when there was none") : b());
  const r = e.frame;
  if (!r) {
    const s = tt({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: s
    };
  }
  const n = t.oldFrameMaxScroll;
  n || (process.env.NODE_ENV !== "production" ? b(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : b());
  const o = ii(r, n), i = tt({
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
var ml = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: r,
  draggable: n,
  draggables: o,
  destination: i,
  viewport: s,
  afterCritical: a
}) => {
  if (!t) {
    if (r.length)
      return null;
    const l = {
      displaced: xt,
      displacedBy: Zo,
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
      afterCritical: a
    }), f = st(n, i) ? i : si(i, n, o);
    return oi({
      draggable: n,
      destination: f,
      newPageBorderBoxCenter: d,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || c ? l : l + 1;
  })(), p = It(i.axis, n.displaceBy);
  return jt({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: s,
    displacedBy: p,
    last: xt,
    index: u
  });
}, gl = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const c = ll({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const u = Je(c.descriptor.id, o), p = dl({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: u,
    afterCritical: a
  }), l = ml({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: r,
    draggables: o,
    moveRelativeTo: p,
    insideDestination: u,
    viewport: s,
    afterCritical: a
  });
  if (!l)
    return null;
  const d = Kt({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: zr({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: s
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, xe = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const bl = (e, t) => {
  const r = xe(e);
  return r ? t[r] : null;
};
var hl = ({
  state: e,
  type: t
}) => {
  const r = bl(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return a ? cl({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: u,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : gl({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
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
function ai(e) {
  const t = Se(e.top, e.bottom), r = Se(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function vl(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function yl({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const s = i.axis, a = Xe(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: yt(n, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function xl({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Ht(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !vl(e, i))
      return !1;
    if (ai(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], c = e[s.crossAxisStart], u = e[s.crossAxisEnd], p = Se(i[s.crossAxisStart], i[s.crossAxisEnd]), l = p(c), d = p(u);
    return !l && !d ? !0 : l ? c < a : u > a;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : yl({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const ci = (e, t) => Ce(Ct(e, t));
var El = (e, t) => {
  const r = e.frame;
  return r ? ci(t, r.scroll.diff.value) : t;
};
function li({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function wl({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Dl = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = r.axis, c = It(r.axis, t.displaceBy), u = c.value, p = e[a.start], l = e[a.end], f = Yt(t, n).find((h) => {
    const m = h.descriptor.id, y = h.page.borderBox.center[a.line], x = Ue(m, s), w = li({
      displaced: o,
      id: m
    });
    return x ? w ? l <= y : p < y - u : w ? l <= y + u : p < y;
  }) || null, g = wl({
    draggable: t,
    closest: f,
    inHomeList: st(t, r)
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
const Nl = 4;
var Sl = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const s = n.axis, a = It(n.axis, e.displaceBy), c = a.value, u = t[s.start], p = t[s.end], d = Yt(e, o).find((g) => {
    const h = g.descriptor.id, m = g.page.borderBox, x = m[s.size] / Nl, w = Ue(h, i), E = li({
      displaced: r.displaced,
      id: h
    });
    return w ? E ? p > m[s.start] + x && p < m[s.end] - x : u > m[s.start] - c + x && u < m[s.end] - c - x : E ? p > m[s.start] + c + x && p < m[s.end] + c - x : u > m[s.start] + x && u < m[s.end] - x;
  });
  return d ? {
    displacedBy: a,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: d.descriptor.id,
        droppableId: n.descriptor.id
      }
    }
  } : null;
}, ui = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = ci(t.page.borderBox, e), c = xl({
    pageBorderBox: a,
    draggable: t,
    droppables: n
  });
  if (!c)
    return Fc;
  const u = n[c], p = Je(u.descriptor.id, r), l = El(u, a);
  return Sl({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: p,
    afterCritical: s
  }) || Dl({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, Hr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Cl = ({
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
  const s = fl(i);
  return Hr(r, s);
};
var Il = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Cl({
    previousImpact: n,
    impact: o,
    droppables: r
  }), s = xe(o);
  if (!s)
    return i;
  const a = r[s];
  if (st(e, a) || a.subject.withPlaceholder)
    return i;
  const c = si(a, e, t);
  return Hr(i, c);
}, pt = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = n || e.viewport, a = r || e.dimensions, c = t || e.current.client.selection, u = ye(c, e.initial.client.selection), p = {
    offset: u,
    selection: c,
    borderBoxCenter: ue(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: ue(p.selection, s.scroll.current),
    borderBoxCenter: ue(p.borderBoxCenter, s.scroll.current),
    offset: ue(p.offset, s.scroll.diff.value)
  }, d = {
    client: p,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: s,
      current: d
    };
  const f = a.draggables[e.critical.draggable.id], g = o || ui({
    pageOffset: l.offset,
    draggable: f,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), h = Il({
    draggable: f,
    impact: g,
    previousImpact: e.impact,
    draggables: a.draggables,
    droppables: a.droppables
  });
  return {
    ...e,
    current: d,
    dimensions: {
      draggables: a.draggables,
      droppables: h
    },
    impact: g,
    viewport: s,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Ol(e, t) {
  return e.map((r) => t[r]);
}
var di = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = Ol(i.all, r), a = Et({
    afterDragging: s,
    destination: n,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return {
    ...e,
    displaced: a
  };
}, pi = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const s = Kt({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return zr({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, fi = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, b());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, c = s[e.critical.draggable.id], u = xe(n);
  u || (process.env.NODE_ENV !== "production" ? b(!1, "Must be over a destination in SNAP movement mode") : b());
  const p = a[u], l = di({
    impact: n,
    viewport: o,
    destination: p,
    draggables: s
  }), d = pi({
    impact: l,
    draggable: c,
    droppable: p,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return pt({
    impact: l,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Al = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), mi = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = It(t.axis, e.displaceBy), i = Je(t.descriptor.id, r), s = i.indexOf(e);
  s === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Expected draggable to be inside home list") : b());
  const a = i.slice(s + 1), c = a.reduce((d, f) => (d[f.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: Et({
        afterDragging: a,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: n.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: Al(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Pl = (e, t) => ({
  draggables: e.draggables,
  droppables: Hr(e.droppables, t)
});
const Ot = (e) => {
  process.env.NODE_ENV;
}, At = (e) => {
  process.env.NODE_ENV;
};
var Rl = ({
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
}, _l = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Expected Droppable to have a frame") : b()), t;
}, Tl = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], c = _l(s).scroll.diff.value, u = ue(n, c);
    return Rl({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Vl = ({
  state: e,
  published: t
}) => {
  Ot();
  const r = t.modified.map((y) => {
    const x = e.dimensions.droppables[y.droppableId];
    return kr(x, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...Xo(r)
  }, o = Jo(Tl({
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
  const s = {
    droppables: n,
    draggables: i
  }, a = xe(e.impact), c = a ? s.droppables[a] : null, u = s.draggables[e.critical.draggable.id], p = s.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = mi({
    draggable: u,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), f = c && c.isCombineEnabled ? e.impact : l, g = ui({
    pageOffset: e.current.page.offset,
    draggable: s.draggables[e.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: f,
    viewport: e.viewport,
    afterCritical: d
  });
  At();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: g,
    onLiftImpact: l,
    dimensions: s,
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
const Dr = (e) => e.movementMode === "SNAP", sr = (e, t, r) => {
  const n = Pl(e.dimensions, t);
  return !Dr(e) || r ? pt({
    state: e,
    dimensions: n
  }) : fi({
    state: e,
    dimensions: n
  });
};
function ar(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Yn = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var $l = (e = Yn, t) => {
  if (t.type === "FLUSH")
    return {
      ...Yn,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "INITIAL_PUBLISH must come after a IDLE phase") : b());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: s
    } = t.payload, a = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: a.client.borderBox.center,
      offset: le
    }, p = {
      client: u,
      page: {
        selection: ue(u.selection, o.scroll.initial),
        borderBoxCenter: ue(u.selection, o.scroll.initial),
        offset: ue(u.selection, o.scroll.diff.value)
      }
    }, l = Ht(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: d,
      afterCritical: f
    } = mi({
      draggable: a,
      home: c,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: r,
      movementMode: s,
      dimensions: i,
      initial: p,
      current: p,
      isWindowScrollAllowed: l,
      impact: d,
      afterCritical: f,
      onLiftImpact: d,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, `Collection cannot start from phase ${e.phase}`) : b()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : b()), Vl({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b());
    const {
      client: r
    } = t.payload;
    return je(r, e.current.client.selection) ? e : pt({
      state: e,
      clientSelection: r,
      impact: Dr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return ar(e);
    qe(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = kr(o, n);
    return sr(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : b()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? b(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : b());
    const i = {
      ...o,
      isEnabled: n
    };
    return sr(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : b()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? b(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : b());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return sr(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot move by window in phase ${e.phase}`) : b()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? b(!1, "Window scrolling is currently not supported for fixed lists") : b());
    const r = t.payload.newScroll;
    if (je(e.viewport.scroll.current, r))
      return ar(e);
    const n = ni(e.viewport, r);
    return Dr(e) ? fi({
      state: e,
      viewport: n
    }) : pt({
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} received while not in DRAGGING phase`) : b());
    const r = hl({
      state: e,
      type: t.type
    });
    return r ? pt({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? b(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : b()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot animate drop from phase ${e.phase}`) : b()), {
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
const Bl = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Ml = (e) => ({
  type: "LIFT",
  payload: e
}), Ll = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Fl = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), kl = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Gl = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Wl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), jl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), gi = (e) => ({
  type: "MOVE",
  payload: e
}), Ul = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), zl = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Hl = () => ({
  type: "MOVE_UP",
  payload: null
}), ql = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Yl = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Kl = () => ({
  type: "MOVE_LEFT",
  payload: null
}), qr = () => ({
  type: "FLUSH",
  payload: null
}), Xl = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Yr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), bi = (e) => ({
  type: "DROP",
  payload: e
}), Jl = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), hi = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Zl(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), r = {};
  for (let o = 1; o < t.length; o++) {
    const i = t[o], s = t[o - 1];
    i !== s + 1 && (r[i] = !0);
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
function Ql(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Je(e.droppable.id, t.draggables);
    Zl(r);
  }
}
var eu = (e) => ({
  getState: t,
  dispatch: r
}) => (n) => (o) => {
  if (o.type !== "LIFT") {
    n(o);
    return;
  }
  const {
    id: i,
    clientSelection: s,
    movementMode: a
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && r(Yr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase to start a drag") : b()), r(qr()), r(Bl({
    draggableId: i,
    movementMode: a
  }));
  const p = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: l,
    dimensions: d,
    viewport: f
  } = e.startPublishing(p);
  Ql(l, d), r(Ll({
    critical: l,
    dimensions: d,
    clientSelection: s,
    movementMode: a,
    viewport: f
  }));
}, tu = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Kr = {
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
}, vi = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ze = `${vi.outOfTheWay}s ${Kr.outOfTheWay}`, ft = {
  fluid: `opacity ${ze}`,
  snap: `transform ${ze}, opacity ${ze}`,
  drop: (e) => {
    const t = `${e}s ${Kr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ze}`,
  placeholder: `height ${ze}, width ${ze}, margin ${ze}`
}, Kn = (e) => je(e, le) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Nr = {
  moveTo: Kn,
  drop: (e, t) => {
    const r = Kn(e);
    if (r)
      return t ? `${r} scale(${wt.scale.drop})` : r;
  }
}, {
  minDropTime: Sr,
  maxDropTime: yi
} = vi, ru = yi - Sr, Xn = 1500, nu = 0.6;
var ou = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = yt(e, t);
  if (n <= 0)
    return Sr;
  if (n >= Xn)
    return yi;
  const o = n / Xn, i = Sr + ru * o, s = r === "CANCEL" ? i * nu : i;
  return Number(s.toFixed(2));
}, iu = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = r, a = xe(e), c = a ? s[a] : null, u = s[t.descriptor.droppableId], p = pi({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return ye(p, t.client.borderBox.center);
}, su = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: di({
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
const au = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Jl({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? b(!1, "A DROP action occurred while DROP_PENDING and still waiting") : b()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot drop in phase: ${o.phase}`) : b());
  const a = o.critical, c = o.dimensions, u = c.draggables[o.critical.draggable.id], {
    impact: p,
    didDropInsideDroppable: l
  } = su({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = l ? Gr(p) : null, f = l ? qt(p) : null, g = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, h = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: f
  }, m = iu({
    impact: p,
    draggable: u,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), y = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: p
  };
  if (!(!je(o.current.client.offset, m) || !!h.combine)) {
    t(Yr({
      completed: y
    }));
    return;
  }
  const w = ou({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(Xl({
    newHomeClientOffset: m,
    dropDuration: w,
    completed: y
  }));
};
var cu = au, xi = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function lu(e) {
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
function uu({
  onWindowScroll: e
}) {
  function t() {
    e(xi());
  }
  const r = ht(t), n = lu(r);
  let o = We;
  function i() {
    return o !== We;
  }
  function s() {
    i() && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start scroll listener when already active") : b()), o = Ne(window, [n]);
  }
  function a() {
    i() || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop scroll listener when not active") : b()), r.cancel(), o(), o = We;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const du = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", pu = (e) => {
  const t = uu({
    onWindowScroll: (r) => {
      e.dispatch(Ul({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && du(n) && t.stop(), r(n);
  };
};
var fu = pu, mu = (e) => {
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
}, gu = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((a) => a.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find timer") : b());
    const [s] = e.splice(i, 1);
    s.callback();
  };
  return {
    add: (o) => {
      const i = setTimeout(() => t(i)), s = {
        timerId: i,
        callback: o
      };
      e.push(s);
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
const bu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, hu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, vu = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, lt = (e, t) => {
  Ot(), t(), At();
}, _t = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function cr(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = mu(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var yu = (e, t) => {
  const r = gu();
  let n = null;
  const o = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : b()), lt("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: l,
        mode: d
      });
    });
  }, i = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b()), lt("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(_t(l, d));
    });
  }, s = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b());
    const f = _t(l, d);
    n = {
      mode: d,
      lastCritical: l,
      lastLocation: f.source,
      lastCombine: null
    }, r.add(() => {
      lt("onDragStart", () => cr(e().onDragStart, f, t, Bt.onDragStart));
    });
  }, a = (l, d) => {
    const f = Gr(d), g = qt(d);
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragMove when onDragStart has not been called") : b());
    const h = !vu(l, n.lastCritical);
    h && (n.lastCritical = l);
    const m = !bu(n.lastLocation, f);
    m && (n.lastLocation = f);
    const y = !hu(n.lastCombine, g);
    if (y && (n.lastCombine = g), !h && !m && !y)
      return;
    const x = {
      ..._t(l, n.mode),
      combine: g,
      destination: f
    };
    r.add(() => {
      lt("onDragUpdate", () => cr(e().onDragUpdate, x, t, Bt.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Can only flush responders while dragging") : b()), r.flush();
  }, u = (l) => {
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : b()), n = null, lt("onDragEnd", () => cr(e().onDragEnd, l, t, Bt.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: s,
    update: a,
    flush: c,
    drop: u,
    abort: () => {
      if (!n)
        return;
      const l = {
        ..._t(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, xu = (e, t) => {
  const r = yu(e, t);
  return (n) => (o) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      r.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const a = i.payload.critical;
      r.beforeStart(a, i.payload.movementMode), o(i), r.start(a, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const a = i.payload.completed.result;
      r.flush(), o(i), r.drop(a);
      return;
    }
    if (o(i), i.type === "FLUSH") {
      r.abort();
      return;
    }
    const s = n.getState();
    s.phase === "DRAGGING" && r.update(s.critical, s.impact);
  };
};
const Eu = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot finish a drop animating when no drop is occurring") : b()), e.dispatch(Yr({
    completed: n.completed
  }));
};
var wu = Eu;
const Du = (e) => {
  let t = null, r = null;
  function n() {
    r && (cancelAnimationFrame(r), r = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && n(), o(i), i.type !== "DROP_ANIMATE")
      return;
    const s = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(hi());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = Ne(window, [s]);
    });
  };
};
var Nu = Du, Su = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Cu = (e) => {
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
const Iu = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Ou = (e) => (t) => (r) => (n) => {
  if (Iu(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : b()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const Au = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(bi({
    reason: n.reason
  })));
};
var Pu = Au;
const Ru = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Vo;
var _u = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => To($l, Ru(wa(tu(r), Su(e), eu(e), cu, wu, Nu, Pu, Ou(i), fu, Cu(t), xu(n, o))));
const lr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Tu({
  registry: e,
  callbacks: t
}) {
  let r = lr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, Ot();
      const {
        additions: c,
        removals: u,
        modified: p
      } = r, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(le)).sort((g, h) => g.descriptor.index - h.descriptor.index), d = Object.keys(p).map((g) => {
        const m = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: m
        };
      }), f = {
        additions: l,
        removals: Object.keys(u),
        modified: d
      };
      r = lr(), At(), t.publish(f);
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
      n && (cancelAnimationFrame(n), n = null, r = lr());
    }
  };
}
var Ei = ({
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
}, wi = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.documentElement") : b()), e;
}, Di = () => {
  const e = wi();
  return Ei({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Vu = () => {
  const e = xi(), t = Di(), r = e.y, n = e.x, o = wi(), i = o.clientWidth, s = o.clientHeight, a = n + i, c = r + s;
  return {
    frame: Ce({
      top: r,
      left: n,
      right: a,
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
}, $u = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Ot();
  const n = Vu(), o = n.scroll.current, i = e.droppable, s = r.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), a = r.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), c = {
    draggables: Jo(a),
    droppables: Xo(s)
  };
  return At(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function Jn(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ee(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Bu = (e, t) => {
  let r = null;
  const n = Tu({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, f) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : b()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: f
    });
  }, i = (d, f) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : b()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: f
    }));
  }, s = (d, f) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : b()), t.updateDroppableScroll({
      id: d,
      newScroll: f
    }));
  }, a = (d, f) => {
    r && e.droppable.getById(d).callbacks.scroll(f);
  }, c = () => {
    if (!r)
      return;
    n.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((f) => f.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Should only be subscribed when a collection is occurring") : b());
    const f = r.critical.draggable;
    d.type === "ADDITION" && Jn(e, f, d.value) && n.add(d.value), d.type === "REMOVAL" && Jn(e, f, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: a,
    updateDroppableScroll: s,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start capturing critical dimensions as there is already a collection") : b());
      const f = e.draggable.getById(d.draggableId), g = e.droppable.getById(f.descriptor.droppableId), h = {
        draggable: f.descriptor,
        droppable: g.descriptor
      }, m = e.subscribe(u);
      return r = {
        critical: h,
        unsubscribe: m
      }, $u({
        critical: h,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Ni = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Mu = (e) => {
  window.scrollBy(e.x, e.y);
};
const Lu = ce((e) => Ht(e).filter((t) => !(!t.isEnabled || !t.frame))), Fu = (e, t) => Lu(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? b(!1, "Invalid result") : b()), ai(n.frame.pageMarginBox)(e))) || null;
var ku = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Fu(e, r);
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
var Gu = (e, t, r = () => Dt) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Si = ({
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
}, Xr = 1, Wu = (e, t, r = () => Dt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Xr;
  const i = 1 - Si({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = n.maxPixelScroll * n.ease(i);
  return Math.ceil(s);
}, ju = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, s = t, a = i, u = Date.now() - s;
  if (u >= i)
    return e;
  if (u < o)
    return Xr;
  const p = Si({
    startOfRange: o,
    endOfRange: a,
    current: u
  }), l = e * n.ease(p);
  return Math.ceil(l);
}, Zn = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = Wu(e, t, o);
  return i === 0 ? 0 : n ? Math.max(ju(i, r, o), Xr) : i;
}, Qn = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = Gu(e, n, i);
  return t[n.end] < t[n.start] ? Zn({
    distanceToEdge: t[n.end],
    thresholds: s,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Zn({
    distanceToEdge: t[n.start],
    thresholds: s,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Uu = ({
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
const zu = Ko((e) => e === 0 ? 0 : e);
var Ci = ({
  dragStartTime: e,
  container: t,
  subject: r,
  center: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = {
    top: n.y - t.top,
    right: t.right - n.x,
    bottom: t.bottom - n.y,
    left: n.x - t.left
  }, a = Qn({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Wr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Qn({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: ei,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = zu({
    x: c,
    y: a
  });
  if (je(u, le))
    return null;
  const p = Uu({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return p ? je(p, le) ? null : p : null;
};
const Hu = Ko((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Jr = /* @__PURE__ */ (() => {
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
})(), Ii = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Hu(r), i = Jr({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Zr = (e, t) => Ii({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), qu = (e, t) => {
  if (!Zr(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Jr({
    current: n,
    max: r,
    change: t
  });
}, Qr = (e, t) => {
  const r = e.frame;
  return r ? Ii({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, Yu = (e, t) => {
  const r = e.frame;
  return !r || !Qr(e, t) ? null : Jr({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var Ku = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = Ci({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Zr(e, s) ? s : null;
}, Xu = ({
  droppable: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.frame;
  if (!s)
    return null;
  const a = Ci({
    dragStartTime: n,
    container: s.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Qr(e, a) ? a : null;
}, eo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = Ku({
      dragStartTime: t,
      viewport: l,
      subject: c,
      center: s,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (d) {
      n(d);
      return;
    }
  }
  const u = ku({
    center: s,
    destination: xe(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const p = Xu({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: s,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  p && o(u.descriptor.id, p);
}, Ju = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Dt
}) => {
  const n = ht(e), o = ht(t);
  let i = null;
  const s = (u) => {
    i || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fluid scroll if not dragging") : b());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: l
    } = i;
    eo({
      state: u,
      scrollWindow: n,
      scrollDroppable: o,
      dragStartTime: l,
      shouldUseTimeDampening: p,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (u) => {
      Ot(), i && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start auto scrolling when already started") : b());
      const p = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      eo({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: l
      }, At(), l && s(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: s
  };
}, Zu = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (a, c) => {
    const u = ue(a.current.client.selection, c);
    e({
      client: u
    });
  }, o = (a, c) => {
    if (!Qr(a, c))
      return c;
    const u = Yu(a, c);
    if (!u)
      return t(a.descriptor.id, c), null;
    const p = ye(c, u);
    return t(a.descriptor.id, p), ye(c, p);
  }, i = (a, c, u) => {
    if (!a || !Zr(c, u))
      return u;
    const p = qu(c, u);
    if (!p)
      return r(u), null;
    const l = ye(u, p);
    return r(l), ye(u, l);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const u = xe(a.impact);
    u || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot perform a jump scroll when there is no destination") : b());
    const p = o(a.dimensions.droppables[u], c);
    if (!p)
      return;
    const l = a.viewport, d = i(a.isWindowScrollAllowed, l, p);
    d && n(a, d);
  };
}, Qu = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = Ju({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = Zu({
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
})(), Cr = (() => {
  const e = `${rt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ed = (() => {
  const e = `${rt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), to = {
  contextId: `${rt}-scroll-container-context-id`
}, td = (e) => (t) => `[${t}="${e}"]`, ut = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), rd = "pointer-events: none;";
var nd = (e) => {
  const t = td(e), r = (() => {
    const a = `
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
        resting: a,
        dragging: rd,
        dropAnimating: a
      }
    };
  })(), n = (() => {
    const a = `
      transition: ${ft.outOfTheWay};
    `;
    return {
      selector: t(Cr.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(ed.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, s = [n, r, o, {
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
    always: ut(s, "always"),
    resting: ut(s, "resting"),
    dragging: ut(s, "dragging"),
    dropAnimating: ut(s, "dropAnimating"),
    userCancel: ut(s, "userCancel")
  };
};
const od = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? mo : ae;
var Ee = od;
const ur = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find the head to append a style to") : b()), e;
}, ro = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function id(e, t) {
  const r = U(() => nd(e), [e]), n = H(null), o = H(null), i = P(ce((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), d.textContent = l;
  }), []), s = P((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), d.textContent = l;
  }, []);
  Ee(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? b(!1, "style elements already mounted") : b());
    const l = ro(t), d = ro(t);
    return n.current = l, o.current = d, l.setAttribute(`${rt}-always`, e), d.setAttribute(`${rt}-dynamic`, e), ur().appendChild(l), ur().appendChild(d), s(r.always), i(r.resting), () => {
      const f = (g) => {
        const h = g.current;
        h || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot unmount ref as it is not set") : b()), ur().removeChild(h), g.current = null;
      };
      f(n), f(o);
    };
  }, [t, s, i, r.always, r.resting, e]);
  const a = P(() => i(r.dragging), [i, r.dragging]), c = P((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = P(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return U(() => ({
    dragging: a,
    dropping: c,
    resting: u
  }), [a, c, u]);
}
function Oi(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Ai = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Pt(e) {
  return e instanceof Ai(e).HTMLElement;
}
function Pi(e, t) {
  const r = `[${nt.contextId}="${e}"]`, n = Oi(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && ee(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(nt.draggableId) === t);
  return o ? Pt(o) ? o : (process.env.NODE_ENV !== "production" && ee("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ee(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function sd(e) {
  const t = H({}), r = H(null), n = H(null), o = H(!1), i = P(function(d, f) {
    const g = {
      id: d,
      focus: f
    };
    return t.current[d] = g, function() {
      const m = t.current;
      m[d] !== g && delete m[d];
    };
  }, []), s = P(function(d) {
    const f = Pi(e, d);
    f && f !== document.activeElement && f.focus();
  }, [e]), a = P(function(d, f) {
    r.current === d && (r.current = f);
  }, []), c = P(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && s(d);
    }));
  }, [s]), u = P(function(d) {
    r.current = null;
    const f = document.activeElement;
    f && f.getAttribute(nt.draggableId) === d && (r.current = d);
  }, []);
  return Ee(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), U(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [i, u, c, a]);
}
function ad() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(l) {
    return t.push(l), function() {
      const f = t.indexOf(l);
      f !== -1 && t.splice(f, 1);
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
    return d || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find draggable entry with id [${l}]`) : b()), d;
  }
  const s = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, n({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, d) => {
      const f = e.draggables[d.descriptor.id];
      f && f.uniqueId === l.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const d = l.descriptor.id, f = o(d);
      f && l.uniqueId === f.uniqueId && (delete e.draggables[d], e.droppables[l.descriptor.droppableId] && n({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: i,
    findById: o,
    exists: (l) => !!o(l),
    getAllByType: (l) => Object.values(e.draggables).filter((d) => d.descriptor.type === l)
  };
  function a(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const d = a(l);
    return d || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find droppable entry with id [${l}]`) : b()), d;
  }
  const u = {
    register: (l) => {
      e.droppables[l.descriptor.id] = l;
    },
    unregister: (l) => {
      const d = a(l.descriptor.id);
      d && l.uniqueId === d.uniqueId && delete e.droppables[l.descriptor.id];
    },
    getById: c,
    findById: a,
    exists: (l) => !!a(l),
    getAllByType: (l) => Object.values(e.droppables).filter((d) => d.descriptor.type === l)
  };
  function p() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: s,
    droppable: u,
    subscribe: r,
    clean: p
  };
}
function cd() {
  const e = U(ad, []);
  return ae(() => function() {
    W.version.startsWith("16") || W.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var en = W.createContext(null), Nt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.body") : b()), e;
};
const ld = {
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
var ud = ld;
const dd = (e) => `rfd-announcement-${e}`;
function pd(e) {
  const t = U(() => dd(e), [e]), r = H(null);
  return ae(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Ge(i.style, ud), Nt().appendChild(i), function() {
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
let fd = 0;
const Ri = {
  separator: "::"
};
function md(e, t = Ri) {
  return U(() => `${e}${t.separator}${fd++}`, [t.separator, e]);
}
function gd(e, t = Ri) {
  const r = W.useId();
  return U(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var tn = "useId" in W ? gd : md;
function bd({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function hd({
  contextId: e,
  text: t
}) {
  const r = tn("hidden-text", {
    separator: "-"
  }), n = U(() => bd({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ae(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", Nt().appendChild(i), function() {
      const a = Nt();
      a.contains(i) && a.removeChild(i);
    };
  }, [n, t]), n;
}
var Xt = W.createContext(null), vd = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const yd = /(\d+)\.(\d+)\.(\d+)/, no = (e) => {
  const t = yd.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? b(!1, `Unable to parse React version ${e}`) : b());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, xd = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Ed = (e, t) => {
  const r = no(e), n = no(t);
  xd(r, n) || process.env.NODE_ENV !== "production" && ee(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const dr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var wd = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ee(`
      No <!doctype html> found.

      ${dr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ee(`
      Unexpected <!doctype> found: (${t.name})

      ${dr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ee(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${dr}
    `);
};
function rn(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Rt(e, t) {
  rn(() => {
    ae(() => {
      try {
        e();
      } catch (r) {
        Er(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Dd() {
  Rt(() => {
    Ed(vd.react, W.version), wd(document);
  }, []);
}
function nn(e) {
  const t = H(e);
  return ae(() => {
    t.current = e;
  }), t;
}
function Nd() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(s) {
    return s === e;
  }
  function n(s) {
    e && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot claim lock as it is already claimed") : b());
    const a = {
      abandon: s
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot release lock when there is no lock") : b()), e = null;
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
const Sd = 9, Cd = 13, on = 27, _i = 32, Id = 33, Od = 34, Ad = 35, Pd = 36, Rd = 37, _d = 38, Td = 39, Vd = 40, $d = {
  [Cd]: !0,
  [Sd]: !0
};
var Ti = (e) => {
  $d[e.keyCode] && e.preventDefault();
};
const Bd = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Jt = Bd;
const Vi = 0, oo = 5;
function Md(e, t) {
  return Math.abs(t.x - e.x) >= oo || Math.abs(t.y - e.y) >= oo;
}
const io = {
  type: "IDLE"
};
function Ld({
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
        clientX: s,
        clientY: a
      } = o;
      if (i !== Vi)
        return;
      const c = {
        x: s,
        y: a
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot be IDLE") : b());
      const p = u.point;
      if (!Md(p, c))
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
      if (o.keyCode === on) {
        o.preventDefault(), e();
        return;
      }
      Ti(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase") : b()), i.actions.shouldRespectForcePress()) {
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
function Fd(e) {
  const t = H(io), r = H(We), n = U(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Vi || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const d = e.findClosestDraggableId(l);
      if (!d)
        return;
      const f = e.tryGetLock(d, s, {
        sourceEvent: l
      });
      if (!f)
        return;
      l.preventDefault();
      const g = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), u(f, g);
    }
  }), [e]), o = U(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (p) => {
      if (p.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(p);
      if (!l)
        return;
      const d = e.findOptionsForDraggable(l);
      d && (d.shouldRespectForcePress || e.canGetLock(l) && p.preventDefault());
    }
  }), [e]), i = P(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = Ne(window, [o, n], l);
  }, [o, n]), s = P(() => {
    t.current.type !== "IDLE" && (t.current = io, r.current(), i());
  }, [i]), a = P(() => {
    const p = t.current;
    s(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [s]), c = P(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = Ld({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    r.current = Ne(window, d, l);
  }, [a, s]), u = P(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b()), t.current = {
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
function kd() {
}
const Gd = {
  [Od]: !0,
  [Id]: !0,
  [Pd]: !0,
  [Ad]: !0
};
function Wd(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === on) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === _i) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Vd) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === _d) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Td) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Rd) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Gd[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Ti(o);
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
function jd(e) {
  const t = H(kd), r = U(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== _i)
        return;
      const s = e.findClosestDraggableId(i);
      if (!s)
        return;
      const a = e.tryGetLock(s, p, {
        sourceEvent: i
      });
      if (!a)
        return;
      i.preventDefault();
      let c = !0;
      const u = a.snapLift();
      t.current();
      function p() {
        c || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop capturing a keyboard drag when not capturing") : b()), c = !1, t.current(), n();
      }
      t.current = Ne(window, Wd(u, p), {
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
const pr = {
  type: "IDLE"
}, Ud = 120, zd = 0.15;
function Hd({
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
      r.keyCode === on && r.preventDefault(), e();
    }
  }, {
    eventName: Jt,
    fn: e
  }];
}
function qd({
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
        clientY: s
      } = n.touches[0], a = {
        x: i,
        y: s
      };
      n.preventDefault(), o.actions.move(a);
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
      o.type === "IDLE" && (process.env.NODE_ENV, b());
      const i = n.touches[0];
      if (!i || !(i.force >= zd))
        return;
      const a = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        a && e();
        return;
      }
      if (a) {
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
function Yd(e) {
  const t = H(pr), r = H(We), n = P(function() {
    return t.current;
  }, []), o = P(function(f) {
    t.current = f;
  }, []), i = U(() => ({
    eventName: "touchstart",
    fn: function(f) {
      if (f.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(f);
      if (!g)
        return;
      const h = e.tryGetLock(g, a, {
        sourceEvent: f
      });
      if (!h)
        return;
      const m = f.touches[0], {
        clientX: y,
        clientY: x
      } = m, w = {
        x: y,
        y: x
      };
      r.current(), l(h, w);
    }
  }), [e]), s = P(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    r.current = Ne(window, [i], f);
  }, [i]), a = P(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(pr), r.current(), s());
  }, [s, o]), c = P(() => {
    const d = t.current;
    a(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [a]), u = P(function() {
    const f = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: a,
      getPhase: n
    }, h = Ne(window, qd(g), f), m = Ne(window, Hd(g), f);
    r.current = function() {
      h(), m();
    };
  }, [c, n, a]), p = P(function() {
    const f = n();
    f.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, `Cannot start dragging from phase ${f.type}`) : b());
    const g = f.actions.fluidLift(f.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, o]), l = P(function(f, g) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b());
    const h = setTimeout(p, Ud);
    o({
      type: "PENDING",
      point: g,
      actions: f,
      longPressTimerId: h
    }), u();
  }, [u, n, o, p]);
  Ee(function() {
    return s(), function() {
      r.current();
      const g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(pr));
    };
  }, [n, s, o]), Ee(function() {
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
function Kd(e) {
  rn(() => {
    const t = nn(e);
    Rt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot change the amount of sensor hooks after mounting") : b(!1));
    });
  });
}
const Xd = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function $i(e, t) {
  if (t == null)
    return !1;
  if (Xd.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : $i(e, t.parentElement);
}
function Jd(e, t) {
  const r = t.target;
  return Pt(r) ? $i(e, r) : !1;
}
var Zd = (e) => Ce(e.getBoundingClientRect()).center;
function Qd(e) {
  return e instanceof Ai(e).Element;
}
const ep = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Bi(e, t) {
  return e == null ? null : e[ep](t) ? e : Bi(e.parentElement, t);
}
function tp(e, t) {
  return e.closest ? e.closest(t) : Bi(e, t);
}
function rp(e) {
  return `[${nt.contextId}="${e}"]`;
}
function np(e, t) {
  const r = t.target;
  if (!Qd(r))
    return process.env.NODE_ENV !== "production" && ee("event.target must be a Element"), null;
  const n = rp(e), o = tp(r, n);
  return o ? Pt(o) ? o : (process.env.NODE_ENV !== "production" && ee("drag handle must be a HTMLElement"), null) : null;
}
function op(e, t) {
  const r = np(e, t);
  return r ? r.getAttribute(nt.draggableId) : null;
}
function ip(e, t) {
  const r = `[${Cr.contextId}="${e}"]`, o = Oi(document, r).find((i) => i.getAttribute(Cr.id) === t);
  return o ? Pt(o) ? o : (process.env.NODE_ENV !== "production" && ee("Draggable element is not a HTMLElement"), null) : null;
}
function sp(e) {
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
function Mi({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !Ni(t.getState(), n)) : (process.env.NODE_ENV !== "production" && ee(`Unable to find draggable with id: ${n}`), !1);
}
function ap({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!Mi({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), u = ip(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && ee(`Unable to find draggable element with id: ${o}`), null;
  if (s && !c.options.canDragInteractiveElements && Jd(u, s))
    return null;
  const p = e.claim(i || We);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(p);
  }
  function g(v, C) {
    Tt({
      expected: v,
      phase: l,
      isLockActive: f,
      shouldWarn: !0
    }) && r.dispatch(C());
  }
  const h = g.bind(null, "DRAGGING");
  function m(v) {
    function C() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (C(), process.env.NODE_ENV !== "production" ? b(!1, `Cannot lift in phase ${l}`) : b()), r.dispatch(Ml(v.liftActionArgs)), l = "DRAGGING";
    function V(I, k = {
      shouldBlockNextClick: !1
    }) {
      if (v.cleanup(), k.shouldBlockNextClick) {
        const $ = Ne(window, [{
          eventName: "click",
          fn: sp,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      C(), r.dispatch(bi({
        reason: I
      }));
    }
    return {
      isActive: () => Tt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: f,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (I) => V("DROP", I),
      cancel: (I) => V("CANCEL", I),
      ...v.actions
    };
  }
  function y(v) {
    const C = ht((I) => {
      h(() => gi({
        client: I
      }));
    });
    return {
      ...m({
        liftActionArgs: {
          id: o,
          clientSelection: v,
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
  function x() {
    const v = {
      moveUp: () => h(Hl),
      moveRight: () => h(Yl),
      moveDown: () => h(ql),
      moveLeft: () => h(Kl)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: Zd(u),
        movementMode: "SNAP"
      },
      cleanup: We,
      actions: v
    });
  }
  function w() {
    Tt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: f,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Tt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: f,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: y,
    snapLift: x,
    abort: w
  };
}
const cp = [Fd, jd, Yd];
function lp({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? cp : [], ...n || []], s = be(() => Nd())[0], a = P(function(m, y) {
    St(m) && !St(y) && s.tryAbandon();
  }, [s]);
  Ee(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(m, x), m = x;
    });
  }, [s, t, a]), Ee(() => s.tryAbandon, [s.tryAbandon]);
  const c = P((h) => Mi({
    lockAPI: s,
    registry: r,
    store: t,
    draggableId: h
  }), [s, r, t]), u = P((h, m, y) => ap({
    lockAPI: s,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, s, r, t]), p = P((h) => op(e, h), [e]), l = P((h) => {
    const m = r.draggable.findById(h);
    return m ? m.options : null;
  }, [r.draggable]), d = P(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(qr()));
  }, [s, t]), f = P(() => s.isClaimed(), [s]), g = U(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: p,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: f
  }), [c, u, p, l, d, f]);
  Kd(i);
  for (let h = 0; h < i.length; h++)
    i[h](g);
}
const up = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    W.version.startsWith("16") || W.version.startsWith("17") ? r() : bo(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), dp = (e) => ({
  ...Dt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Dt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function dt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find store from lazy ref") : b()), e.current;
}
function pp(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = H(null);
  Dd();
  const a = nn(e), c = P(() => up(a.current), [a]), u = P(() => dp(a.current), [a]), p = pd(t), l = hd({
    contextId: t,
    text: i
  }), d = id(t, o), f = P(($) => {
    dt(s).dispatch($);
  }, []), g = U(() => yn({
    publishWhileDragging: Fl,
    updateDroppableScroll: Gl,
    updateDroppableIsEnabled: Wl,
    updateDroppableIsCombineEnabled: jl,
    collectionStarting: kl
  }, f), [f]), h = cd(), m = U(() => Bu(h, g), [h, g]), y = U(() => Qu({
    scrollWindow: Mu,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: u,
    ...yn({
      move: gi
    }, f)
  }), [m.scrollDroppable, f, u]), x = sd(t), w = U(() => _u({
    announce: p,
    autoScroller: y,
    dimensionMarshal: m,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: d
  }), [p, y, m, x, c, d]);
  process.env.NODE_ENV !== "production" && s.current && s.current !== w && process.env.NODE_ENV !== "production" && ee("unexpected store change"), s.current = w;
  const E = P(() => {
    const $ = dt(s);
    $.getState().phase !== "IDLE" && $.dispatch(qr());
  }, []), v = P(() => {
    const $ = dt(s).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), C = U(() => ({
    isDragging: v,
    tryAbort: E
  }), [v, E]);
  r(C);
  const V = P(($) => Ni(dt(s).getState(), $), []), I = P(() => qe(dt(s).getState()), []), k = U(() => ({
    marshal: m,
    focus: x,
    contextId: t,
    canLift: V,
    isMovementAllowed: I,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, m, l, x, V, I, h]);
  return lp({
    contextId: t,
    store: w,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ae(() => E, [E]), W.createElement(Xt.Provider, {
    value: k
  }, W.createElement(lc, {
    context: en,
    store: w
  }, e.children));
}
let fp = 0;
function mp() {
  return U(() => `${fp++}`, []);
}
function gp() {
  return W.useId();
}
var bp = "useId" in W ? gp : mp;
function hp(e) {
  const t = bp(), r = e.dragHandleUsageInstructions || Bt.dragHandleUsageInstructions;
  return W.createElement(Sc, null, (n) => W.createElement(pp, {
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
const so = {
  dragging: 5e3,
  dropAnimating: 4500
}, vp = (e, t) => t ? ft.drop(t.duration) : e ? ft.snap : ft.fluid, yp = (e, t) => {
  if (e)
    return t ? wt.opacity.drop : wt.opacity.combining;
}, xp = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Ep(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = xp(e), c = !!i, u = c ? Nr.drop(n, s) : Nr.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: vp(a, i),
    transform: u,
    opacity: yp(s, c),
    zIndex: c ? so.dropAnimating : so.dragging,
    pointerEvents: "none"
  };
}
function wp(e) {
  return {
    transform: Nr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Dp(e) {
  return e.type === "DRAGGING" ? Ep(e) : wp(e);
}
function Np(e, t, r = le) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Uo(o, n), s = Gt(i, r), a = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: n.display
  }, c = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: c,
    client: i,
    page: s
  };
}
function Sp(e) {
  const t = tn("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, c = U(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), u = P((f) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get dimension when no ref is set") : b()), Np(r, g, f);
  }, [r, o]), p = U(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = H(p), d = H(!0);
  Ee(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), Ee(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const f = l.current;
    l.current = p, n.draggable.update(p, f);
  }, [p, n.draggable]);
}
var sn = W.createContext(null);
function Li(e) {
  e && Pt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : b());
}
function Cp(e, t, r) {
  Rt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? b(!1, "Draggable requires a draggableId") : b(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : b(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? b(!1, `${n(o)} requires an integer index prop`) : b(!1)), e.mapped.type !== "DRAGGING" && (Li(r()), e.isEnabled && (Pi(t, o) || (process.env.NODE_ENV !== "production" ? b(!1, `${n(o)} Unable to find drag handle`) : b(!1))));
  });
}
function Ip(e) {
  rn(() => {
    const t = H(e);
    Rt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Draggable isClone prop value changed during component life") : b(!1));
    }, [e]);
  });
}
function Ut(e) {
  const t = go(e);
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find required context") : b()), t;
}
function Op(e) {
  e.preventDefault();
}
const Ap = (e) => {
  const t = H(null), r = P((C = null) => {
    t.current = C;
  }, []), n = P(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = Ut(Xt), {
    type: a,
    droppableId: c
  } = Ut(sn), u = U(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: c
  }), [e.draggableId, e.index, a, c]), {
    children: p,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: f,
    canDragInteractiveElements: g,
    isClone: h,
    mapped: m,
    dropAnimationFinished: y
  } = e;
  if (Cp(e, o, n), Ip(h), !h) {
    const C = U(() => ({
      descriptor: u,
      registry: s,
      getDraggableRef: n,
      canDragInteractiveElements: g,
      shouldRespectForcePress: f,
      isEnabled: d
    }), [u, s, n, g, f, d]);
    Sp(C);
  }
  const x = U(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Op
  } : null, [o, i, l, d]), w = P((C) => {
    m.type === "DRAGGING" && m.dropping && C.propertyName === "transform" && (W.version.startsWith("16") || W.version.startsWith("17") ? y() : bo(y));
  }, [y, m]), E = U(() => {
    const C = Dp(m), V = m.type === "DRAGGING" && m.dropping ? w : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: C,
        onTransitionEnd: V
      },
      dragHandleProps: x
    };
  }, [o, x, l, m, w, r]), v = U(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return W.createElement(W.Fragment, null, p(E, m.snapshot, v));
};
var Pp = Ap, Fi = (e, t) => e === t, ki = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Rp = (e) => e.combine ? e.combine.draggableId : null, _p = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Tp() {
  const e = ce((o, i) => ({
    x: o,
    y: i
  })), t = ce((o, i, s = null, a = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: s,
    combineWith: a,
    combineTargetFor: null
  })), r = ce((o, i, s, a, c = null, u = null, p = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: u,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: p,
      snapshot: t(i, a, c, u, null)
    }
  }));
  return (o, i) => {
    if (St(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], c = xe(o.impact), u = _p(o.impact), p = o.forceShouldAnimate;
      return r(e(s.x, s.y), o.movementMode, a, i.isClone, c, u, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, c = o.dimensions.draggables[i.draggableId], u = s.result, p = u.mode, l = ki(u), d = Rp(u), g = {
        duration: o.dropDuration,
        curve: Kr.drop,
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
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, a, l, d, g)
        }
      };
    }
    return null;
  };
}
function Gi(e = null) {
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
const Vp = {
  mapped: {
    type: "SECONDARY",
    offset: le,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Gi(null)
  }
};
function $p() {
  const e = ce((s, a) => ({
    x: s,
    y: a
  })), t = ce(Gi), r = ce((s, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), n = (s) => s ? r(le, s, !0) : null, o = (s, a, c, u) => {
    const p = c.displaced.visible[s], l = !!(u.inVirtualList && u.effected[s]), d = qt(c), f = d && d.draggableId === s ? a : null;
    if (!p) {
      if (!l)
        return n(f);
      if (c.displaced.invisible[s])
        return null;
      const m = it(u.displacedBy.point), y = e(m.x, m.y);
      return r(y, f, !0);
    }
    if (l)
      return n(f);
    const g = c.displacedBy.point, h = e(g.x, g.y);
    return r(h, f, p.shouldAnimate);
  };
  return (s, a) => {
    if (St(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Bp = () => {
  const e = Tp(), t = $p();
  return (n, o) => e(n, o) || t(n, o) || Vp;
}, Mp = {
  dropAnimationFinished: hi
}, Lp = Wo(Bp, Mp, null, {
  context: en,
  areStatePropsEqual: Fi
})(Pp);
var Fp = Lp;
function Wi(e) {
  return Ut(sn).isUsingCloneFor === e.draggableId && !e.isClone ? null : W.createElement(Fp, e);
}
function kp(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return W.createElement(Wi, Ge({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const an = (e) => (t) => e === t, Gp = an("scroll"), Wp = an("auto"), jp = an("visible"), ao = (e, t) => t(e.overflowX) || t(e.overflowY), Up = (e, t) => t(e.overflowX) && t(e.overflowY), ji = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return ao(r, Gp) || ao(r, Wp);
}, zp = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Nt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, b()), !ji(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Up(n, jp) || process.env.NODE_ENV !== "production" && ee(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, cn = (e) => e == null ? null : e === document.body ? zp() ? e : null : e === document.documentElement ? null : ji(e) ? e : cn(e.parentElement);
var Hp = (e) => {
  !e || !cn(e.parentElement) || process.env.NODE_ENV !== "production" && ee(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ir = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ui = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ui(e.parentElement) : !1;
var qp = (e) => {
  const t = cn(e), r = Ui(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Yp = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: n,
  direction: o,
  client: i,
  page: s,
  closest: a
}) => {
  const c = (() => {
    if (!a)
      return null;
    const {
      scrollSize: d,
      client: f
    } = a, g = Ei({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: f.paddingBox.height,
      width: f.paddingBox.width
    });
    return {
      pageMarginBox: a.page.marginBox,
      frameClient: f,
      scrollSize: d,
      shouldClipSubject: a.shouldClipSubject,
      scroll: {
        initial: a.scroll,
        current: a.scroll,
        max: g,
        diff: {
          value: le,
          displacement: le
        }
      }
    };
  })(), u = o === "vertical" ? Wr : ei, p = tt({
    page: s,
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
    page: s,
    frame: c,
    subject: p
  };
};
const Kp = (e, t) => {
  const r = zo(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, s = o + t.scrollWidth, c = Lr({
    top: n,
    right: s,
    bottom: i,
    left: o
  }, r.border);
  return Fr({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Xp = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const c = r.closestScrollable, u = Kp(e, c), p = Gt(u, n), l = (() => {
    if (!c)
      return null;
    const f = zo(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: f,
      page: Gt(f, n),
      scroll: Ir(c),
      scrollSize: g,
      shouldClipSubject: a
    };
  })();
  return Yp({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: p,
    closest: l
  });
};
const Jp = {
  passive: !1
}, Zp = {
  passive: !0
};
var co = (e) => e.shouldPublishImmediately ? Jp : Zp;
const Vt = (e) => e && e.env.closestScrollable || null;
function Qp(e) {
  const t = H(null), r = Ut(Xt), n = tn("droppable"), {
    registry: o,
    marshal: i
  } = r, s = nn(e), a = U(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = H(a), u = U(() => ce((E, v) => {
    t.current || (process.env.NODE_ENV !== "production" ? b(!1, "Can only update scroll when dragging") : b());
    const C = {
      x: E,
      y: v
    };
    i.updateDroppableScroll(a.id, C);
  }), [a.id, i]), p = P(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? le : Ir(E.env.closestScrollable);
  }, []), l = P(() => {
    const E = p();
    u(E.x, E.y);
  }, [p, u]), d = U(() => ht(l), [l]), f = P(() => {
    const E = t.current, v = Vt(E);
    if (E && v || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find scroll options while scrolling") : b()), E.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), g = P((E, v) => {
    t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect a droppable while a drag is occurring") : b());
    const C = s.current, V = C.getDroppableRef();
    V || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect without a droppable ref") : b());
    const I = qp(V), k = {
      ref: V,
      descriptor: a,
      env: I,
      scrollOptions: v
    };
    t.current = k;
    const $ = Xp({
      ref: V,
      descriptor: a,
      env: I,
      windowScroll: E,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), j = I.closestScrollable;
    return j && (j.setAttribute(to.contextId, r.contextId), j.addEventListener("scroll", f, co(k.scrollOptions)), process.env.NODE_ENV !== "production" && Hp(j)), $;
  }, [r.contextId, a, f, s]), h = P(() => {
    const E = t.current, v = Vt(E);
    return E && v || (process.env.NODE_ENV !== "production" ? b(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : b()), Ir(v);
  }, []), m = P(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop drag when no active drag") : b());
    const v = Vt(E);
    t.current = null, v && (d.cancel(), v.removeAttribute(to.contextId), v.removeEventListener("scroll", f, co(E.scrollOptions)));
  }, [f, d]), y = P((E) => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll when there is no drag") : b());
    const C = Vt(v);
    C || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll a droppable with no closest scrollable") : b()), C.scrollTop += E.y, C.scrollLeft += E.x;
  }, []), x = U(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: h,
    dragStopped: m,
    scroll: y
  }), [m, g, h, y]), w = U(() => ({
    uniqueId: n,
    descriptor: a,
    callbacks: x
  }), [x, a, n]);
  Ee(() => (c.current = w.descriptor, o.droppable.register(w), () => {
    t.current && (process.env.NODE_ENV !== "production" && ee("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(w);
  }), [x, a, m, w, i, o.droppable]), Ee(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ee(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function fr() {
}
const lo = {
  width: 0,
  height: 0,
  margin: _c
}, ef = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? lo : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, tf = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = ef({
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
    transition: r !== "none" ? ft.placeholder : null
  };
}, rf = (e) => {
  const t = H(null), r = P(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, c] = be(e.animate === "open");
  ae(() => a ? n !== "open" ? (r(), c(!1), fr) : t.current ? fr : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : fr, [n, a, r]);
  const u = P((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = tf({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return W.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var nf = W.memo(rf);
function mr(e) {
  return typeof e == "boolean";
}
function gr(e, t) {
  t.forEach((r) => r(e));
}
const of = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? b(!1, "A Droppable requires a droppableId prop") : b()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : b());
}, function({
  props: t
}) {
  mr(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isDropDisabled must be a boolean") : b()), mr(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isCombineEnabled must be a boolean") : b()), mr(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? b(!1, "ignoreContainerClipping must be a boolean") : b());
}, function({
  getDroppableRef: t
}) {
  Li(t());
}], sf = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && ee(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], af = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? b(!1, "Must provide a clone render function (renderClone) for virtual lists") : b());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? b(!1, "Expected virtual list to not have a placeholder") : b());
}];
function cf(e) {
  Rt(() => {
    gr(e, of), e.props.mode === "standard" && gr(e, sf), e.props.mode === "virtual" && gr(e, af);
  });
}
class lf extends W.PureComponent {
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
const uf = (e) => {
  const t = go(Xt);
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find app context") : b());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = H(null), i = H(null), {
    children: s,
    droppableId: a,
    type: c,
    mode: u,
    direction: p,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: f,
    snapshot: g,
    useClone: h,
    updateViewportMaxScroll: m,
    getContainerForClone: y
  } = e, x = P(() => o.current, []), w = P((O = null) => {
    o.current = O;
  }, []), E = P(() => i.current, []), v = P((O = null) => {
    i.current = O;
  }, []);
  cf({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: E
  });
  const C = P(() => {
    n() && m({
      maxScroll: Di()
    });
  }, [n, m]);
  Qp({
    droppableId: a,
    type: c,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: f,
    ignoreContainerClipping: l,
    getDroppableRef: x
  });
  const V = U(() => W.createElement(lf, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: O,
    data: Q,
    animate: se
  }) => W.createElement(nf, {
    placeholder: Q,
    onClose: O,
    innerRef: v,
    animate: se,
    contextId: r,
    onTransitionEnd: C
  })), [r, C, e.placeholder, e.shouldAnimatePlaceholder, v]), I = U(() => ({
    innerRef: w,
    placeholder: V,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": r
    }
  }), [r, a, V, w]), k = h ? h.dragging.draggableId : null, $ = U(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: k
  }), [a, k, c]);
  function j() {
    if (!h)
      return null;
    const {
      dragging: O,
      render: Q
    } = h, se = W.createElement(Wi, {
      draggableId: O.draggableId,
      index: O.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (ie, _) => Q(ie, _, O));
    return qi.createPortal(se, y());
  }
  return W.createElement(sn.Provider, {
    value: $
  }, s(I, g), j());
};
var df = uf;
function pf() {
  return document.body || (process.env.NODE_ENV !== "production" ? b(!1, "document.body is not ready") : b()), document.body;
}
const uo = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: pf
}, zi = (e) => {
  let t = {
    ...e
  }, r;
  for (r in uo)
    e[r] === void 0 && (t = {
      ...t,
      [r]: uo[r]
    });
  return t;
}, br = (e, t) => e === t.droppable.type, po = (e, t) => t.draggables[e.draggable.id], ff = () => {
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
  })), n = ce((i, s, a, c, u, p) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const g = p ? {
        render: p,
        dragging: r(u.descriptor)
      } : null, h = {
        isDraggingOver: a,
        draggingOverWith: a ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: u.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: h,
        useClone: g
      };
    }
    if (!s)
      return t;
    if (!c)
      return e;
    const f = {
      isDraggingOver: a,
      draggingOverWith: l,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: u.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: f,
      useClone: null
    };
  });
  return (i, s) => {
    const a = zi(s), c = a.droppableId, u = a.type, p = !a.isDropDisabled, l = a.renderClone;
    if (St(i)) {
      const d = i.critical;
      if (!br(u, d))
        return t;
      const f = po(d, i.dimensions), g = xe(i.impact) === c;
      return n(c, p, g, g, f, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!br(u, d.critical))
        return t;
      const f = po(d.critical, i.dimensions);
      return n(c, p, ki(d.result) === c, xe(d.impact) === c, f, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!br(u, d.critical))
        return t;
      const f = xe(d.impact) === c, g = !!(d.impact.at && d.impact.at.type === "COMBINE"), h = d.critical.droppable.id === c;
      return f ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, mf = {
  updateViewportMaxScroll: zl
}, gf = Wo(ff, mf, (e, t, r) => ({
  ...zi(r),
  ...e,
  ...t
}), {
  context: en,
  areStatePropsEqual: Fi
})(df);
var bf = gf;
const hf = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: n,
  isDragDisabled: o = !0,
  isLoading: i,
  onRowClick: s,
  itemClickKey: a,
  haveLinks: c,
  className: u
}) => {
  const [p, l] = be(null), [d, f] = be(e);
  ae(() => {
    f(e);
  }, [e]);
  const g = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", h = (y) => {
    s == null || s(y), l(y);
  }, m = (y) => {
    if (!y.destination || !(d != null && d.length)) return;
    const x = y.source.index, w = y.destination.index, E = [...d], [v] = E.splice(x, 1);
    E.splice(w, 0, v), f(E);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ de("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ S("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ S("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ S(Ar, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ S(Co, { className: u, children: /* @__PURE__ */ S("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ S("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ S(hp, { onDragEnd: m, children: /* @__PURE__ */ S(bf, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ de("table", { className: "w-full", children: [
    /* @__PURE__ */ S("thead", { children: /* @__PURE__ */ S("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((x, w) => /* @__PURE__ */ S(
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
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          d == null ? void 0 : d.map((x, w) => {
            var E;
            return /* @__PURE__ */ S(
              kp,
              {
                isDragDisabled: o,
                draggableId: (E = x == null ? void 0 : x.id) == null ? void 0 : E.toString(),
                index: w,
                children: (v) => {
                  const C = {
                    ...v.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ S(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${p === d[w] && g}`,
                      onClick: () => h(
                        a ? x[a] : x.id
                      ),
                      ref: v.innerRef,
                      ...v.draggableProps,
                      ...v.dragHandleProps,
                      style: C,
                      children: t.map((V, I) => {
                        var $;
                        let k = ($ = V == null ? void 0 : V.name) == null ? void 0 : $.reduce(
                          (j, O) => j == null ? void 0 : j[O],
                          d == null ? void 0 : d[w]
                        );
                        return /* @__PURE__ */ S(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: V.transform ? V.transform(k, w) : k
                          },
                          I
                        );
                      })
                    }
                  );
                }
              },
              x == null ? void 0 : x.id
            );
          }),
          y.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, Ff = hf, vf = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ S(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), kf = vf;
var Or = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new WeakMap(), fo = 0, yf = void 0;
function xf(e) {
  return e ? ($t.has(e) || (fo += 1, $t.set(e, fo.toString())), $t.get(e)) : "0";
}
function Ef(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? xf(e.root) : e[t]}`).toString();
}
function wf(e) {
  const t = Ef(e);
  let r = Or.get(t);
  if (!r) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const i = new IntersectionObserver((s) => {
      s.forEach((a) => {
        var c;
        const u = a.isIntersecting && o.some((p) => a.intersectionRatio >= p);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u), (c = n.get(a.target)) == null || c.forEach((p) => {
          p(u, a);
        });
      });
    }, e);
    o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: n
    }, Or.set(t, r);
  }
  return r;
}
function Df(e, t, r = {}, n = yf) {
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
  const { id: o, observer: i, elements: s } = wf(r), a = s.get(e) || [];
  return s.has(e) || s.set(e, a), a.push(t), i.observe(e), function() {
    a.splice(a.indexOf(t), 1), a.length === 0 && (s.delete(e), i.unobserve(e)), s.size === 0 && (i.disconnect(), Or.delete(o));
  };
}
function Nf({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: n,
  root: o,
  triggerOnce: i,
  skip: s,
  initialInView: a,
  fallbackInView: c,
  onChange: u
} = {}) {
  var p;
  const [l, d] = G.useState(null), f = G.useRef(u), [g, h] = G.useState({
    inView: !!a,
    entry: void 0
  });
  f.current = u, G.useEffect(
    () => {
      if (s || !l) return;
      let w;
      return w = Df(
        l,
        (E, v) => {
          h({
            inView: E,
            entry: v
          }), f.current && f.current(E, v), v.isIntersecting && i && w && (w(), w = void 0);
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
      s,
      r,
      c,
      t
    ]
  );
  const m = (p = g.entry) == null ? void 0 : p.target, y = G.useRef(void 0);
  !l && m && !i && !s && y.current !== m && (y.current = m, h({
    inView: !!a,
    entry: void 0
  }));
  const x = [d, g.inView, g.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const Sf = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = be(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return ae(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ S(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ S(
        mt,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, Cf = Sf, If = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: s, isFetchingNextPage: a, isLoading: c, data: u } = e, p = u == null ? void 0 : u.pages.flatMap((f) => f), { ref: l, inView: d } = Nf();
  return ae(() => {
    d && i && s();
  }, [s, d, i]), /* @__PURE__ */ de(Mt, { children: [
    o && /* @__PURE__ */ S(Cf, { className: n }),
    /* @__PURE__ */ S(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(p != null && p.length) && p.map((f, g) => t(f, g))
      }
    ),
    /* @__PURE__ */ S(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: l,
        children: (a || c) && /* @__PURE__ */ S(Ar, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && /* @__PURE__ */ S("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, Gf = If, Wf = () => {
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
  Rf as Button,
  _f as Checkbox,
  Tf as Chips,
  Pr as ErrorText,
  mt as Icon,
  Gf as InfiniteScroll,
  Vf as Input,
  $f as List,
  Ar as Loader,
  Bf as MultiSelectSearch,
  Cf as ScrollTopButton,
  Mf as Search,
  Lf as Select,
  Ff as Table,
  kf as Textarea,
  Co as Wrapper,
  _o as useDebounce,
  Wf as useScroll
};
