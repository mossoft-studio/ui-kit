import { jsx as P, jsxs as he, Fragment as ln } from "react/jsx-runtime";
import * as G from "react";
import H, { useState as we, useEffect as de, useRef as j, useMemo as ut, useLayoutEffect as Mo, createContext as jt, useId as Lo, useContext as pe, useInsertionEffect as xc, useCallback as _o, Children as Cd, isValidElement as Pd, forwardRef as Nd, createElement as Ad, Fragment as Ec, Component as Td } from "react";
import Id, { flushSync as wc } from "react-dom";
const Od = ({ name: e, className: t, ...n }) => /* @__PURE__ */ P(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...n,
    children: /* @__PURE__ */ P(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), un = Od, Rd = ({ style: e, text: t }) => /* @__PURE__ */ he("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ P("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ P("span", { className: "text-base", children: t })
] }), Bo = Rd, Vd = ({
  children: e,
  onClick: t,
  className: n,
  loadType: r,
  isLoading: o,
  variant: s,
  icon: i,
  disabled: a,
  ...c
}) => {
  const [l, u] = we(""), d = () => {
    o && r === "1C" && (u("Отправляем запрос в 1С"), setTimeout(
      () => u(r === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  de(() => {
    r === "1C" && d();
  }, [o]);
  const f = [
    "flex items-center justify-center py-[14px] px-[6px] w-full h-fit rounded-[30px] md:rounded-[15px] text-base md:text-lg uppercase font-medium border border-transparent active:opacity-[0.6] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-[0.6]",
    n,
    s === "primary" && "text-white bg-primary",
    s === "secondary" && "text-primary bg-primary bg-opacity-10",
    s === "small-secondary" && "!normal-case !py-[6px] !text-sm text-primary bg-primary bg-opacity-20",
    s === "small-primary" && "!normal-case !py-[6px] !text-sm text-white bg-primary",
    s === "small-danger" && "!normal-case !py-[6px] !text-sm text-danger bg-danger bg-opacity-10",
    s === "danger" && "text-danger bg-danger bg-opacity-10",
    s === "link" && "text-primary !text-sm !py-0 !px-1 !normal-case !w-fit",
    s === "tab" && "bg-primary text-white text-sm md:!text-base !px-5 !py-2 !font-normal rounded-[30px] md:!rounded-[15px] !normal-case !w-fit"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ he(
    "button",
    {
      disabled: a || o,
      onClick: t,
      className: f,
      ...c,
      children: [
        o ? /* @__PURE__ */ P(Bo, { text: r === "1C" ? l : void 0 }) : e,
        i && !o && /* @__PURE__ */ P(
          un,
          {
            name: i,
            className: s.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, H0 = Vd, Md = ({ error: e }) => /* @__PURE__ */ P("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ P("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), $o = Md, Ld = ({
  onChange: e,
  title: t,
  secondaryTitle: n,
  labelClassName: r,
  className: o,
  titleClassName: s,
  error: i,
  checked: a,
  disabled: c
}) => /* @__PURE__ */ he(ln, { children: [
  /* @__PURE__ */ he(
    "label",
    {
      onClick: (l) => l.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${r}`,
      children: [
        /* @__PURE__ */ P(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${s}`,
            children: t
          }
        ),
        n && /* @__PURE__ */ P("span", { className: "text-center text-sm text-dark-gray font-normal", children: n }),
        /* @__PURE__ */ P(
          "input",
          {
            disabled: c,
            checked: a,
            onChange: (l) => e(l.target.checked),
            type: "checkbox",
            className: o
          }
        )
      ]
    }
  ),
  i && /* @__PURE__ */ P($o, { error: i })
] }), K0 = Ld, _d = ({ items: e, disable: t, color: n, style: r }) => /* @__PURE__ */ P("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ P(ln, { children: o.title ? /* @__PURE__ */ P(
  "div",
  {
    style: r,
    className: `${t ? "bg-dark-gray" : n || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ P(ln, {}) })) }), Y0 = _d;
function Fo(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
var dn;
(function(e) {
  e.event = "event", e.props = "prop";
})(dn || (dn = {}));
function Qe() {
}
function Bd(e) {
  var t, n = void 0;
  return function() {
    for (var r = [], o = arguments.length; o--; ) r[o] = arguments[o];
    return t && r.length === t.length && r.every(function(s, i) {
      return s === t[i];
    }) || (t = r, n = e.apply(void 0, r)), n;
  };
}
function St(e) {
  return !!(e || "").match(/\d/);
}
function wt(e) {
  return e == null;
}
function $d(e) {
  return typeof e == "number" && isNaN(e);
}
function Dc(e) {
  return wt(e) || $d(e) || typeof e == "number" && !isFinite(e);
}
function Sc(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Fd(e) {
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
function kd(e, t, n) {
  var r = Fd(n), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(r, "$1" + t);
}
function jd(e) {
  var t = j(e);
  t.current = e;
  var n = j(function() {
    for (var r = [], o = arguments.length; o--; ) r[o] = arguments[o];
    return t.current.apply(t, r);
  });
  return n.current;
}
function ko(e, t) {
  t === void 0 && (t = !0);
  var n = e[0] === "-", r = n && t;
  e = e.replace("-", "");
  var o = e.split("."), s = o[0], i = o[1] || "";
  return {
    beforeDecimal: s,
    afterDecimal: i,
    hasNegation: n,
    addNegation: r
  };
}
function Gd(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var n = e.split("."), r = n[0].replace(/^0+/, "") || "0", o = n[1] || "";
  return (t ? "-" : "") + r + (o ? "." + o : "");
}
function Cc(e, t, n) {
  for (var r = "", o = n ? "0" : "", s = 0; s <= t - 1; s++)
    r += e[s] || o;
  return r;
}
function Js(e, t) {
  return Array(t + 1).join(e);
}
function Pc(e) {
  var t = e + "", n = t[0] === "-" ? "-" : "";
  n && (t = t.substring(1));
  var r = t.split(/[eE]/g), o = r[0], s = r[1];
  if (s = Number(s), !s)
    return n + o;
  o = o.replace(".", "");
  var i = 1 + s, a = o.length;
  return i < 0 ? o = "0." + Js("0", Math.abs(i)) + o : i >= a ? o = o + Js("0", i - a) : o = (o.substring(0, i) || "0") + "." + o.substring(i), n + o;
}
function Qs(e, t, n) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var r = (e.indexOf(".") !== -1 || n) && t, o = ko(e), s = o.beforeDecimal, i = o.afterDecimal, a = o.hasNegation, c = parseFloat("0." + (i || "0")), l = i.length <= t ? "0." + i : c.toFixed(t), u = l.split("."), d = s;
  s && Number(u[0]) && (d = s.split("").reverse().reduce(function(g, h, v) {
    return g.length > v ? (Number(g[0]) + Number(h)).toString() + g.substring(1, g.length) : h + g;
  }, u[0]));
  var f = Cc(u[1] || "", t, n), p = a ? "-" : "", m = r ? "." : "";
  return "" + p + d + m + f;
}
function it(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var n = e.createTextRange();
      return n.move("character", t), n.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var Nc = Bd(function(e, t) {
  for (var n = 0, r = 0, o = e.length, s = t.length; e[n] === t[n] && n < o; )
    n++;
  for (; e[o - 1 - r] === t[s - 1 - r] && s - r > n && o - r > n; )
    r++;
  return {
    from: { start: n, end: o - r },
    to: { start: n, end: s - r }
  };
}), Ud = function(e, t) {
  var n = Math.min(e.selectionStart, t);
  return {
    from: { start: n, end: e.selectionEnd },
    to: { start: n, end: t }
  };
};
function Wd(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Pr(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function zd() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Ac(e) {
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
function Tc(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Hd(e) {
  var t = e.currentValue, n = e.formattedValue, r = e.currentValueIndex, o = e.formattedValueIndex;
  return t[r] === n[o];
}
function Kd(e, t, n, r, o, s, i) {
  i === void 0 && (i = Hd);
  var a = o.findIndex(function(w) {
    return w;
  }), c = e.slice(0, a);
  !t && !n.startsWith(c) && (t = c, n = c + n, r = r + c.length);
  for (var l = n.length, u = e.length, d = {}, f = new Array(l), p = 0; p < l; p++) {
    f[p] = -1;
    for (var m = 0, g = u; m < g; m++) {
      var h = i({
        currentValue: n,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: p,
        formattedValueIndex: m
      });
      if (h && d[m] !== !0) {
        f[p] = m, d[m] = !0;
        break;
      }
    }
  }
  for (var v = r; v < l && (f[v] === -1 || !s(n[v])); )
    v++;
  var x = v === l || f[v] === -1 ? u : f[v];
  for (v = r - 1; v > 0 && f[v] === -1; )
    v--;
  var E = v === -1 || f[v] === -1 ? 0 : f[v] + 1;
  return E > x ? x : r - E < x - r ? E : x;
}
function Qn(e, t, n, r) {
  var o = e.length;
  if (t = Wd(t, 0, o), r === "left") {
    for (; t >= 0 && !n[t]; )
      t--;
    t === -1 && (t = n.indexOf(!0));
  } else {
    for (; t <= o && !n[t]; )
      t++;
    t > o && (t = n.lastIndexOf(!0));
  }
  return t === -1 && (t = o), t;
}
function Yd(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), n = 0, r = t.length; n < r; n++)
    t[n] = !!(St(e[n]) || St(e[n - 1]));
  return t;
}
function Ic(e, t, n, r, o, s) {
  s === void 0 && (s = Qe);
  var i = jd(function(m, g) {
    var h, v;
    return Dc(m) ? (v = "", h = "") : typeof m == "number" || g ? (v = typeof m == "number" ? Pc(m) : m, h = r(v)) : (v = o(m, void 0), h = r(v)), { formattedValue: h, numAsString: v };
  }), a = we(function() {
    return i(wt(e) ? t : e, n);
  }), c = a[0], l = a[1], u = function(m, g) {
    m.formattedValue !== c.formattedValue && l({
      formattedValue: m.formattedValue,
      numAsString: m.value
    }), s(m, g);
  }, d = e, f = n;
  wt(e) && (d = c.numAsString, f = !0);
  var p = i(d, f);
  return ut(function() {
    l(p);
  }, [p.formattedValue]), [c, u];
}
function qd(e) {
  return e.replace(/[^0-9]/g, "");
}
function Xd(e) {
  return e;
}
function Oc(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var n = e.displayType;
  n === void 0 && (n = "input");
  var r = e.customInput, o = e.renderText, s = e.getInputRef, i = e.format;
  i === void 0 && (i = Xd);
  var a = e.removeFormatting;
  a === void 0 && (a = qd);
  var c = e.defaultValue, l = e.valueIsNumericString, u = e.onValueChange, d = e.isAllowed, f = e.onChange;
  f === void 0 && (f = Qe);
  var p = e.onKeyDown;
  p === void 0 && (p = Qe);
  var m = e.onMouseUp;
  m === void 0 && (m = Qe);
  var g = e.onFocus;
  g === void 0 && (g = Qe);
  var h = e.onBlur;
  h === void 0 && (h = Qe);
  var v = e.value, x = e.getCaretBoundary;
  x === void 0 && (x = Yd);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = St);
  var w = e.isCharacterSame, y = Fo(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), D = Ic(v, c, !!l, i, a, u), C = D[0], S = C.formattedValue, L = C.numAsString, O = D[1], F = j(), I = j({ formattedValue: S, numAsString: L }), Q = function(T, M) {
    I.current = { formattedValue: T.formattedValue, numAsString: T.value }, O(T, M);
  }, re = we(!1), ie = re[0], _ = re[1], A = j(null), B = j({
    setCaretTimeout: null,
    focusTimeout: null
  });
  de(function() {
    return _(!0), function() {
      clearTimeout(B.current.setCaretTimeout), clearTimeout(B.current.focusTimeout);
    };
  }, []);
  var z = i, Y = function(T, M) {
    var W = parseFloat(M);
    return {
      formattedValue: T,
      value: M,
      floatValue: isNaN(W) ? void 0 : W
    };
  }, U = function(T, M, W) {
    T.selectionStart === 0 && T.selectionEnd === T.value.length || (it(T, M), B.current.setCaretTimeout = setTimeout(function() {
      T.value === W && T.selectionStart !== M && it(T, M);
    }, 0));
  }, oe = function(T, M, W) {
    return Qn(T, M, x(T), W);
  }, be = function(T, M, W) {
    var ae = x(M), Ce = Kd(M, S, T, W, ae, E, w);
    return Ce = Qn(M, Ce, ae), Ce;
  }, je = function(T) {
    var M = T.formattedValue;
    M === void 0 && (M = "");
    var W = T.input, ae = T.source, Ce = T.event, ce = T.numAsString, ee;
    if (W) {
      var Ze = T.inputValue || W.value, tt = Pr(W);
      W.value = M, ee = be(Ze, M, tt), ee !== void 0 && U(W, ee, M);
    }
    M !== S && Q(Y(M, ce), { event: Ce, source: ae });
  };
  de(function() {
    var T = I.current, M = T.formattedValue, W = T.numAsString;
    (S !== M || L !== W) && Q(Y(S, L), {
      event: void 0,
      source: dn.props
    });
  }, [S, L]);
  var Ne = A.current ? Pr(A.current) : void 0, Re = typeof window < "u" ? Mo : de;
  Re(function() {
    var T = A.current;
    if (S !== I.current.formattedValue && T) {
      var M = be(I.current.formattedValue, S, Ne);
      T.value = S, U(T, M, S);
    }
  }, [S]);
  var Ge = function(T, M, W) {
    var ae = M.target, Ce = F.current ? Ud(F.current, ae.selectionEnd) : Nc(S, T), ce = Object.assign(Object.assign({}, Ce), { lastValue: S }), ee = a(T, ce), Ze = z(ee);
    if (ee = a(Ze, void 0), d && !d(Y(Ze, ee))) {
      var tt = M.target, nt = Pr(tt), Cr = be(T, S, nt);
      return tt.value = S, U(tt, Cr, S), !1;
    }
    return je({
      formattedValue: Ze,
      numAsString: ee,
      inputValue: T,
      event: M,
      source: W,
      input: M.target
    }), !0;
  }, Ye = function(T, M) {
    M === void 0 && (M = 0);
    var W = T.selectionStart, ae = T.selectionEnd;
    F.current = { selectionStart: W, selectionEnd: ae + M };
  }, Ue = function(T) {
    var M = T.target, W = M.value, ae = Ge(W, T, dn.event);
    ae && f(T), F.current = void 0;
  }, qe = function(T) {
    var M = T.target, W = T.key, ae = M.selectionStart, Ce = M.selectionEnd, ce = M.value;
    ce === void 0 && (ce = "");
    var ee;
    W === "ArrowLeft" || W === "Backspace" ? ee = Math.max(ae - 1, 0) : W === "ArrowRight" ? ee = Math.min(ae + 1, ce.length) : W === "Delete" && (ee = ae);
    var Ze = 0;
    W === "Delete" && ae === Ce && (Ze = 1);
    var tt = W === "ArrowLeft" || W === "ArrowRight";
    if (ee === void 0 || ae !== Ce && !tt) {
      p(T), Ye(M, Ze);
      return;
    }
    var nt = ee;
    if (tt) {
      var Cr = W === "ArrowLeft" ? "left" : "right";
      nt = oe(ce, ee, Cr), nt !== ee && T.preventDefault();
    } else W === "Delete" && !E(ce[ee]) ? nt = oe(ce, ee, "right") : W === "Backspace" && !E(ce[ee]) && (nt = oe(ce, ee, "left"));
    nt !== ee && U(M, nt, ce), p(T), Ye(M, Ze);
  }, At = function(T) {
    var M = T.target, W = function() {
      var ae = M.selectionStart, Ce = M.selectionEnd, ce = M.value;
      if (ce === void 0 && (ce = ""), ae === Ce) {
        var ee = oe(ce, ae);
        ee !== ae && U(M, ee, ce);
      }
    };
    W(), requestAnimationFrame(function() {
      W();
    }), m(T), Ye(M);
  }, N = function(T) {
    T.persist && T.persist();
    var M = T.target, W = T.currentTarget;
    A.current = M, B.current.focusTimeout = setTimeout(function() {
      var ae = M.selectionStart, Ce = M.selectionEnd, ce = M.value;
      ce === void 0 && (ce = "");
      var ee = oe(ce, ae);
      ee !== ae && !(ae === 0 && Ce === ce.length) && U(M, ee, ce), g(Object.assign(Object.assign({}, T), { currentTarget: W }));
    }, 0);
  }, Ae = function(T) {
    A.current = null, clearTimeout(B.current.focusTimeout), clearTimeout(B.current.setCaretTimeout), h(T);
  }, R = ie && zd() ? "numeric" : void 0, Xe = Object.assign({ inputMode: R }, y, {
    type: t,
    value: S,
    onChange: Ue,
    onKeyDown: qe,
    onMouseUp: At,
    onFocus: N,
    onBlur: Ae
  });
  if (n === "text")
    return o ? H.createElement(H.Fragment, null, o(S, y) || null) : H.createElement("span", Object.assign({}, y, { ref: s }), S);
  if (r) {
    var Tt = r;
    return H.createElement(Tt, Object.assign({}, Xe, { ref: s }));
  }
  return H.createElement("input", Object.assign({}, Xe, { ref: s }));
}
function ei(e, t) {
  var n = t.decimalScale, r = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var s = t.suffix;
  s === void 0 && (s = "");
  var i = t.allowNegative, a = t.thousandsGroupStyle;
  if (a === void 0 && (a = "thousand"), e === "" || e === "-")
    return e;
  var c = fr(t), l = c.thousandSeparator, u = c.decimalSeparator, d = n !== 0 && e.indexOf(".") !== -1 || n && r, f = ko(e, i), p = f.beforeDecimal, m = f.afterDecimal, g = f.addNegation;
  return n !== void 0 && (m = Cc(m, n, !!r)), l && (p = kd(p, l, a)), o && (p = o + p), s && (m = m + s), g && (p = "-" + p), e = p + (d && u || "") + m, e;
}
function fr(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var n = e.thousandSeparator, r = e.allowedDecimalSeparators;
  return n === !0 && (n = ","), r || (r = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: n,
    allowedDecimalSeparators: r
  };
}
function Zd(e, t) {
  e === void 0 && (e = "");
  var n = new RegExp("(-)"), r = new RegExp("(-)(.)*(-)"), o = n.test(e), s = r.test(e);
  return e = e.replace(/-/g, ""), o && !s && t && (e = "-" + e), e;
}
function Jd(e, t) {
  return new RegExp("(^-)|[0-9]|" + Sc(e), "g");
}
function Qd(e, t, n) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(n != null && n.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function ef(e, t, n) {
  var r;
  t === void 0 && (t = Ac(e));
  var o = n.allowNegative, s = n.prefix;
  s === void 0 && (s = "");
  var i = n.suffix;
  i === void 0 && (i = "");
  var a = n.decimalScale, c = t.from, l = t.to, u = l.start, d = l.end, f = fr(n), p = f.allowedDecimalSeparators, m = f.decimalSeparator, g = e[d] === m;
  if (St(e) && (e === s || e === i) && t.lastValue === "")
    return e;
  if (d - u === 1 && p.indexOf(e[u]) !== -1) {
    var h = a === 0 ? "" : m;
    e = e.substring(0, u) + h + e.substring(u + 1, e.length);
  }
  var v = function(A, B, z) {
    var Y = !1, U = !1;
    s.startsWith("-") ? Y = !1 : A.startsWith("--") ? (Y = !1, U = !0) : i.startsWith("-") && A.length === i.length ? Y = !1 : A[0] === "-" && (Y = !0);
    var oe = Y ? 1 : 0;
    return U && (oe = 2), oe && (A = A.substring(oe), B -= oe, z -= oe), { value: A, start: B, end: z, hasNegation: Y };
  }, x = v(e, u, d), E = x.hasNegation;
  r = x, e = r.value, u = r.start, d = r.end;
  var w = v(t.lastValue, c.start, c.end), y = w.start, D = w.end, C = w.value, S = e.substring(u, d);
  e.length && C.length && (y > C.length - i.length || D < s.length) && !(S && i.startsWith(S)) && (e = C);
  var L = 0;
  e.startsWith(s) ? L += s.length : u < s.length && (L = u), e = e.substring(L), d -= L;
  var O = e.length, F = e.length - i.length;
  e.endsWith(i) ? O = F : (d > F || d > e.length - i.length) && (O = d), e = e.substring(0, O), e = Zd(E ? "-" + e : e, o), e = (e.match(Jd(m)) || []).join("");
  var I = e.indexOf(m);
  e = e.replace(new RegExp(Sc(m), "g"), function(A, B) {
    return B === I ? "." : "";
  });
  var Q = ko(e, o), re = Q.beforeDecimal, ie = Q.afterDecimal, _ = Q.addNegation;
  return l.end - l.start < c.end - c.start && re === "" && g && !parseFloat(ie) && (e = _ ? "-" : ""), e;
}
function tf(e, t) {
  var n = t.prefix;
  n === void 0 && (n = "");
  var r = t.suffix;
  r === void 0 && (r = "");
  var o = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), s = e[0] === "-";
  o.fill(!1, 0, n.length + (s ? 1 : 0));
  var i = e.length;
  return o.fill(!1, i - r.length + 1, i + 1), o;
}
function nf(e) {
  var t = fr(e), n = t.thousandSeparator, r = t.decimalSeparator, o = e.prefix;
  o === void 0 && (o = "");
  var s = e.allowNegative;
  if (s === void 0 && (s = !0), n === r)
    throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + n + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + r + ` (default value for decimalSeparator is .)
     `);
  return o.startsWith("-") && s && (console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` + o + `
      allowNegative: ` + s + `
    `), s = !1), Object.assign(Object.assign({}, e), { allowNegative: s });
}
function rf(e) {
  e = nf(e);
  var t = e.suffix, n = e.allowNegative, r = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Qe);
  var s = e.onBlur;
  s === void 0 && (s = Qe);
  var i = e.thousandSeparator, a = e.decimalScale, c = e.fixedDecimalScale, l = e.prefix;
  l === void 0 && (l = "");
  var u = e.defaultValue, d = e.value, f = e.valueIsNumericString, p = e.onValueChange, m = Fo(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), g = fr(e), h = g.decimalSeparator, v = g.allowedDecimalSeparators, x = function(_) {
    return ei(_, e);
  }, E = function(_, A) {
    return ef(_, A, e);
  }, w = wt(d) ? u : d, y = f ?? Qd(w, l, t);
  wt(d) ? wt(u) || (y = y || typeof u == "number") : y = y || typeof d == "number";
  var D = function(_) {
    return Dc(_) ? _ : (typeof _ == "number" && (_ = Pc(_)), y && typeof a == "number" ? Qs(_, a, !!c) : _);
  }, C = Ic(D(d), D(u), !!y, x, E, p), S = C[0], L = S.numAsString, O = S.formattedValue, F = C[1], I = function(_) {
    var A = _.target, B = _.key, z = A.selectionStart, Y = A.selectionEnd, U = A.value;
    if (U === void 0 && (U = ""), (B === "Backspace" || B === "Delete") && Y < l.length) {
      _.preventDefault();
      return;
    }
    if (z !== Y) {
      o(_);
      return;
    }
    B === "Backspace" && U[0] === "-" && z === l.length + 1 && n && it(A, 1), a && c && (B === "Backspace" && U[z - 1] === h ? (it(A, z - 1), _.preventDefault()) : B === "Delete" && U[z] === h && _.preventDefault()), v != null && v.includes(B) && U[z] === h && it(A, z + 1);
    var oe = i === !0 ? "," : i;
    B === "Backspace" && U[z - 1] === oe && it(A, z - 1), B === "Delete" && U[z] === oe && it(A, z + 1), o(_);
  }, Q = function(_) {
    var A = L;
    if (A.match(/\d/g) || (A = ""), r || (A = Gd(A)), c && a && (A = Qs(A, a, c)), A !== L) {
      var B = ei(A, e);
      F({
        formattedValue: B,
        value: A,
        floatValue: parseFloat(A)
      }, {
        event: _,
        source: dn.event
      });
    }
    s(_);
  }, re = function(_) {
    return _ === h ? !0 : St(_);
  }, ie = function(_) {
    var A = _.currentValue, B = _.lastValue, z = _.formattedValue, Y = _.currentValueIndex, U = _.formattedValueIndex, oe = A[Y], be = z[U], je = Nc(B, A), Ne = je.to, Re = function(Ge) {
      return E(Ge).indexOf(".") + l.length;
    };
    return d === 0 && c && a && A[Ne.start] === h && Re(A) < Y && Re(z) > U ? !1 : Y >= Ne.start && Y < Ne.end && v && v.includes(oe) && be === h ? !0 : oe === be;
  };
  return Object.assign(Object.assign({}, m), {
    value: O,
    valueIsNumericString: !1,
    isValidInputCharacter: re,
    isCharacterSame: ie,
    onValueChange: F,
    format: x,
    removeFormatting: E,
    getCaretBoundary: function(_) {
      return tf(_, e);
    },
    onKeyDown: I,
    onBlur: Q
  });
}
function of(e) {
  var t = rf(e);
  return H.createElement(Oc, Object.assign({}, t));
}
function sf(e, t) {
  var n = t.format, r = t.allowEmptyFormatting, o = t.mask, s = t.patternChar;
  if (s === void 0 && (s = "#"), e === "" && !r)
    return "";
  for (var i = 0, a = n.split(""), c = 0, l = n.length; c < l; c++)
    n[c] === s && (a[c] = e[i] || Tc(o, i), i += 1);
  return a.join("");
}
function af(e, t, n) {
  t === void 0 && (t = Ac(e));
  var r = n.format, o = n.patternChar;
  o === void 0 && (o = "#");
  var s = t.from, i = t.to, a = t.lastValue;
  a === void 0 && (a = "");
  var c = function(h) {
    return r[h] === o;
  }, l = function(h, v) {
    for (var x = "", E = 0; E < h.length; E++)
      c(v + E) && St(h[E]) && (x += h[E]);
    return x;
  }, u = function(h) {
    return h.replace(/[^0-9]/g, "");
  };
  if (!r.match(/\d/))
    return u(e);
  if ((a === "" || s.end - s.start === a.length) && e.length === r.length) {
    for (var d = "", f = 0; f < e.length; f++)
      if (c(f))
        St(e[f]) && (d += e[f]);
      else if (e[f] !== r[f])
        return u(e);
    return d;
  }
  var p = a.substring(0, s.start), m = e.substring(i.start, i.end), g = a.substring(s.end);
  return "" + l(p, 0) + u(m) + l(g, s.end);
}
function cf(e, t) {
  var n = t.format, r = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var s = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), i = 0, a = -1, c = {};
  n.split("").forEach(function(f, p) {
    var m = void 0;
    f === o && (i++, m = Tc(r, i - 1), a === -1 && e[p] === m && (a = p)), c[p] = m;
  });
  for (var l = function(f) {
    return n[f] === o && e[f] !== c[f];
  }, u = 0, d = s.length; u < d; u++)
    s[u] = u === a || l(u) || l(u - 1);
  return s[n.indexOf(o)] = !0, s;
}
function lf(e) {
  var t = e.mask;
  if (t) {
    var n = t === "string" ? t : t.toString();
    if (n.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function uf(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function df(e) {
  var t = e.format, n = e.inputMode;
  n === void 0 && (n = "numeric");
  var r = e.onKeyDown;
  r === void 0 && (r = Qe);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var s = e.value, i = e.defaultValue, a = e.valueIsNumericString, c = Fo(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  lf(e);
  var l = function(m) {
    return cf(m, e);
  }, u = function(m) {
    var g = m.key, h = m.target, v = h.selectionStart, x = h.selectionEnd, E = h.value;
    if (v !== x) {
      r(m);
      return;
    }
    var w = v;
    if (g === "Backspace" || g === "Delete") {
      var y = "right";
      if (g === "Backspace") {
        for (; w > 0 && t[w - 1] !== o; )
          w--;
        y = "left";
      } else {
        for (var D = t.length; w < D && t[w] !== o; )
          w++;
        y = "right";
      }
      w = Qn(E, w, l(E), y);
    } else t[w] !== o && g !== "ArrowLeft" && g !== "ArrowRight" && (w = Qn(E, w + 1, l(E), "right"));
    w !== v && it(h, w), r(m);
  }, d = wt(s) ? i : s, f = a ?? uf(d, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: f });
  return Object.assign(Object.assign({}, c), {
    value: s,
    defaultValue: i,
    valueIsNumericString: f,
    inputMode: n,
    format: function(m) {
      return sf(m, p);
    },
    removeFormatting: function(m, g) {
      return af(m, g, p);
    },
    getCaretBoundary: l,
    onKeyDown: u
  });
}
function ff(e) {
  var t = df(e);
  return H.createElement(Oc, Object.assign({}, t));
}
const jo = jt({});
function Go(e) {
  const t = j(null);
  return t.current === null && (t.current = e()), t.current;
}
const Uo = typeof window < "u", Rc = Uo ? Mo : de, pr = /* @__PURE__ */ jt(null), Wo = jt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class pf extends G.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, o = r instanceof HTMLElement && r.offsetWidth || 0, s = this.props.sizeRef.current;
      s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = o - s.width - s.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function hf({ children: e, isPresent: t, anchorX: n }) {
  const r = Lo(), o = j(null), s = j({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: i } = pe(Wo);
  return xc(() => {
    const { width: a, height: c, top: l, left: u, right: d } = s.current;
    if (t || !o.current || !a || !c)
      return;
    const f = n === "left" ? `left: ${u}` : `right: ${d}`;
    o.current.dataset.motionPopId = r;
    const p = document.createElement("style");
    return i && (p.nonce = i), document.head.appendChild(p), p.sheet && p.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${c}px !important;
            ${f}px !important;
            top: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(p);
    };
  }, [t]), P(pf, { isPresent: t, childRef: o, sizeRef: s, children: G.cloneElement(e, { ref: o }) });
}
const mf = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i, anchorX: a }) => {
  const c = Go(gf), l = Lo(), u = _o((f) => {
    c.set(f, !0);
    for (const p of c.values())
      if (!p)
        return;
    r && r();
  }, [c, r]), d = ut(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: u,
      register: (f) => (c.set(f, !1), () => c.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), u] : [n, u]
  );
  return ut(() => {
    c.forEach((f, p) => c.set(p, !1));
  }, [n]), G.useEffect(() => {
    !n && !c.size && r && r();
  }, [n]), i === "popLayout" && (e = P(hf, { isPresent: n, anchorX: a, children: e })), P(pr.Provider, { value: d, children: e });
};
function gf() {
  return /* @__PURE__ */ new Map();
}
function Vc(e = !0) {
  const t = pe(pr);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = Lo();
  de(() => {
    if (e)
      return o(s);
  }, [e]);
  const i = _o(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const jn = (e) => e.key || "";
function ti(e) {
  const t = [];
  return Cd.forEach(e, (n) => {
    Pd(n) && t.push(n);
  }), t;
}
const vf = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1, anchorX: a = "left" }) => {
  const [c, l] = Vc(i), u = ut(() => ti(e), [e]), d = i && !c ? [] : u.map(jn), f = j(!0), p = j(u), m = Go(() => /* @__PURE__ */ new Map()), [g, h] = we(u), [v, x] = we(u);
  Rc(() => {
    f.current = !1, p.current = u;
    for (let y = 0; y < v.length; y++) {
      const D = jn(v[y]);
      d.includes(D) ? m.delete(D) : m.get(D) !== !0 && m.set(D, !1);
    }
  }, [v, d.length, d.join("-")]);
  const E = [];
  if (u !== g) {
    let y = [...u];
    for (let D = 0; D < v.length; D++) {
      const C = v[D], S = jn(C);
      d.includes(S) || (y.splice(D, 0, C), E.push(C));
    }
    return s === "wait" && E.length && (y = E), x(ti(y)), h(u), null;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && v.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = pe(jo);
  return P(ln, { children: v.map((y) => {
    const D = jn(y), C = i && !c ? !1 : u === v || d.includes(D), S = () => {
      if (m.has(D))
        m.set(D, !0);
      else
        return;
      let L = !0;
      m.forEach((O) => {
        O || (L = !1);
      }), L && (w == null || w(), x(p.current), i && (l == null || l()), r && r());
    };
    return P(mf, { isPresent: C, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: s, onExitComplete: C ? void 0 : S, anchorX: a, children: y }, D);
  }) });
};
function zo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ho(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const yf = {
  skipAnimations: !1,
  useManualTiming: !1
};
// @__NO_SIDE_EFFECTS__
function Ko(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Be = /* @__NO_SIDE_EFFECTS__ */ (e) => e, fn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Yo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return zo(this.subscriptions, t), () => Ho(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const We = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ze = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Mc(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ni = /* @__PURE__ */ new Set();
function hr(e, t, n) {
  e || ni.has(t) || (console.warn(t), ni.add(t));
}
const bf = /* @__PURE__ */ Ko(() => window.ScrollTimeline !== void 0);
class xf {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => t.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) => {
      if (bf() && o.attachTimeline)
        return o.attachTimeline(t);
      if (typeof n == "function")
        return n(o);
    });
    return () => {
      r.forEach((o, s) => {
        o && o(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class Ef extends xf {
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
}
const ri = {
  value: null,
  addProjectionMetrics: null
}, qo = (e) => Array.isArray(e) && typeof e[0] == "number", wf = {};
function Df(e, t) {
  const n = /* @__PURE__ */ Ko(e);
  return () => wf[t] ?? n();
}
const pn = /* @__PURE__ */ Df(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Lc = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(s / (o - 1)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Qt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ro = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Qt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Qt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Qt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Qt([0.33, 1.53, 0.69, 0.99])
};
function _c(e, t) {
  if (e)
    return typeof e == "function" && pn() ? Lc(e, t) : qo(e) ? Qt(e) : Array.isArray(e) ? e.map((n) => _c(n, t) || ro.easeOut) : ro[e];
}
function Sf(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: c } = {}, l = void 0) {
  const u = {
    [t]: n
  };
  c && (u.offset = c);
  const d = _c(a, o);
  return Array.isArray(d) && (u.easing = d), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal",
    pseudoElement: l
  });
}
function Xo(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Zo(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const er = 2e4;
function Jo(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < er; )
    t += n, r = e.next(t);
  return t >= er ? 1 / 0 : t;
}
function Cf(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(Jo(r), er);
  return {
    type: "keyframes",
    ease: (s) => r.next(o * s).value / t,
    duration: /* @__PURE__ */ ze(o)
  };
}
function Bc(e) {
  return !!(typeof e == "function" && pn() || !e || typeof e == "string" && (e in ro || pn()) || qo(e) || Array.isArray(e) && e.every(Bc));
}
function oi(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Gn = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Pf(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = 0;
  function l(d) {
    i.has(d) && (u.schedule(d), e()), c++, d(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (d, f = !1, p = !1) => {
      const g = p && o ? n : r;
      return f && i.add(d), g.has(d) || g.add(d), d;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (d) => {
      r.delete(d), i.delete(d);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (d) => {
      if (a = d, o) {
        s = !0;
        return;
      }
      o = !0, [n, r] = [r, n], n.forEach(l), t && ri.value && ri.value.frameloop[t].push(c), c = 0, n.clear(), o = !1, s && (s = !1, u.process(d));
    }
  };
  return u;
}
const Nf = 40;
function $c(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = Gn.reduce((v, x) => (v[x] = Pf(s, t ? x : void 0), v), {}), { read: a, resolveKeyframes: c, update: l, preRender: u, render: d, postRender: f } = i, p = () => {
    const v = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(v - o.timestamp, Nf), 1), o.timestamp = v, o.isProcessing = !0, a.process(o), c.process(o), l.process(o), u.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(p));
  }, m = () => {
    n = !0, r = !0, o.isProcessing || e(p);
  };
  return { schedule: Gn.reduce((v, x) => {
    const E = i[x];
    return v[x] = (w, y = !1, D = !1) => (n || m(), E.schedule(w, y, D)), v;
  }, {}), cancel: (v) => {
    for (let x = 0; x < Gn.length; x++)
      i[Gn[x]].cancel(v);
  }, state: o, steps: i };
}
const { schedule: te, cancel: dt, state: ve, steps: Nr } = /* @__PURE__ */ $c(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0), { schedule: Qo, cancel: q0 } = /* @__PURE__ */ $c(queueMicrotask, !1);
let qn;
function Af() {
  qn = void 0;
}
const He = {
  now: () => (qn === void 0 && He.set(ve.isProcessing || yf.useManualTiming ? ve.timestamp : performance.now()), qn),
  set: (e) => {
    qn = e, queueMicrotask(Af);
  }
}, Fe = {
  x: !1,
  y: !1
};
function Fc() {
  return Fe.x || Fe.y;
}
function Tf(e) {
  return e === "x" || e === "y" ? Fe[e] ? null : (Fe[e] = !0, () => {
    Fe[e] = !1;
  }) : Fe.x || Fe.y ? null : (Fe.x = Fe.y = !0, () => {
    Fe.x = Fe.y = !1;
  });
}
function If(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    const o = document.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function kc(e, t) {
  const n = If(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function si(e) {
  return !(e.pointerType === "touch" || Fc());
}
function Of(e, t, n = {}) {
  const [r, o, s] = kc(e, n), i = (a) => {
    if (!si(a))
      return;
    const { target: c } = a, l = t(c, a);
    if (typeof l != "function" || !c)
      return;
    const u = (d) => {
      si(d) && (l(d), c.removeEventListener("pointerleave", u));
    };
    c.addEventListener("pointerleave", u, o);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const jc = (e, t) => t ? e === t ? !0 : jc(e, t.parentElement) : !1, es = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Rf = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Vf(e) {
  return Rf.has(e.tagName) || e.tabIndex !== -1;
}
const en = /* @__PURE__ */ new WeakSet();
function ii(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Ar(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Mf = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = ii(() => {
    if (en.has(n))
      return;
    Ar(n, "down");
    const o = ii(() => {
      Ar(n, "up");
    }), s = () => Ar(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function ai(e) {
  return es(e) && !Fc();
}
function Lf(e, t, n = {}) {
  const [r, o, s] = kc(e, n), i = (a) => {
    const c = a.currentTarget;
    if (!ai(a) || en.has(c))
      return;
    en.add(c);
    const l = t(c, a), u = (p, m) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!ai(p) || !en.has(c)) && (en.delete(c), typeof l == "function" && l(p, { success: m }));
    }, d = (p) => {
      u(p, c === window || c === document || n.useGlobalTarget || jc(c, p.target));
    }, f = (p) => {
      u(p, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a instanceof HTMLElement && (a.addEventListener("focus", (l) => Mf(l, o)), !Vf(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), s;
}
const ci = 30, _f = (e) => !isNaN(parseFloat(e));
class Bf {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.version = "12.6.3", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      const s = He.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = He.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = _f(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && hr(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Yo());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), te.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = He.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ci)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ci);
    return Mc(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function hn(e, t) {
  return new Bf(e, t);
}
const Gc = jt({ strict: !1 }), li = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, _t = {};
for (const e in li)
  _t[e] = {
    isEnabled: (t) => li[e].some((n) => !!t[n])
  };
function $f(e) {
  for (const t in e)
    _t[t] = {
      ..._t[t],
      ...e[t]
    };
}
const Ff = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function tr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Ff.has(e);
}
let Uc = (e) => !tr(e);
function kf(e) {
  e && (Uc = (t) => t.startsWith("on") ? !tr(t) : e(t));
}
try {
  kf(require("@emotion/is-prop-valid").default);
} catch {
}
function jf(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Uc(o) || n === !0 && tr(o) || !t && !tr(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Gf(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && hr(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const mr = /* @__PURE__ */ jt({});
function gr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function mn(e) {
  return typeof e == "string" || Array.isArray(e);
}
const ts = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ns = ["initial", ...ts];
function vr(e) {
  return gr(e.animate) || ns.some((t) => mn(e[t]));
}
function Wc(e) {
  return !!(vr(e) || e.variants);
}
function Uf(e, t) {
  if (vr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || mn(n) ? n : void 0,
      animate: mn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Wf(e) {
  const { initial: t, animate: n } = Uf(e, pe(mr));
  return ut(() => ({ initial: t, animate: n }), [ui(t), ui(n)]);
}
function ui(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const zf = Symbol.for("motionComponentSymbol");
function It(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Hf(e, t, n) {
  return _o(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : It(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const rs = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Kf = "framerAppearId", zc = "data-" + rs(Kf), Hc = jt({});
function Yf(e, t, n, r, o) {
  var g, h;
  const { visualElement: s } = pe(mr), i = pe(Gc), a = pe(pr), c = pe(Wo).reducedMotion, l = j(null);
  r = r || i.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const u = l.current, d = pe(Hc);
  u && !u.projection && o && (u.type === "html" || u.type === "svg") && qf(l.current, n, o, d);
  const f = j(!1);
  xc(() => {
    u && f.current && u.update(n, a);
  });
  const p = n[zc], m = j(!!p && !((g = window.MotionHandoffIsComplete) != null && g.call(window, p)) && ((h = window.MotionHasOptimisedAnimation) == null ? void 0 : h.call(window, p)));
  return Rc(() => {
    u && (f.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), Qo.render(u.render), m.current && u.animationState && u.animationState.animateChanges());
  }), de(() => {
    u && (!m.current && u.animationState && u.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) == null || v.call(window, p);
    }), m.current = !1));
  }), u;
}
function qf(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: c, layoutRoot: l } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Kc(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && It(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    layoutScroll: c,
    layoutRoot: l
  });
}
function Kc(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Kc(e.parent);
}
function Xf({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && $f(e);
  function s(a, c) {
    let l;
    const u = {
      ...pe(Wo),
      ...a,
      layoutId: Zf(a)
    }, { isStatic: d } = u, f = Wf(a), p = r(a, d);
    if (!d && Uo) {
      Jf(u, e);
      const m = Qf(u);
      l = m.MeasureLayout, f.visualElement = Yf(o, p, u, t, m.ProjectionNode);
    }
    return he(mr.Provider, { value: f, children: [l && f.visualElement ? P(l, { visualElement: f.visualElement, ...u }) : null, n(o, a, Hf(p, f.visualElement, c), p, d, f.visualElement)] });
  }
  s.displayName = `motion.${typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`}`;
  const i = Nd(s);
  return i[zf] = o, i;
}
function Zf({ layoutId: e }) {
  const t = pe(jo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Jf(e, t) {
  const n = pe(Gc).strict;
  process.env.NODE_ENV;
}
function Qf(e) {
  const { drag: t, layout: n } = _t;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Yc = (e) => (t) => typeof t == "string" && t.startsWith(e), os = /* @__PURE__ */ Yc("--"), ep = /* @__PURE__ */ Yc("var(--"), ss = (e) => ep(e) ? tp.test(e.split("/*")[0].trim()) : !1, tp = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, gn = {};
function np(e) {
  for (const t in e)
    gn[t] = e[t], os(t) && (gn[t].isCSSVariable = !0);
}
const Gt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Pt = new Set(Gt);
function qc(e, { layout: t, layoutId: n }) {
  return Pt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!gn[e] || e === "opacity");
}
const Ee = (e) => !!(e && e.getVelocity), Xc = (e, t) => t && typeof e == "number" ? t.transform(e) : e, et = (e, t, n) => n > t ? t : n < e ? e : n, Ut = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, vn = {
  ...Ut,
  transform: (e) => et(0, 1, e)
}, Un = {
  ...Ut,
  default: 1
}, On = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), st = /* @__PURE__ */ On("deg"), Ke = /* @__PURE__ */ On("%"), $ = /* @__PURE__ */ On("px"), rp = /* @__PURE__ */ On("vh"), op = /* @__PURE__ */ On("vw"), di = {
  ...Ke,
  parse: (e) => Ke.parse(e) / 100,
  transform: (e) => Ke.transform(e * 100)
}, sp = {
  // Border props
  borderWidth: $,
  borderTopWidth: $,
  borderRightWidth: $,
  borderBottomWidth: $,
  borderLeftWidth: $,
  borderRadius: $,
  radius: $,
  borderTopLeftRadius: $,
  borderTopRightRadius: $,
  borderBottomRightRadius: $,
  borderBottomLeftRadius: $,
  // Positioning props
  width: $,
  maxWidth: $,
  height: $,
  maxHeight: $,
  top: $,
  right: $,
  bottom: $,
  left: $,
  // Spacing props
  padding: $,
  paddingTop: $,
  paddingRight: $,
  paddingBottom: $,
  paddingLeft: $,
  margin: $,
  marginTop: $,
  marginRight: $,
  marginBottom: $,
  marginLeft: $,
  // Misc
  backgroundPositionX: $,
  backgroundPositionY: $
}, ip = {
  rotate: st,
  rotateX: st,
  rotateY: st,
  rotateZ: st,
  scale: Un,
  scaleX: Un,
  scaleY: Un,
  scaleZ: Un,
  skew: st,
  skewX: st,
  skewY: st,
  distance: $,
  translateX: $,
  translateY: $,
  translateZ: $,
  x: $,
  y: $,
  z: $,
  perspective: $,
  transformPerspective: $,
  opacity: vn,
  originX: di,
  originY: di,
  originZ: $
}, fi = {
  ...Ut,
  transform: Math.round
}, is = {
  ...sp,
  ...ip,
  zIndex: fi,
  size: $,
  // SVG
  fillOpacity: vn,
  strokeOpacity: vn,
  numOctaves: fi
}, ap = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, cp = Gt.length;
function lp(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < cp; s++) {
    const i = Gt[s], a = e[i];
    if (a === void 0)
      continue;
    let c = !0;
    if (typeof a == "number" ? c = a === (i.startsWith("scale") ? 1 : 0) : c = parseFloat(a) === 0, !c || n) {
      const l = Xc(a, is[i]);
      if (!c) {
        o = !1;
        const u = ap[i] || i;
        r += `${u}(${l}) `;
      }
      n && (t[i] = l);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function as(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const c in t) {
    const l = t[c];
    if (Pt.has(c)) {
      i = !0;
      continue;
    } else if (os(c)) {
      o[c] = l;
      continue;
    } else {
      const u = Xc(l, is[c]);
      c.startsWith("origin") ? (a = !0, s[c] = u) : r[c] = u;
    }
  }
  if (t.transform || (i || n ? r.transform = lp(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
const cs = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Zc(e, t, n) {
  for (const r in t)
    !Ee(t[r]) && !qc(r, n) && (e[r] = t[r]);
}
function up({ transformTemplate: e }, t) {
  return ut(() => {
    const n = cs();
    return as(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function dp(e, t) {
  const n = e.style || {}, r = {};
  return Zc(r, n, e), Object.assign(r, up(e, t)), r;
}
function fp(e, t) {
  const n = {}, r = dp(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const pp = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ls(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(pp.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const hp = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, mp = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function gp(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? hp : mp;
  e[s.offset] = $.transform(-r);
  const i = $.transform(t), a = $.transform(n);
  e[s.array] = `${i} ${a}`;
}
function pi(e, t, n) {
  return typeof e == "string" ? e : $.transform(t + n * e);
}
function vp(e, t, n) {
  const r = pi(t, e.x, e.width), o = pi(n, e.y, e.height);
  return `${r} ${o}`;
}
function us(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: s,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, u, d) {
  if (as(e, l, d), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: p, dimensions: m } = e;
  f.transform && (m && (p.transform = f.transform), delete f.transform), m && (o !== void 0 || s !== void 0 || p.transform) && (p.transformOrigin = vp(m, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && gp(f, i, a, c, !1);
}
const Jc = () => ({
  ...cs(),
  attrs: {}
}), ds = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function yp(e, t, n, r) {
  const o = ut(() => {
    const s = Jc();
    return us(s, t, ds(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Zc(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function bp(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const c = (ls(n) ? yp : fp)(r, s, i, n), l = jf(r, typeof n == "string", e), u = n !== Ec ? { ...l, ...c, ref: o } : {}, { children: d } = r, f = ut(() => Ee(d) ? d.get() : d, [d]);
    return Ad(n, {
      ...u,
      children: f
    });
  };
}
function hi(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function fs(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = hi(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = hi(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const oo = (e) => Array.isArray(e), xp = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Ep = (e) => oo(e) ? e[e.length - 1] || 0 : e;
function Xn(e) {
  const t = Ee(e) ? e.get() : e;
  return xp(t) ? t.toValue() : t;
}
function wp({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: Dp(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const Qc = (e) => (t, n) => {
  const r = pe(mr), o = pe(pr), s = () => wp(e, t, r, o);
  return n ? s() : Go(s);
};
function Dp(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = Xn(s[f]);
  let { initial: i, animate: a } = e;
  const c = vr(e), l = Wc(e);
  t && l && !c && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? a : i;
  if (d && typeof d != "boolean" && !gr(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let p = 0; p < f.length; p++) {
      const m = fs(e, f[p]);
      if (m) {
        const { transitionEnd: g, transition: h, ...v } = m;
        for (const x in v) {
          let E = v[x];
          if (Array.isArray(E)) {
            const w = u ? E.length - 1 : 0;
            E = E[w];
          }
          E !== null && (o[x] = E);
        }
        for (const x in g)
          o[x] = g[x];
      }
    }
  }
  return o;
}
function ps(e, t, n) {
  var s;
  const { style: r } = e, o = {};
  for (const i in r)
    (Ee(r[i]) || t.style && Ee(t.style[i]) || qc(i, e) || ((s = n == null ? void 0 : n.getValue(i)) == null ? void 0 : s.liveStyle) !== void 0) && (o[i] = r[i]);
  return o;
}
const Sp = {
  useVisualState: Qc({
    scrapeMotionValuesFromProps: ps,
    createRenderState: cs
  })
};
function el(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
function tl(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const nl = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function rl(e, t, n, r) {
  tl(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(nl.has(o) ? o : rs(o), t.attrs[o]);
}
function ol(e, t, n) {
  const r = ps(e, t, n);
  for (const o in e)
    if (Ee(e[o]) || Ee(t[o])) {
      const s = Gt.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
const mi = ["x", "y", "width", "height", "cx", "cy", "r"], Cp = {
  useVisualState: Qc({
    scrapeMotionValuesFromProps: ol,
    createRenderState: Jc,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (Pt.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < mi.length; a++) {
          const c = mi[a];
          e[c] !== t[c] && (i = !0);
        }
      i && te.read(() => {
        el(n, r), te.render(() => {
          us(r, o, ds(n.tagName), e.transformTemplate), rl(n, r);
        });
      });
    }
  })
};
function Pp(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...ls(r) ? Cp : Sp,
      preloadedFeatures: e,
      useRender: bp(o),
      createVisualElement: t,
      Component: r
    };
    return Xf(i);
  };
}
function yn(e, t, n) {
  const r = e.getProps();
  return fs(r, t, n !== void 0 ? n : r.custom, e);
}
const sl = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Gt
]);
function Np(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, hn(n));
}
function Ap(e, t) {
  const n = yn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = Ep(s[i]);
    Np(e, i, a);
  }
}
function Tp(e) {
  return !!(Ee(e) && e.add);
}
function so(e, t) {
  const n = e.getValue("willChange");
  if (Tp(n))
    return n.add(t);
}
function il(e) {
  return e.props[zc];
}
const al = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ip = 1e-7, Op = 12;
function Rp(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = al(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > Ip && ++a < Op);
  return i;
}
function Rn(e, t, n, r) {
  if (e === t && n === r)
    return Be;
  const o = (s) => Rp(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : al(o(s), t, r);
}
const cl = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ll = (e) => (t) => 1 - e(1 - t), ul = /* @__PURE__ */ Rn(0.33, 1.53, 0.69, 0.99), hs = /* @__PURE__ */ ll(ul), dl = /* @__PURE__ */ cl(hs), fl = (e) => (e *= 2) < 1 ? 0.5 * hs(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), ms = (e) => 1 - Math.sin(Math.acos(e)), pl = ll(ms), hl = cl(ms), ml = (e) => /^0[^.\s]+$/u.test(e);
function Vp(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ml(e) : !0;
}
const tn = (e) => Math.round(e * 1e5) / 1e5, gs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Mp(e) {
  return e == null;
}
const Lp = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, vs = (e, t) => (n) => !!(typeof n == "string" && Lp.test(n) && n.startsWith(e) || t && !Mp(n) && Object.prototype.hasOwnProperty.call(n, t)), gl = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(gs);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, _p = (e) => et(0, 255, e), Tr = {
  ...Ut,
  transform: (e) => Math.round(_p(e))
}, xt = {
  test: /* @__PURE__ */ vs("rgb", "red"),
  parse: /* @__PURE__ */ gl("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Tr.transform(e) + ", " + Tr.transform(t) + ", " + Tr.transform(n) + ", " + tn(vn.transform(r)) + ")"
};
function Bp(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const io = {
  test: /* @__PURE__ */ vs("#"),
  parse: Bp,
  transform: xt.transform
}, Ot = {
  test: /* @__PURE__ */ vs("hsl", "hue"),
  parse: /* @__PURE__ */ gl("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ke.transform(tn(t)) + ", " + Ke.transform(tn(n)) + ", " + tn(vn.transform(r)) + ")"
}, xe = {
  test: (e) => xt.test(e) || io.test(e) || Ot.test(e),
  parse: (e) => xt.test(e) ? xt.parse(e) : Ot.test(e) ? Ot.parse(e) : io.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? xt.transform(e) : Ot.transform(e)
}, $p = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Fp(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(gs)) == null ? void 0 : t.length) || 0) + (((n = e.match($p)) == null ? void 0 : n.length) || 0) > 0;
}
const vl = "number", yl = "color", kp = "var", jp = "var(", gi = "${}", Gp = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(Gp, (c) => (xe.test(c) ? (r.color.push(s), o.push(yl), n.push(xe.parse(c))) : c.startsWith(jp) ? (r.var.push(s), o.push(kp), n.push(c)) : (r.number.push(s), o.push(vl), n.push(parseFloat(c))), ++s, gi)).split(gi);
  return { values: n, split: a, indexes: r, types: o };
}
function bl(e) {
  return bn(e).values;
}
function xl(e) {
  const { split: t, types: n } = bn(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === vl ? s += tn(o[i]) : a === yl ? s += xe.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const Up = (e) => typeof e == "number" ? 0 : e;
function Wp(e) {
  const t = bl(e);
  return xl(e)(t.map(Up));
}
const ft = {
  test: Fp,
  parse: bl,
  createTransformer: xl,
  getAnimatableNone: Wp
}, zp = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Hp(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(gs) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = zp.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const Kp = /\b([a-z-]*)\(.*?\)/gu, ao = {
  ...ft,
  getAnimatableNone: (e) => {
    const t = e.match(Kp);
    return t ? t.map(Hp).join(" ") : e;
  }
}, Yp = {
  ...is,
  // Color props
  color: xe,
  backgroundColor: xe,
  outlineColor: xe,
  fill: xe,
  stroke: xe,
  // Border props
  borderColor: xe,
  borderTopColor: xe,
  borderRightColor: xe,
  borderBottomColor: xe,
  borderLeftColor: xe,
  filter: ao,
  WebkitFilter: ao
}, El = (e) => Yp[e];
function wl(e, t) {
  let n = El(e);
  return n !== ao && (n = ft), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const qp = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Xp(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !qp.has(s) && bn(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = wl(n, o);
}
const Et = (e) => e * 180 / Math.PI, co = (e) => {
  const t = Et(Math.atan2(e[1], e[0]));
  return lo(t);
}, Zp = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: co,
  rotateZ: co,
  skewX: (e) => Et(Math.atan(e[1])),
  skewY: (e) => Et(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, lo = (e) => (e = e % 360, e < 0 && (e += 360), e), vi = co, yi = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), bi = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Jp = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: yi,
  scaleY: bi,
  scale: (e) => (yi(e) + bi(e)) / 2,
  rotateX: (e) => lo(Et(Math.atan2(e[6], e[5]))),
  rotateY: (e) => lo(Et(Math.atan2(-e[2], e[0]))),
  rotateZ: vi,
  rotate: vi,
  skewX: (e) => Et(Math.atan(e[4])),
  skewY: (e) => Et(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function xi(e) {
  return e.includes("scale") ? 1 : 0;
}
function uo(e, t) {
  if (!e || e === "none")
    return xi(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = Jp, o = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = Zp, o = a;
  }
  if (!o)
    return xi(t);
  const s = r[t], i = o[1].split(",").map(eh);
  return typeof s == "function" ? s(i) : i[s];
}
const Qp = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return uo(n, t);
};
function eh(e) {
  return parseFloat(e.trim());
}
const Ei = (e) => e === Ut || e === $, th = /* @__PURE__ */ new Set(["x", "y", "z"]), nh = Gt.filter((e) => !th.has(e));
function rh(e) {
  const t = [];
  return nh.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Bt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => uo(t, "x"),
  y: (e, { transform: t }) => uo(t, "y")
};
Bt.translateX = Bt.x;
Bt.translateY = Bt.y;
const Dt = /* @__PURE__ */ new Set();
let fo = !1, po = !1;
function Dl() {
  if (po) {
    const e = Array.from(Dt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = rh(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([s, i]) => {
        var a;
        (a = r.getValue(s)) == null || a.set(i);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  po = !1, fo = !1, Dt.forEach((e) => e.complete()), Dt.clear();
}
function Sl() {
  Dt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (po = !0);
  });
}
function oh() {
  Sl(), Dl();
}
class ys {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Dt.add(this), fo || (fo = !0, te.read(Sl), te.resolveKeyframes(Dl))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const i = o == null ? void 0 : o.get(), a = t[t.length - 1];
          if (i !== void 0)
            t[0] = i;
          else if (r && n) {
            const c = r.readValue(n, a);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = a), o && i === void 0 && o.set(t[0]);
        } else
          t[s] = t[s - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Dt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Dt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Cl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), sh = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function ih(e) {
  const t = sh.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Pl(e, t, n = 1) {
  const [r, o] = ih(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Cl(i) ? parseFloat(i) : i;
  }
  return ss(o) ? Pl(o, t, n + 1) : o;
}
const Nl = (e) => (t) => t.test(e), ah = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Al = [Ut, $, Ke, st, op, rp, ah], wi = (e) => Al.find(Nl(e));
class Tl extends ys {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let l = t[c];
      if (typeof l == "string" && (l = l.trim(), ss(l))) {
        const u = Pl(l, n.current);
        u !== void 0 && (t[c] = u), c === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !sl.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = wi(o), a = wi(s);
    if (i !== a)
      if (Ei(i) && Ei(a))
        for (let c = 0; c < t.length; c++) {
          const l = t[c];
          typeof l == "string" && (t[c] = parseFloat(l));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      Vp(t[o]) && r.push(o);
    r.length && Xp(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Bt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const o = t.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const s = r.length - 1, i = r[s];
    r[s] = Bt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([c, l]) => {
      t.getValue(c).set(l);
    }), this.resolveNoneKeyframes();
  }
}
const Di = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(ft.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function ch(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function lh(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = Di(o, t), a = Di(s, t);
  return !i || !a ? !1 : ch(e) || (n === "spring" || Xo(n)) && r;
}
const uh = (e) => e !== null;
function yr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(uh), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const dh = 40;
class Il {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = He.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: s,
      repeatType: i,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > dh ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && oh(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = He.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: c, isGenerator: l } = this.options;
    if (!l && !lh(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        c && c(yr(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const le = (e, t, n) => e + (t - e) * n;
function Ir(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function fh({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - a;
    o = Ir(c, a, e + 1 / 3), s = Ir(c, a, e), i = Ir(c, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function nr(e, t) {
  return (n) => n > 0 ? t : e;
}
const Or = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, ph = [io, xt, Ot], hh = (e) => ph.find((t) => t.test(e));
function Si(e) {
  const t = hh(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Ot && (n = fh(n)), n;
}
const Ci = (e, t) => {
  const n = Si(e), r = Si(t);
  if (!n || !r)
    return nr(e, t);
  const o = { ...n };
  return (s) => (o.red = Or(n.red, r.red, s), o.green = Or(n.green, r.green, s), o.blue = Or(n.blue, r.blue, s), o.alpha = le(n.alpha, r.alpha, s), xt.transform(o));
}, mh = (e, t) => (n) => t(e(n)), Vn = (...e) => e.reduce(mh), ho = /* @__PURE__ */ new Set(["none", "hidden"]);
function gh(e, t) {
  return ho.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function vh(e, t) {
  return (n) => le(e, t, n);
}
function bs(e) {
  return typeof e == "number" ? vh : typeof e == "string" ? ss(e) ? nr : xe.test(e) ? Ci : xh : Array.isArray(e) ? Ol : typeof e == "object" ? xe.test(e) ? Ci : yh : nr;
}
function Ol(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => bs(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function yh(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = bs(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function bh(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o], i = e.indexes[s][r[s]], a = e.values[i] ?? 0;
    n[o] = a, r[s]++;
  }
  return n;
}
const xh = (e, t) => {
  const n = ft.createTransformer(t), r = bn(e), o = bn(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? ho.has(e) && !o.values.length || ho.has(t) && !r.values.length ? gh(e, t) : Vn(Ol(bh(r, o), o.values), n) : nr(e, t);
};
function Rl(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? le(e, t, n) : bs(e)(e, t);
}
const Eh = 5;
function Vl(e, t, n) {
  const r = Math.max(t - Eh, 0);
  return Mc(n - e(r), t - r);
}
const ue = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Rr = 1e-3;
function wh({ duration: e = ue.duration, bounce: t = ue.bounce, velocity: n = ue.velocity, mass: r = ue.mass }) {
  let o, s, i = 1 - t;
  i = et(ue.minDamping, ue.maxDamping, i), e = et(ue.minDuration, ue.maxDuration, /* @__PURE__ */ ze(e)), i < 1 ? (o = (l) => {
    const u = l * i, d = u * e, f = u - n, p = mo(l, i), m = Math.exp(-d);
    return Rr - f / p * m;
  }, s = (l) => {
    const d = l * i * e, f = d * n + n, p = Math.pow(i, 2) * Math.pow(l, 2) * e, m = Math.exp(-d), g = mo(Math.pow(l, 2), i);
    return (-o(l) + Rr > 0 ? -1 : 1) * ((f - p) * m) / g;
  }) : (o = (l) => {
    const u = Math.exp(-l * e), d = (l - n) * e + 1;
    return -Rr + u * d;
  }, s = (l) => {
    const u = Math.exp(-l * e), d = (n - l) * (e * e);
    return u * d;
  });
  const a = 5 / e, c = Sh(o, s, a);
  if (e = /* @__PURE__ */ We(e), isNaN(c))
    return {
      stiffness: ue.stiffness,
      damping: ue.damping,
      duration: e
    };
  {
    const l = Math.pow(c, 2) * r;
    return {
      stiffness: l,
      damping: i * 2 * Math.sqrt(r * l),
      duration: e
    };
  }
}
const Dh = 12;
function Sh(e, t, n) {
  let r = n;
  for (let o = 1; o < Dh; o++)
    r = r - e(r) / t(r);
  return r;
}
function mo(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Ch = ["duration", "bounce"], Ph = ["stiffness", "damping", "mass"];
function Pi(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Nh(e) {
  let t = {
    velocity: ue.velocity,
    stiffness: ue.stiffness,
    damping: ue.damping,
    mass: ue.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Pi(e, Ph) && Pi(e, Ch))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * et(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ue.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = wh(e);
      t = {
        ...t,
        ...n,
        mass: ue.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function rr(e = ue.visualDuration, t = ue.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Nh({
    ...n,
    velocity: -/* @__PURE__ */ ze(n.velocity || 0)
  }), m = f || 0, g = l / (2 * Math.sqrt(c * u)), h = i - s, v = /* @__PURE__ */ ze(Math.sqrt(c / u)), x = Math.abs(h) < 5;
  r || (r = x ? ue.restSpeed.granular : ue.restSpeed.default), o || (o = x ? ue.restDelta.granular : ue.restDelta.default);
  let E;
  if (g < 1) {
    const y = mo(v, g);
    E = (D) => {
      const C = Math.exp(-g * v * D);
      return i - C * ((m + g * v * h) / y * Math.sin(y * D) + h * Math.cos(y * D));
    };
  } else if (g === 1)
    E = (y) => i - Math.exp(-v * y) * (h + (m + v * h) * y);
  else {
    const y = v * Math.sqrt(g * g - 1);
    E = (D) => {
      const C = Math.exp(-g * v * D), S = Math.min(y * D, 300);
      return i - C * ((m + g * v * h) * Math.sinh(S) + y * h * Math.cosh(S)) / y;
    };
  }
  const w = {
    calculatedDuration: p && d || null,
    next: (y) => {
      const D = E(y);
      if (p)
        a.done = y >= d;
      else {
        let C = 0;
        g < 1 && (C = y === 0 ? /* @__PURE__ */ We(m) : Vl(E, y, D));
        const S = Math.abs(C) <= r, L = Math.abs(i - D) <= o;
        a.done = S && L;
      }
      return a.value = a.done ? i : D, a;
    },
    toString: () => {
      const y = Math.min(Jo(w), er), D = Lc((C) => w.next(y * C).value, y, 30);
      return y + "ms " + D;
    },
    toTransition: () => {
    }
  };
  return w;
}
rr.applyToOptions = (e) => {
  const t = Cf(e, 100, rr);
  return e.ease = pn() ? t.ease : "easeOut", e.duration = /* @__PURE__ */ We(t.duration), e.type = "keyframes", e;
};
function Ni({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: c, restDelta: l = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (S) => a !== void 0 && S < a || c !== void 0 && S > c, m = (S) => a === void 0 ? c : c === void 0 || Math.abs(a - S) < Math.abs(c - S) ? a : c;
  let g = n * t;
  const h = d + g, v = i === void 0 ? h : i(h);
  v !== h && (g = v - d);
  const x = (S) => -g * Math.exp(-S / r), E = (S) => v + x(S), w = (S) => {
    const L = x(S), O = E(S);
    f.done = Math.abs(L) <= l, f.value = f.done ? v : O;
  };
  let y, D;
  const C = (S) => {
    p(f.value) && (y = S, D = rr({
      keyframes: [f.value, m(f.value)],
      velocity: Vl(E, S, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: l,
      restSpeed: u
    }));
  };
  return C(0), {
    calculatedDuration: null,
    next: (S) => {
      let L = !1;
      return !D && y === void 0 && (L = !0, w(S), C(S)), y !== void 0 && S >= y ? D.next(S - y) : (!L && w(S), f);
    }
  };
}
const Ah = /* @__PURE__ */ Rn(0.42, 0, 1, 1), Th = /* @__PURE__ */ Rn(0, 0, 0.58, 1), Ml = /* @__PURE__ */ Rn(0.42, 0, 0.58, 1), Ih = (e) => Array.isArray(e) && typeof e[0] != "number", Oh = {
  linear: Be,
  easeIn: Ah,
  easeInOut: Ml,
  easeOut: Th,
  circIn: ms,
  circInOut: hl,
  circOut: pl,
  backIn: hs,
  backInOut: dl,
  backOut: ul,
  anticipate: fl
}, Ai = (e) => {
  if (qo(e)) {
    const [t, n, r, o] = e;
    return Rn(t, n, r, o);
  } else if (typeof e == "string")
    return Oh[e];
  return e;
};
function Rh(e, t, n) {
  const r = [], o = n || Rl, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[i] || Be : t;
      a = Vn(c, a);
    }
    r.push(a);
  }
  return r;
}
function Vh(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Rh(t, r, o), c = a.length, l = (u) => {
    if (i && u < e[0])
      return t[0];
    let d = 0;
    if (c > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ fn(e[d], e[d + 1], u);
    return a[d](f);
  };
  return n ? (u) => l(et(e[0], e[s - 1], u)) : l;
}
function Mh(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ fn(0, t, r);
    e.push(le(n, 1, o));
  }
}
function Lh(e) {
  const t = [0];
  return Mh(t, e.length - 1), t;
}
function _h(e, t) {
  return e.map((n) => n * t);
}
function Bh(e, t) {
  return e.map(() => t || Ml).splice(0, e.length - 1);
}
function nn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Ih(r) ? r.map(Ai) : Ai(r), s = {
    done: !1,
    value: t[0]
  }, i = _h(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Lh(t),
    e
  ), a = Vh(i, t, {
    ease: Array.isArray(o) ? o : Bh(t, o)
  });
  return {
    calculatedDuration: e,
    next: (c) => (s.value = a(c), s.done = c >= e, s)
  };
}
const $h = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => te.update(t, !0),
    stop: () => dt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ve.isProcessing ? ve.timestamp : He.now()
  };
}, Fh = {
  decay: Ni,
  inertia: Ni,
  tween: nn,
  keyframes: nn,
  spring: rr
}, kh = (e) => e / 100;
class xs extends Il {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || ys, a = (c, l) => this.onKeyframesResolved(c, l);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Xo(n) ? n : Fh[n] || nn;
    let c, l;
    process.env.NODE_ENV, a !== nn && typeof t[0] != "number" && (c = Vn(kh, Rl(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" && (l = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), u.calculatedDuration === null && (u.calculatedDuration = Jo(u));
    const { calculatedDuration: d } = u, f = d + o, p = f * (r + 1) - o;
    return {
      generator: u,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: S } = this.options;
      return { done: !0, value: S[S.length - 1] };
    }
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: c, calculatedDuration: l, totalDuration: u, resolvedDuration: d } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: f, repeat: p, repeatType: m, repeatDelay: g, onUpdate: h } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const v = this.currentTime - f * (this.speed >= 0 ? 1 : -1), x = this.speed >= 0 ? v < 0 : v > u;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let E = this.currentTime, w = s;
    if (p) {
      const S = Math.min(this.currentTime, u) / d;
      let L = Math.floor(S), O = S % 1;
      !O && S >= 1 && (O = 1), O === 1 && L--, L = Math.min(L, p + 1), !!(L % 2) && (m === "reverse" ? (O = 1 - O, g && (O -= g / d)) : m === "mirror" && (w = i)), E = et(0, 1, O) * d;
    }
    const y = x ? { done: !1, value: c[0] } : w.next(E);
    a && (y.value = a(y.value));
    let { done: D } = y;
    !x && l !== null && (D = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return C && o !== void 0 && (y.value = yr(c, this.options, o)), h && h(y.value), C && this.finish(), y;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ ze(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ ze(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ We(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ ze(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = $h, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const o = this.driver.now();
    this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = this.currentTime ?? 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  get finished() {
    return this.currentFinishedPromise;
  }
}
const jh = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Gh = /* @__PURE__ */ Ko(() => Object.hasOwnProperty.call(Element.prototype, "animate")), or = 10, Uh = 2e4;
function Wh(e) {
  return Xo(e.type) || e.type === "spring" || !Bc(e.ease);
}
function zh(e, t) {
  const n = new xs({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < Uh; )
    r = n.sample(s), o.push(r.value), s += or;
  return {
    times: void 0,
    keyframes: o,
    duration: s - or,
    ease: "linear"
  };
}
const Ll = {
  anticipate: fl,
  backInOut: dl,
  circInOut: hl
};
function Hh(e) {
  return e in Ll;
}
class Ti extends Il {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new Tl(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: c, startTime: l } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && pn() && Hh(s) && (s = Ll[s]), Wh(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: p, element: m, ...g } = this.options, h = zh(t, g);
      t = h.keyframes, t.length === 1 && (t[1] = t[0]), r = h.duration, o = h.times, s = h.ease, i = "keyframes";
    }
    const u = Sf(a.owner.current, c, t, { ...this.options, duration: r, times: o, ease: s });
    return u.startTime = l ?? this.calcStartTime(), this.pendingTimeline ? (oi(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(yr(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: u,
      duration: r,
      times: o,
      type: i,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ ze(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ ze(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ We(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  get finished() {
    return this.resolved.animation.finished;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Be;
      const { animation: r } = n;
      oi(r, t);
    }
    return Be;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: o, type: s, ease: i, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: l, onUpdate: u, onComplete: d, element: f, ...p } = this.options, m = new xs({
        ...p,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), g = /* @__PURE__ */ We(this.time);
      l.setWithVelocity(m.sample(g - or).value, m.sample(g).value, or);
    }
    const { onStop: c } = this.options;
    c && c(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: o, repeatType: s, damping: i, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: c, transformTemplate: l } = n.owner.getProps();
    return Gh() && r && jh.has(r) && (r !== "transform" || !l) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !c && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const Kh = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Yh = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), qh = {
  type: "keyframes",
  duration: 0.8
}, Xh = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Zh = (e, { keyframes: t }) => t.length > 2 ? qh : Pt.has(e) ? e.startsWith("scale") ? Yh(t[1]) : Kh : Xh;
function Jh({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: c, elapsed: l, ...u }) {
  return !!Object.keys(u).length;
}
const Es = (e, t, n, r = {}, o, s) => (i) => {
  const a = Zo(r, e) || {}, c = a.delay || r.delay || 0;
  let { elapsed: l = 0 } = r;
  l = l - /* @__PURE__ */ We(c);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -l,
    onUpdate: (f) => {
      t.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      i(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : o
  };
  Jh(a) || (u = {
    ...u,
    ...Zh(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ We(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ We(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), u.allowFlatten = !a.type && !a.ease, d && !s && t.get() !== void 0) {
    const f = yr(u.keyframes, a);
    if (f !== void 0)
      return te.update(() => {
        u.onUpdate(f), u.onComplete();
      }), new Ef([]);
  }
  return !s && Ti.supports(u) ? new Ti(u) : new xs(u);
};
function Qh({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function _l(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: i, ...a } = t;
  r && (s = r);
  const c = [], l = o && e.animationState && e.animationState.getState()[o];
  for (const u in a) {
    const d = e.getValue(u, e.latestValues[u] ?? null), f = a[u];
    if (f === void 0 || l && Qh(l, u))
      continue;
    const p = {
      delay: n,
      ...Zo(s || {}, u)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const h = il(e);
      if (h) {
        const v = window.MotionHandoffAnimation(h, u, te);
        v !== null && (p.startTime = v, m = !0);
      }
    }
    so(e, u), d.start(Es(u, d, f, e.shouldReduceMotion && sl.has(u) ? { type: !1 } : p, e, m));
    const g = d.animation;
    g && c.push(g);
  }
  return i && Promise.all(c).then(() => {
    te.update(() => {
      i && Ap(e, i);
    });
  }), c;
}
function go(e, t, n = {}) {
  var c;
  const r = yn(e, t, n.type === "exit" ? (c = e.presenceContext) == null ? void 0 : c.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = r ? () => Promise.all(_l(e, r, n)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: d, staggerDirection: f } = o;
    return em(e, t, u + l, d, f, n);
  } : () => Promise.resolve(), { when: a } = o;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [s, i] : [i, s];
    return l().then(() => u());
  } else
    return Promise.all([s(), i(n.delay)]);
}
function em(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, c = o === 1 ? (l = 0) => l * r : (l = 0) => a - l * r;
  return Array.from(e.variantChildren).sort(tm).forEach((l, u) => {
    l.notify("AnimationStart", t), i.push(go(l, t, {
      ...s,
      delay: n + c(u)
    }).then(() => l.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function tm(e, t) {
  return e.sortNodePosition(t);
}
function nm(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => go(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = go(e, t, n);
  else {
    const o = typeof t == "function" ? yn(e, t, n.custom) : t;
    r = Promise.all(_l(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Bl(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const rm = ns.length;
function $l(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? $l(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < rm; n++) {
    const r = ns[n], o = e.props[r];
    (mn(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const om = [...ts].reverse(), sm = ts.length;
function im(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => nm(e, n, r)));
}
function am(e) {
  let t = im(e), n = Ii(), r = !0;
  const o = (c) => (l, u) => {
    var f;
    const d = yn(e, u, c === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: p, transitionEnd: m, ...g } = d;
      l = { ...l, ...g, ...m };
    }
    return l;
  };
  function s(c) {
    t = c(e);
  }
  function i(c) {
    const { props: l } = e, u = $l(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let p = {}, m = 1 / 0;
    for (let h = 0; h < sm; h++) {
      const v = om[h], x = n[v], E = l[v] !== void 0 ? l[v] : u[v], w = mn(E), y = v === c ? x.isActive : null;
      y === !1 && (m = h);
      let D = E === u[v] && E !== l[v] && w;
      if (D && r && e.manuallyAnimateOnMount && (D = !1), x.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && y === null || // If we didn't and don't have any defined prop for this animation type
      !E && !x.prevProp || // Or if the prop doesn't define an animation
      gr(E) || typeof E == "boolean")
        continue;
      const C = cm(x.prevProp, E);
      let S = C || // If we're making this variant active, we want to always make it active
      v === c && x.isActive && !D && w || // If we removed a higher-priority variant (i is in reverse order)
      h > m && w, L = !1;
      const O = Array.isArray(E) ? E : [E];
      let F = O.reduce(o(v), {});
      y === !1 && (F = {});
      const { prevResolvedValues: I = {} } = x, Q = {
        ...I,
        ...F
      }, re = (A) => {
        S = !0, f.has(A) && (L = !0, f.delete(A)), x.needsAnimating[A] = !0;
        const B = e.getValue(A);
        B && (B.liveStyle = !1);
      };
      for (const A in Q) {
        const B = F[A], z = I[A];
        if (p.hasOwnProperty(A))
          continue;
        let Y = !1;
        oo(B) && oo(z) ? Y = !Bl(B, z) : Y = B !== z, Y ? B != null ? re(A) : f.add(A) : B !== void 0 && f.has(A) ? re(A) : x.protectedKeys[A] = !0;
      }
      x.prevProp = E, x.prevResolvedValues = F, x.isActive && (p = { ...p, ...F }), r && e.blockInitialAnimation && (S = !1), S && (!(D && C) || L) && d.push(...O.map((A) => ({
        animation: A,
        options: { type: v }
      })));
    }
    if (f.size) {
      const h = {};
      if (typeof l.initial != "boolean") {
        const v = yn(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        v && v.transition && (h.transition = v.transition);
      }
      f.forEach((v) => {
        const x = e.getBaseTarget(v), E = e.getValue(v);
        E && (E.liveStyle = !0), h[v] = x ?? null;
      }), d.push({ animation: h });
    }
    let g = !!d.length;
    return r && (l.initial === !1 || l.initial === l.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(d) : Promise.resolve();
  }
  function a(c, l) {
    var d;
    if (n[c].isActive === l)
      return Promise.resolve();
    (d = e.variantChildren) == null || d.forEach((f) => {
      var p;
      return (p = f.animationState) == null ? void 0 : p.setActive(c, l);
    }), n[c].isActive = l;
    const u = i(c);
    for (const f in n)
      n[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Ii(), r = !0;
    }
  };
}
function cm(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Bl(t, e) : !1;
}
function mt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ii() {
  return {
    animate: mt(!0),
    whileInView: mt(),
    whileHover: mt(),
    whileTap: mt(),
    whileDrag: mt(),
    whileFocus: mt(),
    exit: mt()
  };
}
class ht {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class lm extends ht {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = am(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    gr(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this);
  }
}
let um = 0;
class dm extends ht {
  constructor() {
    super(...arguments), this.id = um++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const fm = {
  animation: {
    Feature: lm
  },
  exit: {
    Feature: dm
  }
};
function xn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Mn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const pm = (e) => (t) => es(t) && e(t, Mn(t));
function rn(e, t, n, r) {
  return xn(e, t, pm(n), r);
}
function Fl({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function hm({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function mm(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
const kl = 1e-4, gm = 1 - kl, vm = 1 + kl, jl = 0.01, ym = 0 - jl, bm = 0 + jl;
function Se(e) {
  return e.max - e.min;
}
function xm(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Oi(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = le(t.min, t.max, e.origin), e.scale = Se(n) / Se(t), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= gm && e.scale <= vm || isNaN(e.scale)) && (e.scale = 1), (e.translate >= ym && e.translate <= bm || isNaN(e.translate)) && (e.translate = 0);
}
function on(e, t, n, r) {
  Oi(e.x, t.x, n.x, r ? r.originX : void 0), Oi(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ri(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Se(t);
}
function Em(e, t, n) {
  Ri(e.x, t.x, n.x), Ri(e.y, t.y, n.y);
}
function Vi(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Se(t);
}
function sn(e, t, n) {
  Vi(e.x, t.x, n.x), Vi(e.y, t.y, n.y);
}
const Mi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Rt = () => ({
  x: Mi(),
  y: Mi()
}), Li = () => ({ min: 0, max: 0 }), fe = () => ({
  x: Li(),
  y: Li()
});
function Le(e) {
  return [e("x"), e("y")];
}
function Vr(e) {
  return e === void 0 || e === 1;
}
function vo({ scale: e, scaleX: t, scaleY: n }) {
  return !Vr(e) || !Vr(t) || !Vr(n);
}
function vt(e) {
  return vo(e) || Gl(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Gl(e) {
  return _i(e.x) || _i(e.y);
}
function _i(e) {
  return e && e !== "0%";
}
function sr(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Bi(e, t, n, r, o) {
  return o !== void 0 && (e = sr(e, o, r)), sr(e, n, r) + t;
}
function yo(e, t = 0, n = 1, r, o) {
  e.min = Bi(e.min, t, n, r, o), e.max = Bi(e.max, t, n, r, o);
}
function Ul(e, { x: t, y: n }) {
  yo(e.x, t.translate, t.scale, t.originPoint), yo(e.y, n.translate, n.scale, n.originPoint);
}
const $i = 0.999999999999, Fi = 1.0000000000001;
function wm(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: c } = s.options;
    c && c.props.style && c.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Mt(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Ul(e, i)), r && vt(s.latestValues) && Mt(e, s.latestValues));
  }
  t.x < Fi && t.x > $i && (t.x = 1), t.y < Fi && t.y > $i && (t.y = 1);
}
function Vt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function ki(e, t, n, r, o = 0.5) {
  const s = le(e.min, e.max, o);
  yo(e, t, n, s, r);
}
function Mt(e, t) {
  ki(e.x, t.x, t.scaleX, t.scale, t.originX), ki(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Wl(e, t) {
  return Fl(mm(e.getBoundingClientRect(), t));
}
function Dm(e, t, n) {
  const r = Wl(e, n), { scroll: o } = t;
  return o && (Vt(r.x, o.offset.x), Vt(r.y, o.offset.y)), r;
}
const zl = ({ current: e }) => e ? e.ownerDocument.defaultView : null, ji = (e, t) => Math.abs(e - t);
function Sm(e, t) {
  const n = ji(e.x, t.x), r = ji(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Hl {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Lr(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, p = Sm(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !p)
        return;
      const { point: m } = d, { timestamp: g } = ve;
      this.history.push({ ...m, timestamp: g });
      const { onStart: h, onMove: v } = this.handlers;
      f || (h && h(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Mr(f, this.transformPagePoint), te.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: p, onSessionEnd: m, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Lr(d.type === "pointercancel" ? this.lastMoveEventInfo : Mr(f, this.transformPagePoint), this.history);
      this.startEvent && p && p(d, h), m && m(d, h);
    }, !es(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Mn(t), a = Mr(i, this.transformPagePoint), { point: c } = a, { timestamp: l } = ve;
    this.history = [{ ...c, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, Lr(a, this.history)), this.removeListeners = Vn(rn(this.contextWindow, "pointermove", this.handlePointerMove), rn(this.contextWindow, "pointerup", this.handlePointerUp), rn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), dt(this.updatePoint);
  }
}
function Mr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Gi(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Lr({ point: e }, t) {
  return {
    point: e,
    delta: Gi(e, Kl(t)),
    offset: Gi(e, Cm(t)),
    velocity: Pm(t, 0.1)
  };
}
function Cm(e) {
  return e[0];
}
function Kl(e) {
  return e[e.length - 1];
}
function Pm(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Kl(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ We(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ ze(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Nm(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)), e;
}
function Ui(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Am(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Ui(e.x, n, o),
    y: Ui(e.y, t, r)
  };
}
function Wi(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Tm(e, t) {
  return {
    x: Wi(e.x, t.x),
    y: Wi(e.y, t.y)
  };
}
function Im(e, t) {
  let n = 0.5;
  const r = Se(e), o = Se(t);
  return o > r ? n = /* @__PURE__ */ fn(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ fn(e.min, e.max - o, t.min)), et(0, 1, n);
}
function Om(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const bo = 0.35;
function Rm(e = bo) {
  return e === !1 ? e = 0 : e === !0 && (e = bo), {
    x: zi(e, "left", "right"),
    y: zi(e, "top", "bottom")
  };
}
function zi(e, t, n) {
  return {
    min: Hi(e, t),
    max: Hi(e, n)
  };
}
function Hi(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Vm = /* @__PURE__ */ new WeakMap();
class Mm {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = fe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (u) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Mn(u).point);
    }, s = (u, d) => {
      const { drag: f, dragPropagation: p, onDragStart: m } = this.getProps();
      if (f && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Tf(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Le((h) => {
        let v = this.getAxisMotionValue(h).get() || 0;
        if (Ke.test(v)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const E = x.layout.layoutBox[h];
            E && (v = Se(E) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[h] = v;
      }), m && te.postRender(() => m(u, d)), so(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, i = (u, d) => {
      const { dragPropagation: f, dragDirectionLock: p, onDirectionLock: m, onDrag: g } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: h } = d;
      if (p && this.currentDirection === null) {
        this.currentDirection = Lm(h), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, h), this.updateAxis("y", d.point, h), this.visualElement.render(), g && g(u, d);
    }, a = (u, d) => this.stop(u, d), c = () => Le((u) => {
      var d;
      return this.getAnimationState(u) === "paused" && ((d = this.getAxisMotionValue(u).animation) == null ? void 0 : d.play());
    }), { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new Hl(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l,
      contextWindow: zl(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && te.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Wn(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = Nm(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, o = this.constraints;
    t && It(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Am(r.layoutBox, t) : this.constraints = !1, this.elastic = Rm(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Le((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = Om(r.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !It(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = Dm(r, o.root, this.visualElement.getTransformPagePoint());
    let i = Tm(o.layout.layoutBox, s);
    if (n) {
      const a = n(hm(i));
      this.hasMutatedConstraints = !!a, a && (i = Fl(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, l = Le((u) => {
      if (!Wn(u, n, this.currentDirection))
        return;
      let d = c && c[u] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return so(this.visualElement, t), r.start(Es(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Le((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Le((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Le((n) => {
      const { drag: r } = this.getProps();
      if (!Wn(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - le(i, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!It(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Le((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const c = a.get();
        o[i] = Im({ min: c, max: c }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Le((i) => {
      if (!Wn(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: c, max: l } = this.constraints[i];
      a.set(le(c, l, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Vm.set(this.visualElement, this);
    const t = this.visualElement.current, n = rn(t, "pointerdown", (c) => {
      const { drag: l, dragListener: u = !0 } = this.getProps();
      l && u && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      It(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), te.read(r);
    const i = xn(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: l }) => {
      this.isDragging && l && (Le((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += c[u].translate, d.set(d.get() + c[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = bo, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function Wn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Lm(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class _m extends ht {
  constructor(t) {
    super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new Mm(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Be;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ki = (e) => (t, n) => {
  e && te.postRender(() => e(t, n));
};
class Bm extends ht {
  constructor() {
    super(...arguments), this.removePointerDownListener = Be;
  }
  onPointerDown(t) {
    this.session = new Hl(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: zl(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ki(t),
      onStart: Ki(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && te.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = rn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Zn = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Yi(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Kt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if ($.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Yi(e, t.target.x), r = Yi(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, $m = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = ft.parse(e);
    if (o.length > 5)
      return r;
    const s = ft.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, c = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= c;
    const l = le(a, c, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= l), typeof o[3 + i] == "number" && (o[3 + i] /= l), s(o);
  }
};
class Fm extends Td {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    np(km), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Zn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || te.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Qo.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Yl(e) {
  const [t, n] = Vc(), r = pe(jo);
  return P(Fm, { ...e, layoutGroup: r, switchLayoutGroup: pe(Hc), isPresent: t, safeToRemove: n });
}
const km = {
  borderRadius: {
    ...Kt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Kt,
  borderTopRightRadius: Kt,
  borderBottomLeftRadius: Kt,
  borderBottomRightRadius: Kt,
  boxShadow: $m
};
function jm(e, t, n) {
  const r = Ee(e) ? e : hn(e);
  return r.start(Es("", r, t, n)), r.animation;
}
function Gm(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Um = (e, t) => e.depth - t.depth;
class Wm {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    zo(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ho(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Um), this.isDirty = !1, this.children.forEach(t);
  }
}
function zm(e, t) {
  const n = He.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (dt(r), e(s - t));
  };
  return te.read(r, !0), () => dt(r);
}
const ql = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Hm = ql.length, qi = (e) => typeof e == "string" ? parseFloat(e) : e, Xi = (e) => typeof e == "number" || $.test(e);
function Km(e, t, n, r, o, s) {
  o ? (e.opacity = le(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Ym(r)
  ), e.opacityExit = le(t.opacity !== void 0 ? t.opacity : 1, 0, qm(r))) : s && (e.opacity = le(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < Hm; i++) {
    const a = `border${ql[i]}Radius`;
    let c = Zi(t, a), l = Zi(n, a);
    if (c === void 0 && l === void 0)
      continue;
    c || (c = 0), l || (l = 0), c === 0 || l === 0 || Xi(c) === Xi(l) ? (e[a] = Math.max(le(qi(c), qi(l), r), 0), (Ke.test(l) || Ke.test(c)) && (e[a] += "%")) : e[a] = l;
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
}
function Zi(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Ym = /* @__PURE__ */ Xl(0, 0.5, pl), qm = /* @__PURE__ */ Xl(0.5, 0.95, Be);
function Xl(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ fn(e, t, r));
}
function Ji(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ve(e, t) {
  Ji(e.x, t.x), Ji(e.y, t.y);
}
function Qi(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function ea(e, t, n, r, o) {
  return e -= t, e = sr(e, 1 / n, r), o !== void 0 && (e = sr(e, 1 / o, r)), e;
}
function Xm(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ke.test(t) && (t = parseFloat(t), t = le(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = le(s.min, s.max, r);
  e === s && (a -= t), e.min = ea(e.min, t, n, a, o), e.max = ea(e.max, t, n, a, o);
}
function ta(e, t, [n, r, o], s, i) {
  Xm(e, t[n], t[r], t[o], t.scale, s, i);
}
const Zm = ["x", "scaleX", "originX"], Jm = ["y", "scaleY", "originY"];
function na(e, t, n, r) {
  ta(e.x, t, Zm, n ? n.x : void 0, r ? r.x : void 0), ta(e.y, t, Jm, n ? n.y : void 0, r ? r.y : void 0);
}
function ra(e) {
  return e.translate === 0 && e.scale === 1;
}
function Zl(e) {
  return ra(e.x) && ra(e.y);
}
function oa(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Qm(e, t) {
  return oa(e.x, t.x) && oa(e.y, t.y);
}
function sa(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Jl(e, t) {
  return sa(e.x, t.x) && sa(e.y, t.y);
}
function ia(e) {
  return Se(e.x) / Se(e.y);
}
function aa(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class eg {
  constructor() {
    this.members = [];
  }
  add(t) {
    zo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ho(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const s = this.members[o];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function tg(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: l, rotate: u, rotateX: d, rotateY: f, skewX: p, skewY: m } = n;
    l && (r = `perspective(${l}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), p && (r += `skewX(${p}deg) `), m && (r += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x, c = e.y.scale * t.y;
  return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none";
}
const _r = ["", "X", "Y", "Z"], ng = { visibility: "hidden" }, ca = 1e3;
let rg = 0;
function Br(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ql(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = il(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", te, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ql(r);
}
function eu({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = rg++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(ig), this.nodes.forEach(dg), this.nodes.forEach(fg), this.nodes.forEach(ag);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Wm());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Yo()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const c = this.eventHandlers.get(i);
      c && c.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Gm(i), this.instance = i;
      const { layoutId: c, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (l || c) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = zm(f, 250), Zn.hasAnimatedSinceResize && (Zn.hasAnimatedSinceResize = !1, this.nodes.forEach(ua));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && u && (c || l) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeLayoutChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || u.getDefaultTransition() || vg, { onLayoutAnimationStart: h, onLayoutAnimationComplete: v } = u.getProps(), x = !this.targetLayout || !Jl(this.targetLayout, m), E = !f && p;
        if (this.options.layoutRoot || this.resumeFrom || E || f && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, E);
          const w = {
            ...Zo(g, "layout"),
            onPlay: h,
            onComplete: v
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || ua(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, dt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(pg), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ql(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(la);
        return;
      }
      this.isUpdating || this.nodes.forEach(lg), this.isUpdating = !1, this.nodes.forEach(ug), this.nodes.forEach(og), this.nodes.forEach(sg), this.clearAllSnapshots();
      const a = He.now();
      ve.delta = et(0, 1e3 / 60, a - ve.timestamp), ve.timestamp = a, ve.isProcessing = !0, Nr.update.process(ve), Nr.preRender.process(ve), Nr.render.process(ve), ve.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Qo.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cg), this.sharedNodes.forEach(hg);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, te.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      te.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Se(this.snapshot.measuredBox.x) && !Se(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = fe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Zl(this.projectionDelta), c = this.getTransformTemplate(), l = c ? c(this.latestValues, "") : void 0, u = l !== this.prevTransformTemplateValue;
      i && (a || vt(this.latestValues) || u) && (o(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return i && (c = this.removeTransform(c)), yg(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var l;
      const { visualElement: i } = this.options;
      if (!i)
        return fe();
      const a = i.measureViewportBox();
      if (!(((l = this.scroll) == null ? void 0 : l.wasRoot) || this.path.some(bg))) {
        const { scroll: u } = this.root;
        u && (Vt(a.x, u.offset.x), Vt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(i) {
      var c;
      const a = fe();
      if (Ve(a, i), (c = this.scroll) != null && c.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: d, options: f } = u;
        u !== this.root && d && f.layoutScroll && (d.wasRoot && Ve(a, i), Vt(a.x, d.offset.x), Vt(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const c = fe();
      Ve(c, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Mt(c, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), vt(u.latestValues) && Mt(c, u.latestValues);
      }
      return vt(this.latestValues) && Mt(c, this.latestValues), c;
    }
    removeTransform(i) {
      const a = fe();
      Ve(a, i);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !vt(l.latestValues))
          continue;
        vo(l.latestValues) && l.updateSnapshot();
        const u = fe(), d = l.measurePageBox();
        Ve(u, d), na(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return vt(this.latestValues) && na(a, this.latestValues), a;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ve.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var f;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== a;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || (f = this.parent) != null && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!(!this.layout || !(u || d))) {
        if (this.resolvedRelativeTargetAt = ve.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), sn(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = fe(), this.targetWithTransforms = fe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Em(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ve(this.target, this.layout.layoutBox), Ul(this.target, this.targetDelta)) : Ve(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const p = this.getClosestProjectingParent();
          p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), sn(this.relativeTargetOrigin, this.target, p.target), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vo(this.parent.latestValues) || Gl(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var m;
      const i = this.getLead(), a = !!this.resumingFrom || this !== i;
      let c = !0;
      if ((this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ve.timestamp && (c = !1), c)
        return;
      const { layout: l, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || u))
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      wm(this.layoutCorrected, this.treeScale, this.path, a), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = fe());
      const { target: p } = i;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Qi(this.prevProjectionDelta.x, this.projectionDelta.x), Qi(this.prevProjectionDelta.y, this.projectionDelta.y)), on(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !aa(this.projectionDelta.x, this.prevProjectionDelta.x) || !aa(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), i) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Rt(), this.projectionDelta = Rt(), this.projectionDeltaWithTransform = Rt();
    }
    setAnimationOrigin(i, a = !1) {
      const c = this.snapshot, l = c ? c.latestValues : {}, u = { ...this.latestValues }, d = Rt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = fe(), p = c ? c.source : void 0, m = this.layout ? this.layout.source : void 0, g = p !== m, h = this.getStack(), v = !h || h.members.length <= 1, x = !!(g && !v && this.options.crossfade === !0 && !this.path.some(gg));
      this.animationProgress = 0;
      let E;
      this.mixTargetDelta = (w) => {
        const y = w / 1e3;
        da(d.x, i.x, y), da(d.y, i.y, y), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (sn(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mg(this.relativeTarget, this.relativeTargetOrigin, f, y), E && Qm(this.relativeTarget, E) && (this.isProjectionDirty = !1), E || (E = fe()), Ve(E, this.relativeTarget)), g && (this.animationValues = u, Km(u, l, this.latestValues, y, x, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = y;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (dt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = te.update(() => {
        Zn.hasAnimatedSinceResize = !0, this.currentAnimation = jm(0, ca, {
          ...i,
          onUpdate: (a) => {
            this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ca), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: c, layout: l, latestValues: u } = i;
      if (!(!a || !c || !l)) {
        if (this !== i && this.layout && l && tu(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          c = this.target || fe();
          const d = Se(this.layout.layoutBox.x);
          c.x.min = i.target.x.min, c.x.max = c.x.min + d;
          const f = Se(this.layout.layoutBox.y);
          c.y.min = i.target.y.min, c.y.max = c.y.min + f;
        }
        Ve(a, c), Mt(a, u), on(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new eg()), this.sharedNodes.get(i).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: i } = this.options;
      return i ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: i } = this.options;
      return i ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: c } = i;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a)
        return;
      const l = {};
      c.z && Br("z", i, l, this.animationValues);
      for (let u = 0; u < _r.length; u++)
        Br(`rotate${_r[u]}`, i, l, this.animationValues), Br(`skew${_r[u]}`, i, l, this.animationValues);
      i.render();
      for (const u in l)
        i.setStaticValue(u, l[u]), this.animationValues && (this.animationValues[u] = l[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return ng;
      const a = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, a.opacity = "", a.pointerEvents = Xn(i == null ? void 0 : i.pointerEvents) || "", a.transform = c ? c(this.latestValues, "") : "none", a;
      const l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Xn(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !vt(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const u = l.animationValues || l.latestValues;
      this.applyTransformsToTarget(), a.transform = tg(this.projectionDeltaWithTransform, this.treeScale, u), c && (a.transform = c(u, a.transform));
      const { x: d, y: f } = this.projectionDelta;
      a.transformOrigin = `${d.origin * 100}% ${f.origin * 100}% 0`, l.animationValues ? a.opacity = l === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : a.opacity = l === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const p in gn) {
        if (u[p] === void 0)
          continue;
        const { correct: m, applyTo: g, isCSSVariable: h } = gn[p], v = a.transform === "none" ? u[p] : m(u[p], l);
        if (g) {
          const x = g.length;
          for (let E = 0; E < x; E++)
            a[g[E]] = v;
        } else
          h ? this.options.visualElement.renderState.vars[p] = v : a[p] = v;
      }
      return this.options.layoutId && (a.pointerEvents = l === this ? Xn(i == null ? void 0 : i.pointerEvents) || "" : "none"), a;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(la), this.root.sharedNodes.clear();
    }
  };
}
function og(e) {
  e.updateLayout();
}
function sg(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = t.source !== e.layout.source;
    s === "size" ? Le((d) => {
      const f = i ? t.measuredBox[d] : t.layoutBox[d], p = Se(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : tu(s, t.layoutBox, r) && Le((d) => {
      const f = i ? t.measuredBox[d] : t.layoutBox[d], p = Se(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const a = Rt();
    on(a, r, t.layoutBox);
    const c = Rt();
    i ? on(c, e.applyTransform(o, !0), t.measuredBox) : on(c, r, t.layoutBox);
    const l = !Zl(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = fe();
          sn(m, t.layoutBox, f.layoutBox);
          const g = fe();
          sn(g, r, p.layoutBox), Jl(m, g) || (u = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = m, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ig(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function ag(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cg(e) {
  e.clearSnapshot();
}
function la(e) {
  e.clearMeasurements();
}
function lg(e) {
  e.isLayoutDirty = !1;
}
function ug(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ua(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function dg(e) {
  e.resolveTargetDelta();
}
function fg(e) {
  e.calcProjection();
}
function pg(e) {
  e.resetSkewAndRotation();
}
function hg(e) {
  e.removeLeadSnapshot();
}
function da(e, t, n) {
  e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function fa(e, t, n, r) {
  e.min = le(t.min, n.min, r), e.max = le(t.max, n.max, r);
}
function mg(e, t, n, r) {
  fa(e.x, t.x, n.x, r), fa(e.y, t.y, n.y, r);
}
function gg(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const vg = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, pa = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), ha = pa("applewebkit/") && !pa("chrome/") ? Math.round : Be;
function ma(e) {
  e.min = ha(e.min), e.max = ha(e.max);
}
function yg(e) {
  ma(e.x), ma(e.y);
}
function tu(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !xm(ia(t), ia(n), 0.2);
}
function bg(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const xg = eu({
  attachResizeListener: (e, t) => xn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), $r = {
  current: void 0
}, nu = eu({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!$r.current) {
      const e = new xg({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), $r.current = e;
    }
    return $r.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Eg = {
  pan: {
    Feature: Bm
  },
  drag: {
    Feature: _m,
    ProjectionNode: nu,
    MeasureLayout: Yl
  }
};
function ga(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && te.postRender(() => s(t, Mn(t)));
}
class wg extends ht {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Of(t, (n, r) => (ga(this.node, r, "Start"), (o) => ga(this.node, o, "End"))));
  }
  unmount() {
  }
}
class Dg extends ht {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Vn(xn(this.node.current, "focus", () => this.onFocus()), xn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function va(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && te.postRender(() => s(t, Mn(t)));
}
class Sg extends ht {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Lf(t, (n, r) => (va(this.node, r, "Start"), (o, { success: s }) => va(this.node, o, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const xo = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Cg = (e) => {
  const t = xo.get(e.target);
  t && t(e);
}, Pg = (e) => {
  e.forEach(Cg);
};
function Ng({ root: e, ...t }) {
  const n = e || document;
  Fr.has(n) || Fr.set(n, {});
  const r = Fr.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Pg, { root: e, ...t })), r[o];
}
function Ag(e, t, n) {
  const r = Ng(t);
  return xo.set(e, n), r.observe(e), () => {
    xo.delete(e), r.unobserve(e);
  };
}
const Tg = {
  some: 0,
  all: 1
};
class Ig extends ht {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Tg[o]
    }, a = (c) => {
      const { isIntersecting: l } = c;
      if (this.isInView === l || (this.isInView = l, s && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = l ? u : d;
      f && f(c);
    };
    return Ag(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Og(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Og({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Rg = {
  inView: {
    Feature: Ig
  },
  tap: {
    Feature: Sg
  },
  focus: {
    Feature: Dg
  },
  hover: {
    Feature: wg
  }
}, Vg = {
  layout: {
    ProjectionNode: nu,
    MeasureLayout: Yl
  }
}, Eo = { current: null }, ru = { current: !1 };
function Mg() {
  if (ru.current = !0, !!Uo)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Eo.current = e.matches;
      e.addListener(t), t();
    } else
      Eo.current = !1;
}
const Lg = [...Al, xe, ft], _g = (e) => Lg.find(Nl(e)), Bg = /* @__PURE__ */ new WeakMap();
function $g(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Ee(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && hr(o.version === "12.6.3", `Attempting to mix Motion versions ${o.version} with 12.6.3 may not work as expected.`);
    else if (Ee(s))
      e.addValue(r, hn(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, hn(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const ya = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Fg {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: s, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ys, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = He.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, te.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: l, onUpdate: u } = i;
    this.onUpdate = u, this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = vr(n), this.isVariantNode = Wc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in f) {
      const m = f[p];
      c[p] !== void 0 && Ee(m) && m.set(c[p], !1);
    }
  }
  mount(t) {
    this.current = t, Bg.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), ru.current || Mg(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Eo.current, process.env.NODE_ENV !== "production" && hr(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), dt(this.notifyUpdate), dt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Pt.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && te.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let i;
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), s(), i && i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in _t) {
      const n = _t[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : fe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < ya.length; r++) {
      const o = ya[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = $g(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = hn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (Cl(r) || ml(r)) ? r = parseFloat(r) : !_g(r) && ft.test(n) && (r = wl(t, n)), this.setBaseTarget(t, Ee(r) ? r.get() : r)), Ee(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const i = fs(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
      i && (r = i[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ee(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Yo()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class ou extends Fg {
  constructor() {
    super(...arguments), this.KeyframeResolver = Tl;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ee(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function kg(e) {
  return window.getComputedStyle(e);
}
class jg extends ou {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = tl;
  }
  readValueFromInstance(t, n) {
    if (Pt.has(n))
      return Qp(t, n);
    {
      const r = kg(t), o = (os(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Wl(t, n);
  }
  build(t, n, r) {
    as(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ps(t, n, r);
  }
}
class Gg extends ou {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = fe, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && el(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Pt.has(n)) {
      const r = El(n);
      return r && r.default || 0;
    }
    return n = nl.has(n) ? n : rs(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ol(t, n, r);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && te.postRender(this.updateDimensions);
  }
  build(t, n, r) {
    us(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    rl(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = ds(t.tagName), super.mount(t);
  }
}
const Ug = (e, t) => ls(e) ? new Gg(t) : new jg(t, {
  allowProjection: e !== Ec
}), Wg = /* @__PURE__ */ Pp({
  ...fm,
  ...Rg,
  ...Eg,
  ...Vg
}, Ug), zg = /* @__PURE__ */ Gf(Wg), Hg = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, Kg = ({
  type: e,
  field: t,
  label: n,
  fieldState: r,
  postfix: o,
  labelClassName: s,
  errorPlace: i = "right",
  parentClassName: a,
  className: c,
  formState: l,
  numberWrapperClassname: u,
  format: d,
  wrapperClassName: f,
  decimalScale: p = 1,
  ...m
}) => {
  var h, v;
  const g = "!border-danger";
  return /* @__PURE__ */ he("label", { className: `relative w-full ${f}`, children: [
    n && /* @__PURE__ */ P("span", { className: `text-primary  ${s}`, children: n }),
    d ? /* @__PURE__ */ P(
      ff,
      {
        onValueChange: (x) => {
          var E;
          t == null || t.onChange((E = x.value.replace("_", "")) == null ? void 0 : E.toString());
        },
        value: (h = t == null ? void 0 : t.value) == null ? void 0 : h.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        style: { fontSize: "16px" },
        className: `$${r != null && r.error ? g : ""} w-full border-[1px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 outline-none ${c}`,
        format: d,
        ...m
      }
    ) : e === "number" ? /* @__PURE__ */ he(
      "div",
      {
        className: `$${r != null && r.error ? g : ""} ${a} flex items-center justify-between w-full border-[1px] border-primary rounded-[30px] bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ P(
            of,
            {
              decimalScale: p,
              style: { fontSize: "16px" },
              onValueChange: (x) => {
                var E;
                return t == null ? void 0 : t.onChange(+((E = x.value.replace("_", "")) == null ? void 0 : E.toString()));
              },
              value: +(t == null ? void 0 : t.value),
              className: `w-full border-[1px] border-primary rounded-[30px] md:border-primary bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
              ...m,
              ...Hg.number
            }
          ),
          o ? /* @__PURE__ */ P("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: o }) : null
        ]
      }
    ) : /* @__PURE__ */ P(
      "input",
      {
        ...t,
        ...m,
        type: e,
        style: { fontSize: "16px" },
        className: `$${r != null && r.error ? g : ""} w-full bg-white border-[1px] outline-none border-primary rounded-[30px] md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    /* @__PURE__ */ P("div", { className: "absolute w-full items-center flex justify-center flex-row min-h-[24px]", children: /* @__PURE__ */ P(vf, { children: (r == null ? void 0 : r.error) && ((v = Object.keys(r == null ? void 0 : r.error)) == null ? void 0 : v.length) > 0 && /* @__PURE__ */ P(
      zg.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.2 },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ P($o, { error: r == null ? void 0 : r.error })
      }
    ) }) })
  ] });
}, Z0 = Kg, ws = "-", Yg = (e) => {
  const t = Xg(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(ws);
      return a[0] === "" && a.length !== 1 && a.shift(), su(a, t) || qg(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const c = n[i] || [];
      return a && r[i] ? [...c, ...r[i]] : c;
    }
  };
}, su = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? su(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(ws);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, ba = /^\[(.+)\]$/, qg = (e) => {
  if (ba.test(e)) {
    const t = ba.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Xg = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Jg(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    wo(i, r, s, t);
  }), r;
}, wo = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : xa(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Zg(o)) {
        wo(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      wo(i, xa(t, s), n, r);
    });
  });
}, xa = (e, t) => {
  let n = e;
  return t.split(ws).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Zg = (e) => e.isThemeGetter, Jg = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, Qg = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}, iu = "!", ev = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const c = [];
    let l = 0, u = 0, d;
    for (let h = 0; h < a.length; h++) {
      let v = a[h];
      if (l === 0) {
        if (v === o && (r || a.slice(h, h + s) === t)) {
          c.push(a.slice(u, h)), u = h + s;
          continue;
        }
        if (v === "/") {
          d = h;
          continue;
        }
      }
      v === "[" ? l++ : v === "]" && l--;
    }
    const f = c.length === 0 ? a : a.substring(u), p = f.startsWith(iu), m = p ? f.substring(1) : f, g = d && d > u ? d - u : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, tv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, nv = (e) => ({
  cache: Qg(e.cacheSize),
  parseClassName: ev(e),
  ...Yg(e)
}), rv = /\s+/, ov = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(rv);
  let a = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const l = i[c], {
      modifiers: u,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: p
    } = n(l);
    let m = !!p, g = r(m ? f.substring(0, p) : f);
    if (!g) {
      if (!m) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (g = r(f), !g) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      m = !1;
    }
    const h = tv(u).join(":"), v = d ? h + iu : h, x = v + g;
    if (s.includes(x))
      continue;
    s.push(x);
    const E = o(g, m);
    for (let w = 0; w < E.length; ++w) {
      const y = E[w];
      s.push(v + y);
    }
    a = l + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function sv() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = au(t)) && (r && (r += " "), r += n);
  return r;
}
const au = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = au(e[r])) && (n && (n += " "), n += t);
  return n;
};
function iv(e, ...t) {
  let n, r, o, s = i;
  function i(c) {
    const l = t.reduce((u, d) => d(u), e());
    return n = nv(l), r = n.cache.get, o = n.cache.set, s = a, a(c);
  }
  function a(c) {
    const l = r(c);
    if (l)
      return l;
    const u = ov(c, n);
    return o(c, u), u;
  }
  return function() {
    return s(sv.apply(null, arguments));
  };
}
const se = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, cu = /^\[(?:([a-z-]+):)?(.+)\]$/i, av = /^\d+\/\d+$/, cv = /* @__PURE__ */ new Set(["px", "full", "screen"]), lv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, fv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, pv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Lt(e) || cv.has(e) || av.test(e), rt = (e) => Wt(e, "length", Ev), Lt = (e) => !!e && !Number.isNaN(Number(e)), kr = (e) => Wt(e, "number", Lt), Yt = (e) => !!e && Number.isInteger(Number(e)), hv = (e) => e.endsWith("%") && Lt(e.slice(0, -1)), k = (e) => cu.test(e), ot = (e) => lv.test(e), mv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), gv = (e) => Wt(e, mv, lu), vv = (e) => Wt(e, "position", lu), yv = /* @__PURE__ */ new Set(["image", "url"]), bv = (e) => Wt(e, yv, Dv), xv = (e) => Wt(e, "", wv), qt = () => !0, Wt = (e, t, n) => {
  const r = cu.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Ev = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  uv.test(e) && !dv.test(e)
), lu = () => !1, wv = (e) => fv.test(e), Dv = (e) => pv.test(e), Sv = () => {
  const e = se("colors"), t = se("spacing"), n = se("blur"), r = se("brightness"), o = se("borderColor"), s = se("borderRadius"), i = se("borderSpacing"), a = se("borderWidth"), c = se("contrast"), l = se("grayscale"), u = se("hueRotate"), d = se("invert"), f = se("gap"), p = se("gradientColorStops"), m = se("gradientColorStopPositions"), g = se("inset"), h = se("margin"), v = se("opacity"), x = se("padding"), E = se("saturate"), w = se("scale"), y = se("sepia"), D = se("skew"), C = se("space"), S = se("translate"), L = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", k, t], I = () => [k, t], Q = () => ["", Je, rt], re = () => ["auto", Lt, k], ie = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _ = () => ["solid", "dashed", "dotted", "double", "none"], A = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", k], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [Lt, k];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [qt],
      spacing: [Je, rt],
      blur: ["none", "", ot, k],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ot, k],
      borderSpacing: I(),
      borderWidth: Q(),
      contrast: U(),
      grayscale: z(),
      hueRotate: U(),
      invert: z(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hv, rt],
      inset: F(),
      margin: F(),
      opacity: U(),
      padding: I(),
      saturate: U(),
      scale: U(),
      sepia: z(),
      skew: U(),
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
        aspect: ["auto", "square", "video", k]
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
        columns: [ot]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Y()
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
        object: [...ie(), k]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        z: ["auto", Yt, k]
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
        flex: ["1", "auto", "initial", "none", k]
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
        order: ["first", "last", "none", Yt, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [qt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Yt, k]
        }, k]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": re()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": re()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [qt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Yt, k]
        }, k]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": re()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": re()
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
        "auto-cols": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...B()]
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
        content: ["normal", ...B(), "baseline"]
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
        "place-content": [...B(), "baseline"]
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
        "space-x": [C]
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
        "space-y": [C]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [k, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [k, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ot]
        }, ot]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [k, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ot, rt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", kr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Lt, kr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Je, k]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", k]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", k]
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
        decoration: [..._(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Je, rt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Je, k]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
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
        content: ["none", k]
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
        bg: [...ie(), vv]
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
        bg: ["auto", "cover", "contain", gv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, bv]
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
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
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
        "border-opacity": [v]
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
        "divide-opacity": [v]
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
        "outline-offset": [Je, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Je, rt]
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
        "ring-offset": [Je, rt]
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
        shadow: ["", "inner", "none", ot, xv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [qt]
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
        "mix-blend": [...A(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": A()
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
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
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
        "drop-shadow": ["", "none", ot, k]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
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
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
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
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
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
        "backdrop-saturate": [E]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: U()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: U()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", k]
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
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Yt, k]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
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
        "will-change": ["auto", "scroll", "contents", "transform", k]
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
        stroke: [Je, rt, kr]
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
}, Ds = /* @__PURE__ */ iv(Sv), Cv = ({
  children: e,
  className: t
}) => /* @__PURE__ */ P(
  "div",
  {
    className: Ds(
      "bg-main rounded-[25px] py-5 px-[30px] border-primary/10 border",
      t
    ),
    children: e
  }
), uu = Cv, Pv = ({ data: e, className: t, onClick: n }) => {
  const r = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = we(null);
  return /* @__PURE__ */ P(uu, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ P("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((s) => /* @__PURE__ */ he(
    "div",
    {
      onClick: () => n(s.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === s.value && r}`,
      children: [
        /* @__PURE__ */ P("span", { className: " text-sm text-black font-normal transition-all duration-300", children: s.label }),
        s.row && /* @__PURE__ */ P("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: s.row })
      ]
    },
    s.value
  )) }) });
}, J0 = Pv;
function du(e, t) {
  const [n, r] = we(e);
  return de(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), n;
}
const Nv = ({
  options: e,
  field: t,
  className: n,
  ...r
}) => {
  const [o, s] = we(!1), [i, a] = we(""), c = du(i, 100), l = j(null);
  de(() => {
    const d = (f) => {
      l.current && !l.current.contains(f.target) && s(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []);
  const u = (d) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(d)) && (t == null ? void 0 : t.value.filter((f) => f !== d)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, d] || [d]
    );
  };
  return /* @__PURE__ */ he("div", { ref: l, className: "relative", children: [
    /* @__PURE__ */ he("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ P(
        un,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ P(
        "input",
        {
          ...r,
          ref: l,
          className: Ds(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            n
          ),
          value: o && i || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (d) => {
              var f;
              return (f = e.find((p) => p.value === d)) == null ? void 0 : f.label;
            }
          ).join(", ")) || "",
          onFocus: () => s(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (d) => a(d.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ P("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (d) => d.label.toLowerCase().includes(c.toLowerCase())
    ).map((d) => {
      var f;
      return /* @__PURE__ */ P(
        "li",
        {
          onClick: () => u(d.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ he("div", { className: "flex flex-row", children: [
            d.icon && /* @__PURE__ */ P(un, { name: d.icon }),
            /* @__PURE__ */ P(
              "button",
              {
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((f = t == null ? void 0 : t.value) == null ? void 0 : f.includes(d.value)) && "text-primary"}`,
                value: d.value,
                children: d.label
              }
            )
          ] })
        },
        d.value
      );
    }) })
  ] });
}, Q0 = Nv, Av = ({
  placeholder: e,
  setValue: t,
  value: n,
  className: r,
  parentClassName: o
}) => {
  const [s, i] = we(n), a = du(s, 300);
  return de(() => {
    t == null || t(a);
  }, [a]), /* @__PURE__ */ he("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ P(
      un,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ P(
      "input",
      {
        placeholder: e,
        onChange: (c) => i(c.target.value),
        value: s,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${r}`
      }
    )
  ] });
}, eD = Av, Tv = ({
  placeholder: e,
  options: t,
  className: n,
  field: r,
  fieldState: o,
  wrapperClassName: s,
  labelClassName: i,
  parentClassName: a,
  formState: c,
  label: l,
  ...u
}) => {
  var f;
  return /* @__PURE__ */ he("label", { className: `relative w-full ${s}`, children: [
    l && /* @__PURE__ */ P("span", { className: `text-primary  ${i}`, children: l }),
    /* @__PURE__ */ P(
      "div",
      {
        className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
        children: /* @__PURE__ */ he(
          "select",
          {
            ...r,
            ...u,
            defaultValue: "",
            className: `w-full ${o != null && o.error ? "!border-danger" : ""} cursor-pointer appearance-none bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${n}`,
            children: [
              /* @__PURE__ */ P("option", { value: "", children: e }),
              t == null ? void 0 : t.map((p, m) => /* @__PURE__ */ P("option", { value: p.value, className: "text-black", children: p.label }, m))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ P("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((f = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : f.length) && /* @__PURE__ */ P($o, { error: o == null ? void 0 : o.error }) })
  ] });
}, tD = Tv;
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e);
}
function Iv(e, t) {
  if (En(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (En(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ov(e) {
  var t = Iv(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function Rv(e, t, n) {
  return (t = Ov(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ea(Object(n), !0).forEach(function(r) {
      Rv(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ea(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Pe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Da = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), jr = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Sa = {
  INIT: "@@redux/INIT" + jr(),
  REPLACE: "@@redux/REPLACE" + jr(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + jr();
  }
};
function Vv(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Mv(e) {
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
  if (Bv(e)) return "date";
  if (_v(e)) return "error";
  var n = Lv(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Lv(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function _v(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Bv(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function yt(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Mv(e)), t;
}
function fu(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Pe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Pe(1) : "Expected the enhancer to be a function. Instead, received: '" + yt(n) + "'");
    return n(fu)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Pe(2) : "Expected the root reducer to be a function. Instead, received: '" + yt(e) + "'");
  var o = e, s = t, i = [], a = i, c = !1;
  function l() {
    a === i && (a = i.slice());
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Pe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return s;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Pe(4) : "Expected the listener to be a function. Instead, received: '" + yt(g) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Pe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var h = !0;
    return l(), a.push(g), function() {
      if (h) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Pe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        h = !1, l();
        var x = a.indexOf(g);
        a.splice(x, 1), i = null;
      }
    };
  }
  function f(g) {
    if (!Vv(g))
      throw new Error(process.env.NODE_ENV === "production" ? Pe(7) : "Actions must be plain objects. Instead, the actual type was: '" + yt(g) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof g.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Pe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Pe(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, s = o(s, g);
    } finally {
      c = !1;
    }
    for (var h = i = a, v = 0; v < h.length; v++) {
      var x = h[v];
      x();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Pe(10) : "Expected the nextReducer to be a function. Instead, received: '" + yt(g));
    o = g, f({
      type: Sa.REPLACE
    });
  }
  function m() {
    var g, h = d;
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
          throw new Error(process.env.NODE_ENV === "production" ? Pe(11) : "Expected the observer to be an object. Instead, received: '" + yt(x) + "'");
        function E() {
          x.next && x.next(u());
        }
        E();
        var w = h(E);
        return {
          unsubscribe: w
        };
      }
    }, g[Da] = function() {
      return this;
    }, g;
  }
  return f({
    type: Sa.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[Da] = m, r;
}
function Ca(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Pa(e, t) {
  if (typeof e == "function")
    return Ca(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Pe(16) : "bindActionCreators expected an object or a function, but instead received: '" + yt(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = Ca(o, t));
  }
  return n;
}
function pu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0 ? function(r) {
    return r;
  } : t.length === 1 ? t[0] : t.reduce(function(r, o) {
    return function() {
      return r(o.apply(void 0, arguments));
    };
  });
}
function $v() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), s = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Pe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, i = {
        getState: o.getState,
        dispatch: function() {
          return s.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(i);
      });
      return s = pu.apply(void 0, a)(o.dispatch), wa(wa({}, o), {}, {
        dispatch: s
      });
    };
  };
}
function Fv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function kv(e) {
  e();
}
let jv = kv;
const Gv = () => jv, Na = Symbol.for("react-redux-context"), Aa = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Uv() {
  var e;
  if (!G.createContext) return {};
  const t = (e = Aa[Na]) != null ? e : Aa[Na] = /* @__PURE__ */ new Map();
  let n = t.get(G.createContext);
  return n || (n = G.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(G.createContext, n)), n;
}
const hu = /* @__PURE__ */ Uv(), Wv = () => {
  throw new Error("uSES not initialized!");
};
function at() {
  return at = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, at.apply(null, arguments);
}
function mu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var Do = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function zv() {
  if (Ta) return q;
  Ta = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function E(y) {
    if (typeof y == "object" && y !== null) {
      var D = y.$$typeof;
      switch (D) {
        case t:
          switch (y = y.type, y) {
            case c:
            case l:
            case r:
            case s:
            case o:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case u:
                case m:
                case p:
                case i:
                  return y;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  function w(y) {
    return E(y) === l;
  }
  return q.AsyncMode = c, q.ConcurrentMode = l, q.ContextConsumer = a, q.ContextProvider = i, q.Element = t, q.ForwardRef = u, q.Fragment = r, q.Lazy = m, q.Memo = p, q.Portal = n, q.Profiler = s, q.StrictMode = o, q.Suspense = d, q.isAsyncMode = function(y) {
    return w(y) || E(y) === c;
  }, q.isConcurrentMode = w, q.isContextConsumer = function(y) {
    return E(y) === a;
  }, q.isContextProvider = function(y) {
    return E(y) === i;
  }, q.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, q.isForwardRef = function(y) {
    return E(y) === u;
  }, q.isFragment = function(y) {
    return E(y) === r;
  }, q.isLazy = function(y) {
    return E(y) === m;
  }, q.isMemo = function(y) {
    return E(y) === p;
  }, q.isPortal = function(y) {
    return E(y) === n;
  }, q.isProfiler = function(y) {
    return E(y) === s;
  }, q.isStrictMode = function(y) {
    return E(y) === o;
  }, q.isSuspense = function(y) {
    return E(y) === d;
  }, q.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === l || y === s || y === o || y === d || y === f || typeof y == "object" && y !== null && (y.$$typeof === m || y.$$typeof === p || y.$$typeof === i || y.$$typeof === a || y.$$typeof === u || y.$$typeof === h || y.$$typeof === v || y.$$typeof === x || y.$$typeof === g);
  }, q.typeOf = E, q;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Hv() {
  return Ia || (Ia = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function E(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === r || N === l || N === s || N === o || N === d || N === f || typeof N == "object" && N !== null && (N.$$typeof === m || N.$$typeof === p || N.$$typeof === i || N.$$typeof === a || N.$$typeof === u || N.$$typeof === h || N.$$typeof === v || N.$$typeof === x || N.$$typeof === g);
    }
    function w(N) {
      if (typeof N == "object" && N !== null) {
        var Ae = N.$$typeof;
        switch (Ae) {
          case t:
            var R = N.type;
            switch (R) {
              case c:
              case l:
              case r:
              case s:
              case o:
              case d:
                return R;
              default:
                var Xe = R && R.$$typeof;
                switch (Xe) {
                  case a:
                  case u:
                  case m:
                  case p:
                  case i:
                    return Xe;
                  default:
                    return Ae;
                }
            }
          case n:
            return Ae;
        }
      }
    }
    var y = c, D = l, C = a, S = i, L = t, O = u, F = r, I = m, Q = p, re = n, ie = s, _ = o, A = d, B = !1;
    function z(N) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Y(N) || w(N) === c;
    }
    function Y(N) {
      return w(N) === l;
    }
    function U(N) {
      return w(N) === a;
    }
    function oe(N) {
      return w(N) === i;
    }
    function be(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function je(N) {
      return w(N) === u;
    }
    function Ne(N) {
      return w(N) === r;
    }
    function Re(N) {
      return w(N) === m;
    }
    function Ge(N) {
      return w(N) === p;
    }
    function Ye(N) {
      return w(N) === n;
    }
    function Ue(N) {
      return w(N) === s;
    }
    function qe(N) {
      return w(N) === o;
    }
    function At(N) {
      return w(N) === d;
    }
    X.AsyncMode = y, X.ConcurrentMode = D, X.ContextConsumer = C, X.ContextProvider = S, X.Element = L, X.ForwardRef = O, X.Fragment = F, X.Lazy = I, X.Memo = Q, X.Portal = re, X.Profiler = ie, X.StrictMode = _, X.Suspense = A, X.isAsyncMode = z, X.isConcurrentMode = Y, X.isContextConsumer = U, X.isContextProvider = oe, X.isElement = be, X.isForwardRef = je, X.isFragment = Ne, X.isLazy = Re, X.isMemo = Ge, X.isPortal = Ye, X.isProfiler = Ue, X.isStrictMode = qe, X.isSuspense = At, X.isValidElementType = E, X.typeOf = w;
  }()), X;
}
process.env.NODE_ENV === "production" ? Do.exports = zv() : Do.exports = Hv();
var Kv = Do.exports, Ss = Kv, Yv = {
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
}, qv = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Xv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, gu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cs = {};
Cs[Ss.ForwardRef] = Xv;
Cs[Ss.Memo] = gu;
function Oa(e) {
  return Ss.isMemo(e) ? gu : Cs[e.$$typeof] || Yv;
}
var Zv = Object.defineProperty, Jv = Object.getOwnPropertyNames, Ra = Object.getOwnPropertySymbols, Qv = Object.getOwnPropertyDescriptor, ey = Object.getPrototypeOf, Va = Object.prototype;
function vu(e, t, n) {
  if (typeof t != "string") {
    if (Va) {
      var r = ey(t);
      r && r !== Va && vu(e, r, n);
    }
    var o = Jv(t);
    Ra && (o = o.concat(Ra(t)));
    for (var s = Oa(e), i = Oa(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!qv[c] && !(n && n[c]) && !(i && i[c]) && !(s && s[c])) {
        var l = Qv(t, c);
        try {
          Zv(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var ty = vu;
const Ma = /* @__PURE__ */ Fv(ty);
var So = { exports: {} }, Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function ny() {
  if (La) return Z;
  La = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var v = h.$$typeof;
      switch (v) {
        case e:
          switch (h = h.type, h) {
            case n:
            case o:
            case r:
            case l:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case i:
                case c:
                case f:
                case d:
                case s:
                  return h;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Z.ContextConsumer = i, Z.ContextProvider = s, Z.Element = e, Z.ForwardRef = c, Z.Fragment = n, Z.Lazy = f, Z.Memo = d, Z.Portal = t, Z.Profiler = o, Z.StrictMode = r, Z.Suspense = l, Z.SuspenseList = u, Z.isAsyncMode = function() {
    return !1;
  }, Z.isConcurrentMode = function() {
    return !1;
  }, Z.isContextConsumer = function(h) {
    return g(h) === i;
  }, Z.isContextProvider = function(h) {
    return g(h) === s;
  }, Z.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Z.isForwardRef = function(h) {
    return g(h) === c;
  }, Z.isFragment = function(h) {
    return g(h) === n;
  }, Z.isLazy = function(h) {
    return g(h) === f;
  }, Z.isMemo = function(h) {
    return g(h) === d;
  }, Z.isPortal = function(h) {
    return g(h) === t;
  }, Z.isProfiler = function(h) {
    return g(h) === o;
  }, Z.isStrictMode = function(h) {
    return g(h) === r;
  }, Z.isSuspense = function(h) {
    return g(h) === l;
  }, Z.isSuspenseList = function(h) {
    return g(h) === u;
  }, Z.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === o || h === r || h === l || h === u || h === p || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === s || h.$$typeof === i || h.$$typeof === c || h.$$typeof === m || h.getModuleId !== void 0);
  }, Z.typeOf = g, Z;
}
var J = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function ry() {
  return _a || (_a = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = !1, g = !1, h = !1, v = !1, x = !1, E;
    E = Symbol.for("react.module.reference");
    function w(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === o || x || R === r || R === l || R === u || v || R === p || m || g || h || typeof R == "object" && R !== null && (R.$$typeof === f || R.$$typeof === d || R.$$typeof === s || R.$$typeof === i || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === E || R.getModuleId !== void 0));
    }
    function y(R) {
      if (typeof R == "object" && R !== null) {
        var Xe = R.$$typeof;
        switch (Xe) {
          case e:
            var Tt = R.type;
            switch (Tt) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return Tt;
              default:
                var T = Tt && Tt.$$typeof;
                switch (T) {
                  case a:
                  case i:
                  case c:
                  case f:
                  case d:
                  case s:
                    return T;
                  default:
                    return Xe;
                }
            }
          case t:
            return Xe;
        }
      }
    }
    var D = i, C = s, S = e, L = c, O = n, F = f, I = d, Q = t, re = o, ie = r, _ = l, A = u, B = !1, z = !1;
    function Y(R) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(R) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(R) {
      return y(R) === i;
    }
    function be(R) {
      return y(R) === s;
    }
    function je(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function Ne(R) {
      return y(R) === c;
    }
    function Re(R) {
      return y(R) === n;
    }
    function Ge(R) {
      return y(R) === f;
    }
    function Ye(R) {
      return y(R) === d;
    }
    function Ue(R) {
      return y(R) === t;
    }
    function qe(R) {
      return y(R) === o;
    }
    function At(R) {
      return y(R) === r;
    }
    function N(R) {
      return y(R) === l;
    }
    function Ae(R) {
      return y(R) === u;
    }
    J.ContextConsumer = D, J.ContextProvider = C, J.Element = S, J.ForwardRef = L, J.Fragment = O, J.Lazy = F, J.Memo = I, J.Portal = Q, J.Profiler = re, J.StrictMode = ie, J.Suspense = _, J.SuspenseList = A, J.isAsyncMode = Y, J.isConcurrentMode = U, J.isContextConsumer = oe, J.isContextProvider = be, J.isElement = je, J.isForwardRef = Ne, J.isFragment = Re, J.isLazy = Ge, J.isMemo = Ye, J.isPortal = Ue, J.isProfiler = qe, J.isStrictMode = At, J.isSuspense = N, J.isSuspenseList = Ae, J.isValidElementType = w, J.typeOf = y;
  }()), J;
}
process.env.NODE_ENV === "production" ? So.exports = ny() : So.exports = ry();
var Ba = So.exports;
function Ps(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Gr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ps(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function oy(e, t, n) {
  Gr(e, "mapStateToProps"), Gr(t, "mapDispatchToProps"), Gr(n, "mergeProps");
}
const sy = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function iy(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: s,
  areStatePropsEqual: i
}) {
  let a = !1, c, l, u, d, f;
  function p(x, E) {
    return c = x, l = E, u = e(c, l), d = t(r, l), f = n(u, d, l), a = !0, f;
  }
  function m() {
    return u = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function g() {
    return e.dependsOnOwnProps && (u = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function h() {
    const x = e(c, l), E = !i(x, u);
    return u = x, E && (f = n(u, d, l)), f;
  }
  function v(x, E) {
    const w = !s(E, l), y = !o(x, c, E, l);
    return c = x, l = E, w && y ? m() : w ? g() : y ? h() : f;
  }
  return function(E, w) {
    return a ? v(E, w) : p(E, w);
  };
}
function ay(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, s = mu(t, sy);
  const i = n(e, s), a = r(e, s), c = o(e, s);
  return process.env.NODE_ENV !== "production" && oy(i, a, c), iy(i, a, c, e, s);
}
function cy(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...s) => t(o(...s)));
  }
  return n;
}
function ly(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function yu(e, t, n) {
  ly(e) || Ps(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Co(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function $a(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function bu(e, t) {
  return function(r, {
    displayName: o
  }) {
    const s = function(a, c) {
      return s.dependsOnOwnProps ? s.mapToProps(a, c) : s.mapToProps(a, void 0);
    };
    return s.dependsOnOwnProps = !0, s.mapToProps = function(a, c) {
      s.mapToProps = e, s.dependsOnOwnProps = $a(e);
      let l = s(a, c);
      return typeof l == "function" && (s.mapToProps = l, s.dependsOnOwnProps = $a(l), l = s(a, c)), process.env.NODE_ENV !== "production" && yu(l, o, t), l;
    }, s;
  };
}
function Ns(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function uy(e) {
  return e && typeof e == "object" ? Co((t) => (
    // @ts-ignore
    cy(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    bu(e, "mapDispatchToProps")
  ) : Ns(e, "mapDispatchToProps") : Co((t) => ({
    dispatch: t
  }));
}
function dy(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    bu(e, "mapStateToProps")
  ) : Ns(e, "mapStateToProps") : Co(() => ({}));
}
function fy(e, t, n) {
  return at({}, n, e, t);
}
function py(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let s = !1, i;
    return function(c, l, u) {
      const d = e(c, l, u);
      return s ? o(d, i) || (i = d) : (s = !0, i = d, process.env.NODE_ENV !== "production" && yu(i, r, "mergeProps")), i;
    };
  };
}
function hy(e) {
  return e ? typeof e == "function" ? py(e) : Ns(e, "mergeProps") : () => fy;
}
function my() {
  const e = Gv();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], o = t;
      for (; o; )
        r.push(o), o = o.next;
      return r;
    },
    subscribe(r) {
      let o = !0, s = n = {
        callback: r,
        next: null,
        prev: n
      };
      return s.prev ? s.prev.next = s : t = s, function() {
        !o || t === null || (o = !1, s.next ? s.next.prev = s.prev : n = s.prev, s.prev ? s.prev.next = s.next : t = s.next);
      };
    }
  };
}
const Fa = {
  notify() {
  },
  get: () => []
};
function xu(e, t) {
  let n, r = Fa, o = 0, s = !1;
  function i(g) {
    u();
    const h = r.subscribe(g);
    let v = !1;
    return () => {
      v || (v = !0, h(), d());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return s;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = my());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Fa);
  }
  function f() {
    s || (s = !0, u());
  }
  function p() {
    s && (s = !1, d());
  }
  const m = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
const gy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = gy ? G.useLayoutEffect : G.useEffect;
function ka(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ur(e, t) {
  if (ka(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !ka(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const vy = ["reactReduxForwardedRef"];
let yy = Wv;
const by = [null, null], xy = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Ey(e, t, n) {
  ir(() => e(...t), n);
}
function wy(e, t, n, r, o, s) {
  e.current = r, n.current = !1, o.current && (o.current = null, s());
}
function Dy(e, t, n, r, o, s, i, a, c, l, u) {
  if (!e) return () => {
  };
  let d = !1, f = null;
  const p = () => {
    if (d || !a.current)
      return;
    const g = t.getState();
    let h, v;
    try {
      h = r(g, o.current);
    } catch (x) {
      v = x, f = x;
    }
    v || (f = null), h === s.current ? i.current || l() : (s.current = h, c.current = h, i.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function Sy(e, t) {
  return e === t;
}
let ja = !1;
function Eu(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Sy,
  areOwnPropsEqual: s = Ur,
  areStatePropsEqual: i = Ur,
  areMergedPropsEqual: a = Ur,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = hu
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !ja && (ja = !0, Ps('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const u = l, d = dy(e), f = uy(t), p = hy(n), m = !!e;
  return (h) => {
    if (process.env.NODE_ENV !== "production" && !Ba.isValidElementType(h))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${xy(h)}`);
    const v = h.displayName || h.name || "Component", x = `Connect(${v})`, E = {
      shouldHandleStateChanges: m,
      displayName: x,
      wrappedComponentName: v,
      WrappedComponent: h,
      // @ts-ignore
      initMapStateToProps: d,
      // @ts-ignore
      initMapDispatchToProps: f,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: i,
      areOwnPropsEqual: s,
      areMergedPropsEqual: a
    };
    function w(C) {
      const [S, L, O] = G.useMemo(() => {
        const {
          reactReduxForwardedRef: N
        } = C, Ae = mu(C, vy);
        return [C.context, N, Ae];
      }, [C]), F = G.useMemo(() => S && S.Consumer && // @ts-ignore
      Ba.isContextConsumer(/* @__PURE__ */ G.createElement(S.Consumer, null)) ? S : u, [S, u]), I = G.useContext(F), Q = !!C.store && !!C.store.getState && !!C.store.dispatch, re = !!I && !!I.store;
      if (process.env.NODE_ENV !== "production" && !Q && !re)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const ie = Q ? C.store : I.store, _ = re ? I.getServerState : ie.getState, A = G.useMemo(() => ay(ie.dispatch, E), [ie]), [B, z] = G.useMemo(() => {
        if (!m) return by;
        const N = xu(ie, Q ? void 0 : I.subscription), Ae = N.notifyNestedSubs.bind(N);
        return [N, Ae];
      }, [ie, Q, I]), Y = G.useMemo(() => Q ? I : at({}, I, {
        subscription: B
      }), [Q, I, B]), U = G.useRef(), oe = G.useRef(O), be = G.useRef(), je = G.useRef(!1);
      G.useRef(!1);
      const Ne = G.useRef(!1), Re = G.useRef();
      ir(() => (Ne.current = !0, () => {
        Ne.current = !1;
      }), []);
      const Ge = G.useMemo(() => () => be.current && O === oe.current ? be.current : A(ie.getState(), O), [ie, O]), Ye = G.useMemo(() => (Ae) => B ? Dy(
        m,
        ie,
        B,
        // @ts-ignore
        A,
        oe,
        U,
        je,
        Ne,
        be,
        z,
        Ae
      ) : () => {
      }, [B]);
      Ey(wy, [oe, U, je, O, be, z]);
      let Ue;
      try {
        Ue = yy(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ye,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ge,
          _ ? () => A(_(), O) : Ge
        );
      } catch (N) {
        throw Re.current && (N.message += `
The error may be correlated with this previous error:
${Re.current.stack}

`), N;
      }
      ir(() => {
        Re.current = void 0, be.current = void 0, U.current = Ue;
      });
      const qe = G.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ G.createElement(h, at({}, Ue, {
          ref: L
        }))
      ), [L, h, Ue]);
      return G.useMemo(() => m ? /* @__PURE__ */ G.createElement(F.Provider, {
        value: Y
      }, qe) : qe, [F, qe, Y]);
    }
    const D = G.memo(w);
    if (D.WrappedComponent = h, D.displayName = w.displayName = x, c) {
      const S = G.forwardRef(function(O, F) {
        return /* @__PURE__ */ G.createElement(D, at({}, O, {
          reactReduxForwardedRef: F
        }));
      });
      return S.displayName = x, S.WrappedComponent = h, Ma(S, h);
    }
    return Ma(D, h);
  };
}
function Cy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: s = "once"
}) {
  const i = G.useMemo(() => {
    const l = xu(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: s
    };
  }, [e, r, o, s]), a = G.useMemo(() => e.getState(), [e]);
  ir(() => {
    const {
      subscription: l
    } = i;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [i, a]);
  const c = t || hu;
  return /* @__PURE__ */ G.createElement(c.Provider, {
    value: i
  }, n);
}
function Py(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function wu(e, t) {
  var n = we(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = j(!0), o = j(n), s = r.current || !!(t && o.current.inputs && Py(t, o.current.inputs)), i = s ? o.current : {
    inputs: t,
    result: e()
  };
  return de(function() {
    r.current = !1, o.current = i;
  }, [i]), i.result;
}
function Ny(e, t) {
  return wu(function() {
    return e;
  }, t);
}
var K = wu, V = Ny, Ay = process.env.NODE_ENV === "production", Wr = "Invariant failed";
function Ga(e, t) {
  if (Ay)
    throw new Error(Wr);
  var n = typeof t == "function" ? t() : t, r = n ? "".concat(Wr, ": ").concat(n) : Wr;
  throw new Error(r);
}
var ke = function(t) {
  var n = t.top, r = t.right, o = t.bottom, s = t.left, i = r - s, a = o - n, c = {
    top: n,
    right: r,
    bottom: o,
    left: s,
    width: i,
    height: a,
    x: s,
    y: n,
    center: {
      x: (r + s) / 2,
      y: (o + n) / 2
    }
  };
  return c;
}, As = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Ua = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Ty = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, zr = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ts = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? zr : r, s = t.border, i = s === void 0 ? zr : s, a = t.padding, c = a === void 0 ? zr : a, l = ke(As(n, o)), u = ke(Ua(n, i)), d = ke(Ua(u, c));
  return {
    marginBox: l,
    borderBox: ke(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: i,
    padding: c
  };
}, Me = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Ga(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : Ga()), o;
}, Iy = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, ar = function(t, n) {
  var r = t.borderBox, o = t.border, s = t.margin, i = t.padding, a = Ty(r, n);
  return Ts({
    borderBox: a,
    border: o,
    margin: s,
    padding: i
  });
}, cr = function(t, n) {
  return n === void 0 && (n = Iy()), ar(t, n);
}, Du = function(t, n) {
  var r = {
    top: Me(n.marginTop),
    right: Me(n.marginRight),
    bottom: Me(n.marginBottom),
    left: Me(n.marginLeft)
  }, o = {
    top: Me(n.paddingTop),
    right: Me(n.paddingRight),
    bottom: Me(n.paddingBottom),
    left: Me(n.paddingLeft)
  }, s = {
    top: Me(n.borderTopWidth),
    right: Me(n.borderRightWidth),
    bottom: Me(n.borderBottomWidth),
    left: Me(n.borderLeftWidth)
  };
  return Ts({
    borderBox: t,
    margin: r,
    padding: o,
    border: s
  });
}, Su = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Du(n, r);
}, Wa = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Oy(e, t) {
  return !!(e === t || Wa(e) && Wa(t));
}
function Ry(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Oy(e[n], t[n]))
      return !1;
  return !0;
}
function me(e, t) {
  t === void 0 && (t = Ry);
  var n = null;
  function r() {
    for (var o = [], s = 0; s < arguments.length; s++)
      o[s] = arguments[s];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var i = e.apply(this, o);
    return n = {
      lastResult: i,
      lastArgs: o,
      lastThis: this
    }, i;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var wn = function(t) {
  var n = [], r = null, o = function() {
    for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
      a[c] = arguments[c];
    n = a, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Vy = process.env.NODE_ENV === "production", My = /[ \t]{2,}/g, Ly = /^[ \t]*/gm, za = (e) => e.replace(My, " ").replace(Ly, "").trim(), _y = (e) => za(`
  %c@hello-pangea/dnd

  %c${za(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), By = (e) => [_y(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], $y = "__@hello-pangea/dnd-disable-dev-warnings";
function Cu(e, t) {
  Vy || typeof window < "u" && window[$y] || console[e](...By(t));
}
const ne = Cu.bind(null, "warn"), Po = Cu.bind(null, "error");
function ct() {
}
function Fy(e, t) {
  return {
    ...e,
    ...t
  };
}
function _e(e, t, n) {
  const r = t.map((o) => {
    const s = Fy(n, o.options);
    return e.addEventListener(o.eventName, o.fn, s), function() {
      e.removeEventListener(o.eventName, o.fn, s);
    };
  });
  return function() {
    r.forEach((s) => {
      s();
    });
  };
}
const ky = process.env.NODE_ENV === "production", Ha = "Invariant failed";
class Dn extends Error {
}
Dn.prototype.toString = function() {
  return this.message;
};
function b(e, t) {
  throw ky ? new Dn(Ha) : new Dn(`${Ha}: ${t || ""}`);
}
class jy extends H.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = ct, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && ne(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof Dn && (n.preventDefault(), process.env.NODE_ENV !== "production" && Po(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = _e(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Dn) {
      process.env.NODE_ENV !== "production" && Po(t.message), this.setState({});
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
const Gy = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, lr = (e) => e + 1, Uy = (e) => `
  You have lifted an item in position ${lr(e.source.index)}
`, Pu = (e, t) => {
  const n = e.droppableId === t.droppableId, r = lr(e.index), o = lr(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Nu = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, Wy = (e) => {
  const t = e.destination;
  if (t)
    return Pu(e.source, t);
  const n = e.combine;
  return n ? Nu(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Ka = (e) => `
  The item has returned to its starting position
  of ${lr(e.index)}
`, zy = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Ka(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Pu(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Nu(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Ka(e.source)}
  `;
}, Hy = {
  dragHandleUsageInstructions: Gy,
  onDragStart: Uy,
  onDragUpdate: Wy,
  onDragEnd: zy
};
var Jn = Hy;
const ge = {
  x: 0,
  y: 0
}, ye = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Te = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), lt = (e, t) => e.x === t.x && e.y === t.y, zt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ct = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Sn = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Ya = (e, t) => Math.min(...t.map((n) => Sn(e, n))), Au = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ky = (e, t) => {
  const n = ke({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const Ln = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), qa = (e) => [{
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
}], Yy = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, qy = (e, t) => t ? Ln(e, t.scroll.diff.displacement) : e, Xy = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, Zy = (e, t) => t && t.shouldClipSubject ? Ky(t.pageMarginBox, e) : ke(e);
var $t = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = qy(e.marginBox, r), s = Xy(o, n, t), i = Zy(s, r);
  return {
    page: e,
    withPlaceholder: t,
    active: i
  };
}, Is = (e, t) => {
  e.frame || (process.env.NODE_ENV, b());
  const n = e.frame, r = Te(t, n.scroll.initial), o = zt(r), s = {
    ...n,
    scroll: {
      initial: n.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: o
      },
      max: n.scroll.max
    }
  }, i = $t({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: s
  });
  return {
    ...e,
    frame: s,
    subject: i
  };
};
const Tu = me((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Iu = me((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), br = me((e) => Object.values(e)), Jy = me((e) => Object.values(e));
var Nt = me((e, t) => Jy(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Os(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function xr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Er = me((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Qy = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Os(o))
    return null;
  function i(p) {
    const m = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: m
    };
  }
  const a = o.displaced.all, c = a.length ? a[0] : null;
  if (e)
    return c ? i(c) : null;
  const l = Er(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return i(p.descriptor.id);
  }
  const u = l.findIndex((p) => p.descriptor.id === c);
  u === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find displaced item in set") : b());
  const d = u - 1;
  if (d < 0)
    return null;
  const f = l[d];
  return i(f.descriptor.id);
}, Ht = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Ou = {
  point: ge,
  value: 0
}, Cn = {
  invisible: {},
  visible: {},
  all: []
}, eb = {
  displaced: Cn,
  displacedBy: Ou,
  at: null
};
var tb = eb, $e = (e, t) => (n) => e <= n && n <= t, Ru = (e) => {
  const t = $e(e.top, e.bottom), n = $e(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const s = t(r.top) || t(r.bottom), i = n(r.left) || n(r.right);
    if (s && i)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && i || l && s;
  };
}, nb = (e) => {
  const t = $e(e.top, e.bottom), n = $e(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Rs = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Vu = {
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
var rb = (e) => (t) => {
  const n = $e(t.top, t.bottom), r = $e(t.left, t.right);
  return (o) => e === Rs ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const ob = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : ge;
  return Ln(e, n);
}, sb = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, ib = (e, t, n) => n(t)(e), Vs = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const s = r ? ob(e, t) : e;
  return sb(s, t, o) && ib(s, n, o);
}, ab = (e) => Vs({
  ...e,
  isVisibleThroughFrameFn: Ru
}), Mu = (e) => Vs({
  ...e,
  isVisibleThroughFrameFn: nb
}), cb = (e) => Vs({
  ...e,
  isVisibleThroughFrameFn: rb(e.destination.axis)
}), lb = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  const {
    invisible: r,
    visible: o
  } = t;
  if (r[e])
    return !1;
  const s = o[e];
  return s ? s.shouldAnimate : !0;
};
function ub(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return ke(As(n, r));
}
function Pn({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: s
}) {
  return e.reduce(function(a, c) {
    const l = ub(c, n), u = c.descriptor.id;
    if (a.all.push(u), !ab({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const f = lb(u, s, o), p = {
      draggableId: u,
      shouldAnimate: f
    };
    return a.visible[u] = p, a;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function db(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Xa({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = db(e, {
    inHomeList: t
  });
  return {
    displaced: Cn,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: o
      }
    }
  };
}
function ur({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: s,
  index: i,
  forceShouldAnimate: a
}) {
  const c = Ht(e, n);
  if (i == null)
    return Xa({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((m) => m.descriptor.index === i);
  if (!l)
    return Xa({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = Er(e, t), d = t.indexOf(l), f = u.slice(d);
  return {
    displaced: Pn({
      afterDragging: f,
      destination: n,
      displacedBy: o,
      last: s,
      viewport: r.frame,
      forceShouldAnimate: a
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: i
      }
    }
  };
}
function pt(e, t) {
  return !!t.effected[e];
}
var fb = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const s = r.draggableId, a = n[s].descriptor.index;
  return pt(s, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, pb = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, s = e ? o + 1 : o - 1, i = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return s < i || s > c ? null : s;
}, hb = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: s,
  previousImpact: i,
  viewport: a,
  afterCritical: c
}) => {
  const l = i.at;
  if (l || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot move in direction without previous impact location") : b()), l.type === "REORDER") {
    const d = pb({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: s
    });
    return d == null ? null : ur({
      draggable: n,
      insideDestination: s,
      destination: o,
      viewport: a,
      last: i.displaced,
      displacedBy: i.displacedBy,
      index: d
    });
  }
  const u = fb({
    isMovingForward: e,
    destination: o,
    displaced: i.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return u == null ? null : ur({
    draggable: n,
    insideDestination: s,
    destination: o,
    viewport: a,
    last: i.displaced,
    displacedBy: i.displacedBy,
    index: u
  });
}, mb = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return pt(n, t) ? o ? ge : zt(r.point) : o ? r.point : ge;
}, gb = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = xr(t);
  r || (process.env.NODE_ENV, b());
  const o = r.draggableId, s = n[o].page.borderBox.center, i = mb({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return ye(s, i);
};
const Lu = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, vb = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Ms = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Za = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ct(e.line, t.marginBox[e.end] + Lu(e, n), Ms(e, t.marginBox, n)), Ja = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ct(e.line, t.marginBox[e.start] - vb(e, n), Ms(e, t.marginBox, n)), yb = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ct(e.line, t.contentBox[e.start] + Lu(e, n), Ms(e, t.contentBox, n));
var bb = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const s = Nt(r.descriptor.id, n), i = t.page, a = r.axis;
  if (!s.length)
    return yb({
      axis: a,
      moveInto: r.page,
      isMoving: i
    });
  const {
    displaced: c,
    displacedBy: l
  } = e, u = c.all[0];
  if (u) {
    const f = n[u];
    if (pt(u, o))
      return Ja({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: i
      });
    const p = ar(f.page, l.point);
    return Ja({
      axis: a,
      moveRelativeTo: p,
      isMoving: i
    });
  }
  const d = s[s.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return i.borderBox.center;
  if (pt(d.descriptor.id, o)) {
    const f = ar(d.page, zt(o.displacedBy.point));
    return Za({
      axis: a,
      moveRelativeTo: f,
      isMoving: i
    });
  }
  return Za({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: i
  });
}, No = (e, t) => {
  const n = e.frame;
  return n ? ye(t, n.scroll.diff.displacement) : t;
};
const xb = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const s = t.page.borderBox.center, i = e.at;
  return !n || !i ? s : i.type === "REORDER" ? bb({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : gb({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var wr = (e) => {
  const t = xb(e), n = e.droppable;
  return n ? No(n, t) : t;
}, _u = (e, t) => {
  const n = Te(t, e.scroll.initial), r = zt(n);
  return {
    frame: ke({
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
        value: n,
        displacement: r
      }
    }
  };
};
function Qa(e, t) {
  return e.map((n) => t[n]);
}
function Eb(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var wb = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const s = _u(t, ye(t.scroll.current, o)), i = n.frame ? Is(n, ye(n.frame.scroll.current, o)) : n, a = e.displaced, c = Pn({
    afterDragging: Qa(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: s.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = Pn({
    afterDragging: Qa(a.all, r),
    destination: i,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, c, l];
  return a.all.forEach((m) => {
    const g = Eb(m, f);
    if (g) {
      d[m] = g;
      return;
    }
    u[m] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: u,
      visible: d
    }
  };
}, Db = (e, t) => ye(e.scroll.diff.displacement, t), Ls = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Db(n, e), o = Te(r, t.page.borderBox.center);
  return ye(t.client.borderBox.center, o);
}, Bu = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: s = !1
}) => {
  const i = Te(n, e.page.borderBox.center), c = {
    target: Ln(e.page.borderBox, i),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return s ? cb(c) : Mu(c);
}, Sb = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: s,
  previousPageBorderBoxCenter: i,
  previousClientSelection: a,
  afterCritical: c
}) => {
  if (!n.isEnabled)
    return null;
  const l = Nt(n.descriptor.id, r), u = Ht(t, n), d = Qy({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || hb({
    isMovingForward: e,
    isInHomeList: u,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: s,
    afterCritical: c
  });
  if (!d)
    return null;
  const f = wr({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (Bu({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: s.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Ls({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: s
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = Te(f, i), g = wb({
    impact: d,
    viewport: s,
    destination: n,
    draggables: r,
    maxScrollChange: m
  });
  return {
    clientSelection: a,
    impact: g,
    scrollJumpRequest: m
  };
};
const De = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get clipped area from droppable") : b()), t;
};
var Cb = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const s = n.subject.active;
  if (!s)
    return null;
  const i = n.axis, a = $e(s[i.start], s[i.end]), c = br(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => Ru(o.frame)(De(u))).filter((u) => {
    const d = De(u);
    return e ? s[i.crossAxisEnd] < d[i.crossAxisEnd] : d[i.crossAxisStart] < s[i.crossAxisStart];
  }).filter((u) => {
    const d = De(u), f = $e(d[i.start], d[i.end]);
    return a(d[i.start]) || a(d[i.end]) || f(s[i.start]) || f(s[i.end]);
  }).sort((u, d) => {
    const f = De(u)[i.crossAxisStart], p = De(d)[i.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => De(u)[i.crossAxisStart] === De(f[0])[i.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((u) => $e(De(u)[i.start], De(u)[i.end])(t[i.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((u, d) => De(u)[i.start] - De(d)[i.start])[0] : c.sort((u, d) => {
    const f = Ya(t, qa(De(u))), p = Ya(t, qa(De(d)));
    return f !== p ? f - p : De(u)[i.start] - De(d)[i.start];
  })[0];
};
const ec = (e, t) => {
  const n = e.page.borderBox.center;
  return pt(e.descriptor.id, t) ? Te(n, t.displacedBy.point) : n;
}, Pb = (e, t) => {
  const n = e.page.borderBox;
  return pt(e.descriptor.id, t) ? Ln(n, zt(t.displacedBy.point)) : n;
};
var Nb = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((i) => Mu({
  target: Pb(i, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((i, a) => {
  const c = Sn(e, No(n, ec(i, o))), l = Sn(e, No(n, ec(a, o)));
  return c < l ? -1 : l < c ? 1 : i.descriptor.index - a.descriptor.index;
})[0] || null, _n = me(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ct(t.line, r)
  };
});
const Ab = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ct(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = Nt(e.descriptor.id, n).reduce((l, u) => l + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ct(r.line, c);
}, $u = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Fu = (e, t, n) => {
  const r = e.frame;
  Ht(t, e) && (process.env.NODE_ENV !== "production" ? b(!1, "Should not add placeholder space to home list") : b()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot add placeholder size to a subject when it already has one") : b());
  const o = _n(e.axis, t.displaceBy).point, s = Ab(e, o, n), i = {
    placeholderSize: o,
    increasedBy: s,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = $t({
      page: e.subject.page,
      withPlaceholder: i,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: u
    };
  }
  const a = s ? ye(r.scroll.max, s) : r.scroll.max, c = $u(r, a), l = $t({
    page: e.subject.page,
    withPlaceholder: i,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: l,
    frame: c
  };
}, Tb = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot remove placeholder form subject when there was none") : b());
  const n = e.frame;
  if (!n) {
    const i = $t({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: i
    };
  }
  const r = t.oldFrameMaxScroll;
  r || (process.env.NODE_ENV !== "production" ? b(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : b());
  const o = $u(n, r), s = $t({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: s,
    frame: o
  };
};
var Ib = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: n,
  draggable: r,
  draggables: o,
  destination: s,
  viewport: i,
  afterCritical: a
}) => {
  if (!t) {
    if (n.length)
      return null;
    const d = {
      displaced: Cn,
      displacedBy: Ou,
      at: {
        type: "REORDER",
        destination: {
          droppableId: s.descriptor.id,
          index: 0
        }
      }
    }, f = wr({
      impact: d,
      draggable: r,
      droppable: s,
      draggables: o,
      afterCritical: a
    }), p = Ht(r, s) ? s : Fu(s, r, o);
    return Bu({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: f,
      viewport: i.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? d : null;
  }
  const c = e[s.axis.line] <= t.page.borderBox.center[s.axis.line], l = (() => {
    const d = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? d : d + 1;
  })(), u = _n(s.axis, r.displaceBy);
  return ur({
    draggable: r,
    insideDestination: n,
    destination: s,
    viewport: i,
    displacedBy: u,
    last: Cn,
    index: l
  });
}, Ob = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: s,
  viewport: i,
  afterCritical: a
}) => {
  const c = Cb({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: s,
    viewport: i
  });
  if (!c)
    return null;
  const l = Nt(c.descriptor.id, o), u = Nb({
    pageBorderBoxCenter: t,
    viewport: i,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), d = Ib({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: u,
    insideDestination: l,
    viewport: i,
    afterCritical: a
  });
  if (!d)
    return null;
  const f = wr({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Ls({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: i
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, Ie = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Rb = (e, t) => {
  const n = Ie(e);
  return n ? t[n] : null;
};
var Vb = ({
  state: e,
  type: t
}) => {
  const n = Rb(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], s = n || o, i = s.axis.direction, a = i === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || i === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? Sb({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    destination: s,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Ob({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    isOver: s,
    draggables: d,
    droppables: f,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function bt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function ku(e) {
  const t = $e(e.top, e.bottom), n = $e(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function Mb(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Lb({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((s) => {
    const i = s.axis, a = Ct(s.axis.line, e.center[i.line], s.page.borderBox.center[i.crossAxisLine]);
    return {
      id: s.descriptor.id,
      distance: Sn(r, a)
    };
  }).sort((s, i) => i.distance - s.distance);
  return o[0] ? o[0].id : null;
}
function _b({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = br(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const s = o.subject.active;
    if (!s || !Mb(e, s))
      return !1;
    if (ku(s)(e.center))
      return !0;
    const i = o.axis, a = s.center[i.crossAxisLine], c = e[i.crossAxisStart], l = e[i.crossAxisEnd], u = $e(s[i.crossAxisStart], s[i.crossAxisEnd]), d = u(c), f = u(l);
    return !d && !f ? !0 : d ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : Lb({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const ju = (e, t) => ke(Ln(e, t));
var Bb = (e, t) => {
  const n = e.frame;
  return n ? ju(t, n.scroll.diff.value) : t;
};
function Gu({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function $b({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Fb = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = n.axis, c = _n(n.axis, t.displaceBy), l = c.value, u = e[a.start], d = e[a.end], p = Er(t, r).find((g) => {
    const h = g.descriptor.id, v = g.page.borderBox.center[a.line], x = pt(h, i), E = Gu({
      displaced: o,
      id: h
    });
    return x ? E ? d <= v : u < v - l : E ? d <= v + l : u < v;
  }) || null, m = $b({
    draggable: t,
    closest: p,
    inHomeList: Ht(t, n)
  });
  return ur({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: s,
    last: o,
    displacedBy: c,
    index: m
  });
};
const kb = 4;
var jb = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: s
}) => {
  if (!r.isCombineEnabled)
    return null;
  const i = r.axis, a = _n(r.axis, e.displaceBy), c = a.value, l = t[i.start], u = t[i.end], f = Er(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, x = h[i.size] / kb, E = pt(g, s), w = Gu({
      displaced: n.displaced,
      id: g
    });
    return E ? w ? u > h[i.start] + x && u < h[i.end] - x : l > h[i.start] - c + x && l < h[i.end] - c - x : w ? u > h[i.start] + c + x && u < h[i.end] + c - x : l > h[i.start] + x && l < h[i.end] - x;
  });
  return f ? {
    displacedBy: a,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: f.descriptor.id,
        droppableId: r.descriptor.id
      }
    }
  } : null;
}, Uu = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = ju(t.page.borderBox, e), c = _b({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return tb;
  const l = r[c], u = Nt(l.descriptor.id, n), d = Bb(l, a);
  return jb({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: u,
    afterCritical: i
  }) || Fb({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: u,
    last: o.displaced,
    viewport: s,
    afterCritical: i
  });
}, _s = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Gb = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = Ie(e), o = Ie(t);
  if (!r || r === o)
    return n;
  const s = n[r];
  if (!s.subject.withPlaceholder)
    return n;
  const i = Tb(s);
  return _s(n, i);
};
var Ub = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const s = Gb({
    previousImpact: r,
    impact: o,
    droppables: n
  }), i = Ie(o);
  if (!i)
    return s;
  const a = n[i];
  if (Ht(e, a) || a.subject.withPlaceholder)
    return s;
  const c = Fu(a, e, t);
  return _s(s, c);
}, an = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: s
}) => {
  const i = r || e.viewport, a = n || e.dimensions, c = t || e.current.client.selection, l = Te(c, e.initial.client.selection), u = {
    offset: l,
    selection: c,
    borderBoxCenter: ye(e.initial.client.borderBoxCenter, l)
  }, d = {
    selection: ye(u.selection, i.scroll.current),
    borderBoxCenter: ye(u.borderBoxCenter, i.scroll.current),
    offset: ye(u.offset, i.scroll.diff.value)
  }, f = {
    client: u,
    page: d
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: i,
      current: f
    };
  const p = a.draggables[e.critical.draggable.id], m = o || Uu({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: i,
    afterCritical: e.afterCritical
  }), g = Ub({
    draggable: p,
    impact: m,
    previousImpact: e.impact,
    draggables: a.draggables,
    droppables: a.droppables
  });
  return {
    ...e,
    current: f,
    dimensions: {
      draggables: a.draggables,
      droppables: g
    },
    impact: m,
    viewport: i,
    scrollJumpRequest: s || null,
    forceShouldAnimate: s ? !1 : null
  };
};
function Wb(e, t) {
  return e.map((n) => t[n]);
}
var Wu = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const s = e.displaced, i = Wb(s.all, n), a = Pn({
    afterDragging: i,
    destination: r,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: s
  });
  return {
    ...e,
    displaced: a
  };
}, zu = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: s
}) => {
  const i = wr({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: s
  });
  return Ls({
    pageBorderBoxCenter: i,
    draggable: t,
    viewport: o
  });
}, Hu = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, b());
  const r = e.impact, o = n || e.viewport, s = t || e.dimensions, {
    draggables: i,
    droppables: a
  } = s, c = i[e.critical.draggable.id], l = Ie(r);
  l || (process.env.NODE_ENV !== "production" ? b(!1, "Must be over a destination in SNAP movement mode") : b());
  const u = a[l], d = Wu({
    impact: r,
    viewport: o,
    destination: u,
    draggables: i
  }), f = zu({
    impact: d,
    draggable: c,
    droppable: u,
    draggables: i,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return an({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: s,
    viewport: o
  });
}, zb = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Ku = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = _n(t.axis, e.displaceBy), s = Nt(t.descriptor.id, n), i = s.indexOf(e);
  i === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Expected draggable to be inside home list") : b());
  const a = s.slice(i + 1), c = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: Pn({
        afterDragging: a,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: r.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: zb(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Hb = (e, t) => ({
  draggables: e.draggables,
  droppables: _s(e.droppables, t)
});
const Bn = (e) => {
  process.env.NODE_ENV;
}, $n = (e) => {
  process.env.NODE_ENV;
};
var Kb = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = ar(e.client, t), o = cr(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, Yb = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Expected Droppable to have a frame") : b()), t;
}, qb = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const s = o.descriptor.droppableId, i = t[s], c = Yb(i).scroll.diff.value, l = ye(r, c);
    return Kb({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Xb = ({
  state: e,
  published: t
}) => {
  Bn();
  const n = t.modified.map((v) => {
    const x = e.dimensions.droppables[v.droppableId];
    return Is(x, v.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Tu(n)
  }, o = Iu(qb({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), s = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((v) => {
    delete s[v];
  });
  const i = {
    droppables: r,
    draggables: s
  }, a = Ie(e.impact), c = a ? i.droppables[a] : null, l = i.draggables[e.critical.draggable.id], u = i.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = Ku({
    draggable: l,
    home: u,
    draggables: s,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : d, m = Uu({
    pageOffset: e.current.page.offset,
    draggable: i.draggables[e.critical.draggable.id],
    draggables: i.draggables,
    droppables: i.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: f
  });
  $n();
  const g = {
    ...e,
    phase: "DRAGGING",
    impact: m,
    onLiftImpact: d,
    dimensions: i,
    afterCritical: f,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? g : {
    ...g,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Ao = (e) => e.movementMode === "SNAP", Hr = (e, t, n) => {
  const r = Hb(e.dimensions, t);
  return !Ao(e) || n ? an({
    state: e,
    dimensions: r
  }) : Hu({
    state: e,
    dimensions: r
  });
};
function Kr(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const tc = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Zb = (e = tc, t) => {
  if (t.type === "FLUSH")
    return {
      ...tc,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "INITIAL_PUBLISH must come after a IDLE phase") : b());
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: s,
      movementMode: i
    } = t.payload, a = s.draggables[n.draggable.id], c = s.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: ge
    }, u = {
      client: l,
      page: {
        selection: ye(l.selection, o.scroll.initial),
        borderBoxCenter: ye(l.selection, o.scroll.initial),
        offset: ye(l.selection, o.scroll.diff.value)
      }
    }, d = br(s.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = Ku({
      draggable: a,
      home: c,
      draggables: s.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: i,
      dimensions: s,
      initial: u,
      current: u,
      isWindowScrollAllowed: d,
      impact: f,
      afterCritical: p,
      onLiftImpact: f,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : b()), Xb({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    bt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b());
    const {
      client: n
    } = t.payload;
    return lt(n, e.current.client.selection) ? e : an({
      state: e,
      clientSelection: n,
      impact: Ao(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Kr(e);
    bt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b());
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const s = Is(o, r);
    return Hr(e, s, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    bt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b());
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : b()), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? b(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : b());
    const s = {
      ...o,
      isEnabled: r
    };
    return Hr(e, s, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    bt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b());
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : b()), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? b(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : b());
    const s = {
      ...o,
      isCombineEnabled: r
    };
    return Hr(e, s, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    bt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot move by window in phase ${e.phase}`) : b()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? b(!1, "Window scrolling is currently not supported for fixed lists") : b());
    const n = t.payload.newScroll;
    if (lt(e.viewport.scroll.current, n))
      return Kr(e);
    const r = _u(e.viewport, n);
    return Ao(e) ? Hu({
      state: e,
      viewport: r
    }) : an({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!bt(e))
      return e;
    const n = t.payload.maxScroll;
    if (lt(n, e.viewport.scroll.max))
      return e;
    const r = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: n
      }
    };
    return {
      ...e,
      viewport: r
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} received while not in DRAGGING phase`) : b());
    const n = Vb({
      state: e,
      type: t.type
    });
    return n ? an({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? b(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : b()), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: n
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot animate drop from phase ${e.phase}`) : b()), {
      phase: "DROP_ANIMATING",
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: n
    } = t.payload;
    return {
      phase: "IDLE",
      completed: n,
      shouldFlush: !1
    };
  }
  return e;
};
const Jb = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Qb = (e) => ({
  type: "LIFT",
  payload: e
}), ex = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), tx = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), nx = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), rx = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), ox = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), sx = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Yu = (e) => ({
  type: "MOVE",
  payload: e
}), ix = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), ax = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), cx = () => ({
  type: "MOVE_UP",
  payload: null
}), lx = () => ({
  type: "MOVE_DOWN",
  payload: null
}), ux = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), dx = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Bs = () => ({
  type: "FLUSH",
  payload: null
}), fx = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), $s = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), qu = (e) => ({
  type: "DROP",
  payload: e
}), px = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Xu = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function hx(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), n = {};
  for (let o = 1; o < t.length; o++) {
    const s = t[o], i = t[o - 1];
    s !== i + 1 && (n[s] = !0);
  }
  if (!Object.keys(n).length)
    return;
  const r = t.map((o) => !!n[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && ne(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function mx(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Nt(e.droppable.id, t.draggables);
    hx(n);
  }
}
var gx = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (o.type !== "LIFT") {
    r(o);
    return;
  }
  const {
    id: s,
    clientSelection: i,
    movementMode: a
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n($s({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase to start a drag") : b()), n(Bs()), n(Jb({
    draggableId: s,
    movementMode: a
  }));
  const u = {
    draggableId: s,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: d,
    dimensions: f,
    viewport: p
  } = e.startPublishing(u);
  mx(d, f), n(ex({
    critical: d,
    dimensions: f,
    clientSelection: i,
    movementMode: a,
    viewport: p
  }));
}, vx = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Fs = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Nn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Zu = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, gt = `${Zu.outOfTheWay}s ${Fs.outOfTheWay}`, cn = {
  fluid: `opacity ${gt}`,
  snap: `transform ${gt}, opacity ${gt}`,
  drop: (e) => {
    const t = `${e}s ${Fs.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${gt}`,
  placeholder: `height ${gt}, width ${gt}, margin ${gt}`
}, nc = (e) => lt(e, ge) ? void 0 : `translate(${e.x}px, ${e.y}px)`, To = {
  moveTo: nc,
  drop: (e, t) => {
    const n = nc(e);
    if (n)
      return t ? `${n} scale(${Nn.scale.drop})` : n;
  }
}, {
  minDropTime: Io,
  maxDropTime: Ju
} = Zu, yx = Ju - Io, rc = 1500, bx = 0.6;
var xx = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Sn(e, t);
  if (r <= 0)
    return Io;
  if (r >= rc)
    return Ju;
  const o = r / rc, s = Io + yx * o, i = n === "CANCEL" ? s * bx : s;
  return Number(i.toFixed(2));
}, Ex = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: s,
    droppables: i
  } = n, a = Ie(e), c = a ? i[a] : null, l = i[t.descriptor.droppableId], u = zu({
    impact: e,
    draggable: t,
    draggables: s,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return Te(u, t.client.borderBox.center);
}, wx = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: s
}) => !n.at || t !== "DROP" ? {
  impact: Wu({
    draggables: e,
    impact: s,
    destination: r,
    viewport: o,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : n.at.type === "REORDER" ? {
  impact: n,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...n,
    displaced: Cn
  },
  didDropInsideDroppable: !0
};
const Dx = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), s = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(px({
      reason: s
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? b(!1, "A DROP action occurred while DROP_PENDING and still waiting") : b()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot drop in phase: ${o.phase}`) : b());
  const a = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: d
  } = wx({
    reason: s,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? Os(u) : null, p = d ? xr(u) : null, m = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, g = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: m,
    reason: s,
    mode: o.movementMode,
    destination: f,
    combine: p
  }, h = Ex({
    impact: u,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), v = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: g,
    impact: u
  };
  if (!(!lt(o.current.client.offset, h) || !!g.combine)) {
    t($s({
      completed: v
    }));
    return;
  }
  const E = xx({
    current: o.current.client.offset,
    destination: h,
    reason: s
  });
  t(fx({
    newHomeClientOffset: h,
    dropDuration: E,
    completed: v
  }));
};
var Sx = Dx, Qu = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Cx(e) {
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
function Px({
  onWindowScroll: e
}) {
  function t() {
    e(Qu());
  }
  const n = wn(t), r = Cx(n);
  let o = ct;
  function s() {
    return o !== ct;
  }
  function i() {
    s() && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start scroll listener when already active") : b()), o = _e(window, [r]);
  }
  function a() {
    s() || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop scroll listener when not active") : b()), n.cancel(), o(), o = ct;
  }
  return {
    start: i,
    stop: a,
    isActive: s
  };
}
const Nx = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Ax = (e) => {
  const t = Px({
    onWindowScroll: (n) => {
      e.dispatch(ix({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Nx(r) && t.stop(), n(r);
  };
};
var Tx = Ax, Ix = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (s) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ne("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && ne(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(s), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Ox = () => {
  const e = [], t = (o) => {
    const s = e.findIndex((a) => a.timerId === o);
    s === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find timer") : b());
    const [i] = e.splice(s, 1);
    i.callback();
  };
  return {
    add: (o) => {
      const s = setTimeout(() => t(s)), i = {
        timerId: s,
        callback: o
      };
      e.push(i);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((s) => {
        clearTimeout(s.timerId), s.callback();
      });
    }
  };
};
const Rx = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Vx = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Mx = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Xt = (e, t) => {
  Bn(), t(), $n();
}, zn = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Yr(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = Ix(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var Lx = (e, t) => {
  const n = Ox();
  let r = null;
  const o = (d, f) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : b()), Xt("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, s = (d, f) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b()), Xt("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(zn(d, f));
    });
  }, i = (d, f) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b());
    const p = zn(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Xt("onDragStart", () => Yr(e().onDragStart, p, t, Jn.onDragStart));
    });
  }, a = (d, f) => {
    const p = Os(f), m = xr(f);
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragMove when onDragStart has not been called") : b());
    const g = !Mx(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !Rx(r.lastLocation, p);
    h && (r.lastLocation = p);
    const v = !Vx(r.lastCombine, m);
    if (v && (r.lastCombine = m), !g && !h && !v)
      return;
    const x = {
      ...zn(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      Xt("onDragUpdate", () => Yr(e().onDragUpdate, x, t, Jn.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Can only flush responders while dragging") : b()), n.flush();
  }, l = (d) => {
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : b()), r = null, Xt("onDragEnd", () => Yr(e().onDragEnd, d, t, Jn.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: s,
    start: i,
    update: a,
    flush: c,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const d = {
        ...zn(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, _x = (e, t) => {
  const n = Lx(e, t);
  return (r) => (o) => (s) => {
    if (s.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(s.payload.draggableId, s.payload.movementMode);
      return;
    }
    if (s.type === "INITIAL_PUBLISH") {
      const a = s.payload.critical;
      n.beforeStart(a, s.payload.movementMode), o(s), n.start(a, s.payload.movementMode);
      return;
    }
    if (s.type === "DROP_COMPLETE") {
      const a = s.payload.completed.result;
      n.flush(), o(s), n.drop(a);
      return;
    }
    if (o(s), s.type === "FLUSH") {
      n.abort();
      return;
    }
    const i = r.getState();
    i.phase === "DRAGGING" && n.update(i.critical, i.impact);
  };
};
const Bx = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot finish a drop animating when no drop is occurring") : b()), e.dispatch($s({
    completed: r.completed
  }));
};
var $x = Bx;
const Fx = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (s) => {
    if ((s.type === "FLUSH" || s.type === "DROP_COMPLETE" || s.type === "DROP_ANIMATION_FINISHED") && r(), o(s), s.type !== "DROP_ANIMATE")
      return;
    const i = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Xu());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = _e(window, [i]);
    });
  };
};
var kx = Fx, jx = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, Gx = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (r.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (r.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (r.type === "DROP_COMPLETE") {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Ux = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Wx = (e) => (t) => (n) => (r) => {
  if (Ux(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : b()), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const zx = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(qu({
    reason: r.reason
  })));
};
var Hx = zx;
const Kx = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : pu;
var Yx = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: s
}) => fu(Zb, Kx($v(vx(n), jx(e), gx(e), Sx, $x, kx, Hx, Wx(s), Tx, Gx(t), _x(r, o))));
const qr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function qx({
  registry: e,
  callbacks: t
}) {
  let n = qr(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Bn();
      const {
        additions: c,
        removals: l,
        modified: u
      } = n, d = Object.keys(c).map((m) => e.draggable.getById(m).getDimension(ge)).sort((m, g) => m.descriptor.index - g.descriptor.index), f = Object.keys(u).map((m) => {
        const h = e.droppable.getById(m).callbacks.getScrollWhileDragging();
        return {
          droppableId: m,
          scroll: h
        };
      }), p = {
        additions: d,
        removals: Object.keys(l),
        modified: f
      };
      n = qr(), $n(), t.publish(p);
    }));
  };
  return {
    add: (c) => {
      const l = c.descriptor.id;
      n.additions[l] = c, n.modified[c.descriptor.droppableId] = !0, n.removals[l] && delete n.removals[l], o();
    },
    remove: (c) => {
      const l = c.descriptor;
      n.removals[l.id] = !0, n.modified[l.droppableId] = !0, n.additions[l.id] && delete n.additions[l.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = qr());
    }
  };
}
var ed = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = Te({
    x: t,
    y: e
  }, {
    x: r,
    y: n
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, td = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.documentElement") : b()), e;
}, nd = () => {
  const e = td();
  return ed({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Xx = () => {
  const e = Qu(), t = nd(), n = e.y, r = e.x, o = td(), s = o.clientWidth, i = o.clientHeight, a = r + s, c = n + i;
  return {
    frame: ke({
      top: n,
      left: r,
      right: a,
      bottom: c
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: ge,
        displacement: ge
      }
    }
  };
}, Zx = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Bn();
  const r = Xx(), o = r.scroll.current, s = e.droppable, i = n.droppable.getAllByType(s.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o)), c = {
    draggables: Iu(a),
    droppables: Tu(i)
  };
  return $n(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function oc(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ne(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Jx = (e, t) => {
  let n = null;
  const r = qx({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (f, p) => {
    e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update is enabled flag of Droppable ${f} as it is not registered`) : b()), n && t.updateDroppableIsEnabled({
      id: f,
      isEnabled: p
    });
  }, s = (f, p) => {
    n && (e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update isCombineEnabled flag of Droppable ${f} as it is not registered`) : b()), t.updateDroppableIsCombineEnabled({
      id: f,
      isCombineEnabled: p
    }));
  }, i = (f, p) => {
    n && (e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update the scroll on Droppable ${f} as it is not registered`) : b()), t.updateDroppableScroll({
      id: f,
      newScroll: p
    }));
  }, a = (f, p) => {
    n && e.droppable.getById(f).callbacks.scroll(p);
  }, c = () => {
    if (!n)
      return;
    r.stop();
    const f = n.critical.droppable;
    e.droppable.getAllByType(f.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (f) => {
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Should only be subscribed when a collection is occurring") : b());
    const p = n.critical.draggable;
    f.type === "ADDITION" && oc(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && oc(e, p, f.value) && r.remove(f.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: s,
    scrollDroppable: a,
    updateDroppableScroll: i,
    startPublishing: (f) => {
      n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start capturing critical dimensions as there is already a collection") : b());
      const p = e.draggable.getById(f.draggableId), m = e.droppable.getById(p.descriptor.droppableId), g = {
        draggable: p.descriptor,
        droppable: m.descriptor
      }, h = e.subscribe(l);
      return n = {
        critical: g,
        unsubscribe: h
      }, Zx({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: c
  };
}, rd = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Qx = (e) => {
  window.scrollBy(e.x, e.y);
};
const eE = me((e) => br(e).filter((t) => !(!t.isEnabled || !t.frame))), tE = (e, t) => eE(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? b(!1, "Invalid result") : b()), ku(r.frame.pageMarginBox)(e))) || null;
var nE = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return tE(e, n);
};
const An = {
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
var rE = (e, t, n = () => An) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, s = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: s
  };
}, od = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && ne(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, ks = 1, oE = (e, t, n = () => An) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return ks;
  const s = 1 - od({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), i = r.maxPixelScroll * r.ease(s);
  return Math.ceil(i);
}, sE = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, s = r.durationDampening.stopDampeningAt, i = t, a = s, l = Date.now() - i;
  if (l >= s)
    return e;
  if (l < o)
    return ks;
  const u = od({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, sc = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const s = oE(e, t, o);
  return s === 0 ? 0 : r ? Math.max(sE(s, n, o), ks) : s;
}, ic = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = rE(e, r, s);
  return t[r.end] < t[r.start] ? sc({
    distanceToEdge: t[r.end],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }) : -1 * sc({
    distanceToEdge: t[r.start],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
}, iE = ({
  container: e,
  subject: t,
  proposedScroll: n
}) => {
  const r = t.height > e.height, o = t.width > e.width;
  return !o && !r ? n : o && r ? null : {
    x: o ? 0 : n.x,
    y: r ? 0 : n.y
  };
};
const aE = Au((e) => e === 0 ? 0 : e);
var sd = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = {
    top: r.y - t.top,
    right: t.right - r.x,
    bottom: t.bottom - r.y,
    left: r.x - t.left
  }, a = ic({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: Rs,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), c = ic({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: Vu,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), l = aE({
    x: c,
    y: a
  });
  if (lt(l, ge))
    return null;
  const u = iE({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return u ? lt(u, ge) ? null : u : null;
};
const cE = Au((e) => e === 0 ? 0 : e > 0 ? 1 : -1), js = /* @__PURE__ */ (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = ye(t, r), s = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return lt(s, ge) ? null : s;
  };
})(), id = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = cE(n), s = js({
    max: r,
    current: t,
    change: o
  });
  return !s || o.x !== 0 && s.x === 0 || o.y !== 0 && s.y === 0;
}, Gs = (e, t) => id({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), lE = (e, t) => {
  if (!Gs(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return js({
    current: r,
    max: n,
    change: t
  });
}, Us = (e, t) => {
  const n = e.frame;
  return n ? id({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, uE = (e, t) => {
  const n = e.frame;
  return !n || !Us(e, t) ? null : js({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var dE = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = sd({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return i && Gs(e, i) ? i : null;
}, fE = ({
  droppable: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.frame;
  if (!i)
    return null;
  const a = sd({
    dragStartTime: r,
    container: i.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return a && Us(e, a) ? a : null;
}, ac = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = dE({
      dragStartTime: t,
      viewport: d,
      subject: c,
      center: i,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: s
    });
    if (f) {
      r(f);
      return;
    }
  }
  const l = nE({
    center: i,
    destination: Ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const u = fE({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: i,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: s
  });
  u && o(l.descriptor.id, u);
}, pE = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => An
}) => {
  const r = wn(e), o = wn(t);
  let s = null;
  const i = (l) => {
    s || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fluid scroll if not dragging") : b());
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = s;
    ac({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: d,
      shouldUseTimeDampening: u,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      Bn(), s && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start auto scrolling when already started") : b());
      const u = Date.now();
      let d = !1;
      const f = () => {
        d = !0;
      };
      ac({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: f,
        scrollDroppable: f,
        getAutoScrollerOptions: n
      }), s = {
        dragStartTime: u,
        shouldUseTimeDampening: d
      }, $n(), d && i(l);
    },
    stop: () => {
      s && (r.cancel(), o.cancel(), s = null);
    },
    scroll: i
  };
}, hE = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (a, c) => {
    const l = ye(a.current.client.selection, c);
    e({
      client: l
    });
  }, o = (a, c) => {
    if (!Us(a, c))
      return c;
    const l = uE(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const u = Te(c, l);
    return t(a.descriptor.id, u), Te(c, u);
  }, s = (a, c, l) => {
    if (!a || !Gs(c, l))
      return l;
    const u = lE(c, l);
    if (!u)
      return n(l), null;
    const d = Te(l, u);
    return n(d), Te(l, d);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const l = Ie(a.impact);
    l || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot perform a jump scroll when there is no destination") : b());
    const u = o(a.dimensions.droppables[l], c);
    if (!u)
      return;
    const d = a.viewport, f = s(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, mE = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = pE({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), s = hE({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(r().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          o.scroll(c);
          return;
        }
        c.scrollJumpRequest && s(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const Ft = "data-rfd", kt = (() => {
  const e = `${Ft}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Oo = (() => {
  const e = `${Ft}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), gE = (() => {
  const e = `${Ft}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), cc = {
  contextId: `${Ft}-scroll-container-context-id`
}, vE = (e) => (t) => `[${t}="${e}"]`, Zt = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), yE = "pointer-events: none;";
var bE = (e) => {
  const t = vE(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(kt.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: yE,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${cn.outOfTheWay};
    `;
    return {
      selector: t(Oo.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(gE.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, i = [r, n, o, {
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
    always: Zt(i, "always"),
    resting: Zt(i, "resting"),
    dragging: Zt(i, "dragging"),
    dropAnimating: Zt(i, "dropAnimating"),
    userCancel: Zt(i, "userCancel")
  };
};
const xE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Mo : de;
var Oe = xE;
const Xr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find the head to append a style to") : b()), e;
}, lc = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function EE(e, t) {
  const n = K(() => bE(e), [e]), r = j(null), o = j(null), s = V(me((d) => {
    const f = o.current;
    f || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), f.textContent = d;
  }), []), i = V((d) => {
    const f = r.current;
    f || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), f.textContent = d;
  }, []);
  Oe(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? b(!1, "style elements already mounted") : b());
    const d = lc(t), f = lc(t);
    return r.current = d, o.current = f, d.setAttribute(`${Ft}-always`, e), f.setAttribute(`${Ft}-dynamic`, e), Xr().appendChild(d), Xr().appendChild(f), i(n.always), s(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot unmount ref as it is not set") : b()), Xr().removeChild(g), m.current = null;
      };
      p(r), p(o);
    };
  }, [t, i, s, n.always, n.resting, e]);
  const a = V(() => s(n.dragging), [s, n.dragging]), c = V((d) => {
    if (d === "DROP") {
      s(n.dropAnimating);
      return;
    }
    s(n.userCancel);
  }, [s, n.dropAnimating, n.userCancel]), l = V(() => {
    o.current && s(n.resting);
  }, [s, n.resting]);
  return K(() => ({
    dragging: a,
    dropping: c,
    resting: l
  }), [a, c, l]);
}
function ad(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var cd = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Fn(e) {
  return e instanceof cd(e).HTMLElement;
}
function ld(e, t) {
  const n = `[${kt.contextId}="${e}"]`, r = ad(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && ne(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((s) => s.getAttribute(kt.draggableId) === t);
  return o ? Fn(o) ? o : (process.env.NODE_ENV !== "production" && ne("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ne(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function wE(e) {
  const t = j({}), n = j(null), r = j(null), o = j(!1), s = V(function(f, p) {
    const m = {
      id: f,
      focus: p
    };
    return t.current[f] = m, function() {
      const h = t.current;
      h[f] !== m && delete h[f];
    };
  }, []), i = V(function(f) {
    const p = ld(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = V(function(f, p) {
    n.current === f && (n.current = p);
  }, []), c = V(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && i(f);
    }));
  }, [i]), l = V(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(kt.draggableId) === f && (n.current = f);
  }, []);
  return Oe(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), K(() => ({
    register: s,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [s, l, c, a]);
}
function DE() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(d) {
    return t.push(d), function() {
      const p = t.indexOf(d);
      p !== -1 && t.splice(p, 1);
    };
  }
  function r(d) {
    t.length && t.forEach((f) => f(d));
  }
  function o(d) {
    return e.draggables[d] || null;
  }
  function s(d) {
    const f = o(d);
    return f || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find draggable entry with id [${d}]`) : b()), f;
  }
  const i = {
    register: (d) => {
      e.draggables[d.descriptor.id] = d, r({
        type: "ADDITION",
        value: d
      });
    },
    update: (d, f) => {
      const p = e.draggables[f.descriptor.id];
      p && p.uniqueId === d.uniqueId && (delete e.draggables[f.descriptor.id], e.draggables[d.descriptor.id] = d);
    },
    unregister: (d) => {
      const f = d.descriptor.id, p = o(f);
      p && d.uniqueId === p.uniqueId && (delete e.draggables[f], e.droppables[d.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: d
      }));
    },
    getById: s,
    findById: o,
    exists: (d) => !!o(d),
    getAllByType: (d) => Object.values(e.draggables).filter((f) => f.descriptor.type === d)
  };
  function a(d) {
    return e.droppables[d] || null;
  }
  function c(d) {
    const f = a(d);
    return f || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find droppable entry with id [${d}]`) : b()), f;
  }
  const l = {
    register: (d) => {
      e.droppables[d.descriptor.id] = d;
    },
    unregister: (d) => {
      const f = a(d.descriptor.id);
      f && d.uniqueId === f.uniqueId && delete e.droppables[d.descriptor.id];
    },
    getById: c,
    findById: a,
    exists: (d) => !!a(d),
    getAllByType: (d) => Object.values(e.droppables).filter((f) => f.descriptor.type === d)
  };
  function u() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: i,
    droppable: l,
    subscribe: n,
    clean: u
  };
}
function SE() {
  const e = K(DE, []);
  return de(() => function() {
    H.version.startsWith("16") || H.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Ws = H.createContext(null), Tn = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.body") : b()), e;
};
const CE = {
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
var PE = CE;
const NE = (e) => `rfd-announcement-${e}`;
function AE(e) {
  const t = K(() => NE(e), [e]), n = j(null);
  return de(function() {
    const s = document.createElement("div");
    return n.current = s, s.id = t, s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), at(s.style, PE), Tn().appendChild(s), function() {
      setTimeout(function() {
        const c = Tn();
        c.contains(s) && c.removeChild(s), s === n.current && (n.current = null);
      });
    };
  }, [t]), V((o) => {
    const s = n.current;
    if (s) {
      s.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && ne(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let TE = 0;
const ud = {
  separator: "::"
};
function IE(e, t = ud) {
  return K(() => `${e}${t.separator}${TE++}`, [t.separator, e]);
}
function OE(e, t = ud) {
  const n = H.useId();
  return K(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var zs = "useId" in H ? OE : IE;
function RE({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function VE({
  contextId: e,
  text: t
}) {
  const n = zs("hidden-text", {
    separator: "-"
  }), r = K(() => RE({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return de(function() {
    const s = document.createElement("div");
    return s.id = r, s.textContent = t, s.style.display = "none", Tn().appendChild(s), function() {
      const a = Tn();
      a.contains(s) && a.removeChild(s);
    };
  }, [r, t]), r;
}
var Dr = H.createContext(null), ME = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const LE = /(\d+)\.(\d+)\.(\d+)/, uc = (e) => {
  const t = LE.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? b(!1, `Unable to parse React version ${e}`) : b());
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, _E = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var BE = (e, t) => {
  const n = uc(e), r = uc(t);
  _E(n, r) || process.env.NODE_ENV !== "production" && ne(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Zr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var $E = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ne(`
      No <!doctype html> found.

      ${Zr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ne(`
      Unexpected <!doctype> found: (${t.name})

      ${Zr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ne(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Zr}
    `);
};
function Hs(e) {
  process.env.NODE_ENV !== "production" && e();
}
function kn(e, t) {
  Hs(() => {
    de(() => {
      try {
        e();
      } catch (n) {
        Po(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function FE() {
  kn(() => {
    BE(ME.react, H.version), $E(document);
  }, []);
}
function Ks(e) {
  const t = j(e);
  return de(() => {
    t.current = e;
  }), t;
}
function kE() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(i) {
    return i === e;
  }
  function r(i) {
    e && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot claim lock as it is already claimed") : b());
    const a = {
      abandon: i
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot release lock when there is no lock") : b()), e = null;
  }
  function s() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: s
  };
}
function In(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const jE = 9, GE = 13, Ys = 27, dd = 32, UE = 33, WE = 34, zE = 35, HE = 36, KE = 37, YE = 38, qE = 39, XE = 40, ZE = {
  [GE]: !0,
  [jE]: !0
};
var fd = (e) => {
  ZE[e.keyCode] && e.preventDefault();
};
const JE = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var Sr = JE;
const pd = 0, dc = 5;
function QE(e, t) {
  return Math.abs(t.x - e.x) >= dc || Math.abs(t.y - e.y) >= dc;
}
const fc = {
  type: "IDLE"
};
function ew({
  cancel: e,
  completed: t,
  getPhase: n,
  setPhase: r
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: s,
        clientX: i,
        clientY: a
      } = o;
      if (s !== pd)
        return;
      const c = {
        x: i,
        y: a
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(c);
        return;
      }
      l.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot be IDLE") : b());
      const u = l.point;
      if (!QE(u, c))
        return;
      o.preventDefault();
      const d = l.actions.fluidLift(c);
      r({
        type: "DRAGGING",
        actions: d
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const s = n();
      if (s.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), s.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      n().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (n().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === Ys) {
        o.preventDefault(), e();
        return;
      }
      fd(o);
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
      n().type === "PENDING" && e();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const s = n();
      if (s.type === "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase") : b()), s.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Sr,
    fn: e
  }];
}
function tw(e) {
  const t = j(fc), n = j(ct), r = K(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== pd || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
        return;
      const f = e.findClosestDraggableId(d);
      if (!f)
        return;
      const p = e.tryGetLock(f, i, {
        sourceEvent: d
      });
      if (!p)
        return;
      d.preventDefault();
      const m = {
        x: d.clientX,
        y: d.clientY
      };
      n.current(), l(p, m);
    }
  }), [e]), o = K(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (u) => {
      if (u.defaultPrevented)
        return;
      const d = e.findClosestDraggableId(u);
      if (!d)
        return;
      const f = e.findOptionsForDraggable(d);
      f && (f.shouldRespectForcePress || e.canGetLock(d) && u.preventDefault());
    }
  }), [e]), s = V(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = _e(window, [o, r], d);
  }, [o, r]), i = V(() => {
    t.current.type !== "IDLE" && (t.current = fc, n.current(), s());
  }, [s]), a = V(() => {
    const u = t.current;
    i(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [i]), c = V(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = ew({
      cancel: a,
      completed: i,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = _e(window, f, d);
  }, [a, i]), l = V(function(d, f) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b()), t.current = {
      type: "PENDING",
      point: f,
      actions: d
    }, c();
  }, [c]);
  Oe(function() {
    return s(), function() {
      n.current();
    };
  }, [s]);
}
function nw() {
}
const rw = {
  [WE]: !0,
  [UE]: !0,
  [HE]: !0,
  [zE]: !0
};
function ow(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Ys) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === dd) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === XE) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === YE) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === qE) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === KE) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (rw[o.keyCode]) {
        o.preventDefault();
        return;
      }
      fd(o);
    }
  }, {
    eventName: "mousedown",
    fn: n
  }, {
    eventName: "mouseup",
    fn: n
  }, {
    eventName: "click",
    fn: n
  }, {
    eventName: "touchstart",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "wheel",
    fn: n,
    options: {
      passive: !0
    }
  }, {
    eventName: Sr,
    fn: n
  }];
}
function sw(e) {
  const t = j(nw), n = K(() => ({
    eventName: "keydown",
    fn: function(s) {
      if (s.defaultPrevented || s.keyCode !== dd)
        return;
      const i = e.findClosestDraggableId(s);
      if (!i)
        return;
      const a = e.tryGetLock(i, u, {
        sourceEvent: s
      });
      if (!a)
        return;
      s.preventDefault();
      let c = !0;
      const l = a.snapLift();
      t.current();
      function u() {
        c || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop capturing a keyboard drag when not capturing") : b()), c = !1, t.current(), r();
      }
      t.current = _e(window, ow(l, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = V(function() {
    const s = {
      passive: !1,
      capture: !0
    };
    t.current = _e(window, [n], s);
  }, [n]);
  Oe(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Jr = {
  type: "IDLE"
}, iw = 120, aw = 0.15;
function cw({
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
    fn: (n) => {
      n.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (n) => {
      if (t().type !== "DRAGGING") {
        e();
        return;
      }
      n.keyCode === Ys && n.preventDefault(), e();
    }
  }, {
    eventName: Sr,
    fn: e
  }];
}
function lw({
  cancel: e,
  completed: t,
  getPhase: n
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: s,
        clientY: i
      } = r.touches[0], a = {
        x: s,
        y: i
      };
      r.preventDefault(), o.actions.move(a);
    }
  }, {
    eventName: "touchend",
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (r) => {
      if (n().type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (r) => {
      const o = n();
      o.type === "IDLE" && (process.env.NODE_ENV, b());
      const s = r.touches[0];
      if (!s || !(s.force >= aw))
        return;
      const a = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        a && e();
        return;
      }
      if (a) {
        if (o.hasMoved) {
          r.preventDefault();
          return;
        }
        e();
        return;
      }
      r.preventDefault();
    }
  }, {
    eventName: Sr,
    fn: e
  }];
}
function uw(e) {
  const t = j(Jr), n = j(ct), r = V(function() {
    return t.current;
  }, []), o = V(function(p) {
    t.current = p;
  }, []), s = K(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const m = e.findClosestDraggableId(p);
      if (!m)
        return;
      const g = e.tryGetLock(m, a, {
        sourceEvent: p
      });
      if (!g)
        return;
      const h = p.touches[0], {
        clientX: v,
        clientY: x
      } = h, E = {
        x: v,
        y: x
      };
      n.current(), d(g, E);
    }
  }), [e]), i = V(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = _e(window, [s], p);
  }, [s]), a = V(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(Jr), n.current(), i());
  }, [i, o]), c = V(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), l = V(function() {
    const p = {
      capture: !0,
      passive: !1
    }, m = {
      cancel: c,
      completed: a,
      getPhase: r
    }, g = _e(window, lw(m), p), h = _e(window, cw(m), p);
    n.current = function() {
      g(), h();
    };
  }, [c, r, a]), u = V(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, `Cannot start dragging from phase ${p.type}`) : b());
    const m = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [r, o]), d = V(function(p, m) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b());
    const g = setTimeout(u, iw);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: g
    }), l();
  }, [l, r, o, u]);
  Oe(function() {
    return i(), function() {
      n.current();
      const m = r();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Jr));
    };
  }, [r, i, o]), Oe(function() {
    return _e(window, [{
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
function dw(e) {
  Hs(() => {
    const t = Ks(e);
    kn(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot change the amount of sensor hooks after mounting") : b(!1));
    });
  });
}
const fw = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function hd(e, t) {
  if (t == null)
    return !1;
  if (fw.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : hd(e, t.parentElement);
}
function pw(e, t) {
  const n = t.target;
  return Fn(n) ? hd(e, n) : !1;
}
var hw = (e) => ke(e.getBoundingClientRect()).center;
function mw(e) {
  return e instanceof cd(e).Element;
}
const gw = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function md(e, t) {
  return e == null ? null : e[gw](t) ? e : md(e.parentElement, t);
}
function vw(e, t) {
  return e.closest ? e.closest(t) : md(e, t);
}
function yw(e) {
  return `[${kt.contextId}="${e}"]`;
}
function bw(e, t) {
  const n = t.target;
  if (!mw(n))
    return process.env.NODE_ENV !== "production" && ne("event.target must be a Element"), null;
  const r = yw(e), o = vw(n, r);
  return o ? Fn(o) ? o : (process.env.NODE_ENV !== "production" && ne("drag handle must be a HTMLElement"), null) : null;
}
function xw(e, t) {
  const n = bw(e, t);
  return n ? n.getAttribute(kt.draggableId) : null;
}
function Ew(e, t) {
  const n = `[${Oo.contextId}="${e}"]`, o = ad(document, n).find((s) => s.getAttribute(Oo.id) === t);
  return o ? Fn(o) ? o : (process.env.NODE_ENV !== "production" && ne("Draggable element is not a HTMLElement"), null) : null;
}
function ww(e) {
  e.preventDefault();
}
function Hn({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && ne(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && ne(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function gd({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !rd(t.getState(), r)) : (process.env.NODE_ENV !== "production" && ne(`Unable to find draggable with id: ${r}`), !1);
}
function Dw({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: s,
  sourceEvent: i
}) {
  if (!gd({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = Ew(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && ne(`Unable to find draggable element with id: ${o}`), null;
  if (i && !c.options.canDragInteractiveElements && pw(l, i))
    return null;
  const u = e.claim(s || ct);
  let d = "PRE_DRAG";
  function f() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(y, D) {
    Hn({
      expected: y,
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(D());
  }
  const g = m.bind(null, "DRAGGING");
  function h(y) {
    function D() {
      e.release(), d = "COMPLETED";
    }
    d !== "PRE_DRAG" && (D(), process.env.NODE_ENV !== "production" ? b(!1, `Cannot lift in phase ${d}`) : b()), n.dispatch(Qb(y.liftActionArgs)), d = "DRAGGING";
    function C(S, L = {
      shouldBlockNextClick: !1
    }) {
      if (y.cleanup(), L.shouldBlockNextClick) {
        const O = _e(window, [{
          eventName: "click",
          fn: ww,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(O);
      }
      D(), n.dispatch(qu({
        reason: S
      }));
    }
    return {
      isActive: () => Hn({
        expected: "DRAGGING",
        phase: d,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: f,
      drop: (S) => C("DROP", S),
      cancel: (S) => C("CANCEL", S),
      ...y.actions
    };
  }
  function v(y) {
    const D = wn((S) => {
      g(() => Yu({
        client: S
      }));
    });
    return {
      ...h({
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
      moveUp: () => g(cx),
      moveRight: () => g(ux),
      moveDown: () => g(lx),
      moveLeft: () => g(dx)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: hw(l),
        movementMode: "SNAP"
      },
      cleanup: ct,
      actions: y
    });
  }
  function E() {
    Hn({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Hn({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: v,
    snapLift: x,
    abort: E
  };
}
const Sw = [tw, sw, uw];
function Cw({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const s = [...o ? Sw : [], ...r || []], i = we(() => kE())[0], a = V(function(h, v) {
    In(h) && !In(v) && i.tryAbandon();
  }, [i]);
  Oe(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(h, x), h = x;
    });
  }, [i, t, a]), Oe(() => i.tryAbandon, [i.tryAbandon]);
  const c = V((g) => gd({
    lockAPI: i,
    registry: n,
    store: t,
    draggableId: g
  }), [i, n, t]), l = V((g, h, v) => Dw({
    lockAPI: i,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: v && v.sourceEvent ? v.sourceEvent : null
  }), [e, i, n, t]), u = V((g) => xw(e, g), [e]), d = V((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = V(function() {
    i.isClaimed() && (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Bs()));
  }, [i, t]), p = V(() => i.isClaimed(), [i]), m = K(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: u,
    findOptionsForDraggable: d,
    tryReleaseLock: f,
    isLockClaimed: p
  }), [c, l, u, d, f, p]);
  dw(s);
  for (let g = 0; g < s.length; g++)
    s[g](m);
}
const Pw = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    H.version.startsWith("16") || H.version.startsWith("17") ? n() : wc(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Nw = (e) => ({
  ...An,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...An.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Jt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find store from lazy ref") : b()), e.current;
}
function Aw(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: s
  } = e, i = j(null);
  FE();
  const a = Ks(e), c = V(() => Pw(a.current), [a]), l = V(() => Nw(a.current), [a]), u = AE(t), d = VE({
    contextId: t,
    text: s
  }), f = EE(t, o), p = V((O) => {
    Jt(i).dispatch(O);
  }, []), m = K(() => Pa({
    publishWhileDragging: tx,
    updateDroppableScroll: rx,
    updateDroppableIsEnabled: ox,
    updateDroppableIsCombineEnabled: sx,
    collectionStarting: nx
  }, p), [p]), g = SE(), h = K(() => Jx(g, m), [g, m]), v = K(() => mE({
    scrollWindow: Qx,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Pa({
      move: Yu
    }, p)
  }), [h.scrollDroppable, p, l]), x = wE(t), E = K(() => Yx({
    announce: u,
    autoScroller: v,
    dimensionMarshal: h,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: f
  }), [u, v, h, x, c, f]);
  process.env.NODE_ENV !== "production" && i.current && i.current !== E && process.env.NODE_ENV !== "production" && ne("unexpected store change"), i.current = E;
  const w = V(() => {
    const O = Jt(i);
    O.getState().phase !== "IDLE" && O.dispatch(Bs());
  }, []), y = V(() => {
    const O = Jt(i).getState();
    return O.phase === "DROP_ANIMATING" ? !0 : O.phase === "IDLE" ? !1 : O.isDragging;
  }, []), D = K(() => ({
    isDragging: y,
    tryAbort: w
  }), [y, w]);
  n(D);
  const C = V((O) => rd(Jt(i).getState(), O), []), S = V(() => bt(Jt(i).getState()), []), L = K(() => ({
    marshal: h,
    focus: x,
    contextId: t,
    canLift: C,
    isMovementAllowed: S,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, x, C, S, g]);
  return Cw({
    contextId: t,
    store: E,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), de(() => w, [w]), H.createElement(Dr.Provider, {
    value: L
  }, H.createElement(Cy, {
    context: Ws,
    store: E
  }, e.children));
}
let Tw = 0;
function Iw() {
  return K(() => `${Tw++}`, []);
}
function Ow() {
  return H.useId();
}
var Rw = "useId" in H ? Ow : Iw;
function Vw(e) {
  const t = Rw(), n = e.dragHandleUsageInstructions || Jn.dragHandleUsageInstructions;
  return H.createElement(jy, null, (r) => H.createElement(Aw, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: r,
    dragHandleUsageInstructions: n,
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
const pc = {
  dragging: 5e3,
  dropAnimating: 4500
}, Mw = (e, t) => t ? cn.drop(t.duration) : e ? cn.snap : cn.fluid, Lw = (e, t) => {
  if (e)
    return t ? Nn.opacity.drop : Nn.opacity.combining;
}, _w = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Bw(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: s
  } = e, i = !!o, a = _w(e), c = !!s, l = c ? To.drop(r, i) : To.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: Mw(a, s),
    transform: l,
    opacity: Lw(i, c),
    zIndex: c ? pc.dropAnimating : pc.dragging,
    pointerEvents: "none"
  };
}
function $w(e) {
  return {
    transform: To.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Fw(e) {
  return e.type === "DRAGGING" ? Bw(e) : $w(e);
}
function kw(e, t, n = ge) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), s = Du(o, r), i = cr(s, n), a = {
    client: s,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, c = {
    x: s.marginBox.width,
    y: s.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: c,
    client: s,
    page: i
  };
}
function jw(e) {
  const t = zs("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  } = e, c = K(() => ({
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  }), [s, a, i]), l = V((p) => {
    const m = o();
    return m || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get dimension when no ref is set") : b()), kw(n, m, p);
  }, [n, o]), u = K(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = j(u), f = j(!0);
  Oe(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Oe(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var qs = H.createContext(null);
function vd(e) {
  e && Fn(e) || (process.env.NODE_ENV !== "production" ? b(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : b());
}
function Gw(e, t, n) {
  kn(() => {
    function r(s) {
      return `Draggable[id: ${s}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? b(!1, "Draggable requires a draggableId") : b(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : b(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? b(!1, `${r(o)} requires an integer index prop`) : b(!1)), e.mapped.type !== "DRAGGING" && (vd(n()), e.isEnabled && (ld(t, o) || (process.env.NODE_ENV !== "production" ? b(!1, `${r(o)} Unable to find drag handle`) : b(!1))));
  });
}
function Uw(e) {
  Hs(() => {
    const t = j(e);
    kn(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Draggable isClone prop value changed during component life") : b(!1));
    }, [e]);
  });
}
function dr(e) {
  const t = pe(e);
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find required context") : b()), t;
}
function Ww(e) {
  e.preventDefault();
}
const zw = (e) => {
  const t = j(null), n = V((D = null) => {
    t.current = D;
  }, []), r = V(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: s,
    registry: i
  } = dr(Dr), {
    type: a,
    droppableId: c
  } = dr(qs), l = K(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: c
  }), [e.draggableId, e.index, a, c]), {
    children: u,
    draggableId: d,
    isEnabled: f,
    shouldRespectForcePress: p,
    canDragInteractiveElements: m,
    isClone: g,
    mapped: h,
    dropAnimationFinished: v
  } = e;
  if (Gw(e, o, r), Uw(g), !g) {
    const D = K(() => ({
      descriptor: l,
      registry: i,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [l, i, r, m, p, f]);
    jw(D);
  }
  const x = K(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": s,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Ww
  } : null, [o, s, d, f]), E = V((D) => {
    h.type === "DRAGGING" && h.dropping && D.propertyName === "transform" && (H.version.startsWith("16") || H.version.startsWith("17") ? v() : wc(v));
  }, [v, h]), w = K(() => {
    const D = Fw(h), C = h.type === "DRAGGING" && h.dropping ? E : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: D,
        onTransitionEnd: C
      },
      dragHandleProps: x
    };
  }, [o, x, d, h, E, n]), y = K(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return H.createElement(H.Fragment, null, u(w, h.snapshot, y));
};
var Hw = zw, yd = (e, t) => e === t, bd = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Kw = (e) => e.combine ? e.combine.draggableId : null, Yw = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function qw() {
  const e = me((o, s) => ({
    x: o,
    y: s
  })), t = me((o, s, i = null, a = null, c = null) => ({
    isDragging: !0,
    isClone: s,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), n = me((o, s, i, a, c = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: l,
      mode: s,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(s, a, c, l, null)
    }
  }));
  return (o, s) => {
    if (In(o)) {
      if (o.critical.draggable.id !== s.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[s.draggableId], c = Ie(o.impact), l = Yw(o.impact), u = o.forceShouldAnimate;
      return n(e(i.x, i.y), o.movementMode, a, s.isClone, c, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId)
        return null;
      const a = s.isClone, c = o.dimensions.draggables[s.draggableId], l = i.result, u = l.mode, d = bd(l), f = Kw(l), m = {
        duration: o.dropDuration,
        curve: Fs.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? Nn.opacity.drop : null,
        scale: f ? Nn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: m,
          draggingOver: d,
          combineWith: f,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, d, f, m)
        }
      };
    }
    return null;
  };
}
function xd(e = null) {
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
const Xw = {
  mapped: {
    type: "SECONDARY",
    offset: ge,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: xd(null)
  }
};
function Zw() {
  const e = me((i, a) => ({
    x: i,
    y: a
  })), t = me(xd), n = me((i, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), r = (i) => i ? n(ge, i, !0) : null, o = (i, a, c, l) => {
    const u = c.displaced.visible[i], d = !!(l.inVirtualList && l.effected[i]), f = xr(c), p = f && f.draggableId === i ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (c.displaced.invisible[i])
        return null;
      const h = zt(l.displacedBy.point), v = e(h.x, h.y);
      return n(v, p, !0);
    }
    if (d)
      return r(p);
    const m = c.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (In(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const c = i.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Jw = () => {
  const e = qw(), t = Zw();
  return (r, o) => e(r, o) || t(r, o) || Xw;
}, Qw = {
  dropAnimationFinished: Xu
}, e0 = Eu(Jw, Qw, null, {
  context: Ws,
  areStatePropsEqual: yd
})(Hw);
var t0 = e0;
function Ed(e) {
  return dr(qs).isUsingCloneFor === e.draggableId && !e.isClone ? null : H.createElement(t0, e);
}
function n0(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return H.createElement(Ed, at({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Xs = (e) => (t) => e === t, r0 = Xs("scroll"), o0 = Xs("auto"), s0 = Xs("visible"), hc = (e, t) => t(e.overflowX) || t(e.overflowY), i0 = (e, t) => t(e.overflowX) && t(e.overflowY), wd = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return hc(n, r0) || hc(n, o0);
}, a0 = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Tn(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, b()), !wd(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return i0(r, s0) || process.env.NODE_ENV !== "production" && ne(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Zs = (e) => e == null ? null : e === document.body ? a0() ? e : null : e === document.documentElement ? null : wd(e) ? e : Zs(e.parentElement);
var c0 = (e) => {
  !e || !Zs(e.parentElement) || process.env.NODE_ENV !== "production" && ne(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ro = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Dd = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Dd(e.parentElement) : !1;
var l0 = (e) => {
  const t = Zs(e), n = Dd(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, u0 = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: s,
  page: i,
  closest: a
}) => {
  const c = (() => {
    if (!a)
      return null;
    const {
      scrollSize: f,
      client: p
    } = a, m = ed({
      scrollHeight: f.scrollHeight,
      scrollWidth: f.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: a.page.marginBox,
      frameClient: p,
      scrollSize: f,
      shouldClipSubject: a.shouldClipSubject,
      scroll: {
        initial: a.scroll,
        current: a.scroll,
        max: m,
        diff: {
          value: ge,
          displacement: ge
        }
      }
    };
  })(), l = o === "vertical" ? Rs : Vu, u = $t({
    page: i,
    withPlaceholder: null,
    axis: l,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: l,
    isEnabled: t,
    client: s,
    page: i,
    frame: c,
    subject: u
  };
};
const d0 = (e, t) => {
  const n = Su(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, s = r + t.scrollHeight, i = o + t.scrollWidth, c = As({
    top: r,
    right: i,
    bottom: s,
    left: o
  }, n.border);
  return Ts({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var f0 = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: s,
  isCombineEnabled: i,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = d0(e, c), u = cr(l, r), d = (() => {
    if (!c)
      return null;
    const p = Su(c), m = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: cr(p, r),
      scroll: Ro(c),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return u0({
    descriptor: t,
    isEnabled: !s,
    isCombineEnabled: i,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: u,
    closest: d
  });
};
const p0 = {
  passive: !1
}, h0 = {
  passive: !0
};
var mc = (e) => e.shouldPublishImmediately ? p0 : h0;
const Kn = (e) => e && e.env.closestScrollable || null;
function m0(e) {
  const t = j(null), n = dr(Dr), r = zs("droppable"), {
    registry: o,
    marshal: s
  } = n, i = Ks(e), a = K(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = j(a), l = K(() => me((w, y) => {
    t.current || (process.env.NODE_ENV !== "production" ? b(!1, "Can only update scroll when dragging") : b());
    const D = {
      x: w,
      y
    };
    s.updateDroppableScroll(a.id, D);
  }), [a.id, s]), u = V(() => {
    const w = t.current;
    return !w || !w.env.closestScrollable ? ge : Ro(w.env.closestScrollable);
  }, []), d = V(() => {
    const w = u();
    l(w.x, w.y);
  }, [u, l]), f = K(() => wn(d), [d]), p = V(() => {
    const w = t.current, y = Kn(w);
    if (w && y || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find scroll options while scrolling") : b()), w.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = V((w, y) => {
    t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect a droppable while a drag is occurring") : b());
    const D = i.current, C = D.getDroppableRef();
    C || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect without a droppable ref") : b());
    const S = l0(C), L = {
      ref: C,
      descriptor: a,
      env: S,
      scrollOptions: y
    };
    t.current = L;
    const O = f0({
      ref: C,
      descriptor: a,
      env: S,
      windowScroll: w,
      direction: D.direction,
      isDropDisabled: D.isDropDisabled,
      isCombineEnabled: D.isCombineEnabled,
      shouldClipSubject: !D.ignoreContainerClipping
    }), F = S.closestScrollable;
    return F && (F.setAttribute(cc.contextId, n.contextId), F.addEventListener("scroll", p, mc(L.scrollOptions)), process.env.NODE_ENV !== "production" && c0(F)), O;
  }, [n.contextId, a, p, i]), g = V(() => {
    const w = t.current, y = Kn(w);
    return w && y || (process.env.NODE_ENV !== "production" ? b(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : b()), Ro(y);
  }, []), h = V(() => {
    const w = t.current;
    w || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop drag when no active drag") : b());
    const y = Kn(w);
    t.current = null, y && (f.cancel(), y.removeAttribute(cc.contextId), y.removeEventListener("scroll", p, mc(w.scrollOptions)));
  }, [p, f]), v = V((w) => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll when there is no drag") : b());
    const D = Kn(y);
    D || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll a droppable with no closest scrollable") : b()), D.scrollTop += w.y, D.scrollLeft += w.x;
  }, []), x = K(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: g,
    dragStopped: h,
    scroll: v
  }), [h, m, g, v]), E = K(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: x
  }), [x, a, r]);
  Oe(() => (c.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && ne("Unsupported: changing the droppableId or type of a Droppable during a drag"), h()), o.droppable.unregister(E);
  }), [x, a, h, E, s, o.droppable]), Oe(() => {
    t.current && s.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, s]), Oe(() => {
    t.current && s.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, s]);
}
function Qr() {
}
const gc = {
  width: 0,
  height: 0,
  margin: Yy
}, g0 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? gc : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, v0 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = g0({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: n
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: r.width,
    height: r.height,
    marginTop: r.margin.top,
    marginRight: r.margin.right,
    marginBottom: r.margin.bottom,
    marginLeft: r.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: n !== "none" ? cn.placeholder : null
  };
}, y0 = (e) => {
  const t = j(null), n = V(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: s,
    contextId: i
  } = e, [a, c] = we(e.animate === "open");
  de(() => a ? r !== "open" ? (n(), c(!1), Qr) : t.current ? Qr : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Qr, [r, a, n]);
  const l = V((d) => {
    d.propertyName === "height" && (o(), r === "close" && s());
  }, [r, s, o]), u = v0({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return H.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": i,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var b0 = H.memo(y0);
function eo(e) {
  return typeof e == "boolean";
}
function to(e, t) {
  t.forEach((n) => n(e));
}
const x0 = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? b(!1, "A Droppable requires a droppableId prop") : b()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : b());
}, function({
  props: t
}) {
  eo(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isDropDisabled must be a boolean") : b()), eo(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isCombineEnabled must be a boolean") : b()), eo(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? b(!1, "ignoreContainerClipping must be a boolean") : b());
}, function({
  getDroppableRef: t
}) {
  vd(t());
}], E0 = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && ne(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], w0 = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? b(!1, "Must provide a clone render function (renderClone) for virtual lists") : b());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? b(!1, "Expected virtual list to not have a placeholder") : b());
}];
function D0(e) {
  kn(() => {
    to(e, x0), e.props.mode === "standard" && to(e, E0), e.props.mode === "virtual" && to(e, w0);
  });
}
class S0 extends H.PureComponent {
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
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : n.isVisible ? {
      isVisible: !0,
      data: n.data,
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
const C0 = (e) => {
  const t = pe(Dr);
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find app context") : b());
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = j(null), s = j(null), {
    children: i,
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    ignoreContainerClipping: d,
    isDropDisabled: f,
    isCombineEnabled: p,
    snapshot: m,
    useClone: g,
    updateViewportMaxScroll: h,
    getContainerForClone: v
  } = e, x = V(() => o.current, []), E = V((I = null) => {
    o.current = I;
  }, []), w = V(() => s.current, []), y = V((I = null) => {
    s.current = I;
  }, []);
  D0({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: w
  });
  const D = V(() => {
    r() && h({
      maxScroll: nd()
    });
  }, [r, h]);
  m0({
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: x
  });
  const C = K(() => H.createElement(S0, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: I,
    data: Q,
    animate: re
  }) => H.createElement(b0, {
    placeholder: Q,
    onClose: I,
    innerRef: y,
    animate: re,
    contextId: n,
    onTransitionEnd: D
  })), [n, D, e.placeholder, e.shouldAnimatePlaceholder, y]), S = K(() => ({
    innerRef: E,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, C, E]), L = g ? g.dragging.draggableId : null, O = K(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: L
  }), [a, L, c]);
  function F() {
    if (!g)
      return null;
    const {
      dragging: I,
      render: Q
    } = g, re = H.createElement(Ed, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (ie, _) => Q(ie, _, I));
    return Id.createPortal(re, v());
  }
  return H.createElement(qs.Provider, {
    value: O
  }, i(S, m), F());
};
var P0 = C0;
function N0() {
  return document.body || (process.env.NODE_ENV !== "production" ? b(!1, "document.body is not ready") : b()), document.body;
}
const vc = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: N0
}, Sd = (e) => {
  let t = {
    ...e
  }, n;
  for (n in vc)
    e[n] === void 0 && (t = {
      ...t,
      [n]: vc[n]
    });
  return t;
}, no = (e, t) => e === t.droppable.type, yc = (e, t) => t.draggables[e.draggable.id], A0 = () => {
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
  }, n = me((s) => ({
    draggableId: s.id,
    type: s.type,
    source: {
      index: s.index,
      droppableId: s.droppableId
    }
  })), r = me((s, i, a, c, l, u) => {
    const d = l.descriptor.id;
    if (l.descriptor.droppableId === s) {
      const m = u ? {
        render: u,
        dragging: n(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? d : null,
        draggingFromThisWith: d,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: m
      };
    }
    if (!i)
      return t;
    if (!c)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: d,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (s, i) => {
    const a = Sd(i), c = a.droppableId, l = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (In(s)) {
      const f = s.critical;
      if (!no(l, f))
        return t;
      const p = yc(f, s.dimensions), m = Ie(s.impact) === c;
      return r(c, u, m, m, p, d);
    }
    if (s.phase === "DROP_ANIMATING") {
      const f = s.completed;
      if (!no(l, f.critical))
        return t;
      const p = yc(f.critical, s.dimensions);
      return r(c, u, bd(f.result) === c, Ie(f.impact) === c, p, d);
    }
    if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
      const f = s.completed;
      if (!no(l, f.critical))
        return t;
      const p = Ie(f.impact) === c, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === c;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, T0 = {
  updateViewportMaxScroll: ax
}, I0 = Eu(A0, T0, (e, t, n) => ({
  ...Sd(n),
  ...e,
  ...t
}), {
  context: Ws,
  areStatePropsEqual: yd
})(P0);
var O0 = I0;
const R0 = ({
  data: e,
  headerData: t,
  setSort: n,
  sort: r,
  isDragDisabled: o = !0,
  isLoading: s,
  onRowClick: i,
  itemClickKey: a,
  haveLinks: c,
  className: l
}) => {
  const [u, d] = we(null), [f, p] = we(e);
  de(() => {
    p(e);
  }, [e]);
  const m = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", g = (v) => {
    i == null || i(v), d(v);
  }, h = (v) => {
    if (!v.destination || !(f != null && f.length)) return;
    const x = v.source.index, E = v.destination.index, w = [...f], [y] = w.splice(x, 1);
    w.splice(E, 0, y), p(w);
  };
  return !(e != null && e.length) && !s ? /* @__PURE__ */ he("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ P("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : s ? /* @__PURE__ */ P("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ P(Bo, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ P(uu, { className: l, children: /* @__PURE__ */ P("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ P("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ P(Vw, { onDragEnd: h, children: /* @__PURE__ */ P(O0, { droppableId: "dropArray", direction: "vertical", children: (v) => /* @__PURE__ */ he("table", { className: "w-full", children: [
    /* @__PURE__ */ P("thead", { children: /* @__PURE__ */ P("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((x, E) => /* @__PURE__ */ P(
      "td",
      {
        onClick: () => n == null ? void 0 : n(
          r === x.name.find((w) => w) ? `-${x.name.find((w) => w) ?? ""}` : x.name.find((w) => w) ?? ""
        ),
        className: `${r && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${r === x.name.find((w) => w) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: x.title
      },
      E
    )) }) }),
    /* @__PURE__ */ he(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...v.droppableProps,
        ref: v.innerRef,
        children: [
          f == null ? void 0 : f.map((x, E) => {
            var w;
            return /* @__PURE__ */ P(
              n0,
              {
                isDragDisabled: o,
                draggableId: (w = x == null ? void 0 : x.id) == null ? void 0 : w.toString(),
                index: E,
                children: (y) => {
                  const D = {
                    ...y.draggableProps.style
                  };
                  return /* @__PURE__ */ P(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${u === f[E] && m}`,
                      onClick: () => g(
                        a ? x[a] : x.id
                      ),
                      ref: y.innerRef,
                      ...y.draggableProps,
                      ...y.dragHandleProps,
                      style: D,
                      children: t.map((C, S) => {
                        var O;
                        let L = (O = C == null ? void 0 : C.name) == null ? void 0 : O.reduce(
                          (F, I) => F == null ? void 0 : F[I],
                          f == null ? void 0 : f[E]
                        );
                        return /* @__PURE__ */ P(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: C.transform ? C.transform(L, E) : L
                          },
                          S
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
}, nD = R0, V0 = ({ className: e, field: t, fieldState: n, ...r }) => /* @__PURE__ */ P(
  "textarea",
  {
    ...t,
    ...r,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), rD = V0;
var Vo = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new WeakMap(), bc = 0, M0 = void 0;
function L0(e) {
  return e ? (Yn.has(e) || (bc += 1, Yn.set(e, bc.toString())), Yn.get(e)) : "0";
}
function _0(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? L0(e.root) : e[t]}`).toString();
}
function B0(e) {
  const t = _0(e);
  let n = Vo.get(t);
  if (!n) {
    const r = /* @__PURE__ */ new Map();
    let o;
    const s = new IntersectionObserver((i) => {
      i.forEach((a) => {
        var c;
        const l = a.isIntersecting && o.some((u) => a.intersectionRatio >= u);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = l), (c = r.get(a.target)) == null || c.forEach((u) => {
          u(l, a);
        });
      });
    }, e);
    o = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
      id: t,
      observer: s,
      elements: r
    }, Vo.set(t, n);
  }
  return n;
}
function $0(e, t, n = {}, r = M0) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const c = e.getBoundingClientRect();
    return t(r, {
      isIntersecting: r,
      target: e,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: c,
      intersectionRect: c,
      rootBounds: c
    }), () => {
    };
  }
  const { id: o, observer: s, elements: i } = B0(n), a = i.get(e) || [];
  return i.has(e) || i.set(e, a), a.push(t), s.observe(e), function() {
    a.splice(a.indexOf(t), 1), a.length === 0 && (i.delete(e), s.unobserve(e)), i.size === 0 && (s.disconnect(), Vo.delete(o));
  };
}
function F0({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: o,
  triggerOnce: s,
  skip: i,
  initialInView: a,
  fallbackInView: c,
  onChange: l
} = {}) {
  var u;
  const [d, f] = G.useState(null), p = G.useRef(l), [m, g] = G.useState({
    inView: !!a,
    entry: void 0
  });
  p.current = l, G.useEffect(
    () => {
      if (i || !d) return;
      let E;
      return E = $0(
        d,
        (w, y) => {
          g({
            inView: w,
            entry: y
          }), p.current && p.current(w, y), y.isIntersecting && s && E && (E(), E = void 0);
        },
        {
          root: o,
          rootMargin: r,
          threshold: e,
          // @ts-ignore
          trackVisibility: n,
          // @ts-ignore
          delay: t
        },
        c
      ), () => {
        E && E();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      d,
      o,
      r,
      s,
      i,
      n,
      c,
      t
    ]
  );
  const h = (u = m.entry) == null ? void 0 : u.target, v = G.useRef(void 0);
  !d && h && !s && !i && v.current !== h && (v.current = h, g({
    inView: !!a,
    entry: void 0
  }));
  const x = [f, m.inView, m.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const k0 = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [n, r] = we(!1), o = () => {
    const s = document.documentElement.scrollTop || document.body.scrollTop;
    r(s > 100);
  };
  return de(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), n ? /* @__PURE__ */ P(
    "div",
    {
      onClick: (s) => {
        t(), s.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ P(
        un,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, j0 = k0, G0 = ({
  infiniteData: e,
  renderItem: t,
  className: n,
  iconClassName: r,
  emptyComponent: o,
  emptyClassName: s,
  isScrollTopButton: i = !0
}) => {
  const {
    hasNextPage: a,
    fetchNextPage: c,
    isFetchingNextPage: l,
    isLoading: u,
    data: d,
    isPending: f
  } = e, p = d == null ? void 0 : d.pages.flatMap((h) => h), { ref: m, inView: g } = F0();
  return de(() => {
    g && a && c();
  }, [c, g, a]), /* @__PURE__ */ he(ln, { children: [
    i && /* @__PURE__ */ P(j0, { className: r }),
    /* @__PURE__ */ P(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${n}`,
        children: !!(p != null && p.length) && p.map((h, v) => t(h, v))
      }
    ),
    /* @__PURE__ */ P(
      "div",
      {
        className: Ds(
          "h-4 flex mt-8 flex-row items-center justify-center",
          s
        ),
        ref: m,
        children: (l || u || f) && /* @__PURE__ */ P(Bo, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && o
      }
    )
  ] });
}, oD = G0, sD = () => {
  const e = j(null);
  return [() => {
    var n;
    return (n = e.current) == null ? void 0 : n.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, e];
};
export {
  H0 as Button,
  K0 as Checkbox,
  Y0 as Chips,
  $o as ErrorText,
  un as Icon,
  oD as InfiniteScroll,
  Z0 as Input,
  J0 as List,
  Bo as Loader,
  Q0 as MultiSelectSearch,
  j0 as ScrollTopButton,
  eD as Search,
  tD as Select,
  nD as Table,
  rD as Textarea,
  uu as Wrapper,
  du as useDebounce,
  sD as useScroll
};
