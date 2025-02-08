import { jsx as I, jsxs as ge, Fragment as _t } from "react/jsx-runtime";
import * as P from "react";
import $, { useState as he, useEffect as ce, useRef as j, useMemo as bc, useLayoutEffect as Sn, useContext as pr } from "react";
import la, { unstable_batchedUpdates as ua, flushSync as Dn } from "react-dom";
const At = ({ name: e, className: t, ...r }) => /* @__PURE__ */ I(
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
), On = ({ style: e, text: t }) => /* @__PURE__ */ ge("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ I("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ I("span", { className: "text-base", children: t })
] }), Iv = ({
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
  const [u, p] = he(""), l = () => {
    o && n === "1C" && (p("Отправляем запрос в 1С"), setTimeout(
      () => p(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  ce(() => {
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
  return /* @__PURE__ */ ge(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: d,
      ...c,
      children: [
        o ? /* @__PURE__ */ I(On, { text: n === "1C" ? u : void 0 }) : e,
        a && !o && /* @__PURE__ */ I(
          At,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Cn = ({ error: e }) => /* @__PURE__ */ I("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ I("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), _v = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: c
}) => /* @__PURE__ */ ge(_t, { children: [
  /* @__PURE__ */ ge(
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
  a && /* @__PURE__ */ I(Cn, { error: a })
] }), Av = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ I("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ I(_t, { children: o.title ? /* @__PURE__ */ I(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ I(_t, {}) })) });
function In(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var Pt;
(function(e) {
  e.event = "event", e.props = "prop";
})(Pt || (Pt = {}));
function He() {
}
function hc(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function ct(e) {
  return !!(e || "").match(/\d/);
}
function st(e) {
  return e == null;
}
function vc(e) {
  return typeof e == "number" && isNaN(e);
}
function da(e) {
  return st(e) || vc(e) || typeof e == "number" && !isFinite(e);
}
function pa(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function yc(e) {
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
function Ec(e, t, r) {
  var n = yc(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function xc(e) {
  var t = j(e);
  t.current = e;
  var r = j(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function _n(e, t) {
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
function wc(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function fa(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function Eo(e, t) {
  return Array(t + 1).join(e);
}
function ma(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + Eo("0", Math.abs(a)) + o : a >= s ? o = o + Eo("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function xo(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = _n(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, c = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : c.toFixed(t), p = u.split("."), l = i;
  i && Number(p[0]) && (l = i.split("").reverse().reduce(function(g, m, v) {
    return g.length > v ? (Number(g[0]) + Number(m)).toString() + g.substring(1, g.length) : m + g;
  }, p[0]));
  var d = fa(p[1] || "", t, r), f = s ? "-" : "", b = n ? "." : "";
  return "" + f + l + b + d;
}
function Je(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var ga = hc(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), Nc = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Sc(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function xr(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Dc() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function ba(e) {
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
function ha(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Oc(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Cc(e, t, r, n, o, i, a) {
  a === void 0 && (a = Oc);
  var s = o.findIndex(function(E) {
    return E;
  }), c = e.slice(0, s);
  !t && !r.startsWith(c) && (t = c, r = c + r, n = n + c.length);
  for (var u = r.length, p = e.length, l = {}, d = new Array(u), f = 0; f < u; f++) {
    d[f] = -1;
    for (var b = 0, g = p; b < g; b++) {
      var m = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: f,
        formattedValueIndex: b
      });
      if (m && l[b] !== !0) {
        d[f] = b, l[b] = !0;
        break;
      }
    }
  }
  for (var v = n; v < u && (d[v] === -1 || !i(r[v])); )
    v++;
  var x = v === u || d[v] === -1 ? p : d[v];
  for (v = n - 1; v > 0 && d[v] === -1; )
    v--;
  var w = v === -1 || d[v] === -1 ? 0 : d[v] + 1;
  return w > x ? x : n - w < x - n ? w : x;
}
function or(e, t, r, n) {
  var o = e.length;
  if (t = Sc(t, 0, o), n === "left") {
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
function Ic(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(ct(e[r]) || ct(e[r - 1]));
  return t;
}
function va(e, t, r, n, o, i) {
  i === void 0 && (i = He);
  var a = xc(function(b, g) {
    var m, v;
    return da(b) ? (v = "", m = "") : typeof b == "number" || g ? (v = typeof b == "number" ? ma(b) : b, m = n(v)) : (v = o(b, void 0), m = n(v)), { formattedValue: m, numAsString: v };
  }), s = he(function() {
    return a(st(e) ? t : e, r);
  }), c = s[0], u = s[1], p = function(b, g) {
    b.formattedValue !== c.formattedValue && u({
      formattedValue: b.formattedValue,
      numAsString: b.value
    }), i(b, g);
  }, l = e, d = r;
  st(e) && (l = c.numAsString, d = !0);
  var f = a(l, d);
  return bc(function() {
    u(f);
  }, [f.formattedValue]), [c, p];
}
function _c(e) {
  return e.replace(/[^0-9]/g, "");
}
function Ac(e) {
  return e;
}
function ya(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = Ac);
  var s = e.removeFormatting;
  s === void 0 && (s = _c);
  var c = e.defaultValue, u = e.valueIsNumericString, p = e.onValueChange, l = e.isAllowed, d = e.onChange;
  d === void 0 && (d = He);
  var f = e.onKeyDown;
  f === void 0 && (f = He);
  var b = e.onMouseUp;
  b === void 0 && (b = He);
  var g = e.onFocus;
  g === void 0 && (g = He);
  var m = e.onBlur;
  m === void 0 && (m = He);
  var v = e.value, x = e.getCaretBoundary;
  x === void 0 && (x = Ic);
  var w = e.isValidInputCharacter;
  w === void 0 && (w = ct);
  var E = e.isCharacterSame, h = In(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), N = va(v, c, !!u, a, s, p), O = N[0], C = O.formattedValue, G = O.numAsString, R = N[1], F = j(), _ = j({ formattedValue: C, numAsString: G }), U = function(A, L) {
    _.current = { formattedValue: A.formattedValue, numAsString: A.value }, R(A, L);
  }, X = he(!1), J = X[0], T = X[1], V = j(null), k = j({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ce(function() {
    return T(!0), function() {
      clearTimeout(k.current.setCaretTimeout), clearTimeout(k.current.focusTimeout);
    };
  }, []);
  var z = a, q = function(A, L) {
    var Y = parseFloat(L);
    return {
      formattedValue: A,
      value: L,
      floatValue: isNaN(Y) ? void 0 : Y
    };
  }, W = function(A, L, Y) {
    A.selectionStart === 0 && A.selectionEnd === A.value.length || (Je(A, L), k.current.setCaretTimeout = setTimeout(function() {
      A.value === Y && A.selectionStart !== L && Je(A, L);
    }, 0));
  }, Z = function(A, L, Y) {
    return or(A, L, x(A), Y);
  }, pe = function(A, L, Y) {
    var fe = x(L), Re = Cc(L, C, A, Y, fe, w, E);
    return Re = or(L, Re, fe), Re;
  }, Ee = function(A) {
    var L = A.formattedValue;
    L === void 0 && (L = "");
    var Y = A.input, fe = A.source, Re = A.event, me = A.numAsString, se;
    if (Y) {
      var Ue = A.inputValue || Y.value, qe = xr(Y);
      Y.value = L, se = pe(Ue, L, qe), se !== void 0 && W(Y, se, L);
    }
    L !== C && U(q(L, me), { event: Re, source: fe });
  };
  ce(function() {
    var A = _.current, L = A.formattedValue, Y = A.numAsString;
    (C !== L || G !== Y) && U(q(C, G), {
      event: void 0,
      source: Pt.props
    });
  }, [C, G]);
  var be = V.current ? xr(V.current) : void 0, xe = typeof window < "u" ? Sn : ce;
  xe(function() {
    var A = V.current;
    if (C !== _.current.formattedValue && A) {
      var L = pe(_.current.formattedValue, C, be);
      A.value = C, W(A, L, C);
    }
  }, [C]);
  var ve = function(A, L, Y) {
    var fe = L.target, Re = F.current ? Nc(F.current, fe.selectionEnd) : ga(C, A), me = Object.assign(Object.assign({}, Re), { lastValue: C }), se = s(A, me), Ue = z(se);
    if (se = s(Ue, void 0), l && !l(q(Ue, se))) {
      var qe = L.target, Ye = xr(qe), Er = pe(A, C, Ye);
      return qe.value = C, W(qe, Er, C), !1;
    }
    return Ee({
      formattedValue: Ue,
      numAsString: se,
      inputValue: A,
      event: L,
      source: Y,
      input: L.target
    }), !0;
  }, De = function(A, L) {
    L === void 0 && (L = 0);
    var Y = A.selectionStart, fe = A.selectionEnd;
    F.current = { selectionStart: Y, selectionEnd: fe + L };
  }, ue = function(A) {
    var L = A.target, Y = L.value, fe = ve(Y, A, Pt.event);
    fe && d(A), F.current = void 0;
  }, Oe = function(A) {
    var L = A.target, Y = A.key, fe = L.selectionStart, Re = L.selectionEnd, me = L.value;
    me === void 0 && (me = "");
    var se;
    Y === "ArrowLeft" || Y === "Backspace" ? se = Math.max(fe - 1, 0) : Y === "ArrowRight" ? se = Math.min(fe + 1, me.length) : Y === "Delete" && (se = fe);
    var Ue = 0;
    Y === "Delete" && fe === Re && (Ue = 1);
    var qe = Y === "ArrowLeft" || Y === "ArrowRight";
    if (se === void 0 || fe !== Re && !qe) {
      f(A), De(L, Ue);
      return;
    }
    var Ye = se;
    if (qe) {
      var Er = Y === "ArrowLeft" ? "left" : "right";
      Ye = Z(me, se, Er), Ye !== se && A.preventDefault();
    } else Y === "Delete" && !w(me[se]) ? Ye = Z(me, se, "right") : Y === "Backspace" && !w(me[se]) && (Ye = Z(me, se, "left"));
    Ye !== se && W(L, Ye, me), f(A), De(L, Ue);
  }, je = function(A) {
    var L = A.target, Y = function() {
      var fe = L.selectionStart, Re = L.selectionEnd, me = L.value;
      if (me === void 0 && (me = ""), fe === Re) {
        var se = Z(me, fe);
        se !== fe && W(L, se, me);
      }
    };
    Y(), requestAnimationFrame(function() {
      Y();
    }), b(A), De(L);
  }, S = function(A) {
    A.persist && A.persist();
    var L = A.target, Y = A.currentTarget;
    V.current = L, k.current.focusTimeout = setTimeout(function() {
      var fe = L.selectionStart, Re = L.selectionEnd, me = L.value;
      me === void 0 && (me = "");
      var se = Z(me, fe);
      se !== fe && !(fe === 0 && Re === me.length) && W(L, se, me), g(Object.assign(Object.assign({}, A), { currentTarget: Y }));
    }, 0);
  }, ye = function(A) {
    V.current = null, clearTimeout(k.current.focusTimeout), clearTimeout(k.current.setCaretTimeout), m(A);
  }, D = J && Dc() ? "numeric" : void 0, Ae = Object.assign({ inputMode: D }, h, {
    type: t,
    value: C,
    onChange: ue,
    onKeyDown: Oe,
    onMouseUp: je,
    onFocus: S,
    onBlur: ye
  });
  if (r === "text")
    return o ? $.createElement($.Fragment, null, o(C, h) || null) : $.createElement("span", Object.assign({}, h, { ref: i }), C);
  if (n) {
    var ke = n;
    return $.createElement(ke, Object.assign({}, Ae, { ref: i }));
  }
  return $.createElement("input", Object.assign({}, Ae, { ref: i }));
}
function wo(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = fr(t), u = c.thousandSeparator, p = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, d = _n(e, a), f = d.beforeDecimal, b = d.afterDecimal, g = d.addNegation;
  return r !== void 0 && (b = fa(b, r, !!n)), u && (f = Ec(f, u, s)), o && (f = o + f), i && (b = b + i), g && (f = "-" + f), e = f + (l && p || "") + b, e;
}
function fr(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Pc(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function Rc(e, t) {
  return new RegExp("(^-)|[0-9]|" + pa(e), "g");
}
function Tc(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function $c(e, t, r) {
  var n;
  t === void 0 && (t = ba(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, u = t.to, p = u.start, l = u.end, d = fr(r), f = d.allowedDecimalSeparators, b = d.decimalSeparator, g = e[l] === b;
  if (ct(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (l - p === 1 && f.indexOf(e[p]) !== -1) {
    var m = s === 0 ? "" : b;
    e = e.substring(0, p) + m + e.substring(p + 1, e.length);
  }
  var v = function(V, k, z) {
    var q = !1, W = !1;
    i.startsWith("-") ? q = !1 : V.startsWith("--") ? (q = !1, W = !0) : a.startsWith("-") && V.length === a.length ? q = !1 : V[0] === "-" && (q = !0);
    var Z = q ? 1 : 0;
    return W && (Z = 2), Z && (V = V.substring(Z), k -= Z, z -= Z), { value: V, start: k, end: z, hasNegation: q };
  }, x = v(e, p, l), w = x.hasNegation;
  n = x, e = n.value, p = n.start, l = n.end;
  var E = v(t.lastValue, c.start, c.end), h = E.start, N = E.end, O = E.value, C = e.substring(p, l);
  e.length && O.length && (h > O.length - a.length || N < i.length) && !(C && a.startsWith(C)) && (e = O);
  var G = 0;
  e.startsWith(i) ? G += i.length : p < i.length && (G = p), e = e.substring(G), l -= G;
  var R = e.length, F = e.length - a.length;
  e.endsWith(a) ? R = F : (l > F || l > e.length - a.length) && (R = l), e = e.substring(0, R), e = Pc(w ? "-" + e : e, o), e = (e.match(Rc(b)) || []).join("");
  var _ = e.indexOf(b);
  e = e.replace(new RegExp(pa(b), "g"), function(V, k) {
    return k === _ ? "." : "";
  });
  var U = _n(e, o), X = U.beforeDecimal, J = U.afterDecimal, T = U.addNegation;
  return u.end - u.start < c.end - c.start && X === "" && g && !parseFloat(J) && (e = T ? "-" : ""), e;
}
function Vc(e, t) {
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
function Mc(e) {
  var t = fr(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function Lc(e) {
  e = Mc(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = He);
  var i = e.onBlur;
  i === void 0 && (i = He);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var p = e.defaultValue, l = e.value, d = e.valueIsNumericString, f = e.onValueChange, b = In(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), g = fr(e), m = g.decimalSeparator, v = g.allowedDecimalSeparators, x = function(T) {
    return wo(T, e);
  }, w = function(T, V) {
    return $c(T, V, e);
  }, E = st(l) ? p : l, h = d ?? Tc(E, u, t);
  st(l) ? st(p) || (h = h || typeof p == "number") : h = h || typeof l == "number";
  var N = function(T) {
    return da(T) ? T : (typeof T == "number" && (T = ma(T)), h && typeof s == "number" ? xo(T, s, !!c) : T);
  }, O = va(N(l), N(p), !!h, x, w, f), C = O[0], G = C.numAsString, R = C.formattedValue, F = O[1], _ = function(T) {
    var V = T.target, k = T.key, z = V.selectionStart, q = V.selectionEnd, W = V.value;
    if (W === void 0 && (W = ""), (k === "Backspace" || k === "Delete") && q < u.length) {
      T.preventDefault();
      return;
    }
    if (z !== q) {
      o(T);
      return;
    }
    k === "Backspace" && W[0] === "-" && z === u.length + 1 && r && Je(V, 1), s && c && (k === "Backspace" && W[z - 1] === m ? (Je(V, z - 1), T.preventDefault()) : k === "Delete" && W[z] === m && T.preventDefault()), v != null && v.includes(k) && W[z] === m && Je(V, z + 1);
    var Z = a === !0 ? "," : a;
    k === "Backspace" && W[z - 1] === Z && Je(V, z - 1), k === "Delete" && W[z] === Z && Je(V, z + 1), o(T);
  }, U = function(T) {
    var V = G;
    if (V.match(/\d/g) || (V = ""), n || (V = wc(V)), c && s && (V = xo(V, s, c)), V !== G) {
      var k = wo(V, e);
      F({
        formattedValue: k,
        value: V,
        floatValue: parseFloat(V)
      }, {
        event: T,
        source: Pt.event
      });
    }
    i(T);
  }, X = function(T) {
    return T === m ? !0 : ct(T);
  }, J = function(T) {
    var V = T.currentValue, k = T.lastValue, z = T.formattedValue, q = T.currentValueIndex, W = T.formattedValueIndex, Z = V[q], pe = z[W], Ee = ga(k, V), be = Ee.to, xe = function(ve) {
      return w(ve).indexOf(".") + u.length;
    };
    return l === 0 && c && s && V[be.start] === m && xe(V) < q && xe(z) > W ? !1 : q >= be.start && q < be.end && v && v.includes(Z) && pe === m ? !0 : Z === pe;
  };
  return Object.assign(Object.assign({}, b), {
    value: R,
    valueIsNumericString: !1,
    isValidInputCharacter: X,
    isCharacterSame: J,
    onValueChange: F,
    format: x,
    removeFormatting: w,
    getCaretBoundary: function(T) {
      return Vc(T, e);
    },
    onKeyDown: _,
    onBlur: U
  });
}
function Bc(e) {
  var t = Lc(e);
  return $.createElement(ya, Object.assign({}, t));
}
function Fc(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (s[c] = e[a] || ha(o, a), a += 1);
  return s.join("");
}
function Gc(e, t, r) {
  t === void 0 && (t = ba(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(m) {
    return n[m] === o;
  }, u = function(m, v) {
    for (var x = "", w = 0; w < m.length; w++)
      c(v + w) && ct(m[w]) && (x += m[w]);
    return x;
  }, p = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return p(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var l = "", d = 0; d < e.length; d++)
      if (c(d))
        ct(e[d]) && (l += e[d]);
      else if (e[d] !== n[d])
        return p(e);
    return l;
  }
  var f = s.substring(0, i.start), b = e.substring(a.start, a.end), g = s.substring(i.end);
  return "" + u(f, 0) + p(b) + u(g, i.end);
}
function kc(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(d, f) {
    var b = void 0;
    d === o && (a++, b = ha(n, a - 1), s === -1 && e[f] === b && (s = f)), c[f] = b;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== c[d];
  }, p = 0, l = i.length; p < l; p++)
    i[p] = p === s || u(p) || u(p - 1);
  return i[r.indexOf(o)] = !0, i;
}
function Wc(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function jc(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Uc(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = He);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = In(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Wc(e);
  var u = function(b) {
    return kc(b, e);
  }, p = function(b) {
    var g = b.key, m = b.target, v = m.selectionStart, x = m.selectionEnd, w = m.value;
    if (v !== x) {
      n(b);
      return;
    }
    var E = v;
    if (g === "Backspace" || g === "Delete") {
      var h = "right";
      if (g === "Backspace") {
        for (; E > 0 && t[E - 1] !== o; )
          E--;
        h = "left";
      } else {
        for (var N = t.length; E < N && t[E] !== o; )
          E++;
        h = "right";
      }
      E = or(w, E, u(w), h);
    } else t[E] !== o && g !== "ArrowLeft" && g !== "ArrowRight" && (E = or(w, E + 1, u(w), "right"));
    E !== v && Je(m, E), n(b);
  }, l = st(i) ? a : i, d = s ?? jc(l, t), f = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(b) {
      return Fc(b, f);
    },
    removeFormatting: function(b, g) {
      return Gc(b, g, f);
    },
    getCaretBoundary: u,
    onKeyDown: p
  });
}
function zc(e) {
  var t = Uc(e);
  return $.createElement(ya, Object.assign({}, t));
}
const Hc = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, Pv = ({
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
  format: p,
  decimalScale: l = 1,
  ...d
}) => {
  var b, g, m;
  const f = "!border-danger";
  return /* @__PURE__ */ ge("label", { children: [
    r && /* @__PURE__ */ I("span", { className: `text-primary ${i}`, children: r }),
    p ? /* @__PURE__ */ I(
      zc,
      {
        onValueChange: (v) => {
          var x;
          t == null || t.onChange((x = v.value.replace("_", "")) == null ? void 0 : x.toString());
        },
        value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${n != null && n.error ? f : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
        format: p,
        ...d
      }
    ) : e === "number" ? /* @__PURE__ */ ge(
      "div",
      {
        className: `${n != null && n.error ? f : ""} ${s} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ I(
            Bc,
            {
              decimalScale: l,
              onValueChange: (v) => {
                var x;
                return t == null ? void 0 : t.onChange((x = v.value.replace("_", "")) == null ? void 0 : x.toString());
              },
              value: (g = t == null ? void 0 : t.value) == null ? void 0 : g.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
              ...d,
              ...Hc.number
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
        className: `${n != null && n.error ? f : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    n != null && n.error && ((m = Object.keys(n == null ? void 0 : n.error)) != null && m.length) ? /* @__PURE__ */ I(Cn, { error: n == null ? void 0 : n.error }) : /* @__PURE__ */ I("div", { className: "h-6" })
  ] });
}, Ea = ({
  children: e,
  className: t
}) => /* @__PURE__ */ I("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), Rv = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = he(null);
  return /* @__PURE__ */ I(Ea, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ I("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ ge(
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
}, An = "-", qc = (e) => {
  const t = Kc(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(An);
      return s[0] === "" && s.length !== 1 && s.shift(), xa(s, t) || Yc(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, xa = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? xa(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(An);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, No = /^\[(.+)\]$/, Yc = (e) => {
  if (No.test(e)) {
    const t = No.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Kc = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Jc(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    tn(a, n, i, t);
  }), n;
}, tn = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : So(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Xc(o)) {
        tn(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      tn(a, So(t, i), r, n);
    });
  });
}, So = (e, t) => {
  let r = e;
  return t.split(An).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Xc = (e) => e.isThemeGetter, Jc = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, Zc = (e) => {
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
}, wa = "!", Qc = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], i = t.length, a = (s) => {
    const c = [];
    let u = 0, p = 0, l;
    for (let m = 0; m < s.length; m++) {
      let v = s[m];
      if (u === 0) {
        if (v === o && (n || s.slice(m, m + i) === t)) {
          c.push(s.slice(p, m)), p = m + i;
          continue;
        }
        if (v === "/") {
          l = m;
          continue;
        }
      }
      v === "[" ? u++ : v === "]" && u--;
    }
    const d = c.length === 0 ? s : s.substring(p), f = d.startsWith(wa), b = f ? d.substring(1) : d, g = l && l > p ? l - p : void 0;
    return {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: b,
      maybePostfixModifierPosition: g
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, el = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, tl = (e) => ({
  cache: Zc(e.cacheSize),
  parseClassName: Qc(e),
  ...qc(e)
}), rl = /\s+/, nl = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(rl);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: p,
      hasImportantModifier: l,
      baseClassName: d,
      maybePostfixModifierPosition: f
    } = r(u);
    let b = !!f, g = n(b ? d.substring(0, f) : d);
    if (!g) {
      if (!b) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = n(d), !g) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      b = !1;
    }
    const m = el(p).join(":"), v = l ? m + wa : m, x = v + g;
    if (i.includes(x))
      continue;
    i.push(x);
    const w = o(g, b);
    for (let E = 0; E < w.length; ++E) {
      const h = w[E];
      i.push(v + h);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function ol() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Na(t)) && (n && (n += " "), n += r);
  return n;
}
const Na = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Na(e[n])) && (r && (r += " "), r += t);
  return r;
};
function il(e, ...t) {
  let r, n, o, i = a;
  function a(c) {
    const u = t.reduce((p, l) => l(p), e());
    return r = tl(u), n = r.cache.get, o = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const p = nl(c, r);
    return o(c, p), p;
  }
  return function() {
    return i(ol.apply(null, arguments));
  };
}
const de = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Sa = /^\[(?:([a-z-]+):)?(.+)\]$/i, al = /^\d+\/\d+$/, sl = /* @__PURE__ */ new Set(["px", "full", "screen"]), cl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ll = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ul = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, pl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ze = (e) => ft(e) || sl.has(e) || al.test(e), Ke = (e) => vt(e, "length", El), ft = (e) => !!e && !Number.isNaN(Number(e)), wr = (e) => vt(e, "number", ft), xt = (e) => !!e && Number.isInteger(Number(e)), fl = (e) => e.endsWith("%") && ft(e.slice(0, -1)), H = (e) => Sa.test(e), Xe = (e) => cl.test(e), ml = /* @__PURE__ */ new Set(["length", "size", "percentage"]), gl = (e) => vt(e, ml, Da), bl = (e) => vt(e, "position", Da), hl = /* @__PURE__ */ new Set(["image", "url"]), vl = (e) => vt(e, hl, wl), yl = (e) => vt(e, "", xl), wt = () => !0, vt = (e, t, r) => {
  const n = Sa.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, El = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ll.test(e) && !ul.test(e)
), Da = () => !1, xl = (e) => dl.test(e), wl = (e) => pl.test(e), Nl = () => {
  const e = de("colors"), t = de("spacing"), r = de("blur"), n = de("brightness"), o = de("borderColor"), i = de("borderRadius"), a = de("borderSpacing"), s = de("borderWidth"), c = de("contrast"), u = de("grayscale"), p = de("hueRotate"), l = de("invert"), d = de("gap"), f = de("gradientColorStops"), b = de("gradientColorStopPositions"), g = de("inset"), m = de("margin"), v = de("opacity"), x = de("padding"), w = de("saturate"), E = de("scale"), h = de("sepia"), N = de("skew"), O = de("space"), C = de("translate"), G = () => ["auto", "contain", "none"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", H, t], _ = () => [H, t], U = () => ["", ze, Ke], X = () => ["auto", ft, H], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", H], q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [ft, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [wt],
      spacing: [ze, Ke],
      blur: ["none", "", Xe, H],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Xe, H],
      borderSpacing: _(),
      borderWidth: U(),
      contrast: W(),
      grayscale: z(),
      hueRotate: W(),
      invert: z(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [fl, Ke],
      inset: F(),
      margin: F(),
      opacity: W(),
      padding: _(),
      saturate: W(),
      scale: W(),
      sepia: z(),
      skew: W(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", H]
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
        columns: [Xe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
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
        object: [...J(), H]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", xt, H]
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
        flex: ["1", "auto", "initial", "none", H]
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
        order: ["first", "last", "none", xt, H]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [wt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", xt, H]
        }, H]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": X()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": X()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [wt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [xt, H]
        }, H]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": X()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": X()
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
        "auto-cols": ["auto", "min", "max", "fr", H]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", H]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [H, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Xe]
        }, Xe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [H, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Xe, Ke]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", wr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [wt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ft, wr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ze, H]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", H]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", H]
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
        decoration: ["auto", "from-font", ze, Ke]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ze, H]
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
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
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
        content: ["none", H]
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
        bg: [...J(), bl]
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
        bg: ["auto", "cover", "contain", gl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vl]
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
        "outline-offset": [ze, H]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ze, Ke]
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
        ring: U()
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
        "ring-offset": [ze, Ke]
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
        shadow: ["", "inner", "none", Xe, yl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [wt]
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
        "drop-shadow": ["", "none", Xe, H]
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
        sepia: [h]
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
        "backdrop-sepia": [h]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", H]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", H]
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
        rotate: [xt, H]
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
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
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
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
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
        "will-change": ["auto", "scroll", "contents", "transform", H]
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
        stroke: [ze, Ke, wr]
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
}, Oa = /* @__PURE__ */ il(Nl);
function Ca(e, t) {
  const [r, n] = he(e);
  return ce(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const Tv = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = he(!1), [a, s] = he(""), c = Ca(a, 100), u = j(null);
  ce(() => {
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
  return /* @__PURE__ */ ge("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ ge("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ I(
        At,
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
          className: Oa(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && a || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (l) => {
              var d;
              return (d = e.find((f) => f.value === l)) == null ? void 0 : d.label;
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
          onClick: () => p(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ ge("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ I(At, { name: l.icon }),
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
}, $v = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = he(r), s = Ca(i, 300);
  return ce(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ ge("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ I(
      At,
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
}, Vv = ({
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
}) => /* @__PURE__ */ ge("label", { children: [
  c && /* @__PURE__ */ I("span", { className: `text-primary ${i}`, children: c }),
  /* @__PURE__ */ I(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ ge(
        "select",
        {
          ...n,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ I("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((p, l) => /* @__PURE__ */ I("option", { value: p.value, className: "text-black", children: p.label }, l))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ I(Cn, { error: o == null ? void 0 : o.error })
] });
function Rt(e) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rt(e);
}
function Sl(e, t) {
  if (Rt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Rt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dl(e) {
  var t = Sl(e, "string");
  return Rt(t) == "symbol" ? t : t + "";
}
function Ol(e, t, r) {
  return (t = Dl(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Do(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Do(Object(r), !0).forEach(function(n) {
      Ol(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Do(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Co = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Nr = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Io = {
  INIT: "@@redux/INIT" + Nr(),
  REPLACE: "@@redux/REPLACE" + Nr(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Nr();
  }
};
function Cl(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Il(e) {
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
  if (Pl(e)) return "date";
  if (Al(e)) return "error";
  var r = _l(e);
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
function _l(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Al(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Pl(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function it(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Il(e)), t;
}
function Ia(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Te(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Te(1) : "Expected the enhancer to be a function. Instead, received: '" + it(r) + "'");
    return r(Ia)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Te(2) : "Expected the root reducer to be a function. Instead, received: '" + it(e) + "'");
  var o = e, i = t, a = [], s = a, c = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function p() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Te(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function l(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Te(4) : "Expected the listener to be a function. Instead, received: '" + it(g) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Te(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return u(), s.push(g), function() {
      if (m) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Te(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, u();
        var x = s.indexOf(g);
        s.splice(x, 1), a = null;
      }
    };
  }
  function d(g) {
    if (!Cl(g))
      throw new Error(process.env.NODE_ENV === "production" ? Te(7) : "Actions must be plain objects. Instead, the actual type was: '" + it(g) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof g.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Te(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Te(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = o(i, g);
    } finally {
      c = !1;
    }
    for (var m = a = s, v = 0; v < m.length; v++) {
      var x = m[v];
      x();
    }
    return g;
  }
  function f(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Te(10) : "Expected the nextReducer to be a function. Instead, received: '" + it(g));
    o = g, d({
      type: Io.REPLACE
    });
  }
  function b() {
    var g, m = l;
    return g = {
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
          throw new Error(process.env.NODE_ENV === "production" ? Te(11) : "Expected the observer to be an object. Instead, received: '" + it(x) + "'");
        function w() {
          x.next && x.next(p());
        }
        w();
        var E = m(w);
        return {
          unsubscribe: E
        };
      }
    }, g[Co] = function() {
      return this;
    }, g;
  }
  return d({
    type: Io.INIT
  }), n = {
    dispatch: d,
    subscribe: l,
    getState: p,
    replaceReducer: f
  }, n[Co] = b, n;
}
function _o(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Ao(e, t) {
  if (typeof e == "function")
    return _o(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Te(16) : "bindActionCreators expected an object or a function, but instead received: '" + it(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = _o(o, t));
  }
  return r;
}
function _a() {
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
function Rl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Te(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(c) {
        return c(a);
      });
      return i = _a.apply(void 0, s)(o.dispatch), Oo(Oo({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Tl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rn = { exports: {} }, Sr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function $l() {
  if (Po) return Sr;
  Po = 1;
  var e = $;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var f = d(), b = n({ inst: { value: f, getSnapshot: d } }), g = b[0].inst, m = b[1];
    return i(
      function() {
        g.value = f, g.getSnapshot = d, c(g) && m({ inst: g });
      },
      [l, f, d]
    ), o(
      function() {
        return c(g) && m({ inst: g }), l(function() {
          c(g) && m({ inst: g });
        });
      },
      [l]
    ), a(f), f;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var f = d();
      return !r(l, f);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Sr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Sr;
}
var Dr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function Vl() {
  return Ro || (Ro = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f, b) {
      return f === b && (f !== 0 || 1 / f === 1 / b) || f !== f && b !== b;
    }
    function t(f, b) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var g = b();
      if (!l) {
        var m = b();
        i(g, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      m = a({
        inst: { value: g, getSnapshot: b }
      });
      var v = m[0].inst, x = m[1];
      return c(
        function() {
          v.value = g, v.getSnapshot = b, r(v) && x({ inst: v });
        },
        [f, g, b]
      ), s(
        function() {
          return r(v) && x({ inst: v }), f(function() {
            r(v) && x({ inst: v });
          });
        },
        [f]
      ), u(g), g;
    }
    function r(f) {
      var b = f.getSnapshot;
      f = f.value;
      try {
        var g = b();
        return !i(f, g);
      } catch {
        return !0;
      }
    }
    function n(f, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = $, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, c = o.useLayoutEffect, u = o.useDebugValue, p = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Dr.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Dr;
}
process.env.NODE_ENV === "production" ? rn.exports = $l() : rn.exports = Vl();
var Pn = rn.exports, Or = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function Ml() {
  if (To) return Or;
  To = 1;
  var e = $, t = Pn;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Or.useSyncExternalStoreWithSelector = function(u, p, l, d, f) {
    var b = i(null);
    if (b.current === null) {
      var g = { hasValue: !1, value: null };
      b.current = g;
    } else g = b.current;
    b = s(
      function() {
        function v(N) {
          if (!x) {
            if (x = !0, w = N, N = d(N), f !== void 0 && g.hasValue) {
              var O = g.value;
              if (f(O, N))
                return E = O;
            }
            return E = N;
          }
          if (O = E, n(w, N)) return O;
          var C = d(N);
          return f !== void 0 && f(O, C) ? (w = N, O) : (w = N, E = C);
        }
        var x = !1, w, E, h = l === void 0 ? null : l;
        return [
          function() {
            return v(p());
          },
          h === null ? void 0 : function() {
            return v(h());
          }
        ];
      },
      [p, l, d, f]
    );
    var m = o(u, b[0], b[1]);
    return a(
      function() {
        g.hasValue = !0, g.value = m;
      },
      [m]
    ), c(m), m;
  }, Or;
}
var Cr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o;
function Ll() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = $, r = Pn, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Cr.useSyncExternalStoreWithSelector = function(u, p, l, d, f) {
      var b = i(null);
      if (b.current === null) {
        var g = { hasValue: !1, value: null };
        b.current = g;
      } else g = b.current;
      b = s(
        function() {
          function v(N) {
            if (!x) {
              if (x = !0, w = N, N = d(N), f !== void 0 && g.hasValue) {
                var O = g.value;
                if (f(O, N))
                  return E = O;
              }
              return E = N;
            }
            if (O = E, n(w, N))
              return O;
            var C = d(N);
            return f !== void 0 && f(O, C) ? (w = N, O) : (w = N, E = C);
          }
          var x = !1, w, E, h = l === void 0 ? null : l;
          return [
            function() {
              return v(p());
            },
            h === null ? void 0 : function() {
              return v(h());
            }
          ];
        },
        [p, l, d, f]
      );
      var m = o(u, b[0], b[1]);
      return a(
        function() {
          g.hasValue = !0, g.value = m;
        },
        [m]
      ), c(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Cr;
}
process.env.NODE_ENV === "production" ? Ml() : Ll();
function Bl(e) {
  e();
}
let Aa = Bl;
const Fl = (e) => Aa = e, Gl = () => Aa, Vo = Symbol.for("react-redux-context"), Mo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function kl() {
  var e;
  if (!P.createContext) return {};
  const t = (e = Mo[Vo]) != null ? e : Mo[Vo] = /* @__PURE__ */ new Map();
  let r = t.get(P.createContext);
  return r || (r = P.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(P.createContext, r)), r;
}
const Pa = /* @__PURE__ */ kl(), Wl = () => {
  throw new Error("uSES not initialized!");
};
function Ze() {
  return Ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ze.apply(null, arguments);
}
function Ra(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var nn = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function jl() {
  if (Lo) return Q;
  Lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var N = h.$$typeof;
      switch (N) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case p:
                case b:
                case f:
                case a:
                  return h;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function E(h) {
    return w(h) === u;
  }
  return Q.AsyncMode = c, Q.ConcurrentMode = u, Q.ContextConsumer = s, Q.ContextProvider = a, Q.Element = t, Q.ForwardRef = p, Q.Fragment = n, Q.Lazy = b, Q.Memo = f, Q.Portal = r, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = l, Q.isAsyncMode = function(h) {
    return E(h) || w(h) === c;
  }, Q.isConcurrentMode = E, Q.isContextConsumer = function(h) {
    return w(h) === s;
  }, Q.isContextProvider = function(h) {
    return w(h) === a;
  }, Q.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Q.isForwardRef = function(h) {
    return w(h) === p;
  }, Q.isFragment = function(h) {
    return w(h) === n;
  }, Q.isLazy = function(h) {
    return w(h) === b;
  }, Q.isMemo = function(h) {
    return w(h) === f;
  }, Q.isPortal = function(h) {
    return w(h) === r;
  }, Q.isProfiler = function(h) {
    return w(h) === i;
  }, Q.isStrictMode = function(h) {
    return w(h) === o;
  }, Q.isSuspense = function(h) {
    return w(h) === l;
  }, Q.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === i || h === o || h === l || h === d || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === f || h.$$typeof === a || h.$$typeof === s || h.$$typeof === p || h.$$typeof === m || h.$$typeof === v || h.$$typeof === x || h.$$typeof === g);
  }, Q.typeOf = w, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function Ul() {
  return Bo || (Bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function w(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === l || S === d || typeof S == "object" && S !== null && (S.$$typeof === b || S.$$typeof === f || S.$$typeof === a || S.$$typeof === s || S.$$typeof === p || S.$$typeof === m || S.$$typeof === v || S.$$typeof === x || S.$$typeof === g);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var ye = S.$$typeof;
        switch (ye) {
          case t:
            var D = S.type;
            switch (D) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case l:
                return D;
              default:
                var Ae = D && D.$$typeof;
                switch (Ae) {
                  case s:
                  case p:
                  case b:
                  case f:
                  case a:
                    return Ae;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var h = c, N = u, O = s, C = a, G = t, R = p, F = n, _ = b, U = f, X = r, J = i, T = o, V = l, k = !1;
    function z(S) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(S) || E(S) === c;
    }
    function q(S) {
      return E(S) === u;
    }
    function W(S) {
      return E(S) === s;
    }
    function Z(S) {
      return E(S) === a;
    }
    function pe(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Ee(S) {
      return E(S) === p;
    }
    function be(S) {
      return E(S) === n;
    }
    function xe(S) {
      return E(S) === b;
    }
    function ve(S) {
      return E(S) === f;
    }
    function De(S) {
      return E(S) === r;
    }
    function ue(S) {
      return E(S) === i;
    }
    function Oe(S) {
      return E(S) === o;
    }
    function je(S) {
      return E(S) === l;
    }
    ee.AsyncMode = h, ee.ConcurrentMode = N, ee.ContextConsumer = O, ee.ContextProvider = C, ee.Element = G, ee.ForwardRef = R, ee.Fragment = F, ee.Lazy = _, ee.Memo = U, ee.Portal = X, ee.Profiler = J, ee.StrictMode = T, ee.Suspense = V, ee.isAsyncMode = z, ee.isConcurrentMode = q, ee.isContextConsumer = W, ee.isContextProvider = Z, ee.isElement = pe, ee.isForwardRef = Ee, ee.isFragment = be, ee.isLazy = xe, ee.isMemo = ve, ee.isPortal = De, ee.isProfiler = ue, ee.isStrictMode = Oe, ee.isSuspense = je, ee.isValidElementType = w, ee.typeOf = E;
  }()), ee;
}
process.env.NODE_ENV === "production" ? nn.exports = jl() : nn.exports = Ul();
var zl = nn.exports, Rn = zl, Hl = {
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
}, ql = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Yl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ta = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Tn = {};
Tn[Rn.ForwardRef] = Yl;
Tn[Rn.Memo] = Ta;
function Fo(e) {
  return Rn.isMemo(e) ? Ta : Tn[e.$$typeof] || Hl;
}
var Kl = Object.defineProperty, Xl = Object.getOwnPropertyNames, Go = Object.getOwnPropertySymbols, Jl = Object.getOwnPropertyDescriptor, Zl = Object.getPrototypeOf, ko = Object.prototype;
function $a(e, t, r) {
  if (typeof t != "string") {
    if (ko) {
      var n = Zl(t);
      n && n !== ko && $a(e, n, r);
    }
    var o = Xl(t);
    Go && (o = o.concat(Go(t)));
    for (var i = Fo(e), a = Fo(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!ql[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = Jl(t, c);
        try {
          Kl(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ql = $a;
const Wo = /* @__PURE__ */ Tl(Ql);
var on = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function eu() {
  if (jo) return te;
  jo = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var v = m.$$typeof;
      switch (v) {
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
  return te.ContextConsumer = a, te.ContextProvider = i, te.Element = e, te.ForwardRef = c, te.Fragment = r, te.Lazy = d, te.Memo = l, te.Portal = t, te.Profiler = o, te.StrictMode = n, te.Suspense = u, te.SuspenseList = p, te.isAsyncMode = function() {
    return !1;
  }, te.isConcurrentMode = function() {
    return !1;
  }, te.isContextConsumer = function(m) {
    return g(m) === a;
  }, te.isContextProvider = function(m) {
    return g(m) === i;
  }, te.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, te.isForwardRef = function(m) {
    return g(m) === c;
  }, te.isFragment = function(m) {
    return g(m) === r;
  }, te.isLazy = function(m) {
    return g(m) === d;
  }, te.isMemo = function(m) {
    return g(m) === l;
  }, te.isPortal = function(m) {
    return g(m) === t;
  }, te.isProfiler = function(m) {
    return g(m) === o;
  }, te.isStrictMode = function(m) {
    return g(m) === n;
  }, te.isSuspense = function(m) {
    return g(m) === u;
  }, te.isSuspenseList = function(m) {
    return g(m) === p;
  }, te.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === p || m === f || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === l || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === b || m.getModuleId !== void 0);
  }, te.typeOf = g, te;
}
var re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo;
function tu() {
  return Uo || (Uo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), b = !1, g = !1, m = !1, v = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function E(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || x || D === n || D === u || D === p || v || D === f || b || g || m || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === l || D.$$typeof === i || D.$$typeof === a || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === w || D.getModuleId !== void 0));
    }
    function h(D) {
      if (typeof D == "object" && D !== null) {
        var Ae = D.$$typeof;
        switch (Ae) {
          case e:
            var ke = D.type;
            switch (ke) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return ke;
              default:
                var A = ke && ke.$$typeof;
                switch (A) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return A;
                  default:
                    return Ae;
                }
            }
          case t:
            return Ae;
        }
      }
    }
    var N = a, O = i, C = e, G = c, R = r, F = d, _ = l, U = t, X = o, J = n, T = u, V = p, k = !1, z = !1;
    function q(D) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(D) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(D) {
      return h(D) === a;
    }
    function pe(D) {
      return h(D) === i;
    }
    function Ee(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function be(D) {
      return h(D) === c;
    }
    function xe(D) {
      return h(D) === r;
    }
    function ve(D) {
      return h(D) === d;
    }
    function De(D) {
      return h(D) === l;
    }
    function ue(D) {
      return h(D) === t;
    }
    function Oe(D) {
      return h(D) === o;
    }
    function je(D) {
      return h(D) === n;
    }
    function S(D) {
      return h(D) === u;
    }
    function ye(D) {
      return h(D) === p;
    }
    re.ContextConsumer = N, re.ContextProvider = O, re.Element = C, re.ForwardRef = G, re.Fragment = R, re.Lazy = F, re.Memo = _, re.Portal = U, re.Profiler = X, re.StrictMode = J, re.Suspense = T, re.SuspenseList = V, re.isAsyncMode = q, re.isConcurrentMode = W, re.isContextConsumer = Z, re.isContextProvider = pe, re.isElement = Ee, re.isForwardRef = be, re.isFragment = xe, re.isLazy = ve, re.isMemo = De, re.isPortal = ue, re.isProfiler = Oe, re.isStrictMode = je, re.isSuspense = S, re.isSuspenseList = ye, re.isValidElementType = E, re.typeOf = h;
  }()), re;
}
process.env.NODE_ENV === "production" ? on.exports = eu() : on.exports = tu();
var zo = on.exports;
function $n(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ir(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || $n(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function ru(e, t, r) {
  Ir(e, "mapStateToProps"), Ir(t, "mapDispatchToProps"), Ir(r, "mergeProps");
}
const nu = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function ou(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, p, l, d;
  function f(x, w) {
    return c = x, u = w, p = e(c, u), l = t(n, u), d = r(p, l, u), s = !0, d;
  }
  function b() {
    return p = e(c, u), t.dependsOnOwnProps && (l = t(n, u)), d = r(p, l, u), d;
  }
  function g() {
    return e.dependsOnOwnProps && (p = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(p, l, u), d;
  }
  function m() {
    const x = e(c, u), w = !a(x, p);
    return p = x, w && (d = r(p, l, u)), d;
  }
  function v(x, w) {
    const E = !i(w, u), h = !o(x, c, w, u);
    return c = x, u = w, E && h ? b() : E ? g() : h ? m() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : f(w, E);
  };
}
function iu(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Ra(t, nu);
  const a = r(e, i), s = n(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && ru(a, s, c), ou(a, s, c, e, i);
}
function au(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function su(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Va(e, t, r) {
  su(e) || $n(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function an(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Ho(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ma(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Ho(e);
      let u = i(s, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Ho(u), u = i(s, c)), process.env.NODE_ENV !== "production" && Va(u, o, t), u;
    }, i;
  };
}
function Vn(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function cu(e) {
  return e && typeof e == "object" ? an((t) => (
    // @ts-ignore
    au(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ma(e, "mapDispatchToProps")
  ) : Vn(e, "mapDispatchToProps") : an((t) => ({
    dispatch: t
  }));
}
function lu(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ma(e, "mapStateToProps")
  ) : Vn(e, "mapStateToProps") : an(() => ({}));
}
function uu(e, t, r) {
  return Ze({}, r, e, t);
}
function du(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(c, u, p) {
      const l = e(c, u, p);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && Va(a, n, "mergeProps")), a;
    };
  };
}
function pu(e) {
  return e ? typeof e == "function" ? du(e) : Vn(e, "mergeProps") : () => uu;
}
function fu() {
  const e = Gl();
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
const qo = {
  notify() {
  },
  get: () => []
};
function La(e, t) {
  let r, n = qo, o = 0, i = !1;
  function a(g) {
    p();
    const m = n.subscribe(g);
    let v = !1;
    return () => {
      v || (v = !0, m(), l());
    };
  }
  function s() {
    n.notify();
  }
  function c() {
    b.onStateChange && b.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = fu());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = qo);
  }
  function d() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, l());
  }
  const b = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return b;
}
const mu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = mu ? P.useLayoutEffect : P.useEffect;
function Yo(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _r(e, t) {
  if (Yo(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Yo(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const gu = ["reactReduxForwardedRef"];
let Ba = Wl;
const bu = (e) => {
  Ba = e;
}, hu = [null, null], vu = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function yu(e, t, r) {
  ir(() => e(...t), r);
}
function Eu(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function xu(e, t, r, n, o, i, a, s, c, u, p) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const f = () => {
    if (l || !s.current)
      return;
    const g = t.getState();
    let m, v;
    try {
      m = n(g, o.current);
    } catch (x) {
      v = x, d = x;
    }
    v || (d = null), m === i.current ? a.current || u() : (i.current = m, c.current = m, a.current = !0, p());
  };
  return r.onStateChange = f, r.trySubscribe(), f(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function wu(e, t) {
  return e === t;
}
let Ko = !1;
function Fa(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = wu,
  areOwnPropsEqual: i = _r,
  areStatePropsEqual: a = _r,
  areMergedPropsEqual: s = _r,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = Pa
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Ko && (Ko = !0, $n('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, l = lu(e), d = cu(t), f = pu(r), b = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !zo.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${vu(m)}`);
    const v = m.displayName || m.name || "Component", x = `Connect(${v})`, w = {
      shouldHandleStateChanges: b,
      displayName: x,
      wrappedComponentName: v,
      WrappedComponent: m,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(O) {
      const [C, G, R] = P.useMemo(() => {
        const {
          reactReduxForwardedRef: S
        } = O, ye = Ra(O, gu);
        return [O.context, S, ye];
      }, [O]), F = P.useMemo(() => C && C.Consumer && // @ts-ignore
      zo.isContextConsumer(/* @__PURE__ */ P.createElement(C.Consumer, null)) ? C : p, [C, p]), _ = P.useContext(F), U = !!O.store && !!O.store.getState && !!O.store.dispatch, X = !!_ && !!_.store;
      if (process.env.NODE_ENV !== "production" && !U && !X)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const J = U ? O.store : _.store, T = X ? _.getServerState : J.getState, V = P.useMemo(() => iu(J.dispatch, w), [J]), [k, z] = P.useMemo(() => {
        if (!b) return hu;
        const S = La(J, U ? void 0 : _.subscription), ye = S.notifyNestedSubs.bind(S);
        return [S, ye];
      }, [J, U, _]), q = P.useMemo(() => U ? _ : Ze({}, _, {
        subscription: k
      }), [U, _, k]), W = P.useRef(), Z = P.useRef(R), pe = P.useRef(), Ee = P.useRef(!1);
      P.useRef(!1);
      const be = P.useRef(!1), xe = P.useRef();
      ir(() => (be.current = !0, () => {
        be.current = !1;
      }), []);
      const ve = P.useMemo(() => () => pe.current && R === Z.current ? pe.current : V(J.getState(), R), [J, R]), De = P.useMemo(() => (ye) => k ? xu(
        b,
        J,
        k,
        // @ts-ignore
        V,
        Z,
        W,
        Ee,
        be,
        pe,
        z,
        ye
      ) : () => {
      }, [k]);
      yu(Eu, [Z, W, Ee, R, pe, z]);
      let ue;
      try {
        ue = Ba(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          De,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ve,
          T ? () => V(T(), R) : ve
        );
      } catch (S) {
        throw xe.current && (S.message += `
The error may be correlated with this previous error:
${xe.current.stack}

`), S;
      }
      ir(() => {
        xe.current = void 0, pe.current = void 0, W.current = ue;
      });
      const Oe = P.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ P.createElement(m, Ze({}, ue, {
          ref: G
        }))
      ), [G, m, ue]);
      return P.useMemo(() => b ? /* @__PURE__ */ P.createElement(F.Provider, {
        value: q
      }, Oe) : Oe, [F, Oe, q]);
    }
    const N = P.memo(E);
    if (N.WrappedComponent = m, N.displayName = E.displayName = x, c) {
      const C = P.forwardRef(function(R, F) {
        return /* @__PURE__ */ P.createElement(N, Ze({}, R, {
          reactReduxForwardedRef: F
        }));
      });
      return C.displayName = x, C.WrappedComponent = m, Wo(C, m);
    }
    return Wo(N, m);
  };
}
function Nu({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = P.useMemo(() => {
    const u = La(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = P.useMemo(() => e.getState(), [e]);
  ir(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || Pa;
  return /* @__PURE__ */ P.createElement(c.Provider, {
    value: a
  }, r);
}
bu(Pn.useSyncExternalStore);
Fl(ua);
function Su(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Ga(e, t) {
  var r = he(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = j(!0), o = j(r), i = n.current || !!(t && o.current.inputs && Su(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ce(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Du(e, t) {
  return Ga(function() {
    return e;
  }, t);
}
var K = Ga, M = Du, Ou = process.env.NODE_ENV === "production", Ar = "Invariant failed";
function Xo(e, t) {
  if (Ou)
    throw new Error(Ar);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Ar, ": ").concat(r) : Ar;
  throw new Error(n);
}
var We = function(t) {
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
}, Mn = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Jo = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Cu = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Pr = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ln = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Pr : n, i = t.border, a = i === void 0 ? Pr : i, s = t.padding, c = s === void 0 ? Pr : s, u = We(Mn(r, o)), p = We(Jo(r, a)), l = We(Jo(p, c));
  return {
    marginBox: u,
    borderBox: We(r),
    paddingBox: p,
    contentBox: l,
    margin: o,
    border: a,
    padding: c
  };
}, Le = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Xo(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Xo()), o;
}, Iu = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, ar = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Cu(n, r);
  return Ln({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, sr = function(t, r) {
  return r === void 0 && (r = Iu()), ar(t, r);
}, ka = function(t, r) {
  var n = {
    top: Le(r.marginTop),
    right: Le(r.marginRight),
    bottom: Le(r.marginBottom),
    left: Le(r.marginLeft)
  }, o = {
    top: Le(r.paddingTop),
    right: Le(r.paddingRight),
    bottom: Le(r.paddingBottom),
    left: Le(r.paddingLeft)
  }, i = {
    top: Le(r.borderTopWidth),
    right: Le(r.borderRightWidth),
    bottom: Le(r.borderBottomWidth),
    left: Le(r.borderLeftWidth)
  };
  return Ln({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, Wa = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return ka(r, n);
}, Zo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function _u(e, t) {
  return !!(e === t || Zo(e) && Zo(t));
}
function Au(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!_u(e[r], t[r]))
      return !1;
  return !0;
}
function Ne(e, t) {
  t === void 0 && (t = Au);
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
var Tt = function(t) {
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
const Pu = process.env.NODE_ENV === "production", Ru = /[ \t]{2,}/g, Tu = /^[ \t]*/gm, Qo = (e) => e.replace(Ru, " ").replace(Tu, "").trim(), $u = (e) => Qo(`
  %c@hello-pangea/dnd

  %c${Qo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Vu = (e) => [$u(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Mu = "__@hello-pangea/dnd-disable-dev-warnings";
function ja(e, t) {
  Pu || typeof window < "u" && window[Mu] || console[e](...Vu(t));
}
const le = ja.bind(null, "warn"), sn = ja.bind(null, "error");
function Qe() {
}
function Lu(e, t) {
  return {
    ...e,
    ...t
  };
}
function Fe(e, t, r) {
  const n = t.map((o) => {
    const i = Lu(r, o.options);
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
const Bu = process.env.NODE_ENV === "production", ei = "Invariant failed";
class $t extends Error {
}
$t.prototype.toString = function() {
  return this.message;
};
function y(e, t) {
  throw Bu ? new $t(ei) : new $t(`${ei}: ${t || ""}`);
}
class Fu extends $.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Qe, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && le(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof $t && (r.preventDefault(), process.env.NODE_ENV !== "production" && sn(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Fe(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof $t) {
      process.env.NODE_ENV !== "production" && sn(t.message), this.setState({});
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
const Gu = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, cr = (e) => e + 1, ku = (e) => `
  You have lifted an item in position ${cr(e.source.index)}
`, Ua = (e, t) => {
  const r = e.droppableId === t.droppableId, n = cr(e.index), o = cr(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, za = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Wu = (e) => {
  const t = e.destination;
  if (t)
    return Ua(e.source, t);
  const r = e.combine;
  return r ? za(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, ti = (e) => `
  The item has returned to its starting position
  of ${cr(e.index)}
`, ju = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${ti(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Ua(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${za(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${ti(e.source)}
  `;
}, Uu = {
  dragHandleUsageInstructions: Gu,
  onDragStart: ku,
  onDragUpdate: Wu,
  onDragEnd: ju
};
var tr = Uu;
const Se = {
  x: 0,
  y: 0
}, Ie = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), $e = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), et = (e, t) => e.x === t.x && e.y === t.y, yt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), lt = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Vt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), ri = (e, t) => Math.min(...t.map((r) => Vt(e, r))), Ha = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var zu = (e, t) => {
  const r = We({
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
}), ni = (e) => [{
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
}], Hu = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, qu = (e, t) => t ? Ut(e, t.scroll.diff.displacement) : e, Yu = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Ku = (e, t) => t && t.shouldClipSubject ? zu(t.pageMarginBox, e) : We(e);
var gt = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = qu(e.marginBox, n), i = Yu(o, r, t), a = Ku(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Bn = (e, t) => {
  e.frame || (process.env.NODE_ENV, y());
  const r = e.frame, n = $e(t, r.scroll.initial), o = yt(n), i = {
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
  }, a = gt({
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
const qa = Ne((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Ya = Ne((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), mr = Ne((e) => Object.values(e)), Xu = Ne((e) => Object.values(e));
var dt = Ne((e, t) => Xu(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Fn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function gr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var br = Ne((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Ju = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Fn(o))
    return null;
  function a(f) {
    const b = {
      type: "COMBINE",
      combine: {
        draggableId: f,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: b
    };
  }
  const s = o.displaced.all, c = s.length ? s[0] : null;
  if (e)
    return c ? a(c) : null;
  const u = br(t, n);
  if (!c) {
    if (!u.length)
      return null;
    const f = u[u.length - 1];
    return a(f.descriptor.id);
  }
  const p = u.findIndex((f) => f.descriptor.id === c);
  p === -1 && (process.env.NODE_ENV !== "production" ? y(!1, "Could not find displaced item in set") : y());
  const l = p - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return a(d.descriptor.id);
}, Et = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Ka = {
  point: Se,
  value: 0
}, Mt = {
  invisible: {},
  visible: {},
  all: []
}, Zu = {
  displaced: Mt,
  displacedBy: Ka,
  at: null
};
var Qu = Zu, Ge = (e, t) => (r) => e <= r && r <= t, Xa = (e) => {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const c = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return c && u ? !0 : c && a || u && i;
  };
}, ed = (e) => {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Gn = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Ja = {
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
var td = (e) => (t) => {
  const r = Ge(t.top, t.bottom), n = Ge(t.left, t.right);
  return (o) => e === Gn ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const rd = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Se;
  return Ut(e, r);
}, nd = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, od = (e, t, r) => r(t)(e), kn = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? rd(e, t) : e;
  return nd(i, t, o) && od(i, r, o);
}, id = (e) => kn({
  ...e,
  isVisibleThroughFrameFn: Xa
}), Za = (e) => kn({
  ...e,
  isVisibleThroughFrameFn: ed
}), ad = (e) => kn({
  ...e,
  isVisibleThroughFrameFn: td(e.destination.axis)
}), sd = (e, t, r) => {
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
function cd(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return We(Mn(r, n));
}
function Lt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, c) {
    const u = cd(c, r), p = c.descriptor.id;
    if (s.all.push(p), !id({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const d = sd(p, i, o), f = {
      draggableId: p,
      shouldAnimate: d
    };
    return s.visible[p] = f, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function ld(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function oi({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = ld(e, {
    inHomeList: t
  });
  return {
    displaced: Mt,
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
  index: a,
  forceShouldAnimate: s
}) {
  const c = Et(e, r);
  if (a == null)
    return oi({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((b) => b.descriptor.index === a);
  if (!u)
    return oi({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const p = br(e, t), l = t.indexOf(u), d = p.slice(l);
  return {
    displaced: Lt({
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
function rt(e, t) {
  return !!t.effected[e];
}
var ud = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return rt(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, dd = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, pd = ({
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
  if (u || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot move in direction without previous impact location") : y()), u.type === "REORDER") {
    const l = dd({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return l == null ? null : lr({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const p = ud({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: c
  });
  return p == null ? null : lr({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, fd = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return rt(r, t) ? o ? Se : yt(n.point) : o ? n.point : Se;
}, md = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = gr(t);
  n || (process.env.NODE_ENV, y());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = fd({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ie(i, a);
};
const Qa = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, gd = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Wn = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, ii = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => lt(e.line, t.marginBox[e.end] + Qa(e, r), Wn(e, t.marginBox, r)), ai = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => lt(e.line, t.marginBox[e.start] - gd(e, r), Wn(e, t.marginBox, r)), bd = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => lt(e.line, t.contentBox[e.start] + Qa(e, r), Wn(e, t.contentBox, r));
var hd = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = dt(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return bd({
      axis: s,
      moveInto: n.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: u
  } = e, p = c.all[0];
  if (p) {
    const d = r[p];
    if (rt(p, o))
      return ai({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const f = ar(d.page, u.point);
    return ai({
      axis: s,
      moveRelativeTo: f,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (rt(l.descriptor.id, o)) {
    const d = ar(l.page, yt(o.displacedBy.point));
    return ii({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return ii({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, cn = (e, t) => {
  const r = e.frame;
  return r ? Ie(t, r.scroll.diff.displacement) : t;
};
const vd = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? hd({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : md({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var hr = (e) => {
  const t = vd(e), r = e.droppable;
  return r ? cn(r, t) : t;
}, es = (e, t) => {
  const r = $e(t, e.scroll.initial), n = yt(r);
  return {
    frame: We({
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
function si(e, t) {
  return e.map((r) => t[r]);
}
function yd(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Ed = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = es(t, Ie(t.scroll.current, o)), a = r.frame ? Bn(r, Ie(r.frame.scroll.current, o)) : r, s = e.displaced, c = Lt({
    afterDragging: si(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Lt({
    afterDragging: si(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, l = {}, d = [s, c, u];
  return s.all.forEach((b) => {
    const g = yd(b, d);
    if (g) {
      l[b] = g;
      return;
    }
    p[b] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: p,
      visible: l
    }
  };
}, xd = (e, t) => Ie(e.scroll.diff.displacement, t), jn = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = xd(r, e), o = $e(n, t.page.borderBox.center);
  return Ie(t.client.borderBox.center, o);
}, ts = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = $e(r, e.page.borderBox.center), c = {
    target: Ut(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? ad(c) : Za(c);
}, wd = ({
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
  const u = dt(r.descriptor.id, n), p = Et(t, r), l = Ju({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || pd({
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
  const d = hr({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: c
  });
  if (ts({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: jn({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const b = $e(d, a), g = Ed({
    impact: l,
    viewport: i,
    destination: r,
    draggables: n,
    maxScrollChange: b
  });
  return {
    clientSelection: s,
    impact: g,
    scrollJumpRequest: b
  };
};
const Pe = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot get clipped area from droppable") : y()), t;
};
var Nd = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ge(i[a.start], i[a.end]), c = mr(n).filter((p) => p !== r).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => Xa(o.frame)(Pe(p))).filter((p) => {
    const l = Pe(p);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const l = Pe(p), d = Ge(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((p, l) => {
    const d = Pe(p)[a.crossAxisStart], f = Pe(l)[a.crossAxisStart];
    return e ? d - f : f - d;
  }).filter((p, l, d) => Pe(p)[a.crossAxisStart] === Pe(d[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((p) => Ge(Pe(p)[a.start], Pe(p)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((p, l) => Pe(p)[a.start] - Pe(l)[a.start])[0] : c.sort((p, l) => {
    const d = ri(t, ni(Pe(p))), f = ri(t, ni(Pe(l)));
    return d !== f ? d - f : Pe(p)[a.start] - Pe(l)[a.start];
  })[0];
};
const ci = (e, t) => {
  const r = e.page.borderBox.center;
  return rt(e.descriptor.id, t) ? $e(r, t.displacedBy.point) : r;
}, Sd = (e, t) => {
  const r = e.page.borderBox;
  return rt(e.descriptor.id, t) ? Ut(r, yt(t.displacedBy.point)) : r;
};
var Dd = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => Za({
  target: Sd(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = Vt(e, cn(r, ci(a, o))), u = Vt(e, cn(r, ci(s, o)));
  return c < u ? -1 : u < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, zt = Ne(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: lt(t.line, n)
  };
});
const Od = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return lt(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = dt(e.descriptor.id, r).reduce((u, p) => u + p.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : lt(n.line, c);
}, rs = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), ns = (e, t, r) => {
  const n = e.frame;
  Et(t, e) && (process.env.NODE_ENV !== "production" ? y(!1, "Should not add placeholder space to home list") : y()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot add placeholder size to a subject when it already has one") : y());
  const o = zt(e.axis, t.displaceBy).point, i = Od(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const p = gt({
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
  const s = i ? Ie(n.scroll.max, i) : n.scroll.max, c = rs(n, s), u = gt({
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
}, Cd = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot remove placeholder form subject when there was none") : y());
  const r = e.frame;
  if (!r) {
    const a = gt({
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
  n || (process.env.NODE_ENV !== "production" ? y(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : y());
  const o = rs(r, n), i = gt({
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
var Id = ({
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
      displaced: Mt,
      displacedBy: Ka,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = hr({
      impact: l,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), f = Et(n, i) ? i : ns(i, n, o);
    return ts({
      draggable: n,
      destination: f,
      newPageBorderBoxCenter: d,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || c ? l : l + 1;
  })(), p = zt(i.axis, n.displaceBy);
  return lr({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: Mt,
    index: u
  });
}, _d = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = Nd({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const u = dt(c.descriptor.id, o), p = Dd({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }), l = Id({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: r,
    draggables: o,
    moveRelativeTo: p,
    insideDestination: u,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const d = hr({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: jn({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, Ve = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Ad = (e, t) => {
  const r = Ve(e);
  return r ? t[r] : null;
};
var Pd = ({
  state: e,
  type: t
}) => {
  const r = Ad(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return s ? wd({
    isMovingForward: c,
    previousPageBorderBoxCenter: p,
    draggable: u,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : _d({
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
function at(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function os(e) {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Rd(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Td({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = lt(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Vt(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function $d({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = mr(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Rd(e, i))
      return !1;
    if (os(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], u = e[a.crossAxisEnd], p = Ge(i[a.crossAxisStart], i[a.crossAxisEnd]), l = p(c), d = p(u);
    return !l && !d ? !0 : l ? c < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Td({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const is = (e, t) => We(Ut(e, t));
var Vd = (e, t) => {
  const r = e.frame;
  return r ? is(t, r.scroll.diff.value) : t;
};
function as({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Md({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Ld = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = zt(r.axis, t.displaceBy), u = c.value, p = e[s.start], l = e[s.end], f = br(t, n).find((g) => {
    const m = g.descriptor.id, v = g.page.borderBox.center[s.line], x = rt(m, a), w = as({
      displaced: o,
      id: m
    });
    return x ? w ? l <= v : p < v - u : w ? l <= v + u : p < v;
  }) || null, b = Md({
    draggable: t,
    closest: f,
    inHomeList: Et(t, r)
  });
  return lr({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: c,
    index: b
  });
};
const Bd = 4;
var Fd = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = zt(n.axis, e.displaceBy), c = s.value, u = t[a.start], p = t[a.end], d = br(e, o).find((b) => {
    const g = b.descriptor.id, m = b.page.borderBox, x = m[a.size] / Bd, w = rt(g, i), E = as({
      displaced: r.displaced,
      id: g
    });
    return w ? E ? p > m[a.start] + x && p < m[a.end] - x : u > m[a.start] - c + x && u < m[a.end] - c - x : E ? p > m[a.start] + c + x && p < m[a.end] + c - x : u > m[a.start] + x && u < m[a.end] - x;
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
}, ss = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = is(t.page.borderBox, e), c = $d({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!c)
    return Qu;
  const u = n[c], p = dt(u.descriptor.id, r), l = Vd(u, s);
  return Fd({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: p,
    afterCritical: a
  }) || Ld({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, Un = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Gd = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = Ve(e), o = Ve(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = Cd(i);
  return Un(r, a);
};
var kd = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Gd({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = Ve(o);
  if (!a)
    return i;
  const s = r[a];
  if (Et(e, s) || s.subject.withPlaceholder)
    return i;
  const c = ns(s, e, t);
  return Un(i, c);
}, Ot = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, c = t || e.current.client.selection, u = $e(c, e.initial.client.selection), p = {
    offset: u,
    selection: c,
    borderBoxCenter: Ie(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: Ie(p.selection, a.scroll.current),
    borderBoxCenter: Ie(p.borderBoxCenter, a.scroll.current),
    offset: Ie(p.offset, a.scroll.diff.value)
  }, d = {
    client: p,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: d
    };
  const f = s.draggables[e.critical.draggable.id], b = o || ss({
    pageOffset: l.offset,
    draggable: f,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), g = kd({
    draggable: f,
    impact: b,
    previousImpact: e.impact,
    draggables: s.draggables,
    droppables: s.droppables
  });
  return {
    ...e,
    current: d,
    dimensions: {
      draggables: s.draggables,
      droppables: g
    },
    impact: b,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Wd(e, t) {
  return e.map((r) => t[r]);
}
var cs = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Wd(i.all, r), s = Lt({
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
}, ls = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = hr({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return jn({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, us = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, y());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], u = Ve(n);
  u || (process.env.NODE_ENV !== "production" ? y(!1, "Must be over a destination in SNAP movement mode") : y());
  const p = s[u], l = cs({
    impact: n,
    viewport: o,
    destination: p,
    draggables: a
  }), d = ls({
    impact: l,
    draggable: c,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Ot({
    impact: l,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, jd = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ds = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = zt(t.axis, e.displaceBy), i = dt(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? y(!1, "Expected draggable to be inside home list") : y());
  const s = i.slice(a + 1), c = s.reduce((d, f) => (d[f.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: Lt({
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
        destination: jd(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Ud = (e, t) => ({
  draggables: e.draggables,
  droppables: Un(e.droppables, t)
});
const Ht = (e) => {
  process.env.NODE_ENV;
}, qt = (e) => {
  process.env.NODE_ENV;
};
var zd = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = ar(e.client, t), o = sr(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, Hd = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? y(!1, "Expected Droppable to have a frame") : y()), t;
}, qd = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Hd(a).scroll.diff.value, u = Ie(n, c);
    return zd({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Yd = ({
  state: e,
  published: t
}) => {
  Ht();
  const r = t.modified.map((v) => {
    const x = e.dimensions.droppables[v.droppableId];
    return Bn(x, v.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...qa(r)
  }, o = Ya(qd({
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
  }, s = Ve(e.impact), c = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = ds({
    draggable: u,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), f = c && c.isCombineEnabled ? e.impact : l, b = ss({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: f,
    viewport: e.viewport,
    afterCritical: d
  });
  qt();
  const g = {
    ...e,
    phase: "DRAGGING",
    impact: b,
    onLiftImpact: l,
    dimensions: a,
    afterCritical: d,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? g : {
    ...g,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const ln = (e) => e.movementMode === "SNAP", Rr = (e, t, r) => {
  const n = Ud(e.dimensions, t);
  return !ln(e) || r ? Ot({
    state: e,
    dimensions: n
  }) : us({
    state: e,
    dimensions: n
  });
};
function Tr(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const li = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Kd = (e = li, t) => {
  if (t.type === "FLUSH")
    return {
      ...li,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? y(!1, "INITIAL_PUBLISH must come after a IDLE phase") : y());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: Se
    }, p = {
      client: u,
      page: {
        selection: Ie(u.selection, o.scroll.initial),
        borderBoxCenter: Ie(u.selection, o.scroll.initial),
        offset: Ie(u.selection, o.scroll.diff.value)
      }
    }, l = mr(i.droppables).every((g) => !g.isFixedOnPage), {
      impact: d,
      afterCritical: f
    } = ds({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? y(!1, `Collection cannot start from phase ${e.phase}`) : y()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? y(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : y()), Yd({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    at(e) || (process.env.NODE_ENV !== "production" ? y(!1, `${t.type} not permitted in phase ${e.phase}`) : y());
    const {
      client: r
    } = t.payload;
    return et(r, e.current.client.selection) ? e : Ot({
      state: e,
      clientSelection: r,
      impact: ln(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Tr(e);
    at(e) || (process.env.NODE_ENV !== "production" ? y(!1, `${t.type} not permitted in phase ${e.phase}`) : y());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = Bn(o, n);
    return Rr(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    at(e) || (process.env.NODE_ENV !== "production" ? y(!1, `Attempting to move in an unsupported phase ${e.phase}`) : y());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : y()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? y(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : y());
    const i = {
      ...o,
      isEnabled: n
    };
    return Rr(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    at(e) || (process.env.NODE_ENV !== "production" ? y(!1, `Attempting to move in an unsupported phase ${e.phase}`) : y());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : y()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? y(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : y());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return Rr(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    at(e) || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot move by window in phase ${e.phase}`) : y()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? y(!1, "Window scrolling is currently not supported for fixed lists") : y());
    const r = t.payload.newScroll;
    if (et(e.viewport.scroll.current, r))
      return Tr(e);
    const n = es(e.viewport, r);
    return ln(e) ? us({
      state: e,
      viewport: n
    }) : Ot({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!at(e))
      return e;
    const r = t.payload.maxScroll;
    if (et(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? y(!1, `${t.type} received while not in DRAGGING phase`) : y());
    const r = Pd({
      state: e,
      type: t.type
    });
    return r ? Ot({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? y(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : y()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot animate drop from phase ${e.phase}`) : y()), {
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
const Xd = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Jd = (e) => ({
  type: "LIFT",
  payload: e
}), Zd = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Qd = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), ep = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), tp = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), rp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), np = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), ps = (e) => ({
  type: "MOVE",
  payload: e
}), op = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), ip = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ap = () => ({
  type: "MOVE_UP",
  payload: null
}), sp = () => ({
  type: "MOVE_DOWN",
  payload: null
}), cp = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), lp = () => ({
  type: "MOVE_LEFT",
  payload: null
}), zn = () => ({
  type: "FLUSH",
  payload: null
}), up = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Hn = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), fs = (e) => ({
  type: "DROP",
  payload: e
}), dp = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ms = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function pp(e) {
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
  process.env.NODE_ENV !== "production" && le(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function fp(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = dt(e.droppable.id, t.draggables);
    pp(r);
  }
}
var mp = (e) => ({
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
  c.phase === "DROP_ANIMATING" && r(Hn({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? y(!1, "Unexpected phase to start a drag") : y()), r(zn()), r(Xd({
    draggableId: i,
    movementMode: s
  }));
  const p = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: l,
    dimensions: d,
    viewport: f
  } = e.startPublishing(p);
  fp(l, d), r(Zd({
    critical: l,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: f
  }));
}, gp = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const qn = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Bt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, gs = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, nt = `${gs.outOfTheWay}s ${qn.outOfTheWay}`, Ct = {
  fluid: `opacity ${nt}`,
  snap: `transform ${nt}, opacity ${nt}`,
  drop: (e) => {
    const t = `${e}s ${qn.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${nt}`,
  placeholder: `height ${nt}, width ${nt}, margin ${nt}`
}, ui = (e) => et(e, Se) ? void 0 : `translate(${e.x}px, ${e.y}px)`, un = {
  moveTo: ui,
  drop: (e, t) => {
    const r = ui(e);
    if (r)
      return t ? `${r} scale(${Bt.scale.drop})` : r;
  }
}, {
  minDropTime: dn,
  maxDropTime: bs
} = gs, bp = bs - dn, di = 1500, hp = 0.6;
var vp = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Vt(e, t);
  if (n <= 0)
    return dn;
  if (n >= di)
    return bs;
  const o = n / di, i = dn + bp * o, a = r === "CANCEL" ? i * hp : i;
  return Number(a.toFixed(2));
}, yp = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = Ve(e), c = s ? a[s] : null, u = a[t.descriptor.droppableId], p = ls({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return $e(p, t.client.borderBox.center);
}, Ep = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: cs({
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
    displaced: Mt
  },
  didDropInsideDroppable: !0
};
const xp = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(dp({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? y(!1, "A DROP action occurred while DROP_PENDING and still waiting") : y()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot drop in phase: ${o.phase}`) : y());
  const s = o.critical, c = o.dimensions, u = c.draggables[o.critical.draggable.id], {
    impact: p,
    didDropInsideDroppable: l
  } = Ep({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = l ? Fn(p) : null, f = l ? gr(p) : null, b = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, g = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: b,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: f
  }, m = yp({
    impact: p,
    draggable: u,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), v = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: g,
    impact: p
  };
  if (!(!et(o.current.client.offset, m) || !!g.combine)) {
    t(Hn({
      completed: v
    }));
    return;
  }
  const w = vp({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(up({
    newHomeClientOffset: m,
    dropDuration: w,
    completed: v
  }));
};
var wp = xp, hs = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Np(e) {
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
function Sp({
  onWindowScroll: e
}) {
  function t() {
    e(hs());
  }
  const r = Tt(t), n = Np(r);
  let o = Qe;
  function i() {
    return o !== Qe;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot start scroll listener when already active") : y()), o = Fe(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot stop scroll listener when not active") : y()), r.cancel(), o(), o = Qe;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const Dp = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Op = (e) => {
  const t = Sp({
    onWindowScroll: (r) => {
      e.dispatch(op({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Dp(n) && t.stop(), r(n);
  };
};
var Cp = Op, Ip = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && le("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && le(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, _p = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? y(!1, "Could not find timer") : y());
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
const Ap = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Pp = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Rp = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, Nt = (e, t) => {
  Ht(), t(), qt();
}, Xt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function $r(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Ip(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Tp = (e, t) => {
  const r = _p();
  let n = null;
  const o = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : y()), Nt("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: l,
        mode: d
      });
    });
  }, i = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : y()), Nt("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(Xt(l, d));
    });
  }, a = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : y());
    const f = Xt(l, d);
    n = {
      mode: d,
      lastCritical: l,
      lastLocation: f.source,
      lastCombine: null
    }, r.add(() => {
      Nt("onDragStart", () => $r(e().onDragStart, f, t, tr.onDragStart));
    });
  }, s = (l, d) => {
    const f = Fn(d), b = gr(d);
    n || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onDragMove when onDragStart has not been called") : y());
    const g = !Rp(l, n.lastCritical);
    g && (n.lastCritical = l);
    const m = !Ap(n.lastLocation, f);
    m && (n.lastLocation = f);
    const v = !Pp(n.lastCombine, b);
    if (v && (n.lastCombine = b), !g && !m && !v)
      return;
    const x = {
      ...Xt(l, n.mode),
      combine: b,
      destination: f
    };
    r.add(() => {
      Nt("onDragUpdate", () => $r(e().onDragUpdate, x, t, tr.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? y(!1, "Can only flush responders while dragging") : y()), r.flush();
  }, u = (l) => {
    n || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : y()), n = null, Nt("onDragEnd", () => $r(e().onDragEnd, l, t, tr.onDragEnd));
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
        ...Xt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, $p = (e, t) => {
  const r = Tp(e, t);
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
const Vp = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot finish a drop animating when no drop is occurring") : y()), e.dispatch(Hn({
    completed: n.completed
  }));
};
var Mp = Vp;
const Lp = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ms());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = Fe(window, [a]);
    });
  };
};
var Bp = Lp, Fp = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Gp = (e) => {
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
const kp = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Wp = (e) => (t) => (r) => (n) => {
  if (kp(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? y(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : y()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const jp = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(fs({
    reason: n.reason
  })));
};
var Up = jp;
const zp = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : _a;
var Hp = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => Ia(Kd, zp(Rl(gp(r), Fp(e), mp(e), wp, Mp, Bp, Up, Wp(i), Cp, Gp(t), $p(n, o))));
const Vr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function qp({
  registry: e,
  callbacks: t
}) {
  let r = Vr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, Ht();
      const {
        additions: c,
        removals: u,
        modified: p
      } = r, l = Object.keys(c).map((b) => e.draggable.getById(b).getDimension(Se)).sort((b, g) => b.descriptor.index - g.descriptor.index), d = Object.keys(p).map((b) => {
        const m = e.droppable.getById(b).callbacks.getScrollWhileDragging();
        return {
          droppableId: b,
          scroll: m
        };
      }), f = {
        additions: l,
        removals: Object.keys(u),
        modified: d
      };
      r = Vr(), qt(), t.publish(f);
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
      n && (cancelAnimationFrame(n), n = null, r = Vr());
    }
  };
}
var vs = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = $e({
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
}, ys = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot find document.documentElement") : y()), e;
}, Es = () => {
  const e = ys();
  return vs({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Yp = () => {
  const e = hs(), t = Es(), r = e.y, n = e.x, o = ys(), i = o.clientWidth, a = o.clientHeight, s = n + i, c = r + a;
  return {
    frame: We({
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
        value: Se,
        displacement: Se
      }
    }
  };
}, Kp = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Ht();
  const n = Yp(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), c = {
    draggables: Ya(s),
    droppables: qa(a)
  };
  return qt(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function pi(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && le(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Xp = (e, t) => {
  let r = null;
  const n = qp({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, f) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : y()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: f
    });
  }, i = (d, f) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : y()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: f
    }));
  }, a = (d, f) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : y()), t.updateDroppableScroll({
      id: d,
      newScroll: f
    }));
  }, s = (d, f) => {
    r && e.droppable.getById(d).callbacks.scroll(f);
  }, c = () => {
    if (!r)
      return;
    n.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((f) => f.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? y(!1, "Should only be subscribed when a collection is occurring") : y());
    const f = r.critical.draggable;
    d.type === "ADDITION" && pi(e, f, d.value) && n.add(d.value), d.type === "REMOVAL" && pi(e, f, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot start capturing critical dimensions as there is already a collection") : y());
      const f = e.draggable.getById(d.draggableId), b = e.droppable.getById(f.descriptor.droppableId), g = {
        draggable: f.descriptor,
        droppable: b.descriptor
      }, m = e.subscribe(u);
      return r = {
        critical: g,
        unsubscribe: m
      }, Kp({
        critical: g,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, xs = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Jp = (e) => {
  window.scrollBy(e.x, e.y);
};
const Zp = Ne((e) => mr(e).filter((t) => !(!t.isEnabled || !t.frame))), Qp = (e, t) => Zp(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? y(!1, "Invalid result") : y()), os(n.frame.pageMarginBox)(e))) || null;
var ef = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Qp(e, r);
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
var tf = (e, t, r = () => Ft) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, ws = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && le(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, Yn = 1, rf = (e, t, r = () => Ft) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Yn;
  const i = 1 - ws({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, nf = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return Yn;
  const p = ws({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), l = e * n.ease(p);
  return Math.ceil(l);
}, fi = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = rf(e, t, o);
  return i === 0 ? 0 : n ? Math.max(nf(i, r, o), Yn) : i;
}, mi = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = tf(e, n, i);
  return t[n.end] < t[n.start] ? fi({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * fi({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, of = ({
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
const af = Ha((e) => e === 0 ? 0 : e);
var Ns = ({
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
  }, s = mi({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Gn,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = mi({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Ja,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = af({
    x: c,
    y: s
  });
  if (et(u, Se))
    return null;
  const p = of({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return p ? et(p, Se) ? null : p : null;
};
const sf = Ha((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Kn = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = Ie(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return et(i, Se) ? null : i;
  };
})(), Ss = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = sf(r), i = Kn({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Xn = (e, t) => Ss({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), cf = (e, t) => {
  if (!Xn(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Kn({
    current: n,
    max: r,
    change: t
  });
}, Jn = (e, t) => {
  const r = e.frame;
  return r ? Ss({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, lf = (e, t) => {
  const r = e.frame;
  return !r || !Jn(e, t) ? null : Kn({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var uf = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Ns({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Xn(e, a) ? a : null;
}, df = ({
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
  const s = Ns({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Jn(e, s) ? s : null;
}, gi = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = uf({
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
  const u = ef({
    center: a,
    destination: Ve(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const p = df({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  p && o(u.descriptor.id, p);
}, pf = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Ft
}) => {
  const n = Tt(e), o = Tt(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fluid scroll if not dragging") : y());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: l
    } = i;
    gi({
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
      Ht(), i && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot start auto scrolling when already started") : y());
      const p = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      gi({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: l
      }, qt(), l && a(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, ff = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, c) => {
    const u = Ie(s.current.client.selection, c);
    e({
      client: u
    });
  }, o = (s, c) => {
    if (!Jn(s, c))
      return c;
    const u = lf(s, c);
    if (!u)
      return t(s.descriptor.id, c), null;
    const p = $e(c, u);
    return t(s.descriptor.id, p), $e(c, p);
  }, i = (s, c, u) => {
    if (!s || !Xn(c, u))
      return u;
    const p = cf(c, u);
    if (!p)
      return r(u), null;
    const l = $e(u, p);
    return r(l), $e(u, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const u = Ve(s.impact);
    u || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot perform a jump scroll when there is no destination") : y());
    const p = o(s.dimensions.droppables[u], c);
    if (!p)
      return;
    const l = s.viewport, d = i(s.isWindowScrollAllowed, l, p);
    d && n(s, d);
  };
}, mf = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = pf({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = ff({
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
const bt = "data-rfd", ht = (() => {
  const e = `${bt}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), pn = (() => {
  const e = `${bt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), gf = (() => {
  const e = `${bt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), bi = {
  contextId: `${bt}-scroll-container-context-id`
}, bf = (e) => (t) => `[${t}="${e}"]`, St = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), hf = "pointer-events: none;";
var vf = (e) => {
  const t = bf(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(ht.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: hf,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${Ct.outOfTheWay};
    `;
    return {
      selector: t(pn.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(gf.contextId),
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
    always: St(a, "always"),
    resting: St(a, "resting"),
    dragging: St(a, "dragging"),
    dropAnimating: St(a, "dropAnimating"),
    userCancel: St(a, "userCancel")
  };
};
const yf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Sn : ce;
var Me = yf;
const Mr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot find the head to append a style to") : y()), e;
}, hi = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Ef(e, t) {
  const r = K(() => vf(e), [e]), n = j(null), o = j(null), i = M(Ne((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot set dynamic style element if it is not set") : y()), d.textContent = l;
  }), []), a = M((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot set dynamic style element if it is not set") : y()), d.textContent = l;
  }, []);
  Me(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? y(!1, "style elements already mounted") : y());
    const l = hi(t), d = hi(t);
    return n.current = l, o.current = d, l.setAttribute(`${bt}-always`, e), d.setAttribute(`${bt}-dynamic`, e), Mr().appendChild(l), Mr().appendChild(d), a(r.always), i(r.resting), () => {
      const f = (b) => {
        const g = b.current;
        g || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot unmount ref as it is not set") : y()), Mr().removeChild(g), b.current = null;
      };
      f(n), f(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = M(() => i(r.dragging), [i, r.dragging]), c = M((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = M(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return K(() => ({
    dragging: s,
    dropping: c,
    resting: u
  }), [s, c, u]);
}
function Ds(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Os = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Yt(e) {
  return e instanceof Os(e).HTMLElement;
}
function Cs(e, t) {
  const r = `[${ht.contextId}="${e}"]`, n = Ds(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && le(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(ht.draggableId) === t);
  return o ? Yt(o) ? o : (process.env.NODE_ENV !== "production" && le("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && le(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function xf(e) {
  const t = j({}), r = j(null), n = j(null), o = j(!1), i = M(function(d, f) {
    const b = {
      id: d,
      focus: f
    };
    return t.current[d] = b, function() {
      const m = t.current;
      m[d] !== b && delete m[d];
    };
  }, []), a = M(function(d) {
    const f = Cs(e, d);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = M(function(d, f) {
    r.current === d && (r.current = f);
  }, []), c = M(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = M(function(d) {
    r.current = null;
    const f = document.activeElement;
    f && f.getAttribute(ht.draggableId) === d && (r.current = d);
  }, []);
  return Me(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), K(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, u, c, s]);
}
function wf() {
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
    return d || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot find draggable entry with id [${l}]`) : y()), d;
  }
  const a = {
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
  function s(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const d = s(l);
    return d || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot find droppable entry with id [${l}]`) : y()), d;
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
function Nf() {
  const e = K(wf, []);
  return ce(() => function() {
    $.version.startsWith("16") || $.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Zn = $.createContext(null), Gt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot find document.body") : y()), e;
};
const Sf = {
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
var Df = Sf;
const Of = (e) => `rfd-announcement-${e}`;
function Cf(e) {
  const t = K(() => Of(e), [e]), r = j(null);
  return ce(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Ze(i.style, Df), Gt().appendChild(i), function() {
      setTimeout(function() {
        const c = Gt();
        c.contains(i) && c.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), M((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && le(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let If = 0;
const Is = {
  separator: "::"
};
function _f(e, t = Is) {
  return K(() => `${e}${t.separator}${If++}`, [t.separator, e]);
}
function Af(e, t = Is) {
  const r = $.useId();
  return K(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Qn = "useId" in $ ? Af : _f;
function Pf({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Rf({
  contextId: e,
  text: t
}) {
  const r = Qn("hidden-text", {
    separator: "-"
  }), n = K(() => Pf({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ce(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", Gt().appendChild(i), function() {
      const s = Gt();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var vr = $.createContext(null), Tf = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const $f = /(\d+)\.(\d+)\.(\d+)/, vi = (e) => {
  const t = $f.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? y(!1, `Unable to parse React version ${e}`) : y());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Vf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Mf = (e, t) => {
  const r = vi(e), n = vi(t);
  Vf(r, n) || process.env.NODE_ENV !== "production" && le(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Lr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Lf = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && le(`
      No <!doctype html> found.

      ${Lr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && le(`
      Unexpected <!doctype> found: (${t.name})

      ${Lr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && le(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Lr}
    `);
};
function eo(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Kt(e, t) {
  eo(() => {
    ce(() => {
      try {
        e();
      } catch (r) {
        sn(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Bf() {
  Kt(() => {
    Mf(Tf.react, $.version), Lf(document);
  }, []);
}
function to(e) {
  const t = j(e);
  return ce(() => {
    t.current = e;
  }), t;
}
function Ff() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function n(a) {
    e && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot claim lock as it is already claimed") : y());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot release lock when there is no lock") : y()), e = null;
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
function kt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Gf = 9, kf = 13, ro = 27, _s = 32, Wf = 33, jf = 34, Uf = 35, zf = 36, Hf = 37, qf = 38, Yf = 39, Kf = 40, Xf = {
  [kf]: !0,
  [Gf]: !0
};
var As = (e) => {
  Xf[e.keyCode] && e.preventDefault();
};
const Jf = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var yr = Jf;
const Ps = 0, yi = 5;
function Zf(e, t) {
  return Math.abs(t.x - e.x) >= yi || Math.abs(t.y - e.y) >= yi;
}
const Ei = {
  type: "IDLE"
};
function Qf({
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
      if (i !== Ps)
        return;
      const c = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot be IDLE") : y());
      const p = u.point;
      if (!Zf(p, c))
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
      if (o.keyCode === ro) {
        o.preventDefault(), e();
        return;
      }
      As(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? y(!1, "Unexpected phase") : y()), i.actions.shouldRespectForcePress()) {
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
function em(e) {
  const t = j(Ei), r = j(Qe), n = K(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Ps || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const d = e.findClosestDraggableId(l);
      if (!d)
        return;
      const f = e.tryGetLock(d, a, {
        sourceEvent: l
      });
      if (!f)
        return;
      l.preventDefault();
      const b = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), u(f, b);
    }
  }), [e]), o = K(() => ({
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
  }), [e]), i = M(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = Fe(window, [o, n], l);
  }, [o, n]), a = M(() => {
    t.current.type !== "IDLE" && (t.current = Ei, r.current(), i());
  }, [i]), s = M(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), c = M(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = Qf({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    r.current = Fe(window, d, l);
  }, [s, a]), u = M(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? y(!1, "Expected to move from IDLE to PENDING drag") : y()), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  Me(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function tm() {
}
const rm = {
  [jf]: !0,
  [Wf]: !0,
  [zf]: !0,
  [Uf]: !0
};
function nm(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === ro) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === _s) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Kf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === qf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Yf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Hf) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (rm[o.keyCode]) {
        o.preventDefault();
        return;
      }
      As(o);
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
function om(e) {
  const t = j(tm), r = K(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== _s)
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
      let c = !0;
      const u = s.snapLift();
      t.current();
      function p() {
        c || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot stop capturing a keyboard drag when not capturing") : y()), c = !1, t.current(), n();
      }
      t.current = Fe(window, nm(u, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = M(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Fe(window, [r], i);
  }, [r]);
  Me(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const Br = {
  type: "IDLE"
}, im = 120, am = 0.15;
function sm({
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
      r.keyCode === ro && r.preventDefault(), e();
    }
  }, {
    eventName: yr,
    fn: e
  }];
}
function cm({
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
      o.type === "IDLE" && (process.env.NODE_ENV, y());
      const i = n.touches[0];
      if (!i || !(i.force >= am))
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
    eventName: yr,
    fn: e
  }];
}
function lm(e) {
  const t = j(Br), r = j(Qe), n = M(function() {
    return t.current;
  }, []), o = M(function(f) {
    t.current = f;
  }, []), i = K(() => ({
    eventName: "touchstart",
    fn: function(f) {
      if (f.defaultPrevented)
        return;
      const b = e.findClosestDraggableId(f);
      if (!b)
        return;
      const g = e.tryGetLock(b, s, {
        sourceEvent: f
      });
      if (!g)
        return;
      const m = f.touches[0], {
        clientX: v,
        clientY: x
      } = m, w = {
        x: v,
        y: x
      };
      r.current(), l(g, w);
    }
  }), [e]), a = M(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    r.current = Fe(window, [i], f);
  }, [i]), s = M(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Br), r.current(), a());
  }, [a, o]), c = M(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = M(function() {
    const f = {
      capture: !0,
      passive: !1
    }, b = {
      cancel: c,
      completed: s,
      getPhase: n
    }, g = Fe(window, cm(b), f), m = Fe(window, sm(b), f);
    r.current = function() {
      g(), m();
    };
  }, [c, n, s]), p = M(function() {
    const f = n();
    f.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? y(!1, `Cannot start dragging from phase ${f.type}`) : y());
    const b = f.actions.fluidLift(f.point);
    o({
      type: "DRAGGING",
      actions: b,
      hasMoved: !1
    });
  }, [n, o]), l = M(function(f, b) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? y(!1, "Expected to move from IDLE to PENDING drag") : y());
    const g = setTimeout(p, im);
    o({
      type: "PENDING",
      point: b,
      actions: f,
      longPressTimerId: g
    }), u();
  }, [u, n, o, p]);
  Me(function() {
    return a(), function() {
      r.current();
      const b = n();
      b.type === "PENDING" && (clearTimeout(b.longPressTimerId), o(Br));
    };
  }, [n, a, o]), Me(function() {
    return Fe(window, [{
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
function um(e) {
  eo(() => {
    const t = to(e);
    Kt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot change the amount of sensor hooks after mounting") : y(!1));
    });
  });
}
const dm = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Rs(e, t) {
  if (t == null)
    return !1;
  if (dm.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Rs(e, t.parentElement);
}
function pm(e, t) {
  const r = t.target;
  return Yt(r) ? Rs(e, r) : !1;
}
var fm = (e) => We(e.getBoundingClientRect()).center;
function mm(e) {
  return e instanceof Os(e).Element;
}
const gm = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Ts(e, t) {
  return e == null ? null : e[gm](t) ? e : Ts(e.parentElement, t);
}
function bm(e, t) {
  return e.closest ? e.closest(t) : Ts(e, t);
}
function hm(e) {
  return `[${ht.contextId}="${e}"]`;
}
function vm(e, t) {
  const r = t.target;
  if (!mm(r))
    return process.env.NODE_ENV !== "production" && le("event.target must be a Element"), null;
  const n = hm(e), o = bm(r, n);
  return o ? Yt(o) ? o : (process.env.NODE_ENV !== "production" && le("drag handle must be a HTMLElement"), null) : null;
}
function ym(e, t) {
  const r = vm(e, t);
  return r ? r.getAttribute(ht.draggableId) : null;
}
function Em(e, t) {
  const r = `[${pn.contextId}="${e}"]`, o = Ds(document, r).find((i) => i.getAttribute(pn.id) === t);
  return o ? Yt(o) ? o : (process.env.NODE_ENV !== "production" && le("Draggable element is not a HTMLElement"), null) : null;
}
function xm(e) {
  e.preventDefault();
}
function Jt({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && le(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && le(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function $s({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !xs(t.getState(), n)) : (process.env.NODE_ENV !== "production" && le(`Unable to find draggable with id: ${n}`), !1);
}
function wm({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!$s({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), u = Em(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && le(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && pm(u, a))
    return null;
  const p = e.claim(i || Qe);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(p);
  }
  function b(h, N) {
    Jt({
      expected: h,
      phase: l,
      isLockActive: f,
      shouldWarn: !0
    }) && r.dispatch(N());
  }
  const g = b.bind(null, "DRAGGING");
  function m(h) {
    function N() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (N(), process.env.NODE_ENV !== "production" ? y(!1, `Cannot lift in phase ${l}`) : y()), r.dispatch(Jd(h.liftActionArgs)), l = "DRAGGING";
    function O(C, G = {
      shouldBlockNextClick: !1
    }) {
      if (h.cleanup(), G.shouldBlockNextClick) {
        const R = Fe(window, [{
          eventName: "click",
          fn: xm,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(R);
      }
      N(), r.dispatch(fs({
        reason: C
      }));
    }
    return {
      isActive: () => Jt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: f,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (C) => O("DROP", C),
      cancel: (C) => O("CANCEL", C),
      ...h.actions
    };
  }
  function v(h) {
    const N = Tt((C) => {
      g(() => ps({
        client: C
      }));
    });
    return {
      ...m({
        liftActionArgs: {
          id: o,
          clientSelection: h,
          movementMode: "FLUID"
        },
        cleanup: () => N.cancel(),
        actions: {
          move: N
        }
      }),
      move: N
    };
  }
  function x() {
    const h = {
      moveUp: () => g(ap),
      moveRight: () => g(cp),
      moveDown: () => g(sp),
      moveLeft: () => g(lp)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: fm(u),
        movementMode: "SNAP"
      },
      cleanup: Qe,
      actions: h
    });
  }
  function w() {
    Jt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: f,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Jt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: f,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: v,
    snapLift: x,
    abort: w
  };
}
const Nm = [em, om, lm];
function Sm({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? Nm : [], ...n || []], a = he(() => Ff())[0], s = M(function(m, v) {
    kt(m) && !kt(v) && a.tryAbandon();
  }, [a]);
  Me(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      s(m, x), m = x;
    });
  }, [a, t, s]), Me(() => a.tryAbandon, [a.tryAbandon]);
  const c = M((g) => $s({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: g
  }), [a, r, t]), u = M((g, m, v) => wm({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: m || null,
    sourceEvent: v && v.sourceEvent ? v.sourceEvent : null
  }), [e, a, r, t]), p = M((g) => ym(e, g), [e]), l = M((g) => {
    const m = r.draggable.findById(g);
    return m ? m.options : null;
  }, [r.draggable]), d = M(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(zn()));
  }, [a, t]), f = M(() => a.isClaimed(), [a]), b = K(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: p,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: f
  }), [c, u, p, l, d, f]);
  um(i);
  for (let g = 0; g < i.length; g++)
    i[g](b);
}
const Dm = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    $.version.startsWith("16") || $.version.startsWith("17") ? r() : Dn(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Om = (e) => ({
  ...Ft,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Ft.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Dt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? y(!1, "Could not find store from lazy ref") : y()), e.current;
}
function Cm(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = j(null);
  Bf();
  const s = to(e), c = M(() => Dm(s.current), [s]), u = M(() => Om(s.current), [s]), p = Cf(t), l = Rf({
    contextId: t,
    text: i
  }), d = Ef(t, o), f = M((R) => {
    Dt(a).dispatch(R);
  }, []), b = K(() => Ao({
    publishWhileDragging: Qd,
    updateDroppableScroll: tp,
    updateDroppableIsEnabled: rp,
    updateDroppableIsCombineEnabled: np,
    collectionStarting: ep
  }, f), [f]), g = Nf(), m = K(() => Xp(g, b), [g, b]), v = K(() => mf({
    scrollWindow: Jp,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Ao({
      move: ps
    }, f)
  }), [m.scrollDroppable, f, u]), x = xf(t), w = K(() => Hp({
    announce: p,
    autoScroller: v,
    dimensionMarshal: m,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: d
  }), [p, v, m, x, c, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== w && process.env.NODE_ENV !== "production" && le("unexpected store change"), a.current = w;
  const E = M(() => {
    const R = Dt(a);
    R.getState().phase !== "IDLE" && R.dispatch(zn());
  }, []), h = M(() => {
    const R = Dt(a).getState();
    return R.phase === "DROP_ANIMATING" ? !0 : R.phase === "IDLE" ? !1 : R.isDragging;
  }, []), N = K(() => ({
    isDragging: h,
    tryAbort: E
  }), [h, E]);
  r(N);
  const O = M((R) => xs(Dt(a).getState(), R), []), C = M(() => at(Dt(a).getState()), []), G = K(() => ({
    marshal: m,
    focus: x,
    contextId: t,
    canLift: O,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: l,
    registry: g
  }), [t, m, l, x, O, C, g]);
  return Sm({
    contextId: t,
    store: w,
    registry: g,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ce(() => E, [E]), $.createElement(vr.Provider, {
    value: G
  }, $.createElement(Nu, {
    context: Zn,
    store: w
  }, e.children));
}
let Im = 0;
function _m() {
  return K(() => `${Im++}`, []);
}
function Am() {
  return $.useId();
}
var Pm = "useId" in $ ? Am : _m;
function Rm(e) {
  const t = Pm(), r = e.dragHandleUsageInstructions || tr.dragHandleUsageInstructions;
  return $.createElement(Fu, null, (n) => $.createElement(Cm, {
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
const xi = {
  dragging: 5e3,
  dropAnimating: 4500
}, Tm = (e, t) => t ? Ct.drop(t.duration) : e ? Ct.snap : Ct.fluid, $m = (e, t) => {
  if (e)
    return t ? Bt.opacity.drop : Bt.opacity.combining;
}, Vm = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Mm(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Vm(e), c = !!i, u = c ? un.drop(n, a) : un.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Tm(s, i),
    transform: u,
    opacity: $m(a, c),
    zIndex: c ? xi.dropAnimating : xi.dragging,
    pointerEvents: "none"
  };
}
function Lm(e) {
  return {
    transform: un.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Bm(e) {
  return e.type === "DRAGGING" ? Mm(e) : Lm(e);
}
function Fm(e, t, r = Se) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = ka(o, n), a = sr(i, r), s = {
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
function Gm(e) {
  const t = Qn("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = K(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = M((f) => {
    const b = o();
    return b || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot get dimension when no ref is set") : y()), Fm(r, b, f);
  }, [r, o]), p = K(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = j(p), d = j(!0);
  Me(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), Me(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const f = l.current;
    l.current = p, n.draggable.update(p, f);
  }, [p, n.draggable]);
}
var no = $.createContext(null);
function Vs(e) {
  e && Yt(e) || (process.env.NODE_ENV !== "production" ? y(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : y());
}
function km(e, t, r) {
  Kt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? y(!1, "Draggable requires a draggableId") : y(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? y(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : y(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? y(!1, `${n(o)} requires an integer index prop`) : y(!1)), e.mapped.type !== "DRAGGING" && (Vs(r()), e.isEnabled && (Cs(t, o) || (process.env.NODE_ENV !== "production" ? y(!1, `${n(o)} Unable to find drag handle`) : y(!1))));
  });
}
function Wm(e) {
  eo(() => {
    const t = j(e);
    Kt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? y(!1, "Draggable isClone prop value changed during component life") : y(!1));
    }, [e]);
  });
}
function ur(e) {
  const t = pr(e);
  return t || (process.env.NODE_ENV !== "production" ? y(!1, "Could not find required context") : y()), t;
}
function jm(e) {
  e.preventDefault();
}
const Um = (e) => {
  const t = j(null), r = M((N = null) => {
    t.current = N;
  }, []), n = M(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = ur(vr), {
    type: s,
    droppableId: c
  } = ur(no), u = K(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: p,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: f,
    canDragInteractiveElements: b,
    isClone: g,
    mapped: m,
    dropAnimationFinished: v
  } = e;
  if (km(e, o, n), Wm(g), !g) {
    const N = K(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: b,
      shouldRespectForcePress: f,
      isEnabled: d
    }), [u, a, n, b, f, d]);
    Gm(N);
  }
  const x = K(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: jm
  } : null, [o, i, l, d]), w = M((N) => {
    m.type === "DRAGGING" && m.dropping && N.propertyName === "transform" && ($.version.startsWith("16") || $.version.startsWith("17") ? v() : Dn(v));
  }, [v, m]), E = K(() => {
    const N = Bm(m), O = m.type === "DRAGGING" && m.dropping ? w : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: N,
        onTransitionEnd: O
      },
      dragHandleProps: x
    };
  }, [o, x, l, m, w, r]), h = K(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return $.createElement($.Fragment, null, p(E, m.snapshot, h));
};
var zm = Um, Ms = (e, t) => e === t, Ls = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Hm = (e) => e.combine ? e.combine.draggableId : null, qm = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Ym() {
  const e = Ne((o, i) => ({
    x: o,
    y: i
  })), t = Ne((o, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = Ne((o, i, a, s, c = null, u = null, p = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: u,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: p,
      snapshot: t(i, s, c, u, null)
    }
  }));
  return (o, i) => {
    if (kt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = Ve(o.impact), u = qm(o.impact), p = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, c, u, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], u = a.result, p = u.mode, l = Ls(u), d = Hm(u), b = {
        duration: o.dropDuration,
        curve: qn.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Bt.opacity.drop : null,
        scale: d ? Bt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: b,
          draggingOver: l,
          combineWith: d,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, s, l, d, b)
        }
      };
    }
    return null;
  };
}
function Bs(e = null) {
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
const Km = {
  mapped: {
    type: "SECONDARY",
    offset: Se,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Bs(null)
  }
};
function Xm() {
  const e = Ne((a, s) => ({
    x: a,
    y: s
  })), t = Ne(Bs), r = Ne((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(Se, a, !0) : null, o = (a, s, c, u) => {
    const p = c.displaced.visible[a], l = !!(u.inVirtualList && u.effected[a]), d = gr(c), f = d && d.draggableId === a ? s : null;
    if (!p) {
      if (!l)
        return n(f);
      if (c.displaced.invisible[a])
        return null;
      const m = yt(u.displacedBy.point), v = e(m.x, m.y);
      return r(v, f, !0);
    }
    if (l)
      return n(f);
    const b = c.displacedBy.point, g = e(b.x, b.y);
    return r(g, f, p.shouldAnimate);
  };
  return (a, s) => {
    if (kt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : o(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Jm = () => {
  const e = Ym(), t = Xm();
  return (n, o) => e(n, o) || t(n, o) || Km;
}, Zm = {
  dropAnimationFinished: ms
}, Qm = Fa(Jm, Zm, null, {
  context: Zn,
  areStatePropsEqual: Ms
})(zm);
var eg = Qm;
function Fs(e) {
  return ur(no).isUsingCloneFor === e.draggableId && !e.isClone ? null : $.createElement(eg, e);
}
function tg(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return $.createElement(Fs, Ze({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const oo = (e) => (t) => e === t, rg = oo("scroll"), ng = oo("auto"), og = oo("visible"), wi = (e, t) => t(e.overflowX) || t(e.overflowY), ig = (e, t) => t(e.overflowX) && t(e.overflowY), Gs = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return wi(r, rg) || wi(r, ng);
}, ag = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Gt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, y()), !Gs(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return ig(n, og) || process.env.NODE_ENV !== "production" && le(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, io = (e) => e == null ? null : e === document.body ? ag() ? e : null : e === document.documentElement ? null : Gs(e) ? e : io(e.parentElement);
var sg = (e) => {
  !e || !io(e.parentElement) || process.env.NODE_ENV !== "production" && le(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, fn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ks = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ks(e.parentElement) : !1;
var cg = (e) => {
  const t = io(e), r = ks(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, lg = ({
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
      client: f
    } = s, b = vs({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: f.paddingBox.height,
      width: f.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: f,
      scrollSize: d,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: b,
        diff: {
          value: Se,
          displacement: Se
        }
      }
    };
  })(), u = o === "vertical" ? Gn : Ja, p = gt({
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
    subject: p
  };
};
const ug = (e, t) => {
  const r = Wa(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, c = Mn({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Ln({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var dg = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = ug(e, c), p = sr(u, n), l = (() => {
    if (!c)
      return null;
    const f = Wa(c), b = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: f,
      page: sr(f, n),
      scroll: fn(c),
      scrollSize: b,
      shouldClipSubject: s
    };
  })();
  return lg({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: p,
    closest: l
  });
};
const pg = {
  passive: !1
}, fg = {
  passive: !0
};
var Ni = (e) => e.shouldPublishImmediately ? pg : fg;
const Zt = (e) => e && e.env.closestScrollable || null;
function mg(e) {
  const t = j(null), r = ur(vr), n = Qn("droppable"), {
    registry: o,
    marshal: i
  } = r, a = to(e), s = K(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = j(s), u = K(() => Ne((E, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? y(!1, "Can only update scroll when dragging") : y());
    const N = {
      x: E,
      y: h
    };
    i.updateDroppableScroll(s.id, N);
  }), [s.id, i]), p = M(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? Se : fn(E.env.closestScrollable);
  }, []), l = M(() => {
    const E = p();
    u(E.x, E.y);
  }, [p, u]), d = K(() => Tt(l), [l]), f = M(() => {
    const E = t.current, h = Zt(E);
    if (E && h || (process.env.NODE_ENV !== "production" ? y(!1, "Could not find scroll options while scrolling") : y()), E.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), b = M((E, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot collect a droppable while a drag is occurring") : y());
    const N = a.current, O = N.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot collect without a droppable ref") : y());
    const C = cg(O), G = {
      ref: O,
      descriptor: s,
      env: C,
      scrollOptions: h
    };
    t.current = G;
    const R = dg({
      ref: O,
      descriptor: s,
      env: C,
      windowScroll: E,
      direction: N.direction,
      isDropDisabled: N.isDropDisabled,
      isCombineEnabled: N.isCombineEnabled,
      shouldClipSubject: !N.ignoreContainerClipping
    }), F = C.closestScrollable;
    return F && (F.setAttribute(bi.contextId, r.contextId), F.addEventListener("scroll", f, Ni(G.scrollOptions)), process.env.NODE_ENV !== "production" && sg(F)), R;
  }, [r.contextId, s, f, a]), g = M(() => {
    const E = t.current, h = Zt(E);
    return E && h || (process.env.NODE_ENV !== "production" ? y(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : y()), fn(h);
  }, []), m = M(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot stop drag when no active drag") : y());
    const h = Zt(E);
    t.current = null, h && (d.cancel(), h.removeAttribute(bi.contextId), h.removeEventListener("scroll", f, Ni(E.scrollOptions)));
  }, [f, d]), v = M((E) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot scroll when there is no drag") : y());
    const N = Zt(h);
    N || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot scroll a droppable with no closest scrollable") : y()), N.scrollTop += E.y, N.scrollLeft += E.x;
  }, []), x = K(() => ({
    getDimensionAndWatchScroll: b,
    getScrollWhileDragging: g,
    dragStopped: m,
    scroll: v
  }), [m, b, g, v]), w = K(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  Me(() => (c.current = w.descriptor, o.droppable.register(w), () => {
    t.current && (process.env.NODE_ENV !== "production" && le("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(w);
  }), [x, s, m, w, i, o.droppable]), Me(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Me(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Fr() {
}
const Si = {
  width: 0,
  height: 0,
  margin: Hu
}, gg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Si : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, bg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = gg({
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
    transition: r !== "none" ? Ct.placeholder : null
  };
}, hg = (e) => {
  const t = j(null), r = M(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = he(e.animate === "open");
  ce(() => s ? n !== "open" ? (r(), c(!1), Fr) : t.current ? Fr : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Fr, [n, s, r]);
  const u = M((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = bg({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return $.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var vg = $.memo(hg);
function Gr(e) {
  return typeof e == "boolean";
}
function kr(e, t) {
  t.forEach((r) => r(e));
}
const yg = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? y(!1, "A Droppable requires a droppableId prop") : y()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? y(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : y());
}, function({
  props: t
}) {
  Gr(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? y(!1, "isDropDisabled must be a boolean") : y()), Gr(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? y(!1, "isCombineEnabled must be a boolean") : y()), Gr(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? y(!1, "ignoreContainerClipping must be a boolean") : y());
}, function({
  getDroppableRef: t
}) {
  Vs(t());
}], Eg = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && le(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], xg = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? y(!1, "Must provide a clone render function (renderClone) for virtual lists") : y());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? y(!1, "Expected virtual list to not have a placeholder") : y());
}];
function wg(e) {
  Kt(() => {
    kr(e, yg), e.props.mode === "standard" && kr(e, Eg), e.props.mode === "virtual" && kr(e, xg);
  });
}
class Ng extends $.PureComponent {
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
const Sg = (e) => {
  const t = pr(vr);
  t || (process.env.NODE_ENV !== "production" ? y(!1, "Could not find app context") : y());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = j(null), i = j(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: p,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: f,
    snapshot: b,
    useClone: g,
    updateViewportMaxScroll: m,
    getContainerForClone: v
  } = e, x = M(() => o.current, []), w = M((_ = null) => {
    o.current = _;
  }, []), E = M(() => i.current, []), h = M((_ = null) => {
    i.current = _;
  }, []);
  wg({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: E
  });
  const N = M(() => {
    n() && m({
      maxScroll: Es()
    });
  }, [n, m]);
  mg({
    droppableId: s,
    type: c,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: f,
    ignoreContainerClipping: l,
    getDroppableRef: x
  });
  const O = K(() => $.createElement(Ng, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: _,
    data: U,
    animate: X
  }) => $.createElement(vg, {
    placeholder: U,
    onClose: _,
    innerRef: h,
    animate: X,
    contextId: r,
    onTransitionEnd: N
  })), [r, N, e.placeholder, e.shouldAnimatePlaceholder, h]), C = K(() => ({
    innerRef: w,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, O, w]), G = g ? g.dragging.draggableId : null, R = K(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: G
  }), [s, G, c]);
  function F() {
    if (!g)
      return null;
    const {
      dragging: _,
      render: U
    } = g, X = $.createElement(Fs, {
      draggableId: _.draggableId,
      index: _.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, T) => U(J, T, _));
    return la.createPortal(X, v());
  }
  return $.createElement(no.Provider, {
    value: R
  }, a(C, b), F());
};
var Dg = Sg;
function Og() {
  return document.body || (process.env.NODE_ENV !== "production" ? y(!1, "document.body is not ready") : y()), document.body;
}
const Di = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Og
}, Ws = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Di)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Di[r]
    });
  return t;
}, Wr = (e, t) => e === t.droppable.type, Oi = (e, t) => t.draggables[e.draggable.id], Cg = () => {
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
  }, r = Ne((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = Ne((i, a, s, c, u, p) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const b = p ? {
        render: p,
        dragging: r(u.descriptor)
      } : null, g = {
        isDraggingOver: s,
        draggingOverWith: s ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: u.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: b
      };
    }
    if (!a)
      return t;
    if (!c)
      return e;
    const f = {
      isDraggingOver: s,
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
  return (i, a) => {
    const s = Ws(a), c = s.droppableId, u = s.type, p = !s.isDropDisabled, l = s.renderClone;
    if (kt(i)) {
      const d = i.critical;
      if (!Wr(u, d))
        return t;
      const f = Oi(d, i.dimensions), b = Ve(i.impact) === c;
      return n(c, p, b, b, f, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!Wr(u, d.critical))
        return t;
      const f = Oi(d.critical, i.dimensions);
      return n(c, p, Ls(d.result) === c, Ve(d.impact) === c, f, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!Wr(u, d.critical))
        return t;
      const f = Ve(d.impact) === c, b = !!(d.impact.at && d.impact.at.type === "COMBINE"), g = d.critical.droppable.id === c;
      return f ? b ? e : t : g ? e : t;
    }
    return t;
  };
}, Ig = {
  updateViewportMaxScroll: ip
}, _g = Fa(Cg, Ig, (e, t, r) => ({
  ...Ws(r),
  ...e,
  ...t
}), {
  context: Zn,
  areStatePropsEqual: Ms
})(Dg);
var Ag = _g;
const Mv = ({
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
  const [p, l] = he(null), [d, f] = he(e);
  ce(() => {
    f(e);
  }, [e]);
  const b = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", g = (v) => {
    a == null || a(v), l(v);
  }, m = (v) => {
    if (!v.destination || !(d != null && d.length)) return;
    const x = v.source.index, w = v.destination.index, E = [...d], [h] = E.splice(x, 1);
    E.splice(w, 0, h), f(E);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ ge("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ I("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ I("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ I(On, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ I(Ea, { className: u, children: /* @__PURE__ */ I("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ I("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ I(Rm, { onDragEnd: m, children: /* @__PURE__ */ I(Ag, { droppableId: "dropArray", direction: "vertical", children: (v) => /* @__PURE__ */ ge("table", { className: "w-full", children: [
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
    /* @__PURE__ */ ge(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...v.droppableProps,
        ref: v.innerRef,
        children: [
          d == null ? void 0 : d.map((x, w) => {
            var E;
            return /* @__PURE__ */ I(
              tg,
              {
                isDragDisabled: o,
                draggableId: (E = x == null ? void 0 : x.id) == null ? void 0 : E.toString(),
                index: w,
                children: (h) => {
                  const N = {
                    ...h.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ I(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${p === d[w] && b}`,
                      onClick: () => g(
                        s ? x[s] : x.id
                      ),
                      ref: h.innerRef,
                      ...h.draggableProps,
                      ...h.dragHandleProps,
                      style: N,
                      children: t.map((O, C) => {
                        var R;
                        let G = (R = O == null ? void 0 : O.name) == null ? void 0 : R.reduce(
                          (F, _) => F == null ? void 0 : F[_],
                          d == null ? void 0 : d[w]
                        );
                        return /* @__PURE__ */ I(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: O.transform ? O.transform(G, w) : G
                          },
                          C
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
}, Lv = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ I(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), jr = ({ name: e, className: t, ...r }) => /* @__PURE__ */ I(
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
), Pg = ({ error: e }) => /* @__PURE__ */ I("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ I("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null });
var Ci;
(function(e) {
  e.event = "event", e.props = "prop";
})(Ci || (Ci = {}));
function Rg(e, t) {
  const [r, n] = he(e);
  return ce(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
var Ur = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Ur(), "" + Ur();
function Tg() {
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
function $g(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mn = { exports: {} }, zr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii;
function Vg() {
  if (Ii) return zr;
  Ii = 1;
  var e = $;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var f = d(), b = n({ inst: { value: f, getSnapshot: d } }), g = b[0].inst, m = b[1];
    return i(
      function() {
        g.value = f, g.getSnapshot = d, c(g) && m({ inst: g });
      },
      [l, f, d]
    ), o(
      function() {
        return c(g) && m({ inst: g }), l(function() {
          c(g) && m({ inst: g });
        });
      },
      [l]
    ), a(f), f;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var f = d();
      return !r(l, f);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return zr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, zr;
}
var _i = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function Mg() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f, b) {
      return f === b && (f !== 0 || 1 / f === 1 / b) || f !== f && b !== b;
    }
    function t(f, b) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var g = b();
      if (!l) {
        var m = b();
        i(g, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      m = a({
        inst: { value: g, getSnapshot: b }
      });
      var v = m[0].inst, x = m[1];
      return c(
        function() {
          v.value = g, v.getSnapshot = b, r(v) && x({ inst: v });
        },
        [f, g, b]
      ), s(
        function() {
          return r(v) && x({ inst: v }), f(function() {
            r(v) && x({ inst: v });
          });
        },
        [f]
      ), u(g), g;
    }
    function r(f) {
      var b = f.getSnapshot;
      f = f.value;
      try {
        var g = b();
        return !i(f, g);
      } catch {
        return !0;
      }
    }
    function n(f, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = $, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, c = o.useLayoutEffect, u = o.useDebugValue, p = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    _i.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), _i;
}
process.env.NODE_ENV === "production" ? mn.exports = Vg() : mn.exports = Mg();
var ao = mn.exports, Hr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function Lg() {
  if (Pi) return Hr;
  Pi = 1;
  var e = $, t = ao;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Hr.useSyncExternalStoreWithSelector = function(u, p, l, d, f) {
    var b = i(null);
    if (b.current === null) {
      var g = { hasValue: !1, value: null };
      b.current = g;
    } else g = b.current;
    b = s(
      function() {
        function v(N) {
          if (!x) {
            if (x = !0, w = N, N = d(N), f !== void 0 && g.hasValue) {
              var O = g.value;
              if (f(O, N))
                return E = O;
            }
            return E = N;
          }
          if (O = E, n(w, N)) return O;
          var C = d(N);
          return f !== void 0 && f(O, C) ? (w = N, O) : (w = N, E = C);
        }
        var x = !1, w, E, h = l === void 0 ? null : l;
        return [
          function() {
            return v(p());
          },
          h === null ? void 0 : function() {
            return v(h());
          }
        ];
      },
      [p, l, d, f]
    );
    var m = o(u, b[0], b[1]);
    return a(
      function() {
        g.hasValue = !0, g.value = m;
      },
      [m]
    ), c(m), m;
  }, Hr;
}
var Ri = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function Bg() {
  return Ti || (Ti = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = $, r = ao, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Ri.useSyncExternalStoreWithSelector = function(u, p, l, d, f) {
      var b = i(null);
      if (b.current === null) {
        var g = { hasValue: !1, value: null };
        b.current = g;
      } else g = b.current;
      b = s(
        function() {
          function v(N) {
            if (!x) {
              if (x = !0, w = N, N = d(N), f !== void 0 && g.hasValue) {
                var O = g.value;
                if (f(O, N))
                  return E = O;
              }
              return E = N;
            }
            if (O = E, n(w, N))
              return O;
            var C = d(N);
            return f !== void 0 && f(O, C) ? (w = N, O) : (w = N, E = C);
          }
          var x = !1, w, E, h = l === void 0 ? null : l;
          return [
            function() {
              return v(p());
            },
            h === null ? void 0 : function() {
              return v(h());
            }
          ];
        },
        [p, l, d, f]
      );
      var m = o(u, b[0], b[1]);
      return a(
        function() {
          g.hasValue = !0, g.value = m;
        },
        [m]
      ), c(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ri;
}
process.env.NODE_ENV === "production" ? Lg() : Bg();
function Fg(e) {
  e();
}
let js = Fg;
const Gg = (e) => js = e, kg = () => js, $i = Symbol.for("react-redux-context"), Vi = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Wg() {
  var e;
  if (!P.createContext) return {};
  const t = (e = Vi[$i]) != null ? e : Vi[$i] = /* @__PURE__ */ new Map();
  let r = t.get(P.createContext);
  return r || (r = P.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(P.createContext, r)), r;
}
const jg = /* @__PURE__ */ Wg(), Ug = () => {
  throw new Error("uSES not initialized!");
};
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mt.apply(null, arguments);
}
function Us(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var gn = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function zg() {
  if (Mi) return ne;
  Mi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var N = h.$$typeof;
      switch (N) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case p:
                case b:
                case f:
                case a:
                  return h;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function E(h) {
    return w(h) === u;
  }
  return ne.AsyncMode = c, ne.ConcurrentMode = u, ne.ContextConsumer = s, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = p, ne.Fragment = n, ne.Lazy = b, ne.Memo = f, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = l, ne.isAsyncMode = function(h) {
    return E(h) || w(h) === c;
  }, ne.isConcurrentMode = E, ne.isContextConsumer = function(h) {
    return w(h) === s;
  }, ne.isContextProvider = function(h) {
    return w(h) === a;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ne.isForwardRef = function(h) {
    return w(h) === p;
  }, ne.isFragment = function(h) {
    return w(h) === n;
  }, ne.isLazy = function(h) {
    return w(h) === b;
  }, ne.isMemo = function(h) {
    return w(h) === f;
  }, ne.isPortal = function(h) {
    return w(h) === r;
  }, ne.isProfiler = function(h) {
    return w(h) === i;
  }, ne.isStrictMode = function(h) {
    return w(h) === o;
  }, ne.isSuspense = function(h) {
    return w(h) === l;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === i || h === o || h === l || h === d || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === f || h.$$typeof === a || h.$$typeof === s || h.$$typeof === p || h.$$typeof === m || h.$$typeof === v || h.$$typeof === x || h.$$typeof === g);
  }, ne.typeOf = w, ne;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li;
function Hg() {
  return Li || (Li = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function w(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === l || S === d || typeof S == "object" && S !== null && (S.$$typeof === b || S.$$typeof === f || S.$$typeof === a || S.$$typeof === s || S.$$typeof === p || S.$$typeof === m || S.$$typeof === v || S.$$typeof === x || S.$$typeof === g);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var ye = S.$$typeof;
        switch (ye) {
          case t:
            var D = S.type;
            switch (D) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case l:
                return D;
              default:
                var Ae = D && D.$$typeof;
                switch (Ae) {
                  case s:
                  case p:
                  case b:
                  case f:
                  case a:
                    return Ae;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var h = c, N = u, O = s, C = a, G = t, R = p, F = n, _ = b, U = f, X = r, J = i, T = o, V = l, k = !1;
    function z(S) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(S) || E(S) === c;
    }
    function q(S) {
      return E(S) === u;
    }
    function W(S) {
      return E(S) === s;
    }
    function Z(S) {
      return E(S) === a;
    }
    function pe(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Ee(S) {
      return E(S) === p;
    }
    function be(S) {
      return E(S) === n;
    }
    function xe(S) {
      return E(S) === b;
    }
    function ve(S) {
      return E(S) === f;
    }
    function De(S) {
      return E(S) === r;
    }
    function ue(S) {
      return E(S) === i;
    }
    function Oe(S) {
      return E(S) === o;
    }
    function je(S) {
      return E(S) === l;
    }
    ie.AsyncMode = h, ie.ConcurrentMode = N, ie.ContextConsumer = O, ie.ContextProvider = C, ie.Element = G, ie.ForwardRef = R, ie.Fragment = F, ie.Lazy = _, ie.Memo = U, ie.Portal = X, ie.Profiler = J, ie.StrictMode = T, ie.Suspense = V, ie.isAsyncMode = z, ie.isConcurrentMode = q, ie.isContextConsumer = W, ie.isContextProvider = Z, ie.isElement = pe, ie.isForwardRef = Ee, ie.isFragment = be, ie.isLazy = xe, ie.isMemo = ve, ie.isPortal = De, ie.isProfiler = ue, ie.isStrictMode = Oe, ie.isSuspense = je, ie.isValidElementType = w, ie.typeOf = E;
  }()), ie;
}
process.env.NODE_ENV === "production" ? gn.exports = zg() : gn.exports = Hg();
var qg = gn.exports, so = qg, Yg = {
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
}, Kg = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Xg = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, zs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, co = {};
co[so.ForwardRef] = Xg;
co[so.Memo] = zs;
function Bi(e) {
  return so.isMemo(e) ? zs : co[e.$$typeof] || Yg;
}
var Jg = Object.defineProperty, Zg = Object.getOwnPropertyNames, Fi = Object.getOwnPropertySymbols, Qg = Object.getOwnPropertyDescriptor, eb = Object.getPrototypeOf, Gi = Object.prototype;
function Hs(e, t, r) {
  if (typeof t != "string") {
    if (Gi) {
      var n = eb(t);
      n && n !== Gi && Hs(e, n, r);
    }
    var o = Zg(t);
    Fi && (o = o.concat(Fi(t)));
    for (var i = Bi(e), a = Bi(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!Kg[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = Qg(t, c);
        try {
          Jg(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var tb = Hs;
const ki = /* @__PURE__ */ $g(tb);
var bn = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function rb() {
  if (Wi) return oe;
  Wi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var v = m.$$typeof;
      switch (v) {
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
  return oe.ContextConsumer = a, oe.ContextProvider = i, oe.Element = e, oe.ForwardRef = c, oe.Fragment = r, oe.Lazy = d, oe.Memo = l, oe.Portal = t, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = u, oe.SuspenseList = p, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(m) {
    return g(m) === a;
  }, oe.isContextProvider = function(m) {
    return g(m) === i;
  }, oe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, oe.isForwardRef = function(m) {
    return g(m) === c;
  }, oe.isFragment = function(m) {
    return g(m) === r;
  }, oe.isLazy = function(m) {
    return g(m) === d;
  }, oe.isMemo = function(m) {
    return g(m) === l;
  }, oe.isPortal = function(m) {
    return g(m) === t;
  }, oe.isProfiler = function(m) {
    return g(m) === o;
  }, oe.isStrictMode = function(m) {
    return g(m) === n;
  }, oe.isSuspense = function(m) {
    return g(m) === u;
  }, oe.isSuspenseList = function(m) {
    return g(m) === p;
  }, oe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === p || m === f || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === l || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === b || m.getModuleId !== void 0);
  }, oe.typeOf = g, oe;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function nb() {
  return ji || (ji = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), b = !1, g = !1, m = !1, v = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function E(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || x || D === n || D === u || D === p || v || D === f || b || g || m || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === l || D.$$typeof === i || D.$$typeof === a || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === w || D.getModuleId !== void 0));
    }
    function h(D) {
      if (typeof D == "object" && D !== null) {
        var Ae = D.$$typeof;
        switch (Ae) {
          case e:
            var ke = D.type;
            switch (ke) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return ke;
              default:
                var A = ke && ke.$$typeof;
                switch (A) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return A;
                  default:
                    return Ae;
                }
            }
          case t:
            return Ae;
        }
      }
    }
    var N = a, O = i, C = e, G = c, R = r, F = d, _ = l, U = t, X = o, J = n, T = u, V = p, k = !1, z = !1;
    function q(D) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(D) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(D) {
      return h(D) === a;
    }
    function pe(D) {
      return h(D) === i;
    }
    function Ee(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function be(D) {
      return h(D) === c;
    }
    function xe(D) {
      return h(D) === r;
    }
    function ve(D) {
      return h(D) === d;
    }
    function De(D) {
      return h(D) === l;
    }
    function ue(D) {
      return h(D) === t;
    }
    function Oe(D) {
      return h(D) === o;
    }
    function je(D) {
      return h(D) === n;
    }
    function S(D) {
      return h(D) === u;
    }
    function ye(D) {
      return h(D) === p;
    }
    ae.ContextConsumer = N, ae.ContextProvider = O, ae.Element = C, ae.ForwardRef = G, ae.Fragment = R, ae.Lazy = F, ae.Memo = _, ae.Portal = U, ae.Profiler = X, ae.StrictMode = J, ae.Suspense = T, ae.SuspenseList = V, ae.isAsyncMode = q, ae.isConcurrentMode = W, ae.isContextConsumer = Z, ae.isContextProvider = pe, ae.isElement = Ee, ae.isForwardRef = be, ae.isFragment = xe, ae.isLazy = ve, ae.isMemo = De, ae.isPortal = ue, ae.isProfiler = Oe, ae.isStrictMode = je, ae.isSuspense = S, ae.isSuspenseList = ye, ae.isValidElementType = E, ae.typeOf = h;
  }()), ae;
}
process.env.NODE_ENV === "production" ? bn.exports = rb() : bn.exports = nb();
var Ui = bn.exports;
function lo(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function qr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || lo(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function ob(e, t, r) {
  qr(e, "mapStateToProps"), qr(t, "mapDispatchToProps"), qr(r, "mergeProps");
}
const ib = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function ab(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, p, l, d;
  function f(x, w) {
    return c = x, u = w, p = e(c, u), l = t(n, u), d = r(p, l, u), s = !0, d;
  }
  function b() {
    return p = e(c, u), t.dependsOnOwnProps && (l = t(n, u)), d = r(p, l, u), d;
  }
  function g() {
    return e.dependsOnOwnProps && (p = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(p, l, u), d;
  }
  function m() {
    const x = e(c, u), w = !a(x, p);
    return p = x, w && (d = r(p, l, u)), d;
  }
  function v(x, w) {
    const E = !i(w, u), h = !o(x, c, w, u);
    return c = x, u = w, E && h ? b() : E ? g() : h ? m() : d;
  }
  return function(x, w) {
    return s ? v(x, w) : f(x, w);
  };
}
function sb(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Us(t, ib);
  const a = r(e, i), s = n(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && ob(a, s, c), ab(a, s, c, e, i);
}
function cb(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function lb(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function qs(e, t, r) {
  lb(e) || lo(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function hn(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function zi(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ys(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = zi(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = zi(s), s = o(i, a)), process.env.NODE_ENV !== "production" && qs(s, n, t), s;
    }, o;
  };
}
function uo(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function ub(e) {
  return e && typeof e == "object" ? hn((t) => (
    // @ts-ignore
    cb(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ys(e, "mapDispatchToProps")
  ) : uo(e, "mapDispatchToProps") : hn((t) => ({
    dispatch: t
  }));
}
function db(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ys(e, "mapStateToProps")
  ) : uo(e, "mapStateToProps") : hn(() => ({}));
}
function pb(e, t, r) {
  return mt({}, r, e, t);
}
function fb(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && qs(i, r, "mergeProps")), i;
    };
  };
}
function mb(e) {
  return e ? typeof e == "function" ? fb(e) : uo(e, "mergeProps") : () => pb;
}
function gb() {
  const e = kg();
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
const Hi = {
  notify() {
  },
  get: () => []
};
function bb(e, t) {
  let r, n = Hi, o = 0, i = !1;
  function a(g) {
    p();
    const m = n.subscribe(g);
    let v = !1;
    return () => {
      v || (v = !0, m(), l());
    };
  }
  function s() {
    n.notify();
  }
  function c() {
    b.onStateChange && b.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = gb());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Hi);
  }
  function d() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, l());
  }
  const b = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return b;
}
const hb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vn = hb ? P.useLayoutEffect : P.useEffect;
function qi(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Yr(e, t) {
  if (qi(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !qi(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const vb = ["reactReduxForwardedRef"];
let Ks = Ug;
const yb = (e) => {
  Ks = e;
}, Eb = [null, null], xb = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function wb(e, t, r) {
  vn(() => e(...t), r);
}
function Nb(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Sb(e, t, r, n, o, i, a, s, c, u, p) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const f = () => {
    if (l || !s.current)
      return;
    const b = t.getState();
    let g, m;
    try {
      g = n(b, o.current);
    } catch (v) {
      m = v, d = v;
    }
    m || (d = null), g === i.current ? a.current || u() : (i.current = g, c.current = g, a.current = !0, p());
  };
  return r.onStateChange = f, r.trySubscribe(), f(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function Db(e, t) {
  return e === t;
}
let Yi = !1;
function Xs(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Db,
  areOwnPropsEqual: i = Yr,
  areStatePropsEqual: a = Yr,
  areMergedPropsEqual: s = Yr,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = jg
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Yi && (Yi = !0, lo('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, l = db(e), d = ub(t), f = mb(r), b = !!e;
  return (g) => {
    if (process.env.NODE_ENV !== "production" && !Ui.isValidElementType(g))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${xb(g)}`);
    const m = g.displayName || g.name || "Component", v = `Connect(${m})`, x = {
      shouldHandleStateChanges: b,
      displayName: v,
      wrappedComponentName: m,
      WrappedComponent: g,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function w(h) {
      const [N, O, C] = P.useMemo(() => {
        const {
          reactReduxForwardedRef: ue
        } = h, Oe = Us(h, vb);
        return [h.context, ue, Oe];
      }, [h]), G = P.useMemo(() => N && N.Consumer && // @ts-ignore
      Ui.isContextConsumer(/* @__PURE__ */ P.createElement(N.Consumer, null)) ? N : p, [N, p]), R = P.useContext(G), F = !!h.store && !!h.store.getState && !!h.store.dispatch, _ = !!R && !!R.store;
      if (process.env.NODE_ENV !== "production" && !F && !_)
        throw new Error(`Could not find "store" in the context of "${v}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${v} in connect options.`);
      const U = F ? h.store : R.store, X = _ ? R.getServerState : U.getState, J = P.useMemo(() => sb(U.dispatch, x), [U]), [T, V] = P.useMemo(() => {
        if (!b) return Eb;
        const ue = bb(U, F ? void 0 : R.subscription), Oe = ue.notifyNestedSubs.bind(ue);
        return [ue, Oe];
      }, [U, F, R]), k = P.useMemo(() => F ? R : mt({}, R, {
        subscription: T
      }), [F, R, T]), z = P.useRef(), q = P.useRef(C), W = P.useRef(), Z = P.useRef(!1);
      P.useRef(!1);
      const pe = P.useRef(!1), Ee = P.useRef();
      vn(() => (pe.current = !0, () => {
        pe.current = !1;
      }), []);
      const be = P.useMemo(() => () => W.current && C === q.current ? W.current : J(U.getState(), C), [U, C]), xe = P.useMemo(() => (ue) => T ? Sb(
        b,
        U,
        T,
        // @ts-ignore
        J,
        q,
        z,
        Z,
        pe,
        W,
        V,
        ue
      ) : () => {
      }, [T]);
      wb(Nb, [q, z, Z, C, W, V]);
      let ve;
      try {
        ve = Ks(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          xe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          be,
          X ? () => J(X(), C) : be
        );
      } catch (ue) {
        throw Ee.current && (ue.message += `
The error may be correlated with this previous error:
${Ee.current.stack}

`), ue;
      }
      vn(() => {
        Ee.current = void 0, W.current = void 0, z.current = ve;
      });
      const De = P.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ P.createElement(g, mt({}, ve, {
          ref: O
        }))
      ), [O, g, ve]);
      return P.useMemo(() => b ? /* @__PURE__ */ P.createElement(G.Provider, {
        value: k
      }, De) : De, [G, De, k]);
    }
    const E = P.memo(w);
    if (E.WrappedComponent = g, E.displayName = w.displayName = v, c) {
      const h = P.forwardRef(function(N, O) {
        return /* @__PURE__ */ P.createElement(E, mt({}, N, {
          reactReduxForwardedRef: O
        }));
      });
      return h.displayName = v, h.WrappedComponent = g, ki(h, g);
    }
    return ki(E, g);
  };
}
yb(ao.useSyncExternalStore);
Gg(ua);
function Ob(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Js(e, t) {
  var r = he(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = j(!0), o = j(r), i = n.current || !!(t && o.current.inputs && Ob(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ce(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Cb(e, t) {
  return Js(function() {
    return e;
  }, t);
}
var Ce = Js, we = Cb, Ib = process.env.NODE_ENV === "production", Kr = "Invariant failed";
function Ki(e, t) {
  if (Ib)
    throw new Error(Kr);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Kr, ": ").concat(r) : Kr;
  throw new Error(n);
}
var pt = function(e) {
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
}, Zs = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Xi = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, _b = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Xr = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, po = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Xr : r, o = e.border, i = o === void 0 ? Xr : o, a = e.padding, s = a === void 0 ? Xr : a, c = pt(Zs(t, n)), u = pt(Xi(t, i)), p = pt(Xi(u, s));
  return {
    marginBox: c,
    borderBox: pt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, Be = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Ki(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Ki()), n;
}, Ab = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Pb = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = _b(r, t);
  return po({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, yn = function(e, t) {
  return t === void 0 && (t = Ab()), Pb(e, t);
}, Qs = function(e, t) {
  var r = {
    top: Be(t.marginTop),
    right: Be(t.marginRight),
    bottom: Be(t.marginBottom),
    left: Be(t.marginLeft)
  }, n = {
    top: Be(t.paddingTop),
    right: Be(t.paddingRight),
    bottom: Be(t.paddingBottom),
    left: Be(t.paddingLeft)
  }, o = {
    top: Be(t.borderTopWidth),
    right: Be(t.borderRightWidth),
    bottom: Be(t.borderBottomWidth),
    left: Be(t.borderLeftWidth)
  };
  return po({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, ec = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Qs(t, r);
}, Ji = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Rb(e, t) {
  return !!(e === t || Ji(e) && Ji(t));
}
function Tb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Rb(e[r], t[r]))
      return !1;
  return !0;
}
function _e(e, t) {
  t === void 0 && (t = Tb);
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
var $b = function(e) {
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
const Vb = process.env.NODE_ENV === "production", Mb = /[ \t]{2,}/g, Lb = /^[ \t]*/gm, Zi = (e) => e.replace(Mb, " ").replace(Lb, "").trim(), Bb = (e) => Zi(`
  %c@hello-pangea/dnd

  %c${Zi(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Fb = (e) => [Bb(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Gb = "__@hello-pangea/dnd-disable-dev-warnings";
function tc(e, t) {
  Vb || typeof window < "u" && window[Gb] || console[e](...Fb(t));
}
const tt = tc.bind(null, "warn"), En = tc.bind(null, "error");
function kb() {
}
function Wb(e, t) {
  return {
    ...e,
    ...t
  };
}
function jb(e, t, r) {
  const n = t.map((o) => {
    const i = Wb(r, o.options);
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
const Ub = process.env.NODE_ENV === "production", Qi = "Invariant failed";
class Wt extends Error {
}
Wt.prototype.toString = function() {
  return this.message;
};
function B(e, t) {
  throw Ub ? new Wt(Qi) : new Wt(`${Qi}: ${t || ""}`);
}
class Bv extends $.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = kb, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && tt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Wt && (r.preventDefault(), process.env.NODE_ENV !== "production" && En(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = jb(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Wt) {
      process.env.NODE_ENV !== "production" && En(t.message), this.setState({});
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
const ut = {
  x: 0,
  y: 0
}, zb = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Hb = (e, t) => e.x === t.x && e.y === t.y, qb = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Yb = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var Kb = (e, t) => {
  const r = pt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Xb = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Jb = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Zb = (e, t) => t ? Xb(e, t.scroll.diff.displacement) : e, Qb = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, eh = (e, t) => t && t.shouldClipSubject ? Kb(t.pageMarginBox, e) : pt(e);
var th = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Zb(e.marginBox, n), i = Qb(o, r, t), a = eh(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
_e((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
_e((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const rh = _e((e) => Object.values(e)), nh = _e((e) => Object.values(e));
_e((e, t) => nh(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function oh(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
_e((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const ih = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, ah = {
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
_e(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: Yb(e.line, r)
  };
});
var rr = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const sh = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ch = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), fo = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, jt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, lh = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ot = `${lh.outOfTheWay}s ${fo.outOfTheWay}`, nr = {
  fluid: `opacity ${ot}`,
  snap: `transform ${ot}, opacity ${ot}`,
  drop: (e) => {
    const t = `${e}s ${fo.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ot}`,
  placeholder: `height ${ot}, width ${ot}, margin ${ot}`
}, ea = (e) => Hb(e, ut) ? void 0 : `translate(${e.x}px, ${e.y}px)`, xn = {
  moveTo: ea,
  drop: (e, t) => {
    const r = ea(e);
    if (r)
      return t ? `${r} scale(${jt.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var rc = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = zb({
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
}, uh = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot find document.documentElement") : B()), e;
}, dh = () => {
  const e = uh();
  return rc({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
_e((e) => rh(e).filter((t) => !(!t.isEnabled || !t.frame)));
const nc = "data-rfd", ta = (() => {
  const e = `${nc}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), ra = {
  contextId: `${nc}-scroll-container-context-id`
}, ph = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Sn : ce;
var It = ph;
function fh(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var mh = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function oc(e) {
  return e instanceof mh(e).HTMLElement;
}
function gh(e, t) {
  const r = `[${ta.contextId}="${e}"]`, n = fh(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && tt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(ta.draggableId) === t);
  return o ? oc(o) ? o : (process.env.NODE_ENV !== "production" && tt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && tt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var ic = $.createContext(null), bh = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot find document.body") : B()), e;
};
let hh = 0;
const ac = {
  separator: "::"
};
function vh(e, t = ac) {
  return Ce(() => `${e}${t.separator}${hh++}`, [t.separator, e]);
}
function yh(e, t = ac) {
  const r = $.useId();
  return Ce(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var sc = "useId" in $ ? yh : vh, mo = $.createContext(null);
function cc(e) {
  process.env.NODE_ENV !== "production" && e();
}
function go(e, t) {
  cc(() => {
    ce(() => {
      try {
        e();
      } catch (r) {
        En(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Eh(e) {
  const t = j(e);
  return ce(() => {
    t.current = e;
  }), t;
}
function bo(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const na = {
  dragging: 5e3,
  dropAnimating: 4500
}, xh = (e, t) => t ? nr.drop(t.duration) : e ? nr.snap : nr.fluid, wh = (e, t) => {
  if (e)
    return t ? jt.opacity.drop : jt.opacity.combining;
}, Nh = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Sh(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = Nh(e), s = !!o, c = s ? xn.drop(r, i) : xn.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: xh(a, o),
    transform: c,
    opacity: wh(i, s),
    zIndex: s ? na.dropAnimating : na.dragging,
    pointerEvents: "none"
  };
}
function Dh(e) {
  return {
    transform: xn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Oh(e) {
  return e.type === "DRAGGING" ? Sh(e) : Dh(e);
}
function Ch(e, t, r = ut) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Qs(o, n), a = yn(i, r), s = {
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
function Ih(e) {
  const t = sc("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = Ce(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = we((f) => {
    const b = o();
    return b || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot get dimension when no ref is set") : B()), Ch(r, b, f);
  }, [r, o]), p = Ce(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = j(p), d = j(!0);
  It(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), It(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const f = l.current;
    l.current = p, n.draggable.update(p, f);
  }, [p, n.draggable]);
}
var ho = $.createContext(null);
function lc(e) {
  e && oc(e) || (process.env.NODE_ENV !== "production" ? B(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : B());
}
function _h(e, t, r) {
  go(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? B(!1, "Draggable requires a draggableId") : B(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? B(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : B(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? B(!1, `${n(o)} requires an integer index prop`) : B(!1)), e.mapped.type !== "DRAGGING" && (lc(r()), e.isEnabled && (gh(t, o) || (process.env.NODE_ENV !== "production" ? B(!1, `${n(o)} Unable to find drag handle`) : B(!1))));
  });
}
function Ah(e) {
  cc(() => {
    const t = j(e);
    go(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? B(!1, "Draggable isClone prop value changed during component life") : B(!1));
    }, [e]);
  });
}
function dr(e) {
  const t = pr(e);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, "Could not find required context") : B()), t;
}
function Ph(e) {
  e.preventDefault();
}
const Rh = (e) => {
  const t = j(null), r = we((N = null) => {
    t.current = N;
  }, []), n = we(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = dr(mo), {
    type: s,
    droppableId: c
  } = dr(ho), u = Ce(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: p,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: f,
    canDragInteractiveElements: b,
    isClone: g,
    mapped: m,
    dropAnimationFinished: v
  } = e;
  if (_h(e, o, n), Ah(g), !g) {
    const N = Ce(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: b,
      shouldRespectForcePress: f,
      isEnabled: d
    }), [u, a, n, b, f, d]);
    Ih(N);
  }
  const x = Ce(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Ph
  } : null, [o, i, l, d]), w = we((N) => {
    m.type === "DRAGGING" && m.dropping && N.propertyName === "transform" && ($.version.startsWith("16") || $.version.startsWith("17") ? v() : Dn(v));
  }, [v, m]), E = Ce(() => {
    const N = Oh(m), O = m.type === "DRAGGING" && m.dropping ? w : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: N,
        onTransitionEnd: O
      },
      dragHandleProps: x
    };
  }, [o, x, l, m, w, r]), h = Ce(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return $.createElement($.Fragment, null, p(E, m.snapshot, h));
};
var Th = Rh, uc = (e, t) => e === t, dc = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const $h = (e) => e.combine ? e.combine.draggableId : null, Vh = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Mh() {
  const e = _e((n, o) => ({
    x: n,
    y: o
  })), t = _e((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = _e((n, o, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: o,
      offset: n,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(o, a, s, c, null)
    }
  }));
  return (n, o) => {
    if (bo(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = rr(n.impact), c = Vh(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, c, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], c = i.result, u = c.mode, p = dc(c), l = $h(c), d = {
        duration: n.dropDuration,
        curve: fo.drop,
        moveTo: n.newHomeClientOffset,
        opacity: l ? jt.opacity.drop : null,
        scale: l ? jt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: p,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, p, l, d)
        }
      };
    }
    return null;
  };
}
function pc(e = null) {
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
const Lh = {
  mapped: {
    type: "SECONDARY",
    offset: ut,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: pc(null)
  }
};
function Bh() {
  const e = _e((i, a) => ({
    x: i,
    y: a
  })), t = _e(pc), r = _e((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(ut, i, !0) : null, o = (i, a, s, c) => {
    const u = s.displaced.visible[i], p = !!(c.inVirtualList && c.effected[i]), l = oh(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const g = qb(c.displacedBy.point), m = e(g.x, g.y);
      return r(m, d, !0);
    }
    if (p)
      return n(d);
    const f = s.displacedBy.point, b = e(f.x, f.y);
    return r(b, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (bo(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const Fh = () => {
  const e = Mh(), t = Bh();
  return (r, n) => e(r, n) || t(r, n) || Lh;
}, Gh = {
  dropAnimationFinished: ch
}, kh = Xs(Fh, Gh, null, {
  context: ic,
  areStatePropsEqual: uc
})(Th);
var Wh = kh;
function jh(e) {
  return dr(ho).isUsingCloneFor === e.draggableId && !e.isClone ? null : $.createElement(Wh, e);
}
const vo = (e) => (t) => e === t, Uh = vo("scroll"), zh = vo("auto"), Hh = vo("visible"), oa = (e, t) => t(e.overflowX) || t(e.overflowY), qh = (e, t) => t(e.overflowX) && t(e.overflowY), fc = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return oa(r, Uh) || oa(r, zh);
}, Yh = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = bh(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, B()), !fc(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return qh(n, Hh) || process.env.NODE_ENV !== "production" && tt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, yo = (e) => e == null ? null : e === document.body ? Yh() ? e : null : e === document.documentElement ? null : fc(e) ? e : yo(e.parentElement);
var Kh = (e) => {
  !e || !yo(e.parentElement) || process.env.NODE_ENV !== "production" && tt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, wn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const mc = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : mc(e.parentElement) : !1;
var Xh = (e) => {
  const t = yo(e), r = mc(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Jh = ({
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
      scrollSize: l,
      client: d
    } = s, f = rc({
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
        max: f,
        diff: {
          value: ut,
          displacement: ut
        }
      }
    };
  })(), u = o === "vertical" ? ih : ah, p = th({
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
    subject: p
  };
};
const Zh = (e, t) => {
  const r = ec(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = Zs({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return po({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Qh = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = Zh(e, c), p = yn(u, n), l = (() => {
    if (!c)
      return null;
    const d = ec(c), f = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: yn(d, n),
      scroll: wn(c),
      scrollSize: f,
      shouldClipSubject: s
    };
  })();
  return Jh({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: p,
    closest: l
  });
};
const ev = {
  passive: !1
}, tv = {
  passive: !0
};
var ia = (e) => e.shouldPublishImmediately ? ev : tv;
const Qt = (e) => e && e.env.closestScrollable || null;
function rv(e) {
  const t = j(null), r = dr(mo), n = sc("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Eh(e), s = Ce(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = j(s), u = Ce(() => _e((E, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? B(!1, "Can only update scroll when dragging") : B());
    const N = {
      x: E,
      y: h
    };
    i.updateDroppableScroll(s.id, N);
  }), [s.id, i]), p = we(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? ut : wn(E.env.closestScrollable);
  }, []), l = we(() => {
    const E = p();
    u(E.x, E.y);
  }, [p, u]), d = Ce(() => $b(l), [l]), f = we(() => {
    const E = t.current, h = Qt(E);
    if (E && h || (process.env.NODE_ENV !== "production" ? B(!1, "Could not find scroll options while scrolling") : B()), E.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), b = we((E, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? B(!1, "Cannot collect a droppable while a drag is occurring") : B());
    const N = a.current, O = N.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot collect without a droppable ref") : B());
    const C = Xh(O), G = {
      ref: O,
      descriptor: s,
      env: C,
      scrollOptions: h
    };
    t.current = G;
    const R = Qh({
      ref: O,
      descriptor: s,
      env: C,
      windowScroll: E,
      direction: N.direction,
      isDropDisabled: N.isDropDisabled,
      isCombineEnabled: N.isCombineEnabled,
      shouldClipSubject: !N.ignoreContainerClipping
    }), F = C.closestScrollable;
    return F && (F.setAttribute(ra.contextId, r.contextId), F.addEventListener("scroll", f, ia(G.scrollOptions)), process.env.NODE_ENV !== "production" && Kh(F)), R;
  }, [r.contextId, s, f, a]), g = we(() => {
    const E = t.current, h = Qt(E);
    return E && h || (process.env.NODE_ENV !== "production" ? B(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : B()), wn(h);
  }, []), m = we(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot stop drag when no active drag") : B());
    const h = Qt(E);
    t.current = null, h && (d.cancel(), h.removeAttribute(ra.contextId), h.removeEventListener("scroll", f, ia(E.scrollOptions)));
  }, [f, d]), v = we((E) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot scroll when there is no drag") : B());
    const N = Qt(h);
    N || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot scroll a droppable with no closest scrollable") : B()), N.scrollTop += E.y, N.scrollLeft += E.x;
  }, []), x = Ce(() => ({
    getDimensionAndWatchScroll: b,
    getScrollWhileDragging: g,
    dragStopped: m,
    scroll: v
  }), [m, b, g, v]), w = Ce(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  It(() => (c.current = w.descriptor, o.droppable.register(w), () => {
    t.current && (process.env.NODE_ENV !== "production" && tt("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(w);
  }), [x, s, m, w, i, o.droppable]), It(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), It(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Jr() {
}
const nv = {
  width: 0,
  height: 0,
  margin: Jb
}, ov = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? nv : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, iv = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = ov({
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
    transition: r !== "none" ? nr.placeholder : null
  };
}, av = (e) => {
  const t = j(null), r = we(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = he(e.animate === "open");
  ce(() => s ? n !== "open" ? (r(), c(!1), Jr) : t.current ? Jr : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Jr, [n, s, r]);
  const u = we((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = iv({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return $.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var sv = $.memo(av);
function Zr(e) {
  return typeof e == "boolean";
}
function Qr(e, t) {
  t.forEach((r) => r(e));
}
const cv = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? B(!1, "A Droppable requires a droppableId prop") : B()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? B(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : B());
}, function({
  props: e
}) {
  Zr(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? B(!1, "isDropDisabled must be a boolean") : B()), Zr(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? B(!1, "isCombineEnabled must be a boolean") : B()), Zr(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? B(!1, "ignoreContainerClipping must be a boolean") : B());
}, function({
  getDroppableRef: e
}) {
  lc(e());
}], lv = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && tt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], uv = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? B(!1, "Must provide a clone render function (renderClone) for virtual lists") : B());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? B(!1, "Expected virtual list to not have a placeholder") : B());
}];
function dv(e) {
  go(() => {
    Qr(e, cv), e.props.mode === "standard" && Qr(e, lv), e.props.mode === "virtual" && Qr(e, uv);
  });
}
class pv extends $.PureComponent {
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
const fv = (e) => {
  const t = pr(mo);
  t || (process.env.NODE_ENV !== "production" ? B(!1, "Could not find app context") : B());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = j(null), i = j(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: p,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: f,
    snapshot: b,
    useClone: g,
    updateViewportMaxScroll: m,
    getContainerForClone: v
  } = e, x = we(() => o.current, []), w = we((_ = null) => {
    o.current = _;
  }, []), E = we(() => i.current, []), h = we((_ = null) => {
    i.current = _;
  }, []);
  dv({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: E
  });
  const N = we(() => {
    n() && m({
      maxScroll: dh()
    });
  }, [n, m]);
  rv({
    droppableId: s,
    type: c,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: f,
    ignoreContainerClipping: l,
    getDroppableRef: x
  });
  const O = Ce(() => $.createElement(pv, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: _,
    data: U,
    animate: X
  }) => $.createElement(sv, {
    placeholder: U,
    onClose: _,
    innerRef: h,
    animate: X,
    contextId: r,
    onTransitionEnd: N
  })), [r, N, e.placeholder, e.shouldAnimatePlaceholder, h]), C = Ce(() => ({
    innerRef: w,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, O, w]), G = g ? g.dragging.draggableId : null, R = Ce(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: G
  }), [s, G, c]);
  function F() {
    if (!g)
      return null;
    const {
      dragging: _,
      render: U
    } = g, X = $.createElement(jh, {
      draggableId: _.draggableId,
      index: _.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, T) => U(J, T, _));
    return la.createPortal(X, v());
  }
  return $.createElement(ho.Provider, {
    value: R
  }, a(C, b), F());
};
var mv = fv;
function gv() {
  return document.body || (process.env.NODE_ENV !== "production" ? B(!1, "document.body is not ready") : B()), document.body;
}
const aa = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: gv
}, gc = (e) => {
  let t = {
    ...e
  }, r;
  for (r in aa)
    e[r] === void 0 && (t = {
      ...t,
      [r]: aa[r]
    });
  return t;
}, en = (e, t) => e === t.droppable.type, sa = (e, t) => t.draggables[e.draggable.id], bv = () => {
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
  }, r = _e((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = _e((o, i, a, s, c, u) => {
    const p = c.descriptor.id;
    if (c.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, f = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: f,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: p,
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
  return (o, i) => {
    const a = gc(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (bo(o)) {
      const l = o.critical;
      if (!en(c, l))
        return t;
      const d = sa(l, o.dimensions), f = rr(o.impact) === s;
      return n(s, u, f, f, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const l = o.completed;
      if (!en(c, l.critical))
        return t;
      const d = sa(l.critical, o.dimensions);
      return n(s, u, dc(l.result) === s, rr(l.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const l = o.completed;
      if (!en(c, l.critical))
        return t;
      const d = rr(l.impact) === s, f = !!(l.impact.at && l.impact.at.type === "COMBINE"), b = l.critical.droppable.id === s;
      return d ? f ? e : t : b ? e : t;
    }
    return t;
  };
}, hv = {
  updateViewportMaxScroll: sh
};
Xs(bv, hv, (e, t, r) => ({
  ...gc(r),
  ...e,
  ...t
}), {
  context: ic,
  areStatePropsEqual: uc
})(mv);
const Fv = ({
  options: e,
  field: t,
  onChange: r,
  className: n,
  value: o,
  parentClassName: i,
  listClassname: a,
  trigger: s,
  error: c,
  ...u
}) => {
  var h;
  const [p, l] = he(!1), [d, f] = he(""), b = Rg(d, 100), g = j(null), [m, v] = he("below");
  ce(() => {
    const N = (O) => {
      g.current && !g.current.contains(O.target) && l(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, []), ce(() => {
    if (p) {
      const N = g.current;
      if (N) {
        const { bottom: O } = N.getBoundingClientRect(), C = window.innerHeight - O, G = N.getBoundingClientRect().top;
        C >= 200 || C > G ? v("below") : v("above");
      }
    }
  }, [p]);
  const x = (N) => {
    r(N === o ? null : N), l(!1);
  }, w = e.filter(
    (N) => N.label.toLowerCase().includes(b.toLowerCase())
  ), E = m === "below" ? "top-[100%]" : "bottom-[120%]";
  return /* @__PURE__ */ ge("div", { ref: g, className: "relative", children: [
    /* @__PURE__ */ I("div", { className: `h-fit w-full cursor-pointer ${i}`, children: s && !p ? s : /* @__PURE__ */ ge(_t, { children: [
      /* @__PURE__ */ I(
        "input",
        {
          ...u,
          ref: g,
          className: Oa(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none cursor-pointer",
            n,
            "!pr-9"
          ),
          value: o ? (h = e.find((N) => N.value === o)) == null ? void 0 : h.label : "",
          onFocus: () => l(!0),
          placeholder: "Выбрать",
          readOnly: !0
        }
      ),
      /* @__PURE__ */ I(
        jr,
        {
          name: "arrow-down",
          className: "w-[11px] h-[10px] absolute right-[14px] top-0 bottom-0 my-auto !text-[#797A7F] cursor-pointer pointer-events-none"
        }
      )
    ] }) }),
    p && /* @__PURE__ */ ge(
      "div",
      {
        className: `absolute ${E} ${a} z-10 w-full py-2 px-2 bg-white shadow-[1px_1px_11px_0_rgb(174_178_191)] max-h-60 mt-1 rounded-[20px] overflow-auto scrollbar-thin scrollbar-thumb-[#A6B9FF] scrollbar-track-transparent`,
        children: [
          /* @__PURE__ */ ge("div", { className: "h-fit w-full relative mb-1", children: [
            /* @__PURE__ */ I(
              jr,
              {
                name: "search",
                className: "w-[14px] h-[14px] absolute left-[6px] top-0 bottom-0 my-auto !text-primary"
              }
            ),
            /* @__PURE__ */ I(
              "input",
              {
                ...u,
                className: "bg-[#f6f7fa] rounded-[20px] focus:outline-none p-1 !pl-7 placeholder:!text-sm !text-sm !w-full",
                value: p && d || "",
                placeholder: "Поиск...",
                onChange: (N) => f(N.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ I("ul", { className: "flex flex-col gap-1", children: w == null ? void 0 : w.map((N) => /* @__PURE__ */ I(
            "li",
            {
              onClick: () => x(N.value),
              className: `rounded-[20px] relative px-2 py-1 !pl-[24px] hover:bg-gray-100 cursor-pointer ${o === N.value && "bg-[#A6B9FF]"}`,
              children: /* @__PURE__ */ ge("div", { className: "flex flex-row items-center justify-between gap-2", children: [
                o === N.value && /* @__PURE__ */ I(
                  jr,
                  {
                    name: "checked",
                    className: "w-4 h-4 text-white z-20 absolute left-2 top-0 bottom-0 my-auto"
                  }
                ),
                /* @__PURE__ */ I(
                  "button",
                  {
                    className: `w-full text-left !p-0 !text-sm text-dark !font-normal !rounded-none ${o === N.value && "text-white"}`,
                    children: N.label
                  }
                )
              ] })
            },
            +N.value
          )) })
        ]
      }
    ),
    /* @__PURE__ */ I(Pg, { error: c })
  ] });
};
var Nn = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new WeakMap(), ca = 0, vv = void 0;
function yv(e) {
  return e ? (er.has(e) || (ca += 1, er.set(e, ca.toString())), er.get(e)) : "0";
}
function Ev(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? yv(e.root) : e[t]}`).toString();
}
function xv(e) {
  const t = Ev(e);
  let r = Nn.get(t);
  if (!r) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const i = new IntersectionObserver((a) => {
      a.forEach((s) => {
        var c;
        const u = s.isIntersecting && o.some((p) => s.intersectionRatio >= p);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u), (c = n.get(s.target)) == null || c.forEach((p) => {
          p(u, s);
        });
      });
    }, e);
    o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: n
    }, Nn.set(t, r);
  }
  return r;
}
function wv(e, t, r = {}, n = vv) {
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
  const { id: o, observer: i, elements: a } = xv(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), Nn.delete(o));
  };
}
function Nv({
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
  var p;
  const [l, d] = P.useState(null), f = P.useRef(u), [b, g] = P.useState({
    inView: !!s,
    entry: void 0
  });
  f.current = u, P.useEffect(
    () => {
      if (a || !l) return;
      let w;
      return w = wv(
        l,
        (E, h) => {
          g({
            inView: E,
            entry: h
          }), f.current && f.current(E, h), h.isIntersecting && i && w && (w(), w = void 0);
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
  const m = (p = b.entry) == null ? void 0 : p.target, v = P.useRef(void 0);
  !l && m && !i && !a && v.current !== m && (v.current = m, g({
    inView: !!s,
    entry: void 0
  }));
  const x = [d, b.inView, b.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const Sv = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = he(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return ce(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ I(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ I(
        At,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, Gv = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: c, data: u } = e, p = u == null ? void 0 : u.pages.flatMap((f) => f), { ref: l, inView: d } = Nv();
  return ce(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ ge(_t, { children: [
    o && /* @__PURE__ */ I(Sv, { className: n }),
    /* @__PURE__ */ I(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(p != null && p.length) && p.map((f, b) => t(f, b))
      }
    ),
    /* @__PURE__ */ I(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: l,
        children: (s || c) && /* @__PURE__ */ I(On, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && /* @__PURE__ */ I("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, kv = () => {
  const e = j(null);
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
  Iv as Button,
  _v as Checkbox,
  Av as Chips,
  Cn as ErrorText,
  At as Icon,
  Gv as InfiniteScroll,
  Pv as Input,
  Rv as List,
  On as Loader,
  Tv as MultiSelectSearch,
  Sv as ScrollTopButton,
  $v as Search,
  Vv as Select,
  Fv as SelectSearch,
  Mv as Table,
  Lv as Textarea,
  Ea as Wrapper,
  Ca as useDebounce,
  kv as useScroll
};
