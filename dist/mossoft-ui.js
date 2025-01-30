import { jsx as U, jsxs as Je, Fragment as Rn } from "react/jsx-runtime";
import * as _ from "react";
import I, { useState as ze, useEffect as ce, useRef as M, useMemo as qb, useLayoutEffect as ar, useContext as Nt } from "react";
import Sr, { unstable_batchedUpdates as Or, flushSync as sr } from "react-dom";
const Vn = ({ name: e, className: t }) => /* @__PURE__ */ U("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ U(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), jp = ({ style: e, text: t }) => /* @__PURE__ */ Je("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ U("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ U("span", { className: "text-base", children: t })
] }), KV = ({
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
  const [u, p] = ze(""), c = () => {
    o && n === "1C" && (p("Отправляем запрос в 1С"), setTimeout(
      () => p(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  ce(() => {
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
  return /* @__PURE__ */ Je(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: d,
      ...l,
      children: [
        o ? /* @__PURE__ */ U(jp, { text: n === "1C" ? u : void 0 }) : e,
        a && !o && /* @__PURE__ */ U(
          Vn,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Da = ({ error: e }) => /* @__PURE__ */ U("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ U("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), XV = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: l
}) => /* @__PURE__ */ Je(Rn, { children: [
  /* @__PURE__ */ Je(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ U(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ U("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ U(
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
  a && /* @__PURE__ */ U(Da, { error: a })
] }), JV = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ U("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ U(Rn, { children: o.title ? /* @__PURE__ */ U(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ U(Rn, {}) })) });
function Ca(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var Wr;
(function(e) {
  e.event = "event", e.props = "prop";
})(Wr || (Wr = {}));
function It() {
}
function Yb(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function Zt(e) {
  return !!(e || "").match(/\d/);
}
function Qt(e) {
  return e == null;
}
function Kb(e) {
  return typeof e == "number" && isNaN(e);
}
function Gp(e) {
  return Qt(e) || Kb(e) || typeof e == "number" && !isFinite(e);
}
function kp(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Xb(e) {
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
function Jb(e, t, r) {
  var n = Xb(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function Qb(e) {
  var t = M(e);
  t.current = e;
  var r = M(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function _a(e, t) {
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
function Zb(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function Hp(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function bc(e, t) {
  return Array(t + 1).join(e);
}
function zp(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + bc("0", Math.abs(a)) + o : a >= s ? o = o + bc("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function hc(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = _a(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, l = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : l.toFixed(t), p = u.split("."), c = i;
  i && Number(p[0]) && (c = i.split("").reverse().reduce(function(b, f, y) {
    return b.length > y ? (Number(b[0]) + Number(f)).toString() + b.substring(1, b.length) : f + b;
  }, p[0]));
  var d = Hp(p[1] || "", t, r), g = s ? "-" : "", h = n ? "." : "";
  return "" + g + c + h + d;
}
function Rt(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var Up = Yb(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), eh = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function th(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function ro(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function rh() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function qp(e) {
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
function Yp(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function nh(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function oh(e, t, r, n, o, i, a) {
  a === void 0 && (a = nh);
  var s = o.findIndex(function(v) {
    return v;
  }), l = e.slice(0, s);
  !t && !r.startsWith(l) && (t = l, r = l + r, n = n + l.length);
  for (var u = r.length, p = e.length, c = {}, d = new Array(u), g = 0; g < u; g++) {
    d[g] = -1;
    for (var h = 0, b = p; h < b; h++) {
      var f = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: g,
        formattedValueIndex: h
      });
      if (f && c[h] !== !0) {
        d[g] = h, c[h] = !0;
        break;
      }
    }
  }
  for (var y = n; y < u && (d[y] === -1 || !i(r[y])); )
    y++;
  var O = y === u || d[y] === -1 ? p : d[y];
  for (y = n - 1; y > 0 && d[y] === -1; )
    y--;
  var E = y === -1 || d[y] === -1 ? 0 : d[y] + 1;
  return E > O ? O : n - E < O - n ? E : O;
}
function Mn(e, t, r, n) {
  var o = e.length;
  if (t = th(t, 0, o), n === "left") {
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
function ih(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(Zt(e[r]) || Zt(e[r - 1]));
  return t;
}
function Kp(e, t, r, n, o, i) {
  i === void 0 && (i = It);
  var a = Qb(function(h, b) {
    var f, y;
    return Gp(h) ? (y = "", f = "") : typeof h == "number" || b ? (y = typeof h == "number" ? zp(h) : h, f = n(y)) : (y = o(h, void 0), f = n(y)), { formattedValue: f, numAsString: y };
  }), s = ze(function() {
    return a(Qt(e) ? t : e, r);
  }), l = s[0], u = s[1], p = function(h, b) {
    h.formattedValue !== l.formattedValue && u({
      formattedValue: h.formattedValue,
      numAsString: h.value
    }), i(h, b);
  }, c = e, d = r;
  Qt(e) && (c = l.numAsString, d = !0);
  var g = a(c, d);
  return qb(function() {
    u(g);
  }, [g.formattedValue]), [l, p];
}
function ah(e) {
  return e.replace(/[^0-9]/g, "");
}
function sh(e) {
  return e;
}
function Xp(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = sh);
  var s = e.removeFormatting;
  s === void 0 && (s = ah);
  var l = e.defaultValue, u = e.valueIsNumericString, p = e.onValueChange, c = e.isAllowed, d = e.onChange;
  d === void 0 && (d = It);
  var g = e.onKeyDown;
  g === void 0 && (g = It);
  var h = e.onMouseUp;
  h === void 0 && (h = It);
  var b = e.onFocus;
  b === void 0 && (b = It);
  var f = e.onBlur;
  f === void 0 && (f = It);
  var y = e.value, O = e.getCaretBoundary;
  O === void 0 && (O = ih);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = Zt);
  var v = e.isCharacterSame, m = Ca(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), x = Kp(y, l, !!u, a, s, p), N = x[0], C = N.formattedValue, V = N.numAsString, A = x[1], $ = M(), P = M({ formattedValue: C, numAsString: V }), T = function(j, X) {
    P.current = { formattedValue: j.formattedValue, numAsString: j.value }, A(j, X);
  }, k = ze(!1), z = k[0], R = k[1], B = M(null), F = M({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ce(function() {
    return R(!0), function() {
      clearTimeout(F.current.setCaretTimeout), clearTimeout(F.current.focusTimeout);
    };
  }, []);
  var G = a, H = function(j, X) {
    var pe = parseFloat(X);
    return {
      formattedValue: j,
      value: X,
      floatValue: isNaN(pe) ? void 0 : pe
    };
  }, L = function(j, X, pe) {
    j.selectionStart === 0 && j.selectionEnd === j.value.length || (Rt(j, X), F.current.setCaretTimeout = setTimeout(function() {
      j.value === pe && j.selectionStart !== X && Rt(j, X);
    }, 0));
  }, q = function(j, X, pe) {
    return Mn(j, X, O(j), pe);
  }, K = function(j, X, pe) {
    var ke = O(X), pt = oh(X, C, j, pe, ke, E, v);
    return pt = Mn(X, pt, ke), pt;
  }, ne = function(j) {
    var X = j.formattedValue;
    X === void 0 && (X = "");
    var pe = j.input, ke = j.source, pt = j.event, He = j.numAsString, Fe;
    if (pe) {
      var Ct = j.inputValue || pe.value, Pt = ro(pe);
      pe.value = X, Fe = K(Ct, X, Pt), Fe !== void 0 && L(pe, Fe, X);
    }
    X !== C && T(H(X, He), { event: pt, source: ke });
  };
  ce(function() {
    var j = P.current, X = j.formattedValue, pe = j.numAsString;
    (C !== X || V !== pe) && T(H(C, V), {
      event: void 0,
      source: Wr.props
    });
  }, [C, V]);
  var ae = B.current ? ro(B.current) : void 0, ue = typeof window < "u" ? ar : ce;
  ue(function() {
    var j = B.current;
    if (C !== P.current.formattedValue && j) {
      var X = K(P.current.formattedValue, C, ae);
      j.value = C, L(j, X, C);
    }
  }, [C]);
  var J = function(j, X, pe) {
    var ke = X.target, pt = $.current ? eh($.current, ke.selectionEnd) : Up(C, j), He = Object.assign(Object.assign({}, pt), { lastValue: C }), Fe = s(j, He), Ct = G(Fe);
    if (Fe = s(Ct, void 0), c && !c(H(Ct, Fe))) {
      var Pt = X.target, At = ro(Pt), to = K(j, C, At);
      return Pt.value = C, L(Pt, to, C), !1;
    }
    return ne({
      formattedValue: Ct,
      numAsString: Fe,
      inputValue: j,
      event: X,
      source: pe,
      input: X.target
    }), !0;
  }, oe = function(j, X) {
    X === void 0 && (X = 0);
    var pe = j.selectionStart, ke = j.selectionEnd;
    $.current = { selectionStart: pe, selectionEnd: ke + X };
  }, W = function(j) {
    var X = j.target, pe = X.value, ke = J(pe, j, Wr.event);
    ke && d(j), $.current = void 0;
  }, ie = function(j) {
    var X = j.target, pe = j.key, ke = X.selectionStart, pt = X.selectionEnd, He = X.value;
    He === void 0 && (He = "");
    var Fe;
    pe === "ArrowLeft" || pe === "Backspace" ? Fe = Math.max(ke - 1, 0) : pe === "ArrowRight" ? Fe = Math.min(ke + 1, He.length) : pe === "Delete" && (Fe = ke);
    var Ct = 0;
    pe === "Delete" && ke === pt && (Ct = 1);
    var Pt = pe === "ArrowLeft" || pe === "ArrowRight";
    if (Fe === void 0 || ke !== pt && !Pt) {
      g(j), oe(X, Ct);
      return;
    }
    var At = Fe;
    if (Pt) {
      var to = pe === "ArrowLeft" ? "left" : "right";
      At = q(He, Fe, to), At !== Fe && j.preventDefault();
    } else pe === "Delete" && !E(He[Fe]) ? At = q(He, Fe, "right") : pe === "Backspace" && !E(He[Fe]) && (At = q(He, Fe, "left"));
    At !== Fe && L(X, At, He), g(j), oe(X, Ct);
  }, We = function(j) {
    var X = j.target, pe = function() {
      var ke = X.selectionStart, pt = X.selectionEnd, He = X.value;
      if (He === void 0 && (He = ""), ke === pt) {
        var Fe = q(He, ke);
        Fe !== ke && L(X, Fe, He);
      }
    };
    pe(), requestAnimationFrame(function() {
      pe();
    }), h(j), oe(X);
  }, w = function(j) {
    j.persist && j.persist();
    var X = j.target, pe = j.currentTarget;
    B.current = X, F.current.focusTimeout = setTimeout(function() {
      var ke = X.selectionStart, pt = X.selectionEnd, He = X.value;
      He === void 0 && (He = "");
      var Fe = q(He, ke);
      Fe !== ke && !(ke === 0 && pt === He.length) && L(X, Fe, He), b(Object.assign(Object.assign({}, j), { currentTarget: pe }));
    }, 0);
  }, le = function(j) {
    B.current = null, clearTimeout(F.current.focusTimeout), clearTimeout(F.current.setCaretTimeout), f(j);
  }, S = z && rh() ? "numeric" : void 0, se = Object.assign({ inputMode: S }, m, {
    type: t,
    value: C,
    onChange: W,
    onKeyDown: ie,
    onMouseUp: We,
    onFocus: w,
    onBlur: le
  });
  if (r === "text")
    return o ? I.createElement(I.Fragment, null, o(C, m) || null) : I.createElement("span", Object.assign({}, m, { ref: i }), C);
  if (n) {
    var me = n;
    return I.createElement(me, Object.assign({}, se, { ref: i }));
  }
  return I.createElement("input", Object.assign({}, se, { ref: i }));
}
function vc(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = Yn(t), u = l.thousandSeparator, p = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && n, d = _a(e, a), g = d.beforeDecimal, h = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (h = Hp(h, r, !!n)), u && (g = Jb(g, u, s)), o && (g = o + g), i && (h = h + i), b && (g = "-" + g), e = g + (c && p || "") + h, e;
}
function Yn(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function ch(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function lh(e, t) {
  return new RegExp("(^-)|[0-9]|" + kp(e), "g");
}
function uh(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function dh(e, t, r) {
  var n;
  t === void 0 && (t = qp(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, u = t.to, p = u.start, c = u.end, d = Yn(r), g = d.allowedDecimalSeparators, h = d.decimalSeparator, b = e[c] === h;
  if (Zt(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - p === 1 && g.indexOf(e[p]) !== -1) {
    var f = s === 0 ? "" : h;
    e = e.substring(0, p) + f + e.substring(p + 1, e.length);
  }
  var y = function(B, F, G) {
    var H = !1, L = !1;
    i.startsWith("-") ? H = !1 : B.startsWith("--") ? (H = !1, L = !0) : a.startsWith("-") && B.length === a.length ? H = !1 : B[0] === "-" && (H = !0);
    var q = H ? 1 : 0;
    return L && (q = 2), q && (B = B.substring(q), F -= q, G -= q), { value: B, start: F, end: G, hasNegation: H };
  }, O = y(e, p, c), E = O.hasNegation;
  n = O, e = n.value, p = n.start, c = n.end;
  var v = y(t.lastValue, l.start, l.end), m = v.start, x = v.end, N = v.value, C = e.substring(p, c);
  e.length && N.length && (m > N.length - a.length || x < i.length) && !(C && a.startsWith(C)) && (e = N);
  var V = 0;
  e.startsWith(i) ? V += i.length : p < i.length && (V = p), e = e.substring(V), c -= V;
  var A = e.length, $ = e.length - a.length;
  e.endsWith(a) ? A = $ : (c > $ || c > e.length - a.length) && (A = c), e = e.substring(0, A), e = ch(E ? "-" + e : e, o), e = (e.match(lh(h)) || []).join("");
  var P = e.indexOf(h);
  e = e.replace(new RegExp(kp(h), "g"), function(B, F) {
    return F === P ? "." : "";
  });
  var T = _a(e, o), k = T.beforeDecimal, z = T.afterDecimal, R = T.addNegation;
  return u.end - u.start < l.end - l.start && k === "" && b && !parseFloat(z) && (e = R ? "-" : ""), e;
}
function ph(e, t) {
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
function fh(e) {
  var t = Yn(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function mh(e) {
  e = fh(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = It);
  var i = e.onBlur;
  i === void 0 && (i = It);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var p = e.defaultValue, c = e.value, d = e.valueIsNumericString, g = e.onValueChange, h = Ca(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = Yn(e), f = b.decimalSeparator, y = b.allowedDecimalSeparators, O = function(R) {
    return vc(R, e);
  }, E = function(R, B) {
    return dh(R, B, e);
  }, v = Qt(c) ? p : c, m = d ?? uh(v, u, t);
  Qt(c) ? Qt(p) || (m = m || typeof p == "number") : m = m || typeof c == "number";
  var x = function(R) {
    return Gp(R) ? R : (typeof R == "number" && (R = zp(R)), m && typeof s == "number" ? hc(R, s, !!l) : R);
  }, N = Kp(x(c), x(p), !!m, O, E, g), C = N[0], V = C.numAsString, A = C.formattedValue, $ = N[1], P = function(R) {
    var B = R.target, F = R.key, G = B.selectionStart, H = B.selectionEnd, L = B.value;
    if (L === void 0 && (L = ""), (F === "Backspace" || F === "Delete") && H < u.length) {
      R.preventDefault();
      return;
    }
    if (G !== H) {
      o(R);
      return;
    }
    F === "Backspace" && L[0] === "-" && G === u.length + 1 && r && Rt(B, 1), s && l && (F === "Backspace" && L[G - 1] === f ? (Rt(B, G - 1), R.preventDefault()) : F === "Delete" && L[G] === f && R.preventDefault()), y != null && y.includes(F) && L[G] === f && Rt(B, G + 1);
    var q = a === !0 ? "," : a;
    F === "Backspace" && L[G - 1] === q && Rt(B, G - 1), F === "Delete" && L[G] === q && Rt(B, G + 1), o(R);
  }, T = function(R) {
    var B = V;
    if (B.match(/\d/g) || (B = ""), n || (B = Zb(B)), l && s && (B = hc(B, s, l)), B !== V) {
      var F = vc(B, e);
      $({
        formattedValue: F,
        value: B,
        floatValue: parseFloat(B)
      }, {
        event: R,
        source: Wr.event
      });
    }
    i(R);
  }, k = function(R) {
    return R === f ? !0 : Zt(R);
  }, z = function(R) {
    var B = R.currentValue, F = R.lastValue, G = R.formattedValue, H = R.currentValueIndex, L = R.formattedValueIndex, q = B[H], K = G[L], ne = Up(F, B), ae = ne.to, ue = function(J) {
      return E(J).indexOf(".") + u.length;
    };
    return c === 0 && l && s && B[ae.start] === f && ue(B) < H && ue(G) > L ? !1 : H >= ae.start && H < ae.end && y && y.includes(q) && K === f ? !0 : q === K;
  };
  return Object.assign(Object.assign({}, h), {
    value: A,
    valueIsNumericString: !1,
    isValidInputCharacter: k,
    isCharacterSame: z,
    onValueChange: $,
    format: O,
    removeFormatting: E,
    getCaretBoundary: function(R) {
      return ph(R, e);
    },
    onKeyDown: P,
    onBlur: T
  });
}
function gh(e) {
  var t = mh(e);
  return I.createElement(Xp, Object.assign({}, t));
}
function bh(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), l = 0, u = r.length; l < u; l++)
    r[l] === i && (s[l] = e[a] || Yp(o, a), a += 1);
  return s.join("");
}
function hh(e, t, r) {
  t === void 0 && (t = qp(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(f) {
    return n[f] === o;
  }, u = function(f, y) {
    for (var O = "", E = 0; E < f.length; E++)
      l(y + E) && Zt(f[E]) && (O += f[E]);
    return O;
  }, p = function(f) {
    return f.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return p(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var c = "", d = 0; d < e.length; d++)
      if (l(d))
        Zt(e[d]) && (c += e[d]);
      else if (e[d] !== n[d])
        return p(e);
    return c;
  }
  var g = s.substring(0, i.start), h = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(g, 0) + p(h) + u(b, i.end);
}
function vh(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(d, g) {
    var h = void 0;
    d === o && (a++, h = Yp(n, a - 1), s === -1 && e[g] === h && (s = g)), l[g] = h;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== l[d];
  }, p = 0, c = i.length; p < c; p++)
    i[p] = p === s || u(p) || u(p - 1);
  return i[r.indexOf(o)] = !0, i;
}
function yh(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Eh(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function xh(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = It);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = Ca(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  yh(e);
  var u = function(h) {
    return vh(h, e);
  }, p = function(h) {
    var b = h.key, f = h.target, y = f.selectionStart, O = f.selectionEnd, E = f.value;
    if (y !== O) {
      n(h);
      return;
    }
    var v = y;
    if (b === "Backspace" || b === "Delete") {
      var m = "right";
      if (b === "Backspace") {
        for (; v > 0 && t[v - 1] !== o; )
          v--;
        m = "left";
      } else {
        for (var x = t.length; v < x && t[v] !== o; )
          v++;
        m = "right";
      }
      v = Mn(E, v, u(E), m);
    } else t[v] !== o && b !== "ArrowLeft" && b !== "ArrowRight" && (v = Mn(E, v + 1, u(E), "right"));
    v !== y && Rt(f, v), n(h);
  }, c = Qt(i) ? a : i, d = s ?? Eh(c, t), g = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(h) {
      return bh(h, g);
    },
    removeFormatting: function(h, b) {
      return hh(h, b, g);
    },
    getCaretBoundary: u,
    onKeyDown: p
  });
}
function wh(e) {
  var t = xh(e);
  return I.createElement(Xp, Object.assign({}, t));
}
const Sh = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, QV = ({
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
  const d = "!border-danger", { error: g } = r;
  return /* @__PURE__ */ Je("label", { children: [
    p && /* @__PURE__ */ U("span", { className: `text-primary ${s}`, children: p }),
    i ? /* @__PURE__ */ U(
      wh,
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
        className: `${g ? d : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`,
        format: i,
        ...c
      }
    ) : e === "number" ? /* @__PURE__ */ Je(
      "div",
      {
        className: `${g ? d : ""} ${a} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ U(
            gh,
            {
              decimalScale: l,
              onValueChange: (f) => {
                var y;
                return t == null ? void 0 : t.onChange((y = f.value.replace("_", "")) == null ? void 0 : y.toString());
              },
              value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`,
              ...c,
              ...Sh.number
            }
          ),
          n ? /* @__PURE__ */ U("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ U(
      "input",
      {
        ...t,
        ...c,
        type: e,
        className: `${g ? d : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`
      }
    ),
    g && /* @__PURE__ */ U(Da, { error: g })
  ] });
}, Jp = ({
  children: e,
  className: t
}) => /* @__PURE__ */ U("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), ZV = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = ze(null);
  return /* @__PURE__ */ U(Jp, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ U("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ Je(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ U("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ U("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, Ia = "-", Oh = (e) => {
  const t = Dh(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Ia);
      return s[0] === "" && s.length !== 1 && s.shift(), Qp(s, t) || Nh(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, Qp = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Qp(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Ia);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, yc = /^\[(.+)\]$/, Nh = (e) => {
  if (yc.test(e)) {
    const t = yc.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Dh = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return _h(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    wi(a, n, i, t);
  }), n;
}, wi = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Ec(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ch(o)) {
        wi(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      wi(a, Ec(t, i), r, n);
    });
  });
}, Ec = (e, t) => {
  let r = e;
  return t.split(Ia).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ch = (e) => e.isThemeGetter, _h = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, Ih = (e) => {
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
}, Zp = "!", Ph = (e) => {
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
    const d = l.length === 0 ? s : s.substring(p), g = d.startsWith(Zp), h = g ? d.substring(1) : d, b = c && c > p ? c - p : void 0;
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
}, Ah = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, $h = (e) => ({
  cache: Ih(e.cacheSize),
  parseClassName: Ph(e),
  ...Oh(e)
}), Th = /\s+/, Rh = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(Th);
  let s = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const u = a[l], {
      modifiers: p,
      hasImportantModifier: c,
      baseClassName: d,
      maybePostfixModifierPosition: g
    } = r(u);
    let h = !!g, b = n(h ? d.substring(0, g) : d);
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
    const f = Ah(p).join(":"), y = c ? f + Zp : f, O = y + b;
    if (i.includes(O))
      continue;
    i.push(O);
    const E = o(b, h);
    for (let v = 0; v < E.length; ++v) {
      const m = E[v];
      i.push(y + m);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Vh() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = ef(t)) && (n && (n += " "), n += r);
  return n;
}
const ef = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = ef(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Mh(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const u = t.reduce((p, c) => c(p), e());
    return r = $h(u), n = r.cache.get, o = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const u = n(l);
    if (u)
      return u;
    const p = Rh(l, r);
    return o(l, p), p;
  }
  return function() {
    return i(Vh.apply(null, arguments));
  };
}
const Ge = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, tf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lh = /^\d+\/\d+$/, Bh = /* @__PURE__ */ new Set(["px", "full", "screen"]), Fh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Gh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, kh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _t = (e) => mr(e) || Bh.has(e) || Lh.test(e), $t = (e) => Nr(e, "length", Jh), mr = (e) => !!e && !Number.isNaN(Number(e)), no = (e) => Nr(e, "number", mr), _r = (e) => !!e && Number.isInteger(Number(e)), Hh = (e) => e.endsWith("%") && mr(e.slice(0, -1)), de = (e) => tf.test(e), Tt = (e) => Fh.test(e), zh = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Uh = (e) => Nr(e, zh, rf), qh = (e) => Nr(e, "position", rf), Yh = /* @__PURE__ */ new Set(["image", "url"]), Kh = (e) => Nr(e, Yh, Zh), Xh = (e) => Nr(e, "", Qh), Ir = () => !0, Nr = (e, t, r) => {
  const n = tf.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Jh = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wh.test(e) && !jh.test(e)
), rf = () => !1, Qh = (e) => Gh.test(e), Zh = (e) => kh.test(e), ev = () => {
  const e = Ge("colors"), t = Ge("spacing"), r = Ge("blur"), n = Ge("brightness"), o = Ge("borderColor"), i = Ge("borderRadius"), a = Ge("borderSpacing"), s = Ge("borderWidth"), l = Ge("contrast"), u = Ge("grayscale"), p = Ge("hueRotate"), c = Ge("invert"), d = Ge("gap"), g = Ge("gradientColorStops"), h = Ge("gradientColorStopPositions"), b = Ge("inset"), f = Ge("margin"), y = Ge("opacity"), O = Ge("padding"), E = Ge("saturate"), v = Ge("scale"), m = Ge("sepia"), x = Ge("skew"), N = Ge("space"), C = Ge("translate"), V = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", de, t], P = () => [de, t], T = () => ["", _t, $t], k = () => ["auto", mr, de], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", de], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [mr, de];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ir],
      spacing: [_t, $t],
      blur: ["none", "", Tt, de],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Tt, de],
      borderSpacing: P(),
      borderWidth: T(),
      contrast: L(),
      grayscale: G(),
      hueRotate: L(),
      invert: G(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Hh, $t],
      inset: $(),
      margin: $(),
      opacity: L(),
      padding: P(),
      saturate: L(),
      scale: L(),
      sepia: G(),
      skew: L(),
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
        aspect: ["auto", "square", "video", de]
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
        columns: [Tt]
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
        object: [...z(), de]
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
        z: ["auto", _r, de]
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
        flex: ["1", "auto", "initial", "none", de]
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
        order: ["first", "last", "none", _r, de]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ir]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", _r, de]
        }, de]
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
        "grid-rows": [Ir]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [_r, de]
        }, de]
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
        "auto-cols": ["auto", "min", "max", "fr", de]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", de]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", de, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [de, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [de, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Tt]
        }, Tt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [de, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [de, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [de, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [de, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Tt, $t]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", no]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ir]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", de]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", mr, no]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _t, de]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", de]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", de]
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
        decoration: ["auto", "from-font", _t, $t]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", _t, de]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de]
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
        content: ["none", de]
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
        bg: [...z(), qh]
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
        bg: ["auto", "cover", "contain", Uh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Kh]
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
        "outline-offset": [_t, de]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [_t, $t]
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
        "ring-offset": [_t, $t]
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
        shadow: ["", "inner", "none", Tt, Xh]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ir]
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
        "mix-blend": [...B(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        "drop-shadow": ["", "none", Tt, de]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", de]
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
        ease: ["linear", "in", "out", "in-out", de]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", de]
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
        rotate: [_r, de]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", de]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de]
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
        "will-change": ["auto", "scroll", "contents", "transform", de]
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
        stroke: [_t, $t, no]
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
}, tv = /* @__PURE__ */ Mh(ev);
function nf(e, t) {
  const [r, n] = ze(e);
  return ce(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const eM = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = ze(!1), [a, s] = ze(""), l = nf(a, 100), u = M(null);
  ce(() => {
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
  return /* @__PURE__ */ Je("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ Je("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ U(
        Vn,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ U(
        "input",
        {
          ...n,
          ref: u,
          className: tv(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && a || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (c) => {
              var d;
              return (d = e.find((g) => g.value === c)) == null ? void 0 : d.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (c) => s(c.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ U("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (c) => c.label.toLowerCase().includes(l.toLowerCase())
    ).map((c) => {
      var d;
      return /* @__PURE__ */ U(
        "li",
        {
          onClick: () => p(c.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ Je("div", { className: "flex flex-row", children: [
            c.icon && /* @__PURE__ */ U(Vn, { name: c.icon }),
            /* @__PURE__ */ U(
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
}, tM = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = ze(r), s = nf(i, 300);
  return ce(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ Je("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ U(
      Vn,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ U(
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
}, rM = ({
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
}) => /* @__PURE__ */ Je("label", { children: [
  l && /* @__PURE__ */ U("span", { className: `text-primary ${i}`, children: l }),
  /* @__PURE__ */ U(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ Je(
        "select",
        {
          ...n,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ U("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((p, c) => /* @__PURE__ */ U("option", { value: p.value, className: "text-black", children: p.label }, c))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ U(Da, { error: o == null ? void 0 : o.error })
] });
function jr(e) {
  "@babel/helpers - typeof";
  return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jr(e);
}
function rv(e, t) {
  if (jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nv(e) {
  var t = rv(e, "string");
  return jr(t) == "symbol" ? t : t + "";
}
function ov(e, t, r) {
  return (t = nv(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function xc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xc(Object(r), !0).forEach(function(n) {
      ov(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ft(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Sc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), oo = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Oc = {
  INIT: "@@redux/INIT" + oo(),
  REPLACE: "@@redux/REPLACE" + oo(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + oo();
  }
};
function iv(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function av(e) {
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
  if (lv(e)) return "date";
  if (cv(e)) return "error";
  var r = sv(e);
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
function sv(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function cv(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function lv(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Xt(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = av(e)), t;
}
function of(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? ft(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ft(1) : "Expected the enhancer to be a function. Instead, received: '" + Xt(r) + "'");
    return r(of)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ft(2) : "Expected the root reducer to be a function. Instead, received: '" + Xt(e) + "'");
  var o = e, i = t, a = [], s = a, l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function p() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ft(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ft(4) : "Expected the listener to be a function. Instead, received: '" + Xt(b) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ft(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var f = !0;
    return u(), s.push(b), function() {
      if (f) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? ft(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        f = !1, u();
        var O = s.indexOf(b);
        s.splice(O, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!iv(b))
      throw new Error(process.env.NODE_ENV === "production" ? ft(7) : "Actions must be plain objects. Instead, the actual type was: '" + Xt(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? ft(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ft(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = o(i, b);
    } finally {
      l = !1;
    }
    for (var f = a = s, y = 0; y < f.length; y++) {
      var O = f[y];
      O();
    }
    return b;
  }
  function g(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ft(10) : "Expected the nextReducer to be a function. Instead, received: '" + Xt(b));
    o = b, d({
      type: Oc.REPLACE
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
      subscribe: function(O) {
        if (typeof O != "object" || O === null)
          throw new Error(process.env.NODE_ENV === "production" ? ft(11) : "Expected the observer to be an object. Instead, received: '" + Xt(O) + "'");
        function E() {
          O.next && O.next(p());
        }
        E();
        var v = f(E);
        return {
          unsubscribe: v
        };
      }
    }, b[Sc] = function() {
      return this;
    }, b;
  }
  return d({
    type: Oc.INIT
  }), n = {
    dispatch: d,
    subscribe: c,
    getState: p,
    replaceReducer: g
  }, n[Sc] = h, n;
}
function Nc(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Dc(e, t) {
  if (typeof e == "function")
    return Nc(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? ft(16) : "bindActionCreators expected an object or a function, but instead received: '" + Xt(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = Nc(o, t));
  }
  return r;
}
function af() {
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
function uv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? ft(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = af.apply(void 0, s)(o.dispatch), wc(wc({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function dv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Si = { exports: {} }, io = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc;
function pv() {
  if (Cc) return io;
  Cc = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var g = d(), h = n({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, g, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var g = d();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return io.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, io;
}
var ao = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c;
function fv() {
  return _c || (_c = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
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
      var y = f[0].inst, O = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && O({ inst: y });
        },
        [g, b, h]
      ), s(
        function() {
          return r(y) && O({ inst: y }), g(function() {
            r(y) && O({ inst: y });
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
    function n(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    ao.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ao;
}
process.env.NODE_ENV === "production" ? Si.exports = pv() : Si.exports = fv();
var Pa = Si.exports, so = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic;
function mv() {
  if (Ic) return so;
  Ic = 1;
  var e = I, t = Pa;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return so.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!O) {
            if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var O = !1, E, v, m = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          m === null ? void 0 : function() {
            return y(m());
          }
        ];
      },
      [p, c, d, g]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, so;
}
var co = {};
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
function gv() {
  return Pc || (Pc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = Pa, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    co.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!O) {
              if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var O = !1, E, v, m = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            m === null ? void 0 : function() {
              return y(m());
            }
          ];
        },
        [p, c, d, g]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), co;
}
process.env.NODE_ENV === "production" ? mv() : gv();
function bv(e) {
  e();
}
let sf = bv;
const hv = (e) => sf = e, vv = () => sf, Ac = Symbol.for("react-redux-context"), $c = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function yv() {
  var e;
  if (!_.createContext) return {};
  const t = (e = $c[Ac]) != null ? e : $c[Ac] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const cf = /* @__PURE__ */ yv(), Ev = () => {
  throw new Error("uSES not initialized!");
};
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vt.apply(null, arguments);
}
function lf(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Oi = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function xv() {
  if (Tc) return ge;
  Tc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case p:
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
  function v(m) {
    return E(m) === u;
  }
  return ge.AsyncMode = l, ge.ConcurrentMode = u, ge.ContextConsumer = s, ge.ContextProvider = a, ge.Element = t, ge.ForwardRef = p, ge.Fragment = n, ge.Lazy = h, ge.Memo = g, ge.Portal = r, ge.Profiler = i, ge.StrictMode = o, ge.Suspense = c, ge.isAsyncMode = function(m) {
    return v(m) || E(m) === l;
  }, ge.isConcurrentMode = v, ge.isContextConsumer = function(m) {
    return E(m) === s;
  }, ge.isContextProvider = function(m) {
    return E(m) === a;
  }, ge.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, ge.isForwardRef = function(m) {
    return E(m) === p;
  }, ge.isFragment = function(m) {
    return E(m) === n;
  }, ge.isLazy = function(m) {
    return E(m) === h;
  }, ge.isMemo = function(m) {
    return E(m) === g;
  }, ge.isPortal = function(m) {
    return E(m) === r;
  }, ge.isProfiler = function(m) {
    return E(m) === i;
  }, ge.isStrictMode = function(m) {
    return E(m) === o;
  }, ge.isSuspense = function(m) {
    return E(m) === c;
  }, ge.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === o || m === c || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === p || m.$$typeof === f || m.$$typeof === y || m.$$typeof === O || m.$$typeof === b);
  }, ge.typeOf = E, ge;
}
var be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc;
function wv() {
  return Rc || (Rc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === u || w === i || w === o || w === c || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === f || w.$$typeof === y || w.$$typeof === O || w.$$typeof === b);
    }
    function v(w) {
      if (typeof w == "object" && w !== null) {
        var le = w.$$typeof;
        switch (le) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return S;
              default:
                var se = S && S.$$typeof;
                switch (se) {
                  case s:
                  case p:
                  case h:
                  case g:
                  case a:
                    return se;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = g, k = r, z = i, R = o, B = c, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(w) || v(w) === l;
    }
    function H(w) {
      return v(w) === u;
    }
    function L(w) {
      return v(w) === s;
    }
    function q(w) {
      return v(w) === a;
    }
    function K(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function ne(w) {
      return v(w) === p;
    }
    function ae(w) {
      return v(w) === n;
    }
    function ue(w) {
      return v(w) === h;
    }
    function J(w) {
      return v(w) === g;
    }
    function oe(w) {
      return v(w) === r;
    }
    function W(w) {
      return v(w) === i;
    }
    function ie(w) {
      return v(w) === o;
    }
    function We(w) {
      return v(w) === c;
    }
    be.AsyncMode = m, be.ConcurrentMode = x, be.ContextConsumer = N, be.ContextProvider = C, be.Element = V, be.ForwardRef = A, be.Fragment = $, be.Lazy = P, be.Memo = T, be.Portal = k, be.Profiler = z, be.StrictMode = R, be.Suspense = B, be.isAsyncMode = G, be.isConcurrentMode = H, be.isContextConsumer = L, be.isContextProvider = q, be.isElement = K, be.isForwardRef = ne, be.isFragment = ae, be.isLazy = ue, be.isMemo = J, be.isPortal = oe, be.isProfiler = W, be.isStrictMode = ie, be.isSuspense = We, be.isValidElementType = E, be.typeOf = v;
  }()), be;
}
process.env.NODE_ENV === "production" ? Oi.exports = xv() : Oi.exports = wv();
var Sv = Oi.exports, Aa = Sv, Ov = {
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
}, Nv = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Dv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, uf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $a = {};
$a[Aa.ForwardRef] = Dv;
$a[Aa.Memo] = uf;
function Vc(e) {
  return Aa.isMemo(e) ? uf : $a[e.$$typeof] || Ov;
}
var Cv = Object.defineProperty, _v = Object.getOwnPropertyNames, Mc = Object.getOwnPropertySymbols, Iv = Object.getOwnPropertyDescriptor, Pv = Object.getPrototypeOf, Lc = Object.prototype;
function df(e, t, r) {
  if (typeof t != "string") {
    if (Lc) {
      var n = Pv(t);
      n && n !== Lc && df(e, n, r);
    }
    var o = _v(t);
    Mc && (o = o.concat(Mc(t)));
    for (var i = Vc(e), a = Vc(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!Nv[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = Iv(t, l);
        try {
          Cv(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Av = df;
const Bc = /* @__PURE__ */ dv(Av);
var Ni = { exports: {} }, he = {};
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
function $v() {
  if (Fc) return he;
  Fc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
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
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === g || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, he.typeOf = b, he;
}
var ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc;
function Tv() {
  return Wc || (Wc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function v(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || O || S === n || S === u || S === p || y || S === g || h || b || f || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var se = S.$$typeof;
        switch (se) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return me;
              default:
                var j = me && me.$$typeof;
                switch (j) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return j;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, z = n, R = u, B = p, F = !1, G = !1;
    function H(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function ne(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ae(S) {
      return m(S) === l;
    }
    function ue(S) {
      return m(S) === r;
    }
    function J(S) {
      return m(S) === d;
    }
    function oe(S) {
      return m(S) === c;
    }
    function W(S) {
      return m(S) === t;
    }
    function ie(S) {
      return m(S) === o;
    }
    function We(S) {
      return m(S) === n;
    }
    function w(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === p;
    }
    ve.ContextConsumer = x, ve.ContextProvider = N, ve.Element = C, ve.ForwardRef = V, ve.Fragment = A, ve.Lazy = $, ve.Memo = P, ve.Portal = T, ve.Profiler = k, ve.StrictMode = z, ve.Suspense = R, ve.SuspenseList = B, ve.isAsyncMode = H, ve.isConcurrentMode = L, ve.isContextConsumer = q, ve.isContextProvider = K, ve.isElement = ne, ve.isForwardRef = ae, ve.isFragment = ue, ve.isLazy = J, ve.isMemo = oe, ve.isPortal = W, ve.isProfiler = ie, ve.isStrictMode = We, ve.isSuspense = w, ve.isSuspenseList = le, ve.isValidElementType = v, ve.typeOf = m;
  }()), ve;
}
process.env.NODE_ENV === "production" ? Ni.exports = $v() : Ni.exports = Tv();
var jc = Ni.exports;
function Ta(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function lo(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ta(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Rv(e, t, r) {
  lo(e, "mapStateToProps"), lo(t, "mapDispatchToProps"), lo(r, "mergeProps");
}
const Vv = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Mv(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function g(O, E) {
    return l = O, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const O = e(l, u), E = !a(O, p);
    return p = O, E && (d = r(p, c, u)), d;
  }
  function y(O, E) {
    const v = !i(E, u), m = !o(O, l, E, u);
    return l = O, u = E, v && m ? h() : v ? b() : m ? f() : d;
  }
  return function(E, v) {
    return s ? y(E, v) : g(E, v);
  };
}
function Lv(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = lf(t, Vv);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && Rv(a, s, l), Mv(a, s, l, e, i);
}
function Bv(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function Fv(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function pf(e, t, r) {
  Fv(e) || Ta(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Di(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Gc(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ff(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = Gc(e);
      let u = i(s, l);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Gc(u), u = i(s, l)), process.env.NODE_ENV !== "production" && pf(u, o, t), u;
    }, i;
  };
}
function Ra(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Wv(e) {
  return e && typeof e == "object" ? Di((t) => (
    // @ts-ignore
    Bv(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ff(e, "mapDispatchToProps")
  ) : Ra(e, "mapDispatchToProps") : Di((t) => ({
    dispatch: t
  }));
}
function jv(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ff(e, "mapStateToProps")
  ) : Ra(e, "mapStateToProps") : Di(() => ({}));
}
function Gv(e, t, r) {
  return Vt({}, r, e, t);
}
function kv(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, u, p) {
      const c = e(l, u, p);
      return i ? o(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && pf(a, n, "mergeProps")), a;
    };
  };
}
function Hv(e) {
  return e ? typeof e == "function" ? kv(e) : Ra(e, "mergeProps") : () => Gv;
}
function zv() {
  const e = vv();
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
function mf(e, t) {
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = zv());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = kc);
  }
  function d() {
    i || (i = !0, p());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => n
  };
  return h;
}
const Uv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ln = Uv ? _.useLayoutEffect : _.useEffect;
function Hc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function uo(e, t) {
  if (Hc(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Hc(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const qv = ["reactReduxForwardedRef"];
let gf = Ev;
const Yv = (e) => {
  gf = e;
}, Kv = [null, null], Xv = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Jv(e, t, r) {
  Ln(() => e(...t), r);
}
function Qv(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Zv(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const g = () => {
    if (c || !s.current)
      return;
    const b = t.getState();
    let f, y;
    try {
      f = n(b, o.current);
    } catch (O) {
      y = O, d = O;
    }
    y || (d = null), f === i.current ? a.current || u() : (i.current = f, l.current = f, a.current = !0, p());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function ey(e, t) {
  return e === t;
}
let zc = !1;
function bf(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = ey,
  areOwnPropsEqual: i = uo,
  areStatePropsEqual: a = uo,
  areMergedPropsEqual: s = uo,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = cf
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !zc && (zc = !0, Ta('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = jv(e), d = Wv(t), g = Hv(r), h = !!e;
  return (f) => {
    if (process.env.NODE_ENV !== "production" && !jc.isValidElementType(f))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Xv(f)}`);
    const y = f.displayName || f.name || "Component", O = `Connect(${y})`, E = {
      shouldHandleStateChanges: h,
      displayName: O,
      wrappedComponentName: y,
      WrappedComponent: f,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(N) {
      const [C, V, A] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: w
        } = N, le = lf(N, qv);
        return [N.context, w, le];
      }, [N]), $ = _.useMemo(() => C && C.Consumer && // @ts-ignore
      jc.isContextConsumer(/* @__PURE__ */ _.createElement(C.Consumer, null)) ? C : p, [C, p]), P = _.useContext($), T = !!N.store && !!N.store.getState && !!N.store.dispatch, k = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !T && !k)
        throw new Error(`Could not find "store" in the context of "${O}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${O} in connect options.`);
      const z = T ? N.store : P.store, R = k ? P.getServerState : z.getState, B = _.useMemo(() => Lv(z.dispatch, E), [z]), [F, G] = _.useMemo(() => {
        if (!h) return Kv;
        const w = mf(z, T ? void 0 : P.subscription), le = w.notifyNestedSubs.bind(w);
        return [w, le];
      }, [z, T, P]), H = _.useMemo(() => T ? P : Vt({}, P, {
        subscription: F
      }), [T, P, F]), L = _.useRef(), q = _.useRef(A), K = _.useRef(), ne = _.useRef(!1);
      _.useRef(!1);
      const ae = _.useRef(!1), ue = _.useRef();
      Ln(() => (ae.current = !0, () => {
        ae.current = !1;
      }), []);
      const J = _.useMemo(() => () => K.current && A === q.current ? K.current : B(z.getState(), A), [z, A]), oe = _.useMemo(() => (le) => F ? Zv(
        h,
        z,
        F,
        // @ts-ignore
        B,
        q,
        L,
        ne,
        ae,
        K,
        G,
        le
      ) : () => {
      }, [F]);
      Jv(Qv, [q, L, ne, A, K, G]);
      let W;
      try {
        W = gf(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          oe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          J,
          R ? () => B(R(), A) : J
        );
      } catch (w) {
        throw ue.current && (w.message += `
The error may be correlated with this previous error:
${ue.current.stack}

`), w;
      }
      Ln(() => {
        ue.current = void 0, K.current = void 0, L.current = W;
      });
      const ie = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(f, Vt({}, W, {
          ref: V
        }))
      ), [V, f, W]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement($.Provider, {
        value: H
      }, ie) : ie, [$, ie, H]);
    }
    const x = _.memo(v);
    if (x.WrappedComponent = f, x.displayName = v.displayName = O, l) {
      const C = _.forwardRef(function(A, $) {
        return /* @__PURE__ */ _.createElement(x, Vt({}, A, {
          reactReduxForwardedRef: $
        }));
      });
      return C.displayName = O, C.WrappedComponent = f, Bc(C, f);
    }
    return Bc(x, f);
  };
}
function ty({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = _.useMemo(() => {
    const u = mf(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = _.useMemo(() => e.getState(), [e]);
  Ln(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || cf;
  return /* @__PURE__ */ _.createElement(l.Provider, {
    value: a
  }, r);
}
Yv(Pa.useSyncExternalStore);
hv(Or);
function ry(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function hf(e, t) {
  var r = ze(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && ry(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ce(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function ny(e, t) {
  return hf(function() {
    return e;
  }, t);
}
var fe = hf, Y = ny, oy = process.env.NODE_ENV === "production", po = "Invariant failed";
function Uc(e, t) {
  if (oy)
    throw new Error(po);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(po, ": ").concat(r) : po;
  throw new Error(n);
}
var Dt = function(t) {
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
}, Va = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, qc = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, iy = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, fo = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ma = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? fo : n, i = t.border, a = i === void 0 ? fo : i, s = t.padding, l = s === void 0 ? fo : s, u = Dt(Va(r, o)), p = Dt(qc(r, a)), c = Dt(qc(p, l));
  return {
    marginBox: u,
    borderBox: Dt(r),
    paddingBox: p,
    contentBox: c,
    margin: o,
    border: a,
    padding: l
  };
}, ht = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Uc(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Uc()), o;
}, ay = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Bn = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = iy(n, r);
  return Ma({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Fn = function(t, r) {
  return r === void 0 && (r = ay()), Bn(t, r);
}, vf = function(t, r) {
  var n = {
    top: ht(r.marginTop),
    right: ht(r.marginRight),
    bottom: ht(r.marginBottom),
    left: ht(r.marginLeft)
  }, o = {
    top: ht(r.paddingTop),
    right: ht(r.paddingRight),
    bottom: ht(r.paddingBottom),
    left: ht(r.paddingLeft)
  }, i = {
    top: ht(r.borderTopWidth),
    right: ht(r.borderRightWidth),
    bottom: ht(r.borderBottomWidth),
    left: ht(r.borderLeftWidth)
  };
  return Ma({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, yf = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return vf(r, n);
}, Yc = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function sy(e, t) {
  return !!(e === t || Yc(e) && Yc(t));
}
function cy(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!sy(e[r], t[r]))
      return !1;
  return !0;
}
function Qe(e, t) {
  t === void 0 && (t = cy);
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
var Gr = function(t) {
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
const ly = process.env.NODE_ENV === "production", uy = /[ \t]{2,}/g, dy = /^[ \t]*/gm, Kc = (e) => e.replace(uy, " ").replace(dy, "").trim(), py = (e) => Kc(`
  %c@hello-pangea/dnd

  %c${Kc(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), fy = (e) => [py(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], my = "__@hello-pangea/dnd-disable-dev-warnings";
function Ef(e, t) {
  ly || typeof window < "u" && window[my] || console[e](...fy(t));
}
const je = Ef.bind(null, "warn"), Ci = Ef.bind(null, "error");
function Mt() {
}
function gy(e, t) {
  return {
    ...e,
    ...t
  };
}
function St(e, t, r) {
  const n = t.map((o) => {
    const i = gy(r, o.options);
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
const by = process.env.NODE_ENV === "production", Xc = "Invariant failed";
class kr extends Error {
}
kr.prototype.toString = function() {
  return this.message;
};
function D(e, t) {
  throw by ? new kr(Xc) : new kr(`${Xc}: ${t || ""}`);
}
class hy extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Mt, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && je(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof kr && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ci(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = St(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof kr) {
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
const vy = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Wn = (e) => e + 1, yy = (e) => `
  You have lifted an item in position ${Wn(e.source.index)}
`, xf = (e, t) => {
  const r = e.droppableId === t.droppableId, n = Wn(e.index), o = Wn(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, wf = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Ey = (e) => {
  const t = e.destination;
  if (t)
    return xf(e.source, t);
  const r = e.combine;
  return r ? wf(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Jc = (e) => `
  The item has returned to its starting position
  of ${Wn(e.index)}
`, xy = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Jc(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${xf(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${wf(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Jc(e.source)}
  `;
}, wy = {
  dragHandleUsageInstructions: vy,
  onDragStart: yy,
  onDragUpdate: Ey,
  onDragEnd: xy
};
var Sn = wy;
const Ze = {
  x: 0,
  y: 0
}, it = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), mt = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Lt = (e, t) => e.x === t.x && e.y === t.y, Dr = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), er = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Hr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Qc = (e, t) => Math.min(...t.map((r) => Hr(e, r))), Sf = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Sy = (e, t) => {
  const r = Dt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const cn = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Zc = (e) => [{
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
}], Oy = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ny = (e, t) => t ? cn(e, t.scroll.diff.displacement) : e, Dy = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Cy = (e, t) => t && t.shouldClipSubject ? Sy(t.pageMarginBox, e) : Dt(e);
var Er = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Ny(e.marginBox, n), i = Dy(o, r, t), a = Cy(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, La = (e, t) => {
  e.frame || (process.env.NODE_ENV, D());
  const r = e.frame, n = mt(t, r.scroll.initial), o = Dr(n), i = {
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
  }, a = Er({
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
const Of = Qe((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Nf = Qe((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Kn = Qe((e) => Object.values(e)), _y = Qe((e) => Object.values(e));
var cr = Qe((e, t) => _y(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Ba(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Xn(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Jn = Qe((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Iy = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Ba(o))
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
      ...o,
      at: h
    };
  }
  const s = o.displaced.all, l = s.length ? s[0] : null;
  if (e)
    return l ? a(l) : null;
  const u = Jn(t, n);
  if (!l) {
    if (!u.length)
      return null;
    const g = u[u.length - 1];
    return a(g.descriptor.id);
  }
  const p = u.findIndex((g) => g.descriptor.id === l);
  p === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Could not find displaced item in set") : D());
  const c = p - 1;
  if (c < 0)
    return null;
  const d = u[c];
  return a(d.descriptor.id);
}, Cr = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Df = {
  point: Ze,
  value: 0
}, zr = {
  invisible: {},
  visible: {},
  all: []
}, Py = {
  displaced: zr,
  displacedBy: Df,
  at: null
};
var Ay = Py, Ot = (e, t) => (r) => e <= r && r <= t, Cf = (e) => {
  const t = Ot(e.top, e.bottom), r = Ot(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const l = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return l && u ? !0 : l && a || u && i;
  };
}, $y = (e) => {
  const t = Ot(e.top, e.bottom), r = Ot(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Fa = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, _f = {
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
var Ty = (e) => (t) => {
  const r = Ot(t.top, t.bottom), n = Ot(t.left, t.right);
  return (o) => e === Fa ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Ry = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Ze;
  return cn(e, r);
}, Vy = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, My = (e, t, r) => r(t)(e), Wa = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? Ry(e, t) : e;
  return Vy(i, t, o) && My(i, r, o);
}, Ly = (e) => Wa({
  ...e,
  isVisibleThroughFrameFn: Cf
}), If = (e) => Wa({
  ...e,
  isVisibleThroughFrameFn: $y
}), By = (e) => Wa({
  ...e,
  isVisibleThroughFrameFn: Ty(e.destination.axis)
}), Fy = (e, t, r) => {
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
function Wy(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Dt(Va(r, n));
}
function Ur({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, l) {
    const u = Wy(l, r), p = l.descriptor.id;
    if (s.all.push(p), !Ly({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const d = Fy(p, i, o), g = {
      draggableId: p,
      shouldAnimate: d
    };
    return s.visible[p] = g, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function jy(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function el({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = jy(e, {
    inHomeList: t
  });
  return {
    displaced: zr,
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
function jn({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = Cr(e, r);
  if (a == null)
    return el({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const u = t.find((h) => h.descriptor.index === a);
  if (!u)
    return el({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const p = Jn(e, t), c = t.indexOf(u), d = p.slice(c);
  return {
    displaced: Ur({
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
function kt(e, t) {
  return !!t.effected[e];
}
var Gy = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return kt(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, ky = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, Hy = ({
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
    const c = ky({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return c == null ? null : jn({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const p = Gy({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: l
  });
  return p == null ? null : jn({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, zy = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return kt(r, t) ? o ? Ze : Dr(n.point) : o ? n.point : Ze;
}, Uy = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Xn(t);
  n || (process.env.NODE_ENV, D());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = zy({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return it(i, a);
};
const Pf = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, qy = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, ja = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, tl = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => er(e.line, t.marginBox[e.end] + Pf(e, r), ja(e, t.marginBox, r)), rl = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => er(e.line, t.marginBox[e.start] - qy(e, r), ja(e, t.marginBox, r)), Yy = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => er(e.line, t.contentBox[e.start] + Pf(e, r), ja(e, t.contentBox, r));
var Ky = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = cr(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return Yy({
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
    if (kt(p, o))
      return rl({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const g = Bn(d.page, u.point);
    return rl({
      axis: s,
      moveRelativeTo: g,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (kt(c.descriptor.id, o)) {
    const d = Bn(c.page, Dr(o.displacedBy.point));
    return tl({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return tl({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, _i = (e, t) => {
  const r = e.frame;
  return r ? it(t, r.scroll.diff.displacement) : t;
};
const Xy = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? Ky({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : Uy({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Qn = (e) => {
  const t = Xy(e), r = e.droppable;
  return r ? _i(r, t) : t;
}, Af = (e, t) => {
  const r = mt(t, e.scroll.initial), n = Dr(r);
  return {
    frame: Dt({
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
function nl(e, t) {
  return e.map((r) => t[r]);
}
function Jy(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Qy = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = Af(t, it(t.scroll.current, o)), a = r.frame ? La(r, it(r.frame.scroll.current, o)) : r, s = e.displaced, l = Ur({
    afterDragging: nl(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Ur({
    afterDragging: nl(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, c = {}, d = [s, l, u];
  return s.all.forEach((h) => {
    const b = Jy(h, d);
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
}, Zy = (e, t) => it(e.scroll.diff.displacement, t), Ga = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Zy(r, e), o = mt(n, t.page.borderBox.center);
  return it(t.client.borderBox.center, o);
}, $f = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = mt(r, e.page.borderBox.center), l = {
    target: cn(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? By(l) : If(l);
}, eE = ({
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
  const u = cr(r.descriptor.id, n), p = Cr(t, r), c = Iy({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || Hy({
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
  const d = Qn({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: l
  });
  if ($f({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Ga({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const h = mt(d, a), b = Qy({
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
const dt = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot get clipped area from droppable") : D()), t;
};
var tE = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ot(i[a.start], i[a.end]), l = Kn(n).filter((p) => p !== r).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => Cf(o.frame)(dt(p))).filter((p) => {
    const c = dt(p);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const c = dt(p), d = Ot(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((p, c) => {
    const d = dt(p)[a.crossAxisStart], g = dt(c)[a.crossAxisStart];
    return e ? d - g : g - d;
  }).filter((p, c, d) => dt(p)[a.crossAxisStart] === dt(d[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const u = l.filter((p) => Ot(dt(p)[a.start], dt(p)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((p, c) => dt(p)[a.start] - dt(c)[a.start])[0] : l.sort((p, c) => {
    const d = Qc(t, Zc(dt(p))), g = Qc(t, Zc(dt(c)));
    return d !== g ? d - g : dt(p)[a.start] - dt(c)[a.start];
  })[0];
};
const ol = (e, t) => {
  const r = e.page.borderBox.center;
  return kt(e.descriptor.id, t) ? mt(r, t.displacedBy.point) : r;
}, rE = (e, t) => {
  const r = e.page.borderBox;
  return kt(e.descriptor.id, t) ? cn(r, Dr(t.displacedBy.point)) : r;
};
var nE = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => If({
  target: rE(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = Hr(e, _i(r, ol(a, o))), u = Hr(e, _i(r, ol(s, o)));
  return l < u ? -1 : u < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, ln = Qe(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: er(t.line, n)
  };
});
const oE = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return er(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], l = cr(e.descriptor.id, r).reduce((u, p) => u + p.client.marginBox[n.size], 0) + t[n.line] - o;
  return l <= 0 ? null : er(n.line, l);
}, Tf = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Rf = (e, t, r) => {
  const n = e.frame;
  Cr(t, e) && (process.env.NODE_ENV !== "production" ? D(!1, "Should not add placeholder space to home list") : D()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot add placeholder size to a subject when it already has one") : D());
  const o = ln(e.axis, t.displaceBy).point, i = oE(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const p = Er({
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
  const s = i ? it(n.scroll.max, i) : n.scroll.max, l = Tf(n, s), u = Er({
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
}, iE = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot remove placeholder form subject when there was none") : D());
  const r = e.frame;
  if (!r) {
    const a = Er({
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
  const o = Tf(r, n), i = Er({
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
var aE = ({
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
      displaced: zr,
      displacedBy: Df,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = Qn({
      impact: c,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), g = Cr(n, i) ? i : Rf(i, n, o);
    return $f({
      draggable: n,
      destination: g,
      newPageBorderBoxCenter: d,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? c : null;
  }
  const l = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const c = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || l ? c : c + 1;
  })(), p = ln(i.axis, n.displaceBy);
  return jn({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: zr,
    index: u
  });
}, sE = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = tE({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const u = cr(l.descriptor.id, o), p = nE({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }), c = aE({
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
  const d = Qn({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Ga({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, gt = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const cE = (e, t) => {
  const r = gt(e);
  return r ? t[r] : null;
};
var lE = ({
  state: e,
  type: t
}) => {
  const r = cE(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: d
  } = e.dimensions;
  return s ? eE({
    isMovingForward: l,
    previousPageBorderBoxCenter: p,
    draggable: u,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : sE({
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
function Jt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Vf(e) {
  const t = Ot(e.top, e.bottom), r = Ot(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function uE(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function dE({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = er(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Hr(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function pE({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Kn(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !uE(e, i))
      return !1;
    if (Vf(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], u = e[a.crossAxisEnd], p = Ot(i[a.crossAxisStart], i[a.crossAxisEnd]), c = p(l), d = p(u);
    return !c && !d ? !0 : c ? l < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : dE({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Mf = (e, t) => Dt(cn(e, t));
var fE = (e, t) => {
  const r = e.frame;
  return r ? Mf(t, r.scroll.diff.value) : t;
};
function Lf({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function mE({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var gE = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = ln(r.axis, t.displaceBy), u = l.value, p = e[s.start], c = e[s.end], g = Jn(t, n).find((b) => {
    const f = b.descriptor.id, y = b.page.borderBox.center[s.line], O = kt(f, a), E = Lf({
      displaced: o,
      id: f
    });
    return O ? E ? c <= y : p < y - u : E ? c <= y + u : p < y;
  }) || null, h = mE({
    draggable: t,
    closest: g,
    inHomeList: Cr(t, r)
  });
  return jn({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: l,
    index: h
  });
};
const bE = 4;
var hE = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = ln(n.axis, e.displaceBy), l = s.value, u = t[a.start], p = t[a.end], d = Jn(e, o).find((h) => {
    const b = h.descriptor.id, f = h.page.borderBox, O = f[a.size] / bE, E = kt(b, i), v = Lf({
      displaced: r.displaced,
      id: b
    });
    return E ? v ? p > f[a.start] + O && p < f[a.end] - O : u > f[a.start] - l + O && u < f[a.end] - l - O : v ? p > f[a.start] + l + O && p < f[a.end] + l - O : u > f[a.start] + O && u < f[a.end] - O;
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
}, Bf = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Mf(t.page.borderBox, e), l = pE({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!l)
    return Ay;
  const u = n[l], p = cr(u.descriptor.id, r), c = fE(u, s);
  return hE({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: p,
    afterCritical: a
  }) || gE({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: u,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, ka = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const vE = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = gt(e), o = gt(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = iE(i);
  return ka(r, a);
};
var yE = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = vE({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = gt(o);
  if (!a)
    return i;
  const s = r[a];
  if (Cr(e, s) || s.subject.withPlaceholder)
    return i;
  const l = Rf(s, e, t);
  return ka(i, l);
}, Tr = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, u = mt(l, e.initial.client.selection), p = {
    offset: u,
    selection: l,
    borderBoxCenter: it(e.initial.client.borderBoxCenter, u)
  }, c = {
    selection: it(p.selection, a.scroll.current),
    borderBoxCenter: it(p.borderBoxCenter, a.scroll.current),
    offset: it(p.offset, a.scroll.diff.value)
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
  const g = s.draggables[e.critical.draggable.id], h = o || Bf({
    pageOffset: c.offset,
    draggable: g,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = yE({
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
function EE(e, t) {
  return e.map((r) => t[r]);
}
var Ff = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = EE(i.all, r), s = Ur({
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
}, Wf = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = Qn({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Ga({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, jf = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, D());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], u = gt(n);
  u || (process.env.NODE_ENV !== "production" ? D(!1, "Must be over a destination in SNAP movement mode") : D());
  const p = s[u], c = Ff({
    impact: n,
    viewport: o,
    destination: p,
    draggables: a
  }), d = Wf({
    impact: c,
    draggable: l,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Tr({
    impact: c,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, xE = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Gf = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = ln(t.axis, e.displaceBy), i = cr(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Expected draggable to be inside home list") : D());
  const s = i.slice(a + 1), l = s.reduce((d, g) => (d[g.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: Ur({
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
        destination: xE(e.descriptor)
      }
    },
    afterCritical: u
  };
}, wE = (e, t) => ({
  draggables: e.draggables,
  droppables: ka(e.droppables, t)
});
const un = (e) => {
  process.env.NODE_ENV;
}, dn = (e) => {
  process.env.NODE_ENV;
};
var SE = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = Bn(e.client, t), o = Fn(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, OE = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Expected Droppable to have a frame") : D()), t;
}, NE = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], l = OE(a).scroll.diff.value, u = it(n, l);
    return SE({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, DE = ({
  state: e,
  published: t
}) => {
  un();
  const r = t.modified.map((y) => {
    const O = e.dimensions.droppables[y.droppableId];
    return La(O, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...Of(r)
  }, o = Nf(NE({
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
  }, s = gt(e.impact), l = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: d
  } = Gf({
    draggable: u,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), g = l && l.isCombineEnabled ? e.impact : c, h = Bf({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: g,
    viewport: e.viewport,
    afterCritical: d
  });
  dn();
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
const Ii = (e) => e.movementMode === "SNAP", mo = (e, t, r) => {
  const n = wE(e.dimensions, t);
  return !Ii(e) || r ? Tr({
    state: e,
    dimensions: n
  }) : jf({
    state: e,
    dimensions: n
  });
};
function go(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const il = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var CE = (e = il, t) => {
  if (t.type === "FLUSH")
    return {
      ...il,
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
      offset: Ze
    }, p = {
      client: u,
      page: {
        selection: it(u.selection, o.scroll.initial),
        borderBoxCenter: it(u.selection, o.scroll.initial),
        offset: it(u.selection, o.scroll.diff.value)
      }
    }, c = Kn(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: g
    } = Gf({
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
      afterCritical: g,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : D()), DE({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Jt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `${t.type} not permitted in phase ${e.phase}`) : D());
    const {
      client: r
    } = t.payload;
    return Lt(r, e.current.client.selection) ? e : Tr({
      state: e,
      clientSelection: r,
      impact: Ii(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return go(e);
    Jt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `${t.type} not permitted in phase ${e.phase}`) : D());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = La(o, n);
    return mo(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Jt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Attempting to move in an unsupported phase ${e.phase}`) : D());
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
    return mo(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Jt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Attempting to move in an unsupported phase ${e.phase}`) : D());
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
    return mo(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Jt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot move by window in phase ${e.phase}`) : D()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? D(!1, "Window scrolling is currently not supported for fixed lists") : D());
    const r = t.payload.newScroll;
    if (Lt(e.viewport.scroll.current, r))
      return go(e);
    const n = Af(e.viewport, r);
    return Ii(e) ? jf({
      state: e,
      viewport: n
    }) : Tr({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Jt(e))
      return e;
    const r = t.payload.maxScroll;
    if (Lt(r, e.viewport.scroll.max))
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
    const r = lE({
      state: e,
      type: t.type
    });
    return r ? Tr({
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
const _E = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), IE = (e) => ({
  type: "LIFT",
  payload: e
}), PE = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), AE = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), $E = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), TE = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), RE = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), VE = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), kf = (e) => ({
  type: "MOVE",
  payload: e
}), ME = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), LE = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), BE = () => ({
  type: "MOVE_UP",
  payload: null
}), FE = () => ({
  type: "MOVE_DOWN",
  payload: null
}), WE = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), jE = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Ha = () => ({
  type: "FLUSH",
  payload: null
}), GE = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), za = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Hf = (e) => ({
  type: "DROP",
  payload: e
}), kE = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), zf = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function HE(e) {
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
  process.env.NODE_ENV !== "production" && je(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function zE(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = cr(e.droppable.id, t.draggables);
    HE(r);
  }
}
var UE = (e) => ({
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
  l.phase === "DROP_ANIMATING" && r(za({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Unexpected phase to start a drag") : D()), r(Ha()), r(_E({
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
    viewport: g
  } = e.startPublishing(p);
  zE(c, d), r(PE({
    critical: c,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: g
  }));
}, qE = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Ua = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, qr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Uf = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ht = `${Uf.outOfTheWay}s ${Ua.outOfTheWay}`, Rr = {
  fluid: `opacity ${Ht}`,
  snap: `transform ${Ht}, opacity ${Ht}`,
  drop: (e) => {
    const t = `${e}s ${Ua.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ht}`,
  placeholder: `height ${Ht}, width ${Ht}, margin ${Ht}`
}, al = (e) => Lt(e, Ze) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Pi = {
  moveTo: al,
  drop: (e, t) => {
    const r = al(e);
    if (r)
      return t ? `${r} scale(${qr.scale.drop})` : r;
  }
}, {
  minDropTime: Ai,
  maxDropTime: qf
} = Uf, YE = qf - Ai, sl = 1500, KE = 0.6;
var XE = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Hr(e, t);
  if (n <= 0)
    return Ai;
  if (n >= sl)
    return qf;
  const o = n / sl, i = Ai + YE * o, a = r === "CANCEL" ? i * KE : i;
  return Number(a.toFixed(2));
}, JE = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = gt(e), l = s ? a[s] : null, u = a[t.descriptor.droppableId], p = Wf({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || u,
    viewport: n
  });
  return mt(p, t.client.borderBox.center);
}, QE = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Ff({
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
    displaced: zr
  },
  didDropInsideDroppable: !0
};
const ZE = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(kE({
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
  } = QE({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = c ? Ba(p) : null, g = c ? Xn(p) : null, h = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: h,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: g
  }, f = JE({
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
  if (!(!Lt(o.current.client.offset, f) || !!b.combine)) {
    t(za({
      completed: y
    }));
    return;
  }
  const E = XE({
    current: o.current.client.offset,
    destination: f,
    reason: i
  });
  t(GE({
    newHomeClientOffset: f,
    dropDuration: E,
    completed: y
  }));
};
var ex = ZE, Yf = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function tx(e) {
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
function rx({
  onWindowScroll: e
}) {
  function t() {
    e(Yf());
  }
  const r = Gr(t), n = tx(r);
  let o = Mt;
  function i() {
    return o !== Mt;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start scroll listener when already active") : D()), o = St(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop scroll listener when not active") : D()), r.cancel(), o(), o = Mt;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const nx = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", ox = (e) => {
  const t = rx({
    onWindowScroll: (r) => {
      e.dispatch(ME({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && nx(n) && t.stop(), r(n);
  };
};
var ix = ox, ax = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && je("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && je(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, sx = () => {
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
const cx = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, lx = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, ux = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, Pr = (e, t) => {
  un(), t(), dn();
}, mn = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function bo(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = ax(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var dx = (e, t) => {
  const r = sx();
  let n = null;
  const o = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : D()), Pr("onBeforeCapture", () => {
      const g = e().onBeforeCapture;
      g && g({
        draggableId: c,
        mode: d
      });
    });
  }, i = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : D()), Pr("onBeforeDragStart", () => {
      const g = e().onBeforeDragStart;
      g && g(mn(c, d));
    });
  }, a = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : D());
    const g = mn(c, d);
    n = {
      mode: d,
      lastCritical: c,
      lastLocation: g.source,
      lastCombine: null
    }, r.add(() => {
      Pr("onDragStart", () => bo(e().onDragStart, g, t, Sn.onDragStart));
    });
  }, s = (c, d) => {
    const g = Ba(d), h = Xn(d);
    n || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onDragMove when onDragStart has not been called") : D());
    const b = !ux(c, n.lastCritical);
    b && (n.lastCritical = c);
    const f = !cx(n.lastLocation, g);
    f && (n.lastLocation = g);
    const y = !lx(n.lastCombine, h);
    if (y && (n.lastCombine = h), !b && !f && !y)
      return;
    const O = {
      ...mn(c, n.mode),
      combine: h,
      destination: g
    };
    r.add(() => {
      Pr("onDragUpdate", () => bo(e().onDragUpdate, O, t, Sn.onDragUpdate));
    });
  }, l = () => {
    n || (process.env.NODE_ENV !== "production" ? D(!1, "Can only flush responders while dragging") : D()), r.flush();
  }, u = (c) => {
    n || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : D()), n = null, Pr("onDragEnd", () => bo(e().onDragEnd, c, t, Sn.onDragEnd));
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
        ...mn(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(c);
    }
  };
}, px = (e, t) => {
  const r = dx(e, t);
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
const fx = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot finish a drop animating when no drop is occurring") : D()), e.dispatch(za({
    completed: n.completed
  }));
};
var mx = fx;
const gx = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(zf());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = St(window, [a]);
    });
  };
};
var bx = gx, hx = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, vx = (e) => {
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
const yx = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Ex = (e) => (t) => (r) => (n) => {
  if (yx(n)) {
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
const xx = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Hf({
    reason: n.reason
  })));
};
var wx = xx;
const Sx = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : af;
var Ox = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => of(CE, Sx(uv(qE(r), hx(e), UE(e), ex, mx, bx, wx, Ex(i), ix, vx(t), px(n, o))));
const ho = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Nx({
  registry: e,
  callbacks: t
}) {
  let r = ho(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, un();
      const {
        additions: l,
        removals: u,
        modified: p
      } = r, c = Object.keys(l).map((h) => e.draggable.getById(h).getDimension(Ze)).sort((h, b) => h.descriptor.index - b.descriptor.index), d = Object.keys(p).map((h) => {
        const f = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
          scroll: f
        };
      }), g = {
        additions: c,
        removals: Object.keys(u),
        modified: d
      };
      r = ho(), dn(), t.publish(g);
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
      n && (cancelAnimationFrame(n), n = null, r = ho());
    }
  };
}
var Kf = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = mt({
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
}, Xf = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find document.documentElement") : D()), e;
}, Jf = () => {
  const e = Xf();
  return Kf({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Dx = () => {
  const e = Yf(), t = Jf(), r = e.y, n = e.x, o = Xf(), i = o.clientWidth, a = o.clientHeight, s = n + i, l = r + a;
  return {
    frame: Dt({
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
        value: Ze,
        displacement: Ze
      }
    }
  };
}, Cx = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  un();
  const n = Dx(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), l = {
    draggables: Nf(s),
    droppables: Of(a)
  };
  return dn(), {
    dimensions: l,
    critical: e,
    viewport: n
  };
};
function cl(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && je(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var _x = (e, t) => {
  let r = null;
  const n = Nx({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, g) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : D()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: g
    });
  }, i = (d, g) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : D()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: g
    }));
  }, a = (d, g) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : D()), t.updateDroppableScroll({
      id: d,
      newScroll: g
    }));
  }, s = (d, g) => {
    r && e.droppable.getById(d).callbacks.scroll(g);
  }, l = () => {
    if (!r)
      return;
    n.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((g) => g.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? D(!1, "Should only be subscribed when a collection is occurring") : D());
    const g = r.critical.draggable;
    d.type === "ADDITION" && cl(e, g, d.value) && n.add(d.value), d.type === "REMOVAL" && cl(e, g, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start capturing critical dimensions as there is already a collection") : D());
      const g = e.draggable.getById(d.draggableId), h = e.droppable.getById(g.descriptor.droppableId), b = {
        draggable: g.descriptor,
        droppable: h.descriptor
      }, f = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: f
      }, Cx({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: l
  };
}, Qf = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Ix = (e) => {
  window.scrollBy(e.x, e.y);
};
const Px = Qe((e) => Kn(e).filter((t) => !(!t.isEnabled || !t.frame))), Ax = (e, t) => Px(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? D(!1, "Invalid result") : D()), Vf(n.frame.pageMarginBox)(e))) || null;
var $x = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Ax(e, r);
};
const Yr = {
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
var Tx = (e, t, r = () => Yr) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Zf = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && je(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, qa = 1, Rx = (e, t, r = () => Yr) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return qa;
  const i = 1 - Zf({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, Vx = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return qa;
  const p = Zf({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), c = e * n.ease(p);
  return Math.ceil(c);
}, ll = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = Rx(e, t, o);
  return i === 0 ? 0 : n ? Math.max(Vx(i, r, o), qa) : i;
}, ul = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Tx(e, n, i);
  return t[n.end] < t[n.start] ? ll({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * ll({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Mx = ({
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
const Lx = Sf((e) => e === 0 ? 0 : e);
var em = ({
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
  }, s = ul({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Fa,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = ul({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: _f,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = Lx({
    x: l,
    y: s
  });
  if (Lt(u, Ze))
    return null;
  const p = Mx({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return p ? Lt(p, Ze) ? null : p : null;
};
const Bx = Sf((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Ya = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = it(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return Lt(i, Ze) ? null : i;
  };
})(), tm = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Bx(r), i = Ya({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Ka = (e, t) => tm({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Fx = (e, t) => {
  if (!Ka(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Ya({
    current: n,
    max: r,
    change: t
  });
}, Xa = (e, t) => {
  const r = e.frame;
  return r ? tm({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, Wx = (e, t) => {
  const r = e.frame;
  return !r || !Xa(e, t) ? null : Ya({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var jx = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = em({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Ka(e, a) ? a : null;
}, Gx = ({
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
  const s = em({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Xa(e, s) ? s : null;
}, dl = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, d = jx({
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
  const u = $x({
    center: a,
    destination: gt(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const p = Gx({
    dragStartTime: t,
    droppable: u,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  p && o(u.descriptor.id, p);
}, kx = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Yr
}) => {
  const n = Gr(e), o = Gr(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fluid scroll if not dragging") : D());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: c
    } = i;
    dl({
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
      un(), i && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start auto scrolling when already started") : D());
      const p = Date.now();
      let c = !1;
      const d = () => {
        c = !0;
      };
      dl({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: c
      }, dn(), c && a(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, Hx = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, l) => {
    const u = it(s.current.client.selection, l);
    e({
      client: u
    });
  }, o = (s, l) => {
    if (!Xa(s, l))
      return l;
    const u = Wx(s, l);
    if (!u)
      return t(s.descriptor.id, l), null;
    const p = mt(l, u);
    return t(s.descriptor.id, p), mt(l, p);
  }, i = (s, l, u) => {
    if (!s || !Ka(l, u))
      return u;
    const p = Fx(l, u);
    if (!p)
      return r(u), null;
    const c = mt(u, p);
    return r(c), mt(u, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const u = gt(s.impact);
    u || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot perform a jump scroll when there is no destination") : D());
    const p = o(s.dimensions.droppables[u], l);
    if (!p)
      return;
    const c = s.viewport, d = i(s.isWindowScrollAllowed, c, p);
    d && n(s, d);
  };
}, zx = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = kx({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = Hx({
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
const xr = "data-rfd", wr = (() => {
  const e = `${xr}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), $i = (() => {
  const e = `${xr}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Ux = (() => {
  const e = `${xr}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), pl = {
  contextId: `${xr}-scroll-container-context-id`
}, qx = (e) => (t) => `[${t}="${e}"]`, Ar = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), Yx = "pointer-events: none;";
var Kx = (e) => {
  const t = qx(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(wr.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: Yx,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${Rr.outOfTheWay};
    `;
    return {
      selector: t($i.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(Ux.contextId),
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
    always: Ar(a, "always"),
    resting: Ar(a, "resting"),
    dragging: Ar(a, "dragging"),
    dropAnimating: Ar(a, "dropAnimating"),
    userCancel: Ar(a, "userCancel")
  };
};
const Xx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ar : ce;
var bt = Xx;
const vo = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find the head to append a style to") : D()), e;
}, fl = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Jx(e, t) {
  const r = fe(() => Kx(e), [e]), n = M(null), o = M(null), i = Y(Qe((c) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot set dynamic style element if it is not set") : D()), d.textContent = c;
  }), []), a = Y((c) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot set dynamic style element if it is not set") : D()), d.textContent = c;
  }, []);
  bt(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? D(!1, "style elements already mounted") : D());
    const c = fl(t), d = fl(t);
    return n.current = c, o.current = d, c.setAttribute(`${xr}-always`, e), d.setAttribute(`${xr}-dynamic`, e), vo().appendChild(c), vo().appendChild(d), a(r.always), i(r.resting), () => {
      const g = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot unmount ref as it is not set") : D()), vo().removeChild(b), h.current = null;
      };
      g(n), g(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = Y(() => i(r.dragging), [i, r.dragging]), l = Y((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = Y(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return fe(() => ({
    dragging: s,
    dropping: l,
    resting: u
  }), [s, l, u]);
}
function rm(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var nm = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function pn(e) {
  return e instanceof nm(e).HTMLElement;
}
function om(e, t) {
  const r = `[${wr.contextId}="${e}"]`, n = rm(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && je(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(wr.draggableId) === t);
  return o ? pn(o) ? o : (process.env.NODE_ENV !== "production" && je("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && je(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Qx(e) {
  const t = M({}), r = M(null), n = M(null), o = M(!1), i = Y(function(d, g) {
    const h = {
      id: d,
      focus: g
    };
    return t.current[d] = h, function() {
      const f = t.current;
      f[d] !== h && delete f[d];
    };
  }, []), a = Y(function(d) {
    const g = om(e, d);
    g && g !== document.activeElement && g.focus();
  }, [e]), s = Y(function(d, g) {
    r.current === d && (r.current = g);
  }, []), l = Y(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = Y(function(d) {
    r.current = null;
    const g = document.activeElement;
    g && g.getAttribute(wr.draggableId) === d && (r.current = d);
  }, []);
  return bt(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), fe(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, u, l, s]);
}
function Zx() {
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
      const g = e.draggables[d.descriptor.id];
      g && g.uniqueId === c.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: (c) => {
      const d = c.descriptor.id, g = o(d);
      g && c.uniqueId === g.uniqueId && (delete e.draggables[d], e.droppables[c.descriptor.droppableId] && n({
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
function ew() {
  const e = fe(Zx, []);
  return ce(() => function() {
    I.version.startsWith("16") || I.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Ja = I.createContext(null), Kr = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find document.body") : D()), e;
};
const tw = {
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
var rw = tw;
const nw = (e) => `rfd-announcement-${e}`;
function ow(e) {
  const t = fe(() => nw(e), [e]), r = M(null);
  return ce(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Vt(i.style, rw), Kr().appendChild(i), function() {
      setTimeout(function() {
        const l = Kr();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), Y((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && je(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let iw = 0;
const im = {
  separator: "::"
};
function aw(e, t = im) {
  return fe(() => `${e}${t.separator}${iw++}`, [t.separator, e]);
}
function sw(e, t = im) {
  const r = I.useId();
  return fe(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Qa = "useId" in I ? sw : aw;
function cw({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function lw({
  contextId: e,
  text: t
}) {
  const r = Qa("hidden-text", {
    separator: "-"
  }), n = fe(() => cw({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ce(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", Kr().appendChild(i), function() {
      const s = Kr();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var Zn = I.createContext(null), uw = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const dw = /(\d+)\.(\d+)\.(\d+)/, ml = (e) => {
  const t = dw.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? D(!1, `Unable to parse React version ${e}`) : D());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, pw = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var fw = (e, t) => {
  const r = ml(e), n = ml(t);
  pw(r, n) || process.env.NODE_ENV !== "production" && je(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const yo = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var mw = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && je(`
      No <!doctype html> found.

      ${yo}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && je(`
      Unexpected <!doctype> found: (${t.name})

      ${yo}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && je(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${yo}
    `);
};
function Za(e) {
  process.env.NODE_ENV !== "production" && e();
}
function fn(e, t) {
  Za(() => {
    ce(() => {
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
function gw() {
  fn(() => {
    fw(uw.react, I.version), mw(document);
  }, []);
}
function es(e) {
  const t = M(e);
  return ce(() => {
    t.current = e;
  }), t;
}
function bw() {
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
function Xr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const hw = 9, vw = 13, ts = 27, am = 32, yw = 33, Ew = 34, xw = 35, ww = 36, Sw = 37, Ow = 38, Nw = 39, Dw = 40, Cw = {
  [vw]: !0,
  [hw]: !0
};
var sm = (e) => {
  Cw[e.keyCode] && e.preventDefault();
};
const _w = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var eo = _w;
const cm = 0, gl = 5;
function Iw(e, t) {
  return Math.abs(t.x - e.x) >= gl || Math.abs(t.y - e.y) >= gl;
}
const bl = {
  type: "IDLE"
};
function Pw({
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
      if (i !== cm)
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
      if (!Iw(p, l))
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
      if (o.keyCode === ts) {
        o.preventDefault(), e();
        return;
      }
      sm(o);
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
    eventName: eo,
    fn: e
  }];
}
function Aw(e) {
  const t = M(bl), r = M(Mt), n = fe(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== cm || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
        return;
      const d = e.findClosestDraggableId(c);
      if (!d)
        return;
      const g = e.tryGetLock(d, a, {
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
  }), [e]), o = fe(() => ({
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
  }), [e]), i = Y(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = St(window, [o, n], c);
  }, [o, n]), a = Y(() => {
    t.current.type !== "IDLE" && (t.current = bl, r.current(), i());
  }, [i]), s = Y(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), l = Y(function() {
    const c = {
      capture: !0,
      passive: !1
    }, d = Pw({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (g) => {
        t.current = g;
      }
    });
    r.current = St(window, d, c);
  }, [s, a]), u = Y(function(c, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected to move from IDLE to PENDING drag") : D()), t.current = {
      type: "PENDING",
      point: d,
      actions: c
    }, l();
  }, [l]);
  bt(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function $w() {
}
const Tw = {
  [Ew]: !0,
  [yw]: !0,
  [ww]: !0,
  [xw]: !0
};
function Rw(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === ts) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === am) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Dw) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Ow) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Nw) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Sw) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Tw[o.keyCode]) {
        o.preventDefault();
        return;
      }
      sm(o);
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
    eventName: eo,
    fn: r
  }];
}
function Vw(e) {
  const t = M($w), r = fe(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== am)
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
      t.current = St(window, Rw(u, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = Y(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = St(window, [r], i);
  }, [r]);
  bt(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const Eo = {
  type: "IDLE"
}, Mw = 120, Lw = 0.15;
function Bw({
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
      r.keyCode === ts && r.preventDefault(), e();
    }
  }, {
    eventName: eo,
    fn: e
  }];
}
function Fw({
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
      if (!i || !(i.force >= Lw))
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
    eventName: eo,
    fn: e
  }];
}
function Ww(e) {
  const t = M(Eo), r = M(Mt), n = Y(function() {
    return t.current;
  }, []), o = Y(function(g) {
    t.current = g;
  }, []), i = fe(() => ({
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
      const f = g.touches[0], {
        clientX: y,
        clientY: O
      } = f, E = {
        x: y,
        y: O
      };
      r.current(), c(b, E);
    }
  }), [e]), a = Y(function() {
    const g = {
      capture: !0,
      passive: !1
    };
    r.current = St(window, [i], g);
  }, [i]), s = Y(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Eo), r.current(), a());
  }, [a, o]), l = Y(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = Y(function() {
    const g = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: l,
      completed: s,
      getPhase: n
    }, b = St(window, Fw(h), g), f = St(window, Bw(h), g);
    r.current = function() {
      b(), f();
    };
  }, [l, n, s]), p = Y(function() {
    const g = n();
    g.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? D(!1, `Cannot start dragging from phase ${g.type}`) : D());
    const h = g.actions.fluidLift(g.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [n, o]), c = Y(function(g, h) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected to move from IDLE to PENDING drag") : D());
    const b = setTimeout(p, Mw);
    o({
      type: "PENDING",
      point: h,
      actions: g,
      longPressTimerId: b
    }), u();
  }, [u, n, o, p]);
  bt(function() {
    return a(), function() {
      r.current();
      const h = n();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(Eo));
    };
  }, [n, a, o]), bt(function() {
    return St(window, [{
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
function jw(e) {
  Za(() => {
    const t = es(e);
    fn(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot change the amount of sensor hooks after mounting") : D(!1));
    });
  });
}
const Gw = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function lm(e, t) {
  if (t == null)
    return !1;
  if (Gw.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : lm(e, t.parentElement);
}
function kw(e, t) {
  const r = t.target;
  return pn(r) ? lm(e, r) : !1;
}
var Hw = (e) => Dt(e.getBoundingClientRect()).center;
function zw(e) {
  return e instanceof nm(e).Element;
}
const Uw = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function um(e, t) {
  return e == null ? null : e[Uw](t) ? e : um(e.parentElement, t);
}
function qw(e, t) {
  return e.closest ? e.closest(t) : um(e, t);
}
function Yw(e) {
  return `[${wr.contextId}="${e}"]`;
}
function Kw(e, t) {
  const r = t.target;
  if (!zw(r))
    return process.env.NODE_ENV !== "production" && je("event.target must be a Element"), null;
  const n = Yw(e), o = qw(r, n);
  return o ? pn(o) ? o : (process.env.NODE_ENV !== "production" && je("drag handle must be a HTMLElement"), null) : null;
}
function Xw(e, t) {
  const r = Kw(e, t);
  return r ? r.getAttribute(wr.draggableId) : null;
}
function Jw(e, t) {
  const r = `[${$i.contextId}="${e}"]`, o = rm(document, r).find((i) => i.getAttribute($i.id) === t);
  return o ? pn(o) ? o : (process.env.NODE_ENV !== "production" && je("Draggable element is not a HTMLElement"), null) : null;
}
function Qw(e) {
  e.preventDefault();
}
function gn({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && je(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && je(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function dm({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !Qf(t.getState(), n)) : (process.env.NODE_ENV !== "production" && je(`Unable to find draggable with id: ${n}`), !1);
}
function Zw({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!dm({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const l = n.draggable.getById(o), u = Jw(t, l.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && je(`Unable to find draggable element with id: ${o}`), null;
  if (a && !l.options.canDragInteractiveElements && kw(u, a))
    return null;
  const p = e.claim(i || Mt);
  let c = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function g() {
    return e.isActive(p);
  }
  function h(m, x) {
    gn({
      expected: m,
      phase: c,
      isLockActive: g,
      shouldWarn: !0
    }) && r.dispatch(x());
  }
  const b = h.bind(null, "DRAGGING");
  function f(m) {
    function x() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (x(), process.env.NODE_ENV !== "production" ? D(!1, `Cannot lift in phase ${c}`) : D()), r.dispatch(IE(m.liftActionArgs)), c = "DRAGGING";
    function N(C, V = {
      shouldBlockNextClick: !1
    }) {
      if (m.cleanup(), V.shouldBlockNextClick) {
        const A = St(window, [{
          eventName: "click",
          fn: Qw,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(A);
      }
      x(), r.dispatch(Hf({
        reason: C
      }));
    }
    return {
      isActive: () => gn({
        expected: "DRAGGING",
        phase: c,
        isLockActive: g,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (C) => N("DROP", C),
      cancel: (C) => N("CANCEL", C),
      ...m.actions
    };
  }
  function y(m) {
    const x = Gr((C) => {
      b(() => kf({
        client: C
      }));
    });
    return {
      ...f({
        liftActionArgs: {
          id: o,
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
  function O() {
    const m = {
      moveUp: () => b(BE),
      moveRight: () => b(WE),
      moveDown: () => b(FE),
      moveLeft: () => b(jE)
    };
    return f({
      liftActionArgs: {
        id: o,
        clientSelection: Hw(u),
        movementMode: "SNAP"
      },
      cleanup: Mt,
      actions: m
    });
  }
  function E() {
    gn({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: g,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => gn({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: g,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: y,
    snapLift: O,
    abort: E
  };
}
const eS = [Aw, Vw, Ww];
function tS({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? eS : [], ...n || []], a = ze(() => bw())[0], s = Y(function(f, y) {
    Xr(f) && !Xr(y) && a.tryAbandon();
  }, [a]);
  bt(function() {
    let f = t.getState();
    return t.subscribe(() => {
      const O = t.getState();
      s(f, O), f = O;
    });
  }, [a, t, s]), bt(() => a.tryAbandon, [a.tryAbandon]);
  const l = Y((b) => dm({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = Y((b, f, y) => Zw({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: f || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), p = Y((b) => Xw(e, b), [e]), c = Y((b) => {
    const f = r.draggable.findById(b);
    return f ? f.options : null;
  }, [r.draggable]), d = Y(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Ha()));
  }, [a, t]), g = Y(() => a.isClaimed(), [a]), h = fe(() => ({
    canGetLock: l,
    tryGetLock: u,
    findClosestDraggableId: p,
    findOptionsForDraggable: c,
    tryReleaseLock: d,
    isLockClaimed: g
  }), [l, u, p, c, d, g]);
  jw(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const rS = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    I.version.startsWith("16") || I.version.startsWith("17") ? r() : sr(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), nS = (e) => ({
  ...Yr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Yr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function $r(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find store from lazy ref") : D()), e.current;
}
function oS(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = M(null);
  gw();
  const s = es(e), l = Y(() => rS(s.current), [s]), u = Y(() => nS(s.current), [s]), p = ow(t), c = lw({
    contextId: t,
    text: i
  }), d = Jx(t, o), g = Y((A) => {
    $r(a).dispatch(A);
  }, []), h = fe(() => Dc({
    publishWhileDragging: AE,
    updateDroppableScroll: TE,
    updateDroppableIsEnabled: RE,
    updateDroppableIsCombineEnabled: VE,
    collectionStarting: $E
  }, g), [g]), b = ew(), f = fe(() => _x(b, h), [b, h]), y = fe(() => zx({
    scrollWindow: Ix,
    scrollDroppable: f.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Dc({
      move: kf
    }, g)
  }), [f.scrollDroppable, g, u]), O = Qx(t), E = fe(() => Ox({
    announce: p,
    autoScroller: y,
    dimensionMarshal: f,
    focusMarshal: O,
    getResponders: l,
    styleMarshal: d
  }), [p, y, f, O, l, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && je("unexpected store change"), a.current = E;
  const v = Y(() => {
    const A = $r(a);
    A.getState().phase !== "IDLE" && A.dispatch(Ha());
  }, []), m = Y(() => {
    const A = $r(a).getState();
    return A.phase === "DROP_ANIMATING" ? !0 : A.phase === "IDLE" ? !1 : A.isDragging;
  }, []), x = fe(() => ({
    isDragging: m,
    tryAbort: v
  }), [m, v]);
  r(x);
  const N = Y((A) => Qf($r(a).getState(), A), []), C = Y(() => Jt($r(a).getState()), []), V = fe(() => ({
    marshal: f,
    focus: O,
    contextId: t,
    canLift: N,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: c,
    registry: b
  }), [t, f, c, O, N, C, b]);
  return tS({
    contextId: t,
    store: E,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ce(() => v, [v]), I.createElement(Zn.Provider, {
    value: V
  }, I.createElement(ty, {
    context: Ja,
    store: E
  }, e.children));
}
let iS = 0;
function aS() {
  return fe(() => `${iS++}`, []);
}
function sS() {
  return I.useId();
}
var cS = "useId" in I ? sS : aS;
function lS(e) {
  const t = cS(), r = e.dragHandleUsageInstructions || Sn.dragHandleUsageInstructions;
  return I.createElement(hy, null, (n) => I.createElement(oS, {
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
const hl = {
  dragging: 5e3,
  dropAnimating: 4500
}, uS = (e, t) => t ? Rr.drop(t.duration) : e ? Rr.snap : Rr.fluid, dS = (e, t) => {
  if (e)
    return t ? qr.opacity.drop : qr.opacity.combining;
}, pS = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function fS(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = pS(e), l = !!i, u = l ? Pi.drop(n, a) : Pi.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: uS(s, i),
    transform: u,
    opacity: dS(a, l),
    zIndex: l ? hl.dropAnimating : hl.dragging,
    pointerEvents: "none"
  };
}
function mS(e) {
  return {
    transform: Pi.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function gS(e) {
  return e.type === "DRAGGING" ? fS(e) : mS(e);
}
function bS(e, t, r = Ze) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = vf(o, n), a = Fn(i, r), s = {
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
function hS(e) {
  const t = Qa("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = fe(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Y((g) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot get dimension when no ref is set") : D()), bS(r, h, g);
  }, [r, o]), p = fe(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  bt(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), bt(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = c.current;
    c.current = p, n.draggable.update(p, g);
  }, [p, n.draggable]);
}
var rs = I.createContext(null);
function pm(e) {
  e && pn(e) || (process.env.NODE_ENV !== "production" ? D(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : D());
}
function vS(e, t, r) {
  fn(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? D(!1, "Draggable requires a draggableId") : D(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? D(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : D(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? D(!1, `${n(o)} requires an integer index prop`) : D(!1)), e.mapped.type !== "DRAGGING" && (pm(r()), e.isEnabled && (om(t, o) || (process.env.NODE_ENV !== "production" ? D(!1, `${n(o)} Unable to find drag handle`) : D(!1))));
  });
}
function yS(e) {
  Za(() => {
    const t = M(e);
    fn(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? D(!1, "Draggable isClone prop value changed during component life") : D(!1));
    }, [e]);
  });
}
function Gn(e) {
  const t = Nt(e);
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find required context") : D()), t;
}
function ES(e) {
  e.preventDefault();
}
const xS = (e) => {
  const t = M(null), r = Y((x = null) => {
    t.current = x;
  }, []), n = Y(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Gn(Zn), {
    type: s,
    droppableId: l
  } = Gn(rs), u = fe(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (vS(e, o, n), yS(b), !b) {
    const x = fe(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, n, h, g, d]);
    hS(x);
  }
  const O = fe(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: ES
  } : null, [o, i, c, d]), E = Y((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : sr(y));
  }, [y, f]), v = fe(() => {
    const x = gS(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [o, O, c, f, E, r]), m = fe(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, m));
};
var wS = xS, fm = (e, t) => e === t, mm = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const SS = (e) => e.combine ? e.combine.draggableId : null, OS = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function NS() {
  const e = Qe((o, i) => ({
    x: o,
    y: i
  })), t = Qe((o, i, a = null, s = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = Qe((o, i, a, s, l = null, u = null, p = null) => ({
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
    if (Xr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = gt(o.impact), u = OS(o.impact), p = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, l, u, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], u = a.result, p = u.mode, c = mm(u), d = SS(u), h = {
        duration: o.dropDuration,
        curve: Ua.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? qr.opacity.drop : null,
        scale: d ? qr.scale.drop : null
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
function gm(e = null) {
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
const DS = {
  mapped: {
    type: "SECONDARY",
    offset: Ze,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: gm(null)
  }
};
function CS() {
  const e = Qe((a, s) => ({
    x: a,
    y: s
  })), t = Qe(gm), r = Qe((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(Ze, a, !0) : null, o = (a, s, l, u) => {
    const p = l.displaced.visible[a], c = !!(u.inVirtualList && u.effected[a]), d = Xn(l), g = d && d.draggableId === a ? s : null;
    if (!p) {
      if (!c)
        return n(g);
      if (l.displaced.invisible[a])
        return null;
      const f = Dr(u.displacedBy.point), y = e(f.x, f.y);
      return r(y, g, !0);
    }
    if (c)
      return n(g);
    const h = l.displacedBy.point, b = e(h.x, h.y);
    return r(b, g, p.shouldAnimate);
  };
  return (a, s) => {
    if (Xr(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const _S = () => {
  const e = NS(), t = CS();
  return (n, o) => e(n, o) || t(n, o) || DS;
}, IS = {
  dropAnimationFinished: zf
}, PS = bf(_S, IS, null, {
  context: Ja,
  areStatePropsEqual: fm
})(wS);
var AS = PS;
function bm(e) {
  return Gn(rs).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(AS, e);
}
function $S(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return I.createElement(bm, Vt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const ns = (e) => (t) => e === t, TS = ns("scroll"), RS = ns("auto"), VS = ns("visible"), vl = (e, t) => t(e.overflowX) || t(e.overflowY), MS = (e, t) => t(e.overflowX) && t(e.overflowY), hm = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return vl(r, TS) || vl(r, RS);
}, LS = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Kr(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, D()), !hm(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return MS(n, VS) || process.env.NODE_ENV !== "production" && je(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, os = (e) => e == null ? null : e === document.body ? LS() ? e : null : e === document.documentElement ? null : hm(e) ? e : os(e.parentElement);
var BS = (e) => {
  !e || !os(e.parentElement) || process.env.NODE_ENV !== "production" && je(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ti = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const vm = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : vm(e.parentElement) : !1;
var FS = (e) => {
  const t = os(e), r = vm(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, WS = ({
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
      client: g
    } = s, h = Kf({
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
          value: Ze,
          displacement: Ze
        }
      }
    };
  })(), u = o === "vertical" ? Fa : _f, p = Er({
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
const jS = (e, t) => {
  const r = yf(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, l = Va({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Ma({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var GS = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = jS(e, l), p = Fn(u, n), c = (() => {
    if (!l)
      return null;
    const g = yf(l), h = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: g,
      page: Fn(g, n),
      scroll: Ti(l),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return WS({
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
const kS = {
  passive: !1
}, HS = {
  passive: !0
};
var yl = (e) => e.shouldPublishImmediately ? kS : HS;
const bn = (e) => e && e.env.closestScrollable || null;
function zS(e) {
  const t = M(null), r = Gn(Zn), n = Qa("droppable"), {
    registry: o,
    marshal: i
  } = r, a = es(e), s = fe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = fe(() => Qe((v, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? D(!1, "Can only update scroll when dragging") : D());
    const x = {
      x: v,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = Y(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? Ze : Ti(v.env.closestScrollable);
  }, []), c = Y(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = fe(() => Gr(c), [c]), g = Y(() => {
    const v = t.current, m = bn(v);
    if (v && m || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find scroll options while scrolling") : D()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Y((v, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot collect a droppable while a drag is occurring") : D());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot collect without a droppable ref") : D());
    const C = FS(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = GS({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(pl.contextId, r.contextId), $.addEventListener("scroll", g, yl(V.scrollOptions)), process.env.NODE_ENV !== "production" && BS($)), A;
  }, [r.contextId, s, g, a]), b = Y(() => {
    const v = t.current, m = bn(v);
    return v && m || (process.env.NODE_ENV !== "production" ? D(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : D()), Ti(m);
  }, []), f = Y(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop drag when no active drag") : D());
    const m = bn(v);
    t.current = null, m && (d.cancel(), m.removeAttribute(pl.contextId), m.removeEventListener("scroll", g, yl(v.scrollOptions)));
  }, [g, d]), y = Y((v) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot scroll when there is no drag") : D());
    const x = bn(m);
    x || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot scroll a droppable with no closest scrollable") : D()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), O = fe(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = fe(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: O
  }), [O, s, n]);
  bt(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && je("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [O, s, f, E, i, o.droppable]), bt(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), bt(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function xo() {
}
const El = {
  width: 0,
  height: 0,
  margin: Oy
}, US = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? El : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, qS = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = US({
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
    transition: r !== "none" ? Rr.placeholder : null
  };
}, YS = (e) => {
  const t = M(null), r = Y(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = ze(e.animate === "open");
  ce(() => s ? n !== "open" ? (r(), l(!1), xo) : t.current ? xo : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : xo, [n, s, r]);
  const u = Y((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = qS({
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
var KS = I.memo(YS);
function wo(e) {
  return typeof e == "boolean";
}
function So(e, t) {
  t.forEach((r) => r(e));
}
const XS = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? D(!1, "A Droppable requires a droppableId prop") : D()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? D(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : D());
}, function({
  props: t
}) {
  wo(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? D(!1, "isDropDisabled must be a boolean") : D()), wo(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? D(!1, "isCombineEnabled must be a boolean") : D()), wo(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? D(!1, "ignoreContainerClipping must be a boolean") : D());
}, function({
  getDroppableRef: t
}) {
  pm(t());
}], JS = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && je(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], QS = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? D(!1, "Must provide a clone render function (renderClone) for virtual lists") : D());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? D(!1, "Expected virtual list to not have a placeholder") : D());
}];
function ZS(e) {
  fn(() => {
    So(e, XS), e.props.mode === "standard" && So(e, JS), e.props.mode === "virtual" && So(e, QS);
  });
}
class eO extends I.PureComponent {
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
const tO = (e) => {
  const t = Nt(Zn);
  t || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find app context") : D());
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
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, O = Y(() => o.current, []), E = Y((P = null) => {
    o.current = P;
  }, []), v = Y(() => i.current, []), m = Y((P = null) => {
    i.current = P;
  }, []);
  ZS({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: v
  });
  const x = Y(() => {
    n() && f({
      maxScroll: Jf()
    });
  }, [n, f]);
  zS({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const N = fe(() => I.createElement(eO, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(KS, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = fe(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = fe(() => ({
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
    } = b, k = I.createElement(bm, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, R) => T(z, R, P));
    return Sr.createPortal(k, y());
  }
  return I.createElement(rs.Provider, {
    value: A
  }, a(C, h), $());
};
var rO = tO;
function nO() {
  return document.body || (process.env.NODE_ENV !== "production" ? D(!1, "document.body is not ready") : D()), document.body;
}
const xl = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: nO
}, ym = (e) => {
  let t = {
    ...e
  }, r;
  for (r in xl)
    e[r] === void 0 && (t = {
      ...t,
      [r]: xl[r]
    });
  return t;
}, Oo = (e, t) => e === t.droppable.type, wl = (e, t) => t.draggables[e.draggable.id], oO = () => {
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
  }, r = Qe((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = Qe((i, a, s, l, u, p) => {
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
    const s = ym(a), l = s.droppableId, u = s.type, p = !s.isDropDisabled, c = s.renderClone;
    if (Xr(i)) {
      const d = i.critical;
      if (!Oo(u, d))
        return t;
      const g = wl(d, i.dimensions), h = gt(i.impact) === l;
      return n(l, p, h, h, g, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!Oo(u, d.critical))
        return t;
      const g = wl(d.critical, i.dimensions);
      return n(l, p, mm(d.result) === l, gt(d.impact) === l, g, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!Oo(u, d.critical))
        return t;
      const g = gt(d.impact) === l, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === l;
      return g ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, iO = {
  updateViewportMaxScroll: LE
}, aO = bf(oO, iO, (e, t, r) => ({
  ...ym(r),
  ...e,
  ...t
}), {
  context: Ja,
  areStatePropsEqual: fm
})(rO);
var sO = aO;
const nM = ({
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
  const [p, c] = ze(null), [d, g] = ze(e);
  ce(() => {
    g(e);
  }, [e]);
  const h = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (y) => {
    a == null || a(y), c(y);
  }, f = (y) => {
    if (!y.destination || !(d != null && d.length)) return;
    const O = y.source.index, E = y.destination.index, v = [...d], [m] = v.splice(O, 1);
    v.splice(E, 0, m), g(v);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ Je("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ U("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ U("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ U(jp, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ U(Jp, { className: u, children: /* @__PURE__ */ U("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ U("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ U(lS, { onDragEnd: f, children: /* @__PURE__ */ U(sO, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ Je("table", { className: "w-full", children: [
    /* @__PURE__ */ U("thead", { children: /* @__PURE__ */ U("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((O, E) => /* @__PURE__ */ U(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === O.name.find((v) => v) ? `-${O.name.find((v) => v) ?? ""}` : O.name.find((v) => v) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === O.name.find((v) => v) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: O.title
      },
      E
    )) }) }),
    /* @__PURE__ */ Je(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          d == null ? void 0 : d.map((O, E) => {
            var v;
            return /* @__PURE__ */ U(
              $S,
              {
                isDragDisabled: o,
                draggableId: (v = O == null ? void 0 : O.id) == null ? void 0 : v.toString(),
                index: E,
                children: (m) => {
                  const x = {
                    ...m.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ U(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${p === d[E] && h}`,
                      onClick: () => b(
                        s ? O[s] : O.id
                      ),
                      ref: m.innerRef,
                      ...m.draggableProps,
                      ...m.dragHandleProps,
                      style: x,
                      children: t.map((N, C) => {
                        var A;
                        let V = (A = N == null ? void 0 : N.name) == null ? void 0 : A.reduce(
                          ($, P) => $ == null ? void 0 : $[P],
                          d == null ? void 0 : d[E]
                        );
                        return /* @__PURE__ */ U(
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
              O == null ? void 0 : O.id
            );
          }),
          y.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, oM = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ U(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), cO = ({ name: e, className: t }) => /* @__PURE__ */ U("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ U(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), lO = ({ style: e, text: t }) => /* @__PURE__ */ Je("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ U("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ U("span", { className: "text-base", children: t })
] });
var Sl;
(function(e) {
  e.event = "event", e.props = "prop";
})(Sl || (Sl = {}));
var No = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + No(), "" + No();
function uO() {
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
function dO(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ri = { exports: {} }, Do = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ol;
function pO() {
  if (Ol) return Do;
  Ol = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var g = d(), h = n({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, g, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var g = d();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Do.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Do;
}
var Nl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dl;
function fO() {
  return Dl || (Dl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
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
      var y = f[0].inst, O = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && O({ inst: y });
        },
        [g, b, h]
      ), s(
        function() {
          return r(y) && O({ inst: y }), g(function() {
            r(y) && O({ inst: y });
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
    function n(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Nl.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Nl;
}
process.env.NODE_ENV === "production" ? Ri.exports = pO() : Ri.exports = fO();
var is = Ri.exports, Co = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cl;
function mO() {
  if (Cl) return Co;
  Cl = 1;
  var e = I, t = is;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Co.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!O) {
            if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var O = !1, E, v, m = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          m === null ? void 0 : function() {
            return y(m());
          }
        ];
      },
      [p, c, d, g]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, Co;
}
var _l = {};
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
function gO() {
  return Il || (Il = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = is, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    _l.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!O) {
              if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var O = !1, E, v, m = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            m === null ? void 0 : function() {
              return y(m());
            }
          ];
        },
        [p, c, d, g]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), _l;
}
process.env.NODE_ENV === "production" ? mO() : gO();
function bO(e) {
  e();
}
let Em = bO;
const hO = (e) => Em = e, vO = () => Em, Pl = Symbol.for("react-redux-context"), Al = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function yO() {
  var e;
  if (!_.createContext) return {};
  const t = (e = Al[Pl]) != null ? e : Al[Pl] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const EO = /* @__PURE__ */ yO(), xO = () => {
  throw new Error("uSES not initialized!");
};
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gr.apply(null, arguments);
}
function xm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Vi = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $l;
function wO() {
  if ($l) return ye;
  $l = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case p:
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
  function v(m) {
    return E(m) === u;
  }
  return ye.AsyncMode = l, ye.ConcurrentMode = u, ye.ContextConsumer = s, ye.ContextProvider = a, ye.Element = t, ye.ForwardRef = p, ye.Fragment = n, ye.Lazy = h, ye.Memo = g, ye.Portal = r, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = c, ye.isAsyncMode = function(m) {
    return v(m) || E(m) === l;
  }, ye.isConcurrentMode = v, ye.isContextConsumer = function(m) {
    return E(m) === s;
  }, ye.isContextProvider = function(m) {
    return E(m) === a;
  }, ye.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, ye.isForwardRef = function(m) {
    return E(m) === p;
  }, ye.isFragment = function(m) {
    return E(m) === n;
  }, ye.isLazy = function(m) {
    return E(m) === h;
  }, ye.isMemo = function(m) {
    return E(m) === g;
  }, ye.isPortal = function(m) {
    return E(m) === r;
  }, ye.isProfiler = function(m) {
    return E(m) === i;
  }, ye.isStrictMode = function(m) {
    return E(m) === o;
  }, ye.isSuspense = function(m) {
    return E(m) === c;
  }, ye.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === o || m === c || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === p || m.$$typeof === f || m.$$typeof === y || m.$$typeof === O || m.$$typeof === b);
  }, ye.typeOf = E, ye;
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
var Tl;
function SO() {
  return Tl || (Tl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === u || w === i || w === o || w === c || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === f || w.$$typeof === y || w.$$typeof === O || w.$$typeof === b);
    }
    function v(w) {
      if (typeof w == "object" && w !== null) {
        var le = w.$$typeof;
        switch (le) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return S;
              default:
                var se = S && S.$$typeof;
                switch (se) {
                  case s:
                  case p:
                  case h:
                  case g:
                  case a:
                    return se;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = g, k = r, z = i, R = o, B = c, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(w) || v(w) === l;
    }
    function H(w) {
      return v(w) === u;
    }
    function L(w) {
      return v(w) === s;
    }
    function q(w) {
      return v(w) === a;
    }
    function K(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function ne(w) {
      return v(w) === p;
    }
    function ae(w) {
      return v(w) === n;
    }
    function ue(w) {
      return v(w) === h;
    }
    function J(w) {
      return v(w) === g;
    }
    function oe(w) {
      return v(w) === r;
    }
    function W(w) {
      return v(w) === i;
    }
    function ie(w) {
      return v(w) === o;
    }
    function We(w) {
      return v(w) === c;
    }
    Ie.AsyncMode = m, Ie.ConcurrentMode = x, Ie.ContextConsumer = N, Ie.ContextProvider = C, Ie.Element = V, Ie.ForwardRef = A, Ie.Fragment = $, Ie.Lazy = P, Ie.Memo = T, Ie.Portal = k, Ie.Profiler = z, Ie.StrictMode = R, Ie.Suspense = B, Ie.isAsyncMode = G, Ie.isConcurrentMode = H, Ie.isContextConsumer = L, Ie.isContextProvider = q, Ie.isElement = K, Ie.isForwardRef = ne, Ie.isFragment = ae, Ie.isLazy = ue, Ie.isMemo = J, Ie.isPortal = oe, Ie.isProfiler = W, Ie.isStrictMode = ie, Ie.isSuspense = We, Ie.isValidElementType = E, Ie.typeOf = v;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? Vi.exports = wO() : Vi.exports = SO();
var OO = Vi.exports, as = OO, NO = {
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
}, DO = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, CO = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ss = {};
ss[as.ForwardRef] = CO;
ss[as.Memo] = wm;
function Rl(e) {
  return as.isMemo(e) ? wm : ss[e.$$typeof] || NO;
}
var _O = Object.defineProperty, IO = Object.getOwnPropertyNames, Vl = Object.getOwnPropertySymbols, PO = Object.getOwnPropertyDescriptor, AO = Object.getPrototypeOf, Ml = Object.prototype;
function Sm(e, t, r) {
  if (typeof t != "string") {
    if (Ml) {
      var n = AO(t);
      n && n !== Ml && Sm(e, n, r);
    }
    var o = IO(t);
    Vl && (o = o.concat(Vl(t)));
    for (var i = Rl(e), a = Rl(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!DO[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = PO(t, l);
        try {
          _O(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var $O = Sm;
const Ll = /* @__PURE__ */ dO($O);
var Mi = { exports: {} }, Ee = {};
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
function TO() {
  if (Bl) return Ee;
  Bl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
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
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === g || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, Ee.typeOf = b, Ee;
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
var Fl;
function RO() {
  return Fl || (Fl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function v(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || O || S === n || S === u || S === p || y || S === g || h || b || f || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var se = S.$$typeof;
        switch (se) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return me;
              default:
                var j = me && me.$$typeof;
                switch (j) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return j;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, z = n, R = u, B = p, F = !1, G = !1;
    function H(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function ne(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ae(S) {
      return m(S) === l;
    }
    function ue(S) {
      return m(S) === r;
    }
    function J(S) {
      return m(S) === d;
    }
    function oe(S) {
      return m(S) === c;
    }
    function W(S) {
      return m(S) === t;
    }
    function ie(S) {
      return m(S) === o;
    }
    function We(S) {
      return m(S) === n;
    }
    function w(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === p;
    }
    Pe.ContextConsumer = x, Pe.ContextProvider = N, Pe.Element = C, Pe.ForwardRef = V, Pe.Fragment = A, Pe.Lazy = $, Pe.Memo = P, Pe.Portal = T, Pe.Profiler = k, Pe.StrictMode = z, Pe.Suspense = R, Pe.SuspenseList = B, Pe.isAsyncMode = H, Pe.isConcurrentMode = L, Pe.isContextConsumer = q, Pe.isContextProvider = K, Pe.isElement = ne, Pe.isForwardRef = ae, Pe.isFragment = ue, Pe.isLazy = J, Pe.isMemo = oe, Pe.isPortal = W, Pe.isProfiler = ie, Pe.isStrictMode = We, Pe.isSuspense = w, Pe.isSuspenseList = le, Pe.isValidElementType = v, Pe.typeOf = m;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? Mi.exports = TO() : Mi.exports = RO();
var Wl = Mi.exports;
function cs(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function _o(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || cs(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function VO(e, t, r) {
  _o(e, "mapStateToProps"), _o(t, "mapDispatchToProps"), _o(r, "mergeProps");
}
const MO = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function LO(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function g(O, E) {
    return l = O, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const O = e(l, u), E = !a(O, p);
    return p = O, E && (d = r(p, c, u)), d;
  }
  function y(O, E) {
    const v = !i(E, u), m = !o(O, l, E, u);
    return l = O, u = E, v && m ? h() : v ? b() : m ? f() : d;
  }
  return function(O, E) {
    return s ? y(O, E) : g(O, E);
  };
}
function BO(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = xm(t, MO);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && VO(a, s, l), LO(a, s, l, e, i);
}
function FO(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function WO(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Om(e, t, r) {
  WO(e) || cs(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Li(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function jl(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Nm(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = jl(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = jl(s), s = o(i, a)), process.env.NODE_ENV !== "production" && Om(s, n, t), s;
    }, o;
  };
}
function ls(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function jO(e) {
  return e && typeof e == "object" ? Li((t) => (
    // @ts-ignore
    FO(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Nm(e, "mapDispatchToProps")
  ) : ls(e, "mapDispatchToProps") : Li((t) => ({
    dispatch: t
  }));
}
function GO(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Nm(e, "mapStateToProps")
  ) : ls(e, "mapStateToProps") : Li(() => ({}));
}
function kO(e, t, r) {
  return gr({}, r, e, t);
}
function HO(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && Om(i, r, "mergeProps")), i;
    };
  };
}
function zO(e) {
  return e ? typeof e == "function" ? HO(e) : ls(e, "mergeProps") : () => kO;
}
function UO() {
  const e = vO();
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
const Gl = {
  notify() {
  },
  get: () => []
};
function qO(e, t) {
  let r, n = Gl, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = UO());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Gl);
  }
  function d() {
    i || (i = !0, p());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => n
  };
  return h;
}
const YO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bi = YO ? _.useLayoutEffect : _.useEffect;
function kl(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Io(e, t) {
  if (kl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !kl(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const KO = ["reactReduxForwardedRef"];
let Dm = xO;
const XO = (e) => {
  Dm = e;
}, JO = [null, null], QO = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function ZO(e, t, r) {
  Bi(() => e(...t), r);
}
function eN(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function tN(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const g = () => {
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
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function rN(e, t) {
  return e === t;
}
let Hl = !1;
function Cm(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = rN,
  areOwnPropsEqual: i = Io,
  areStatePropsEqual: a = Io,
  areMergedPropsEqual: s = Io,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = EO
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Hl && (Hl = !0, cs('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = GO(e), d = jO(t), g = zO(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Wl.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${QO(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, O = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(m) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = m, ie = xm(m, KO);
        return [m.context, W, ie];
      }, [m]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      Wl.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? m.store : A.store, k = P ? A.getServerState : T.getState, z = _.useMemo(() => BO(T.dispatch, O), [T]), [R, B] = _.useMemo(() => {
        if (!h) return JO;
        const W = qO(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : gr({}, A, {
        subscription: R
      }), [$, A, R]), G = _.useRef(), H = _.useRef(C), L = _.useRef(), q = _.useRef(!1);
      _.useRef(!1);
      const K = _.useRef(!1), ne = _.useRef();
      Bi(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const ae = _.useMemo(() => () => L.current && C === H.current ? L.current : z(T.getState(), C), [T, C]), ue = _.useMemo(() => (W) => R ? tN(
        h,
        T,
        R,
        // @ts-ignore
        z,
        H,
        G,
        q,
        K,
        L,
        B,
        W
      ) : () => {
      }, [R]);
      ZO(eN, [H, G, q, C, L, B]);
      let J;
      try {
        J = Dm(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ue,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ae,
          k ? () => z(k(), C) : ae
        );
      } catch (W) {
        throw ne.current && (W.message += `
The error may be correlated with this previous error:
${ne.current.stack}

`), W;
      }
      Bi(() => {
        ne.current = void 0, L.current = void 0, G.current = J;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, gr({}, J, {
          ref: N
        }))
      ), [N, b, J]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const m = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, gr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = y, m.WrappedComponent = b, Ll(m, b);
    }
    return Ll(v, b);
  };
}
XO(is.useSyncExternalStore);
hO(Or);
function nN(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function _m(e, t) {
  var r = ze(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && nN(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ce(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function oN(e, t) {
  return _m(function() {
    return e;
  }, t);
}
var et = _m, Ue = oN, iN = process.env.NODE_ENV === "production", Po = "Invariant failed";
function zl(e, t) {
  if (iN)
    throw new Error(Po);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Po, ": ").concat(r) : Po;
  throw new Error(n);
}
var lr = function(e) {
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
}, Im = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Ul = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, aN = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Ao = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, us = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Ao : r, o = e.border, i = o === void 0 ? Ao : o, a = e.padding, s = a === void 0 ? Ao : a, l = lr(Im(t, n)), u = lr(Ul(t, i)), p = lr(Ul(u, s));
  return {
    marginBox: l,
    borderBox: lr(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, vt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? zl(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : zl()), n;
}, sN = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, cN = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = aN(r, t);
  return us({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, Fi = function(e, t) {
  return t === void 0 && (t = sN()), cN(e, t);
}, Pm = function(e, t) {
  var r = {
    top: vt(t.marginTop),
    right: vt(t.marginRight),
    bottom: vt(t.marginBottom),
    left: vt(t.marginLeft)
  }, n = {
    top: vt(t.paddingTop),
    right: vt(t.paddingRight),
    bottom: vt(t.paddingBottom),
    left: vt(t.paddingLeft)
  }, o = {
    top: vt(t.borderTopWidth),
    right: vt(t.borderRightWidth),
    bottom: vt(t.borderBottomWidth),
    left: vt(t.borderLeftWidth)
  };
  return us({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, Am = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Pm(t, r);
}, ql = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function lN(e, t) {
  return !!(e === t || ql(e) && ql(t));
}
function uN(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!lN(e[r], t[r]))
      return !1;
  return !0;
}
function at(e, t) {
  t === void 0 && (t = uN);
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
var dN = function(e) {
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
const pN = process.env.NODE_ENV === "production", fN = /[ \t]{2,}/g, mN = /^[ \t]*/gm, Yl = (e) => e.replace(fN, " ").replace(mN, "").trim(), gN = (e) => Yl(`
  %c@hello-pangea/dnd

  %c${Yl(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), bN = (e) => [gN(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], hN = "__@hello-pangea/dnd-disable-dev-warnings";
function $m(e, t) {
  pN || typeof window < "u" && window[hN] || console[e](...bN(t));
}
const Bt = $m.bind(null, "warn"), Wi = $m.bind(null, "error");
function vN() {
}
function yN(e, t) {
  return {
    ...e,
    ...t
  };
}
function EN(e, t, r) {
  const n = t.map((o) => {
    const i = yN(r, o.options);
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
const xN = process.env.NODE_ENV === "production", Kl = "Invariant failed";
class Jr extends Error {
}
Jr.prototype.toString = function() {
  return this.message;
};
function Q(e, t) {
  throw xN ? new Jr(Kl) : new Jr(`${Kl}: ${t || ""}`);
}
class iM extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = vN, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Bt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Jr && (r.preventDefault(), process.env.NODE_ENV !== "production" && Wi(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = EN(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Jr) {
      process.env.NODE_ENV !== "production" && Wi(t.message), this.setState({});
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
const tr = {
  x: 0,
  y: 0
}, wN = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), SN = (e, t) => e.x === t.x && e.y === t.y, ON = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), NN = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var DN = (e, t) => {
  const r = lr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const CN = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), _N = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, IN = (e, t) => t ? CN(e, t.scroll.diff.displacement) : e, PN = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, AN = (e, t) => t && t.shouldClipSubject ? DN(t.pageMarginBox, e) : lr(e);
var $N = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = IN(e.marginBox, n), i = PN(o, r, t), a = AN(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
at((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
at((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const TN = at((e) => Object.values(e)), RN = at((e) => Object.values(e));
at((e, t) => RN(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function VN(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
at((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const MN = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, LN = {
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
at(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: NN(e.line, r)
  };
});
var On = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const BN = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), FN = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), ds = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Qr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, WN = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, zt = `${WN.outOfTheWay}s ${ds.outOfTheWay}`, Nn = {
  fluid: `opacity ${zt}`,
  snap: `transform ${zt}, opacity ${zt}`,
  drop: (e) => {
    const t = `${e}s ${ds.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${zt}`,
  placeholder: `height ${zt}, width ${zt}, margin ${zt}`
}, Xl = (e) => SN(e, tr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ji = {
  moveTo: Xl,
  drop: (e, t) => {
    const r = Xl(e);
    if (r)
      return t ? `${r} scale(${Qr.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Tm = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = wN({
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
}, jN = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? Q(!1, "Cannot find document.documentElement") : Q()), e;
}, GN = () => {
  const e = jN();
  return Tm({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
at((e) => TN(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Rm = "data-rfd", Jl = (() => {
  const e = `${Rm}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ql = {
  contextId: `${Rm}-scroll-container-context-id`
}, kN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ar : ce;
var Vr = kN;
function HN(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var zN = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Vm(e) {
  return e instanceof zN(e).HTMLElement;
}
function UN(e, t) {
  const r = `[${Jl.contextId}="${e}"]`, n = HN(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Bt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Jl.draggableId) === t);
  return o ? Vm(o) ? o : (process.env.NODE_ENV !== "production" && Bt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Bt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Mm = I.createContext(null), qN = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? Q(!1, "Cannot find document.body") : Q()), e;
};
let YN = 0;
const Lm = {
  separator: "::"
};
function KN(e, t = Lm) {
  return et(() => `${e}${t.separator}${YN++}`, [t.separator, e]);
}
function XN(e, t = Lm) {
  const r = I.useId();
  return et(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Bm = "useId" in I ? XN : KN, ps = I.createContext(null);
function Fm(e) {
  process.env.NODE_ENV !== "production" && e();
}
function fs(e, t) {
  Fm(() => {
    ce(() => {
      try {
        e();
      } catch (r) {
        Wi(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function JN(e) {
  const t = M(e);
  return ce(() => {
    t.current = e;
  }), t;
}
function ms(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Zl = {
  dragging: 5e3,
  dropAnimating: 4500
}, QN = (e, t) => t ? Nn.drop(t.duration) : e ? Nn.snap : Nn.fluid, ZN = (e, t) => {
  if (e)
    return t ? Qr.opacity.drop : Qr.opacity.combining;
}, eD = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function tD(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = eD(e), s = !!o, l = s ? ji.drop(r, i) : ji.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: QN(a, o),
    transform: l,
    opacity: ZN(i, s),
    zIndex: s ? Zl.dropAnimating : Zl.dragging,
    pointerEvents: "none"
  };
}
function rD(e) {
  return {
    transform: ji.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function nD(e) {
  return e.type === "DRAGGING" ? tD(e) : rD(e);
}
function oD(e, t, r = tr) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Pm(o, n), a = Fi(i, r), s = {
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
function iD(e) {
  const t = Bm("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = et(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Ue((g) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? Q(!1, "Cannot get dimension when no ref is set") : Q()), oD(r, h, g);
  }, [r, o]), p = et(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  Vr(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Vr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = c.current;
    c.current = p, n.draggable.update(p, g);
  }, [p, n.draggable]);
}
var gs = I.createContext(null);
function Wm(e) {
  e && Vm(e) || (process.env.NODE_ENV !== "production" ? Q(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : Q());
}
function aD(e, t, r) {
  fs(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? Q(!1, "Draggable requires a draggableId") : Q(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? Q(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : Q(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? Q(!1, `${n(o)} requires an integer index prop`) : Q(!1)), e.mapped.type !== "DRAGGING" && (Wm(r()), e.isEnabled && (UN(t, o) || (process.env.NODE_ENV !== "production" ? Q(!1, `${n(o)} Unable to find drag handle`) : Q(!1))));
  });
}
function sD(e) {
  Fm(() => {
    const t = M(e);
    fs(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? Q(!1, "Draggable isClone prop value changed during component life") : Q(!1));
    }, [e]);
  });
}
function kn(e) {
  const t = Nt(e);
  return t || (process.env.NODE_ENV !== "production" ? Q(!1, "Could not find required context") : Q()), t;
}
function cD(e) {
  e.preventDefault();
}
const lD = (e) => {
  const t = M(null), r = Ue((x = null) => {
    t.current = x;
  }, []), n = Ue(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = kn(ps), {
    type: s,
    droppableId: l
  } = kn(gs), u = et(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (aD(e, o, n), sD(b), !b) {
    const x = et(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, n, h, g, d]);
    iD(x);
  }
  const O = et(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: cD
  } : null, [o, i, c, d]), E = Ue((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : sr(y));
  }, [y, f]), v = et(() => {
    const x = nD(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [o, O, c, f, E, r]), m = et(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, m));
};
var uD = lD, jm = (e, t) => e === t, Gm = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const dD = (e) => e.combine ? e.combine.draggableId : null, pD = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function fD() {
  const e = at((n, o) => ({
    x: n,
    y: o
  })), t = at((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = at((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (ms(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = On(n.impact), l = pD(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Gm(l), c = dD(l), d = {
        duration: n.dropDuration,
        curve: ds.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? Qr.opacity.drop : null,
        scale: c ? Qr.scale.drop : null
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
function km(e = null) {
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
const mD = {
  mapped: {
    type: "SECONDARY",
    offset: tr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: km(null)
  }
};
function gD() {
  const e = at((i, a) => ({
    x: i,
    y: a
  })), t = at(km), r = at((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(tr, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = VN(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = ON(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (ms(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const bD = () => {
  const e = fD(), t = gD();
  return (r, n) => e(r, n) || t(r, n) || mD;
}, hD = {
  dropAnimationFinished: FN
}, vD = Cm(bD, hD, null, {
  context: Mm,
  areStatePropsEqual: jm
})(uD);
var yD = vD;
function ED(e) {
  return kn(gs).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(yD, e);
}
const bs = (e) => (t) => e === t, xD = bs("scroll"), wD = bs("auto"), SD = bs("visible"), eu = (e, t) => t(e.overflowX) || t(e.overflowY), OD = (e, t) => t(e.overflowX) && t(e.overflowY), Hm = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return eu(r, xD) || eu(r, wD);
}, ND = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = qN(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, Q()), !Hm(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return OD(n, SD) || process.env.NODE_ENV !== "production" && Bt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, hs = (e) => e == null ? null : e === document.body ? ND() ? e : null : e === document.documentElement ? null : Hm(e) ? e : hs(e.parentElement);
var DD = (e) => {
  !e || !hs(e.parentElement) || process.env.NODE_ENV !== "production" && Bt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Gi = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const zm = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : zm(e.parentElement) : !1;
var CD = (e) => {
  const t = hs(e), r = zm(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, _D = ({
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
    } = s, g = Tm({
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
        max: g,
        diff: {
          value: tr,
          displacement: tr
        }
      }
    };
  })(), u = o === "vertical" ? MN : LN, p = $N({
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
const ID = (e, t) => {
  const r = Am(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = Im({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return us({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var PD = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = ID(e, l), p = Fi(u, n), c = (() => {
    if (!l)
      return null;
    const d = Am(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: Fi(d, n),
      scroll: Gi(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return _D({
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
const AD = {
  passive: !1
}, $D = {
  passive: !0
};
var tu = (e) => e.shouldPublishImmediately ? AD : $D;
const hn = (e) => e && e.env.closestScrollable || null;
function TD(e) {
  const t = M(null), r = kn(ps), n = Bm("droppable"), {
    registry: o,
    marshal: i
  } = r, a = JN(e), s = et(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = et(() => at((v, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? Q(!1, "Can only update scroll when dragging") : Q());
    const x = {
      x: v,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = Ue(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? tr : Gi(v.env.closestScrollable);
  }, []), c = Ue(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = et(() => dN(c), [c]), g = Ue(() => {
    const v = t.current, m = hn(v);
    if (v && m || (process.env.NODE_ENV !== "production" ? Q(!1, "Could not find scroll options while scrolling") : Q()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Ue((v, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? Q(!1, "Cannot collect a droppable while a drag is occurring") : Q());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? Q(!1, "Cannot collect without a droppable ref") : Q());
    const C = CD(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = PD({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Ql.contextId, r.contextId), $.addEventListener("scroll", g, tu(V.scrollOptions)), process.env.NODE_ENV !== "production" && DD($)), A;
  }, [r.contextId, s, g, a]), b = Ue(() => {
    const v = t.current, m = hn(v);
    return v && m || (process.env.NODE_ENV !== "production" ? Q(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : Q()), Gi(m);
  }, []), f = Ue(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? Q(!1, "Cannot stop drag when no active drag") : Q());
    const m = hn(v);
    t.current = null, m && (d.cancel(), m.removeAttribute(Ql.contextId), m.removeEventListener("scroll", g, tu(v.scrollOptions)));
  }, [g, d]), y = Ue((v) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? Q(!1, "Cannot scroll when there is no drag") : Q());
    const x = hn(m);
    x || (process.env.NODE_ENV !== "production" ? Q(!1, "Cannot scroll a droppable with no closest scrollable") : Q()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), O = et(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = et(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: O
  }), [O, s, n]);
  Vr(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Bt("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [O, s, f, E, i, o.droppable]), Vr(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Vr(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function $o() {
}
const RD = {
  width: 0,
  height: 0,
  margin: _N
}, VD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? RD : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, MD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = VD({
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
    transition: r !== "none" ? Nn.placeholder : null
  };
}, LD = (e) => {
  const t = M(null), r = Ue(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = ze(e.animate === "open");
  ce(() => s ? n !== "open" ? (r(), l(!1), $o) : t.current ? $o : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : $o, [n, s, r]);
  const u = Ue((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = MD({
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
var BD = I.memo(LD);
function To(e) {
  return typeof e == "boolean";
}
function Ro(e, t) {
  t.forEach((r) => r(e));
}
const FD = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? Q(!1, "A Droppable requires a droppableId prop") : Q()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? Q(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : Q());
}, function({
  props: e
}) {
  To(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? Q(!1, "isDropDisabled must be a boolean") : Q()), To(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? Q(!1, "isCombineEnabled must be a boolean") : Q()), To(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? Q(!1, "ignoreContainerClipping must be a boolean") : Q());
}, function({
  getDroppableRef: e
}) {
  Wm(e());
}], WD = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Bt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], jD = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? Q(!1, "Must provide a clone render function (renderClone) for virtual lists") : Q());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? Q(!1, "Expected virtual list to not have a placeholder") : Q());
}];
function GD(e) {
  fs(() => {
    Ro(e, FD), e.props.mode === "standard" && Ro(e, WD), e.props.mode === "virtual" && Ro(e, jD);
  });
}
class kD extends I.PureComponent {
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
const HD = (e) => {
  const t = Nt(ps);
  t || (process.env.NODE_ENV !== "production" ? Q(!1, "Could not find app context") : Q());
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
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, O = Ue(() => o.current, []), E = Ue((P = null) => {
    o.current = P;
  }, []), v = Ue(() => i.current, []), m = Ue((P = null) => {
    i.current = P;
  }, []);
  GD({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: v
  });
  const x = Ue(() => {
    n() && f({
      maxScroll: GN()
    });
  }, [n, f]);
  TD({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const N = et(() => I.createElement(kD, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(BD, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = et(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = et(() => ({
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
    } = b, k = I.createElement(ED, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, R) => T(z, R, P));
    return Sr.createPortal(k, y());
  }
  return I.createElement(gs.Provider, {
    value: A
  }, a(C, h), $());
};
var zD = HD;
function UD() {
  return document.body || (process.env.NODE_ENV !== "production" ? Q(!1, "document.body is not ready") : Q()), document.body;
}
const ru = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: UD
}, Um = (e) => {
  let t = {
    ...e
  }, r;
  for (r in ru)
    e[r] === void 0 && (t = {
      ...t,
      [r]: ru[r]
    });
  return t;
}, Vo = (e, t) => e === t.droppable.type, nu = (e, t) => t.draggables[e.draggable.id], qD = () => {
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
  }, r = at((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = at((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
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
    const a = Um(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (ms(o)) {
      const c = o.critical;
      if (!Vo(l, c))
        return t;
      const d = nu(c, o.dimensions), g = On(o.impact) === s;
      return n(s, u, g, g, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!Vo(l, c.critical))
        return t;
      const d = nu(c.critical, o.dimensions);
      return n(s, u, Gm(c.result) === s, On(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!Vo(l, c.critical))
        return t;
      const d = On(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, YD = {
  updateViewportMaxScroll: BN
};
Cm(qD, YD, (e, t, r) => ({
  ...Um(r),
  ...e,
  ...t
}), {
  context: Mm,
  areStatePropsEqual: jm
})(zD);
var ou;
(function(e) {
  e.event = "event", e.props = "prop";
})(ou || (ou = {}));
var iu = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + iu(), "" + iu();
function KD(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ki = { exports: {} }, Mo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var au;
function XD() {
  if (au) return Mo;
  au = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var g = d(), h = n({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, g, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var g = d();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Mo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Mo;
}
var su = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cu;
function JD() {
  return cu || (cu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
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
      var y = f[0].inst, O = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && O({ inst: y });
        },
        [g, b, h]
      ), s(
        function() {
          return r(y) && O({ inst: y }), g(function() {
            r(y) && O({ inst: y });
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
    function n(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    su.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), su;
}
process.env.NODE_ENV === "production" ? ki.exports = XD() : ki.exports = JD();
var vs = ki.exports, Lo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lu;
function QD() {
  if (lu) return Lo;
  lu = 1;
  var e = I, t = vs;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Lo.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!O) {
            if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var O = !1, E, v, m = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          m === null ? void 0 : function() {
            return y(m());
          }
        ];
      },
      [p, c, d, g]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, Lo;
}
var uu = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var du;
function ZD() {
  return du || (du = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = vs, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    uu.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!O) {
              if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var O = !1, E, v, m = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            m === null ? void 0 : function() {
              return y(m());
            }
          ];
        },
        [p, c, d, g]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), uu;
}
process.env.NODE_ENV === "production" ? QD() : ZD();
function e0(e) {
  e();
}
let qm = e0;
const t0 = (e) => qm = e, r0 = () => qm, pu = Symbol.for("react-redux-context"), fu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function n0() {
  var e;
  if (!_.createContext) return {};
  const t = (e = fu[pu]) != null ? e : fu[pu] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const o0 = /* @__PURE__ */ n0(), i0 = () => {
  throw new Error("uSES not initialized!");
};
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, br.apply(null, arguments);
}
function Ym(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Hi = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mu;
function a0() {
  if (mu) return xe;
  mu = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case p:
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
  function v(m) {
    return E(m) === u;
  }
  return xe.AsyncMode = l, xe.ConcurrentMode = u, xe.ContextConsumer = s, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = p, xe.Fragment = n, xe.Lazy = h, xe.Memo = g, xe.Portal = r, xe.Profiler = i, xe.StrictMode = o, xe.Suspense = c, xe.isAsyncMode = function(m) {
    return v(m) || E(m) === l;
  }, xe.isConcurrentMode = v, xe.isContextConsumer = function(m) {
    return E(m) === s;
  }, xe.isContextProvider = function(m) {
    return E(m) === a;
  }, xe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, xe.isForwardRef = function(m) {
    return E(m) === p;
  }, xe.isFragment = function(m) {
    return E(m) === n;
  }, xe.isLazy = function(m) {
    return E(m) === h;
  }, xe.isMemo = function(m) {
    return E(m) === g;
  }, xe.isPortal = function(m) {
    return E(m) === r;
  }, xe.isProfiler = function(m) {
    return E(m) === i;
  }, xe.isStrictMode = function(m) {
    return E(m) === o;
  }, xe.isSuspense = function(m) {
    return E(m) === c;
  }, xe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === o || m === c || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === p || m.$$typeof === f || m.$$typeof === y || m.$$typeof === O || m.$$typeof === b);
  }, xe.typeOf = E, xe;
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
var gu;
function s0() {
  return gu || (gu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === u || w === i || w === o || w === c || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === f || w.$$typeof === y || w.$$typeof === O || w.$$typeof === b);
    }
    function v(w) {
      if (typeof w == "object" && w !== null) {
        var le = w.$$typeof;
        switch (le) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return S;
              default:
                var se = S && S.$$typeof;
                switch (se) {
                  case s:
                  case p:
                  case h:
                  case g:
                  case a:
                    return se;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = g, k = r, z = i, R = o, B = c, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(w) || v(w) === l;
    }
    function H(w) {
      return v(w) === u;
    }
    function L(w) {
      return v(w) === s;
    }
    function q(w) {
      return v(w) === a;
    }
    function K(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function ne(w) {
      return v(w) === p;
    }
    function ae(w) {
      return v(w) === n;
    }
    function ue(w) {
      return v(w) === h;
    }
    function J(w) {
      return v(w) === g;
    }
    function oe(w) {
      return v(w) === r;
    }
    function W(w) {
      return v(w) === i;
    }
    function ie(w) {
      return v(w) === o;
    }
    function We(w) {
      return v(w) === c;
    }
    Ae.AsyncMode = m, Ae.ConcurrentMode = x, Ae.ContextConsumer = N, Ae.ContextProvider = C, Ae.Element = V, Ae.ForwardRef = A, Ae.Fragment = $, Ae.Lazy = P, Ae.Memo = T, Ae.Portal = k, Ae.Profiler = z, Ae.StrictMode = R, Ae.Suspense = B, Ae.isAsyncMode = G, Ae.isConcurrentMode = H, Ae.isContextConsumer = L, Ae.isContextProvider = q, Ae.isElement = K, Ae.isForwardRef = ne, Ae.isFragment = ae, Ae.isLazy = ue, Ae.isMemo = J, Ae.isPortal = oe, Ae.isProfiler = W, Ae.isStrictMode = ie, Ae.isSuspense = We, Ae.isValidElementType = E, Ae.typeOf = v;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? Hi.exports = a0() : Hi.exports = s0();
var c0 = Hi.exports, ys = c0, l0 = {
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
}, u0 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, d0 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Km = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Es = {};
Es[ys.ForwardRef] = d0;
Es[ys.Memo] = Km;
function bu(e) {
  return ys.isMemo(e) ? Km : Es[e.$$typeof] || l0;
}
var p0 = Object.defineProperty, f0 = Object.getOwnPropertyNames, hu = Object.getOwnPropertySymbols, m0 = Object.getOwnPropertyDescriptor, g0 = Object.getPrototypeOf, vu = Object.prototype;
function Xm(e, t, r) {
  if (typeof t != "string") {
    if (vu) {
      var n = g0(t);
      n && n !== vu && Xm(e, n, r);
    }
    var o = f0(t);
    hu && (o = o.concat(hu(t)));
    for (var i = bu(e), a = bu(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!u0[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = m0(t, l);
        try {
          p0(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var b0 = Xm;
const yu = /* @__PURE__ */ KD(b0);
var zi = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eu;
function h0() {
  if (Eu) return we;
  Eu = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
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
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === g || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, we.typeOf = b, we;
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
var xu;
function v0() {
  return xu || (xu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function v(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || O || S === n || S === u || S === p || y || S === g || h || b || f || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var se = S.$$typeof;
        switch (se) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return me;
              default:
                var j = me && me.$$typeof;
                switch (j) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return j;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, z = n, R = u, B = p, F = !1, G = !1;
    function H(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function ne(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ae(S) {
      return m(S) === l;
    }
    function ue(S) {
      return m(S) === r;
    }
    function J(S) {
      return m(S) === d;
    }
    function oe(S) {
      return m(S) === c;
    }
    function W(S) {
      return m(S) === t;
    }
    function ie(S) {
      return m(S) === o;
    }
    function We(S) {
      return m(S) === n;
    }
    function w(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === p;
    }
    $e.ContextConsumer = x, $e.ContextProvider = N, $e.Element = C, $e.ForwardRef = V, $e.Fragment = A, $e.Lazy = $, $e.Memo = P, $e.Portal = T, $e.Profiler = k, $e.StrictMode = z, $e.Suspense = R, $e.SuspenseList = B, $e.isAsyncMode = H, $e.isConcurrentMode = L, $e.isContextConsumer = q, $e.isContextProvider = K, $e.isElement = ne, $e.isForwardRef = ae, $e.isFragment = ue, $e.isLazy = J, $e.isMemo = oe, $e.isPortal = W, $e.isProfiler = ie, $e.isStrictMode = We, $e.isSuspense = w, $e.isSuspenseList = le, $e.isValidElementType = v, $e.typeOf = m;
  }()), $e;
}
process.env.NODE_ENV === "production" ? zi.exports = h0() : zi.exports = v0();
var wu = zi.exports;
function xs(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Bo(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || xs(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function y0(e, t, r) {
  Bo(e, "mapStateToProps"), Bo(t, "mapDispatchToProps"), Bo(r, "mergeProps");
}
const E0 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function x0(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function g(O, E) {
    return l = O, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const O = e(l, u), E = !a(O, p);
    return p = O, E && (d = r(p, c, u)), d;
  }
  function y(O, E) {
    const v = !i(E, u), m = !o(O, l, E, u);
    return l = O, u = E, v && m ? h() : v ? b() : m ? f() : d;
  }
  return function(O, E) {
    return s ? y(O, E) : g(O, E);
  };
}
function w0(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Ym(t, E0);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && y0(a, s, l), x0(a, s, l, e, i);
}
function S0(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function O0(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Jm(e, t, r) {
  O0(e) || xs(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ui(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Su(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Qm(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = Su(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = Su(s), s = o(i, a)), process.env.NODE_ENV !== "production" && Jm(s, n, t), s;
    }, o;
  };
}
function ws(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function N0(e) {
  return e && typeof e == "object" ? Ui((t) => (
    // @ts-ignore
    S0(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Qm(e, "mapDispatchToProps")
  ) : ws(e, "mapDispatchToProps") : Ui((t) => ({
    dispatch: t
  }));
}
function D0(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Qm(e, "mapStateToProps")
  ) : ws(e, "mapStateToProps") : Ui(() => ({}));
}
function C0(e, t, r) {
  return br({}, r, e, t);
}
function _0(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && Jm(i, r, "mergeProps")), i;
    };
  };
}
function I0(e) {
  return e ? typeof e == "function" ? _0(e) : ws(e, "mergeProps") : () => C0;
}
function P0() {
  const e = r0();
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
const Ou = {
  notify() {
  },
  get: () => []
};
function A0(e, t) {
  let r, n = Ou, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = P0());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Ou);
  }
  function d() {
    i || (i = !0, p());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => n
  };
  return h;
}
const $0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qi = $0 ? _.useLayoutEffect : _.useEffect;
function Nu(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Fo(e, t) {
  if (Nu(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Nu(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const T0 = ["reactReduxForwardedRef"];
let Zm = i0;
const R0 = (e) => {
  Zm = e;
}, V0 = [null, null], M0 = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function L0(e, t, r) {
  qi(() => e(...t), r);
}
function B0(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function F0(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const g = () => {
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
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function W0(e, t) {
  return e === t;
}
let Du = !1;
function eg(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = W0,
  areOwnPropsEqual: i = Fo,
  areStatePropsEqual: a = Fo,
  areMergedPropsEqual: s = Fo,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = o0
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Du && (Du = !0, xs('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = D0(e), d = N0(t), g = I0(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !wu.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${M0(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, O = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(m) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = m, ie = Ym(m, T0);
        return [m.context, W, ie];
      }, [m]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      wu.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? m.store : A.store, k = P ? A.getServerState : T.getState, z = _.useMemo(() => w0(T.dispatch, O), [T]), [R, B] = _.useMemo(() => {
        if (!h) return V0;
        const W = A0(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : br({}, A, {
        subscription: R
      }), [$, A, R]), G = _.useRef(), H = _.useRef(C), L = _.useRef(), q = _.useRef(!1);
      _.useRef(!1);
      const K = _.useRef(!1), ne = _.useRef();
      qi(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const ae = _.useMemo(() => () => L.current && C === H.current ? L.current : z(T.getState(), C), [T, C]), ue = _.useMemo(() => (W) => R ? F0(
        h,
        T,
        R,
        // @ts-ignore
        z,
        H,
        G,
        q,
        K,
        L,
        B,
        W
      ) : () => {
      }, [R]);
      L0(B0, [H, G, q, C, L, B]);
      let J;
      try {
        J = Zm(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ue,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ae,
          k ? () => z(k(), C) : ae
        );
      } catch (W) {
        throw ne.current && (W.message += `
The error may be correlated with this previous error:
${ne.current.stack}

`), W;
      }
      qi(() => {
        ne.current = void 0, L.current = void 0, G.current = J;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, br({}, J, {
          ref: N
        }))
      ), [N, b, J]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const m = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, br({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = y, m.WrappedComponent = b, yu(m, b);
    }
    return yu(v, b);
  };
}
R0(vs.useSyncExternalStore);
t0(Or);
function j0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function tg(e, t) {
  var r = ze(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && j0(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ce(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function G0(e, t) {
  return tg(function() {
    return e;
  }, t);
}
var tt = tg, qe = G0, k0 = process.env.NODE_ENV === "production", Wo = "Invariant failed";
function Cu(e, t) {
  if (k0)
    throw new Error(Wo);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Wo, ": ").concat(r) : Wo;
  throw new Error(n);
}
var ur = function(e) {
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
}, rg = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, _u = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, H0 = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, jo = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ss = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? jo : r, o = e.border, i = o === void 0 ? jo : o, a = e.padding, s = a === void 0 ? jo : a, l = ur(rg(t, n)), u = ur(_u(t, i)), p = ur(_u(u, s));
  return {
    marginBox: l,
    borderBox: ur(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, yt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Cu(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Cu()), n;
}, z0 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, U0 = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = H0(r, t);
  return Ss({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, Yi = function(e, t) {
  return t === void 0 && (t = z0()), U0(e, t);
}, ng = function(e, t) {
  var r = {
    top: yt(t.marginTop),
    right: yt(t.marginRight),
    bottom: yt(t.marginBottom),
    left: yt(t.marginLeft)
  }, n = {
    top: yt(t.paddingTop),
    right: yt(t.paddingRight),
    bottom: yt(t.paddingBottom),
    left: yt(t.paddingLeft)
  }, o = {
    top: yt(t.borderTopWidth),
    right: yt(t.borderRightWidth),
    bottom: yt(t.borderBottomWidth),
    left: yt(t.borderLeftWidth)
  };
  return Ss({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, og = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return ng(t, r);
}, Iu = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function q0(e, t) {
  return !!(e === t || Iu(e) && Iu(t));
}
function Y0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!q0(e[r], t[r]))
      return !1;
  return !0;
}
function st(e, t) {
  t === void 0 && (t = Y0);
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
var K0 = function(e) {
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
const X0 = process.env.NODE_ENV === "production", J0 = /[ \t]{2,}/g, Q0 = /^[ \t]*/gm, Pu = (e) => e.replace(J0, " ").replace(Q0, "").trim(), Z0 = (e) => Pu(`
  %c@hello-pangea/dnd

  %c${Pu(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), eC = (e) => [Z0(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], tC = "__@hello-pangea/dnd-disable-dev-warnings";
function ig(e, t) {
  X0 || typeof window < "u" && window[tC] || console[e](...eC(t));
}
const Ft = ig.bind(null, "warn"), Ki = ig.bind(null, "error");
function rC() {
}
function nC(e, t) {
  return {
    ...e,
    ...t
  };
}
function oC(e, t, r) {
  const n = t.map((o) => {
    const i = nC(r, o.options);
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
const iC = process.env.NODE_ENV === "production", Au = "Invariant failed";
class Zr extends Error {
}
Zr.prototype.toString = function() {
  return this.message;
};
function Z(e, t) {
  throw iC ? new Zr(Au) : new Zr(`${Au}: ${t || ""}`);
}
class aM extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = rC, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Ft(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Zr && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ki(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = oC(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Zr) {
      process.env.NODE_ENV !== "production" && Ki(t.message), this.setState({});
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
const rr = {
  x: 0,
  y: 0
}, aC = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), sC = (e, t) => e.x === t.x && e.y === t.y, cC = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), lC = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var uC = (e, t) => {
  const r = ur({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const dC = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), pC = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, fC = (e, t) => t ? dC(e, t.scroll.diff.displacement) : e, mC = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, gC = (e, t) => t && t.shouldClipSubject ? uC(t.pageMarginBox, e) : ur(e);
var bC = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = fC(e.marginBox, n), i = mC(o, r, t), a = gC(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
st((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
st((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const hC = st((e) => Object.values(e)), vC = st((e) => Object.values(e));
st((e, t) => vC(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function yC(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
st((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const EC = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, xC = {
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
st(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: lC(e.line, r)
  };
});
var Dn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const wC = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), SC = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Os = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, en = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, OC = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ut = `${OC.outOfTheWay}s ${Os.outOfTheWay}`, Cn = {
  fluid: `opacity ${Ut}`,
  snap: `transform ${Ut}, opacity ${Ut}`,
  drop: (e) => {
    const t = `${e}s ${Os.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ut}`,
  placeholder: `height ${Ut}, width ${Ut}, margin ${Ut}`
}, $u = (e) => sC(e, rr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Xi = {
  moveTo: $u,
  drop: (e, t) => {
    const r = $u(e);
    if (r)
      return t ? `${r} scale(${en.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var ag = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = aC({
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
}, NC = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot find document.documentElement") : Z()), e;
}, DC = () => {
  const e = NC();
  return ag({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
st((e) => hC(e).filter((t) => !(!t.isEnabled || !t.frame)));
const sg = "data-rfd", Tu = (() => {
  const e = `${sg}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ru = {
  contextId: `${sg}-scroll-container-context-id`
}, CC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ar : ce;
var Mr = CC;
function _C(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var IC = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function cg(e) {
  return e instanceof IC(e).HTMLElement;
}
function PC(e, t) {
  const r = `[${Tu.contextId}="${e}"]`, n = _C(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Ft(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Tu.draggableId) === t);
  return o ? cg(o) ? o : (process.env.NODE_ENV !== "production" && Ft("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ft(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var lg = I.createContext(null), AC = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot find document.body") : Z()), e;
};
let $C = 0;
const ug = {
  separator: "::"
};
function TC(e, t = ug) {
  return tt(() => `${e}${t.separator}${$C++}`, [t.separator, e]);
}
function RC(e, t = ug) {
  const r = I.useId();
  return tt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var dg = "useId" in I ? RC : TC, Ns = I.createContext(null);
function pg(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ds(e, t) {
  pg(() => {
    ce(() => {
      try {
        e();
      } catch (r) {
        Ki(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function VC(e) {
  const t = M(e);
  return ce(() => {
    t.current = e;
  }), t;
}
function Cs(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Vu = {
  dragging: 5e3,
  dropAnimating: 4500
}, MC = (e, t) => t ? Cn.drop(t.duration) : e ? Cn.snap : Cn.fluid, LC = (e, t) => {
  if (e)
    return t ? en.opacity.drop : en.opacity.combining;
}, BC = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function FC(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = BC(e), s = !!o, l = s ? Xi.drop(r, i) : Xi.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: MC(a, o),
    transform: l,
    opacity: LC(i, s),
    zIndex: s ? Vu.dropAnimating : Vu.dragging,
    pointerEvents: "none"
  };
}
function WC(e) {
  return {
    transform: Xi.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function jC(e) {
  return e.type === "DRAGGING" ? FC(e) : WC(e);
}
function GC(e, t, r = rr) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = ng(o, n), a = Yi(i, r), s = {
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
function kC(e) {
  const t = dg("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = tt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = qe((g) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot get dimension when no ref is set") : Z()), GC(r, h, g);
  }, [r, o]), p = tt(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  Mr(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Mr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = c.current;
    c.current = p, n.draggable.update(p, g);
  }, [p, n.draggable]);
}
var _s = I.createContext(null);
function fg(e) {
  e && cg(e) || (process.env.NODE_ENV !== "production" ? Z(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : Z());
}
function HC(e, t, r) {
  Ds(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? Z(!1, "Draggable requires a draggableId") : Z(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? Z(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : Z(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? Z(!1, `${n(o)} requires an integer index prop`) : Z(!1)), e.mapped.type !== "DRAGGING" && (fg(r()), e.isEnabled && (PC(t, o) || (process.env.NODE_ENV !== "production" ? Z(!1, `${n(o)} Unable to find drag handle`) : Z(!1))));
  });
}
function zC(e) {
  pg(() => {
    const t = M(e);
    Ds(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? Z(!1, "Draggable isClone prop value changed during component life") : Z(!1));
    }, [e]);
  });
}
function Hn(e) {
  const t = Nt(e);
  return t || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find required context") : Z()), t;
}
function UC(e) {
  e.preventDefault();
}
const qC = (e) => {
  const t = M(null), r = qe((x = null) => {
    t.current = x;
  }, []), n = qe(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Hn(Ns), {
    type: s,
    droppableId: l
  } = Hn(_s), u = tt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (HC(e, o, n), zC(b), !b) {
    const x = tt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, n, h, g, d]);
    kC(x);
  }
  const O = tt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: UC
  } : null, [o, i, c, d]), E = qe((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : sr(y));
  }, [y, f]), v = tt(() => {
    const x = jC(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [o, O, c, f, E, r]), m = tt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, m));
};
var YC = qC, mg = (e, t) => e === t, gg = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const KC = (e) => e.combine ? e.combine.draggableId : null, XC = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function JC() {
  const e = st((n, o) => ({
    x: n,
    y: o
  })), t = st((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = st((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (Cs(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = Dn(n.impact), l = XC(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = gg(l), c = KC(l), d = {
        duration: n.dropDuration,
        curve: Os.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? en.opacity.drop : null,
        scale: c ? en.scale.drop : null
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
function bg(e = null) {
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
const QC = {
  mapped: {
    type: "SECONDARY",
    offset: rr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: bg(null)
  }
};
function ZC() {
  const e = st((i, a) => ({
    x: i,
    y: a
  })), t = st(bg), r = st((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(rr, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = yC(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = cC(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Cs(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const e_ = () => {
  const e = JC(), t = ZC();
  return (r, n) => e(r, n) || t(r, n) || QC;
}, t_ = {
  dropAnimationFinished: SC
}, r_ = eg(e_, t_, null, {
  context: lg,
  areStatePropsEqual: mg
})(YC);
var n_ = r_;
function o_(e) {
  return Hn(_s).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(n_, e);
}
const Is = (e) => (t) => e === t, i_ = Is("scroll"), a_ = Is("auto"), s_ = Is("visible"), Mu = (e, t) => t(e.overflowX) || t(e.overflowY), c_ = (e, t) => t(e.overflowX) && t(e.overflowY), hg = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Mu(r, i_) || Mu(r, a_);
}, l_ = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = AC(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, Z()), !hg(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return c_(n, s_) || process.env.NODE_ENV !== "production" && Ft(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ps = (e) => e == null ? null : e === document.body ? l_() ? e : null : e === document.documentElement ? null : hg(e) ? e : Ps(e.parentElement);
var u_ = (e) => {
  !e || !Ps(e.parentElement) || process.env.NODE_ENV !== "production" && Ft(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ji = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const vg = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : vg(e.parentElement) : !1;
var d_ = (e) => {
  const t = Ps(e), r = vg(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, p_ = ({
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
    } = s, g = ag({
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
        max: g,
        diff: {
          value: rr,
          displacement: rr
        }
      }
    };
  })(), u = o === "vertical" ? EC : xC, p = bC({
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
const f_ = (e, t) => {
  const r = og(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = rg({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Ss({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var m_ = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = f_(e, l), p = Yi(u, n), c = (() => {
    if (!l)
      return null;
    const d = og(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: Yi(d, n),
      scroll: Ji(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return p_({
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
const g_ = {
  passive: !1
}, b_ = {
  passive: !0
};
var Lu = (e) => e.shouldPublishImmediately ? g_ : b_;
const vn = (e) => e && e.env.closestScrollable || null;
function h_(e) {
  const t = M(null), r = Hn(Ns), n = dg("droppable"), {
    registry: o,
    marshal: i
  } = r, a = VC(e), s = tt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = tt(() => st((v, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? Z(!1, "Can only update scroll when dragging") : Z());
    const x = {
      x: v,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = qe(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? rr : Ji(v.env.closestScrollable);
  }, []), c = qe(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = tt(() => K0(c), [c]), g = qe(() => {
    const v = t.current, m = vn(v);
    if (v && m || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find scroll options while scrolling") : Z()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = qe((v, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot collect a droppable while a drag is occurring") : Z());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot collect without a droppable ref") : Z());
    const C = d_(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = m_({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Ru.contextId, r.contextId), $.addEventListener("scroll", g, Lu(V.scrollOptions)), process.env.NODE_ENV !== "production" && u_($)), A;
  }, [r.contextId, s, g, a]), b = qe(() => {
    const v = t.current, m = vn(v);
    return v && m || (process.env.NODE_ENV !== "production" ? Z(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : Z()), Ji(m);
  }, []), f = qe(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot stop drag when no active drag") : Z());
    const m = vn(v);
    t.current = null, m && (d.cancel(), m.removeAttribute(Ru.contextId), m.removeEventListener("scroll", g, Lu(v.scrollOptions)));
  }, [g, d]), y = qe((v) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot scroll when there is no drag") : Z());
    const x = vn(m);
    x || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot scroll a droppable with no closest scrollable") : Z()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), O = tt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = tt(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: O
  }), [O, s, n]);
  Mr(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ft("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [O, s, f, E, i, o.droppable]), Mr(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Mr(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Go() {
}
const v_ = {
  width: 0,
  height: 0,
  margin: pC
}, y_ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? v_ : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, E_ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = y_({
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
    transition: r !== "none" ? Cn.placeholder : null
  };
}, x_ = (e) => {
  const t = M(null), r = qe(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = ze(e.animate === "open");
  ce(() => s ? n !== "open" ? (r(), l(!1), Go) : t.current ? Go : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Go, [n, s, r]);
  const u = qe((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = E_({
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
var w_ = I.memo(x_);
function ko(e) {
  return typeof e == "boolean";
}
function Ho(e, t) {
  t.forEach((r) => r(e));
}
const S_ = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? Z(!1, "A Droppable requires a droppableId prop") : Z()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? Z(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : Z());
}, function({
  props: e
}) {
  ko(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? Z(!1, "isDropDisabled must be a boolean") : Z()), ko(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? Z(!1, "isCombineEnabled must be a boolean") : Z()), ko(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? Z(!1, "ignoreContainerClipping must be a boolean") : Z());
}, function({
  getDroppableRef: e
}) {
  fg(e());
}], O_ = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Ft(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], N_ = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? Z(!1, "Must provide a clone render function (renderClone) for virtual lists") : Z());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? Z(!1, "Expected virtual list to not have a placeholder") : Z());
}];
function D_(e) {
  Ds(() => {
    Ho(e, S_), e.props.mode === "standard" && Ho(e, O_), e.props.mode === "virtual" && Ho(e, N_);
  });
}
class C_ extends I.PureComponent {
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
const __ = (e) => {
  const t = Nt(Ns);
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
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, O = qe(() => o.current, []), E = qe((P = null) => {
    o.current = P;
  }, []), v = qe(() => i.current, []), m = qe((P = null) => {
    i.current = P;
  }, []);
  D_({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: v
  });
  const x = qe(() => {
    n() && f({
      maxScroll: DC()
    });
  }, [n, f]);
  h_({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const N = tt(() => I.createElement(C_, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(w_, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = tt(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = tt(() => ({
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
    } = b, k = I.createElement(o_, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, R) => T(z, R, P));
    return Sr.createPortal(k, y());
  }
  return I.createElement(_s.Provider, {
    value: A
  }, a(C, h), $());
};
var I_ = __;
function P_() {
  return document.body || (process.env.NODE_ENV !== "production" ? Z(!1, "document.body is not ready") : Z()), document.body;
}
const Bu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: P_
}, yg = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Bu)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Bu[r]
    });
  return t;
}, zo = (e, t) => e === t.droppable.type, Fu = (e, t) => t.draggables[e.draggable.id], A_ = () => {
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
  }, r = st((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = st((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
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
    const a = yg(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (Cs(o)) {
      const c = o.critical;
      if (!zo(l, c))
        return t;
      const d = Fu(c, o.dimensions), g = Dn(o.impact) === s;
      return n(s, u, g, g, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!zo(l, c.critical))
        return t;
      const d = Fu(c.critical, o.dimensions);
      return n(s, u, gg(c.result) === s, Dn(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!zo(l, c.critical))
        return t;
      const d = Dn(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, $_ = {
  updateViewportMaxScroll: wC
};
eg(A_, $_, (e, t, r) => ({
  ...yg(r),
  ...e,
  ...t
}), {
  context: lg,
  areStatePropsEqual: mg
})(I_);
var Wu;
(function(e) {
  e.event = "event", e.props = "prop";
})(Wu || (Wu = {}));
var ju = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + ju(), "" + ju();
function T_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qi = { exports: {} }, Uo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gu;
function R_() {
  if (Gu) return Uo;
  Gu = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var g = d(), h = n({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, g, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var g = d();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Uo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Uo;
}
var ku = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hu;
function V_() {
  return Hu || (Hu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
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
      var y = f[0].inst, O = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && O({ inst: y });
        },
        [g, b, h]
      ), s(
        function() {
          return r(y) && O({ inst: y }), g(function() {
            r(y) && O({ inst: y });
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
    function n(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    ku.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ku;
}
process.env.NODE_ENV === "production" ? Qi.exports = R_() : Qi.exports = V_();
var As = Qi.exports, qo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zu;
function M_() {
  if (zu) return qo;
  zu = 1;
  var e = I, t = As;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return qo.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!O) {
            if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var O = !1, E, v, m = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          m === null ? void 0 : function() {
            return y(m());
          }
        ];
      },
      [p, c, d, g]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, qo;
}
var Uu = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qu;
function L_() {
  return qu || (qu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = As, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Uu.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!O) {
              if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var O = !1, E, v, m = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            m === null ? void 0 : function() {
              return y(m());
            }
          ];
        },
        [p, c, d, g]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Uu;
}
process.env.NODE_ENV === "production" ? M_() : L_();
function B_(e) {
  e();
}
let Eg = B_;
const F_ = (e) => Eg = e, W_ = () => Eg, Yu = Symbol.for("react-redux-context"), Ku = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function j_() {
  var e;
  if (!_.createContext) return {};
  const t = (e = Ku[Yu]) != null ? e : Ku[Yu] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const G_ = /* @__PURE__ */ j_(), k_ = () => {
  throw new Error("uSES not initialized!");
};
function hr() {
  return hr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hr.apply(null, arguments);
}
function xg(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Zi = { exports: {} }, Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xu;
function H_() {
  if (Xu) return Se;
  Xu = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case p:
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
  function v(m) {
    return E(m) === u;
  }
  return Se.AsyncMode = l, Se.ConcurrentMode = u, Se.ContextConsumer = s, Se.ContextProvider = a, Se.Element = t, Se.ForwardRef = p, Se.Fragment = n, Se.Lazy = h, Se.Memo = g, Se.Portal = r, Se.Profiler = i, Se.StrictMode = o, Se.Suspense = c, Se.isAsyncMode = function(m) {
    return v(m) || E(m) === l;
  }, Se.isConcurrentMode = v, Se.isContextConsumer = function(m) {
    return E(m) === s;
  }, Se.isContextProvider = function(m) {
    return E(m) === a;
  }, Se.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Se.isForwardRef = function(m) {
    return E(m) === p;
  }, Se.isFragment = function(m) {
    return E(m) === n;
  }, Se.isLazy = function(m) {
    return E(m) === h;
  }, Se.isMemo = function(m) {
    return E(m) === g;
  }, Se.isPortal = function(m) {
    return E(m) === r;
  }, Se.isProfiler = function(m) {
    return E(m) === i;
  }, Se.isStrictMode = function(m) {
    return E(m) === o;
  }, Se.isSuspense = function(m) {
    return E(m) === c;
  }, Se.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === o || m === c || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === p || m.$$typeof === f || m.$$typeof === y || m.$$typeof === O || m.$$typeof === b);
  }, Se.typeOf = E, Se;
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
var Ju;
function z_() {
  return Ju || (Ju = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === u || w === i || w === o || w === c || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === f || w.$$typeof === y || w.$$typeof === O || w.$$typeof === b);
    }
    function v(w) {
      if (typeof w == "object" && w !== null) {
        var le = w.$$typeof;
        switch (le) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return S;
              default:
                var se = S && S.$$typeof;
                switch (se) {
                  case s:
                  case p:
                  case h:
                  case g:
                  case a:
                    return se;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = g, k = r, z = i, R = o, B = c, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(w) || v(w) === l;
    }
    function H(w) {
      return v(w) === u;
    }
    function L(w) {
      return v(w) === s;
    }
    function q(w) {
      return v(w) === a;
    }
    function K(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function ne(w) {
      return v(w) === p;
    }
    function ae(w) {
      return v(w) === n;
    }
    function ue(w) {
      return v(w) === h;
    }
    function J(w) {
      return v(w) === g;
    }
    function oe(w) {
      return v(w) === r;
    }
    function W(w) {
      return v(w) === i;
    }
    function ie(w) {
      return v(w) === o;
    }
    function We(w) {
      return v(w) === c;
    }
    Te.AsyncMode = m, Te.ConcurrentMode = x, Te.ContextConsumer = N, Te.ContextProvider = C, Te.Element = V, Te.ForwardRef = A, Te.Fragment = $, Te.Lazy = P, Te.Memo = T, Te.Portal = k, Te.Profiler = z, Te.StrictMode = R, Te.Suspense = B, Te.isAsyncMode = G, Te.isConcurrentMode = H, Te.isContextConsumer = L, Te.isContextProvider = q, Te.isElement = K, Te.isForwardRef = ne, Te.isFragment = ae, Te.isLazy = ue, Te.isMemo = J, Te.isPortal = oe, Te.isProfiler = W, Te.isStrictMode = ie, Te.isSuspense = We, Te.isValidElementType = E, Te.typeOf = v;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Zi.exports = H_() : Zi.exports = z_();
var U_ = Zi.exports, $s = U_, q_ = {
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
}, Y_ = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, K_ = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wg = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ts = {};
Ts[$s.ForwardRef] = K_;
Ts[$s.Memo] = wg;
function Qu(e) {
  return $s.isMemo(e) ? wg : Ts[e.$$typeof] || q_;
}
var X_ = Object.defineProperty, J_ = Object.getOwnPropertyNames, Zu = Object.getOwnPropertySymbols, Q_ = Object.getOwnPropertyDescriptor, Z_ = Object.getPrototypeOf, ed = Object.prototype;
function Sg(e, t, r) {
  if (typeof t != "string") {
    if (ed) {
      var n = Z_(t);
      n && n !== ed && Sg(e, n, r);
    }
    var o = J_(t);
    Zu && (o = o.concat(Zu(t)));
    for (var i = Qu(e), a = Qu(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!Y_[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = Q_(t, l);
        try {
          X_(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var eI = Sg;
const td = /* @__PURE__ */ T_(eI);
var ea = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rd;
function tI() {
  if (rd) return Oe;
  rd = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
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
  return Oe.ContextConsumer = a, Oe.ContextProvider = i, Oe.Element = e, Oe.ForwardRef = l, Oe.Fragment = r, Oe.Lazy = d, Oe.Memo = c, Oe.Portal = t, Oe.Profiler = o, Oe.StrictMode = n, Oe.Suspense = u, Oe.SuspenseList = p, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(f) {
    return b(f) === a;
  }, Oe.isContextProvider = function(f) {
    return b(f) === i;
  }, Oe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Oe.isForwardRef = function(f) {
    return b(f) === l;
  }, Oe.isFragment = function(f) {
    return b(f) === r;
  }, Oe.isLazy = function(f) {
    return b(f) === d;
  }, Oe.isMemo = function(f) {
    return b(f) === c;
  }, Oe.isPortal = function(f) {
    return b(f) === t;
  }, Oe.isProfiler = function(f) {
    return b(f) === o;
  }, Oe.isStrictMode = function(f) {
    return b(f) === n;
  }, Oe.isSuspense = function(f) {
    return b(f) === u;
  }, Oe.isSuspenseList = function(f) {
    return b(f) === p;
  }, Oe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === g || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
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
var nd;
function rI() {
  return nd || (nd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function v(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || O || S === n || S === u || S === p || y || S === g || h || b || f || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var se = S.$$typeof;
        switch (se) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return me;
              default:
                var j = me && me.$$typeof;
                switch (j) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return j;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, z = n, R = u, B = p, F = !1, G = !1;
    function H(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function ne(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ae(S) {
      return m(S) === l;
    }
    function ue(S) {
      return m(S) === r;
    }
    function J(S) {
      return m(S) === d;
    }
    function oe(S) {
      return m(S) === c;
    }
    function W(S) {
      return m(S) === t;
    }
    function ie(S) {
      return m(S) === o;
    }
    function We(S) {
      return m(S) === n;
    }
    function w(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === p;
    }
    Re.ContextConsumer = x, Re.ContextProvider = N, Re.Element = C, Re.ForwardRef = V, Re.Fragment = A, Re.Lazy = $, Re.Memo = P, Re.Portal = T, Re.Profiler = k, Re.StrictMode = z, Re.Suspense = R, Re.SuspenseList = B, Re.isAsyncMode = H, Re.isConcurrentMode = L, Re.isContextConsumer = q, Re.isContextProvider = K, Re.isElement = ne, Re.isForwardRef = ae, Re.isFragment = ue, Re.isLazy = J, Re.isMemo = oe, Re.isPortal = W, Re.isProfiler = ie, Re.isStrictMode = We, Re.isSuspense = w, Re.isSuspenseList = le, Re.isValidElementType = v, Re.typeOf = m;
  }()), Re;
}
process.env.NODE_ENV === "production" ? ea.exports = tI() : ea.exports = rI();
var od = ea.exports;
function Rs(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Yo(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Rs(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function nI(e, t, r) {
  Yo(e, "mapStateToProps"), Yo(t, "mapDispatchToProps"), Yo(r, "mergeProps");
}
const oI = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function iI(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function g(O, E) {
    return l = O, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const O = e(l, u), E = !a(O, p);
    return p = O, E && (d = r(p, c, u)), d;
  }
  function y(O, E) {
    const v = !i(E, u), m = !o(O, l, E, u);
    return l = O, u = E, v && m ? h() : v ? b() : m ? f() : d;
  }
  return function(O, E) {
    return s ? y(O, E) : g(O, E);
  };
}
function aI(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = xg(t, oI);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && nI(a, s, l), iI(a, s, l, e, i);
}
function sI(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function cI(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Og(e, t, r) {
  cI(e) || Rs(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ta(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function id(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ng(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = id(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = id(s), s = o(i, a)), process.env.NODE_ENV !== "production" && Og(s, n, t), s;
    }, o;
  };
}
function Vs(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function lI(e) {
  return e && typeof e == "object" ? ta((t) => (
    // @ts-ignore
    sI(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ng(e, "mapDispatchToProps")
  ) : Vs(e, "mapDispatchToProps") : ta((t) => ({
    dispatch: t
  }));
}
function uI(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ng(e, "mapStateToProps")
  ) : Vs(e, "mapStateToProps") : ta(() => ({}));
}
function dI(e, t, r) {
  return hr({}, r, e, t);
}
function pI(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && Og(i, r, "mergeProps")), i;
    };
  };
}
function fI(e) {
  return e ? typeof e == "function" ? pI(e) : Vs(e, "mergeProps") : () => dI;
}
function mI() {
  const e = W_();
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
const ad = {
  notify() {
  },
  get: () => []
};
function gI(e, t) {
  let r, n = ad, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = mI());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = ad);
  }
  function d() {
    i || (i = !0, p());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => n
  };
  return h;
}
const bI = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ra = bI ? _.useLayoutEffect : _.useEffect;
function sd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ko(e, t) {
  if (sd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !sd(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const hI = ["reactReduxForwardedRef"];
let Dg = k_;
const vI = (e) => {
  Dg = e;
}, yI = [null, null], EI = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function xI(e, t, r) {
  ra(() => e(...t), r);
}
function wI(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function SI(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const g = () => {
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
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function OI(e, t) {
  return e === t;
}
let cd = !1;
function Cg(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = OI,
  areOwnPropsEqual: i = Ko,
  areStatePropsEqual: a = Ko,
  areMergedPropsEqual: s = Ko,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = G_
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !cd && (cd = !0, Rs('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = uI(e), d = lI(t), g = fI(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !od.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${EI(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, O = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(m) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = m, ie = xg(m, hI);
        return [m.context, W, ie];
      }, [m]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      od.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? m.store : A.store, k = P ? A.getServerState : T.getState, z = _.useMemo(() => aI(T.dispatch, O), [T]), [R, B] = _.useMemo(() => {
        if (!h) return yI;
        const W = gI(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : hr({}, A, {
        subscription: R
      }), [$, A, R]), G = _.useRef(), H = _.useRef(C), L = _.useRef(), q = _.useRef(!1);
      _.useRef(!1);
      const K = _.useRef(!1), ne = _.useRef();
      ra(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const ae = _.useMemo(() => () => L.current && C === H.current ? L.current : z(T.getState(), C), [T, C]), ue = _.useMemo(() => (W) => R ? SI(
        h,
        T,
        R,
        // @ts-ignore
        z,
        H,
        G,
        q,
        K,
        L,
        B,
        W
      ) : () => {
      }, [R]);
      xI(wI, [H, G, q, C, L, B]);
      let J;
      try {
        J = Dg(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ue,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ae,
          k ? () => z(k(), C) : ae
        );
      } catch (W) {
        throw ne.current && (W.message += `
The error may be correlated with this previous error:
${ne.current.stack}

`), W;
      }
      ra(() => {
        ne.current = void 0, L.current = void 0, G.current = J;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, hr({}, J, {
          ref: N
        }))
      ), [N, b, J]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const m = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, hr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = y, m.WrappedComponent = b, td(m, b);
    }
    return td(v, b);
  };
}
vI(As.useSyncExternalStore);
F_(Or);
function NI(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function _g(e, t) {
  var r = ze(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && NI(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ce(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function DI(e, t) {
  return _g(function() {
    return e;
  }, t);
}
var rt = _g, Ye = DI, CI = process.env.NODE_ENV === "production", Xo = "Invariant failed";
function ld(e, t) {
  if (CI)
    throw new Error(Xo);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Xo, ": ").concat(r) : Xo;
  throw new Error(n);
}
var dr = function(e) {
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
}, Ig = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, ud = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, _I = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Jo = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ms = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Jo : r, o = e.border, i = o === void 0 ? Jo : o, a = e.padding, s = a === void 0 ? Jo : a, l = dr(Ig(t, n)), u = dr(ud(t, i)), p = dr(ud(u, s));
  return {
    marginBox: l,
    borderBox: dr(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, Et = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? ld(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : ld()), n;
}, II = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, PI = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = _I(r, t);
  return Ms({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, na = function(e, t) {
  return t === void 0 && (t = II()), PI(e, t);
}, Pg = function(e, t) {
  var r = {
    top: Et(t.marginTop),
    right: Et(t.marginRight),
    bottom: Et(t.marginBottom),
    left: Et(t.marginLeft)
  }, n = {
    top: Et(t.paddingTop),
    right: Et(t.paddingRight),
    bottom: Et(t.paddingBottom),
    left: Et(t.paddingLeft)
  }, o = {
    top: Et(t.borderTopWidth),
    right: Et(t.borderRightWidth),
    bottom: Et(t.borderBottomWidth),
    left: Et(t.borderLeftWidth)
  };
  return Ms({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, Ag = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Pg(t, r);
}, dd = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function AI(e, t) {
  return !!(e === t || dd(e) && dd(t));
}
function $I(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!AI(e[r], t[r]))
      return !1;
  return !0;
}
function ct(e, t) {
  t === void 0 && (t = $I);
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
var TI = function(e) {
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
const RI = process.env.NODE_ENV === "production", VI = /[ \t]{2,}/g, MI = /^[ \t]*/gm, pd = (e) => e.replace(VI, " ").replace(MI, "").trim(), LI = (e) => pd(`
  %c@hello-pangea/dnd

  %c${pd(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), BI = (e) => [LI(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], FI = "__@hello-pangea/dnd-disable-dev-warnings";
function $g(e, t) {
  RI || typeof window < "u" && window[FI] || console[e](...BI(t));
}
const Wt = $g.bind(null, "warn"), oa = $g.bind(null, "error");
function WI() {
}
function jI(e, t) {
  return {
    ...e,
    ...t
  };
}
function GI(e, t, r) {
  const n = t.map((o) => {
    const i = jI(r, o.options);
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
const kI = process.env.NODE_ENV === "production", fd = "Invariant failed";
class tn extends Error {
}
tn.prototype.toString = function() {
  return this.message;
};
function ee(e, t) {
  throw kI ? new tn(fd) : new tn(`${fd}: ${t || ""}`);
}
class sM extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = WI, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Wt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof tn && (r.preventDefault(), process.env.NODE_ENV !== "production" && oa(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = GI(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof tn) {
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
const nr = {
  x: 0,
  y: 0
}, HI = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), zI = (e, t) => e.x === t.x && e.y === t.y, UI = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), qI = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var YI = (e, t) => {
  const r = dr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const KI = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), XI = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, JI = (e, t) => t ? KI(e, t.scroll.diff.displacement) : e, QI = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, ZI = (e, t) => t && t.shouldClipSubject ? YI(t.pageMarginBox, e) : dr(e);
var e1 = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = JI(e.marginBox, n), i = QI(o, r, t), a = ZI(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
ct((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
ct((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const t1 = ct((e) => Object.values(e)), r1 = ct((e) => Object.values(e));
ct((e, t) => r1(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function n1(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
ct((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const o1 = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, i1 = {
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
ct(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: qI(e.line, r)
  };
});
var _n = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const a1 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), s1 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Ls = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, rn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, c1 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, qt = `${c1.outOfTheWay}s ${Ls.outOfTheWay}`, In = {
  fluid: `opacity ${qt}`,
  snap: `transform ${qt}, opacity ${qt}`,
  drop: (e) => {
    const t = `${e}s ${Ls.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${qt}`,
  placeholder: `height ${qt}, width ${qt}, margin ${qt}`
}, md = (e) => zI(e, nr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ia = {
  moveTo: md,
  drop: (e, t) => {
    const r = md(e);
    if (r)
      return t ? `${r} scale(${rn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Tg = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = HI({
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
}, l1 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ee(!1, "Cannot find document.documentElement") : ee()), e;
}, u1 = () => {
  const e = l1();
  return Tg({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
ct((e) => t1(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Rg = "data-rfd", gd = (() => {
  const e = `${Rg}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), bd = {
  contextId: `${Rg}-scroll-container-context-id`
}, d1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ar : ce;
var Lr = d1;
function p1(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var f1 = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Vg(e) {
  return e instanceof f1(e).HTMLElement;
}
function m1(e, t) {
  const r = `[${gd.contextId}="${e}"]`, n = p1(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Wt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(gd.draggableId) === t);
  return o ? Vg(o) ? o : (process.env.NODE_ENV !== "production" && Wt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Wt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Mg = I.createContext(null), g1 = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ee(!1, "Cannot find document.body") : ee()), e;
};
let b1 = 0;
const Lg = {
  separator: "::"
};
function h1(e, t = Lg) {
  return rt(() => `${e}${t.separator}${b1++}`, [t.separator, e]);
}
function v1(e, t = Lg) {
  const r = I.useId();
  return rt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Bg = "useId" in I ? v1 : h1, Bs = I.createContext(null);
function Fg(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Fs(e, t) {
  Fg(() => {
    ce(() => {
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
function y1(e) {
  const t = M(e);
  return ce(() => {
    t.current = e;
  }), t;
}
function Ws(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const hd = {
  dragging: 5e3,
  dropAnimating: 4500
}, E1 = (e, t) => t ? In.drop(t.duration) : e ? In.snap : In.fluid, x1 = (e, t) => {
  if (e)
    return t ? rn.opacity.drop : rn.opacity.combining;
}, w1 = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function S1(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = w1(e), s = !!o, l = s ? ia.drop(r, i) : ia.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: E1(a, o),
    transform: l,
    opacity: x1(i, s),
    zIndex: s ? hd.dropAnimating : hd.dragging,
    pointerEvents: "none"
  };
}
function O1(e) {
  return {
    transform: ia.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function N1(e) {
  return e.type === "DRAGGING" ? S1(e) : O1(e);
}
function D1(e, t, r = nr) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Pg(o, n), a = na(i, r), s = {
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
function C1(e) {
  const t = Bg("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = rt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Ye((g) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? ee(!1, "Cannot get dimension when no ref is set") : ee()), D1(r, h, g);
  }, [r, o]), p = rt(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  Lr(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Lr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = c.current;
    c.current = p, n.draggable.update(p, g);
  }, [p, n.draggable]);
}
var js = I.createContext(null);
function Wg(e) {
  e && Vg(e) || (process.env.NODE_ENV !== "production" ? ee(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ee());
}
function _1(e, t, r) {
  Fs(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? ee(!1, "Draggable requires a draggableId") : ee(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? ee(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : ee(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ee(!1, `${n(o)} requires an integer index prop`) : ee(!1)), e.mapped.type !== "DRAGGING" && (Wg(r()), e.isEnabled && (m1(t, o) || (process.env.NODE_ENV !== "production" ? ee(!1, `${n(o)} Unable to find drag handle`) : ee(!1))));
  });
}
function I1(e) {
  Fg(() => {
    const t = M(e);
    Fs(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ee(!1, "Draggable isClone prop value changed during component life") : ee(!1));
    }, [e]);
  });
}
function zn(e) {
  const t = Nt(e);
  return t || (process.env.NODE_ENV !== "production" ? ee(!1, "Could not find required context") : ee()), t;
}
function P1(e) {
  e.preventDefault();
}
const A1 = (e) => {
  const t = M(null), r = Ye((x = null) => {
    t.current = x;
  }, []), n = Ye(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = zn(Bs), {
    type: s,
    droppableId: l
  } = zn(js), u = rt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (_1(e, o, n), I1(b), !b) {
    const x = rt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, n, h, g, d]);
    C1(x);
  }
  const O = rt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: P1
  } : null, [o, i, c, d]), E = Ye((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : sr(y));
  }, [y, f]), v = rt(() => {
    const x = N1(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [o, O, c, f, E, r]), m = rt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, m));
};
var $1 = A1, jg = (e, t) => e === t, Gg = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const T1 = (e) => e.combine ? e.combine.draggableId : null, R1 = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function V1() {
  const e = ct((n, o) => ({
    x: n,
    y: o
  })), t = ct((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = ct((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (Ws(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = _n(n.impact), l = R1(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Gg(l), c = T1(l), d = {
        duration: n.dropDuration,
        curve: Ls.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? rn.opacity.drop : null,
        scale: c ? rn.scale.drop : null
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
function kg(e = null) {
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
const M1 = {
  mapped: {
    type: "SECONDARY",
    offset: nr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: kg(null)
  }
};
function L1() {
  const e = ct((i, a) => ({
    x: i,
    y: a
  })), t = ct(kg), r = ct((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(nr, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = n1(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = UI(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Ws(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const B1 = () => {
  const e = V1(), t = L1();
  return (r, n) => e(r, n) || t(r, n) || M1;
}, F1 = {
  dropAnimationFinished: s1
}, W1 = Cg(B1, F1, null, {
  context: Mg,
  areStatePropsEqual: jg
})($1);
var j1 = W1;
function G1(e) {
  return zn(js).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(j1, e);
}
const Gs = (e) => (t) => e === t, k1 = Gs("scroll"), H1 = Gs("auto"), z1 = Gs("visible"), vd = (e, t) => t(e.overflowX) || t(e.overflowY), U1 = (e, t) => t(e.overflowX) && t(e.overflowY), Hg = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return vd(r, k1) || vd(r, H1);
}, q1 = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = g1(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ee()), !Hg(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return U1(n, z1) || process.env.NODE_ENV !== "production" && Wt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ks = (e) => e == null ? null : e === document.body ? q1() ? e : null : e === document.documentElement ? null : Hg(e) ? e : ks(e.parentElement);
var Y1 = (e) => {
  !e || !ks(e.parentElement) || process.env.NODE_ENV !== "production" && Wt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, aa = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const zg = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : zg(e.parentElement) : !1;
var K1 = (e) => {
  const t = ks(e), r = zg(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, X1 = ({
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
    } = s, g = Tg({
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
        max: g,
        diff: {
          value: nr,
          displacement: nr
        }
      }
    };
  })(), u = o === "vertical" ? o1 : i1, p = e1({
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
const J1 = (e, t) => {
  const r = Ag(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = Ig({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Ms({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Q1 = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = J1(e, l), p = na(u, n), c = (() => {
    if (!l)
      return null;
    const d = Ag(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: na(d, n),
      scroll: aa(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return X1({
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
const Z1 = {
  passive: !1
}, eP = {
  passive: !0
};
var yd = (e) => e.shouldPublishImmediately ? Z1 : eP;
const yn = (e) => e && e.env.closestScrollable || null;
function tP(e) {
  const t = M(null), r = zn(Bs), n = Bg("droppable"), {
    registry: o,
    marshal: i
  } = r, a = y1(e), s = rt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = rt(() => ct((v, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? ee(!1, "Can only update scroll when dragging") : ee());
    const x = {
      x: v,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = Ye(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? nr : aa(v.env.closestScrollable);
  }, []), c = Ye(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = rt(() => TI(c), [c]), g = Ye(() => {
    const v = t.current, m = yn(v);
    if (v && m || (process.env.NODE_ENV !== "production" ? ee(!1, "Could not find scroll options while scrolling") : ee()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Ye((v, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? ee(!1, "Cannot collect a droppable while a drag is occurring") : ee());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? ee(!1, "Cannot collect without a droppable ref") : ee());
    const C = K1(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = Q1({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(bd.contextId, r.contextId), $.addEventListener("scroll", g, yd(V.scrollOptions)), process.env.NODE_ENV !== "production" && Y1($)), A;
  }, [r.contextId, s, g, a]), b = Ye(() => {
    const v = t.current, m = yn(v);
    return v && m || (process.env.NODE_ENV !== "production" ? ee(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ee()), aa(m);
  }, []), f = Ye(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? ee(!1, "Cannot stop drag when no active drag") : ee());
    const m = yn(v);
    t.current = null, m && (d.cancel(), m.removeAttribute(bd.contextId), m.removeEventListener("scroll", g, yd(v.scrollOptions)));
  }, [g, d]), y = Ye((v) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? ee(!1, "Cannot scroll when there is no drag") : ee());
    const x = yn(m);
    x || (process.env.NODE_ENV !== "production" ? ee(!1, "Cannot scroll a droppable with no closest scrollable") : ee()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), O = rt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = rt(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: O
  }), [O, s, n]);
  Lr(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Wt("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [O, s, f, E, i, o.droppable]), Lr(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Lr(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Qo() {
}
const rP = {
  width: 0,
  height: 0,
  margin: XI
}, nP = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? rP : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, oP = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = nP({
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
    transition: r !== "none" ? In.placeholder : null
  };
}, iP = (e) => {
  const t = M(null), r = Ye(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = ze(e.animate === "open");
  ce(() => s ? n !== "open" ? (r(), l(!1), Qo) : t.current ? Qo : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Qo, [n, s, r]);
  const u = Ye((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = oP({
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
var aP = I.memo(iP);
function Zo(e) {
  return typeof e == "boolean";
}
function ei(e, t) {
  t.forEach((r) => r(e));
}
const sP = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ee(!1, "A Droppable requires a droppableId prop") : ee()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ee(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ee());
}, function({
  props: e
}) {
  Zo(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ee(!1, "isDropDisabled must be a boolean") : ee()), Zo(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ee(!1, "isCombineEnabled must be a boolean") : ee()), Zo(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ee(!1, "ignoreContainerClipping must be a boolean") : ee());
}, function({
  getDroppableRef: e
}) {
  Wg(e());
}], cP = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Wt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], lP = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ee(!1, "Must provide a clone render function (renderClone) for virtual lists") : ee());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ee(!1, "Expected virtual list to not have a placeholder") : ee());
}];
function uP(e) {
  Fs(() => {
    ei(e, sP), e.props.mode === "standard" && ei(e, cP), e.props.mode === "virtual" && ei(e, lP);
  });
}
class dP extends I.PureComponent {
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
const pP = (e) => {
  const t = Nt(Bs);
  t || (process.env.NODE_ENV !== "production" ? ee(!1, "Could not find app context") : ee());
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
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, O = Ye(() => o.current, []), E = Ye((P = null) => {
    o.current = P;
  }, []), v = Ye(() => i.current, []), m = Ye((P = null) => {
    i.current = P;
  }, []);
  uP({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: v
  });
  const x = Ye(() => {
    n() && f({
      maxScroll: u1()
    });
  }, [n, f]);
  tP({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const N = rt(() => I.createElement(dP, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(aP, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = rt(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = rt(() => ({
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
    } = b, k = I.createElement(G1, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, R) => T(z, R, P));
    return Sr.createPortal(k, y());
  }
  return I.createElement(js.Provider, {
    value: A
  }, a(C, h), $());
};
var fP = pP;
function mP() {
  return document.body || (process.env.NODE_ENV !== "production" ? ee(!1, "document.body is not ready") : ee()), document.body;
}
const Ed = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: mP
}, Ug = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Ed)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Ed[r]
    });
  return t;
}, ti = (e, t) => e === t.droppable.type, xd = (e, t) => t.draggables[e.draggable.id], gP = () => {
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
  }, r = ct((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = ct((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
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
    const a = Ug(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (Ws(o)) {
      const c = o.critical;
      if (!ti(l, c))
        return t;
      const d = xd(c, o.dimensions), g = _n(o.impact) === s;
      return n(s, u, g, g, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!ti(l, c.critical))
        return t;
      const d = xd(c.critical, o.dimensions);
      return n(s, u, Gg(c.result) === s, _n(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!ti(l, c.critical))
        return t;
      const d = _n(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, bP = {
  updateViewportMaxScroll: a1
};
Cg(gP, bP, (e, t, r) => ({
  ...Ug(r),
  ...e,
  ...t
}), {
  context: Mg,
  areStatePropsEqual: jg
})(fP);
var wd;
(function(e) {
  e.event = "event", e.props = "prop";
})(wd || (wd = {}));
var Sd = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Sd(), "" + Sd();
function hP(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sa = { exports: {} }, ri = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od;
function vP() {
  if (Od) return ri;
  Od = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var g = d(), h = n({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, g, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var g = d();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ri.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, ri;
}
var Nd = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function yP() {
  return Dd || (Dd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
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
      var y = f[0].inst, O = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && O({ inst: y });
        },
        [g, b, h]
      ), s(
        function() {
          return r(y) && O({ inst: y }), g(function() {
            r(y) && O({ inst: y });
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
    function n(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Nd.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Nd;
}
process.env.NODE_ENV === "production" ? sa.exports = vP() : sa.exports = yP();
var Hs = sa.exports, ni = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function EP() {
  if (Cd) return ni;
  Cd = 1;
  var e = I, t = Hs;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return ni.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!O) {
            if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var O = !1, E, v, m = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          m === null ? void 0 : function() {
            return y(m());
          }
        ];
      },
      [p, c, d, g]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, ni;
}
var _d = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Id;
function xP() {
  return Id || (Id = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = Hs, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    _d.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!O) {
              if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var O = !1, E, v, m = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            m === null ? void 0 : function() {
              return y(m());
            }
          ];
        },
        [p, c, d, g]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), _d;
}
process.env.NODE_ENV === "production" ? EP() : xP();
function wP(e) {
  e();
}
let qg = wP;
const SP = (e) => qg = e, OP = () => qg, Pd = Symbol.for("react-redux-context"), Ad = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function NP() {
  var e;
  if (!_.createContext) return {};
  const t = (e = Ad[Pd]) != null ? e : Ad[Pd] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const DP = /* @__PURE__ */ NP(), CP = () => {
  throw new Error("uSES not initialized!");
};
function vr() {
  return vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vr.apply(null, arguments);
}
function Yg(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var ca = { exports: {} }, Ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d;
function _P() {
  if ($d) return Ne;
  $d = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case p:
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
  function v(m) {
    return E(m) === u;
  }
  return Ne.AsyncMode = l, Ne.ConcurrentMode = u, Ne.ContextConsumer = s, Ne.ContextProvider = a, Ne.Element = t, Ne.ForwardRef = p, Ne.Fragment = n, Ne.Lazy = h, Ne.Memo = g, Ne.Portal = r, Ne.Profiler = i, Ne.StrictMode = o, Ne.Suspense = c, Ne.isAsyncMode = function(m) {
    return v(m) || E(m) === l;
  }, Ne.isConcurrentMode = v, Ne.isContextConsumer = function(m) {
    return E(m) === s;
  }, Ne.isContextProvider = function(m) {
    return E(m) === a;
  }, Ne.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ne.isForwardRef = function(m) {
    return E(m) === p;
  }, Ne.isFragment = function(m) {
    return E(m) === n;
  }, Ne.isLazy = function(m) {
    return E(m) === h;
  }, Ne.isMemo = function(m) {
    return E(m) === g;
  }, Ne.isPortal = function(m) {
    return E(m) === r;
  }, Ne.isProfiler = function(m) {
    return E(m) === i;
  }, Ne.isStrictMode = function(m) {
    return E(m) === o;
  }, Ne.isSuspense = function(m) {
    return E(m) === c;
  }, Ne.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === o || m === c || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === p || m.$$typeof === f || m.$$typeof === y || m.$$typeof === O || m.$$typeof === b);
  }, Ne.typeOf = E, Ne;
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
var Td;
function IP() {
  return Td || (Td = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === u || w === i || w === o || w === c || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === f || w.$$typeof === y || w.$$typeof === O || w.$$typeof === b);
    }
    function v(w) {
      if (typeof w == "object" && w !== null) {
        var le = w.$$typeof;
        switch (le) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return S;
              default:
                var se = S && S.$$typeof;
                switch (se) {
                  case s:
                  case p:
                  case h:
                  case g:
                  case a:
                    return se;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = g, k = r, z = i, R = o, B = c, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(w) || v(w) === l;
    }
    function H(w) {
      return v(w) === u;
    }
    function L(w) {
      return v(w) === s;
    }
    function q(w) {
      return v(w) === a;
    }
    function K(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function ne(w) {
      return v(w) === p;
    }
    function ae(w) {
      return v(w) === n;
    }
    function ue(w) {
      return v(w) === h;
    }
    function J(w) {
      return v(w) === g;
    }
    function oe(w) {
      return v(w) === r;
    }
    function W(w) {
      return v(w) === i;
    }
    function ie(w) {
      return v(w) === o;
    }
    function We(w) {
      return v(w) === c;
    }
    Ve.AsyncMode = m, Ve.ConcurrentMode = x, Ve.ContextConsumer = N, Ve.ContextProvider = C, Ve.Element = V, Ve.ForwardRef = A, Ve.Fragment = $, Ve.Lazy = P, Ve.Memo = T, Ve.Portal = k, Ve.Profiler = z, Ve.StrictMode = R, Ve.Suspense = B, Ve.isAsyncMode = G, Ve.isConcurrentMode = H, Ve.isContextConsumer = L, Ve.isContextProvider = q, Ve.isElement = K, Ve.isForwardRef = ne, Ve.isFragment = ae, Ve.isLazy = ue, Ve.isMemo = J, Ve.isPortal = oe, Ve.isProfiler = W, Ve.isStrictMode = ie, Ve.isSuspense = We, Ve.isValidElementType = E, Ve.typeOf = v;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? ca.exports = _P() : ca.exports = IP();
var PP = ca.exports, zs = PP, AP = {
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
}, $P = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, TP = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Kg = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Us = {};
Us[zs.ForwardRef] = TP;
Us[zs.Memo] = Kg;
function Rd(e) {
  return zs.isMemo(e) ? Kg : Us[e.$$typeof] || AP;
}
var RP = Object.defineProperty, VP = Object.getOwnPropertyNames, Vd = Object.getOwnPropertySymbols, MP = Object.getOwnPropertyDescriptor, LP = Object.getPrototypeOf, Md = Object.prototype;
function Xg(e, t, r) {
  if (typeof t != "string") {
    if (Md) {
      var n = LP(t);
      n && n !== Md && Xg(e, n, r);
    }
    var o = VP(t);
    Vd && (o = o.concat(Vd(t)));
    for (var i = Rd(e), a = Rd(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!$P[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = MP(t, l);
        try {
          RP(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var BP = Xg;
const Ld = /* @__PURE__ */ hP(BP);
var la = { exports: {} }, De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bd;
function FP() {
  if (Bd) return De;
  Bd = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
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
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === g || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, De.typeOf = b, De;
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
var Fd;
function WP() {
  return Fd || (Fd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function v(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || O || S === n || S === u || S === p || y || S === g || h || b || f || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var se = S.$$typeof;
        switch (se) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return me;
              default:
                var j = me && me.$$typeof;
                switch (j) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return j;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, z = n, R = u, B = p, F = !1, G = !1;
    function H(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function ne(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ae(S) {
      return m(S) === l;
    }
    function ue(S) {
      return m(S) === r;
    }
    function J(S) {
      return m(S) === d;
    }
    function oe(S) {
      return m(S) === c;
    }
    function W(S) {
      return m(S) === t;
    }
    function ie(S) {
      return m(S) === o;
    }
    function We(S) {
      return m(S) === n;
    }
    function w(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === p;
    }
    Me.ContextConsumer = x, Me.ContextProvider = N, Me.Element = C, Me.ForwardRef = V, Me.Fragment = A, Me.Lazy = $, Me.Memo = P, Me.Portal = T, Me.Profiler = k, Me.StrictMode = z, Me.Suspense = R, Me.SuspenseList = B, Me.isAsyncMode = H, Me.isConcurrentMode = L, Me.isContextConsumer = q, Me.isContextProvider = K, Me.isElement = ne, Me.isForwardRef = ae, Me.isFragment = ue, Me.isLazy = J, Me.isMemo = oe, Me.isPortal = W, Me.isProfiler = ie, Me.isStrictMode = We, Me.isSuspense = w, Me.isSuspenseList = le, Me.isValidElementType = v, Me.typeOf = m;
  }()), Me;
}
process.env.NODE_ENV === "production" ? la.exports = FP() : la.exports = WP();
var Wd = la.exports;
function qs(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function oi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || qs(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function jP(e, t, r) {
  oi(e, "mapStateToProps"), oi(t, "mapDispatchToProps"), oi(r, "mergeProps");
}
const GP = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function kP(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function g(O, E) {
    return l = O, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const O = e(l, u), E = !a(O, p);
    return p = O, E && (d = r(p, c, u)), d;
  }
  function y(O, E) {
    const v = !i(E, u), m = !o(O, l, E, u);
    return l = O, u = E, v && m ? h() : v ? b() : m ? f() : d;
  }
  return function(O, E) {
    return s ? y(O, E) : g(O, E);
  };
}
function HP(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Yg(t, GP);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && jP(a, s, l), kP(a, s, l, e, i);
}
function zP(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function UP(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Jg(e, t, r) {
  UP(e) || qs(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ua(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function jd(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Qg(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = jd(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = jd(s), s = o(i, a)), process.env.NODE_ENV !== "production" && Jg(s, n, t), s;
    }, o;
  };
}
function Ys(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function qP(e) {
  return e && typeof e == "object" ? ua((t) => (
    // @ts-ignore
    zP(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Qg(e, "mapDispatchToProps")
  ) : Ys(e, "mapDispatchToProps") : ua((t) => ({
    dispatch: t
  }));
}
function YP(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Qg(e, "mapStateToProps")
  ) : Ys(e, "mapStateToProps") : ua(() => ({}));
}
function KP(e, t, r) {
  return vr({}, r, e, t);
}
function XP(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && Jg(i, r, "mergeProps")), i;
    };
  };
}
function JP(e) {
  return e ? typeof e == "function" ? XP(e) : Ys(e, "mergeProps") : () => KP;
}
function QP() {
  const e = OP();
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
const Gd = {
  notify() {
  },
  get: () => []
};
function ZP(e, t) {
  let r, n = Gd, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = QP());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Gd);
  }
  function d() {
    i || (i = !0, p());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => n
  };
  return h;
}
const eA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", da = eA ? _.useLayoutEffect : _.useEffect;
function kd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ii(e, t) {
  if (kd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !kd(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const tA = ["reactReduxForwardedRef"];
let Zg = CP;
const rA = (e) => {
  Zg = e;
}, nA = [null, null], oA = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function iA(e, t, r) {
  da(() => e(...t), r);
}
function aA(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function sA(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const g = () => {
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
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function cA(e, t) {
  return e === t;
}
let Hd = !1;
function eb(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = cA,
  areOwnPropsEqual: i = ii,
  areStatePropsEqual: a = ii,
  areMergedPropsEqual: s = ii,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = DP
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Hd && (Hd = !0, qs('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = YP(e), d = qP(t), g = JP(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Wd.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${oA(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, O = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(m) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = m, ie = Yg(m, tA);
        return [m.context, W, ie];
      }, [m]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      Wd.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? m.store : A.store, k = P ? A.getServerState : T.getState, z = _.useMemo(() => HP(T.dispatch, O), [T]), [R, B] = _.useMemo(() => {
        if (!h) return nA;
        const W = ZP(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : vr({}, A, {
        subscription: R
      }), [$, A, R]), G = _.useRef(), H = _.useRef(C), L = _.useRef(), q = _.useRef(!1);
      _.useRef(!1);
      const K = _.useRef(!1), ne = _.useRef();
      da(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const ae = _.useMemo(() => () => L.current && C === H.current ? L.current : z(T.getState(), C), [T, C]), ue = _.useMemo(() => (W) => R ? sA(
        h,
        T,
        R,
        // @ts-ignore
        z,
        H,
        G,
        q,
        K,
        L,
        B,
        W
      ) : () => {
      }, [R]);
      iA(aA, [H, G, q, C, L, B]);
      let J;
      try {
        J = Zg(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ue,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ae,
          k ? () => z(k(), C) : ae
        );
      } catch (W) {
        throw ne.current && (W.message += `
The error may be correlated with this previous error:
${ne.current.stack}

`), W;
      }
      da(() => {
        ne.current = void 0, L.current = void 0, G.current = J;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, vr({}, J, {
          ref: N
        }))
      ), [N, b, J]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const m = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, vr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = y, m.WrappedComponent = b, Ld(m, b);
    }
    return Ld(v, b);
  };
}
rA(Hs.useSyncExternalStore);
SP(Or);
function lA(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function tb(e, t) {
  var r = ze(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && lA(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ce(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function uA(e, t) {
  return tb(function() {
    return e;
  }, t);
}
var nt = tb, Ke = uA, dA = process.env.NODE_ENV === "production", ai = "Invariant failed";
function zd(e, t) {
  if (dA)
    throw new Error(ai);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(ai, ": ").concat(r) : ai;
  throw new Error(n);
}
var pr = function(e) {
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
}, rb = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Ud = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, pA = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, si = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ks = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? si : r, o = e.border, i = o === void 0 ? si : o, a = e.padding, s = a === void 0 ? si : a, l = pr(rb(t, n)), u = pr(Ud(t, i)), p = pr(Ud(u, s));
  return {
    marginBox: l,
    borderBox: pr(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, xt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? zd(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : zd()), n;
}, fA = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, mA = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = pA(r, t);
  return Ks({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, pa = function(e, t) {
  return t === void 0 && (t = fA()), mA(e, t);
}, nb = function(e, t) {
  var r = {
    top: xt(t.marginTop),
    right: xt(t.marginRight),
    bottom: xt(t.marginBottom),
    left: xt(t.marginLeft)
  }, n = {
    top: xt(t.paddingTop),
    right: xt(t.paddingRight),
    bottom: xt(t.paddingBottom),
    left: xt(t.paddingLeft)
  }, o = {
    top: xt(t.borderTopWidth),
    right: xt(t.borderRightWidth),
    bottom: xt(t.borderBottomWidth),
    left: xt(t.borderLeftWidth)
  };
  return Ks({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, ob = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return nb(t, r);
}, qd = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function gA(e, t) {
  return !!(e === t || qd(e) && qd(t));
}
function bA(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!gA(e[r], t[r]))
      return !1;
  return !0;
}
function lt(e, t) {
  t === void 0 && (t = bA);
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
var hA = function(e) {
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
const vA = process.env.NODE_ENV === "production", yA = /[ \t]{2,}/g, EA = /^[ \t]*/gm, Yd = (e) => e.replace(yA, " ").replace(EA, "").trim(), xA = (e) => Yd(`
  %c@hello-pangea/dnd

  %c${Yd(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), wA = (e) => [xA(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], SA = "__@hello-pangea/dnd-disable-dev-warnings";
function ib(e, t) {
  vA || typeof window < "u" && window[SA] || console[e](...wA(t));
}
const jt = ib.bind(null, "warn"), fa = ib.bind(null, "error");
function OA() {
}
function NA(e, t) {
  return {
    ...e,
    ...t
  };
}
function DA(e, t, r) {
  const n = t.map((o) => {
    const i = NA(r, o.options);
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
const CA = process.env.NODE_ENV === "production", Kd = "Invariant failed";
class nn extends Error {
}
nn.prototype.toString = function() {
  return this.message;
};
function te(e, t) {
  throw CA ? new nn(Kd) : new nn(`${Kd}: ${t || ""}`);
}
class cM extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = OA, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && jt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof nn && (r.preventDefault(), process.env.NODE_ENV !== "production" && fa(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = DA(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof nn) {
      process.env.NODE_ENV !== "production" && fa(t.message), this.setState({});
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
const or = {
  x: 0,
  y: 0
}, _A = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), IA = (e, t) => e.x === t.x && e.y === t.y, PA = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), AA = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var $A = (e, t) => {
  const r = pr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const TA = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), RA = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, VA = (e, t) => t ? TA(e, t.scroll.diff.displacement) : e, MA = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, LA = (e, t) => t && t.shouldClipSubject ? $A(t.pageMarginBox, e) : pr(e);
var BA = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = VA(e.marginBox, n), i = MA(o, r, t), a = LA(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
lt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
lt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const FA = lt((e) => Object.values(e)), WA = lt((e) => Object.values(e));
lt((e, t) => WA(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function jA(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
lt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const GA = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, kA = {
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
lt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: AA(e.line, r)
  };
});
var Pn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const HA = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), zA = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Xs = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, on = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, UA = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Yt = `${UA.outOfTheWay}s ${Xs.outOfTheWay}`, An = {
  fluid: `opacity ${Yt}`,
  snap: `transform ${Yt}, opacity ${Yt}`,
  drop: (e) => {
    const t = `${e}s ${Xs.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Yt}`,
  placeholder: `height ${Yt}, width ${Yt}, margin ${Yt}`
}, Xd = (e) => IA(e, or) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ma = {
  moveTo: Xd,
  drop: (e, t) => {
    const r = Xd(e);
    if (r)
      return t ? `${r} scale(${on.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var ab = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = _A({
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
}, qA = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? te(!1, "Cannot find document.documentElement") : te()), e;
}, YA = () => {
  const e = qA();
  return ab({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
lt((e) => FA(e).filter((t) => !(!t.isEnabled || !t.frame)));
const sb = "data-rfd", Jd = (() => {
  const e = `${sb}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Qd = {
  contextId: `${sb}-scroll-container-context-id`
}, KA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ar : ce;
var Br = KA;
function XA(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var JA = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function cb(e) {
  return e instanceof JA(e).HTMLElement;
}
function QA(e, t) {
  const r = `[${Jd.contextId}="${e}"]`, n = XA(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && jt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Jd.draggableId) === t);
  return o ? cb(o) ? o : (process.env.NODE_ENV !== "production" && jt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && jt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var lb = I.createContext(null), ZA = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? te(!1, "Cannot find document.body") : te()), e;
};
let e$ = 0;
const ub = {
  separator: "::"
};
function t$(e, t = ub) {
  return nt(() => `${e}${t.separator}${e$++}`, [t.separator, e]);
}
function r$(e, t = ub) {
  const r = I.useId();
  return nt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var db = "useId" in I ? r$ : t$, Js = I.createContext(null);
function pb(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Qs(e, t) {
  pb(() => {
    ce(() => {
      try {
        e();
      } catch (r) {
        fa(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function n$(e) {
  const t = M(e);
  return ce(() => {
    t.current = e;
  }), t;
}
function Zs(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Zd = {
  dragging: 5e3,
  dropAnimating: 4500
}, o$ = (e, t) => t ? An.drop(t.duration) : e ? An.snap : An.fluid, i$ = (e, t) => {
  if (e)
    return t ? on.opacity.drop : on.opacity.combining;
}, a$ = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function s$(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = a$(e), s = !!o, l = s ? ma.drop(r, i) : ma.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: o$(a, o),
    transform: l,
    opacity: i$(i, s),
    zIndex: s ? Zd.dropAnimating : Zd.dragging,
    pointerEvents: "none"
  };
}
function c$(e) {
  return {
    transform: ma.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function l$(e) {
  return e.type === "DRAGGING" ? s$(e) : c$(e);
}
function u$(e, t, r = or) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = nb(o, n), a = pa(i, r), s = {
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
function d$(e) {
  const t = db("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = nt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Ke((g) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? te(!1, "Cannot get dimension when no ref is set") : te()), u$(r, h, g);
  }, [r, o]), p = nt(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  Br(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Br(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = c.current;
    c.current = p, n.draggable.update(p, g);
  }, [p, n.draggable]);
}
var ec = I.createContext(null);
function fb(e) {
  e && cb(e) || (process.env.NODE_ENV !== "production" ? te(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : te());
}
function p$(e, t, r) {
  Qs(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? te(!1, "Draggable requires a draggableId") : te(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? te(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : te(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? te(!1, `${n(o)} requires an integer index prop`) : te(!1)), e.mapped.type !== "DRAGGING" && (fb(r()), e.isEnabled && (QA(t, o) || (process.env.NODE_ENV !== "production" ? te(!1, `${n(o)} Unable to find drag handle`) : te(!1))));
  });
}
function f$(e) {
  pb(() => {
    const t = M(e);
    Qs(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? te(!1, "Draggable isClone prop value changed during component life") : te(!1));
    }, [e]);
  });
}
function Un(e) {
  const t = Nt(e);
  return t || (process.env.NODE_ENV !== "production" ? te(!1, "Could not find required context") : te()), t;
}
function m$(e) {
  e.preventDefault();
}
const g$ = (e) => {
  const t = M(null), r = Ke((x = null) => {
    t.current = x;
  }, []), n = Ke(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Un(Js), {
    type: s,
    droppableId: l
  } = Un(ec), u = nt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (p$(e, o, n), f$(b), !b) {
    const x = nt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, n, h, g, d]);
    d$(x);
  }
  const O = nt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: m$
  } : null, [o, i, c, d]), E = Ke((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : sr(y));
  }, [y, f]), v = nt(() => {
    const x = l$(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [o, O, c, f, E, r]), m = nt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, m));
};
var b$ = g$, mb = (e, t) => e === t, gb = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const h$ = (e) => e.combine ? e.combine.draggableId : null, v$ = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function y$() {
  const e = lt((n, o) => ({
    x: n,
    y: o
  })), t = lt((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = lt((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (Zs(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = Pn(n.impact), l = v$(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = gb(l), c = h$(l), d = {
        duration: n.dropDuration,
        curve: Xs.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? on.opacity.drop : null,
        scale: c ? on.scale.drop : null
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
function bb(e = null) {
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
const E$ = {
  mapped: {
    type: "SECONDARY",
    offset: or,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: bb(null)
  }
};
function x$() {
  const e = lt((i, a) => ({
    x: i,
    y: a
  })), t = lt(bb), r = lt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(or, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = jA(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = PA(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Zs(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const w$ = () => {
  const e = y$(), t = x$();
  return (r, n) => e(r, n) || t(r, n) || E$;
}, S$ = {
  dropAnimationFinished: zA
}, O$ = eb(w$, S$, null, {
  context: lb,
  areStatePropsEqual: mb
})(b$);
var N$ = O$;
function D$(e) {
  return Un(ec).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(N$, e);
}
const tc = (e) => (t) => e === t, C$ = tc("scroll"), _$ = tc("auto"), I$ = tc("visible"), ep = (e, t) => t(e.overflowX) || t(e.overflowY), P$ = (e, t) => t(e.overflowX) && t(e.overflowY), hb = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return ep(r, C$) || ep(r, _$);
}, A$ = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = ZA(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, te()), !hb(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return P$(n, I$) || process.env.NODE_ENV !== "production" && jt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, rc = (e) => e == null ? null : e === document.body ? A$() ? e : null : e === document.documentElement ? null : hb(e) ? e : rc(e.parentElement);
var $$ = (e) => {
  !e || !rc(e.parentElement) || process.env.NODE_ENV !== "production" && jt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ga = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const vb = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : vb(e.parentElement) : !1;
var T$ = (e) => {
  const t = rc(e), r = vb(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, R$ = ({
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
    } = s, g = ab({
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
        max: g,
        diff: {
          value: or,
          displacement: or
        }
      }
    };
  })(), u = o === "vertical" ? GA : kA, p = BA({
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
const V$ = (e, t) => {
  const r = ob(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = rb({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Ks({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var M$ = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = V$(e, l), p = pa(u, n), c = (() => {
    if (!l)
      return null;
    const d = ob(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: pa(d, n),
      scroll: ga(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return R$({
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
const L$ = {
  passive: !1
}, B$ = {
  passive: !0
};
var tp = (e) => e.shouldPublishImmediately ? L$ : B$;
const En = (e) => e && e.env.closestScrollable || null;
function F$(e) {
  const t = M(null), r = Un(Js), n = db("droppable"), {
    registry: o,
    marshal: i
  } = r, a = n$(e), s = nt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = nt(() => lt((v, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? te(!1, "Can only update scroll when dragging") : te());
    const x = {
      x: v,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = Ke(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? or : ga(v.env.closestScrollable);
  }, []), c = Ke(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = nt(() => hA(c), [c]), g = Ke(() => {
    const v = t.current, m = En(v);
    if (v && m || (process.env.NODE_ENV !== "production" ? te(!1, "Could not find scroll options while scrolling") : te()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Ke((v, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? te(!1, "Cannot collect a droppable while a drag is occurring") : te());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? te(!1, "Cannot collect without a droppable ref") : te());
    const C = T$(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = M$({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Qd.contextId, r.contextId), $.addEventListener("scroll", g, tp(V.scrollOptions)), process.env.NODE_ENV !== "production" && $$($)), A;
  }, [r.contextId, s, g, a]), b = Ke(() => {
    const v = t.current, m = En(v);
    return v && m || (process.env.NODE_ENV !== "production" ? te(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : te()), ga(m);
  }, []), f = Ke(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? te(!1, "Cannot stop drag when no active drag") : te());
    const m = En(v);
    t.current = null, m && (d.cancel(), m.removeAttribute(Qd.contextId), m.removeEventListener("scroll", g, tp(v.scrollOptions)));
  }, [g, d]), y = Ke((v) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? te(!1, "Cannot scroll when there is no drag") : te());
    const x = En(m);
    x || (process.env.NODE_ENV !== "production" ? te(!1, "Cannot scroll a droppable with no closest scrollable") : te()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), O = nt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = nt(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: O
  }), [O, s, n]);
  Br(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && jt("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [O, s, f, E, i, o.droppable]), Br(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Br(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ci() {
}
const W$ = {
  width: 0,
  height: 0,
  margin: RA
}, j$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? W$ : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, G$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = j$({
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
    transition: r !== "none" ? An.placeholder : null
  };
}, k$ = (e) => {
  const t = M(null), r = Ke(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = ze(e.animate === "open");
  ce(() => s ? n !== "open" ? (r(), l(!1), ci) : t.current ? ci : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : ci, [n, s, r]);
  const u = Ke((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = G$({
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
var H$ = I.memo(k$);
function li(e) {
  return typeof e == "boolean";
}
function ui(e, t) {
  t.forEach((r) => r(e));
}
const z$ = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? te(!1, "A Droppable requires a droppableId prop") : te()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? te(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : te());
}, function({
  props: e
}) {
  li(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? te(!1, "isDropDisabled must be a boolean") : te()), li(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? te(!1, "isCombineEnabled must be a boolean") : te()), li(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? te(!1, "ignoreContainerClipping must be a boolean") : te());
}, function({
  getDroppableRef: e
}) {
  fb(e());
}], U$ = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && jt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], q$ = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? te(!1, "Must provide a clone render function (renderClone) for virtual lists") : te());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? te(!1, "Expected virtual list to not have a placeholder") : te());
}];
function Y$(e) {
  Qs(() => {
    ui(e, z$), e.props.mode === "standard" && ui(e, U$), e.props.mode === "virtual" && ui(e, q$);
  });
}
class K$ extends I.PureComponent {
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
const X$ = (e) => {
  const t = Nt(Js);
  t || (process.env.NODE_ENV !== "production" ? te(!1, "Could not find app context") : te());
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
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, O = Ke(() => o.current, []), E = Ke((P = null) => {
    o.current = P;
  }, []), v = Ke(() => i.current, []), m = Ke((P = null) => {
    i.current = P;
  }, []);
  Y$({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: v
  });
  const x = Ke(() => {
    n() && f({
      maxScroll: YA()
    });
  }, [n, f]);
  F$({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const N = nt(() => I.createElement(K$, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(H$, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = nt(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = nt(() => ({
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
    } = b, k = I.createElement(D$, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, R) => T(z, R, P));
    return Sr.createPortal(k, y());
  }
  return I.createElement(ec.Provider, {
    value: A
  }, a(C, h), $());
};
var J$ = X$;
function Q$() {
  return document.body || (process.env.NODE_ENV !== "production" ? te(!1, "document.body is not ready") : te()), document.body;
}
const rp = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Q$
}, yb = (e) => {
  let t = {
    ...e
  }, r;
  for (r in rp)
    e[r] === void 0 && (t = {
      ...t,
      [r]: rp[r]
    });
  return t;
}, di = (e, t) => e === t.droppable.type, np = (e, t) => t.draggables[e.draggable.id], Z$ = () => {
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
  }, r = lt((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = lt((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
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
    const a = yb(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (Zs(o)) {
      const c = o.critical;
      if (!di(l, c))
        return t;
      const d = np(c, o.dimensions), g = Pn(o.impact) === s;
      return n(s, u, g, g, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!di(l, c.critical))
        return t;
      const d = np(c.critical, o.dimensions);
      return n(s, u, gb(c.result) === s, Pn(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!di(l, c.critical))
        return t;
      const d = Pn(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, eT = {
  updateViewportMaxScroll: HA
};
eb(Z$, eT, (e, t, r) => ({
  ...yb(r),
  ...e,
  ...t
}), {
  context: lb,
  areStatePropsEqual: mb
})(J$);
var op;
(function(e) {
  e.event = "event", e.props = "prop";
})(op || (op = {}));
var ip = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + ip(), "" + ip();
function tT(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ba = { exports: {} }, pi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;
function rT() {
  if (ap) return pi;
  ap = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var g = d(), h = n({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, g, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(g), g;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var g = d();
      return !r(c, g);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return pi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, pi;
}
var sp = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp;
function nT() {
  return cp || (cp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
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
      var y = f[0].inst, O = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && O({ inst: y });
        },
        [g, b, h]
      ), s(
        function() {
          return r(y) && O({ inst: y }), g(function() {
            r(y) && O({ inst: y });
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
    function n(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    sp.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), sp;
}
process.env.NODE_ENV === "production" ? ba.exports = rT() : ba.exports = nT();
var nc = ba.exports, fi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp;
function oT() {
  if (lp) return fi;
  lp = 1;
  var e = I, t = nc;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return fi.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!O) {
            if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var O = !1, E, v, m = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          m === null ? void 0 : function() {
            return y(m());
          }
        ];
      },
      [p, c, d, g]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, fi;
}
var up = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dp;
function iT() {
  return dp || (dp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = nc, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    up.useSyncExternalStoreWithSelector = function(u, p, c, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!O) {
              if (O = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var O = !1, E, v, m = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            m === null ? void 0 : function() {
              return y(m());
            }
          ];
        },
        [p, c, d, g]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), up;
}
process.env.NODE_ENV === "production" ? oT() : iT();
function aT(e) {
  e();
}
let Eb = aT;
const sT = (e) => Eb = e, cT = () => Eb, pp = Symbol.for("react-redux-context"), fp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function lT() {
  var e;
  if (!_.createContext) return {};
  const t = (e = fp[pp]) != null ? e : fp[pp] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const uT = /* @__PURE__ */ lT(), dT = () => {
  throw new Error("uSES not initialized!");
};
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yr.apply(null, arguments);
}
function xb(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var ha = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp;
function pT() {
  if (mp) return Ce;
  mp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case p:
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
  function v(m) {
    return E(m) === u;
  }
  return Ce.AsyncMode = l, Ce.ConcurrentMode = u, Ce.ContextConsumer = s, Ce.ContextProvider = a, Ce.Element = t, Ce.ForwardRef = p, Ce.Fragment = n, Ce.Lazy = h, Ce.Memo = g, Ce.Portal = r, Ce.Profiler = i, Ce.StrictMode = o, Ce.Suspense = c, Ce.isAsyncMode = function(m) {
    return v(m) || E(m) === l;
  }, Ce.isConcurrentMode = v, Ce.isContextConsumer = function(m) {
    return E(m) === s;
  }, Ce.isContextProvider = function(m) {
    return E(m) === a;
  }, Ce.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ce.isForwardRef = function(m) {
    return E(m) === p;
  }, Ce.isFragment = function(m) {
    return E(m) === n;
  }, Ce.isLazy = function(m) {
    return E(m) === h;
  }, Ce.isMemo = function(m) {
    return E(m) === g;
  }, Ce.isPortal = function(m) {
    return E(m) === r;
  }, Ce.isProfiler = function(m) {
    return E(m) === i;
  }, Ce.isStrictMode = function(m) {
    return E(m) === o;
  }, Ce.isSuspense = function(m) {
    return E(m) === c;
  }, Ce.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === o || m === c || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === p || m.$$typeof === f || m.$$typeof === y || m.$$typeof === O || m.$$typeof === b);
  }, Ce.typeOf = E, Ce;
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
var gp;
function fT() {
  return gp || (gp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === u || w === i || w === o || w === c || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === f || w.$$typeof === y || w.$$typeof === O || w.$$typeof === b);
    }
    function v(w) {
      if (typeof w == "object" && w !== null) {
        var le = w.$$typeof;
        switch (le) {
          case t:
            var S = w.type;
            switch (S) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return S;
              default:
                var se = S && S.$$typeof;
                switch (se) {
                  case s:
                  case p:
                  case h:
                  case g:
                  case a:
                    return se;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = g, k = r, z = i, R = o, B = c, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(w) || v(w) === l;
    }
    function H(w) {
      return v(w) === u;
    }
    function L(w) {
      return v(w) === s;
    }
    function q(w) {
      return v(w) === a;
    }
    function K(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function ne(w) {
      return v(w) === p;
    }
    function ae(w) {
      return v(w) === n;
    }
    function ue(w) {
      return v(w) === h;
    }
    function J(w) {
      return v(w) === g;
    }
    function oe(w) {
      return v(w) === r;
    }
    function W(w) {
      return v(w) === i;
    }
    function ie(w) {
      return v(w) === o;
    }
    function We(w) {
      return v(w) === c;
    }
    Le.AsyncMode = m, Le.ConcurrentMode = x, Le.ContextConsumer = N, Le.ContextProvider = C, Le.Element = V, Le.ForwardRef = A, Le.Fragment = $, Le.Lazy = P, Le.Memo = T, Le.Portal = k, Le.Profiler = z, Le.StrictMode = R, Le.Suspense = B, Le.isAsyncMode = G, Le.isConcurrentMode = H, Le.isContextConsumer = L, Le.isContextProvider = q, Le.isElement = K, Le.isForwardRef = ne, Le.isFragment = ae, Le.isLazy = ue, Le.isMemo = J, Le.isPortal = oe, Le.isProfiler = W, Le.isStrictMode = ie, Le.isSuspense = We, Le.isValidElementType = E, Le.typeOf = v;
  }()), Le;
}
process.env.NODE_ENV === "production" ? ha.exports = pT() : ha.exports = fT();
var mT = ha.exports, oc = mT, gT = {
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
}, bT = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, hT = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wb = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ic = {};
ic[oc.ForwardRef] = hT;
ic[oc.Memo] = wb;
function bp(e) {
  return oc.isMemo(e) ? wb : ic[e.$$typeof] || gT;
}
var vT = Object.defineProperty, yT = Object.getOwnPropertyNames, hp = Object.getOwnPropertySymbols, ET = Object.getOwnPropertyDescriptor, xT = Object.getPrototypeOf, vp = Object.prototype;
function Sb(e, t, r) {
  if (typeof t != "string") {
    if (vp) {
      var n = xT(t);
      n && n !== vp && Sb(e, n, r);
    }
    var o = yT(t);
    hp && (o = o.concat(hp(t)));
    for (var i = bp(e), a = bp(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!bT[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = ET(t, l);
        try {
          vT(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var wT = Sb;
const yp = /* @__PURE__ */ tT(wT);
var va = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ep;
function ST() {
  if (Ep) return _e;
  Ep = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
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
  return _e.ContextConsumer = a, _e.ContextProvider = i, _e.Element = e, _e.ForwardRef = l, _e.Fragment = r, _e.Lazy = d, _e.Memo = c, _e.Portal = t, _e.Profiler = o, _e.StrictMode = n, _e.Suspense = u, _e.SuspenseList = p, _e.isAsyncMode = function() {
    return !1;
  }, _e.isConcurrentMode = function() {
    return !1;
  }, _e.isContextConsumer = function(f) {
    return b(f) === a;
  }, _e.isContextProvider = function(f) {
    return b(f) === i;
  }, _e.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, _e.isForwardRef = function(f) {
    return b(f) === l;
  }, _e.isFragment = function(f) {
    return b(f) === r;
  }, _e.isLazy = function(f) {
    return b(f) === d;
  }, _e.isMemo = function(f) {
    return b(f) === c;
  }, _e.isPortal = function(f) {
    return b(f) === t;
  }, _e.isProfiler = function(f) {
    return b(f) === o;
  }, _e.isStrictMode = function(f) {
    return b(f) === n;
  }, _e.isSuspense = function(f) {
    return b(f) === u;
  }, _e.isSuspenseList = function(f) {
    return b(f) === p;
  }, _e.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === g || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, _e.typeOf = b, _e;
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
var xp;
function OT() {
  return xp || (xp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function v(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === o || O || S === n || S === u || S === p || y || S === g || h || b || f || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === c || S.$$typeof === i || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var se = S.$$typeof;
        switch (se) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return me;
              default:
                var j = me && me.$$typeof;
                switch (j) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return j;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, z = n, R = u, B = p, F = !1, G = !1;
    function H(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function ne(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function ae(S) {
      return m(S) === l;
    }
    function ue(S) {
      return m(S) === r;
    }
    function J(S) {
      return m(S) === d;
    }
    function oe(S) {
      return m(S) === c;
    }
    function W(S) {
      return m(S) === t;
    }
    function ie(S) {
      return m(S) === o;
    }
    function We(S) {
      return m(S) === n;
    }
    function w(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === p;
    }
    Be.ContextConsumer = x, Be.ContextProvider = N, Be.Element = C, Be.ForwardRef = V, Be.Fragment = A, Be.Lazy = $, Be.Memo = P, Be.Portal = T, Be.Profiler = k, Be.StrictMode = z, Be.Suspense = R, Be.SuspenseList = B, Be.isAsyncMode = H, Be.isConcurrentMode = L, Be.isContextConsumer = q, Be.isContextProvider = K, Be.isElement = ne, Be.isForwardRef = ae, Be.isFragment = ue, Be.isLazy = J, Be.isMemo = oe, Be.isPortal = W, Be.isProfiler = ie, Be.isStrictMode = We, Be.isSuspense = w, Be.isSuspenseList = le, Be.isValidElementType = v, Be.typeOf = m;
  }()), Be;
}
process.env.NODE_ENV === "production" ? va.exports = ST() : va.exports = OT();
var wp = va.exports;
function ac(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function mi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ac(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function NT(e, t, r) {
  mi(e, "mapStateToProps"), mi(t, "mapDispatchToProps"), mi(r, "mergeProps");
}
const DT = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function CT(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function g(O, E) {
    return l = O, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const O = e(l, u), E = !a(O, p);
    return p = O, E && (d = r(p, c, u)), d;
  }
  function y(O, E) {
    const v = !i(E, u), m = !o(O, l, E, u);
    return l = O, u = E, v && m ? h() : v ? b() : m ? f() : d;
  }
  return function(O, E) {
    return s ? y(O, E) : g(O, E);
  };
}
function _T(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = xb(t, DT);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && NT(a, s, l), CT(a, s, l, e, i);
}
function IT(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function PT(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Ob(e, t, r) {
  PT(e) || ac(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ya(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Sp(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Nb(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = Sp(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = Sp(s), s = o(i, a)), process.env.NODE_ENV !== "production" && Ob(s, n, t), s;
    }, o;
  };
}
function sc(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function AT(e) {
  return e && typeof e == "object" ? ya((t) => (
    // @ts-ignore
    IT(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Nb(e, "mapDispatchToProps")
  ) : sc(e, "mapDispatchToProps") : ya((t) => ({
    dispatch: t
  }));
}
function $T(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Nb(e, "mapStateToProps")
  ) : sc(e, "mapStateToProps") : ya(() => ({}));
}
function TT(e, t, r) {
  return yr({}, r, e, t);
}
function RT(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && Ob(i, r, "mergeProps")), i;
    };
  };
}
function VT(e) {
  return e ? typeof e == "function" ? RT(e) : sc(e, "mergeProps") : () => TT;
}
function MT() {
  const e = cT();
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
const Op = {
  notify() {
  },
  get: () => []
};
function LT(e, t) {
  let r, n = Op, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = MT());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Op);
  }
  function d() {
    i || (i = !0, p());
  }
  function g() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => n
  };
  return h;
}
const BT = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ea = BT ? _.useLayoutEffect : _.useEffect;
function Np(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function gi(e, t) {
  if (Np(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Np(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const FT = ["reactReduxForwardedRef"];
let Db = dT;
const WT = (e) => {
  Db = e;
}, jT = [null, null], GT = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function kT(e, t, r) {
  Ea(() => e(...t), r);
}
function HT(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function zT(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const g = () => {
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
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function UT(e, t) {
  return e === t;
}
let Dp = !1;
function Cb(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = UT,
  areOwnPropsEqual: i = gi,
  areStatePropsEqual: a = gi,
  areMergedPropsEqual: s = gi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = uT
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Dp && (Dp = !0, ac('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = $T(e), d = AT(t), g = VT(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !wp.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${GT(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, O = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(m) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = m, ie = xb(m, FT);
        return [m.context, W, ie];
      }, [m]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      wp.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? m.store : A.store, k = P ? A.getServerState : T.getState, z = _.useMemo(() => _T(T.dispatch, O), [T]), [R, B] = _.useMemo(() => {
        if (!h) return jT;
        const W = LT(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : yr({}, A, {
        subscription: R
      }), [$, A, R]), G = _.useRef(), H = _.useRef(C), L = _.useRef(), q = _.useRef(!1);
      _.useRef(!1);
      const K = _.useRef(!1), ne = _.useRef();
      Ea(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const ae = _.useMemo(() => () => L.current && C === H.current ? L.current : z(T.getState(), C), [T, C]), ue = _.useMemo(() => (W) => R ? zT(
        h,
        T,
        R,
        // @ts-ignore
        z,
        H,
        G,
        q,
        K,
        L,
        B,
        W
      ) : () => {
      }, [R]);
      kT(HT, [H, G, q, C, L, B]);
      let J;
      try {
        J = Db(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ue,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ae,
          k ? () => z(k(), C) : ae
        );
      } catch (W) {
        throw ne.current && (W.message += `
The error may be correlated with this previous error:
${ne.current.stack}

`), W;
      }
      Ea(() => {
        ne.current = void 0, L.current = void 0, G.current = J;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, yr({}, J, {
          ref: N
        }))
      ), [N, b, J]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const m = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, yr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = y, m.WrappedComponent = b, yp(m, b);
    }
    return yp(v, b);
  };
}
WT(nc.useSyncExternalStore);
sT(Or);
function qT(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function _b(e, t) {
  var r = ze(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && qT(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ce(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function YT(e, t) {
  return _b(function() {
    return e;
  }, t);
}
var ot = _b, Xe = YT, KT = process.env.NODE_ENV === "production", bi = "Invariant failed";
function Cp(e, t) {
  if (KT)
    throw new Error(bi);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(bi, ": ").concat(r) : bi;
  throw new Error(n);
}
var fr = function(e) {
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
}, Ib = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, _p = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, XT = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, hi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, cc = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? hi : r, o = e.border, i = o === void 0 ? hi : o, a = e.padding, s = a === void 0 ? hi : a, l = fr(Ib(t, n)), u = fr(_p(t, i)), p = fr(_p(u, s));
  return {
    marginBox: l,
    borderBox: fr(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, wt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Cp(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Cp()), n;
}, JT = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, QT = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = XT(r, t);
  return cc({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, xa = function(e, t) {
  return t === void 0 && (t = JT()), QT(e, t);
}, Pb = function(e, t) {
  var r = {
    top: wt(t.marginTop),
    right: wt(t.marginRight),
    bottom: wt(t.marginBottom),
    left: wt(t.marginLeft)
  }, n = {
    top: wt(t.paddingTop),
    right: wt(t.paddingRight),
    bottom: wt(t.paddingBottom),
    left: wt(t.paddingLeft)
  }, o = {
    top: wt(t.borderTopWidth),
    right: wt(t.borderRightWidth),
    bottom: wt(t.borderBottomWidth),
    left: wt(t.borderLeftWidth)
  };
  return cc({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, Ab = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Pb(t, r);
}, Ip = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function ZT(e, t) {
  return !!(e === t || Ip(e) && Ip(t));
}
function eR(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!ZT(e[r], t[r]))
      return !1;
  return !0;
}
function ut(e, t) {
  t === void 0 && (t = eR);
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
var tR = function(e) {
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
const rR = process.env.NODE_ENV === "production", nR = /[ \t]{2,}/g, oR = /^[ \t]*/gm, Pp = (e) => e.replace(nR, " ").replace(oR, "").trim(), iR = (e) => Pp(`
  %c@hello-pangea/dnd

  %c${Pp(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), aR = (e) => [iR(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], sR = "__@hello-pangea/dnd-disable-dev-warnings";
function $b(e, t) {
  rR || typeof window < "u" && window[sR] || console[e](...aR(t));
}
const Gt = $b.bind(null, "warn"), wa = $b.bind(null, "error");
function cR() {
}
function lR(e, t) {
  return {
    ...e,
    ...t
  };
}
function uR(e, t, r) {
  const n = t.map((o) => {
    const i = lR(r, o.options);
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
const dR = process.env.NODE_ENV === "production", Ap = "Invariant failed";
class an extends Error {
}
an.prototype.toString = function() {
  return this.message;
};
function re(e, t) {
  throw dR ? new an(Ap) : new an(`${Ap}: ${t || ""}`);
}
class lM extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = cR, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Gt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof an && (r.preventDefault(), process.env.NODE_ENV !== "production" && wa(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = uR(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof an) {
      process.env.NODE_ENV !== "production" && wa(t.message), this.setState({});
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
const ir = {
  x: 0,
  y: 0
}, pR = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), fR = (e, t) => e.x === t.x && e.y === t.y, mR = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), gR = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var bR = (e, t) => {
  const r = fr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const hR = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), vR = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, yR = (e, t) => t ? hR(e, t.scroll.diff.displacement) : e, ER = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, xR = (e, t) => t && t.shouldClipSubject ? bR(t.pageMarginBox, e) : fr(e);
var wR = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = yR(e.marginBox, n), i = ER(o, r, t), a = xR(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
ut((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
ut((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const SR = ut((e) => Object.values(e)), OR = ut((e) => Object.values(e));
ut((e, t) => OR(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function NR(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
ut((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const DR = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, CR = {
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
ut(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: gR(e.line, r)
  };
});
var $n = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const _R = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), IR = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), lc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, sn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, PR = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Kt = `${PR.outOfTheWay}s ${lc.outOfTheWay}`, Tn = {
  fluid: `opacity ${Kt}`,
  snap: `transform ${Kt}, opacity ${Kt}`,
  drop: (e) => {
    const t = `${e}s ${lc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Kt}`,
  placeholder: `height ${Kt}, width ${Kt}, margin ${Kt}`
}, $p = (e) => fR(e, ir) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Sa = {
  moveTo: $p,
  drop: (e, t) => {
    const r = $p(e);
    if (r)
      return t ? `${r} scale(${sn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Tb = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = pR({
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
}, AR = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot find document.documentElement") : re()), e;
}, $R = () => {
  const e = AR();
  return Tb({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
ut((e) => SR(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Rb = "data-rfd", Tp = (() => {
  const e = `${Rb}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Rp = {
  contextId: `${Rb}-scroll-container-context-id`
}, TR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ar : ce;
var Fr = TR;
function RR(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var VR = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Vb(e) {
  return e instanceof VR(e).HTMLElement;
}
function MR(e, t) {
  const r = `[${Tp.contextId}="${e}"]`, n = RR(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Gt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Tp.draggableId) === t);
  return o ? Vb(o) ? o : (process.env.NODE_ENV !== "production" && Gt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Gt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Mb = I.createContext(null), LR = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot find document.body") : re()), e;
};
let BR = 0;
const Lb = {
  separator: "::"
};
function FR(e, t = Lb) {
  return ot(() => `${e}${t.separator}${BR++}`, [t.separator, e]);
}
function WR(e, t = Lb) {
  const r = I.useId();
  return ot(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Bb = "useId" in I ? WR : FR, uc = I.createContext(null);
function Fb(e) {
  process.env.NODE_ENV !== "production" && e();
}
function dc(e, t) {
  Fb(() => {
    ce(() => {
      try {
        e();
      } catch (r) {
        wa(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function jR(e) {
  const t = M(e);
  return ce(() => {
    t.current = e;
  }), t;
}
function pc(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Vp = {
  dragging: 5e3,
  dropAnimating: 4500
}, GR = (e, t) => t ? Tn.drop(t.duration) : e ? Tn.snap : Tn.fluid, kR = (e, t) => {
  if (e)
    return t ? sn.opacity.drop : sn.opacity.combining;
}, HR = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function zR(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = HR(e), s = !!o, l = s ? Sa.drop(r, i) : Sa.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: GR(a, o),
    transform: l,
    opacity: kR(i, s),
    zIndex: s ? Vp.dropAnimating : Vp.dragging,
    pointerEvents: "none"
  };
}
function UR(e) {
  return {
    transform: Sa.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function qR(e) {
  return e.type === "DRAGGING" ? zR(e) : UR(e);
}
function YR(e, t, r = ir) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Pb(o, n), a = xa(i, r), s = {
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
function KR(e) {
  const t = Bb("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = ot(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Xe((g) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot get dimension when no ref is set") : re()), YR(r, h, g);
  }, [r, o]), p = ot(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  Fr(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Fr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = c.current;
    c.current = p, n.draggable.update(p, g);
  }, [p, n.draggable]);
}
var fc = I.createContext(null);
function Wb(e) {
  e && Vb(e) || (process.env.NODE_ENV !== "production" ? re(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : re());
}
function XR(e, t, r) {
  dc(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? re(!1, "Draggable requires a draggableId") : re(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? re(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : re(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? re(!1, `${n(o)} requires an integer index prop`) : re(!1)), e.mapped.type !== "DRAGGING" && (Wb(r()), e.isEnabled && (MR(t, o) || (process.env.NODE_ENV !== "production" ? re(!1, `${n(o)} Unable to find drag handle`) : re(!1))));
  });
}
function JR(e) {
  Fb(() => {
    const t = M(e);
    dc(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? re(!1, "Draggable isClone prop value changed during component life") : re(!1));
    }, [e]);
  });
}
function qn(e) {
  const t = Nt(e);
  return t || (process.env.NODE_ENV !== "production" ? re(!1, "Could not find required context") : re()), t;
}
function QR(e) {
  e.preventDefault();
}
const ZR = (e) => {
  const t = M(null), r = Xe((x = null) => {
    t.current = x;
  }, []), n = Xe(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = qn(uc), {
    type: s,
    droppableId: l
  } = qn(fc), u = ot(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (XR(e, o, n), JR(b), !b) {
    const x = ot(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, n, h, g, d]);
    KR(x);
  }
  const O = ot(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: QR
  } : null, [o, i, c, d]), E = Xe((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : sr(y));
  }, [y, f]), v = ot(() => {
    const x = qR(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [o, O, c, f, E, r]), m = ot(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, m));
};
var eV = ZR, jb = (e, t) => e === t, Gb = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const tV = (e) => e.combine ? e.combine.draggableId : null, rV = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function nV() {
  const e = ut((n, o) => ({
    x: n,
    y: o
  })), t = ut((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = ut((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (pc(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = $n(n.impact), l = rV(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Gb(l), c = tV(l), d = {
        duration: n.dropDuration,
        curve: lc.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? sn.opacity.drop : null,
        scale: c ? sn.scale.drop : null
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
function kb(e = null) {
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
const oV = {
  mapped: {
    type: "SECONDARY",
    offset: ir,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: kb(null)
  }
};
function iV() {
  const e = ut((i, a) => ({
    x: i,
    y: a
  })), t = ut(kb), r = ut((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(ir, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = NR(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = mR(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (pc(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const aV = () => {
  const e = nV(), t = iV();
  return (r, n) => e(r, n) || t(r, n) || oV;
}, sV = {
  dropAnimationFinished: IR
}, cV = Cb(aV, sV, null, {
  context: Mb,
  areStatePropsEqual: jb
})(eV);
var lV = cV;
function uV(e) {
  return qn(fc).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(lV, e);
}
const mc = (e) => (t) => e === t, dV = mc("scroll"), pV = mc("auto"), fV = mc("visible"), Mp = (e, t) => t(e.overflowX) || t(e.overflowY), mV = (e, t) => t(e.overflowX) && t(e.overflowY), Hb = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Mp(r, dV) || Mp(r, pV);
}, gV = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = LR(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, re()), !Hb(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return mV(n, fV) || process.env.NODE_ENV !== "production" && Gt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, gc = (e) => e == null ? null : e === document.body ? gV() ? e : null : e === document.documentElement ? null : Hb(e) ? e : gc(e.parentElement);
var bV = (e) => {
  !e || !gc(e.parentElement) || process.env.NODE_ENV !== "production" && Gt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Oa = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const zb = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : zb(e.parentElement) : !1;
var hV = (e) => {
  const t = gc(e), r = zb(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, vV = ({
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
    } = s, g = Tb({
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
        max: g,
        diff: {
          value: ir,
          displacement: ir
        }
      }
    };
  })(), u = o === "vertical" ? DR : CR, p = wR({
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
const yV = (e, t) => {
  const r = Ab(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = Ib({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return cc({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var EV = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = yV(e, l), p = xa(u, n), c = (() => {
    if (!l)
      return null;
    const d = Ab(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: xa(d, n),
      scroll: Oa(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return vV({
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
const xV = {
  passive: !1
}, wV = {
  passive: !0
};
var Lp = (e) => e.shouldPublishImmediately ? xV : wV;
const xn = (e) => e && e.env.closestScrollable || null;
function SV(e) {
  const t = M(null), r = qn(uc), n = Bb("droppable"), {
    registry: o,
    marshal: i
  } = r, a = jR(e), s = ot(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = ot(() => ut((v, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? re(!1, "Can only update scroll when dragging") : re());
    const x = {
      x: v,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = Xe(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? ir : Oa(v.env.closestScrollable);
  }, []), c = Xe(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = ot(() => tR(c), [c]), g = Xe(() => {
    const v = t.current, m = xn(v);
    if (v && m || (process.env.NODE_ENV !== "production" ? re(!1, "Could not find scroll options while scrolling") : re()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Xe((v, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? re(!1, "Cannot collect a droppable while a drag is occurring") : re());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot collect without a droppable ref") : re());
    const C = hV(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = EV({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Rp.contextId, r.contextId), $.addEventListener("scroll", g, Lp(V.scrollOptions)), process.env.NODE_ENV !== "production" && bV($)), A;
  }, [r.contextId, s, g, a]), b = Xe(() => {
    const v = t.current, m = xn(v);
    return v && m || (process.env.NODE_ENV !== "production" ? re(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : re()), Oa(m);
  }, []), f = Xe(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot stop drag when no active drag") : re());
    const m = xn(v);
    t.current = null, m && (d.cancel(), m.removeAttribute(Rp.contextId), m.removeEventListener("scroll", g, Lp(v.scrollOptions)));
  }, [g, d]), y = Xe((v) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot scroll when there is no drag") : re());
    const x = xn(m);
    x || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot scroll a droppable with no closest scrollable") : re()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), O = ot(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = ot(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: O
  }), [O, s, n]);
  Fr(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Gt("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [O, s, f, E, i, o.droppable]), Fr(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Fr(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function vi() {
}
const OV = {
  width: 0,
  height: 0,
  margin: vR
}, NV = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? OV : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, DV = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = NV({
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
    transition: r !== "none" ? Tn.placeholder : null
  };
}, CV = (e) => {
  const t = M(null), r = Xe(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = ze(e.animate === "open");
  ce(() => s ? n !== "open" ? (r(), l(!1), vi) : t.current ? vi : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : vi, [n, s, r]);
  const u = Xe((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = DV({
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
var _V = I.memo(CV);
function yi(e) {
  return typeof e == "boolean";
}
function Ei(e, t) {
  t.forEach((r) => r(e));
}
const IV = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? re(!1, "A Droppable requires a droppableId prop") : re()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? re(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : re());
}, function({
  props: e
}) {
  yi(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? re(!1, "isDropDisabled must be a boolean") : re()), yi(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? re(!1, "isCombineEnabled must be a boolean") : re()), yi(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? re(!1, "ignoreContainerClipping must be a boolean") : re());
}, function({
  getDroppableRef: e
}) {
  Wb(e());
}], PV = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Gt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], AV = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? re(!1, "Must provide a clone render function (renderClone) for virtual lists") : re());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? re(!1, "Expected virtual list to not have a placeholder") : re());
}];
function $V(e) {
  dc(() => {
    Ei(e, IV), e.props.mode === "standard" && Ei(e, PV), e.props.mode === "virtual" && Ei(e, AV);
  });
}
class TV extends I.PureComponent {
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
const RV = (e) => {
  const t = Nt(uc);
  t || (process.env.NODE_ENV !== "production" ? re(!1, "Could not find app context") : re());
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
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, O = Xe(() => o.current, []), E = Xe((P = null) => {
    o.current = P;
  }, []), v = Xe(() => i.current, []), m = Xe((P = null) => {
    i.current = P;
  }, []);
  $V({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: v
  });
  const x = Xe(() => {
    n() && f({
      maxScroll: $R()
    });
  }, [n, f]);
  SV({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: c,
    getDroppableRef: O
  });
  const N = ot(() => I.createElement(TV, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(_V, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = ot(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = ot(() => ({
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
    } = b, k = I.createElement(uV, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, R) => T(z, R, P));
    return Sr.createPortal(k, y());
  }
  return I.createElement(fc.Provider, {
    value: A
  }, a(C, h), $());
};
var VV = RV;
function MV() {
  return document.body || (process.env.NODE_ENV !== "production" ? re(!1, "document.body is not ready") : re()), document.body;
}
const Bp = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: MV
}, Ub = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Bp)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Bp[r]
    });
  return t;
}, xi = (e, t) => e === t.droppable.type, Fp = (e, t) => t.draggables[e.draggable.id], LV = () => {
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
  }, r = ut((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = ut((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
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
    const a = Ub(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (pc(o)) {
      const c = o.critical;
      if (!xi(l, c))
        return t;
      const d = Fp(c, o.dimensions), g = $n(o.impact) === s;
      return n(s, u, g, g, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!xi(l, c.critical))
        return t;
      const d = Fp(c.critical, o.dimensions);
      return n(s, u, Gb(c.result) === s, $n(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!xi(l, c.critical))
        return t;
      const d = $n(c.impact) === s, g = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, BV = {
  updateViewportMaxScroll: _R
};
Cb(LV, BV, (e, t, r) => ({
  ...Ub(r),
  ...e,
  ...t
}), {
  context: Mb,
  areStatePropsEqual: jb
})(VV);
var Na = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new WeakMap(), Wp = 0, FV = void 0;
function WV(e) {
  return e ? (wn.has(e) || (Wp += 1, wn.set(e, Wp.toString())), wn.get(e)) : "0";
}
function jV(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? WV(e.root) : e[t]}`).toString();
}
function GV(e) {
  const t = jV(e);
  let r = Na.get(t);
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
    }, Na.set(t, r);
  }
  return r;
}
function kV(e, t, r = {}, n = FV) {
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
  const { id: o, observer: i, elements: a } = GV(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), Na.delete(o));
  };
}
function HV({
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
  const [c, d] = _.useState(null), g = _.useRef(u), [h, b] = _.useState({
    inView: !!s,
    entry: void 0
  });
  g.current = u, _.useEffect(
    () => {
      if (a || !c) return;
      let E;
      return E = kV(
        c,
        (v, m) => {
          b({
            inView: v,
            entry: m
          }), g.current && g.current(v, m), m.isIntersecting && i && E && (E(), E = void 0);
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
  const O = [d, h.inView, h.entry];
  return O.ref = O[0], O.inView = O[1], O.entry = O[2], O;
}
const zV = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = ze(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return ce(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ U(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ U(
        cO,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, uM = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: l, data: u } = e, p = u == null ? void 0 : u.pages.flatMap((g) => g), { ref: c, inView: d } = HV();
  return ce(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ Je(Rn, { children: [
    o && /* @__PURE__ */ U(zV, { className: n }),
    /* @__PURE__ */ U(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(p != null && p.length) && p.map((g, h) => t(g, h))
      }
    ),
    /* @__PURE__ */ U(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: c,
        children: (s || l) && /* @__PURE__ */ U(lO, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && /* @__PURE__ */ U("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, dM = () => {
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
  KV as Button,
  XV as Checkbox,
  JV as Chips,
  Da as ErrorText,
  Vn as Icon,
  uM as InfiniteScroll,
  QV as Input,
  ZV as List,
  jp as Loader,
  eM as MultiSelectSearch,
  zV as ScrollTopButton,
  tM as Search,
  rM as Select,
  nM as Table,
  oM as Textarea,
  Jp as Wrapper,
  nf as useDebounce,
  dM as useScroll
};
