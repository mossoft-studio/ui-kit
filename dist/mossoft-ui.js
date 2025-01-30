import { jsx as X, jsxs as lt, Fragment as xo } from "react/jsx-runtime";
import * as D from "react";
import I, { useState as Xe, useEffect as pe, useRef as M, useMemo as lx, useLayoutEffect as Yt, useContext as Ct } from "react";
import pr, { unstable_batchedUpdates as fr, flushSync as Kt } from "react-dom";
const wo = ({ name: e, className: t, ...r }) => /* @__PURE__ */ X(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ X(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), ob = ({ style: e, text: t }) => /* @__PURE__ */ lt("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ X("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ X("span", { className: "text-base", children: t })
] }), TU = ({
  children: e,
  onClick: t,
  className: r,
  loadType: o,
  isLoading: n,
  variant: i,
  icon: a,
  disabled: s,
  ...c
}) => {
  const [u, f] = Xe(""), l = () => {
    n && o === "1C" && (f("Отправляем запрос в 1С"), setTimeout(
      () => f(o === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  pe(() => {
    o === "1C" && l();
  }, [n]);
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
  return /* @__PURE__ */ lt(
    "button",
    {
      disabled: s || n,
      onClick: t,
      className: d,
      ...c,
      children: [
        n ? /* @__PURE__ */ X(ob, { text: o === "1C" ? u : void 0 }) : e,
        a && !n && /* @__PURE__ */ X(
          wo,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Zs = ({ error: e }) => /* @__PURE__ */ X("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ X("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), RU = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: o,
  className: n,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: c
}) => /* @__PURE__ */ lt(xo, { children: [
  /* @__PURE__ */ lt(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${o}`,
      children: [
        /* @__PURE__ */ X(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ X("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ X(
          "input",
          {
            disabled: c,
            checked: s,
            onChange: (u) => e(u.target.checked),
            type: "checkbox",
            className: n
          }
        )
      ]
    }
  ),
  a && /* @__PURE__ */ X(Zs, { error: a })
] }), VU = ({ items: e, disable: t, color: r, style: o }) => /* @__PURE__ */ X("div", { className: "flex flex-wrap gap-[6px]", children: e.map((n) => /* @__PURE__ */ X(xo, { children: n.title ? /* @__PURE__ */ X(
  "div",
  {
    style: o,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: n.title
  },
  n.title
) : /* @__PURE__ */ X(xo, {}) })) });
function Qs(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
      t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
  return r;
}
var hn;
(function(e) {
  e.event = "event", e.props = "prop";
})(hn || (hn = {}));
function qt() {
}
function ux(e) {
  var t, r = void 0;
  return function() {
    for (var o = [], n = arguments.length; n--; ) o[n] = arguments[n];
    return t && o.length === t.length && o.every(function(i, a) {
      return i === t[a];
    }) || (t = o, r = e.apply(void 0, o)), r;
  };
}
function Nr(e) {
  return !!(e || "").match(/\d/);
}
function Or(e) {
  return e == null;
}
function dx(e) {
  return typeof e == "number" && isNaN(e);
}
function ib(e) {
  return Or(e) || dx(e) || typeof e == "number" && !isFinite(e);
}
function ab(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function px(e) {
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
function fx(e, t, r) {
  var o = px(r), n = e.search(/[1-9]/);
  return n = n === -1 ? e.length : n, e.substring(0, n) + e.substring(n, e.length).replace(o, "$1" + t);
}
function mx(e) {
  var t = M(e);
  t.current = e;
  var r = M(function() {
    for (var o = [], n = arguments.length; n--; ) o[n] = arguments[n];
    return t.current.apply(t, o);
  });
  return r.current;
}
function ec(e, t) {
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
function gx(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), o = r[0].replace(/^0+/, "") || "0", n = r[1] || "";
  return (t ? "-" : "") + o + (n ? "." + n : "");
}
function sb(e, t, r) {
  for (var o = "", n = r ? "0" : "", i = 0; i <= t - 1; i++)
    o += e[i] || n;
  return o;
}
function mu(e, t) {
  return Array(t + 1).join(e);
}
function cb(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var o = t.split(/[eE]/g), n = o[0], i = o[1];
  if (i = Number(i), !i)
    return r + n;
  n = n.replace(".", "");
  var a = 1 + i, s = n.length;
  return a < 0 ? n = "0." + mu("0", Math.abs(a)) + n : a >= s ? n = n + mu("0", a - s) : n = (n.substring(0, a) || "0") + "." + n.substring(a), r + n;
}
function gu(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var o = (e.indexOf(".") !== -1 || r) && t, n = ec(e), i = n.beforeDecimal, a = n.afterDecimal, s = n.hasNegation, c = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : c.toFixed(t), f = u.split("."), l = i;
  i && Number(f[0]) && (l = i.split("").reverse().reduce(function(b, p, E) {
    return b.length > E ? (Number(b[0]) + Number(p)).toString() + b.substring(1, b.length) : p + b;
  }, f[0]));
  var d = sb(f[1] || "", t, r), g = s ? "-" : "", h = o ? "." : "";
  return "" + g + l + h + d;
}
function er(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var lb = ux(function(e, t) {
  for (var r = 0, o = 0, n = e.length, i = t.length; e[r] === t[r] && r < n; )
    r++;
  for (; e[n - 1 - o] === t[i - 1 - o] && i - o > r && n - o > r; )
    o++;
  return {
    from: { start: r, end: n - o },
    to: { start: r, end: i - o }
  };
}), bx = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function hx(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Uo(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function yx() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function ub(e) {
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
function db(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function vx(e) {
  var t = e.currentValue, r = e.formattedValue, o = e.currentValueIndex, n = e.formattedValueIndex;
  return t[o] === r[n];
}
function Ex(e, t, r, o, n, i, a) {
  a === void 0 && (a = vx);
  var s = n.findIndex(function(y) {
    return y;
  }), c = e.slice(0, s);
  !t && !r.startsWith(c) && (t = c, r = c + r, o = o + c.length);
  for (var u = r.length, f = e.length, l = {}, d = new Array(u), g = 0; g < u; g++) {
    d[g] = -1;
    for (var h = 0, b = f; h < b; h++) {
      var p = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: g,
        formattedValueIndex: h
      });
      if (p && l[h] !== !0) {
        d[g] = h, l[h] = !0;
        break;
      }
    }
  }
  for (var E = o; E < u && (d[E] === -1 || !i(r[E])); )
    E++;
  var O = E === u || d[E] === -1 ? f : d[E];
  for (E = o - 1; E > 0 && d[E] === -1; )
    E--;
  var v = E === -1 || d[E] === -1 ? 0 : d[E] + 1;
  return v > O ? O : o - v < O - o ? v : O;
}
function So(e, t, r, o) {
  var n = e.length;
  if (t = hx(t, 0, n), o === "left") {
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
function xx(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, o = t.length; r < o; r++)
    t[r] = !!(Nr(e[r]) || Nr(e[r - 1]));
  return t;
}
function pb(e, t, r, o, n, i) {
  i === void 0 && (i = qt);
  var a = mx(function(h, b) {
    var p, E;
    return ib(h) ? (E = "", p = "") : typeof h == "number" || b ? (E = typeof h == "number" ? cb(h) : h, p = o(E)) : (E = n(h, void 0), p = o(E)), { formattedValue: p, numAsString: E };
  }), s = Xe(function() {
    return a(Or(e) ? t : e, r);
  }), c = s[0], u = s[1], f = function(h, b) {
    h.formattedValue !== c.formattedValue && u({
      formattedValue: h.formattedValue,
      numAsString: h.value
    }), i(h, b);
  }, l = e, d = r;
  Or(e) && (l = c.numAsString, d = !0);
  var g = a(l, d);
  return lx(function() {
    u(g);
  }, [g.formattedValue]), [c, f];
}
function wx(e) {
  return e.replace(/[^0-9]/g, "");
}
function Sx(e) {
  return e;
}
function fb(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var o = e.customInput, n = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = Sx);
  var s = e.removeFormatting;
  s === void 0 && (s = wx);
  var c = e.defaultValue, u = e.valueIsNumericString, f = e.onValueChange, l = e.isAllowed, d = e.onChange;
  d === void 0 && (d = qt);
  var g = e.onKeyDown;
  g === void 0 && (g = qt);
  var h = e.onMouseUp;
  h === void 0 && (h = qt);
  var b = e.onFocus;
  b === void 0 && (b = qt);
  var p = e.onBlur;
  p === void 0 && (p = qt);
  var E = e.value, O = e.getCaretBoundary;
  O === void 0 && (O = xx);
  var v = e.isValidInputCharacter;
  v === void 0 && (v = Nr);
  var y = e.isCharacterSame, m = Qs(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), x = pb(E, c, !!u, a, s, f), N = x[0], C = N.formattedValue, R = N.numAsString, $ = x[1], A = M(), P = M({ formattedValue: C, numAsString: R }), T = function(U, re) {
    P.current = { formattedValue: U.formattedValue, numAsString: U.value }, $(U, re);
  }, j = Xe(!1), k = j[0], V = j[1], W = M(null), F = M({
    setCaretTimeout: null,
    focusTimeout: null
  });
  pe(function() {
    return V(!0), function() {
      clearTimeout(F.current.setCaretTimeout), clearTimeout(F.current.focusTimeout);
    };
  }, []);
  var G = a, z = function(U, re) {
    var ge = parseFloat(re);
    return {
      formattedValue: U,
      value: re,
      floatValue: isNaN(ge) ? void 0 : ge
    };
  }, B = function(U, re, ge) {
    U.selectionStart === 0 && U.selectionEnd === U.value.length || (er(U, re), F.current.setCaretTimeout = setTimeout(function() {
      U.value === ge && U.selectionStart !== re && er(U, re);
    }, 0));
  }, H = function(U, re, ge) {
    return So(U, re, O(U), ge);
  }, Y = function(U, re, ge) {
    var et = O(re), It = Ex(re, C, U, ge, et, v, y);
    return It = So(re, It, et), It;
  }, K = function(U) {
    var re = U.formattedValue;
    re === void 0 && (re = "");
    var ge = U.input, et = U.source, It = U.event, tt = U.numAsString, Je;
    if (ge) {
      var Ut = U.inputValue || ge.value, Xt = Uo(ge);
      ge.value = re, Je = Y(Ut, re, Xt), Je !== void 0 && B(ge, Je, re);
    }
    re !== C && T(z(re, tt), { event: It, source: et });
  };
  pe(function() {
    var U = P.current, re = U.formattedValue, ge = U.numAsString;
    (C !== re || R !== ge) && T(z(C, R), {
      event: void 0,
      source: hn.props
    });
  }, [C, R]);
  var Q = W.current ? Uo(W.current) : void 0, de = typeof window < "u" ? Yt : pe;
  de(function() {
    var U = W.current;
    if (C !== P.current.formattedValue && U) {
      var re = Y(P.current.formattedValue, C, Q);
      U.value = C, B(U, re, C);
    }
  }, [C]);
  var q = function(U, re, ge) {
    var et = re.target, It = A.current ? bx(A.current, et.selectionEnd) : lb(C, U), tt = Object.assign(Object.assign({}, It), { lastValue: C }), Je = s(U, tt), Ut = G(Je);
    if (Je = s(Ut, void 0), l && !l(z(Ut, Je))) {
      var Xt = re.target, Jt = Uo(Xt), zo = Y(U, C, Jt);
      return Xt.value = C, B(Xt, zo, C), !1;
    }
    return K({
      formattedValue: Ut,
      numAsString: Je,
      inputValue: U,
      event: re,
      source: ge,
      input: re.target
    }), !0;
  }, J = function(U, re) {
    re === void 0 && (re = 0);
    var ge = U.selectionStart, et = U.selectionEnd;
    A.current = { selectionStart: ge, selectionEnd: et + re };
  }, L = function(U) {
    var re = U.target, ge = re.value, et = q(ge, U, hn.event);
    et && d(U), A.current = void 0;
  }, Z = function(U) {
    var re = U.target, ge = U.key, et = re.selectionStart, It = re.selectionEnd, tt = re.value;
    tt === void 0 && (tt = "");
    var Je;
    ge === "ArrowLeft" || ge === "Backspace" ? Je = Math.max(et - 1, 0) : ge === "ArrowRight" ? Je = Math.min(et + 1, tt.length) : ge === "Delete" && (Je = et);
    var Ut = 0;
    ge === "Delete" && et === It && (Ut = 1);
    var Xt = ge === "ArrowLeft" || ge === "ArrowRight";
    if (Je === void 0 || et !== It && !Xt) {
      g(U), J(re, Ut);
      return;
    }
    var Jt = Je;
    if (Xt) {
      var zo = ge === "ArrowLeft" ? "left" : "right";
      Jt = H(tt, Je, zo), Jt !== Je && U.preventDefault();
    } else ge === "Delete" && !v(tt[Je]) ? Jt = H(tt, Je, "right") : ge === "Backspace" && !v(tt[Je]) && (Jt = H(tt, Je, "left"));
    Jt !== Je && B(re, Jt, tt), g(U), J(re, Ut);
  }, he = function(U) {
    var re = U.target, ge = function() {
      var et = re.selectionStart, It = re.selectionEnd, tt = re.value;
      if (tt === void 0 && (tt = ""), et === It) {
        var Je = H(tt, et);
        Je !== et && B(re, Je, tt);
      }
    };
    ge(), requestAnimationFrame(function() {
      ge();
    }), h(U), J(re);
  }, w = function(U) {
    U.persist && U.persist();
    var re = U.target, ge = U.currentTarget;
    W.current = re, F.current.focusTimeout = setTimeout(function() {
      var et = re.selectionStart, It = re.selectionEnd, tt = re.value;
      tt === void 0 && (tt = "");
      var Je = H(tt, et);
      Je !== et && !(et === 0 && It === tt.length) && B(re, Je, tt), b(Object.assign(Object.assign({}, U), { currentTarget: ge }));
    }, 0);
  }, ne = function(U) {
    W.current = null, clearTimeout(F.current.focusTimeout), clearTimeout(F.current.setCaretTimeout), p(U);
  }, S = k && yx() ? "numeric" : void 0, ee = Object.assign({ inputMode: S }, m, {
    type: t,
    value: C,
    onChange: L,
    onKeyDown: Z,
    onMouseUp: he,
    onFocus: w,
    onBlur: ne
  });
  if (r === "text")
    return n ? I.createElement(I.Fragment, null, n(C, m) || null) : I.createElement("span", Object.assign({}, m, { ref: i }), C);
  if (o) {
    var fe = o;
    return I.createElement(fe, Object.assign({}, ee, { ref: i }));
  }
  return I.createElement("input", Object.assign({}, ee, { ref: i }));
}
function bu(e, t) {
  var r = t.decimalScale, o = t.fixedDecimalScale, n = t.prefix;
  n === void 0 && (n = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = Lo(t), u = c.thousandSeparator, f = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && o, d = ec(e, a), g = d.beforeDecimal, h = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (h = sb(h, r, !!o)), u && (g = fx(g, u, s)), n && (g = n + g), i && (h = h + i), b && (g = "-" + g), e = g + (l && f || "") + h, e;
}
function Lo(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, o = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), o || (o = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: o
  };
}
function Ox(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), o = new RegExp("(-)(.)*(-)"), n = r.test(e), i = o.test(e);
  return e = e.replace(/-/g, ""), n && !i && t && (e = "-" + e), e;
}
function Nx(e, t) {
  return new RegExp("(^-)|[0-9]|" + ab(e), "g");
}
function Dx(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Cx(e, t, r) {
  var o;
  t === void 0 && (t = ub(e));
  var n = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, u = t.to, f = u.start, l = u.end, d = Lo(r), g = d.allowedDecimalSeparators, h = d.decimalSeparator, b = e[l] === h;
  if (Nr(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (l - f === 1 && g.indexOf(e[f]) !== -1) {
    var p = s === 0 ? "" : h;
    e = e.substring(0, f) + p + e.substring(f + 1, e.length);
  }
  var E = function(W, F, G) {
    var z = !1, B = !1;
    i.startsWith("-") ? z = !1 : W.startsWith("--") ? (z = !1, B = !0) : a.startsWith("-") && W.length === a.length ? z = !1 : W[0] === "-" && (z = !0);
    var H = z ? 1 : 0;
    return B && (H = 2), H && (W = W.substring(H), F -= H, G -= H), { value: W, start: F, end: G, hasNegation: z };
  }, O = E(e, f, l), v = O.hasNegation;
  o = O, e = o.value, f = o.start, l = o.end;
  var y = E(t.lastValue, c.start, c.end), m = y.start, x = y.end, N = y.value, C = e.substring(f, l);
  e.length && N.length && (m > N.length - a.length || x < i.length) && !(C && a.startsWith(C)) && (e = N);
  var R = 0;
  e.startsWith(i) ? R += i.length : f < i.length && (R = f), e = e.substring(R), l -= R;
  var $ = e.length, A = e.length - a.length;
  e.endsWith(a) ? $ = A : (l > A || l > e.length - a.length) && ($ = l), e = e.substring(0, $), e = Ox(v ? "-" + e : e, n), e = (e.match(Nx(h)) || []).join("");
  var P = e.indexOf(h);
  e = e.replace(new RegExp(ab(h), "g"), function(W, F) {
    return F === P ? "." : "";
  });
  var T = ec(e, n), j = T.beforeDecimal, k = T.afterDecimal, V = T.addNegation;
  return u.end - u.start < c.end - c.start && j === "" && b && !parseFloat(k) && (e = V ? "-" : ""), e;
}
function _x(e, t) {
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
function Ix(e) {
  var t = Lo(e), r = t.thousandSeparator, o = t.decimalSeparator, n = e.prefix;
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
function Px(e) {
  e = Ix(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, o = e.allowLeadingZeros, n = e.onKeyDown;
  n === void 0 && (n = qt);
  var i = e.onBlur;
  i === void 0 && (i = qt);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var f = e.defaultValue, l = e.value, d = e.valueIsNumericString, g = e.onValueChange, h = Qs(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = Lo(e), p = b.decimalSeparator, E = b.allowedDecimalSeparators, O = function(V) {
    return bu(V, e);
  }, v = function(V, W) {
    return Cx(V, W, e);
  }, y = Or(l) ? f : l, m = d ?? Dx(y, u, t);
  Or(l) ? Or(f) || (m = m || typeof f == "number") : m = m || typeof l == "number";
  var x = function(V) {
    return ib(V) ? V : (typeof V == "number" && (V = cb(V)), m && typeof s == "number" ? gu(V, s, !!c) : V);
  }, N = pb(x(l), x(f), !!m, O, v, g), C = N[0], R = C.numAsString, $ = C.formattedValue, A = N[1], P = function(V) {
    var W = V.target, F = V.key, G = W.selectionStart, z = W.selectionEnd, B = W.value;
    if (B === void 0 && (B = ""), (F === "Backspace" || F === "Delete") && z < u.length) {
      V.preventDefault();
      return;
    }
    if (G !== z) {
      n(V);
      return;
    }
    F === "Backspace" && B[0] === "-" && G === u.length + 1 && r && er(W, 1), s && c && (F === "Backspace" && B[G - 1] === p ? (er(W, G - 1), V.preventDefault()) : F === "Delete" && B[G] === p && V.preventDefault()), E != null && E.includes(F) && B[G] === p && er(W, G + 1);
    var H = a === !0 ? "," : a;
    F === "Backspace" && B[G - 1] === H && er(W, G - 1), F === "Delete" && B[G] === H && er(W, G + 1), n(V);
  }, T = function(V) {
    var W = R;
    if (W.match(/\d/g) || (W = ""), o || (W = gx(W)), c && s && (W = gu(W, s, c)), W !== R) {
      var F = bu(W, e);
      A({
        formattedValue: F,
        value: W,
        floatValue: parseFloat(W)
      }, {
        event: V,
        source: hn.event
      });
    }
    i(V);
  }, j = function(V) {
    return V === p ? !0 : Nr(V);
  }, k = function(V) {
    var W = V.currentValue, F = V.lastValue, G = V.formattedValue, z = V.currentValueIndex, B = V.formattedValueIndex, H = W[z], Y = G[B], K = lb(F, W), Q = K.to, de = function(q) {
      return v(q).indexOf(".") + u.length;
    };
    return l === 0 && c && s && W[Q.start] === p && de(W) < z && de(G) > B ? !1 : z >= Q.start && z < Q.end && E && E.includes(H) && Y === p ? !0 : H === Y;
  };
  return Object.assign(Object.assign({}, h), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: j,
    isCharacterSame: k,
    onValueChange: A,
    format: O,
    removeFormatting: v,
    getCaretBoundary: function(V) {
      return _x(V, e);
    },
    onKeyDown: P,
    onBlur: T
  });
}
function $x(e) {
  var t = Px(e);
  return I.createElement(fb, Object.assign({}, t));
}
function Ax(e, t) {
  var r = t.format, o = t.allowEmptyFormatting, n = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !o)
    return "";
  for (var a = 0, s = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (s[c] = e[a] || db(n, a), a += 1);
  return s.join("");
}
function Tx(e, t, r) {
  t === void 0 && (t = ub(e));
  var o = r.format, n = r.patternChar;
  n === void 0 && (n = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(p) {
    return o[p] === n;
  }, u = function(p, E) {
    for (var O = "", v = 0; v < p.length; v++)
      c(E + v) && Nr(p[v]) && (O += p[v]);
    return O;
  }, f = function(p) {
    return p.replace(/[^0-9]/g, "");
  };
  if (!o.match(/\d/))
    return f(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === o.length) {
    for (var l = "", d = 0; d < e.length; d++)
      if (c(d))
        Nr(e[d]) && (l += e[d]);
      else if (e[d] !== o[d])
        return f(e);
    return l;
  }
  var g = s.substring(0, i.start), h = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(g, 0) + f(h) + u(b, i.end);
}
function Rx(e, t) {
  var r = t.format, o = t.mask, n = t.patternChar;
  n === void 0 && (n = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(d, g) {
    var h = void 0;
    d === n && (a++, h = db(o, a - 1), s === -1 && e[g] === h && (s = g)), c[g] = h;
  });
  for (var u = function(d) {
    return r[d] === n && e[d] !== c[d];
  }, f = 0, l = i.length; f < l; f++)
    i[f] = f === s || u(f) || u(f - 1);
  return i[r.indexOf(n)] = !0, i;
}
function Vx(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Mx(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Lx(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var o = e.onKeyDown;
  o === void 0 && (o = qt);
  var n = e.patternChar;
  n === void 0 && (n = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = Qs(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Vx(e);
  var u = function(h) {
    return Rx(h, e);
  }, f = function(h) {
    var b = h.key, p = h.target, E = p.selectionStart, O = p.selectionEnd, v = p.value;
    if (E !== O) {
      o(h);
      return;
    }
    var y = E;
    if (b === "Backspace" || b === "Delete") {
      var m = "right";
      if (b === "Backspace") {
        for (; y > 0 && t[y - 1] !== n; )
          y--;
        m = "left";
      } else {
        for (var x = t.length; y < x && t[y] !== n; )
          y++;
        m = "right";
      }
      y = So(v, y, u(v), m);
    } else t[y] !== n && b !== "ArrowLeft" && b !== "ArrowRight" && (y = So(v, y + 1, u(v), "right"));
    y !== E && er(p, y), o(h);
  }, l = Or(i) ? a : i, d = s ?? Mx(l, t), g = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(h) {
      return Ax(h, g);
    },
    removeFormatting: function(h, b) {
      return Tx(h, b, g);
    },
    getCaretBoundary: u,
    onKeyDown: f
  });
}
function Bx(e) {
  var t = Lx(e);
  return I.createElement(fb, Object.assign({}, t));
}
const Fx = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, MU = ({
  type: e,
  field: t,
  label: r,
  fieldState: o,
  postfix: n,
  labelClassName: i,
  errorPlace: a = "right",
  parentClassName: s,
  className: c,
  numberWrapperClassname: u,
  format: f,
  decimalScale: l = 1,
  ...d
}) => {
  var b, p;
  const g = "!border-danger", { error: h } = o;
  return /* @__PURE__ */ lt("label", { children: [
    r && /* @__PURE__ */ X("span", { className: `text-primary ${i}`, children: r }),
    f ? /* @__PURE__ */ X(
      Bx,
      {
        onValueChange: (E) => {
          var O;
          t == null || t.onChange((O = E.value.replace("_", "")) == null ? void 0 : O.toString());
        },
        value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${h ? g : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
        format: f,
        ...d
      }
    ) : e === "number" ? /* @__PURE__ */ lt(
      "div",
      {
        className: `${h ? g : ""} ${s} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ X(
            $x,
            {
              decimalScale: l,
              onValueChange: (E) => {
                var O;
                return t == null ? void 0 : t.onChange((O = E.value.replace("_", "")) == null ? void 0 : O.toString());
              },
              value: (p = t == null ? void 0 : t.value) == null ? void 0 : p.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
              ...d,
              ...Fx.number
            }
          ),
          n ? /* @__PURE__ */ X("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ X(
      "input",
      {
        ...t,
        ...d,
        type: e,
        className: `${h ? g : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    h && /* @__PURE__ */ X(Zs, { error: h })
  ] });
}, mb = ({
  children: e,
  className: t
}) => /* @__PURE__ */ X("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), LU = ({ data: e, className: t, onClick: r }) => {
  const o = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [n] = Xe(null);
  return /* @__PURE__ */ X(mb, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ X("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ lt(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${n === i.value && o}`,
      children: [
        /* @__PURE__ */ X("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ X("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, tc = "-", Wx = (e) => {
  const t = Gx(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(tc);
      return s[0] === "" && s.length !== 1 && s.shift(), gb(s, t) || jx(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && o[a] ? [...c, ...o[a]] : c;
    }
  };
}, gb = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? gb(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const i = e.join(tc);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, hu = /^\[(.+)\]$/, jx = (e) => {
  if (hu.test(e)) {
    const t = hu.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Gx = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zx(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    Pa(a, o, i, t);
  }), o;
}, Pa = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? t : yu(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (kx(n)) {
        Pa(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([i, a]) => {
      Pa(a, yu(t, i), r, o);
    });
  });
}, yu = (e, t) => {
  let r = e;
  return t.split(tc).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, kx = (e) => e.isThemeGetter, zx = (e, t) => t ? e.map(([r, o]) => {
  const n = o.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, n];
}) : e, Ux = (e) => {
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
}, bb = "!", Hx = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, n = t[0], i = t.length, a = (s) => {
    const c = [];
    let u = 0, f = 0, l;
    for (let p = 0; p < s.length; p++) {
      let E = s[p];
      if (u === 0) {
        if (E === n && (o || s.slice(p, p + i) === t)) {
          c.push(s.slice(f, p)), f = p + i;
          continue;
        }
        if (E === "/") {
          l = p;
          continue;
        }
      }
      E === "[" ? u++ : E === "]" && u--;
    }
    const d = c.length === 0 ? s : s.substring(f), g = d.startsWith(bb), h = g ? d.substring(1) : d, b = l && l > f ? l - f : void 0;
    return {
      modifiers: c,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: b
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, qx = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, Yx = (e) => ({
  cache: Ux(e.cacheSize),
  parseClassName: Hx(e),
  ...Wx(e)
}), Kx = /\s+/, Xx = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n
  } = t, i = [], a = e.trim().split(Kx);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: f,
      hasImportantModifier: l,
      baseClassName: d,
      maybePostfixModifierPosition: g
    } = r(u);
    let h = !!g, b = o(h ? d.substring(0, g) : d);
    if (!b) {
      if (!h) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (b = o(d), !b) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      h = !1;
    }
    const p = qx(f).join(":"), E = l ? p + bb : p, O = E + b;
    if (i.includes(O))
      continue;
    i.push(O);
    const v = n(b, h);
    for (let y = 0; y < v.length; ++y) {
      const m = v[y];
      i.push(E + m);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Jx() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = hb(t)) && (o && (o += " "), o += r);
  return o;
}
const hb = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = hb(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Zx(e, ...t) {
  let r, o, n, i = a;
  function a(c) {
    const u = t.reduce((f, l) => l(f), e());
    return r = Yx(u), o = r.cache.get, n = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = o(c);
    if (u)
      return u;
    const f = Xx(c, r);
    return n(c, f), f;
  }
  return function() {
    return i(Jx.apply(null, arguments));
  };
}
const Qe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, yb = /^\[(?:([a-z-]+):)?(.+)\]$/i, Qx = /^\d+\/\d+$/, ew = /* @__PURE__ */ new Set(["px", "full", "screen"]), tw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ow = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, iw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ht = (e) => Gr(e) || ew.has(e) || Qx.test(e), Zt = (e) => Qr(e, "length", fw), Gr = (e) => !!e && !Number.isNaN(Number(e)), Ho = (e) => Qr(e, "number", Gr), rn = (e) => !!e && Number.isInteger(Number(e)), aw = (e) => e.endsWith("%") && Gr(e.slice(0, -1)), me = (e) => yb.test(e), Qt = (e) => tw.test(e), sw = /* @__PURE__ */ new Set(["length", "size", "percentage"]), cw = (e) => Qr(e, sw, vb), lw = (e) => Qr(e, "position", vb), uw = /* @__PURE__ */ new Set(["image", "url"]), dw = (e) => Qr(e, uw, gw), pw = (e) => Qr(e, "", mw), nn = () => !0, Qr = (e, t, r) => {
  const o = yb.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, fw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rw.test(e) && !nw.test(e)
), vb = () => !1, mw = (e) => ow.test(e), gw = (e) => iw.test(e), bw = () => {
  const e = Qe("colors"), t = Qe("spacing"), r = Qe("blur"), o = Qe("brightness"), n = Qe("borderColor"), i = Qe("borderRadius"), a = Qe("borderSpacing"), s = Qe("borderWidth"), c = Qe("contrast"), u = Qe("grayscale"), f = Qe("hueRotate"), l = Qe("invert"), d = Qe("gap"), g = Qe("gradientColorStops"), h = Qe("gradientColorStopPositions"), b = Qe("inset"), p = Qe("margin"), E = Qe("opacity"), O = Qe("padding"), v = Qe("saturate"), y = Qe("scale"), m = Qe("sepia"), x = Qe("skew"), N = Qe("space"), C = Qe("translate"), R = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", me, t], P = () => [me, t], T = () => ["", Ht, Zt], j = () => ["auto", Gr, me], k = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", me], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [Gr, me];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [nn],
      spacing: [Ht, Zt],
      blur: ["none", "", Qt, me],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Qt, me],
      borderSpacing: P(),
      borderWidth: T(),
      contrast: B(),
      grayscale: G(),
      hueRotate: B(),
      invert: G(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [aw, Zt],
      inset: A(),
      margin: A(),
      opacity: B(),
      padding: P(),
      saturate: B(),
      scale: B(),
      sepia: G(),
      skew: B(),
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
        aspect: ["auto", "square", "video", me]
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
        columns: [Qt]
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
        object: [...k(), me]
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
        z: ["auto", rn, me]
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
        flex: ["1", "auto", "initial", "none", me]
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
        order: ["first", "last", "none", rn, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [nn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", rn, me]
        }, me]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [nn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [rn, me]
        }, me]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
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
        "auto-cols": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", me]
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
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", me, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [me, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [me, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Qt]
        }, Qt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [me, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [me, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Qt, Zt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ho]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Gr, Ho]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ht, me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", me]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", me]
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
        "placeholder-opacity": [E]
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
        "text-opacity": [E]
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
        decoration: ["auto", "from-font", Ht, Zt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ht, me]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me]
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
        content: ["none", me]
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
        "bg-opacity": [E]
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
        bg: [...k(), lw]
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
        bg: ["auto", "cover", "contain", cw]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, dw]
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
        "border-opacity": [E]
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
        "divide-opacity": [E]
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
        "outline-offset": [Ht, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ht, Zt]
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
        "ring-opacity": [E]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ht, Zt]
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
        shadow: ["", "inner", "none", Qt, pw]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [nn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E]
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Qt, me]
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
        saturate: [v]
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
        "backdrop-brightness": [o]
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
        "backdrop-opacity": [E]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", me]
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
        ease: ["linear", "in", "out", "in-out", me]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", me]
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
        rotate: [rn, me]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", me]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me]
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
        "will-change": ["auto", "scroll", "contents", "transform", me]
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
        stroke: [Ht, Zt, Ho]
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
}, hw = /* @__PURE__ */ Zx(bw);
function Eb(e, t) {
  const [r, o] = Xe(e);
  return pe(() => {
    const n = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e]), r;
}
const BU = ({
  options: e,
  field: t,
  className: r,
  ...o
}) => {
  const [n, i] = Xe(!1), [a, s] = Xe(""), c = Eb(a, 100), u = M(null);
  pe(() => {
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
  return /* @__PURE__ */ lt("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ lt("div", { className: "h-fit w-full", children: [
      n && /* @__PURE__ */ X(
        wo,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ X(
        "input",
        {
          ...o,
          ref: u,
          className: hw(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: n && a || !n && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (l) => {
              var d;
              return (d = e.find((g) => g.value === l)) == null ? void 0 : d.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: n ? "Поиск..." : "Выбрать",
          onChange: (l) => s(l.target.value),
          readOnly: !n
        }
      )
    ] }),
    n && /* @__PURE__ */ X("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(c.toLowerCase())
    ).map((l) => {
      var d;
      return /* @__PURE__ */ X(
        "li",
        {
          onClick: () => f(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ lt("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ X(wo, { name: l.icon }),
            /* @__PURE__ */ X(
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
}, FU = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: o,
  parentClassName: n
}) => {
  const [i, a] = Xe(r), s = Eb(i, 300);
  return pe(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ lt("div", { className: `relative h-fit w-full ${n}`, children: [
    /* @__PURE__ */ X(
      wo,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ X(
      "input",
      {
        placeholder: e,
        onChange: (c) => a(c.target.value),
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${o}`
      }
    )
  ] });
}, WU = ({
  placeholder: e,
  options: t,
  className: r,
  field: o,
  fieldState: n,
  labelClassName: i,
  parentClassName: a,
  formState: s,
  label: c,
  ...u
}) => /* @__PURE__ */ lt("label", { children: [
  c && /* @__PURE__ */ X("span", { className: `text-primary ${i}`, children: c }),
  /* @__PURE__ */ X(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ lt(
        "select",
        {
          ...o,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ X("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((f, l) => /* @__PURE__ */ X("option", { value: f.value, className: "text-black", children: f.label }, l))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ X(Zs, { error: n == null ? void 0 : n.error })
] });
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
function yw(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || "default");
    if (yn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vw(e) {
  var t = yw(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function Ew(e, t, r) {
  return (t = vw(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function vu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function Eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vu(Object(r), !0).forEach(function(o) {
      Ew(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vu(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function Pt(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var xu = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), qo = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, wu = {
  INIT: "@@redux/INIT" + qo(),
  REPLACE: "@@redux/REPLACE" + qo(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + qo();
  }
};
function xw(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ww(e) {
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
  if (Nw(e)) return "date";
  if (Ow(e)) return "error";
  var r = Sw(e);
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
function Sw(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ow(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Nw(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function wr(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = ww(e)), t;
}
function xb(e, t, r) {
  var o;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Pt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Pt(1) : "Expected the enhancer to be a function. Instead, received: '" + wr(r) + "'");
    return r(xb)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Pt(2) : "Expected the root reducer to be a function. Instead, received: '" + wr(e) + "'");
  var n = e, i = t, a = [], s = a, c = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Pt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function l(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Pt(4) : "Expected the listener to be a function. Instead, received: '" + wr(b) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Pt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var p = !0;
    return u(), s.push(b), function() {
      if (p) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Pt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        p = !1, u();
        var O = s.indexOf(b);
        s.splice(O, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!xw(b))
      throw new Error(process.env.NODE_ENV === "production" ? Pt(7) : "Actions must be plain objects. Instead, the actual type was: '" + wr(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Pt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Pt(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = n(i, b);
    } finally {
      c = !1;
    }
    for (var p = a = s, E = 0; E < p.length; E++) {
      var O = p[E];
      O();
    }
    return b;
  }
  function g(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Pt(10) : "Expected the nextReducer to be a function. Instead, received: '" + wr(b));
    n = b, d({
      type: wu.REPLACE
    });
  }
  function h() {
    var b, p = l;
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
          throw new Error(process.env.NODE_ENV === "production" ? Pt(11) : "Expected the observer to be an object. Instead, received: '" + wr(O) + "'");
        function v() {
          O.next && O.next(f());
        }
        v();
        var y = p(v);
        return {
          unsubscribe: y
        };
      }
    }, b[xu] = function() {
      return this;
    }, b;
  }
  return d({
    type: wu.INIT
  }), o = {
    dispatch: d,
    subscribe: l,
    getState: f,
    replaceReducer: g
  }, o[xu] = h, o;
}
function Su(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Ou(e, t) {
  if (typeof e == "function")
    return Su(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Pt(16) : "bindActionCreators expected an object or a function, but instead received: '" + wr(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var o in e) {
    var n = e[o];
    typeof n == "function" && (r[o] = Su(n, t));
  }
  return r;
}
function wb() {
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
function Dw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(o) {
    return function() {
      var n = o.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Pt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: n.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(c) {
        return c(a);
      });
      return i = wb.apply(void 0, s)(n.dispatch), Eu(Eu({}, n), {}, {
        dispatch: i
      });
    };
  };
}
function Cw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $a = { exports: {} }, Yo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nu;
function _w() {
  if (Nu) return Yo;
  Nu = 1;
  var e = I;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Yo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Yo;
}
var Ko = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Du;
function Iw() {
  return Du || (Du = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var E = p[0].inst, O = p[1];
      return c(
        function() {
          E.value = b, E.getSnapshot = h, r(E) && O({ inst: E });
        },
        [g, b, h]
      ), s(
        function() {
          return r(E) && O({ inst: E }), g(function() {
            r(E) && O({ inst: E });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Ko.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ko;
}
process.env.NODE_ENV === "production" ? $a.exports = _w() : $a.exports = Iw();
var rc = $a.exports, Xo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cu;
function Pw() {
  if (Cu) return Xo;
  Cu = 1;
  var e = I, t = rc;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Xo.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function E(x) {
          if (!O) {
            if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return y = N;
            }
            return y = x;
          }
          if (N = y, o(v, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
        }
        var O = !1, v, y, m = l === void 0 ? null : l;
        return [
          function() {
            return E(f());
          },
          m === null ? void 0 : function() {
            return E(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Xo;
}
var Jo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _u;
function $w() {
  return _u || (_u = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = rc, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Jo.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function E(x) {
            if (!O) {
              if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return y = N;
              }
              return y = x;
            }
            if (N = y, o(v, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
          }
          var O = !1, v, y, m = l === void 0 ? null : l;
          return [
            function() {
              return E(f());
            },
            m === null ? void 0 : function() {
              return E(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Jo;
}
process.env.NODE_ENV === "production" ? Pw() : $w();
function Aw(e) {
  e();
}
let Sb = Aw;
const Tw = (e) => Sb = e, Rw = () => Sb, Iu = Symbol.for("react-redux-context"), Pu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Vw() {
  var e;
  if (!D.createContext) return {};
  const t = (e = Pu[Iu]) != null ? e : Pu[Iu] = /* @__PURE__ */ new Map();
  let r = t.get(D.createContext);
  return r || (r = D.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(D.createContext, r)), r;
}
const Ob = /* @__PURE__ */ Vw(), Mw = () => {
  throw new Error("uSES not initialized!");
};
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, tr.apply(null, arguments);
}
function Nb(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Aa = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $u;
function Lw() {
  if ($u) return ye;
  $u = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  function y(m) {
    return v(m) === u;
  }
  return ye.AsyncMode = c, ye.ConcurrentMode = u, ye.ContextConsumer = s, ye.ContextProvider = a, ye.Element = t, ye.ForwardRef = f, ye.Fragment = o, ye.Lazy = h, ye.Memo = g, ye.Portal = r, ye.Profiler = i, ye.StrictMode = n, ye.Suspense = l, ye.isAsyncMode = function(m) {
    return y(m) || v(m) === c;
  }, ye.isConcurrentMode = y, ye.isContextConsumer = function(m) {
    return v(m) === s;
  }, ye.isContextProvider = function(m) {
    return v(m) === a;
  }, ye.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, ye.isForwardRef = function(m) {
    return v(m) === f;
  }, ye.isFragment = function(m) {
    return v(m) === o;
  }, ye.isLazy = function(m) {
    return v(m) === h;
  }, ye.isMemo = function(m) {
    return v(m) === g;
  }, ye.isPortal = function(m) {
    return v(m) === r;
  }, ye.isProfiler = function(m) {
    return v(m) === i;
  }, ye.isStrictMode = function(m) {
    return v(m) === n;
  }, ye.isSuspense = function(m) {
    return v(m) === l;
  }, ye.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === E || m.$$typeof === O || m.$$typeof === b);
  }, ye.typeOf = v, ye;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Au;
function Bw() {
  return Au || (Au = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function v(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === l || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === p || w.$$typeof === E || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ne = w.$$typeof;
        switch (ne) {
          case t:
            var S = w.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var m = c, x = u, N = s, C = a, R = t, $ = f, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === c;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function H(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === f;
    }
    function Q(w) {
      return y(w) === o;
    }
    function de(w) {
      return y(w) === h;
    }
    function q(w) {
      return y(w) === g;
    }
    function J(w) {
      return y(w) === r;
    }
    function L(w) {
      return y(w) === i;
    }
    function Z(w) {
      return y(w) === n;
    }
    function he(w) {
      return y(w) === l;
    }
    ve.AsyncMode = m, ve.ConcurrentMode = x, ve.ContextConsumer = N, ve.ContextProvider = C, ve.Element = R, ve.ForwardRef = $, ve.Fragment = A, ve.Lazy = P, ve.Memo = T, ve.Portal = j, ve.Profiler = k, ve.StrictMode = V, ve.Suspense = W, ve.isAsyncMode = G, ve.isConcurrentMode = z, ve.isContextConsumer = B, ve.isContextProvider = H, ve.isElement = Y, ve.isForwardRef = K, ve.isFragment = Q, ve.isLazy = de, ve.isMemo = q, ve.isPortal = J, ve.isProfiler = L, ve.isStrictMode = Z, ve.isSuspense = he, ve.isValidElementType = v, ve.typeOf = y;
  }()), ve;
}
process.env.NODE_ENV === "production" ? Aa.exports = Lw() : Aa.exports = Bw();
var Fw = Aa.exports, nc = Fw, Ww = {
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
}, jw = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Gw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Db = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, oc = {};
oc[nc.ForwardRef] = Gw;
oc[nc.Memo] = Db;
function Tu(e) {
  return nc.isMemo(e) ? Db : oc[e.$$typeof] || Ww;
}
var kw = Object.defineProperty, zw = Object.getOwnPropertyNames, Ru = Object.getOwnPropertySymbols, Uw = Object.getOwnPropertyDescriptor, Hw = Object.getPrototypeOf, Vu = Object.prototype;
function Cb(e, t, r) {
  if (typeof t != "string") {
    if (Vu) {
      var o = Hw(t);
      o && o !== Vu && Cb(e, o, r);
    }
    var n = zw(t);
    Ru && (n = n.concat(Ru(t)));
    for (var i = Tu(e), a = Tu(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!jw[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = Uw(t, c);
        try {
          kw(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var qw = Cb;
const Mu = /* @__PURE__ */ Cw(qw);
var Ta = { exports: {} }, Ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lu;
function Yw() {
  if (Lu) return Ee;
  Lu = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Ee.ContextConsumer = a, Ee.ContextProvider = i, Ee.Element = e, Ee.ForwardRef = c, Ee.Fragment = r, Ee.Lazy = d, Ee.Memo = l, Ee.Portal = t, Ee.Profiler = n, Ee.StrictMode = o, Ee.Suspense = u, Ee.SuspenseList = f, Ee.isAsyncMode = function() {
    return !1;
  }, Ee.isConcurrentMode = function() {
    return !1;
  }, Ee.isContextConsumer = function(p) {
    return b(p) === a;
  }, Ee.isContextProvider = function(p) {
    return b(p) === i;
  }, Ee.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ee.isForwardRef = function(p) {
    return b(p) === c;
  }, Ee.isFragment = function(p) {
    return b(p) === r;
  }, Ee.isLazy = function(p) {
    return b(p) === d;
  }, Ee.isMemo = function(p) {
    return b(p) === l;
  }, Ee.isPortal = function(p) {
    return b(p) === t;
  }, Ee.isProfiler = function(p) {
    return b(p) === n;
  }, Ee.isStrictMode = function(p) {
    return b(p) === o;
  }, Ee.isSuspense = function(p) {
    return b(p) === u;
  }, Ee.isSuspenseList = function(p) {
    return b(p) === f;
  }, Ee.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Ee.typeOf = b, Ee;
}
var xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bu;
function Kw() {
  return Bu || (Bu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, E = !1, O = !1, v;
    v = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === f || E || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === v || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var fe = S.type;
            switch (fe) {
              case r:
              case n:
              case o:
              case u:
              case f:
                return fe;
              default:
                var U = fe && fe.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return U;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = a, N = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = f, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return m(S) === a;
    }
    function Y(S) {
      return m(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Q(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function q(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function he(S) {
      return m(S) === o;
    }
    function w(S) {
      return m(S) === u;
    }
    function ne(S) {
      return m(S) === f;
    }
    xe.ContextConsumer = x, xe.ContextProvider = N, xe.Element = C, xe.ForwardRef = R, xe.Fragment = $, xe.Lazy = A, xe.Memo = P, xe.Portal = T, xe.Profiler = j, xe.StrictMode = k, xe.Suspense = V, xe.SuspenseList = W, xe.isAsyncMode = z, xe.isConcurrentMode = B, xe.isContextConsumer = H, xe.isContextProvider = Y, xe.isElement = K, xe.isForwardRef = Q, xe.isFragment = de, xe.isLazy = q, xe.isMemo = J, xe.isPortal = L, xe.isProfiler = Z, xe.isStrictMode = he, xe.isSuspense = w, xe.isSuspenseList = ne, xe.isValidElementType = y, xe.typeOf = m;
  }()), xe;
}
process.env.NODE_ENV === "production" ? Ta.exports = Yw() : Ta.exports = Kw();
var Fu = Ta.exports;
function ic(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Zo(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ic(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Xw(e, t, r) {
  Zo(e, "mapStateToProps"), Zo(t, "mapDispatchToProps"), Zo(r, "mergeProps");
}
const Jw = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Zw(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(O, v) {
    return c = O, u = v, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const O = e(c, u), v = !a(O, f);
    return f = O, v && (d = r(f, l, u)), d;
  }
  function E(O, v) {
    const y = !i(v, u), m = !n(O, c, v, u);
    return c = O, u = v, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(v, y) {
    return s ? E(v, y) : g(v, y);
  };
}
function Qw(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Nb(t, Jw);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && Xw(a, s, c), Zw(a, s, c, e, i);
}
function eS(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function tS(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function _b(e, t, r) {
  tS(e) || ic(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ra(e) {
  return function(r) {
    const o = e(r);
    function n() {
      return o;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Wu(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ib(e, t) {
  return function(o, {
    displayName: n
  }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Wu(e);
      let u = i(s, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Wu(u), u = i(s, c)), process.env.NODE_ENV !== "production" && _b(u, n, t), u;
    }, i;
  };
}
function ac(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function rS(e) {
  return e && typeof e == "object" ? Ra((t) => (
    // @ts-ignore
    eS(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ib(e, "mapDispatchToProps")
  ) : ac(e, "mapDispatchToProps") : Ra((t) => ({
    dispatch: t
  }));
}
function nS(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ib(e, "mapStateToProps")
  ) : ac(e, "mapStateToProps") : Ra(() => ({}));
}
function oS(e, t, r) {
  return tr({}, r, e, t);
}
function iS(e) {
  return function(r, {
    displayName: o,
    areMergedPropsEqual: n
  }) {
    let i = !1, a;
    return function(c, u, f) {
      const l = e(c, u, f);
      return i ? n(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && _b(a, o, "mergeProps")), a;
    };
  };
}
function aS(e) {
  return e ? typeof e == "function" ? iS(e) : ac(e, "mergeProps") : () => oS;
}
function sS() {
  const e = Rw();
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
const ju = {
  notify() {
  },
  get: () => []
};
function Pb(e, t) {
  let r, o = ju, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let E = !1;
    return () => {
      E || (E = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = sS());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = ju);
  }
  function d() {
    i || (i = !0, f());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const cS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Oo = cS ? D.useLayoutEffect : D.useEffect;
function Gu(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Qo(e, t) {
  if (Gu(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Gu(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const lS = ["reactReduxForwardedRef"];
let $b = Mw;
const uS = (e) => {
  $b = e;
}, dS = [null, null], pS = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function fS(e, t, r) {
  Oo(() => e(...t), r);
}
function mS(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function gS(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const b = t.getState();
    let p, E;
    try {
      p = o(b, n.current);
    } catch (O) {
      E = O, d = O;
    }
    E || (d = null), p === i.current ? a.current || u() : (i.current = p, c.current = p, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function bS(e, t) {
  return e === t;
}
let ku = !1;
function Ab(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = bS,
  areOwnPropsEqual: i = Qo,
  areStatePropsEqual: a = Qo,
  areMergedPropsEqual: s = Qo,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = Ob
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !ku && (ku = !0, ic('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = nS(e), d = rS(t), g = aS(r), h = !!e;
  return (p) => {
    if (process.env.NODE_ENV !== "production" && !Fu.isValidElementType(p))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${pS(p)}`);
    const E = p.displayName || p.name || "Component", O = `Connect(${E})`, v = {
      shouldHandleStateChanges: h,
      displayName: O,
      wrappedComponentName: E,
      WrappedComponent: p,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function y(N) {
      const [C, R, $] = D.useMemo(() => {
        const {
          reactReduxForwardedRef: w
        } = N, ne = Nb(N, lS);
        return [N.context, w, ne];
      }, [N]), A = D.useMemo(() => C && C.Consumer && // @ts-ignore
      Fu.isContextConsumer(/* @__PURE__ */ D.createElement(C.Consumer, null)) ? C : f, [C, f]), P = D.useContext(A), T = !!N.store && !!N.store.getState && !!N.store.dispatch, j = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !T && !j)
        throw new Error(`Could not find "store" in the context of "${O}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${O} in connect options.`);
      const k = T ? N.store : P.store, V = j ? P.getServerState : k.getState, W = D.useMemo(() => Qw(k.dispatch, v), [k]), [F, G] = D.useMemo(() => {
        if (!h) return dS;
        const w = Pb(k, T ? void 0 : P.subscription), ne = w.notifyNestedSubs.bind(w);
        return [w, ne];
      }, [k, T, P]), z = D.useMemo(() => T ? P : tr({}, P, {
        subscription: F
      }), [T, P, F]), B = D.useRef(), H = D.useRef($), Y = D.useRef(), K = D.useRef(!1);
      D.useRef(!1);
      const Q = D.useRef(!1), de = D.useRef();
      Oo(() => (Q.current = !0, () => {
        Q.current = !1;
      }), []);
      const q = D.useMemo(() => () => Y.current && $ === H.current ? Y.current : W(k.getState(), $), [k, $]), J = D.useMemo(() => (ne) => F ? gS(
        h,
        k,
        F,
        // @ts-ignore
        W,
        H,
        B,
        K,
        Q,
        Y,
        G,
        ne
      ) : () => {
      }, [F]);
      fS(mS, [H, B, K, $, Y, G]);
      let L;
      try {
        L = $b(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          J,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          q,
          V ? () => W(V(), $) : q
        );
      } catch (w) {
        throw de.current && (w.message += `
The error may be correlated with this previous error:
${de.current.stack}

`), w;
      }
      Oo(() => {
        de.current = void 0, Y.current = void 0, B.current = L;
      });
      const Z = D.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ D.createElement(p, tr({}, L, {
          ref: R
        }))
      ), [R, p, L]);
      return D.useMemo(() => h ? /* @__PURE__ */ D.createElement(A.Provider, {
        value: z
      }, Z) : Z, [A, Z, z]);
    }
    const x = D.memo(y);
    if (x.WrappedComponent = p, x.displayName = y.displayName = O, c) {
      const C = D.forwardRef(function($, A) {
        return /* @__PURE__ */ D.createElement(x, tr({}, $, {
          reactReduxForwardedRef: A
        }));
      });
      return C.displayName = O, C.WrappedComponent = p, Mu(C, p);
    }
    return Mu(x, p);
  };
}
function hS({
  store: e,
  context: t,
  children: r,
  serverState: o,
  stabilityCheck: n = "once",
  noopCheck: i = "once"
}) {
  const a = D.useMemo(() => {
    const u = Pb(e);
    return {
      store: e,
      subscription: u,
      getServerState: o ? () => o : void 0,
      stabilityCheck: n,
      noopCheck: i
    };
  }, [e, o, n, i]), s = D.useMemo(() => e.getState(), [e]);
  Oo(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || Ob;
  return /* @__PURE__ */ D.createElement(c.Provider, {
    value: a
  }, r);
}
uS(rc.useSyncExternalStore);
Tw(fr);
function yS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Tb(e, t) {
  var r = Xe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && yS(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return pe(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function vS(e, t) {
  return Tb(function() {
    return e;
  }, t);
}
var be = Tb, te = vS, ES = process.env.NODE_ENV === "production", ei = "Invariant failed";
function zu(e, t) {
  if (ES)
    throw new Error(ei);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(ei, ": ").concat(r) : ei;
  throw new Error(o);
}
var zt = function(t) {
  var r = t.top, o = t.right, n = t.bottom, i = t.left, a = o - i, s = n - r, c = {
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
  return c;
}, sc = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Uu = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, xS = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, ti = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, cc = function(t) {
  var r = t.borderBox, o = t.margin, n = o === void 0 ? ti : o, i = t.border, a = i === void 0 ? ti : i, s = t.padding, c = s === void 0 ? ti : s, u = zt(sc(r, n)), f = zt(Uu(r, a)), l = zt(Uu(f, c));
  return {
    marginBox: u,
    borderBox: zt(r),
    paddingBox: f,
    contentBox: l,
    margin: n,
    border: a,
    padding: c
  };
}, Rt = function(t) {
  var r = t.slice(0, -2), o = t.slice(-2);
  if (o !== "px")
    return 0;
  var n = Number(r);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? zu(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : zu()), n;
}, wS = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, No = function(t, r) {
  var o = t.borderBox, n = t.border, i = t.margin, a = t.padding, s = xS(o, r);
  return cc({
    borderBox: s,
    border: n,
    margin: i,
    padding: a
  });
}, Do = function(t, r) {
  return r === void 0 && (r = wS()), No(t, r);
}, Rb = function(t, r) {
  var o = {
    top: Rt(r.marginTop),
    right: Rt(r.marginRight),
    bottom: Rt(r.marginBottom),
    left: Rt(r.marginLeft)
  }, n = {
    top: Rt(r.paddingTop),
    right: Rt(r.paddingRight),
    bottom: Rt(r.paddingBottom),
    left: Rt(r.paddingLeft)
  }, i = {
    top: Rt(r.borderTopWidth),
    right: Rt(r.borderRightWidth),
    bottom: Rt(r.borderBottomWidth),
    left: Rt(r.borderLeftWidth)
  };
  return cc({
    borderBox: t,
    margin: o,
    padding: n,
    border: i
  });
}, Vb = function(t) {
  var r = t.getBoundingClientRect(), o = window.getComputedStyle(t);
  return Rb(r, o);
}, Hu = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function SS(e, t) {
  return !!(e === t || Hu(e) && Hu(t));
}
function OS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!SS(e[r], t[r]))
      return !1;
  return !0;
}
function ut(e, t) {
  t === void 0 && (t = OS);
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
var vn = function(t) {
  var r = [], o = null, n = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    r = s, !o && (o = requestAnimationFrame(function() {
      o = null, t.apply(void 0, r);
    }));
  };
  return n.cancel = function() {
    o && (cancelAnimationFrame(o), o = null);
  }, n;
};
const NS = process.env.NODE_ENV === "production", DS = /[ \t]{2,}/g, CS = /^[ \t]*/gm, qu = (e) => e.replace(DS, " ").replace(CS, "").trim(), _S = (e) => qu(`
  %c@hello-pangea/dnd

  %c${qu(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), IS = (e) => [_S(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], PS = "__@hello-pangea/dnd-disable-dev-warnings";
function Mb(e, t) {
  NS || typeof window < "u" && window[PS] || console[e](...IS(t));
}
const Ze = Mb.bind(null, "warn"), Va = Mb.bind(null, "error");
function rr() {
}
function $S(e, t) {
  return {
    ...e,
    ...t
  };
}
function Gt(e, t, r) {
  const o = t.map((n) => {
    const i = $S(r, n.options);
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
const AS = process.env.NODE_ENV === "production", Yu = "Invariant failed";
class En extends Error {
}
En.prototype.toString = function() {
  return this.message;
};
function _(e, t) {
  throw AS ? new En(Yu) : new En(`${Yu}: ${t || ""}`);
}
class TS extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = rr, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Ze(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof En && (r.preventDefault(), process.env.NODE_ENV !== "production" && Va(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Gt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof En) {
      process.env.NODE_ENV !== "production" && Va(t.message), this.setState({});
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
const RS = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Co = (e) => e + 1, VS = (e) => `
  You have lifted an item in position ${Co(e.source.index)}
`, Lb = (e, t) => {
  const r = e.droppableId === t.droppableId, o = Co(e.index), n = Co(t.index);
  return r ? `
      You have moved the item from position ${o}
      to position ${n}
    ` : `
    You have moved the item from position ${o}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${n}
  `;
}, Bb = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, MS = (e) => {
  const t = e.destination;
  if (t)
    return Lb(e.source, t);
  const r = e.combine;
  return r ? Bb(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Ku = (e) => `
  The item has returned to its starting position
  of ${Co(e.index)}
`, LS = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Ku(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Lb(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${Bb(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Ku(e.source)}
  `;
}, BS = {
  dragHandleUsageInstructions: RS,
  onDragStart: VS,
  onDragUpdate: MS,
  onDragEnd: LS
};
var io = BS;
const dt = {
  x: 0,
  y: 0
}, vt = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), $t = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), nr = (e, t) => e.x === t.x && e.y === t.y, en = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Dr = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, xn = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Xu = (e, t) => Math.min(...t.map((r) => xn(e, r))), Fb = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var FS = (e, t) => {
  const r = zt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Gn = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Ju = (e) => [{
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
}], WS = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, jS = (e, t) => t ? Gn(e, t.scroll.diff.displacement) : e, GS = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, kS = (e, t) => t && t.shouldClipSubject ? FS(t.pageMarginBox, e) : zt(e);
var Xr = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = jS(e.marginBox, o), i = GS(n, r, t), a = kS(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, lc = (e, t) => {
  e.frame || (process.env.NODE_ENV, _());
  const r = e.frame, o = $t(t, r.scroll.initial), n = en(o), i = {
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
  }, a = Xr({
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
const Wb = ut((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), jb = ut((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Bo = ut((e) => Object.values(e)), zS = ut((e) => Object.values(e));
var Rr = ut((e, t) => zS(t).filter((o) => e === o.descriptor.droppableId).sort((o, n) => o.descriptor.index - n.descriptor.index));
function uc(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Fo(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Wo = ut((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), US = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: o,
  previousImpact: n
}) => {
  if (!r.isCombineEnabled || !uc(n))
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
  const s = n.displaced.all, c = s.length ? s[0] : null;
  if (e)
    return c ? a(c) : null;
  const u = Wo(t, o);
  if (!c) {
    if (!u.length)
      return null;
    const g = u[u.length - 1];
    return a(g.descriptor.id);
  }
  const f = u.findIndex((g) => g.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? _(!1, "Could not find displaced item in set") : _());
  const l = f - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return a(d.descriptor.id);
}, tn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Gb = {
  point: dt,
  value: 0
}, wn = {
  invisible: {},
  visible: {},
  all: []
}, HS = {
  displaced: wn,
  displacedBy: Gb,
  at: null
};
var qS = HS, kt = (e, t) => (r) => e <= r && r <= t, kb = (e) => {
  const t = kt(e.top, e.bottom), r = kt(e.left, e.right);
  return (o) => {
    if (t(o.top) && t(o.bottom) && r(o.left) && r(o.right))
      return !0;
    const i = t(o.top) || t(o.bottom), a = r(o.left) || r(o.right);
    if (i && a)
      return !0;
    const c = o.top < e.top && o.bottom > e.bottom, u = o.left < e.left && o.right > e.right;
    return c && u ? !0 : c && a || u && i;
  };
}, YS = (e) => {
  const t = kt(e.top, e.bottom), r = kt(e.left, e.right);
  return (o) => t(o.top) && t(o.bottom) && r(o.left) && r(o.right);
};
const dc = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, zb = {
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
var KS = (e) => (t) => {
  const r = kt(t.top, t.bottom), o = kt(t.left, t.right);
  return (n) => e === dc ? r(n.top) && r(n.bottom) : o(n.left) && o(n.right);
};
const XS = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : dt;
  return Gn(e, r);
}, JS = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, ZS = (e, t, r) => r(t)(e), pc = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: o,
  isVisibleThroughFrameFn: n
}) => {
  const i = o ? XS(e, t) : e;
  return JS(i, t, n) && ZS(i, r, n);
}, QS = (e) => pc({
  ...e,
  isVisibleThroughFrameFn: kb
}), Ub = (e) => pc({
  ...e,
  isVisibleThroughFrameFn: YS
}), eO = (e) => pc({
  ...e,
  isVisibleThroughFrameFn: KS(e.destination.axis)
}), tO = (e, t, r) => {
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
function rO(e, t) {
  const r = e.page.marginBox, o = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return zt(sc(r, o));
}
function Sn({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: o,
  forceShouldAnimate: n,
  last: i
}) {
  return e.reduce(function(s, c) {
    const u = rO(c, r), f = c.descriptor.id;
    if (s.all.push(f), !QS({
      target: u,
      destination: t,
      viewport: o,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const d = tO(f, i, n), g = {
      draggableId: f,
      shouldAnimate: d
    };
    return s.visible[f] = g, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function nO(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Zu({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: o
}) {
  const n = nO(e, {
    inHomeList: t
  });
  return {
    displaced: wn,
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
function _o({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: o,
  displacedBy: n,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const c = tn(e, r);
  if (a == null)
    return Zu({
      insideDestination: t,
      inHomeList: c,
      displacedBy: n,
      destination: r
    });
  const u = t.find((h) => h.descriptor.index === a);
  if (!u)
    return Zu({
      insideDestination: t,
      inHomeList: c,
      displacedBy: n,
      destination: r
    });
  const f = Wo(e, t), l = t.indexOf(u), d = f.slice(l);
  return {
    displaced: Sn({
      afterDragging: d,
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
function dr(e, t) {
  return !!t.effected[e];
}
var oO = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: o,
  afterCritical: n
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = o.draggableId, s = r[i].descriptor.index;
  return dr(i, n) ? e ? s : s - 1 : e ? s + 1 : s;
}, iO = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: o
}) => {
  if (!r.length)
    return null;
  const n = o.index, i = e ? n + 1 : n - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, aO = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: o,
  destination: n,
  insideDestination: i,
  previousImpact: a,
  viewport: s,
  afterCritical: c
}) => {
  const u = a.at;
  if (u || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot move in direction without previous impact location") : _()), u.type === "REORDER") {
    const l = iO({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return l == null ? null : _o({
      draggable: r,
      insideDestination: i,
      destination: n,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const f = oO({
    isMovingForward: e,
    destination: n,
    displaced: a.displaced,
    draggables: o,
    combine: u.combine,
    afterCritical: c
  });
  return f == null ? null : _o({
    draggable: r,
    insideDestination: i,
    destination: n,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, sO = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: o
}) => {
  const n = !!(e.visible[r] || e.invisible[r]);
  return dr(r, t) ? n ? dt : en(o.point) : n ? o.point : dt;
}, cO = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const o = Fo(t);
  o || (process.env.NODE_ENV, _());
  const n = o.draggableId, i = r[n].page.borderBox.center, a = sO({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: n,
    displacedBy: t.displacedBy
  });
  return vt(i, a);
};
const Hb = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, lO = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, fc = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Qu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Dr(e.line, t.marginBox[e.end] + Hb(e, r), fc(e, t.marginBox, r)), ed = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Dr(e.line, t.marginBox[e.start] - lO(e, r), fc(e, t.marginBox, r)), uO = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Dr(e.line, t.contentBox[e.start] + Hb(e, r), fc(e, t.contentBox, r));
var dO = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: o,
  afterCritical: n
}) => {
  const i = Rr(o.descriptor.id, r), a = t.page, s = o.axis;
  if (!i.length)
    return uO({
      axis: s,
      moveInto: o.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: u
  } = e, f = c.all[0];
  if (f) {
    const d = r[f];
    if (dr(f, n))
      return ed({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const g = No(d.page, u.point);
    return ed({
      axis: s,
      moveRelativeTo: g,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (dr(l.descriptor.id, n)) {
    const d = No(l.page, en(n.displacedBy.point));
    return Qu({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return Qu({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, Ma = (e, t) => {
  const r = e.frame;
  return r ? vt(t, r.scroll.diff.displacement) : t;
};
const pO = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: o,
  afterCritical: n
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? dO({
    impact: e,
    draggable: t,
    draggables: o,
    droppable: r,
    afterCritical: n
  }) : cO({
    impact: e,
    draggables: o,
    afterCritical: n
  });
};
var jo = (e) => {
  const t = pO(e), r = e.droppable;
  return r ? Ma(r, t) : t;
}, qb = (e, t) => {
  const r = $t(t, e.scroll.initial), o = en(r);
  return {
    frame: zt({
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
function td(e, t) {
  return e.map((r) => t[r]);
}
function fO(e, t) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r].visible[e];
    if (o)
      return o;
  }
  return null;
}
var mO = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: o,
  maxScrollChange: n
}) => {
  const i = qb(t, vt(t.scroll.current, n)), a = r.frame ? lc(r, vt(r.frame.scroll.current, n)) : r, s = e.displaced, c = Sn({
    afterDragging: td(s.all, o),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Sn({
    afterDragging: td(s.all, o),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [s, c, u];
  return s.all.forEach((h) => {
    const b = fO(h, d);
    if (b) {
      l[h] = b;
      return;
    }
    f[h] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: f,
      visible: l
    }
  };
}, gO = (e, t) => vt(e.scroll.diff.displacement, t), mc = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const o = gO(r, e), n = $t(o, t.page.borderBox.center);
  return vt(t.client.borderBox.center, n);
}, Yb = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: o,
  withDroppableDisplacement: n,
  onlyOnMainAxis: i = !1
}) => {
  const a = $t(r, e.page.borderBox.center), c = {
    target: Gn(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: n,
    viewport: o
  };
  return i ? eO(c) : Ub(c);
}, bO = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: o,
  previousImpact: n,
  viewport: i,
  previousPageBorderBoxCenter: a,
  previousClientSelection: s,
  afterCritical: c
}) => {
  if (!r.isEnabled)
    return null;
  const u = Rr(r.descriptor.id, o), f = tn(t, r), l = US({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: n
  }) || aO({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: o,
    destination: r,
    insideDestination: u,
    previousImpact: n,
    viewport: i,
    afterCritical: c
  });
  if (!l)
    return null;
  const d = jo({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: o,
    afterCritical: c
  });
  if (Yb({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: mc({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const h = $t(d, a), b = mO({
    impact: l,
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
const _t = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot get clipped area from droppable") : _()), t;
};
var hO = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: o,
  viewport: n
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = kt(i[a.start], i[a.end]), c = Bo(o).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => kb(n.frame)(_t(f))).filter((f) => {
    const l = _t(f);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const l = _t(f), d = kt(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((f, l) => {
    const d = _t(f)[a.crossAxisStart], g = _t(l)[a.crossAxisStart];
    return e ? d - g : g - d;
  }).filter((f, l, d) => _t(f)[a.crossAxisStart] === _t(d[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((f) => kt(_t(f)[a.start], _t(f)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((f, l) => _t(f)[a.start] - _t(l)[a.start])[0] : c.sort((f, l) => {
    const d = Xu(t, Ju(_t(f))), g = Xu(t, Ju(_t(l)));
    return d !== g ? d - g : _t(f)[a.start] - _t(l)[a.start];
  })[0];
};
const rd = (e, t) => {
  const r = e.page.borderBox.center;
  return dr(e.descriptor.id, t) ? $t(r, t.displacedBy.point) : r;
}, yO = (e, t) => {
  const r = e.page.borderBox;
  return dr(e.descriptor.id, t) ? Gn(r, en(t.displacedBy.point)) : r;
};
var vO = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: o,
  afterCritical: n
}) => o.filter((a) => Ub({
  target: yO(a, n),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = xn(e, Ma(r, rd(a, n))), u = xn(e, Ma(r, rd(s, n)));
  return c < u ? -1 : u < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, kn = ut(function(t, r) {
  const o = r[t.line];
  return {
    value: o,
    point: Dr(t.line, o)
  };
});
const EO = (e, t, r) => {
  const o = e.axis;
  if (e.descriptor.mode === "virtual")
    return Dr(o.line, t[o.line]);
  const n = e.subject.page.contentBox[o.size], c = Rr(e.descriptor.id, r).reduce((u, f) => u + f.client.marginBox[o.size], 0) + t[o.line] - n;
  return c <= 0 ? null : Dr(o.line, c);
}, Kb = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Xb = (e, t, r) => {
  const o = e.frame;
  tn(t, e) && (process.env.NODE_ENV !== "production" ? _(!1, "Should not add placeholder space to home list") : _()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot add placeholder size to a subject when it already has one") : _());
  const n = kn(e.axis, t.displaceBy).point, i = EO(e, n, r), a = {
    placeholderSize: n,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!o) {
    const f = Xr({
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
  const s = i ? vt(o.scroll.max, i) : o.scroll.max, c = Kb(o, s), u = Xr({
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
}, xO = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot remove placeholder form subject when there was none") : _());
  const r = e.frame;
  if (!r) {
    const a = Xr({
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
  o || (process.env.NODE_ENV !== "production" ? _(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : _());
  const n = Kb(r, o), i = Xr({
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
var wO = ({
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
    const l = {
      displaced: wn,
      displacedBy: Gb,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = jo({
      impact: l,
      draggable: o,
      droppable: i,
      draggables: n,
      afterCritical: s
    }), g = tn(o, i) ? i : Xb(i, o, n);
    return Yb({
      draggable: o,
      destination: g,
      newPageBorderBoxCenter: d,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === o.descriptor.id || c ? l : l + 1;
  })(), f = kn(i.axis, o.displaceBy);
  return _o({
    draggable: o,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: wn,
    index: u
  });
}, SO = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: o,
  draggables: n,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = hO({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: o,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const u = Rr(c.descriptor.id, n), f = vO({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }), l = wO({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: r,
    draggables: n,
    moveRelativeTo: f,
    insideDestination: u,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const d = jo({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: n,
    afterCritical: s
  });
  return {
    clientSelection: mc({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, At = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const OO = (e, t) => {
  const r = At(e);
  return r ? t[r] : null;
};
var NO = ({
  state: e,
  type: t
}) => {
  const r = OO(e.impact, e.dimensions.droppables), o = !!r, n = e.dimensions.droppables[e.critical.droppable.id], i = r || n, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !o)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return s ? bO({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : SO({
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
function Sr(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Jb(e) {
  const t = kt(e.top, e.bottom), r = kt(e.left, e.right);
  return function(n) {
    return t(n.y) && r(n.x);
  };
}
function DO(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function CO({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const o = t.page.borderBox.center, n = r.map((i) => {
    const a = i.axis, s = Dr(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: xn(o, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return n[0] ? n[0].id : null;
}
function _O({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const o = Bo(r).filter((n) => {
    if (!n.isEnabled)
      return !1;
    const i = n.subject.active;
    if (!i || !DO(e, i))
      return !1;
    if (Jb(i)(e.center))
      return !0;
    const a = n.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], u = e[a.crossAxisEnd], f = kt(i[a.crossAxisStart], i[a.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < s : u > s;
  });
  return o.length ? o.length === 1 ? o[0].descriptor.id : CO({
    pageBorderBox: e,
    draggable: t,
    candidates: o
  }) : null;
}
const Zb = (e, t) => zt(Gn(e, t));
var IO = (e, t) => {
  const r = e.frame;
  return r ? Zb(t, r.scroll.diff.value) : t;
};
function Qb({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function PO({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var $O = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: o,
  last: n,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = kn(r.axis, t.displaceBy), u = c.value, f = e[s.start], l = e[s.end], g = Wo(t, o).find((b) => {
    const p = b.descriptor.id, E = b.page.borderBox.center[s.line], O = dr(p, a), v = Qb({
      displaced: n,
      id: p
    });
    return O ? v ? l <= E : f < E - u : v ? l <= E + u : f < E;
  }) || null, h = PO({
    draggable: t,
    closest: g,
    inHomeList: tn(t, r)
  });
  return _o({
    draggable: t,
    insideDestination: o,
    destination: r,
    viewport: i,
    last: n,
    displacedBy: c,
    index: h
  });
};
const AO = 4;
var TO = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: o,
  insideDestination: n,
  afterCritical: i
}) => {
  if (!o.isCombineEnabled)
    return null;
  const a = o.axis, s = kn(o.axis, e.displaceBy), c = s.value, u = t[a.start], f = t[a.end], d = Wo(e, n).find((h) => {
    const b = h.descriptor.id, p = h.page.borderBox, O = p[a.size] / AO, v = dr(b, i), y = Qb({
      displaced: r.displaced,
      id: b
    });
    return v ? y ? f > p[a.start] + O && f < p[a.end] - O : u > p[a.start] - c + O && u < p[a.end] - c - O : y ? f > p[a.start] + c + O && f < p[a.end] + c - O : u > p[a.start] + O && u < p[a.end] - O;
  });
  return d ? {
    displacedBy: s,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: d.descriptor.id,
        droppableId: o.descriptor.id
      }
    }
  } : null;
}, eh = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: o,
  previousImpact: n,
  viewport: i,
  afterCritical: a
}) => {
  const s = Zb(t.page.borderBox, e), c = _O({
    pageBorderBox: s,
    draggable: t,
    droppables: o
  });
  if (!c)
    return qS;
  const u = o[c], f = Rr(u.descriptor.id, r), l = IO(u, s);
  return TO({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: n,
    destination: u,
    insideDestination: f,
    afterCritical: a
  }) || $O({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: f,
    last: n.displaced,
    viewport: i,
    afterCritical: a
  });
}, gc = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const RO = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const o = At(e), n = At(t);
  if (!o || o === n)
    return r;
  const i = r[o];
  if (!i.subject.withPlaceholder)
    return r;
  const a = xO(i);
  return gc(r, a);
};
var VO = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: o,
  impact: n
}) => {
  const i = RO({
    previousImpact: o,
    impact: n,
    droppables: r
  }), a = At(n);
  if (!a)
    return i;
  const s = r[a];
  if (tn(e, s) || s.subject.withPlaceholder)
    return i;
  const c = Xb(s, e, t);
  return gc(i, c);
}, cn = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: o,
  impact: n,
  scrollJumpRequest: i
}) => {
  const a = o || e.viewport, s = r || e.dimensions, c = t || e.current.client.selection, u = $t(c, e.initial.client.selection), f = {
    offset: u,
    selection: c,
    borderBoxCenter: vt(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: vt(f.selection, a.scroll.current),
    borderBoxCenter: vt(f.borderBoxCenter, a.scroll.current),
    offset: vt(f.offset, a.scroll.diff.value)
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
  const g = s.draggables[e.critical.draggable.id], h = n || eh({
    pageOffset: l.offset,
    draggable: g,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = VO({
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
function MO(e, t) {
  return e.map((r) => t[r]);
}
var th = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: o,
  forceShouldAnimate: n
}) => {
  const i = e.displaced, a = MO(i.all, r), s = Sn({
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
}, rh = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: o,
  viewport: n,
  afterCritical: i
}) => {
  const a = jo({
    impact: e,
    draggable: t,
    draggables: o,
    droppable: r,
    afterCritical: i
  });
  return mc({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: n
  });
}, nh = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, _());
  const o = e.impact, n = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], u = At(o);
  u || (process.env.NODE_ENV !== "production" ? _(!1, "Must be over a destination in SNAP movement mode") : _());
  const f = s[u], l = th({
    impact: o,
    viewport: n,
    destination: f,
    draggables: a
  }), d = rh({
    impact: l,
    draggable: c,
    droppable: f,
    draggables: a,
    viewport: n,
    afterCritical: e.afterCritical
  });
  return cn({
    impact: l,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: n
  });
}, LO = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), oh = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: o
}) => {
  const n = kn(t.axis, e.displaceBy), i = Rr(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? _(!1, "Expected draggable to be inside home list") : _());
  const s = i.slice(a + 1), c = s.reduce((d, g) => (d[g.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: n,
    effected: c
  };
  return {
    impact: {
      displaced: Sn({
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
        destination: LO(e.descriptor)
      }
    },
    afterCritical: u
  };
}, BO = (e, t) => ({
  draggables: e.draggables,
  droppables: gc(e.droppables, t)
});
const zn = (e) => {
  process.env.NODE_ENV;
}, Un = (e) => {
  process.env.NODE_ENV;
};
var FO = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const o = No(e.client, t), n = Do(o, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: o
    },
    client: o,
    page: n
  };
}, WO = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? _(!1, "Expected Droppable to have a frame") : _()), t;
}, jO = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const o = r.scroll.diff.value;
  return e.map((n) => {
    const i = n.descriptor.droppableId, a = t[i], c = WO(a).scroll.diff.value, u = vt(o, c);
    return FO({
      draggable: n,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, GO = ({
  state: e,
  published: t
}) => {
  zn();
  const r = t.modified.map((E) => {
    const O = e.dimensions.droppables[E.droppableId];
    return lc(O, E.scroll);
  }), o = {
    ...e.dimensions.droppables,
    ...Wb(r)
  }, n = jb(jO({
    additions: t.additions,
    updatedDroppables: o,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...n
  };
  t.removals.forEach((E) => {
    delete i[E];
  });
  const a = {
    droppables: o,
    draggables: i
  }, s = At(e.impact), c = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = oh({
    draggable: u,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), g = c && c.isCombineEnabled ? e.impact : l, h = eh({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: g,
    viewport: e.viewport,
    afterCritical: d
  });
  Un();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: h,
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
const La = (e) => e.movementMode === "SNAP", ri = (e, t, r) => {
  const o = BO(e.dimensions, t);
  return !La(e) || r ? cn({
    state: e,
    dimensions: o
  }) : nh({
    state: e,
    dimensions: o
  });
};
function ni(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const nd = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var kO = (e = nd, t) => {
  if (t.type === "FLUSH")
    return {
      ...nd,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "INITIAL_PUBLISH must come after a IDLE phase") : _());
    const {
      critical: r,
      clientSelection: o,
      viewport: n,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], u = {
      selection: o,
      borderBoxCenter: s.client.borderBox.center,
      offset: dt
    }, f = {
      client: u,
      page: {
        selection: vt(u.selection, n.scroll.initial),
        borderBoxCenter: vt(u.selection, n.scroll.initial),
        offset: vt(u.selection, n.scroll.diff.value)
      }
    }, l = Bo(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: g
    } = oh({
      draggable: s,
      home: c,
      draggables: i.draggables,
      viewport: n
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
      afterCritical: g,
      onLiftImpact: d,
      viewport: n,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? _(!1, `Collection cannot start from phase ${e.phase}`) : _()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? _(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : _()), GO({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Sr(e) || (process.env.NODE_ENV !== "production" ? _(!1, `${t.type} not permitted in phase ${e.phase}`) : _());
    const {
      client: r
    } = t.payload;
    return nr(r, e.current.client.selection) ? e : cn({
      state: e,
      clientSelection: r,
      impact: La(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return ni(e);
    Sr(e) || (process.env.NODE_ENV !== "production" ? _(!1, `${t.type} not permitted in phase ${e.phase}`) : _());
    const {
      id: r,
      newScroll: o
    } = t.payload, n = e.dimensions.droppables[r];
    if (!n)
      return e;
    const i = lc(n, o);
    return ri(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Sr(e) || (process.env.NODE_ENV !== "production" ? _(!1, `Attempting to move in an unsupported phase ${e.phase}`) : _());
    const {
      id: r,
      isEnabled: o
    } = t.payload, n = e.dimensions.droppables[r];
    n || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : _()), n.isEnabled === o && (process.env.NODE_ENV !== "production" ? _(!1, `Trying to set droppable isEnabled to ${String(o)}
      but it is already ${String(n.isEnabled)}`) : _());
    const i = {
      ...n,
      isEnabled: o
    };
    return ri(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Sr(e) || (process.env.NODE_ENV !== "production" ? _(!1, `Attempting to move in an unsupported phase ${e.phase}`) : _());
    const {
      id: r,
      isCombineEnabled: o
    } = t.payload, n = e.dimensions.droppables[r];
    n || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : _()), n.isCombineEnabled === o && (process.env.NODE_ENV !== "production" ? _(!1, `Trying to set droppable isCombineEnabled to ${String(o)}
      but it is already ${String(n.isCombineEnabled)}`) : _());
    const i = {
      ...n,
      isCombineEnabled: o
    };
    return ri(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Sr(e) || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot move by window in phase ${e.phase}`) : _()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? _(!1, "Window scrolling is currently not supported for fixed lists") : _());
    const r = t.payload.newScroll;
    if (nr(e.viewport.scroll.current, r))
      return ni(e);
    const o = qb(e.viewport, r);
    return La(e) ? nh({
      state: e,
      viewport: o
    }) : cn({
      state: e,
      viewport: o
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Sr(e))
      return e;
    const r = t.payload.maxScroll;
    if (nr(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? _(!1, `${t.type} received while not in DRAGGING phase`) : _());
    const r = NO({
      state: e,
      type: t.type
    });
    return r ? cn({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? _(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : _()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot animate drop from phase ${e.phase}`) : _()), {
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
const zO = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), UO = (e) => ({
  type: "LIFT",
  payload: e
}), HO = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), qO = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), YO = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), KO = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), XO = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), JO = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), ih = (e) => ({
  type: "MOVE",
  payload: e
}), ZO = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), QO = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), eN = () => ({
  type: "MOVE_UP",
  payload: null
}), tN = () => ({
  type: "MOVE_DOWN",
  payload: null
}), rN = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), nN = () => ({
  type: "MOVE_LEFT",
  payload: null
}), bc = () => ({
  type: "FLUSH",
  payload: null
}), oN = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), hc = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ah = (e) => ({
  type: "DROP",
  payload: e
}), iN = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), sh = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function aN(e) {
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
  process.env.NODE_ENV !== "production" && Ze(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${o}
  `);
}
function sN(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Rr(e.droppable.id, t.draggables);
    aN(r);
  }
}
var cN = (e) => ({
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
  } = n.payload, c = t();
  c.phase === "DROP_ANIMATING" && r(hc({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "Unexpected phase to start a drag") : _()), r(bc()), r(zO({
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
    viewport: g
  } = e.startPublishing(f);
  sN(l, d), r(HO({
    critical: l,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: g
  }));
}, lN = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const yc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, On = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, ch = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, mr = `${ch.outOfTheWay}s ${yc.outOfTheWay}`, ln = {
  fluid: `opacity ${mr}`,
  snap: `transform ${mr}, opacity ${mr}`,
  drop: (e) => {
    const t = `${e}s ${yc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${mr}`,
  placeholder: `height ${mr}, width ${mr}, margin ${mr}`
}, od = (e) => nr(e, dt) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ba = {
  moveTo: od,
  drop: (e, t) => {
    const r = od(e);
    if (r)
      return t ? `${r} scale(${On.scale.drop})` : r;
  }
}, {
  minDropTime: Fa,
  maxDropTime: lh
} = ch, uN = lh - Fa, id = 1500, dN = 0.6;
var pN = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const o = xn(e, t);
  if (o <= 0)
    return Fa;
  if (o >= id)
    return lh;
  const n = o / id, i = Fa + uN * n, a = r === "CANCEL" ? i * dN : i;
  return Number(a.toFixed(2));
}, fN = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: o,
  afterCritical: n
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = At(e), c = s ? a[s] : null, u = a[t.descriptor.droppableId], f = rh({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: n,
    droppable: c || u,
    viewport: o
  });
  return $t(f, t.client.borderBox.center);
}, mN = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: o,
  viewport: n,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: th({
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
    displaced: wn
  },
  didDropInsideDroppable: !0
};
const gN = ({
  getState: e,
  dispatch: t
}) => (r) => (o) => {
  if (o.type !== "DROP") {
    r(o);
    return;
  }
  const n = e(), i = o.payload.reason;
  if (n.phase === "COLLECTING") {
    t(iN({
      reason: i
    }));
    return;
  }
  if (n.phase === "IDLE")
    return;
  n.phase === "DROP_PENDING" && n.isWaiting && (process.env.NODE_ENV !== "production" ? _(!1, "A DROP action occurred while DROP_PENDING and still waiting") : _()), n.phase === "DRAGGING" || n.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot drop in phase: ${n.phase}`) : _());
  const s = n.critical, c = n.dimensions, u = c.draggables[n.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: l
  } = mN({
    reason: i,
    lastImpact: n.impact,
    afterCritical: n.afterCritical,
    onLiftImpact: n.onLiftImpact,
    home: n.dimensions.droppables[n.critical.droppable.id],
    viewport: n.viewport,
    draggables: n.dimensions.draggables
  }), d = l ? uc(f) : null, g = l ? Fo(f) : null, h = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: h,
    reason: i,
    mode: n.movementMode,
    destination: d,
    combine: g
  }, p = fN({
    impact: f,
    draggable: u,
    dimensions: c,
    viewport: n.viewport,
    afterCritical: n.afterCritical
  }), E = {
    critical: n.critical,
    afterCritical: n.afterCritical,
    result: b,
    impact: f
  };
  if (!(!nr(n.current.client.offset, p) || !!b.combine)) {
    t(hc({
      completed: E
    }));
    return;
  }
  const v = pN({
    current: n.current.client.offset,
    destination: p,
    reason: i
  });
  t(oN({
    newHomeClientOffset: p,
    dropDuration: v,
    completed: E
  }));
};
var bN = gN, uh = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function hN(e) {
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
function yN({
  onWindowScroll: e
}) {
  function t() {
    e(uh());
  }
  const r = vn(t), o = hN(r);
  let n = rr;
  function i() {
    return n !== rr;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot start scroll listener when already active") : _()), n = Gt(window, [o]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot stop scroll listener when not active") : _()), r.cancel(), n(), n = rr;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const vN = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", EN = (e) => {
  const t = yN({
    onWindowScroll: (r) => {
      e.dispatch(ZO({
        newScroll: r
      }));
    }
  });
  return (r) => (o) => {
    !t.isActive() && o.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && vN(o) && t.stop(), r(o);
  };
};
var xN = EN, wN = (e) => {
  let t = !1, r = !1;
  const o = setTimeout(() => {
    r = !0;
  }), n = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && Ze("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && Ze(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(o);
  };
  return n.wasCalled = () => t, n;
}, SN = () => {
  const e = [], t = (n) => {
    const i = e.findIndex((s) => s.timerId === n);
    i === -1 && (process.env.NODE_ENV !== "production" ? _(!1, "Could not find timer") : _());
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
const ON = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, NN = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, DN = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, o = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && o;
}, on = (e, t) => {
  zn(), t(), Un();
}, Yn = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function oi(e, t, r, o) {
  if (!e) {
    r(o(t));
    return;
  }
  const n = wN(r);
  e(t, {
    announce: n
  }), n.wasCalled() || r(o(t));
}
var CN = (e, t) => {
  const r = SN();
  let o = null;
  const n = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : _()), on("onBeforeCapture", () => {
      const g = e().onBeforeCapture;
      g && g({
        draggableId: l,
        mode: d
      });
    });
  }, i = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : _()), on("onBeforeDragStart", () => {
      const g = e().onBeforeDragStart;
      g && g(Yn(l, d));
    });
  }, a = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : _());
    const g = Yn(l, d);
    o = {
      mode: d,
      lastCritical: l,
      lastLocation: g.source,
      lastCombine: null
    }, r.add(() => {
      on("onDragStart", () => oi(e().onDragStart, g, t, io.onDragStart));
    });
  }, s = (l, d) => {
    const g = uc(d), h = Fo(d);
    o || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onDragMove when onDragStart has not been called") : _());
    const b = !DN(l, o.lastCritical);
    b && (o.lastCritical = l);
    const p = !ON(o.lastLocation, g);
    p && (o.lastLocation = g);
    const E = !NN(o.lastCombine, h);
    if (E && (o.lastCombine = h), !b && !p && !E)
      return;
    const O = {
      ...Yn(l, o.mode),
      combine: h,
      destination: g
    };
    r.add(() => {
      on("onDragUpdate", () => oi(e().onDragUpdate, O, t, io.onDragUpdate));
    });
  }, c = () => {
    o || (process.env.NODE_ENV !== "production" ? _(!1, "Can only flush responders while dragging") : _()), r.flush();
  }, u = (l) => {
    o || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : _()), o = null, on("onDragEnd", () => oi(e().onDragEnd, l, t, io.onDragEnd));
  };
  return {
    beforeCapture: n,
    beforeStart: i,
    start: a,
    update: s,
    flush: c,
    drop: u,
    abort: () => {
      if (!o)
        return;
      const l = {
        ...Yn(o.lastCritical, o.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, _N = (e, t) => {
  const r = CN(e, t);
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
const IN = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const o = e.getState();
  o.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot finish a drop animating when no drop is occurring") : _()), e.dispatch(hc({
    completed: o.completed
  }));
};
var PN = IN;
const $N = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(sh());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = Gt(window, [a]);
    });
  };
};
var AN = $N, TN = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, RN = (e) => {
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
const VN = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var MN = (e) => (t) => (r) => (o) => {
  if (VN(o)) {
    e.stop(), r(o);
    return;
  }
  if (o.type === "INITIAL_PUBLISH") {
    r(o);
    const n = t.getState();
    n.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? _(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : _()), e.start(n);
    return;
  }
  r(o), e.scroll(t.getState());
};
const LN = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const o = e.getState();
  o.phase === "DROP_PENDING" && (o.isWaiting || e.dispatch(ah({
    reason: o.reason
  })));
};
var BN = LN;
const FN = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : wb;
var WN = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: o,
  announce: n,
  autoScroller: i
}) => xb(kO, FN(Dw(lN(r), TN(e), cN(e), bN, PN, AN, BN, MN(i), xN, RN(t), _N(o, n))));
const ii = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function jN({
  registry: e,
  callbacks: t
}) {
  let r = ii(), o = null;
  const n = () => {
    o || (t.collectionStarting(), o = requestAnimationFrame(() => {
      o = null, zn();
      const {
        additions: c,
        removals: u,
        modified: f
      } = r, l = Object.keys(c).map((h) => e.draggable.getById(h).getDimension(dt)).sort((h, b) => h.descriptor.index - b.descriptor.index), d = Object.keys(f).map((h) => {
        const p = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
          scroll: p
        };
      }), g = {
        additions: l,
        removals: Object.keys(u),
        modified: d
      };
      r = ii(), Un(), t.publish(g);
    }));
  };
  return {
    add: (c) => {
      const u = c.descriptor.id;
      r.additions[u] = c, r.modified[c.descriptor.droppableId] = !0, r.removals[u] && delete r.removals[u], n();
    },
    remove: (c) => {
      const u = c.descriptor;
      r.removals[u.id] = !0, r.modified[u.droppableId] = !0, r.additions[u.id] && delete r.additions[u.id], n();
    },
    stop: () => {
      o && (cancelAnimationFrame(o), o = null, r = ii());
    }
  };
}
var dh = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = $t({
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
}, ph = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot find document.documentElement") : _()), e;
}, fh = () => {
  const e = ph();
  return dh({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, GN = () => {
  const e = uh(), t = fh(), r = e.y, o = e.x, n = ph(), i = n.clientWidth, a = n.clientHeight, s = o + i, c = r + a;
  return {
    frame: zt({
      top: r,
      left: o,
      right: s,
      bottom: c
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: dt,
        displacement: dt
      }
    }
  };
}, kN = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  zn();
  const o = GN(), n = o.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(n, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(n)), c = {
    draggables: jb(s),
    droppables: Wb(a)
  };
  return Un(), {
    dimensions: c,
    critical: e,
    viewport: o
  };
};
function ad(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Ze(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var zN = (e, t) => {
  let r = null;
  const o = jN({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), n = (d, g) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : _()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: g
    });
  }, i = (d, g) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : _()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: g
    }));
  }, a = (d, g) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : _()), t.updateDroppableScroll({
      id: d,
      newScroll: g
    }));
  }, s = (d, g) => {
    r && e.droppable.getById(d).callbacks.scroll(g);
  }, c = () => {
    if (!r)
      return;
    o.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((g) => g.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? _(!1, "Should only be subscribed when a collection is occurring") : _());
    const g = r.critical.draggable;
    d.type === "ADDITION" && ad(e, g, d.value) && o.add(d.value), d.type === "REMOVAL" && ad(e, g, d.value) && o.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: n,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot start capturing critical dimensions as there is already a collection") : _());
      const g = e.draggable.getById(d.draggableId), h = e.droppable.getById(g.descriptor.droppableId), b = {
        draggable: g.descriptor,
        droppable: h.descriptor
      }, p = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: p
      }, kN({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, mh = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", UN = (e) => {
  window.scrollBy(e.x, e.y);
};
const HN = ut((e) => Bo(e).filter((t) => !(!t.isEnabled || !t.frame))), qN = (e, t) => HN(t).find((o) => (o.frame || (process.env.NODE_ENV !== "production" ? _(!1, "Invalid result") : _()), Jb(o.frame.pageMarginBox)(e))) || null;
var YN = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const n = r[t];
    return n.frame ? n : null;
  }
  return qN(e, r);
};
const Nn = {
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
var KN = (e, t, r = () => Nn) => {
  const o = r(), n = e[t.size] * o.startFromPercentage, i = e[t.size] * o.maxScrollAtPercentage;
  return {
    startScrollingFrom: n,
    maxScrollValueAt: i
  };
}, gh = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const o = t - e;
  return o === 0 ? (process.env.NODE_ENV !== "production" && Ze(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / o;
}, vc = 1, XN = (e, t, r = () => Nn) => {
  const o = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return o.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return vc;
  const i = 1 - gh({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = o.maxPixelScroll * o.ease(i);
  return Math.ceil(a);
}, JN = (e, t, r) => {
  const o = r(), n = o.durationDampening.accelerateAt, i = o.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < n)
    return vc;
  const f = gh({
    startOfRange: n,
    endOfRange: s,
    current: u
  }), l = e * o.ease(f);
  return Math.ceil(l);
}, sd = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: n
}) => {
  const i = XN(e, t, n);
  return i === 0 ? 0 : o ? Math.max(JN(i, r, n), vc) : i;
}, cd = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = KN(e, o, i);
  return t[o.end] < t[o.start] ? sd({
    distanceToEdge: t[o.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }) : -1 * sd({
    distanceToEdge: t[o.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
}, ZN = ({
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
const QN = Fb((e) => e === 0 ? 0 : e);
var bh = ({
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
  }, s = cd({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: dc,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }), c = cd({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: zb,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }), u = QN({
    x: c,
    y: s
  });
  if (nr(u, dt))
    return null;
  const f = ZN({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? nr(f, dt) ? null : f : null;
};
const eD = Fb((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Ec = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: o
  }) => {
    const n = vt(t, o), i = {
      x: e(n.x, r.x),
      y: e(n.y, r.y)
    };
    return nr(i, dt) ? null : i;
  };
})(), hh = ({
  max: e,
  current: t,
  change: r
}) => {
  const o = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, n = eD(r), i = Ec({
    max: o,
    current: t,
    change: n
  });
  return !i || n.x !== 0 && i.x === 0 || n.y !== 0 && i.y === 0;
}, xc = (e, t) => hh({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), tD = (e, t) => {
  if (!xc(e, t))
    return null;
  const r = e.scroll.max, o = e.scroll.current;
  return Ec({
    current: o,
    max: r,
    change: t
  });
}, wc = (e, t) => {
  const r = e.frame;
  return r ? hh({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, rD = (e, t) => {
  const r = e.frame;
  return !r || !wc(e, t) ? null : Ec({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var nD = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = bh({
    dragStartTime: o,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  return a && xc(e, a) ? a : null;
}, oD = ({
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
  const s = bh({
    dragStartTime: o,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  return s && wc(e, s) ? s : null;
}, ld = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: o,
  scrollDroppable: n,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = nD({
      dragStartTime: t,
      viewport: l,
      subject: c,
      center: a,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (d) {
      o(d);
      return;
    }
  }
  const u = YN({
    center: a,
    destination: At(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const f = oD({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && n(u.descriptor.id, f);
}, iD = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Nn
}) => {
  const o = vn(e), n = vn(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fluid scroll if not dragging") : _());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: l
    } = i;
    ld({
      state: u,
      scrollWindow: o,
      scrollDroppable: n,
      dragStartTime: l,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (u) => {
      zn(), i && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot start auto scrolling when already started") : _());
      const f = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      ld({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: l
      }, Un(), l && a(u);
    },
    stop: () => {
      i && (o.cancel(), n.cancel(), i = null);
    },
    scroll: a
  };
}, aD = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const o = (s, c) => {
    const u = vt(s.current.client.selection, c);
    e({
      client: u
    });
  }, n = (s, c) => {
    if (!wc(s, c))
      return c;
    const u = rD(s, c);
    if (!u)
      return t(s.descriptor.id, c), null;
    const f = $t(c, u);
    return t(s.descriptor.id, f), $t(c, f);
  }, i = (s, c, u) => {
    if (!s || !xc(c, u))
      return u;
    const f = tD(c, u);
    if (!f)
      return r(u), null;
    const l = $t(u, f);
    return r(l), $t(u, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const u = At(s.impact);
    u || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot perform a jump scroll when there is no destination") : _());
    const f = n(s.dimensions.droppables[u], c);
    if (!f)
      return;
    const l = s.viewport, d = i(s.isWindowScrollAllowed, l, f);
    d && o(s, d);
  };
}, sD = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: o
}) => {
  const n = iD({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: o
  }), i = aD({
    move: r,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(o().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          n.scroll(c);
          return;
        }
        c.scrollJumpRequest && i(c);
      }
    },
    start: n.start,
    stop: n.stop
  };
};
const Jr = "data-rfd", Zr = (() => {
  const e = `${Jr}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Wa = (() => {
  const e = `${Jr}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), cD = (() => {
  const e = `${Jr}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ud = {
  contextId: `${Jr}-scroll-container-context-id`
}, lD = (e) => (t) => `[${t}="${e}"]`, an = (e, t) => e.map((r) => {
  const o = r.styles[t];
  return o ? `${r.selector} { ${o} }` : "";
}).join(" "), uD = "pointer-events: none;";
var dD = (e) => {
  const t = lD(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Zr.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: uD,
        dropAnimating: s
      }
    };
  })(), o = (() => {
    const s = `
      transition: ${ln.outOfTheWay};
    `;
    return {
      selector: t(Wa.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), n = {
    selector: t(cD.contextId),
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
    always: an(a, "always"),
    resting: an(a, "resting"),
    dragging: an(a, "dragging"),
    dropAnimating: an(a, "dropAnimating"),
    userCancel: an(a, "userCancel")
  };
};
const pD = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Yt : pe;
var Tt = pD;
const ai = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot find the head to append a style to") : _()), e;
}, dd = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function fD(e, t) {
  const r = be(() => dD(e), [e]), o = M(null), n = M(null), i = te(ut((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot set dynamic style element if it is not set") : _()), d.textContent = l;
  }), []), a = te((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot set dynamic style element if it is not set") : _()), d.textContent = l;
  }, []);
  Tt(() => {
    !o.current && !n.current || (process.env.NODE_ENV !== "production" ? _(!1, "style elements already mounted") : _());
    const l = dd(t), d = dd(t);
    return o.current = l, n.current = d, l.setAttribute(`${Jr}-always`, e), d.setAttribute(`${Jr}-dynamic`, e), ai().appendChild(l), ai().appendChild(d), a(r.always), i(r.resting), () => {
      const g = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot unmount ref as it is not set") : _()), ai().removeChild(b), h.current = null;
      };
      g(o), g(n);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = te(() => i(r.dragging), [i, r.dragging]), c = te((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = te(() => {
    n.current && i(r.resting);
  }, [i, r.resting]);
  return be(() => ({
    dragging: s,
    dropping: c,
    resting: u
  }), [s, c, u]);
}
function yh(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var vh = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Hn(e) {
  return e instanceof vh(e).HTMLElement;
}
function Eh(e, t) {
  const r = `[${Zr.contextId}="${e}"]`, o = yh(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Ze(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Zr.draggableId) === t);
  return n ? Hn(n) ? n : (process.env.NODE_ENV !== "production" && Ze("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ze(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function mD(e) {
  const t = M({}), r = M(null), o = M(null), n = M(!1), i = te(function(d, g) {
    const h = {
      id: d,
      focus: g
    };
    return t.current[d] = h, function() {
      const p = t.current;
      p[d] !== h && delete p[d];
    };
  }, []), a = te(function(d) {
    const g = Eh(e, d);
    g && g !== document.activeElement && g.focus();
  }, [e]), s = te(function(d, g) {
    r.current === d && (r.current = g);
  }, []), c = te(function() {
    o.current || n.current && (o.current = requestAnimationFrame(() => {
      o.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = te(function(d) {
    r.current = null;
    const g = document.activeElement;
    g && g.getAttribute(Zr.draggableId) === d && (r.current = d);
  }, []);
  return Tt(() => (n.current = !0, function() {
    n.current = !1;
    const d = o.current;
    d && cancelAnimationFrame(d);
  }), []), be(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, u, c, s]);
}
function gD() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(l) {
    return t.push(l), function() {
      const g = t.indexOf(l);
      g !== -1 && t.splice(g, 1);
    };
  }
  function o(l) {
    t.length && t.forEach((d) => d(l));
  }
  function n(l) {
    return e.draggables[l] || null;
  }
  function i(l) {
    const d = n(l);
    return d || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot find draggable entry with id [${l}]`) : _()), d;
  }
  const a = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, o({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, d) => {
      const g = e.draggables[d.descriptor.id];
      g && g.uniqueId === l.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const d = l.descriptor.id, g = n(d);
      g && l.uniqueId === g.uniqueId && (delete e.draggables[d], e.droppables[l.descriptor.droppableId] && o({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: i,
    findById: n,
    exists: (l) => !!n(l),
    getAllByType: (l) => Object.values(e.draggables).filter((d) => d.descriptor.type === l)
  };
  function s(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const d = s(l);
    return d || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot find droppable entry with id [${l}]`) : _()), d;
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
function bD() {
  const e = be(gD, []);
  return pe(() => function() {
    I.version.startsWith("16") || I.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Sc = I.createContext(null), Dn = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot find document.body") : _()), e;
};
const hD = {
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
var yD = hD;
const vD = (e) => `rfd-announcement-${e}`;
function ED(e) {
  const t = be(() => vD(e), [e]), r = M(null);
  return pe(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), tr(i.style, yD), Dn().appendChild(i), function() {
      setTimeout(function() {
        const c = Dn();
        c.contains(i) && c.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), te((n) => {
    const i = r.current;
    if (i) {
      i.textContent = n;
      return;
    }
    process.env.NODE_ENV !== "production" && Ze(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${n}"
    `);
  }, []);
}
let xD = 0;
const xh = {
  separator: "::"
};
function wD(e, t = xh) {
  return be(() => `${e}${t.separator}${xD++}`, [t.separator, e]);
}
function SD(e, t = xh) {
  const r = I.useId();
  return be(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Oc = "useId" in I ? SD : wD;
function OD({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function ND({
  contextId: e,
  text: t
}) {
  const r = Oc("hidden-text", {
    separator: "-"
  }), o = be(() => OD({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return pe(function() {
    const i = document.createElement("div");
    return i.id = o, i.textContent = t, i.style.display = "none", Dn().appendChild(i), function() {
      const s = Dn();
      s.contains(i) && s.removeChild(i);
    };
  }, [o, t]), o;
}
var Go = I.createContext(null), DD = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const CD = /(\d+)\.(\d+)\.(\d+)/, pd = (e) => {
  const t = CD.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? _(!1, `Unable to parse React version ${e}`) : _());
  const r = Number(t[1]), o = Number(t[2]), n = Number(t[3]);
  return {
    major: r,
    minor: o,
    patch: n,
    raw: e
  };
}, _D = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var ID = (e, t) => {
  const r = pd(e), o = pd(t);
  _D(r, o) || process.env.NODE_ENV !== "production" && Ze(`
    React version: [${o.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const si = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var PD = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Ze(`
      No <!doctype html> found.

      ${si}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Ze(`
      Unexpected <!doctype> found: (${t.name})

      ${si}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Ze(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${si}
    `);
};
function Nc(e) {
  process.env.NODE_ENV !== "production" && e();
}
function qn(e, t) {
  Nc(() => {
    pe(() => {
      try {
        e();
      } catch (r) {
        Va(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function $D() {
  qn(() => {
    ID(DD.react, I.version), PD(document);
  }, []);
}
function Dc(e) {
  const t = M(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function AD() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function o(a) {
    e && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot claim lock as it is already claimed") : _());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function n() {
    e || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot release lock when there is no lock") : _()), e = null;
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
function Cn(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const TD = 9, RD = 13, Cc = 27, wh = 32, VD = 33, MD = 34, LD = 35, BD = 36, FD = 37, WD = 38, jD = 39, GD = 40, kD = {
  [RD]: !0,
  [TD]: !0
};
var Sh = (e) => {
  kD[e.keyCode] && e.preventDefault();
};
const zD = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((o) => `on${o}` in document) || e;
})();
var ko = zD;
const Oh = 0, fd = 5;
function UD(e, t) {
  return Math.abs(t.x - e.x) >= fd || Math.abs(t.y - e.y) >= fd;
}
const md = {
  type: "IDLE"
};
function HD({
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
      if (i !== Oh)
        return;
      const c = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        n.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot be IDLE") : _());
      const f = u.point;
      if (!UD(f, c))
        return;
      n.preventDefault();
      const l = u.actions.fluidLift(c);
      o({
        type: "DRAGGING",
        actions: l
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
      if (n.keyCode === Cc) {
        n.preventDefault(), e();
        return;
      }
      Sh(n);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "Unexpected phase") : _()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      n.preventDefault();
    }
  }, {
    eventName: ko,
    fn: e
  }];
}
function qD(e) {
  const t = M(md), r = M(rr), o = be(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Oh || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const d = e.findClosestDraggableId(l);
      if (!d)
        return;
      const g = e.tryGetLock(d, a, {
        sourceEvent: l
      });
      if (!g)
        return;
      l.preventDefault();
      const h = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), u(g, h);
    }
  }), [e]), n = be(() => ({
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
  }), [e]), i = te(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = Gt(window, [n, o], l);
  }, [n, o]), a = te(() => {
    t.current.type !== "IDLE" && (t.current = md, r.current(), i());
  }, [i]), s = te(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = te(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = HD({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (g) => {
        t.current = g;
      }
    });
    r.current = Gt(window, d, l);
  }, [s, a]), u = te(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "Expected to move from IDLE to PENDING drag") : _()), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  Tt(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function YD() {
}
const KD = {
  [MD]: !0,
  [VD]: !0,
  [BD]: !0,
  [LD]: !0
};
function XD(e, t) {
  function r() {
    t(), e.cancel();
  }
  function o() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (n) => {
      if (n.keyCode === Cc) {
        n.preventDefault(), r();
        return;
      }
      if (n.keyCode === wh) {
        n.preventDefault(), o();
        return;
      }
      if (n.keyCode === GD) {
        n.preventDefault(), e.moveDown();
        return;
      }
      if (n.keyCode === WD) {
        n.preventDefault(), e.moveUp();
        return;
      }
      if (n.keyCode === jD) {
        n.preventDefault(), e.moveRight();
        return;
      }
      if (n.keyCode === FD) {
        n.preventDefault(), e.moveLeft();
        return;
      }
      if (KD[n.keyCode]) {
        n.preventDefault();
        return;
      }
      Sh(n);
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
    eventName: ko,
    fn: r
  }];
}
function JD(e) {
  const t = M(YD), r = be(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== wh)
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
        c || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot stop capturing a keyboard drag when not capturing") : _()), c = !1, t.current(), o();
      }
      t.current = Gt(window, XD(u, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), o = te(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Gt(window, [r], i);
  }, [r]);
  Tt(function() {
    return o(), function() {
      t.current();
    };
  }, [o]);
}
const ci = {
  type: "IDLE"
}, ZD = 120, QD = 0.15;
function e0({
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
      r.keyCode === Cc && r.preventDefault(), e();
    }
  }, {
    eventName: ko,
    fn: e
  }];
}
function t0({
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
      n.type === "IDLE" && (process.env.NODE_ENV, _());
      const i = o.touches[0];
      if (!i || !(i.force >= QD))
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
    eventName: ko,
    fn: e
  }];
}
function r0(e) {
  const t = M(ci), r = M(rr), o = te(function() {
    return t.current;
  }, []), n = te(function(g) {
    t.current = g;
  }, []), i = be(() => ({
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
      const p = g.touches[0], {
        clientX: E,
        clientY: O
      } = p, v = {
        x: E,
        y: O
      };
      r.current(), l(b, v);
    }
  }), [e]), a = te(function() {
    const g = {
      capture: !0,
      passive: !1
    };
    r.current = Gt(window, [i], g);
  }, [i]), s = te(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), n(ci), r.current(), a());
  }, [a, n]), c = te(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = te(function() {
    const g = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: c,
      completed: s,
      getPhase: o
    }, b = Gt(window, t0(h), g), p = Gt(window, e0(h), g);
    r.current = function() {
      b(), p();
    };
  }, [c, o, s]), f = te(function() {
    const g = o();
    g.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? _(!1, `Cannot start dragging from phase ${g.type}`) : _());
    const h = g.actions.fluidLift(g.point);
    n({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [o, n]), l = te(function(g, h) {
    o().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "Expected to move from IDLE to PENDING drag") : _());
    const b = setTimeout(f, ZD);
    n({
      type: "PENDING",
      point: h,
      actions: g,
      longPressTimerId: b
    }), u();
  }, [u, o, n, f]);
  Tt(function() {
    return a(), function() {
      r.current();
      const h = o();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), n(ci));
    };
  }, [o, a, n]), Tt(function() {
    return Gt(window, [{
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
function n0(e) {
  Nc(() => {
    const t = Dc(e);
    qn(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot change the amount of sensor hooks after mounting") : _(!1));
    });
  });
}
const o0 = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Nh(e, t) {
  if (t == null)
    return !1;
  if (o0.includes(t.tagName.toLowerCase()))
    return !0;
  const o = t.getAttribute("contenteditable");
  return o === "true" || o === "" ? !0 : t === e ? !1 : Nh(e, t.parentElement);
}
function i0(e, t) {
  const r = t.target;
  return Hn(r) ? Nh(e, r) : !1;
}
var a0 = (e) => zt(e.getBoundingClientRect()).center;
function s0(e) {
  return e instanceof vh(e).Element;
}
const c0 = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((o) => o in Element.prototype) || e;
})();
function Dh(e, t) {
  return e == null ? null : e[c0](t) ? e : Dh(e.parentElement, t);
}
function l0(e, t) {
  return e.closest ? e.closest(t) : Dh(e, t);
}
function u0(e) {
  return `[${Zr.contextId}="${e}"]`;
}
function d0(e, t) {
  const r = t.target;
  if (!s0(r))
    return process.env.NODE_ENV !== "production" && Ze("event.target must be a Element"), null;
  const o = u0(e), n = l0(r, o);
  return n ? Hn(n) ? n : (process.env.NODE_ENV !== "production" && Ze("drag handle must be a HTMLElement"), null) : null;
}
function p0(e, t) {
  const r = d0(e, t);
  return r ? r.getAttribute(Zr.draggableId) : null;
}
function f0(e, t) {
  const r = `[${Wa.contextId}="${e}"]`, n = yh(document, r).find((i) => i.getAttribute(Wa.id) === t);
  return n ? Hn(n) ? n : (process.env.NODE_ENV !== "production" && Ze("Draggable element is not a HTMLElement"), null) : null;
}
function m0(e) {
  e.preventDefault();
}
function Kn({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: o
}) {
  return r() ? e !== t ? (o && process.env.NODE_ENV !== "production" && Ze(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (o && process.env.NODE_ENV !== "production" && Ze(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Ch({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: o
}) {
  if (e.isClaimed())
    return !1;
  const n = r.draggable.findById(o);
  return n ? !(!n.options.isEnabled || !mh(t.getState(), o)) : (process.env.NODE_ENV !== "production" && Ze(`Unable to find draggable with id: ${o}`), !1);
}
function g0({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: o,
  draggableId: n,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Ch({
    lockAPI: e,
    store: r,
    registry: o,
    draggableId: n
  }))
    return null;
  const c = o.draggable.getById(n), u = f0(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && Ze(`Unable to find draggable element with id: ${n}`), null;
  if (a && !c.options.canDragInteractiveElements && i0(u, a))
    return null;
  const f = e.claim(i || rr);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function g() {
    return e.isActive(f);
  }
  function h(m, x) {
    Kn({
      expected: m,
      phase: l,
      isLockActive: g,
      shouldWarn: !0
    }) && r.dispatch(x());
  }
  const b = h.bind(null, "DRAGGING");
  function p(m) {
    function x() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (x(), process.env.NODE_ENV !== "production" ? _(!1, `Cannot lift in phase ${l}`) : _()), r.dispatch(UO(m.liftActionArgs)), l = "DRAGGING";
    function N(C, R = {
      shouldBlockNextClick: !1
    }) {
      if (m.cleanup(), R.shouldBlockNextClick) {
        const $ = Gt(window, [{
          eventName: "click",
          fn: m0,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      x(), r.dispatch(ah({
        reason: C
      }));
    }
    return {
      isActive: () => Kn({
        expected: "DRAGGING",
        phase: l,
        isLockActive: g,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (C) => N("DROP", C),
      cancel: (C) => N("CANCEL", C),
      ...m.actions
    };
  }
  function E(m) {
    const x = vn((C) => {
      b(() => ih({
        client: C
      }));
    });
    return {
      ...p({
        liftActionArgs: {
          id: n,
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
      moveUp: () => b(eN),
      moveRight: () => b(rN),
      moveDown: () => b(tN),
      moveLeft: () => b(nN)
    };
    return p({
      liftActionArgs: {
        id: n,
        clientSelection: a0(u),
        movementMode: "SNAP"
      },
      cleanup: rr,
      actions: m
    });
  }
  function v() {
    Kn({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: g,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Kn({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: g,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: E,
    snapLift: O,
    abort: v
  };
}
const b0 = [qD, JD, r0];
function h0({
  contextId: e,
  store: t,
  registry: r,
  customSensors: o,
  enableDefaultSensors: n
}) {
  const i = [...n ? b0 : [], ...o || []], a = Xe(() => AD())[0], s = te(function(p, E) {
    Cn(p) && !Cn(E) && a.tryAbandon();
  }, [a]);
  Tt(function() {
    let p = t.getState();
    return t.subscribe(() => {
      const O = t.getState();
      s(p, O), p = O;
    });
  }, [a, t, s]), Tt(() => a.tryAbandon, [a.tryAbandon]);
  const c = te((b) => Ch({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = te((b, p, E) => g0({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: p || null,
    sourceEvent: E && E.sourceEvent ? E.sourceEvent : null
  }), [e, a, r, t]), f = te((b) => p0(e, b), [e]), l = te((b) => {
    const p = r.draggable.findById(b);
    return p ? p.options : null;
  }, [r.draggable]), d = te(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(bc()));
  }, [a, t]), g = te(() => a.isClaimed(), [a]), h = be(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: g
  }), [c, u, f, l, d, g]);
  n0(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const y0 = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    I.version.startsWith("16") || I.version.startsWith("17") ? r() : Kt(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), v0 = (e) => ({
  ...Nn,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Nn.durationDampening,
    ...e.autoScrollerOptions
  }
});
function sn(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? _(!1, "Could not find store from lazy ref") : _()), e.current;
}
function E0(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: o,
    nonce: n,
    dragHandleUsageInstructions: i
  } = e, a = M(null);
  $D();
  const s = Dc(e), c = te(() => y0(s.current), [s]), u = te(() => v0(s.current), [s]), f = ED(t), l = ND({
    contextId: t,
    text: i
  }), d = fD(t, n), g = te(($) => {
    sn(a).dispatch($);
  }, []), h = be(() => Ou({
    publishWhileDragging: qO,
    updateDroppableScroll: KO,
    updateDroppableIsEnabled: XO,
    updateDroppableIsCombineEnabled: JO,
    collectionStarting: YO
  }, g), [g]), b = bD(), p = be(() => zN(b, h), [b, h]), E = be(() => sD({
    scrollWindow: UN,
    scrollDroppable: p.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Ou({
      move: ih
    }, g)
  }), [p.scrollDroppable, g, u]), O = mD(t), v = be(() => WN({
    announce: f,
    autoScroller: E,
    dimensionMarshal: p,
    focusMarshal: O,
    getResponders: c,
    styleMarshal: d
  }), [f, E, p, O, c, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== v && process.env.NODE_ENV !== "production" && Ze("unexpected store change"), a.current = v;
  const y = te(() => {
    const $ = sn(a);
    $.getState().phase !== "IDLE" && $.dispatch(bc());
  }, []), m = te(() => {
    const $ = sn(a).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), x = be(() => ({
    isDragging: m,
    tryAbort: y
  }), [m, y]);
  r(x);
  const N = te(($) => mh(sn(a).getState(), $), []), C = te(() => Sr(sn(a).getState()), []), R = be(() => ({
    marshal: p,
    focus: O,
    contextId: t,
    canLift: N,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: l,
    registry: b
  }), [t, p, l, O, N, C, b]);
  return h0({
    contextId: t,
    store: v,
    registry: b,
    customSensors: o || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), pe(() => y, [y]), I.createElement(Go.Provider, {
    value: R
  }, I.createElement(hS, {
    context: Sc,
    store: v
  }, e.children));
}
let x0 = 0;
function w0() {
  return be(() => `${x0++}`, []);
}
function S0() {
  return I.useId();
}
var O0 = "useId" in I ? S0 : w0;
function N0(e) {
  const t = O0(), r = e.dragHandleUsageInstructions || io.dragHandleUsageInstructions;
  return I.createElement(TS, null, (o) => I.createElement(E0, {
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
const gd = {
  dragging: 5e3,
  dropAnimating: 4500
}, D0 = (e, t) => t ? ln.drop(t.duration) : e ? ln.snap : ln.fluid, C0 = (e, t) => {
  if (e)
    return t ? On.opacity.drop : On.opacity.combining;
}, _0 = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function I0(e) {
  const r = e.dimension.client, {
    offset: o,
    combineWith: n,
    dropping: i
  } = e, a = !!n, s = _0(e), c = !!i, u = c ? Ba.drop(o, a) : Ba.moveTo(o);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: D0(s, i),
    transform: u,
    opacity: C0(a, c),
    zIndex: c ? gd.dropAnimating : gd.dragging,
    pointerEvents: "none"
  };
}
function P0(e) {
  return {
    transform: Ba.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function $0(e) {
  return e.type === "DRAGGING" ? I0(e) : P0(e);
}
function A0(e, t, r = dt) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Rb(n, o), a = Do(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function T0(e) {
  const t = Oc("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = be(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = te((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot get dimension when no ref is set") : _()), A0(r, h, g);
  }, [r, n]), f = be(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  Tt(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Tt(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var _c = I.createContext(null);
function _h(e) {
  e && Hn(e) || (process.env.NODE_ENV !== "production" ? _(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : _());
}
function R0(e, t, r) {
  qn(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? _(!1, "Draggable requires a draggableId") : _(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? _(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : _(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? _(!1, `${o(n)} requires an integer index prop`) : _(!1)), e.mapped.type !== "DRAGGING" && (_h(r()), e.isEnabled && (Eh(t, n) || (process.env.NODE_ENV !== "production" ? _(!1, `${o(n)} Unable to find drag handle`) : _(!1))));
  });
}
function V0(e) {
  Nc(() => {
    const t = M(e);
    qn(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? _(!1, "Draggable isClone prop value changed during component life") : _(!1));
    }, [e]);
  });
}
function Io(e) {
  const t = Ct(e);
  return t || (process.env.NODE_ENV !== "production" ? _(!1, "Could not find required context") : _()), t;
}
function M0(e) {
  e.preventDefault();
}
const L0 = (e) => {
  const t = M(null), r = te((x = null) => {
    t.current = x;
  }, []), o = te(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Io(Go), {
    type: s,
    droppableId: c
  } = Io(_c), u = be(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: E
  } = e;
  if (R0(e, n, o), V0(b), !b) {
    const x = be(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    T0(x);
  }
  const O = be(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: M0
  } : null, [n, i, l, d]), v = te((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? E() : Kt(E));
  }, [E, p]), y = be(() => {
    const x = $0(p), N = p.type === "DRAGGING" && p.dropping ? v : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [n, O, l, p, v, r]), m = be(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var B0 = L0, Ih = (e, t) => e === t, Ph = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const F0 = (e) => e.combine ? e.combine.draggableId : null, W0 = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function j0() {
  const e = ut((n, i) => ({
    x: n,
    y: i
  })), t = ut((n, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: n,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = ut((n, i, a, s, c = null, u = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: u,
      mode: i,
      offset: n,
      dimension: a,
      forceShouldAnimate: f,
      snapshot: t(i, s, c, u, null)
    }
  }));
  return (n, i) => {
    if (Cn(n)) {
      if (n.critical.draggable.id !== i.draggableId)
        return null;
      const a = n.current.client.offset, s = n.dimensions.draggables[i.draggableId], c = At(n.impact), u = W0(n.impact), f = n.forceShouldAnimate;
      return r(e(a.x, a.y), n.movementMode, s, i.isClone, c, u, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const a = n.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = n.dimensions.draggables[i.draggableId], u = a.result, f = u.mode, l = Ph(u), d = F0(u), h = {
        duration: n.dropDuration,
        curve: yc.drop,
        moveTo: n.newHomeClientOffset,
        opacity: d ? On.opacity.drop : null,
        scale: d ? On.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: c,
          dropping: h,
          draggingOver: l,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, s, l, d, h)
        }
      };
    }
    return null;
  };
}
function $h(e = null) {
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
const G0 = {
  mapped: {
    type: "SECONDARY",
    offset: dt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: $h(null)
  }
};
function k0() {
  const e = ut((a, s) => ({
    x: a,
    y: s
  })), t = ut($h), r = ut((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), o = (a) => a ? r(dt, a, !0) : null, n = (a, s, c, u) => {
    const f = c.displaced.visible[a], l = !!(u.inVirtualList && u.effected[a]), d = Fo(c), g = d && d.draggableId === a ? s : null;
    if (!f) {
      if (!l)
        return o(g);
      if (c.displaced.invisible[a])
        return null;
      const p = en(u.displacedBy.point), E = e(p.x, p.y);
      return r(E, g, !0);
    }
    if (l)
      return o(g);
    const h = c.displacedBy.point, b = e(h.x, h.y);
    return r(b, g, f.shouldAnimate);
  };
  return (a, s) => {
    if (Cn(a))
      return a.critical.draggable.id === s.draggableId ? null : n(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : n(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const z0 = () => {
  const e = j0(), t = k0();
  return (o, n) => e(o, n) || t(o, n) || G0;
}, U0 = {
  dropAnimationFinished: sh
}, H0 = Ab(z0, U0, null, {
  context: Sc,
  areStatePropsEqual: Ih
})(B0);
var q0 = H0;
function Ah(e) {
  return Io(_c).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(q0, e);
}
function Y0(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, o = !!e.shouldRespectForcePress;
  return I.createElement(Ah, tr({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: o
  }));
}
const Ic = (e) => (t) => e === t, K0 = Ic("scroll"), X0 = Ic("auto"), J0 = Ic("visible"), bd = (e, t) => t(e.overflowX) || t(e.overflowY), Z0 = (e, t) => t(e.overflowX) && t(e.overflowY), Th = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return bd(r, K0) || bd(r, X0);
}, Q0 = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Dn(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, _()), !Th(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Z0(o, J0) || process.env.NODE_ENV !== "production" && Ze(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Pc = (e) => e == null ? null : e === document.body ? Q0() ? e : null : e === document.documentElement ? null : Th(e) ? e : Pc(e.parentElement);
var eC = (e) => {
  !e || !Pc(e.parentElement) || process.env.NODE_ENV !== "production" && Ze(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ja = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Rh = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Rh(e.parentElement) : !1;
var tC = (e) => {
  const t = Pc(e), r = Rh(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, rC = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: d,
      client: g
    } = s, h = dh({
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
          value: dt,
          displacement: dt
        }
      }
    };
  })(), u = n === "vertical" ? dc : zb, f = Xr({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const nC = (e, t) => {
  const r = Vb(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, c = sc({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return cc({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var oC = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = nC(e, c), f = Do(u, o), l = (() => {
    if (!c)
      return null;
    const g = Vb(c), h = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: g,
      page: Do(g, o),
      scroll: ja(c),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return rC({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const iC = {
  passive: !1
}, aC = {
  passive: !0
};
var hd = (e) => e.shouldPublishImmediately ? iC : aC;
const Xn = (e) => e && e.env.closestScrollable || null;
function sC(e) {
  const t = M(null), r = Io(Go), o = Oc("droppable"), {
    registry: n,
    marshal: i
  } = r, a = Dc(e), s = be(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = be(() => ut((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? _(!1, "Can only update scroll when dragging") : _());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = te(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? dt : ja(y.env.closestScrollable);
  }, []), l = te(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = be(() => vn(l), [l]), g = te(() => {
    const y = t.current, m = Xn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? _(!1, "Could not find scroll options while scrolling") : _()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = te((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot collect a droppable while a drag is occurring") : _());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot collect without a droppable ref") : _());
    const C = tC(N), R = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = R;
    const $ = oC({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(ud.contextId, r.contextId), A.addEventListener("scroll", g, hd(R.scrollOptions)), process.env.NODE_ENV !== "production" && eC(A)), $;
  }, [r.contextId, s, g, a]), b = te(() => {
    const y = t.current, m = Xn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? _(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : _()), ja(m);
  }, []), p = te(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot stop drag when no active drag") : _());
    const m = Xn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(ud.contextId), m.removeEventListener("scroll", g, hd(y.scrollOptions)));
  }, [g, d]), E = te((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot scroll when there is no drag") : _());
    const x = Xn(m);
    x || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot scroll a droppable with no closest scrollable") : _()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), O = be(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: E
  }), [p, h, b, E]), v = be(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  Tt(() => (c.current = v.descriptor, n.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ze("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(v);
  }), [O, s, p, v, i, n.droppable]), Tt(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Tt(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function li() {
}
const yd = {
  width: 0,
  height: 0,
  margin: WS
}, cC = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? yd : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, lC = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = cC({
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
    transition: r !== "none" ? ln.placeholder : null
  };
}, uC = (e) => {
  const t = M(null), r = te(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Xe(e.animate === "open");
  pe(() => s ? o !== "open" ? (r(), c(!1), li) : t.current ? li : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : li, [o, s, r]);
  const u = te((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = lC({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var dC = I.memo(uC);
function ui(e) {
  return typeof e == "boolean";
}
function di(e, t) {
  t.forEach((r) => r(e));
}
const pC = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? _(!1, "A Droppable requires a droppableId prop") : _()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? _(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : _());
}, function({
  props: t
}) {
  ui(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? _(!1, "isDropDisabled must be a boolean") : _()), ui(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? _(!1, "isCombineEnabled must be a boolean") : _()), ui(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? _(!1, "ignoreContainerClipping must be a boolean") : _());
}, function({
  getDroppableRef: t
}) {
  _h(t());
}], fC = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Ze(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], mC = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? _(!1, "Must provide a clone render function (renderClone) for virtual lists") : _());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? _(!1, "Expected virtual list to not have a placeholder") : _());
}];
function gC(e) {
  qn(() => {
    di(e, pC), e.props.mode === "standard" && di(e, fC), e.props.mode === "virtual" && di(e, mC);
  });
}
class bC extends I.PureComponent {
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
const hC = (e) => {
  const t = Ct(Go);
  t || (process.env.NODE_ENV !== "production" ? _(!1, "Could not find app context") : _());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: E
  } = e, O = te(() => n.current, []), v = te((P = null) => {
    n.current = P;
  }, []), y = te(() => i.current, []), m = te((P = null) => {
    i.current = P;
  }, []);
  gC({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const x = te(() => {
    o() && p({
      maxScroll: fh()
    });
  }, [o, p]);
  sC({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const N = be(() => I.createElement(bC, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => I.createElement(dC, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: j,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = be(() => ({
    innerRef: v,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, v]), R = b ? b.dragging.draggableId : null, $ = be(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = I.createElement(Ah, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return pr.createPortal(j, E());
  }
  return I.createElement(_c.Provider, {
    value: $
  }, a(C, h), A());
};
var yC = hC;
function vC() {
  return document.body || (process.env.NODE_ENV !== "production" ? _(!1, "document.body is not ready") : _()), document.body;
}
const vd = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: vC
}, Vh = (e) => {
  let t = {
    ...e
  }, r;
  for (r in vd)
    e[r] === void 0 && (t = {
      ...t,
      [r]: vd[r]
    });
  return t;
}, pi = (e, t) => e === t.droppable.type, Ed = (e, t) => t.draggables[e.draggable.id], EC = () => {
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
  }, r = ut((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), o = ut((i, a, s, c, u, f) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const h = f ? {
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
        useClone: h
      };
    }
    if (!a)
      return t;
    if (!c)
      return e;
    const g = {
      isDraggingOver: s,
      draggingOverWith: l,
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
    const s = Vh(a), c = s.droppableId, u = s.type, f = !s.isDropDisabled, l = s.renderClone;
    if (Cn(i)) {
      const d = i.critical;
      if (!pi(u, d))
        return t;
      const g = Ed(d, i.dimensions), h = At(i.impact) === c;
      return o(c, f, h, h, g, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!pi(u, d.critical))
        return t;
      const g = Ed(d.critical, i.dimensions);
      return o(c, f, Ph(d.result) === c, At(d.impact) === c, g, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!pi(u, d.critical))
        return t;
      const g = At(d.impact) === c, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === c;
      return g ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, xC = {
  updateViewportMaxScroll: QO
}, wC = Ab(EC, xC, (e, t, r) => ({
  ...Vh(r),
  ...e,
  ...t
}), {
  context: Sc,
  areStatePropsEqual: Ih
})(yC);
var SC = wC;
const jU = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: o,
  isDragDisabled: n = !0,
  isLoading: i,
  onRowClick: a,
  itemClickKey: s,
  haveLinks: c,
  className: u
}) => {
  const [f, l] = Xe(null), [d, g] = Xe(e);
  pe(() => {
    g(e);
  }, [e]);
  const h = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (E) => {
    a == null || a(E), l(E);
  }, p = (E) => {
    if (!E.destination || !(d != null && d.length)) return;
    const O = E.source.index, v = E.destination.index, y = [...d], [m] = y.splice(O, 1);
    y.splice(v, 0, m), g(y);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ lt("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ X("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ X("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ X(ob, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ X(mb, { className: u, children: /* @__PURE__ */ X("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ X("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ X(N0, { onDragEnd: p, children: /* @__PURE__ */ X(SC, { droppableId: "dropArray", direction: "vertical", children: (E) => /* @__PURE__ */ lt("table", { className: "w-full", children: [
    /* @__PURE__ */ X("thead", { children: /* @__PURE__ */ X("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((O, v) => /* @__PURE__ */ X(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          o === O.name.find((y) => y) ? `-${O.name.find((y) => y) ?? ""}` : O.name.find((y) => y) ?? ""
        ),
        className: `${o && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${o === O.name.find((y) => y) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: O.title
      },
      v
    )) }) }),
    /* @__PURE__ */ lt(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...E.droppableProps,
        ref: E.innerRef,
        children: [
          d == null ? void 0 : d.map((O, v) => {
            var y;
            return /* @__PURE__ */ X(
              Y0,
              {
                isDragDisabled: n,
                draggableId: (y = O == null ? void 0 : O.id) == null ? void 0 : y.toString(),
                index: v,
                children: (m) => {
                  const x = {
                    ...m.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ X(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === d[v] && h}`,
                      onClick: () => b(
                        s ? O[s] : O.id
                      ),
                      ref: m.innerRef,
                      ...m.draggableProps,
                      ...m.dragHandleProps,
                      style: x,
                      children: t.map((N, C) => {
                        var $;
                        let R = ($ = N == null ? void 0 : N.name) == null ? void 0 : $.reduce(
                          (A, P) => A == null ? void 0 : A[P],
                          d == null ? void 0 : d[v]
                        );
                        return /* @__PURE__ */ X(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: N.transform ? N.transform(R, v) : R
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
          E.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, GU = ({ className: e, field: t, fieldState: r, ...o }) => /* @__PURE__ */ X(
  "textarea",
  {
    ...t,
    ...o,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), OC = ({ name: e, className: t }) => /* @__PURE__ */ X("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ X(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), NC = ({ style: e, text: t }) => /* @__PURE__ */ lt("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ X("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ X("span", { className: "text-base", children: t })
] });
var xd;
(function(e) {
  e.event = "event", e.props = "prop";
})(xd || (xd = {}));
var fi = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + fi(), "" + fi();
function DC() {
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
function CC(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ga = { exports: {} }, mi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function _C() {
  if (wd) return mi;
  wd = 1;
  var e = I;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return mi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, mi;
}
var Sd = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od;
function IC() {
  return Od || (Od = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var E = p[0].inst, O = p[1];
      return c(
        function() {
          E.value = b, E.getSnapshot = h, r(E) && O({ inst: E });
        },
        [g, b, h]
      ), s(
        function() {
          return r(E) && O({ inst: E }), g(function() {
            r(E) && O({ inst: E });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Sd.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Sd;
}
process.env.NODE_ENV === "production" ? Ga.exports = _C() : Ga.exports = IC();
var $c = Ga.exports, gi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function PC() {
  if (Nd) return gi;
  Nd = 1;
  var e = I, t = $c;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return gi.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function E(x) {
          if (!O) {
            if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return y = N;
            }
            return y = x;
          }
          if (N = y, o(v, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
        }
        var O = !1, v, y, m = l === void 0 ? null : l;
        return [
          function() {
            return E(f());
          },
          m === null ? void 0 : function() {
            return E(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, gi;
}
var Dd = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function $C() {
  return Cd || (Cd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = $c, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Dd.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function E(x) {
            if (!O) {
              if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return y = N;
              }
              return y = x;
            }
            if (N = y, o(v, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
          }
          var O = !1, v, y, m = l === void 0 ? null : l;
          return [
            function() {
              return E(f());
            },
            m === null ? void 0 : function() {
              return E(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Dd;
}
process.env.NODE_ENV === "production" ? PC() : $C();
function AC(e) {
  e();
}
let Mh = AC;
const TC = (e) => Mh = e, RC = () => Mh, _d = Symbol.for("react-redux-context"), Id = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function VC() {
  var e;
  if (!D.createContext) return {};
  const t = (e = Id[_d]) != null ? e : Id[_d] = /* @__PURE__ */ new Map();
  let r = t.get(D.createContext);
  return r || (r = D.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(D.createContext, r)), r;
}
const MC = /* @__PURE__ */ VC(), LC = () => {
  throw new Error("uSES not initialized!");
};
function kr() {
  return kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, kr.apply(null, arguments);
}
function Lh(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var ka = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pd;
function BC() {
  if (Pd) return we;
  Pd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  function y(m) {
    return v(m) === u;
  }
  return we.AsyncMode = c, we.ConcurrentMode = u, we.ContextConsumer = s, we.ContextProvider = a, we.Element = t, we.ForwardRef = f, we.Fragment = o, we.Lazy = h, we.Memo = g, we.Portal = r, we.Profiler = i, we.StrictMode = n, we.Suspense = l, we.isAsyncMode = function(m) {
    return y(m) || v(m) === c;
  }, we.isConcurrentMode = y, we.isContextConsumer = function(m) {
    return v(m) === s;
  }, we.isContextProvider = function(m) {
    return v(m) === a;
  }, we.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, we.isForwardRef = function(m) {
    return v(m) === f;
  }, we.isFragment = function(m) {
    return v(m) === o;
  }, we.isLazy = function(m) {
    return v(m) === h;
  }, we.isMemo = function(m) {
    return v(m) === g;
  }, we.isPortal = function(m) {
    return v(m) === r;
  }, we.isProfiler = function(m) {
    return v(m) === i;
  }, we.isStrictMode = function(m) {
    return v(m) === n;
  }, we.isSuspense = function(m) {
    return v(m) === l;
  }, we.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === E || m.$$typeof === O || m.$$typeof === b);
  }, we.typeOf = v, we;
}
var Me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d;
function FC() {
  return $d || ($d = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function v(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === l || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === p || w.$$typeof === E || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ne = w.$$typeof;
        switch (ne) {
          case t:
            var S = w.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var m = c, x = u, N = s, C = a, R = t, $ = f, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === c;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function H(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === f;
    }
    function Q(w) {
      return y(w) === o;
    }
    function de(w) {
      return y(w) === h;
    }
    function q(w) {
      return y(w) === g;
    }
    function J(w) {
      return y(w) === r;
    }
    function L(w) {
      return y(w) === i;
    }
    function Z(w) {
      return y(w) === n;
    }
    function he(w) {
      return y(w) === l;
    }
    Me.AsyncMode = m, Me.ConcurrentMode = x, Me.ContextConsumer = N, Me.ContextProvider = C, Me.Element = R, Me.ForwardRef = $, Me.Fragment = A, Me.Lazy = P, Me.Memo = T, Me.Portal = j, Me.Profiler = k, Me.StrictMode = V, Me.Suspense = W, Me.isAsyncMode = G, Me.isConcurrentMode = z, Me.isContextConsumer = B, Me.isContextProvider = H, Me.isElement = Y, Me.isForwardRef = K, Me.isFragment = Q, Me.isLazy = de, Me.isMemo = q, Me.isPortal = J, Me.isProfiler = L, Me.isStrictMode = Z, Me.isSuspense = he, Me.isValidElementType = v, Me.typeOf = y;
  }()), Me;
}
process.env.NODE_ENV === "production" ? ka.exports = BC() : ka.exports = FC();
var WC = ka.exports, Ac = WC, jC = {
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
}, GC = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, kC = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Tc = {};
Tc[Ac.ForwardRef] = kC;
Tc[Ac.Memo] = Bh;
function Ad(e) {
  return Ac.isMemo(e) ? Bh : Tc[e.$$typeof] || jC;
}
var zC = Object.defineProperty, UC = Object.getOwnPropertyNames, Td = Object.getOwnPropertySymbols, HC = Object.getOwnPropertyDescriptor, qC = Object.getPrototypeOf, Rd = Object.prototype;
function Fh(e, t, r) {
  if (typeof t != "string") {
    if (Rd) {
      var o = qC(t);
      o && o !== Rd && Fh(e, o, r);
    }
    var n = UC(t);
    Td && (n = n.concat(Td(t)));
    for (var i = Ad(e), a = Ad(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!GC[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = HC(t, c);
        try {
          zC(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var YC = Fh;
const Vd = /* @__PURE__ */ CC(YC);
var za = { exports: {} }, Se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function KC() {
  if (Md) return Se;
  Md = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Se.ContextConsumer = a, Se.ContextProvider = i, Se.Element = e, Se.ForwardRef = c, Se.Fragment = r, Se.Lazy = d, Se.Memo = l, Se.Portal = t, Se.Profiler = n, Se.StrictMode = o, Se.Suspense = u, Se.SuspenseList = f, Se.isAsyncMode = function() {
    return !1;
  }, Se.isConcurrentMode = function() {
    return !1;
  }, Se.isContextConsumer = function(p) {
    return b(p) === a;
  }, Se.isContextProvider = function(p) {
    return b(p) === i;
  }, Se.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Se.isForwardRef = function(p) {
    return b(p) === c;
  }, Se.isFragment = function(p) {
    return b(p) === r;
  }, Se.isLazy = function(p) {
    return b(p) === d;
  }, Se.isMemo = function(p) {
    return b(p) === l;
  }, Se.isPortal = function(p) {
    return b(p) === t;
  }, Se.isProfiler = function(p) {
    return b(p) === n;
  }, Se.isStrictMode = function(p) {
    return b(p) === o;
  }, Se.isSuspense = function(p) {
    return b(p) === u;
  }, Se.isSuspenseList = function(p) {
    return b(p) === f;
  }, Se.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Se.typeOf = b, Se;
}
var Le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function XC() {
  return Ld || (Ld = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, E = !1, O = !1, v;
    v = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === f || E || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === v || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var fe = S.type;
            switch (fe) {
              case r:
              case n:
              case o:
              case u:
              case f:
                return fe;
              default:
                var U = fe && fe.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return U;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = a, N = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = f, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return m(S) === a;
    }
    function Y(S) {
      return m(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Q(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function q(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function he(S) {
      return m(S) === o;
    }
    function w(S) {
      return m(S) === u;
    }
    function ne(S) {
      return m(S) === f;
    }
    Le.ContextConsumer = x, Le.ContextProvider = N, Le.Element = C, Le.ForwardRef = R, Le.Fragment = $, Le.Lazy = A, Le.Memo = P, Le.Portal = T, Le.Profiler = j, Le.StrictMode = k, Le.Suspense = V, Le.SuspenseList = W, Le.isAsyncMode = z, Le.isConcurrentMode = B, Le.isContextConsumer = H, Le.isContextProvider = Y, Le.isElement = K, Le.isForwardRef = Q, Le.isFragment = de, Le.isLazy = q, Le.isMemo = J, Le.isPortal = L, Le.isProfiler = Z, Le.isStrictMode = he, Le.isSuspense = w, Le.isSuspenseList = ne, Le.isValidElementType = y, Le.typeOf = m;
  }()), Le;
}
process.env.NODE_ENV === "production" ? za.exports = KC() : za.exports = XC();
var Bd = za.exports;
function Rc(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function bi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Rc(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function JC(e, t, r) {
  bi(e, "mapStateToProps"), bi(t, "mapDispatchToProps"), bi(r, "mergeProps");
}
const ZC = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function QC(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(O, v) {
    return c = O, u = v, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const O = e(c, u), v = !a(O, f);
    return f = O, v && (d = r(f, l, u)), d;
  }
  function E(O, v) {
    const y = !i(v, u), m = !n(O, c, v, u);
    return c = O, u = v, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(O, v) {
    return s ? E(O, v) : g(O, v);
  };
}
function e_(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Lh(t, ZC);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && JC(a, s, c), QC(a, s, c, e, i);
}
function t_(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function r_(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Wh(e, t, r) {
  r_(e) || Rc(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ua(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Fd(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function jh(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Fd(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Fd(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Wh(s, o, t), s;
    }, n;
  };
}
function Vc(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function n_(e) {
  return e && typeof e == "object" ? Ua((t) => (
    // @ts-ignore
    t_(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    jh(e, "mapDispatchToProps")
  ) : Vc(e, "mapDispatchToProps") : Ua((t) => ({
    dispatch: t
  }));
}
function o_(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    jh(e, "mapStateToProps")
  ) : Vc(e, "mapStateToProps") : Ua(() => ({}));
}
function i_(e, t, r) {
  return kr({}, r, e, t);
}
function a_(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Wh(i, r, "mergeProps")), i;
    };
  };
}
function s_(e) {
  return e ? typeof e == "function" ? a_(e) : Vc(e, "mergeProps") : () => i_;
}
function c_() {
  const e = RC();
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
const Wd = {
  notify() {
  },
  get: () => []
};
function l_(e, t) {
  let r, o = Wd, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let E = !1;
    return () => {
      E || (E = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = c_());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Wd);
  }
  function d() {
    i || (i = !0, f());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const u_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ha = u_ ? D.useLayoutEffect : D.useEffect;
function jd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function hi(e, t) {
  if (jd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !jd(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const d_ = ["reactReduxForwardedRef"];
let Gh = LC;
const p_ = (e) => {
  Gh = e;
}, f_ = [null, null], m_ = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function g_(e, t, r) {
  Ha(() => e(...t), r);
}
function b_(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function h_(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (E) {
      p = E, d = E;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function y_(e, t) {
  return e === t;
}
let Gd = !1;
function kh(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = y_,
  areOwnPropsEqual: i = hi,
  areStatePropsEqual: a = hi,
  areMergedPropsEqual: s = hi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = MC
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Gd && (Gd = !0, Rc('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = o_(e), d = n_(t), g = s_(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Bd.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${m_(b)}`);
    const p = b.displayName || b.name || "Component", E = `Connect(${p})`, O = {
      shouldHandleStateChanges: h,
      displayName: E,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(m) {
      const [x, N, C] = D.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = Lh(m, d_);
        return [m.context, L, Z];
      }, [m]), R = D.useMemo(() => x && x.Consumer && // @ts-ignore
      Bd.isContextConsumer(/* @__PURE__ */ D.createElement(x.Consumer, null)) ? x : f, [x, f]), $ = D.useContext(R), A = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const T = A ? m.store : $.store, j = P ? $.getServerState : T.getState, k = D.useMemo(() => e_(T.dispatch, O), [T]), [V, W] = D.useMemo(() => {
        if (!h) return f_;
        const L = l_(T, A ? void 0 : $.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, A, $]), F = D.useMemo(() => A ? $ : kr({}, $, {
        subscription: V
      }), [A, $, V]), G = D.useRef(), z = D.useRef(C), B = D.useRef(), H = D.useRef(!1);
      D.useRef(!1);
      const Y = D.useRef(!1), K = D.useRef();
      Ha(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Q = D.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = D.useMemo(() => (L) => V ? h_(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        H,
        Y,
        B,
        W,
        L
      ) : () => {
      }, [V]);
      g_(b_, [z, G, H, C, B, W]);
      let q;
      try {
        q = Gh(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Q,
          j ? () => k(j(), C) : Q
        );
      } catch (L) {
        throw K.current && (L.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), L;
      }
      Ha(() => {
        K.current = void 0, B.current = void 0, G.current = q;
      });
      const J = D.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ D.createElement(b, kr({}, q, {
          ref: N
        }))
      ), [N, b, q]);
      return D.useMemo(() => h ? /* @__PURE__ */ D.createElement(R.Provider, {
        value: F
      }, J) : J, [R, J, F]);
    }
    const y = D.memo(v);
    if (y.WrappedComponent = b, y.displayName = v.displayName = E, c) {
      const m = D.forwardRef(function(x, N) {
        return /* @__PURE__ */ D.createElement(y, kr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = E, m.WrappedComponent = b, Vd(m, b);
    }
    return Vd(y, b);
  };
}
p_($c.useSyncExternalStore);
TC(fr);
function v_(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function zh(e, t) {
  var r = Xe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && v_(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return pe(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function E_(e, t) {
  return zh(function() {
    return e;
  }, t);
}
var pt = zh, rt = E_, x_ = process.env.NODE_ENV === "production", yi = "Invariant failed";
function kd(e, t) {
  if (x_)
    throw new Error(yi);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(yi, ": ").concat(r) : yi;
  throw new Error(o);
}
var Vr = function(e) {
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
}, Uh = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, zd = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, w_ = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, vi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Mc = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? vi : r, n = e.border, i = n === void 0 ? vi : n, a = e.padding, s = a === void 0 ? vi : a, c = Vr(Uh(t, o)), u = Vr(zd(t, i)), f = Vr(zd(u, s));
  return {
    marginBox: c,
    borderBox: Vr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, Vt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? kd(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : kd()), o;
}, S_ = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, O_ = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = w_(r, t);
  return Mc({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, qa = function(e, t) {
  return t === void 0 && (t = S_()), O_(e, t);
}, Hh = function(e, t) {
  var r = {
    top: Vt(t.marginTop),
    right: Vt(t.marginRight),
    bottom: Vt(t.marginBottom),
    left: Vt(t.marginLeft)
  }, o = {
    top: Vt(t.paddingTop),
    right: Vt(t.paddingRight),
    bottom: Vt(t.paddingBottom),
    left: Vt(t.paddingLeft)
  }, n = {
    top: Vt(t.borderTopWidth),
    right: Vt(t.borderRightWidth),
    bottom: Vt(t.borderBottomWidth),
    left: Vt(t.borderLeftWidth)
  };
  return Mc({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, qh = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Hh(t, r);
}, Ud = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function N_(e, t) {
  return !!(e === t || Ud(e) && Ud(t));
}
function D_(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!N_(e[r], t[r]))
      return !1;
  return !0;
}
function Et(e, t) {
  t === void 0 && (t = D_);
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
var C_ = function(e) {
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
const __ = process.env.NODE_ENV === "production", I_ = /[ \t]{2,}/g, P_ = /^[ \t]*/gm, Hd = (e) => e.replace(I_, " ").replace(P_, "").trim(), $_ = (e) => Hd(`
  %c@hello-pangea/dnd

  %c${Hd(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), A_ = (e) => [$_(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], T_ = "__@hello-pangea/dnd-disable-dev-warnings";
function Yh(e, t) {
  __ || typeof window < "u" && window[T_] || console[e](...A_(t));
}
const or = Yh.bind(null, "warn"), Ya = Yh.bind(null, "error");
function R_() {
}
function V_(e, t) {
  return {
    ...e,
    ...t
  };
}
function M_(e, t, r) {
  const o = t.map((n) => {
    const i = V_(r, n.options);
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
const L_ = process.env.NODE_ENV === "production", qd = "Invariant failed";
class _n extends Error {
}
_n.prototype.toString = function() {
  return this.message;
};
function oe(e, t) {
  throw L_ ? new _n(qd) : new _n(`${qd}: ${t || ""}`);
}
class kU extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = R_, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && or(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof _n && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ya(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = M_(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof _n) {
      process.env.NODE_ENV !== "production" && Ya(t.message), this.setState({});
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
const Cr = {
  x: 0,
  y: 0
}, B_ = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), F_ = (e, t) => e.x === t.x && e.y === t.y, W_ = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), j_ = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var G_ = (e, t) => {
  const r = Vr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const k_ = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), z_ = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, U_ = (e, t) => t ? k_(e, t.scroll.diff.displacement) : e, H_ = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, q_ = (e, t) => t && t.shouldClipSubject ? G_(t.pageMarginBox, e) : Vr(e);
var Y_ = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = U_(e.marginBox, o), i = H_(n, r, t), a = q_(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Et((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Et((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const K_ = Et((e) => Object.values(e)), X_ = Et((e) => Object.values(e));
Et((e, t) => X_(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function J_(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Et((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const Z_ = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Q_ = {
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
Et(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: j_(e.line, r)
  };
});
var ao = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const e1 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), t1 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Lc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, In = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, r1 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, gr = `${r1.outOfTheWay}s ${Lc.outOfTheWay}`, so = {
  fluid: `opacity ${gr}`,
  snap: `transform ${gr}, opacity ${gr}`,
  drop: (e) => {
    const t = `${e}s ${Lc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${gr}`,
  placeholder: `height ${gr}, width ${gr}, margin ${gr}`
}, Yd = (e) => F_(e, Cr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ka = {
  moveTo: Yd,
  drop: (e, t) => {
    const r = Yd(e);
    if (r)
      return t ? `${r} scale(${In.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Kh = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = B_({
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
}, n1 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot find document.documentElement") : oe()), e;
}, o1 = () => {
  const e = n1();
  return Kh({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Et((e) => K_(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Xh = "data-rfd", Kd = (() => {
  const e = `${Xh}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Xd = {
  contextId: `${Xh}-scroll-container-context-id`
}, i1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Yt : pe;
var un = i1;
function a1(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var s1 = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Jh(e) {
  return e instanceof s1(e).HTMLElement;
}
function c1(e, t) {
  const r = `[${Kd.contextId}="${e}"]`, o = a1(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && or(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Kd.draggableId) === t);
  return n ? Jh(n) ? n : (process.env.NODE_ENV !== "production" && or("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && or(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Zh = I.createContext(null), l1 = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot find document.body") : oe()), e;
};
let u1 = 0;
const Qh = {
  separator: "::"
};
function d1(e, t = Qh) {
  return pt(() => `${e}${t.separator}${u1++}`, [t.separator, e]);
}
function p1(e, t = Qh) {
  const r = I.useId();
  return pt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var ey = "useId" in I ? p1 : d1, Bc = I.createContext(null);
function ty(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Fc(e, t) {
  ty(() => {
    pe(() => {
      try {
        e();
      } catch (r) {
        Ya(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function f1(e) {
  const t = M(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function Wc(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Jd = {
  dragging: 5e3,
  dropAnimating: 4500
}, m1 = (e, t) => t ? so.drop(t.duration) : e ? so.snap : so.fluid, g1 = (e, t) => {
  if (e)
    return t ? In.opacity.drop : In.opacity.combining;
}, b1 = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function h1(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = b1(e), s = !!n, c = s ? Ka.drop(r, i) : Ka.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: m1(a, n),
    transform: c,
    opacity: g1(i, s),
    zIndex: s ? Jd.dropAnimating : Jd.dragging,
    pointerEvents: "none"
  };
}
function y1(e) {
  return {
    transform: Ka.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function v1(e) {
  return e.type === "DRAGGING" ? h1(e) : y1(e);
}
function E1(e, t, r = Cr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Hh(n, o), a = qa(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function x1(e) {
  const t = ey("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = pt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = rt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot get dimension when no ref is set") : oe()), E1(r, h, g);
  }, [r, n]), f = pt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  un(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), un(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var jc = I.createContext(null);
function ry(e) {
  e && Jh(e) || (process.env.NODE_ENV !== "production" ? oe(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : oe());
}
function w1(e, t, r) {
  Fc(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? oe(!1, "Draggable requires a draggableId") : oe(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? oe(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : oe(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? oe(!1, `${o(n)} requires an integer index prop`) : oe(!1)), e.mapped.type !== "DRAGGING" && (ry(r()), e.isEnabled && (c1(t, n) || (process.env.NODE_ENV !== "production" ? oe(!1, `${o(n)} Unable to find drag handle`) : oe(!1))));
  });
}
function S1(e) {
  ty(() => {
    const t = M(e);
    Fc(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? oe(!1, "Draggable isClone prop value changed during component life") : oe(!1));
    }, [e]);
  });
}
function Po(e) {
  const t = Ct(e);
  return t || (process.env.NODE_ENV !== "production" ? oe(!1, "Could not find required context") : oe()), t;
}
function O1(e) {
  e.preventDefault();
}
const N1 = (e) => {
  const t = M(null), r = rt((x = null) => {
    t.current = x;
  }, []), o = rt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Po(Bc), {
    type: s,
    droppableId: c
  } = Po(jc), u = pt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: E
  } = e;
  if (w1(e, n, o), S1(b), !b) {
    const x = pt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    x1(x);
  }
  const O = pt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: O1
  } : null, [n, i, l, d]), v = rt((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? E() : Kt(E));
  }, [E, p]), y = pt(() => {
    const x = v1(p), N = p.type === "DRAGGING" && p.dropping ? v : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [n, O, l, p, v, r]), m = pt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var D1 = N1, ny = (e, t) => e === t, oy = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const C1 = (e) => e.combine ? e.combine.draggableId : null, _1 = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function I1() {
  const e = Et((o, n) => ({
    x: o,
    y: n
  })), t = Et((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Et((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Wc(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = ao(o.impact), c = _1(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = oy(c), l = C1(c), d = {
        duration: o.dropDuration,
        curve: Lc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? In.opacity.drop : null,
        scale: l ? In.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function iy(e = null) {
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
const P1 = {
  mapped: {
    type: "SECONDARY",
    offset: Cr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: iy(null)
  }
};
function $1() {
  const e = Et((i, a) => ({
    x: i,
    y: a
  })), t = Et(iy), r = Et((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Cr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = J_(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = W_(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Wc(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const A1 = () => {
  const e = I1(), t = $1();
  return (r, o) => e(r, o) || t(r, o) || P1;
}, T1 = {
  dropAnimationFinished: t1
}, R1 = kh(A1, T1, null, {
  context: Zh,
  areStatePropsEqual: ny
})(D1);
var V1 = R1;
function M1(e) {
  return Po(jc).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(V1, e);
}
const Gc = (e) => (t) => e === t, L1 = Gc("scroll"), B1 = Gc("auto"), F1 = Gc("visible"), Zd = (e, t) => t(e.overflowX) || t(e.overflowY), W1 = (e, t) => t(e.overflowX) && t(e.overflowY), ay = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Zd(r, L1) || Zd(r, B1);
}, j1 = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = l1(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, oe()), !ay(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return W1(o, F1) || process.env.NODE_ENV !== "production" && or(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, kc = (e) => e == null ? null : e === document.body ? j1() ? e : null : e === document.documentElement ? null : ay(e) ? e : kc(e.parentElement);
var G1 = (e) => {
  !e || !kc(e.parentElement) || process.env.NODE_ENV !== "production" && or(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Xa = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const sy = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : sy(e.parentElement) : !1;
var k1 = (e) => {
  const t = kc(e), r = sy(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, z1 = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
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
    } = s, g = Kh({
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
        max: g,
        diff: {
          value: Cr,
          displacement: Cr
        }
      }
    };
  })(), u = n === "vertical" ? Z_ : Q_, f = Y_({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const U1 = (e, t) => {
  const r = qh(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Uh({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Mc({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var H1 = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = U1(e, c), f = qa(u, o), l = (() => {
    if (!c)
      return null;
    const d = qh(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: qa(d, o),
      scroll: Xa(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return z1({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const q1 = {
  passive: !1
}, Y1 = {
  passive: !0
};
var Qd = (e) => e.shouldPublishImmediately ? q1 : Y1;
const Jn = (e) => e && e.env.closestScrollable || null;
function K1(e) {
  const t = M(null), r = Po(Bc), o = ey("droppable"), {
    registry: n,
    marshal: i
  } = r, a = f1(e), s = pt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = pt(() => Et((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? oe(!1, "Can only update scroll when dragging") : oe());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = rt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Cr : Xa(y.env.closestScrollable);
  }, []), l = rt(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = pt(() => C_(l), [l]), g = rt(() => {
    const y = t.current, m = Jn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? oe(!1, "Could not find scroll options while scrolling") : oe()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = rt((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot collect a droppable while a drag is occurring") : oe());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot collect without a droppable ref") : oe());
    const C = k1(N), R = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = R;
    const $ = H1({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Xd.contextId, r.contextId), A.addEventListener("scroll", g, Qd(R.scrollOptions)), process.env.NODE_ENV !== "production" && G1(A)), $;
  }, [r.contextId, s, g, a]), b = rt(() => {
    const y = t.current, m = Jn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? oe(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : oe()), Xa(m);
  }, []), p = rt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot stop drag when no active drag") : oe());
    const m = Jn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Xd.contextId), m.removeEventListener("scroll", g, Qd(y.scrollOptions)));
  }, [g, d]), E = rt((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot scroll when there is no drag") : oe());
    const x = Jn(m);
    x || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot scroll a droppable with no closest scrollable") : oe()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), O = pt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: E
  }), [p, h, b, E]), v = pt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  un(() => (c.current = v.descriptor, n.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && or("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(v);
  }), [O, s, p, v, i, n.droppable]), un(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), un(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ei() {
}
const X1 = {
  width: 0,
  height: 0,
  margin: z_
}, J1 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? X1 : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Z1 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = J1({
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
    transition: r !== "none" ? so.placeholder : null
  };
}, Q1 = (e) => {
  const t = M(null), r = rt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Xe(e.animate === "open");
  pe(() => s ? o !== "open" ? (r(), c(!1), Ei) : t.current ? Ei : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Ei, [o, s, r]);
  const u = rt((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = Z1({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var eI = I.memo(Q1);
function xi(e) {
  return typeof e == "boolean";
}
function wi(e, t) {
  t.forEach((r) => r(e));
}
const tI = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? oe(!1, "A Droppable requires a droppableId prop") : oe()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? oe(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : oe());
}, function({
  props: e
}) {
  xi(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? oe(!1, "isDropDisabled must be a boolean") : oe()), xi(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? oe(!1, "isCombineEnabled must be a boolean") : oe()), xi(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? oe(!1, "ignoreContainerClipping must be a boolean") : oe());
}, function({
  getDroppableRef: e
}) {
  ry(e());
}], rI = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && or(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], nI = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? oe(!1, "Must provide a clone render function (renderClone) for virtual lists") : oe());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? oe(!1, "Expected virtual list to not have a placeholder") : oe());
}];
function oI(e) {
  Fc(() => {
    wi(e, tI), e.props.mode === "standard" && wi(e, rI), e.props.mode === "virtual" && wi(e, nI);
  });
}
class iI extends I.PureComponent {
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
const aI = (e) => {
  const t = Ct(Bc);
  t || (process.env.NODE_ENV !== "production" ? oe(!1, "Could not find app context") : oe());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: E
  } = e, O = rt(() => n.current, []), v = rt((P = null) => {
    n.current = P;
  }, []), y = rt(() => i.current, []), m = rt((P = null) => {
    i.current = P;
  }, []);
  oI({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const x = rt(() => {
    o() && p({
      maxScroll: o1()
    });
  }, [o, p]);
  K1({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const N = pt(() => I.createElement(iI, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => I.createElement(eI, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: j,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = pt(() => ({
    innerRef: v,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, v]), R = b ? b.dragging.draggableId : null, $ = pt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = I.createElement(M1, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return pr.createPortal(j, E());
  }
  return I.createElement(jc.Provider, {
    value: $
  }, a(C, h), A());
};
var sI = aI;
function cI() {
  return document.body || (process.env.NODE_ENV !== "production" ? oe(!1, "document.body is not ready") : oe()), document.body;
}
const ep = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: cI
}, cy = (e) => {
  let t = {
    ...e
  }, r;
  for (r in ep)
    e[r] === void 0 && (t = {
      ...t,
      [r]: ep[r]
    });
  return t;
}, Si = (e, t) => e === t.droppable.type, tp = (e, t) => t.draggables[e.draggable.id], lI = () => {
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
  }, r = Et((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Et((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: f,
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
  return (n, i) => {
    const a = cy(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (Wc(n)) {
      const l = n.critical;
      if (!Si(c, l))
        return t;
      const d = tp(l, n.dimensions), g = ao(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Si(c, l.critical))
        return t;
      const d = tp(l.critical, n.dimensions);
      return o(s, u, oy(l.result) === s, ao(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Si(c, l.critical))
        return t;
      const d = ao(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, uI = {
  updateViewportMaxScroll: e1
};
kh(lI, uI, (e, t, r) => ({
  ...cy(r),
  ...e,
  ...t
}), {
  context: Zh,
  areStatePropsEqual: ny
})(sI);
var rp;
(function(e) {
  e.event = "event", e.props = "prop";
})(rp || (rp = {}));
var np = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + np(), "" + np();
function dI(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ja = { exports: {} }, Oi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op;
function pI() {
  if (op) return Oi;
  op = 1;
  var e = I;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Oi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Oi;
}
var ip = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;
function fI() {
  return ap || (ap = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var E = p[0].inst, O = p[1];
      return c(
        function() {
          E.value = b, E.getSnapshot = h, r(E) && O({ inst: E });
        },
        [g, b, h]
      ), s(
        function() {
          return r(E) && O({ inst: E }), g(function() {
            r(E) && O({ inst: E });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    ip.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ip;
}
process.env.NODE_ENV === "production" ? Ja.exports = pI() : Ja.exports = fI();
var zc = Ja.exports, Ni = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;
function mI() {
  if (sp) return Ni;
  sp = 1;
  var e = I, t = zc;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Ni.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function E(x) {
          if (!O) {
            if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return y = N;
            }
            return y = x;
          }
          if (N = y, o(v, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
        }
        var O = !1, v, y, m = l === void 0 ? null : l;
        return [
          function() {
            return E(f());
          },
          m === null ? void 0 : function() {
            return E(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Ni;
}
var cp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp;
function gI() {
  return lp || (lp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = zc, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    cp.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function E(x) {
            if (!O) {
              if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return y = N;
              }
              return y = x;
            }
            if (N = y, o(v, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
          }
          var O = !1, v, y, m = l === void 0 ? null : l;
          return [
            function() {
              return E(f());
            },
            m === null ? void 0 : function() {
              return E(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), cp;
}
process.env.NODE_ENV === "production" ? mI() : gI();
function bI(e) {
  e();
}
let ly = bI;
const hI = (e) => ly = e, yI = () => ly, up = Symbol.for("react-redux-context"), dp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function vI() {
  var e;
  if (!D.createContext) return {};
  const t = (e = dp[up]) != null ? e : dp[up] = /* @__PURE__ */ new Map();
  let r = t.get(D.createContext);
  return r || (r = D.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(D.createContext, r)), r;
}
const EI = /* @__PURE__ */ vI(), xI = () => {
  throw new Error("uSES not initialized!");
};
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, zr.apply(null, arguments);
}
function uy(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Za = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pp;
function wI() {
  if (pp) return Oe;
  pp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  function y(m) {
    return v(m) === u;
  }
  return Oe.AsyncMode = c, Oe.ConcurrentMode = u, Oe.ContextConsumer = s, Oe.ContextProvider = a, Oe.Element = t, Oe.ForwardRef = f, Oe.Fragment = o, Oe.Lazy = h, Oe.Memo = g, Oe.Portal = r, Oe.Profiler = i, Oe.StrictMode = n, Oe.Suspense = l, Oe.isAsyncMode = function(m) {
    return y(m) || v(m) === c;
  }, Oe.isConcurrentMode = y, Oe.isContextConsumer = function(m) {
    return v(m) === s;
  }, Oe.isContextProvider = function(m) {
    return v(m) === a;
  }, Oe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Oe.isForwardRef = function(m) {
    return v(m) === f;
  }, Oe.isFragment = function(m) {
    return v(m) === o;
  }, Oe.isLazy = function(m) {
    return v(m) === h;
  }, Oe.isMemo = function(m) {
    return v(m) === g;
  }, Oe.isPortal = function(m) {
    return v(m) === r;
  }, Oe.isProfiler = function(m) {
    return v(m) === i;
  }, Oe.isStrictMode = function(m) {
    return v(m) === n;
  }, Oe.isSuspense = function(m) {
    return v(m) === l;
  }, Oe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === E || m.$$typeof === O || m.$$typeof === b);
  }, Oe.typeOf = v, Oe;
}
var Be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp;
function SI() {
  return fp || (fp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function v(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === l || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === p || w.$$typeof === E || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ne = w.$$typeof;
        switch (ne) {
          case t:
            var S = w.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var m = c, x = u, N = s, C = a, R = t, $ = f, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === c;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function H(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === f;
    }
    function Q(w) {
      return y(w) === o;
    }
    function de(w) {
      return y(w) === h;
    }
    function q(w) {
      return y(w) === g;
    }
    function J(w) {
      return y(w) === r;
    }
    function L(w) {
      return y(w) === i;
    }
    function Z(w) {
      return y(w) === n;
    }
    function he(w) {
      return y(w) === l;
    }
    Be.AsyncMode = m, Be.ConcurrentMode = x, Be.ContextConsumer = N, Be.ContextProvider = C, Be.Element = R, Be.ForwardRef = $, Be.Fragment = A, Be.Lazy = P, Be.Memo = T, Be.Portal = j, Be.Profiler = k, Be.StrictMode = V, Be.Suspense = W, Be.isAsyncMode = G, Be.isConcurrentMode = z, Be.isContextConsumer = B, Be.isContextProvider = H, Be.isElement = Y, Be.isForwardRef = K, Be.isFragment = Q, Be.isLazy = de, Be.isMemo = q, Be.isPortal = J, Be.isProfiler = L, Be.isStrictMode = Z, Be.isSuspense = he, Be.isValidElementType = v, Be.typeOf = y;
  }()), Be;
}
process.env.NODE_ENV === "production" ? Za.exports = wI() : Za.exports = SI();
var OI = Za.exports, Uc = OI, NI = {
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
}, DI = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, CI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, dy = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Hc = {};
Hc[Uc.ForwardRef] = CI;
Hc[Uc.Memo] = dy;
function mp(e) {
  return Uc.isMemo(e) ? dy : Hc[e.$$typeof] || NI;
}
var _I = Object.defineProperty, II = Object.getOwnPropertyNames, gp = Object.getOwnPropertySymbols, PI = Object.getOwnPropertyDescriptor, $I = Object.getPrototypeOf, bp = Object.prototype;
function py(e, t, r) {
  if (typeof t != "string") {
    if (bp) {
      var o = $I(t);
      o && o !== bp && py(e, o, r);
    }
    var n = II(t);
    gp && (n = n.concat(gp(t)));
    for (var i = mp(e), a = mp(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!DI[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = PI(t, c);
        try {
          _I(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var AI = py;
const hp = /* @__PURE__ */ dI(AI);
var Qa = { exports: {} }, Ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp;
function TI() {
  if (yp) return Ne;
  yp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Ne.ContextConsumer = a, Ne.ContextProvider = i, Ne.Element = e, Ne.ForwardRef = c, Ne.Fragment = r, Ne.Lazy = d, Ne.Memo = l, Ne.Portal = t, Ne.Profiler = n, Ne.StrictMode = o, Ne.Suspense = u, Ne.SuspenseList = f, Ne.isAsyncMode = function() {
    return !1;
  }, Ne.isConcurrentMode = function() {
    return !1;
  }, Ne.isContextConsumer = function(p) {
    return b(p) === a;
  }, Ne.isContextProvider = function(p) {
    return b(p) === i;
  }, Ne.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ne.isForwardRef = function(p) {
    return b(p) === c;
  }, Ne.isFragment = function(p) {
    return b(p) === r;
  }, Ne.isLazy = function(p) {
    return b(p) === d;
  }, Ne.isMemo = function(p) {
    return b(p) === l;
  }, Ne.isPortal = function(p) {
    return b(p) === t;
  }, Ne.isProfiler = function(p) {
    return b(p) === n;
  }, Ne.isStrictMode = function(p) {
    return b(p) === o;
  }, Ne.isSuspense = function(p) {
    return b(p) === u;
  }, Ne.isSuspenseList = function(p) {
    return b(p) === f;
  }, Ne.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Ne.typeOf = b, Ne;
}
var Fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function RI() {
  return vp || (vp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, E = !1, O = !1, v;
    v = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === f || E || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === v || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var fe = S.type;
            switch (fe) {
              case r:
              case n:
              case o:
              case u:
              case f:
                return fe;
              default:
                var U = fe && fe.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return U;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = a, N = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = f, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return m(S) === a;
    }
    function Y(S) {
      return m(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Q(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function q(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function he(S) {
      return m(S) === o;
    }
    function w(S) {
      return m(S) === u;
    }
    function ne(S) {
      return m(S) === f;
    }
    Fe.ContextConsumer = x, Fe.ContextProvider = N, Fe.Element = C, Fe.ForwardRef = R, Fe.Fragment = $, Fe.Lazy = A, Fe.Memo = P, Fe.Portal = T, Fe.Profiler = j, Fe.StrictMode = k, Fe.Suspense = V, Fe.SuspenseList = W, Fe.isAsyncMode = z, Fe.isConcurrentMode = B, Fe.isContextConsumer = H, Fe.isContextProvider = Y, Fe.isElement = K, Fe.isForwardRef = Q, Fe.isFragment = de, Fe.isLazy = q, Fe.isMemo = J, Fe.isPortal = L, Fe.isProfiler = Z, Fe.isStrictMode = he, Fe.isSuspense = w, Fe.isSuspenseList = ne, Fe.isValidElementType = y, Fe.typeOf = m;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? Qa.exports = TI() : Qa.exports = RI();
var Ep = Qa.exports;
function qc(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Di(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || qc(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function VI(e, t, r) {
  Di(e, "mapStateToProps"), Di(t, "mapDispatchToProps"), Di(r, "mergeProps");
}
const MI = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function LI(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(O, v) {
    return c = O, u = v, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const O = e(c, u), v = !a(O, f);
    return f = O, v && (d = r(f, l, u)), d;
  }
  function E(O, v) {
    const y = !i(v, u), m = !n(O, c, v, u);
    return c = O, u = v, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(O, v) {
    return s ? E(O, v) : g(O, v);
  };
}
function BI(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = uy(t, MI);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && VI(a, s, c), LI(a, s, c, e, i);
}
function FI(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function WI(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function fy(e, t, r) {
  WI(e) || qc(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function es(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function xp(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function my(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = xp(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = xp(s), s = n(i, a)), process.env.NODE_ENV !== "production" && fy(s, o, t), s;
    }, n;
  };
}
function Yc(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function jI(e) {
  return e && typeof e == "object" ? es((t) => (
    // @ts-ignore
    FI(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    my(e, "mapDispatchToProps")
  ) : Yc(e, "mapDispatchToProps") : es((t) => ({
    dispatch: t
  }));
}
function GI(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    my(e, "mapStateToProps")
  ) : Yc(e, "mapStateToProps") : es(() => ({}));
}
function kI(e, t, r) {
  return zr({}, r, e, t);
}
function zI(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && fy(i, r, "mergeProps")), i;
    };
  };
}
function UI(e) {
  return e ? typeof e == "function" ? zI(e) : Yc(e, "mergeProps") : () => kI;
}
function HI() {
  const e = yI();
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
const wp = {
  notify() {
  },
  get: () => []
};
function qI(e, t) {
  let r, o = wp, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let E = !1;
    return () => {
      E || (E = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = HI());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = wp);
  }
  function d() {
    i || (i = !0, f());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const YI = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ts = YI ? D.useLayoutEffect : D.useEffect;
function Sp(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ci(e, t) {
  if (Sp(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Sp(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const KI = ["reactReduxForwardedRef"];
let gy = xI;
const XI = (e) => {
  gy = e;
}, JI = [null, null], ZI = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function QI(e, t, r) {
  ts(() => e(...t), r);
}
function eP(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function tP(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (E) {
      p = E, d = E;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function rP(e, t) {
  return e === t;
}
let Op = !1;
function by(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = rP,
  areOwnPropsEqual: i = Ci,
  areStatePropsEqual: a = Ci,
  areMergedPropsEqual: s = Ci,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = EI
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Op && (Op = !0, qc('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = GI(e), d = jI(t), g = UI(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Ep.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ZI(b)}`);
    const p = b.displayName || b.name || "Component", E = `Connect(${p})`, O = {
      shouldHandleStateChanges: h,
      displayName: E,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(m) {
      const [x, N, C] = D.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = uy(m, KI);
        return [m.context, L, Z];
      }, [m]), R = D.useMemo(() => x && x.Consumer && // @ts-ignore
      Ep.isContextConsumer(/* @__PURE__ */ D.createElement(x.Consumer, null)) ? x : f, [x, f]), $ = D.useContext(R), A = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const T = A ? m.store : $.store, j = P ? $.getServerState : T.getState, k = D.useMemo(() => BI(T.dispatch, O), [T]), [V, W] = D.useMemo(() => {
        if (!h) return JI;
        const L = qI(T, A ? void 0 : $.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, A, $]), F = D.useMemo(() => A ? $ : zr({}, $, {
        subscription: V
      }), [A, $, V]), G = D.useRef(), z = D.useRef(C), B = D.useRef(), H = D.useRef(!1);
      D.useRef(!1);
      const Y = D.useRef(!1), K = D.useRef();
      ts(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Q = D.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = D.useMemo(() => (L) => V ? tP(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        H,
        Y,
        B,
        W,
        L
      ) : () => {
      }, [V]);
      QI(eP, [z, G, H, C, B, W]);
      let q;
      try {
        q = gy(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Q,
          j ? () => k(j(), C) : Q
        );
      } catch (L) {
        throw K.current && (L.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), L;
      }
      ts(() => {
        K.current = void 0, B.current = void 0, G.current = q;
      });
      const J = D.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ D.createElement(b, zr({}, q, {
          ref: N
        }))
      ), [N, b, q]);
      return D.useMemo(() => h ? /* @__PURE__ */ D.createElement(R.Provider, {
        value: F
      }, J) : J, [R, J, F]);
    }
    const y = D.memo(v);
    if (y.WrappedComponent = b, y.displayName = v.displayName = E, c) {
      const m = D.forwardRef(function(x, N) {
        return /* @__PURE__ */ D.createElement(y, zr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = E, m.WrappedComponent = b, hp(m, b);
    }
    return hp(y, b);
  };
}
XI(zc.useSyncExternalStore);
hI(fr);
function nP(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function hy(e, t) {
  var r = Xe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && nP(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return pe(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function oP(e, t) {
  return hy(function() {
    return e;
  }, t);
}
var ft = hy, nt = oP, iP = process.env.NODE_ENV === "production", _i = "Invariant failed";
function Np(e, t) {
  if (iP)
    throw new Error(_i);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(_i, ": ").concat(r) : _i;
  throw new Error(o);
}
var Mr = function(e) {
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
}, yy = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Dp = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, aP = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Ii = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Kc = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Ii : r, n = e.border, i = n === void 0 ? Ii : n, a = e.padding, s = a === void 0 ? Ii : a, c = Mr(yy(t, o)), u = Mr(Dp(t, i)), f = Mr(Dp(u, s));
  return {
    marginBox: c,
    borderBox: Mr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, Mt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Np(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Np()), o;
}, sP = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, cP = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = aP(r, t);
  return Kc({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, rs = function(e, t) {
  return t === void 0 && (t = sP()), cP(e, t);
}, vy = function(e, t) {
  var r = {
    top: Mt(t.marginTop),
    right: Mt(t.marginRight),
    bottom: Mt(t.marginBottom),
    left: Mt(t.marginLeft)
  }, o = {
    top: Mt(t.paddingTop),
    right: Mt(t.paddingRight),
    bottom: Mt(t.paddingBottom),
    left: Mt(t.paddingLeft)
  }, n = {
    top: Mt(t.borderTopWidth),
    right: Mt(t.borderRightWidth),
    bottom: Mt(t.borderBottomWidth),
    left: Mt(t.borderLeftWidth)
  };
  return Kc({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, Ey = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return vy(t, r);
}, Cp = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function lP(e, t) {
  return !!(e === t || Cp(e) && Cp(t));
}
function uP(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!lP(e[r], t[r]))
      return !1;
  return !0;
}
function xt(e, t) {
  t === void 0 && (t = uP);
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
var dP = function(e) {
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
const pP = process.env.NODE_ENV === "production", fP = /[ \t]{2,}/g, mP = /^[ \t]*/gm, _p = (e) => e.replace(fP, " ").replace(mP, "").trim(), gP = (e) => _p(`
  %c@hello-pangea/dnd

  %c${_p(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), bP = (e) => [gP(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], hP = "__@hello-pangea/dnd-disable-dev-warnings";
function xy(e, t) {
  pP || typeof window < "u" && window[hP] || console[e](...bP(t));
}
const ir = xy.bind(null, "warn"), ns = xy.bind(null, "error");
function yP() {
}
function vP(e, t) {
  return {
    ...e,
    ...t
  };
}
function EP(e, t, r) {
  const o = t.map((n) => {
    const i = vP(r, n.options);
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
const xP = process.env.NODE_ENV === "production", Ip = "Invariant failed";
class Pn extends Error {
}
Pn.prototype.toString = function() {
  return this.message;
};
function ie(e, t) {
  throw xP ? new Pn(Ip) : new Pn(`${Ip}: ${t || ""}`);
}
class zU extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = yP, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && ir(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Pn && (r.preventDefault(), process.env.NODE_ENV !== "production" && ns(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = EP(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Pn) {
      process.env.NODE_ENV !== "production" && ns(t.message), this.setState({});
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
const _r = {
  x: 0,
  y: 0
}, wP = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), SP = (e, t) => e.x === t.x && e.y === t.y, OP = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), NP = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var DP = (e, t) => {
  const r = Mr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const CP = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), _P = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, IP = (e, t) => t ? CP(e, t.scroll.diff.displacement) : e, PP = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, $P = (e, t) => t && t.shouldClipSubject ? DP(t.pageMarginBox, e) : Mr(e);
var AP = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = IP(e.marginBox, o), i = PP(n, r, t), a = $P(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
xt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
xt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const TP = xt((e) => Object.values(e)), RP = xt((e) => Object.values(e));
xt((e, t) => RP(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function VP(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
xt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const MP = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, LP = {
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
xt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: NP(e.line, r)
  };
});
var co = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const BP = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), FP = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Xc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, $n = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, WP = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, br = `${WP.outOfTheWay}s ${Xc.outOfTheWay}`, lo = {
  fluid: `opacity ${br}`,
  snap: `transform ${br}, opacity ${br}`,
  drop: (e) => {
    const t = `${e}s ${Xc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${br}`,
  placeholder: `height ${br}, width ${br}, margin ${br}`
}, Pp = (e) => SP(e, _r) ? void 0 : `translate(${e.x}px, ${e.y}px)`, os = {
  moveTo: Pp,
  drop: (e, t) => {
    const r = Pp(e);
    if (r)
      return t ? `${r} scale(${$n.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var wy = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = wP({
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
}, jP = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot find document.documentElement") : ie()), e;
}, GP = () => {
  const e = jP();
  return wy({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
xt((e) => TP(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Sy = "data-rfd", $p = (() => {
  const e = `${Sy}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ap = {
  contextId: `${Sy}-scroll-container-context-id`
}, kP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Yt : pe;
var dn = kP;
function zP(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var UP = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Oy(e) {
  return e instanceof UP(e).HTMLElement;
}
function HP(e, t) {
  const r = `[${$p.contextId}="${e}"]`, o = zP(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && ir(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute($p.draggableId) === t);
  return n ? Oy(n) ? n : (process.env.NODE_ENV !== "production" && ir("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ir(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Ny = I.createContext(null), qP = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot find document.body") : ie()), e;
};
let YP = 0;
const Dy = {
  separator: "::"
};
function KP(e, t = Dy) {
  return ft(() => `${e}${t.separator}${YP++}`, [t.separator, e]);
}
function XP(e, t = Dy) {
  const r = I.useId();
  return ft(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Cy = "useId" in I ? XP : KP, Jc = I.createContext(null);
function _y(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Zc(e, t) {
  _y(() => {
    pe(() => {
      try {
        e();
      } catch (r) {
        ns(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function JP(e) {
  const t = M(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function Qc(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Tp = {
  dragging: 5e3,
  dropAnimating: 4500
}, ZP = (e, t) => t ? lo.drop(t.duration) : e ? lo.snap : lo.fluid, QP = (e, t) => {
  if (e)
    return t ? $n.opacity.drop : $n.opacity.combining;
}, e$ = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function t$(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = e$(e), s = !!n, c = s ? os.drop(r, i) : os.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: ZP(a, n),
    transform: c,
    opacity: QP(i, s),
    zIndex: s ? Tp.dropAnimating : Tp.dragging,
    pointerEvents: "none"
  };
}
function r$(e) {
  return {
    transform: os.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function n$(e) {
  return e.type === "DRAGGING" ? t$(e) : r$(e);
}
function o$(e, t, r = _r) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = vy(n, o), a = rs(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function i$(e) {
  const t = Cy("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = ft(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = nt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot get dimension when no ref is set") : ie()), o$(r, h, g);
  }, [r, n]), f = ft(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  dn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), dn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var el = I.createContext(null);
function Iy(e) {
  e && Oy(e) || (process.env.NODE_ENV !== "production" ? ie(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ie());
}
function a$(e, t, r) {
  Zc(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ie(!1, "Draggable requires a draggableId") : ie(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ie(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ie(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ie(!1, `${o(n)} requires an integer index prop`) : ie(!1)), e.mapped.type !== "DRAGGING" && (Iy(r()), e.isEnabled && (HP(t, n) || (process.env.NODE_ENV !== "production" ? ie(!1, `${o(n)} Unable to find drag handle`) : ie(!1))));
  });
}
function s$(e) {
  _y(() => {
    const t = M(e);
    Zc(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ie(!1, "Draggable isClone prop value changed during component life") : ie(!1));
    }, [e]);
  });
}
function $o(e) {
  const t = Ct(e);
  return t || (process.env.NODE_ENV !== "production" ? ie(!1, "Could not find required context") : ie()), t;
}
function c$(e) {
  e.preventDefault();
}
const l$ = (e) => {
  const t = M(null), r = nt((x = null) => {
    t.current = x;
  }, []), o = nt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = $o(Jc), {
    type: s,
    droppableId: c
  } = $o(el), u = ft(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: E
  } = e;
  if (a$(e, n, o), s$(b), !b) {
    const x = ft(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    i$(x);
  }
  const O = ft(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: c$
  } : null, [n, i, l, d]), v = nt((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? E() : Kt(E));
  }, [E, p]), y = ft(() => {
    const x = n$(p), N = p.type === "DRAGGING" && p.dropping ? v : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [n, O, l, p, v, r]), m = ft(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var u$ = l$, Py = (e, t) => e === t, $y = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const d$ = (e) => e.combine ? e.combine.draggableId : null, p$ = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function f$() {
  const e = xt((o, n) => ({
    x: o,
    y: n
  })), t = xt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = xt((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Qc(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = co(o.impact), c = p$(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = $y(c), l = d$(c), d = {
        duration: o.dropDuration,
        curve: Xc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? $n.opacity.drop : null,
        scale: l ? $n.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function Ay(e = null) {
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
const m$ = {
  mapped: {
    type: "SECONDARY",
    offset: _r,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ay(null)
  }
};
function g$() {
  const e = xt((i, a) => ({
    x: i,
    y: a
  })), t = xt(Ay), r = xt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(_r, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = VP(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = OP(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Qc(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const b$ = () => {
  const e = f$(), t = g$();
  return (r, o) => e(r, o) || t(r, o) || m$;
}, h$ = {
  dropAnimationFinished: FP
}, y$ = by(b$, h$, null, {
  context: Ny,
  areStatePropsEqual: Py
})(u$);
var v$ = y$;
function E$(e) {
  return $o(el).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(v$, e);
}
const tl = (e) => (t) => e === t, x$ = tl("scroll"), w$ = tl("auto"), S$ = tl("visible"), Rp = (e, t) => t(e.overflowX) || t(e.overflowY), O$ = (e, t) => t(e.overflowX) && t(e.overflowY), Ty = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Rp(r, x$) || Rp(r, w$);
}, N$ = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = qP(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ie()), !Ty(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return O$(o, S$) || process.env.NODE_ENV !== "production" && ir(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, rl = (e) => e == null ? null : e === document.body ? N$() ? e : null : e === document.documentElement ? null : Ty(e) ? e : rl(e.parentElement);
var D$ = (e) => {
  !e || !rl(e.parentElement) || process.env.NODE_ENV !== "production" && ir(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, is = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ry = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ry(e.parentElement) : !1;
var C$ = (e) => {
  const t = rl(e), r = Ry(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, _$ = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
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
    } = s, g = wy({
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
        max: g,
        diff: {
          value: _r,
          displacement: _r
        }
      }
    };
  })(), u = n === "vertical" ? MP : LP, f = AP({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const I$ = (e, t) => {
  const r = Ey(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = yy({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Kc({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var P$ = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = I$(e, c), f = rs(u, o), l = (() => {
    if (!c)
      return null;
    const d = Ey(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: rs(d, o),
      scroll: is(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return _$({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const $$ = {
  passive: !1
}, A$ = {
  passive: !0
};
var Vp = (e) => e.shouldPublishImmediately ? $$ : A$;
const Zn = (e) => e && e.env.closestScrollable || null;
function T$(e) {
  const t = M(null), r = $o(Jc), o = Cy("droppable"), {
    registry: n,
    marshal: i
  } = r, a = JP(e), s = ft(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = ft(() => xt((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? ie(!1, "Can only update scroll when dragging") : ie());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = nt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? _r : is(y.env.closestScrollable);
  }, []), l = nt(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = ft(() => dP(l), [l]), g = nt(() => {
    const y = t.current, m = Zn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? ie(!1, "Could not find scroll options while scrolling") : ie()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = nt((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot collect a droppable while a drag is occurring") : ie());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot collect without a droppable ref") : ie());
    const C = C$(N), R = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = R;
    const $ = P$({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Ap.contextId, r.contextId), A.addEventListener("scroll", g, Vp(R.scrollOptions)), process.env.NODE_ENV !== "production" && D$(A)), $;
  }, [r.contextId, s, g, a]), b = nt(() => {
    const y = t.current, m = Zn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? ie(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ie()), is(m);
  }, []), p = nt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot stop drag when no active drag") : ie());
    const m = Zn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Ap.contextId), m.removeEventListener("scroll", g, Vp(y.scrollOptions)));
  }, [g, d]), E = nt((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot scroll when there is no drag") : ie());
    const x = Zn(m);
    x || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot scroll a droppable with no closest scrollable") : ie()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), O = ft(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: E
  }), [p, h, b, E]), v = ft(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  dn(() => (c.current = v.descriptor, n.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && ir("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(v);
  }), [O, s, p, v, i, n.droppable]), dn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), dn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Pi() {
}
const R$ = {
  width: 0,
  height: 0,
  margin: _P
}, V$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? R$ : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, M$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = V$({
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
    transition: r !== "none" ? lo.placeholder : null
  };
}, L$ = (e) => {
  const t = M(null), r = nt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Xe(e.animate === "open");
  pe(() => s ? o !== "open" ? (r(), c(!1), Pi) : t.current ? Pi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Pi, [o, s, r]);
  const u = nt((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = M$({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var B$ = I.memo(L$);
function $i(e) {
  return typeof e == "boolean";
}
function Ai(e, t) {
  t.forEach((r) => r(e));
}
const F$ = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ie(!1, "A Droppable requires a droppableId prop") : ie()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ie(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ie());
}, function({
  props: e
}) {
  $i(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ie(!1, "isDropDisabled must be a boolean") : ie()), $i(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ie(!1, "isCombineEnabled must be a boolean") : ie()), $i(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ie(!1, "ignoreContainerClipping must be a boolean") : ie());
}, function({
  getDroppableRef: e
}) {
  Iy(e());
}], W$ = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && ir(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], j$ = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ie(!1, "Must provide a clone render function (renderClone) for virtual lists") : ie());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ie(!1, "Expected virtual list to not have a placeholder") : ie());
}];
function G$(e) {
  Zc(() => {
    Ai(e, F$), e.props.mode === "standard" && Ai(e, W$), e.props.mode === "virtual" && Ai(e, j$);
  });
}
class k$ extends I.PureComponent {
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
const z$ = (e) => {
  const t = Ct(Jc);
  t || (process.env.NODE_ENV !== "production" ? ie(!1, "Could not find app context") : ie());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: E
  } = e, O = nt(() => n.current, []), v = nt((P = null) => {
    n.current = P;
  }, []), y = nt(() => i.current, []), m = nt((P = null) => {
    i.current = P;
  }, []);
  G$({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const x = nt(() => {
    o() && p({
      maxScroll: GP()
    });
  }, [o, p]);
  T$({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const N = ft(() => I.createElement(k$, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => I.createElement(B$, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: j,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = ft(() => ({
    innerRef: v,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, v]), R = b ? b.dragging.draggableId : null, $ = ft(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = I.createElement(E$, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return pr.createPortal(j, E());
  }
  return I.createElement(el.Provider, {
    value: $
  }, a(C, h), A());
};
var U$ = z$;
function H$() {
  return document.body || (process.env.NODE_ENV !== "production" ? ie(!1, "document.body is not ready") : ie()), document.body;
}
const Mp = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: H$
}, Vy = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Mp)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Mp[r]
    });
  return t;
}, Ti = (e, t) => e === t.droppable.type, Lp = (e, t) => t.draggables[e.draggable.id], q$ = () => {
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
  }, r = xt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = xt((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: f,
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
  return (n, i) => {
    const a = Vy(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (Qc(n)) {
      const l = n.critical;
      if (!Ti(c, l))
        return t;
      const d = Lp(l, n.dimensions), g = co(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Ti(c, l.critical))
        return t;
      const d = Lp(l.critical, n.dimensions);
      return o(s, u, $y(l.result) === s, co(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Ti(c, l.critical))
        return t;
      const d = co(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, Y$ = {
  updateViewportMaxScroll: BP
};
by(q$, Y$, (e, t, r) => ({
  ...Vy(r),
  ...e,
  ...t
}), {
  context: Ny,
  areStatePropsEqual: Py
})(U$);
var Bp;
(function(e) {
  e.event = "event", e.props = "prop";
})(Bp || (Bp = {}));
var Fp = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Fp(), "" + Fp();
function K$(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var as = { exports: {} }, Ri = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wp;
function X$() {
  if (Wp) return Ri;
  Wp = 1;
  var e = I;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Ri.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Ri;
}
var jp = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gp;
function J$() {
  return Gp || (Gp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var E = p[0].inst, O = p[1];
      return c(
        function() {
          E.value = b, E.getSnapshot = h, r(E) && O({ inst: E });
        },
        [g, b, h]
      ), s(
        function() {
          return r(E) && O({ inst: E }), g(function() {
            r(E) && O({ inst: E });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    jp.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), jp;
}
process.env.NODE_ENV === "production" ? as.exports = X$() : as.exports = J$();
var nl = as.exports, Vi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kp;
function Z$() {
  if (kp) return Vi;
  kp = 1;
  var e = I, t = nl;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Vi.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function E(x) {
          if (!O) {
            if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return y = N;
            }
            return y = x;
          }
          if (N = y, o(v, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
        }
        var O = !1, v, y, m = l === void 0 ? null : l;
        return [
          function() {
            return E(f());
          },
          m === null ? void 0 : function() {
            return E(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Vi;
}
var zp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Up;
function Q$() {
  return Up || (Up = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = nl, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    zp.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function E(x) {
            if (!O) {
              if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return y = N;
              }
              return y = x;
            }
            if (N = y, o(v, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
          }
          var O = !1, v, y, m = l === void 0 ? null : l;
          return [
            function() {
              return E(f());
            },
            m === null ? void 0 : function() {
              return E(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), zp;
}
process.env.NODE_ENV === "production" ? Z$() : Q$();
function eA(e) {
  e();
}
let My = eA;
const tA = (e) => My = e, rA = () => My, Hp = Symbol.for("react-redux-context"), qp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function nA() {
  var e;
  if (!D.createContext) return {};
  const t = (e = qp[Hp]) != null ? e : qp[Hp] = /* @__PURE__ */ new Map();
  let r = t.get(D.createContext);
  return r || (r = D.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(D.createContext, r)), r;
}
const oA = /* @__PURE__ */ nA(), iA = () => {
  throw new Error("uSES not initialized!");
};
function Ur() {
  return Ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Ur.apply(null, arguments);
}
function Ly(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var ss = { exports: {} }, De = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yp;
function aA() {
  if (Yp) return De;
  Yp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  function y(m) {
    return v(m) === u;
  }
  return De.AsyncMode = c, De.ConcurrentMode = u, De.ContextConsumer = s, De.ContextProvider = a, De.Element = t, De.ForwardRef = f, De.Fragment = o, De.Lazy = h, De.Memo = g, De.Portal = r, De.Profiler = i, De.StrictMode = n, De.Suspense = l, De.isAsyncMode = function(m) {
    return y(m) || v(m) === c;
  }, De.isConcurrentMode = y, De.isContextConsumer = function(m) {
    return v(m) === s;
  }, De.isContextProvider = function(m) {
    return v(m) === a;
  }, De.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, De.isForwardRef = function(m) {
    return v(m) === f;
  }, De.isFragment = function(m) {
    return v(m) === o;
  }, De.isLazy = function(m) {
    return v(m) === h;
  }, De.isMemo = function(m) {
    return v(m) === g;
  }, De.isPortal = function(m) {
    return v(m) === r;
  }, De.isProfiler = function(m) {
    return v(m) === i;
  }, De.isStrictMode = function(m) {
    return v(m) === n;
  }, De.isSuspense = function(m) {
    return v(m) === l;
  }, De.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === E || m.$$typeof === O || m.$$typeof === b);
  }, De.typeOf = v, De;
}
var We = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kp;
function sA() {
  return Kp || (Kp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function v(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === l || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === p || w.$$typeof === E || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ne = w.$$typeof;
        switch (ne) {
          case t:
            var S = w.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var m = c, x = u, N = s, C = a, R = t, $ = f, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === c;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function H(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === f;
    }
    function Q(w) {
      return y(w) === o;
    }
    function de(w) {
      return y(w) === h;
    }
    function q(w) {
      return y(w) === g;
    }
    function J(w) {
      return y(w) === r;
    }
    function L(w) {
      return y(w) === i;
    }
    function Z(w) {
      return y(w) === n;
    }
    function he(w) {
      return y(w) === l;
    }
    We.AsyncMode = m, We.ConcurrentMode = x, We.ContextConsumer = N, We.ContextProvider = C, We.Element = R, We.ForwardRef = $, We.Fragment = A, We.Lazy = P, We.Memo = T, We.Portal = j, We.Profiler = k, We.StrictMode = V, We.Suspense = W, We.isAsyncMode = G, We.isConcurrentMode = z, We.isContextConsumer = B, We.isContextProvider = H, We.isElement = Y, We.isForwardRef = K, We.isFragment = Q, We.isLazy = de, We.isMemo = q, We.isPortal = J, We.isProfiler = L, We.isStrictMode = Z, We.isSuspense = he, We.isValidElementType = v, We.typeOf = y;
  }()), We;
}
process.env.NODE_ENV === "production" ? ss.exports = aA() : ss.exports = sA();
var cA = ss.exports, ol = cA, lA = {
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
}, uA = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, dA = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, By = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, il = {};
il[ol.ForwardRef] = dA;
il[ol.Memo] = By;
function Xp(e) {
  return ol.isMemo(e) ? By : il[e.$$typeof] || lA;
}
var pA = Object.defineProperty, fA = Object.getOwnPropertyNames, Jp = Object.getOwnPropertySymbols, mA = Object.getOwnPropertyDescriptor, gA = Object.getPrototypeOf, Zp = Object.prototype;
function Fy(e, t, r) {
  if (typeof t != "string") {
    if (Zp) {
      var o = gA(t);
      o && o !== Zp && Fy(e, o, r);
    }
    var n = fA(t);
    Jp && (n = n.concat(Jp(t)));
    for (var i = Xp(e), a = Xp(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!uA[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = mA(t, c);
        try {
          pA(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var bA = Fy;
const Qp = /* @__PURE__ */ K$(bA);
var cs = { exports: {} }, Ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef;
function hA() {
  if (ef) return Ce;
  ef = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Ce.ContextConsumer = a, Ce.ContextProvider = i, Ce.Element = e, Ce.ForwardRef = c, Ce.Fragment = r, Ce.Lazy = d, Ce.Memo = l, Ce.Portal = t, Ce.Profiler = n, Ce.StrictMode = o, Ce.Suspense = u, Ce.SuspenseList = f, Ce.isAsyncMode = function() {
    return !1;
  }, Ce.isConcurrentMode = function() {
    return !1;
  }, Ce.isContextConsumer = function(p) {
    return b(p) === a;
  }, Ce.isContextProvider = function(p) {
    return b(p) === i;
  }, Ce.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ce.isForwardRef = function(p) {
    return b(p) === c;
  }, Ce.isFragment = function(p) {
    return b(p) === r;
  }, Ce.isLazy = function(p) {
    return b(p) === d;
  }, Ce.isMemo = function(p) {
    return b(p) === l;
  }, Ce.isPortal = function(p) {
    return b(p) === t;
  }, Ce.isProfiler = function(p) {
    return b(p) === n;
  }, Ce.isStrictMode = function(p) {
    return b(p) === o;
  }, Ce.isSuspense = function(p) {
    return b(p) === u;
  }, Ce.isSuspenseList = function(p) {
    return b(p) === f;
  }, Ce.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Ce.typeOf = b, Ce;
}
var je = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tf;
function yA() {
  return tf || (tf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, E = !1, O = !1, v;
    v = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === f || E || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === v || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var fe = S.type;
            switch (fe) {
              case r:
              case n:
              case o:
              case u:
              case f:
                return fe;
              default:
                var U = fe && fe.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return U;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = a, N = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = f, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return m(S) === a;
    }
    function Y(S) {
      return m(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Q(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function q(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function he(S) {
      return m(S) === o;
    }
    function w(S) {
      return m(S) === u;
    }
    function ne(S) {
      return m(S) === f;
    }
    je.ContextConsumer = x, je.ContextProvider = N, je.Element = C, je.ForwardRef = R, je.Fragment = $, je.Lazy = A, je.Memo = P, je.Portal = T, je.Profiler = j, je.StrictMode = k, je.Suspense = V, je.SuspenseList = W, je.isAsyncMode = z, je.isConcurrentMode = B, je.isContextConsumer = H, je.isContextProvider = Y, je.isElement = K, je.isForwardRef = Q, je.isFragment = de, je.isLazy = q, je.isMemo = J, je.isPortal = L, je.isProfiler = Z, je.isStrictMode = he, je.isSuspense = w, je.isSuspenseList = ne, je.isValidElementType = y, je.typeOf = m;
  }()), je;
}
process.env.NODE_ENV === "production" ? cs.exports = hA() : cs.exports = yA();
var rf = cs.exports;
function al(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Mi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || al(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function vA(e, t, r) {
  Mi(e, "mapStateToProps"), Mi(t, "mapDispatchToProps"), Mi(r, "mergeProps");
}
const EA = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function xA(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(O, v) {
    return c = O, u = v, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const O = e(c, u), v = !a(O, f);
    return f = O, v && (d = r(f, l, u)), d;
  }
  function E(O, v) {
    const y = !i(v, u), m = !n(O, c, v, u);
    return c = O, u = v, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(O, v) {
    return s ? E(O, v) : g(O, v);
  };
}
function wA(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Ly(t, EA);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && vA(a, s, c), xA(a, s, c, e, i);
}
function SA(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function OA(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Wy(e, t, r) {
  OA(e) || al(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ls(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function nf(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function jy(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = nf(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = nf(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Wy(s, o, t), s;
    }, n;
  };
}
function sl(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function NA(e) {
  return e && typeof e == "object" ? ls((t) => (
    // @ts-ignore
    SA(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    jy(e, "mapDispatchToProps")
  ) : sl(e, "mapDispatchToProps") : ls((t) => ({
    dispatch: t
  }));
}
function DA(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    jy(e, "mapStateToProps")
  ) : sl(e, "mapStateToProps") : ls(() => ({}));
}
function CA(e, t, r) {
  return Ur({}, r, e, t);
}
function _A(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Wy(i, r, "mergeProps")), i;
    };
  };
}
function IA(e) {
  return e ? typeof e == "function" ? _A(e) : sl(e, "mergeProps") : () => CA;
}
function PA() {
  const e = rA();
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
const of = {
  notify() {
  },
  get: () => []
};
function $A(e, t) {
  let r, o = of, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let E = !1;
    return () => {
      E || (E = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = PA());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = of);
  }
  function d() {
    i || (i = !0, f());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const AA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", us = AA ? D.useLayoutEffect : D.useEffect;
function af(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Li(e, t) {
  if (af(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !af(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const TA = ["reactReduxForwardedRef"];
let Gy = iA;
const RA = (e) => {
  Gy = e;
}, VA = [null, null], MA = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function LA(e, t, r) {
  us(() => e(...t), r);
}
function BA(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function FA(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (E) {
      p = E, d = E;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function WA(e, t) {
  return e === t;
}
let sf = !1;
function ky(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = WA,
  areOwnPropsEqual: i = Li,
  areStatePropsEqual: a = Li,
  areMergedPropsEqual: s = Li,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = oA
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !sf && (sf = !0, al('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = DA(e), d = NA(t), g = IA(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !rf.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${MA(b)}`);
    const p = b.displayName || b.name || "Component", E = `Connect(${p})`, O = {
      shouldHandleStateChanges: h,
      displayName: E,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(m) {
      const [x, N, C] = D.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = Ly(m, TA);
        return [m.context, L, Z];
      }, [m]), R = D.useMemo(() => x && x.Consumer && // @ts-ignore
      rf.isContextConsumer(/* @__PURE__ */ D.createElement(x.Consumer, null)) ? x : f, [x, f]), $ = D.useContext(R), A = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const T = A ? m.store : $.store, j = P ? $.getServerState : T.getState, k = D.useMemo(() => wA(T.dispatch, O), [T]), [V, W] = D.useMemo(() => {
        if (!h) return VA;
        const L = $A(T, A ? void 0 : $.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, A, $]), F = D.useMemo(() => A ? $ : Ur({}, $, {
        subscription: V
      }), [A, $, V]), G = D.useRef(), z = D.useRef(C), B = D.useRef(), H = D.useRef(!1);
      D.useRef(!1);
      const Y = D.useRef(!1), K = D.useRef();
      us(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Q = D.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = D.useMemo(() => (L) => V ? FA(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        H,
        Y,
        B,
        W,
        L
      ) : () => {
      }, [V]);
      LA(BA, [z, G, H, C, B, W]);
      let q;
      try {
        q = Gy(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Q,
          j ? () => k(j(), C) : Q
        );
      } catch (L) {
        throw K.current && (L.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), L;
      }
      us(() => {
        K.current = void 0, B.current = void 0, G.current = q;
      });
      const J = D.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ D.createElement(b, Ur({}, q, {
          ref: N
        }))
      ), [N, b, q]);
      return D.useMemo(() => h ? /* @__PURE__ */ D.createElement(R.Provider, {
        value: F
      }, J) : J, [R, J, F]);
    }
    const y = D.memo(v);
    if (y.WrappedComponent = b, y.displayName = v.displayName = E, c) {
      const m = D.forwardRef(function(x, N) {
        return /* @__PURE__ */ D.createElement(y, Ur({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = E, m.WrappedComponent = b, Qp(m, b);
    }
    return Qp(y, b);
  };
}
RA(nl.useSyncExternalStore);
tA(fr);
function jA(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function zy(e, t) {
  var r = Xe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && jA(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return pe(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function GA(e, t) {
  return zy(function() {
    return e;
  }, t);
}
var mt = zy, ot = GA, kA = process.env.NODE_ENV === "production", Bi = "Invariant failed";
function cf(e, t) {
  if (kA)
    throw new Error(Bi);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Bi, ": ").concat(r) : Bi;
  throw new Error(o);
}
var Lr = function(e) {
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
}, Uy = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, lf = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, zA = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Fi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, cl = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Fi : r, n = e.border, i = n === void 0 ? Fi : n, a = e.padding, s = a === void 0 ? Fi : a, c = Lr(Uy(t, o)), u = Lr(lf(t, i)), f = Lr(lf(u, s));
  return {
    marginBox: c,
    borderBox: Lr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, Lt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? cf(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : cf()), o;
}, UA = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, HA = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = zA(r, t);
  return cl({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, ds = function(e, t) {
  return t === void 0 && (t = UA()), HA(e, t);
}, Hy = function(e, t) {
  var r = {
    top: Lt(t.marginTop),
    right: Lt(t.marginRight),
    bottom: Lt(t.marginBottom),
    left: Lt(t.marginLeft)
  }, o = {
    top: Lt(t.paddingTop),
    right: Lt(t.paddingRight),
    bottom: Lt(t.paddingBottom),
    left: Lt(t.paddingLeft)
  }, n = {
    top: Lt(t.borderTopWidth),
    right: Lt(t.borderRightWidth),
    bottom: Lt(t.borderBottomWidth),
    left: Lt(t.borderLeftWidth)
  };
  return cl({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, qy = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Hy(t, r);
}, uf = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function qA(e, t) {
  return !!(e === t || uf(e) && uf(t));
}
function YA(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!qA(e[r], t[r]))
      return !1;
  return !0;
}
function wt(e, t) {
  t === void 0 && (t = YA);
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
var KA = function(e) {
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
const XA = process.env.NODE_ENV === "production", JA = /[ \t]{2,}/g, ZA = /^[ \t]*/gm, df = (e) => e.replace(JA, " ").replace(ZA, "").trim(), QA = (e) => df(`
  %c@hello-pangea/dnd

  %c${df(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), eT = (e) => [QA(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], tT = "__@hello-pangea/dnd-disable-dev-warnings";
function Yy(e, t) {
  XA || typeof window < "u" && window[tT] || console[e](...eT(t));
}
const ar = Yy.bind(null, "warn"), ps = Yy.bind(null, "error");
function rT() {
}
function nT(e, t) {
  return {
    ...e,
    ...t
  };
}
function oT(e, t, r) {
  const o = t.map((n) => {
    const i = nT(r, n.options);
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
const iT = process.env.NODE_ENV === "production", pf = "Invariant failed";
class An extends Error {
}
An.prototype.toString = function() {
  return this.message;
};
function ae(e, t) {
  throw iT ? new An(pf) : new An(`${pf}: ${t || ""}`);
}
class UU extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = rT, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && ar(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof An && (r.preventDefault(), process.env.NODE_ENV !== "production" && ps(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = oT(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof An) {
      process.env.NODE_ENV !== "production" && ps(t.message), this.setState({});
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
const Ir = {
  x: 0,
  y: 0
}, aT = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), sT = (e, t) => e.x === t.x && e.y === t.y, cT = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), lT = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var uT = (e, t) => {
  const r = Lr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const dT = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), pT = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, fT = (e, t) => t ? dT(e, t.scroll.diff.displacement) : e, mT = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, gT = (e, t) => t && t.shouldClipSubject ? uT(t.pageMarginBox, e) : Lr(e);
var bT = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = fT(e.marginBox, o), i = mT(n, r, t), a = gT(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
wt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
wt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const hT = wt((e) => Object.values(e)), yT = wt((e) => Object.values(e));
wt((e, t) => yT(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function vT(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
wt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const ET = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, xT = {
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
wt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: lT(e.line, r)
  };
});
var uo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const wT = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ST = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), ll = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Tn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, OT = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, hr = `${OT.outOfTheWay}s ${ll.outOfTheWay}`, po = {
  fluid: `opacity ${hr}`,
  snap: `transform ${hr}, opacity ${hr}`,
  drop: (e) => {
    const t = `${e}s ${ll.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${hr}`,
  placeholder: `height ${hr}, width ${hr}, margin ${hr}`
}, ff = (e) => sT(e, Ir) ? void 0 : `translate(${e.x}px, ${e.y}px)`, fs = {
  moveTo: ff,
  drop: (e, t) => {
    const r = ff(e);
    if (r)
      return t ? `${r} scale(${Tn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Ky = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = aT({
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
}, NT = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot find document.documentElement") : ae()), e;
}, DT = () => {
  const e = NT();
  return Ky({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
wt((e) => hT(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Xy = "data-rfd", mf = (() => {
  const e = `${Xy}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), gf = {
  contextId: `${Xy}-scroll-container-context-id`
}, CT = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Yt : pe;
var pn = CT;
function _T(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var IT = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Jy(e) {
  return e instanceof IT(e).HTMLElement;
}
function PT(e, t) {
  const r = `[${mf.contextId}="${e}"]`, o = _T(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && ar(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(mf.draggableId) === t);
  return n ? Jy(n) ? n : (process.env.NODE_ENV !== "production" && ar("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ar(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Zy = I.createContext(null), $T = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot find document.body") : ae()), e;
};
let AT = 0;
const Qy = {
  separator: "::"
};
function TT(e, t = Qy) {
  return mt(() => `${e}${t.separator}${AT++}`, [t.separator, e]);
}
function RT(e, t = Qy) {
  const r = I.useId();
  return mt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var ev = "useId" in I ? RT : TT, ul = I.createContext(null);
function tv(e) {
  process.env.NODE_ENV !== "production" && e();
}
function dl(e, t) {
  tv(() => {
    pe(() => {
      try {
        e();
      } catch (r) {
        ps(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function VT(e) {
  const t = M(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function pl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const bf = {
  dragging: 5e3,
  dropAnimating: 4500
}, MT = (e, t) => t ? po.drop(t.duration) : e ? po.snap : po.fluid, LT = (e, t) => {
  if (e)
    return t ? Tn.opacity.drop : Tn.opacity.combining;
}, BT = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function FT(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = BT(e), s = !!n, c = s ? fs.drop(r, i) : fs.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: MT(a, n),
    transform: c,
    opacity: LT(i, s),
    zIndex: s ? bf.dropAnimating : bf.dragging,
    pointerEvents: "none"
  };
}
function WT(e) {
  return {
    transform: fs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function jT(e) {
  return e.type === "DRAGGING" ? FT(e) : WT(e);
}
function GT(e, t, r = Ir) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Hy(n, o), a = ds(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function kT(e) {
  const t = ev("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = mt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ot((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot get dimension when no ref is set") : ae()), GT(r, h, g);
  }, [r, n]), f = mt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  pn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), pn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var fl = I.createContext(null);
function rv(e) {
  e && Jy(e) || (process.env.NODE_ENV !== "production" ? ae(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ae());
}
function zT(e, t, r) {
  dl(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ae(!1, "Draggable requires a draggableId") : ae(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ae(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ae(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ae(!1, `${o(n)} requires an integer index prop`) : ae(!1)), e.mapped.type !== "DRAGGING" && (rv(r()), e.isEnabled && (PT(t, n) || (process.env.NODE_ENV !== "production" ? ae(!1, `${o(n)} Unable to find drag handle`) : ae(!1))));
  });
}
function UT(e) {
  tv(() => {
    const t = M(e);
    dl(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ae(!1, "Draggable isClone prop value changed during component life") : ae(!1));
    }, [e]);
  });
}
function Ao(e) {
  const t = Ct(e);
  return t || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find required context") : ae()), t;
}
function HT(e) {
  e.preventDefault();
}
const qT = (e) => {
  const t = M(null), r = ot((x = null) => {
    t.current = x;
  }, []), o = ot(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ao(ul), {
    type: s,
    droppableId: c
  } = Ao(fl), u = mt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: E
  } = e;
  if (zT(e, n, o), UT(b), !b) {
    const x = mt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    kT(x);
  }
  const O = mt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: HT
  } : null, [n, i, l, d]), v = ot((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? E() : Kt(E));
  }, [E, p]), y = mt(() => {
    const x = jT(p), N = p.type === "DRAGGING" && p.dropping ? v : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [n, O, l, p, v, r]), m = mt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var YT = qT, nv = (e, t) => e === t, ov = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const KT = (e) => e.combine ? e.combine.draggableId : null, XT = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function JT() {
  const e = wt((o, n) => ({
    x: o,
    y: n
  })), t = wt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = wt((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (pl(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = uo(o.impact), c = XT(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = ov(c), l = KT(c), d = {
        duration: o.dropDuration,
        curve: ll.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? Tn.opacity.drop : null,
        scale: l ? Tn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function iv(e = null) {
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
const ZT = {
  mapped: {
    type: "SECONDARY",
    offset: Ir,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: iv(null)
  }
};
function QT() {
  const e = wt((i, a) => ({
    x: i,
    y: a
  })), t = wt(iv), r = wt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Ir, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = vT(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = cT(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (pl(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const eR = () => {
  const e = JT(), t = QT();
  return (r, o) => e(r, o) || t(r, o) || ZT;
}, tR = {
  dropAnimationFinished: ST
}, rR = ky(eR, tR, null, {
  context: Zy,
  areStatePropsEqual: nv
})(YT);
var nR = rR;
function oR(e) {
  return Ao(fl).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(nR, e);
}
const ml = (e) => (t) => e === t, iR = ml("scroll"), aR = ml("auto"), sR = ml("visible"), hf = (e, t) => t(e.overflowX) || t(e.overflowY), cR = (e, t) => t(e.overflowX) && t(e.overflowY), av = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return hf(r, iR) || hf(r, aR);
}, lR = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = $T(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ae()), !av(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return cR(o, sR) || process.env.NODE_ENV !== "production" && ar(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, gl = (e) => e == null ? null : e === document.body ? lR() ? e : null : e === document.documentElement ? null : av(e) ? e : gl(e.parentElement);
var uR = (e) => {
  !e || !gl(e.parentElement) || process.env.NODE_ENV !== "production" && ar(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ms = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const sv = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : sv(e.parentElement) : !1;
var dR = (e) => {
  const t = gl(e), r = sv(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, pR = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
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
    } = s, g = Ky({
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
        max: g,
        diff: {
          value: Ir,
          displacement: Ir
        }
      }
    };
  })(), u = n === "vertical" ? ET : xT, f = bT({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const fR = (e, t) => {
  const r = qy(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Uy({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return cl({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var mR = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = fR(e, c), f = ds(u, o), l = (() => {
    if (!c)
      return null;
    const d = qy(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: ds(d, o),
      scroll: ms(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return pR({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const gR = {
  passive: !1
}, bR = {
  passive: !0
};
var yf = (e) => e.shouldPublishImmediately ? gR : bR;
const Qn = (e) => e && e.env.closestScrollable || null;
function hR(e) {
  const t = M(null), r = Ao(ul), o = ev("droppable"), {
    registry: n,
    marshal: i
  } = r, a = VT(e), s = mt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = mt(() => wt((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? ae(!1, "Can only update scroll when dragging") : ae());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = ot(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Ir : ms(y.env.closestScrollable);
  }, []), l = ot(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = mt(() => KA(l), [l]), g = ot(() => {
    const y = t.current, m = Qn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find scroll options while scrolling") : ae()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = ot((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot collect a droppable while a drag is occurring") : ae());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot collect without a droppable ref") : ae());
    const C = dR(N), R = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = R;
    const $ = mR({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(gf.contextId, r.contextId), A.addEventListener("scroll", g, yf(R.scrollOptions)), process.env.NODE_ENV !== "production" && uR(A)), $;
  }, [r.contextId, s, g, a]), b = ot(() => {
    const y = t.current, m = Qn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? ae(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ae()), ms(m);
  }, []), p = ot(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot stop drag when no active drag") : ae());
    const m = Qn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(gf.contextId), m.removeEventListener("scroll", g, yf(y.scrollOptions)));
  }, [g, d]), E = ot((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot scroll when there is no drag") : ae());
    const x = Qn(m);
    x || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot scroll a droppable with no closest scrollable") : ae()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), O = mt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: E
  }), [p, h, b, E]), v = mt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  pn(() => (c.current = v.descriptor, n.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && ar("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(v);
  }), [O, s, p, v, i, n.droppable]), pn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), pn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Wi() {
}
const yR = {
  width: 0,
  height: 0,
  margin: pT
}, vR = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? yR : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, ER = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = vR({
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
    transition: r !== "none" ? po.placeholder : null
  };
}, xR = (e) => {
  const t = M(null), r = ot(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Xe(e.animate === "open");
  pe(() => s ? o !== "open" ? (r(), c(!1), Wi) : t.current ? Wi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Wi, [o, s, r]);
  const u = ot((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = ER({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var wR = I.memo(xR);
function ji(e) {
  return typeof e == "boolean";
}
function Gi(e, t) {
  t.forEach((r) => r(e));
}
const SR = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ae(!1, "A Droppable requires a droppableId prop") : ae()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ae(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ae());
}, function({
  props: e
}) {
  ji(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ae(!1, "isDropDisabled must be a boolean") : ae()), ji(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ae(!1, "isCombineEnabled must be a boolean") : ae()), ji(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ae(!1, "ignoreContainerClipping must be a boolean") : ae());
}, function({
  getDroppableRef: e
}) {
  rv(e());
}], OR = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && ar(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], NR = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ae(!1, "Must provide a clone render function (renderClone) for virtual lists") : ae());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ae(!1, "Expected virtual list to not have a placeholder") : ae());
}];
function DR(e) {
  dl(() => {
    Gi(e, SR), e.props.mode === "standard" && Gi(e, OR), e.props.mode === "virtual" && Gi(e, NR);
  });
}
class CR extends I.PureComponent {
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
const _R = (e) => {
  const t = Ct(ul);
  t || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find app context") : ae());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: E
  } = e, O = ot(() => n.current, []), v = ot((P = null) => {
    n.current = P;
  }, []), y = ot(() => i.current, []), m = ot((P = null) => {
    i.current = P;
  }, []);
  DR({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const x = ot(() => {
    o() && p({
      maxScroll: DT()
    });
  }, [o, p]);
  hR({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const N = mt(() => I.createElement(CR, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => I.createElement(wR, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: j,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = mt(() => ({
    innerRef: v,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, v]), R = b ? b.dragging.draggableId : null, $ = mt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = I.createElement(oR, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return pr.createPortal(j, E());
  }
  return I.createElement(fl.Provider, {
    value: $
  }, a(C, h), A());
};
var IR = _R;
function PR() {
  return document.body || (process.env.NODE_ENV !== "production" ? ae(!1, "document.body is not ready") : ae()), document.body;
}
const vf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: PR
}, cv = (e) => {
  let t = {
    ...e
  }, r;
  for (r in vf)
    e[r] === void 0 && (t = {
      ...t,
      [r]: vf[r]
    });
  return t;
}, ki = (e, t) => e === t.droppable.type, Ef = (e, t) => t.draggables[e.draggable.id], $R = () => {
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
  }, r = wt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = wt((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: f,
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
  return (n, i) => {
    const a = cv(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (pl(n)) {
      const l = n.critical;
      if (!ki(c, l))
        return t;
      const d = Ef(l, n.dimensions), g = uo(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!ki(c, l.critical))
        return t;
      const d = Ef(l.critical, n.dimensions);
      return o(s, u, ov(l.result) === s, uo(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!ki(c, l.critical))
        return t;
      const d = uo(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, AR = {
  updateViewportMaxScroll: wT
};
ky($R, AR, (e, t, r) => ({
  ...cv(r),
  ...e,
  ...t
}), {
  context: Zy,
  areStatePropsEqual: nv
})(IR);
var xf;
(function(e) {
  e.event = "event", e.props = "prop";
})(xf || (xf = {}));
var wf = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + wf(), "" + wf();
function TR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gs = { exports: {} }, zi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function RR() {
  if (Sf) return zi;
  Sf = 1;
  var e = I;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return zi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, zi;
}
var Of = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nf;
function VR() {
  return Nf || (Nf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var E = p[0].inst, O = p[1];
      return c(
        function() {
          E.value = b, E.getSnapshot = h, r(E) && O({ inst: E });
        },
        [g, b, h]
      ), s(
        function() {
          return r(E) && O({ inst: E }), g(function() {
            r(E) && O({ inst: E });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Of.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Of;
}
process.env.NODE_ENV === "production" ? gs.exports = RR() : gs.exports = VR();
var bl = gs.exports, Ui = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Df;
function MR() {
  if (Df) return Ui;
  Df = 1;
  var e = I, t = bl;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Ui.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function E(x) {
          if (!O) {
            if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return y = N;
            }
            return y = x;
          }
          if (N = y, o(v, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
        }
        var O = !1, v, y, m = l === void 0 ? null : l;
        return [
          function() {
            return E(f());
          },
          m === null ? void 0 : function() {
            return E(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Ui;
}
var Cf = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _f;
function LR() {
  return _f || (_f = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = bl, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Cf.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function E(x) {
            if (!O) {
              if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return y = N;
              }
              return y = x;
            }
            if (N = y, o(v, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
          }
          var O = !1, v, y, m = l === void 0 ? null : l;
          return [
            function() {
              return E(f());
            },
            m === null ? void 0 : function() {
              return E(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Cf;
}
process.env.NODE_ENV === "production" ? MR() : LR();
function BR(e) {
  e();
}
let lv = BR;
const FR = (e) => lv = e, WR = () => lv, If = Symbol.for("react-redux-context"), Pf = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function jR() {
  var e;
  if (!D.createContext) return {};
  const t = (e = Pf[If]) != null ? e : Pf[If] = /* @__PURE__ */ new Map();
  let r = t.get(D.createContext);
  return r || (r = D.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(D.createContext, r)), r;
}
const GR = /* @__PURE__ */ jR(), kR = () => {
  throw new Error("uSES not initialized!");
};
function Hr() {
  return Hr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Hr.apply(null, arguments);
}
function uv(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var bs = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $f;
function zR() {
  if ($f) return _e;
  $f = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  function y(m) {
    return v(m) === u;
  }
  return _e.AsyncMode = c, _e.ConcurrentMode = u, _e.ContextConsumer = s, _e.ContextProvider = a, _e.Element = t, _e.ForwardRef = f, _e.Fragment = o, _e.Lazy = h, _e.Memo = g, _e.Portal = r, _e.Profiler = i, _e.StrictMode = n, _e.Suspense = l, _e.isAsyncMode = function(m) {
    return y(m) || v(m) === c;
  }, _e.isConcurrentMode = y, _e.isContextConsumer = function(m) {
    return v(m) === s;
  }, _e.isContextProvider = function(m) {
    return v(m) === a;
  }, _e.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, _e.isForwardRef = function(m) {
    return v(m) === f;
  }, _e.isFragment = function(m) {
    return v(m) === o;
  }, _e.isLazy = function(m) {
    return v(m) === h;
  }, _e.isMemo = function(m) {
    return v(m) === g;
  }, _e.isPortal = function(m) {
    return v(m) === r;
  }, _e.isProfiler = function(m) {
    return v(m) === i;
  }, _e.isStrictMode = function(m) {
    return v(m) === n;
  }, _e.isSuspense = function(m) {
    return v(m) === l;
  }, _e.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === E || m.$$typeof === O || m.$$typeof === b);
  }, _e.typeOf = v, _e;
}
var Ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Af;
function UR() {
  return Af || (Af = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function v(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === l || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === p || w.$$typeof === E || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ne = w.$$typeof;
        switch (ne) {
          case t:
            var S = w.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var m = c, x = u, N = s, C = a, R = t, $ = f, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === c;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function H(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === f;
    }
    function Q(w) {
      return y(w) === o;
    }
    function de(w) {
      return y(w) === h;
    }
    function q(w) {
      return y(w) === g;
    }
    function J(w) {
      return y(w) === r;
    }
    function L(w) {
      return y(w) === i;
    }
    function Z(w) {
      return y(w) === n;
    }
    function he(w) {
      return y(w) === l;
    }
    Ge.AsyncMode = m, Ge.ConcurrentMode = x, Ge.ContextConsumer = N, Ge.ContextProvider = C, Ge.Element = R, Ge.ForwardRef = $, Ge.Fragment = A, Ge.Lazy = P, Ge.Memo = T, Ge.Portal = j, Ge.Profiler = k, Ge.StrictMode = V, Ge.Suspense = W, Ge.isAsyncMode = G, Ge.isConcurrentMode = z, Ge.isContextConsumer = B, Ge.isContextProvider = H, Ge.isElement = Y, Ge.isForwardRef = K, Ge.isFragment = Q, Ge.isLazy = de, Ge.isMemo = q, Ge.isPortal = J, Ge.isProfiler = L, Ge.isStrictMode = Z, Ge.isSuspense = he, Ge.isValidElementType = v, Ge.typeOf = y;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? bs.exports = zR() : bs.exports = UR();
var HR = bs.exports, hl = HR, qR = {
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
}, YR = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, KR = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, dv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yl = {};
yl[hl.ForwardRef] = KR;
yl[hl.Memo] = dv;
function Tf(e) {
  return hl.isMemo(e) ? dv : yl[e.$$typeof] || qR;
}
var XR = Object.defineProperty, JR = Object.getOwnPropertyNames, Rf = Object.getOwnPropertySymbols, ZR = Object.getOwnPropertyDescriptor, QR = Object.getPrototypeOf, Vf = Object.prototype;
function pv(e, t, r) {
  if (typeof t != "string") {
    if (Vf) {
      var o = QR(t);
      o && o !== Vf && pv(e, o, r);
    }
    var n = JR(t);
    Rf && (n = n.concat(Rf(t)));
    for (var i = Tf(e), a = Tf(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!YR[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = ZR(t, c);
        try {
          XR(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var eV = pv;
const Mf = /* @__PURE__ */ TR(eV);
var hs = { exports: {} }, Ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lf;
function tV() {
  if (Lf) return Ie;
  Lf = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Ie.ContextConsumer = a, Ie.ContextProvider = i, Ie.Element = e, Ie.ForwardRef = c, Ie.Fragment = r, Ie.Lazy = d, Ie.Memo = l, Ie.Portal = t, Ie.Profiler = n, Ie.StrictMode = o, Ie.Suspense = u, Ie.SuspenseList = f, Ie.isAsyncMode = function() {
    return !1;
  }, Ie.isConcurrentMode = function() {
    return !1;
  }, Ie.isContextConsumer = function(p) {
    return b(p) === a;
  }, Ie.isContextProvider = function(p) {
    return b(p) === i;
  }, Ie.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ie.isForwardRef = function(p) {
    return b(p) === c;
  }, Ie.isFragment = function(p) {
    return b(p) === r;
  }, Ie.isLazy = function(p) {
    return b(p) === d;
  }, Ie.isMemo = function(p) {
    return b(p) === l;
  }, Ie.isPortal = function(p) {
    return b(p) === t;
  }, Ie.isProfiler = function(p) {
    return b(p) === n;
  }, Ie.isStrictMode = function(p) {
    return b(p) === o;
  }, Ie.isSuspense = function(p) {
    return b(p) === u;
  }, Ie.isSuspenseList = function(p) {
    return b(p) === f;
  }, Ie.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Ie.typeOf = b, Ie;
}
var ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bf;
function rV() {
  return Bf || (Bf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, E = !1, O = !1, v;
    v = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === f || E || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === v || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var fe = S.type;
            switch (fe) {
              case r:
              case n:
              case o:
              case u:
              case f:
                return fe;
              default:
                var U = fe && fe.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return U;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = a, N = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = f, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return m(S) === a;
    }
    function Y(S) {
      return m(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Q(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function q(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function he(S) {
      return m(S) === o;
    }
    function w(S) {
      return m(S) === u;
    }
    function ne(S) {
      return m(S) === f;
    }
    ke.ContextConsumer = x, ke.ContextProvider = N, ke.Element = C, ke.ForwardRef = R, ke.Fragment = $, ke.Lazy = A, ke.Memo = P, ke.Portal = T, ke.Profiler = j, ke.StrictMode = k, ke.Suspense = V, ke.SuspenseList = W, ke.isAsyncMode = z, ke.isConcurrentMode = B, ke.isContextConsumer = H, ke.isContextProvider = Y, ke.isElement = K, ke.isForwardRef = Q, ke.isFragment = de, ke.isLazy = q, ke.isMemo = J, ke.isPortal = L, ke.isProfiler = Z, ke.isStrictMode = he, ke.isSuspense = w, ke.isSuspenseList = ne, ke.isValidElementType = y, ke.typeOf = m;
  }()), ke;
}
process.env.NODE_ENV === "production" ? hs.exports = tV() : hs.exports = rV();
var Ff = hs.exports;
function vl(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Hi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || vl(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function nV(e, t, r) {
  Hi(e, "mapStateToProps"), Hi(t, "mapDispatchToProps"), Hi(r, "mergeProps");
}
const oV = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function iV(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(O, v) {
    return c = O, u = v, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const O = e(c, u), v = !a(O, f);
    return f = O, v && (d = r(f, l, u)), d;
  }
  function E(O, v) {
    const y = !i(v, u), m = !n(O, c, v, u);
    return c = O, u = v, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(O, v) {
    return s ? E(O, v) : g(O, v);
  };
}
function aV(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = uv(t, oV);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && nV(a, s, c), iV(a, s, c, e, i);
}
function sV(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function cV(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function fv(e, t, r) {
  cV(e) || vl(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ys(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Wf(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function mv(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Wf(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Wf(s), s = n(i, a)), process.env.NODE_ENV !== "production" && fv(s, o, t), s;
    }, n;
  };
}
function El(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function lV(e) {
  return e && typeof e == "object" ? ys((t) => (
    // @ts-ignore
    sV(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    mv(e, "mapDispatchToProps")
  ) : El(e, "mapDispatchToProps") : ys((t) => ({
    dispatch: t
  }));
}
function uV(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    mv(e, "mapStateToProps")
  ) : El(e, "mapStateToProps") : ys(() => ({}));
}
function dV(e, t, r) {
  return Hr({}, r, e, t);
}
function pV(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && fv(i, r, "mergeProps")), i;
    };
  };
}
function fV(e) {
  return e ? typeof e == "function" ? pV(e) : El(e, "mergeProps") : () => dV;
}
function mV() {
  const e = WR();
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
const jf = {
  notify() {
  },
  get: () => []
};
function gV(e, t) {
  let r, o = jf, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let E = !1;
    return () => {
      E || (E = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = mV());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = jf);
  }
  function d() {
    i || (i = !0, f());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const bV = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vs = bV ? D.useLayoutEffect : D.useEffect;
function Gf(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function qi(e, t) {
  if (Gf(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Gf(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const hV = ["reactReduxForwardedRef"];
let gv = kR;
const yV = (e) => {
  gv = e;
}, vV = [null, null], EV = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function xV(e, t, r) {
  vs(() => e(...t), r);
}
function wV(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function SV(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (E) {
      p = E, d = E;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function OV(e, t) {
  return e === t;
}
let kf = !1;
function bv(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = OV,
  areOwnPropsEqual: i = qi,
  areStatePropsEqual: a = qi,
  areMergedPropsEqual: s = qi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = GR
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !kf && (kf = !0, vl('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = uV(e), d = lV(t), g = fV(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Ff.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${EV(b)}`);
    const p = b.displayName || b.name || "Component", E = `Connect(${p})`, O = {
      shouldHandleStateChanges: h,
      displayName: E,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(m) {
      const [x, N, C] = D.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = uv(m, hV);
        return [m.context, L, Z];
      }, [m]), R = D.useMemo(() => x && x.Consumer && // @ts-ignore
      Ff.isContextConsumer(/* @__PURE__ */ D.createElement(x.Consumer, null)) ? x : f, [x, f]), $ = D.useContext(R), A = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const T = A ? m.store : $.store, j = P ? $.getServerState : T.getState, k = D.useMemo(() => aV(T.dispatch, O), [T]), [V, W] = D.useMemo(() => {
        if (!h) return vV;
        const L = gV(T, A ? void 0 : $.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, A, $]), F = D.useMemo(() => A ? $ : Hr({}, $, {
        subscription: V
      }), [A, $, V]), G = D.useRef(), z = D.useRef(C), B = D.useRef(), H = D.useRef(!1);
      D.useRef(!1);
      const Y = D.useRef(!1), K = D.useRef();
      vs(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Q = D.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = D.useMemo(() => (L) => V ? SV(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        H,
        Y,
        B,
        W,
        L
      ) : () => {
      }, [V]);
      xV(wV, [z, G, H, C, B, W]);
      let q;
      try {
        q = gv(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Q,
          j ? () => k(j(), C) : Q
        );
      } catch (L) {
        throw K.current && (L.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), L;
      }
      vs(() => {
        K.current = void 0, B.current = void 0, G.current = q;
      });
      const J = D.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ D.createElement(b, Hr({}, q, {
          ref: N
        }))
      ), [N, b, q]);
      return D.useMemo(() => h ? /* @__PURE__ */ D.createElement(R.Provider, {
        value: F
      }, J) : J, [R, J, F]);
    }
    const y = D.memo(v);
    if (y.WrappedComponent = b, y.displayName = v.displayName = E, c) {
      const m = D.forwardRef(function(x, N) {
        return /* @__PURE__ */ D.createElement(y, Hr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = E, m.WrappedComponent = b, Mf(m, b);
    }
    return Mf(y, b);
  };
}
yV(bl.useSyncExternalStore);
FR(fr);
function NV(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function hv(e, t) {
  var r = Xe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && NV(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return pe(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function DV(e, t) {
  return hv(function() {
    return e;
  }, t);
}
var gt = hv, it = DV, CV = process.env.NODE_ENV === "production", Yi = "Invariant failed";
function zf(e, t) {
  if (CV)
    throw new Error(Yi);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Yi, ": ").concat(r) : Yi;
  throw new Error(o);
}
var Br = function(e) {
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
}, yv = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Uf = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, _V = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Ki = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, xl = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Ki : r, n = e.border, i = n === void 0 ? Ki : n, a = e.padding, s = a === void 0 ? Ki : a, c = Br(yv(t, o)), u = Br(Uf(t, i)), f = Br(Uf(u, s));
  return {
    marginBox: c,
    borderBox: Br(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, Bt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? zf(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : zf()), o;
}, IV = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, PV = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = _V(r, t);
  return xl({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Es = function(e, t) {
  return t === void 0 && (t = IV()), PV(e, t);
}, vv = function(e, t) {
  var r = {
    top: Bt(t.marginTop),
    right: Bt(t.marginRight),
    bottom: Bt(t.marginBottom),
    left: Bt(t.marginLeft)
  }, o = {
    top: Bt(t.paddingTop),
    right: Bt(t.paddingRight),
    bottom: Bt(t.paddingBottom),
    left: Bt(t.paddingLeft)
  }, n = {
    top: Bt(t.borderTopWidth),
    right: Bt(t.borderRightWidth),
    bottom: Bt(t.borderBottomWidth),
    left: Bt(t.borderLeftWidth)
  };
  return xl({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, Ev = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return vv(t, r);
}, Hf = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function $V(e, t) {
  return !!(e === t || Hf(e) && Hf(t));
}
function AV(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!$V(e[r], t[r]))
      return !1;
  return !0;
}
function St(e, t) {
  t === void 0 && (t = AV);
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
var TV = function(e) {
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
const RV = process.env.NODE_ENV === "production", VV = /[ \t]{2,}/g, MV = /^[ \t]*/gm, qf = (e) => e.replace(VV, " ").replace(MV, "").trim(), LV = (e) => qf(`
  %c@hello-pangea/dnd

  %c${qf(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), BV = (e) => [LV(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], FV = "__@hello-pangea/dnd-disable-dev-warnings";
function xv(e, t) {
  RV || typeof window < "u" && window[FV] || console[e](...BV(t));
}
const sr = xv.bind(null, "warn"), xs = xv.bind(null, "error");
function WV() {
}
function jV(e, t) {
  return {
    ...e,
    ...t
  };
}
function GV(e, t, r) {
  const o = t.map((n) => {
    const i = jV(r, n.options);
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
const kV = process.env.NODE_ENV === "production", Yf = "Invariant failed";
class Rn extends Error {
}
Rn.prototype.toString = function() {
  return this.message;
};
function se(e, t) {
  throw kV ? new Rn(Yf) : new Rn(`${Yf}: ${t || ""}`);
}
class HU extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = WV, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && sr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Rn && (r.preventDefault(), process.env.NODE_ENV !== "production" && xs(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = GV(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Rn) {
      process.env.NODE_ENV !== "production" && xs(t.message), this.setState({});
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
const Pr = {
  x: 0,
  y: 0
}, zV = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), UV = (e, t) => e.x === t.x && e.y === t.y, HV = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), qV = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var YV = (e, t) => {
  const r = Br({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const KV = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), XV = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, JV = (e, t) => t ? KV(e, t.scroll.diff.displacement) : e, ZV = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, QV = (e, t) => t && t.shouldClipSubject ? YV(t.pageMarginBox, e) : Br(e);
var eM = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = JV(e.marginBox, o), i = ZV(n, r, t), a = QV(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
St((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
St((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const tM = St((e) => Object.values(e)), rM = St((e) => Object.values(e));
St((e, t) => rM(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function nM(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
St((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const oM = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, iM = {
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
St(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: qV(e.line, r)
  };
});
var fo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const aM = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), sM = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), wl = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Vn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, cM = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, yr = `${cM.outOfTheWay}s ${wl.outOfTheWay}`, mo = {
  fluid: `opacity ${yr}`,
  snap: `transform ${yr}, opacity ${yr}`,
  drop: (e) => {
    const t = `${e}s ${wl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${yr}`,
  placeholder: `height ${yr}, width ${yr}, margin ${yr}`
}, Kf = (e) => UV(e, Pr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ws = {
  moveTo: Kf,
  drop: (e, t) => {
    const r = Kf(e);
    if (r)
      return t ? `${r} scale(${Vn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var wv = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = zV({
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
}, lM = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot find document.documentElement") : se()), e;
}, uM = () => {
  const e = lM();
  return wv({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
St((e) => tM(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Sv = "data-rfd", Xf = (() => {
  const e = `${Sv}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Jf = {
  contextId: `${Sv}-scroll-container-context-id`
}, dM = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Yt : pe;
var fn = dM;
function pM(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var fM = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ov(e) {
  return e instanceof fM(e).HTMLElement;
}
function mM(e, t) {
  const r = `[${Xf.contextId}="${e}"]`, o = pM(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && sr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Xf.draggableId) === t);
  return n ? Ov(n) ? n : (process.env.NODE_ENV !== "production" && sr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && sr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Nv = I.createContext(null), gM = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot find document.body") : se()), e;
};
let bM = 0;
const Dv = {
  separator: "::"
};
function hM(e, t = Dv) {
  return gt(() => `${e}${t.separator}${bM++}`, [t.separator, e]);
}
function yM(e, t = Dv) {
  const r = I.useId();
  return gt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Cv = "useId" in I ? yM : hM, Sl = I.createContext(null);
function _v(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ol(e, t) {
  _v(() => {
    pe(() => {
      try {
        e();
      } catch (r) {
        xs(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function vM(e) {
  const t = M(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function Nl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Zf = {
  dragging: 5e3,
  dropAnimating: 4500
}, EM = (e, t) => t ? mo.drop(t.duration) : e ? mo.snap : mo.fluid, xM = (e, t) => {
  if (e)
    return t ? Vn.opacity.drop : Vn.opacity.combining;
}, wM = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function SM(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = wM(e), s = !!n, c = s ? ws.drop(r, i) : ws.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: EM(a, n),
    transform: c,
    opacity: xM(i, s),
    zIndex: s ? Zf.dropAnimating : Zf.dragging,
    pointerEvents: "none"
  };
}
function OM(e) {
  return {
    transform: ws.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function NM(e) {
  return e.type === "DRAGGING" ? SM(e) : OM(e);
}
function DM(e, t, r = Pr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = vv(n, o), a = Es(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function CM(e) {
  const t = Cv("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = gt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = it((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot get dimension when no ref is set") : se()), DM(r, h, g);
  }, [r, n]), f = gt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  fn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), fn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var Dl = I.createContext(null);
function Iv(e) {
  e && Ov(e) || (process.env.NODE_ENV !== "production" ? se(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : se());
}
function _M(e, t, r) {
  Ol(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? se(!1, "Draggable requires a draggableId") : se(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? se(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : se(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? se(!1, `${o(n)} requires an integer index prop`) : se(!1)), e.mapped.type !== "DRAGGING" && (Iv(r()), e.isEnabled && (mM(t, n) || (process.env.NODE_ENV !== "production" ? se(!1, `${o(n)} Unable to find drag handle`) : se(!1))));
  });
}
function IM(e) {
  _v(() => {
    const t = M(e);
    Ol(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? se(!1, "Draggable isClone prop value changed during component life") : se(!1));
    }, [e]);
  });
}
function To(e) {
  const t = Ct(e);
  return t || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find required context") : se()), t;
}
function PM(e) {
  e.preventDefault();
}
const $M = (e) => {
  const t = M(null), r = it((x = null) => {
    t.current = x;
  }, []), o = it(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = To(Sl), {
    type: s,
    droppableId: c
  } = To(Dl), u = gt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: E
  } = e;
  if (_M(e, n, o), IM(b), !b) {
    const x = gt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    CM(x);
  }
  const O = gt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: PM
  } : null, [n, i, l, d]), v = it((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? E() : Kt(E));
  }, [E, p]), y = gt(() => {
    const x = NM(p), N = p.type === "DRAGGING" && p.dropping ? v : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [n, O, l, p, v, r]), m = gt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var AM = $M, Pv = (e, t) => e === t, $v = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const TM = (e) => e.combine ? e.combine.draggableId : null, RM = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function VM() {
  const e = St((o, n) => ({
    x: o,
    y: n
  })), t = St((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = St((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Nl(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = fo(o.impact), c = RM(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = $v(c), l = TM(c), d = {
        duration: o.dropDuration,
        curve: wl.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? Vn.opacity.drop : null,
        scale: l ? Vn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function Av(e = null) {
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
const MM = {
  mapped: {
    type: "SECONDARY",
    offset: Pr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Av(null)
  }
};
function LM() {
  const e = St((i, a) => ({
    x: i,
    y: a
  })), t = St(Av), r = St((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Pr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = nM(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = HV(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Nl(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const BM = () => {
  const e = VM(), t = LM();
  return (r, o) => e(r, o) || t(r, o) || MM;
}, FM = {
  dropAnimationFinished: sM
}, WM = bv(BM, FM, null, {
  context: Nv,
  areStatePropsEqual: Pv
})(AM);
var jM = WM;
function GM(e) {
  return To(Dl).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(jM, e);
}
const Cl = (e) => (t) => e === t, kM = Cl("scroll"), zM = Cl("auto"), UM = Cl("visible"), Qf = (e, t) => t(e.overflowX) || t(e.overflowY), HM = (e, t) => t(e.overflowX) && t(e.overflowY), Tv = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Qf(r, kM) || Qf(r, zM);
}, qM = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = gM(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, se()), !Tv(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return HM(o, UM) || process.env.NODE_ENV !== "production" && sr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, _l = (e) => e == null ? null : e === document.body ? qM() ? e : null : e === document.documentElement ? null : Tv(e) ? e : _l(e.parentElement);
var YM = (e) => {
  !e || !_l(e.parentElement) || process.env.NODE_ENV !== "production" && sr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ss = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Rv = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Rv(e.parentElement) : !1;
var KM = (e) => {
  const t = _l(e), r = Rv(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, XM = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
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
    } = s, g = wv({
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
        max: g,
        diff: {
          value: Pr,
          displacement: Pr
        }
      }
    };
  })(), u = n === "vertical" ? oM : iM, f = eM({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const JM = (e, t) => {
  const r = Ev(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = yv({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return xl({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var ZM = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = JM(e, c), f = Es(u, o), l = (() => {
    if (!c)
      return null;
    const d = Ev(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Es(d, o),
      scroll: Ss(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return XM({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const QM = {
  passive: !1
}, eL = {
  passive: !0
};
var em = (e) => e.shouldPublishImmediately ? QM : eL;
const eo = (e) => e && e.env.closestScrollable || null;
function tL(e) {
  const t = M(null), r = To(Sl), o = Cv("droppable"), {
    registry: n,
    marshal: i
  } = r, a = vM(e), s = gt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = gt(() => St((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? se(!1, "Can only update scroll when dragging") : se());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = it(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Pr : Ss(y.env.closestScrollable);
  }, []), l = it(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = gt(() => TV(l), [l]), g = it(() => {
    const y = t.current, m = eo(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find scroll options while scrolling") : se()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = it((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? se(!1, "Cannot collect a droppable while a drag is occurring") : se());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot collect without a droppable ref") : se());
    const C = KM(N), R = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = R;
    const $ = ZM({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Jf.contextId, r.contextId), A.addEventListener("scroll", g, em(R.scrollOptions)), process.env.NODE_ENV !== "production" && YM(A)), $;
  }, [r.contextId, s, g, a]), b = it(() => {
    const y = t.current, m = eo(y);
    return y && m || (process.env.NODE_ENV !== "production" ? se(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : se()), Ss(m);
  }, []), p = it(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot stop drag when no active drag") : se());
    const m = eo(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Jf.contextId), m.removeEventListener("scroll", g, em(y.scrollOptions)));
  }, [g, d]), E = it((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot scroll when there is no drag") : se());
    const x = eo(m);
    x || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot scroll a droppable with no closest scrollable") : se()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), O = gt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: E
  }), [p, h, b, E]), v = gt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  fn(() => (c.current = v.descriptor, n.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && sr("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(v);
  }), [O, s, p, v, i, n.droppable]), fn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), fn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Xi() {
}
const rL = {
  width: 0,
  height: 0,
  margin: XV
}, nL = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? rL : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, oL = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = nL({
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
    transition: r !== "none" ? mo.placeholder : null
  };
}, iL = (e) => {
  const t = M(null), r = it(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Xe(e.animate === "open");
  pe(() => s ? o !== "open" ? (r(), c(!1), Xi) : t.current ? Xi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Xi, [o, s, r]);
  const u = it((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = oL({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var aL = I.memo(iL);
function Ji(e) {
  return typeof e == "boolean";
}
function Zi(e, t) {
  t.forEach((r) => r(e));
}
const sL = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? se(!1, "A Droppable requires a droppableId prop") : se()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? se(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : se());
}, function({
  props: e
}) {
  Ji(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? se(!1, "isDropDisabled must be a boolean") : se()), Ji(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? se(!1, "isCombineEnabled must be a boolean") : se()), Ji(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? se(!1, "ignoreContainerClipping must be a boolean") : se());
}, function({
  getDroppableRef: e
}) {
  Iv(e());
}], cL = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && sr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], lL = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? se(!1, "Must provide a clone render function (renderClone) for virtual lists") : se());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? se(!1, "Expected virtual list to not have a placeholder") : se());
}];
function uL(e) {
  Ol(() => {
    Zi(e, sL), e.props.mode === "standard" && Zi(e, cL), e.props.mode === "virtual" && Zi(e, lL);
  });
}
class dL extends I.PureComponent {
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
const pL = (e) => {
  const t = Ct(Sl);
  t || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find app context") : se());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: E
  } = e, O = it(() => n.current, []), v = it((P = null) => {
    n.current = P;
  }, []), y = it(() => i.current, []), m = it((P = null) => {
    i.current = P;
  }, []);
  uL({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const x = it(() => {
    o() && p({
      maxScroll: uM()
    });
  }, [o, p]);
  tL({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const N = gt(() => I.createElement(dL, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => I.createElement(aL, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: j,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = gt(() => ({
    innerRef: v,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, v]), R = b ? b.dragging.draggableId : null, $ = gt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = I.createElement(GM, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return pr.createPortal(j, E());
  }
  return I.createElement(Dl.Provider, {
    value: $
  }, a(C, h), A());
};
var fL = pL;
function mL() {
  return document.body || (process.env.NODE_ENV !== "production" ? se(!1, "document.body is not ready") : se()), document.body;
}
const tm = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: mL
}, Vv = (e) => {
  let t = {
    ...e
  }, r;
  for (r in tm)
    e[r] === void 0 && (t = {
      ...t,
      [r]: tm[r]
    });
  return t;
}, Qi = (e, t) => e === t.droppable.type, rm = (e, t) => t.draggables[e.draggable.id], gL = () => {
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
  }, r = St((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = St((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: f,
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
  return (n, i) => {
    const a = Vv(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (Nl(n)) {
      const l = n.critical;
      if (!Qi(c, l))
        return t;
      const d = rm(l, n.dimensions), g = fo(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Qi(c, l.critical))
        return t;
      const d = rm(l.critical, n.dimensions);
      return o(s, u, $v(l.result) === s, fo(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Qi(c, l.critical))
        return t;
      const d = fo(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, bL = {
  updateViewportMaxScroll: aM
};
bv(gL, bL, (e, t, r) => ({
  ...Vv(r),
  ...e,
  ...t
}), {
  context: Nv,
  areStatePropsEqual: Pv
})(fL);
var nm;
(function(e) {
  e.event = "event", e.props = "prop";
})(nm || (nm = {}));
var om = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + om(), "" + om();
function hL(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Os = { exports: {} }, ea = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var im;
function yL() {
  if (im) return ea;
  im = 1;
  var e = I;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ea.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, ea;
}
var am = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sm;
function vL() {
  return sm || (sm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var E = p[0].inst, O = p[1];
      return c(
        function() {
          E.value = b, E.getSnapshot = h, r(E) && O({ inst: E });
        },
        [g, b, h]
      ), s(
        function() {
          return r(E) && O({ inst: E }), g(function() {
            r(E) && O({ inst: E });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    am.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), am;
}
process.env.NODE_ENV === "production" ? Os.exports = yL() : Os.exports = vL();
var Il = Os.exports, ta = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cm;
function EL() {
  if (cm) return ta;
  cm = 1;
  var e = I, t = Il;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return ta.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function E(x) {
          if (!O) {
            if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return y = N;
            }
            return y = x;
          }
          if (N = y, o(v, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
        }
        var O = !1, v, y, m = l === void 0 ? null : l;
        return [
          function() {
            return E(f());
          },
          m === null ? void 0 : function() {
            return E(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, ta;
}
var lm = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var um;
function xL() {
  return um || (um = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = Il, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    lm.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function E(x) {
            if (!O) {
              if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return y = N;
              }
              return y = x;
            }
            if (N = y, o(v, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
          }
          var O = !1, v, y, m = l === void 0 ? null : l;
          return [
            function() {
              return E(f());
            },
            m === null ? void 0 : function() {
              return E(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), lm;
}
process.env.NODE_ENV === "production" ? EL() : xL();
function wL(e) {
  e();
}
let Mv = wL;
const SL = (e) => Mv = e, OL = () => Mv, dm = Symbol.for("react-redux-context"), pm = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function NL() {
  var e;
  if (!D.createContext) return {};
  const t = (e = pm[dm]) != null ? e : pm[dm] = /* @__PURE__ */ new Map();
  let r = t.get(D.createContext);
  return r || (r = D.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(D.createContext, r)), r;
}
const DL = /* @__PURE__ */ NL(), CL = () => {
  throw new Error("uSES not initialized!");
};
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, qr.apply(null, arguments);
}
function Lv(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Ns = { exports: {} }, Pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fm;
function _L() {
  if (fm) return Pe;
  fm = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  function y(m) {
    return v(m) === u;
  }
  return Pe.AsyncMode = c, Pe.ConcurrentMode = u, Pe.ContextConsumer = s, Pe.ContextProvider = a, Pe.Element = t, Pe.ForwardRef = f, Pe.Fragment = o, Pe.Lazy = h, Pe.Memo = g, Pe.Portal = r, Pe.Profiler = i, Pe.StrictMode = n, Pe.Suspense = l, Pe.isAsyncMode = function(m) {
    return y(m) || v(m) === c;
  }, Pe.isConcurrentMode = y, Pe.isContextConsumer = function(m) {
    return v(m) === s;
  }, Pe.isContextProvider = function(m) {
    return v(m) === a;
  }, Pe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Pe.isForwardRef = function(m) {
    return v(m) === f;
  }, Pe.isFragment = function(m) {
    return v(m) === o;
  }, Pe.isLazy = function(m) {
    return v(m) === h;
  }, Pe.isMemo = function(m) {
    return v(m) === g;
  }, Pe.isPortal = function(m) {
    return v(m) === r;
  }, Pe.isProfiler = function(m) {
    return v(m) === i;
  }, Pe.isStrictMode = function(m) {
    return v(m) === n;
  }, Pe.isSuspense = function(m) {
    return v(m) === l;
  }, Pe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === E || m.$$typeof === O || m.$$typeof === b);
  }, Pe.typeOf = v, Pe;
}
var ze = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mm;
function IL() {
  return mm || (mm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function v(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === l || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === p || w.$$typeof === E || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ne = w.$$typeof;
        switch (ne) {
          case t:
            var S = w.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var m = c, x = u, N = s, C = a, R = t, $ = f, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === c;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function H(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === f;
    }
    function Q(w) {
      return y(w) === o;
    }
    function de(w) {
      return y(w) === h;
    }
    function q(w) {
      return y(w) === g;
    }
    function J(w) {
      return y(w) === r;
    }
    function L(w) {
      return y(w) === i;
    }
    function Z(w) {
      return y(w) === n;
    }
    function he(w) {
      return y(w) === l;
    }
    ze.AsyncMode = m, ze.ConcurrentMode = x, ze.ContextConsumer = N, ze.ContextProvider = C, ze.Element = R, ze.ForwardRef = $, ze.Fragment = A, ze.Lazy = P, ze.Memo = T, ze.Portal = j, ze.Profiler = k, ze.StrictMode = V, ze.Suspense = W, ze.isAsyncMode = G, ze.isConcurrentMode = z, ze.isContextConsumer = B, ze.isContextProvider = H, ze.isElement = Y, ze.isForwardRef = K, ze.isFragment = Q, ze.isLazy = de, ze.isMemo = q, ze.isPortal = J, ze.isProfiler = L, ze.isStrictMode = Z, ze.isSuspense = he, ze.isValidElementType = v, ze.typeOf = y;
  }()), ze;
}
process.env.NODE_ENV === "production" ? Ns.exports = _L() : Ns.exports = IL();
var PL = Ns.exports, Pl = PL, $L = {
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
}, AL = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, TL = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $l = {};
$l[Pl.ForwardRef] = TL;
$l[Pl.Memo] = Bv;
function gm(e) {
  return Pl.isMemo(e) ? Bv : $l[e.$$typeof] || $L;
}
var RL = Object.defineProperty, VL = Object.getOwnPropertyNames, bm = Object.getOwnPropertySymbols, ML = Object.getOwnPropertyDescriptor, LL = Object.getPrototypeOf, hm = Object.prototype;
function Fv(e, t, r) {
  if (typeof t != "string") {
    if (hm) {
      var o = LL(t);
      o && o !== hm && Fv(e, o, r);
    }
    var n = VL(t);
    bm && (n = n.concat(bm(t)));
    for (var i = gm(e), a = gm(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!AL[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = ML(t, c);
        try {
          RL(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var BL = Fv;
const ym = /* @__PURE__ */ hL(BL);
var Ds = { exports: {} }, $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vm;
function FL() {
  if (vm) return $e;
  vm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return $e.ContextConsumer = a, $e.ContextProvider = i, $e.Element = e, $e.ForwardRef = c, $e.Fragment = r, $e.Lazy = d, $e.Memo = l, $e.Portal = t, $e.Profiler = n, $e.StrictMode = o, $e.Suspense = u, $e.SuspenseList = f, $e.isAsyncMode = function() {
    return !1;
  }, $e.isConcurrentMode = function() {
    return !1;
  }, $e.isContextConsumer = function(p) {
    return b(p) === a;
  }, $e.isContextProvider = function(p) {
    return b(p) === i;
  }, $e.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, $e.isForwardRef = function(p) {
    return b(p) === c;
  }, $e.isFragment = function(p) {
    return b(p) === r;
  }, $e.isLazy = function(p) {
    return b(p) === d;
  }, $e.isMemo = function(p) {
    return b(p) === l;
  }, $e.isPortal = function(p) {
    return b(p) === t;
  }, $e.isProfiler = function(p) {
    return b(p) === n;
  }, $e.isStrictMode = function(p) {
    return b(p) === o;
  }, $e.isSuspense = function(p) {
    return b(p) === u;
  }, $e.isSuspenseList = function(p) {
    return b(p) === f;
  }, $e.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, $e.typeOf = b, $e;
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
var Em;
function WL() {
  return Em || (Em = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, E = !1, O = !1, v;
    v = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === f || E || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === v || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var fe = S.type;
            switch (fe) {
              case r:
              case n:
              case o:
              case u:
              case f:
                return fe;
              default:
                var U = fe && fe.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return U;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = a, N = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = f, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return m(S) === a;
    }
    function Y(S) {
      return m(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Q(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function q(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function he(S) {
      return m(S) === o;
    }
    function w(S) {
      return m(S) === u;
    }
    function ne(S) {
      return m(S) === f;
    }
    Ue.ContextConsumer = x, Ue.ContextProvider = N, Ue.Element = C, Ue.ForwardRef = R, Ue.Fragment = $, Ue.Lazy = A, Ue.Memo = P, Ue.Portal = T, Ue.Profiler = j, Ue.StrictMode = k, Ue.Suspense = V, Ue.SuspenseList = W, Ue.isAsyncMode = z, Ue.isConcurrentMode = B, Ue.isContextConsumer = H, Ue.isContextProvider = Y, Ue.isElement = K, Ue.isForwardRef = Q, Ue.isFragment = de, Ue.isLazy = q, Ue.isMemo = J, Ue.isPortal = L, Ue.isProfiler = Z, Ue.isStrictMode = he, Ue.isSuspense = w, Ue.isSuspenseList = ne, Ue.isValidElementType = y, Ue.typeOf = m;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? Ds.exports = FL() : Ds.exports = WL();
var xm = Ds.exports;
function Al(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ra(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Al(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function jL(e, t, r) {
  ra(e, "mapStateToProps"), ra(t, "mapDispatchToProps"), ra(r, "mergeProps");
}
const GL = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function kL(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(O, v) {
    return c = O, u = v, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const O = e(c, u), v = !a(O, f);
    return f = O, v && (d = r(f, l, u)), d;
  }
  function E(O, v) {
    const y = !i(v, u), m = !n(O, c, v, u);
    return c = O, u = v, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(O, v) {
    return s ? E(O, v) : g(O, v);
  };
}
function zL(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Lv(t, GL);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && jL(a, s, c), kL(a, s, c, e, i);
}
function UL(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function HL(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Wv(e, t, r) {
  HL(e) || Al(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Cs(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function wm(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function jv(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = wm(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = wm(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Wv(s, o, t), s;
    }, n;
  };
}
function Tl(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function qL(e) {
  return e && typeof e == "object" ? Cs((t) => (
    // @ts-ignore
    UL(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    jv(e, "mapDispatchToProps")
  ) : Tl(e, "mapDispatchToProps") : Cs((t) => ({
    dispatch: t
  }));
}
function YL(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    jv(e, "mapStateToProps")
  ) : Tl(e, "mapStateToProps") : Cs(() => ({}));
}
function KL(e, t, r) {
  return qr({}, r, e, t);
}
function XL(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Wv(i, r, "mergeProps")), i;
    };
  };
}
function JL(e) {
  return e ? typeof e == "function" ? XL(e) : Tl(e, "mergeProps") : () => KL;
}
function ZL() {
  const e = OL();
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
const Sm = {
  notify() {
  },
  get: () => []
};
function QL(e, t) {
  let r, o = Sm, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let E = !1;
    return () => {
      E || (E = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = ZL());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Sm);
  }
  function d() {
    i || (i = !0, f());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const eB = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _s = eB ? D.useLayoutEffect : D.useEffect;
function Om(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function na(e, t) {
  if (Om(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Om(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const tB = ["reactReduxForwardedRef"];
let Gv = CL;
const rB = (e) => {
  Gv = e;
}, nB = [null, null], oB = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function iB(e, t, r) {
  _s(() => e(...t), r);
}
function aB(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function sB(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (E) {
      p = E, d = E;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function cB(e, t) {
  return e === t;
}
let Nm = !1;
function kv(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = cB,
  areOwnPropsEqual: i = na,
  areStatePropsEqual: a = na,
  areMergedPropsEqual: s = na,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = DL
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Nm && (Nm = !0, Al('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = YL(e), d = qL(t), g = JL(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !xm.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${oB(b)}`);
    const p = b.displayName || b.name || "Component", E = `Connect(${p})`, O = {
      shouldHandleStateChanges: h,
      displayName: E,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(m) {
      const [x, N, C] = D.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = Lv(m, tB);
        return [m.context, L, Z];
      }, [m]), R = D.useMemo(() => x && x.Consumer && // @ts-ignore
      xm.isContextConsumer(/* @__PURE__ */ D.createElement(x.Consumer, null)) ? x : f, [x, f]), $ = D.useContext(R), A = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const T = A ? m.store : $.store, j = P ? $.getServerState : T.getState, k = D.useMemo(() => zL(T.dispatch, O), [T]), [V, W] = D.useMemo(() => {
        if (!h) return nB;
        const L = QL(T, A ? void 0 : $.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, A, $]), F = D.useMemo(() => A ? $ : qr({}, $, {
        subscription: V
      }), [A, $, V]), G = D.useRef(), z = D.useRef(C), B = D.useRef(), H = D.useRef(!1);
      D.useRef(!1);
      const Y = D.useRef(!1), K = D.useRef();
      _s(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Q = D.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = D.useMemo(() => (L) => V ? sB(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        H,
        Y,
        B,
        W,
        L
      ) : () => {
      }, [V]);
      iB(aB, [z, G, H, C, B, W]);
      let q;
      try {
        q = Gv(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Q,
          j ? () => k(j(), C) : Q
        );
      } catch (L) {
        throw K.current && (L.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), L;
      }
      _s(() => {
        K.current = void 0, B.current = void 0, G.current = q;
      });
      const J = D.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ D.createElement(b, qr({}, q, {
          ref: N
        }))
      ), [N, b, q]);
      return D.useMemo(() => h ? /* @__PURE__ */ D.createElement(R.Provider, {
        value: F
      }, J) : J, [R, J, F]);
    }
    const y = D.memo(v);
    if (y.WrappedComponent = b, y.displayName = v.displayName = E, c) {
      const m = D.forwardRef(function(x, N) {
        return /* @__PURE__ */ D.createElement(y, qr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = E, m.WrappedComponent = b, ym(m, b);
    }
    return ym(y, b);
  };
}
rB(Il.useSyncExternalStore);
SL(fr);
function lB(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function zv(e, t) {
  var r = Xe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && lB(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return pe(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function uB(e, t) {
  return zv(function() {
    return e;
  }, t);
}
var bt = zv, at = uB, dB = process.env.NODE_ENV === "production", oa = "Invariant failed";
function Dm(e, t) {
  if (dB)
    throw new Error(oa);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(oa, ": ").concat(r) : oa;
  throw new Error(o);
}
var Fr = function(e) {
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
}, Uv = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Cm = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, pB = function(e, t) {
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
}, Rl = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ia : r, n = e.border, i = n === void 0 ? ia : n, a = e.padding, s = a === void 0 ? ia : a, c = Fr(Uv(t, o)), u = Fr(Cm(t, i)), f = Fr(Cm(u, s));
  return {
    marginBox: c,
    borderBox: Fr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, Ft = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Dm(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Dm()), o;
}, fB = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, mB = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = pB(r, t);
  return Rl({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Is = function(e, t) {
  return t === void 0 && (t = fB()), mB(e, t);
}, Hv = function(e, t) {
  var r = {
    top: Ft(t.marginTop),
    right: Ft(t.marginRight),
    bottom: Ft(t.marginBottom),
    left: Ft(t.marginLeft)
  }, o = {
    top: Ft(t.paddingTop),
    right: Ft(t.paddingRight),
    bottom: Ft(t.paddingBottom),
    left: Ft(t.paddingLeft)
  }, n = {
    top: Ft(t.borderTopWidth),
    right: Ft(t.borderRightWidth),
    bottom: Ft(t.borderBottomWidth),
    left: Ft(t.borderLeftWidth)
  };
  return Rl({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, qv = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Hv(t, r);
}, _m = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function gB(e, t) {
  return !!(e === t || _m(e) && _m(t));
}
function bB(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!gB(e[r], t[r]))
      return !1;
  return !0;
}
function Ot(e, t) {
  t === void 0 && (t = bB);
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
var hB = function(e) {
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
const yB = process.env.NODE_ENV === "production", vB = /[ \t]{2,}/g, EB = /^[ \t]*/gm, Im = (e) => e.replace(vB, " ").replace(EB, "").trim(), xB = (e) => Im(`
  %c@hello-pangea/dnd

  %c${Im(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), wB = (e) => [xB(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], SB = "__@hello-pangea/dnd-disable-dev-warnings";
function Yv(e, t) {
  yB || typeof window < "u" && window[SB] || console[e](...wB(t));
}
const cr = Yv.bind(null, "warn"), Ps = Yv.bind(null, "error");
function OB() {
}
function NB(e, t) {
  return {
    ...e,
    ...t
  };
}
function DB(e, t, r) {
  const o = t.map((n) => {
    const i = NB(r, n.options);
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
const CB = process.env.NODE_ENV === "production", Pm = "Invariant failed";
class Mn extends Error {
}
Mn.prototype.toString = function() {
  return this.message;
};
function ce(e, t) {
  throw CB ? new Mn(Pm) : new Mn(`${Pm}: ${t || ""}`);
}
class qU extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = OB, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && cr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Mn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ps(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = DB(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Mn) {
      process.env.NODE_ENV !== "production" && Ps(t.message), this.setState({});
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
const $r = {
  x: 0,
  y: 0
}, _B = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), IB = (e, t) => e.x === t.x && e.y === t.y, PB = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), $B = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var AB = (e, t) => {
  const r = Fr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const TB = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), RB = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, VB = (e, t) => t ? TB(e, t.scroll.diff.displacement) : e, MB = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, LB = (e, t) => t && t.shouldClipSubject ? AB(t.pageMarginBox, e) : Fr(e);
var BB = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = VB(e.marginBox, o), i = MB(n, r, t), a = LB(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Ot((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Ot((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const FB = Ot((e) => Object.values(e)), WB = Ot((e) => Object.values(e));
Ot((e, t) => WB(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function jB(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Ot((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const GB = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, kB = {
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
Ot(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: $B(e.line, r)
  };
});
var go = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const zB = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), UB = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Vl = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Ln = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, HB = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, vr = `${HB.outOfTheWay}s ${Vl.outOfTheWay}`, bo = {
  fluid: `opacity ${vr}`,
  snap: `transform ${vr}, opacity ${vr}`,
  drop: (e) => {
    const t = `${e}s ${Vl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${vr}`,
  placeholder: `height ${vr}, width ${vr}, margin ${vr}`
}, $m = (e) => IB(e, $r) ? void 0 : `translate(${e.x}px, ${e.y}px)`, $s = {
  moveTo: $m,
  drop: (e, t) => {
    const r = $m(e);
    if (r)
      return t ? `${r} scale(${Ln.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Kv = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = _B({
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
}, qB = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot find document.documentElement") : ce()), e;
}, YB = () => {
  const e = qB();
  return Kv({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Ot((e) => FB(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Xv = "data-rfd", Am = (() => {
  const e = `${Xv}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Tm = {
  contextId: `${Xv}-scroll-container-context-id`
}, KB = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Yt : pe;
var mn = KB;
function XB(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var JB = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Jv(e) {
  return e instanceof JB(e).HTMLElement;
}
function ZB(e, t) {
  const r = `[${Am.contextId}="${e}"]`, o = XB(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && cr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Am.draggableId) === t);
  return n ? Jv(n) ? n : (process.env.NODE_ENV !== "production" && cr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && cr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Zv = I.createContext(null), QB = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot find document.body") : ce()), e;
};
let eF = 0;
const Qv = {
  separator: "::"
};
function tF(e, t = Qv) {
  return bt(() => `${e}${t.separator}${eF++}`, [t.separator, e]);
}
function rF(e, t = Qv) {
  const r = I.useId();
  return bt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var eE = "useId" in I ? rF : tF, Ml = I.createContext(null);
function tE(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ll(e, t) {
  tE(() => {
    pe(() => {
      try {
        e();
      } catch (r) {
        Ps(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function nF(e) {
  const t = M(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function Bl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Rm = {
  dragging: 5e3,
  dropAnimating: 4500
}, oF = (e, t) => t ? bo.drop(t.duration) : e ? bo.snap : bo.fluid, iF = (e, t) => {
  if (e)
    return t ? Ln.opacity.drop : Ln.opacity.combining;
}, aF = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function sF(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = aF(e), s = !!n, c = s ? $s.drop(r, i) : $s.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: oF(a, n),
    transform: c,
    opacity: iF(i, s),
    zIndex: s ? Rm.dropAnimating : Rm.dragging,
    pointerEvents: "none"
  };
}
function cF(e) {
  return {
    transform: $s.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function lF(e) {
  return e.type === "DRAGGING" ? sF(e) : cF(e);
}
function uF(e, t, r = $r) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Hv(n, o), a = Is(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function dF(e) {
  const t = eE("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = bt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = at((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot get dimension when no ref is set") : ce()), uF(r, h, g);
  }, [r, n]), f = bt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  mn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), mn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var Fl = I.createContext(null);
function rE(e) {
  e && Jv(e) || (process.env.NODE_ENV !== "production" ? ce(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ce());
}
function pF(e, t, r) {
  Ll(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ce(!1, "Draggable requires a draggableId") : ce(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ce(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ce(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ce(!1, `${o(n)} requires an integer index prop`) : ce(!1)), e.mapped.type !== "DRAGGING" && (rE(r()), e.isEnabled && (ZB(t, n) || (process.env.NODE_ENV !== "production" ? ce(!1, `${o(n)} Unable to find drag handle`) : ce(!1))));
  });
}
function fF(e) {
  tE(() => {
    const t = M(e);
    Ll(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ce(!1, "Draggable isClone prop value changed during component life") : ce(!1));
    }, [e]);
  });
}
function Ro(e) {
  const t = Ct(e);
  return t || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find required context") : ce()), t;
}
function mF(e) {
  e.preventDefault();
}
const gF = (e) => {
  const t = M(null), r = at((x = null) => {
    t.current = x;
  }, []), o = at(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ro(Ml), {
    type: s,
    droppableId: c
  } = Ro(Fl), u = bt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: E
  } = e;
  if (pF(e, n, o), fF(b), !b) {
    const x = bt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    dF(x);
  }
  const O = bt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: mF
  } : null, [n, i, l, d]), v = at((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? E() : Kt(E));
  }, [E, p]), y = bt(() => {
    const x = lF(p), N = p.type === "DRAGGING" && p.dropping ? v : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [n, O, l, p, v, r]), m = bt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var bF = gF, nE = (e, t) => e === t, oE = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const hF = (e) => e.combine ? e.combine.draggableId : null, yF = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function vF() {
  const e = Ot((o, n) => ({
    x: o,
    y: n
  })), t = Ot((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Ot((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Bl(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = go(o.impact), c = yF(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = oE(c), l = hF(c), d = {
        duration: o.dropDuration,
        curve: Vl.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? Ln.opacity.drop : null,
        scale: l ? Ln.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function iE(e = null) {
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
const EF = {
  mapped: {
    type: "SECONDARY",
    offset: $r,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: iE(null)
  }
};
function xF() {
  const e = Ot((i, a) => ({
    x: i,
    y: a
  })), t = Ot(iE), r = Ot((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r($r, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = jB(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = PB(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Bl(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const wF = () => {
  const e = vF(), t = xF();
  return (r, o) => e(r, o) || t(r, o) || EF;
}, SF = {
  dropAnimationFinished: UB
}, OF = kv(wF, SF, null, {
  context: Zv,
  areStatePropsEqual: nE
})(bF);
var NF = OF;
function DF(e) {
  return Ro(Fl).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(NF, e);
}
const Wl = (e) => (t) => e === t, CF = Wl("scroll"), _F = Wl("auto"), IF = Wl("visible"), Vm = (e, t) => t(e.overflowX) || t(e.overflowY), PF = (e, t) => t(e.overflowX) && t(e.overflowY), aE = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Vm(r, CF) || Vm(r, _F);
}, $F = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = QB(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ce()), !aE(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return PF(o, IF) || process.env.NODE_ENV !== "production" && cr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, jl = (e) => e == null ? null : e === document.body ? $F() ? e : null : e === document.documentElement ? null : aE(e) ? e : jl(e.parentElement);
var AF = (e) => {
  !e || !jl(e.parentElement) || process.env.NODE_ENV !== "production" && cr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, As = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const sE = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : sE(e.parentElement) : !1;
var TF = (e) => {
  const t = jl(e), r = sE(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, RF = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
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
    } = s, g = Kv({
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
        max: g,
        diff: {
          value: $r,
          displacement: $r
        }
      }
    };
  })(), u = n === "vertical" ? GB : kB, f = BB({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const VF = (e, t) => {
  const r = qv(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Uv({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Rl({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var MF = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = VF(e, c), f = Is(u, o), l = (() => {
    if (!c)
      return null;
    const d = qv(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Is(d, o),
      scroll: As(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return RF({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const LF = {
  passive: !1
}, BF = {
  passive: !0
};
var Mm = (e) => e.shouldPublishImmediately ? LF : BF;
const to = (e) => e && e.env.closestScrollable || null;
function FF(e) {
  const t = M(null), r = Ro(Ml), o = eE("droppable"), {
    registry: n,
    marshal: i
  } = r, a = nF(e), s = bt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = bt(() => Ot((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? ce(!1, "Can only update scroll when dragging") : ce());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = at(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? $r : As(y.env.closestScrollable);
  }, []), l = at(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = bt(() => hB(l), [l]), g = at(() => {
    const y = t.current, m = to(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find scroll options while scrolling") : ce()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = at((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot collect a droppable while a drag is occurring") : ce());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot collect without a droppable ref") : ce());
    const C = TF(N), R = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = R;
    const $ = MF({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Tm.contextId, r.contextId), A.addEventListener("scroll", g, Mm(R.scrollOptions)), process.env.NODE_ENV !== "production" && AF(A)), $;
  }, [r.contextId, s, g, a]), b = at(() => {
    const y = t.current, m = to(y);
    return y && m || (process.env.NODE_ENV !== "production" ? ce(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ce()), As(m);
  }, []), p = at(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot stop drag when no active drag") : ce());
    const m = to(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Tm.contextId), m.removeEventListener("scroll", g, Mm(y.scrollOptions)));
  }, [g, d]), E = at((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot scroll when there is no drag") : ce());
    const x = to(m);
    x || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot scroll a droppable with no closest scrollable") : ce()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), O = bt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: E
  }), [p, h, b, E]), v = bt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  mn(() => (c.current = v.descriptor, n.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && cr("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(v);
  }), [O, s, p, v, i, n.droppable]), mn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), mn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function aa() {
}
const WF = {
  width: 0,
  height: 0,
  margin: RB
}, jF = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? WF : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, GF = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = jF({
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
    transition: r !== "none" ? bo.placeholder : null
  };
}, kF = (e) => {
  const t = M(null), r = at(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Xe(e.animate === "open");
  pe(() => s ? o !== "open" ? (r(), c(!1), aa) : t.current ? aa : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : aa, [o, s, r]);
  const u = at((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = GF({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var zF = I.memo(kF);
function sa(e) {
  return typeof e == "boolean";
}
function ca(e, t) {
  t.forEach((r) => r(e));
}
const UF = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ce(!1, "A Droppable requires a droppableId prop") : ce()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ce(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ce());
}, function({
  props: e
}) {
  sa(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ce(!1, "isDropDisabled must be a boolean") : ce()), sa(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ce(!1, "isCombineEnabled must be a boolean") : ce()), sa(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ce(!1, "ignoreContainerClipping must be a boolean") : ce());
}, function({
  getDroppableRef: e
}) {
  rE(e());
}], HF = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && cr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], qF = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ce(!1, "Must provide a clone render function (renderClone) for virtual lists") : ce());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ce(!1, "Expected virtual list to not have a placeholder") : ce());
}];
function YF(e) {
  Ll(() => {
    ca(e, UF), e.props.mode === "standard" && ca(e, HF), e.props.mode === "virtual" && ca(e, qF);
  });
}
class KF extends I.PureComponent {
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
const XF = (e) => {
  const t = Ct(Ml);
  t || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find app context") : ce());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: E
  } = e, O = at(() => n.current, []), v = at((P = null) => {
    n.current = P;
  }, []), y = at(() => i.current, []), m = at((P = null) => {
    i.current = P;
  }, []);
  YF({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const x = at(() => {
    o() && p({
      maxScroll: YB()
    });
  }, [o, p]);
  FF({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const N = bt(() => I.createElement(KF, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => I.createElement(zF, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: j,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = bt(() => ({
    innerRef: v,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, v]), R = b ? b.dragging.draggableId : null, $ = bt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = I.createElement(DF, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return pr.createPortal(j, E());
  }
  return I.createElement(Fl.Provider, {
    value: $
  }, a(C, h), A());
};
var JF = XF;
function ZF() {
  return document.body || (process.env.NODE_ENV !== "production" ? ce(!1, "document.body is not ready") : ce()), document.body;
}
const Lm = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: ZF
}, cE = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Lm)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Lm[r]
    });
  return t;
}, la = (e, t) => e === t.droppable.type, Bm = (e, t) => t.draggables[e.draggable.id], QF = () => {
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
  }, r = Ot((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Ot((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: f,
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
  return (n, i) => {
    const a = cE(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (Bl(n)) {
      const l = n.critical;
      if (!la(c, l))
        return t;
      const d = Bm(l, n.dimensions), g = go(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!la(c, l.critical))
        return t;
      const d = Bm(l.critical, n.dimensions);
      return o(s, u, oE(l.result) === s, go(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!la(c, l.critical))
        return t;
      const d = go(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, eW = {
  updateViewportMaxScroll: zB
};
kv(QF, eW, (e, t, r) => ({
  ...cE(r),
  ...e,
  ...t
}), {
  context: Zv,
  areStatePropsEqual: nE
})(JF);
var Fm;
(function(e) {
  e.event = "event", e.props = "prop";
})(Fm || (Fm = {}));
var Wm = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Wm(), "" + Wm();
function tW(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ts = { exports: {} }, ua = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm;
function rW() {
  if (jm) return ua;
  jm = 1;
  var e = I;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ua.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, ua;
}
var Gm = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var km;
function nW() {
  return km || (km = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var E = p[0].inst, O = p[1];
      return c(
        function() {
          E.value = b, E.getSnapshot = h, r(E) && O({ inst: E });
        },
        [g, b, h]
      ), s(
        function() {
          return r(E) && O({ inst: E }), g(function() {
            r(E) && O({ inst: E });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Gm.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Gm;
}
process.env.NODE_ENV === "production" ? Ts.exports = rW() : Ts.exports = nW();
var Gl = Ts.exports, da = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zm;
function oW() {
  if (zm) return da;
  zm = 1;
  var e = I, t = Gl;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return da.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function E(x) {
          if (!O) {
            if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return y = N;
            }
            return y = x;
          }
          if (N = y, o(v, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
        }
        var O = !1, v, y, m = l === void 0 ? null : l;
        return [
          function() {
            return E(f());
          },
          m === null ? void 0 : function() {
            return E(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, da;
}
var Um = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hm;
function iW() {
  return Hm || (Hm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = Gl, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Um.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function E(x) {
            if (!O) {
              if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return y = N;
              }
              return y = x;
            }
            if (N = y, o(v, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
          }
          var O = !1, v, y, m = l === void 0 ? null : l;
          return [
            function() {
              return E(f());
            },
            m === null ? void 0 : function() {
              return E(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Um;
}
process.env.NODE_ENV === "production" ? oW() : iW();
function aW(e) {
  e();
}
let lE = aW;
const sW = (e) => lE = e, cW = () => lE, qm = Symbol.for("react-redux-context"), Ym = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function lW() {
  var e;
  if (!D.createContext) return {};
  const t = (e = Ym[qm]) != null ? e : Ym[qm] = /* @__PURE__ */ new Map();
  let r = t.get(D.createContext);
  return r || (r = D.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(D.createContext, r)), r;
}
const uW = /* @__PURE__ */ lW(), dW = () => {
  throw new Error("uSES not initialized!");
};
function Yr() {
  return Yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Yr.apply(null, arguments);
}
function uE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Rs = { exports: {} }, Ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Km;
function pW() {
  if (Km) return Ae;
  Km = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  function y(m) {
    return v(m) === u;
  }
  return Ae.AsyncMode = c, Ae.ConcurrentMode = u, Ae.ContextConsumer = s, Ae.ContextProvider = a, Ae.Element = t, Ae.ForwardRef = f, Ae.Fragment = o, Ae.Lazy = h, Ae.Memo = g, Ae.Portal = r, Ae.Profiler = i, Ae.StrictMode = n, Ae.Suspense = l, Ae.isAsyncMode = function(m) {
    return y(m) || v(m) === c;
  }, Ae.isConcurrentMode = y, Ae.isContextConsumer = function(m) {
    return v(m) === s;
  }, Ae.isContextProvider = function(m) {
    return v(m) === a;
  }, Ae.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ae.isForwardRef = function(m) {
    return v(m) === f;
  }, Ae.isFragment = function(m) {
    return v(m) === o;
  }, Ae.isLazy = function(m) {
    return v(m) === h;
  }, Ae.isMemo = function(m) {
    return v(m) === g;
  }, Ae.isPortal = function(m) {
    return v(m) === r;
  }, Ae.isProfiler = function(m) {
    return v(m) === i;
  }, Ae.isStrictMode = function(m) {
    return v(m) === n;
  }, Ae.isSuspense = function(m) {
    return v(m) === l;
  }, Ae.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === E || m.$$typeof === O || m.$$typeof === b);
  }, Ae.typeOf = v, Ae;
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
var Xm;
function fW() {
  return Xm || (Xm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function v(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === l || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === p || w.$$typeof === E || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ne = w.$$typeof;
        switch (ne) {
          case t:
            var S = w.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var m = c, x = u, N = s, C = a, R = t, $ = f, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === c;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function H(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === f;
    }
    function Q(w) {
      return y(w) === o;
    }
    function de(w) {
      return y(w) === h;
    }
    function q(w) {
      return y(w) === g;
    }
    function J(w) {
      return y(w) === r;
    }
    function L(w) {
      return y(w) === i;
    }
    function Z(w) {
      return y(w) === n;
    }
    function he(w) {
      return y(w) === l;
    }
    He.AsyncMode = m, He.ConcurrentMode = x, He.ContextConsumer = N, He.ContextProvider = C, He.Element = R, He.ForwardRef = $, He.Fragment = A, He.Lazy = P, He.Memo = T, He.Portal = j, He.Profiler = k, He.StrictMode = V, He.Suspense = W, He.isAsyncMode = G, He.isConcurrentMode = z, He.isContextConsumer = B, He.isContextProvider = H, He.isElement = Y, He.isForwardRef = K, He.isFragment = Q, He.isLazy = de, He.isMemo = q, He.isPortal = J, He.isProfiler = L, He.isStrictMode = Z, He.isSuspense = he, He.isValidElementType = v, He.typeOf = y;
  }()), He;
}
process.env.NODE_ENV === "production" ? Rs.exports = pW() : Rs.exports = fW();
var mW = Rs.exports, kl = mW, gW = {
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
}, bW = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, hW = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, dE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zl = {};
zl[kl.ForwardRef] = hW;
zl[kl.Memo] = dE;
function Jm(e) {
  return kl.isMemo(e) ? dE : zl[e.$$typeof] || gW;
}
var yW = Object.defineProperty, vW = Object.getOwnPropertyNames, Zm = Object.getOwnPropertySymbols, EW = Object.getOwnPropertyDescriptor, xW = Object.getPrototypeOf, Qm = Object.prototype;
function pE(e, t, r) {
  if (typeof t != "string") {
    if (Qm) {
      var o = xW(t);
      o && o !== Qm && pE(e, o, r);
    }
    var n = vW(t);
    Zm && (n = n.concat(Zm(t)));
    for (var i = Jm(e), a = Jm(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!bW[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = EW(t, c);
        try {
          yW(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var wW = pE;
const eg = /* @__PURE__ */ tW(wW);
var Vs = { exports: {} }, Te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg;
function SW() {
  if (tg) return Te;
  tg = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Te.ContextConsumer = a, Te.ContextProvider = i, Te.Element = e, Te.ForwardRef = c, Te.Fragment = r, Te.Lazy = d, Te.Memo = l, Te.Portal = t, Te.Profiler = n, Te.StrictMode = o, Te.Suspense = u, Te.SuspenseList = f, Te.isAsyncMode = function() {
    return !1;
  }, Te.isConcurrentMode = function() {
    return !1;
  }, Te.isContextConsumer = function(p) {
    return b(p) === a;
  }, Te.isContextProvider = function(p) {
    return b(p) === i;
  }, Te.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Te.isForwardRef = function(p) {
    return b(p) === c;
  }, Te.isFragment = function(p) {
    return b(p) === r;
  }, Te.isLazy = function(p) {
    return b(p) === d;
  }, Te.isMemo = function(p) {
    return b(p) === l;
  }, Te.isPortal = function(p) {
    return b(p) === t;
  }, Te.isProfiler = function(p) {
    return b(p) === n;
  }, Te.isStrictMode = function(p) {
    return b(p) === o;
  }, Te.isSuspense = function(p) {
    return b(p) === u;
  }, Te.isSuspenseList = function(p) {
    return b(p) === f;
  }, Te.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Te.typeOf = b, Te;
}
var qe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg;
function OW() {
  return rg || (rg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, E = !1, O = !1, v;
    v = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === f || E || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === v || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var fe = S.type;
            switch (fe) {
              case r:
              case n:
              case o:
              case u:
              case f:
                return fe;
              default:
                var U = fe && fe.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return U;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = a, N = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = f, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return m(S) === a;
    }
    function Y(S) {
      return m(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Q(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function q(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function he(S) {
      return m(S) === o;
    }
    function w(S) {
      return m(S) === u;
    }
    function ne(S) {
      return m(S) === f;
    }
    qe.ContextConsumer = x, qe.ContextProvider = N, qe.Element = C, qe.ForwardRef = R, qe.Fragment = $, qe.Lazy = A, qe.Memo = P, qe.Portal = T, qe.Profiler = j, qe.StrictMode = k, qe.Suspense = V, qe.SuspenseList = W, qe.isAsyncMode = z, qe.isConcurrentMode = B, qe.isContextConsumer = H, qe.isContextProvider = Y, qe.isElement = K, qe.isForwardRef = Q, qe.isFragment = de, qe.isLazy = q, qe.isMemo = J, qe.isPortal = L, qe.isProfiler = Z, qe.isStrictMode = he, qe.isSuspense = w, qe.isSuspenseList = ne, qe.isValidElementType = y, qe.typeOf = m;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Vs.exports = SW() : Vs.exports = OW();
var ng = Vs.exports;
function Ul(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function pa(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ul(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function NW(e, t, r) {
  pa(e, "mapStateToProps"), pa(t, "mapDispatchToProps"), pa(r, "mergeProps");
}
const DW = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function CW(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(O, v) {
    return c = O, u = v, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const O = e(c, u), v = !a(O, f);
    return f = O, v && (d = r(f, l, u)), d;
  }
  function E(O, v) {
    const y = !i(v, u), m = !n(O, c, v, u);
    return c = O, u = v, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(O, v) {
    return s ? E(O, v) : g(O, v);
  };
}
function _W(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = uE(t, DW);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && NW(a, s, c), CW(a, s, c, e, i);
}
function IW(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function PW(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function fE(e, t, r) {
  PW(e) || Ul(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ms(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function og(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function mE(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = og(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = og(s), s = n(i, a)), process.env.NODE_ENV !== "production" && fE(s, o, t), s;
    }, n;
  };
}
function Hl(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function $W(e) {
  return e && typeof e == "object" ? Ms((t) => (
    // @ts-ignore
    IW(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    mE(e, "mapDispatchToProps")
  ) : Hl(e, "mapDispatchToProps") : Ms((t) => ({
    dispatch: t
  }));
}
function AW(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    mE(e, "mapStateToProps")
  ) : Hl(e, "mapStateToProps") : Ms(() => ({}));
}
function TW(e, t, r) {
  return Yr({}, r, e, t);
}
function RW(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && fE(i, r, "mergeProps")), i;
    };
  };
}
function VW(e) {
  return e ? typeof e == "function" ? RW(e) : Hl(e, "mergeProps") : () => TW;
}
function MW() {
  const e = cW();
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
const ig = {
  notify() {
  },
  get: () => []
};
function LW(e, t) {
  let r, o = ig, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let E = !1;
    return () => {
      E || (E = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = MW());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = ig);
  }
  function d() {
    i || (i = !0, f());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const BW = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ls = BW ? D.useLayoutEffect : D.useEffect;
function ag(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function fa(e, t) {
  if (ag(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !ag(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const FW = ["reactReduxForwardedRef"];
let gE = dW;
const WW = (e) => {
  gE = e;
}, jW = [null, null], GW = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function kW(e, t, r) {
  Ls(() => e(...t), r);
}
function zW(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function UW(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (E) {
      p = E, d = E;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function HW(e, t) {
  return e === t;
}
let sg = !1;
function bE(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = HW,
  areOwnPropsEqual: i = fa,
  areStatePropsEqual: a = fa,
  areMergedPropsEqual: s = fa,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = uW
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !sg && (sg = !0, Ul('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = AW(e), d = $W(t), g = VW(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !ng.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${GW(b)}`);
    const p = b.displayName || b.name || "Component", E = `Connect(${p})`, O = {
      shouldHandleStateChanges: h,
      displayName: E,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(m) {
      const [x, N, C] = D.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = uE(m, FW);
        return [m.context, L, Z];
      }, [m]), R = D.useMemo(() => x && x.Consumer && // @ts-ignore
      ng.isContextConsumer(/* @__PURE__ */ D.createElement(x.Consumer, null)) ? x : f, [x, f]), $ = D.useContext(R), A = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const T = A ? m.store : $.store, j = P ? $.getServerState : T.getState, k = D.useMemo(() => _W(T.dispatch, O), [T]), [V, W] = D.useMemo(() => {
        if (!h) return jW;
        const L = LW(T, A ? void 0 : $.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, A, $]), F = D.useMemo(() => A ? $ : Yr({}, $, {
        subscription: V
      }), [A, $, V]), G = D.useRef(), z = D.useRef(C), B = D.useRef(), H = D.useRef(!1);
      D.useRef(!1);
      const Y = D.useRef(!1), K = D.useRef();
      Ls(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Q = D.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = D.useMemo(() => (L) => V ? UW(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        H,
        Y,
        B,
        W,
        L
      ) : () => {
      }, [V]);
      kW(zW, [z, G, H, C, B, W]);
      let q;
      try {
        q = gE(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Q,
          j ? () => k(j(), C) : Q
        );
      } catch (L) {
        throw K.current && (L.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), L;
      }
      Ls(() => {
        K.current = void 0, B.current = void 0, G.current = q;
      });
      const J = D.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ D.createElement(b, Yr({}, q, {
          ref: N
        }))
      ), [N, b, q]);
      return D.useMemo(() => h ? /* @__PURE__ */ D.createElement(R.Provider, {
        value: F
      }, J) : J, [R, J, F]);
    }
    const y = D.memo(v);
    if (y.WrappedComponent = b, y.displayName = v.displayName = E, c) {
      const m = D.forwardRef(function(x, N) {
        return /* @__PURE__ */ D.createElement(y, Yr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = E, m.WrappedComponent = b, eg(m, b);
    }
    return eg(y, b);
  };
}
WW(Gl.useSyncExternalStore);
sW(fr);
function qW(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function hE(e, t) {
  var r = Xe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && qW(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return pe(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function YW(e, t) {
  return hE(function() {
    return e;
  }, t);
}
var ht = hE, st = YW, KW = process.env.NODE_ENV === "production", ma = "Invariant failed";
function cg(e, t) {
  if (KW)
    throw new Error(ma);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(ma, ": ").concat(r) : ma;
  throw new Error(o);
}
var Wr = function(e) {
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
}, yE = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, lg = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, XW = function(e, t) {
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
}, ql = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ga : r, n = e.border, i = n === void 0 ? ga : n, a = e.padding, s = a === void 0 ? ga : a, c = Wr(yE(t, o)), u = Wr(lg(t, i)), f = Wr(lg(u, s));
  return {
    marginBox: c,
    borderBox: Wr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, Wt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? cg(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : cg()), o;
}, JW = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, ZW = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = XW(r, t);
  return ql({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Bs = function(e, t) {
  return t === void 0 && (t = JW()), ZW(e, t);
}, vE = function(e, t) {
  var r = {
    top: Wt(t.marginTop),
    right: Wt(t.marginRight),
    bottom: Wt(t.marginBottom),
    left: Wt(t.marginLeft)
  }, o = {
    top: Wt(t.paddingTop),
    right: Wt(t.paddingRight),
    bottom: Wt(t.paddingBottom),
    left: Wt(t.paddingLeft)
  }, n = {
    top: Wt(t.borderTopWidth),
    right: Wt(t.borderRightWidth),
    bottom: Wt(t.borderBottomWidth),
    left: Wt(t.borderLeftWidth)
  };
  return ql({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, EE = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return vE(t, r);
}, ug = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function QW(e, t) {
  return !!(e === t || ug(e) && ug(t));
}
function ej(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!QW(e[r], t[r]))
      return !1;
  return !0;
}
function Nt(e, t) {
  t === void 0 && (t = ej);
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
var tj = function(e) {
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
const rj = process.env.NODE_ENV === "production", nj = /[ \t]{2,}/g, oj = /^[ \t]*/gm, dg = (e) => e.replace(nj, " ").replace(oj, "").trim(), ij = (e) => dg(`
  %c@hello-pangea/dnd

  %c${dg(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), aj = (e) => [ij(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], sj = "__@hello-pangea/dnd-disable-dev-warnings";
function xE(e, t) {
  rj || typeof window < "u" && window[sj] || console[e](...aj(t));
}
const lr = xE.bind(null, "warn"), Fs = xE.bind(null, "error");
function cj() {
}
function lj(e, t) {
  return {
    ...e,
    ...t
  };
}
function uj(e, t, r) {
  const o = t.map((n) => {
    const i = lj(r, n.options);
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
const dj = process.env.NODE_ENV === "production", pg = "Invariant failed";
class Bn extends Error {
}
Bn.prototype.toString = function() {
  return this.message;
};
function le(e, t) {
  throw dj ? new Bn(pg) : new Bn(`${pg}: ${t || ""}`);
}
class YU extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = cj, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && lr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Bn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Fs(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = uj(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Bn) {
      process.env.NODE_ENV !== "production" && Fs(t.message), this.setState({});
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
const Ar = {
  x: 0,
  y: 0
}, pj = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), fj = (e, t) => e.x === t.x && e.y === t.y, mj = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), gj = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var bj = (e, t) => {
  const r = Wr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const hj = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), yj = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, vj = (e, t) => t ? hj(e, t.scroll.diff.displacement) : e, Ej = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, xj = (e, t) => t && t.shouldClipSubject ? bj(t.pageMarginBox, e) : Wr(e);
var wj = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = vj(e.marginBox, o), i = Ej(n, r, t), a = xj(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Nt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Nt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const Sj = Nt((e) => Object.values(e)), Oj = Nt((e) => Object.values(e));
Nt((e, t) => Oj(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Nj(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Nt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const Dj = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Cj = {
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
Nt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: gj(e.line, r)
  };
});
var ho = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const _j = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Ij = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Yl = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Fn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Pj = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Er = `${Pj.outOfTheWay}s ${Yl.outOfTheWay}`, yo = {
  fluid: `opacity ${Er}`,
  snap: `transform ${Er}, opacity ${Er}`,
  drop: (e) => {
    const t = `${e}s ${Yl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Er}`,
  placeholder: `height ${Er}, width ${Er}, margin ${Er}`
}, fg = (e) => fj(e, Ar) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ws = {
  moveTo: fg,
  drop: (e, t) => {
    const r = fg(e);
    if (r)
      return t ? `${r} scale(${Fn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var wE = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = pj({
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
}, $j = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot find document.documentElement") : le()), e;
}, Aj = () => {
  const e = $j();
  return wE({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Nt((e) => Sj(e).filter((t) => !(!t.isEnabled || !t.frame)));
const SE = "data-rfd", mg = (() => {
  const e = `${SE}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), gg = {
  contextId: `${SE}-scroll-container-context-id`
}, Tj = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Yt : pe;
var gn = Tj;
function Rj(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Vj = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function OE(e) {
  return e instanceof Vj(e).HTMLElement;
}
function Mj(e, t) {
  const r = `[${mg.contextId}="${e}"]`, o = Rj(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && lr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(mg.draggableId) === t);
  return n ? OE(n) ? n : (process.env.NODE_ENV !== "production" && lr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && lr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var NE = I.createContext(null), Lj = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot find document.body") : le()), e;
};
let Bj = 0;
const DE = {
  separator: "::"
};
function Fj(e, t = DE) {
  return ht(() => `${e}${t.separator}${Bj++}`, [t.separator, e]);
}
function Wj(e, t = DE) {
  const r = I.useId();
  return ht(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var CE = "useId" in I ? Wj : Fj, Kl = I.createContext(null);
function _E(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Xl(e, t) {
  _E(() => {
    pe(() => {
      try {
        e();
      } catch (r) {
        Fs(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function jj(e) {
  const t = M(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function Jl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const bg = {
  dragging: 5e3,
  dropAnimating: 4500
}, Gj = (e, t) => t ? yo.drop(t.duration) : e ? yo.snap : yo.fluid, kj = (e, t) => {
  if (e)
    return t ? Fn.opacity.drop : Fn.opacity.combining;
}, zj = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Uj(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = zj(e), s = !!n, c = s ? Ws.drop(r, i) : Ws.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Gj(a, n),
    transform: c,
    opacity: kj(i, s),
    zIndex: s ? bg.dropAnimating : bg.dragging,
    pointerEvents: "none"
  };
}
function Hj(e) {
  return {
    transform: Ws.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function qj(e) {
  return e.type === "DRAGGING" ? Uj(e) : Hj(e);
}
function Yj(e, t, r = Ar) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = vE(n, o), a = Bs(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function Kj(e) {
  const t = CE("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = ht(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = st((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot get dimension when no ref is set") : le()), Yj(r, h, g);
  }, [r, n]), f = ht(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  gn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), gn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var Zl = I.createContext(null);
function IE(e) {
  e && OE(e) || (process.env.NODE_ENV !== "production" ? le(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : le());
}
function Xj(e, t, r) {
  Xl(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? le(!1, "Draggable requires a draggableId") : le(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? le(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : le(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? le(!1, `${o(n)} requires an integer index prop`) : le(!1)), e.mapped.type !== "DRAGGING" && (IE(r()), e.isEnabled && (Mj(t, n) || (process.env.NODE_ENV !== "production" ? le(!1, `${o(n)} Unable to find drag handle`) : le(!1))));
  });
}
function Jj(e) {
  _E(() => {
    const t = M(e);
    Xl(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? le(!1, "Draggable isClone prop value changed during component life") : le(!1));
    }, [e]);
  });
}
function Vo(e) {
  const t = Ct(e);
  return t || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find required context") : le()), t;
}
function Zj(e) {
  e.preventDefault();
}
const Qj = (e) => {
  const t = M(null), r = st((x = null) => {
    t.current = x;
  }, []), o = st(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Vo(Kl), {
    type: s,
    droppableId: c
  } = Vo(Zl), u = ht(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: E
  } = e;
  if (Xj(e, n, o), Jj(b), !b) {
    const x = ht(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    Kj(x);
  }
  const O = ht(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: Zj
  } : null, [n, i, l, d]), v = st((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? E() : Kt(E));
  }, [E, p]), y = ht(() => {
    const x = qj(p), N = p.type === "DRAGGING" && p.dropping ? v : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [n, O, l, p, v, r]), m = ht(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var eG = Qj, PE = (e, t) => e === t, $E = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const tG = (e) => e.combine ? e.combine.draggableId : null, rG = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function nG() {
  const e = Nt((o, n) => ({
    x: o,
    y: n
  })), t = Nt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Nt((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Jl(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = ho(o.impact), c = rG(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = $E(c), l = tG(c), d = {
        duration: o.dropDuration,
        curve: Yl.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? Fn.opacity.drop : null,
        scale: l ? Fn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function AE(e = null) {
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
const oG = {
  mapped: {
    type: "SECONDARY",
    offset: Ar,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: AE(null)
  }
};
function iG() {
  const e = Nt((i, a) => ({
    x: i,
    y: a
  })), t = Nt(AE), r = Nt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Ar, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = Nj(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = mj(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Jl(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const aG = () => {
  const e = nG(), t = iG();
  return (r, o) => e(r, o) || t(r, o) || oG;
}, sG = {
  dropAnimationFinished: Ij
}, cG = bE(aG, sG, null, {
  context: NE,
  areStatePropsEqual: PE
})(eG);
var lG = cG;
function uG(e) {
  return Vo(Zl).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(lG, e);
}
const Ql = (e) => (t) => e === t, dG = Ql("scroll"), pG = Ql("auto"), fG = Ql("visible"), hg = (e, t) => t(e.overflowX) || t(e.overflowY), mG = (e, t) => t(e.overflowX) && t(e.overflowY), TE = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return hg(r, dG) || hg(r, pG);
}, gG = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Lj(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, le()), !TE(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return mG(o, fG) || process.env.NODE_ENV !== "production" && lr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, eu = (e) => e == null ? null : e === document.body ? gG() ? e : null : e === document.documentElement ? null : TE(e) ? e : eu(e.parentElement);
var bG = (e) => {
  !e || !eu(e.parentElement) || process.env.NODE_ENV !== "production" && lr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, js = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const RE = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : RE(e.parentElement) : !1;
var hG = (e) => {
  const t = eu(e), r = RE(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, yG = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
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
    } = s, g = wE({
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
        max: g,
        diff: {
          value: Ar,
          displacement: Ar
        }
      }
    };
  })(), u = n === "vertical" ? Dj : Cj, f = wj({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const vG = (e, t) => {
  const r = EE(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = yE({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return ql({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var EG = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = vG(e, c), f = Bs(u, o), l = (() => {
    if (!c)
      return null;
    const d = EE(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Bs(d, o),
      scroll: js(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return yG({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const xG = {
  passive: !1
}, wG = {
  passive: !0
};
var yg = (e) => e.shouldPublishImmediately ? xG : wG;
const ro = (e) => e && e.env.closestScrollable || null;
function SG(e) {
  const t = M(null), r = Vo(Kl), o = CE("droppable"), {
    registry: n,
    marshal: i
  } = r, a = jj(e), s = ht(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = ht(() => Nt((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? le(!1, "Can only update scroll when dragging") : le());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = st(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Ar : js(y.env.closestScrollable);
  }, []), l = st(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = ht(() => tj(l), [l]), g = st(() => {
    const y = t.current, m = ro(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find scroll options while scrolling") : le()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = st((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? le(!1, "Cannot collect a droppable while a drag is occurring") : le());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot collect without a droppable ref") : le());
    const C = hG(N), R = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = R;
    const $ = EG({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(gg.contextId, r.contextId), A.addEventListener("scroll", g, yg(R.scrollOptions)), process.env.NODE_ENV !== "production" && bG(A)), $;
  }, [r.contextId, s, g, a]), b = st(() => {
    const y = t.current, m = ro(y);
    return y && m || (process.env.NODE_ENV !== "production" ? le(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : le()), js(m);
  }, []), p = st(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot stop drag when no active drag") : le());
    const m = ro(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(gg.contextId), m.removeEventListener("scroll", g, yg(y.scrollOptions)));
  }, [g, d]), E = st((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot scroll when there is no drag") : le());
    const x = ro(m);
    x || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot scroll a droppable with no closest scrollable") : le()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), O = ht(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: E
  }), [p, h, b, E]), v = ht(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  gn(() => (c.current = v.descriptor, n.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && lr("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(v);
  }), [O, s, p, v, i, n.droppable]), gn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), gn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ba() {
}
const OG = {
  width: 0,
  height: 0,
  margin: yj
}, NG = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? OG : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, DG = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = NG({
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
    transition: r !== "none" ? yo.placeholder : null
  };
}, CG = (e) => {
  const t = M(null), r = st(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Xe(e.animate === "open");
  pe(() => s ? o !== "open" ? (r(), c(!1), ba) : t.current ? ba : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : ba, [o, s, r]);
  const u = st((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = DG({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var _G = I.memo(CG);
function ha(e) {
  return typeof e == "boolean";
}
function ya(e, t) {
  t.forEach((r) => r(e));
}
const IG = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? le(!1, "A Droppable requires a droppableId prop") : le()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? le(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : le());
}, function({
  props: e
}) {
  ha(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? le(!1, "isDropDisabled must be a boolean") : le()), ha(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? le(!1, "isCombineEnabled must be a boolean") : le()), ha(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? le(!1, "ignoreContainerClipping must be a boolean") : le());
}, function({
  getDroppableRef: e
}) {
  IE(e());
}], PG = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && lr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], $G = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? le(!1, "Must provide a clone render function (renderClone) for virtual lists") : le());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? le(!1, "Expected virtual list to not have a placeholder") : le());
}];
function AG(e) {
  Xl(() => {
    ya(e, IG), e.props.mode === "standard" && ya(e, PG), e.props.mode === "virtual" && ya(e, $G);
  });
}
class TG extends I.PureComponent {
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
const RG = (e) => {
  const t = Ct(Kl);
  t || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find app context") : le());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: E
  } = e, O = st(() => n.current, []), v = st((P = null) => {
    n.current = P;
  }, []), y = st(() => i.current, []), m = st((P = null) => {
    i.current = P;
  }, []);
  AG({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const x = st(() => {
    o() && p({
      maxScroll: Aj()
    });
  }, [o, p]);
  SG({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const N = ht(() => I.createElement(TG, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => I.createElement(_G, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: j,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = ht(() => ({
    innerRef: v,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, v]), R = b ? b.dragging.draggableId : null, $ = ht(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = I.createElement(uG, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return pr.createPortal(j, E());
  }
  return I.createElement(Zl.Provider, {
    value: $
  }, a(C, h), A());
};
var VG = RG;
function MG() {
  return document.body || (process.env.NODE_ENV !== "production" ? le(!1, "document.body is not ready") : le()), document.body;
}
const vg = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: MG
}, VE = (e) => {
  let t = {
    ...e
  }, r;
  for (r in vg)
    e[r] === void 0 && (t = {
      ...t,
      [r]: vg[r]
    });
  return t;
}, va = (e, t) => e === t.droppable.type, Eg = (e, t) => t.draggables[e.draggable.id], LG = () => {
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
  }, r = Nt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Nt((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: f,
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
  return (n, i) => {
    const a = VE(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (Jl(n)) {
      const l = n.critical;
      if (!va(c, l))
        return t;
      const d = Eg(l, n.dimensions), g = ho(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!va(c, l.critical))
        return t;
      const d = Eg(l.critical, n.dimensions);
      return o(s, u, $E(l.result) === s, ho(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!va(c, l.critical))
        return t;
      const d = ho(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, BG = {
  updateViewportMaxScroll: _j
};
bE(LG, BG, (e, t, r) => ({
  ...VE(r),
  ...e,
  ...t
}), {
  context: NE,
  areStatePropsEqual: PE
})(VG);
var xg;
(function(e) {
  e.event = "event", e.props = "prop";
})(xg || (xg = {}));
var wg = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + wg(), "" + wg();
function FG(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gs = { exports: {} }, Ea = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sg;
function WG() {
  if (Sg) return Ea;
  Sg = 1;
  var e = I;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Ea.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Ea;
}
var Og = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ng;
function jG() {
  return Ng || (Ng = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var E = p[0].inst, O = p[1];
      return c(
        function() {
          E.value = b, E.getSnapshot = h, r(E) && O({ inst: E });
        },
        [g, b, h]
      ), s(
        function() {
          return r(E) && O({ inst: E }), g(function() {
            r(E) && O({ inst: E });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Og.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Og;
}
process.env.NODE_ENV === "production" ? Gs.exports = WG() : Gs.exports = jG();
var tu = Gs.exports, xa = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dg;
function GG() {
  if (Dg) return xa;
  Dg = 1;
  var e = I, t = tu;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return xa.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function E(x) {
          if (!O) {
            if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
              var N = b.value;
              if (g(N, x))
                return y = N;
            }
            return y = x;
          }
          if (N = y, o(v, x)) return N;
          var C = d(x);
          return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
        }
        var O = !1, v, y, m = l === void 0 ? null : l;
        return [
          function() {
            return E(f());
          },
          m === null ? void 0 : function() {
            return E(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, xa;
}
var Cg = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _g;
function kG() {
  return _g || (_g = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = tu, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Cg.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function E(x) {
            if (!O) {
              if (O = !0, v = x, x = d(x), g !== void 0 && b.hasValue) {
                var N = b.value;
                if (g(N, x))
                  return y = N;
              }
              return y = x;
            }
            if (N = y, o(v, x))
              return N;
            var C = d(x);
            return g !== void 0 && g(N, C) ? (v = x, N) : (v = x, y = C);
          }
          var O = !1, v, y, m = l === void 0 ? null : l;
          return [
            function() {
              return E(f());
            },
            m === null ? void 0 : function() {
              return E(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Cg;
}
process.env.NODE_ENV === "production" ? GG() : kG();
function zG(e) {
  e();
}
let ME = zG;
const UG = (e) => ME = e, HG = () => ME, Ig = Symbol.for("react-redux-context"), Pg = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function qG() {
  var e;
  if (!D.createContext) return {};
  const t = (e = Pg[Ig]) != null ? e : Pg[Ig] = /* @__PURE__ */ new Map();
  let r = t.get(D.createContext);
  return r || (r = D.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(D.createContext, r)), r;
}
const YG = /* @__PURE__ */ qG(), KG = () => {
  throw new Error("uSES not initialized!");
};
function Kr() {
  return Kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Kr.apply(null, arguments);
}
function LE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var ks = { exports: {} }, Re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $g;
function XG() {
  if ($g) return Re;
  $g = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
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
  function y(m) {
    return v(m) === u;
  }
  return Re.AsyncMode = c, Re.ConcurrentMode = u, Re.ContextConsumer = s, Re.ContextProvider = a, Re.Element = t, Re.ForwardRef = f, Re.Fragment = o, Re.Lazy = h, Re.Memo = g, Re.Portal = r, Re.Profiler = i, Re.StrictMode = n, Re.Suspense = l, Re.isAsyncMode = function(m) {
    return y(m) || v(m) === c;
  }, Re.isConcurrentMode = y, Re.isContextConsumer = function(m) {
    return v(m) === s;
  }, Re.isContextProvider = function(m) {
    return v(m) === a;
  }, Re.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Re.isForwardRef = function(m) {
    return v(m) === f;
  }, Re.isFragment = function(m) {
    return v(m) === o;
  }, Re.isLazy = function(m) {
    return v(m) === h;
  }, Re.isMemo = function(m) {
    return v(m) === g;
  }, Re.isPortal = function(m) {
    return v(m) === r;
  }, Re.isProfiler = function(m) {
    return v(m) === i;
  }, Re.isStrictMode = function(m) {
    return v(m) === n;
  }, Re.isSuspense = function(m) {
    return v(m) === l;
  }, Re.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === E || m.$$typeof === O || m.$$typeof === b);
  }, Re.typeOf = v, Re;
}
var Ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ag;
function JG() {
  return Ag || (Ag = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function v(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === i || w === n || w === l || w === d || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === g || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === p || w.$$typeof === E || w.$$typeof === O || w.$$typeof === b);
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var ne = w.$$typeof;
        switch (ne) {
          case t:
            var S = w.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var m = c, x = u, N = s, C = a, R = t, $ = f, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(w) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(w) || y(w) === c;
    }
    function z(w) {
      return y(w) === u;
    }
    function B(w) {
      return y(w) === s;
    }
    function H(w) {
      return y(w) === a;
    }
    function Y(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function K(w) {
      return y(w) === f;
    }
    function Q(w) {
      return y(w) === o;
    }
    function de(w) {
      return y(w) === h;
    }
    function q(w) {
      return y(w) === g;
    }
    function J(w) {
      return y(w) === r;
    }
    function L(w) {
      return y(w) === i;
    }
    function Z(w) {
      return y(w) === n;
    }
    function he(w) {
      return y(w) === l;
    }
    Ye.AsyncMode = m, Ye.ConcurrentMode = x, Ye.ContextConsumer = N, Ye.ContextProvider = C, Ye.Element = R, Ye.ForwardRef = $, Ye.Fragment = A, Ye.Lazy = P, Ye.Memo = T, Ye.Portal = j, Ye.Profiler = k, Ye.StrictMode = V, Ye.Suspense = W, Ye.isAsyncMode = G, Ye.isConcurrentMode = z, Ye.isContextConsumer = B, Ye.isContextProvider = H, Ye.isElement = Y, Ye.isForwardRef = K, Ye.isFragment = Q, Ye.isLazy = de, Ye.isMemo = q, Ye.isPortal = J, Ye.isProfiler = L, Ye.isStrictMode = Z, Ye.isSuspense = he, Ye.isValidElementType = v, Ye.typeOf = y;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? ks.exports = XG() : ks.exports = JG();
var ZG = ks.exports, ru = ZG, QG = {
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
}, ek = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, tk = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, BE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, nu = {};
nu[ru.ForwardRef] = tk;
nu[ru.Memo] = BE;
function Tg(e) {
  return ru.isMemo(e) ? BE : nu[e.$$typeof] || QG;
}
var rk = Object.defineProperty, nk = Object.getOwnPropertyNames, Rg = Object.getOwnPropertySymbols, ok = Object.getOwnPropertyDescriptor, ik = Object.getPrototypeOf, Vg = Object.prototype;
function FE(e, t, r) {
  if (typeof t != "string") {
    if (Vg) {
      var o = ik(t);
      o && o !== Vg && FE(e, o, r);
    }
    var n = nk(t);
    Rg && (n = n.concat(Rg(t)));
    for (var i = Tg(e), a = Tg(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!ek[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = ok(t, c);
        try {
          rk(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var ak = FE;
const Mg = /* @__PURE__ */ FG(ak);
var zs = { exports: {} }, Ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lg;
function sk() {
  if (Lg) return Ve;
  Lg = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Ve.ContextConsumer = a, Ve.ContextProvider = i, Ve.Element = e, Ve.ForwardRef = c, Ve.Fragment = r, Ve.Lazy = d, Ve.Memo = l, Ve.Portal = t, Ve.Profiler = n, Ve.StrictMode = o, Ve.Suspense = u, Ve.SuspenseList = f, Ve.isAsyncMode = function() {
    return !1;
  }, Ve.isConcurrentMode = function() {
    return !1;
  }, Ve.isContextConsumer = function(p) {
    return b(p) === a;
  }, Ve.isContextProvider = function(p) {
    return b(p) === i;
  }, Ve.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ve.isForwardRef = function(p) {
    return b(p) === c;
  }, Ve.isFragment = function(p) {
    return b(p) === r;
  }, Ve.isLazy = function(p) {
    return b(p) === d;
  }, Ve.isMemo = function(p) {
    return b(p) === l;
  }, Ve.isPortal = function(p) {
    return b(p) === t;
  }, Ve.isProfiler = function(p) {
    return b(p) === n;
  }, Ve.isStrictMode = function(p) {
    return b(p) === o;
  }, Ve.isSuspense = function(p) {
    return b(p) === u;
  }, Ve.isSuspenseList = function(p) {
    return b(p) === f;
  }, Ve.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Ve.typeOf = b, Ve;
}
var Ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bg;
function ck() {
  return Bg || (Bg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, E = !1, O = !1, v;
    v = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || O || S === o || S === u || S === f || E || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === v || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var fe = S.type;
            switch (fe) {
              case r:
              case n:
              case o:
              case u:
              case f:
                return fe;
              default:
                var U = fe && fe.$$typeof;
                switch (U) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return U;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = a, N = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = f, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(S) {
      return m(S) === a;
    }
    function Y(S) {
      return m(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Q(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function q(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function he(S) {
      return m(S) === o;
    }
    function w(S) {
      return m(S) === u;
    }
    function ne(S) {
      return m(S) === f;
    }
    Ke.ContextConsumer = x, Ke.ContextProvider = N, Ke.Element = C, Ke.ForwardRef = R, Ke.Fragment = $, Ke.Lazy = A, Ke.Memo = P, Ke.Portal = T, Ke.Profiler = j, Ke.StrictMode = k, Ke.Suspense = V, Ke.SuspenseList = W, Ke.isAsyncMode = z, Ke.isConcurrentMode = B, Ke.isContextConsumer = H, Ke.isContextProvider = Y, Ke.isElement = K, Ke.isForwardRef = Q, Ke.isFragment = de, Ke.isLazy = q, Ke.isMemo = J, Ke.isPortal = L, Ke.isProfiler = Z, Ke.isStrictMode = he, Ke.isSuspense = w, Ke.isSuspenseList = ne, Ke.isValidElementType = y, Ke.typeOf = m;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? zs.exports = sk() : zs.exports = ck();
var Fg = zs.exports;
function ou(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function wa(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ou(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function lk(e, t, r) {
  wa(e, "mapStateToProps"), wa(t, "mapDispatchToProps"), wa(r, "mergeProps");
}
const uk = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function dk(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(O, v) {
    return c = O, u = v, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const O = e(c, u), v = !a(O, f);
    return f = O, v && (d = r(f, l, u)), d;
  }
  function E(O, v) {
    const y = !i(v, u), m = !n(O, c, v, u);
    return c = O, u = v, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(O, v) {
    return s ? E(O, v) : g(O, v);
  };
}
function pk(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = LE(t, uk);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && lk(a, s, c), dk(a, s, c, e, i);
}
function fk(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function mk(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function WE(e, t, r) {
  mk(e) || ou(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Us(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Wg(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function jE(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Wg(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Wg(s), s = n(i, a)), process.env.NODE_ENV !== "production" && WE(s, o, t), s;
    }, n;
  };
}
function iu(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function gk(e) {
  return e && typeof e == "object" ? Us((t) => (
    // @ts-ignore
    fk(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    jE(e, "mapDispatchToProps")
  ) : iu(e, "mapDispatchToProps") : Us((t) => ({
    dispatch: t
  }));
}
function bk(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    jE(e, "mapStateToProps")
  ) : iu(e, "mapStateToProps") : Us(() => ({}));
}
function hk(e, t, r) {
  return Kr({}, r, e, t);
}
function yk(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && WE(i, r, "mergeProps")), i;
    };
  };
}
function vk(e) {
  return e ? typeof e == "function" ? yk(e) : iu(e, "mergeProps") : () => hk;
}
function Ek() {
  const e = HG();
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
const jg = {
  notify() {
  },
  get: () => []
};
function xk(e, t) {
  let r, o = jg, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let E = !1;
    return () => {
      E || (E = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = Ek());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = jg);
  }
  function d() {
    i || (i = !0, f());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const wk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Hs = wk ? D.useLayoutEffect : D.useEffect;
function Gg(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Sa(e, t) {
  if (Gg(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Gg(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const Sk = ["reactReduxForwardedRef"];
let GE = KG;
const Ok = (e) => {
  GE = e;
}, Nk = [null, null], Dk = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Ck(e, t, r) {
  Hs(() => e(...t), r);
}
function _k(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function Ik(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (E) {
      p = E, d = E;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function Pk(e, t) {
  return e === t;
}
let kg = !1;
function kE(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = Pk,
  areOwnPropsEqual: i = Sa,
  areStatePropsEqual: a = Sa,
  areMergedPropsEqual: s = Sa,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = YG
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !kg && (kg = !0, ou('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = bk(e), d = gk(t), g = vk(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Fg.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Dk(b)}`);
    const p = b.displayName || b.name || "Component", E = `Connect(${p})`, O = {
      shouldHandleStateChanges: h,
      displayName: E,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(m) {
      const [x, N, C] = D.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = LE(m, Sk);
        return [m.context, L, Z];
      }, [m]), R = D.useMemo(() => x && x.Consumer && // @ts-ignore
      Fg.isContextConsumer(/* @__PURE__ */ D.createElement(x.Consumer, null)) ? x : f, [x, f]), $ = D.useContext(R), A = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const T = A ? m.store : $.store, j = P ? $.getServerState : T.getState, k = D.useMemo(() => pk(T.dispatch, O), [T]), [V, W] = D.useMemo(() => {
        if (!h) return Nk;
        const L = xk(T, A ? void 0 : $.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, A, $]), F = D.useMemo(() => A ? $ : Kr({}, $, {
        subscription: V
      }), [A, $, V]), G = D.useRef(), z = D.useRef(C), B = D.useRef(), H = D.useRef(!1);
      D.useRef(!1);
      const Y = D.useRef(!1), K = D.useRef();
      Hs(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Q = D.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = D.useMemo(() => (L) => V ? Ik(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        H,
        Y,
        B,
        W,
        L
      ) : () => {
      }, [V]);
      Ck(_k, [z, G, H, C, B, W]);
      let q;
      try {
        q = GE(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Q,
          j ? () => k(j(), C) : Q
        );
      } catch (L) {
        throw K.current && (L.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), L;
      }
      Hs(() => {
        K.current = void 0, B.current = void 0, G.current = q;
      });
      const J = D.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ D.createElement(b, Kr({}, q, {
          ref: N
        }))
      ), [N, b, q]);
      return D.useMemo(() => h ? /* @__PURE__ */ D.createElement(R.Provider, {
        value: F
      }, J) : J, [R, J, F]);
    }
    const y = D.memo(v);
    if (y.WrappedComponent = b, y.displayName = v.displayName = E, c) {
      const m = D.forwardRef(function(x, N) {
        return /* @__PURE__ */ D.createElement(y, Kr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return m.displayName = E, m.WrappedComponent = b, Mg(m, b);
    }
    return Mg(y, b);
  };
}
Ok(tu.useSyncExternalStore);
UG(fr);
function $k(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function zE(e, t) {
  var r = Xe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && $k(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return pe(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function Ak(e, t) {
  return zE(function() {
    return e;
  }, t);
}
var yt = zE, ct = Ak, Tk = process.env.NODE_ENV === "production", Oa = "Invariant failed";
function zg(e, t) {
  if (Tk)
    throw new Error(Oa);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Oa, ": ").concat(r) : Oa;
  throw new Error(o);
}
var jr = function(e) {
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
}, UE = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Ug = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, Rk = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Na = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, au = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Na : r, n = e.border, i = n === void 0 ? Na : n, a = e.padding, s = a === void 0 ? Na : a, c = jr(UE(t, o)), u = jr(Ug(t, i)), f = jr(Ug(u, s));
  return {
    marginBox: c,
    borderBox: jr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, jt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? zg(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : zg()), o;
}, Vk = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Mk = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = Rk(r, t);
  return au({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, qs = function(e, t) {
  return t === void 0 && (t = Vk()), Mk(e, t);
}, HE = function(e, t) {
  var r = {
    top: jt(t.marginTop),
    right: jt(t.marginRight),
    bottom: jt(t.marginBottom),
    left: jt(t.marginLeft)
  }, o = {
    top: jt(t.paddingTop),
    right: jt(t.paddingRight),
    bottom: jt(t.paddingBottom),
    left: jt(t.paddingLeft)
  }, n = {
    top: jt(t.borderTopWidth),
    right: jt(t.borderRightWidth),
    bottom: jt(t.borderBottomWidth),
    left: jt(t.borderLeftWidth)
  };
  return au({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, qE = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return HE(t, r);
}, Hg = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Lk(e, t) {
  return !!(e === t || Hg(e) && Hg(t));
}
function Bk(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Lk(e[r], t[r]))
      return !1;
  return !0;
}
function Dt(e, t) {
  t === void 0 && (t = Bk);
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
var Fk = function(e) {
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
const Wk = process.env.NODE_ENV === "production", jk = /[ \t]{2,}/g, Gk = /^[ \t]*/gm, qg = (e) => e.replace(jk, " ").replace(Gk, "").trim(), kk = (e) => qg(`
  %c@hello-pangea/dnd

  %c${qg(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), zk = (e) => [kk(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Uk = "__@hello-pangea/dnd-disable-dev-warnings";
function YE(e, t) {
  Wk || typeof window < "u" && window[Uk] || console[e](...zk(t));
}
const ur = YE.bind(null, "warn"), Ys = YE.bind(null, "error");
function Hk() {
}
function qk(e, t) {
  return {
    ...e,
    ...t
  };
}
function Yk(e, t, r) {
  const o = t.map((n) => {
    const i = qk(r, n.options);
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
const Kk = process.env.NODE_ENV === "production", Yg = "Invariant failed";
class Wn extends Error {
}
Wn.prototype.toString = function() {
  return this.message;
};
function ue(e, t) {
  throw Kk ? new Wn(Yg) : new Wn(`${Yg}: ${t || ""}`);
}
class KU extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Hk, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && ur(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Wn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ys(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Yk(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Wn) {
      process.env.NODE_ENV !== "production" && Ys(t.message), this.setState({});
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
const Tr = {
  x: 0,
  y: 0
}, Xk = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Jk = (e, t) => e.x === t.x && e.y === t.y, Zk = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Qk = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var ez = (e, t) => {
  const r = jr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const tz = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), rz = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, nz = (e, t) => t ? tz(e, t.scroll.diff.displacement) : e, oz = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, iz = (e, t) => t && t.shouldClipSubject ? ez(t.pageMarginBox, e) : jr(e);
var az = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = nz(e.marginBox, o), i = oz(n, r, t), a = iz(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Dt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Dt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const sz = Dt((e) => Object.values(e)), cz = Dt((e) => Object.values(e));
Dt((e, t) => cz(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function lz(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Dt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const uz = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, dz = {
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
Dt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: Qk(e.line, r)
  };
});
var vo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const pz = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), fz = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), su = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, jn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, mz = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, xr = `${mz.outOfTheWay}s ${su.outOfTheWay}`, Eo = {
  fluid: `opacity ${xr}`,
  snap: `transform ${xr}, opacity ${xr}`,
  drop: (e) => {
    const t = `${e}s ${su.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${xr}`,
  placeholder: `height ${xr}, width ${xr}, margin ${xr}`
}, Kg = (e) => Jk(e, Tr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ks = {
  moveTo: Kg,
  drop: (e, t) => {
    const r = Kg(e);
    if (r)
      return t ? `${r} scale(${jn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var KE = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = Xk({
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
}, gz = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot find document.documentElement") : ue()), e;
}, bz = () => {
  const e = gz();
  return KE({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Dt((e) => sz(e).filter((t) => !(!t.isEnabled || !t.frame)));
const XE = "data-rfd", Xg = (() => {
  const e = `${XE}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Jg = {
  contextId: `${XE}-scroll-container-context-id`
}, hz = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Yt : pe;
var bn = hz;
function yz(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var vz = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function JE(e) {
  return e instanceof vz(e).HTMLElement;
}
function Ez(e, t) {
  const r = `[${Xg.contextId}="${e}"]`, o = yz(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && ur(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Xg.draggableId) === t);
  return n ? JE(n) ? n : (process.env.NODE_ENV !== "production" && ur("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ur(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var ZE = I.createContext(null), xz = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot find document.body") : ue()), e;
};
let wz = 0;
const QE = {
  separator: "::"
};
function Sz(e, t = QE) {
  return yt(() => `${e}${t.separator}${wz++}`, [t.separator, e]);
}
function Oz(e, t = QE) {
  const r = I.useId();
  return yt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var ex = "useId" in I ? Oz : Sz, cu = I.createContext(null);
function tx(e) {
  process.env.NODE_ENV !== "production" && e();
}
function lu(e, t) {
  tx(() => {
    pe(() => {
      try {
        e();
      } catch (r) {
        Ys(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Nz(e) {
  const t = M(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function uu(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Zg = {
  dragging: 5e3,
  dropAnimating: 4500
}, Dz = (e, t) => t ? Eo.drop(t.duration) : e ? Eo.snap : Eo.fluid, Cz = (e, t) => {
  if (e)
    return t ? jn.opacity.drop : jn.opacity.combining;
}, _z = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Iz(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = _z(e), s = !!n, c = s ? Ks.drop(r, i) : Ks.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Dz(a, n),
    transform: c,
    opacity: Cz(i, s),
    zIndex: s ? Zg.dropAnimating : Zg.dragging,
    pointerEvents: "none"
  };
}
function Pz(e) {
  return {
    transform: Ks.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function $z(e) {
  return e.type === "DRAGGING" ? Iz(e) : Pz(e);
}
function Az(e, t, r = Tr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = HE(n, o), a = qs(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function Tz(e) {
  const t = ex("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = yt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ct((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot get dimension when no ref is set") : ue()), Az(r, h, g);
  }, [r, n]), f = yt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  bn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), bn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var du = I.createContext(null);
function rx(e) {
  e && JE(e) || (process.env.NODE_ENV !== "production" ? ue(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ue());
}
function Rz(e, t, r) {
  lu(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ue(!1, "Draggable requires a draggableId") : ue(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ue(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ue(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ue(!1, `${o(n)} requires an integer index prop`) : ue(!1)), e.mapped.type !== "DRAGGING" && (rx(r()), e.isEnabled && (Ez(t, n) || (process.env.NODE_ENV !== "production" ? ue(!1, `${o(n)} Unable to find drag handle`) : ue(!1))));
  });
}
function Vz(e) {
  tx(() => {
    const t = M(e);
    lu(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ue(!1, "Draggable isClone prop value changed during component life") : ue(!1));
    }, [e]);
  });
}
function Mo(e) {
  const t = Ct(e);
  return t || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find required context") : ue()), t;
}
function Mz(e) {
  e.preventDefault();
}
const Lz = (e) => {
  const t = M(null), r = ct((x = null) => {
    t.current = x;
  }, []), o = ct(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Mo(cu), {
    type: s,
    droppableId: c
  } = Mo(du), u = yt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: E
  } = e;
  if (Rz(e, n, o), Vz(b), !b) {
    const x = yt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    Tz(x);
  }
  const O = yt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: Mz
  } : null, [n, i, l, d]), v = ct((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? E() : Kt(E));
  }, [E, p]), y = yt(() => {
    const x = $z(p), N = p.type === "DRAGGING" && p.dropping ? v : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: O
    };
  }, [n, O, l, p, v, r]), m = yt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var Bz = Lz, nx = (e, t) => e === t, ox = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Fz = (e) => e.combine ? e.combine.draggableId : null, Wz = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function jz() {
  const e = Dt((o, n) => ({
    x: o,
    y: n
  })), t = Dt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Dt((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (uu(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = vo(o.impact), c = Wz(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = ox(c), l = Fz(c), d = {
        duration: o.dropDuration,
        curve: su.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? jn.opacity.drop : null,
        scale: l ? jn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function ix(e = null) {
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
const Gz = {
  mapped: {
    type: "SECONDARY",
    offset: Tr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ix(null)
  }
};
function kz() {
  const e = Dt((i, a) => ({
    x: i,
    y: a
  })), t = Dt(ix), r = Dt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Tr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = lz(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = Zk(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
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
const zz = () => {
  const e = jz(), t = kz();
  return (r, o) => e(r, o) || t(r, o) || Gz;
}, Uz = {
  dropAnimationFinished: fz
}, Hz = kE(zz, Uz, null, {
  context: ZE,
  areStatePropsEqual: nx
})(Bz);
var qz = Hz;
function Yz(e) {
  return Mo(du).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(qz, e);
}
const pu = (e) => (t) => e === t, Kz = pu("scroll"), Xz = pu("auto"), Jz = pu("visible"), Qg = (e, t) => t(e.overflowX) || t(e.overflowY), Zz = (e, t) => t(e.overflowX) && t(e.overflowY), ax = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Qg(r, Kz) || Qg(r, Xz);
}, Qz = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = xz(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ue()), !ax(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Zz(o, Jz) || process.env.NODE_ENV !== "production" && ur(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, fu = (e) => e == null ? null : e === document.body ? Qz() ? e : null : e === document.documentElement ? null : ax(e) ? e : fu(e.parentElement);
var eU = (e) => {
  !e || !fu(e.parentElement) || process.env.NODE_ENV !== "production" && ur(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Xs = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const sx = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : sx(e.parentElement) : !1;
var tU = (e) => {
  const t = fu(e), r = sx(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, rU = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
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
    } = s, g = KE({
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
        max: g,
        diff: {
          value: Tr,
          displacement: Tr
        }
      }
    };
  })(), u = n === "vertical" ? uz : dz, f = az({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const nU = (e, t) => {
  const r = qE(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = UE({
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
var oU = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = nU(e, c), f = qs(u, o), l = (() => {
    if (!c)
      return null;
    const d = qE(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: qs(d, o),
      scroll: Xs(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return rU({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const iU = {
  passive: !1
}, aU = {
  passive: !0
};
var eb = (e) => e.shouldPublishImmediately ? iU : aU;
const no = (e) => e && e.env.closestScrollable || null;
function sU(e) {
  const t = M(null), r = Mo(cu), o = ex("droppable"), {
    registry: n,
    marshal: i
  } = r, a = Nz(e), s = yt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = yt(() => Dt((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? ue(!1, "Can only update scroll when dragging") : ue());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = ct(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Tr : Xs(y.env.closestScrollable);
  }, []), l = ct(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = yt(() => Fk(l), [l]), g = ct(() => {
    const y = t.current, m = no(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find scroll options while scrolling") : ue()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = ct((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot collect a droppable while a drag is occurring") : ue());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot collect without a droppable ref") : ue());
    const C = tU(N), R = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = R;
    const $ = oU({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Jg.contextId, r.contextId), A.addEventListener("scroll", g, eb(R.scrollOptions)), process.env.NODE_ENV !== "production" && eU(A)), $;
  }, [r.contextId, s, g, a]), b = ct(() => {
    const y = t.current, m = no(y);
    return y && m || (process.env.NODE_ENV !== "production" ? ue(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ue()), Xs(m);
  }, []), p = ct(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot stop drag when no active drag") : ue());
    const m = no(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Jg.contextId), m.removeEventListener("scroll", g, eb(y.scrollOptions)));
  }, [g, d]), E = ct((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot scroll when there is no drag") : ue());
    const x = no(m);
    x || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot scroll a droppable with no closest scrollable") : ue()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), O = yt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: E
  }), [p, h, b, E]), v = yt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: O
  }), [O, s, o]);
  bn(() => (c.current = v.descriptor, n.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && ur("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(v);
  }), [O, s, p, v, i, n.droppable]), bn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), bn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Da() {
}
const cU = {
  width: 0,
  height: 0,
  margin: rz
}, lU = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? cU : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, uU = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = lU({
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
    transition: r !== "none" ? Eo.placeholder : null
  };
}, dU = (e) => {
  const t = M(null), r = ct(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Xe(e.animate === "open");
  pe(() => s ? o !== "open" ? (r(), c(!1), Da) : t.current ? Da : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Da, [o, s, r]);
  const u = ct((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = uU({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var pU = I.memo(dU);
function Ca(e) {
  return typeof e == "boolean";
}
function _a(e, t) {
  t.forEach((r) => r(e));
}
const fU = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ue(!1, "A Droppable requires a droppableId prop") : ue()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ue(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ue());
}, function({
  props: e
}) {
  Ca(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ue(!1, "isDropDisabled must be a boolean") : ue()), Ca(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ue(!1, "isCombineEnabled must be a boolean") : ue()), Ca(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ue(!1, "ignoreContainerClipping must be a boolean") : ue());
}, function({
  getDroppableRef: e
}) {
  rx(e());
}], mU = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && ur(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], gU = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ue(!1, "Must provide a clone render function (renderClone) for virtual lists") : ue());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ue(!1, "Expected virtual list to not have a placeholder") : ue());
}];
function bU(e) {
  lu(() => {
    _a(e, fU), e.props.mode === "standard" && _a(e, mU), e.props.mode === "virtual" && _a(e, gU);
  });
}
class hU extends I.PureComponent {
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
const yU = (e) => {
  const t = Ct(cu);
  t || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find app context") : ue());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: E
  } = e, O = ct(() => n.current, []), v = ct((P = null) => {
    n.current = P;
  }, []), y = ct(() => i.current, []), m = ct((P = null) => {
    i.current = P;
  }, []);
  bU({
    props: e,
    getDroppableRef: O,
    getPlaceholderRef: y
  });
  const x = ct(() => {
    o() && p({
      maxScroll: bz()
    });
  }, [o, p]);
  sU({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: O
  });
  const N = yt(() => I.createElement(hU, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => I.createElement(pU, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: j,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = yt(() => ({
    innerRef: v,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, v]), R = b ? b.dragging.draggableId : null, $ = yt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = I.createElement(Yz, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return pr.createPortal(j, E());
  }
  return I.createElement(du.Provider, {
    value: $
  }, a(C, h), A());
};
var vU = yU;
function EU() {
  return document.body || (process.env.NODE_ENV !== "production" ? ue(!1, "document.body is not ready") : ue()), document.body;
}
const tb = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: EU
}, cx = (e) => {
  let t = {
    ...e
  }, r;
  for (r in tb)
    e[r] === void 0 && (t = {
      ...t,
      [r]: tb[r]
    });
  return t;
}, Ia = (e, t) => e === t.droppable.type, rb = (e, t) => t.draggables[e.draggable.id], xU = () => {
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
  }, r = Dt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Dt((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: f,
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
  return (n, i) => {
    const a = cx(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (uu(n)) {
      const l = n.critical;
      if (!Ia(c, l))
        return t;
      const d = rb(l, n.dimensions), g = vo(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Ia(c, l.critical))
        return t;
      const d = rb(l.critical, n.dimensions);
      return o(s, u, ox(l.result) === s, vo(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Ia(c, l.critical))
        return t;
      const d = vo(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, wU = {
  updateViewportMaxScroll: pz
};
kE(xU, wU, (e, t, r) => ({
  ...cx(r),
  ...e,
  ...t
}), {
  context: ZE,
  areStatePropsEqual: nx
})(vU);
var Js = /* @__PURE__ */ new Map(), oo = /* @__PURE__ */ new WeakMap(), nb = 0, SU = void 0;
function OU(e) {
  return e ? (oo.has(e) || (nb += 1, oo.set(e, nb.toString())), oo.get(e)) : "0";
}
function NU(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? OU(e.root) : e[t]}`).toString();
}
function DU(e) {
  const t = NU(e);
  let r = Js.get(t);
  if (!r) {
    const o = /* @__PURE__ */ new Map();
    let n;
    const i = new IntersectionObserver((a) => {
      a.forEach((s) => {
        var c;
        const u = s.isIntersecting && n.some((f) => s.intersectionRatio >= f);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u), (c = o.get(s.target)) == null || c.forEach((f) => {
          f(u, s);
        });
      });
    }, e);
    n = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: o
    }, Js.set(t, r);
  }
  return r;
}
function CU(e, t, r = {}, o = SU) {
  if (typeof window.IntersectionObserver > "u" && o !== void 0) {
    const c = e.getBoundingClientRect();
    return t(o, {
      isIntersecting: o,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: c,
      intersectionRect: c,
      rootBounds: c
    }), () => {
    };
  }
  const { id: n, observer: i, elements: a } = DU(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), Js.delete(n));
  };
}
function _U({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: o,
  root: n,
  triggerOnce: i,
  skip: a,
  initialInView: s,
  fallbackInView: c,
  onChange: u
} = {}) {
  var f;
  const [l, d] = D.useState(null), g = D.useRef(u), [h, b] = D.useState({
    inView: !!s,
    entry: void 0
  });
  g.current = u, D.useEffect(
    () => {
      if (a || !l) return;
      let v;
      return v = CU(
        l,
        (y, m) => {
          b({
            inView: y,
            entry: m
          }), g.current && g.current(y, m), m.isIntersecting && i && v && (v(), v = void 0);
        },
        {
          root: n,
          rootMargin: o,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        c
      ), () => {
        v && v();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      l,
      n,
      o,
      i,
      a,
      r,
      c,
      t
    ]
  );
  const p = (f = h.entry) == null ? void 0 : f.target, E = D.useRef(void 0);
  !l && p && !i && !a && E.current !== p && (E.current = p, b({
    inView: !!s,
    entry: void 0
  }));
  const O = [d, h.inView, h.entry];
  return O.ref = O[0], O.inView = O[1], O.entry = O[2], O;
}
const IU = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, o] = Xe(!1), n = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    o(i > 100);
  };
  return pe(() => (window.addEventListener("scroll", n), () => {
    window.removeEventListener("scroll", n);
  }), []), r ? /* @__PURE__ */ X(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ X(
        OC,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, XU = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: o,
  isScrollTopButton: n = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: c, data: u } = e, f = u == null ? void 0 : u.pages.flatMap((g) => g), { ref: l, inView: d } = _U();
  return pe(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ lt(xo, { children: [
    n && /* @__PURE__ */ X(IU, { className: o }),
    /* @__PURE__ */ X(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(f != null && f.length) && f.map((g, h) => t(g, h))
      }
    ),
    /* @__PURE__ */ X(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: l,
        children: (s || c) && /* @__PURE__ */ X(NC, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(f != null && f.length) && /* @__PURE__ */ X("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, JU = () => {
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
  TU as Button,
  RU as Checkbox,
  VU as Chips,
  Zs as ErrorText,
  wo as Icon,
  XU as InfiniteScroll,
  MU as Input,
  LU as List,
  ob as Loader,
  BU as MultiSelectSearch,
  IU as ScrollTopButton,
  FU as Search,
  WU as Select,
  jU as Table,
  GU as Textarea,
  mb as Wrapper,
  Eb as useDebounce,
  JU as useScroll
};
