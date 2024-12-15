import { jsx as V, jsxs as Pe, Fragment as Sr } from "react/jsx-runtime";
import * as I from "react";
import P, { useState as Re, useEffect as me, useRef as W, useMemo as wu, useLayoutEffect as $r, useContext as Rt } from "react";
import po, { unstable_batchedUpdates as fo, flushSync as Vr } from "react-dom";
const Dr = ({ name: e, className: t }) => /* @__PURE__ */ V("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ V(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), Us = ({ style: e, text: t }) => /* @__PURE__ */ Pe("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ V("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ V("span", { className: "text-base", children: t })
] }), yS = ({
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
  const [u, p] = Re(""), c = () => {
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
  return /* @__PURE__ */ Pe(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: d,
      ...l,
      children: [
        o ? /* @__PURE__ */ V(Us, { text: n === "1C" ? u : void 0 }) : e,
        a && !o && /* @__PURE__ */ V(
          Dr,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, mo = ({ error: e }) => /* @__PURE__ */ V("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ V("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), ES = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: l
}) => /* @__PURE__ */ Pe(Sr, { children: [
  /* @__PURE__ */ Pe(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ V(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ V("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ V(
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
  a && /* @__PURE__ */ V(mo, { error: a })
] }), xS = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ V("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ V(Sr, { children: o.title ? /* @__PURE__ */ V(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ V(Sr, {}) })) });
function go(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var zt;
(function(e) {
  e.event = "event", e.props = "prop";
})(zt || (zt = {}));
function tt() {
}
function Su(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function yt(e) {
  return !!(e || "").match(/\d/);
}
function vt(e) {
  return e == null;
}
function Du(e) {
  return typeof e == "number" && isNaN(e);
}
function zs(e) {
  return vt(e) || Du(e) || typeof e == "number" && !isFinite(e);
}
function Hs(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Nu(e) {
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
function Ou(e, t, r) {
  var n = Nu(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function Cu(e) {
  var t = W(e);
  t.current = e;
  var r = W(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function bo(e, t) {
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
function Iu(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function qs(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function yi(e, t) {
  return Array(t + 1).join(e);
}
function Ys(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + yi("0", Math.abs(a)) + o : a >= s ? o = o + yi("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function Ei(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = bo(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, l = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : l.toFixed(t), p = u.split("."), c = i;
  i && Number(p[0]) && (c = i.split("").reverse().reduce(function(b, f, y) {
    return b.length > y ? (Number(b[0]) + Number(f)).toString() + b.substring(1, b.length) : f + b;
  }, p[0]));
  var d = qs(p[1] || "", t, r), m = s ? "-" : "", h = n ? "." : "";
  return "" + m + c + h + d;
}
function at(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var Ks = Su(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), _u = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Pu(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Ur(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Au() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Xs(e) {
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
function Js(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Ru(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Tu(e, t, r, n, o, i, a) {
  a === void 0 && (a = Ru);
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
  var x = y === u || d[y] === -1 ? p : d[y];
  for (y = n - 1; y > 0 && d[y] === -1; )
    y--;
  var E = y === -1 || d[y] === -1 ? 0 : d[y] + 1;
  return E > x ? x : n - E < x - n ? E : x;
}
function Nr(e, t, r, n) {
  var o = e.length;
  if (t = Pu(t, 0, o), n === "left") {
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
function $u(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(yt(e[r]) || yt(e[r - 1]));
  return t;
}
function Zs(e, t, r, n, o, i) {
  i === void 0 && (i = tt);
  var a = Cu(function(h, b) {
    var f, y;
    return zs(h) ? (y = "", f = "") : typeof h == "number" || b ? (y = typeof h == "number" ? Ys(h) : h, f = n(y)) : (y = o(h, void 0), f = n(y)), { formattedValue: f, numAsString: y };
  }), s = Re(function() {
    return a(vt(e) ? t : e, r);
  }), l = s[0], u = s[1], p = function(h, b) {
    h.formattedValue !== l.formattedValue && u({
      formattedValue: h.formattedValue,
      numAsString: h.value
    }), i(h, b);
  }, c = e, d = r;
  vt(e) && (c = l.numAsString, d = !0);
  var m = a(c, d);
  return wu(function() {
    u(m);
  }, [m.formattedValue]), [l, p];
}
function Vu(e) {
  return e.replace(/[^0-9]/g, "");
}
function Mu(e) {
  return e;
}
function Qs(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = Mu);
  var s = e.removeFormatting;
  s === void 0 && (s = Vu);
  var l = e.defaultValue, u = e.valueIsNumericString, p = e.onValueChange, c = e.isAllowed, d = e.onChange;
  d === void 0 && (d = tt);
  var m = e.onKeyDown;
  m === void 0 && (m = tt);
  var h = e.onMouseUp;
  h === void 0 && (h = tt);
  var b = e.onFocus;
  b === void 0 && (b = tt);
  var f = e.onBlur;
  f === void 0 && (f = tt);
  var y = e.value, x = e.getCaretBoundary;
  x === void 0 && (x = $u);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = yt);
  var v = e.isCharacterSame, g = go(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), w = Zs(y, l, !!u, a, s, p), O = w[0], C = O.formattedValue, M = O.numAsString, A = w[1], T = W(), _ = W({ formattedValue: C, numAsString: M }), B = function($, j) {
    _.current = { formattedValue: $.formattedValue, numAsString: $.value }, A($, j);
  }, Y = Re(!1), K = Y[0], R = Y[1], L = W(null), G = W({
    setCaretTimeout: null,
    focusTimeout: null
  });
  me(function() {
    return R(!0), function() {
      clearTimeout(G.current.setCaretTimeout), clearTimeout(G.current.focusTimeout);
    };
  }, []);
  var H = a, q = function($, j) {
    var Q = parseFloat(j);
    return {
      formattedValue: $,
      value: j,
      floatValue: isNaN(Q) ? void 0 : Q
    };
  }, F = function($, j, Q) {
    $.selectionStart === 0 && $.selectionEnd === $.value.length || (at($, j), G.current.setCaretTimeout = setTimeout(function() {
      $.value === Q && $.selectionStart !== j && at($, j);
    }, 0));
  }, Z = function($, j, Q) {
    return Nr($, j, x($), Q);
  }, te = function($, j, Q) {
    var Ne = x(j), We = Tu(j, C, $, Q, Ne, E, v);
    return We = Nr(j, We, Ne), We;
  }, ve = function($) {
    var j = $.formattedValue;
    j === void 0 && (j = "");
    var Q = $.input, Ne = $.source, We = $.event, Oe = $.numAsString, he;
    if (Q) {
      var Qe = $.inputValue || Q.value, rt = Ur(Q);
      Q.value = j, he = te(Qe, j, rt), he !== void 0 && F(Q, he, j);
    }
    j !== C && B(q(j, Oe), { event: We, source: Ne });
  };
  me(function() {
    var $ = _.current, j = $.formattedValue, Q = $.numAsString;
    (C !== j || M !== Q) && B(q(C, M), {
      event: void 0,
      source: zt.props
    });
  }, [C, M]);
  var be = L.current ? Ur(L.current) : void 0, De = typeof window < "u" ? $r : me;
  De(function() {
    var $ = L.current;
    if (C !== _.current.formattedValue && $) {
      var j = te(_.current.formattedValue, C, be);
      $.value = C, F($, j, C);
    }
  }, [C]);
  var ge = function($, j, Q) {
    var Ne = j.target, We = T.current ? _u(T.current, Ne.selectionEnd) : Ks(C, $), Oe = Object.assign(Object.assign({}, We), { lastValue: C }), he = s($, Oe), Qe = H(he);
    if (he = s(Qe, void 0), c && !c(q(Qe, he))) {
      var rt = j.target, nt = Ur(rt), jr = te($, C, nt);
      return rt.value = C, F(rt, jr, C), !1;
    }
    return ve({
      formattedValue: Qe,
      numAsString: he,
      inputValue: $,
      event: j,
      source: Q,
      input: j.target
    }), !0;
  }, Ee = function($, j) {
    j === void 0 && (j = 0);
    var Q = $.selectionStart, Ne = $.selectionEnd;
    T.current = { selectionStart: Q, selectionEnd: Ne + j };
  }, J = function($) {
    var j = $.target, Q = j.value, Ne = ge(Q, $, zt.event);
    Ne && d($), T.current = void 0;
  }, xe = function($) {
    var j = $.target, Q = $.key, Ne = j.selectionStart, We = j.selectionEnd, Oe = j.value;
    Oe === void 0 && (Oe = "");
    var he;
    Q === "ArrowLeft" || Q === "Backspace" ? he = Math.max(Ne - 1, 0) : Q === "ArrowRight" ? he = Math.min(Ne + 1, Oe.length) : Q === "Delete" && (he = Ne);
    var Qe = 0;
    Q === "Delete" && Ne === We && (Qe = 1);
    var rt = Q === "ArrowLeft" || Q === "ArrowRight";
    if (he === void 0 || Ne !== We && !rt) {
      m($), Ee(j, Qe);
      return;
    }
    var nt = he;
    if (rt) {
      var jr = Q === "ArrowLeft" ? "left" : "right";
      nt = Z(Oe, he, jr), nt !== he && $.preventDefault();
    } else Q === "Delete" && !E(Oe[he]) ? nt = Z(Oe, he, "right") : Q === "Backspace" && !E(Oe[he]) && (nt = Z(Oe, he, "left"));
    nt !== he && F(j, nt, Oe), m($), Ee(j, Qe);
  }, ke = function($) {
    var j = $.target, Q = function() {
      var Ne = j.selectionStart, We = j.selectionEnd, Oe = j.value;
      if (Oe === void 0 && (Oe = ""), Ne === We) {
        var he = Z(Oe, Ne);
        he !== Ne && F(j, he, Oe);
      }
    };
    Q(), requestAnimationFrame(function() {
      Q();
    }), h($), Ee(j);
  }, D = function($) {
    $.persist && $.persist();
    var j = $.target, Q = $.currentTarget;
    L.current = j, G.current.focusTimeout = setTimeout(function() {
      var Ne = j.selectionStart, We = j.selectionEnd, Oe = j.value;
      Oe === void 0 && (Oe = "");
      var he = Z(Oe, Ne);
      he !== Ne && !(Ne === 0 && We === Oe.length) && F(j, he, Oe), b(Object.assign(Object.assign({}, $), { currentTarget: Q }));
    }, 0);
  }, we = function($) {
    L.current = null, clearTimeout(G.current.focusTimeout), clearTimeout(G.current.setCaretTimeout), f($);
  }, N = K && Au() ? "numeric" : void 0, Ce = Object.assign({ inputMode: N }, g, {
    type: t,
    value: C,
    onChange: J,
    onKeyDown: xe,
    onMouseUp: ke,
    onFocus: D,
    onBlur: we
  });
  if (r === "text")
    return o ? P.createElement(P.Fragment, null, o(C, g) || null) : P.createElement("span", Object.assign({}, g, { ref: i }), C);
  if (n) {
    var Fe = n;
    return P.createElement(Fe, Object.assign({}, Ce, { ref: i }));
  }
  return P.createElement("input", Object.assign({}, Ce, { ref: i }));
}
function xi(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = Mr(t), u = l.thousandSeparator, p = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && n, d = bo(e, a), m = d.beforeDecimal, h = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (h = qs(h, r, !!n)), u && (m = Ou(m, u, s)), o && (m = o + m), i && (h = h + i), b && (m = "-" + m), e = m + (c && p || "") + h, e;
}
function Mr(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Lu(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function Bu(e, t) {
  return new RegExp("(^-)|[0-9]|" + Hs(e), "g");
}
function Fu(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Gu(e, t, r) {
  var n;
  t === void 0 && (t = Xs(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, u = t.to, p = u.start, c = u.end, d = Mr(r), m = d.allowedDecimalSeparators, h = d.decimalSeparator, b = e[c] === h;
  if (yt(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - p === 1 && m.indexOf(e[p]) !== -1) {
    var f = s === 0 ? "" : h;
    e = e.substring(0, p) + f + e.substring(p + 1, e.length);
  }
  var y = function(L, G, H) {
    var q = !1, F = !1;
    i.startsWith("-") ? q = !1 : L.startsWith("--") ? (q = !1, F = !0) : a.startsWith("-") && L.length === a.length ? q = !1 : L[0] === "-" && (q = !0);
    var Z = q ? 1 : 0;
    return F && (Z = 2), Z && (L = L.substring(Z), G -= Z, H -= Z), { value: L, start: G, end: H, hasNegation: q };
  }, x = y(e, p, c), E = x.hasNegation;
  n = x, e = n.value, p = n.start, c = n.end;
  var v = y(t.lastValue, l.start, l.end), g = v.start, w = v.end, O = v.value, C = e.substring(p, c);
  e.length && O.length && (g > O.length - a.length || w < i.length) && !(C && a.startsWith(C)) && (e = O);
  var M = 0;
  e.startsWith(i) ? M += i.length : p < i.length && (M = p), e = e.substring(M), c -= M;
  var A = e.length, T = e.length - a.length;
  e.endsWith(a) ? A = T : (c > T || c > e.length - a.length) && (A = c), e = e.substring(0, A), e = Lu(E ? "-" + e : e, o), e = (e.match(Bu(h)) || []).join("");
  var _ = e.indexOf(h);
  e = e.replace(new RegExp(Hs(h), "g"), function(L, G) {
    return G === _ ? "." : "";
  });
  var B = bo(e, o), Y = B.beforeDecimal, K = B.afterDecimal, R = B.addNegation;
  return u.end - u.start < l.end - l.start && Y === "" && b && !parseFloat(K) && (e = R ? "-" : ""), e;
}
function ku(e, t) {
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
function Wu(e) {
  var t = Mr(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function ju(e) {
  e = Wu(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = tt);
  var i = e.onBlur;
  i === void 0 && (i = tt);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var p = e.defaultValue, c = e.value, d = e.valueIsNumericString, m = e.onValueChange, h = go(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = Mr(e), f = b.decimalSeparator, y = b.allowedDecimalSeparators, x = function(R) {
    return xi(R, e);
  }, E = function(R, L) {
    return Gu(R, L, e);
  }, v = vt(c) ? p : c, g = d ?? Fu(v, u, t);
  vt(c) ? vt(p) || (g = g || typeof p == "number") : g = g || typeof c == "number";
  var w = function(R) {
    return zs(R) ? R : (typeof R == "number" && (R = Ys(R)), g && typeof s == "number" ? Ei(R, s, !!l) : R);
  }, O = Zs(w(c), w(p), !!g, x, E, m), C = O[0], M = C.numAsString, A = C.formattedValue, T = O[1], _ = function(R) {
    var L = R.target, G = R.key, H = L.selectionStart, q = L.selectionEnd, F = L.value;
    if (F === void 0 && (F = ""), (G === "Backspace" || G === "Delete") && q < u.length) {
      R.preventDefault();
      return;
    }
    if (H !== q) {
      o(R);
      return;
    }
    G === "Backspace" && F[0] === "-" && H === u.length + 1 && r && at(L, 1), s && l && (G === "Backspace" && F[H - 1] === f ? (at(L, H - 1), R.preventDefault()) : G === "Delete" && F[H] === f && R.preventDefault()), y != null && y.includes(G) && F[H] === f && at(L, H + 1);
    var Z = a === !0 ? "," : a;
    G === "Backspace" && F[H - 1] === Z && at(L, H - 1), G === "Delete" && F[H] === Z && at(L, H + 1), o(R);
  }, B = function(R) {
    var L = M;
    if (L.match(/\d/g) || (L = ""), n || (L = Iu(L)), l && s && (L = Ei(L, s, l)), L !== M) {
      var G = xi(L, e);
      T({
        formattedValue: G,
        value: L,
        floatValue: parseFloat(L)
      }, {
        event: R,
        source: zt.event
      });
    }
    i(R);
  }, Y = function(R) {
    return R === f ? !0 : yt(R);
  }, K = function(R) {
    var L = R.currentValue, G = R.lastValue, H = R.formattedValue, q = R.currentValueIndex, F = R.formattedValueIndex, Z = L[q], te = H[F], ve = Ks(G, L), be = ve.to, De = function(ge) {
      return E(ge).indexOf(".") + u.length;
    };
    return c === 0 && l && s && L[be.start] === f && De(L) < q && De(H) > F ? !1 : q >= be.start && q < be.end && y && y.includes(Z) && te === f ? !0 : Z === te;
  };
  return Object.assign(Object.assign({}, h), {
    value: A,
    valueIsNumericString: !1,
    isValidInputCharacter: Y,
    isCharacterSame: K,
    onValueChange: T,
    format: x,
    removeFormatting: E,
    getCaretBoundary: function(R) {
      return ku(R, e);
    },
    onKeyDown: _,
    onBlur: B
  });
}
function Uu(e) {
  var t = ju(e);
  return P.createElement(Qs, Object.assign({}, t));
}
function zu(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), l = 0, u = r.length; l < u; l++)
    r[l] === i && (s[l] = e[a] || Js(o, a), a += 1);
  return s.join("");
}
function Hu(e, t, r) {
  t === void 0 && (t = Xs(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(f) {
    return n[f] === o;
  }, u = function(f, y) {
    for (var x = "", E = 0; E < f.length; E++)
      l(y + E) && yt(f[E]) && (x += f[E]);
    return x;
  }, p = function(f) {
    return f.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return p(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var c = "", d = 0; d < e.length; d++)
      if (l(d))
        yt(e[d]) && (c += e[d]);
      else if (e[d] !== n[d])
        return p(e);
    return c;
  }
  var m = s.substring(0, i.start), h = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(m, 0) + p(h) + u(b, i.end);
}
function qu(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(d, m) {
    var h = void 0;
    d === o && (a++, h = Js(n, a - 1), s === -1 && e[m] === h && (s = m)), l[m] = h;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== l[d];
  }, p = 0, c = i.length; p < c; p++)
    i[p] = p === s || u(p) || u(p - 1);
  return i[r.indexOf(o)] = !0, i;
}
function Yu(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Ku(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Xu(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = tt);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = go(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Yu(e);
  var u = function(h) {
    return qu(h, e);
  }, p = function(h) {
    var b = h.key, f = h.target, y = f.selectionStart, x = f.selectionEnd, E = f.value;
    if (y !== x) {
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
        for (var w = t.length; v < w && t[v] !== o; )
          v++;
        g = "right";
      }
      v = Nr(E, v, u(E), g);
    } else t[v] !== o && b !== "ArrowLeft" && b !== "ArrowRight" && (v = Nr(E, v + 1, u(E), "right"));
    v !== y && at(f, v), n(h);
  }, c = vt(i) ? a : i, d = s ?? Ku(c, t), m = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(h) {
      return zu(h, m);
    },
    removeFormatting: function(h, b) {
      return Hu(h, b, m);
    },
    getCaretBoundary: u,
    onKeyDown: p
  });
}
function Ju(e) {
  var t = Xu(e);
  return P.createElement(Qs, Object.assign({}, t));
}
const Zu = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, wS = ({
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
  return /* @__PURE__ */ Pe("label", { children: [
    p && /* @__PURE__ */ V("span", { className: `text-primary ${s}`, children: p }),
    i ? /* @__PURE__ */ V(
      Ju,
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
    ) : e === "number" ? /* @__PURE__ */ Pe(
      "div",
      {
        className: `${m ? d : ""} ${a} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ V(
            Uu,
            {
              decimalScale: l,
              onValueChange: (f) => {
                var y;
                return t == null ? void 0 : t.onChange((y = f.value.replace("_", "")) == null ? void 0 : y.toString());
              },
              value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`,
              ...c,
              ...Zu.number
            }
          ),
          n ? /* @__PURE__ */ V("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ V(
      "input",
      {
        ...t,
        ...c,
        type: e,
        className: `${m ? d : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`
      }
    ),
    /* @__PURE__ */ V(mo, { error: m })
  ] });
}, ec = ({
  children: e,
  className: t
}) => /* @__PURE__ */ V("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), SS = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Re(null);
  return /* @__PURE__ */ V(ec, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ V("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ Pe(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ V("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ V("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, ho = "-", Qu = (e) => {
  const t = td(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(ho);
      return s[0] === "" && s.length !== 1 && s.shift(), tc(s, t) || ed(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, tc = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? tc(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(ho);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, wi = /^\[(.+)\]$/, ed = (e) => {
  if (wi.test(e)) {
    const t = wi.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, td = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return nd(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    $n(a, n, i, t);
  }), n;
}, $n = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Si(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (rd(o)) {
        $n(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      $n(a, Si(t, i), r, n);
    });
  });
}, Si = (e, t) => {
  let r = e;
  return t.split(ho).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, rd = (e) => e.isThemeGetter, nd = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, od = (e) => {
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
}, rc = "!", id = (e) => {
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
    const d = l.length === 0 ? s : s.substring(p), m = d.startsWith(rc), h = m ? d.substring(1) : d, b = c && c > p ? c - p : void 0;
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
}, ad = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, sd = (e) => ({
  cache: od(e.cacheSize),
  parseClassName: id(e),
  ...Qu(e)
}), cd = /\s+/, ld = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(cd);
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
    const f = ad(p).join(":"), y = c ? f + rc : f, x = y + b;
    if (i.includes(x))
      continue;
    i.push(x);
    const E = o(b, h);
    for (let v = 0; v < E.length; ++v) {
      const g = E[v];
      i.push(y + g);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function ud() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = nc(t)) && (n && (n += " "), n += r);
  return n;
}
const nc = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = nc(e[n])) && (r && (r += " "), r += t);
  return r;
};
function dd(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const u = t.reduce((p, c) => c(p), e());
    return r = sd(u), n = r.cache.get, o = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const u = n(l);
    if (u)
      return u;
    const p = ld(l, r);
    return o(l, p), p;
  }
  return function() {
    return i(ud.apply(null, arguments));
  };
}
const Se = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, oc = /^\[(?:([a-z-]+):)?(.+)\]$/i, pd = /^\d+\/\d+$/, fd = /* @__PURE__ */ new Set(["px", "full", "screen"]), md = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, hd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, et = (e) => Ot(e) || fd.has(e) || pd.test(e), ot = (e) => Tt(e, "length", Od), Ot = (e) => !!e && !Number.isNaN(Number(e)), zr = (e) => Tt(e, "number", Ot), Mt = (e) => !!e && Number.isInteger(Number(e)), yd = (e) => e.endsWith("%") && Ot(e.slice(0, -1)), X = (e) => oc.test(e), it = (e) => md.test(e), Ed = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xd = (e) => Tt(e, Ed, ic), wd = (e) => Tt(e, "position", ic), Sd = /* @__PURE__ */ new Set(["image", "url"]), Dd = (e) => Tt(e, Sd, Id), Nd = (e) => Tt(e, "", Cd), Lt = () => !0, Tt = (e, t, r) => {
  const n = oc.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Od = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gd.test(e) && !bd.test(e)
), ic = () => !1, Cd = (e) => hd.test(e), Id = (e) => vd.test(e), _d = () => {
  const e = Se("colors"), t = Se("spacing"), r = Se("blur"), n = Se("brightness"), o = Se("borderColor"), i = Se("borderRadius"), a = Se("borderSpacing"), s = Se("borderWidth"), l = Se("contrast"), u = Se("grayscale"), p = Se("hueRotate"), c = Se("invert"), d = Se("gap"), m = Se("gradientColorStops"), h = Se("gradientColorStopPositions"), b = Se("inset"), f = Se("margin"), y = Se("opacity"), x = Se("padding"), E = Se("saturate"), v = Se("scale"), g = Se("sepia"), w = Se("skew"), O = Se("space"), C = Se("translate"), M = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", X, t], _ = () => [X, t], B = () => ["", et, ot], Y = () => ["auto", Ot, X], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], H = () => ["", "0", X], q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [Ot, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Lt],
      spacing: [et, ot],
      blur: ["none", "", it, X],
      brightness: F(),
      borderColor: [e],
      borderRadius: ["none", "", "full", it, X],
      borderSpacing: _(),
      borderWidth: B(),
      contrast: F(),
      grayscale: H(),
      hueRotate: F(),
      invert: H(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [yd, ot],
      inset: T(),
      margin: T(),
      opacity: F(),
      padding: _(),
      saturate: F(),
      scale: F(),
      sepia: H(),
      skew: F(),
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
        aspect: ["auto", "square", "video", X]
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
        columns: [it]
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
        object: [...K(), X]
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
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        z: ["auto", Mt, X]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: T()
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
        flex: ["1", "auto", "initial", "none", X]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Mt, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Lt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Mt, X]
        }, X]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Lt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Mt, X]
        }, X]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        "auto-cols": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", X]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [X, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [it]
        }, it]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [X, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", it, ot]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Lt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ot, zr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", et, X]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", X]
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
        decoration: ["auto", "from-font", et, ot]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", et, X]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
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
        content: ["none", X]
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
        bg: [...K(), wd]
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
        bg: ["auto", "cover", "contain", xd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Dd]
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
        "outline-offset": [et, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [et, ot]
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
        ring: B()
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
        "ring-offset": [et, ot]
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
        shadow: ["", "inner", "none", it, Nd]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Lt]
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
        "drop-shadow": ["", "none", it, X]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
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
        ease: ["linear", "in", "out", "in-out", X]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", X]
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
        rotate: [Mt, X]
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
        "skew-x": [w]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [w]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
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
        "will-change": ["auto", "scroll", "contents", "transform", X]
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
        stroke: [et, ot, zr]
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
}, Pd = /* @__PURE__ */ dd(_d);
function ac(e, t) {
  const [r, n] = Re(e);
  return me(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const DS = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = Re(!1), [a, s] = Re(""), l = ac(a, 100), u = W(null);
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
  return /* @__PURE__ */ Pe("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ Pe("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ V(
        Dr,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ V(
        "input",
        {
          ...n,
          ref: u,
          className: Pd(
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
    o && /* @__PURE__ */ V("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (c) => c.label.toLowerCase().includes(l.toLowerCase())
    ).map((c) => {
      var d;
      return /* @__PURE__ */ V(
        "li",
        {
          onClick: () => p(c.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ Pe("div", { className: "flex flex-row", children: [
            c.icon && /* @__PURE__ */ V(Dr, { name: c.icon }),
            /* @__PURE__ */ V(
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
}, NS = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = Re(r), s = ac(i, 300);
  return me(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ Pe("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ V(
      Dr,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ V(
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
}, OS = ({
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
}) => /* @__PURE__ */ Pe("label", { children: [
  l && /* @__PURE__ */ V("span", { className: `text-primary ${i}`, children: l }),
  /* @__PURE__ */ V(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ Pe(
        "select",
        {
          ...n,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ V("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((p, c) => /* @__PURE__ */ V("option", { value: p.value, className: "text-black", children: p.label }, c))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ V(mo, { error: o == null ? void 0 : o.error })
] });
function Ht(e) {
  "@babel/helpers - typeof";
  return Ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ht(e);
}
function Ad(e, t) {
  if (Ht(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ht(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rd(e) {
  var t = Ad(e, "string");
  return Ht(t) == "symbol" ? t : t + "";
}
function Td(e, t, r) {
  return (t = Rd(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Di(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Di(Object(r), !0).forEach(function(n) {
      Td(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Di(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function je(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Oi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Hr = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Ci = {
  INIT: "@@redux/INIT" + Hr(),
  REPLACE: "@@redux/REPLACE" + Hr(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Hr();
  }
};
function $d(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Vd(e) {
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
  if (Bd(e)) return "date";
  if (Ld(e)) return "error";
  var r = Md(e);
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
function Md(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ld(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Bd(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function bt(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Vd(e)), t;
}
function sc(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? je(1) : "Expected the enhancer to be a function. Instead, received: '" + bt(r) + "'");
    return r(sc)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(2) : "Expected the root reducer to be a function. Instead, received: '" + bt(e) + "'");
  var o = e, i = t, a = [], s = a, l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function p() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? je(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? je(4) : "Expected the listener to be a function. Instead, received: '" + bt(b) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? je(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var f = !0;
    return u(), s.push(b), function() {
      if (f) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? je(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        f = !1, u();
        var x = s.indexOf(b);
        s.splice(x, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!$d(b))
      throw new Error(process.env.NODE_ENV === "production" ? je(7) : "Actions must be plain objects. Instead, the actual type was: '" + bt(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? je(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? je(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = o(i, b);
    } finally {
      l = !1;
    }
    for (var f = a = s, y = 0; y < f.length; y++) {
      var x = f[y];
      x();
    }
    return b;
  }
  function m(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? je(10) : "Expected the nextReducer to be a function. Instead, received: '" + bt(b));
    o = b, d({
      type: Ci.REPLACE
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
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error(process.env.NODE_ENV === "production" ? je(11) : "Expected the observer to be an object. Instead, received: '" + bt(x) + "'");
        function E() {
          x.next && x.next(p());
        }
        E();
        var v = f(E);
        return {
          unsubscribe: v
        };
      }
    }, b[Oi] = function() {
      return this;
    }, b;
  }
  return d({
    type: Ci.INIT
  }), n = {
    dispatch: d,
    subscribe: c,
    getState: p,
    replaceReducer: m
  }, n[Oi] = h, n;
}
function Ii(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function _i(e, t) {
  if (typeof e == "function")
    return Ii(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? je(16) : "bindActionCreators expected an object or a function, but instead received: '" + bt(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = Ii(o, t));
  }
  return r;
}
function cc() {
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
function Fd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? je(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = cc.apply(void 0, s)(o.dispatch), Ni(Ni({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Gd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vn = { exports: {} }, qr = {};
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
function kd() {
  if (Pi) return qr;
  Pi = 1;
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
  return qr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, qr;
}
var Yr = {};
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
function Wd() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && function() {
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
      var y = f[0].inst, x = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && x({ inst: y });
        },
        [m, b, h]
      ), s(
        function() {
          return r(y) && x({ inst: y }), m(function() {
            r(y) && x({ inst: y });
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
    Yr.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Yr;
}
process.env.NODE_ENV === "production" ? Vn.exports = kd() : Vn.exports = Wd();
var vo = Vn.exports, Kr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ri;
function jd() {
  if (Ri) return Kr;
  Ri = 1;
  var e = P, t = vo;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Kr.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(w) {
          if (!x) {
            if (x = !0, E = w, w = d(w), m !== void 0 && b.hasValue) {
              var O = b.value;
              if (m(O, w))
                return v = O;
            }
            return v = w;
          }
          if (O = v, n(E, w)) return O;
          var C = d(w);
          return m !== void 0 && m(O, C) ? (E = w, O) : (E = w, v = C);
        }
        var x = !1, E, v, g = c === void 0 ? null : c;
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
  }, Kr;
}
var Xr = {};
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
function Ud() {
  return Ti || (Ti = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = P, r = vo, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Xr.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(w) {
            if (!x) {
              if (x = !0, E = w, w = d(w), m !== void 0 && b.hasValue) {
                var O = b.value;
                if (m(O, w))
                  return v = O;
              }
              return v = w;
            }
            if (O = v, n(E, w))
              return O;
            var C = d(w);
            return m !== void 0 && m(O, C) ? (E = w, O) : (E = w, v = C);
          }
          var x = !1, E, v, g = c === void 0 ? null : c;
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
  }()), Xr;
}
process.env.NODE_ENV === "production" ? jd() : Ud();
function zd(e) {
  e();
}
let lc = zd;
const Hd = (e) => lc = e, qd = () => lc, $i = Symbol.for("react-redux-context"), Vi = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Yd() {
  var e;
  if (!I.createContext) return {};
  const t = (e = Vi[$i]) != null ? e : Vi[$i] = /* @__PURE__ */ new Map();
  let r = t.get(I.createContext);
  return r || (r = I.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(I.createContext, r)), r;
}
const uc = /* @__PURE__ */ Yd(), Kd = () => {
  throw new Error("uSES not initialized!");
};
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, st.apply(null, arguments);
}
function dc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Mn = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function Xd() {
  if (Mi) return re;
  Mi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var w = g.$$typeof;
      switch (w) {
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
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function v(g) {
    return E(g) === u;
  }
  return re.AsyncMode = l, re.ConcurrentMode = u, re.ContextConsumer = s, re.ContextProvider = a, re.Element = t, re.ForwardRef = p, re.Fragment = n, re.Lazy = h, re.Memo = m, re.Portal = r, re.Profiler = i, re.StrictMode = o, re.Suspense = c, re.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, re.isConcurrentMode = v, re.isContextConsumer = function(g) {
    return E(g) === s;
  }, re.isContextProvider = function(g) {
    return E(g) === a;
  }, re.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, re.isForwardRef = function(g) {
    return E(g) === p;
  }, re.isFragment = function(g) {
    return E(g) === n;
  }, re.isLazy = function(g) {
    return E(g) === h;
  }, re.isMemo = function(g) {
    return E(g) === m;
  }, re.isPortal = function(g) {
    return E(g) === r;
  }, re.isProfiler = function(g) {
    return E(g) === i;
  }, re.isStrictMode = function(g) {
    return E(g) === o;
  }, re.isSuspense = function(g) {
    return E(g) === c;
  }, re.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === x || g.$$typeof === b);
  }, re.typeOf = E, re;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li;
function Jd() {
  return Li || (Li = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function E(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === i || D === o || D === c || D === d || typeof D == "object" && D !== null && (D.$$typeof === h || D.$$typeof === m || D.$$typeof === a || D.$$typeof === s || D.$$typeof === p || D.$$typeof === f || D.$$typeof === y || D.$$typeof === x || D.$$typeof === b);
    }
    function v(D) {
      if (typeof D == "object" && D !== null) {
        var we = D.$$typeof;
        switch (we) {
          case t:
            var N = D.type;
            switch (N) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return N;
              default:
                var Ce = N && N.$$typeof;
                switch (Ce) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return Ce;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var g = l, w = u, O = s, C = a, M = t, A = p, T = n, _ = h, B = m, Y = r, K = i, R = o, L = c, G = !1;
    function H(D) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(D) || v(D) === l;
    }
    function q(D) {
      return v(D) === u;
    }
    function F(D) {
      return v(D) === s;
    }
    function Z(D) {
      return v(D) === a;
    }
    function te(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function ve(D) {
      return v(D) === p;
    }
    function be(D) {
      return v(D) === n;
    }
    function De(D) {
      return v(D) === h;
    }
    function ge(D) {
      return v(D) === m;
    }
    function Ee(D) {
      return v(D) === r;
    }
    function J(D) {
      return v(D) === i;
    }
    function xe(D) {
      return v(D) === o;
    }
    function ke(D) {
      return v(D) === c;
    }
    ne.AsyncMode = g, ne.ConcurrentMode = w, ne.ContextConsumer = O, ne.ContextProvider = C, ne.Element = M, ne.ForwardRef = A, ne.Fragment = T, ne.Lazy = _, ne.Memo = B, ne.Portal = Y, ne.Profiler = K, ne.StrictMode = R, ne.Suspense = L, ne.isAsyncMode = H, ne.isConcurrentMode = q, ne.isContextConsumer = F, ne.isContextProvider = Z, ne.isElement = te, ne.isForwardRef = ve, ne.isFragment = be, ne.isLazy = De, ne.isMemo = ge, ne.isPortal = Ee, ne.isProfiler = J, ne.isStrictMode = xe, ne.isSuspense = ke, ne.isValidElementType = E, ne.typeOf = v;
  }()), ne;
}
process.env.NODE_ENV === "production" ? Mn.exports = Xd() : Mn.exports = Jd();
var Zd = Mn.exports, yo = Zd, Qd = {
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
}, ep = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, tp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, pc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Eo = {};
Eo[yo.ForwardRef] = tp;
Eo[yo.Memo] = pc;
function Bi(e) {
  return yo.isMemo(e) ? pc : Eo[e.$$typeof] || Qd;
}
var rp = Object.defineProperty, np = Object.getOwnPropertyNames, Fi = Object.getOwnPropertySymbols, op = Object.getOwnPropertyDescriptor, ip = Object.getPrototypeOf, Gi = Object.prototype;
function fc(e, t, r) {
  if (typeof t != "string") {
    if (Gi) {
      var n = ip(t);
      n && n !== Gi && fc(e, n, r);
    }
    var o = np(t);
    Fi && (o = o.concat(Fi(t)));
    for (var i = Bi(e), a = Bi(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!ep[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = op(t, l);
        try {
          rp(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var ap = fc;
const ki = /* @__PURE__ */ Gd(ap);
var Ln = { exports: {} }, oe = {};
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
function sp() {
  if (Wi) return oe;
  Wi = 1;
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
  return oe.ContextConsumer = a, oe.ContextProvider = i, oe.Element = e, oe.ForwardRef = l, oe.Fragment = r, oe.Lazy = d, oe.Memo = c, oe.Portal = t, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = u, oe.SuspenseList = p, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(f) {
    return b(f) === a;
  }, oe.isContextProvider = function(f) {
    return b(f) === i;
  }, oe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, oe.isForwardRef = function(f) {
    return b(f) === l;
  }, oe.isFragment = function(f) {
    return b(f) === r;
  }, oe.isLazy = function(f) {
    return b(f) === d;
  }, oe.isMemo = function(f) {
    return b(f) === c;
  }, oe.isPortal = function(f) {
    return b(f) === t;
  }, oe.isProfiler = function(f) {
    return b(f) === o;
  }, oe.isStrictMode = function(f) {
    return b(f) === n;
  }, oe.isSuspense = function(f) {
    return b(f) === u;
  }, oe.isSuspenseList = function(f) {
    return b(f) === p;
  }, oe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, oe.typeOf = b, oe;
}
var ie = {};
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
function cp() {
  return ji || (ji = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, x = !1, E;
    E = Symbol.for("react.module.reference");
    function v(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === o || x || N === n || N === u || N === p || y || N === m || h || b || f || typeof N == "object" && N !== null && (N.$$typeof === d || N.$$typeof === c || N.$$typeof === i || N.$$typeof === a || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === E || N.getModuleId !== void 0));
    }
    function g(N) {
      if (typeof N == "object" && N !== null) {
        var Ce = N.$$typeof;
        switch (Ce) {
          case e:
            var Fe = N.type;
            switch (Fe) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Fe;
              default:
                var $ = Fe && Fe.$$typeof;
                switch ($) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return $;
                  default:
                    return Ce;
                }
            }
          case t:
            return Ce;
        }
      }
    }
    var w = a, O = i, C = e, M = l, A = r, T = d, _ = c, B = t, Y = o, K = n, R = u, L = p, G = !1, H = !1;
    function q(N) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(N) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(N) {
      return g(N) === a;
    }
    function te(N) {
      return g(N) === i;
    }
    function ve(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function be(N) {
      return g(N) === l;
    }
    function De(N) {
      return g(N) === r;
    }
    function ge(N) {
      return g(N) === d;
    }
    function Ee(N) {
      return g(N) === c;
    }
    function J(N) {
      return g(N) === t;
    }
    function xe(N) {
      return g(N) === o;
    }
    function ke(N) {
      return g(N) === n;
    }
    function D(N) {
      return g(N) === u;
    }
    function we(N) {
      return g(N) === p;
    }
    ie.ContextConsumer = w, ie.ContextProvider = O, ie.Element = C, ie.ForwardRef = M, ie.Fragment = A, ie.Lazy = T, ie.Memo = _, ie.Portal = B, ie.Profiler = Y, ie.StrictMode = K, ie.Suspense = R, ie.SuspenseList = L, ie.isAsyncMode = q, ie.isConcurrentMode = F, ie.isContextConsumer = Z, ie.isContextProvider = te, ie.isElement = ve, ie.isForwardRef = be, ie.isFragment = De, ie.isLazy = ge, ie.isMemo = Ee, ie.isPortal = J, ie.isProfiler = xe, ie.isStrictMode = ke, ie.isSuspense = D, ie.isSuspenseList = we, ie.isValidElementType = v, ie.typeOf = g;
  }()), ie;
}
process.env.NODE_ENV === "production" ? Ln.exports = sp() : Ln.exports = cp();
var Ui = Ln.exports;
function xo(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Jr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || xo(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function lp(e, t, r) {
  Jr(e, "mapStateToProps"), Jr(t, "mapDispatchToProps"), Jr(r, "mergeProps");
}
const up = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function dp(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function m(x, E) {
    return l = x, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const x = e(l, u), E = !a(x, p);
    return p = x, E && (d = r(p, c, u)), d;
  }
  function y(x, E) {
    const v = !i(E, u), g = !o(x, l, E, u);
    return l = x, u = E, v && g ? h() : v ? b() : g ? f() : d;
  }
  return function(E, v) {
    return s ? y(E, v) : m(E, v);
  };
}
function pp(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = dc(t, up);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && lp(a, s, l), dp(a, s, l, e, i);
}
function fp(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function mp(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function mc(e, t, r) {
  mp(e) || xo(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Bn(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function zi(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function gc(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = zi(e);
      let u = i(s, l);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = zi(u), u = i(s, l)), process.env.NODE_ENV !== "production" && mc(u, o, t), u;
    }, i;
  };
}
function wo(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function gp(e) {
  return e && typeof e == "object" ? Bn((t) => (
    // @ts-ignore
    fp(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    gc(e, "mapDispatchToProps")
  ) : wo(e, "mapDispatchToProps") : Bn((t) => ({
    dispatch: t
  }));
}
function bp(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    gc(e, "mapStateToProps")
  ) : wo(e, "mapStateToProps") : Bn(() => ({}));
}
function hp(e, t, r) {
  return st({}, r, e, t);
}
function vp(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, u, p) {
      const c = e(l, u, p);
      return i ? o(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && mc(a, n, "mergeProps")), a;
    };
  };
}
function yp(e) {
  return e ? typeof e == "function" ? vp(e) : wo(e, "mergeProps") : () => hp;
}
function Ep() {
  const e = qd();
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
function bc(e, t) {
  let r, n = Hi, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = Ep());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Hi);
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
const xp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Or = xp ? I.useLayoutEffect : I.useEffect;
function qi(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Zr(e, t) {
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
const wp = ["reactReduxForwardedRef"];
let hc = Kd;
const Sp = (e) => {
  hc = e;
}, Dp = [null, null], Np = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Op(e, t, r) {
  Or(() => e(...t), r);
}
function Cp(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Ip(e, t, r, n, o, i, a, s, l, u, p) {
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
    } catch (x) {
      y = x, d = x;
    }
    y || (d = null), f === i.current ? a.current || u() : (i.current = f, l.current = f, a.current = !0, p());
  };
  return r.onStateChange = m, r.trySubscribe(), m(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function _p(e, t) {
  return e === t;
}
let Yi = !1;
function vc(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = _p,
  areOwnPropsEqual: i = Zr,
  areStatePropsEqual: a = Zr,
  areMergedPropsEqual: s = Zr,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = uc
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Yi && (Yi = !0, xo('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = bp(e), d = gp(t), m = yp(r), h = !!e;
  return (f) => {
    if (process.env.NODE_ENV !== "production" && !Ui.isValidElementType(f))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Np(f)}`);
    const y = f.displayName || f.name || "Component", x = `Connect(${y})`, E = {
      shouldHandleStateChanges: h,
      displayName: x,
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
    function v(O) {
      const [C, M, A] = I.useMemo(() => {
        const {
          reactReduxForwardedRef: D
        } = O, we = dc(O, wp);
        return [O.context, D, we];
      }, [O]), T = I.useMemo(() => C && C.Consumer && // @ts-ignore
      Ui.isContextConsumer(/* @__PURE__ */ I.createElement(C.Consumer, null)) ? C : p, [C, p]), _ = I.useContext(T), B = !!O.store && !!O.store.getState && !!O.store.dispatch, Y = !!_ && !!_.store;
      if (process.env.NODE_ENV !== "production" && !B && !Y)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const K = B ? O.store : _.store, R = Y ? _.getServerState : K.getState, L = I.useMemo(() => pp(K.dispatch, E), [K]), [G, H] = I.useMemo(() => {
        if (!h) return Dp;
        const D = bc(K, B ? void 0 : _.subscription), we = D.notifyNestedSubs.bind(D);
        return [D, we];
      }, [K, B, _]), q = I.useMemo(() => B ? _ : st({}, _, {
        subscription: G
      }), [B, _, G]), F = I.useRef(), Z = I.useRef(A), te = I.useRef(), ve = I.useRef(!1);
      I.useRef(!1);
      const be = I.useRef(!1), De = I.useRef();
      Or(() => (be.current = !0, () => {
        be.current = !1;
      }), []);
      const ge = I.useMemo(() => () => te.current && A === Z.current ? te.current : L(K.getState(), A), [K, A]), Ee = I.useMemo(() => (we) => G ? Ip(
        h,
        K,
        G,
        // @ts-ignore
        L,
        Z,
        F,
        ve,
        be,
        te,
        H,
        we
      ) : () => {
      }, [G]);
      Op(Cp, [Z, F, ve, A, te, H]);
      let J;
      try {
        J = hc(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ee,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ge,
          R ? () => L(R(), A) : ge
        );
      } catch (D) {
        throw De.current && (D.message += `
The error may be correlated with this previous error:
${De.current.stack}

`), D;
      }
      Or(() => {
        De.current = void 0, te.current = void 0, F.current = J;
      });
      const xe = I.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ I.createElement(f, st({}, J, {
          ref: M
        }))
      ), [M, f, J]);
      return I.useMemo(() => h ? /* @__PURE__ */ I.createElement(T.Provider, {
        value: q
      }, xe) : xe, [T, xe, q]);
    }
    const w = I.memo(v);
    if (w.WrappedComponent = f, w.displayName = v.displayName = x, l) {
      const C = I.forwardRef(function(A, T) {
        return /* @__PURE__ */ I.createElement(w, st({}, A, {
          reactReduxForwardedRef: T
        }));
      });
      return C.displayName = x, C.WrappedComponent = f, ki(C, f);
    }
    return ki(w, f);
  };
}
function Pp({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = I.useMemo(() => {
    const u = bc(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = I.useMemo(() => e.getState(), [e]);
  Or(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || uc;
  return /* @__PURE__ */ I.createElement(l.Provider, {
    value: a
  }, r);
}
Sp(vo.useSyncExternalStore);
Hd(fo);
function Ap(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function yc(e, t) {
  var r = Re(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = W(!0), o = W(r), i = n.current || !!(t && o.current.inputs && Ap(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return me(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Rp(e, t) {
  return yc(function() {
    return e;
  }, t);
}
var ee = yc, k = Rp, Tp = process.env.NODE_ENV === "production", Qr = "Invariant failed";
function Ki(e, t) {
  if (Tp)
    throw new Error(Qr);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Qr, ": ").concat(r) : Qr;
  throw new Error(n);
}
var Ze = function(t) {
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
}, So = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Xi = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, $p = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, en = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Do = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? en : n, i = t.border, a = i === void 0 ? en : i, s = t.padding, l = s === void 0 ? en : s, u = Ze(So(r, o)), p = Ze(Xi(r, a)), c = Ze(Xi(p, l));
  return {
    marginBox: u,
    borderBox: Ze(r),
    paddingBox: p,
    contentBox: c,
    margin: o,
    border: a,
    padding: l
  };
}, qe = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Ki(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Ki()), o;
}, Vp = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Cr = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = $p(n, r);
  return Do({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Ir = function(t, r) {
  return r === void 0 && (r = Vp()), Cr(t, r);
}, Ec = function(t, r) {
  var n = {
    top: qe(r.marginTop),
    right: qe(r.marginRight),
    bottom: qe(r.marginBottom),
    left: qe(r.marginLeft)
  }, o = {
    top: qe(r.paddingTop),
    right: qe(r.paddingRight),
    bottom: qe(r.paddingBottom),
    left: qe(r.paddingLeft)
  }, i = {
    top: qe(r.borderTopWidth),
    right: qe(r.borderRightWidth),
    bottom: qe(r.borderBottomWidth),
    left: qe(r.borderLeftWidth)
  };
  return Do({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, xc = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Ec(r, n);
}, Ji = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Mp(e, t) {
  return !!(e === t || Ji(e) && Ji(t));
}
function Lp(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Mp(e[r], t[r]))
      return !1;
  return !0;
}
function Ae(e, t) {
  t === void 0 && (t = Lp);
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
var qt = function(t) {
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
const Bp = process.env.NODE_ENV === "production", Fp = /[ \t]{2,}/g, Gp = /^[ \t]*/gm, Zi = (e) => e.replace(Fp, " ").replace(Gp, "").trim(), kp = (e) => Zi(`
  %c@hello-pangea/dnd

  %c${Zi(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Wp = (e) => [kp(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], jp = "__@hello-pangea/dnd-disable-dev-warnings";
function wc(e, t) {
  Bp || typeof window < "u" && window[jp] || console[e](...Wp(t));
}
const ye = wc.bind(null, "warn"), Fn = wc.bind(null, "error");
function ct() {
}
function Up(e, t) {
  return {
    ...e,
    ...t
  };
}
function Xe(e, t, r) {
  const n = t.map((o) => {
    const i = Up(r, o.options);
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
const zp = process.env.NODE_ENV === "production", Qi = "Invariant failed";
class Yt extends Error {
}
Yt.prototype.toString = function() {
  return this.message;
};
function S(e, t) {
  throw zp ? new Yt(Qi) : new Yt(`${Qi}: ${t || ""}`);
}
class Hp extends P.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = ct, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && ye(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Yt && (r.preventDefault(), process.env.NODE_ENV !== "production" && Fn(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Xe(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Yt) {
      process.env.NODE_ENV !== "production" && Fn(t.message), this.setState({});
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
const qp = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, _r = (e) => e + 1, Yp = (e) => `
  You have lifted an item in position ${_r(e.source.index)}
`, Sc = (e, t) => {
  const r = e.droppableId === t.droppableId, n = _r(e.index), o = _r(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Dc = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Kp = (e) => {
  const t = e.destination;
  if (t)
    return Sc(e.source, t);
  const r = e.combine;
  return r ? Dc(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, ea = (e) => `
  The item has returned to its starting position
  of ${_r(e.index)}
`, Xp = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${ea(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Sc(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${Dc(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${ea(e.source)}
  `;
}, Jp = {
  dragHandleUsageInstructions: qp,
  onDragStart: Yp,
  onDragUpdate: Kp,
  onDragEnd: Xp
};
var vr = Jp;
const Te = {
  x: 0,
  y: 0
}, Me = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Ue = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), lt = (e, t) => e.x === t.x && e.y === t.y, $t = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Et = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Kt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), ta = (e, t) => Math.min(...t.map((r) => Kt(e, r))), Nc = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Zp = (e, t) => {
  const r = Ze({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const ar = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), ra = (e) => [{
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
}], Qp = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ef = (e, t) => t ? ar(e, t.scroll.diff.displacement) : e, tf = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, rf = (e, t) => t && t.shouldClipSubject ? Zp(t.pageMarginBox, e) : Ze(e);
var _t = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = ef(e.marginBox, n), i = tf(o, r, t), a = rf(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, No = (e, t) => {
  e.frame || (process.env.NODE_ENV, S());
  const r = e.frame, n = Ue(t, r.scroll.initial), o = $t(n), i = {
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
  }, a = _t({
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
const Oc = Ae((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Cc = Ae((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Lr = Ae((e) => Object.values(e)), nf = Ae((e) => Object.values(e));
var St = Ae((e, t) => nf(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Oo(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Br(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Fr = Ae((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), of = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Oo(o))
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
  const u = Fr(t, n);
  if (!l) {
    if (!u.length)
      return null;
    const m = u[u.length - 1];
    return a(m.descriptor.id);
  }
  const p = u.findIndex((m) => m.descriptor.id === l);
  p === -1 && (process.env.NODE_ENV !== "production" ? S(!1, "Could not find displaced item in set") : S());
  const c = p - 1;
  if (c < 0)
    return null;
  const d = u[c];
  return a(d.descriptor.id);
}, Vt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Ic = {
  point: Te,
  value: 0
}, Xt = {
  invisible: {},
  visible: {},
  all: []
}, af = {
  displaced: Xt,
  displacedBy: Ic,
  at: null
};
var sf = af, Je = (e, t) => (r) => e <= r && r <= t, _c = (e) => {
  const t = Je(e.top, e.bottom), r = Je(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const l = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return l && u ? !0 : l && a || u && i;
  };
}, cf = (e) => {
  const t = Je(e.top, e.bottom), r = Je(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Co = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Pc = {
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
var lf = (e) => (t) => {
  const r = Je(t.top, t.bottom), n = Je(t.left, t.right);
  return (o) => e === Co ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const uf = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Te;
  return ar(e, r);
}, df = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, pf = (e, t, r) => r(t)(e), Io = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? uf(e, t) : e;
  return df(i, t, o) && pf(i, r, o);
}, ff = (e) => Io({
  ...e,
  isVisibleThroughFrameFn: _c
}), Ac = (e) => Io({
  ...e,
  isVisibleThroughFrameFn: cf
}), mf = (e) => Io({
  ...e,
  isVisibleThroughFrameFn: lf(e.destination.axis)
}), gf = (e, t, r) => {
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
function bf(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Ze(So(r, n));
}
function Jt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, l) {
    const u = bf(l, r), p = l.descriptor.id;
    if (s.all.push(p), !ff({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const d = gf(p, i, o), m = {
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
function hf(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function na({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = hf(e, {
    inHomeList: t
  });
  return {
    displaced: Xt,
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
function Pr({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = Vt(e, r);
  if (a == null)
    return na({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const u = t.find((h) => h.descriptor.index === a);
  if (!u)
    return na({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const p = Fr(e, t), c = t.indexOf(u), d = p.slice(c);
  return {
    displaced: Jt({
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
function pt(e, t) {
  return !!t.effected[e];
}
var vf = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return pt(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, yf = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, Ef = ({
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
  if (u || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot move in direction without previous impact location") : S()), u.type === "REORDER") {
    const c = yf({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return c == null ? null : Pr({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const p = vf({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: l
  });
  return p == null ? null : Pr({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, xf = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return pt(r, t) ? o ? Te : $t(n.point) : o ? n.point : Te;
}, wf = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Br(t);
  n || (process.env.NODE_ENV, S());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = xf({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Me(i, a);
};
const Rc = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Sf = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, _o = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, oa = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Et(e.line, t.marginBox[e.end] + Rc(e, r), _o(e, t.marginBox, r)), ia = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Et(e.line, t.marginBox[e.start] - Sf(e, r), _o(e, t.marginBox, r)), Df = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Et(e.line, t.contentBox[e.start] + Rc(e, r), _o(e, t.contentBox, r));
var Nf = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = St(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return Df({
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
    if (pt(p, o))
      return ia({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const m = Cr(d.page, u.point);
    return ia({
      axis: s,
      moveRelativeTo: m,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (pt(c.descriptor.id, o)) {
    const d = Cr(c.page, $t(o.displacedBy.point));
    return oa({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return oa({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, Gn = (e, t) => {
  const r = e.frame;
  return r ? Me(t, r.scroll.diff.displacement) : t;
};
const Of = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? Nf({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : wf({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Gr = (e) => {
  const t = Of(e), r = e.droppable;
  return r ? Gn(r, t) : t;
}, Tc = (e, t) => {
  const r = Ue(t, e.scroll.initial), n = $t(r);
  return {
    frame: Ze({
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
function aa(e, t) {
  return e.map((r) => t[r]);
}
function Cf(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var If = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = Tc(t, Me(t.scroll.current, o)), a = r.frame ? No(r, Me(r.frame.scroll.current, o)) : r, s = e.displaced, l = Jt({
    afterDragging: aa(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Jt({
    afterDragging: aa(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, c = {}, d = [s, l, u];
  return s.all.forEach((h) => {
    const b = Cf(h, d);
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
}, _f = (e, t) => Me(e.scroll.diff.displacement, t), Po = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = _f(r, e), o = Ue(n, t.page.borderBox.center);
  return Me(t.client.borderBox.center, o);
}, $c = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Ue(r, e.page.borderBox.center), l = {
    target: ar(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? mf(l) : Ac(l);
}, Pf = ({
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
  const u = St(r.descriptor.id, n), p = Vt(t, r), c = of({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || Ef({
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
  const d = Gr({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: l
  });
  if ($c({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Po({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const h = Ue(d, a), b = If({
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
const Ge = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot get clipped area from droppable") : S()), t;
};
var Af = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Je(i[a.start], i[a.end]), l = Lr(n).filter((p) => p !== r).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => _c(o.frame)(Ge(p))).filter((p) => {
    const c = Ge(p);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const c = Ge(p), d = Je(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((p, c) => {
    const d = Ge(p)[a.crossAxisStart], m = Ge(c)[a.crossAxisStart];
    return e ? d - m : m - d;
  }).filter((p, c, d) => Ge(p)[a.crossAxisStart] === Ge(d[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const u = l.filter((p) => Je(Ge(p)[a.start], Ge(p)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((p, c) => Ge(p)[a.start] - Ge(c)[a.start])[0] : l.sort((p, c) => {
    const d = ta(t, ra(Ge(p))), m = ta(t, ra(Ge(c)));
    return d !== m ? d - m : Ge(p)[a.start] - Ge(c)[a.start];
  })[0];
};
const sa = (e, t) => {
  const r = e.page.borderBox.center;
  return pt(e.descriptor.id, t) ? Ue(r, t.displacedBy.point) : r;
}, Rf = (e, t) => {
  const r = e.page.borderBox;
  return pt(e.descriptor.id, t) ? ar(r, $t(t.displacedBy.point)) : r;
};
var Tf = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => Ac({
  target: Rf(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = Kt(e, Gn(r, sa(a, o))), u = Kt(e, Gn(r, sa(s, o)));
  return l < u ? -1 : u < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, sr = Ae(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: Et(t.line, n)
  };
});
const $f = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return Et(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], l = St(e.descriptor.id, r).reduce((u, p) => u + p.client.marginBox[n.size], 0) + t[n.line] - o;
  return l <= 0 ? null : Et(n.line, l);
}, Vc = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Mc = (e, t, r) => {
  const n = e.frame;
  Vt(t, e) && (process.env.NODE_ENV !== "production" ? S(!1, "Should not add placeholder space to home list") : S()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot add placeholder size to a subject when it already has one") : S());
  const o = sr(e.axis, t.displaceBy).point, i = $f(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const p = _t({
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
  const s = i ? Me(n.scroll.max, i) : n.scroll.max, l = Vc(n, s), u = _t({
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
}, Vf = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot remove placeholder form subject when there was none") : S());
  const r = e.frame;
  if (!r) {
    const a = _t({
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
  n || (process.env.NODE_ENV !== "production" ? S(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : S());
  const o = Vc(r, n), i = _t({
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
var Mf = ({
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
      displaced: Xt,
      displacedBy: Ic,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = Gr({
      impact: c,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), m = Vt(n, i) ? i : Mc(i, n, o);
    return $c({
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
  })(), p = sr(i.axis, n.displaceBy);
  return Pr({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: Xt,
    index: u
  });
}, Lf = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = Af({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const u = St(l.descriptor.id, o), p = Tf({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }), c = Mf({
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
  const d = Gr({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Po({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, ze = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Bf = (e, t) => {
  const r = ze(e);
  return r ? t[r] : null;
};
var Ff = ({
  state: e,
  type: t
}) => {
  const r = Bf(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: d
  } = e.dimensions;
  return s ? Pf({
    isMovingForward: l,
    previousPageBorderBoxCenter: p,
    draggable: u,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Lf({
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
function ht(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Lc(e) {
  const t = Je(e.top, e.bottom), r = Je(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Gf(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function kf({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = Et(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Kt(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Wf({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Lr(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Gf(e, i))
      return !1;
    if (Lc(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], u = e[a.crossAxisEnd], p = Je(i[a.crossAxisStart], i[a.crossAxisEnd]), c = p(l), d = p(u);
    return !c && !d ? !0 : c ? l < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : kf({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Bc = (e, t) => Ze(ar(e, t));
var jf = (e, t) => {
  const r = e.frame;
  return r ? Bc(t, r.scroll.diff.value) : t;
};
function Fc({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Uf({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var zf = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = sr(r.axis, t.displaceBy), u = l.value, p = e[s.start], c = e[s.end], m = Fr(t, n).find((b) => {
    const f = b.descriptor.id, y = b.page.borderBox.center[s.line], x = pt(f, a), E = Fc({
      displaced: o,
      id: f
    });
    return x ? E ? c <= y : p < y - u : E ? c <= y + u : p < y;
  }) || null, h = Uf({
    draggable: t,
    closest: m,
    inHomeList: Vt(t, r)
  });
  return Pr({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: l,
    index: h
  });
};
const Hf = 4;
var qf = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = sr(n.axis, e.displaceBy), l = s.value, u = t[a.start], p = t[a.end], d = Fr(e, o).find((h) => {
    const b = h.descriptor.id, f = h.page.borderBox, x = f[a.size] / Hf, E = pt(b, i), v = Fc({
      displaced: r.displaced,
      id: b
    });
    return E ? v ? p > f[a.start] + x && p < f[a.end] - x : u > f[a.start] - l + x && u < f[a.end] - l - x : v ? p > f[a.start] + l + x && p < f[a.end] + l - x : u > f[a.start] + x && u < f[a.end] - x;
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
}, Gc = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Bc(t.page.borderBox, e), l = Wf({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!l)
    return sf;
  const u = n[l], p = St(u.descriptor.id, r), c = jf(u, s);
  return qf({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: p,
    afterCritical: a
  }) || zf({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: u,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, Ao = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Yf = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = ze(e), o = ze(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = Vf(i);
  return Ao(r, a);
};
var Kf = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Yf({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = ze(o);
  if (!a)
    return i;
  const s = r[a];
  if (Vt(e, s) || s.subject.withPlaceholder)
    return i;
  const l = Mc(s, e, t);
  return Ao(i, l);
}, kt = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, u = Ue(l, e.initial.client.selection), p = {
    offset: u,
    selection: l,
    borderBoxCenter: Me(e.initial.client.borderBoxCenter, u)
  }, c = {
    selection: Me(p.selection, a.scroll.current),
    borderBoxCenter: Me(p.borderBoxCenter, a.scroll.current),
    offset: Me(p.offset, a.scroll.diff.value)
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
  const m = s.draggables[e.critical.draggable.id], h = o || Gc({
    pageOffset: c.offset,
    draggable: m,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = Kf({
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
function Xf(e, t) {
  return e.map((r) => t[r]);
}
var kc = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Xf(i.all, r), s = Jt({
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
}, Wc = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = Gr({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Po({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, jc = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, S());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], u = ze(n);
  u || (process.env.NODE_ENV !== "production" ? S(!1, "Must be over a destination in SNAP movement mode") : S());
  const p = s[u], c = kc({
    impact: n,
    viewport: o,
    destination: p,
    draggables: a
  }), d = Wc({
    impact: c,
    draggable: l,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return kt({
    impact: c,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Jf = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Uc = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = sr(t.axis, e.displaceBy), i = St(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? S(!1, "Expected draggable to be inside home list") : S());
  const s = i.slice(a + 1), l = s.reduce((d, m) => (d[m.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: Jt({
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
        destination: Jf(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Zf = (e, t) => ({
  draggables: e.draggables,
  droppables: Ao(e.droppables, t)
});
const cr = (e) => {
  process.env.NODE_ENV;
}, lr = (e) => {
  process.env.NODE_ENV;
};
var Qf = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = Cr(e.client, t), o = Ir(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, em = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? S(!1, "Expected Droppable to have a frame") : S()), t;
}, tm = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], l = em(a).scroll.diff.value, u = Me(n, l);
    return Qf({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, rm = ({
  state: e,
  published: t
}) => {
  cr();
  const r = t.modified.map((y) => {
    const x = e.dimensions.droppables[y.droppableId];
    return No(x, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...Oc(r)
  }, o = Cc(tm({
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
  }, s = ze(e.impact), l = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: d
  } = Uc({
    draggable: u,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), m = l && l.isCombineEnabled ? e.impact : c, h = Gc({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: m,
    viewport: e.viewport,
    afterCritical: d
  });
  lr();
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
const kn = (e) => e.movementMode === "SNAP", tn = (e, t, r) => {
  const n = Zf(e.dimensions, t);
  return !kn(e) || r ? kt({
    state: e,
    dimensions: n
  }) : jc({
    state: e,
    dimensions: n
  });
};
function rn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ca = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var nm = (e = ca, t) => {
  if (t.type === "FLUSH")
    return {
      ...ca,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "INITIAL_PUBLISH must come after a IDLE phase") : S());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], l = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: Te
    }, p = {
      client: u,
      page: {
        selection: Me(u.selection, o.scroll.initial),
        borderBoxCenter: Me(u.selection, o.scroll.initial),
        offset: Me(u.selection, o.scroll.diff.value)
      }
    }, c = Lr(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: m
    } = Uc({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? S(!1, `Collection cannot start from phase ${e.phase}`) : S()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? S(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : S()), rm({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    ht(e) || (process.env.NODE_ENV !== "production" ? S(!1, `${t.type} not permitted in phase ${e.phase}`) : S());
    const {
      client: r
    } = t.payload;
    return lt(r, e.current.client.selection) ? e : kt({
      state: e,
      clientSelection: r,
      impact: kn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return rn(e);
    ht(e) || (process.env.NODE_ENV !== "production" ? S(!1, `${t.type} not permitted in phase ${e.phase}`) : S());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = No(o, n);
    return tn(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ht(e) || (process.env.NODE_ENV !== "production" ? S(!1, `Attempting to move in an unsupported phase ${e.phase}`) : S());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : S()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? S(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : S());
    const i = {
      ...o,
      isEnabled: n
    };
    return tn(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ht(e) || (process.env.NODE_ENV !== "production" ? S(!1, `Attempting to move in an unsupported phase ${e.phase}`) : S());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : S()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? S(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : S());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return tn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    ht(e) || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot move by window in phase ${e.phase}`) : S()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? S(!1, "Window scrolling is currently not supported for fixed lists") : S());
    const r = t.payload.newScroll;
    if (lt(e.viewport.scroll.current, r))
      return rn(e);
    const n = Tc(e.viewport, r);
    return kn(e) ? jc({
      state: e,
      viewport: n
    }) : kt({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!ht(e))
      return e;
    const r = t.payload.maxScroll;
    if (lt(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? S(!1, `${t.type} received while not in DRAGGING phase`) : S());
    const r = Ff({
      state: e,
      type: t.type
    });
    return r ? kt({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? S(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : S()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot animate drop from phase ${e.phase}`) : S()), {
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
const om = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), im = (e) => ({
  type: "LIFT",
  payload: e
}), am = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), sm = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), cm = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), lm = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), um = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), dm = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), zc = (e) => ({
  type: "MOVE",
  payload: e
}), pm = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), fm = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), mm = () => ({
  type: "MOVE_UP",
  payload: null
}), gm = () => ({
  type: "MOVE_DOWN",
  payload: null
}), bm = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), hm = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Ro = () => ({
  type: "FLUSH",
  payload: null
}), vm = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), To = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Hc = (e) => ({
  type: "DROP",
  payload: e
}), ym = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), qc = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Em(e) {
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
  process.env.NODE_ENV !== "production" && ye(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function xm(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = St(e.droppable.id, t.draggables);
    Em(r);
  }
}
var wm = (e) => ({
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
  l.phase === "DROP_ANIMATING" && r(To({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "Unexpected phase to start a drag") : S()), r(Ro()), r(om({
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
  xm(c, d), r(am({
    critical: c,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: m
  }));
}, Sm = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const $o = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Zt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Yc = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ft = `${Yc.outOfTheWay}s ${$o.outOfTheWay}`, Wt = {
  fluid: `opacity ${ft}`,
  snap: `transform ${ft}, opacity ${ft}`,
  drop: (e) => {
    const t = `${e}s ${$o.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ft}`,
  placeholder: `height ${ft}, width ${ft}, margin ${ft}`
}, la = (e) => lt(e, Te) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Wn = {
  moveTo: la,
  drop: (e, t) => {
    const r = la(e);
    if (r)
      return t ? `${r} scale(${Zt.scale.drop})` : r;
  }
}, {
  minDropTime: jn,
  maxDropTime: Kc
} = Yc, Dm = Kc - jn, ua = 1500, Nm = 0.6;
var Om = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Kt(e, t);
  if (n <= 0)
    return jn;
  if (n >= ua)
    return Kc;
  const o = n / ua, i = jn + Dm * o, a = r === "CANCEL" ? i * Nm : i;
  return Number(a.toFixed(2));
}, Cm = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = ze(e), l = s ? a[s] : null, u = a[t.descriptor.droppableId], p = Wc({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || u,
    viewport: n
  });
  return Ue(p, t.client.borderBox.center);
}, Im = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: kc({
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
    displaced: Xt
  },
  didDropInsideDroppable: !0
};
const _m = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(ym({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? S(!1, "A DROP action occurred while DROP_PENDING and still waiting") : S()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot drop in phase: ${o.phase}`) : S());
  const s = o.critical, l = o.dimensions, u = l.draggables[o.critical.draggable.id], {
    impact: p,
    didDropInsideDroppable: c
  } = Im({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = c ? Oo(p) : null, m = c ? Br(p) : null, h = {
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
  }, f = Cm({
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
  if (!(!lt(o.current.client.offset, f) || !!b.combine)) {
    t(To({
      completed: y
    }));
    return;
  }
  const E = Om({
    current: o.current.client.offset,
    destination: f,
    reason: i
  });
  t(vm({
    newHomeClientOffset: f,
    dropDuration: E,
    completed: y
  }));
};
var Pm = _m, Xc = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Am(e) {
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
function Rm({
  onWindowScroll: e
}) {
  function t() {
    e(Xc());
  }
  const r = qt(t), n = Am(r);
  let o = ct;
  function i() {
    return o !== ct;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot start scroll listener when already active") : S()), o = Xe(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot stop scroll listener when not active") : S()), r.cancel(), o(), o = ct;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const Tm = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", $m = (e) => {
  const t = Rm({
    onWindowScroll: (r) => {
      e.dispatch(pm({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Tm(n) && t.stop(), r(n);
  };
};
var Vm = $m, Mm = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ye("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && ye(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Lm = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? S(!1, "Could not find timer") : S());
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
const Bm = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Fm = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Gm = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, Bt = (e, t) => {
  cr(), t(), lr();
}, pr = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function nn(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Mm(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var km = (e, t) => {
  const r = Lm();
  let n = null;
  const o = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : S()), Bt("onBeforeCapture", () => {
      const m = e().onBeforeCapture;
      m && m({
        draggableId: c,
        mode: d
      });
    });
  }, i = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : S()), Bt("onBeforeDragStart", () => {
      const m = e().onBeforeDragStart;
      m && m(pr(c, d));
    });
  }, a = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : S());
    const m = pr(c, d);
    n = {
      mode: d,
      lastCritical: c,
      lastLocation: m.source,
      lastCombine: null
    }, r.add(() => {
      Bt("onDragStart", () => nn(e().onDragStart, m, t, vr.onDragStart));
    });
  }, s = (c, d) => {
    const m = Oo(d), h = Br(d);
    n || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onDragMove when onDragStart has not been called") : S());
    const b = !Gm(c, n.lastCritical);
    b && (n.lastCritical = c);
    const f = !Bm(n.lastLocation, m);
    f && (n.lastLocation = m);
    const y = !Fm(n.lastCombine, h);
    if (y && (n.lastCombine = h), !b && !f && !y)
      return;
    const x = {
      ...pr(c, n.mode),
      combine: h,
      destination: m
    };
    r.add(() => {
      Bt("onDragUpdate", () => nn(e().onDragUpdate, x, t, vr.onDragUpdate));
    });
  }, l = () => {
    n || (process.env.NODE_ENV !== "production" ? S(!1, "Can only flush responders while dragging") : S()), r.flush();
  }, u = (c) => {
    n || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : S()), n = null, Bt("onDragEnd", () => nn(e().onDragEnd, c, t, vr.onDragEnd));
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
        ...pr(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(c);
    }
  };
}, Wm = (e, t) => {
  const r = km(e, t);
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
const jm = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot finish a drop animating when no drop is occurring") : S()), e.dispatch(To({
    completed: n.completed
  }));
};
var Um = jm;
const zm = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(qc());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = Xe(window, [a]);
    });
  };
};
var Hm = zm, qm = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Ym = (e) => {
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
const Km = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Xm = (e) => (t) => (r) => (n) => {
  if (Km(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? S(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : S()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const Jm = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Hc({
    reason: n.reason
  })));
};
var Zm = Jm;
const Qm = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : cc;
var eg = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => sc(nm, Qm(Fd(Sm(r), qm(e), wm(e), Pm, Um, Hm, Zm, Xm(i), Vm, Ym(t), Wm(n, o))));
const on = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function tg({
  registry: e,
  callbacks: t
}) {
  let r = on(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, cr();
      const {
        additions: l,
        removals: u,
        modified: p
      } = r, c = Object.keys(l).map((h) => e.draggable.getById(h).getDimension(Te)).sort((h, b) => h.descriptor.index - b.descriptor.index), d = Object.keys(p).map((h) => {
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
      r = on(), lr(), t.publish(m);
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
      n && (cancelAnimationFrame(n), n = null, r = on());
    }
  };
}
var Jc = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Ue({
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
}, Zc = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot find document.documentElement") : S()), e;
}, Qc = () => {
  const e = Zc();
  return Jc({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, rg = () => {
  const e = Xc(), t = Qc(), r = e.y, n = e.x, o = Zc(), i = o.clientWidth, a = o.clientHeight, s = n + i, l = r + a;
  return {
    frame: Ze({
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
        value: Te,
        displacement: Te
      }
    }
  };
}, ng = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  cr();
  const n = rg(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), l = {
    draggables: Cc(s),
    droppables: Oc(a)
  };
  return lr(), {
    dimensions: l,
    critical: e,
    viewport: n
  };
};
function da(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ye(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var og = (e, t) => {
  let r = null;
  const n = tg({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, m) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : S()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: m
    });
  }, i = (d, m) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : S()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: m
    }));
  }, a = (d, m) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : S()), t.updateDroppableScroll({
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
    r || (process.env.NODE_ENV !== "production" ? S(!1, "Should only be subscribed when a collection is occurring") : S());
    const m = r.critical.draggable;
    d.type === "ADDITION" && da(e, m, d.value) && n.add(d.value), d.type === "REMOVAL" && da(e, m, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot start capturing critical dimensions as there is already a collection") : S());
      const m = e.draggable.getById(d.draggableId), h = e.droppable.getById(m.descriptor.droppableId), b = {
        draggable: m.descriptor,
        droppable: h.descriptor
      }, f = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: f
      }, ng({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: l
  };
}, el = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", ig = (e) => {
  window.scrollBy(e.x, e.y);
};
const ag = Ae((e) => Lr(e).filter((t) => !(!t.isEnabled || !t.frame))), sg = (e, t) => ag(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? S(!1, "Invalid result") : S()), Lc(n.frame.pageMarginBox)(e))) || null;
var cg = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return sg(e, r);
};
const Qt = {
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
var lg = (e, t, r = () => Qt) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, tl = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && ye(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, Vo = 1, ug = (e, t, r = () => Qt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Vo;
  const i = 1 - tl({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, dg = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return Vo;
  const p = tl({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), c = e * n.ease(p);
  return Math.ceil(c);
}, pa = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = ug(e, t, o);
  return i === 0 ? 0 : n ? Math.max(dg(i, r, o), Vo) : i;
}, fa = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = lg(e, n, i);
  return t[n.end] < t[n.start] ? pa({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * pa({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, pg = ({
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
const fg = Nc((e) => e === 0 ? 0 : e);
var rl = ({
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
  }, s = fa({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Co,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = fa({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Pc,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = fg({
    x: l,
    y: s
  });
  if (lt(u, Te))
    return null;
  const p = pg({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return p ? lt(p, Te) ? null : p : null;
};
const mg = Nc((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Mo = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = Me(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return lt(i, Te) ? null : i;
  };
})(), nl = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = mg(r), i = Mo({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Lo = (e, t) => nl({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), gg = (e, t) => {
  if (!Lo(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Mo({
    current: n,
    max: r,
    change: t
  });
}, Bo = (e, t) => {
  const r = e.frame;
  return r ? nl({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, bg = (e, t) => {
  const r = e.frame;
  return !r || !Bo(e, t) ? null : Mo({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var hg = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = rl({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Lo(e, a) ? a : null;
}, vg = ({
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
  const s = rl({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Bo(e, s) ? s : null;
}, ma = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, d = hg({
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
  const u = cg({
    center: a,
    destination: ze(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const p = vg({
    dragStartTime: t,
    droppable: u,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  p && o(u.descriptor.id, p);
}, yg = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Qt
}) => {
  const n = qt(e), o = qt(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fluid scroll if not dragging") : S());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: c
    } = i;
    ma({
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
      cr(), i && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot start auto scrolling when already started") : S());
      const p = Date.now();
      let c = !1;
      const d = () => {
        c = !0;
      };
      ma({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: c
      }, lr(), c && a(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, Eg = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, l) => {
    const u = Me(s.current.client.selection, l);
    e({
      client: u
    });
  }, o = (s, l) => {
    if (!Bo(s, l))
      return l;
    const u = bg(s, l);
    if (!u)
      return t(s.descriptor.id, l), null;
    const p = Ue(l, u);
    return t(s.descriptor.id, p), Ue(l, p);
  }, i = (s, l, u) => {
    if (!s || !Lo(l, u))
      return u;
    const p = gg(l, u);
    if (!p)
      return r(u), null;
    const c = Ue(u, p);
    return r(c), Ue(u, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const u = ze(s.impact);
    u || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot perform a jump scroll when there is no destination") : S());
    const p = o(s.dimensions.droppables[u], l);
    if (!p)
      return;
    const c = s.viewport, d = i(s.isWindowScrollAllowed, c, p);
    d && n(s, d);
  };
}, xg = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = yg({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = Eg({
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
const Pt = "data-rfd", At = (() => {
  const e = `${Pt}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Un = (() => {
  const e = `${Pt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), wg = (() => {
  const e = `${Pt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ga = {
  contextId: `${Pt}-scroll-container-context-id`
}, Sg = (e) => (t) => `[${t}="${e}"]`, Ft = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), Dg = "pointer-events: none;";
var Ng = (e) => {
  const t = Sg(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(At.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: Dg,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${Wt.outOfTheWay};
    `;
    return {
      selector: t(Un.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(wg.contextId),
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
    always: Ft(a, "always"),
    resting: Ft(a, "resting"),
    dragging: Ft(a, "dragging"),
    dropAnimating: Ft(a, "dropAnimating"),
    userCancel: Ft(a, "userCancel")
  };
};
const Og = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? $r : me;
var He = Og;
const an = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot find the head to append a style to") : S()), e;
}, ba = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Cg(e, t) {
  const r = ee(() => Ng(e), [e]), n = W(null), o = W(null), i = k(Ae((c) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot set dynamic style element if it is not set") : S()), d.textContent = c;
  }), []), a = k((c) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot set dynamic style element if it is not set") : S()), d.textContent = c;
  }, []);
  He(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? S(!1, "style elements already mounted") : S());
    const c = ba(t), d = ba(t);
    return n.current = c, o.current = d, c.setAttribute(`${Pt}-always`, e), d.setAttribute(`${Pt}-dynamic`, e), an().appendChild(c), an().appendChild(d), a(r.always), i(r.resting), () => {
      const m = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot unmount ref as it is not set") : S()), an().removeChild(b), h.current = null;
      };
      m(n), m(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = k(() => i(r.dragging), [i, r.dragging]), l = k((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = k(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return ee(() => ({
    dragging: s,
    dropping: l,
    resting: u
  }), [s, l, u]);
}
function ol(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var il = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function ur(e) {
  return e instanceof il(e).HTMLElement;
}
function al(e, t) {
  const r = `[${At.contextId}="${e}"]`, n = ol(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && ye(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(At.draggableId) === t);
  return o ? ur(o) ? o : (process.env.NODE_ENV !== "production" && ye("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ye(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Ig(e) {
  const t = W({}), r = W(null), n = W(null), o = W(!1), i = k(function(d, m) {
    const h = {
      id: d,
      focus: m
    };
    return t.current[d] = h, function() {
      const f = t.current;
      f[d] !== h && delete f[d];
    };
  }, []), a = k(function(d) {
    const m = al(e, d);
    m && m !== document.activeElement && m.focus();
  }, [e]), s = k(function(d, m) {
    r.current === d && (r.current = m);
  }, []), l = k(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = k(function(d) {
    r.current = null;
    const m = document.activeElement;
    m && m.getAttribute(At.draggableId) === d && (r.current = d);
  }, []);
  return He(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), ee(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, u, l, s]);
}
function _g() {
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
    return d || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot find draggable entry with id [${c}]`) : S()), d;
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
    return d || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot find droppable entry with id [${c}]`) : S()), d;
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
function Pg() {
  const e = ee(_g, []);
  return me(() => function() {
    P.version.startsWith("16") || P.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Fo = P.createContext(null), er = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot find document.body") : S()), e;
};
const Ag = {
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
var Rg = Ag;
const Tg = (e) => `rfd-announcement-${e}`;
function $g(e) {
  const t = ee(() => Tg(e), [e]), r = W(null);
  return me(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), st(i.style, Rg), er().appendChild(i), function() {
      setTimeout(function() {
        const l = er();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), k((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && ye(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Vg = 0;
const sl = {
  separator: "::"
};
function Mg(e, t = sl) {
  return ee(() => `${e}${t.separator}${Vg++}`, [t.separator, e]);
}
function Lg(e, t = sl) {
  const r = P.useId();
  return ee(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Go = "useId" in P ? Lg : Mg;
function Bg({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Fg({
  contextId: e,
  text: t
}) {
  const r = Go("hidden-text", {
    separator: "-"
  }), n = ee(() => Bg({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return me(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", er().appendChild(i), function() {
      const s = er();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var kr = P.createContext(null), Gg = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const kg = /(\d+)\.(\d+)\.(\d+)/, ha = (e) => {
  const t = kg.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? S(!1, `Unable to parse React version ${e}`) : S());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Wg = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var jg = (e, t) => {
  const r = ha(e), n = ha(t);
  Wg(r, n) || process.env.NODE_ENV !== "production" && ye(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const sn = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Ug = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ye(`
      No <!doctype html> found.

      ${sn}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ye(`
      Unexpected <!doctype> found: (${t.name})

      ${sn}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ye(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${sn}
    `);
};
function ko(e) {
  process.env.NODE_ENV !== "production" && e();
}
function dr(e, t) {
  ko(() => {
    me(() => {
      try {
        e();
      } catch (r) {
        Fn(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function zg() {
  dr(() => {
    jg(Gg.react, P.version), Ug(document);
  }, []);
}
function Wo(e) {
  const t = W(e);
  return me(() => {
    t.current = e;
  }), t;
}
function Hg() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function n(a) {
    e && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot claim lock as it is already claimed") : S());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot release lock when there is no lock") : S()), e = null;
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
function tr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const qg = 9, Yg = 13, jo = 27, cl = 32, Kg = 33, Xg = 34, Jg = 35, Zg = 36, Qg = 37, eb = 38, tb = 39, rb = 40, nb = {
  [Yg]: !0,
  [qg]: !0
};
var ll = (e) => {
  nb[e.keyCode] && e.preventDefault();
};
const ob = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Wr = ob;
const ul = 0, va = 5;
function ib(e, t) {
  return Math.abs(t.x - e.x) >= va || Math.abs(t.y - e.y) >= va;
}
const ya = {
  type: "IDLE"
};
function ab({
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
      if (i !== ul)
        return;
      const l = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(l);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot be IDLE") : S());
      const p = u.point;
      if (!ib(p, l))
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
      if (o.keyCode === jo) {
        o.preventDefault(), e();
        return;
      }
      ll(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "Unexpected phase") : S()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Wr,
    fn: e
  }];
}
function sb(e) {
  const t = W(ya), r = W(ct), n = ee(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== ul || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
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
  }), [e]), o = ee(() => ({
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
  }), [e]), i = k(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = Xe(window, [o, n], c);
  }, [o, n]), a = k(() => {
    t.current.type !== "IDLE" && (t.current = ya, r.current(), i());
  }, [i]), s = k(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), l = k(function() {
    const c = {
      capture: !0,
      passive: !1
    }, d = ab({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (m) => {
        t.current = m;
      }
    });
    r.current = Xe(window, d, c);
  }, [s, a]), u = k(function(c, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "Expected to move from IDLE to PENDING drag") : S()), t.current = {
      type: "PENDING",
      point: d,
      actions: c
    }, l();
  }, [l]);
  He(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function cb() {
}
const lb = {
  [Xg]: !0,
  [Kg]: !0,
  [Zg]: !0,
  [Jg]: !0
};
function ub(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === jo) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === cl) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === rb) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === eb) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === tb) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Qg) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (lb[o.keyCode]) {
        o.preventDefault();
        return;
      }
      ll(o);
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
    eventName: Wr,
    fn: r
  }];
}
function db(e) {
  const t = W(cb), r = ee(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== cl)
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
        l || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot stop capturing a keyboard drag when not capturing") : S()), l = !1, t.current(), n();
      }
      t.current = Xe(window, ub(u, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = k(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Xe(window, [r], i);
  }, [r]);
  He(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const cn = {
  type: "IDLE"
}, pb = 120, fb = 0.15;
function mb({
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
      r.keyCode === jo && r.preventDefault(), e();
    }
  }, {
    eventName: Wr,
    fn: e
  }];
}
function gb({
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
      o.type === "IDLE" && (process.env.NODE_ENV, S());
      const i = n.touches[0];
      if (!i || !(i.force >= fb))
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
    eventName: Wr,
    fn: e
  }];
}
function bb(e) {
  const t = W(cn), r = W(ct), n = k(function() {
    return t.current;
  }, []), o = k(function(m) {
    t.current = m;
  }, []), i = ee(() => ({
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
        clientY: x
      } = f, E = {
        x: y,
        y: x
      };
      r.current(), c(b, E);
    }
  }), [e]), a = k(function() {
    const m = {
      capture: !0,
      passive: !1
    };
    r.current = Xe(window, [i], m);
  }, [i]), s = k(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(cn), r.current(), a());
  }, [a, o]), l = k(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = k(function() {
    const m = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: l,
      completed: s,
      getPhase: n
    }, b = Xe(window, gb(h), m), f = Xe(window, mb(h), m);
    r.current = function() {
      b(), f();
    };
  }, [l, n, s]), p = k(function() {
    const m = n();
    m.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? S(!1, `Cannot start dragging from phase ${m.type}`) : S());
    const h = m.actions.fluidLift(m.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [n, o]), c = k(function(m, h) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "Expected to move from IDLE to PENDING drag") : S());
    const b = setTimeout(p, pb);
    o({
      type: "PENDING",
      point: h,
      actions: m,
      longPressTimerId: b
    }), u();
  }, [u, n, o, p]);
  He(function() {
    return a(), function() {
      r.current();
      const h = n();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(cn));
    };
  }, [n, a, o]), He(function() {
    return Xe(window, [{
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
function hb(e) {
  ko(() => {
    const t = Wo(e);
    dr(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot change the amount of sensor hooks after mounting") : S(!1));
    });
  });
}
const vb = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function dl(e, t) {
  if (t == null)
    return !1;
  if (vb.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : dl(e, t.parentElement);
}
function yb(e, t) {
  const r = t.target;
  return ur(r) ? dl(e, r) : !1;
}
var Eb = (e) => Ze(e.getBoundingClientRect()).center;
function xb(e) {
  return e instanceof il(e).Element;
}
const wb = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function pl(e, t) {
  return e == null ? null : e[wb](t) ? e : pl(e.parentElement, t);
}
function Sb(e, t) {
  return e.closest ? e.closest(t) : pl(e, t);
}
function Db(e) {
  return `[${At.contextId}="${e}"]`;
}
function Nb(e, t) {
  const r = t.target;
  if (!xb(r))
    return process.env.NODE_ENV !== "production" && ye("event.target must be a Element"), null;
  const n = Db(e), o = Sb(r, n);
  return o ? ur(o) ? o : (process.env.NODE_ENV !== "production" && ye("drag handle must be a HTMLElement"), null) : null;
}
function Ob(e, t) {
  const r = Nb(e, t);
  return r ? r.getAttribute(At.draggableId) : null;
}
function Cb(e, t) {
  const r = `[${Un.contextId}="${e}"]`, o = ol(document, r).find((i) => i.getAttribute(Un.id) === t);
  return o ? ur(o) ? o : (process.env.NODE_ENV !== "production" && ye("Draggable element is not a HTMLElement"), null) : null;
}
function Ib(e) {
  e.preventDefault();
}
function fr({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && ye(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && ye(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function fl({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !el(t.getState(), n)) : (process.env.NODE_ENV !== "production" && ye(`Unable to find draggable with id: ${n}`), !1);
}
function _b({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!fl({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const l = n.draggable.getById(o), u = Cb(t, l.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && ye(`Unable to find draggable element with id: ${o}`), null;
  if (a && !l.options.canDragInteractiveElements && yb(u, a))
    return null;
  const p = e.claim(i || ct);
  let c = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(p);
  }
  function h(g, w) {
    fr({
      expected: g,
      phase: c,
      isLockActive: m,
      shouldWarn: !0
    }) && r.dispatch(w());
  }
  const b = h.bind(null, "DRAGGING");
  function f(g) {
    function w() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (w(), process.env.NODE_ENV !== "production" ? S(!1, `Cannot lift in phase ${c}`) : S()), r.dispatch(im(g.liftActionArgs)), c = "DRAGGING";
    function O(C, M = {
      shouldBlockNextClick: !1
    }) {
      if (g.cleanup(), M.shouldBlockNextClick) {
        const A = Xe(window, [{
          eventName: "click",
          fn: Ib,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(A);
      }
      w(), r.dispatch(Hc({
        reason: C
      }));
    }
    return {
      isActive: () => fr({
        expected: "DRAGGING",
        phase: c,
        isLockActive: m,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (C) => O("DROP", C),
      cancel: (C) => O("CANCEL", C),
      ...g.actions
    };
  }
  function y(g) {
    const w = qt((C) => {
      b(() => zc({
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
        cleanup: () => w.cancel(),
        actions: {
          move: w
        }
      }),
      move: w
    };
  }
  function x() {
    const g = {
      moveUp: () => b(mm),
      moveRight: () => b(bm),
      moveDown: () => b(gm),
      moveLeft: () => b(hm)
    };
    return f({
      liftActionArgs: {
        id: o,
        clientSelection: Eb(u),
        movementMode: "SNAP"
      },
      cleanup: ct,
      actions: g
    });
  }
  function E() {
    fr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: m,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => fr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: m,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: y,
    snapLift: x,
    abort: E
  };
}
const Pb = [sb, db, bb];
function Ab({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? Pb : [], ...n || []], a = Re(() => Hg())[0], s = k(function(f, y) {
    tr(f) && !tr(y) && a.tryAbandon();
  }, [a]);
  He(function() {
    let f = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      s(f, x), f = x;
    });
  }, [a, t, s]), He(() => a.tryAbandon, [a.tryAbandon]);
  const l = k((b) => fl({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = k((b, f, y) => _b({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: f || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), p = k((b) => Ob(e, b), [e]), c = k((b) => {
    const f = r.draggable.findById(b);
    return f ? f.options : null;
  }, [r.draggable]), d = k(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Ro()));
  }, [a, t]), m = k(() => a.isClaimed(), [a]), h = ee(() => ({
    canGetLock: l,
    tryGetLock: u,
    findClosestDraggableId: p,
    findOptionsForDraggable: c,
    tryReleaseLock: d,
    isLockClaimed: m
  }), [l, u, p, c, d, m]);
  hb(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const Rb = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    P.version.startsWith("16") || P.version.startsWith("17") ? r() : Vr(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Tb = (e) => ({
  ...Qt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Qt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Gt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? S(!1, "Could not find store from lazy ref") : S()), e.current;
}
function $b(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = W(null);
  zg();
  const s = Wo(e), l = k(() => Rb(s.current), [s]), u = k(() => Tb(s.current), [s]), p = $g(t), c = Fg({
    contextId: t,
    text: i
  }), d = Cg(t, o), m = k((A) => {
    Gt(a).dispatch(A);
  }, []), h = ee(() => _i({
    publishWhileDragging: sm,
    updateDroppableScroll: lm,
    updateDroppableIsEnabled: um,
    updateDroppableIsCombineEnabled: dm,
    collectionStarting: cm
  }, m), [m]), b = Pg(), f = ee(() => og(b, h), [b, h]), y = ee(() => xg({
    scrollWindow: ig,
    scrollDroppable: f.scrollDroppable,
    getAutoScrollerOptions: u,
    ..._i({
      move: zc
    }, m)
  }), [f.scrollDroppable, m, u]), x = Ig(t), E = ee(() => eg({
    announce: p,
    autoScroller: y,
    dimensionMarshal: f,
    focusMarshal: x,
    getResponders: l,
    styleMarshal: d
  }), [p, y, f, x, l, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && ye("unexpected store change"), a.current = E;
  const v = k(() => {
    const A = Gt(a);
    A.getState().phase !== "IDLE" && A.dispatch(Ro());
  }, []), g = k(() => {
    const A = Gt(a).getState();
    return A.phase === "DROP_ANIMATING" ? !0 : A.phase === "IDLE" ? !1 : A.isDragging;
  }, []), w = ee(() => ({
    isDragging: g,
    tryAbort: v
  }), [g, v]);
  r(w);
  const O = k((A) => el(Gt(a).getState(), A), []), C = k(() => ht(Gt(a).getState()), []), M = ee(() => ({
    marshal: f,
    focus: x,
    contextId: t,
    canLift: O,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: c,
    registry: b
  }), [t, f, c, x, O, C, b]);
  return Ab({
    contextId: t,
    store: E,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), me(() => v, [v]), P.createElement(kr.Provider, {
    value: M
  }, P.createElement(Pp, {
    context: Fo,
    store: E
  }, e.children));
}
let Vb = 0;
function Mb() {
  return ee(() => `${Vb++}`, []);
}
function Lb() {
  return P.useId();
}
var Bb = "useId" in P ? Lb : Mb;
function Fb(e) {
  const t = Bb(), r = e.dragHandleUsageInstructions || vr.dragHandleUsageInstructions;
  return P.createElement(Hp, null, (n) => P.createElement($b, {
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
const Ea = {
  dragging: 5e3,
  dropAnimating: 4500
}, Gb = (e, t) => t ? Wt.drop(t.duration) : e ? Wt.snap : Wt.fluid, kb = (e, t) => {
  if (e)
    return t ? Zt.opacity.drop : Zt.opacity.combining;
}, Wb = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function jb(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Wb(e), l = !!i, u = l ? Wn.drop(n, a) : Wn.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Gb(s, i),
    transform: u,
    opacity: kb(a, l),
    zIndex: l ? Ea.dropAnimating : Ea.dragging,
    pointerEvents: "none"
  };
}
function Ub(e) {
  return {
    transform: Wn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function zb(e) {
  return e.type === "DRAGGING" ? jb(e) : Ub(e);
}
function Hb(e, t, r = Te) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Ec(o, n), a = Ir(i, r), s = {
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
function qb(e) {
  const t = Go("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = ee(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = k((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot get dimension when no ref is set") : S()), Hb(r, h, m);
  }, [r, o]), p = ee(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = W(p), d = W(!0);
  He(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), He(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var Uo = P.createContext(null);
function ml(e) {
  e && ur(e) || (process.env.NODE_ENV !== "production" ? S(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : S());
}
function Yb(e, t, r) {
  dr(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? S(!1, "Draggable requires a draggableId") : S(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? S(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : S(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? S(!1, `${n(o)} requires an integer index prop`) : S(!1)), e.mapped.type !== "DRAGGING" && (ml(r()), e.isEnabled && (al(t, o) || (process.env.NODE_ENV !== "production" ? S(!1, `${n(o)} Unable to find drag handle`) : S(!1))));
  });
}
function Kb(e) {
  ko(() => {
    const t = W(e);
    dr(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? S(!1, "Draggable isClone prop value changed during component life") : S(!1));
    }, [e]);
  });
}
function Ar(e) {
  const t = Rt(e);
  return t || (process.env.NODE_ENV !== "production" ? S(!1, "Could not find required context") : S()), t;
}
function Xb(e) {
  e.preventDefault();
}
const Jb = (e) => {
  const t = W(null), r = k((w = null) => {
    t.current = w;
  }, []), n = k(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ar(kr), {
    type: s,
    droppableId: l
  } = Ar(Uo), u = ee(() => ({
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
  if (Yb(e, o, n), Kb(b), !b) {
    const w = ee(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    qb(w);
  }
  const x = ee(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Xb
  } : null, [o, i, c, d]), E = k((w) => {
    f.type === "DRAGGING" && f.dropping && w.propertyName === "transform" && (P.version.startsWith("16") || P.version.startsWith("17") ? y() : Vr(y));
  }, [y, f]), v = ee(() => {
    const w = zb(f), O = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: w,
        onTransitionEnd: O
      },
      dragHandleProps: x
    };
  }, [o, x, c, f, E, r]), g = ee(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return P.createElement(P.Fragment, null, p(v, f.snapshot, g));
};
var Zb = Jb, gl = (e, t) => e === t, bl = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Qb = (e) => e.combine ? e.combine.draggableId : null, eh = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function th() {
  const e = Ae((o, i) => ({
    x: o,
    y: i
  })), t = Ae((o, i, a = null, s = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = Ae((o, i, a, s, l = null, u = null, p = null) => ({
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
    if (tr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = ze(o.impact), u = eh(o.impact), p = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, l, u, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], u = a.result, p = u.mode, c = bl(u), d = Qb(u), h = {
        duration: o.dropDuration,
        curve: $o.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Zt.opacity.drop : null,
        scale: d ? Zt.scale.drop : null
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
const rh = {
  mapped: {
    type: "SECONDARY",
    offset: Te,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: hl(null)
  }
};
function nh() {
  const e = Ae((a, s) => ({
    x: a,
    y: s
  })), t = Ae(hl), r = Ae((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(Te, a, !0) : null, o = (a, s, l, u) => {
    const p = l.displaced.visible[a], c = !!(u.inVirtualList && u.effected[a]), d = Br(l), m = d && d.draggableId === a ? s : null;
    if (!p) {
      if (!c)
        return n(m);
      if (l.displaced.invisible[a])
        return null;
      const f = $t(u.displacedBy.point), y = e(f.x, f.y);
      return r(y, m, !0);
    }
    if (c)
      return n(m);
    const h = l.displacedBy.point, b = e(h.x, h.y);
    return r(b, m, p.shouldAnimate);
  };
  return (a, s) => {
    if (tr(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const oh = () => {
  const e = th(), t = nh();
  return (n, o) => e(n, o) || t(n, o) || rh;
}, ih = {
  dropAnimationFinished: qc
}, ah = vc(oh, ih, null, {
  context: Fo,
  areStatePropsEqual: gl
})(Zb);
var sh = ah;
function vl(e) {
  return Ar(Uo).isUsingCloneFor === e.draggableId && !e.isClone ? null : P.createElement(sh, e);
}
function ch(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return P.createElement(vl, st({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const zo = (e) => (t) => e === t, lh = zo("scroll"), uh = zo("auto"), dh = zo("visible"), xa = (e, t) => t(e.overflowX) || t(e.overflowY), ph = (e, t) => t(e.overflowX) && t(e.overflowY), yl = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return xa(r, lh) || xa(r, uh);
}, fh = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = er(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, S()), !yl(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return ph(n, dh) || process.env.NODE_ENV !== "production" && ye(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ho = (e) => e == null ? null : e === document.body ? fh() ? e : null : e === document.documentElement ? null : yl(e) ? e : Ho(e.parentElement);
var mh = (e) => {
  !e || !Ho(e.parentElement) || process.env.NODE_ENV !== "production" && ye(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, zn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const El = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : El(e.parentElement) : !1;
var gh = (e) => {
  const t = Ho(e), r = El(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, bh = ({
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
    } = s, h = Jc({
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
          value: Te,
          displacement: Te
        }
      }
    };
  })(), u = o === "vertical" ? Co : Pc, p = _t({
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
const hh = (e, t) => {
  const r = xc(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, l = So({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Do({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var vh = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = hh(e, l), p = Ir(u, n), c = (() => {
    if (!l)
      return null;
    const m = xc(l), h = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: m,
      page: Ir(m, n),
      scroll: zn(l),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return bh({
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
const yh = {
  passive: !1
}, Eh = {
  passive: !0
};
var wa = (e) => e.shouldPublishImmediately ? yh : Eh;
const mr = (e) => e && e.env.closestScrollable || null;
function xh(e) {
  const t = W(null), r = Ar(kr), n = Go("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Wo(e), s = ee(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = W(s), u = ee(() => Ae((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? S(!1, "Can only update scroll when dragging") : S());
    const w = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, w);
  }), [s.id, i]), p = k(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? Te : zn(v.env.closestScrollable);
  }, []), c = k(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = ee(() => qt(c), [c]), m = k(() => {
    const v = t.current, g = mr(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? S(!1, "Could not find scroll options while scrolling") : S()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = k((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot collect a droppable while a drag is occurring") : S());
    const w = a.current, O = w.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot collect without a droppable ref") : S());
    const C = gh(O), M = {
      ref: O,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = M;
    const A = vh({
      ref: O,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), T = C.closestScrollable;
    return T && (T.setAttribute(ga.contextId, r.contextId), T.addEventListener("scroll", m, wa(M.scrollOptions)), process.env.NODE_ENV !== "production" && mh(T)), A;
  }, [r.contextId, s, m, a]), b = k(() => {
    const v = t.current, g = mr(v);
    return v && g || (process.env.NODE_ENV !== "production" ? S(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : S()), zn(g);
  }, []), f = k(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot stop drag when no active drag") : S());
    const g = mr(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(ga.contextId), g.removeEventListener("scroll", m, wa(v.scrollOptions)));
  }, [m, d]), y = k((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot scroll when there is no drag") : S());
    const w = mr(g);
    w || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot scroll a droppable with no closest scrollable") : S()), w.scrollTop += v.y, w.scrollLeft += v.x;
  }, []), x = ee(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = ee(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  He(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && ye("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [x, s, f, E, i, o.droppable]), He(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), He(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ln() {
}
const Sa = {
  width: 0,
  height: 0,
  margin: Qp
}, wh = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Sa : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Sh = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = wh({
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
    transition: r !== "none" ? Wt.placeholder : null
  };
}, Dh = (e) => {
  const t = W(null), r = k(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Re(e.animate === "open");
  me(() => s ? n !== "open" ? (r(), l(!1), ln) : t.current ? ln : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : ln, [n, s, r]);
  const u = k((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = Sh({
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
var Nh = P.memo(Dh);
function un(e) {
  return typeof e == "boolean";
}
function dn(e, t) {
  t.forEach((r) => r(e));
}
const Oh = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? S(!1, "A Droppable requires a droppableId prop") : S()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? S(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : S());
}, function({
  props: t
}) {
  un(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? S(!1, "isDropDisabled must be a boolean") : S()), un(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? S(!1, "isCombineEnabled must be a boolean") : S()), un(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? S(!1, "ignoreContainerClipping must be a boolean") : S());
}, function({
  getDroppableRef: t
}) {
  ml(t());
}], Ch = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && ye(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Ih = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? S(!1, "Must provide a clone render function (renderClone) for virtual lists") : S());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? S(!1, "Expected virtual list to not have a placeholder") : S());
}];
function _h(e) {
  dr(() => {
    dn(e, Oh), e.props.mode === "standard" && dn(e, Ch), e.props.mode === "virtual" && dn(e, Ih);
  });
}
class Ph extends P.PureComponent {
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
const Ah = (e) => {
  const t = Rt(kr);
  t || (process.env.NODE_ENV !== "production" ? S(!1, "Could not find app context") : S());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = W(null), i = W(null), {
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
  } = e, x = k(() => o.current, []), E = k((_ = null) => {
    o.current = _;
  }, []), v = k(() => i.current, []), g = k((_ = null) => {
    i.current = _;
  }, []);
  _h({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: v
  });
  const w = k(() => {
    n() && f({
      maxScroll: Qc()
    });
  }, [n, f]);
  xh({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: x
  });
  const O = ee(() => P.createElement(Ph, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: _,
    data: B,
    animate: Y
  }) => P.createElement(Nh, {
    placeholder: B,
    onClose: _,
    innerRef: g,
    animate: Y,
    contextId: r,
    onTransitionEnd: w
  })), [r, w, e.placeholder, e.shouldAnimatePlaceholder, g]), C = ee(() => ({
    innerRef: E,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, O, E]), M = b ? b.dragging.draggableId : null, A = ee(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: M
  }), [s, M, l]);
  function T() {
    if (!b)
      return null;
    const {
      dragging: _,
      render: B
    } = b, Y = P.createElement(vl, {
      draggableId: _.draggableId,
      index: _.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (K, R) => B(K, R, _));
    return po.createPortal(Y, y());
  }
  return P.createElement(Uo.Provider, {
    value: A
  }, a(C, h), T());
};
var Rh = Ah;
function Th() {
  return document.body || (process.env.NODE_ENV !== "production" ? S(!1, "document.body is not ready") : S()), document.body;
}
const Da = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Th
}, xl = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Da)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Da[r]
    });
  return t;
}, pn = (e, t) => e === t.droppable.type, Na = (e, t) => t.draggables[e.draggable.id], $h = () => {
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
  }, r = Ae((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = Ae((i, a, s, l, u, p) => {
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
    const s = xl(a), l = s.droppableId, u = s.type, p = !s.isDropDisabled, c = s.renderClone;
    if (tr(i)) {
      const d = i.critical;
      if (!pn(u, d))
        return t;
      const m = Na(d, i.dimensions), h = ze(i.impact) === l;
      return n(l, p, h, h, m, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!pn(u, d.critical))
        return t;
      const m = Na(d.critical, i.dimensions);
      return n(l, p, bl(d.result) === l, ze(d.impact) === l, m, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!pn(u, d.critical))
        return t;
      const m = ze(d.impact) === l, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === l;
      return m ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, Vh = {
  updateViewportMaxScroll: fm
}, Mh = vc($h, Vh, (e, t, r) => ({
  ...xl(r),
  ...e,
  ...t
}), {
  context: Fo,
  areStatePropsEqual: gl
})(Rh);
var Lh = Mh;
const CS = ({
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
  const [p, c] = Re(null), [d, m] = Re(e);
  me(() => {
    m(e);
  }, [e]);
  const h = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (y) => {
    a == null || a(y), c(y);
  }, f = (y) => {
    if (!y.destination || !(d != null && d.length)) return;
    const x = y.source.index, E = y.destination.index, v = [...d], [g] = v.splice(x, 1);
    v.splice(E, 0, g), m(v);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ Pe("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ V("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ V("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ V(Us, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ V(ec, { className: u, children: /* @__PURE__ */ V("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ V("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ V(Fb, { onDragEnd: f, children: /* @__PURE__ */ V(Lh, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ Pe("table", { className: "w-full", children: [
    /* @__PURE__ */ V("thead", { children: /* @__PURE__ */ V("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((x, E) => /* @__PURE__ */ V(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === x.name.find((v) => v) ? `-${x.name.find((v) => v) ?? ""}` : x.name.find((v) => v) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === x.name.find((v) => v) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: x.title
      },
      E
    )) }) }),
    /* @__PURE__ */ Pe(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          d == null ? void 0 : d.map((x, E) => {
            var v;
            return /* @__PURE__ */ V(
              ch,
              {
                isDragDisabled: o,
                draggableId: (v = x == null ? void 0 : x.id) == null ? void 0 : v.toString(),
                index: E,
                children: (g) => {
                  const w = {
                    ...g.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ V(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${p === d[E] && h}`,
                      onClick: () => b(
                        s ? x[s] : x.id
                      ),
                      ref: g.innerRef,
                      ...g.draggableProps,
                      ...g.dragHandleProps,
                      style: w,
                      children: t.map((O, C) => {
                        var A;
                        let M = (A = O == null ? void 0 : O.name) == null ? void 0 : A.reduce(
                          (T, _) => T == null ? void 0 : T[_],
                          d == null ? void 0 : d[E]
                        );
                        return /* @__PURE__ */ V(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${l && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: O.transform ? O.transform(M, E) : M
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
          y.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, IS = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ V(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Bh = ({ name: e, className: t }) => /* @__PURE__ */ V("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ V(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), Fh = ({ style: e, text: t }) => /* @__PURE__ */ Pe("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ V("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ V("span", { className: "text-base", children: t })
] });
var Oa;
(function(e) {
  e.event = "event", e.props = "prop";
})(Oa || (Oa = {}));
var fn = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + fn(), "" + fn();
function Gh() {
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
function kh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hn = { exports: {} }, mn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Wh() {
  if (Ca) return mn;
  Ca = 1;
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
  return mn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, mn;
}
var Ia = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function jh() {
  return _a || (_a = 1, process.env.NODE_ENV !== "production" && function() {
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
      var y = f[0].inst, x = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && x({ inst: y });
        },
        [m, b, h]
      ), s(
        function() {
          return r(y) && x({ inst: y }), m(function() {
            r(y) && x({ inst: y });
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
    Ia.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ia;
}
process.env.NODE_ENV === "production" ? Hn.exports = Wh() : Hn.exports = jh();
var qo = Hn.exports, gn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Uh() {
  if (Pa) return gn;
  Pa = 1;
  var e = P, t = qo;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return gn.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(w) {
          if (!x) {
            if (x = !0, E = w, w = d(w), m !== void 0 && b.hasValue) {
              var O = b.value;
              if (m(O, w))
                return v = O;
            }
            return v = w;
          }
          if (O = v, n(E, w)) return O;
          var C = d(w);
          return m !== void 0 && m(O, C) ? (E = w, O) : (E = w, v = C);
        }
        var x = !1, E, v, g = c === void 0 ? null : c;
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
  }, gn;
}
var Aa = {};
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
function zh() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = P, r = qo, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Aa.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(w) {
            if (!x) {
              if (x = !0, E = w, w = d(w), m !== void 0 && b.hasValue) {
                var O = b.value;
                if (m(O, w))
                  return v = O;
              }
              return v = w;
            }
            if (O = v, n(E, w))
              return O;
            var C = d(w);
            return m !== void 0 && m(O, C) ? (E = w, O) : (E = w, v = C);
          }
          var x = !1, E, v, g = c === void 0 ? null : c;
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
  }()), Aa;
}
process.env.NODE_ENV === "production" ? Uh() : zh();
function Hh(e) {
  e();
}
let wl = Hh;
const qh = (e) => wl = e, Yh = () => wl, Ta = Symbol.for("react-redux-context"), $a = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Kh() {
  var e;
  if (!I.createContext) return {};
  const t = (e = $a[Ta]) != null ? e : $a[Ta] = /* @__PURE__ */ new Map();
  let r = t.get(I.createContext);
  return r || (r = I.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(I.createContext, r)), r;
}
const Xh = /* @__PURE__ */ Kh(), Jh = () => {
  throw new Error("uSES not initialized!");
};
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ct.apply(null, arguments);
}
function Sl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var qn = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function Zh() {
  if (Va) return ae;
  Va = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var w = g.$$typeof;
      switch (w) {
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
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function v(g) {
    return E(g) === u;
  }
  return ae.AsyncMode = l, ae.ConcurrentMode = u, ae.ContextConsumer = s, ae.ContextProvider = a, ae.Element = t, ae.ForwardRef = p, ae.Fragment = n, ae.Lazy = h, ae.Memo = m, ae.Portal = r, ae.Profiler = i, ae.StrictMode = o, ae.Suspense = c, ae.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, ae.isConcurrentMode = v, ae.isContextConsumer = function(g) {
    return E(g) === s;
  }, ae.isContextProvider = function(g) {
    return E(g) === a;
  }, ae.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ae.isForwardRef = function(g) {
    return E(g) === p;
  }, ae.isFragment = function(g) {
    return E(g) === n;
  }, ae.isLazy = function(g) {
    return E(g) === h;
  }, ae.isMemo = function(g) {
    return E(g) === m;
  }, ae.isPortal = function(g) {
    return E(g) === r;
  }, ae.isProfiler = function(g) {
    return E(g) === i;
  }, ae.isStrictMode = function(g) {
    return E(g) === o;
  }, ae.isSuspense = function(g) {
    return E(g) === c;
  }, ae.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === x || g.$$typeof === b);
  }, ae.typeOf = E, ae;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function Qh() {
  return Ma || (Ma = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function E(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === i || D === o || D === c || D === d || typeof D == "object" && D !== null && (D.$$typeof === h || D.$$typeof === m || D.$$typeof === a || D.$$typeof === s || D.$$typeof === p || D.$$typeof === f || D.$$typeof === y || D.$$typeof === x || D.$$typeof === b);
    }
    function v(D) {
      if (typeof D == "object" && D !== null) {
        var we = D.$$typeof;
        switch (we) {
          case t:
            var N = D.type;
            switch (N) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return N;
              default:
                var Ce = N && N.$$typeof;
                switch (Ce) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return Ce;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var g = l, w = u, O = s, C = a, M = t, A = p, T = n, _ = h, B = m, Y = r, K = i, R = o, L = c, G = !1;
    function H(D) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(D) || v(D) === l;
    }
    function q(D) {
      return v(D) === u;
    }
    function F(D) {
      return v(D) === s;
    }
    function Z(D) {
      return v(D) === a;
    }
    function te(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function ve(D) {
      return v(D) === p;
    }
    function be(D) {
      return v(D) === n;
    }
    function De(D) {
      return v(D) === h;
    }
    function ge(D) {
      return v(D) === m;
    }
    function Ee(D) {
      return v(D) === r;
    }
    function J(D) {
      return v(D) === i;
    }
    function xe(D) {
      return v(D) === o;
    }
    function ke(D) {
      return v(D) === c;
    }
    ue.AsyncMode = g, ue.ConcurrentMode = w, ue.ContextConsumer = O, ue.ContextProvider = C, ue.Element = M, ue.ForwardRef = A, ue.Fragment = T, ue.Lazy = _, ue.Memo = B, ue.Portal = Y, ue.Profiler = K, ue.StrictMode = R, ue.Suspense = L, ue.isAsyncMode = H, ue.isConcurrentMode = q, ue.isContextConsumer = F, ue.isContextProvider = Z, ue.isElement = te, ue.isForwardRef = ve, ue.isFragment = be, ue.isLazy = De, ue.isMemo = ge, ue.isPortal = Ee, ue.isProfiler = J, ue.isStrictMode = xe, ue.isSuspense = ke, ue.isValidElementType = E, ue.typeOf = v;
  }()), ue;
}
process.env.NODE_ENV === "production" ? qn.exports = Zh() : qn.exports = Qh();
var ev = qn.exports, Yo = ev, tv = {
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
}, rv = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, nv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Dl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ko = {};
Ko[Yo.ForwardRef] = nv;
Ko[Yo.Memo] = Dl;
function La(e) {
  return Yo.isMemo(e) ? Dl : Ko[e.$$typeof] || tv;
}
var ov = Object.defineProperty, iv = Object.getOwnPropertyNames, Ba = Object.getOwnPropertySymbols, av = Object.getOwnPropertyDescriptor, sv = Object.getPrototypeOf, Fa = Object.prototype;
function Nl(e, t, r) {
  if (typeof t != "string") {
    if (Fa) {
      var n = sv(t);
      n && n !== Fa && Nl(e, n, r);
    }
    var o = iv(t);
    Ba && (o = o.concat(Ba(t)));
    for (var i = La(e), a = La(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!rv[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = av(t, l);
        try {
          ov(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var cv = Nl;
const Ga = /* @__PURE__ */ kh(cv);
var Yn = { exports: {} }, se = {};
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
function lv() {
  if (ka) return se;
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
  return se.ContextConsumer = a, se.ContextProvider = i, se.Element = e, se.ForwardRef = l, se.Fragment = r, se.Lazy = d, se.Memo = c, se.Portal = t, se.Profiler = o, se.StrictMode = n, se.Suspense = u, se.SuspenseList = p, se.isAsyncMode = function() {
    return !1;
  }, se.isConcurrentMode = function() {
    return !1;
  }, se.isContextConsumer = function(f) {
    return b(f) === a;
  }, se.isContextProvider = function(f) {
    return b(f) === i;
  }, se.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, se.isForwardRef = function(f) {
    return b(f) === l;
  }, se.isFragment = function(f) {
    return b(f) === r;
  }, se.isLazy = function(f) {
    return b(f) === d;
  }, se.isMemo = function(f) {
    return b(f) === c;
  }, se.isPortal = function(f) {
    return b(f) === t;
  }, se.isProfiler = function(f) {
    return b(f) === o;
  }, se.isStrictMode = function(f) {
    return b(f) === n;
  }, se.isSuspense = function(f) {
    return b(f) === u;
  }, se.isSuspenseList = function(f) {
    return b(f) === p;
  }, se.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, se.typeOf = b, se;
}
var de = {};
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
function uv() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, x = !1, E;
    E = Symbol.for("react.module.reference");
    function v(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === o || x || N === n || N === u || N === p || y || N === m || h || b || f || typeof N == "object" && N !== null && (N.$$typeof === d || N.$$typeof === c || N.$$typeof === i || N.$$typeof === a || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === E || N.getModuleId !== void 0));
    }
    function g(N) {
      if (typeof N == "object" && N !== null) {
        var Ce = N.$$typeof;
        switch (Ce) {
          case e:
            var Fe = N.type;
            switch (Fe) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Fe;
              default:
                var $ = Fe && Fe.$$typeof;
                switch ($) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return $;
                  default:
                    return Ce;
                }
            }
          case t:
            return Ce;
        }
      }
    }
    var w = a, O = i, C = e, M = l, A = r, T = d, _ = c, B = t, Y = o, K = n, R = u, L = p, G = !1, H = !1;
    function q(N) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(N) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(N) {
      return g(N) === a;
    }
    function te(N) {
      return g(N) === i;
    }
    function ve(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function be(N) {
      return g(N) === l;
    }
    function De(N) {
      return g(N) === r;
    }
    function ge(N) {
      return g(N) === d;
    }
    function Ee(N) {
      return g(N) === c;
    }
    function J(N) {
      return g(N) === t;
    }
    function xe(N) {
      return g(N) === o;
    }
    function ke(N) {
      return g(N) === n;
    }
    function D(N) {
      return g(N) === u;
    }
    function we(N) {
      return g(N) === p;
    }
    de.ContextConsumer = w, de.ContextProvider = O, de.Element = C, de.ForwardRef = M, de.Fragment = A, de.Lazy = T, de.Memo = _, de.Portal = B, de.Profiler = Y, de.StrictMode = K, de.Suspense = R, de.SuspenseList = L, de.isAsyncMode = q, de.isConcurrentMode = F, de.isContextConsumer = Z, de.isContextProvider = te, de.isElement = ve, de.isForwardRef = be, de.isFragment = De, de.isLazy = ge, de.isMemo = Ee, de.isPortal = J, de.isProfiler = xe, de.isStrictMode = ke, de.isSuspense = D, de.isSuspenseList = we, de.isValidElementType = v, de.typeOf = g;
  }()), de;
}
process.env.NODE_ENV === "production" ? Yn.exports = lv() : Yn.exports = uv();
var ja = Yn.exports;
function Xo(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function bn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Xo(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function dv(e, t, r) {
  bn(e, "mapStateToProps"), bn(t, "mapDispatchToProps"), bn(r, "mergeProps");
}
const pv = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function fv(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function m(x, E) {
    return l = x, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const x = e(l, u), E = !a(x, p);
    return p = x, E && (d = r(p, c, u)), d;
  }
  function y(x, E) {
    const v = !i(E, u), g = !o(x, l, E, u);
    return l = x, u = E, v && g ? h() : v ? b() : g ? f() : d;
  }
  return function(x, E) {
    return s ? y(x, E) : m(x, E);
  };
}
function mv(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Sl(t, pv);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && dv(a, s, l), fv(a, s, l, e, i);
}
function gv(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function bv(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Ol(e, t, r) {
  bv(e) || Xo(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Kn(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Ua(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Cl(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = Ua(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = Ua(s), s = o(i, a)), process.env.NODE_ENV !== "production" && Ol(s, n, t), s;
    }, o;
  };
}
function Jo(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function hv(e) {
  return e && typeof e == "object" ? Kn((t) => (
    // @ts-ignore
    gv(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Cl(e, "mapDispatchToProps")
  ) : Jo(e, "mapDispatchToProps") : Kn((t) => ({
    dispatch: t
  }));
}
function vv(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Cl(e, "mapStateToProps")
  ) : Jo(e, "mapStateToProps") : Kn(() => ({}));
}
function yv(e, t, r) {
  return Ct({}, r, e, t);
}
function Ev(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && Ol(i, r, "mergeProps")), i;
    };
  };
}
function xv(e) {
  return e ? typeof e == "function" ? Ev(e) : Jo(e, "mergeProps") : () => yv;
}
function wv() {
  const e = Yh();
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
const za = {
  notify() {
  },
  get: () => []
};
function Sv(e, t) {
  let r, n = za, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = wv());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = za);
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
const Dv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xn = Dv ? I.useLayoutEffect : I.useEffect;
function Ha(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function hn(e, t) {
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
const Nv = ["reactReduxForwardedRef"];
let Il = Jh;
const Ov = (e) => {
  Il = e;
}, Cv = [null, null], Iv = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function _v(e, t, r) {
  Xn(() => e(...t), r);
}
function Pv(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Av(e, t, r, n, o, i, a, s, l, u, p) {
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
function Rv(e, t) {
  return e === t;
}
let qa = !1;
function _l(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Rv,
  areOwnPropsEqual: i = hn,
  areStatePropsEqual: a = hn,
  areMergedPropsEqual: s = hn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = Xh
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !qa && (qa = !0, Xo('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = vv(e), d = hv(t), m = xv(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !ja.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Iv(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, x = {
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
      const [w, O, C] = I.useMemo(() => {
        const {
          reactReduxForwardedRef: J
        } = g, xe = Sl(g, Nv);
        return [g.context, J, xe];
      }, [g]), M = I.useMemo(() => w && w.Consumer && // @ts-ignore
      ja.isContextConsumer(/* @__PURE__ */ I.createElement(w.Consumer, null)) ? w : p, [w, p]), A = I.useContext(M), T = !!g.store && !!g.store.getState && !!g.store.dispatch, _ = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !T && !_)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const B = T ? g.store : A.store, Y = _ ? A.getServerState : B.getState, K = I.useMemo(() => mv(B.dispatch, x), [B]), [R, L] = I.useMemo(() => {
        if (!h) return Cv;
        const J = Sv(B, T ? void 0 : A.subscription), xe = J.notifyNestedSubs.bind(J);
        return [J, xe];
      }, [B, T, A]), G = I.useMemo(() => T ? A : Ct({}, A, {
        subscription: R
      }), [T, A, R]), H = I.useRef(), q = I.useRef(C), F = I.useRef(), Z = I.useRef(!1);
      I.useRef(!1);
      const te = I.useRef(!1), ve = I.useRef();
      Xn(() => (te.current = !0, () => {
        te.current = !1;
      }), []);
      const be = I.useMemo(() => () => F.current && C === q.current ? F.current : K(B.getState(), C), [B, C]), De = I.useMemo(() => (J) => R ? Av(
        h,
        B,
        R,
        // @ts-ignore
        K,
        q,
        H,
        Z,
        te,
        F,
        L,
        J
      ) : () => {
      }, [R]);
      _v(Pv, [q, H, Z, C, F, L]);
      let ge;
      try {
        ge = Il(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          De,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          be,
          Y ? () => K(Y(), C) : be
        );
      } catch (J) {
        throw ve.current && (J.message += `
The error may be correlated with this previous error:
${ve.current.stack}

`), J;
      }
      Xn(() => {
        ve.current = void 0, F.current = void 0, H.current = ge;
      });
      const Ee = I.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ I.createElement(b, Ct({}, ge, {
          ref: O
        }))
      ), [O, b, ge]);
      return I.useMemo(() => h ? /* @__PURE__ */ I.createElement(M.Provider, {
        value: G
      }, Ee) : Ee, [M, Ee, G]);
    }
    const v = I.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = I.forwardRef(function(w, O) {
        return /* @__PURE__ */ I.createElement(v, Ct({}, w, {
          reactReduxForwardedRef: O
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, Ga(g, b);
    }
    return Ga(v, b);
  };
}
Ov(qo.useSyncExternalStore);
qh(fo);
function Tv(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Pl(e, t) {
  var r = Re(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = W(!0), o = W(r), i = n.current || !!(t && o.current.inputs && Tv(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return me(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function $v(e, t) {
  return Pl(function() {
    return e;
  }, t);
}
var $e = Pl, Ie = $v, Vv = process.env.NODE_ENV === "production", vn = "Invariant failed";
function Ya(e, t) {
  if (Vv)
    throw new Error(vn);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(vn, ": ").concat(r) : vn;
  throw new Error(n);
}
var Dt = function(e) {
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
}, Al = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Ka = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, Mv = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, yn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Zo = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? yn : r, o = e.border, i = o === void 0 ? yn : o, a = e.padding, s = a === void 0 ? yn : a, l = Dt(Al(t, n)), u = Dt(Ka(t, i)), p = Dt(Ka(u, s));
  return {
    marginBox: l,
    borderBox: Dt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, Ye = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Ya(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Ya()), n;
}, Lv = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Bv = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = Mv(r, t);
  return Zo({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, Jn = function(e, t) {
  return t === void 0 && (t = Lv()), Bv(e, t);
}, Rl = function(e, t) {
  var r = {
    top: Ye(t.marginTop),
    right: Ye(t.marginRight),
    bottom: Ye(t.marginBottom),
    left: Ye(t.marginLeft)
  }, n = {
    top: Ye(t.paddingTop),
    right: Ye(t.paddingRight),
    bottom: Ye(t.paddingBottom),
    left: Ye(t.paddingLeft)
  }, o = {
    top: Ye(t.borderTopWidth),
    right: Ye(t.borderRightWidth),
    bottom: Ye(t.borderBottomWidth),
    left: Ye(t.borderLeftWidth)
  };
  return Zo({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, Tl = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Rl(t, r);
}, Xa = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Fv(e, t) {
  return !!(e === t || Xa(e) && Xa(t));
}
function Gv(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Fv(e[r], t[r]))
      return !1;
  return !0;
}
function Le(e, t) {
  t === void 0 && (t = Gv);
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
var kv = function(e) {
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
const Wv = process.env.NODE_ENV === "production", jv = /[ \t]{2,}/g, Uv = /^[ \t]*/gm, Ja = (e) => e.replace(jv, " ").replace(Uv, "").trim(), zv = (e) => Ja(`
  %c@hello-pangea/dnd

  %c${Ja(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Hv = (e) => [zv(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], qv = "__@hello-pangea/dnd-disable-dev-warnings";
function $l(e, t) {
  Wv || typeof window < "u" && window[qv] || console[e](...Hv(t));
}
const ut = $l.bind(null, "warn"), Zn = $l.bind(null, "error");
function Yv() {
}
function Kv(e, t) {
  return {
    ...e,
    ...t
  };
}
function Xv(e, t, r) {
  const n = t.map((o) => {
    const i = Kv(r, o.options);
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
const Jv = process.env.NODE_ENV === "production", Za = "Invariant failed";
class rr extends Error {
}
rr.prototype.toString = function() {
  return this.message;
};
function U(e, t) {
  throw Jv ? new rr(Za) : new rr(`${Za}: ${t || ""}`);
}
class _S extends P.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Yv, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && ut(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof rr && (r.preventDefault(), process.env.NODE_ENV !== "production" && Zn(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Xv(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof rr) {
      process.env.NODE_ENV !== "production" && Zn(t.message), this.setState({});
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
const xt = {
  x: 0,
  y: 0
}, Zv = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Qv = (e, t) => e.x === t.x && e.y === t.y, ey = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), ty = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var ry = (e, t) => {
  const r = Dt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const ny = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), oy = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, iy = (e, t) => t ? ny(e, t.scroll.diff.displacement) : e, ay = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, sy = (e, t) => t && t.shouldClipSubject ? ry(t.pageMarginBox, e) : Dt(e);
var cy = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = iy(e.marginBox, n), i = ay(o, r, t), a = sy(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Le((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Le((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const ly = Le((e) => Object.values(e)), uy = Le((e) => Object.values(e));
Le((e, t) => uy(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function dy(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Le((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const py = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, fy = {
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
Le(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: ty(e.line, r)
  };
});
var yr = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const my = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), gy = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Qo = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, nr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, by = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, mt = `${by.outOfTheWay}s ${Qo.outOfTheWay}`, Er = {
  fluid: `opacity ${mt}`,
  snap: `transform ${mt}, opacity ${mt}`,
  drop: (e) => {
    const t = `${e}s ${Qo.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${mt}`,
  placeholder: `height ${mt}, width ${mt}, margin ${mt}`
}, Qa = (e) => Qv(e, xt) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Qn = {
  moveTo: Qa,
  drop: (e, t) => {
    const r = Qa(e);
    if (r)
      return t ? `${r} scale(${nr.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Vl = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Zv({
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
}, hy = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? U(!1, "Cannot find document.documentElement") : U()), e;
}, vy = () => {
  const e = hy();
  return Vl({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Le((e) => ly(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Ml = "data-rfd", es = (() => {
  const e = `${Ml}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), ts = {
  contextId: `${Ml}-scroll-container-context-id`
}, yy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? $r : me;
var jt = yy;
function Ey(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var xy = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ll(e) {
  return e instanceof xy(e).HTMLElement;
}
function wy(e, t) {
  const r = `[${es.contextId}="${e}"]`, n = Ey(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && ut(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(es.draggableId) === t);
  return o ? Ll(o) ? o : (process.env.NODE_ENV !== "production" && ut("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ut(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Bl = P.createContext(null), Sy = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? U(!1, "Cannot find document.body") : U()), e;
};
let Dy = 0;
const Fl = {
  separator: "::"
};
function Ny(e, t = Fl) {
  return $e(() => `${e}${t.separator}${Dy++}`, [t.separator, e]);
}
function Oy(e, t = Fl) {
  const r = P.useId();
  return $e(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Gl = "useId" in P ? Oy : Ny, ei = P.createContext(null);
function kl(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ti(e, t) {
  kl(() => {
    me(() => {
      try {
        e();
      } catch (r) {
        Zn(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Cy(e) {
  const t = W(e);
  return me(() => {
    t.current = e;
  }), t;
}
function ri(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const rs = {
  dragging: 5e3,
  dropAnimating: 4500
}, Iy = (e, t) => t ? Er.drop(t.duration) : e ? Er.snap : Er.fluid, _y = (e, t) => {
  if (e)
    return t ? nr.opacity.drop : nr.opacity.combining;
}, Py = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Ay(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = Py(e), s = !!o, l = s ? Qn.drop(r, i) : Qn.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Iy(a, o),
    transform: l,
    opacity: _y(i, s),
    zIndex: s ? rs.dropAnimating : rs.dragging,
    pointerEvents: "none"
  };
}
function Ry(e) {
  return {
    transform: Qn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Ty(e) {
  return e.type === "DRAGGING" ? Ay(e) : Ry(e);
}
function $y(e, t, r = xt) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Rl(o, n), a = Jn(i, r), s = {
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
function Vy(e) {
  const t = Gl("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = $e(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Ie((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? U(!1, "Cannot get dimension when no ref is set") : U()), $y(r, h, m);
  }, [r, o]), p = $e(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = W(p), d = W(!0);
  jt(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), jt(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var ni = P.createContext(null);
function Wl(e) {
  e && Ll(e) || (process.env.NODE_ENV !== "production" ? U(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : U());
}
function My(e, t, r) {
  ti(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? U(!1, "Draggable requires a draggableId") : U(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? U(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : U(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? U(!1, `${n(o)} requires an integer index prop`) : U(!1)), e.mapped.type !== "DRAGGING" && (Wl(r()), e.isEnabled && (wy(t, o) || (process.env.NODE_ENV !== "production" ? U(!1, `${n(o)} Unable to find drag handle`) : U(!1))));
  });
}
function Ly(e) {
  kl(() => {
    const t = W(e);
    ti(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? U(!1, "Draggable isClone prop value changed during component life") : U(!1));
    }, [e]);
  });
}
function Rr(e) {
  const t = Rt(e);
  return t || (process.env.NODE_ENV !== "production" ? U(!1, "Could not find required context") : U()), t;
}
function By(e) {
  e.preventDefault();
}
const Fy = (e) => {
  const t = W(null), r = Ie((w = null) => {
    t.current = w;
  }, []), n = Ie(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Rr(ei), {
    type: s,
    droppableId: l
  } = Rr(ni), u = $e(() => ({
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
  if (My(e, o, n), Ly(b), !b) {
    const w = $e(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    Vy(w);
  }
  const x = $e(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: By
  } : null, [o, i, c, d]), E = Ie((w) => {
    f.type === "DRAGGING" && f.dropping && w.propertyName === "transform" && (P.version.startsWith("16") || P.version.startsWith("17") ? y() : Vr(y));
  }, [y, f]), v = $e(() => {
    const w = Ty(f), O = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: w,
        onTransitionEnd: O
      },
      dragHandleProps: x
    };
  }, [o, x, c, f, E, r]), g = $e(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return P.createElement(P.Fragment, null, p(v, f.snapshot, g));
};
var Gy = Fy, jl = (e, t) => e === t, Ul = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const ky = (e) => e.combine ? e.combine.draggableId : null, Wy = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function jy() {
  const e = Le((n, o) => ({
    x: n,
    y: o
  })), t = Le((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Le((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (ri(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = yr(n.impact), l = Wy(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Ul(l), c = ky(l), d = {
        duration: n.dropDuration,
        curve: Qo.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? nr.opacity.drop : null,
        scale: c ? nr.scale.drop : null
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
function zl(e = null) {
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
const Uy = {
  mapped: {
    type: "SECONDARY",
    offset: xt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: zl(null)
  }
};
function zy() {
  const e = Le((i, a) => ({
    x: i,
    y: a
  })), t = Le(zl), r = Le((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(xt, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = dy(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = ey(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (ri(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const Hy = () => {
  const e = jy(), t = zy();
  return (r, n) => e(r, n) || t(r, n) || Uy;
}, qy = {
  dropAnimationFinished: gy
}, Yy = _l(Hy, qy, null, {
  context: Bl,
  areStatePropsEqual: jl
})(Gy);
var Ky = Yy;
function Xy(e) {
  return Rr(ni).isUsingCloneFor === e.draggableId && !e.isClone ? null : P.createElement(Ky, e);
}
const oi = (e) => (t) => e === t, Jy = oi("scroll"), Zy = oi("auto"), Qy = oi("visible"), ns = (e, t) => t(e.overflowX) || t(e.overflowY), eE = (e, t) => t(e.overflowX) && t(e.overflowY), Hl = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return ns(r, Jy) || ns(r, Zy);
}, tE = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Sy(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, U()), !Hl(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return eE(n, Qy) || process.env.NODE_ENV !== "production" && ut(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ii = (e) => e == null ? null : e === document.body ? tE() ? e : null : e === document.documentElement ? null : Hl(e) ? e : ii(e.parentElement);
var rE = (e) => {
  !e || !ii(e.parentElement) || process.env.NODE_ENV !== "production" && ut(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, eo = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ql = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ql(e.parentElement) : !1;
var nE = (e) => {
  const t = ii(e), r = ql(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, oE = ({
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
    } = s, m = Vl({
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
          value: xt,
          displacement: xt
        }
      }
    };
  })(), u = o === "vertical" ? py : fy, p = cy({
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
const iE = (e, t) => {
  const r = Tl(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = Al({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Zo({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var aE = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = iE(e, l), p = Jn(u, n), c = (() => {
    if (!l)
      return null;
    const d = Tl(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: Jn(d, n),
      scroll: eo(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return oE({
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
const sE = {
  passive: !1
}, cE = {
  passive: !0
};
var os = (e) => e.shouldPublishImmediately ? sE : cE;
const gr = (e) => e && e.env.closestScrollable || null;
function lE(e) {
  const t = W(null), r = Rr(ei), n = Gl("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Cy(e), s = $e(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = W(s), u = $e(() => Le((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? U(!1, "Can only update scroll when dragging") : U());
    const w = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, w);
  }), [s.id, i]), p = Ie(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? xt : eo(v.env.closestScrollable);
  }, []), c = Ie(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = $e(() => kv(c), [c]), m = Ie(() => {
    const v = t.current, g = gr(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? U(!1, "Could not find scroll options while scrolling") : U()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = Ie((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? U(!1, "Cannot collect a droppable while a drag is occurring") : U());
    const w = a.current, O = w.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? U(!1, "Cannot collect without a droppable ref") : U());
    const C = nE(O), M = {
      ref: O,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = M;
    const A = aE({
      ref: O,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), T = C.closestScrollable;
    return T && (T.setAttribute(ts.contextId, r.contextId), T.addEventListener("scroll", m, os(M.scrollOptions)), process.env.NODE_ENV !== "production" && rE(T)), A;
  }, [r.contextId, s, m, a]), b = Ie(() => {
    const v = t.current, g = gr(v);
    return v && g || (process.env.NODE_ENV !== "production" ? U(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : U()), eo(g);
  }, []), f = Ie(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? U(!1, "Cannot stop drag when no active drag") : U());
    const g = gr(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(ts.contextId), g.removeEventListener("scroll", m, os(v.scrollOptions)));
  }, [m, d]), y = Ie((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? U(!1, "Cannot scroll when there is no drag") : U());
    const w = gr(g);
    w || (process.env.NODE_ENV !== "production" ? U(!1, "Cannot scroll a droppable with no closest scrollable") : U()), w.scrollTop += v.y, w.scrollLeft += v.x;
  }, []), x = $e(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = $e(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  jt(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && ut("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [x, s, f, E, i, o.droppable]), jt(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), jt(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function En() {
}
const uE = {
  width: 0,
  height: 0,
  margin: oy
}, dE = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? uE : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, pE = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = dE({
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
    transition: r !== "none" ? Er.placeholder : null
  };
}, fE = (e) => {
  const t = W(null), r = Ie(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Re(e.animate === "open");
  me(() => s ? n !== "open" ? (r(), l(!1), En) : t.current ? En : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : En, [n, s, r]);
  const u = Ie((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = pE({
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
var mE = P.memo(fE);
function xn(e) {
  return typeof e == "boolean";
}
function wn(e, t) {
  t.forEach((r) => r(e));
}
const gE = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? U(!1, "A Droppable requires a droppableId prop") : U()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? U(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : U());
}, function({
  props: e
}) {
  xn(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? U(!1, "isDropDisabled must be a boolean") : U()), xn(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? U(!1, "isCombineEnabled must be a boolean") : U()), xn(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? U(!1, "ignoreContainerClipping must be a boolean") : U());
}, function({
  getDroppableRef: e
}) {
  Wl(e());
}], bE = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && ut(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], hE = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? U(!1, "Must provide a clone render function (renderClone) for virtual lists") : U());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? U(!1, "Expected virtual list to not have a placeholder") : U());
}];
function vE(e) {
  ti(() => {
    wn(e, gE), e.props.mode === "standard" && wn(e, bE), e.props.mode === "virtual" && wn(e, hE);
  });
}
class yE extends P.PureComponent {
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
const EE = (e) => {
  const t = Rt(ei);
  t || (process.env.NODE_ENV !== "production" ? U(!1, "Could not find app context") : U());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = W(null), i = W(null), {
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
  } = e, x = Ie(() => o.current, []), E = Ie((_ = null) => {
    o.current = _;
  }, []), v = Ie(() => i.current, []), g = Ie((_ = null) => {
    i.current = _;
  }, []);
  vE({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: v
  });
  const w = Ie(() => {
    n() && f({
      maxScroll: vy()
    });
  }, [n, f]);
  lE({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: x
  });
  const O = $e(() => P.createElement(yE, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: _,
    data: B,
    animate: Y
  }) => P.createElement(mE, {
    placeholder: B,
    onClose: _,
    innerRef: g,
    animate: Y,
    contextId: r,
    onTransitionEnd: w
  })), [r, w, e.placeholder, e.shouldAnimatePlaceholder, g]), C = $e(() => ({
    innerRef: E,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, O, E]), M = b ? b.dragging.draggableId : null, A = $e(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: M
  }), [s, M, l]);
  function T() {
    if (!b)
      return null;
    const {
      dragging: _,
      render: B
    } = b, Y = P.createElement(Xy, {
      draggableId: _.draggableId,
      index: _.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (K, R) => B(K, R, _));
    return po.createPortal(Y, y());
  }
  return P.createElement(ni.Provider, {
    value: A
  }, a(C, h), T());
};
var xE = EE;
function wE() {
  return document.body || (process.env.NODE_ENV !== "production" ? U(!1, "document.body is not ready") : U()), document.body;
}
const is = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: wE
}, Yl = (e) => {
  let t = {
    ...e
  }, r;
  for (r in is)
    e[r] === void 0 && (t = {
      ...t,
      [r]: is[r]
    });
  return t;
}, Sn = (e, t) => e === t.droppable.type, as = (e, t) => t.draggables[e.draggable.id], SE = () => {
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
  }, r = Le((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = Le((o, i, a, s, l, u) => {
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
    const a = Yl(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (ri(o)) {
      const c = o.critical;
      if (!Sn(l, c))
        return t;
      const d = as(c, o.dimensions), m = yr(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!Sn(l, c.critical))
        return t;
      const d = as(c.critical, o.dimensions);
      return n(s, u, Ul(c.result) === s, yr(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!Sn(l, c.critical))
        return t;
      const d = yr(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, DE = {
  updateViewportMaxScroll: my
};
_l(SE, DE, (e, t, r) => ({
  ...Yl(r),
  ...e,
  ...t
}), {
  context: Bl,
  areStatePropsEqual: jl
})(xE);
var ss;
(function(e) {
  e.event = "event", e.props = "prop";
})(ss || (ss = {}));
var cs = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + cs(), "" + cs();
function NE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var to = { exports: {} }, Dn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function OE() {
  if (ls) return Dn;
  ls = 1;
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
  return Dn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Dn;
}
var us = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ds;
function CE() {
  return ds || (ds = 1, process.env.NODE_ENV !== "production" && function() {
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
      var y = f[0].inst, x = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && x({ inst: y });
        },
        [m, b, h]
      ), s(
        function() {
          return r(y) && x({ inst: y }), m(function() {
            r(y) && x({ inst: y });
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
    us.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), us;
}
process.env.NODE_ENV === "production" ? to.exports = OE() : to.exports = CE();
var ai = to.exports, Nn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function IE() {
  if (ps) return Nn;
  ps = 1;
  var e = P, t = ai;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Nn.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(w) {
          if (!x) {
            if (x = !0, E = w, w = d(w), m !== void 0 && b.hasValue) {
              var O = b.value;
              if (m(O, w))
                return v = O;
            }
            return v = w;
          }
          if (O = v, n(E, w)) return O;
          var C = d(w);
          return m !== void 0 && m(O, C) ? (E = w, O) : (E = w, v = C);
        }
        var x = !1, E, v, g = c === void 0 ? null : c;
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
  }, Nn;
}
var fs = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function _E() {
  return ms || (ms = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = P, r = ai, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    fs.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(w) {
            if (!x) {
              if (x = !0, E = w, w = d(w), m !== void 0 && b.hasValue) {
                var O = b.value;
                if (m(O, w))
                  return v = O;
              }
              return v = w;
            }
            if (O = v, n(E, w))
              return O;
            var C = d(w);
            return m !== void 0 && m(O, C) ? (E = w, O) : (E = w, v = C);
          }
          var x = !1, E, v, g = c === void 0 ? null : c;
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
  }()), fs;
}
process.env.NODE_ENV === "production" ? IE() : _E();
function PE(e) {
  e();
}
let Kl = PE;
const AE = (e) => Kl = e, RE = () => Kl, gs = Symbol.for("react-redux-context"), bs = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function TE() {
  var e;
  if (!I.createContext) return {};
  const t = (e = bs[gs]) != null ? e : bs[gs] = /* @__PURE__ */ new Map();
  let r = t.get(I.createContext);
  return r || (r = I.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(I.createContext, r)), r;
}
const $E = /* @__PURE__ */ TE(), VE = () => {
  throw new Error("uSES not initialized!");
};
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, It.apply(null, arguments);
}
function Xl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var ro = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs;
function ME() {
  if (hs) return ce;
  hs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var w = g.$$typeof;
      switch (w) {
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
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function v(g) {
    return E(g) === u;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = u, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = p, ce.Fragment = n, ce.Lazy = h, ce.Memo = m, ce.Portal = r, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = c, ce.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, ce.isConcurrentMode = v, ce.isContextConsumer = function(g) {
    return E(g) === s;
  }, ce.isContextProvider = function(g) {
    return E(g) === a;
  }, ce.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ce.isForwardRef = function(g) {
    return E(g) === p;
  }, ce.isFragment = function(g) {
    return E(g) === n;
  }, ce.isLazy = function(g) {
    return E(g) === h;
  }, ce.isMemo = function(g) {
    return E(g) === m;
  }, ce.isPortal = function(g) {
    return E(g) === r;
  }, ce.isProfiler = function(g) {
    return E(g) === i;
  }, ce.isStrictMode = function(g) {
    return E(g) === o;
  }, ce.isSuspense = function(g) {
    return E(g) === c;
  }, ce.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === x || g.$$typeof === b);
  }, ce.typeOf = E, ce;
}
var pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function LE() {
  return vs || (vs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function E(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === u || D === i || D === o || D === c || D === d || typeof D == "object" && D !== null && (D.$$typeof === h || D.$$typeof === m || D.$$typeof === a || D.$$typeof === s || D.$$typeof === p || D.$$typeof === f || D.$$typeof === y || D.$$typeof === x || D.$$typeof === b);
    }
    function v(D) {
      if (typeof D == "object" && D !== null) {
        var we = D.$$typeof;
        switch (we) {
          case t:
            var N = D.type;
            switch (N) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return N;
              default:
                var Ce = N && N.$$typeof;
                switch (Ce) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return Ce;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var g = l, w = u, O = s, C = a, M = t, A = p, T = n, _ = h, B = m, Y = r, K = i, R = o, L = c, G = !1;
    function H(D) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(D) || v(D) === l;
    }
    function q(D) {
      return v(D) === u;
    }
    function F(D) {
      return v(D) === s;
    }
    function Z(D) {
      return v(D) === a;
    }
    function te(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function ve(D) {
      return v(D) === p;
    }
    function be(D) {
      return v(D) === n;
    }
    function De(D) {
      return v(D) === h;
    }
    function ge(D) {
      return v(D) === m;
    }
    function Ee(D) {
      return v(D) === r;
    }
    function J(D) {
      return v(D) === i;
    }
    function xe(D) {
      return v(D) === o;
    }
    function ke(D) {
      return v(D) === c;
    }
    pe.AsyncMode = g, pe.ConcurrentMode = w, pe.ContextConsumer = O, pe.ContextProvider = C, pe.Element = M, pe.ForwardRef = A, pe.Fragment = T, pe.Lazy = _, pe.Memo = B, pe.Portal = Y, pe.Profiler = K, pe.StrictMode = R, pe.Suspense = L, pe.isAsyncMode = H, pe.isConcurrentMode = q, pe.isContextConsumer = F, pe.isContextProvider = Z, pe.isElement = te, pe.isForwardRef = ve, pe.isFragment = be, pe.isLazy = De, pe.isMemo = ge, pe.isPortal = Ee, pe.isProfiler = J, pe.isStrictMode = xe, pe.isSuspense = ke, pe.isValidElementType = E, pe.typeOf = v;
  }()), pe;
}
process.env.NODE_ENV === "production" ? ro.exports = ME() : ro.exports = LE();
var BE = ro.exports, si = BE, FE = {
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
}, GE = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, kE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Jl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ci = {};
ci[si.ForwardRef] = kE;
ci[si.Memo] = Jl;
function ys(e) {
  return si.isMemo(e) ? Jl : ci[e.$$typeof] || FE;
}
var WE = Object.defineProperty, jE = Object.getOwnPropertyNames, Es = Object.getOwnPropertySymbols, UE = Object.getOwnPropertyDescriptor, zE = Object.getPrototypeOf, xs = Object.prototype;
function Zl(e, t, r) {
  if (typeof t != "string") {
    if (xs) {
      var n = zE(t);
      n && n !== xs && Zl(e, n, r);
    }
    var o = jE(t);
    Es && (o = o.concat(Es(t)));
    for (var i = ys(e), a = ys(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!GE[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = UE(t, l);
        try {
          WE(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var HE = Zl;
const ws = /* @__PURE__ */ NE(HE);
var no = { exports: {} }, le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function qE() {
  if (Ss) return le;
  Ss = 1;
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
  return le.ContextConsumer = a, le.ContextProvider = i, le.Element = e, le.ForwardRef = l, le.Fragment = r, le.Lazy = d, le.Memo = c, le.Portal = t, le.Profiler = o, le.StrictMode = n, le.Suspense = u, le.SuspenseList = p, le.isAsyncMode = function() {
    return !1;
  }, le.isConcurrentMode = function() {
    return !1;
  }, le.isContextConsumer = function(f) {
    return b(f) === a;
  }, le.isContextProvider = function(f) {
    return b(f) === i;
  }, le.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, le.isForwardRef = function(f) {
    return b(f) === l;
  }, le.isFragment = function(f) {
    return b(f) === r;
  }, le.isLazy = function(f) {
    return b(f) === d;
  }, le.isMemo = function(f) {
    return b(f) === c;
  }, le.isPortal = function(f) {
    return b(f) === t;
  }, le.isProfiler = function(f) {
    return b(f) === o;
  }, le.isStrictMode = function(f) {
    return b(f) === n;
  }, le.isSuspense = function(f) {
    return b(f) === u;
  }, le.isSuspenseList = function(f) {
    return b(f) === p;
  }, le.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, le.typeOf = b, le;
}
var fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function YE() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, x = !1, E;
    E = Symbol.for("react.module.reference");
    function v(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === o || x || N === n || N === u || N === p || y || N === m || h || b || f || typeof N == "object" && N !== null && (N.$$typeof === d || N.$$typeof === c || N.$$typeof === i || N.$$typeof === a || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === E || N.getModuleId !== void 0));
    }
    function g(N) {
      if (typeof N == "object" && N !== null) {
        var Ce = N.$$typeof;
        switch (Ce) {
          case e:
            var Fe = N.type;
            switch (Fe) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Fe;
              default:
                var $ = Fe && Fe.$$typeof;
                switch ($) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return $;
                  default:
                    return Ce;
                }
            }
          case t:
            return Ce;
        }
      }
    }
    var w = a, O = i, C = e, M = l, A = r, T = d, _ = c, B = t, Y = o, K = n, R = u, L = p, G = !1, H = !1;
    function q(N) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(N) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(N) {
      return g(N) === a;
    }
    function te(N) {
      return g(N) === i;
    }
    function ve(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function be(N) {
      return g(N) === l;
    }
    function De(N) {
      return g(N) === r;
    }
    function ge(N) {
      return g(N) === d;
    }
    function Ee(N) {
      return g(N) === c;
    }
    function J(N) {
      return g(N) === t;
    }
    function xe(N) {
      return g(N) === o;
    }
    function ke(N) {
      return g(N) === n;
    }
    function D(N) {
      return g(N) === u;
    }
    function we(N) {
      return g(N) === p;
    }
    fe.ContextConsumer = w, fe.ContextProvider = O, fe.Element = C, fe.ForwardRef = M, fe.Fragment = A, fe.Lazy = T, fe.Memo = _, fe.Portal = B, fe.Profiler = Y, fe.StrictMode = K, fe.Suspense = R, fe.SuspenseList = L, fe.isAsyncMode = q, fe.isConcurrentMode = F, fe.isContextConsumer = Z, fe.isContextProvider = te, fe.isElement = ve, fe.isForwardRef = be, fe.isFragment = De, fe.isLazy = ge, fe.isMemo = Ee, fe.isPortal = J, fe.isProfiler = xe, fe.isStrictMode = ke, fe.isSuspense = D, fe.isSuspenseList = we, fe.isValidElementType = v, fe.typeOf = g;
  }()), fe;
}
process.env.NODE_ENV === "production" ? no.exports = qE() : no.exports = YE();
var Ns = no.exports;
function li(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function On(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || li(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function KE(e, t, r) {
  On(e, "mapStateToProps"), On(t, "mapDispatchToProps"), On(r, "mergeProps");
}
const XE = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function JE(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function m(x, E) {
    return l = x, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const x = e(l, u), E = !a(x, p);
    return p = x, E && (d = r(p, c, u)), d;
  }
  function y(x, E) {
    const v = !i(E, u), g = !o(x, l, E, u);
    return l = x, u = E, v && g ? h() : v ? b() : g ? f() : d;
  }
  return function(x, E) {
    return s ? y(x, E) : m(x, E);
  };
}
function ZE(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Xl(t, XE);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && KE(a, s, l), JE(a, s, l, e, i);
}
function QE(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function ex(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Ql(e, t, r) {
  ex(e) || li(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function oo(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Os(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function eu(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = Os(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = Os(s), s = o(i, a)), process.env.NODE_ENV !== "production" && Ql(s, n, t), s;
    }, o;
  };
}
function ui(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function tx(e) {
  return e && typeof e == "object" ? oo((t) => (
    // @ts-ignore
    QE(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    eu(e, "mapDispatchToProps")
  ) : ui(e, "mapDispatchToProps") : oo((t) => ({
    dispatch: t
  }));
}
function rx(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    eu(e, "mapStateToProps")
  ) : ui(e, "mapStateToProps") : oo(() => ({}));
}
function nx(e, t, r) {
  return It({}, r, e, t);
}
function ox(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && Ql(i, r, "mergeProps")), i;
    };
  };
}
function ix(e) {
  return e ? typeof e == "function" ? ox(e) : ui(e, "mergeProps") : () => nx;
}
function ax() {
  const e = RE();
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
const Cs = {
  notify() {
  },
  get: () => []
};
function sx(e, t) {
  let r, n = Cs, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = ax());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Cs);
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
const cx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", io = cx ? I.useLayoutEffect : I.useEffect;
function Is(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Cn(e, t) {
  if (Is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Is(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const lx = ["reactReduxForwardedRef"];
let tu = VE;
const ux = (e) => {
  tu = e;
}, dx = [null, null], px = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function fx(e, t, r) {
  io(() => e(...t), r);
}
function mx(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function gx(e, t, r, n, o, i, a, s, l, u, p) {
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
function bx(e, t) {
  return e === t;
}
let _s = !1;
function ru(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = bx,
  areOwnPropsEqual: i = Cn,
  areStatePropsEqual: a = Cn,
  areMergedPropsEqual: s = Cn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = $E
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !_s && (_s = !0, li('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = rx(e), d = tx(t), m = ix(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Ns.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${px(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, x = {
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
      const [w, O, C] = I.useMemo(() => {
        const {
          reactReduxForwardedRef: J
        } = g, xe = Xl(g, lx);
        return [g.context, J, xe];
      }, [g]), M = I.useMemo(() => w && w.Consumer && // @ts-ignore
      Ns.isContextConsumer(/* @__PURE__ */ I.createElement(w.Consumer, null)) ? w : p, [w, p]), A = I.useContext(M), T = !!g.store && !!g.store.getState && !!g.store.dispatch, _ = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !T && !_)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const B = T ? g.store : A.store, Y = _ ? A.getServerState : B.getState, K = I.useMemo(() => ZE(B.dispatch, x), [B]), [R, L] = I.useMemo(() => {
        if (!h) return dx;
        const J = sx(B, T ? void 0 : A.subscription), xe = J.notifyNestedSubs.bind(J);
        return [J, xe];
      }, [B, T, A]), G = I.useMemo(() => T ? A : It({}, A, {
        subscription: R
      }), [T, A, R]), H = I.useRef(), q = I.useRef(C), F = I.useRef(), Z = I.useRef(!1);
      I.useRef(!1);
      const te = I.useRef(!1), ve = I.useRef();
      io(() => (te.current = !0, () => {
        te.current = !1;
      }), []);
      const be = I.useMemo(() => () => F.current && C === q.current ? F.current : K(B.getState(), C), [B, C]), De = I.useMemo(() => (J) => R ? gx(
        h,
        B,
        R,
        // @ts-ignore
        K,
        q,
        H,
        Z,
        te,
        F,
        L,
        J
      ) : () => {
      }, [R]);
      fx(mx, [q, H, Z, C, F, L]);
      let ge;
      try {
        ge = tu(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          De,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          be,
          Y ? () => K(Y(), C) : be
        );
      } catch (J) {
        throw ve.current && (J.message += `
The error may be correlated with this previous error:
${ve.current.stack}

`), J;
      }
      io(() => {
        ve.current = void 0, F.current = void 0, H.current = ge;
      });
      const Ee = I.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ I.createElement(b, It({}, ge, {
          ref: O
        }))
      ), [O, b, ge]);
      return I.useMemo(() => h ? /* @__PURE__ */ I.createElement(M.Provider, {
        value: G
      }, Ee) : Ee, [M, Ee, G]);
    }
    const v = I.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = I.forwardRef(function(w, O) {
        return /* @__PURE__ */ I.createElement(v, It({}, w, {
          reactReduxForwardedRef: O
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, ws(g, b);
    }
    return ws(v, b);
  };
}
ux(ai.useSyncExternalStore);
AE(fo);
function hx(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function nu(e, t) {
  var r = Re(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = W(!0), o = W(r), i = n.current || !!(t && o.current.inputs && hx(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return me(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function vx(e, t) {
  return nu(function() {
    return e;
  }, t);
}
var Ve = nu, _e = vx, yx = process.env.NODE_ENV === "production", In = "Invariant failed";
function Ps(e, t) {
  if (yx)
    throw new Error(In);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(In, ": ").concat(r) : In;
  throw new Error(n);
}
var Nt = function(e) {
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
}, ou = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, As = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, Ex = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, _n = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, di = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? _n : r, o = e.border, i = o === void 0 ? _n : o, a = e.padding, s = a === void 0 ? _n : a, l = Nt(ou(t, n)), u = Nt(As(t, i)), p = Nt(As(u, s));
  return {
    marginBox: l,
    borderBox: Nt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, Ke = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Ps(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Ps()), n;
}, xx = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, wx = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = Ex(r, t);
  return di({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, ao = function(e, t) {
  return t === void 0 && (t = xx()), wx(e, t);
}, iu = function(e, t) {
  var r = {
    top: Ke(t.marginTop),
    right: Ke(t.marginRight),
    bottom: Ke(t.marginBottom),
    left: Ke(t.marginLeft)
  }, n = {
    top: Ke(t.paddingTop),
    right: Ke(t.paddingRight),
    bottom: Ke(t.paddingBottom),
    left: Ke(t.paddingLeft)
  }, o = {
    top: Ke(t.borderTopWidth),
    right: Ke(t.borderRightWidth),
    bottom: Ke(t.borderBottomWidth),
    left: Ke(t.borderLeftWidth)
  };
  return di({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, au = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return iu(t, r);
}, Rs = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Sx(e, t) {
  return !!(e === t || Rs(e) && Rs(t));
}
function Dx(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Sx(e[r], t[r]))
      return !1;
  return !0;
}
function Be(e, t) {
  t === void 0 && (t = Dx);
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
var Nx = function(e) {
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
const Ox = process.env.NODE_ENV === "production", Cx = /[ \t]{2,}/g, Ix = /^[ \t]*/gm, Ts = (e) => e.replace(Cx, " ").replace(Ix, "").trim(), _x = (e) => Ts(`
  %c@hello-pangea/dnd

  %c${Ts(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Px = (e) => [_x(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Ax = "__@hello-pangea/dnd-disable-dev-warnings";
function su(e, t) {
  Ox || typeof window < "u" && window[Ax] || console[e](...Px(t));
}
const dt = su.bind(null, "warn"), so = su.bind(null, "error");
function Rx() {
}
function Tx(e, t) {
  return {
    ...e,
    ...t
  };
}
function $x(e, t, r) {
  const n = t.map((o) => {
    const i = Tx(r, o.options);
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
const Vx = process.env.NODE_ENV === "production", $s = "Invariant failed";
class or extends Error {
}
or.prototype.toString = function() {
  return this.message;
};
function z(e, t) {
  throw Vx ? new or($s) : new or(`${$s}: ${t || ""}`);
}
class PS extends P.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Rx, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && dt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof or && (r.preventDefault(), process.env.NODE_ENV !== "production" && so(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = $x(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof or) {
      process.env.NODE_ENV !== "production" && so(t.message), this.setState({});
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
const wt = {
  x: 0,
  y: 0
}, Mx = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Lx = (e, t) => e.x === t.x && e.y === t.y, Bx = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Fx = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var Gx = (e, t) => {
  const r = Nt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const kx = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Wx = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, jx = (e, t) => t ? kx(e, t.scroll.diff.displacement) : e, Ux = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, zx = (e, t) => t && t.shouldClipSubject ? Gx(t.pageMarginBox, e) : Nt(e);
var Hx = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = jx(e.marginBox, n), i = Ux(o, r, t), a = zx(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Be((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Be((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const qx = Be((e) => Object.values(e)), Yx = Be((e) => Object.values(e));
Be((e, t) => Yx(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function Kx(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Be((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const Xx = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Jx = {
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
Be(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: Fx(e.line, r)
  };
});
var xr = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Zx = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Qx = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), pi = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, ir = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, ew = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, gt = `${ew.outOfTheWay}s ${pi.outOfTheWay}`, wr = {
  fluid: `opacity ${gt}`,
  snap: `transform ${gt}, opacity ${gt}`,
  drop: (e) => {
    const t = `${e}s ${pi.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${gt}`,
  placeholder: `height ${gt}, width ${gt}, margin ${gt}`
}, Vs = (e) => Lx(e, wt) ? void 0 : `translate(${e.x}px, ${e.y}px)`, co = {
  moveTo: Vs,
  drop: (e, t) => {
    const r = Vs(e);
    if (r)
      return t ? `${r} scale(${ir.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var cu = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Mx({
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
}, tw = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? z(!1, "Cannot find document.documentElement") : z()), e;
}, rw = () => {
  const e = tw();
  return cu({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Be((e) => qx(e).filter((t) => !(!t.isEnabled || !t.frame)));
const lu = "data-rfd", Ms = (() => {
  const e = `${lu}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ls = {
  contextId: `${lu}-scroll-container-context-id`
}, nw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? $r : me;
var Ut = nw;
function ow(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var iw = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function uu(e) {
  return e instanceof iw(e).HTMLElement;
}
function aw(e, t) {
  const r = `[${Ms.contextId}="${e}"]`, n = ow(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && dt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Ms.draggableId) === t);
  return o ? uu(o) ? o : (process.env.NODE_ENV !== "production" && dt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && dt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var du = P.createContext(null), sw = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? z(!1, "Cannot find document.body") : z()), e;
};
let cw = 0;
const pu = {
  separator: "::"
};
function lw(e, t = pu) {
  return Ve(() => `${e}${t.separator}${cw++}`, [t.separator, e]);
}
function uw(e, t = pu) {
  const r = P.useId();
  return Ve(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var fu = "useId" in P ? uw : lw, fi = P.createContext(null);
function mu(e) {
  process.env.NODE_ENV !== "production" && e();
}
function mi(e, t) {
  mu(() => {
    me(() => {
      try {
        e();
      } catch (r) {
        so(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function dw(e) {
  const t = W(e);
  return me(() => {
    t.current = e;
  }), t;
}
function gi(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Bs = {
  dragging: 5e3,
  dropAnimating: 4500
}, pw = (e, t) => t ? wr.drop(t.duration) : e ? wr.snap : wr.fluid, fw = (e, t) => {
  if (e)
    return t ? ir.opacity.drop : ir.opacity.combining;
}, mw = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function gw(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = mw(e), s = !!o, l = s ? co.drop(r, i) : co.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: pw(a, o),
    transform: l,
    opacity: fw(i, s),
    zIndex: s ? Bs.dropAnimating : Bs.dragging,
    pointerEvents: "none"
  };
}
function bw(e) {
  return {
    transform: co.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function hw(e) {
  return e.type === "DRAGGING" ? gw(e) : bw(e);
}
function vw(e, t, r = wt) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = iu(o, n), a = ao(i, r), s = {
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
function yw(e) {
  const t = fu("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Ve(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = _e((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? z(!1, "Cannot get dimension when no ref is set") : z()), vw(r, h, m);
  }, [r, o]), p = Ve(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = W(p), d = W(!0);
  Ut(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Ut(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var bi = P.createContext(null);
function gu(e) {
  e && uu(e) || (process.env.NODE_ENV !== "production" ? z(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : z());
}
function Ew(e, t, r) {
  mi(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? z(!1, "Draggable requires a draggableId") : z(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? z(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : z(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? z(!1, `${n(o)} requires an integer index prop`) : z(!1)), e.mapped.type !== "DRAGGING" && (gu(r()), e.isEnabled && (aw(t, o) || (process.env.NODE_ENV !== "production" ? z(!1, `${n(o)} Unable to find drag handle`) : z(!1))));
  });
}
function xw(e) {
  mu(() => {
    const t = W(e);
    mi(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? z(!1, "Draggable isClone prop value changed during component life") : z(!1));
    }, [e]);
  });
}
function Tr(e) {
  const t = Rt(e);
  return t || (process.env.NODE_ENV !== "production" ? z(!1, "Could not find required context") : z()), t;
}
function ww(e) {
  e.preventDefault();
}
const Sw = (e) => {
  const t = W(null), r = _e((w = null) => {
    t.current = w;
  }, []), n = _e(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Tr(fi), {
    type: s,
    droppableId: l
  } = Tr(bi), u = Ve(() => ({
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
  if (Ew(e, o, n), xw(b), !b) {
    const w = Ve(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    yw(w);
  }
  const x = Ve(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: ww
  } : null, [o, i, c, d]), E = _e((w) => {
    f.type === "DRAGGING" && f.dropping && w.propertyName === "transform" && (P.version.startsWith("16") || P.version.startsWith("17") ? y() : Vr(y));
  }, [y, f]), v = Ve(() => {
    const w = hw(f), O = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: w,
        onTransitionEnd: O
      },
      dragHandleProps: x
    };
  }, [o, x, c, f, E, r]), g = Ve(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return P.createElement(P.Fragment, null, p(v, f.snapshot, g));
};
var Dw = Sw, bu = (e, t) => e === t, hu = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Nw = (e) => e.combine ? e.combine.draggableId : null, Ow = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Cw() {
  const e = Be((n, o) => ({
    x: n,
    y: o
  })), t = Be((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Be((n, o, i, a, s = null, l = null, u = null) => ({
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
    if (gi(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = xr(n.impact), l = Ow(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = hu(l), c = Nw(l), d = {
        duration: n.dropDuration,
        curve: pi.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? ir.opacity.drop : null,
        scale: c ? ir.scale.drop : null
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
function vu(e = null) {
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
const Iw = {
  mapped: {
    type: "SECONDARY",
    offset: wt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: vu(null)
  }
};
function _w() {
  const e = Be((i, a) => ({
    x: i,
    y: a
  })), t = Be(vu), r = Be((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(wt, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = Kx(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = Bx(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (gi(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const Pw = () => {
  const e = Cw(), t = _w();
  return (r, n) => e(r, n) || t(r, n) || Iw;
}, Aw = {
  dropAnimationFinished: Qx
}, Rw = ru(Pw, Aw, null, {
  context: du,
  areStatePropsEqual: bu
})(Dw);
var Tw = Rw;
function $w(e) {
  return Tr(bi).isUsingCloneFor === e.draggableId && !e.isClone ? null : P.createElement(Tw, e);
}
const hi = (e) => (t) => e === t, Vw = hi("scroll"), Mw = hi("auto"), Lw = hi("visible"), Fs = (e, t) => t(e.overflowX) || t(e.overflowY), Bw = (e, t) => t(e.overflowX) && t(e.overflowY), yu = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Fs(r, Vw) || Fs(r, Mw);
}, Fw = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = sw(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, z()), !yu(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Bw(n, Lw) || process.env.NODE_ENV !== "production" && dt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, vi = (e) => e == null ? null : e === document.body ? Fw() ? e : null : e === document.documentElement ? null : yu(e) ? e : vi(e.parentElement);
var Gw = (e) => {
  !e || !vi(e.parentElement) || process.env.NODE_ENV !== "production" && dt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, lo = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Eu = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Eu(e.parentElement) : !1;
var kw = (e) => {
  const t = vi(e), r = Eu(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Ww = ({
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
    } = s, m = cu({
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
          value: wt,
          displacement: wt
        }
      }
    };
  })(), u = o === "vertical" ? Xx : Jx, p = Hx({
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
const jw = (e, t) => {
  const r = au(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = ou({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return di({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Uw = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = jw(e, l), p = ao(u, n), c = (() => {
    if (!l)
      return null;
    const d = au(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: ao(d, n),
      scroll: lo(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return Ww({
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
const zw = {
  passive: !1
}, Hw = {
  passive: !0
};
var Gs = (e) => e.shouldPublishImmediately ? zw : Hw;
const br = (e) => e && e.env.closestScrollable || null;
function qw(e) {
  const t = W(null), r = Tr(fi), n = fu("droppable"), {
    registry: o,
    marshal: i
  } = r, a = dw(e), s = Ve(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = W(s), u = Ve(() => Be((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? z(!1, "Can only update scroll when dragging") : z());
    const w = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, w);
  }), [s.id, i]), p = _e(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? wt : lo(v.env.closestScrollable);
  }, []), c = _e(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = Ve(() => Nx(c), [c]), m = _e(() => {
    const v = t.current, g = br(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? z(!1, "Could not find scroll options while scrolling") : z()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = _e((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? z(!1, "Cannot collect a droppable while a drag is occurring") : z());
    const w = a.current, O = w.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? z(!1, "Cannot collect without a droppable ref") : z());
    const C = kw(O), M = {
      ref: O,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = M;
    const A = Uw({
      ref: O,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), T = C.closestScrollable;
    return T && (T.setAttribute(Ls.contextId, r.contextId), T.addEventListener("scroll", m, Gs(M.scrollOptions)), process.env.NODE_ENV !== "production" && Gw(T)), A;
  }, [r.contextId, s, m, a]), b = _e(() => {
    const v = t.current, g = br(v);
    return v && g || (process.env.NODE_ENV !== "production" ? z(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : z()), lo(g);
  }, []), f = _e(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? z(!1, "Cannot stop drag when no active drag") : z());
    const g = br(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(Ls.contextId), g.removeEventListener("scroll", m, Gs(v.scrollOptions)));
  }, [m, d]), y = _e((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? z(!1, "Cannot scroll when there is no drag") : z());
    const w = br(g);
    w || (process.env.NODE_ENV !== "production" ? z(!1, "Cannot scroll a droppable with no closest scrollable") : z()), w.scrollTop += v.y, w.scrollLeft += v.x;
  }, []), x = Ve(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = Ve(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  Ut(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && dt("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [x, s, f, E, i, o.droppable]), Ut(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ut(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Pn() {
}
const Yw = {
  width: 0,
  height: 0,
  margin: Wx
}, Kw = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Yw : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Xw = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = Kw({
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
    transition: r !== "none" ? wr.placeholder : null
  };
}, Jw = (e) => {
  const t = W(null), r = _e(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Re(e.animate === "open");
  me(() => s ? n !== "open" ? (r(), l(!1), Pn) : t.current ? Pn : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Pn, [n, s, r]);
  const u = _e((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = Xw({
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
var Zw = P.memo(Jw);
function An(e) {
  return typeof e == "boolean";
}
function Rn(e, t) {
  t.forEach((r) => r(e));
}
const Qw = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? z(!1, "A Droppable requires a droppableId prop") : z()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? z(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : z());
}, function({
  props: e
}) {
  An(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? z(!1, "isDropDisabled must be a boolean") : z()), An(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? z(!1, "isCombineEnabled must be a boolean") : z()), An(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? z(!1, "ignoreContainerClipping must be a boolean") : z());
}, function({
  getDroppableRef: e
}) {
  gu(e());
}], eS = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && dt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], tS = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? z(!1, "Must provide a clone render function (renderClone) for virtual lists") : z());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? z(!1, "Expected virtual list to not have a placeholder") : z());
}];
function rS(e) {
  mi(() => {
    Rn(e, Qw), e.props.mode === "standard" && Rn(e, eS), e.props.mode === "virtual" && Rn(e, tS);
  });
}
class nS extends P.PureComponent {
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
const oS = (e) => {
  const t = Rt(fi);
  t || (process.env.NODE_ENV !== "production" ? z(!1, "Could not find app context") : z());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = W(null), i = W(null), {
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
  } = e, x = _e(() => o.current, []), E = _e((_ = null) => {
    o.current = _;
  }, []), v = _e(() => i.current, []), g = _e((_ = null) => {
    i.current = _;
  }, []);
  rS({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: v
  });
  const w = _e(() => {
    n() && f({
      maxScroll: rw()
    });
  }, [n, f]);
  qw({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: x
  });
  const O = Ve(() => P.createElement(nS, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: _,
    data: B,
    animate: Y
  }) => P.createElement(Zw, {
    placeholder: B,
    onClose: _,
    innerRef: g,
    animate: Y,
    contextId: r,
    onTransitionEnd: w
  })), [r, w, e.placeholder, e.shouldAnimatePlaceholder, g]), C = Ve(() => ({
    innerRef: E,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, O, E]), M = b ? b.dragging.draggableId : null, A = Ve(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: M
  }), [s, M, l]);
  function T() {
    if (!b)
      return null;
    const {
      dragging: _,
      render: B
    } = b, Y = P.createElement($w, {
      draggableId: _.draggableId,
      index: _.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (K, R) => B(K, R, _));
    return po.createPortal(Y, y());
  }
  return P.createElement(bi.Provider, {
    value: A
  }, a(C, h), T());
};
var iS = oS;
function aS() {
  return document.body || (process.env.NODE_ENV !== "production" ? z(!1, "document.body is not ready") : z()), document.body;
}
const ks = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: aS
}, xu = (e) => {
  let t = {
    ...e
  }, r;
  for (r in ks)
    e[r] === void 0 && (t = {
      ...t,
      [r]: ks[r]
    });
  return t;
}, Tn = (e, t) => e === t.droppable.type, Ws = (e, t) => t.draggables[e.draggable.id], sS = () => {
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
  }, r = Be((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = Be((o, i, a, s, l, u) => {
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
    const a = xu(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (gi(o)) {
      const c = o.critical;
      if (!Tn(l, c))
        return t;
      const d = Ws(c, o.dimensions), m = xr(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!Tn(l, c.critical))
        return t;
      const d = Ws(c.critical, o.dimensions);
      return n(s, u, hu(c.result) === s, xr(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!Tn(l, c.critical))
        return t;
      const d = xr(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, cS = {
  updateViewportMaxScroll: Zx
};
ru(sS, cS, (e, t, r) => ({
  ...xu(r),
  ...e,
  ...t
}), {
  context: du,
  areStatePropsEqual: bu
})(iS);
var uo = /* @__PURE__ */ new Map(), hr = /* @__PURE__ */ new WeakMap(), js = 0, lS = void 0;
function uS(e) {
  return e ? (hr.has(e) || (js += 1, hr.set(e, js.toString())), hr.get(e)) : "0";
}
function dS(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? uS(e.root) : e[t]}`).toString();
}
function pS(e) {
  const t = dS(e);
  let r = uo.get(t);
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
    }, uo.set(t, r);
  }
  return r;
}
function fS(e, t, r = {}, n = lS) {
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
  const { id: o, observer: i, elements: a } = pS(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), uo.delete(o));
  };
}
function mS({
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
  const [c, d] = I.useState(null), m = I.useRef(u), [h, b] = I.useState({
    inView: !!s,
    entry: void 0
  });
  m.current = u, I.useEffect(
    () => {
      if (a || !c) return;
      let E;
      return E = fS(
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
  const f = (p = h.entry) == null ? void 0 : p.target, y = I.useRef(void 0);
  !c && f && !i && !a && y.current !== f && (y.current = f, b({
    inView: !!s,
    entry: void 0
  }));
  const x = [d, h.inView, h.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const gS = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = Re(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return me(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ V(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ V(
        Bh,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, AS = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: l, data: u } = e, p = u == null ? void 0 : u.pages.flatMap((m) => m), { ref: c, inView: d } = mS();
  return me(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ Pe(Sr, { children: [
    o && /* @__PURE__ */ V(gS, { className: n }),
    /* @__PURE__ */ V(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(p != null && p.length) && p.map((m, h) => t(m, h))
      }
    ),
    /* @__PURE__ */ V(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: c,
        children: (s || l) && /* @__PURE__ */ V(Fh, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && /* @__PURE__ */ V("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, RS = () => {
  const e = W(null);
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
  yS as Button,
  ES as Checkbox,
  xS as Chips,
  mo as ErrorText,
  Dr as Icon,
  AS as InfinityScroll,
  wS as Input,
  SS as List,
  Us as Loader,
  DS as MultiSelectSearch,
  gS as ScrollTopButton,
  NS as Search,
  OS as Select,
  CS as Table,
  IS as Textarea,
  ec as Wrapper,
  ac as useDebounce,
  RS as useScroll
};
