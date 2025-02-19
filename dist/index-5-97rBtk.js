import xc, { jsx as I, jsxs as xe, Fragment as It } from "react/jsx-runtime";
import * as P from "react";
import R, { useState as Ae, useEffect as me, useRef as j, useMemo as wc, useLayoutEffect as Cn, useContext as fr } from "react";
import ma, { unstable_batchedUpdates as ga, flushSync as _n } from "react-dom";
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
), In = ({ style: e, text: t }) => /* @__PURE__ */ xe("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ I("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ I("span", { className: "text-base", children: t })
] }), kv = ({
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
  const [u, p] = Ae(""), c = () => {
    o && n === "1C" && (p("Отправляем запрос в 1С"), setTimeout(
      () => p(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  me(() => {
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
  return /* @__PURE__ */ xe(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: d,
      ...l,
      children: [
        o ? /* @__PURE__ */ I(In, { text: n === "1C" ? u : void 0 }) : e,
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
}, An = ({ error: e }) => /* @__PURE__ */ I("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ I("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), Wv = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: l
}) => /* @__PURE__ */ xe(It, { children: [
  /* @__PURE__ */ xe(
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
  a && /* @__PURE__ */ I(An, { error: a })
] }), jv = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ I("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ I(It, { children: o.title ? /* @__PURE__ */ I(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ I(It, {}) })) });
function Pn(e, t) {
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
function Nc(e) {
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
function Dc(e) {
  return typeof e == "number" && isNaN(e);
}
function ba(e) {
  return st(e) || Dc(e) || typeof e == "number" && !isFinite(e);
}
function ha(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Sc(e) {
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
function Oc(e, t, r) {
  var n = Sc(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function Cc(e) {
  var t = j(e);
  t.current = e;
  var r = j(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Rn(e, t) {
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
function _c(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function va(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function No(e, t) {
  return Array(t + 1).join(e);
}
function ya(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + No("0", Math.abs(a)) + o : a >= s ? o = o + No("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function Do(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = Rn(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, l = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : l.toFixed(t), p = u.split("."), c = i;
  i && Number(p[0]) && (c = i.split("").reverse().reduce(function(b, m, v) {
    return b.length > v ? (Number(b[0]) + Number(m)).toString() + b.substring(1, b.length) : m + b;
  }, p[0]));
  var d = va(p[1] || "", t, r), f = s ? "-" : "", g = n ? "." : "";
  return "" + f + c + g + d;
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
var Ea = Nc(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), Ic = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Ac(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function wr(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Pc() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function xa(e) {
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
function wa(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Rc(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Tc(e, t, r, n, o, i, a) {
  a === void 0 && (a = Rc);
  var s = o.findIndex(function(E) {
    return E;
  }), l = e.slice(0, s);
  !t && !r.startsWith(l) && (t = l, r = l + r, n = n + l.length);
  for (var u = r.length, p = e.length, c = {}, d = new Array(u), f = 0; f < u; f++) {
    d[f] = -1;
    for (var g = 0, b = p; g < b; g++) {
      var m = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: f,
        formattedValueIndex: g
      });
      if (m && c[g] !== !0) {
        d[f] = g, c[g] = !0;
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
function ir(e, t, r, n) {
  var o = e.length;
  if (t = Ac(t, 0, o), n === "left") {
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
function Vc(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(ct(e[r]) || ct(e[r - 1]));
  return t;
}
function Na(e, t, r, n, o, i) {
  i === void 0 && (i = He);
  var a = Cc(function(g, b) {
    var m, v;
    return ba(g) ? (v = "", m = "") : typeof g == "number" || b ? (v = typeof g == "number" ? ya(g) : g, m = n(v)) : (v = o(g, void 0), m = n(v)), { formattedValue: m, numAsString: v };
  }), s = Ae(function() {
    return a(st(e) ? t : e, r);
  }), l = s[0], u = s[1], p = function(g, b) {
    g.formattedValue !== l.formattedValue && u({
      formattedValue: g.formattedValue,
      numAsString: g.value
    }), i(g, b);
  }, c = e, d = r;
  st(e) && (c = l.numAsString, d = !0);
  var f = a(c, d);
  return wc(function() {
    u(f);
  }, [f.formattedValue]), [l, p];
}
function $c(e) {
  return e.replace(/[^0-9]/g, "");
}
function Mc(e) {
  return e;
}
function Da(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = Mc);
  var s = e.removeFormatting;
  s === void 0 && (s = $c);
  var l = e.defaultValue, u = e.valueIsNumericString, p = e.onValueChange, c = e.isAllowed, d = e.onChange;
  d === void 0 && (d = He);
  var f = e.onKeyDown;
  f === void 0 && (f = He);
  var g = e.onMouseUp;
  g === void 0 && (g = He);
  var b = e.onFocus;
  b === void 0 && (b = He);
  var m = e.onBlur;
  m === void 0 && (m = He);
  var v = e.value, x = e.getCaretBoundary;
  x === void 0 && (x = Vc);
  var w = e.isValidInputCharacter;
  w === void 0 && (w = ct);
  var E = e.isCharacterSame, h = Pn(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), N = Na(v, l, !!u, a, s, p), O = N[0], C = O.formattedValue, G = O.numAsString, T = N[1], F = j(), _ = j({ formattedValue: C, numAsString: G }), U = function(A, L) {
    _.current = { formattedValue: A.formattedValue, numAsString: A.value }, T(A, L);
  }, X = Ae(!1), J = X[0], V = X[1], $ = j(null), k = j({
    setCaretTimeout: null,
    focusTimeout: null
  });
  me(function() {
    return V(!0), function() {
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
    return ir(A, L, x(A), Y);
  }, de = function(A, L, Y) {
    var pe = x(L), Re = Tc(L, C, A, Y, pe, w, E);
    return Re = ir(L, Re, pe), Re;
  }, ve = function(A) {
    var L = A.formattedValue;
    L === void 0 && (L = "");
    var Y = A.input, pe = A.source, Re = A.event, fe = A.numAsString, se;
    if (Y) {
      var Ue = A.inputValue || Y.value, qe = wr(Y);
      Y.value = L, se = de(Ue, L, qe), se !== void 0 && W(Y, se, L);
    }
    L !== C && U(q(L, fe), { event: Re, source: pe });
  };
  me(function() {
    var A = _.current, L = A.formattedValue, Y = A.numAsString;
    (C !== L || G !== Y) && U(q(C, G), {
      event: void 0,
      source: Pt.props
    });
  }, [C, G]);
  var ge = $.current ? wr($.current) : void 0, ye = typeof window < "u" ? Cn : me;
  ye(function() {
    var A = $.current;
    if (C !== _.current.formattedValue && A) {
      var L = de(_.current.formattedValue, C, ge);
      A.value = C, W(A, L, C);
    }
  }, [C]);
  var be = function(A, L, Y) {
    var pe = L.target, Re = F.current ? Ic(F.current, pe.selectionEnd) : Ea(C, A), fe = Object.assign(Object.assign({}, Re), { lastValue: C }), se = s(A, fe), Ue = z(se);
    if (se = s(Ue, void 0), c && !c(q(Ue, se))) {
      var qe = L.target, Ye = wr(qe), xr = de(A, C, Ye);
      return qe.value = C, W(qe, xr, C), !1;
    }
    return ve({
      formattedValue: Ue,
      numAsString: se,
      inputValue: A,
      event: L,
      source: Y,
      input: L.target
    }), !0;
  }, De = function(A, L) {
    L === void 0 && (L = 0);
    var Y = A.selectionStart, pe = A.selectionEnd;
    F.current = { selectionStart: Y, selectionEnd: pe + L };
  }, le = function(A) {
    var L = A.target, Y = L.value, pe = be(Y, A, Pt.event);
    pe && d(A), F.current = void 0;
  }, Se = function(A) {
    var L = A.target, Y = A.key, pe = L.selectionStart, Re = L.selectionEnd, fe = L.value;
    fe === void 0 && (fe = "");
    var se;
    Y === "ArrowLeft" || Y === "Backspace" ? se = Math.max(pe - 1, 0) : Y === "ArrowRight" ? se = Math.min(pe + 1, fe.length) : Y === "Delete" && (se = pe);
    var Ue = 0;
    Y === "Delete" && pe === Re && (Ue = 1);
    var qe = Y === "ArrowLeft" || Y === "ArrowRight";
    if (se === void 0 || pe !== Re && !qe) {
      f(A), De(L, Ue);
      return;
    }
    var Ye = se;
    if (qe) {
      var xr = Y === "ArrowLeft" ? "left" : "right";
      Ye = Z(fe, se, xr), Ye !== se && A.preventDefault();
    } else Y === "Delete" && !w(fe[se]) ? Ye = Z(fe, se, "right") : Y === "Backspace" && !w(fe[se]) && (Ye = Z(fe, se, "left"));
    Ye !== se && W(L, Ye, fe), f(A), De(L, Ue);
  }, je = function(A) {
    var L = A.target, Y = function() {
      var pe = L.selectionStart, Re = L.selectionEnd, fe = L.value;
      if (fe === void 0 && (fe = ""), pe === Re) {
        var se = Z(fe, pe);
        se !== pe && W(L, se, fe);
      }
    };
    Y(), requestAnimationFrame(function() {
      Y();
    }), g(A), De(L);
  }, D = function(A) {
    A.persist && A.persist();
    var L = A.target, Y = A.currentTarget;
    $.current = L, k.current.focusTimeout = setTimeout(function() {
      var pe = L.selectionStart, Re = L.selectionEnd, fe = L.value;
      fe === void 0 && (fe = "");
      var se = Z(fe, pe);
      se !== pe && !(pe === 0 && Re === fe.length) && W(L, se, fe), b(Object.assign(Object.assign({}, A), { currentTarget: Y }));
    }, 0);
  }, he = function(A) {
    $.current = null, clearTimeout(k.current.focusTimeout), clearTimeout(k.current.setCaretTimeout), m(A);
  }, S = J && Pc() ? "numeric" : void 0, Ie = Object.assign({ inputMode: S }, h, {
    type: t,
    value: C,
    onChange: le,
    onKeyDown: Se,
    onMouseUp: je,
    onFocus: D,
    onBlur: he
  });
  if (r === "text")
    return o ? R.createElement(R.Fragment, null, o(C, h) || null) : R.createElement("span", Object.assign({}, h, { ref: i }), C);
  if (n) {
    var ke = n;
    return R.createElement(ke, Object.assign({}, Ie, { ref: i }));
  }
  return R.createElement("input", Object.assign({}, Ie, { ref: i }));
}
function So(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = mr(t), u = l.thousandSeparator, p = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && n, d = Rn(e, a), f = d.beforeDecimal, g = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (g = va(g, r, !!n)), u && (f = Oc(f, u, s)), o && (f = o + f), i && (g = g + i), b && (f = "-" + f), e = f + (c && p || "") + g, e;
}
function mr(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Lc(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function Bc(e, t) {
  return new RegExp("(^-)|[0-9]|" + ha(e), "g");
}
function Fc(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Gc(e, t, r) {
  var n;
  t === void 0 && (t = xa(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, u = t.to, p = u.start, c = u.end, d = mr(r), f = d.allowedDecimalSeparators, g = d.decimalSeparator, b = e[c] === g;
  if (ct(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - p === 1 && f.indexOf(e[p]) !== -1) {
    var m = s === 0 ? "" : g;
    e = e.substring(0, p) + m + e.substring(p + 1, e.length);
  }
  var v = function($, k, z) {
    var q = !1, W = !1;
    i.startsWith("-") ? q = !1 : $.startsWith("--") ? (q = !1, W = !0) : a.startsWith("-") && $.length === a.length ? q = !1 : $[0] === "-" && (q = !0);
    var Z = q ? 1 : 0;
    return W && (Z = 2), Z && ($ = $.substring(Z), k -= Z, z -= Z), { value: $, start: k, end: z, hasNegation: q };
  }, x = v(e, p, c), w = x.hasNegation;
  n = x, e = n.value, p = n.start, c = n.end;
  var E = v(t.lastValue, l.start, l.end), h = E.start, N = E.end, O = E.value, C = e.substring(p, c);
  e.length && O.length && (h > O.length - a.length || N < i.length) && !(C && a.startsWith(C)) && (e = O);
  var G = 0;
  e.startsWith(i) ? G += i.length : p < i.length && (G = p), e = e.substring(G), c -= G;
  var T = e.length, F = e.length - a.length;
  e.endsWith(a) ? T = F : (c > F || c > e.length - a.length) && (T = c), e = e.substring(0, T), e = Lc(w ? "-" + e : e, o), e = (e.match(Bc(g)) || []).join("");
  var _ = e.indexOf(g);
  e = e.replace(new RegExp(ha(g), "g"), function($, k) {
    return k === _ ? "." : "";
  });
  var U = Rn(e, o), X = U.beforeDecimal, J = U.afterDecimal, V = U.addNegation;
  return u.end - u.start < l.end - l.start && X === "" && b && !parseFloat(J) && (e = V ? "-" : ""), e;
}
function kc(e, t) {
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
function Wc(e) {
  var t = mr(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function jc(e) {
  e = Wc(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = He);
  var i = e.onBlur;
  i === void 0 && (i = He);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var p = e.defaultValue, c = e.value, d = e.valueIsNumericString, f = e.onValueChange, g = Pn(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = mr(e), m = b.decimalSeparator, v = b.allowedDecimalSeparators, x = function(V) {
    return So(V, e);
  }, w = function(V, $) {
    return Gc(V, $, e);
  }, E = st(c) ? p : c, h = d ?? Fc(E, u, t);
  st(c) ? st(p) || (h = h || typeof p == "number") : h = h || typeof c == "number";
  var N = function(V) {
    return ba(V) ? V : (typeof V == "number" && (V = ya(V)), h && typeof s == "number" ? Do(V, s, !!l) : V);
  }, O = Na(N(c), N(p), !!h, x, w, f), C = O[0], G = C.numAsString, T = C.formattedValue, F = O[1], _ = function(V) {
    var $ = V.target, k = V.key, z = $.selectionStart, q = $.selectionEnd, W = $.value;
    if (W === void 0 && (W = ""), (k === "Backspace" || k === "Delete") && q < u.length) {
      V.preventDefault();
      return;
    }
    if (z !== q) {
      o(V);
      return;
    }
    k === "Backspace" && W[0] === "-" && z === u.length + 1 && r && Je($, 1), s && l && (k === "Backspace" && W[z - 1] === m ? (Je($, z - 1), V.preventDefault()) : k === "Delete" && W[z] === m && V.preventDefault()), v != null && v.includes(k) && W[z] === m && Je($, z + 1);
    var Z = a === !0 ? "," : a;
    k === "Backspace" && W[z - 1] === Z && Je($, z - 1), k === "Delete" && W[z] === Z && Je($, z + 1), o(V);
  }, U = function(V) {
    var $ = G;
    if ($.match(/\d/g) || ($ = ""), n || ($ = _c($)), l && s && ($ = Do($, s, l)), $ !== G) {
      var k = So($, e);
      F({
        formattedValue: k,
        value: $,
        floatValue: parseFloat($)
      }, {
        event: V,
        source: Pt.event
      });
    }
    i(V);
  }, X = function(V) {
    return V === m ? !0 : ct(V);
  }, J = function(V) {
    var $ = V.currentValue, k = V.lastValue, z = V.formattedValue, q = V.currentValueIndex, W = V.formattedValueIndex, Z = $[q], de = z[W], ve = Ea(k, $), ge = ve.to, ye = function(be) {
      return w(be).indexOf(".") + u.length;
    };
    return c === 0 && l && s && $[ge.start] === m && ye($) < q && ye(z) > W ? !1 : q >= ge.start && q < ge.end && v && v.includes(Z) && de === m ? !0 : Z === de;
  };
  return Object.assign(Object.assign({}, g), {
    value: T,
    valueIsNumericString: !1,
    isValidInputCharacter: X,
    isCharacterSame: J,
    onValueChange: F,
    format: x,
    removeFormatting: w,
    getCaretBoundary: function(V) {
      return kc(V, e);
    },
    onKeyDown: _,
    onBlur: U
  });
}
function Uc(e) {
  var t = jc(e);
  return R.createElement(Da, Object.assign({}, t));
}
function zc(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), l = 0, u = r.length; l < u; l++)
    r[l] === i && (s[l] = e[a] || wa(o, a), a += 1);
  return s.join("");
}
function Hc(e, t, r) {
  t === void 0 && (t = xa(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(m) {
    return n[m] === o;
  }, u = function(m, v) {
    for (var x = "", w = 0; w < m.length; w++)
      l(v + w) && ct(m[w]) && (x += m[w]);
    return x;
  }, p = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return p(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var c = "", d = 0; d < e.length; d++)
      if (l(d))
        ct(e[d]) && (c += e[d]);
      else if (e[d] !== n[d])
        return p(e);
    return c;
  }
  var f = s.substring(0, i.start), g = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(f, 0) + p(g) + u(b, i.end);
}
function qc(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(d, f) {
    var g = void 0;
    d === o && (a++, g = wa(n, a - 1), s === -1 && e[f] === g && (s = f)), l[f] = g;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== l[d];
  }, p = 0, c = i.length; p < c; p++)
    i[p] = p === s || u(p) || u(p - 1);
  return i[r.indexOf(o)] = !0, i;
}
function Yc(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Kc(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Xc(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = He);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = Pn(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Yc(e);
  var u = function(g) {
    return qc(g, e);
  }, p = function(g) {
    var b = g.key, m = g.target, v = m.selectionStart, x = m.selectionEnd, w = m.value;
    if (v !== x) {
      n(g);
      return;
    }
    var E = v;
    if (b === "Backspace" || b === "Delete") {
      var h = "right";
      if (b === "Backspace") {
        for (; E > 0 && t[E - 1] !== o; )
          E--;
        h = "left";
      } else {
        for (var N = t.length; E < N && t[E] !== o; )
          E++;
        h = "right";
      }
      E = ir(w, E, u(w), h);
    } else t[E] !== o && b !== "ArrowLeft" && b !== "ArrowRight" && (E = ir(w, E + 1, u(w), "right"));
    E !== v && Je(m, E), n(g);
  }, c = st(i) ? a : i, d = s ?? Kc(c, t), f = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(g) {
      return zc(g, f);
    },
    removeFormatting: function(g, b) {
      return Hc(g, b, f);
    },
    getCaretBoundary: u,
    onKeyDown: p
  });
}
function Jc(e) {
  var t = Xc(e);
  return R.createElement(Da, Object.assign({}, t));
}
const Zc = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, Uv = ({
  type: e,
  field: t,
  label: r,
  fieldState: n,
  postfix: o,
  labelClassName: i,
  errorPlace: a = "right",
  parentClassName: s,
  className: l,
  formState: u,
  numberWrapperClassname: p,
  format: c,
  decimalScale: d = 1,
  ...f
}) => {
  var b, m, v;
  const g = "!border-danger";
  return /* @__PURE__ */ xe("label", { className: "relative", children: [
    r && /* @__PURE__ */ I("span", { className: `text-primary  ${i}`, children: r }),
    c ? /* @__PURE__ */ I(
      Jc,
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
        style: { fontSize: "16px" },
        className: `${n != null && n.error ? g : ""} w-full border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${l}`,
        format: c,
        ...f
      }
    ) : e === "number" ? /* @__PURE__ */ xe(
      "div",
      {
        className: `${n != null && n.error ? g : ""} ${s} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ I(
            Uc,
            {
              decimalScale: d,
              style: { fontSize: "16px" },
              onValueChange: (x) => {
                var w;
                return t == null ? void 0 : t.onChange((w = x.value.replace("_", "")) == null ? void 0 : w.toString());
              },
              value: (m = t == null ? void 0 : t.value) == null ? void 0 : m.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${l}`,
              ...f,
              ...Zc.number
            }
          ),
          o ? /* @__PURE__ */ I("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: o }) : null
        ]
      }
    ) : /* @__PURE__ */ I(
      "input",
      {
        ...t,
        ...f,
        type: e,
        style: { fontSize: "16px" },
        className: `${n != null && n.error ? g : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${l}`
      }
    ),
    /* @__PURE__ */ I("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (n == null ? void 0 : n.error) && ((v = Object.keys(n == null ? void 0 : n.error)) == null ? void 0 : v.length) && /* @__PURE__ */ I(An, { error: n == null ? void 0 : n.error }) })
  ] });
}, Sa = ({
  children: e,
  className: t
}) => /* @__PURE__ */ I("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), zv = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Ae(null);
  return /* @__PURE__ */ I(Sa, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ I("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ xe(
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
}, Tn = "-", Qc = (e) => {
  const t = tl(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Tn);
      return s[0] === "" && s.length !== 1 && s.shift(), Oa(s, t) || el(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, Oa = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Oa(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Tn);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, Oo = /^\[(.+)\]$/, el = (e) => {
  if (Oo.test(e)) {
    const t = Oo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, tl = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return nl(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    nn(a, n, i, t);
  }), n;
}, nn = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Co(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (rl(o)) {
        nn(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      nn(a, Co(t, i), r, n);
    });
  });
}, Co = (e, t) => {
  let r = e;
  return t.split(Tn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, rl = (e) => e.isThemeGetter, nl = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, ol = (e) => {
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
}, Ca = "!", il = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], i = t.length, a = (s) => {
    const l = [];
    let u = 0, p = 0, c;
    for (let m = 0; m < s.length; m++) {
      let v = s[m];
      if (u === 0) {
        if (v === o && (n || s.slice(m, m + i) === t)) {
          l.push(s.slice(p, m)), p = m + i;
          continue;
        }
        if (v === "/") {
          c = m;
          continue;
        }
      }
      v === "[" ? u++ : v === "]" && u--;
    }
    const d = l.length === 0 ? s : s.substring(p), f = d.startsWith(Ca), g = f ? d.substring(1) : d, b = c && c > p ? c - p : void 0;
    return {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: g,
      maybePostfixModifierPosition: b
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, al = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, sl = (e) => ({
  cache: ol(e.cacheSize),
  parseClassName: il(e),
  ...Qc(e)
}), cl = /\s+/, ll = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(cl);
  let s = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const u = a[l], {
      modifiers: p,
      hasImportantModifier: c,
      baseClassName: d,
      maybePostfixModifierPosition: f
    } = r(u);
    let g = !!f, b = n(g ? d.substring(0, f) : d);
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
    const m = al(p).join(":"), v = c ? m + Ca : m, x = v + b;
    if (i.includes(x))
      continue;
    i.push(x);
    const w = o(b, g);
    for (let E = 0; E < w.length; ++E) {
      const h = w[E];
      i.push(v + h);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function ul() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = _a(t)) && (n && (n += " "), n += r);
  return n;
}
const _a = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = _a(e[n])) && (r && (r += " "), r += t);
  return r;
};
function dl(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const u = t.reduce((p, c) => c(p), e());
    return r = sl(u), n = r.cache.get, o = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const u = n(l);
    if (u)
      return u;
    const p = ll(l, r);
    return o(l, p), p;
  }
  return function() {
    return i(ul.apply(null, arguments));
  };
}
const ue = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ia = /^\[(?:([a-z-]+):)?(.+)\]$/i, pl = /^\d+\/\d+$/, fl = /* @__PURE__ */ new Set(["px", "full", "screen"]), ml = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, hl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ze = (e) => ft(e) || fl.has(e) || pl.test(e), Ke = (e) => vt(e, "length", Ol), ft = (e) => !!e && !Number.isNaN(Number(e)), Nr = (e) => vt(e, "number", ft), xt = (e) => !!e && Number.isInteger(Number(e)), yl = (e) => e.endsWith("%") && ft(e.slice(0, -1)), H = (e) => Ia.test(e), Xe = (e) => ml.test(e), El = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xl = (e) => vt(e, El, Aa), wl = (e) => vt(e, "position", Aa), Nl = /* @__PURE__ */ new Set(["image", "url"]), Dl = (e) => vt(e, Nl, _l), Sl = (e) => vt(e, "", Cl), wt = () => !0, vt = (e, t, r) => {
  const n = Ia.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Ol = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gl.test(e) && !bl.test(e)
), Aa = () => !1, Cl = (e) => hl.test(e), _l = (e) => vl.test(e), Il = () => {
  const e = ue("colors"), t = ue("spacing"), r = ue("blur"), n = ue("brightness"), o = ue("borderColor"), i = ue("borderRadius"), a = ue("borderSpacing"), s = ue("borderWidth"), l = ue("contrast"), u = ue("grayscale"), p = ue("hueRotate"), c = ue("invert"), d = ue("gap"), f = ue("gradientColorStops"), g = ue("gradientColorStopPositions"), b = ue("inset"), m = ue("margin"), v = ue("opacity"), x = ue("padding"), w = ue("saturate"), E = ue("scale"), h = ue("sepia"), N = ue("skew"), O = ue("space"), C = ue("translate"), G = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", H, t], _ = () => [H, t], U = () => ["", ze, Ke], X = () => ["auto", ft, H], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", H], q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [ft, H];
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
      gradientColorStopPositions: [yl, Ke],
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
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Nr]
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
        "line-clamp": ["none", ft, Nr]
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
        decoration: [...V(), "wavy"]
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
        bg: [...J(), wl]
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
        bg: ["auto", "cover", "contain", xl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Dl]
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
        "divide-opacity": [v]
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
        outline: ["", ...V()]
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
        shadow: ["", "inner", "none", Xe, Sl]
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
        contrast: [l]
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
        invert: [c]
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
        stroke: [ze, Ke, Nr]
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
}, Al = /* @__PURE__ */ dl(Il);
function Pa(e, t) {
  const [r, n] = Ae(e);
  return me(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const Hv = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = Ae(!1), [a, s] = Ae(""), l = Pa(a, 100), u = j(null);
  me(() => {
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
  return /* @__PURE__ */ xe("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ xe("div", { className: "h-fit w-full", children: [
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
          className: Al(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && a || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (c) => {
              var d;
              return (d = e.find((f) => f.value === c)) == null ? void 0 : d.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (c) => s(c.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ I("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (c) => c.label.toLowerCase().includes(l.toLowerCase())
    ).map((c) => {
      var d;
      return /* @__PURE__ */ I(
        "li",
        {
          onClick: () => p(c.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ xe("div", { className: "flex flex-row", children: [
            c.icon && /* @__PURE__ */ I(At, { name: c.icon }),
            /* @__PURE__ */ I(
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
}, qv = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = Ae(r), s = Pa(i, 300);
  return me(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ xe("div", { className: `relative h-fit w-full ${o}`, children: [
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
        onChange: (l) => a(l.target.value),
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${n}`
      }
    )
  ] });
}, Yv = ({
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
}) => {
  var c;
  return /* @__PURE__ */ xe("label", { className: "relative", children: [
    l && /* @__PURE__ */ I("span", { className: `text-primary  ${i}`, children: l }),
    /* @__PURE__ */ I(
      "div",
      {
        className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
        children: /* @__PURE__ */ xe(
          "select",
          {
            ...n,
            ...u,
            className: `w-full ${o != null && o.error ? "!border-danger" : ""} cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
            children: [
              /* @__PURE__ */ I("option", { value: "", selected: !0, children: e }),
              t == null ? void 0 : t.map((d, f) => /* @__PURE__ */ I("option", { value: d.value, className: "text-black", children: d.label }, f))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ I("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((c = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : c.length) && /* @__PURE__ */ I(An, { error: o == null ? void 0 : o.error }) })
  ] });
};
function Rt(e) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rt(e);
}
function Pl(e, t) {
  if (Rt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Rt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rl(e) {
  var t = Pl(e, "string");
  return Rt(t) == "symbol" ? t : t + "";
}
function Tl(e, t, r) {
  return (t = Rl(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function _o(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _o(Object(r), !0).forEach(function(n) {
      Tl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _o(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ao = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Dr = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Po = {
  INIT: "@@redux/INIT" + Dr(),
  REPLACE: "@@redux/REPLACE" + Dr(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Dr();
  }
};
function Vl(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function $l(e) {
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
  if (Bl(e)) return "date";
  if (Ll(e)) return "error";
  var r = Ml(e);
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
function Ml(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ll(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Bl(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function it(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = $l(e)), t;
}
function Ra(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Te(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Te(1) : "Expected the enhancer to be a function. Instead, received: '" + it(r) + "'");
    return r(Ra)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Te(2) : "Expected the root reducer to be a function. Instead, received: '" + it(e) + "'");
  var o = e, i = t, a = [], s = a, l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function p() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Te(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Te(4) : "Expected the listener to be a function. Instead, received: '" + it(b) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Te(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return u(), s.push(b), function() {
      if (m) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? Te(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, u();
        var x = s.indexOf(b);
        s.splice(x, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!Vl(b))
      throw new Error(process.env.NODE_ENV === "production" ? Te(7) : "Actions must be plain objects. Instead, the actual type was: '" + it(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Te(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Te(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = o(i, b);
    } finally {
      l = !1;
    }
    for (var m = a = s, v = 0; v < m.length; v++) {
      var x = m[v];
      x();
    }
    return b;
  }
  function f(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Te(10) : "Expected the nextReducer to be a function. Instead, received: '" + it(b));
    o = b, d({
      type: Po.REPLACE
    });
  }
  function g() {
    var b, m = c;
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
    }, b[Ao] = function() {
      return this;
    }, b;
  }
  return d({
    type: Po.INIT
  }), n = {
    dispatch: d,
    subscribe: c,
    getState: p,
    replaceReducer: f
  }, n[Ao] = g, n;
}
function Ro(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function To(e, t) {
  if (typeof e == "function")
    return Ro(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Te(16) : "bindActionCreators expected an object or a function, but instead received: '" + it(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = Ro(o, t));
  }
  return r;
}
function Ta() {
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
function Fl() {
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
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = Ta.apply(void 0, s)(o.dispatch), Io(Io({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var Kv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var on = { exports: {} }, Sr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vo;
function Gl() {
  if (Vo) return Sr;
  Vo = 1;
  var e = R;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var f = d(), g = n({ inst: { value: f, getSnapshot: d } }), b = g[0].inst, m = g[1];
    return i(
      function() {
        b.value = f, b.getSnapshot = d, l(b) && m({ inst: b });
      },
      [c, f, d]
    ), o(
      function() {
        return l(b) && m({ inst: b }), c(function() {
          l(b) && m({ inst: b });
        });
      },
      [c]
    ), a(f), f;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var f = d();
      return !r(c, f);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Sr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Sr;
}
var Or = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o;
function kl() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f, g) {
      return f === g && (f !== 0 || 1 / f === 1 / g) || f !== f && g !== g;
    }
    function t(f, g) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = g();
      if (!c) {
        var m = g();
        i(b, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      m = a({
        inst: { value: b, getSnapshot: g }
      });
      var v = m[0].inst, x = m[1];
      return l(
        function() {
          v.value = b, v.getSnapshot = g, r(v) && x({ inst: v });
        },
        [f, b, g]
      ), s(
        function() {
          return r(v) && x({ inst: v }), f(function() {
            r(v) && x({ inst: v });
          });
        },
        [f]
      ), u(b), b;
    }
    function r(f) {
      var g = f.getSnapshot;
      f = f.value;
      try {
        var b = g();
        return !i(f, b);
      } catch {
        return !0;
      }
    }
    function n(f, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = R, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Or.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Or;
}
process.env.NODE_ENV === "production" ? on.exports = Gl() : on.exports = kl();
var Vn = on.exports, Cr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function Wl() {
  if (Mo) return Cr;
  Mo = 1;
  var e = R, t = Vn;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Cr.useSyncExternalStoreWithSelector = function(u, p, c, d, f) {
    var g = i(null);
    if (g.current === null) {
      var b = { hasValue: !1, value: null };
      g.current = b;
    } else b = g.current;
    g = s(
      function() {
        function v(N) {
          if (!x) {
            if (x = !0, w = N, N = d(N), f !== void 0 && b.hasValue) {
              var O = b.value;
              if (f(O, N))
                return E = O;
            }
            return E = N;
          }
          if (O = E, n(w, N)) return O;
          var C = d(N);
          return f !== void 0 && f(O, C) ? (w = N, O) : (w = N, E = C);
        }
        var x = !1, w, E, h = c === void 0 ? null : c;
        return [
          function() {
            return v(p());
          },
          h === null ? void 0 : function() {
            return v(h());
          }
        ];
      },
      [p, c, d, f]
    );
    var m = o(u, g[0], g[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = m;
      },
      [m]
    ), l(m), m;
  }, Cr;
}
var _r = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function jl() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = R, r = Vn, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    _r.useSyncExternalStoreWithSelector = function(u, p, c, d, f) {
      var g = i(null);
      if (g.current === null) {
        var b = { hasValue: !1, value: null };
        g.current = b;
      } else b = g.current;
      g = s(
        function() {
          function v(N) {
            if (!x) {
              if (x = !0, w = N, N = d(N), f !== void 0 && b.hasValue) {
                var O = b.value;
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
          var x = !1, w, E, h = c === void 0 ? null : c;
          return [
            function() {
              return v(p());
            },
            h === null ? void 0 : function() {
              return v(h());
            }
          ];
        },
        [p, c, d, f]
      );
      var m = o(u, g[0], g[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = m;
        },
        [m]
      ), l(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), _r;
}
process.env.NODE_ENV === "production" ? Wl() : jl();
function Ul(e) {
  e();
}
let $a = Ul;
const zl = (e) => $a = e, Hl = () => $a, Bo = Symbol.for("react-redux-context"), Fo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ql() {
  var e;
  if (!P.createContext) return {};
  const t = (e = Fo[Bo]) != null ? e : Fo[Bo] = /* @__PURE__ */ new Map();
  let r = t.get(P.createContext);
  return r || (r = P.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(P.createContext, r)), r;
}
const Ma = /* @__PURE__ */ ql(), Yl = () => {
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
function La(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var an = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Go;
function Kl() {
  if (Go) return Q;
  Go = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var N = h.$$typeof;
      switch (N) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case p:
                case g:
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
  return Q.AsyncMode = l, Q.ConcurrentMode = u, Q.ContextConsumer = s, Q.ContextProvider = a, Q.Element = t, Q.ForwardRef = p, Q.Fragment = n, Q.Lazy = g, Q.Memo = f, Q.Portal = r, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = c, Q.isAsyncMode = function(h) {
    return E(h) || w(h) === l;
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
    return w(h) === g;
  }, Q.isMemo = function(h) {
    return w(h) === f;
  }, Q.isPortal = function(h) {
    return w(h) === r;
  }, Q.isProfiler = function(h) {
    return w(h) === i;
  }, Q.isStrictMode = function(h) {
    return w(h) === o;
  }, Q.isSuspense = function(h) {
    return w(h) === c;
  }, Q.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === i || h === o || h === c || h === d || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === f || h.$$typeof === a || h.$$typeof === s || h.$$typeof === p || h.$$typeof === m || h.$$typeof === v || h.$$typeof === x || h.$$typeof === b);
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
var ko;
function Xl() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function w(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === i || D === o || D === c || D === d || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === f || D.$$typeof === a || D.$$typeof === s || D.$$typeof === p || D.$$typeof === m || D.$$typeof === v || D.$$typeof === x || D.$$typeof === b);
    }
    function E(D) {
      if (typeof D == "object" && D !== null) {
        var he = D.$$typeof;
        switch (he) {
          case t:
            var S = D.type;
            switch (S) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return S;
              default:
                var Ie = S && S.$$typeof;
                switch (Ie) {
                  case s:
                  case p:
                  case g:
                  case f:
                  case a:
                    return Ie;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var h = l, N = u, O = s, C = a, G = t, T = p, F = n, _ = g, U = f, X = r, J = i, V = o, $ = c, k = !1;
    function z(D) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(D) || E(D) === l;
    }
    function q(D) {
      return E(D) === u;
    }
    function W(D) {
      return E(D) === s;
    }
    function Z(D) {
      return E(D) === a;
    }
    function de(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function ve(D) {
      return E(D) === p;
    }
    function ge(D) {
      return E(D) === n;
    }
    function ye(D) {
      return E(D) === g;
    }
    function be(D) {
      return E(D) === f;
    }
    function De(D) {
      return E(D) === r;
    }
    function le(D) {
      return E(D) === i;
    }
    function Se(D) {
      return E(D) === o;
    }
    function je(D) {
      return E(D) === c;
    }
    ee.AsyncMode = h, ee.ConcurrentMode = N, ee.ContextConsumer = O, ee.ContextProvider = C, ee.Element = G, ee.ForwardRef = T, ee.Fragment = F, ee.Lazy = _, ee.Memo = U, ee.Portal = X, ee.Profiler = J, ee.StrictMode = V, ee.Suspense = $, ee.isAsyncMode = z, ee.isConcurrentMode = q, ee.isContextConsumer = W, ee.isContextProvider = Z, ee.isElement = de, ee.isForwardRef = ve, ee.isFragment = ge, ee.isLazy = ye, ee.isMemo = be, ee.isPortal = De, ee.isProfiler = le, ee.isStrictMode = Se, ee.isSuspense = je, ee.isValidElementType = w, ee.typeOf = E;
  }()), ee;
}
process.env.NODE_ENV === "production" ? an.exports = Kl() : an.exports = Xl();
var Jl = an.exports, $n = Jl, Zl = {
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
}, Ql = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, eu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ba = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Mn = {};
Mn[$n.ForwardRef] = eu;
Mn[$n.Memo] = Ba;
function Wo(e) {
  return $n.isMemo(e) ? Ba : Mn[e.$$typeof] || Zl;
}
var tu = Object.defineProperty, ru = Object.getOwnPropertyNames, jo = Object.getOwnPropertySymbols, nu = Object.getOwnPropertyDescriptor, ou = Object.getPrototypeOf, Uo = Object.prototype;
function Fa(e, t, r) {
  if (typeof t != "string") {
    if (Uo) {
      var n = ou(t);
      n && n !== Uo && Fa(e, n, r);
    }
    var o = ru(t);
    jo && (o = o.concat(jo(t)));
    for (var i = Wo(e), a = Wo(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!Ql[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = nu(t, l);
        try {
          tu(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var iu = Fa;
const zo = /* @__PURE__ */ Va(iu);
var sn = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho;
function au() {
  if (Ho) return te;
  Ho = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), g;
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
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case l:
                case d:
                case c:
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
  return te.ContextConsumer = a, te.ContextProvider = i, te.Element = e, te.ForwardRef = l, te.Fragment = r, te.Lazy = d, te.Memo = c, te.Portal = t, te.Profiler = o, te.StrictMode = n, te.Suspense = u, te.SuspenseList = p, te.isAsyncMode = function() {
    return !1;
  }, te.isConcurrentMode = function() {
    return !1;
  }, te.isContextConsumer = function(m) {
    return b(m) === a;
  }, te.isContextProvider = function(m) {
    return b(m) === i;
  }, te.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, te.isForwardRef = function(m) {
    return b(m) === l;
  }, te.isFragment = function(m) {
    return b(m) === r;
  }, te.isLazy = function(m) {
    return b(m) === d;
  }, te.isMemo = function(m) {
    return b(m) === c;
  }, te.isPortal = function(m) {
    return b(m) === t;
  }, te.isProfiler = function(m) {
    return b(m) === o;
  }, te.isStrictMode = function(m) {
    return b(m) === n;
  }, te.isSuspense = function(m) {
    return b(m) === u;
  }, te.isSuspenseList = function(m) {
    return b(m) === p;
  }, te.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === p || m === f || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === c || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === g || m.getModuleId !== void 0);
  }, te.typeOf = b, te;
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
var qo;
function su() {
  return qo || (qo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), g = !1, b = !1, m = !1, v = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function E(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || x || S === n || S === u || S === p || v || S === f || g || b || m || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === w || S.getModuleId !== void 0));
    }
    function h(S) {
      if (typeof S == "object" && S !== null) {
        var Ie = S.$$typeof;
        switch (Ie) {
          case e:
            var ke = S.type;
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
                  case l:
                  case d:
                  case c:
                  case i:
                    return A;
                  default:
                    return Ie;
                }
            }
          case t:
            return Ie;
        }
      }
    }
    var N = a, O = i, C = e, G = l, T = r, F = d, _ = c, U = t, X = o, J = n, V = u, $ = p, k = !1, z = !1;
    function q(S) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(S) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(S) {
      return h(S) === a;
    }
    function de(S) {
      return h(S) === i;
    }
    function ve(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ge(S) {
      return h(S) === l;
    }
    function ye(S) {
      return h(S) === r;
    }
    function be(S) {
      return h(S) === d;
    }
    function De(S) {
      return h(S) === c;
    }
    function le(S) {
      return h(S) === t;
    }
    function Se(S) {
      return h(S) === o;
    }
    function je(S) {
      return h(S) === n;
    }
    function D(S) {
      return h(S) === u;
    }
    function he(S) {
      return h(S) === p;
    }
    re.ContextConsumer = N, re.ContextProvider = O, re.Element = C, re.ForwardRef = G, re.Fragment = T, re.Lazy = F, re.Memo = _, re.Portal = U, re.Profiler = X, re.StrictMode = J, re.Suspense = V, re.SuspenseList = $, re.isAsyncMode = q, re.isConcurrentMode = W, re.isContextConsumer = Z, re.isContextProvider = de, re.isElement = ve, re.isForwardRef = ge, re.isFragment = ye, re.isLazy = be, re.isMemo = De, re.isPortal = le, re.isProfiler = Se, re.isStrictMode = je, re.isSuspense = D, re.isSuspenseList = he, re.isValidElementType = E, re.typeOf = h;
  }()), re;
}
process.env.NODE_ENV === "production" ? sn.exports = au() : sn.exports = su();
var Yo = sn.exports;
function Ln(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ir(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ln(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function cu(e, t, r) {
  Ir(e, "mapStateToProps"), Ir(t, "mapDispatchToProps"), Ir(r, "mergeProps");
}
const lu = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function uu(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function f(x, w) {
    return l = x, u = w, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function g() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function m() {
    const x = e(l, u), w = !a(x, p);
    return p = x, w && (d = r(p, c, u)), d;
  }
  function v(x, w) {
    const E = !i(w, u), h = !o(x, l, w, u);
    return l = x, u = w, E && h ? g() : E ? b() : h ? m() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : f(w, E);
  };
}
function du(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = La(t, lu);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && cu(a, s, l), uu(a, s, l, e, i);
}
function pu(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function fu(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Ga(e, t, r) {
  fu(e) || Ln(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function cn(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Ko(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ka(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = Ko(e);
      let u = i(s, l);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Ko(u), u = i(s, l)), process.env.NODE_ENV !== "production" && Ga(u, o, t), u;
    }, i;
  };
}
function Bn(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function mu(e) {
  return e && typeof e == "object" ? cn((t) => (
    // @ts-ignore
    pu(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ka(e, "mapDispatchToProps")
  ) : Bn(e, "mapDispatchToProps") : cn((t) => ({
    dispatch: t
  }));
}
function gu(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ka(e, "mapStateToProps")
  ) : Bn(e, "mapStateToProps") : cn(() => ({}));
}
function bu(e, t, r) {
  return Ze({}, r, e, t);
}
function hu(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, u, p) {
      const c = e(l, u, p);
      return i ? o(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && Ga(a, n, "mergeProps")), a;
    };
  };
}
function vu(e) {
  return e ? typeof e == "function" ? hu(e) : Bn(e, "mergeProps") : () => bu;
}
function yu() {
  const e = Hl();
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
const Xo = {
  notify() {
  },
  get: () => []
};
function Wa(e, t) {
  let r, n = Xo, o = 0, i = !1;
  function a(b) {
    p();
    const m = n.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, m(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    g.onStateChange && g.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = yu());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Xo);
  }
  function d() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, c());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return g;
}
const Eu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ar = Eu ? P.useLayoutEffect : P.useEffect;
function Jo(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ar(e, t) {
  if (Jo(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Jo(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const xu = ["reactReduxForwardedRef"];
let ja = Yl;
const wu = (e) => {
  ja = e;
}, Nu = [null, null], Du = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Su(e, t, r) {
  ar(() => e(...t), r);
}
function Ou(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Cu(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const f = () => {
    if (c || !s.current)
      return;
    const b = t.getState();
    let m, v;
    try {
      m = n(b, o.current);
    } catch (x) {
      v = x, d = x;
    }
    v || (d = null), m === i.current ? a.current || u() : (i.current = m, l.current = m, a.current = !0, p());
  };
  return r.onStateChange = f, r.trySubscribe(), f(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function _u(e, t) {
  return e === t;
}
let Zo = !1;
function Ua(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = _u,
  areOwnPropsEqual: i = Ar,
  areStatePropsEqual: a = Ar,
  areMergedPropsEqual: s = Ar,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = Ma
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Zo && (Zo = !0, Ln('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = gu(e), d = mu(t), f = vu(r), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !Yo.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Du(m)}`);
    const v = m.displayName || m.name || "Component", x = `Connect(${v})`, w = {
      shouldHandleStateChanges: g,
      displayName: x,
      wrappedComponentName: v,
      WrappedComponent: m,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: f,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(O) {
      const [C, G, T] = P.useMemo(() => {
        const {
          reactReduxForwardedRef: D
        } = O, he = La(O, xu);
        return [O.context, D, he];
      }, [O]), F = P.useMemo(() => C && C.Consumer && // @ts-ignore
      Yo.isContextConsumer(/* @__PURE__ */ P.createElement(C.Consumer, null)) ? C : p, [C, p]), _ = P.useContext(F), U = !!O.store && !!O.store.getState && !!O.store.dispatch, X = !!_ && !!_.store;
      if (process.env.NODE_ENV !== "production" && !U && !X)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const J = U ? O.store : _.store, V = X ? _.getServerState : J.getState, $ = P.useMemo(() => du(J.dispatch, w), [J]), [k, z] = P.useMemo(() => {
        if (!g) return Nu;
        const D = Wa(J, U ? void 0 : _.subscription), he = D.notifyNestedSubs.bind(D);
        return [D, he];
      }, [J, U, _]), q = P.useMemo(() => U ? _ : Ze({}, _, {
        subscription: k
      }), [U, _, k]), W = P.useRef(), Z = P.useRef(T), de = P.useRef(), ve = P.useRef(!1);
      P.useRef(!1);
      const ge = P.useRef(!1), ye = P.useRef();
      ar(() => (ge.current = !0, () => {
        ge.current = !1;
      }), []);
      const be = P.useMemo(() => () => de.current && T === Z.current ? de.current : $(J.getState(), T), [J, T]), De = P.useMemo(() => (he) => k ? Cu(
        g,
        J,
        k,
        // @ts-ignore
        $,
        Z,
        W,
        ve,
        ge,
        de,
        z,
        he
      ) : () => {
      }, [k]);
      Su(Ou, [Z, W, ve, T, de, z]);
      let le;
      try {
        le = ja(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          De,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          be,
          V ? () => $(V(), T) : be
        );
      } catch (D) {
        throw ye.current && (D.message += `
The error may be correlated with this previous error:
${ye.current.stack}

`), D;
      }
      ar(() => {
        ye.current = void 0, de.current = void 0, W.current = le;
      });
      const Se = P.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ P.createElement(m, Ze({}, le, {
          ref: G
        }))
      ), [G, m, le]);
      return P.useMemo(() => g ? /* @__PURE__ */ P.createElement(F.Provider, {
        value: q
      }, Se) : Se, [F, Se, q]);
    }
    const N = P.memo(E);
    if (N.WrappedComponent = m, N.displayName = E.displayName = x, l) {
      const C = P.forwardRef(function(T, F) {
        return /* @__PURE__ */ P.createElement(N, Ze({}, T, {
          reactReduxForwardedRef: F
        }));
      });
      return C.displayName = x, C.WrappedComponent = m, zo(C, m);
    }
    return zo(N, m);
  };
}
function Iu({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = P.useMemo(() => {
    const u = Wa(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = P.useMemo(() => e.getState(), [e]);
  ar(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || Ma;
  return /* @__PURE__ */ P.createElement(l.Provider, {
    value: a
  }, r);
}
wu(Vn.useSyncExternalStore);
zl(ga);
function Au(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function za(e, t) {
  var r = Ae(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = j(!0), o = j(r), i = n.current || !!(t && o.current.inputs && Au(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return me(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Pu(e, t) {
  return za(function() {
    return e;
  }, t);
}
var K = za, M = Pu, Ru = process.env.NODE_ENV === "production", Pr = "Invariant failed";
function Qo(e, t) {
  if (Ru)
    throw new Error(Pr);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Pr, ": ").concat(r) : Pr;
  throw new Error(n);
}
var We = function(t) {
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
}, Fn = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, ei = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Tu = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Rr = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Gn = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Rr : n, i = t.border, a = i === void 0 ? Rr : i, s = t.padding, l = s === void 0 ? Rr : s, u = We(Fn(r, o)), p = We(ei(r, a)), c = We(ei(p, l));
  return {
    marginBox: u,
    borderBox: We(r),
    paddingBox: p,
    contentBox: c,
    margin: o,
    border: a,
    padding: l
  };
}, Le = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Qo(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Qo()), o;
}, Vu = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, sr = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Tu(n, r);
  return Gn({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, cr = function(t, r) {
  return r === void 0 && (r = Vu()), sr(t, r);
}, Ha = function(t, r) {
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
  return Gn({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, qa = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Ha(r, n);
}, ti = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function $u(e, t) {
  return !!(e === t || ti(e) && ti(t));
}
function Mu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!$u(e[r], t[r]))
      return !1;
  return !0;
}
function we(e, t) {
  t === void 0 && (t = Mu);
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
const Lu = process.env.NODE_ENV === "production", Bu = /[ \t]{2,}/g, Fu = /^[ \t]*/gm, ri = (e) => e.replace(Bu, " ").replace(Fu, "").trim(), Gu = (e) => ri(`
  %c@hello-pangea/dnd

  %c${ri(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), ku = (e) => [Gu(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Wu = "__@hello-pangea/dnd-disable-dev-warnings";
function Ya(e, t) {
  Lu || typeof window < "u" && window[Wu] || console[e](...ku(t));
}
const ce = Ya.bind(null, "warn"), ln = Ya.bind(null, "error");
function Qe() {
}
function ju(e, t) {
  return {
    ...e,
    ...t
  };
}
function Fe(e, t, r) {
  const n = t.map((o) => {
    const i = ju(r, o.options);
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
const Uu = process.env.NODE_ENV === "production", ni = "Invariant failed";
class Vt extends Error {
}
Vt.prototype.toString = function() {
  return this.message;
};
function y(e, t) {
  throw Uu ? new Vt(ni) : new Vt(`${ni}: ${t || ""}`);
}
class zu extends R.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Qe, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && ce(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Vt && (r.preventDefault(), process.env.NODE_ENV !== "production" && ln(o.message));
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
    if (t instanceof Vt) {
      process.env.NODE_ENV !== "production" && ln(t.message), this.setState({});
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
const Hu = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, lr = (e) => e + 1, qu = (e) => `
  You have lifted an item in position ${lr(e.source.index)}
`, Ka = (e, t) => {
  const r = e.droppableId === t.droppableId, n = lr(e.index), o = lr(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Xa = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Yu = (e) => {
  const t = e.destination;
  if (t)
    return Ka(e.source, t);
  const r = e.combine;
  return r ? Xa(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, oi = (e) => `
  The item has returned to its starting position
  of ${lr(e.index)}
`, Ku = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${oi(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Ka(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${Xa(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${oi(e.source)}
  `;
}, Xu = {
  dragHandleUsageInstructions: Hu,
  onDragStart: qu,
  onDragUpdate: Yu,
  onDragEnd: Ku
};
var rr = Xu;
const Ne = {
  x: 0,
  y: 0
}, Ce = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Ve = (e, t) => ({
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
}, $t = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), ii = (e, t) => Math.min(...t.map((r) => $t(e, r))), Ja = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ju = (e, t) => {
  const r = We({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const zt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), ai = (e) => [{
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
}], Zu = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Qu = (e, t) => t ? zt(e, t.scroll.diff.displacement) : e, ed = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, td = (e, t) => t && t.shouldClipSubject ? Ju(t.pageMarginBox, e) : We(e);
var gt = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Qu(e.marginBox, n), i = ed(o, r, t), a = td(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, kn = (e, t) => {
  e.frame || (process.env.NODE_ENV, y());
  const r = e.frame, n = Ve(t, r.scroll.initial), o = yt(n), i = {
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
const Za = we((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Qa = we((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), gr = we((e) => Object.values(e)), rd = we((e) => Object.values(e));
var dt = we((e, t) => rd(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Wn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function br(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var hr = we((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), nd = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Wn(o))
    return null;
  function a(f) {
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
  const s = o.displaced.all, l = s.length ? s[0] : null;
  if (e)
    return l ? a(l) : null;
  const u = hr(t, n);
  if (!l) {
    if (!u.length)
      return null;
    const f = u[u.length - 1];
    return a(f.descriptor.id);
  }
  const p = u.findIndex((f) => f.descriptor.id === l);
  p === -1 && (process.env.NODE_ENV !== "production" ? y(!1, "Could not find displaced item in set") : y());
  const c = p - 1;
  if (c < 0)
    return null;
  const d = u[c];
  return a(d.descriptor.id);
}, Et = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const es = {
  point: Ne,
  value: 0
}, Mt = {
  invisible: {},
  visible: {},
  all: []
}, od = {
  displaced: Mt,
  displacedBy: es,
  at: null
};
var id = od, Ge = (e, t) => (r) => e <= r && r <= t, ts = (e) => {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const l = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return l && u ? !0 : l && a || u && i;
  };
}, ad = (e) => {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const jn = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, rs = {
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
var sd = (e) => (t) => {
  const r = Ge(t.top, t.bottom), n = Ge(t.left, t.right);
  return (o) => e === jn ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const cd = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Ne;
  return zt(e, r);
}, ld = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, ud = (e, t, r) => r(t)(e), Un = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? cd(e, t) : e;
  return ld(i, t, o) && ud(i, r, o);
}, dd = (e) => Un({
  ...e,
  isVisibleThroughFrameFn: ts
}), ns = (e) => Un({
  ...e,
  isVisibleThroughFrameFn: ad
}), pd = (e) => Un({
  ...e,
  isVisibleThroughFrameFn: sd(e.destination.axis)
}), fd = (e, t, r) => {
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
function md(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return We(Fn(r, n));
}
function Lt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, l) {
    const u = md(l, r), p = l.descriptor.id;
    if (s.all.push(p), !dd({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const d = fd(p, i, o), f = {
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
function gd(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function si({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = gd(e, {
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
function ur({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = Et(e, r);
  if (a == null)
    return si({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const u = t.find((g) => g.descriptor.index === a);
  if (!u)
    return si({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const p = hr(e, t), c = t.indexOf(u), d = p.slice(c);
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
var bd = ({
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
}, hd = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, vd = ({
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
  if (u || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot move in direction without previous impact location") : y()), u.type === "REORDER") {
    const c = hd({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return c == null ? null : ur({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const p = bd({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: l
  });
  return p == null ? null : ur({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, yd = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return rt(r, t) ? o ? Ne : yt(n.point) : o ? n.point : Ne;
}, Ed = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = br(t);
  n || (process.env.NODE_ENV, y());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = yd({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ce(i, a);
};
const os = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, xd = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, zn = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, ci = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => lt(e.line, t.marginBox[e.end] + os(e, r), zn(e, t.marginBox, r)), li = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => lt(e.line, t.marginBox[e.start] - xd(e, r), zn(e, t.marginBox, r)), wd = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => lt(e.line, t.contentBox[e.start] + os(e, r), zn(e, t.contentBox, r));
var Nd = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = dt(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return wd({
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
    if (rt(p, o))
      return li({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const f = sr(d.page, u.point);
    return li({
      axis: s,
      moveRelativeTo: f,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (rt(c.descriptor.id, o)) {
    const d = sr(c.page, yt(o.displacedBy.point));
    return ci({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return ci({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, un = (e, t) => {
  const r = e.frame;
  return r ? Ce(t, r.scroll.diff.displacement) : t;
};
const Dd = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? Nd({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : Ed({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var vr = (e) => {
  const t = Dd(e), r = e.droppable;
  return r ? un(r, t) : t;
}, is = (e, t) => {
  const r = Ve(t, e.scroll.initial), n = yt(r);
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
function ui(e, t) {
  return e.map((r) => t[r]);
}
function Sd(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Od = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = is(t, Ce(t.scroll.current, o)), a = r.frame ? kn(r, Ce(r.frame.scroll.current, o)) : r, s = e.displaced, l = Lt({
    afterDragging: ui(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Lt({
    afterDragging: ui(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, c = {}, d = [s, l, u];
  return s.all.forEach((g) => {
    const b = Sd(g, d);
    if (b) {
      c[g] = b;
      return;
    }
    p[g] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: p,
      visible: c
    }
  };
}, Cd = (e, t) => Ce(e.scroll.diff.displacement, t), Hn = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Cd(r, e), o = Ve(n, t.page.borderBox.center);
  return Ce(t.client.borderBox.center, o);
}, as = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Ve(r, e.page.borderBox.center), l = {
    target: zt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? pd(l) : ns(l);
}, _d = ({
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
  const u = dt(r.descriptor.id, n), p = Et(t, r), c = nd({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || vd({
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
  const d = vr({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: l
  });
  if (as({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Hn({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const g = Ve(d, a), b = Od({
    impact: c,
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
const Pe = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot get clipped area from droppable") : y()), t;
};
var Id = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ge(i[a.start], i[a.end]), l = gr(n).filter((p) => p !== r).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => ts(o.frame)(Pe(p))).filter((p) => {
    const c = Pe(p);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const c = Pe(p), d = Ge(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((p, c) => {
    const d = Pe(p)[a.crossAxisStart], f = Pe(c)[a.crossAxisStart];
    return e ? d - f : f - d;
  }).filter((p, c, d) => Pe(p)[a.crossAxisStart] === Pe(d[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const u = l.filter((p) => Ge(Pe(p)[a.start], Pe(p)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((p, c) => Pe(p)[a.start] - Pe(c)[a.start])[0] : l.sort((p, c) => {
    const d = ii(t, ai(Pe(p))), f = ii(t, ai(Pe(c)));
    return d !== f ? d - f : Pe(p)[a.start] - Pe(c)[a.start];
  })[0];
};
const di = (e, t) => {
  const r = e.page.borderBox.center;
  return rt(e.descriptor.id, t) ? Ve(r, t.displacedBy.point) : r;
}, Ad = (e, t) => {
  const r = e.page.borderBox;
  return rt(e.descriptor.id, t) ? zt(r, yt(t.displacedBy.point)) : r;
};
var Pd = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => ns({
  target: Ad(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = $t(e, un(r, di(a, o))), u = $t(e, un(r, di(s, o)));
  return l < u ? -1 : u < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Ht = we(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: lt(t.line, n)
  };
});
const Rd = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return lt(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], l = dt(e.descriptor.id, r).reduce((u, p) => u + p.client.marginBox[n.size], 0) + t[n.line] - o;
  return l <= 0 ? null : lt(n.line, l);
}, ss = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), cs = (e, t, r) => {
  const n = e.frame;
  Et(t, e) && (process.env.NODE_ENV !== "production" ? y(!1, "Should not add placeholder space to home list") : y()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot add placeholder size to a subject when it already has one") : y());
  const o = Ht(e.axis, t.displaceBy).point, i = Rd(e, o, r), a = {
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
  const s = i ? Ce(n.scroll.max, i) : n.scroll.max, l = ss(n, s), u = gt({
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
}, Td = (e) => {
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
  const o = ss(r, n), i = gt({
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
var Vd = ({
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
      displaced: Mt,
      displacedBy: es,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = vr({
      impact: c,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), f = Et(n, i) ? i : cs(i, n, o);
    return as({
      draggable: n,
      destination: f,
      newPageBorderBoxCenter: d,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? c : null;
  }
  const l = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const c = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || l ? c : c + 1;
  })(), p = Ht(i.axis, n.displaceBy);
  return ur({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: Mt,
    index: u
  });
}, $d = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = Id({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const u = dt(l.descriptor.id, o), p = Pd({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }), c = Vd({
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
  const d = vr({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Hn({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, $e = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Md = (e, t) => {
  const r = $e(e);
  return r ? t[r] : null;
};
var Ld = ({
  state: e,
  type: t
}) => {
  const r = Md(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: d
  } = e.dimensions;
  return s ? _d({
    isMovingForward: l,
    previousPageBorderBoxCenter: p,
    draggable: u,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : $d({
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
function at(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function ls(e) {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Bd(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Fd({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = lt(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: $t(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Gd({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = gr(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Bd(e, i))
      return !1;
    if (ls(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], u = e[a.crossAxisEnd], p = Ge(i[a.crossAxisStart], i[a.crossAxisEnd]), c = p(l), d = p(u);
    return !c && !d ? !0 : c ? l < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Fd({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const us = (e, t) => We(zt(e, t));
var kd = (e, t) => {
  const r = e.frame;
  return r ? us(t, r.scroll.diff.value) : t;
};
function ds({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Wd({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var jd = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = Ht(r.axis, t.displaceBy), u = l.value, p = e[s.start], c = e[s.end], f = hr(t, n).find((b) => {
    const m = b.descriptor.id, v = b.page.borderBox.center[s.line], x = rt(m, a), w = ds({
      displaced: o,
      id: m
    });
    return x ? w ? c <= v : p < v - u : w ? c <= v + u : p < v;
  }) || null, g = Wd({
    draggable: t,
    closest: f,
    inHomeList: Et(t, r)
  });
  return ur({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: l,
    index: g
  });
};
const Ud = 4;
var zd = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Ht(n.axis, e.displaceBy), l = s.value, u = t[a.start], p = t[a.end], d = hr(e, o).find((g) => {
    const b = g.descriptor.id, m = g.page.borderBox, x = m[a.size] / Ud, w = rt(b, i), E = ds({
      displaced: r.displaced,
      id: b
    });
    return w ? E ? p > m[a.start] + x && p < m[a.end] - x : u > m[a.start] - l + x && u < m[a.end] - l - x : E ? p > m[a.start] + l + x && p < m[a.end] + l - x : u > m[a.start] + x && u < m[a.end] - x;
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
}, ps = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = us(t.page.borderBox, e), l = Gd({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!l)
    return id;
  const u = n[l], p = dt(u.descriptor.id, r), c = kd(u, s);
  return zd({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: p,
    afterCritical: a
  }) || jd({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: u,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, qn = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Hd = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = $e(e), o = $e(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = Td(i);
  return qn(r, a);
};
var qd = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Hd({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = $e(o);
  if (!a)
    return i;
  const s = r[a];
  if (Et(e, s) || s.subject.withPlaceholder)
    return i;
  const l = cs(s, e, t);
  return qn(i, l);
}, Ot = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, u = Ve(l, e.initial.client.selection), p = {
    offset: u,
    selection: l,
    borderBoxCenter: Ce(e.initial.client.borderBoxCenter, u)
  }, c = {
    selection: Ce(p.selection, a.scroll.current),
    borderBoxCenter: Ce(p.borderBoxCenter, a.scroll.current),
    offset: Ce(p.offset, a.scroll.diff.value)
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
  const f = s.draggables[e.critical.draggable.id], g = o || ps({
    pageOffset: c.offset,
    draggable: f,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = qd({
    draggable: f,
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
function Yd(e, t) {
  return e.map((r) => t[r]);
}
var fs = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Yd(i.all, r), s = Lt({
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
}, ms = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = vr({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Hn({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, gs = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, y());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], u = $e(n);
  u || (process.env.NODE_ENV !== "production" ? y(!1, "Must be over a destination in SNAP movement mode") : y());
  const p = s[u], c = fs({
    impact: n,
    viewport: o,
    destination: p,
    draggables: a
  }), d = ms({
    impact: c,
    draggable: l,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Ot({
    impact: c,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Kd = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), bs = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Ht(t.axis, e.displaceBy), i = dt(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? y(!1, "Expected draggable to be inside home list") : y());
  const s = i.slice(a + 1), l = s.reduce((d, f) => (d[f.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
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
        destination: Kd(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Xd = (e, t) => ({
  draggables: e.draggables,
  droppables: qn(e.droppables, t)
});
const qt = (e) => {
  process.env.NODE_ENV;
}, Yt = (e) => {
  process.env.NODE_ENV;
};
var Jd = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = sr(e.client, t), o = cr(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, Zd = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? y(!1, "Expected Droppable to have a frame") : y()), t;
}, Qd = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], l = Zd(a).scroll.diff.value, u = Ce(n, l);
    return Jd({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, ep = ({
  state: e,
  published: t
}) => {
  qt();
  const r = t.modified.map((v) => {
    const x = e.dimensions.droppables[v.droppableId];
    return kn(x, v.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...Za(r)
  }, o = Qa(Qd({
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
  }, s = $e(e.impact), l = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: d
  } = bs({
    draggable: u,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), f = l && l.isCombineEnabled ? e.impact : c, g = ps({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: f,
    viewport: e.viewport,
    afterCritical: d
  });
  Yt();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: g,
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
const dn = (e) => e.movementMode === "SNAP", Tr = (e, t, r) => {
  const n = Xd(e.dimensions, t);
  return !dn(e) || r ? Ot({
    state: e,
    dimensions: n
  }) : gs({
    state: e,
    dimensions: n
  });
};
function Vr(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const pi = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var tp = (e = pi, t) => {
  if (t.type === "FLUSH")
    return {
      ...pi,
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
    } = t.payload, s = i.draggables[r.draggable.id], l = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: Ne
    }, p = {
      client: u,
      page: {
        selection: Ce(u.selection, o.scroll.initial),
        borderBoxCenter: Ce(u.selection, o.scroll.initial),
        offset: Ce(u.selection, o.scroll.diff.value)
      }
    }, c = gr(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: f
    } = bs({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? y(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : y()), ep({
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
      impact: dn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Vr(e);
    at(e) || (process.env.NODE_ENV !== "production" ? y(!1, `${t.type} not permitted in phase ${e.phase}`) : y());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = kn(o, n);
    return Tr(e, i, !1);
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
    return Tr(e, i, !0);
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
    return Tr(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    at(e) || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot move by window in phase ${e.phase}`) : y()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? y(!1, "Window scrolling is currently not supported for fixed lists") : y());
    const r = t.payload.newScroll;
    if (et(e.viewport.scroll.current, r))
      return Vr(e);
    const n = is(e.viewport, r);
    return dn(e) ? gs({
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
    const r = Ld({
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
const rp = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), np = (e) => ({
  type: "LIFT",
  payload: e
}), op = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), ip = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), ap = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), sp = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), cp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), lp = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), hs = (e) => ({
  type: "MOVE",
  payload: e
}), up = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), dp = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), pp = () => ({
  type: "MOVE_UP",
  payload: null
}), fp = () => ({
  type: "MOVE_DOWN",
  payload: null
}), mp = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), gp = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Yn = () => ({
  type: "FLUSH",
  payload: null
}), bp = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Kn = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), vs = (e) => ({
  type: "DROP",
  payload: e
}), hp = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ys = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function vp(e) {
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
  process.env.NODE_ENV !== "production" && ce(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function yp(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = dt(e.droppable.id, t.draggables);
    vp(r);
  }
}
var Ep = (e) => ({
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
  l.phase === "DROP_ANIMATING" && r(Kn({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? y(!1, "Unexpected phase to start a drag") : y()), r(Yn()), r(rp({
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
    viewport: f
  } = e.startPublishing(p);
  yp(c, d), r(op({
    critical: c,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: f
  }));
}, xp = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Xn = {
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
}, Es = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, nt = `${Es.outOfTheWay}s ${Xn.outOfTheWay}`, Ct = {
  fluid: `opacity ${nt}`,
  snap: `transform ${nt}, opacity ${nt}`,
  drop: (e) => {
    const t = `${e}s ${Xn.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${nt}`,
  placeholder: `height ${nt}, width ${nt}, margin ${nt}`
}, fi = (e) => et(e, Ne) ? void 0 : `translate(${e.x}px, ${e.y}px)`, pn = {
  moveTo: fi,
  drop: (e, t) => {
    const r = fi(e);
    if (r)
      return t ? `${r} scale(${Bt.scale.drop})` : r;
  }
}, {
  minDropTime: fn,
  maxDropTime: xs
} = Es, wp = xs - fn, mi = 1500, Np = 0.6;
var Dp = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = $t(e, t);
  if (n <= 0)
    return fn;
  if (n >= mi)
    return xs;
  const o = n / mi, i = fn + wp * o, a = r === "CANCEL" ? i * Np : i;
  return Number(a.toFixed(2));
}, Sp = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = $e(e), l = s ? a[s] : null, u = a[t.descriptor.droppableId], p = ms({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || u,
    viewport: n
  });
  return Ve(p, t.client.borderBox.center);
}, Op = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: fs({
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
const Cp = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(hp({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? y(!1, "A DROP action occurred while DROP_PENDING and still waiting") : y()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot drop in phase: ${o.phase}`) : y());
  const s = o.critical, l = o.dimensions, u = l.draggables[o.critical.draggable.id], {
    impact: p,
    didDropInsideDroppable: c
  } = Op({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = c ? Wn(p) : null, f = c ? br(p) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: f
  }, m = Sp({
    impact: p,
    draggable: u,
    dimensions: l,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), v = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: p
  };
  if (!(!et(o.current.client.offset, m) || !!b.combine)) {
    t(Kn({
      completed: v
    }));
    return;
  }
  const w = Dp({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(bp({
    newHomeClientOffset: m,
    dropDuration: w,
    completed: v
  }));
};
var _p = Cp, ws = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Ip(e) {
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
function Ap({
  onWindowScroll: e
}) {
  function t() {
    e(ws());
  }
  const r = Tt(t), n = Ip(r);
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
const Pp = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Rp = (e) => {
  const t = Ap({
    onWindowScroll: (r) => {
      e.dispatch(up({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Pp(n) && t.stop(), r(n);
  };
};
var Tp = Rp, Vp = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ce("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && ce(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, $p = () => {
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
const Mp = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Lp = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Bp = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, Nt = (e, t) => {
  qt(), t(), Yt();
}, Jt = (e, t) => ({
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
  const o = Vp(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Fp = (e, t) => {
  const r = $p();
  let n = null;
  const o = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : y()), Nt("onBeforeCapture", () => {
      const f = e().onBeforeCapture;
      f && f({
        draggableId: c,
        mode: d
      });
    });
  }, i = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : y()), Nt("onBeforeDragStart", () => {
      const f = e().onBeforeDragStart;
      f && f(Jt(c, d));
    });
  }, a = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : y());
    const f = Jt(c, d);
    n = {
      mode: d,
      lastCritical: c,
      lastLocation: f.source,
      lastCombine: null
    }, r.add(() => {
      Nt("onDragStart", () => $r(e().onDragStart, f, t, rr.onDragStart));
    });
  }, s = (c, d) => {
    const f = Wn(d), g = br(d);
    n || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onDragMove when onDragStart has not been called") : y());
    const b = !Bp(c, n.lastCritical);
    b && (n.lastCritical = c);
    const m = !Mp(n.lastLocation, f);
    m && (n.lastLocation = f);
    const v = !Lp(n.lastCombine, g);
    if (v && (n.lastCombine = g), !b && !m && !v)
      return;
    const x = {
      ...Jt(c, n.mode),
      combine: g,
      destination: f
    };
    r.add(() => {
      Nt("onDragUpdate", () => $r(e().onDragUpdate, x, t, rr.onDragUpdate));
    });
  }, l = () => {
    n || (process.env.NODE_ENV !== "production" ? y(!1, "Can only flush responders while dragging") : y()), r.flush();
  }, u = (c) => {
    n || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : y()), n = null, Nt("onDragEnd", () => $r(e().onDragEnd, c, t, rr.onDragEnd));
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
        ...Jt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(c);
    }
  };
}, Gp = (e, t) => {
  const r = Fp(e, t);
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
const kp = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot finish a drop animating when no drop is occurring") : y()), e.dispatch(Kn({
    completed: n.completed
  }));
};
var Wp = kp;
const jp = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ys());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = Fe(window, [a]);
    });
  };
};
var Up = jp, zp = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Hp = (e) => {
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
const qp = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Yp = (e) => (t) => (r) => (n) => {
  if (qp(n)) {
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
const Kp = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(vs({
    reason: n.reason
  })));
};
var Xp = Kp;
const Jp = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Ta;
var Zp = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => Ra(tp, Jp(Fl(xp(r), zp(e), Ep(e), _p, Wp, Up, Xp, Yp(i), Tp, Hp(t), Gp(n, o))));
const Mr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Qp({
  registry: e,
  callbacks: t
}) {
  let r = Mr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, qt();
      const {
        additions: l,
        removals: u,
        modified: p
      } = r, c = Object.keys(l).map((g) => e.draggable.getById(g).getDimension(Ne)).sort((g, b) => g.descriptor.index - b.descriptor.index), d = Object.keys(p).map((g) => {
        const m = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: m
        };
      }), f = {
        additions: c,
        removals: Object.keys(u),
        modified: d
      };
      r = Mr(), Yt(), t.publish(f);
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
      n && (cancelAnimationFrame(n), n = null, r = Mr());
    }
  };
}
var Ns = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Ve({
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
}, Ds = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot find document.documentElement") : y()), e;
}, Ss = () => {
  const e = Ds();
  return Ns({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, ef = () => {
  const e = ws(), t = Ss(), r = e.y, n = e.x, o = Ds(), i = o.clientWidth, a = o.clientHeight, s = n + i, l = r + a;
  return {
    frame: We({
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
        value: Ne,
        displacement: Ne
      }
    }
  };
}, tf = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  qt();
  const n = ef(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), l = {
    draggables: Qa(s),
    droppables: Za(a)
  };
  return Yt(), {
    dimensions: l,
    critical: e,
    viewport: n
  };
};
function gi(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ce(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var rf = (e, t) => {
  let r = null;
  const n = Qp({
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
  }, l = () => {
    if (!r)
      return;
    n.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((f) => f.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? y(!1, "Should only be subscribed when a collection is occurring") : y());
    const f = r.critical.draggable;
    d.type === "ADDITION" && gi(e, f, d.value) && n.add(d.value), d.type === "REMOVAL" && gi(e, f, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot start capturing critical dimensions as there is already a collection") : y());
      const f = e.draggable.getById(d.draggableId), g = e.droppable.getById(f.descriptor.droppableId), b = {
        draggable: f.descriptor,
        droppable: g.descriptor
      }, m = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: m
      }, tf({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: l
  };
}, Os = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", nf = (e) => {
  window.scrollBy(e.x, e.y);
};
const of = we((e) => gr(e).filter((t) => !(!t.isEnabled || !t.frame))), af = (e, t) => of(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? y(!1, "Invalid result") : y()), ls(n.frame.pageMarginBox)(e))) || null;
var sf = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return af(e, r);
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
var cf = (e, t, r = () => Ft) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Cs = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && ce(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, Jn = 1, lf = (e, t, r = () => Ft) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Jn;
  const i = 1 - Cs({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, uf = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return Jn;
  const p = Cs({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), c = e * n.ease(p);
  return Math.ceil(c);
}, bi = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = lf(e, t, o);
  return i === 0 ? 0 : n ? Math.max(uf(i, r, o), Jn) : i;
}, hi = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = cf(e, n, i);
  return t[n.end] < t[n.start] ? bi({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * bi({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, df = ({
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
const pf = Ja((e) => e === 0 ? 0 : e);
var _s = ({
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
  }, s = hi({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: jn,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = hi({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: rs,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = pf({
    x: l,
    y: s
  });
  if (et(u, Ne))
    return null;
  const p = df({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return p ? et(p, Ne) ? null : p : null;
};
const ff = Ja((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Zn = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = Ce(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return et(i, Ne) ? null : i;
  };
})(), Is = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = ff(r), i = Zn({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Qn = (e, t) => Is({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), mf = (e, t) => {
  if (!Qn(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Zn({
    current: n,
    max: r,
    change: t
  });
}, eo = (e, t) => {
  const r = e.frame;
  return r ? Is({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, gf = (e, t) => {
  const r = e.frame;
  return !r || !eo(e, t) ? null : Zn({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var bf = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = _s({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Qn(e, a) ? a : null;
}, hf = ({
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
  const s = _s({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && eo(e, s) ? s : null;
}, vi = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, d = bf({
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
  const u = sf({
    center: a,
    destination: $e(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const p = hf({
    dragStartTime: t,
    droppable: u,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  p && o(u.descriptor.id, p);
}, vf = ({
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
      dragStartTime: c
    } = i;
    vi({
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
      qt(), i && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot start auto scrolling when already started") : y());
      const p = Date.now();
      let c = !1;
      const d = () => {
        c = !0;
      };
      vi({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: c
      }, Yt(), c && a(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, yf = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, l) => {
    const u = Ce(s.current.client.selection, l);
    e({
      client: u
    });
  }, o = (s, l) => {
    if (!eo(s, l))
      return l;
    const u = gf(s, l);
    if (!u)
      return t(s.descriptor.id, l), null;
    const p = Ve(l, u);
    return t(s.descriptor.id, p), Ve(l, p);
  }, i = (s, l, u) => {
    if (!s || !Qn(l, u))
      return u;
    const p = mf(l, u);
    if (!p)
      return r(u), null;
    const c = Ve(u, p);
    return r(c), Ve(u, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const u = $e(s.impact);
    u || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot perform a jump scroll when there is no destination") : y());
    const p = o(s.dimensions.droppables[u], l);
    if (!p)
      return;
    const c = s.viewport, d = i(s.isWindowScrollAllowed, c, p);
    d && n(s, d);
  };
}, Ef = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = vf({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = yf({
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
const bt = "data-rfd", ht = (() => {
  const e = `${bt}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), mn = (() => {
  const e = `${bt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), xf = (() => {
  const e = `${bt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), yi = {
  contextId: `${bt}-scroll-container-context-id`
}, wf = (e) => (t) => `[${t}="${e}"]`, Dt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), Nf = "pointer-events: none;";
var Df = (e) => {
  const t = wf(e), r = (() => {
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
        dragging: Nf,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${Ct.outOfTheWay};
    `;
    return {
      selector: t(mn.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(xf.contextId),
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
    always: Dt(a, "always"),
    resting: Dt(a, "resting"),
    dragging: Dt(a, "dragging"),
    dropAnimating: Dt(a, "dropAnimating"),
    userCancel: Dt(a, "userCancel")
  };
};
const Sf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Cn : me;
var Me = Sf;
const Lr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot find the head to append a style to") : y()), e;
}, Ei = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Of(e, t) {
  const r = K(() => Df(e), [e]), n = j(null), o = j(null), i = M(we((c) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot set dynamic style element if it is not set") : y()), d.textContent = c;
  }), []), a = M((c) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot set dynamic style element if it is not set") : y()), d.textContent = c;
  }, []);
  Me(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? y(!1, "style elements already mounted") : y());
    const c = Ei(t), d = Ei(t);
    return n.current = c, o.current = d, c.setAttribute(`${bt}-always`, e), d.setAttribute(`${bt}-dynamic`, e), Lr().appendChild(c), Lr().appendChild(d), a(r.always), i(r.resting), () => {
      const f = (g) => {
        const b = g.current;
        b || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot unmount ref as it is not set") : y()), Lr().removeChild(b), g.current = null;
      };
      f(n), f(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = M(() => i(r.dragging), [i, r.dragging]), l = M((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = M(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return K(() => ({
    dragging: s,
    dropping: l,
    resting: u
  }), [s, l, u]);
}
function As(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Ps = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Kt(e) {
  return e instanceof Ps(e).HTMLElement;
}
function Rs(e, t) {
  const r = `[${ht.contextId}="${e}"]`, n = As(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && ce(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(ht.draggableId) === t);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && ce("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ce(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Cf(e) {
  const t = j({}), r = j(null), n = j(null), o = j(!1), i = M(function(d, f) {
    const g = {
      id: d,
      focus: f
    };
    return t.current[d] = g, function() {
      const m = t.current;
      m[d] !== g && delete m[d];
    };
  }, []), a = M(function(d) {
    const f = Rs(e, d);
    f && f !== document.activeElement && f.focus();
  }, [e]), s = M(function(d, f) {
    r.current === d && (r.current = f);
  }, []), l = M(function() {
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
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, u, l, s]);
}
function _f() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(c) {
    return t.push(c), function() {
      const f = t.indexOf(c);
      f !== -1 && t.splice(f, 1);
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
    return d || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot find draggable entry with id [${c}]`) : y()), d;
  }
  const a = {
    register: (c) => {
      e.draggables[c.descriptor.id] = c, n({
        type: "ADDITION",
        value: c
      });
    },
    update: (c, d) => {
      const f = e.draggables[d.descriptor.id];
      f && f.uniqueId === c.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: (c) => {
      const d = c.descriptor.id, f = o(d);
      f && c.uniqueId === f.uniqueId && (delete e.draggables[d], e.droppables[c.descriptor.droppableId] && n({
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
    return d || (process.env.NODE_ENV !== "production" ? y(!1, `Cannot find droppable entry with id [${c}]`) : y()), d;
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
function If() {
  const e = K(_f, []);
  return me(() => function() {
    R.version.startsWith("16") || R.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var to = R.createContext(null), Gt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot find document.body") : y()), e;
};
const Af = {
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
var Pf = Af;
const Rf = (e) => `rfd-announcement-${e}`;
function Tf(e) {
  const t = K(() => Rf(e), [e]), r = j(null);
  return me(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Ze(i.style, Pf), Gt().appendChild(i), function() {
      setTimeout(function() {
        const l = Gt();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), M((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && ce(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Vf = 0;
const Ts = {
  separator: "::"
};
function $f(e, t = Ts) {
  return K(() => `${e}${t.separator}${Vf++}`, [t.separator, e]);
}
function Mf(e, t = Ts) {
  const r = R.useId();
  return K(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var ro = "useId" in R ? Mf : $f;
function Lf({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Bf({
  contextId: e,
  text: t
}) {
  const r = ro("hidden-text", {
    separator: "-"
  }), n = K(() => Lf({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return me(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", Gt().appendChild(i), function() {
      const s = Gt();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var yr = R.createContext(null), Ff = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Gf = /(\d+)\.(\d+)\.(\d+)/, xi = (e) => {
  const t = Gf.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? y(!1, `Unable to parse React version ${e}`) : y());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, kf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Wf = (e, t) => {
  const r = xi(e), n = xi(t);
  kf(r, n) || process.env.NODE_ENV !== "production" && ce(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Br = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var jf = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ce(`
      No <!doctype html> found.

      ${Br}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ce(`
      Unexpected <!doctype> found: (${t.name})

      ${Br}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ce(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Br}
    `);
};
function no(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Xt(e, t) {
  no(() => {
    me(() => {
      try {
        e();
      } catch (r) {
        ln(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Uf() {
  Xt(() => {
    Wf(Ff.react, R.version), jf(document);
  }, []);
}
function oo(e) {
  const t = j(e);
  return me(() => {
    t.current = e;
  }), t;
}
function zf() {
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
const Hf = 9, qf = 13, io = 27, Vs = 32, Yf = 33, Kf = 34, Xf = 35, Jf = 36, Zf = 37, Qf = 38, em = 39, tm = 40, rm = {
  [qf]: !0,
  [Hf]: !0
};
var $s = (e) => {
  rm[e.keyCode] && e.preventDefault();
};
const nm = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Er = nm;
const Ms = 0, wi = 5;
function om(e, t) {
  return Math.abs(t.x - e.x) >= wi || Math.abs(t.y - e.y) >= wi;
}
const Ni = {
  type: "IDLE"
};
function im({
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
      if (i !== Ms)
        return;
      const l = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(l);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot be IDLE") : y());
      const p = u.point;
      if (!om(p, l))
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
      if (o.keyCode === io) {
        o.preventDefault(), e();
        return;
      }
      $s(o);
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
    eventName: Er,
    fn: e
  }];
}
function am(e) {
  const t = j(Ni), r = j(Qe), n = K(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== Ms || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
        return;
      const d = e.findClosestDraggableId(c);
      if (!d)
        return;
      const f = e.tryGetLock(d, a, {
        sourceEvent: c
      });
      if (!f)
        return;
      c.preventDefault();
      const g = {
        x: c.clientX,
        y: c.clientY
      };
      r.current(), u(f, g);
    }
  }), [e]), o = K(() => ({
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
  }), [e]), i = M(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = Fe(window, [o, n], c);
  }, [o, n]), a = M(() => {
    t.current.type !== "IDLE" && (t.current = Ni, r.current(), i());
  }, [i]), s = M(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), l = M(function() {
    const c = {
      capture: !0,
      passive: !1
    }, d = im({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (f) => {
        t.current = f;
      }
    });
    r.current = Fe(window, d, c);
  }, [s, a]), u = M(function(c, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? y(!1, "Expected to move from IDLE to PENDING drag") : y()), t.current = {
      type: "PENDING",
      point: d,
      actions: c
    }, l();
  }, [l]);
  Me(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function sm() {
}
const cm = {
  [Kf]: !0,
  [Yf]: !0,
  [Jf]: !0,
  [Xf]: !0
};
function lm(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === io) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Vs) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === tm) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Qf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === em) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Zf) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (cm[o.keyCode]) {
        o.preventDefault();
        return;
      }
      $s(o);
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
function um(e) {
  const t = j(sm), r = K(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Vs)
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
        l || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot stop capturing a keyboard drag when not capturing") : y()), l = !1, t.current(), n();
      }
      t.current = Fe(window, lm(u, p), {
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
const Fr = {
  type: "IDLE"
}, dm = 120, pm = 0.15;
function fm({
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
      r.keyCode === io && r.preventDefault(), e();
    }
  }, {
    eventName: Er,
    fn: e
  }];
}
function mm({
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
      if (!i || !(i.force >= pm))
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
    eventName: Er,
    fn: e
  }];
}
function gm(e) {
  const t = j(Fr), r = j(Qe), n = M(function() {
    return t.current;
  }, []), o = M(function(f) {
    t.current = f;
  }, []), i = K(() => ({
    eventName: "touchstart",
    fn: function(f) {
      if (f.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(f);
      if (!g)
        return;
      const b = e.tryGetLock(g, s, {
        sourceEvent: f
      });
      if (!b)
        return;
      const m = f.touches[0], {
        clientX: v,
        clientY: x
      } = m, w = {
        x: v,
        y: x
      };
      r.current(), c(b, w);
    }
  }), [e]), a = M(function() {
    const f = {
      capture: !0,
      passive: !1
    };
    r.current = Fe(window, [i], f);
  }, [i]), s = M(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Fr), r.current(), a());
  }, [a, o]), l = M(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = M(function() {
    const f = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: l,
      completed: s,
      getPhase: n
    }, b = Fe(window, mm(g), f), m = Fe(window, fm(g), f);
    r.current = function() {
      b(), m();
    };
  }, [l, n, s]), p = M(function() {
    const f = n();
    f.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? y(!1, `Cannot start dragging from phase ${f.type}`) : y());
    const g = f.actions.fluidLift(f.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, o]), c = M(function(f, g) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? y(!1, "Expected to move from IDLE to PENDING drag") : y());
    const b = setTimeout(p, dm);
    o({
      type: "PENDING",
      point: g,
      actions: f,
      longPressTimerId: b
    }), u();
  }, [u, n, o, p]);
  Me(function() {
    return a(), function() {
      r.current();
      const g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(Fr));
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
function bm(e) {
  no(() => {
    const t = oo(e);
    Xt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot change the amount of sensor hooks after mounting") : y(!1));
    });
  });
}
const hm = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Ls(e, t) {
  if (t == null)
    return !1;
  if (hm.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Ls(e, t.parentElement);
}
function vm(e, t) {
  const r = t.target;
  return Kt(r) ? Ls(e, r) : !1;
}
var ym = (e) => We(e.getBoundingClientRect()).center;
function Em(e) {
  return e instanceof Ps(e).Element;
}
const xm = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Bs(e, t) {
  return e == null ? null : e[xm](t) ? e : Bs(e.parentElement, t);
}
function wm(e, t) {
  return e.closest ? e.closest(t) : Bs(e, t);
}
function Nm(e) {
  return `[${ht.contextId}="${e}"]`;
}
function Dm(e, t) {
  const r = t.target;
  if (!Em(r))
    return process.env.NODE_ENV !== "production" && ce("event.target must be a Element"), null;
  const n = Nm(e), o = wm(r, n);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && ce("drag handle must be a HTMLElement"), null) : null;
}
function Sm(e, t) {
  const r = Dm(e, t);
  return r ? r.getAttribute(ht.draggableId) : null;
}
function Om(e, t) {
  const r = `[${mn.contextId}="${e}"]`, o = As(document, r).find((i) => i.getAttribute(mn.id) === t);
  return o ? Kt(o) ? o : (process.env.NODE_ENV !== "production" && ce("Draggable element is not a HTMLElement"), null) : null;
}
function Cm(e) {
  e.preventDefault();
}
function Zt({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && ce(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && ce(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Fs({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !Os(t.getState(), n)) : (process.env.NODE_ENV !== "production" && ce(`Unable to find draggable with id: ${n}`), !1);
}
function _m({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Fs({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const l = n.draggable.getById(o), u = Om(t, l.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && ce(`Unable to find draggable element with id: ${o}`), null;
  if (a && !l.options.canDragInteractiveElements && vm(u, a))
    return null;
  const p = e.claim(i || Qe);
  let c = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function f() {
    return e.isActive(p);
  }
  function g(h, N) {
    Zt({
      expected: h,
      phase: c,
      isLockActive: f,
      shouldWarn: !0
    }) && r.dispatch(N());
  }
  const b = g.bind(null, "DRAGGING");
  function m(h) {
    function N() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (N(), process.env.NODE_ENV !== "production" ? y(!1, `Cannot lift in phase ${c}`) : y()), r.dispatch(np(h.liftActionArgs)), c = "DRAGGING";
    function O(C, G = {
      shouldBlockNextClick: !1
    }) {
      if (h.cleanup(), G.shouldBlockNextClick) {
        const T = Fe(window, [{
          eventName: "click",
          fn: Cm,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(T);
      }
      N(), r.dispatch(vs({
        reason: C
      }));
    }
    return {
      isActive: () => Zt({
        expected: "DRAGGING",
        phase: c,
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
      b(() => hs({
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
      moveUp: () => b(pp),
      moveRight: () => b(mp),
      moveDown: () => b(fp),
      moveLeft: () => b(gp)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: ym(u),
        movementMode: "SNAP"
      },
      cleanup: Qe,
      actions: h
    });
  }
  function w() {
    Zt({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: f,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Zt({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: f,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: v,
    snapLift: x,
    abort: w
  };
}
const Im = [am, um, gm];
function Am({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? Im : [], ...n || []], a = Ae(() => zf())[0], s = M(function(m, v) {
    kt(m) && !kt(v) && a.tryAbandon();
  }, [a]);
  Me(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      s(m, x), m = x;
    });
  }, [a, t, s]), Me(() => a.tryAbandon, [a.tryAbandon]);
  const l = M((b) => Fs({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = M((b, m, v) => _m({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: m || null,
    sourceEvent: v && v.sourceEvent ? v.sourceEvent : null
  }), [e, a, r, t]), p = M((b) => Sm(e, b), [e]), c = M((b) => {
    const m = r.draggable.findById(b);
    return m ? m.options : null;
  }, [r.draggable]), d = M(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Yn()));
  }, [a, t]), f = M(() => a.isClaimed(), [a]), g = K(() => ({
    canGetLock: l,
    tryGetLock: u,
    findClosestDraggableId: p,
    findOptionsForDraggable: c,
    tryReleaseLock: d,
    isLockClaimed: f
  }), [l, u, p, c, d, f]);
  bm(i);
  for (let b = 0; b < i.length; b++)
    i[b](g);
}
const Pm = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    R.version.startsWith("16") || R.version.startsWith("17") ? r() : _n(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Rm = (e) => ({
  ...Ft,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Ft.durationDampening,
    ...e.autoScrollerOptions
  }
});
function St(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? y(!1, "Could not find store from lazy ref") : y()), e.current;
}
function Tm(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = j(null);
  Uf();
  const s = oo(e), l = M(() => Pm(s.current), [s]), u = M(() => Rm(s.current), [s]), p = Tf(t), c = Bf({
    contextId: t,
    text: i
  }), d = Of(t, o), f = M((T) => {
    St(a).dispatch(T);
  }, []), g = K(() => To({
    publishWhileDragging: ip,
    updateDroppableScroll: sp,
    updateDroppableIsEnabled: cp,
    updateDroppableIsCombineEnabled: lp,
    collectionStarting: ap
  }, f), [f]), b = If(), m = K(() => rf(b, g), [b, g]), v = K(() => Ef({
    scrollWindow: nf,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: u,
    ...To({
      move: hs
    }, f)
  }), [m.scrollDroppable, f, u]), x = Cf(t), w = K(() => Zp({
    announce: p,
    autoScroller: v,
    dimensionMarshal: m,
    focusMarshal: x,
    getResponders: l,
    styleMarshal: d
  }), [p, v, m, x, l, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== w && process.env.NODE_ENV !== "production" && ce("unexpected store change"), a.current = w;
  const E = M(() => {
    const T = St(a);
    T.getState().phase !== "IDLE" && T.dispatch(Yn());
  }, []), h = M(() => {
    const T = St(a).getState();
    return T.phase === "DROP_ANIMATING" ? !0 : T.phase === "IDLE" ? !1 : T.isDragging;
  }, []), N = K(() => ({
    isDragging: h,
    tryAbort: E
  }), [h, E]);
  r(N);
  const O = M((T) => Os(St(a).getState(), T), []), C = M(() => at(St(a).getState()), []), G = K(() => ({
    marshal: m,
    focus: x,
    contextId: t,
    canLift: O,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: c,
    registry: b
  }), [t, m, c, x, O, C, b]);
  return Am({
    contextId: t,
    store: w,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), me(() => E, [E]), R.createElement(yr.Provider, {
    value: G
  }, R.createElement(Iu, {
    context: to,
    store: w
  }, e.children));
}
let Vm = 0;
function $m() {
  return K(() => `${Vm++}`, []);
}
function Mm() {
  return R.useId();
}
var Lm = "useId" in R ? Mm : $m;
function Bm(e) {
  const t = Lm(), r = e.dragHandleUsageInstructions || rr.dragHandleUsageInstructions;
  return R.createElement(zu, null, (n) => R.createElement(Tm, {
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
const Di = {
  dragging: 5e3,
  dropAnimating: 4500
}, Fm = (e, t) => t ? Ct.drop(t.duration) : e ? Ct.snap : Ct.fluid, Gm = (e, t) => {
  if (e)
    return t ? Bt.opacity.drop : Bt.opacity.combining;
}, km = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Wm(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = km(e), l = !!i, u = l ? pn.drop(n, a) : pn.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Fm(s, i),
    transform: u,
    opacity: Gm(a, l),
    zIndex: l ? Di.dropAnimating : Di.dragging,
    pointerEvents: "none"
  };
}
function jm(e) {
  return {
    transform: pn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Um(e) {
  return e.type === "DRAGGING" ? Wm(e) : jm(e);
}
function zm(e, t, r = Ne) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Ha(o, n), a = cr(i, r), s = {
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
function Hm(e) {
  const t = ro("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = K(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = M((f) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot get dimension when no ref is set") : y()), zm(r, g, f);
  }, [r, o]), p = K(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = j(p), d = j(!0);
  Me(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Me(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const f = c.current;
    c.current = p, n.draggable.update(p, f);
  }, [p, n.draggable]);
}
var ao = R.createContext(null);
function Gs(e) {
  e && Kt(e) || (process.env.NODE_ENV !== "production" ? y(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : y());
}
function qm(e, t, r) {
  Xt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? y(!1, "Draggable requires a draggableId") : y(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? y(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : y(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? y(!1, `${n(o)} requires an integer index prop`) : y(!1)), e.mapped.type !== "DRAGGING" && (Gs(r()), e.isEnabled && (Rs(t, o) || (process.env.NODE_ENV !== "production" ? y(!1, `${n(o)} Unable to find drag handle`) : y(!1))));
  });
}
function Ym(e) {
  no(() => {
    const t = j(e);
    Xt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? y(!1, "Draggable isClone prop value changed during component life") : y(!1));
    }, [e]);
  });
}
function dr(e) {
  const t = fr(e);
  return t || (process.env.NODE_ENV !== "production" ? y(!1, "Could not find required context") : y()), t;
}
function Km(e) {
  e.preventDefault();
}
const Xm = (e) => {
  const t = j(null), r = M((N = null) => {
    t.current = N;
  }, []), n = M(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = dr(yr), {
    type: s,
    droppableId: l
  } = dr(ao), u = K(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: f,
    canDragInteractiveElements: g,
    isClone: b,
    mapped: m,
    dropAnimationFinished: v
  } = e;
  if (qm(e, o, n), Ym(b), !b) {
    const N = K(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: g,
      shouldRespectForcePress: f,
      isEnabled: d
    }), [u, a, n, g, f, d]);
    Hm(N);
  }
  const x = K(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Km
  } : null, [o, i, c, d]), w = M((N) => {
    m.type === "DRAGGING" && m.dropping && N.propertyName === "transform" && (R.version.startsWith("16") || R.version.startsWith("17") ? v() : _n(v));
  }, [v, m]), E = K(() => {
    const N = Um(m), O = m.type === "DRAGGING" && m.dropping ? w : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: N,
        onTransitionEnd: O
      },
      dragHandleProps: x
    };
  }, [o, x, c, m, w, r]), h = K(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return R.createElement(R.Fragment, null, p(E, m.snapshot, h));
};
var Jm = Xm, ks = (e, t) => e === t, Ws = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Zm = (e) => e.combine ? e.combine.draggableId : null, Qm = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function eg() {
  const e = we((o, i) => ({
    x: o,
    y: i
  })), t = we((o, i, a = null, s = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = we((o, i, a, s, l = null, u = null, p = null) => ({
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
    if (kt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = $e(o.impact), u = Qm(o.impact), p = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, l, u, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], u = a.result, p = u.mode, c = Ws(u), d = Zm(u), g = {
        duration: o.dropDuration,
        curve: Xn.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Bt.opacity.drop : null,
        scale: d ? Bt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: l,
          dropping: g,
          draggingOver: c,
          combineWith: d,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, s, c, d, g)
        }
      };
    }
    return null;
  };
}
function js(e = null) {
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
const tg = {
  mapped: {
    type: "SECONDARY",
    offset: Ne,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: js(null)
  }
};
function rg() {
  const e = we((a, s) => ({
    x: a,
    y: s
  })), t = we(js), r = we((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(Ne, a, !0) : null, o = (a, s, l, u) => {
    const p = l.displaced.visible[a], c = !!(u.inVirtualList && u.effected[a]), d = br(l), f = d && d.draggableId === a ? s : null;
    if (!p) {
      if (!c)
        return n(f);
      if (l.displaced.invisible[a])
        return null;
      const m = yt(u.displacedBy.point), v = e(m.x, m.y);
      return r(v, f, !0);
    }
    if (c)
      return n(f);
    const g = l.displacedBy.point, b = e(g.x, g.y);
    return r(b, f, p.shouldAnimate);
  };
  return (a, s) => {
    if (kt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const ng = () => {
  const e = eg(), t = rg();
  return (n, o) => e(n, o) || t(n, o) || tg;
}, og = {
  dropAnimationFinished: ys
}, ig = Ua(ng, og, null, {
  context: to,
  areStatePropsEqual: ks
})(Jm);
var ag = ig;
function Us(e) {
  return dr(ao).isUsingCloneFor === e.draggableId && !e.isClone ? null : R.createElement(ag, e);
}
function sg(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return R.createElement(Us, Ze({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const so = (e) => (t) => e === t, cg = so("scroll"), lg = so("auto"), ug = so("visible"), Si = (e, t) => t(e.overflowX) || t(e.overflowY), dg = (e, t) => t(e.overflowX) && t(e.overflowY), zs = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Si(r, cg) || Si(r, lg);
}, pg = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Gt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, y()), !zs(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return dg(n, ug) || process.env.NODE_ENV !== "production" && ce(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, co = (e) => e == null ? null : e === document.body ? pg() ? e : null : e === document.documentElement ? null : zs(e) ? e : co(e.parentElement);
var fg = (e) => {
  !e || !co(e.parentElement) || process.env.NODE_ENV !== "production" && ce(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, gn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Hs = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Hs(e.parentElement) : !1;
var mg = (e) => {
  const t = co(e), r = Hs(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, gg = ({
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
      client: f
    } = s, g = Ns({
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
        max: g,
        diff: {
          value: Ne,
          displacement: Ne
        }
      }
    };
  })(), u = o === "vertical" ? jn : rs, p = gt({
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
const bg = (e, t) => {
  const r = qa(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, l = Fn({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Gn({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var hg = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = bg(e, l), p = cr(u, n), c = (() => {
    if (!l)
      return null;
    const f = qa(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: f,
      page: cr(f, n),
      scroll: gn(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return gg({
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
const vg = {
  passive: !1
}, yg = {
  passive: !0
};
var Oi = (e) => e.shouldPublishImmediately ? vg : yg;
const Qt = (e) => e && e.env.closestScrollable || null;
function Eg(e) {
  const t = j(null), r = dr(yr), n = ro("droppable"), {
    registry: o,
    marshal: i
  } = r, a = oo(e), s = K(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = j(s), u = K(() => we((E, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? y(!1, "Can only update scroll when dragging") : y());
    const N = {
      x: E,
      y: h
    };
    i.updateDroppableScroll(s.id, N);
  }), [s.id, i]), p = M(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? Ne : gn(E.env.closestScrollable);
  }, []), c = M(() => {
    const E = p();
    u(E.x, E.y);
  }, [p, u]), d = K(() => Tt(c), [c]), f = M(() => {
    const E = t.current, h = Qt(E);
    if (E && h || (process.env.NODE_ENV !== "production" ? y(!1, "Could not find scroll options while scrolling") : y()), E.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), g = M((E, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? y(!1, "Cannot collect a droppable while a drag is occurring") : y());
    const N = a.current, O = N.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot collect without a droppable ref") : y());
    const C = mg(O), G = {
      ref: O,
      descriptor: s,
      env: C,
      scrollOptions: h
    };
    t.current = G;
    const T = hg({
      ref: O,
      descriptor: s,
      env: C,
      windowScroll: E,
      direction: N.direction,
      isDropDisabled: N.isDropDisabled,
      isCombineEnabled: N.isCombineEnabled,
      shouldClipSubject: !N.ignoreContainerClipping
    }), F = C.closestScrollable;
    return F && (F.setAttribute(yi.contextId, r.contextId), F.addEventListener("scroll", f, Oi(G.scrollOptions)), process.env.NODE_ENV !== "production" && fg(F)), T;
  }, [r.contextId, s, f, a]), b = M(() => {
    const E = t.current, h = Qt(E);
    return E && h || (process.env.NODE_ENV !== "production" ? y(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : y()), gn(h);
  }, []), m = M(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot stop drag when no active drag") : y());
    const h = Qt(E);
    t.current = null, h && (d.cancel(), h.removeAttribute(yi.contextId), h.removeEventListener("scroll", f, Oi(E.scrollOptions)));
  }, [f, d]), v = M((E) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot scroll when there is no drag") : y());
    const N = Qt(h);
    N || (process.env.NODE_ENV !== "production" ? y(!1, "Cannot scroll a droppable with no closest scrollable") : y()), N.scrollTop += E.y, N.scrollLeft += E.x;
  }, []), x = K(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: b,
    dragStopped: m,
    scroll: v
  }), [m, g, b, v]), w = K(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  Me(() => (l.current = w.descriptor, o.droppable.register(w), () => {
    t.current && (process.env.NODE_ENV !== "production" && ce("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(w);
  }), [x, s, m, w, i, o.droppable]), Me(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Me(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Gr() {
}
const Ci = {
  width: 0,
  height: 0,
  margin: Zu
}, xg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Ci : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, wg = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = xg({
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
}, Ng = (e) => {
  const t = j(null), r = M(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ae(e.animate === "open");
  me(() => s ? n !== "open" ? (r(), l(!1), Gr) : t.current ? Gr : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Gr, [n, s, r]);
  const u = M((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = wg({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return R.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var Dg = R.memo(Ng);
function kr(e) {
  return typeof e == "boolean";
}
function Wr(e, t) {
  t.forEach((r) => r(e));
}
const Sg = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? y(!1, "A Droppable requires a droppableId prop") : y()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? y(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : y());
}, function({
  props: t
}) {
  kr(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? y(!1, "isDropDisabled must be a boolean") : y()), kr(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? y(!1, "isCombineEnabled must be a boolean") : y()), kr(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? y(!1, "ignoreContainerClipping must be a boolean") : y());
}, function({
  getDroppableRef: t
}) {
  Gs(t());
}], Og = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && ce(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Cg = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? y(!1, "Must provide a clone render function (renderClone) for virtual lists") : y());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? y(!1, "Expected virtual list to not have a placeholder") : y());
}];
function _g(e) {
  Xt(() => {
    Wr(e, Sg), e.props.mode === "standard" && Wr(e, Og), e.props.mode === "virtual" && Wr(e, Cg);
  });
}
class Ig extends R.PureComponent {
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
const Ag = (e) => {
  const t = fr(yr);
  t || (process.env.NODE_ENV !== "production" ? y(!1, "Could not find app context") : y());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = j(null), i = j(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: f,
    snapshot: g,
    useClone: b,
    updateViewportMaxScroll: m,
    getContainerForClone: v
  } = e, x = M(() => o.current, []), w = M((_ = null) => {
    o.current = _;
  }, []), E = M(() => i.current, []), h = M((_ = null) => {
    i.current = _;
  }, []);
  _g({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: E
  });
  const N = M(() => {
    n() && m({
      maxScroll: Ss()
    });
  }, [n, m]);
  Eg({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: f,
    ignoreContainerClipping: c,
    getDroppableRef: x
  });
  const O = K(() => R.createElement(Ig, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: _,
    data: U,
    animate: X
  }) => R.createElement(Dg, {
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
  }), [r, s, O, w]), G = b ? b.dragging.draggableId : null, T = K(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: G
  }), [s, G, l]);
  function F() {
    if (!b)
      return null;
    const {
      dragging: _,
      render: U
    } = b, X = R.createElement(Us, {
      draggableId: _.draggableId,
      index: _.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, V) => U(J, V, _));
    return ma.createPortal(X, v());
  }
  return R.createElement(ao.Provider, {
    value: T
  }, a(C, g), F());
};
var Pg = Ag;
function Rg() {
  return document.body || (process.env.NODE_ENV !== "production" ? y(!1, "document.body is not ready") : y()), document.body;
}
const _i = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Rg
}, qs = (e) => {
  let t = {
    ...e
  }, r;
  for (r in _i)
    e[r] === void 0 && (t = {
      ...t,
      [r]: _i[r]
    });
  return t;
}, jr = (e, t) => e === t.droppable.type, Ii = (e, t) => t.draggables[e.draggable.id], Tg = () => {
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
  }, r = we((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = we((i, a, s, l, u, p) => {
    const c = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const g = p ? {
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
        useClone: g
      };
    }
    if (!a)
      return t;
    if (!l)
      return e;
    const f = {
      isDraggingOver: s,
      draggingOverWith: c,
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
    const s = qs(a), l = s.droppableId, u = s.type, p = !s.isDropDisabled, c = s.renderClone;
    if (kt(i)) {
      const d = i.critical;
      if (!jr(u, d))
        return t;
      const f = Ii(d, i.dimensions), g = $e(i.impact) === l;
      return n(l, p, g, g, f, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!jr(u, d.critical))
        return t;
      const f = Ii(d.critical, i.dimensions);
      return n(l, p, Ws(d.result) === l, $e(d.impact) === l, f, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!jr(u, d.critical))
        return t;
      const f = $e(d.impact) === l, g = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === l;
      return f ? g ? e : t : b ? e : t;
    }
    return t;
  };
}, Vg = {
  updateViewportMaxScroll: dp
}, $g = Ua(Tg, Vg, (e, t, r) => ({
  ...qs(r),
  ...e,
  ...t
}), {
  context: to,
  areStatePropsEqual: ks
})(Pg);
var Mg = $g;
const Xv = ({
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
  const [p, c] = Ae(null), [d, f] = Ae(e);
  me(() => {
    f(e);
  }, [e]);
  const g = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (v) => {
    a == null || a(v), c(v);
  }, m = (v) => {
    if (!v.destination || !(d != null && d.length)) return;
    const x = v.source.index, w = v.destination.index, E = [...d], [h] = E.splice(x, 1);
    E.splice(w, 0, h), f(E);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ xe("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ I("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ I("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ I(In, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ I(Sa, { className: u, children: /* @__PURE__ */ I("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ I("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ I(Bm, { onDragEnd: m, children: /* @__PURE__ */ I(Mg, { droppableId: "dropArray", direction: "vertical", children: (v) => /* @__PURE__ */ xe("table", { className: "w-full", children: [
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
    /* @__PURE__ */ xe(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...v.droppableProps,
        ref: v.innerRef,
        children: [
          d == null ? void 0 : d.map((x, w) => {
            var E;
            return /* @__PURE__ */ I(
              sg,
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
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${p === d[w] && g}`,
                      onClick: () => b(
                        s ? x[s] : x.id
                      ),
                      ref: h.innerRef,
                      ...h.draggableProps,
                      ...h.dragHandleProps,
                      style: N,
                      children: t.map((O, C) => {
                        var T;
                        let G = (T = O == null ? void 0 : O.name) == null ? void 0 : T.reduce(
                          (F, _) => F == null ? void 0 : F[_],
                          d == null ? void 0 : d[w]
                        );
                        return /* @__PURE__ */ I(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${l && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
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
}, Jv = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ I(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Lg = ({ error: e }) => /* @__PURE__ */ I("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ I("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null });
var Ai;
(function(e) {
  e.event = "event", e.props = "prop";
})(Ai || (Ai = {}));
var Ur = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Ur(), "" + Ur();
function Bg() {
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
function Fg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bn = { exports: {} }, zr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function Gg() {
  if (Pi) return zr;
  Pi = 1;
  var e = R;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var f = d(), g = n({ inst: { value: f, getSnapshot: d } }), b = g[0].inst, m = g[1];
    return i(
      function() {
        b.value = f, b.getSnapshot = d, l(b) && m({ inst: b });
      },
      [c, f, d]
    ), o(
      function() {
        return l(b) && m({ inst: b }), c(function() {
          l(b) && m({ inst: b });
        });
      },
      [c]
    ), a(f), f;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var f = d();
      return !r(c, f);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return zr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, zr;
}
var Ri = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function kg() {
  return Ti || (Ti = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f, g) {
      return f === g && (f !== 0 || 1 / f === 1 / g) || f !== f && g !== g;
    }
    function t(f, g) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = g();
      if (!c) {
        var m = g();
        i(b, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      m = a({
        inst: { value: b, getSnapshot: g }
      });
      var v = m[0].inst, x = m[1];
      return l(
        function() {
          v.value = b, v.getSnapshot = g, r(v) && x({ inst: v });
        },
        [f, b, g]
      ), s(
        function() {
          return r(v) && x({ inst: v }), f(function() {
            r(v) && x({ inst: v });
          });
        },
        [f]
      ), u(b), b;
    }
    function r(f) {
      var g = f.getSnapshot;
      f = f.value;
      try {
        var b = g();
        return !i(f, b);
      } catch {
        return !0;
      }
    }
    function n(f, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = R, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Ri.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ri;
}
process.env.NODE_ENV === "production" ? bn.exports = Gg() : bn.exports = kg();
var lo = bn.exports, Hr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function Wg() {
  if (Vi) return Hr;
  Vi = 1;
  var e = R, t = lo;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Hr.useSyncExternalStoreWithSelector = function(u, p, c, d, f) {
    var g = i(null);
    if (g.current === null) {
      var b = { hasValue: !1, value: null };
      g.current = b;
    } else b = g.current;
    g = s(
      function() {
        function v(N) {
          if (!x) {
            if (x = !0, w = N, N = d(N), f !== void 0 && b.hasValue) {
              var O = b.value;
              if (f(O, N))
                return E = O;
            }
            return E = N;
          }
          if (O = E, n(w, N)) return O;
          var C = d(N);
          return f !== void 0 && f(O, C) ? (w = N, O) : (w = N, E = C);
        }
        var x = !1, w, E, h = c === void 0 ? null : c;
        return [
          function() {
            return v(p());
          },
          h === null ? void 0 : function() {
            return v(h());
          }
        ];
      },
      [p, c, d, f]
    );
    var m = o(u, g[0], g[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = m;
      },
      [m]
    ), l(m), m;
  }, Hr;
}
var $i = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function jg() {
  return Mi || (Mi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = R, r = lo, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    $i.useSyncExternalStoreWithSelector = function(u, p, c, d, f) {
      var g = i(null);
      if (g.current === null) {
        var b = { hasValue: !1, value: null };
        g.current = b;
      } else b = g.current;
      g = s(
        function() {
          function v(N) {
            if (!x) {
              if (x = !0, w = N, N = d(N), f !== void 0 && b.hasValue) {
                var O = b.value;
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
          var x = !1, w, E, h = c === void 0 ? null : c;
          return [
            function() {
              return v(p());
            },
            h === null ? void 0 : function() {
              return v(h());
            }
          ];
        },
        [p, c, d, f]
      );
      var m = o(u, g[0], g[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = m;
        },
        [m]
      ), l(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), $i;
}
process.env.NODE_ENV === "production" ? Wg() : jg();
function Ug(e) {
  e();
}
let Ys = Ug;
const zg = (e) => Ys = e, Hg = () => Ys, Li = Symbol.for("react-redux-context"), Bi = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function qg() {
  var e;
  if (!P.createContext) return {};
  const t = (e = Bi[Li]) != null ? e : Bi[Li] = /* @__PURE__ */ new Map();
  let r = t.get(P.createContext);
  return r || (r = P.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(P.createContext, r)), r;
}
const Yg = /* @__PURE__ */ qg(), Kg = () => {
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
function Ks(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var hn = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function Xg() {
  if (Fi) return ne;
  Fi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var N = h.$$typeof;
      switch (N) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case p:
                case g:
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
  return ne.AsyncMode = l, ne.ConcurrentMode = u, ne.ContextConsumer = s, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = p, ne.Fragment = n, ne.Lazy = g, ne.Memo = f, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = c, ne.isAsyncMode = function(h) {
    return E(h) || w(h) === l;
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
    return w(h) === g;
  }, ne.isMemo = function(h) {
    return w(h) === f;
  }, ne.isPortal = function(h) {
    return w(h) === r;
  }, ne.isProfiler = function(h) {
    return w(h) === i;
  }, ne.isStrictMode = function(h) {
    return w(h) === o;
  }, ne.isSuspense = function(h) {
    return w(h) === c;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === i || h === o || h === c || h === d || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === f || h.$$typeof === a || h.$$typeof === s || h.$$typeof === p || h.$$typeof === m || h.$$typeof === v || h.$$typeof === x || h.$$typeof === b);
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
var Gi;
function Jg() {
  return Gi || (Gi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function w(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === i || D === o || D === c || D === d || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === f || D.$$typeof === a || D.$$typeof === s || D.$$typeof === p || D.$$typeof === m || D.$$typeof === v || D.$$typeof === x || D.$$typeof === b);
    }
    function E(D) {
      if (typeof D == "object" && D !== null) {
        var he = D.$$typeof;
        switch (he) {
          case t:
            var S = D.type;
            switch (S) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return S;
              default:
                var Ie = S && S.$$typeof;
                switch (Ie) {
                  case s:
                  case p:
                  case g:
                  case f:
                  case a:
                    return Ie;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var h = l, N = u, O = s, C = a, G = t, T = p, F = n, _ = g, U = f, X = r, J = i, V = o, $ = c, k = !1;
    function z(D) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(D) || E(D) === l;
    }
    function q(D) {
      return E(D) === u;
    }
    function W(D) {
      return E(D) === s;
    }
    function Z(D) {
      return E(D) === a;
    }
    function de(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function ve(D) {
      return E(D) === p;
    }
    function ge(D) {
      return E(D) === n;
    }
    function ye(D) {
      return E(D) === g;
    }
    function be(D) {
      return E(D) === f;
    }
    function De(D) {
      return E(D) === r;
    }
    function le(D) {
      return E(D) === i;
    }
    function Se(D) {
      return E(D) === o;
    }
    function je(D) {
      return E(D) === c;
    }
    ie.AsyncMode = h, ie.ConcurrentMode = N, ie.ContextConsumer = O, ie.ContextProvider = C, ie.Element = G, ie.ForwardRef = T, ie.Fragment = F, ie.Lazy = _, ie.Memo = U, ie.Portal = X, ie.Profiler = J, ie.StrictMode = V, ie.Suspense = $, ie.isAsyncMode = z, ie.isConcurrentMode = q, ie.isContextConsumer = W, ie.isContextProvider = Z, ie.isElement = de, ie.isForwardRef = ve, ie.isFragment = ge, ie.isLazy = ye, ie.isMemo = be, ie.isPortal = De, ie.isProfiler = le, ie.isStrictMode = Se, ie.isSuspense = je, ie.isValidElementType = w, ie.typeOf = E;
  }()), ie;
}
process.env.NODE_ENV === "production" ? hn.exports = Xg() : hn.exports = Jg();
var Zg = hn.exports, uo = Zg, Qg = {
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
}, eb = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, tb = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, po = {};
po[uo.ForwardRef] = tb;
po[uo.Memo] = Xs;
function ki(e) {
  return uo.isMemo(e) ? Xs : po[e.$$typeof] || Qg;
}
var rb = Object.defineProperty, nb = Object.getOwnPropertyNames, Wi = Object.getOwnPropertySymbols, ob = Object.getOwnPropertyDescriptor, ib = Object.getPrototypeOf, ji = Object.prototype;
function Js(e, t, r) {
  if (typeof t != "string") {
    if (ji) {
      var n = ib(t);
      n && n !== ji && Js(e, n, r);
    }
    var o = nb(t);
    Wi && (o = o.concat(Wi(t)));
    for (var i = ki(e), a = ki(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!eb[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = ob(t, l);
        try {
          rb(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var ab = Js;
const Ui = /* @__PURE__ */ Fg(ab);
var vn = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function sb() {
  if (zi) return oe;
  zi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), g;
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
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case l:
                case d:
                case c:
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
  return oe.ContextConsumer = a, oe.ContextProvider = i, oe.Element = e, oe.ForwardRef = l, oe.Fragment = r, oe.Lazy = d, oe.Memo = c, oe.Portal = t, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = u, oe.SuspenseList = p, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(m) {
    return b(m) === a;
  }, oe.isContextProvider = function(m) {
    return b(m) === i;
  }, oe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, oe.isForwardRef = function(m) {
    return b(m) === l;
  }, oe.isFragment = function(m) {
    return b(m) === r;
  }, oe.isLazy = function(m) {
    return b(m) === d;
  }, oe.isMemo = function(m) {
    return b(m) === c;
  }, oe.isPortal = function(m) {
    return b(m) === t;
  }, oe.isProfiler = function(m) {
    return b(m) === o;
  }, oe.isStrictMode = function(m) {
    return b(m) === n;
  }, oe.isSuspense = function(m) {
    return b(m) === u;
  }, oe.isSuspenseList = function(m) {
    return b(m) === p;
  }, oe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === p || m === f || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === c || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === g || m.getModuleId !== void 0);
  }, oe.typeOf = b, oe;
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
var Hi;
function cb() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), g = !1, b = !1, m = !1, v = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function E(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || x || S === n || S === u || S === p || v || S === f || g || b || m || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === w || S.getModuleId !== void 0));
    }
    function h(S) {
      if (typeof S == "object" && S !== null) {
        var Ie = S.$$typeof;
        switch (Ie) {
          case e:
            var ke = S.type;
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
                  case l:
                  case d:
                  case c:
                  case i:
                    return A;
                  default:
                    return Ie;
                }
            }
          case t:
            return Ie;
        }
      }
    }
    var N = a, O = i, C = e, G = l, T = r, F = d, _ = c, U = t, X = o, J = n, V = u, $ = p, k = !1, z = !1;
    function q(S) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(S) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(S) {
      return h(S) === a;
    }
    function de(S) {
      return h(S) === i;
    }
    function ve(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ge(S) {
      return h(S) === l;
    }
    function ye(S) {
      return h(S) === r;
    }
    function be(S) {
      return h(S) === d;
    }
    function De(S) {
      return h(S) === c;
    }
    function le(S) {
      return h(S) === t;
    }
    function Se(S) {
      return h(S) === o;
    }
    function je(S) {
      return h(S) === n;
    }
    function D(S) {
      return h(S) === u;
    }
    function he(S) {
      return h(S) === p;
    }
    ae.ContextConsumer = N, ae.ContextProvider = O, ae.Element = C, ae.ForwardRef = G, ae.Fragment = T, ae.Lazy = F, ae.Memo = _, ae.Portal = U, ae.Profiler = X, ae.StrictMode = J, ae.Suspense = V, ae.SuspenseList = $, ae.isAsyncMode = q, ae.isConcurrentMode = W, ae.isContextConsumer = Z, ae.isContextProvider = de, ae.isElement = ve, ae.isForwardRef = ge, ae.isFragment = ye, ae.isLazy = be, ae.isMemo = De, ae.isPortal = le, ae.isProfiler = Se, ae.isStrictMode = je, ae.isSuspense = D, ae.isSuspenseList = he, ae.isValidElementType = E, ae.typeOf = h;
  }()), ae;
}
process.env.NODE_ENV === "production" ? vn.exports = sb() : vn.exports = cb();
var qi = vn.exports;
function fo(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function qr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || fo(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function lb(e, t, r) {
  qr(e, "mapStateToProps"), qr(t, "mapDispatchToProps"), qr(r, "mergeProps");
}
const ub = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function db(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function f(x, w) {
    return l = x, u = w, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function g() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function m() {
    const x = e(l, u), w = !a(x, p);
    return p = x, w && (d = r(p, c, u)), d;
  }
  function v(x, w) {
    const E = !i(w, u), h = !o(x, l, w, u);
    return l = x, u = w, E && h ? g() : E ? b() : h ? m() : d;
  }
  return function(x, w) {
    return s ? v(x, w) : f(x, w);
  };
}
function pb(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Ks(t, ub);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && lb(a, s, l), db(a, s, l, e, i);
}
function fb(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function mb(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Zs(e, t, r) {
  mb(e) || fo(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function yn(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Yi(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Qs(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = Yi(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = Yi(s), s = o(i, a)), process.env.NODE_ENV !== "production" && Zs(s, n, t), s;
    }, o;
  };
}
function mo(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function gb(e) {
  return e && typeof e == "object" ? yn((t) => (
    // @ts-ignore
    fb(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Qs(e, "mapDispatchToProps")
  ) : mo(e, "mapDispatchToProps") : yn((t) => ({
    dispatch: t
  }));
}
function bb(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Qs(e, "mapStateToProps")
  ) : mo(e, "mapStateToProps") : yn(() => ({}));
}
function hb(e, t, r) {
  return mt({}, r, e, t);
}
function vb(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && Zs(i, r, "mergeProps")), i;
    };
  };
}
function yb(e) {
  return e ? typeof e == "function" ? vb(e) : mo(e, "mergeProps") : () => hb;
}
function Eb() {
  const e = Hg();
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
const Ki = {
  notify() {
  },
  get: () => []
};
function xb(e, t) {
  let r, n = Ki, o = 0, i = !1;
  function a(b) {
    p();
    const m = n.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, m(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    g.onStateChange && g.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = Eb());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Ki);
  }
  function d() {
    i || (i = !0, p());
  }
  function f() {
    i && (i = !1, c());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return g;
}
const wb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", En = wb ? P.useLayoutEffect : P.useEffect;
function Xi(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Yr(e, t) {
  if (Xi(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Xi(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const Nb = ["reactReduxForwardedRef"];
let ec = Kg;
const Db = (e) => {
  ec = e;
}, Sb = [null, null], Ob = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Cb(e, t, r) {
  En(() => e(...t), r);
}
function _b(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Ib(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const f = () => {
    if (c || !s.current)
      return;
    const g = t.getState();
    let b, m;
    try {
      b = n(g, o.current);
    } catch (v) {
      m = v, d = v;
    }
    m || (d = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, p());
  };
  return r.onStateChange = f, r.trySubscribe(), f(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function Ab(e, t) {
  return e === t;
}
let Ji = !1;
function tc(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Ab,
  areOwnPropsEqual: i = Yr,
  areStatePropsEqual: a = Yr,
  areMergedPropsEqual: s = Yr,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = Yg
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Ji && (Ji = !0, fo('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = bb(e), d = gb(t), f = yb(r), g = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !qi.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Ob(b)}`);
    const m = b.displayName || b.name || "Component", v = `Connect(${m})`, x = {
      shouldHandleStateChanges: g,
      displayName: v,
      wrappedComponentName: m,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
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
          reactReduxForwardedRef: le
        } = h, Se = Ks(h, Nb);
        return [h.context, le, Se];
      }, [h]), G = P.useMemo(() => N && N.Consumer && // @ts-ignore
      qi.isContextConsumer(/* @__PURE__ */ P.createElement(N.Consumer, null)) ? N : p, [N, p]), T = P.useContext(G), F = !!h.store && !!h.store.getState && !!h.store.dispatch, _ = !!T && !!T.store;
      if (process.env.NODE_ENV !== "production" && !F && !_)
        throw new Error(`Could not find "store" in the context of "${v}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${v} in connect options.`);
      const U = F ? h.store : T.store, X = _ ? T.getServerState : U.getState, J = P.useMemo(() => pb(U.dispatch, x), [U]), [V, $] = P.useMemo(() => {
        if (!g) return Sb;
        const le = xb(U, F ? void 0 : T.subscription), Se = le.notifyNestedSubs.bind(le);
        return [le, Se];
      }, [U, F, T]), k = P.useMemo(() => F ? T : mt({}, T, {
        subscription: V
      }), [F, T, V]), z = P.useRef(), q = P.useRef(C), W = P.useRef(), Z = P.useRef(!1);
      P.useRef(!1);
      const de = P.useRef(!1), ve = P.useRef();
      En(() => (de.current = !0, () => {
        de.current = !1;
      }), []);
      const ge = P.useMemo(() => () => W.current && C === q.current ? W.current : J(U.getState(), C), [U, C]), ye = P.useMemo(() => (le) => V ? Ib(
        g,
        U,
        V,
        // @ts-ignore
        J,
        q,
        z,
        Z,
        de,
        W,
        $,
        le
      ) : () => {
      }, [V]);
      Cb(_b, [q, z, Z, C, W, $]);
      let be;
      try {
        be = ec(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ye,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ge,
          X ? () => J(X(), C) : ge
        );
      } catch (le) {
        throw ve.current && (le.message += `
The error may be correlated with this previous error:
${ve.current.stack}

`), le;
      }
      En(() => {
        ve.current = void 0, W.current = void 0, z.current = be;
      });
      const De = P.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ P.createElement(b, mt({}, be, {
          ref: O
        }))
      ), [O, b, be]);
      return P.useMemo(() => g ? /* @__PURE__ */ P.createElement(G.Provider, {
        value: k
      }, De) : De, [G, De, k]);
    }
    const E = P.memo(w);
    if (E.WrappedComponent = b, E.displayName = w.displayName = v, l) {
      const h = P.forwardRef(function(N, O) {
        return /* @__PURE__ */ P.createElement(E, mt({}, N, {
          reactReduxForwardedRef: O
        }));
      });
      return h.displayName = v, h.WrappedComponent = b, Ui(h, b);
    }
    return Ui(E, b);
  };
}
Db(lo.useSyncExternalStore);
zg(ga);
function Pb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function rc(e, t) {
  var r = Ae(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = j(!0), o = j(r), i = n.current || !!(t && o.current.inputs && Pb(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return me(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Rb(e, t) {
  return rc(function() {
    return e;
  }, t);
}
var Oe = rc, Ee = Rb, Tb = process.env.NODE_ENV === "production", Kr = "Invariant failed";
function Zi(e, t) {
  if (Tb)
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
}, nc = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Qi = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, Vb = function(e, t) {
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
}, go = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Xr : r, o = e.border, i = o === void 0 ? Xr : o, a = e.padding, s = a === void 0 ? Xr : a, l = pt(nc(t, n)), u = pt(Qi(t, i)), p = pt(Qi(u, s));
  return {
    marginBox: l,
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
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Zi(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Zi()), n;
}, $b = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Mb = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = Vb(r, t);
  return go({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, xn = function(e, t) {
  return t === void 0 && (t = $b()), Mb(e, t);
}, oc = function(e, t) {
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
  return go({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, ic = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return oc(t, r);
}, ea = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Lb(e, t) {
  return !!(e === t || ea(e) && ea(t));
}
function Bb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Lb(e[r], t[r]))
      return !1;
  return !0;
}
function _e(e, t) {
  t === void 0 && (t = Bb);
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
var Fb = function(e) {
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
const Gb = process.env.NODE_ENV === "production", kb = /[ \t]{2,}/g, Wb = /^[ \t]*/gm, ta = (e) => e.replace(kb, " ").replace(Wb, "").trim(), jb = (e) => ta(`
  %c@hello-pangea/dnd

  %c${ta(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Ub = (e) => [jb(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], zb = "__@hello-pangea/dnd-disable-dev-warnings";
function ac(e, t) {
  Gb || typeof window < "u" && window[zb] || console[e](...Ub(t));
}
const tt = ac.bind(null, "warn"), wn = ac.bind(null, "error");
function Hb() {
}
function qb(e, t) {
  return {
    ...e,
    ...t
  };
}
function Yb(e, t, r) {
  const n = t.map((o) => {
    const i = qb(r, o.options);
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
const Kb = process.env.NODE_ENV === "production", ra = "Invariant failed";
class Wt extends Error {
}
Wt.prototype.toString = function() {
  return this.message;
};
function B(e, t) {
  throw Kb ? new Wt(ra) : new Wt(`${ra}: ${t || ""}`);
}
class Zv extends R.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Hb, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && tt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Wt && (r.preventDefault(), process.env.NODE_ENV !== "production" && wn(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Yb(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Wt) {
      process.env.NODE_ENV !== "production" && wn(t.message), this.setState({});
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
}, Xb = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Jb = (e, t) => e.x === t.x && e.y === t.y, Zb = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Qb = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var eh = (e, t) => {
  const r = pt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const th = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), rh = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, nh = (e, t) => t ? th(e, t.scroll.diff.displacement) : e, oh = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, ih = (e, t) => t && t.shouldClipSubject ? eh(t.pageMarginBox, e) : pt(e);
var ah = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = nh(e.marginBox, n), i = oh(o, r, t), a = ih(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
_e((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
_e((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const sh = _e((e) => Object.values(e)), ch = _e((e) => Object.values(e));
_e((e, t) => ch(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function lh(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
_e((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const uh = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, dh = {
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
    point: Qb(e.line, r)
  };
});
var nr = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const ph = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), fh = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), bo = {
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
}, mh = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ot = `${mh.outOfTheWay}s ${bo.outOfTheWay}`, or = {
  fluid: `opacity ${ot}`,
  snap: `transform ${ot}, opacity ${ot}`,
  drop: (e) => {
    const t = `${e}s ${bo.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ot}`,
  placeholder: `height ${ot}, width ${ot}, margin ${ot}`
}, na = (e) => Jb(e, ut) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Nn = {
  moveTo: na,
  drop: (e, t) => {
    const r = na(e);
    if (r)
      return t ? `${r} scale(${jt.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var sc = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Xb({
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
}, gh = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot find document.documentElement") : B()), e;
}, bh = () => {
  const e = gh();
  return sc({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
_e((e) => sh(e).filter((t) => !(!t.isEnabled || !t.frame)));
const cc = "data-rfd", oa = (() => {
  const e = `${cc}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), ia = {
  contextId: `${cc}-scroll-container-context-id`
}, hh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Cn : me;
var _t = hh;
function vh(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var yh = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function lc(e) {
  return e instanceof yh(e).HTMLElement;
}
function Eh(e, t) {
  const r = `[${oa.contextId}="${e}"]`, n = vh(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && tt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(oa.draggableId) === t);
  return o ? lc(o) ? o : (process.env.NODE_ENV !== "production" && tt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && tt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var uc = R.createContext(null), xh = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot find document.body") : B()), e;
};
let wh = 0;
const dc = {
  separator: "::"
};
function Nh(e, t = dc) {
  return Oe(() => `${e}${t.separator}${wh++}`, [t.separator, e]);
}
function Dh(e, t = dc) {
  const r = R.useId();
  return Oe(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var pc = "useId" in R ? Dh : Nh, ho = R.createContext(null);
function fc(e) {
  process.env.NODE_ENV !== "production" && e();
}
function vo(e, t) {
  fc(() => {
    me(() => {
      try {
        e();
      } catch (r) {
        wn(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Sh(e) {
  const t = j(e);
  return me(() => {
    t.current = e;
  }), t;
}
function yo(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const aa = {
  dragging: 5e3,
  dropAnimating: 4500
}, Oh = (e, t) => t ? or.drop(t.duration) : e ? or.snap : or.fluid, Ch = (e, t) => {
  if (e)
    return t ? jt.opacity.drop : jt.opacity.combining;
}, _h = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Ih(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = _h(e), s = !!o, l = s ? Nn.drop(r, i) : Nn.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Oh(a, o),
    transform: l,
    opacity: Ch(i, s),
    zIndex: s ? aa.dropAnimating : aa.dragging,
    pointerEvents: "none"
  };
}
function Ah(e) {
  return {
    transform: Nn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Ph(e) {
  return e.type === "DRAGGING" ? Ih(e) : Ah(e);
}
function Rh(e, t, r = ut) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = oc(o, n), a = xn(i, r), s = {
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
function Th(e) {
  const t = pc("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Oe(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Ee((f) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot get dimension when no ref is set") : B()), Rh(r, g, f);
  }, [r, o]), p = Oe(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = j(p), d = j(!0);
  _t(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), _t(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const f = c.current;
    c.current = p, n.draggable.update(p, f);
  }, [p, n.draggable]);
}
var Eo = R.createContext(null);
function mc(e) {
  e && lc(e) || (process.env.NODE_ENV !== "production" ? B(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : B());
}
function Vh(e, t, r) {
  vo(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? B(!1, "Draggable requires a draggableId") : B(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? B(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : B(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? B(!1, `${n(o)} requires an integer index prop`) : B(!1)), e.mapped.type !== "DRAGGING" && (mc(r()), e.isEnabled && (Eh(t, o) || (process.env.NODE_ENV !== "production" ? B(!1, `${n(o)} Unable to find drag handle`) : B(!1))));
  });
}
function $h(e) {
  fc(() => {
    const t = j(e);
    vo(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? B(!1, "Draggable isClone prop value changed during component life") : B(!1));
    }, [e]);
  });
}
function pr(e) {
  const t = fr(e);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, "Could not find required context") : B()), t;
}
function Mh(e) {
  e.preventDefault();
}
const Lh = (e) => {
  const t = j(null), r = Ee((N = null) => {
    t.current = N;
  }, []), n = Ee(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = pr(ho), {
    type: s,
    droppableId: l
  } = pr(Eo), u = Oe(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: f,
    canDragInteractiveElements: g,
    isClone: b,
    mapped: m,
    dropAnimationFinished: v
  } = e;
  if (Vh(e, o, n), $h(b), !b) {
    const N = Oe(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: g,
      shouldRespectForcePress: f,
      isEnabled: d
    }), [u, a, n, g, f, d]);
    Th(N);
  }
  const x = Oe(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Mh
  } : null, [o, i, c, d]), w = Ee((N) => {
    m.type === "DRAGGING" && m.dropping && N.propertyName === "transform" && (R.version.startsWith("16") || R.version.startsWith("17") ? v() : _n(v));
  }, [v, m]), E = Oe(() => {
    const N = Ph(m), O = m.type === "DRAGGING" && m.dropping ? w : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: N,
        onTransitionEnd: O
      },
      dragHandleProps: x
    };
  }, [o, x, c, m, w, r]), h = Oe(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return R.createElement(R.Fragment, null, p(E, m.snapshot, h));
};
var Bh = Lh, gc = (e, t) => e === t, bc = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Fh = (e) => e.combine ? e.combine.draggableId : null, Gh = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function kh() {
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
  })), r = _e((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (yo(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = nr(n.impact), l = Gh(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = bc(l), c = Fh(l), d = {
        duration: n.dropDuration,
        curve: bo.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? jt.opacity.drop : null,
        scale: c ? jt.scale.drop : null
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
function hc(e = null) {
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
const Wh = {
  mapped: {
    type: "SECONDARY",
    offset: ut,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: hc(null)
  }
};
function jh() {
  const e = _e((i, a) => ({
    x: i,
    y: a
  })), t = _e(hc), r = _e((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(ut, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = lh(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = Zb(l.displacedBy.point), m = e(b.x, b.y);
      return r(m, d, !0);
    }
    if (p)
      return n(d);
    const f = s.displacedBy.point, g = e(f.x, f.y);
    return r(g, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (yo(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const Uh = () => {
  const e = kh(), t = jh();
  return (r, n) => e(r, n) || t(r, n) || Wh;
}, zh = {
  dropAnimationFinished: fh
}, Hh = tc(Uh, zh, null, {
  context: uc,
  areStatePropsEqual: gc
})(Bh);
var qh = Hh;
function Yh(e) {
  return pr(Eo).isUsingCloneFor === e.draggableId && !e.isClone ? null : R.createElement(qh, e);
}
const xo = (e) => (t) => e === t, Kh = xo("scroll"), Xh = xo("auto"), Jh = xo("visible"), sa = (e, t) => t(e.overflowX) || t(e.overflowY), Zh = (e, t) => t(e.overflowX) && t(e.overflowY), vc = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return sa(r, Kh) || sa(r, Xh);
}, Qh = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = xh(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, B()), !vc(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Zh(n, Jh) || process.env.NODE_ENV !== "production" && tt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, wo = (e) => e == null ? null : e === document.body ? Qh() ? e : null : e === document.documentElement ? null : vc(e) ? e : wo(e.parentElement);
var ev = (e) => {
  !e || !wo(e.parentElement) || process.env.NODE_ENV !== "production" && tt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Dn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const yc = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : yc(e.parentElement) : !1;
var tv = (e) => {
  const t = wo(e), r = yc(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, rv = ({
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
    } = s, f = sc({
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
        max: f,
        diff: {
          value: ut,
          displacement: ut
        }
      }
    };
  })(), u = o === "vertical" ? uh : dh, p = ah({
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
const nv = (e, t) => {
  const r = ic(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = nc({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return go({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var ov = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = nv(e, l), p = xn(u, n), c = (() => {
    if (!l)
      return null;
    const d = ic(l), f = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: xn(d, n),
      scroll: Dn(l),
      scrollSize: f,
      shouldClipSubject: s
    };
  })();
  return rv({
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
const iv = {
  passive: !1
}, av = {
  passive: !0
};
var ca = (e) => e.shouldPublishImmediately ? iv : av;
const er = (e) => e && e.env.closestScrollable || null;
function sv(e) {
  const t = j(null), r = pr(ho), n = pc("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Sh(e), s = Oe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = j(s), u = Oe(() => _e((E, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? B(!1, "Can only update scroll when dragging") : B());
    const N = {
      x: E,
      y: h
    };
    i.updateDroppableScroll(s.id, N);
  }), [s.id, i]), p = Ee(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? ut : Dn(E.env.closestScrollable);
  }, []), c = Ee(() => {
    const E = p();
    u(E.x, E.y);
  }, [p, u]), d = Oe(() => Fb(c), [c]), f = Ee(() => {
    const E = t.current, h = er(E);
    if (E && h || (process.env.NODE_ENV !== "production" ? B(!1, "Could not find scroll options while scrolling") : B()), E.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), g = Ee((E, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? B(!1, "Cannot collect a droppable while a drag is occurring") : B());
    const N = a.current, O = N.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot collect without a droppable ref") : B());
    const C = tv(O), G = {
      ref: O,
      descriptor: s,
      env: C,
      scrollOptions: h
    };
    t.current = G;
    const T = ov({
      ref: O,
      descriptor: s,
      env: C,
      windowScroll: E,
      direction: N.direction,
      isDropDisabled: N.isDropDisabled,
      isCombineEnabled: N.isCombineEnabled,
      shouldClipSubject: !N.ignoreContainerClipping
    }), F = C.closestScrollable;
    return F && (F.setAttribute(ia.contextId, r.contextId), F.addEventListener("scroll", f, ca(G.scrollOptions)), process.env.NODE_ENV !== "production" && ev(F)), T;
  }, [r.contextId, s, f, a]), b = Ee(() => {
    const E = t.current, h = er(E);
    return E && h || (process.env.NODE_ENV !== "production" ? B(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : B()), Dn(h);
  }, []), m = Ee(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot stop drag when no active drag") : B());
    const h = er(E);
    t.current = null, h && (d.cancel(), h.removeAttribute(ia.contextId), h.removeEventListener("scroll", f, ca(E.scrollOptions)));
  }, [f, d]), v = Ee((E) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot scroll when there is no drag") : B());
    const N = er(h);
    N || (process.env.NODE_ENV !== "production" ? B(!1, "Cannot scroll a droppable with no closest scrollable") : B()), N.scrollTop += E.y, N.scrollLeft += E.x;
  }, []), x = Oe(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: b,
    dragStopped: m,
    scroll: v
  }), [m, g, b, v]), w = Oe(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  _t(() => (l.current = w.descriptor, o.droppable.register(w), () => {
    t.current && (process.env.NODE_ENV !== "production" && tt("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(w);
  }), [x, s, m, w, i, o.droppable]), _t(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), _t(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Jr() {
}
const cv = {
  width: 0,
  height: 0,
  margin: rh
}, lv = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? cv : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, uv = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = lv({
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
    transition: r !== "none" ? or.placeholder : null
  };
}, dv = (e) => {
  const t = j(null), r = Ee(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ae(e.animate === "open");
  me(() => s ? n !== "open" ? (r(), l(!1), Jr) : t.current ? Jr : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Jr, [n, s, r]);
  const u = Ee((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = uv({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return R.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var pv = R.memo(dv);
function Zr(e) {
  return typeof e == "boolean";
}
function Qr(e, t) {
  t.forEach((r) => r(e));
}
const fv = [function({
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
  mc(e());
}], mv = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && tt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], gv = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? B(!1, "Must provide a clone render function (renderClone) for virtual lists") : B());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? B(!1, "Expected virtual list to not have a placeholder") : B());
}];
function bv(e) {
  vo(() => {
    Qr(e, fv), e.props.mode === "standard" && Qr(e, mv), e.props.mode === "virtual" && Qr(e, gv);
  });
}
class hv extends R.PureComponent {
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
const vv = (e) => {
  const t = fr(ho);
  t || (process.env.NODE_ENV !== "production" ? B(!1, "Could not find app context") : B());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = j(null), i = j(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: f,
    snapshot: g,
    useClone: b,
    updateViewportMaxScroll: m,
    getContainerForClone: v
  } = e, x = Ee(() => o.current, []), w = Ee((_ = null) => {
    o.current = _;
  }, []), E = Ee(() => i.current, []), h = Ee((_ = null) => {
    i.current = _;
  }, []);
  bv({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: E
  });
  const N = Ee(() => {
    n() && m({
      maxScroll: bh()
    });
  }, [n, m]);
  sv({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: f,
    ignoreContainerClipping: c,
    getDroppableRef: x
  });
  const O = Oe(() => R.createElement(hv, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: _,
    data: U,
    animate: X
  }) => R.createElement(pv, {
    placeholder: U,
    onClose: _,
    innerRef: h,
    animate: X,
    contextId: r,
    onTransitionEnd: N
  })), [r, N, e.placeholder, e.shouldAnimatePlaceholder, h]), C = Oe(() => ({
    innerRef: w,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, O, w]), G = b ? b.dragging.draggableId : null, T = Oe(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: G
  }), [s, G, l]);
  function F() {
    if (!b)
      return null;
    const {
      dragging: _,
      render: U
    } = b, X = R.createElement(Yh, {
      draggableId: _.draggableId,
      index: _.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (J, V) => U(J, V, _));
    return ma.createPortal(X, v());
  }
  return R.createElement(Eo.Provider, {
    value: T
  }, a(C, g), F());
};
var yv = vv;
function Ev() {
  return document.body || (process.env.NODE_ENV !== "production" ? B(!1, "document.body is not ready") : B()), document.body;
}
const la = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Ev
}, Ec = (e) => {
  let t = {
    ...e
  }, r;
  for (r in la)
    e[r] === void 0 && (t = {
      ...t,
      [r]: la[r]
    });
  return t;
}, en = (e, t) => e === t.droppable.type, ua = (e, t) => t.draggables[e.draggable.id], xv = () => {
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
  })), n = _e((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, f = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: f,
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
    const a = Ec(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (yo(o)) {
      const c = o.critical;
      if (!en(l, c))
        return t;
      const d = ua(c, o.dimensions), f = nr(o.impact) === s;
      return n(s, u, f, f, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!en(l, c.critical))
        return t;
      const d = ua(c.critical, o.dimensions);
      return n(s, u, bc(c.result) === s, nr(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!en(l, c.critical))
        return t;
      const d = nr(c.impact) === s, f = !!(c.impact.at && c.impact.at.type === "COMBINE"), g = c.critical.droppable.id === s;
      return d ? f ? e : t : g ? e : t;
    }
    return t;
  };
}, wv = {
  updateViewportMaxScroll: ph
};
tc(xv, wv, (e, t, r) => ({
  ...Ec(r),
  ...e,
  ...t
}), {
  context: uc,
  areStatePropsEqual: gc
})(yv);
var Sn = { exports: {} }, Ut = {};
Ut._ = Ut._interop_require_default = Nv;
function Nv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dv(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var tn = {}, rn = {}, da;
function Sv() {
  return da || (da = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "LoadableContext", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (/* @__PURE__ */ Ut._(R)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (n.displayName = "LoadableContext");
  }(rn)), rn;
}
var pa;
function Ov() {
  return pa || (pa = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const r = /* @__PURE__ */ Ut._(R), n = Sv();
    function o(g) {
      return g && g.default ? g.default : g;
    }
    const i = [], a = [];
    let s = !1;
    function l(g) {
      let b = g(), m = {
        loading: !0,
        loaded: null,
        error: null
      };
      return m.promise = b.then((v) => (m.loading = !1, m.loaded = v, v)).catch((v) => {
        throw m.loading = !1, m.error = v, v;
      }), m;
    }
    function u(g, b) {
      let m = Object.assign({
        loader: null,
        loading: null,
        delay: 200,
        timeout: null,
        webpack: null,
        modules: null
      }, b), v = null;
      function x() {
        if (!v) {
          const h = new p(g, m);
          v = {
            getCurrentValue: h.getCurrentValue.bind(h),
            subscribe: h.subscribe.bind(h),
            retry: h.retry.bind(h),
            promise: h.promise.bind(h)
          };
        }
        return v.promise();
      }
      if (typeof window > "u" && i.push(x), !s && typeof window < "u") {
        const h = m.webpack && typeof Dv.resolveWeak == "function" ? m.webpack() : m.modules;
        h && a.push((N) => {
          for (const O of h)
            if (N.includes(O))
              return x();
        });
      }
      function w() {
        x();
        const h = r.default.useContext(n.LoadableContext);
        h && Array.isArray(m.modules) && m.modules.forEach((N) => {
          h(N);
        });
      }
      function E(h, N) {
        w();
        const O = r.default.useSyncExternalStore(v.subscribe, v.getCurrentValue, v.getCurrentValue);
        return r.default.useImperativeHandle(N, () => ({
          retry: v.retry
        }), []), r.default.useMemo(() => O.loading || O.error ? /* @__PURE__ */ r.default.createElement(m.loading, {
          isLoading: O.loading,
          pastDelay: O.pastDelay,
          timedOut: O.timedOut,
          error: O.error,
          retry: v.retry
        }) : O.loaded ? /* @__PURE__ */ r.default.createElement(o(O.loaded), h) : null, [
          h,
          O
        ]);
      }
      return E.preload = () => x(), E.displayName = "LoadableComponent", /* @__PURE__ */ r.default.forwardRef(E);
    }
    class p {
      promise() {
        return this._res.promise;
      }
      retry() {
        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
          pastDelay: !1,
          timedOut: !1
        };
        const { _res: b, _opts: m } = this;
        b.loading && (typeof m.delay == "number" && (m.delay === 0 ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
          this._update({
            pastDelay: !0
          });
        }, m.delay)), typeof m.timeout == "number" && (this._timeout = setTimeout(() => {
          this._update({
            timedOut: !0
          });
        }, m.timeout))), this._res.promise.then(() => {
          this._update({}), this._clearTimeouts();
        }).catch((v) => {
          this._update({}), this._clearTimeouts();
        }), this._update({});
      }
      _update(b) {
        this._state = {
          ...this._state,
          error: this._res.error,
          loaded: this._res.loaded,
          loading: this._res.loading,
          ...b
        }, this._callbacks.forEach((m) => m());
      }
      _clearTimeouts() {
        clearTimeout(this._delay), clearTimeout(this._timeout);
      }
      getCurrentValue() {
        return this._state;
      }
      subscribe(b) {
        return this._callbacks.add(b), () => {
          this._callbacks.delete(b);
        };
      }
      constructor(b, m) {
        this._loadFn = b, this._opts = m, this._callbacks = /* @__PURE__ */ new Set(), this._delay = null, this._timeout = null, this.retry();
      }
    }
    function c(g) {
      return u(l, g);
    }
    function d(g, b) {
      let m = [];
      for (; g.length; ) {
        let v = g.pop();
        m.push(v(b));
      }
      return Promise.all(m).then(() => {
        if (g.length)
          return d(g, b);
      });
    }
    c.preloadAll = () => new Promise((g, b) => {
      d(i).then(g, b);
    }), c.preloadReady = (g) => (g === void 0 && (g = []), new Promise((b) => {
      const m = () => (s = !0, b());
      d(a, g).then(m, m);
    })), typeof window < "u" && (window.__NEXT_PRELOADREADY = c.preloadReady);
    const f = c;
  }(tn)), tn;
}
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(p, c) {
    for (var d in c) Object.defineProperty(p, d, {
      enumerable: !0,
      get: c[d]
    });
  }
  r(t, {
    /**
    * This function lets you dynamically import a component.
    * It uses [React.lazy()](https://react.dev/reference/react/lazy) with [Suspense](https://react.dev/reference/react/Suspense) under the hood.
    *
    * Read more: [Next.js Docs: `next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic)
    */
    default: function() {
      return u;
    },
    noSSR: function() {
      return l;
    }
  });
  const n = Ut, o = xc, i = /* @__PURE__ */ n._(Ov()), a = typeof window > "u";
  function s(p) {
    return {
      default: (p == null ? void 0 : p.default) || p
    };
  }
  function l(p, c) {
    if (delete c.webpack, delete c.modules, !a)
      return p(c);
    const d = c.loading;
    return () => /* @__PURE__ */ (0, o.jsx)(d, {
      error: null,
      isLoading: !0,
      pastDelay: !1,
      timedOut: !1
    });
  }
  function u(p, c) {
    let d = i.default, f = {
      // A loading component is not required, so we default it
      loading: (m) => {
        let { error: v, isLoading: x, pastDelay: w } = m;
        if (!w) return null;
        if (process.env.NODE_ENV !== "production") {
          if (x)
            return null;
          if (v)
            return /* @__PURE__ */ (0, o.jsxs)("p", {
              children: [
                v.message,
                /* @__PURE__ */ (0, o.jsx)("br", {}),
                v.stack
              ]
            });
        }
        return null;
      }
    };
    p instanceof Promise ? f.loader = () => p : typeof p == "function" ? f.loader = p : typeof p == "object" && (f = {
      ...f,
      ...p
    }), f = {
      ...f,
      ...c
    };
    const g = f.loader, b = () => g != null ? g().then(s) : Promise.resolve(s(() => null));
    return f.loadableGenerated && (f = {
      ...f,
      ...f.loadableGenerated
    }, delete f.loadableGenerated), typeof f.ssr == "boolean" && !f.ssr ? (delete f.webpack, delete f.modules, l(d, f)) : d({
      ...f,
      loader: b
    });
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Sn, Sn.exports);
var Cv = Sn.exports, _v = Cv;
const Iv = /* @__PURE__ */ Va(_v), Av = Iv(() => import("./index-5laWliL7.js").then((e) => e.i), {
  ssr: !1
}), Qv = ({
  value: e,
  onChange: t,
  error: r,
  readOnly: n = !1,
  className: o,
  taskList: i = !1,
  image: a = !1
}) => /* @__PURE__ */ xe(It, { children: [
  /* @__PURE__ */ I(
    Av,
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
          a ? ["image"] : [],
          ["clean"]
          // ["link"],
        ]
      } : {
        toolbar: [
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          a ? ["image"] : [],
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
        a ? "image" : ""
        // "link",
      ],
      className: `${o} w-full bg-primary-light rounded-[30px] overflow-hidden md:border-white md:rounded-[15px] text-black text-sm md:text-base !border-none break-all`
    }
  ),
  /* @__PURE__ */ I(Lg, { error: r })
] });
var On = /* @__PURE__ */ new Map(), tr = /* @__PURE__ */ new WeakMap(), fa = 0, Pv = void 0;
function Rv(e) {
  return e ? (tr.has(e) || (fa += 1, tr.set(e, fa.toString())), tr.get(e)) : "0";
}
function Tv(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Rv(e.root) : e[t]}`).toString();
}
function Vv(e) {
  const t = Tv(e);
  let r = On.get(t);
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
    }, On.set(t, r);
  }
  return r;
}
function $v(e, t, r = {}, n = Pv) {
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
  const { id: o, observer: i, elements: a } = Vv(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), On.delete(o));
  };
}
function Mv({
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
  const [c, d] = P.useState(null), f = P.useRef(u), [g, b] = P.useState({
    inView: !!s,
    entry: void 0
  });
  f.current = u, P.useEffect(
    () => {
      if (a || !c) return;
      let w;
      return w = $v(
        c,
        (E, h) => {
          b({
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
        l
      ), () => {
        w && w();
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
  const m = (p = g.entry) == null ? void 0 : p.target, v = P.useRef(void 0);
  !c && m && !i && !a && v.current !== m && (v.current = m, b({
    inView: !!s,
    entry: void 0
  }));
  const x = [d, g.inView, g.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const Lv = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = Ae(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return me(() => (window.addEventListener("scroll", o), () => {
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
}, ey = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: l, data: u } = e, p = u == null ? void 0 : u.pages.flatMap((f) => f), { ref: c, inView: d } = Mv();
  return me(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ xe(It, { children: [
    o && /* @__PURE__ */ I(Lv, { className: n }),
    /* @__PURE__ */ I(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(p != null && p.length) && p.map((f, g) => t(f, g))
      }
    ),
    /* @__PURE__ */ I(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: c,
        children: (s || l) && /* @__PURE__ */ I(In, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && /* @__PURE__ */ I("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, ty = () => {
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
  kv as B,
  Wv as C,
  Xv as D,
  An as E,
  At as I,
  zv as L,
  Hv as M,
  qv as S,
  Jv as T,
  Sa as W,
  jv as a,
  Uv as b,
  Kv as c,
  In as d,
  Yv as e,
  Qv as f,
  Va as g,
  ey as h,
  ty as i,
  Lv as j,
  Pa as u
};
