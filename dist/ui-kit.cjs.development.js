'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".button-module_button__umKM2{align-items:center;border-color:#0000;border-radius:30px;border-width:1px;display:flex;font-size:1rem;font-weight:500;height:-moz-fit-content;height:fit-content;justify-content:center;line-height:1.5rem;padding:14px 6px;text-transform:uppercase;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.button-module_button__umKM2:active{opacity:.6}.button-module_button__umKM2:disabled{cursor:not-allowed;opacity:.6}@media (min-width:1023px){.button-module_button__umKM2{border-radius:15px;font-size:1.125rem;line-height:1.75rem}}.button-module_primary_button__lnf3-{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(45 219 146/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.button-module_secondary_button__wuw-f{--tw-bg-opacity:0.1;--tw-text-opacity:1}.button-module_secondary_button__wuw-f,.button-module_small_secondary_button__QyuUc{background-color:rgb(45 219 146/var(--tw-bg-opacity));color:rgb(45 219 146/var(--tw-text-opacity))}.button-module_small_secondary_button__QyuUc{--tw-bg-opacity:0.2;--tw-text-opacity:1}.button-module_small_primary_button__gbxzl,.button-module_small_secondary_button__QyuUc{font-size:.875rem!important;line-height:1.25rem!important;padding-bottom:6px!important;padding-top:6px!important;text-transform:none!important}.button-module_small_primary_button__gbxzl{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(45 219 146/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.button-module_small_danger_button__7h7OG{font-size:.875rem!important;line-height:1.25rem!important;padding-bottom:6px!important;padding-top:6px!important;text-transform:none!important}.button-module_danger_button__ZrtmM,.button-module_small_danger_button__7h7OG{--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:rgb(255 66 66/var(--tw-bg-opacity));color:rgb(255 66 66/var(--tw-text-opacity))}.button-module_small_yellow_button__fltIN{--tw-bg-opacity:0.1;background-color:rgb(255 202 124/var(--tw-bg-opacity));color:rgb(255 202 124/var(--tw-text-opacity));padding-bottom:6px!important;padding-top:6px!important}.button-module_link_button__0ir-9,.button-module_small_yellow_button__fltIN{--tw-text-opacity:1;font-size:.875rem!important;line-height:1.25rem!important;text-transform:none!important}.button-module_link_button__0ir-9{color:rgb(45 219 146/var(--tw-text-opacity));padding:0 .25rem!important}.button-module_link_button__0ir-9,.button-module_tab_button__mExSM{width:-moz-fit-content!important;width:fit-content!important}.button-module_tab_button__mExSM{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(45 219 146/var(--tw-bg-opacity));border-radius:30px;color:rgb(255 255 255/var(--tw-text-opacity));font-size:.875rem;font-weight:400!important;line-height:1.25rem;padding:.5rem 1.25rem!important;text-transform:none!important}@media (min-width:1023px){.button-module_tab_button__mExSM{border-radius:15px!important;font-size:1rem!important;line-height:1.5rem!important}}";
var styles = {"button":"button-module_button__umKM2","primary_button":"button-module_primary_button__lnf3-","secondary_button":"button-module_secondary_button__wuw-f","small_secondary_button":"button-module_small_secondary_button__QyuUc","small_primary_button":"button-module_small_primary_button__gbxzl","small_danger_button":"button-module_small_danger_button__7h7OG","danger_button":"button-module_danger_button__ZrtmM","small_yellow_button":"button-module_small_yellow_button__fltIN","link_button":"button-module_link_button__0ir-9","tab_button":"button-module_tab_button__mExSM"};
styleInject(css_248z,{"insertAt":"top"});

const Icon = ({
  name,
  className
}) => {
  return React__default.createElement("svg", {
    className: `transition-all duration-300 text-dark-gray ${className}`
  }, React__default.createElement("use", {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${name}`
  }));
};

var css_248z$1 = ".loader-module_loader__-0lqS{animation:loader-module_rotation__YIDbH 1s linear infinite;border:5px solid;border-color:#fff #fff #2ddb92;border-radius:50%;box-sizing:border-box;display:inline-block;height:22px;width:22px}@keyframes loader-module_rotation__YIDbH{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";
var styles$1 = {"loader":"loader-module_loader__-0lqS","rotation":"loader-module_rotation__YIDbH"};
styleInject(css_248z$1,{"insertAt":"top"});

const Loader = ({
  style,
  text
}) => {
  return React__default.createElement("div", {
    className: "flex flex-row items-center justify-center gap-3"
  }, React__default.createElement("span", {
    className: styles$1.loader,
    style: style
  }), text && React__default.createElement("span", {
    className: "text-base"
  }, text));
};

const Button = ({
  children,
  onClick,
  className,
  loadType,
  isLoading,
  variant,
  icon,
  disabled
}) => {
  const [loadMessage, setLoadMessage] = React.useState("");
  const handleLoadMessage = () => {
    if (isLoading && loadType === "1C") {
      setLoadMessage("Отправляем запрос в 1С");
      setTimeout(() => loadType === "1C" ? setLoadMessage("1С обрабатывает документы") : setLoadMessage(""), 4000);
    }
  };
  React.useEffect(() => {
    loadType === "1C" && handleLoadMessage();
  }, [isLoading]);
  console.log(styles);
  const buttonClasses = [styles.button, className, variant === "primary" && "text-white bg-primary", variant === "secondary" && styles.secondary_button, variant === "small-secondary" && styles.small_secondary_button, variant === "small-primary" && styles.small_primary_button, variant === "small-danger" && styles.small_danger_button, variant === "danger" && styles.danger_button, variant === "small-yellow" && styles.small_yellow_button, variant === "link" && styles.link_button, variant === "tab" && styles.tab_button].filter(Boolean).join(" ");
  return React__default.createElement("button", {
    disabled: disabled || isLoading,
    onClick: onClick,
    className: buttonClasses
  }, icon && !isLoading && React__default.createElement(Icon, {
    name: icon,
    className: variant.includes("small") ? "w-4 h-4 child:w-4 child:h-4 mr-1" : "w-5 h-5 child:w-5 child:h-5 mr-2"
  }), isLoading ? React__default.createElement(Loader, {
    text: loadType === "1C" ? loadMessage : undefined
  }) : children);
};

const ErrorText = ({
  error
}) => {
  return error && Object.keys(error).length ? React__default.createElement("span", {
    className: "block text-danger-red text-xs md:text-sm text-center mt-1"
  }) : null;
};

const Checkbox = ({
  onChange,
  title,
  secondaryTitle,
  labelClassName,
  className,
  titleClassName,
  error,
  checked,
  disabled
}) => {
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("label", {
    onClick: e => e.stopPropagation(),
    className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${labelClassName}`
  }, React__default.createElement("span", {
    className: `text-sm text-dark-gray font-normal ${titleClassName}`
  }, title), secondaryTitle && React__default.createElement("span", {
    className: "text-center text-sm text-dark-gray font-normal"
  }, secondaryTitle), React__default.createElement("input", {
    disabled: disabled,
    checked: checked,
    onChange: e => onChange(e.target.checked),
    type: "checkbox",
    className: className
  })), error && React__default.createElement(ErrorText, {
    error: error
  }));
};

var css_248z$2 = "/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tailwind_relative__EyRic{position:relative}.tailwind_mr-1__N6fQ3{margin-right:.25rem}.tailwind_mr-2__UPZhJ{margin-right:.5rem}.tailwind_mt-1__wm-uW{margin-top:.25rem}.tailwind_block__sw3V1{display:block}.tailwind_flex__KmQz5{display:flex}.tailwind_h-4__Re2Y7{height:1rem}.tailwind_h-5__F8ssH{height:1.25rem}.tailwind_h---120px--__-LGNY{height:120px}.tailwind_h-fit__TSjEn{height:-moz-fit-content;height:fit-content}.tailwind_h-full__6j-0k{height:100%}.tailwind_w-4__hxsu-{width:1rem}.tailwind_w-5__YrUD6{width:1.25rem}.tailwind_w-fit__KIOk6{width:-moz-fit-content;width:fit-content}.tailwind_w-full__lwCaN{width:100%}.tailwind_min-w---190px--__JK94J{min-width:190px}.tailwind_cursor-pointer__1cpE5{cursor:pointer}.tailwind_resize-none__l89na{resize:none}.tailwind_appearance-none__4pR3u{appearance:none}.tailwind_flex-row__tCfVE{flex-direction:row}.tailwind_flex-wrap__cGvk-{flex-wrap:wrap}.tailwind_items-center__HpCuZ{align-items:center}.tailwind_justify-center__ny35v{justify-content:center}.tailwind_justify-between__-ULRp{justify-content:space-between}.tailwind_gap-3__OnlbO{gap:.75rem}.tailwind_gap---10px--__4XhSs{gap:10px}.tailwind_gap---6px--__2MjVj{gap:6px}.tailwind_rounded---15px--__g9B8Y{border-radius:15px}.tailwind_rounded---30px--__qWFoD{border-radius:30px}.tailwind_border---1px--__ON5af{border-width:1px}.tailwind_--border-danger-red__P0tm-{--tw-border-opacity:1!important;border-color:rgb(255 66 66/var(--tw-border-opacity))!important}.tailwind_border-light-gray__jqDfh{--tw-border-opacity:1;border-color:rgb(245 245 245/var(--tw-border-opacity))}.tailwind_border-white__TwkJ5{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.tailwind_bg-dark-gray__B8Q6J{--tw-bg-opacity:1;background-color:rgb(153 153 153/var(--tw-bg-opacity))}.tailwind_bg-light-gray__4pJkc{--tw-bg-opacity:1;background-color:rgb(245 245 245/var(--tw-bg-opacity))}.tailwind_bg-main-green__LybeT,.tailwind_bg-primary__97hqU{--tw-bg-opacity:1;background-color:rgb(45 219 146/var(--tw-bg-opacity))}.tailwind_bg-white__buDIo{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.tailwind_object-contain__pAbQA{object-fit:contain}.tailwind_p---10px--__dCp5H{padding:10px}.tailwind_px---10px--__gl0M2{padding-left:10px;padding-right:10px}.tailwind_px---15px--__vEozp{padding-left:15px;padding-right:15px}.tailwind_py---5px--__p5K-J{padding-bottom:5px;padding-top:5px}.tailwind_py---6px--__T1v9h{padding-bottom:6px;padding-top:6px}.tailwind_--pr-9__yBt8V{padding-right:2.25rem!important}.tailwind_pr---15px--__vDACN{padding-right:15px}.tailwind_text-center__u3Yfq{text-align:center}.tailwind_text-base__dikx5{font-size:1rem;line-height:1.5rem}.tailwind_text-sm__pJwgA{font-size:.875rem;line-height:1.25rem}.tailwind_text-xs__sEyEd{font-size:.75rem;line-height:1rem}.tailwind_font-normal__KoxiE{font-weight:400}.tailwind_text-black__-F-q4{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.tailwind_text-danger-red__FcS-x{--tw-text-opacity:1;color:rgb(255 66 66/var(--tw-text-opacity))}.tailwind_text-dark-gray__eWkaX{--tw-text-opacity:1;color:rgb(153 153 153/var(--tw-text-opacity))}.tailwind_text-white__5uTlj{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.tailwind_filter__THRUa{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.tailwind_transition-all__HOHI8{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.tailwind_duration-300__BKhiW{transition-duration:.3s}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.tailwind_placeholder--text-dark-gray__di3Bt::placeholder{--tw-text-opacity:1;color:rgb(153 153 153/var(--tw-text-opacity))}.tailwind_after--absolute__5FV40:after{content:var(--tw-content);position:absolute}.tailwind_after--bottom-0__1VIG3:after{bottom:0;content:var(--tw-content)}.tailwind_after--right-4__7YiK-:after{content:var(--tw-content);right:1rem}.tailwind_after--top-0__U2nxY:after{content:var(--tw-content);top:0}.tailwind_after--my-auto__NUE9u:after{content:var(--tw-content);margin-bottom:auto;margin-top:auto}.tailwind_after--h-2__sTuws:after{content:var(--tw-content);height:.5rem}.tailwind_after--w-2__XE90s:after{content:var(--tw-content);width:.5rem}.tailwind_after--rotate---134deg--__rEZCl:after{--tw-rotate:134deg;content:var(--tw-content);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tailwind_after--border-r-2__p-pHF:after{border-right-width:2px;content:var(--tw-content)}.tailwind_after--border-t-2__1ctRF:after{border-top-width:2px;content:var(--tw-content)}.tailwind_after--border-dark-gray__fscsu:after{--tw-border-opacity:1;border-color:rgb(153 153 153/var(--tw-border-opacity));content:var(--tw-content)}.tailwind_after--transition-all__qfU0Y:after{content:var(--tw-content);transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.tailwind_after--duration-300__5Wdq-:after{content:var(--tw-content);transition-duration:.3s}.tailwind_child--h-4__jdhcg>*{height:1rem}.tailwind_child--h-5__KK4Cx>*{height:1.25rem}.tailwind_child--w-4__DZIsr>*{width:1rem}.tailwind_child--w-5__LMwjW>*{width:1.25rem}@media (min-width:1023px){.tailwind_md--rounded---15px--__9BQQ8{border-radius:15px}.tailwind_md--border-light-gray__kXbsB{--tw-border-opacity:1;border-color:rgb(245 245 245/var(--tw-border-opacity))}.tailwind_md--border-white__oA-wX{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.tailwind_md--bg-white__-IWEs{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.tailwind_md--p---10px--__AUGW9{padding:10px}.tailwind_md--py-2__mc83C{padding-bottom:.5rem;padding-top:.5rem}.tailwind_md--py---7px--__J59ix{padding-bottom:7px;padding-top:7px}.tailwind_md--pr---10px--__bLLUj{padding-right:10px}.tailwind_md--text-base__uj6e-{font-size:1rem;line-height:1.5rem}.tailwind_md--text-sm__eiB8R{font-size:.875rem;line-height:1.25rem}}";
styleInject(css_248z$2,{"insertAt":"top"});

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.ErrorText = ErrorText;
exports.Icon = Icon;
exports.Loader = Loader;
//# sourceMappingURL=ui-kit.cjs.development.js.map
