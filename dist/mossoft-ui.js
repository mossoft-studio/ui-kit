import { jsx as P, Fragment as _t, jsxs as he } from "react/jsx-runtime";
import * as G from "react";
import H, { createContext as Gt, useRef as j, useLayoutEffect as Mo, useEffect as fe, useId as Lo, useContext as pe, useInsertionEffect as xc, useCallback as _o, useMemo as ut, Children as Pd, isValidElement as Nd, useState as Se, forwardRef as Ad, createElement as Td, Fragment as Ec, Component as Id } from "react";
import Od, { flushSync as wc } from "react-dom";
const Bo = Gt({});
function $o(e) {
  const t = j(null);
  return t.current === null && (t.current = e()), t.current;
}
const Fo = typeof window < "u", Dc = Fo ? Mo : fe, fr = /* @__PURE__ */ Gt(null), ko = Gt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class Rd extends G.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, o = r instanceof HTMLElement && r.offsetWidth || 0, i = this.props.sizeRef.current;
      i.height = n.offsetHeight || 0, i.width = n.offsetWidth || 0, i.top = n.offsetTop, i.left = n.offsetLeft, i.right = o - i.width - i.left;
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
function Vd({ children: e, isPresent: t, anchorX: n }) {
  const r = Lo(), o = j(null), i = j({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: s } = pe(ko);
  return xc(() => {
    const { width: a, height: c, top: l, left: d, right: u } = i.current;
    if (t || !o.current || !a || !c)
      return;
    const f = n === "left" ? `left: ${d}` : `right: ${u}`;
    o.current.dataset.motionPopId = r;
    const p = document.createElement("style");
    return s && (p.nonce = s), document.head.appendChild(p), p.sheet && p.sheet.insertRule(`
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
  }, [t]), P(Rd, { isPresent: t, childRef: o, sizeRef: i, children: G.cloneElement(e, { ref: o }) });
}
const Md = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: s, anchorX: a }) => {
  const c = $o(Ld), l = Lo(), d = _o((f) => {
    c.set(f, !0);
    for (const p of c.values())
      if (!p)
        return;
    r && r();
  }, [c, r]), u = ut(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: d,
      register: (f) => (c.set(f, !1), () => c.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? [Math.random(), d] : [n, d]
  );
  return ut(() => {
    c.forEach((f, p) => c.set(p, !1));
  }, [n]), G.useEffect(() => {
    !n && !c.size && r && r();
  }, [n]), s === "popLayout" && (e = P(Vd, { isPresent: n, anchorX: a, children: e })), P(fr.Provider, { value: u, children: e });
};
function Ld() {
  return /* @__PURE__ */ new Map();
}
function Sc(e = !0) {
  const t = pe(fr);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = Lo();
  fe(() => {
    if (e)
      return o(i);
  }, [e]);
  const s = _o(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const jn = (e) => e.key || "";
function Ji(e) {
  const t = [];
  return Pd.forEach(e, (n) => {
    Nd(n) && t.push(n);
  }), t;
}
const _d = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: i = "sync", propagate: s = !1, anchorX: a = "left" }) => {
  const [c, l] = Sc(s), d = ut(() => Ji(e), [e]), u = s && !c ? [] : d.map(jn), f = j(!0), p = j(d), m = $o(() => /* @__PURE__ */ new Map()), [g, h] = Se(d), [v, x] = Se(d);
  Dc(() => {
    f.current = !1, p.current = d;
    for (let y = 0; y < v.length; y++) {
      const D = jn(v[y]);
      u.includes(D) ? m.delete(D) : m.get(D) !== !0 && m.set(D, !1);
    }
  }, [v, u.length, u.join("-")]);
  const E = [];
  if (d !== g) {
    let y = [...d];
    for (let D = 0; D < v.length; D++) {
      const C = v[D], S = jn(C);
      u.includes(S) || (y.splice(D, 0, C), E.push(C));
    }
    return i === "wait" && E.length && (y = E), x(Ji(y)), h(d), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && v.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = pe(Bo);
  return P(_t, { children: v.map((y) => {
    const D = jn(y), C = s && !c ? !1 : d === v || u.includes(D), S = () => {
      if (m.has(D))
        m.set(D, !0);
      else
        return;
      let L = !0;
      m.forEach((O) => {
        O || (L = !1);
      }), L && (w == null || w(), x(p.current), s && (l == null || l()), r && r());
    };
    return P(Md, { isPresent: C, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: i, onExitComplete: C ? void 0 : S, anchorX: a, children: y }, D);
  }) });
};
function jo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Go(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Bd = {
  skipAnimations: !1,
  useManualTiming: !1
};
// @__NO_SIDE_EFFECTS__
function Uo(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Be = /* @__NO_SIDE_EFFECTS__ */ (e) => e, un = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Wo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return jo(this.subscriptions, t), () => Go(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
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
function Cc(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Qi = /* @__PURE__ */ new Set();
function pr(e, t, n) {
  e || Qi.has(t) || (console.warn(t), Qi.add(t));
}
const $d = /* @__PURE__ */ Uo(() => window.ScrollTimeline !== void 0);
class Fd {
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
      if ($d() && o.attachTimeline)
        return o.attachTimeline(t);
      if (typeof n == "function")
        return n(o);
    });
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
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
class kd extends Fd {
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
}
const es = {
  value: null,
  addProjectionMetrics: null
}, zo = (e) => Array.isArray(e) && typeof e[0] == "number", jd = {};
function Gd(e, t) {
  const n = /* @__PURE__ */ Uo(e);
  return () => jd[t] ?? n();
}
const dn = /* @__PURE__ */ Gd(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Pc = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += e(i / (o - 1)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, en = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ro = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ en([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ en([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ en([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ en([0.33, 1.53, 0.69, 0.99])
};
function Nc(e, t) {
  if (e)
    return typeof e == "function" && dn() ? Pc(e, t) : zo(e) ? en(e) : Array.isArray(e) ? e.map((n) => Nc(n, t) || ro.easeOut) : ro[e];
}
function Ud(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: a = "easeInOut", times: c } = {}, l = void 0) {
  const d = {
    [t]: n
  };
  c && (d.offset = c);
  const u = Nc(a, o);
  return Array.isArray(u) && (d.easing = u), e.animate(d, {
    delay: r,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal",
    pseudoElement: l
  });
}
function Ho(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Ko(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Qn = 2e4;
function Yo(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Qn; )
    t += n, r = e.next(t);
  return t >= Qn ? 1 / 0 : t;
}
function Wd(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(Yo(r), Qn);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: /* @__PURE__ */ ze(o)
  };
}
function Ac(e) {
  return !!(typeof e == "function" && dn() || !e || typeof e == "string" && (e in ro || dn()) || zo(e) || Array.isArray(e) && e.every(Ac));
}
function ts(e, t) {
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
function zd(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, i = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = 0;
  function l(u) {
    s.has(u) && (d.schedule(u), e()), c++, u(a);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, f = !1, p = !1) => {
      const g = p && o ? n : r;
      return f && s.add(u), g.has(u) || g.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      r.delete(u), s.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (a = u, o) {
        i = !0;
        return;
      }
      o = !0, [n, r] = [r, n], n.forEach(l), t && es.value && es.value.frameloop[t].push(c), c = 0, n.clear(), o = !1, i && (i = !1, d.process(u));
    }
  };
  return d;
}
const Hd = 40;
function Tc(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, s = Gn.reduce((v, x) => (v[x] = zd(i, t ? x : void 0), v), {}), { read: a, resolveKeyframes: c, update: l, preRender: d, render: u, postRender: f } = s, p = () => {
    const v = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(v - o.timestamp, Hd), 1), o.timestamp = v, o.isProcessing = !0, a.process(o), c.process(o), l.process(o), d.process(o), u.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(p));
  }, m = () => {
    n = !0, r = !0, o.isProcessing || e(p);
  };
  return { schedule: Gn.reduce((v, x) => {
    const E = s[x];
    return v[x] = (w, y = !1, D = !1) => (n || m(), E.schedule(w, y, D)), v;
  }, {}), cancel: (v) => {
    for (let x = 0; x < Gn.length; x++)
      s[Gn[x]].cancel(v);
  }, state: o, steps: s };
}
const { schedule: te, cancel: dt, state: ve, steps: Pr } = /* @__PURE__ */ Tc(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0), { schedule: qo, cancel: H0 } = /* @__PURE__ */ Tc(queueMicrotask, !1);
let qn;
function Kd() {
  qn = void 0;
}
const He = {
  now: () => (qn === void 0 && He.set(ve.isProcessing || Bd.useManualTiming ? ve.timestamp : performance.now()), qn),
  set: (e) => {
    qn = e, queueMicrotask(Kd);
  }
}, Fe = {
  x: !1,
  y: !1
};
function Ic() {
  return Fe.x || Fe.y;
}
function Yd(e) {
  return e === "x" || e === "y" ? Fe[e] ? null : (Fe[e] = !0, () => {
    Fe[e] = !1;
  }) : Fe.x || Fe.y ? null : (Fe.x = Fe.y = !0, () => {
    Fe.x = Fe.y = !1;
  });
}
function qd(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    const o = document.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function Oc(e, t) {
  const n = qd(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function ns(e) {
  return !(e.pointerType === "touch" || Ic());
}
function Xd(e, t, n = {}) {
  const [r, o, i] = Oc(e, n), s = (a) => {
    if (!ns(a))
      return;
    const { target: c } = a, l = t(c, a);
    if (typeof l != "function" || !c)
      return;
    const d = (u) => {
      ns(u) && (l(u), c.removeEventListener("pointerleave", d));
    };
    c.addEventListener("pointerleave", d, o);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", s, o);
  }), i;
}
const Rc = (e, t) => t ? e === t ? !0 : Rc(e, t.parentElement) : !1, Xo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Zd = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Jd(e) {
  return Zd.has(e.tagName) || e.tabIndex !== -1;
}
const tn = /* @__PURE__ */ new WeakSet();
function rs(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Nr(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Qd = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = rs(() => {
    if (tn.has(n))
      return;
    Nr(n, "down");
    const o = rs(() => {
      Nr(n, "up");
    }), i = () => Nr(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function os(e) {
  return Xo(e) && !Ic();
}
function ef(e, t, n = {}) {
  const [r, o, i] = Oc(e, n), s = (a) => {
    const c = a.currentTarget;
    if (!os(a) || tn.has(c))
      return;
    tn.add(c);
    const l = t(c, a), d = (p, m) => {
      window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", f), !(!os(p) || !tn.has(c)) && (tn.delete(c), typeof l == "function" && l(p, { success: m }));
    }, u = (p) => {
      d(p, c === window || c === document || n.useGlobalTarget || Rc(c, p.target));
    }, f = (p) => {
      d(p, !1);
    };
    window.addEventListener("pointerup", u, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o), a instanceof HTMLElement && (a.addEventListener("focus", (l) => Qd(l, o)), !Jd(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), i;
}
const is = 30, tf = (e) => !isNaN(parseFloat(e));
class nf {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.version = "12.6.3", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      const i = He.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = He.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = tf(this.current));
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
    return process.env.NODE_ENV !== "production" && pr(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Wo());
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > is)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, is);
    return Cc(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function fn(e, t) {
  return new nf(e, t);
}
const Vc = Gt({ strict: !1 }), ss = {
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
}, Bt = {};
for (const e in ss)
  Bt[e] = {
    isEnabled: (t) => ss[e].some((n) => !!t[n])
  };
function rf(e) {
  for (const t in e)
    Bt[t] = {
      ...Bt[t],
      ...e[t]
    };
}
const of = /* @__PURE__ */ new Set([
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
function er(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || of.has(e);
}
let Mc = (e) => !er(e);
function sf(e) {
  e && (Mc = (t) => t.startsWith("on") ? !er(t) : e(t));
}
try {
  sf(require("@emotion/is-prop-valid").default);
} catch {
}
function af(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Mc(o) || n === !0 && er(o) || !t && !er(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function cf(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && pr(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const hr = /* @__PURE__ */ Gt({});
function mr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function pn(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Zo = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Jo = ["initial", ...Zo];
function gr(e) {
  return mr(e.animate) || Jo.some((t) => pn(e[t]));
}
function Lc(e) {
  return !!(gr(e) || e.variants);
}
function lf(e, t) {
  if (gr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || pn(n) ? n : void 0,
      animate: pn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function uf(e) {
  const { initial: t, animate: n } = lf(e, pe(hr));
  return ut(() => ({ initial: t, animate: n }), [as(t), as(n)]);
}
function as(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const df = Symbol.for("motionComponentSymbol");
function It(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function ff(e, t, n) {
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
const Qo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), pf = "framerAppearId", _c = "data-" + Qo(pf), Bc = Gt({});
function hf(e, t, n, r, o) {
  var g, h;
  const { visualElement: i } = pe(hr), s = pe(Vc), a = pe(fr), c = pe(ko).reducedMotion, l = j(null);
  r = r || s.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = l.current, u = pe(Bc);
  d && !d.projection && o && (d.type === "html" || d.type === "svg") && mf(l.current, n, o, u);
  const f = j(!1);
  xc(() => {
    d && f.current && d.update(n, a);
  });
  const p = n[_c], m = j(!!p && !((g = window.MotionHandoffIsComplete) != null && g.call(window, p)) && ((h = window.MotionHasOptimisedAnimation) == null ? void 0 : h.call(window, p)));
  return Dc(() => {
    d && (f.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), qo.render(d.render), m.current && d.animationState && d.animationState.animateChanges());
  }), fe(() => {
    d && (!m.current && d.animationState && d.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) == null || v.call(window, p);
    }), m.current = !1));
  }), d;
}
function mf(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: c, layoutRoot: l } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : $c(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || a && It(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: r,
    layoutScroll: c,
    layoutRoot: l
  });
}
function $c(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : $c(e.parent);
}
function gf({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && rf(e);
  function i(a, c) {
    let l;
    const d = {
      ...pe(ko),
      ...a,
      layoutId: vf(a)
    }, { isStatic: u } = d, f = uf(a), p = r(a, u);
    if (!u && Fo) {
      yf(d, e);
      const m = bf(d);
      l = m.MeasureLayout, f.visualElement = hf(o, p, d, t, m.ProjectionNode);
    }
    return he(hr.Provider, { value: f, children: [l && f.visualElement ? P(l, { visualElement: f.visualElement, ...d }) : null, n(o, a, ff(p, f.visualElement, c), p, u, f.visualElement)] });
  }
  i.displayName = `motion.${typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`}`;
  const s = Ad(i);
  return s[df] = o, s;
}
function vf({ layoutId: e }) {
  const t = pe(Bo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function yf(e, t) {
  const n = pe(Vc).strict;
  process.env.NODE_ENV;
}
function bf(e) {
  const { drag: t, layout: n } = Bt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Fc = (e) => (t) => typeof t == "string" && t.startsWith(e), ei = /* @__PURE__ */ Fc("--"), xf = /* @__PURE__ */ Fc("var(--"), ti = (e) => xf(e) ? Ef.test(e.split("/*")[0].trim()) : !1, Ef = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, hn = {};
function wf(e) {
  for (const t in e)
    hn[t] = e[t], ei(t) && (hn[t].isCSSVariable = !0);
}
const Ut = [
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
], Pt = new Set(Ut);
function kc(e, { layout: t, layoutId: n }) {
  return Pt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!hn[e] || e === "opacity");
}
const Ee = (e) => !!(e && e.getVelocity), jc = (e, t) => t && typeof e == "number" ? t.transform(e) : e, et = (e, t, n) => n > t ? t : n < e ? e : n, Wt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, mn = {
  ...Wt,
  transform: (e) => et(0, 1, e)
}, Un = {
  ...Wt,
  default: 1
}, On = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), it = /* @__PURE__ */ On("deg"), Ke = /* @__PURE__ */ On("%"), $ = /* @__PURE__ */ On("px"), Df = /* @__PURE__ */ On("vh"), Sf = /* @__PURE__ */ On("vw"), cs = {
  ...Ke,
  parse: (e) => Ke.parse(e) / 100,
  transform: (e) => Ke.transform(e * 100)
}, Cf = {
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
}, Pf = {
  rotate: it,
  rotateX: it,
  rotateY: it,
  rotateZ: it,
  scale: Un,
  scaleX: Un,
  scaleY: Un,
  scaleZ: Un,
  skew: it,
  skewX: it,
  skewY: it,
  distance: $,
  translateX: $,
  translateY: $,
  translateZ: $,
  x: $,
  y: $,
  z: $,
  perspective: $,
  transformPerspective: $,
  opacity: mn,
  originX: cs,
  originY: cs,
  originZ: $
}, ls = {
  ...Wt,
  transform: Math.round
}, ni = {
  ...Cf,
  ...Pf,
  zIndex: ls,
  size: $,
  // SVG
  fillOpacity: mn,
  strokeOpacity: mn,
  numOctaves: ls
}, Nf = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Af = Ut.length;
function Tf(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < Af; i++) {
    const s = Ut[i], a = e[s];
    if (a === void 0)
      continue;
    let c = !0;
    if (typeof a == "number" ? c = a === (s.startsWith("scale") ? 1 : 0) : c = parseFloat(a) === 0, !c || n) {
      const l = jc(a, ni[s]);
      if (!c) {
        o = !1;
        const d = Nf[s] || s;
        r += `${d}(${l}) `;
      }
      n && (t[s] = l);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function ri(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1, a = !1;
  for (const c in t) {
    const l = t[c];
    if (Pt.has(c)) {
      s = !0;
      continue;
    } else if (ei(c)) {
      o[c] = l;
      continue;
    } else {
      const d = jc(l, ni[c]);
      c.startsWith("origin") ? (a = !0, i[c] = d) : r[c] = d;
    }
  }
  if (t.transform || (s || n ? r.transform = Tf(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: c = "50%", originY: l = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${c} ${l} ${d}`;
  }
}
const oi = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Gc(e, t, n) {
  for (const r in t)
    !Ee(t[r]) && !kc(r, n) && (e[r] = t[r]);
}
function If({ transformTemplate: e }, t) {
  return ut(() => {
    const n = oi();
    return ri(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Of(e, t) {
  const n = e.style || {}, r = {};
  return Gc(r, n, e), Object.assign(r, If(e, t)), r;
}
function Rf(e, t) {
  const n = {}, r = Of(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Vf = [
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
function ii(e) {
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
      !!(Vf.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const Mf = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Lf = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function _f(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Mf : Lf;
  e[i.offset] = $.transform(-r);
  const s = $.transform(t), a = $.transform(n);
  e[i.array] = `${s} ${a}`;
}
function us(e, t, n) {
  return typeof e == "string" ? e : $.transform(t + n * e);
}
function Bf(e, t, n) {
  const r = us(t, e.x, e.width), o = us(n, e.y, e.height);
  return `${r} ${o}`;
}
function si(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, d, u) {
  if (ri(e, l, u), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: p, dimensions: m } = e;
  f.transform && (m && (p.transform = f.transform), delete f.transform), m && (o !== void 0 || i !== void 0 || p.transform) && (p.transformOrigin = Bf(m, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), s !== void 0 && _f(f, s, a, c, !1);
}
const Uc = () => ({
  ...oi(),
  attrs: {}
}), ai = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function $f(e, t, n, r) {
  const o = ut(() => {
    const i = Uc();
    return si(i, t, ai(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Gc(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function Ff(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const c = (ii(n) ? $f : Rf)(r, i, s, n), l = af(r, typeof n == "string", e), d = n !== Ec ? { ...l, ...c, ref: o } : {}, { children: u } = r, f = ut(() => Ee(u) ? u.get() : u, [u]);
    return Td(n, {
      ...d,
      children: f
    });
  };
}
function ds(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function ci(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = ds(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = ds(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
const oo = (e) => Array.isArray(e), kf = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), jf = (e) => oo(e) ? e[e.length - 1] || 0 : e;
function Xn(e) {
  const t = Ee(e) ? e.get() : e;
  return kf(t) ? t.toValue() : t;
}
function Gf({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, i) {
  const s = {
    latestValues: Uf(r, o, i, e),
    renderState: t()
  };
  return n && (s.onMount = (a) => n({ props: r, current: a, ...s }), s.onUpdate = (a) => n(a)), s;
}
const Wc = (e) => (t, n) => {
  const r = pe(hr), o = pe(fr), i = () => Gf(e, t, r, o);
  return n ? i() : $o(i);
};
function Uf(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Xn(i[f]);
  let { initial: s, animate: a } = e;
  const c = gr(e), l = Lc(e);
  t && l && !c && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || s === !1;
  const u = d ? a : s;
  if (u && typeof u != "boolean" && !mr(u)) {
    const f = Array.isArray(u) ? u : [u];
    for (let p = 0; p < f.length; p++) {
      const m = ci(e, f[p]);
      if (m) {
        const { transitionEnd: g, transition: h, ...v } = m;
        for (const x in v) {
          let E = v[x];
          if (Array.isArray(E)) {
            const w = d ? E.length - 1 : 0;
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
function li(e, t, n) {
  var i;
  const { style: r } = e, o = {};
  for (const s in r)
    (Ee(r[s]) || t.style && Ee(t.style[s]) || kc(s, e) || ((i = n == null ? void 0 : n.getValue(s)) == null ? void 0 : i.liveStyle) !== void 0) && (o[s] = r[s]);
  return o;
}
const Wf = {
  useVisualState: Wc({
    scrapeMotionValuesFromProps: li,
    createRenderState: oi
  })
};
function zc(e, t) {
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
function Hc(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const Kc = /* @__PURE__ */ new Set([
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
function Yc(e, t, n, r) {
  Hc(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Kc.has(o) ? o : Qo(o), t.attrs[o]);
}
function qc(e, t, n) {
  const r = li(e, t, n);
  for (const o in e)
    if (Ee(e[o]) || Ee(t[o])) {
      const i = Ut.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
const fs = ["x", "y", "width", "height", "cx", "cy", "r"], zf = {
  useVisualState: Wc({
    scrapeMotionValuesFromProps: qc,
    createRenderState: Uc,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let i = !!e.drag;
      if (!i) {
        for (const a in o)
          if (Pt.has(a)) {
            i = !0;
            break;
          }
      }
      if (!i)
        return;
      let s = !t;
      if (t)
        for (let a = 0; a < fs.length; a++) {
          const c = fs[a];
          e[c] !== t[c] && (s = !0);
        }
      s && te.read(() => {
        zc(n, r), te.render(() => {
          si(r, o, ai(n.tagName), e.transformTemplate), Yc(n, r);
        });
      });
    }
  })
};
function Hf(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...ii(r) ? zf : Wf,
      preloadedFeatures: e,
      useRender: Ff(o),
      createVisualElement: t,
      Component: r
    };
    return gf(s);
  };
}
function gn(e, t, n) {
  const r = e.getProps();
  return ci(r, t, n !== void 0 ? n : r.custom, e);
}
const Xc = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ut
]);
function Kf(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fn(n));
}
function Yf(e, t) {
  const n = gn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = jf(i[s]);
    Kf(e, s, a);
  }
}
function qf(e) {
  return !!(Ee(e) && e.add);
}
function io(e, t) {
  const n = e.getValue("willChange");
  if (qf(n))
    return n.add(t);
}
function Zc(e) {
  return e.props[_c];
}
const Jc = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Xf = 1e-7, Zf = 12;
function Jf(e, t, n, r, o) {
  let i, s, a = 0;
  do
    s = t + (n - t) / 2, i = Jc(s, r, o) - e, i > 0 ? n = s : t = s;
  while (Math.abs(i) > Xf && ++a < Zf);
  return s;
}
function Rn(e, t, n, r) {
  if (e === t && n === r)
    return Be;
  const o = (i) => Jf(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Jc(o(i), t, r);
}
const Qc = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, el = (e) => (t) => 1 - e(1 - t), tl = /* @__PURE__ */ Rn(0.33, 1.53, 0.69, 0.99), ui = /* @__PURE__ */ el(tl), nl = /* @__PURE__ */ Qc(ui), rl = (e) => (e *= 2) < 1 ? 0.5 * ui(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), di = (e) => 1 - Math.sin(Math.acos(e)), ol = el(di), il = Qc(di), sl = (e) => /^0[^.\s]+$/u.test(e);
function Qf(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || sl(e) : !0;
}
const nn = (e) => Math.round(e * 1e5) / 1e5, fi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ep(e) {
  return e == null;
}
const tp = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, pi = (e, t) => (n) => !!(typeof n == "string" && tp.test(n) && n.startsWith(e) || t && !ep(n) && Object.prototype.hasOwnProperty.call(n, t)), al = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, s, a] = r.match(fi);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, np = (e) => et(0, 255, e), Ar = {
  ...Wt,
  transform: (e) => Math.round(np(e))
}, xt = {
  test: /* @__PURE__ */ pi("rgb", "red"),
  parse: /* @__PURE__ */ al("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ar.transform(e) + ", " + Ar.transform(t) + ", " + Ar.transform(n) + ", " + nn(mn.transform(r)) + ")"
};
function rp(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const so = {
  test: /* @__PURE__ */ pi("#"),
  parse: rp,
  transform: xt.transform
}, Ot = {
  test: /* @__PURE__ */ pi("hsl", "hue"),
  parse: /* @__PURE__ */ al("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ke.transform(nn(t)) + ", " + Ke.transform(nn(n)) + ", " + nn(mn.transform(r)) + ")"
}, xe = {
  test: (e) => xt.test(e) || so.test(e) || Ot.test(e),
  parse: (e) => xt.test(e) ? xt.parse(e) : Ot.test(e) ? Ot.parse(e) : so.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? xt.transform(e) : Ot.transform(e)
}, op = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ip(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(fi)) == null ? void 0 : t.length) || 0) + (((n = e.match(op)) == null ? void 0 : n.length) || 0) > 0;
}
const cl = "number", ll = "color", sp = "var", ap = "var(", ps = "${}", cp = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const a = t.replace(cp, (c) => (xe.test(c) ? (r.color.push(i), o.push(ll), n.push(xe.parse(c))) : c.startsWith(ap) ? (r.var.push(i), o.push(sp), n.push(c)) : (r.number.push(i), o.push(cl), n.push(parseFloat(c))), ++i, ps)).split(ps);
  return { values: n, split: a, indexes: r, types: o };
}
function ul(e) {
  return vn(e).values;
}
function dl(e) {
  const { split: t, types: n } = vn(e), r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (i += t[s], o[s] !== void 0) {
        const a = n[s];
        a === cl ? i += nn(o[s]) : a === ll ? i += xe.transform(o[s]) : i += o[s];
      }
    return i;
  };
}
const lp = (e) => typeof e == "number" ? 0 : e;
function up(e) {
  const t = ul(e);
  return dl(e)(t.map(lp));
}
const ft = {
  test: ip,
  parse: ul,
  createTransformer: dl,
  getAnimatableNone: up
}, dp = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function fp(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(fi) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = dp.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const pp = /\b([a-z-]*)\(.*?\)/gu, ao = {
  ...ft,
  getAnimatableNone: (e) => {
    const t = e.match(pp);
    return t ? t.map(fp).join(" ") : e;
  }
}, hp = {
  ...ni,
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
}, fl = (e) => hp[e];
function pl(e, t) {
  let n = fl(e);
  return n !== ao && (n = ft), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const mp = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function gp(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !mp.has(i) && vn(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = pl(n, o);
}
const Et = (e) => e * 180 / Math.PI, co = (e) => {
  const t = Et(Math.atan2(e[1], e[0]));
  return lo(t);
}, vp = {
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
}, lo = (e) => (e = e % 360, e < 0 && (e += 360), e), hs = co, ms = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), gs = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), yp = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ms,
  scaleY: gs,
  scale: (e) => (ms(e) + gs(e)) / 2,
  rotateX: (e) => lo(Et(Math.atan2(e[6], e[5]))),
  rotateY: (e) => lo(Et(Math.atan2(-e[2], e[0]))),
  rotateZ: hs,
  rotate: hs,
  skewX: (e) => Et(Math.atan(e[4])),
  skewY: (e) => Et(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function vs(e) {
  return e.includes("scale") ? 1 : 0;
}
function uo(e, t) {
  if (!e || e === "none")
    return vs(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = yp, o = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = vp, o = a;
  }
  if (!o)
    return vs(t);
  const i = r[t], s = o[1].split(",").map(xp);
  return typeof i == "function" ? i(s) : s[i];
}
const bp = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return uo(n, t);
};
function xp(e) {
  return parseFloat(e.trim());
}
const ys = (e) => e === Wt || e === $, Ep = /* @__PURE__ */ new Set(["x", "y", "z"]), wp = Ut.filter((e) => !Ep.has(e));
function Dp(e) {
  const t = [];
  return wp.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const $t = {
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
$t.translateX = $t.x;
$t.translateY = $t.y;
const wt = /* @__PURE__ */ new Set();
let fo = !1, po = !1;
function hl() {
  if (po) {
    const e = Array.from(wt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = Dp(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([i, s]) => {
        var a;
        (a = r.getValue(i)) == null || a.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  po = !1, fo = !1, wt.forEach((e) => e.complete()), wt.clear();
}
function ml() {
  wt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (po = !0);
  });
}
function Sp() {
  ml(), hl();
}
class hi {
  constructor(t, n, r, o, i, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (wt.add(this), fo || (fo = !0, te.read(ml), te.resolveKeyframes(hl))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(), a = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const c = r.readValue(n, a);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else
          t[i] = t[i - 1];
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), wt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, wt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const gl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Cp = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Pp(e) {
  const t = Cp.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function vl(e, t, n = 1) {
  const [r, o] = Pp(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return gl(s) ? parseFloat(s) : s;
  }
  return ti(o) ? vl(o, t, n + 1) : o;
}
const yl = (e) => (t) => t.test(e), Np = {
  test: (e) => e === "auto",
  parse: (e) => e
}, bl = [Wt, $, Ke, it, Sf, Df, Np], bs = (e) => bl.find(yl(e));
class xl extends hi {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let l = t[c];
      if (typeof l == "string" && (l = l.trim(), ti(l))) {
        const d = vl(l, n.current);
        d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !Xc.has(r) || t.length !== 2)
      return;
    const [o, i] = t, s = bs(o), a = bs(i);
    if (s !== a)
      if (ys(s) && ys(a))
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
      Qf(t[o]) && r.push(o);
    r.length && gp(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = $t[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    const i = r.length - 1, s = r[i];
    r[i] = $t[n](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([c, l]) => {
      t.getValue(c).set(l);
    }), this.resolveNoneKeyframes();
  }
}
const xs = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(ft.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Ap(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Tp(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = xs(o, t), a = xs(i, t);
  return !s || !a ? !1 : Ap(e) || (n === "spring" || Ho(n)) && r;
}
const Ip = (e) => e !== null;
function vr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(Ip), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Op = 40;
class El {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = He.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: s,
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > Op ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Sp(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = He.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: i, delay: s, onComplete: a, onUpdate: c, isGenerator: l } = this.options;
    if (!l && !Tp(t, r, o, i))
      if (s)
        this.options.duration = 0;
      else {
        c && c(vr(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...d
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
function Tr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Rp({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, s = 0;
  if (!t)
    o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - a;
    o = Tr(c, a, e + 1 / 3), i = Tr(c, a, e), s = Tr(c, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function tr(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ir = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, Vp = [so, xt, Ot], Mp = (e) => Vp.find((t) => t.test(e));
function Es(e) {
  const t = Mp(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Ot && (n = Rp(n)), n;
}
const ws = (e, t) => {
  const n = Es(e), r = Es(t);
  if (!n || !r)
    return tr(e, t);
  const o = { ...n };
  return (i) => (o.red = Ir(n.red, r.red, i), o.green = Ir(n.green, r.green, i), o.blue = Ir(n.blue, r.blue, i), o.alpha = le(n.alpha, r.alpha, i), xt.transform(o));
}, Lp = (e, t) => (n) => t(e(n)), Vn = (...e) => e.reduce(Lp), ho = /* @__PURE__ */ new Set(["none", "hidden"]);
function _p(e, t) {
  return ho.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Bp(e, t) {
  return (n) => le(e, t, n);
}
function mi(e) {
  return typeof e == "number" ? Bp : typeof e == "string" ? ti(e) ? tr : xe.test(e) ? ws : kp : Array.isArray(e) ? wl : typeof e == "object" ? xe.test(e) ? ws : $p : tr;
}
function wl(e, t) {
  const n = [...e], r = n.length, o = e.map((i, s) => mi(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++)
      n[s] = o[s](i);
    return n;
  };
}
function $p(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = mi(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function Fp(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o], s = e.indexes[i][r[i]], a = e.values[s] ?? 0;
    n[o] = a, r[i]++;
  }
  return n;
}
const kp = (e, t) => {
  const n = ft.createTransformer(t), r = vn(e), o = vn(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? ho.has(e) && !o.values.length || ho.has(t) && !r.values.length ? _p(e, t) : Vn(wl(Fp(r, o), o.values), n) : tr(e, t);
};
function Dl(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? le(e, t, n) : mi(e)(e, t);
}
const jp = 5;
function Sl(e, t, n) {
  const r = Math.max(t - jp, 0);
  return Cc(n - e(r), t - r);
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
}, Or = 1e-3;
function Gp({ duration: e = ue.duration, bounce: t = ue.bounce, velocity: n = ue.velocity, mass: r = ue.mass }) {
  let o, i, s = 1 - t;
  s = et(ue.minDamping, ue.maxDamping, s), e = et(ue.minDuration, ue.maxDuration, /* @__PURE__ */ ze(e)), s < 1 ? (o = (l) => {
    const d = l * s, u = d * e, f = d - n, p = mo(l, s), m = Math.exp(-u);
    return Or - f / p * m;
  }, i = (l) => {
    const u = l * s * e, f = u * n + n, p = Math.pow(s, 2) * Math.pow(l, 2) * e, m = Math.exp(-u), g = mo(Math.pow(l, 2), s);
    return (-o(l) + Or > 0 ? -1 : 1) * ((f - p) * m) / g;
  }) : (o = (l) => {
    const d = Math.exp(-l * e), u = (l - n) * e + 1;
    return -Or + d * u;
  }, i = (l) => {
    const d = Math.exp(-l * e), u = (n - l) * (e * e);
    return d * u;
  });
  const a = 5 / e, c = Wp(o, i, a);
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
      damping: s * 2 * Math.sqrt(r * l),
      duration: e
    };
  }
}
const Up = 12;
function Wp(e, t, n) {
  let r = n;
  for (let o = 1; o < Up; o++)
    r = r - e(r) / t(r);
  return r;
}
function mo(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const zp = ["duration", "bounce"], Hp = ["stiffness", "damping", "mass"];
function Ds(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Kp(e) {
  let t = {
    velocity: ue.velocity,
    stiffness: ue.stiffness,
    damping: ue.damping,
    mass: ue.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ds(e, Hp) && Ds(e, zp))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * et(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ue.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = Gp(e);
      t = {
        ...t,
        ...n,
        mass: ue.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function nr(e = ue.visualDuration, t = ue.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: c, damping: l, mass: d, duration: u, velocity: f, isResolvedFromDuration: p } = Kp({
    ...n,
    velocity: -/* @__PURE__ */ ze(n.velocity || 0)
  }), m = f || 0, g = l / (2 * Math.sqrt(c * d)), h = s - i, v = /* @__PURE__ */ ze(Math.sqrt(c / d)), x = Math.abs(h) < 5;
  r || (r = x ? ue.restSpeed.granular : ue.restSpeed.default), o || (o = x ? ue.restDelta.granular : ue.restDelta.default);
  let E;
  if (g < 1) {
    const y = mo(v, g);
    E = (D) => {
      const C = Math.exp(-g * v * D);
      return s - C * ((m + g * v * h) / y * Math.sin(y * D) + h * Math.cos(y * D));
    };
  } else if (g === 1)
    E = (y) => s - Math.exp(-v * y) * (h + (m + v * h) * y);
  else {
    const y = v * Math.sqrt(g * g - 1);
    E = (D) => {
      const C = Math.exp(-g * v * D), S = Math.min(y * D, 300);
      return s - C * ((m + g * v * h) * Math.sinh(S) + y * h * Math.cosh(S)) / y;
    };
  }
  const w = {
    calculatedDuration: p && u || null,
    next: (y) => {
      const D = E(y);
      if (p)
        a.done = y >= u;
      else {
        let C = 0;
        g < 1 && (C = y === 0 ? /* @__PURE__ */ We(m) : Sl(E, y, D));
        const S = Math.abs(C) <= r, L = Math.abs(s - D) <= o;
        a.done = S && L;
      }
      return a.value = a.done ? s : D, a;
    },
    toString: () => {
      const y = Math.min(Yo(w), Qn), D = Pc((C) => w.next(y * C).value, y, 30);
      return y + "ms " + D;
    },
    toTransition: () => {
    }
  };
  return w;
}
nr.applyToOptions = (e) => {
  const t = Wd(e, 100, nr);
  return e.ease = dn() ? t.ease : "easeOut", e.duration = /* @__PURE__ */ We(t.duration), e.type = "keyframes", e;
};
function Ss({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: c, restDelta: l = 0.5, restSpeed: d }) {
  const u = e[0], f = {
    done: !1,
    value: u
  }, p = (S) => a !== void 0 && S < a || c !== void 0 && S > c, m = (S) => a === void 0 ? c : c === void 0 || Math.abs(a - S) < Math.abs(c - S) ? a : c;
  let g = n * t;
  const h = u + g, v = s === void 0 ? h : s(h);
  v !== h && (g = v - u);
  const x = (S) => -g * Math.exp(-S / r), E = (S) => v + x(S), w = (S) => {
    const L = x(S), O = E(S);
    f.done = Math.abs(L) <= l, f.value = f.done ? v : O;
  };
  let y, D;
  const C = (S) => {
    p(f.value) && (y = S, D = nr({
      keyframes: [f.value, m(f.value)],
      velocity: Sl(E, S, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: l,
      restSpeed: d
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
const Yp = /* @__PURE__ */ Rn(0.42, 0, 1, 1), qp = /* @__PURE__ */ Rn(0, 0, 0.58, 1), Cl = /* @__PURE__ */ Rn(0.42, 0, 0.58, 1), Xp = (e) => Array.isArray(e) && typeof e[0] != "number", Zp = {
  linear: Be,
  easeIn: Yp,
  easeInOut: Cl,
  easeOut: qp,
  circIn: di,
  circInOut: il,
  circOut: ol,
  backIn: ui,
  backInOut: nl,
  backOut: tl,
  anticipate: rl
}, Cs = (e) => {
  if (zo(e)) {
    const [t, n, r, o] = e;
    return Rn(t, n, r, o);
  } else if (typeof e == "string")
    return Zp[e];
  return e;
};
function Jp(e, t, n) {
  const r = [], o = n || Dl, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[s] || Be : t;
      a = Vn(c, a);
    }
    r.push(a);
  }
  return r;
}
function Qp(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Jp(t, r, o), c = a.length, l = (d) => {
    if (s && d < e[0])
      return t[0];
    let u = 0;
    if (c > 1)
      for (; u < e.length - 2 && !(d < e[u + 1]); u++)
        ;
    const f = /* @__PURE__ */ un(e[u], e[u + 1], d);
    return a[u](f);
  };
  return n ? (d) => l(et(e[0], e[i - 1], d)) : l;
}
function eh(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ un(0, t, r);
    e.push(le(n, 1, o));
  }
}
function th(e) {
  const t = [0];
  return eh(t, e.length - 1), t;
}
function nh(e, t) {
  return e.map((n) => n * t);
}
function rh(e, t) {
  return e.map(() => t || Cl).splice(0, e.length - 1);
}
function rn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Xp(r) ? r.map(Cs) : Cs(r), i = {
    done: !1,
    value: t[0]
  }, s = nh(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : th(t),
    e
  ), a = Qp(s, t, {
    ease: Array.isArray(o) ? o : rh(t, o)
  });
  return {
    calculatedDuration: e,
    next: (c) => (i.value = a(c), i.done = c >= e, i)
  };
}
const oh = (e) => {
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
}, ih = {
  decay: Ss,
  inertia: Ss,
  tween: rn,
  keyframes: rn,
  spring: nr
}, sh = (e) => e / 100;
class gi extends El {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options, s = (o == null ? void 0 : o.KeyframeResolver) || hi, a = (c, l) => this.onKeyframesResolved(c, l);
    this.resolver = new s(i, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = this.options, a = Ho(n) ? n : ih[n] || rn;
    let c, l;
    process.env.NODE_ENV, a !== rn && typeof t[0] != "number" && (c = Vn(sh, Dl(t[0], t[1])), t = [0, 100]);
    const d = a({ ...this.options, keyframes: t });
    i === "mirror" && (l = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), d.calculatedDuration === null && (d.calculatedDuration = Yo(d));
    const { calculatedDuration: u } = d, f = u + o, p = f * (r + 1) - o;
    return {
      generator: d,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      calculatedDuration: u,
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
    const { finalKeyframe: o, generator: i, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: c, calculatedDuration: l, totalDuration: d, resolvedDuration: u } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: f, repeat: p, repeatType: m, repeatDelay: g, onUpdate: h } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const v = this.currentTime - f * (this.speed >= 0 ? 1 : -1), x = this.speed >= 0 ? v < 0 : v > d;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let E = this.currentTime, w = i;
    if (p) {
      const S = Math.min(this.currentTime, d) / u;
      let L = Math.floor(S), O = S % 1;
      !O && S >= 1 && (O = 1), O === 1 && L--, L = Math.min(L, p + 1), !!(L % 2) && (m === "reverse" ? (O = 1 - O, g && (O -= g / u)) : m === "mirror" && (w = s)), E = et(0, 1, O) * u;
    }
    const y = x ? { done: !1, value: c[0] } : w.next(E);
    a && (y.value = a(y.value));
    let { done: D } = y;
    !x && l !== null && (D = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return C && o !== void 0 && (y.value = vr(c, this.options, o)), h && h(y.value), C && this.finish(), y;
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
    const { driver: t = oh, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
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
const ah = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), ch = /* @__PURE__ */ Uo(() => Object.hasOwnProperty.call(Element.prototype, "animate")), rr = 10, lh = 2e4;
function uh(e) {
  return Ho(e.type) || e.type === "spring" || !Ac(e.ease);
}
function dh(e, t) {
  const n = new gi({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < lh; )
    r = n.sample(i), o.push(r.value), i += rr;
  return {
    times: void 0,
    keyframes: o,
    duration: i - rr,
    ease: "linear"
  };
}
const Pl = {
  anticipate: rl,
  backInOut: nl,
  circInOut: il
};
function fh(e) {
  return e in Pl;
}
class Ps extends El {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    this.resolver = new xl(i, (s, a) => this.onKeyframesResolved(s, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: i, type: s, motionValue: a, name: c, startTime: l } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof i == "string" && dn() && fh(i) && (i = Pl[i]), uh(this.options)) {
      const { onComplete: u, onUpdate: f, motionValue: p, element: m, ...g } = this.options, h = dh(t, g);
      t = h.keyframes, t.length === 1 && (t[1] = t[0]), r = h.duration, o = h.times, i = h.ease, s = "keyframes";
    }
    const d = Ud(a.owner.current, c, t, { ...this.options, duration: r, times: o, ease: i });
    return d.startTime = l ?? this.calcStartTime(), this.pendingTimeline ? (ts(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
      const { onComplete: u } = this.options;
      a.set(vr(t, this.options, n)), u && u(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: d,
      duration: r,
      times: o,
      type: s,
      ease: i,
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
      ts(r, t);
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
    const { animation: n, keyframes: r, duration: o, type: i, ease: s, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: l, onUpdate: d, onComplete: u, element: f, ...p } = this.options, m = new gi({
        ...p,
        keyframes: r,
        duration: o,
        type: i,
        ease: s,
        times: a,
        isGenerator: !0
      }), g = /* @__PURE__ */ We(this.time);
      l.setWithVelocity(m.sample(g - rr).value, m.sample(g).value, rr);
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
    const { motionValue: n, name: r, repeatDelay: o, repeatType: i, damping: s, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: c, transformTemplate: l } = n.owner.getProps();
    return ch() && r && ah.has(r) && (r !== "transform" || !l) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !c && !o && i !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const ph = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, hh = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), mh = {
  type: "keyframes",
  duration: 0.8
}, gh = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, vh = (e, { keyframes: t }) => t.length > 2 ? mh : Pt.has(e) ? e.startsWith("scale") ? hh(t[1]) : ph : gh;
function yh({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: c, elapsed: l, ...d }) {
  return !!Object.keys(d).length;
}
const vi = (e, t, n, r = {}, o, i) => (s) => {
  const a = Ko(r, e) || {}, c = a.delay || r.delay || 0;
  let { elapsed: l = 0 } = r;
  l = l - /* @__PURE__ */ We(c);
  let d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -l,
    onUpdate: (f) => {
      t.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  yh(a) || (d = {
    ...d,
    ...vh(e, d)
  }), d.duration && (d.duration = /* @__PURE__ */ We(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ We(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let u = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (u = !0)), d.allowFlatten = !a.type && !a.ease, u && !i && t.get() !== void 0) {
    const f = vr(d.keyframes, a);
    if (f !== void 0)
      return te.update(() => {
        d.onUpdate(f), d.onComplete();
      }), new kd([]);
  }
  return !i && Ps.supports(d) ? new Ps(d) : new gi(d);
};
function bh({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Nl(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: s, ...a } = t;
  r && (i = r);
  const c = [], l = o && e.animationState && e.animationState.getState()[o];
  for (const d in a) {
    const u = e.getValue(d, e.latestValues[d] ?? null), f = a[d];
    if (f === void 0 || l && bh(l, d))
      continue;
    const p = {
      delay: n,
      ...Ko(i || {}, d)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const h = Zc(e);
      if (h) {
        const v = window.MotionHandoffAnimation(h, d, te);
        v !== null && (p.startTime = v, m = !0);
      }
    }
    io(e, d), u.start(vi(d, u, f, e.shouldReduceMotion && Xc.has(d) ? { type: !1 } : p, e, m));
    const g = u.animation;
    g && c.push(g);
  }
  return s && Promise.all(c).then(() => {
    te.update(() => {
      s && Yf(e, s);
    });
  }), c;
}
function go(e, t, n = {}) {
  var c;
  const r = gn(e, t, n.type === "exit" ? (c = e.presenceContext) == null ? void 0 : c.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Nl(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: f } = o;
    return xh(e, t, d + l, u, f, n);
  } : () => Promise.resolve(), { when: a } = o;
  if (a) {
    const [l, d] = a === "beforeChildren" ? [i, s] : [s, i];
    return l().then(() => d());
  } else
    return Promise.all([i(), s(n.delay)]);
}
function xh(e, t, n = 0, r = 0, o = 1, i) {
  const s = [], a = (e.variantChildren.size - 1) * r, c = o === 1 ? (l = 0) => l * r : (l = 0) => a - l * r;
  return Array.from(e.variantChildren).sort(Eh).forEach((l, d) => {
    l.notify("AnimationStart", t), s.push(go(l, t, {
      ...i,
      delay: n + c(d)
    }).then(() => l.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function Eh(e, t) {
  return e.sortNodePosition(t);
}
function wh(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => go(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = go(e, t, n);
  else {
    const o = typeof t == "function" ? gn(e, t, n.custom) : t;
    r = Promise.all(Nl(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Al(e, t) {
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
const Dh = Jo.length;
function Tl(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Tl(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Dh; n++) {
    const r = Jo[n], o = e.props[r];
    (pn(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const Sh = [...Zo].reverse(), Ch = Zo.length;
function Ph(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => wh(e, n, r)));
}
function Nh(e) {
  let t = Ph(e), n = Ns(), r = !0;
  const o = (c) => (l, d) => {
    var f;
    const u = gn(e, d, c === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
    if (u) {
      const { transition: p, transitionEnd: m, ...g } = u;
      l = { ...l, ...g, ...m };
    }
    return l;
  };
  function i(c) {
    t = c(e);
  }
  function s(c) {
    const { props: l } = e, d = Tl(e.parent) || {}, u = [], f = /* @__PURE__ */ new Set();
    let p = {}, m = 1 / 0;
    for (let h = 0; h < Ch; h++) {
      const v = Sh[h], x = n[v], E = l[v] !== void 0 ? l[v] : d[v], w = pn(E), y = v === c ? x.isActive : null;
      y === !1 && (m = h);
      let D = E === d[v] && E !== l[v] && w;
      if (D && r && e.manuallyAnimateOnMount && (D = !1), x.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && y === null || // If we didn't and don't have any defined prop for this animation type
      !E && !x.prevProp || // Or if the prop doesn't define an animation
      mr(E) || typeof E == "boolean")
        continue;
      const C = Ah(x.prevProp, E);
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
        oo(B) && oo(z) ? Y = !Al(B, z) : Y = B !== z, Y ? B != null ? re(A) : f.add(A) : B !== void 0 && f.has(A) ? re(A) : x.protectedKeys[A] = !0;
      }
      x.prevProp = E, x.prevResolvedValues = F, x.isActive && (p = { ...p, ...F }), r && e.blockInitialAnimation && (S = !1), S && (!(D && C) || L) && u.push(...O.map((A) => ({
        animation: A,
        options: { type: v }
      })));
    }
    if (f.size) {
      const h = {};
      if (typeof l.initial != "boolean") {
        const v = gn(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        v && v.transition && (h.transition = v.transition);
      }
      f.forEach((v) => {
        const x = e.getBaseTarget(v), E = e.getValue(v);
        E && (E.liveStyle = !0), h[v] = x ?? null;
      }), u.push({ animation: h });
    }
    let g = !!u.length;
    return r && (l.initial === !1 || l.initial === l.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(u) : Promise.resolve();
  }
  function a(c, l) {
    var u;
    if (n[c].isActive === l)
      return Promise.resolve();
    (u = e.variantChildren) == null || u.forEach((f) => {
      var p;
      return (p = f.animationState) == null ? void 0 : p.setActive(c, l);
    }), n[c].isActive = l;
    const d = s(c);
    for (const f in n)
      n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Ns(), r = !0;
    }
  };
}
function Ah(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Al(t, e) : !1;
}
function mt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ns() {
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
class Th extends ht {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Nh(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    mr(t) && (this.unmountControls = t.subscribe(this.node));
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
let Ih = 0;
class Oh extends ht {
  constructor() {
    super(...arguments), this.id = Ih++;
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
const Rh = {
  animation: {
    Feature: Th
  },
  exit: {
    Feature: Oh
  }
};
function yn(e, t, n, r = { passive: !0 }) {
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
const Vh = (e) => (t) => Xo(t) && e(t, Mn(t));
function on(e, t, n, r) {
  return yn(e, t, Vh(n), r);
}
function Il({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Mh({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Lh(e, t) {
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
const Ol = 1e-4, _h = 1 - Ol, Bh = 1 + Ol, Rl = 0.01, $h = 0 - Rl, Fh = 0 + Rl;
function De(e) {
  return e.max - e.min;
}
function kh(e, t, n) {
  return Math.abs(e - t) <= n;
}
function As(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = le(t.min, t.max, e.origin), e.scale = De(n) / De(t), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= _h && e.scale <= Bh || isNaN(e.scale)) && (e.scale = 1), (e.translate >= $h && e.translate <= Fh || isNaN(e.translate)) && (e.translate = 0);
}
function sn(e, t, n, r) {
  As(e.x, t.x, n.x, r ? r.originX : void 0), As(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ts(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + De(t);
}
function jh(e, t, n) {
  Ts(e.x, t.x, n.x), Ts(e.y, t.y, n.y);
}
function Is(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + De(t);
}
function an(e, t, n) {
  Is(e.x, t.x, n.x), Is(e.y, t.y, n.y);
}
const Os = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Rt = () => ({
  x: Os(),
  y: Os()
}), Rs = () => ({ min: 0, max: 0 }), de = () => ({
  x: Rs(),
  y: Rs()
});
function Le(e) {
  return [e("x"), e("y")];
}
function Rr(e) {
  return e === void 0 || e === 1;
}
function vo({ scale: e, scaleX: t, scaleY: n }) {
  return !Rr(e) || !Rr(t) || !Rr(n);
}
function vt(e) {
  return vo(e) || Vl(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Vl(e) {
  return Vs(e.x) || Vs(e.y);
}
function Vs(e) {
  return e && e !== "0%";
}
function or(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Ms(e, t, n, r, o) {
  return o !== void 0 && (e = or(e, o, r)), or(e, n, r) + t;
}
function yo(e, t = 0, n = 1, r, o) {
  e.min = Ms(e.min, t, n, r, o), e.max = Ms(e.max, t, n, r, o);
}
function Ml(e, { x: t, y: n }) {
  yo(e.x, t.translate, t.scale, t.originPoint), yo(e.y, n.translate, n.scale, n.originPoint);
}
const Ls = 0.999999999999, _s = 1.0000000000001;
function Gh(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    i = n[a], s = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Mt(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Ml(e, s)), r && vt(i.latestValues) && Mt(e, i.latestValues));
  }
  t.x < _s && t.x > Ls && (t.x = 1), t.y < _s && t.y > Ls && (t.y = 1);
}
function Vt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Bs(e, t, n, r, o = 0.5) {
  const i = le(e.min, e.max, o);
  yo(e, t, n, i, r);
}
function Mt(e, t) {
  Bs(e.x, t.x, t.scaleX, t.scale, t.originX), Bs(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ll(e, t) {
  return Il(Lh(e.getBoundingClientRect(), t));
}
function Uh(e, t, n) {
  const r = Ll(e, n), { scroll: o } = t;
  return o && (Vt(r.x, o.offset.x), Vt(r.y, o.offset.y)), r;
}
const _l = ({ current: e }) => e ? e.ownerDocument.defaultView : null, $s = (e, t) => Math.abs(e - t);
function Wh(e, t) {
  const n = $s(e.x, t.x), r = $s(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Bl {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = Mr(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, p = Wh(u.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !p)
        return;
      const { point: m } = u, { timestamp: g } = ve;
      this.history.push({ ...m, timestamp: g });
      const { onStart: h, onMove: v } = this.handlers;
      f || (h && h(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, f) => {
      this.lastMoveEvent = u, this.lastMoveEventInfo = Vr(f, this.transformPagePoint), te.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, f) => {
      this.end();
      const { onEnd: p, onSessionEnd: m, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Mr(u.type === "pointercancel" ? this.lastMoveEventInfo : Vr(f, this.transformPagePoint), this.history);
      this.startEvent && p && p(u, h), m && m(u, h);
    }, !Xo(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const s = Mn(t), a = Vr(s, this.transformPagePoint), { point: c } = a, { timestamp: l } = ve;
    this.history = [{ ...c, timestamp: l }];
    const { onSessionStart: d } = n;
    d && d(t, Mr(a, this.history)), this.removeListeners = Vn(on(this.contextWindow, "pointermove", this.handlePointerMove), on(this.contextWindow, "pointerup", this.handlePointerUp), on(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), dt(this.updatePoint);
  }
}
function Vr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Fs(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Mr({ point: e }, t) {
  return {
    point: e,
    delta: Fs(e, $l(t)),
    offset: Fs(e, zh(t)),
    velocity: Hh(t, 0.1)
  };
}
function zh(e) {
  return e[0];
}
function $l(e) {
  return e[e.length - 1];
}
function Hh(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = $l(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ We(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ ze(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Kh(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)), e;
}
function ks(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Yh(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: ks(e.x, n, o),
    y: ks(e.y, t, r)
  };
}
function js(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function qh(e, t) {
  return {
    x: js(e.x, t.x),
    y: js(e.y, t.y)
  };
}
function Xh(e, t) {
  let n = 0.5;
  const r = De(e), o = De(t);
  return o > r ? n = /* @__PURE__ */ un(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ un(e.min, e.max - o, t.min)), et(0, 1, n);
}
function Zh(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const bo = 0.35;
function Jh(e = bo) {
  return e === !1 ? e = 0 : e === !0 && (e = bo), {
    x: Gs(e, "left", "right"),
    y: Gs(e, "top", "bottom")
  };
}
function Gs(e, t, n) {
  return {
    min: Us(e, t),
    max: Us(e, n)
  };
}
function Us(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Qh = /* @__PURE__ */ new WeakMap();
class em {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = de(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: u } = this.getProps();
      u ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Mn(d).point);
    }, i = (d, u) => {
      const { drag: f, dragPropagation: p, onDragStart: m } = this.getProps();
      if (f && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Yd(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Le((h) => {
        let v = this.getAxisMotionValue(h).get() || 0;
        if (Ke.test(v)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const E = x.layout.layoutBox[h];
            E && (v = De(E) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[h] = v;
      }), m && te.postRender(() => m(d, u)), io(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, s = (d, u) => {
      const { dragPropagation: f, dragDirectionLock: p, onDirectionLock: m, onDrag: g } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: h } = u;
      if (p && this.currentDirection === null) {
        this.currentDirection = tm(h), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, h), this.updateAxis("y", u.point, h), this.visualElement.render(), g && g(d, u);
    }, a = (d, u) => this.stop(d, u), c = () => Le((d) => {
      var u;
      return this.getAnimationState(d) === "paused" && ((u = this.getAxisMotionValue(d).animation) == null ? void 0 : u.play());
    }), { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new Bl(t, {
      onSessionStart: o,
      onStart: i,
      onMove: s,
      onSessionEnd: a,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l,
      contextWindow: _l(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && te.postRender(() => i(t, n));
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
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Kh(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
    t && It(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Yh(r.layoutBox, t) : this.constraints = !1, this.elastic = Jh(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Le((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Zh(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !It(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = Uh(r, o.root, this.visualElement.getTransformPagePoint());
    let s = qh(o.layout.layoutBox, i);
    if (n) {
      const a = n(Mh(s));
      this.hasMutatedConstraints = !!a, a && (s = Il(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, l = Le((d) => {
      if (!Wn(d, n, this.currentDirection))
        return;
      let u = c && c[d] || {};
      s && (u = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...u
      };
      return this.startAxisValueAnimation(d, m);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return io(this.visualElement, t), r.start(vi(t, r, 0, n, this.visualElement, !1));
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
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - le(s, a, 0.5));
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
    Le((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const c = a.get();
        o[s] = Xh({ min: c, max: c }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Le((s) => {
      if (!Wn(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: c, max: l } = this.constraints[s];
      a.set(le(c, l, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Qh.set(this.visualElement, this);
    const t = this.visualElement.current, n = on(t, "pointerdown", (c) => {
      const { drag: l, dragListener: d = !0 } = this.getProps();
      l && d && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      It(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), te.read(r);
    const s = yn(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: l }) => {
      this.isDragging && l && (Le((d) => {
        const u = this.getAxisMotionValue(d);
        u && (this.originPoint[d] += c[d].translate, u.set(u.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = bo, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function Wn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function tm(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class nm extends ht {
  constructor(t) {
    super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new em(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Be;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ws = (e) => (t, n) => {
  e && te.postRender(() => e(t, n));
};
class rm extends ht {
  constructor() {
    super(...arguments), this.removePointerDownListener = Be;
  }
  onPointerDown(t) {
    this.session = new Bl(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: _l(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ws(t),
      onStart: Ws(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && te.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = on(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
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
function zs(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Yt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if ($.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = zs(e, t.target.x), r = zs(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, om = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = ft.parse(e);
    if (o.length > 5)
      return r;
    const i = ft.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, c = n.y.scale * t.y;
    o[0 + s] /= a, o[1 + s] /= c;
    const l = le(a, c, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= l), typeof o[3 + s] == "number" && (o[3 + s] /= l), i(o);
  }
};
class im extends Id {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    wf(sm), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Zn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, s = r.projection;
    return s && (s.isPresent = i, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || te.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), qo.postRender(() => {
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
function Fl(e) {
  const [t, n] = Sc(), r = pe(Bo);
  return P(im, { ...e, layoutGroup: r, switchLayoutGroup: pe(Bc), isPresent: t, safeToRemove: n });
}
const sm = {
  borderRadius: {
    ...Yt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Yt,
  borderTopRightRadius: Yt,
  borderBottomLeftRadius: Yt,
  borderBottomRightRadius: Yt,
  boxShadow: om
};
function am(e, t, n) {
  const r = Ee(e) ? e : fn(e);
  return r.start(vi("", r, t, n)), r.animation;
}
function cm(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const lm = (e, t) => e.depth - t.depth;
class um {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    jo(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Go(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(lm), this.isDirty = !1, this.children.forEach(t);
  }
}
function dm(e, t) {
  const n = He.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (dt(r), e(i - t));
  };
  return te.read(r, !0), () => dt(r);
}
const kl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], fm = kl.length, Hs = (e) => typeof e == "string" ? parseFloat(e) : e, Ks = (e) => typeof e == "number" || $.test(e);
function pm(e, t, n, r, o, i) {
  o ? (e.opacity = le(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    hm(r)
  ), e.opacityExit = le(t.opacity !== void 0 ? t.opacity : 1, 0, mm(r))) : i && (e.opacity = le(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < fm; s++) {
    const a = `border${kl[s]}Radius`;
    let c = Ys(t, a), l = Ys(n, a);
    if (c === void 0 && l === void 0)
      continue;
    c || (c = 0), l || (l = 0), c === 0 || l === 0 || Ks(c) === Ks(l) ? (e[a] = Math.max(le(Hs(c), Hs(l), r), 0), (Ke.test(l) || Ke.test(c)) && (e[a] += "%")) : e[a] = l;
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
}
function Ys(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const hm = /* @__PURE__ */ jl(0, 0.5, ol), mm = /* @__PURE__ */ jl(0.5, 0.95, Be);
function jl(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ un(e, t, r));
}
function qs(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ve(e, t) {
  qs(e.x, t.x), qs(e.y, t.y);
}
function Xs(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Zs(e, t, n, r, o) {
  return e -= t, e = or(e, 1 / n, r), o !== void 0 && (e = or(e, 1 / o, r)), e;
}
function gm(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (Ke.test(t) && (t = parseFloat(t), t = le(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = le(i.min, i.max, r);
  e === i && (a -= t), e.min = Zs(e.min, t, n, a, o), e.max = Zs(e.max, t, n, a, o);
}
function Js(e, t, [n, r, o], i, s) {
  gm(e, t[n], t[r], t[o], t.scale, i, s);
}
const vm = ["x", "scaleX", "originX"], ym = ["y", "scaleY", "originY"];
function Qs(e, t, n, r) {
  Js(e.x, t, vm, n ? n.x : void 0, r ? r.x : void 0), Js(e.y, t, ym, n ? n.y : void 0, r ? r.y : void 0);
}
function ea(e) {
  return e.translate === 0 && e.scale === 1;
}
function Gl(e) {
  return ea(e.x) && ea(e.y);
}
function ta(e, t) {
  return e.min === t.min && e.max === t.max;
}
function bm(e, t) {
  return ta(e.x, t.x) && ta(e.y, t.y);
}
function na(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Ul(e, t) {
  return na(e.x, t.x) && na(e.y, t.y);
}
function ra(e) {
  return De(e.x) / De(e.y);
}
function oa(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class xm {
  constructor() {
    this.members = [];
  }
  add(t) {
    jo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Go(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
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
function Em(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: l, rotate: d, rotateX: u, rotateY: f, skewX: p, skewY: m } = n;
    l && (r = `perspective(${l}px) ${r}`), d && (r += `rotate(${d}deg) `), u && (r += `rotateX(${u}deg) `), f && (r += `rotateY(${f}deg) `), p && (r += `skewX(${p}deg) `), m && (r += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x, c = e.y.scale * t.y;
  return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none";
}
const Lr = ["", "X", "Y", "Z"], wm = { visibility: "hidden" }, ia = 1e3;
let Dm = 0;
function _r(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Wl(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Zc(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", te, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Wl(r);
}
function zl({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = Dm++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Pm), this.nodes.forEach(Om), this.nodes.forEach(Rm), this.nodes.forEach(Nm);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new um());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Wo()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const c = this.eventHandlers.get(s);
      c && c.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = cm(s), this.instance = s;
      const { layoutId: c, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (l || c) && (this.isLayoutDirty = !0), e) {
        let u;
        const f = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = dm(f, 250), Zn.hasAnimatedSinceResize && (Zn.hasAnimatedSinceResize = !1, this.nodes.forEach(aa));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: f, hasRelativeLayoutChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || d.getDefaultTransition() || Bm, { onLayoutAnimationStart: h, onLayoutAnimationComplete: v } = d.getProps(), x = !this.targetLayout || !Ul(this.targetLayout, m), E = !f && p;
        if (this.options.layoutRoot || this.resumeFrom || E || f && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, E);
          const w = {
            ...Ko(g, "layout"),
            onPlay: h,
            onComplete: v
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || aa(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, dt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Vm), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Wl(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        u.shouldResetTransform = !0, u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(sa);
        return;
      }
      this.isUpdating || this.nodes.forEach(Tm), this.isUpdating = !1, this.nodes.forEach(Im), this.nodes.forEach(Sm), this.nodes.forEach(Cm), this.clearAllSnapshots();
      const a = He.now();
      ve.delta = et(0, 1e3 / 60, a - ve.timestamp), ve.timestamp = a, ve.isProcessing = !0, Pr.update.process(ve), Pr.preRender.process(ve), Pr.render.process(ve), ve.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, qo.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Am), this.sharedNodes.forEach(Mm);
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
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !De(this.snapshot.measuredBox.x) && !De(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = de(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Gl(this.projectionDelta), c = this.getTransformTemplate(), l = c ? c(this.latestValues, "") : void 0, d = l !== this.prevTransformTemplateValue;
      s && (a || vt(this.latestValues) || d) && (o(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return s && (c = this.removeTransform(c)), $m(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var l;
      const { visualElement: s } = this.options;
      if (!s)
        return de();
      const a = s.measureViewportBox();
      if (!(((l = this.scroll) == null ? void 0 : l.wasRoot) || this.path.some(Fm))) {
        const { scroll: d } = this.root;
        d && (Vt(a.x, d.offset.x), Vt(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var c;
      const a = de();
      if (Ve(a, s), (c = this.scroll) != null && c.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l], { scroll: u, options: f } = d;
        d !== this.root && u && f.layoutScroll && (u.wasRoot && Ve(a, s), Vt(a.x, u.offset.x), Vt(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const c = de();
      Ve(c, s);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        !a && d.options.layoutScroll && d.scroll && d !== d.root && Mt(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), vt(d.latestValues) && Mt(c, d.latestValues);
      }
      return vt(this.latestValues) && Mt(c, this.latestValues), c;
    }
    removeTransform(s) {
      const a = de();
      Ve(a, s);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !vt(l.latestValues))
          continue;
        vo(l.latestValues) && l.updateSnapshot();
        const d = de(), u = l.measurePageBox();
        Ve(d, u), Qs(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, d);
      }
      return vt(this.latestValues) && Qs(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ve.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var f;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== a;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || (f = this.parent) != null && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: u } = this.options;
      if (!(!this.layout || !(d || u))) {
        if (this.resolvedRelativeTargetAt = ve.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = de(), this.relativeTargetOrigin = de(), an(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = de(), this.targetWithTransforms = de()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), jh(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ve(this.target, this.layout.layoutBox), Ml(this.target, this.targetDelta)) : Ve(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const p = this.getClosestProjectingParent();
          p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = de(), this.relativeTargetOrigin = de(), an(this.relativeTargetOrigin, this.target, p.target), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vo(this.parent.latestValues) || Vl(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var m;
      const s = this.getLead(), a = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ve.timestamp && (c = !1), c)
        return;
      const { layout: l, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || d))
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const u = this.treeScale.x, f = this.treeScale.y;
      Gh(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = de());
      const { target: p } = s;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Xs(this.prevProjectionDelta.x, this.projectionDelta.x), Xs(this.prevProjectionDelta.y, this.projectionDelta.y)), sn(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== u || this.treeScale.y !== f || !oa(this.projectionDelta.x, this.prevProjectionDelta.x) || !oa(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), s) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Rt(), this.projectionDelta = Rt(), this.projectionDeltaWithTransform = Rt();
    }
    setAnimationOrigin(s, a = !1) {
      const c = this.snapshot, l = c ? c.latestValues : {}, d = { ...this.latestValues }, u = Rt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = de(), p = c ? c.source : void 0, m = this.layout ? this.layout.source : void 0, g = p !== m, h = this.getStack(), v = !h || h.members.length <= 1, x = !!(g && !v && this.options.crossfade === !0 && !this.path.some(_m));
      this.animationProgress = 0;
      let E;
      this.mixTargetDelta = (w) => {
        const y = w / 1e3;
        ca(u.x, s.x, y), ca(u.y, s.y, y), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (an(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Lm(this.relativeTarget, this.relativeTargetOrigin, f, y), E && bm(this.relativeTarget, E) && (this.isProjectionDirty = !1), E || (E = de()), Ve(E, this.relativeTarget)), g && (this.animationValues = d, pm(d, l, this.latestValues, y, x, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = y;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (dt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = te.update(() => {
        Zn.hasAnimatedSinceResize = !0, this.currentAnimation = am(0, ia, {
          ...s,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ia), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: c, layout: l, latestValues: d } = s;
      if (!(!a || !c || !l)) {
        if (this !== s && this.layout && l && Hl(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          c = this.target || de();
          const u = De(this.layout.layoutBox.x);
          c.x.min = s.target.x.min, c.x.max = c.x.min + u;
          const f = De(this.layout.layoutBox.y);
          c.y.min = s.target.y.min, c.y.max = c.y.min + f;
        }
        Ve(a, c), Mt(a, d), sn(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new xm()), this.sharedNodes.get(s).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: c } = s;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a)
        return;
      const l = {};
      c.z && _r("z", s, l, this.animationValues);
      for (let d = 0; d < Lr.length; d++)
        _r(`rotate${Lr[d]}`, s, l, this.animationValues), _r(`skew${Lr[d]}`, s, l, this.animationValues);
      s.render();
      for (const d in l)
        s.setStaticValue(d, l[d]), this.animationValues && (this.animationValues[d] = l[d]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return wm;
      const a = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, a.opacity = "", a.pointerEvents = Xn(s == null ? void 0 : s.pointerEvents) || "", a.transform = c ? c(this.latestValues, "") : "none", a;
      const l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Xn(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !vt(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const d = l.animationValues || l.latestValues;
      this.applyTransformsToTarget(), a.transform = Em(this.projectionDeltaWithTransform, this.treeScale, d), c && (a.transform = c(d, a.transform));
      const { x: u, y: f } = this.projectionDelta;
      a.transformOrigin = `${u.origin * 100}% ${f.origin * 100}% 0`, l.animationValues ? a.opacity = l === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : a.opacity = l === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const p in hn) {
        if (d[p] === void 0)
          continue;
        const { correct: m, applyTo: g, isCSSVariable: h } = hn[p], v = a.transform === "none" ? d[p] : m(d[p], l);
        if (g) {
          const x = g.length;
          for (let E = 0; E < x; E++)
            a[g[E]] = v;
        } else
          h ? this.options.visualElement.renderState.vars[p] = v : a[p] = v;
      }
      return this.options.layoutId && (a.pointerEvents = l === this ? Xn(s == null ? void 0 : s.pointerEvents) || "" : "none"), a;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(sa), this.root.sharedNodes.clear();
    }
  };
}
function Sm(e) {
  e.updateLayout();
}
function Cm(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, s = t.source !== e.layout.source;
    i === "size" ? Le((u) => {
      const f = s ? t.measuredBox[u] : t.layoutBox[u], p = De(f);
      f.min = r[u].min, f.max = f.min + p;
    }) : Hl(i, t.layoutBox, r) && Le((u) => {
      const f = s ? t.measuredBox[u] : t.layoutBox[u], p = De(r[u]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + p);
    });
    const a = Rt();
    sn(a, r, t.layoutBox);
    const c = Rt();
    s ? sn(c, e.applyTransform(o, !0), t.measuredBox) : sn(c, r, t.layoutBox);
    const l = !Gl(a);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: f, layout: p } = u;
        if (f && p) {
          const m = de();
          an(m, t.layoutBox, f.layoutBox);
          const g = de();
          an(g, r, p.layoutBox), Ul(m, g) || (d = !0), u.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = m, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Pm(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Nm(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Am(e) {
  e.clearSnapshot();
}
function sa(e) {
  e.clearMeasurements();
}
function Tm(e) {
  e.isLayoutDirty = !1;
}
function Im(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function aa(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Om(e) {
  e.resolveTargetDelta();
}
function Rm(e) {
  e.calcProjection();
}
function Vm(e) {
  e.resetSkewAndRotation();
}
function Mm(e) {
  e.removeLeadSnapshot();
}
function ca(e, t, n) {
  e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function la(e, t, n, r) {
  e.min = le(t.min, n.min, r), e.max = le(t.max, n.max, r);
}
function Lm(e, t, n, r) {
  la(e.x, t.x, n.x, r), la(e.y, t.y, n.y, r);
}
function _m(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Bm = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ua = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), da = ua("applewebkit/") && !ua("chrome/") ? Math.round : Be;
function fa(e) {
  e.min = da(e.min), e.max = da(e.max);
}
function $m(e) {
  fa(e.x), fa(e.y);
}
function Hl(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !kh(ra(t), ra(n), 0.2);
}
function Fm(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const km = zl({
  attachResizeListener: (e, t) => yn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Br = {
  current: void 0
}, Kl = zl({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Br.current) {
      const e = new km({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Br.current = e;
    }
    return Br.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), jm = {
  pan: {
    Feature: rm
  },
  drag: {
    Feature: nm,
    ProjectionNode: Kl,
    MeasureLayout: Fl
  }
};
function pa(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && te.postRender(() => i(t, Mn(t)));
}
class Gm extends ht {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Xd(t, (n, r) => (pa(this.node, r, "Start"), (o) => pa(this.node, o, "End"))));
  }
  unmount() {
  }
}
class Um extends ht {
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
    this.unmount = Vn(yn(this.node.current, "focus", () => this.onFocus()), yn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ha(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), i = r[o];
  i && te.postRender(() => i(t, Mn(t)));
}
class Wm extends ht {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = ef(t, (n, r) => (ha(this.node, r, "Start"), (o, { success: i }) => ha(this.node, o, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const xo = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), zm = (e) => {
  const t = xo.get(e.target);
  t && t(e);
}, Hm = (e) => {
  e.forEach(zm);
};
function Km({ root: e, ...t }) {
  const n = e || document;
  $r.has(n) || $r.set(n, {});
  const r = $r.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Hm, { root: e, ...t })), r[o];
}
function Ym(e, t, n) {
  const r = Km(t);
  return xo.set(e, n), r.observe(e), () => {
    xo.delete(e), r.unobserve(e);
  };
}
const qm = {
  some: 0,
  all: 1
};
class Xm extends ht {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : qm[o]
    }, a = (c) => {
      const { isIntersecting: l } = c;
      if (this.isInView === l || (this.isInView = l, i && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: d, onViewportLeave: u } = this.node.getProps(), f = l ? d : u;
      f && f(c);
    };
    return Ym(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Zm(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Zm({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Jm = {
  inView: {
    Feature: Xm
  },
  tap: {
    Feature: Wm
  },
  focus: {
    Feature: Um
  },
  hover: {
    Feature: Gm
  }
}, Qm = {
  layout: {
    ProjectionNode: Kl,
    MeasureLayout: Fl
  }
}, Eo = { current: null }, Yl = { current: !1 };
function eg() {
  if (Yl.current = !0, !!Fo)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Eo.current = e.matches;
      e.addListener(t), t();
    } else
      Eo.current = !1;
}
const tg = [...bl, xe, ft], ng = (e) => tg.find(yl(e)), rg = /* @__PURE__ */ new WeakMap();
function og(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Ee(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && pr(o.version === "12.6.3", `Attempting to mix Motion versions ${o.version} with 12.6.3 may not work as expected.`);
    else if (Ee(i))
      e.addValue(r, fn(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, fn(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const ma = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class ig {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = hi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = He.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, te.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: l, onUpdate: d } = s;
    this.onUpdate = d, this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = gr(n), this.isVariantNode = Lc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in f) {
      const m = f[p];
      c[p] !== void 0 && Ee(m) && m.set(c[p], !1);
    }
  }
  mount(t) {
    this.current = t, rg.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Yl.current || eg(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Eo.current, process.env.NODE_ENV !== "production" && pr(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
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
    }), i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), i(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Bt) {
      const n = Bt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : de();
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
    for (let r = 0; r < ma.length; r++) {
      const o = ma[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = og(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = fn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (gl(r) || sl(r)) ? r = parseFloat(r) : !ng(r) && ft.test(n) && (r = pl(t, n)), this.setBaseTarget(t, Ee(r) ? r.get() : r)), Ee(r) ? r.get() : r;
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
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = ci(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      s && (r = s[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ee(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Wo()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class ql extends ig {
  constructor() {
    super(...arguments), this.KeyframeResolver = xl;
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
function sg(e) {
  return window.getComputedStyle(e);
}
class ag extends ql {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Hc;
  }
  readValueFromInstance(t, n) {
    if (Pt.has(n))
      return bp(t, n);
    {
      const r = sg(t), o = (ei(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Ll(t, n);
  }
  build(t, n, r) {
    ri(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return li(t, n, r);
  }
}
class cg extends ql {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = de, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && zc(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Pt.has(n)) {
      const r = fl(n);
      return r && r.default || 0;
    }
    return n = Kc.has(n) ? n : Qo(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qc(t, n, r);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && te.postRender(this.updateDimensions);
  }
  build(t, n, r) {
    si(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Yc(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = ai(t.tagName), super.mount(t);
  }
}
const lg = (e, t) => ii(e) ? new cg(t) : new ag(t, {
  allowProjection: e !== Ec
}), ug = /* @__PURE__ */ Hf({
  ...Rh,
  ...Jm,
  ...jm,
  ...Qm
}, lg), Xl = /* @__PURE__ */ cf(ug), dg = ({ name: e, className: t, ...n }) => /* @__PURE__ */ P(
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
), bn = dg, fg = ({ style: e, text: t }) => /* @__PURE__ */ he("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ P("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ P("span", { className: "text-base", children: t })
] }), yi = fg, pg = ({
  children: e,
  onClick: t,
  className: n,
  isLoading: r,
  variant: o,
  icon: i,
  disabled: s,
  ...a
}) => {
  const c = [
    "relative inline-flex items-center justify-center font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    "rounded-2xl px-6 py-3 text-sm md:text-base",
    n,
    o === "primary" && "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    o === "secondary" && "bg-primary/10 text-primary hover:bg-primary/20 focus:ring-primary",
    o === "danger" && "bg-danger/10 text-danger hover:bg-danger/20 focus:ring-danger",
    o === "link" && "bg-transparent text-primary hover:underline px-2 py-1 focus:ring-primary",
    o === "small-primary" && "bg-primary text-white text-xs px-4 py-2 hover:bg-primary/90 focus:ring-primary",
    o === "small-secondary" && "bg-primary/20 text-primary text-xs px-4 py-2 hover:bg-primary/30 focus:ring-primary",
    o === "small-danger" && "bg-danger/10 text-danger text-xs px-4 py-2 hover:bg-danger/20 focus:ring-danger",
    o === "tab" && "bg-primary text-white text-sm md:text-base px-5 py-2 rounded-full focus:ring-primary"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ P(
    Xl.button,
    {
      disabled: s || r,
      onClick: t,
      className: c,
      ...a,
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, ease: "easeOut" },
      whileTap: { scale: 0.96 },
      whileHover: !s && !r ? { scale: 1.02 } : void 0,
      children: r ? /* @__PURE__ */ P(yi, { style: { width: 20, height: 20 } }) : /* @__PURE__ */ he(_t, { children: [
        e,
        i && /* @__PURE__ */ P(
          bn,
          {
            name: i,
            className: `ml-2 ${o.includes("small") ? "w-4 h-4" : "w-5 h-5"}`
          }
        )
      ] })
    }
  );
}, Y0 = pg, hg = ({ error: e }) => /* @__PURE__ */ P("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ P("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), bi = hg, mg = ({
  onChange: e,
  title: t,
  secondaryTitle: n,
  labelClassName: r,
  className: o,
  titleClassName: i,
  error: s,
  checked: a,
  disabled: c
}) => /* @__PURE__ */ he(_t, { children: [
  /* @__PURE__ */ he(
    "label",
    {
      onClick: (l) => l.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${r}`,
      children: [
        /* @__PURE__ */ P(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
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
  s && /* @__PURE__ */ P(bi, { error: s })
] }), q0 = mg, gg = ({ items: e, disable: t, color: n, style: r }) => /* @__PURE__ */ P("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ P(_t, { children: o.title ? /* @__PURE__ */ P(
  "div",
  {
    style: r,
    className: `${t ? "bg-dark-gray" : n || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ P(_t, {}) })) }), X0 = gg;
function xi(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
var xn;
(function(e) {
  e.event = "event", e.props = "prop";
})(xn || (xn = {}));
function Qe() {
}
function vg(e) {
  var t, n = void 0;
  return function() {
    for (var r = [], o = arguments.length; o--; ) r[o] = arguments[o];
    return t && r.length === t.length && r.every(function(i, s) {
      return i === t[s];
    }) || (t = r, n = e.apply(void 0, r)), n;
  };
}
function St(e) {
  return !!(e || "").match(/\d/);
}
function Dt(e) {
  return e == null;
}
function yg(e) {
  return typeof e == "number" && isNaN(e);
}
function Zl(e) {
  return Dt(e) || yg(e) || typeof e == "number" && !isFinite(e);
}
function Jl(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function bg(e) {
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
function xg(e, t, n) {
  var r = bg(n), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(r, "$1" + t);
}
function Eg(e) {
  var t = j(e);
  t.current = e;
  var n = j(function() {
    for (var r = [], o = arguments.length; o--; ) r[o] = arguments[o];
    return t.current.apply(t, r);
  });
  return n.current;
}
function Ei(e, t) {
  t === void 0 && (t = !0);
  var n = e[0] === "-", r = n && t;
  e = e.replace("-", "");
  var o = e.split("."), i = o[0], s = o[1] || "";
  return {
    beforeDecimal: i,
    afterDecimal: s,
    hasNegation: n,
    addNegation: r
  };
}
function wg(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var n = e.split("."), r = n[0].replace(/^0+/, "") || "0", o = n[1] || "";
  return (t ? "-" : "") + r + (o ? "." + o : "");
}
function Ql(e, t, n) {
  for (var r = "", o = n ? "0" : "", i = 0; i <= t - 1; i++)
    r += e[i] || o;
  return r;
}
function ga(e, t) {
  return Array(t + 1).join(e);
}
function eu(e) {
  var t = e + "", n = t[0] === "-" ? "-" : "";
  n && (t = t.substring(1));
  var r = t.split(/[eE]/g), o = r[0], i = r[1];
  if (i = Number(i), !i)
    return n + o;
  o = o.replace(".", "");
  var s = 1 + i, a = o.length;
  return s < 0 ? o = "0." + ga("0", Math.abs(s)) + o : s >= a ? o = o + ga("0", s - a) : o = (o.substring(0, s) || "0") + "." + o.substring(s), n + o;
}
function va(e, t, n) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var r = (e.indexOf(".") !== -1 || n) && t, o = Ei(e), i = o.beforeDecimal, s = o.afterDecimal, a = o.hasNegation, c = parseFloat("0." + (s || "0")), l = s.length <= t ? "0." + s : c.toFixed(t), d = l.split("."), u = i;
  i && Number(d[0]) && (u = i.split("").reverse().reduce(function(g, h, v) {
    return g.length > v ? (Number(g[0]) + Number(h)).toString() + g.substring(1, g.length) : h + g;
  }, d[0]));
  var f = Ql(d[1] || "", t, n), p = a ? "-" : "", m = r ? "." : "";
  return "" + p + u + m + f;
}
function st(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var n = e.createTextRange();
      return n.move("character", t), n.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var tu = vg(function(e, t) {
  for (var n = 0, r = 0, o = e.length, i = t.length; e[n] === t[n] && n < o; )
    n++;
  for (; e[o - 1 - r] === t[i - 1 - r] && i - r > n && o - r > n; )
    r++;
  return {
    from: { start: n, end: o - r },
    to: { start: n, end: i - r }
  };
}), Dg = function(e, t) {
  var n = Math.min(e.selectionStart, t);
  return {
    from: { start: n, end: e.selectionEnd },
    to: { start: n, end: t }
  };
};
function Sg(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Fr(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Cg() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function nu(e) {
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
function ru(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Pg(e) {
  var t = e.currentValue, n = e.formattedValue, r = e.currentValueIndex, o = e.formattedValueIndex;
  return t[r] === n[o];
}
function Ng(e, t, n, r, o, i, s) {
  s === void 0 && (s = Pg);
  var a = o.findIndex(function(w) {
    return w;
  }), c = e.slice(0, a);
  !t && !n.startsWith(c) && (t = c, n = c + n, r = r + c.length);
  for (var l = n.length, d = e.length, u = {}, f = new Array(l), p = 0; p < l; p++) {
    f[p] = -1;
    for (var m = 0, g = d; m < g; m++) {
      var h = s({
        currentValue: n,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: p,
        formattedValueIndex: m
      });
      if (h && u[m] !== !0) {
        f[p] = m, u[m] = !0;
        break;
      }
    }
  }
  for (var v = r; v < l && (f[v] === -1 || !i(n[v])); )
    v++;
  var x = v === l || f[v] === -1 ? d : f[v];
  for (v = r - 1; v > 0 && f[v] === -1; )
    v--;
  var E = v === -1 || f[v] === -1 ? 0 : f[v] + 1;
  return E > x ? x : r - E < x - r ? E : x;
}
function ir(e, t, n, r) {
  var o = e.length;
  if (t = Sg(t, 0, o), r === "left") {
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
function Ag(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), n = 0, r = t.length; n < r; n++)
    t[n] = !!(St(e[n]) || St(e[n - 1]));
  return t;
}
function ou(e, t, n, r, o, i) {
  i === void 0 && (i = Qe);
  var s = Eg(function(m, g) {
    var h, v;
    return Zl(m) ? (v = "", h = "") : typeof m == "number" || g ? (v = typeof m == "number" ? eu(m) : m, h = r(v)) : (v = o(m, void 0), h = r(v)), { formattedValue: h, numAsString: v };
  }), a = Se(function() {
    return s(Dt(e) ? t : e, n);
  }), c = a[0], l = a[1], d = function(m, g) {
    m.formattedValue !== c.formattedValue && l({
      formattedValue: m.formattedValue,
      numAsString: m.value
    }), i(m, g);
  }, u = e, f = n;
  Dt(e) && (u = c.numAsString, f = !0);
  var p = s(u, f);
  return ut(function() {
    l(p);
  }, [p.formattedValue]), [c, d];
}
function Tg(e) {
  return e.replace(/[^0-9]/g, "");
}
function Ig(e) {
  return e;
}
function iu(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var n = e.displayType;
  n === void 0 && (n = "input");
  var r = e.customInput, o = e.renderText, i = e.getInputRef, s = e.format;
  s === void 0 && (s = Ig);
  var a = e.removeFormatting;
  a === void 0 && (a = Tg);
  var c = e.defaultValue, l = e.valueIsNumericString, d = e.onValueChange, u = e.isAllowed, f = e.onChange;
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
  x === void 0 && (x = Ag);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = St);
  var w = e.isCharacterSame, y = xi(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), D = ou(v, c, !!l, s, a, d), C = D[0], S = C.formattedValue, L = C.numAsString, O = D[1], F = j(), I = j({ formattedValue: S, numAsString: L }), Q = function(T, M) {
    I.current = { formattedValue: T.formattedValue, numAsString: T.value }, O(T, M);
  }, re = Se(!1), se = re[0], _ = re[1], A = j(null), B = j({
    setCaretTimeout: null,
    focusTimeout: null
  });
  fe(function() {
    return _(!0), function() {
      clearTimeout(B.current.setCaretTimeout), clearTimeout(B.current.focusTimeout);
    };
  }, []);
  var z = s, Y = function(T, M) {
    var W = parseFloat(M);
    return {
      formattedValue: T,
      value: M,
      floatValue: isNaN(W) ? void 0 : W
    };
  }, U = function(T, M, W) {
    T.selectionStart === 0 && T.selectionEnd === T.value.length || (st(T, M), B.current.setCaretTimeout = setTimeout(function() {
      T.value === W && T.selectionStart !== M && st(T, M);
    }, 0));
  }, oe = function(T, M, W) {
    return ir(T, M, x(T), W);
  }, be = function(T, M, W) {
    var ae = x(M), Ce = Ng(M, S, T, W, ae, E, w);
    return Ce = ir(M, Ce, ae), Ce;
  }, je = function(T) {
    var M = T.formattedValue;
    M === void 0 && (M = "");
    var W = T.input, ae = T.source, Ce = T.event, ce = T.numAsString, ee;
    if (W) {
      var Ze = T.inputValue || W.value, tt = Fr(W);
      W.value = M, ee = be(Ze, M, tt), ee !== void 0 && U(W, ee, M);
    }
    M !== S && Q(Y(M, ce), { event: Ce, source: ae });
  };
  fe(function() {
    var T = I.current, M = T.formattedValue, W = T.numAsString;
    (S !== M || L !== W) && Q(Y(S, L), {
      event: void 0,
      source: xn.props
    });
  }, [S, L]);
  var Ne = A.current ? Fr(A.current) : void 0, Re = typeof window < "u" ? Mo : fe;
  Re(function() {
    var T = A.current;
    if (S !== I.current.formattedValue && T) {
      var M = be(I.current.formattedValue, S, Ne);
      T.value = S, U(T, M, S);
    }
  }, [S]);
  var Ge = function(T, M, W) {
    var ae = M.target, Ce = F.current ? Dg(F.current, ae.selectionEnd) : tu(S, T), ce = Object.assign(Object.assign({}, Ce), { lastValue: S }), ee = a(T, ce), Ze = z(ee);
    if (ee = a(Ze, void 0), u && !u(Y(Ze, ee))) {
      var tt = M.target, nt = Fr(tt), Cr = be(T, S, nt);
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
    var M = T.target, W = M.value, ae = Ge(W, T, xn.event);
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
  }, R = se && Cg() ? "numeric" : void 0, Xe = Object.assign({ inputMode: R }, y, {
    type: t,
    value: S,
    onChange: Ue,
    onKeyDown: qe,
    onMouseUp: At,
    onFocus: N,
    onBlur: Ae
  });
  if (n === "text")
    return o ? H.createElement(H.Fragment, null, o(S, y) || null) : H.createElement("span", Object.assign({}, y, { ref: i }), S);
  if (r) {
    var Tt = r;
    return H.createElement(Tt, Object.assign({}, Xe, { ref: i }));
  }
  return H.createElement("input", Object.assign({}, Xe, { ref: i }));
}
function ya(e, t) {
  var n = t.decimalScale, r = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var s = t.allowNegative, a = t.thousandsGroupStyle;
  if (a === void 0 && (a = "thousand"), e === "" || e === "-")
    return e;
  var c = yr(t), l = c.thousandSeparator, d = c.decimalSeparator, u = n !== 0 && e.indexOf(".") !== -1 || n && r, f = Ei(e, s), p = f.beforeDecimal, m = f.afterDecimal, g = f.addNegation;
  return n !== void 0 && (m = Ql(m, n, !!r)), l && (p = xg(p, l, a)), o && (p = o + p), i && (m = m + i), g && (p = "-" + p), e = p + (u && d || "") + m, e;
}
function yr(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var n = e.thousandSeparator, r = e.allowedDecimalSeparators;
  return n === !0 && (n = ","), r || (r = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: n,
    allowedDecimalSeparators: r
  };
}
function Og(e, t) {
  e === void 0 && (e = "");
  var n = new RegExp("(-)"), r = new RegExp("(-)(.)*(-)"), o = n.test(e), i = r.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function Rg(e, t) {
  return new RegExp("(^-)|[0-9]|" + Jl(e), "g");
}
function Vg(e, t, n) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(n != null && n.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Mg(e, t, n) {
  var r;
  t === void 0 && (t = nu(e));
  var o = n.allowNegative, i = n.prefix;
  i === void 0 && (i = "");
  var s = n.suffix;
  s === void 0 && (s = "");
  var a = n.decimalScale, c = t.from, l = t.to, d = l.start, u = l.end, f = yr(n), p = f.allowedDecimalSeparators, m = f.decimalSeparator, g = e[u] === m;
  if (St(e) && (e === i || e === s) && t.lastValue === "")
    return e;
  if (u - d === 1 && p.indexOf(e[d]) !== -1) {
    var h = a === 0 ? "" : m;
    e = e.substring(0, d) + h + e.substring(d + 1, e.length);
  }
  var v = function(A, B, z) {
    var Y = !1, U = !1;
    i.startsWith("-") ? Y = !1 : A.startsWith("--") ? (Y = !1, U = !0) : s.startsWith("-") && A.length === s.length ? Y = !1 : A[0] === "-" && (Y = !0);
    var oe = Y ? 1 : 0;
    return U && (oe = 2), oe && (A = A.substring(oe), B -= oe, z -= oe), { value: A, start: B, end: z, hasNegation: Y };
  }, x = v(e, d, u), E = x.hasNegation;
  r = x, e = r.value, d = r.start, u = r.end;
  var w = v(t.lastValue, c.start, c.end), y = w.start, D = w.end, C = w.value, S = e.substring(d, u);
  e.length && C.length && (y > C.length - s.length || D < i.length) && !(S && s.startsWith(S)) && (e = C);
  var L = 0;
  e.startsWith(i) ? L += i.length : d < i.length && (L = d), e = e.substring(L), u -= L;
  var O = e.length, F = e.length - s.length;
  e.endsWith(s) ? O = F : (u > F || u > e.length - s.length) && (O = u), e = e.substring(0, O), e = Og(E ? "-" + e : e, o), e = (e.match(Rg(m)) || []).join("");
  var I = e.indexOf(m);
  e = e.replace(new RegExp(Jl(m), "g"), function(A, B) {
    return B === I ? "." : "";
  });
  var Q = Ei(e, o), re = Q.beforeDecimal, se = Q.afterDecimal, _ = Q.addNegation;
  return l.end - l.start < c.end - c.start && re === "" && g && !parseFloat(se) && (e = _ ? "-" : ""), e;
}
function Lg(e, t) {
  var n = t.prefix;
  n === void 0 && (n = "");
  var r = t.suffix;
  r === void 0 && (r = "");
  var o = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), i = e[0] === "-";
  o.fill(!1, 0, n.length + (i ? 1 : 0));
  var s = e.length;
  return o.fill(!1, s - r.length + 1, s + 1), o;
}
function _g(e) {
  var t = yr(e), n = t.thousandSeparator, r = t.decimalSeparator, o = e.prefix;
  o === void 0 && (o = "");
  var i = e.allowNegative;
  if (i === void 0 && (i = !0), n === r)
    throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + n + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + r + ` (default value for decimalSeparator is .)
     `);
  return o.startsWith("-") && i && (console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` + o + `
      allowNegative: ` + i + `
    `), i = !1), Object.assign(Object.assign({}, e), { allowNegative: i });
}
function Bg(e) {
  e = _g(e);
  var t = e.suffix, n = e.allowNegative, r = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Qe);
  var i = e.onBlur;
  i === void 0 && (i = Qe);
  var s = e.thousandSeparator, a = e.decimalScale, c = e.fixedDecimalScale, l = e.prefix;
  l === void 0 && (l = "");
  var d = e.defaultValue, u = e.value, f = e.valueIsNumericString, p = e.onValueChange, m = xi(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), g = yr(e), h = g.decimalSeparator, v = g.allowedDecimalSeparators, x = function(_) {
    return ya(_, e);
  }, E = function(_, A) {
    return Mg(_, A, e);
  }, w = Dt(u) ? d : u, y = f ?? Vg(w, l, t);
  Dt(u) ? Dt(d) || (y = y || typeof d == "number") : y = y || typeof u == "number";
  var D = function(_) {
    return Zl(_) ? _ : (typeof _ == "number" && (_ = eu(_)), y && typeof a == "number" ? va(_, a, !!c) : _);
  }, C = ou(D(u), D(d), !!y, x, E, p), S = C[0], L = S.numAsString, O = S.formattedValue, F = C[1], I = function(_) {
    var A = _.target, B = _.key, z = A.selectionStart, Y = A.selectionEnd, U = A.value;
    if (U === void 0 && (U = ""), (B === "Backspace" || B === "Delete") && Y < l.length) {
      _.preventDefault();
      return;
    }
    if (z !== Y) {
      o(_);
      return;
    }
    B === "Backspace" && U[0] === "-" && z === l.length + 1 && n && st(A, 1), a && c && (B === "Backspace" && U[z - 1] === h ? (st(A, z - 1), _.preventDefault()) : B === "Delete" && U[z] === h && _.preventDefault()), v != null && v.includes(B) && U[z] === h && st(A, z + 1);
    var oe = s === !0 ? "," : s;
    B === "Backspace" && U[z - 1] === oe && st(A, z - 1), B === "Delete" && U[z] === oe && st(A, z + 1), o(_);
  }, Q = function(_) {
    var A = L;
    if (A.match(/\d/g) || (A = ""), r || (A = wg(A)), c && a && (A = va(A, a, c)), A !== L) {
      var B = ya(A, e);
      F({
        formattedValue: B,
        value: A,
        floatValue: parseFloat(A)
      }, {
        event: _,
        source: xn.event
      });
    }
    i(_);
  }, re = function(_) {
    return _ === h ? !0 : St(_);
  }, se = function(_) {
    var A = _.currentValue, B = _.lastValue, z = _.formattedValue, Y = _.currentValueIndex, U = _.formattedValueIndex, oe = A[Y], be = z[U], je = tu(B, A), Ne = je.to, Re = function(Ge) {
      return E(Ge).indexOf(".") + l.length;
    };
    return u === 0 && c && a && A[Ne.start] === h && Re(A) < Y && Re(z) > U ? !1 : Y >= Ne.start && Y < Ne.end && v && v.includes(oe) && be === h ? !0 : oe === be;
  };
  return Object.assign(Object.assign({}, m), {
    value: O,
    valueIsNumericString: !1,
    isValidInputCharacter: re,
    isCharacterSame: se,
    onValueChange: F,
    format: x,
    removeFormatting: E,
    getCaretBoundary: function(_) {
      return Lg(_, e);
    },
    onKeyDown: I,
    onBlur: Q
  });
}
function $g(e) {
  var t = Bg(e);
  return H.createElement(iu, Object.assign({}, t));
}
function Fg(e, t) {
  var n = t.format, r = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !r)
    return "";
  for (var s = 0, a = n.split(""), c = 0, l = n.length; c < l; c++)
    n[c] === i && (a[c] = e[s] || ru(o, s), s += 1);
  return a.join("");
}
function kg(e, t, n) {
  t === void 0 && (t = nu(e));
  var r = n.format, o = n.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, s = t.to, a = t.lastValue;
  a === void 0 && (a = "");
  var c = function(h) {
    return r[h] === o;
  }, l = function(h, v) {
    for (var x = "", E = 0; E < h.length; E++)
      c(v + E) && St(h[E]) && (x += h[E]);
    return x;
  }, d = function(h) {
    return h.replace(/[^0-9]/g, "");
  };
  if (!r.match(/\d/))
    return d(e);
  if ((a === "" || i.end - i.start === a.length) && e.length === r.length) {
    for (var u = "", f = 0; f < e.length; f++)
      if (c(f))
        St(e[f]) && (u += e[f]);
      else if (e[f] !== r[f])
        return d(e);
    return u;
  }
  var p = a.substring(0, i.start), m = e.substring(s.start, s.end), g = a.substring(i.end);
  return "" + l(p, 0) + d(m) + l(g, i.end);
}
function jg(e, t) {
  var n = t.format, r = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), s = 0, a = -1, c = {};
  n.split("").forEach(function(f, p) {
    var m = void 0;
    f === o && (s++, m = ru(r, s - 1), a === -1 && e[p] === m && (a = p)), c[p] = m;
  });
  for (var l = function(f) {
    return n[f] === o && e[f] !== c[f];
  }, d = 0, u = i.length; d < u; d++)
    i[d] = d === a || l(d) || l(d - 1);
  return i[n.indexOf(o)] = !0, i;
}
function Gg(e) {
  var t = e.mask;
  if (t) {
    var n = t === "string" ? t : t.toString();
    if (n.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Ug(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Wg(e) {
  var t = e.format, n = e.inputMode;
  n === void 0 && (n = "numeric");
  var r = e.onKeyDown;
  r === void 0 && (r = Qe);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, s = e.defaultValue, a = e.valueIsNumericString, c = xi(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Gg(e);
  var l = function(m) {
    return jg(m, e);
  }, d = function(m) {
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
      w = ir(E, w, l(E), y);
    } else t[w] !== o && g !== "ArrowLeft" && g !== "ArrowRight" && (w = ir(E, w + 1, l(E), "right"));
    w !== v && st(h, w), r(m);
  }, u = Dt(i) ? s : i, f = a ?? Ug(u, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: f });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: s,
    valueIsNumericString: f,
    inputMode: n,
    format: function(m) {
      return Fg(m, p);
    },
    removeFormatting: function(m, g) {
      return kg(m, g, p);
    },
    getCaretBoundary: l,
    onKeyDown: d
  });
}
function zg(e) {
  var t = Wg(e);
  return H.createElement(iu, Object.assign({}, t));
}
const Hg = {
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
  labelClassName: i,
  errorPlace: s = "right",
  parentClassName: a,
  className: c,
  formState: l,
  numberWrapperClassname: d,
  format: u,
  wrapperClassName: f,
  decimalScale: p = 1,
  ...m
}) => {
  var h, v;
  const g = "!border-danger";
  return /* @__PURE__ */ he("label", { className: `relative w-full ${f}`, children: [
    n && /* @__PURE__ */ P(
      "span",
      {
        className: `absolute left-[20px] -top-[10px] px-[6px] text-primary text-xs md:text-sm bg-white z-[1] ${i}`,
        children: n
      }
    ),
    u ? /* @__PURE__ */ P(
      zg,
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
        className: `$${r != null && r.error ? g : ""} w-full border border-primary rounded-xl md:border-primary md:bg-white text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 outline-none ${c}`,
        format: u,
        ...m
      }
    ) : e === "number" ? /* @__PURE__ */ he(
      "div",
      {
        className: `$${r != null && r.error ? g : ""} ${a} flex items-center justify-between w-full border-[1px] border-primary rounded-xl bg-white transition-all duration-300`,
        children: [
          /* @__PURE__ */ P(
            $g,
            {
              decimalScale: p,
              style: { fontSize: "16px" },
              onValueChange: (x) => {
                var E;
                return t == null ? void 0 : t.onChange(+((E = x.value.replace("_", "")) == null ? void 0 : E.toString()));
              },
              value: +(t == null ? void 0 : t.value),
              className: `w-full border-[1px] border-primary rounded-xl md:border-primary bg-white text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
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
        className: `$${r != null && r.error ? g : ""} w-full bg-white border outline-none border-primary rounded-xl text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    /* @__PURE__ */ P("div", { className: "absolute w-full items-center flex justify-center flex-row min-h-[24px]", children: /* @__PURE__ */ P(_d, { children: (r == null ? void 0 : r.error) && ((v = Object.keys(r == null ? void 0 : r.error)) == null ? void 0 : v.length) > 0 && /* @__PURE__ */ P(
      Xl.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.2 },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ P(bi, { error: r == null ? void 0 : r.error })
      }
    ) }) })
  ] });
}, Z0 = Kg, wi = "-", Yg = (e) => {
  const t = Xg(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(wi);
      return a[0] === "" && a.length !== 1 && a.shift(), su(a, t) || qg(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const c = n[s] || [];
      return a && r[s] ? [...c, ...r[s]] : c;
    }
  };
}, su = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? su(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(wi);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
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
  return Jg(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    wo(s, r, i, t);
  }), r;
}, wo = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : xa(t, o);
      i.classGroupId = n;
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
    Object.entries(o).forEach(([i, s]) => {
      wo(s, xa(t, i), n, r);
    });
  });
}, xa = (e, t) => {
  let n = e;
  return t.split(wi).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Zg = (e) => e.isThemeGetter, Jg = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
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
  const o = (i, s) => {
    n.set(i, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    }
  };
}, au = "!", ev = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (a) => {
    const c = [];
    let l = 0, d = 0, u;
    for (let h = 0; h < a.length; h++) {
      let v = a[h];
      if (l === 0) {
        if (v === o && (r || a.slice(h, h + i) === t)) {
          c.push(a.slice(d, h)), d = h + i;
          continue;
        }
        if (v === "/") {
          u = h;
          continue;
        }
      }
      v === "[" ? l++ : v === "]" && l--;
    }
    const f = c.length === 0 ? a : a.substring(d), p = f.startsWith(au), m = p ? f.substring(1) : f, g = u && u > d ? u - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: s
  }) : s;
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
  } = t, i = [], s = e.trim().split(rv);
  let a = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const l = s[c], {
      modifiers: d,
      hasImportantModifier: u,
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
    const h = tv(d).join(":"), v = u ? h + au : h, x = v + g;
    if (i.includes(x))
      continue;
    i.push(x);
    const E = o(g, m);
    for (let w = 0; w < E.length; ++w) {
      const y = E[w];
      i.push(v + y);
    }
    a = l + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function iv() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = cu(t)) && (r && (r += " "), r += n);
  return r;
}
const cu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = cu(e[r])) && (n && (n += " "), n += t);
  return n;
};
function sv(e, ...t) {
  let n, r, o, i = s;
  function s(c) {
    const l = t.reduce((d, u) => u(d), e());
    return n = nv(l), r = n.cache.get, o = n.cache.set, i = a, a(c);
  }
  function a(c) {
    const l = r(c);
    if (l)
      return l;
    const d = ov(c, n);
    return o(c, d), d;
  }
  return function() {
    return i(iv.apply(null, arguments));
  };
}
const ie = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, lu = /^\[(?:([a-z-]+):)?(.+)\]$/i, av = /^\d+\/\d+$/, cv = /* @__PURE__ */ new Set(["px", "full", "screen"]), lv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, fv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, pv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Lt(e) || cv.has(e) || av.test(e), rt = (e) => zt(e, "length", Ev), Lt = (e) => !!e && !Number.isNaN(Number(e)), kr = (e) => zt(e, "number", Lt), qt = (e) => !!e && Number.isInteger(Number(e)), hv = (e) => e.endsWith("%") && Lt(e.slice(0, -1)), k = (e) => lu.test(e), ot = (e) => lv.test(e), mv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), gv = (e) => zt(e, mv, uu), vv = (e) => zt(e, "position", uu), yv = /* @__PURE__ */ new Set(["image", "url"]), bv = (e) => zt(e, yv, Dv), xv = (e) => zt(e, "", wv), Xt = () => !0, zt = (e, t, n) => {
  const r = lu.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Ev = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  uv.test(e) && !dv.test(e)
), uu = () => !1, wv = (e) => fv.test(e), Dv = (e) => pv.test(e), Sv = () => {
  const e = ie("colors"), t = ie("spacing"), n = ie("blur"), r = ie("brightness"), o = ie("borderColor"), i = ie("borderRadius"), s = ie("borderSpacing"), a = ie("borderWidth"), c = ie("contrast"), l = ie("grayscale"), d = ie("hueRotate"), u = ie("invert"), f = ie("gap"), p = ie("gradientColorStops"), m = ie("gradientColorStopPositions"), g = ie("inset"), h = ie("margin"), v = ie("opacity"), x = ie("padding"), E = ie("saturate"), w = ie("scale"), y = ie("sepia"), D = ie("skew"), C = ie("space"), S = ie("translate"), L = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", k, t], I = () => [k, t], Q = () => ["", Je, rt], re = () => ["auto", Lt, k], se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _ = () => ["solid", "dashed", "dotted", "double", "none"], A = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", k], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [Lt, k];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xt],
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
        object: [...se(), k]
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
        z: ["auto", qt, k]
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
        order: ["first", "last", "none", qt, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Xt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qt, k]
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
        "grid-rows": [Xt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [qt, k]
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
        font: [Xt]
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
        bg: [...se(), vv]
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
        shadow: [Xt]
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
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
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
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
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
        rotate: [qt, k]
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
}, Di = /* @__PURE__ */ sv(Sv), Cv = ({
  children: e,
  className: t
}) => /* @__PURE__ */ P(
  "div",
  {
    className: Di(
      "bg-main rounded-[25px] py-5 px-[30px] border-primary/10 border",
      t
    ),
    children: e
  }
), du = Cv, Pv = ({ data: e, className: t, onClick: n }) => {
  const r = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Se(null);
  return /* @__PURE__ */ P(du, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ P("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ he(
    "div",
    {
      onClick: () => n(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && r}`,
      children: [
        /* @__PURE__ */ P("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ P("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, J0 = Pv;
function fu(e, t) {
  const [n, r] = Se(e);
  return fe(() => {
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
  const [o, i] = Se(!1), [s, a] = Se(""), c = fu(s, 100), l = j(null);
  fe(() => {
    const u = (f) => {
      l.current && !l.current.contains(f.target) && i(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, []);
  const d = (u) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(u)) && (t == null ? void 0 : t.value.filter((f) => f !== u)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, u] || [u]
    );
  };
  return /* @__PURE__ */ he("div", { ref: l, className: "relative", children: [
    /* @__PURE__ */ he("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ P(
        bn,
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
          className: Di(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            n
          ),
          value: o && s || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (u) => {
              var f;
              return (f = e.find((p) => p.value === u)) == null ? void 0 : f.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (u) => a(u.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ P("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (u) => u.label.toLowerCase().includes(c.toLowerCase())
    ).map((u) => {
      var f;
      return /* @__PURE__ */ P(
        "li",
        {
          onClick: () => d(u.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ he("div", { className: "flex flex-row", children: [
            u.icon && /* @__PURE__ */ P(bn, { name: u.icon }),
            /* @__PURE__ */ P(
              "button",
              {
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((f = t == null ? void 0 : t.value) == null ? void 0 : f.includes(u.value)) && "text-primary"}`,
                value: u.value,
                children: u.label
              }
            )
          ] })
        },
        u.value
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
  const [i, s] = Se(n), a = fu(i, 300);
  return fe(() => {
    t == null || t(a);
  }, [a]), /* @__PURE__ */ he("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ P(
      bn,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ P(
      "input",
      {
        placeholder: e,
        onChange: (c) => s(c.target.value),
        value: i,
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
  wrapperClassName: i,
  labelClassName: s,
  parentClassName: a,
  formState: c,
  label: l,
  ...d
}) => {
  var f;
  return /* @__PURE__ */ he("label", { className: `relative w-full ${i}`, children: [
    l && /* @__PURE__ */ P(
      "span",
      {
        className: `absolute left-[20px] -top-[10px] px-[6px] text-primary text-xs md:text-sm bg-white z-[1] ${s}`,
        children: l
      }
    ),
    /* @__PURE__ */ P(
      "div",
      {
        className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
        children: /* @__PURE__ */ he(
          "select",
          {
            ...r,
            ...d,
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
    /* @__PURE__ */ P("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((f = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : f.length) && /* @__PURE__ */ P(bi, { error: o == null ? void 0 : o.error }) })
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
function pu(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Pe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Pe(1) : "Expected the enhancer to be a function. Instead, received: '" + yt(n) + "'");
    return n(pu)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Pe(2) : "Expected the root reducer to be a function. Instead, received: '" + yt(e) + "'");
  var o = e, i = t, s = [], a = s, c = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function d() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Pe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function u(g) {
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
        a.splice(x, 1), s = null;
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
      c = !0, i = o(i, g);
    } finally {
      c = !1;
    }
    for (var h = s = a, v = 0; v < h.length; v++) {
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
    var g, h = u;
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
          x.next && x.next(d());
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
    subscribe: u,
    getState: d,
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
function hu() {
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
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Pe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(s);
      });
      return i = hu.apply(void 0, a)(o.dispatch), wa(wa({}, o), {}, {
        dispatch: i
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
const mu = /* @__PURE__ */ Uv(), Wv = () => {
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
function gu(e, t) {
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function E(y) {
    if (typeof y == "object" && y !== null) {
      var D = y.$$typeof;
      switch (D) {
        case t:
          switch (y = y.type, y) {
            case c:
            case l:
            case r:
            case i:
            case o:
            case u:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case d:
                case m:
                case p:
                case s:
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
  return q.AsyncMode = c, q.ConcurrentMode = l, q.ContextConsumer = a, q.ContextProvider = s, q.Element = t, q.ForwardRef = d, q.Fragment = r, q.Lazy = m, q.Memo = p, q.Portal = n, q.Profiler = i, q.StrictMode = o, q.Suspense = u, q.isAsyncMode = function(y) {
    return w(y) || E(y) === c;
  }, q.isConcurrentMode = w, q.isContextConsumer = function(y) {
    return E(y) === a;
  }, q.isContextProvider = function(y) {
    return E(y) === s;
  }, q.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, q.isForwardRef = function(y) {
    return E(y) === d;
  }, q.isFragment = function(y) {
    return E(y) === r;
  }, q.isLazy = function(y) {
    return E(y) === m;
  }, q.isMemo = function(y) {
    return E(y) === p;
  }, q.isPortal = function(y) {
    return E(y) === n;
  }, q.isProfiler = function(y) {
    return E(y) === i;
  }, q.isStrictMode = function(y) {
    return E(y) === o;
  }, q.isSuspense = function(y) {
    return E(y) === u;
  }, q.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === l || y === i || y === o || y === u || y === f || typeof y == "object" && y !== null && (y.$$typeof === m || y.$$typeof === p || y.$$typeof === s || y.$$typeof === a || y.$$typeof === d || y.$$typeof === h || y.$$typeof === v || y.$$typeof === x || y.$$typeof === g);
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function E(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === r || N === l || N === i || N === o || N === u || N === f || typeof N == "object" && N !== null && (N.$$typeof === m || N.$$typeof === p || N.$$typeof === s || N.$$typeof === a || N.$$typeof === d || N.$$typeof === h || N.$$typeof === v || N.$$typeof === x || N.$$typeof === g);
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
              case i:
              case o:
              case u:
                return R;
              default:
                var Xe = R && R.$$typeof;
                switch (Xe) {
                  case a:
                  case d:
                  case m:
                  case p:
                  case s:
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
    var y = c, D = l, C = a, S = s, L = t, O = d, F = r, I = m, Q = p, re = n, se = i, _ = o, A = u, B = !1;
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
      return w(N) === s;
    }
    function be(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function je(N) {
      return w(N) === d;
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
      return w(N) === i;
    }
    function qe(N) {
      return w(N) === o;
    }
    function At(N) {
      return w(N) === u;
    }
    X.AsyncMode = y, X.ConcurrentMode = D, X.ContextConsumer = C, X.ContextProvider = S, X.Element = L, X.ForwardRef = O, X.Fragment = F, X.Lazy = I, X.Memo = Q, X.Portal = re, X.Profiler = se, X.StrictMode = _, X.Suspense = A, X.isAsyncMode = z, X.isConcurrentMode = Y, X.isContextConsumer = U, X.isContextProvider = oe, X.isElement = be, X.isForwardRef = je, X.isFragment = Ne, X.isLazy = Re, X.isMemo = Ge, X.isPortal = Ye, X.isProfiler = Ue, X.isStrictMode = qe, X.isSuspense = At, X.isValidElementType = E, X.typeOf = w;
  }()), X;
}
process.env.NODE_ENV === "production" ? Do.exports = zv() : Do.exports = Hv();
var Kv = Do.exports, Si = Kv, Yv = {
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
}, vu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ci = {};
Ci[Si.ForwardRef] = Xv;
Ci[Si.Memo] = vu;
function Oa(e) {
  return Si.isMemo(e) ? vu : Ci[e.$$typeof] || Yv;
}
var Zv = Object.defineProperty, Jv = Object.getOwnPropertyNames, Ra = Object.getOwnPropertySymbols, Qv = Object.getOwnPropertyDescriptor, ey = Object.getPrototypeOf, Va = Object.prototype;
function yu(e, t, n) {
  if (typeof t != "string") {
    if (Va) {
      var r = ey(t);
      r && r !== Va && yu(e, r, n);
    }
    var o = Jv(t);
    Ra && (o = o.concat(Ra(t)));
    for (var i = Oa(e), s = Oa(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!qv[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
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
var ty = yu;
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
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m;
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
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case s:
                case c:
                case f:
                case u:
                case i:
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
  return Z.ContextConsumer = s, Z.ContextProvider = i, Z.Element = e, Z.ForwardRef = c, Z.Fragment = n, Z.Lazy = f, Z.Memo = u, Z.Portal = t, Z.Profiler = o, Z.StrictMode = r, Z.Suspense = l, Z.SuspenseList = d, Z.isAsyncMode = function() {
    return !1;
  }, Z.isConcurrentMode = function() {
    return !1;
  }, Z.isContextConsumer = function(h) {
    return g(h) === s;
  }, Z.isContextProvider = function(h) {
    return g(h) === i;
  }, Z.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Z.isForwardRef = function(h) {
    return g(h) === c;
  }, Z.isFragment = function(h) {
    return g(h) === n;
  }, Z.isLazy = function(h) {
    return g(h) === f;
  }, Z.isMemo = function(h) {
    return g(h) === u;
  }, Z.isPortal = function(h) {
    return g(h) === t;
  }, Z.isProfiler = function(h) {
    return g(h) === o;
  }, Z.isStrictMode = function(h) {
    return g(h) === r;
  }, Z.isSuspense = function(h) {
    return g(h) === l;
  }, Z.isSuspenseList = function(h) {
    return g(h) === d;
  }, Z.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === o || h === r || h === l || h === d || h === p || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === u || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === m || h.getModuleId !== void 0);
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
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = !1, g = !1, h = !1, v = !1, x = !1, E;
    E = Symbol.for("react.module.reference");
    function w(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === o || x || R === r || R === l || R === d || v || R === p || m || g || h || typeof R == "object" && R !== null && (R.$$typeof === f || R.$$typeof === u || R.$$typeof === i || R.$$typeof === s || R.$$typeof === c || // This needs to include all possible module reference object
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
              case d:
                return Tt;
              default:
                var T = Tt && Tt.$$typeof;
                switch (T) {
                  case a:
                  case s:
                  case c:
                  case f:
                  case u:
                  case i:
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
    var D = s, C = i, S = e, L = c, O = n, F = f, I = u, Q = t, re = o, se = r, _ = l, A = d, B = !1, z = !1;
    function Y(R) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(R) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(R) {
      return y(R) === s;
    }
    function be(R) {
      return y(R) === i;
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
      return y(R) === u;
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
      return y(R) === d;
    }
    J.ContextConsumer = D, J.ContextProvider = C, J.Element = S, J.ForwardRef = L, J.Fragment = O, J.Lazy = F, J.Memo = I, J.Portal = Q, J.Profiler = re, J.StrictMode = se, J.Suspense = _, J.SuspenseList = A, J.isAsyncMode = Y, J.isConcurrentMode = U, J.isContextConsumer = oe, J.isContextProvider = be, J.isElement = je, J.isForwardRef = Ne, J.isFragment = Re, J.isLazy = Ge, J.isMemo = Ye, J.isPortal = Ue, J.isProfiler = qe, J.isStrictMode = At, J.isSuspense = N, J.isSuspenseList = Ae, J.isValidElementType = w, J.typeOf = y;
  }()), J;
}
process.env.NODE_ENV === "production" ? So.exports = ny() : So.exports = ry();
var Ba = So.exports;
function Pi(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Gr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Pi(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function oy(e, t, n) {
  Gr(e, "mapStateToProps"), Gr(t, "mapDispatchToProps"), Gr(n, "mergeProps");
}
const iy = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function sy(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, c, l, d, u, f;
  function p(x, E) {
    return c = x, l = E, d = e(c, l), u = t(r, l), f = n(d, u, l), a = !0, f;
  }
  function m() {
    return d = e(c, l), t.dependsOnOwnProps && (u = t(r, l)), f = n(d, u, l), f;
  }
  function g() {
    return e.dependsOnOwnProps && (d = e(c, l)), t.dependsOnOwnProps && (u = t(r, l)), f = n(d, u, l), f;
  }
  function h() {
    const x = e(c, l), E = !s(x, d);
    return d = x, E && (f = n(d, u, l)), f;
  }
  function v(x, E) {
    const w = !i(E, l), y = !o(x, c, E, l);
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
  } = t, i = gu(t, iy);
  const s = n(e, i), a = r(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && oy(s, a, c), sy(s, a, c, e, i);
}
function cy(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
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
function bu(e, t, n) {
  ly(e) || Pi(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
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
function xu(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, c) {
      i.mapToProps = e, i.dependsOnOwnProps = $a(e);
      let l = i(a, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = $a(l), l = i(a, c)), process.env.NODE_ENV !== "production" && bu(l, o, t), l;
    }, i;
  };
}
function Ni(e, t) {
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
    xu(e, "mapDispatchToProps")
  ) : Ni(e, "mapDispatchToProps") : Co((t) => ({
    dispatch: t
  }));
}
function dy(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    xu(e, "mapStateToProps")
  ) : Ni(e, "mapStateToProps") : Co(() => ({}));
}
function fy(e, t, n) {
  return at({}, n, e, t);
}
function py(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(c, l, d) {
      const u = e(c, l, d);
      return i ? o(u, s) || (s = u) : (i = !0, s = u, process.env.NODE_ENV !== "production" && bu(s, r, "mergeProps")), s;
    };
  };
}
function hy(e) {
  return e ? typeof e == "function" ? py(e) : Ni(e, "mergeProps") : () => fy;
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
      let o = !0, i = n = {
        callback: r,
        next: null,
        prev: n
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !o || t === null || (o = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const Fa = {
  notify() {
  },
  get: () => []
};
function Eu(e, t) {
  let n, r = Fa, o = 0, i = !1;
  function s(g) {
    d();
    const h = r.subscribe(g);
    let v = !1;
    return () => {
      v || (v = !0, h(), u());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return i;
  }
  function d() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = my());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Fa);
  }
  function f() {
    i || (i = !0, d());
  }
  function p() {
    i && (i = !1, u());
  }
  const m = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
const gy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", sr = gy ? G.useLayoutEffect : G.useEffect;
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
  sr(() => e(...t), n);
}
function wy(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Dy(e, t, n, r, o, i, s, a, c, l, d) {
  if (!e) return () => {
  };
  let u = !1, f = null;
  const p = () => {
    if (u || !a.current)
      return;
    const g = t.getState();
    let h, v;
    try {
      h = r(g, o.current);
    } catch (x) {
      v = x, f = x;
    }
    v || (f = null), h === i.current ? s.current || l() : (i.current = h, c.current = h, s.current = !0, d());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (u = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function Sy(e, t) {
  return e === t;
}
let ja = !1;
function wu(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Sy,
  areOwnPropsEqual: i = Ur,
  areStatePropsEqual: s = Ur,
  areMergedPropsEqual: a = Ur,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = mu
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !ja && (ja = !0, Pi('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const d = l, u = dy(e), f = uy(t), p = hy(n), m = !!e;
  return (h) => {
    if (process.env.NODE_ENV !== "production" && !Ba.isValidElementType(h))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${xy(h)}`);
    const v = h.displayName || h.name || "Component", x = `Connect(${v})`, E = {
      shouldHandleStateChanges: m,
      displayName: x,
      wrappedComponentName: v,
      WrappedComponent: h,
      // @ts-ignore
      initMapStateToProps: u,
      // @ts-ignore
      initMapDispatchToProps: f,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: s,
      areOwnPropsEqual: i,
      areMergedPropsEqual: a
    };
    function w(C) {
      const [S, L, O] = G.useMemo(() => {
        const {
          reactReduxForwardedRef: N
        } = C, Ae = gu(C, vy);
        return [C.context, N, Ae];
      }, [C]), F = G.useMemo(() => S && S.Consumer && // @ts-ignore
      Ba.isContextConsumer(/* @__PURE__ */ G.createElement(S.Consumer, null)) ? S : d, [S, d]), I = G.useContext(F), Q = !!C.store && !!C.store.getState && !!C.store.dispatch, re = !!I && !!I.store;
      if (process.env.NODE_ENV !== "production" && !Q && !re)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const se = Q ? C.store : I.store, _ = re ? I.getServerState : se.getState, A = G.useMemo(() => ay(se.dispatch, E), [se]), [B, z] = G.useMemo(() => {
        if (!m) return by;
        const N = Eu(se, Q ? void 0 : I.subscription), Ae = N.notifyNestedSubs.bind(N);
        return [N, Ae];
      }, [se, Q, I]), Y = G.useMemo(() => Q ? I : at({}, I, {
        subscription: B
      }), [Q, I, B]), U = G.useRef(), oe = G.useRef(O), be = G.useRef(), je = G.useRef(!1);
      G.useRef(!1);
      const Ne = G.useRef(!1), Re = G.useRef();
      sr(() => (Ne.current = !0, () => {
        Ne.current = !1;
      }), []);
      const Ge = G.useMemo(() => () => be.current && O === oe.current ? be.current : A(se.getState(), O), [se, O]), Ye = G.useMemo(() => (Ae) => B ? Dy(
        m,
        se,
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
      sr(() => {
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
  noopCheck: i = "once"
}) {
  const s = G.useMemo(() => {
    const l = Eu(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = G.useMemo(() => e.getState(), [e]);
  sr(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || mu;
  return /* @__PURE__ */ G.createElement(c.Provider, {
    value: s
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
function Du(e, t) {
  var n = Se(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = j(!0), o = j(n), i = r.current || !!(t && o.current.inputs && Py(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return fe(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function Ny(e, t) {
  return Du(function() {
    return e;
  }, t);
}
var K = Du, V = Ny, Ay = process.env.NODE_ENV === "production", Wr = "Invariant failed";
function Ga(e, t) {
  if (Ay)
    throw new Error(Wr);
  var n = typeof t == "function" ? t() : t, r = n ? "".concat(Wr, ": ").concat(n) : Wr;
  throw new Error(r);
}
var ke = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, s = r - i, a = o - n, c = {
    top: n,
    right: r,
    bottom: o,
    left: i,
    width: s,
    height: a,
    x: i,
    y: n,
    center: {
      x: (r + i) / 2,
      y: (o + n) / 2
    }
  };
  return c;
}, Ai = function(t, n) {
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
}, Ti = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? zr : r, i = t.border, s = i === void 0 ? zr : i, a = t.padding, c = a === void 0 ? zr : a, l = ke(Ai(n, o)), d = ke(Ua(n, s)), u = ke(Ua(d, c));
  return {
    marginBox: l,
    borderBox: ke(n),
    paddingBox: d,
    contentBox: u,
    margin: o,
    border: s,
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
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = Ty(r, n);
  return Ti({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, cr = function(t, n) {
  return n === void 0 && (n = Iy()), ar(t, n);
}, Su = function(t, n) {
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
  }, i = {
    top: Me(n.borderTopWidth),
    right: Me(n.borderRightWidth),
    bottom: Me(n.borderBottomWidth),
    left: Me(n.borderLeftWidth)
  };
  return Ti({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Cu = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Su(n, r);
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
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var s = e.apply(this, o);
    return n = {
      lastResult: s,
      lastArgs: o,
      lastThis: this
    }, s;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var wn = function(t) {
  var n = [], r = null, o = function() {
    for (var s = arguments.length, a = new Array(s), c = 0; c < s; c++)
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
function Pu(e, t) {
  Vy || typeof window < "u" && window[$y] || console[e](...By(t));
}
const ne = Pu.bind(null, "warn"), Po = Pu.bind(null, "error");
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
    const i = Fy(n, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    r.forEach((i) => {
      i();
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
`, Nu = (e, t) => {
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
}, Au = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, Wy = (e) => {
  const t = e.destination;
  if (t)
    return Nu(e.source, t);
  const n = e.combine;
  return n ? Au(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
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
      ${Nu(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Au(e.draggableId, e.source, n)}
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
}), lt = (e, t) => e.x === t.x && e.y === t.y, Ht = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ct = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Sn = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Ya = (e, t) => Math.min(...t.map((n) => Sn(e, n))), Tu = (e) => (t) => ({
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
var Ft = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = qy(e.marginBox, r), i = Xy(o, n, t), s = Zy(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, Ii = (e, t) => {
  e.frame || (process.env.NODE_ENV, b());
  const n = e.frame, r = Te(t, n.scroll.initial), o = Ht(r), i = {
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
  }, s = Ft({
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
const Iu = me((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Ou = me((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), br = me((e) => Object.values(e)), Jy = me((e) => Object.values(e));
var Nt = me((e, t) => Jy(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Oi(e) {
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
  if (!n.isCombineEnabled || !Oi(o))
    return null;
  function s(p) {
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
    return c ? s(c) : null;
  const l = Er(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return s(p.descriptor.id);
  }
  const d = l.findIndex((p) => p.descriptor.id === c);
  d === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find displaced item in set") : b());
  const u = d - 1;
  if (u < 0)
    return null;
  const f = l[u];
  return s(f.descriptor.id);
}, Kt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Ru = {
  point: ge,
  value: 0
}, Cn = {
  invisible: {},
  visible: {},
  all: []
}, eb = {
  displaced: Cn,
  displacedBy: Ru,
  at: null
};
var tb = eb, $e = (e, t) => (n) => e <= n && n <= t, Vu = (e) => {
  const t = $e(e.top, e.bottom), n = $e(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && s || l && i;
  };
}, nb = (e) => {
  const t = $e(e.top, e.bottom), n = $e(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Ri = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Mu = {
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
  return (o) => e === Ri ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const ob = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : ge;
  return Ln(e, n);
}, ib = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, sb = (e, t, n) => n(t)(e), Vi = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? ob(e, t) : e;
  return ib(i, t, o) && sb(i, n, o);
}, ab = (e) => Vi({
  ...e,
  isVisibleThroughFrameFn: Vu
}), Lu = (e) => Vi({
  ...e,
  isVisibleThroughFrameFn: nb
}), cb = (e) => Vi({
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
  const i = o[e];
  return i ? i.shouldAnimate : !0;
};
function ub(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return ke(Ai(n, r));
}
function Pn({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, c) {
    const l = ub(c, n), d = c.descriptor.id;
    if (a.all.push(d), !ab({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const f = lb(d, i, o), p = {
      draggableId: d,
      shouldAnimate: f
    };
    return a.visible[d] = p, a;
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
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const c = Kt(e, n);
  if (s == null)
    return Xa({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((m) => m.descriptor.index === s);
  if (!l)
    return Xa({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const d = Er(e, t), u = t.indexOf(l), f = d.slice(u);
  return {
    displaced: Pn({
      afterDragging: f,
      destination: n,
      displacedBy: o,
      last: i,
      viewport: r.frame,
      forceShouldAnimate: a
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: s
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
  const i = r.draggableId, a = n[i].descriptor.index;
  return pt(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, pb = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return i < s || i > c ? null : i;
}, hb = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: i,
  previousImpact: s,
  viewport: a,
  afterCritical: c
}) => {
  const l = s.at;
  if (l || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot move in direction without previous impact location") : b()), l.type === "REORDER") {
    const u = pb({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return u == null ? null : ur({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: u
    });
  }
  const d = fb({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return d == null ? null : ur({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: d
  });
}, mb = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return pt(n, t) ? o ? ge : Ht(r.point) : o ? r.point : ge;
}, gb = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = xr(t);
  r || (process.env.NODE_ENV, b());
  const o = r.draggableId, i = n[o].page.borderBox.center, s = mb({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return ye(i, s);
};
const _u = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, vb = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Mi = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Za = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ct(e.line, t.marginBox[e.end] + _u(e, n), Mi(e, t.marginBox, n)), Ja = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ct(e.line, t.marginBox[e.start] - vb(e, n), Mi(e, t.marginBox, n)), yb = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ct(e.line, t.contentBox[e.start] + _u(e, n), Mi(e, t.contentBox, n));
var bb = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = Nt(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return yb({
      axis: a,
      moveInto: r.page,
      isMoving: s
    });
  const {
    displaced: c,
    displacedBy: l
  } = e, d = c.all[0];
  if (d) {
    const f = n[d];
    if (pt(d, o))
      return Ja({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = ar(f.page, l.point);
    return Ja({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const u = i[i.length - 1];
  if (u.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (pt(u.descriptor.id, o)) {
    const f = ar(u.page, Ht(o.displacedBy.point));
    return Za({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return Za({
    axis: a,
    moveRelativeTo: u.page,
    isMoving: s
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
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? bb({
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
}, Bu = (e, t) => {
  const n = Te(t, e.scroll.initial), r = Ht(n);
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
  const i = Bu(t, ye(t.scroll.current, o)), s = n.frame ? Ii(n, ye(n.frame.scroll.current, o)) : n, a = e.displaced, c = Pn({
    afterDragging: Qa(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = Pn({
    afterDragging: Qa(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), d = {}, u = {}, f = [a, c, l];
  return a.all.forEach((m) => {
    const g = Eb(m, f);
    if (g) {
      u[m] = g;
      return;
    }
    d[m] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: d,
      visible: u
    }
  };
}, Db = (e, t) => ye(e.scroll.diff.displacement, t), Li = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Db(n, e), o = Te(r, t.page.borderBox.center);
  return ye(t.client.borderBox.center, o);
}, $u = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = Te(n, e.page.borderBox.center), c = {
    target: Ln(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? cb(c) : Lu(c);
}, Sb = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: s,
  previousClientSelection: a,
  afterCritical: c
}) => {
  if (!n.isEnabled)
    return null;
  const l = Nt(n.descriptor.id, r), d = Kt(t, n), u = Qy({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || hb({
    isMovingForward: e,
    isInHomeList: d,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: i,
    afterCritical: c
  });
  if (!u)
    return null;
  const f = wr({
    impact: u,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if ($u({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Li({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: u,
      scrollJumpRequest: null
    };
  const m = Te(f, s), g = wb({
    impact: u,
    viewport: i,
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
const we = (e) => {
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
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = $e(i[s.start], i[s.end]), c = br(r).filter((d) => d !== n).filter((d) => d.isEnabled).filter((d) => !!d.subject.active).filter((d) => Vu(o.frame)(we(d))).filter((d) => {
    const u = we(d);
    return e ? i[s.crossAxisEnd] < u[s.crossAxisEnd] : u[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((d) => {
    const u = we(d), f = $e(u[s.start], u[s.end]);
    return a(u[s.start]) || a(u[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((d, u) => {
    const f = we(d)[s.crossAxisStart], p = we(u)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((d, u, f) => we(d)[s.crossAxisStart] === we(f[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((d) => $e(we(d)[s.start], we(d)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((d, u) => we(d)[s.start] - we(u)[s.start])[0] : c.sort((d, u) => {
    const f = Ya(t, qa(we(d))), p = Ya(t, qa(we(u)));
    return f !== p ? f - p : we(d)[s.start] - we(u)[s.start];
  })[0];
};
const ec = (e, t) => {
  const n = e.page.borderBox.center;
  return pt(e.descriptor.id, t) ? Te(n, t.displacedBy.point) : n;
}, Pb = (e, t) => {
  const n = e.page.borderBox;
  return pt(e.descriptor.id, t) ? Ln(n, Ht(t.displacedBy.point)) : n;
};
var Nb = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => Lu({
  target: Pb(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const c = Sn(e, No(n, ec(s, o))), l = Sn(e, No(n, ec(a, o)));
  return c < l ? -1 : l < c ? 1 : s.descriptor.index - a.descriptor.index;
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
  const o = e.subject.page.contentBox[r.size], c = Nt(e.descriptor.id, n).reduce((l, d) => l + d.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ct(r.line, c);
}, Fu = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), ku = (e, t, n) => {
  const r = e.frame;
  Kt(t, e) && (process.env.NODE_ENV !== "production" ? b(!1, "Should not add placeholder space to home list") : b()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot add placeholder size to a subject when it already has one") : b());
  const o = _n(e.axis, t.displaceBy).point, i = Ab(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const d = Ft({
      page: e.subject.page,
      withPlaceholder: s,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: d
    };
  }
  const a = i ? ye(r.scroll.max, i) : r.scroll.max, c = Fu(r, a), l = Ft({
    page: e.subject.page,
    withPlaceholder: s,
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
    const s = Ft({
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
  const r = t.oldFrameMaxScroll;
  r || (process.env.NODE_ENV !== "production" ? b(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : b());
  const o = Fu(n, r), i = Ft({
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
var Ib = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: n,
  draggable: r,
  draggables: o,
  destination: i,
  viewport: s,
  afterCritical: a
}) => {
  if (!t) {
    if (n.length)
      return null;
    const u = {
      displaced: Cn,
      displacedBy: Ru,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, f = wr({
      impact: u,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = Kt(r, i) ? i : ku(i, r, o);
    return $u({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: f,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? u : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], l = (() => {
    const u = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? u : u + 1;
  })(), d = _n(i.axis, r.displaceBy);
  return ur({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: d,
    last: Cn,
    index: l
  });
}, Ob = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const c = Cb({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const l = Nt(c.descriptor.id, o), d = Nb({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), u = Ib({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: d,
    insideDestination: l,
    viewport: s,
    afterCritical: a
  });
  if (!u)
    return null;
  const f = wr({
    impact: u,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Li({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: u,
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
  const n = Rb(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], d = e.current.page.borderBoxCenter, {
    draggables: u,
    droppables: f
  } = e.dimensions;
  return a ? Sb({
    isMovingForward: c,
    previousPageBorderBoxCenter: d,
    draggable: l,
    destination: i,
    draggables: u,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Ob({
    isMovingForward: c,
    previousPageBorderBoxCenter: d,
    draggable: l,
    isOver: i,
    draggables: u,
    droppables: f,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function bt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function ju(e) {
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
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = Ct(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Sn(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
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
    const i = o.subject.active;
    if (!i || !Mb(e, i))
      return !1;
    if (ju(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], c = e[s.crossAxisStart], l = e[s.crossAxisEnd], d = $e(i[s.crossAxisStart], i[s.crossAxisEnd]), u = d(c), f = d(l);
    return !u && !f ? !0 : u ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : Lb({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Gu = (e, t) => ke(Ln(e, t));
var Bb = (e, t) => {
  const n = e.frame;
  return n ? Gu(t, n.scroll.diff.value) : t;
};
function Uu({
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
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, c = _n(n.axis, t.displaceBy), l = c.value, d = e[a.start], u = e[a.end], p = Er(t, r).find((g) => {
    const h = g.descriptor.id, v = g.page.borderBox.center[a.line], x = pt(h, s), E = Uu({
      displaced: o,
      id: h
    });
    return x ? E ? u <= v : d < v - l : E ? u <= v + l : d < v;
  }) || null, m = $b({
    draggable: t,
    closest: p,
    inHomeList: Kt(t, n)
  });
  return ur({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
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
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = _n(r.axis, e.displaceBy), c = a.value, l = t[s.start], d = t[s.end], f = Er(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, x = h[s.size] / kb, E = pt(g, i), w = Uu({
      displaced: n.displaced,
      id: g
    });
    return E ? w ? d > h[s.start] + x && d < h[s.end] - x : l > h[s.start] - c + x && l < h[s.end] - c - x : w ? d > h[s.start] + c + x && d < h[s.end] + c - x : l > h[s.start] + x && l < h[s.end] - x;
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
}, Wu = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = Gu(t.page.borderBox, e), c = _b({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return tb;
  const l = r[c], d = Nt(l.descriptor.id, n), u = Bb(l, a);
  return jb({
    pageBorderBoxWithDroppableScroll: u,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: d,
    afterCritical: s
  }) || Fb({
    pageBorderBoxWithDroppableScroll: u,
    draggable: t,
    destination: l,
    insideDestination: d,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, _i = (e, t) => ({
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
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = Tb(i);
  return _i(n, s);
};
var Ub = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = Gb({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = Ie(o);
  if (!s)
    return i;
  const a = n[s];
  if (Kt(e, a) || a.subject.withPlaceholder)
    return i;
  const c = ku(a, e, t);
  return _i(i, c);
}, cn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, c = t || e.current.client.selection, l = Te(c, e.initial.client.selection), d = {
    offset: l,
    selection: c,
    borderBoxCenter: ye(e.initial.client.borderBoxCenter, l)
  }, u = {
    selection: ye(d.selection, s.scroll.current),
    borderBoxCenter: ye(d.borderBoxCenter, s.scroll.current),
    offset: ye(d.offset, s.scroll.diff.value)
  }, f = {
    client: d,
    page: u
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: s,
      current: f
    };
  const p = a.draggables[e.critical.draggable.id], m = o || Wu({
    pageOffset: u.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
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
    viewport: s,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Wb(e, t) {
  return e.map((n) => t[n]);
}
var zu = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = Wb(i.all, n), a = Pn({
    afterDragging: s,
    destination: r,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return {
    ...e,
    displaced: a
  };
}, Hu = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = wr({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return Li({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Ku = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, b());
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, c = s[e.critical.draggable.id], l = Ie(r);
  l || (process.env.NODE_ENV !== "production" ? b(!1, "Must be over a destination in SNAP movement mode") : b());
  const d = a[l], u = zu({
    impact: r,
    viewport: o,
    destination: d,
    draggables: s
  }), f = Hu({
    impact: u,
    draggable: c,
    droppable: d,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return cn({
    impact: u,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, zb = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Yu = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = _n(t.axis, e.displaceBy), i = Nt(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Expected draggable to be inside home list") : b());
  const a = i.slice(s + 1), c = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
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
  droppables: _i(e.droppables, t)
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
    const i = o.descriptor.droppableId, s = t[i], c = Yb(s).scroll.diff.value, l = ye(r, c);
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
    return Ii(x, v.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Iu(n)
  }, o = Ou(qb({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((v) => {
    delete i[v];
  });
  const s = {
    droppables: r,
    draggables: i
  }, a = Ie(e.impact), c = a ? s.droppables[a] : null, l = s.draggables[e.critical.draggable.id], d = s.droppables[e.critical.droppable.id], {
    impact: u,
    afterCritical: f
  } = Yu({
    draggable: l,
    home: d,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : u, m = Wu({
    pageOffset: e.current.page.offset,
    draggable: s.draggables[e.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: f
  });
  $n();
  const g = {
    ...e,
    phase: "DRAGGING",
    impact: m,
    onLiftImpact: u,
    dimensions: s,
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
  return !Ao(e) || n ? cn({
    state: e,
    dimensions: r
  }) : Ku({
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
      dimensions: i,
      movementMode: s
    } = t.payload, a = i.draggables[n.draggable.id], c = i.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: ge
    }, d = {
      client: l,
      page: {
        selection: ye(l.selection, o.scroll.initial),
        borderBoxCenter: ye(l.selection, o.scroll.initial),
        offset: ye(l.selection, o.scroll.diff.value)
      }
    }, u = br(i.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = Yu({
      draggable: a,
      home: c,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: s,
      dimensions: i,
      initial: d,
      current: d,
      isWindowScrollAllowed: u,
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
    return lt(n, e.current.client.selection) ? e : cn({
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
    const i = Ii(o, r);
    return Hr(e, i, !1);
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
    const i = {
      ...o,
      isEnabled: r
    };
    return Hr(e, i, !0);
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
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Hr(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    bt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot move by window in phase ${e.phase}`) : b()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? b(!1, "Window scrolling is currently not supported for fixed lists") : b());
    const n = t.payload.newScroll;
    if (lt(e.viewport.scroll.current, n))
      return Kr(e);
    const r = Bu(e.viewport, n);
    return Ao(e) ? Ku({
      state: e,
      viewport: r
    }) : cn({
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
    return n ? cn({
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
}), ix = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), qu = (e) => ({
  type: "MOVE",
  payload: e
}), sx = (e) => ({
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
}), Bi = () => ({
  type: "FLUSH",
  payload: null
}), fx = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), $i = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Xu = (e) => ({
  type: "DROP",
  payload: e
}), px = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Zu = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function hx(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), n = {};
  for (let o = 1; o < t.length; o++) {
    const i = t[o], s = t[o - 1];
    i !== s + 1 && (n[i] = !0);
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
    id: i,
    clientSelection: s,
    movementMode: a
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n($i({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase to start a drag") : b()), n(Bi()), n(Jb({
    draggableId: i,
    movementMode: a
  }));
  const d = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: u,
    dimensions: f,
    viewport: p
  } = e.startPublishing(d);
  mx(u, f), n(ex({
    critical: u,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, vx = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Fi = {
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
}, Ju = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, gt = `${Ju.outOfTheWay}s ${Fi.outOfTheWay}`, ln = {
  fluid: `opacity ${gt}`,
  snap: `transform ${gt}, opacity ${gt}`,
  drop: (e) => {
    const t = `${e}s ${Fi.drop}`;
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
  maxDropTime: Qu
} = Ju, yx = Qu - Io, rc = 1500, bx = 0.6;
var xx = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Sn(e, t);
  if (r <= 0)
    return Io;
  if (r >= rc)
    return Qu;
  const o = r / rc, i = Io + yx * o, s = n === "CANCEL" ? i * bx : i;
  return Number(s.toFixed(2));
}, Ex = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = Ie(e), c = a ? s[a] : null, l = s[t.descriptor.droppableId], d = Hu({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return Te(d, t.client.borderBox.center);
}, wx = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: zu({
    draggables: e,
    impact: i,
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
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(px({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? b(!1, "A DROP action occurred while DROP_PENDING and still waiting") : b()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot drop in phase: ${o.phase}`) : b());
  const a = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: d,
    didDropInsideDroppable: u
  } = wx({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = u ? Oi(d) : null, p = u ? xr(d) : null, m = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, g = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: m,
    reason: i,
    mode: o.movementMode,
    destination: f,
    combine: p
  }, h = Ex({
    impact: d,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), v = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: g,
    impact: d
  };
  if (!(!lt(o.current.client.offset, h) || !!g.combine)) {
    t($i({
      completed: v
    }));
    return;
  }
  const E = xx({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(fx({
    newHomeClientOffset: h,
    dropDuration: E,
    completed: v
  }));
};
var Sx = Dx, ed = () => ({
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
    e(ed());
  }
  const n = wn(t), r = Cx(n);
  let o = ct;
  function i() {
    return o !== ct;
  }
  function s() {
    i() && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start scroll listener when already active") : b()), o = _e(window, [r]);
  }
  function a() {
    i() || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop scroll listener when not active") : b()), n.cancel(), o(), o = ct;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const Nx = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Ax = (e) => {
  const t = Px({
    onWindowScroll: (n) => {
      e.dispatch(sx({
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
  }), o = (i) => {
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
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Ox = () => {
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
const Rx = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Vx = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Mx = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Zt = (e, t) => {
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
  const o = (u, f) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : b()), Zt("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: u,
        mode: f
      });
    });
  }, i = (u, f) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b()), Zt("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(zn(u, f));
    });
  }, s = (u, f) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b());
    const p = zn(u, f);
    r = {
      mode: f,
      lastCritical: u,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Zt("onDragStart", () => Yr(e().onDragStart, p, t, Jn.onDragStart));
    });
  }, a = (u, f) => {
    const p = Oi(f), m = xr(f);
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragMove when onDragStart has not been called") : b());
    const g = !Mx(u, r.lastCritical);
    g && (r.lastCritical = u);
    const h = !Rx(r.lastLocation, p);
    h && (r.lastLocation = p);
    const v = !Vx(r.lastCombine, m);
    if (v && (r.lastCombine = m), !g && !h && !v)
      return;
    const x = {
      ...zn(u, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      Zt("onDragUpdate", () => Yr(e().onDragUpdate, x, t, Jn.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Can only flush responders while dragging") : b()), n.flush();
  }, l = (u) => {
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : b()), r = null, Zt("onDragEnd", () => Yr(e().onDragEnd, u, t, Jn.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: s,
    update: a,
    flush: c,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const u = {
        ...zn(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(u);
    }
  };
}, _x = (e, t) => {
  const n = Lx(e, t);
  return (r) => (o) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const a = i.payload.critical;
      n.beforeStart(a, i.payload.movementMode), o(i), n.start(a, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const a = i.payload.completed.result;
      n.flush(), o(i), n.drop(a);
      return;
    }
    if (o(i), i.type === "FLUSH") {
      n.abort();
      return;
    }
    const s = r.getState();
    s.phase === "DRAGGING" && n.update(s.critical, s.impact);
  };
};
const Bx = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot finish a drop animating when no drop is occurring") : b()), e.dispatch($i({
    completed: r.completed
  }));
};
var $x = Bx;
const Fx = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && r(), o(i), i.type !== "DROP_ANIMATE")
      return;
    const s = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Zu());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = _e(window, [s]);
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
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Xu({
    reason: r.reason
  })));
};
var Hx = zx;
const Kx = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : hu;
var Yx = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => pu(Zb, Kx($v(vx(n), jx(e), gx(e), Sx, $x, kx, Hx, Wx(i), Tx, Gx(t), _x(r, o))));
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
        modified: d
      } = n, u = Object.keys(c).map((m) => e.draggable.getById(m).getDimension(ge)).sort((m, g) => m.descriptor.index - g.descriptor.index), f = Object.keys(d).map((m) => {
        const h = e.droppable.getById(m).callbacks.getScrollWhileDragging();
        return {
          droppableId: m,
          scroll: h
        };
      }), p = {
        additions: u,
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
var td = ({
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
}, nd = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.documentElement") : b()), e;
}, rd = () => {
  const e = nd();
  return td({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Xx = () => {
  const e = ed(), t = rd(), n = e.y, r = e.x, o = nd(), i = o.clientWidth, s = o.clientHeight, a = r + i, c = n + s;
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
  const r = Xx(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((d) => d.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((d) => d.getDimension(o)), c = {
    draggables: Ou(a),
    droppables: Iu(s)
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
  }, i = (f, p) => {
    n && (e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update isCombineEnabled flag of Droppable ${f} as it is not registered`) : b()), t.updateDroppableIsCombineEnabled({
      id: f,
      isCombineEnabled: p
    }));
  }, s = (f, p) => {
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
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: a,
    updateDroppableScroll: s,
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
}, od = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Qx = (e) => {
  window.scrollBy(e.x, e.y);
};
const eE = me((e) => br(e).filter((t) => !(!t.isEnabled || !t.frame))), tE = (e, t) => eE(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? b(!1, "Invalid result") : b()), ju(r.frame.pageMarginBox)(e))) || null;
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
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, id = ({
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
}, ki = 1, oE = (e, t, n = () => An) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return ki;
  const i = 1 - id({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, iE = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return ki;
  const d = id({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), u = e * r.ease(d);
  return Math.ceil(u);
}, ic = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = oE(e, t, o);
  return i === 0 ? 0 : r ? Math.max(iE(i, n, o), ki) : i;
}, sc = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = rE(e, r, i);
  return t[r.end] < t[r.start] ? ic({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * ic({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, sE = ({
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
const aE = Tu((e) => e === 0 ? 0 : e);
var sd = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = {
    top: r.y - t.top,
    right: t.right - r.x,
    bottom: t.bottom - r.y,
    left: r.x - t.left
  }, a = sc({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Ri,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = sc({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Mu,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = aE({
    x: c,
    y: a
  });
  if (lt(l, ge))
    return null;
  const d = sE({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return d ? lt(d, ge) ? null : d : null;
};
const cE = Tu((e) => e === 0 ? 0 : e > 0 ? 1 : -1), ji = /* @__PURE__ */ (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = ye(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return lt(i, ge) ? null : i;
  };
})(), ad = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = cE(n), i = ji({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Gi = (e, t) => ad({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), lE = (e, t) => {
  if (!Gi(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return ji({
    current: r,
    max: n,
    change: t
  });
}, Ui = (e, t) => {
  const n = e.frame;
  return n ? ad({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, uE = (e, t) => {
  const n = e.frame;
  return !n || !Ui(e, t) ? null : ji({
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
  getAutoScrollerOptions: i
}) => {
  const s = sd({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Gi(e, s) ? s : null;
}, fE = ({
  droppable: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.frame;
  if (!s)
    return null;
  const a = sd({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Ui(e, a) ? a : null;
}, ac = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const u = e.viewport, f = dE({
      dragStartTime: t,
      viewport: u,
      subject: c,
      center: s,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (f) {
      r(f);
      return;
    }
  }
  const l = nE({
    center: s,
    destination: Ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const d = fE({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  d && o(l.descriptor.id, d);
}, pE = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => An
}) => {
  const r = wn(e), o = wn(t);
  let i = null;
  const s = (l) => {
    i || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fluid scroll if not dragging") : b());
    const {
      shouldUseTimeDampening: d,
      dragStartTime: u
    } = i;
    ac({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: u,
      shouldUseTimeDampening: d,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      Bn(), i && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start auto scrolling when already started") : b());
      const d = Date.now();
      let u = !1;
      const f = () => {
        u = !0;
      };
      ac({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: f,
        scrollDroppable: f,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: d,
        shouldUseTimeDampening: u
      }, $n(), u && s(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: s
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
    if (!Ui(a, c))
      return c;
    const l = uE(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const d = Te(c, l);
    return t(a.descriptor.id, d), Te(c, d);
  }, i = (a, c, l) => {
    if (!a || !Gi(c, l))
      return l;
    const d = lE(c, l);
    if (!d)
      return n(l), null;
    const u = Te(l, d);
    return n(u), Te(l, u);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const l = Ie(a.impact);
    l || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot perform a jump scroll when there is no destination") : b());
    const d = o(a.dimensions.droppables[l], c);
    if (!d)
      return;
    const u = a.viewport, f = i(a.isWindowScrollAllowed, u, d);
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
  }), i = hE({
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
        c.scrollJumpRequest && i(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const kt = "data-rfd", jt = (() => {
  const e = `${kt}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Oo = (() => {
  const e = `${kt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), gE = (() => {
  const e = `${kt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), cc = {
  contextId: `${kt}-scroll-container-context-id`
}, vE = (e) => (t) => `[${t}="${e}"]`, Jt = (e, t) => e.map((n) => {
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
      selector: t(jt.contextId),
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
      transition: ${ln.outOfTheWay};
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
  }, s = [r, n, o, {
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
    always: Jt(s, "always"),
    resting: Jt(s, "resting"),
    dragging: Jt(s, "dragging"),
    dropAnimating: Jt(s, "dropAnimating"),
    userCancel: Jt(s, "userCancel")
  };
};
const xE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Mo : fe;
var Oe = xE;
const Xr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find the head to append a style to") : b()), e;
}, lc = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function EE(e, t) {
  const n = K(() => bE(e), [e]), r = j(null), o = j(null), i = V(me((u) => {
    const f = o.current;
    f || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), f.textContent = u;
  }), []), s = V((u) => {
    const f = r.current;
    f || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), f.textContent = u;
  }, []);
  Oe(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? b(!1, "style elements already mounted") : b());
    const u = lc(t), f = lc(t);
    return r.current = u, o.current = f, u.setAttribute(`${kt}-always`, e), f.setAttribute(`${kt}-dynamic`, e), Xr().appendChild(u), Xr().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot unmount ref as it is not set") : b()), Xr().removeChild(g), m.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const a = V(() => i(n.dragging), [i, n.dragging]), c = V((u) => {
    if (u === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = V(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return K(() => ({
    dragging: a,
    dropping: c,
    resting: l
  }), [a, c, l]);
}
function cd(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ld = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Fn(e) {
  return e instanceof ld(e).HTMLElement;
}
function ud(e, t) {
  const n = `[${jt.contextId}="${e}"]`, r = cd(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && ne(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(jt.draggableId) === t);
  return o ? Fn(o) ? o : (process.env.NODE_ENV !== "production" && ne("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ne(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function wE(e) {
  const t = j({}), n = j(null), r = j(null), o = j(!1), i = V(function(f, p) {
    const m = {
      id: f,
      focus: p
    };
    return t.current[f] = m, function() {
      const h = t.current;
      h[f] !== m && delete h[f];
    };
  }, []), s = V(function(f) {
    const p = ud(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = V(function(f, p) {
    n.current === f && (n.current = p);
  }, []), c = V(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && s(f);
    }));
  }, [s]), l = V(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(jt.draggableId) === f && (n.current = f);
  }, []);
  return Oe(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), K(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [i, l, c, a]);
}
function DE() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(u) {
    return t.push(u), function() {
      const p = t.indexOf(u);
      p !== -1 && t.splice(p, 1);
    };
  }
  function r(u) {
    t.length && t.forEach((f) => f(u));
  }
  function o(u) {
    return e.draggables[u] || null;
  }
  function i(u) {
    const f = o(u);
    return f || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find draggable entry with id [${u}]`) : b()), f;
  }
  const s = {
    register: (u) => {
      e.draggables[u.descriptor.id] = u, r({
        type: "ADDITION",
        value: u
      });
    },
    update: (u, f) => {
      const p = e.draggables[f.descriptor.id];
      p && p.uniqueId === u.uniqueId && (delete e.draggables[f.descriptor.id], e.draggables[u.descriptor.id] = u);
    },
    unregister: (u) => {
      const f = u.descriptor.id, p = o(f);
      p && u.uniqueId === p.uniqueId && (delete e.draggables[f], e.droppables[u.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: u
      }));
    },
    getById: i,
    findById: o,
    exists: (u) => !!o(u),
    getAllByType: (u) => Object.values(e.draggables).filter((f) => f.descriptor.type === u)
  };
  function a(u) {
    return e.droppables[u] || null;
  }
  function c(u) {
    const f = a(u);
    return f || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find droppable entry with id [${u}]`) : b()), f;
  }
  const l = {
    register: (u) => {
      e.droppables[u.descriptor.id] = u;
    },
    unregister: (u) => {
      const f = a(u.descriptor.id);
      f && u.uniqueId === f.uniqueId && delete e.droppables[u.descriptor.id];
    },
    getById: c,
    findById: a,
    exists: (u) => !!a(u),
    getAllByType: (u) => Object.values(e.droppables).filter((f) => f.descriptor.type === u)
  };
  function d() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: s,
    droppable: l,
    subscribe: n,
    clean: d
  };
}
function SE() {
  const e = K(DE, []);
  return fe(() => function() {
    H.version.startsWith("16") || H.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Wi = H.createContext(null), Tn = () => {
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
  return fe(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), at(i.style, PE), Tn().appendChild(i), function() {
      setTimeout(function() {
        const c = Tn();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), V((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
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
const dd = {
  separator: "::"
};
function IE(e, t = dd) {
  return K(() => `${e}${t.separator}${TE++}`, [t.separator, e]);
}
function OE(e, t = dd) {
  const n = H.useId();
  return K(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var zi = "useId" in H ? OE : IE;
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
  const n = zi("hidden-text", {
    separator: "-"
  }), r = K(() => RE({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return fe(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", Tn().appendChild(i), function() {
      const a = Tn();
      a.contains(i) && a.removeChild(i);
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
function Hi(e) {
  process.env.NODE_ENV !== "production" && e();
}
function kn(e, t) {
  Hi(() => {
    fe(() => {
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
function Ki(e) {
  const t = j(e);
  return fe(() => {
    t.current = e;
  }), t;
}
function kE() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(s) {
    return s === e;
  }
  function r(s) {
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
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: i
  };
}
function In(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const jE = 9, GE = 13, Yi = 27, fd = 32, UE = 33, WE = 34, zE = 35, HE = 36, KE = 37, YE = 38, qE = 39, XE = 40, ZE = {
  [GE]: !0,
  [jE]: !0
};
var pd = (e) => {
  ZE[e.keyCode] && e.preventDefault();
};
const JE = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var Sr = JE;
const hd = 0, dc = 5;
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
        button: i,
        clientX: s,
        clientY: a
      } = o;
      if (i !== hd)
        return;
      const c = {
        x: s,
        y: a
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(c);
        return;
      }
      l.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot be IDLE") : b());
      const d = l.point;
      if (!QE(d, c))
        return;
      o.preventDefault();
      const u = l.actions.fluidLift(c);
      r({
        type: "DRAGGING",
        actions: u
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const i = n();
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
      n().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (n().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === Yi) {
        o.preventDefault(), e();
        return;
      }
      pd(o);
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
      const i = n();
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase") : b()), i.actions.shouldRespectForcePress()) {
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
    fn: function(u) {
      if (u.defaultPrevented || u.button !== hd || u.ctrlKey || u.metaKey || u.shiftKey || u.altKey)
        return;
      const f = e.findClosestDraggableId(u);
      if (!f)
        return;
      const p = e.tryGetLock(f, s, {
        sourceEvent: u
      });
      if (!p)
        return;
      u.preventDefault();
      const m = {
        x: u.clientX,
        y: u.clientY
      };
      n.current(), l(p, m);
    }
  }), [e]), o = K(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (d) => {
      if (d.defaultPrevented)
        return;
      const u = e.findClosestDraggableId(d);
      if (!u)
        return;
      const f = e.findOptionsForDraggable(u);
      f && (f.shouldRespectForcePress || e.canGetLock(u) && d.preventDefault());
    }
  }), [e]), i = V(function() {
    const u = {
      passive: !1,
      capture: !0
    };
    n.current = _e(window, [o, r], u);
  }, [o, r]), s = V(() => {
    t.current.type !== "IDLE" && (t.current = fc, n.current(), i());
  }, [i]), a = V(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), c = V(function() {
    const u = {
      capture: !0,
      passive: !1
    }, f = ew({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = _e(window, f, u);
  }, [a, s]), l = V(function(u, f) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b()), t.current = {
      type: "PENDING",
      point: f,
      actions: u
    }, c();
  }, [c]);
  Oe(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
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
      if (o.keyCode === Yi) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === fd) {
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
      pd(o);
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
function iw(e) {
  const t = j(nw), n = K(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== fd)
        return;
      const s = e.findClosestDraggableId(i);
      if (!s)
        return;
      const a = e.tryGetLock(s, d, {
        sourceEvent: i
      });
      if (!a)
        return;
      i.preventDefault();
      let c = !0;
      const l = a.snapLift();
      t.current();
      function d() {
        c || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop capturing a keyboard drag when not capturing") : b()), c = !1, t.current(), r();
      }
      t.current = _e(window, ow(l, d), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = V(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = _e(window, [n], i);
  }, [n]);
  Oe(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Jr = {
  type: "IDLE"
}, sw = 120, aw = 0.15;
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
      n.keyCode === Yi && n.preventDefault(), e();
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
        clientX: i,
        clientY: s
      } = r.touches[0], a = {
        x: i,
        y: s
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
      const i = r.touches[0];
      if (!i || !(i.force >= aw))
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
  }, []), i = K(() => ({
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
      n.current(), u(g, E);
    }
  }), [e]), s = V(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = _e(window, [i], p);
  }, [i]), a = V(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(Jr), n.current(), s());
  }, [s, o]), c = V(() => {
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
  }, [c, r, a]), d = V(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, `Cannot start dragging from phase ${p.type}`) : b());
    const m = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [r, o]), u = V(function(p, m) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b());
    const g = setTimeout(d, sw);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: g
    }), l();
  }, [l, r, o, d]);
  Oe(function() {
    return s(), function() {
      n.current();
      const m = r();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Jr));
    };
  }, [r, s, o]), Oe(function() {
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
  Hi(() => {
    const t = Ki(e);
    kn(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot change the amount of sensor hooks after mounting") : b(!1));
    });
  });
}
const fw = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function md(e, t) {
  if (t == null)
    return !1;
  if (fw.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : md(e, t.parentElement);
}
function pw(e, t) {
  const n = t.target;
  return Fn(n) ? md(e, n) : !1;
}
var hw = (e) => ke(e.getBoundingClientRect()).center;
function mw(e) {
  return e instanceof ld(e).Element;
}
const gw = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function gd(e, t) {
  return e == null ? null : e[gw](t) ? e : gd(e.parentElement, t);
}
function vw(e, t) {
  return e.closest ? e.closest(t) : gd(e, t);
}
function yw(e) {
  return `[${jt.contextId}="${e}"]`;
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
  return n ? n.getAttribute(jt.draggableId) : null;
}
function Ew(e, t) {
  const n = `[${Oo.contextId}="${e}"]`, o = cd(document, n).find((i) => i.getAttribute(Oo.id) === t);
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
function vd({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !od(t.getState(), r)) : (process.env.NODE_ENV !== "production" && ne(`Unable to find draggable with id: ${r}`), !1);
}
function Dw({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!vd({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = Ew(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && ne(`Unable to find draggable element with id: ${o}`), null;
  if (s && !c.options.canDragInteractiveElements && pw(l, s))
    return null;
  const d = e.claim(i || ct);
  let u = "PRE_DRAG";
  function f() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(d);
  }
  function m(y, D) {
    Hn({
      expected: y,
      phase: u,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(D());
  }
  const g = m.bind(null, "DRAGGING");
  function h(y) {
    function D() {
      e.release(), u = "COMPLETED";
    }
    u !== "PRE_DRAG" && (D(), process.env.NODE_ENV !== "production" ? b(!1, `Cannot lift in phase ${u}`) : b()), n.dispatch(Qb(y.liftActionArgs)), u = "DRAGGING";
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
      D(), n.dispatch(Xu({
        reason: S
      }));
    }
    return {
      isActive: () => Hn({
        expected: "DRAGGING",
        phase: u,
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
      g(() => qu({
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
      phase: u,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Hn({
      expected: "PRE_DRAG",
      phase: u,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: v,
    snapLift: x,
    abort: E
  };
}
const Sw = [tw, iw, uw];
function Cw({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? Sw : [], ...r || []], s = Se(() => kE())[0], a = V(function(h, v) {
    In(h) && !In(v) && s.tryAbandon();
  }, [s]);
  Oe(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(h, x), h = x;
    });
  }, [s, t, a]), Oe(() => s.tryAbandon, [s.tryAbandon]);
  const c = V((g) => vd({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: g
  }), [s, n, t]), l = V((g, h, v) => Dw({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: v && v.sourceEvent ? v.sourceEvent : null
  }), [e, s, n, t]), d = V((g) => xw(e, g), [e]), u = V((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = V(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Bi()));
  }, [s, t]), p = V(() => s.isClaimed(), [s]), m = K(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: d,
    findOptionsForDraggable: u,
    tryReleaseLock: f,
    isLockClaimed: p
  }), [c, l, d, u, f, p]);
  dw(i);
  for (let g = 0; g < i.length; g++)
    i[g](m);
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
function Qt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find store from lazy ref") : b()), e.current;
}
function Aw(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = j(null);
  FE();
  const a = Ki(e), c = V(() => Pw(a.current), [a]), l = V(() => Nw(a.current), [a]), d = AE(t), u = VE({
    contextId: t,
    text: i
  }), f = EE(t, o), p = V((O) => {
    Qt(s).dispatch(O);
  }, []), m = K(() => Pa({
    publishWhileDragging: tx,
    updateDroppableScroll: rx,
    updateDroppableIsEnabled: ox,
    updateDroppableIsCombineEnabled: ix,
    collectionStarting: nx
  }, p), [p]), g = SE(), h = K(() => Jx(g, m), [g, m]), v = K(() => mE({
    scrollWindow: Qx,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Pa({
      move: qu
    }, p)
  }), [h.scrollDroppable, p, l]), x = wE(t), E = K(() => Yx({
    announce: d,
    autoScroller: v,
    dimensionMarshal: h,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: f
  }), [d, v, h, x, c, f]);
  process.env.NODE_ENV !== "production" && s.current && s.current !== E && process.env.NODE_ENV !== "production" && ne("unexpected store change"), s.current = E;
  const w = V(() => {
    const O = Qt(s);
    O.getState().phase !== "IDLE" && O.dispatch(Bi());
  }, []), y = V(() => {
    const O = Qt(s).getState();
    return O.phase === "DROP_ANIMATING" ? !0 : O.phase === "IDLE" ? !1 : O.isDragging;
  }, []), D = K(() => ({
    isDragging: y,
    tryAbort: w
  }), [y, w]);
  n(D);
  const C = V((O) => od(Qt(s).getState(), O), []), S = V(() => bt(Qt(s).getState()), []), L = K(() => ({
    marshal: h,
    focus: x,
    contextId: t,
    canLift: C,
    isMovementAllowed: S,
    dragHandleUsageInstructionsId: u,
    registry: g
  }), [t, h, u, x, C, S, g]);
  return Cw({
    contextId: t,
    store: E,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), fe(() => w, [w]), H.createElement(Dr.Provider, {
    value: L
  }, H.createElement(Cy, {
    context: Wi,
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
}, Mw = (e, t) => t ? ln.drop(t.duration) : e ? ln.snap : ln.fluid, Lw = (e, t) => {
  if (e)
    return t ? Nn.opacity.drop : Nn.opacity.combining;
}, _w = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Bw(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = _w(e), c = !!i, l = c ? To.drop(r, s) : To.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: Mw(a, i),
    transform: l,
    opacity: Lw(s, c),
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
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Su(o, r), s = cr(i, n), a = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
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
function jw(e) {
  const t = zi("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, c = K(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), l = V((p) => {
    const m = o();
    return m || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get dimension when no ref is set") : b()), kw(n, m, p);
  }, [n, o]), d = K(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), u = j(d), f = j(!0);
  Oe(() => (r.draggable.register(u.current), () => r.draggable.unregister(u.current)), [r.draggable]), Oe(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = u.current;
    u.current = d, r.draggable.update(d, p);
  }, [d, r.draggable]);
}
var qi = H.createContext(null);
function yd(e) {
  e && Fn(e) || (process.env.NODE_ENV !== "production" ? b(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : b());
}
function Gw(e, t, n) {
  kn(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? b(!1, "Draggable requires a draggableId") : b(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : b(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? b(!1, `${r(o)} requires an integer index prop`) : b(!1)), e.mapped.type !== "DRAGGING" && (yd(n()), e.isEnabled && (ud(t, o) || (process.env.NODE_ENV !== "production" ? b(!1, `${r(o)} Unable to find drag handle`) : b(!1))));
  });
}
function Uw(e) {
  Hi(() => {
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
    dragHandleUsageInstructionsId: i,
    registry: s
  } = dr(Dr), {
    type: a,
    droppableId: c
  } = dr(qi), l = K(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: c
  }), [e.draggableId, e.index, a, c]), {
    children: d,
    draggableId: u,
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
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [l, s, r, m, p, f]);
    jw(D);
  }
  const x = K(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": u,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Ww
  } : null, [o, i, u, f]), E = V((D) => {
    h.type === "DRAGGING" && h.dropping && D.propertyName === "transform" && (H.version.startsWith("16") || H.version.startsWith("17") ? v() : wc(v));
  }, [v, h]), w = K(() => {
    const D = Fw(h), C = h.type === "DRAGGING" && h.dropping ? E : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": u,
        style: D,
        onTransitionEnd: C
      },
      dragHandleProps: x
    };
  }, [o, x, u, h, E, n]), y = K(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return H.createElement(H.Fragment, null, d(w, h.snapshot, y));
};
var Hw = zw, bd = (e, t) => e === t, xd = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Kw = (e) => e.combine ? e.combine.draggableId : null, Yw = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function qw() {
  const e = me((o, i) => ({
    x: o,
    y: i
  })), t = me((o, i, s = null, a = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: s,
    combineWith: a,
    combineTargetFor: null
  })), n = me((o, i, s, a, c = null, l = null, d = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: l,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: d,
      snapshot: t(i, a, c, l, null)
    }
  }));
  return (o, i) => {
    if (In(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], c = Ie(o.impact), l = Yw(o.impact), d = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, c, l, d);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, c = o.dimensions.draggables[i.draggableId], l = s.result, d = l.mode, u = xd(l), f = Kw(l), m = {
        duration: o.dropDuration,
        curve: Fi.drop,
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
          draggingOver: u,
          combineWith: f,
          mode: d,
          forceShouldAnimate: null,
          snapshot: t(d, a, u, f, m)
        }
      };
    }
    return null;
  };
}
function Ed(e = null) {
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
    snapshot: Ed(null)
  }
};
function Zw() {
  const e = me((s, a) => ({
    x: s,
    y: a
  })), t = me(Ed), n = me((s, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(ge, s, !0) : null, o = (s, a, c, l) => {
    const d = c.displaced.visible[s], u = !!(l.inVirtualList && l.effected[s]), f = xr(c), p = f && f.draggableId === s ? a : null;
    if (!d) {
      if (!u)
        return r(p);
      if (c.displaced.invisible[s])
        return null;
      const h = Ht(l.displacedBy.point), v = e(h.x, h.y);
      return n(v, p, !0);
    }
    if (u)
      return r(p);
    const m = c.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, d.shouldAnimate);
  };
  return (s, a) => {
    if (In(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Jw = () => {
  const e = qw(), t = Zw();
  return (r, o) => e(r, o) || t(r, o) || Xw;
}, Qw = {
  dropAnimationFinished: Zu
}, e0 = wu(Jw, Qw, null, {
  context: Wi,
  areStatePropsEqual: bd
})(Hw);
var t0 = e0;
function wd(e) {
  return dr(qi).isUsingCloneFor === e.draggableId && !e.isClone ? null : H.createElement(t0, e);
}
function n0(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return H.createElement(wd, at({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Xi = (e) => (t) => e === t, r0 = Xi("scroll"), o0 = Xi("auto"), i0 = Xi("visible"), hc = (e, t) => t(e.overflowX) || t(e.overflowY), s0 = (e, t) => t(e.overflowX) && t(e.overflowY), Dd = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return hc(n, r0) || hc(n, o0);
}, a0 = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Tn(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, b()), !Dd(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return s0(r, i0) || process.env.NODE_ENV !== "production" && ne(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Zi = (e) => e == null ? null : e === document.body ? a0() ? e : null : e === document.documentElement ? null : Dd(e) ? e : Zi(e.parentElement);
var c0 = (e) => {
  !e || !Zi(e.parentElement) || process.env.NODE_ENV !== "production" && ne(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ro = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Sd = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Sd(e.parentElement) : !1;
var l0 = (e) => {
  const t = Zi(e), n = Sd(e);
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
  client: i,
  page: s,
  closest: a
}) => {
  const c = (() => {
    if (!a)
      return null;
    const {
      scrollSize: f,
      client: p
    } = a, m = td({
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
  })(), l = o === "vertical" ? Ri : Mu, d = Ft({
    page: s,
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
    client: i,
    page: s,
    frame: c,
    subject: d
  };
};
const d0 = (e, t) => {
  const n = Cu(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, c = Ai({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return Ti({
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
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = d0(e, c), d = cr(l, r), u = (() => {
    if (!c)
      return null;
    const p = Cu(c), m = {
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
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: d,
    closest: u
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
  const t = j(null), n = dr(Dr), r = zi("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Ki(e), a = K(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = j(a), l = K(() => me((w, y) => {
    t.current || (process.env.NODE_ENV !== "production" ? b(!1, "Can only update scroll when dragging") : b());
    const D = {
      x: w,
      y
    };
    i.updateDroppableScroll(a.id, D);
  }), [a.id, i]), d = V(() => {
    const w = t.current;
    return !w || !w.env.closestScrollable ? ge : Ro(w.env.closestScrollable);
  }, []), u = V(() => {
    const w = d();
    l(w.x, w.y);
  }, [d, l]), f = K(() => wn(u), [u]), p = V(() => {
    const w = t.current, y = Kn(w);
    if (w && y || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find scroll options while scrolling") : b()), w.scrollOptions.shouldPublishImmediately) {
      u();
      return;
    }
    f();
  }, [f, u]), m = V((w, y) => {
    t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect a droppable while a drag is occurring") : b());
    const D = s.current, C = D.getDroppableRef();
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
  }, [n.contextId, a, p, s]), g = V(() => {
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
  }), [x, a, h, E, i, o.droppable]), Oe(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Oe(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
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
    transition: n !== "none" ? ln.placeholder : null
  };
}, y0 = (e) => {
  const t = j(null), n = V(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, c] = Se(e.animate === "open");
  fe(() => a ? r !== "open" ? (n(), c(!1), Qr) : t.current ? Qr : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Qr, [r, a, n]);
  const l = V((u) => {
    u.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), d = v0({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return H.createElement(e.placeholder.tagName, {
    style: d,
    "data-rfd-placeholder-context-id": s,
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
  yd(t());
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
  } = t, o = j(null), i = j(null), {
    children: s,
    droppableId: a,
    type: c,
    mode: l,
    direction: d,
    ignoreContainerClipping: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    snapshot: m,
    useClone: g,
    updateViewportMaxScroll: h,
    getContainerForClone: v
  } = e, x = V(() => o.current, []), E = V((I = null) => {
    o.current = I;
  }, []), w = V(() => i.current, []), y = V((I = null) => {
    i.current = I;
  }, []);
  D0({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: w
  });
  const D = V(() => {
    r() && h({
      maxScroll: rd()
    });
  }, [r, h]);
  m0({
    droppableId: a,
    type: c,
    mode: l,
    direction: d,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: u,
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
    } = g, re = H.createElement(wd, {
      draggableId: I.draggableId,
      index: I.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (se, _) => Q(se, _, I));
    return Od.createPortal(re, v());
  }
  return H.createElement(qi.Provider, {
    value: O
  }, s(S, m), F());
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
}, Cd = (e) => {
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
  }, n = me((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = me((i, s, a, c, l, d) => {
    const u = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const m = d ? {
        render: d,
        dragging: n(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? u : null,
        draggingFromThisWith: u,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: m
      };
    }
    if (!s)
      return t;
    if (!c)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: u,
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
  return (i, s) => {
    const a = Cd(s), c = a.droppableId, l = a.type, d = !a.isDropDisabled, u = a.renderClone;
    if (In(i)) {
      const f = i.critical;
      if (!no(l, f))
        return t;
      const p = yc(f, i.dimensions), m = Ie(i.impact) === c;
      return r(c, d, m, m, p, u);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!no(l, f.critical))
        return t;
      const p = yc(f.critical, i.dimensions);
      return r(c, d, xd(f.result) === c, Ie(f.impact) === c, p, u);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!no(l, f.critical))
        return t;
      const p = Ie(f.impact) === c, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === c;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, T0 = {
  updateViewportMaxScroll: ax
}, I0 = wu(A0, T0, (e, t, n) => ({
  ...Cd(n),
  ...e,
  ...t
}), {
  context: Wi,
  areStatePropsEqual: bd
})(P0);
var O0 = I0;
const R0 = ({
  data: e,
  headerData: t,
  setSort: n,
  sort: r,
  isDragDisabled: o = !0,
  isLoading: i,
  onRowClick: s,
  itemClickKey: a,
  haveLinks: c,
  className: l
}) => {
  const [d, u] = Se(null), [f, p] = Se(e);
  fe(() => {
    p(e);
  }, [e]);
  const m = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", g = (v) => {
    s == null || s(v), u(v);
  }, h = (v) => {
    if (!v.destination || !(f != null && f.length)) return;
    const x = v.source.index, E = v.destination.index, w = [...f], [y] = w.splice(x, 1);
    w.splice(E, 0, y), p(w);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ he("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ P("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ P("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ P(yi, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ P(du, { className: l, children: /* @__PURE__ */ P("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ P("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ P(Vw, { onDragEnd: h, children: /* @__PURE__ */ P(O0, { droppableId: "dropArray", direction: "vertical", children: (v) => /* @__PURE__ */ he("table", { className: "w-full", children: [
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
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${d === f[E] && m}`,
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
    const i = new IntersectionObserver((s) => {
      s.forEach((a) => {
        var c;
        const l = a.isIntersecting && o.some((d) => a.intersectionRatio >= d);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = l), (c = r.get(a.target)) == null || c.forEach((d) => {
          d(l, a);
        });
      });
    }, e);
    o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
      id: t,
      observer: i,
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
  const { id: o, observer: i, elements: s } = B0(n), a = s.get(e) || [];
  return s.has(e) || s.set(e, a), a.push(t), i.observe(e), function() {
    a.splice(a.indexOf(t), 1), a.length === 0 && (s.delete(e), i.unobserve(e)), s.size === 0 && (i.disconnect(), Vo.delete(o));
  };
}
function F0({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: o,
  triggerOnce: i,
  skip: s,
  initialInView: a,
  fallbackInView: c,
  onChange: l
} = {}) {
  var d;
  const [u, f] = G.useState(null), p = G.useRef(l), [m, g] = G.useState({
    inView: !!a,
    entry: void 0
  });
  p.current = l, G.useEffect(
    () => {
      if (s || !u) return;
      let E;
      return E = $0(
        u,
        (w, y) => {
          g({
            inView: w,
            entry: y
          }), p.current && p.current(w, y), y.isIntersecting && i && E && (E(), E = void 0);
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
      u,
      o,
      r,
      i,
      s,
      n,
      c,
      t
    ]
  );
  const h = (d = m.entry) == null ? void 0 : d.target, v = G.useRef(void 0);
  !u && h && !i && !s && v.current !== h && (v.current = h, g({
    inView: !!a,
    entry: void 0
  }));
  const x = [f, m.inView, m.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const k0 = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [n, r] = Se(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    r(i > 100);
  };
  return fe(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), n ? /* @__PURE__ */ P(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ P(
        bn,
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
  emptyClassName: i,
  isScrollTopButton: s = !0
}) => {
  const {
    hasNextPage: a,
    fetchNextPage: c,
    isFetchingNextPage: l,
    isLoading: d,
    data: u,
    isPending: f
  } = e, p = u == null ? void 0 : u.pages.flatMap((h) => h), { ref: m, inView: g } = F0();
  return fe(() => {
    g && a && c();
  }, [c, g, a]), /* @__PURE__ */ he(_t, { children: [
    s && /* @__PURE__ */ P(j0, { className: r }),
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
        className: Di(
          "h-4 flex mt-8 flex-row items-center justify-center",
          i
        ),
        ref: m,
        children: (l || d || f) && /* @__PURE__ */ P(yi, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && o
      }
    )
  ] });
}, oD = G0, iD = () => {
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
  Y0 as Button,
  q0 as Checkbox,
  X0 as Chips,
  bi as ErrorText,
  bn as Icon,
  oD as InfiniteScroll,
  Z0 as Input,
  J0 as List,
  yi as Loader,
  Q0 as MultiSelectSearch,
  j0 as ScrollTopButton,
  eD as Search,
  tD as Select,
  nD as Table,
  rD as Textarea,
  du as Wrapper,
  fu as useDebounce,
  iD as useScroll
};
