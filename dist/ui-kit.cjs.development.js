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

var css_248z = ".button{align-items:center;border-color:#0000;border-radius:30px;border-width:1px;display:flex;font-size:1rem;font-weight:500;height:-moz-fit-content;height:fit-content;justify-content:center;line-height:1.5rem;padding:14px 6px;text-transform:uppercase;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.button:active,.button:disabled{opacity:.6}.button:disabled{cursor:not-allowed}@media (min-width:1023px){.button{border-radius:15px;font-size:1.125rem;line-height:1.75rem}}.primary_button{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(45 219 146/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.secondary_button{--tw-bg-opacity:0.1;--tw-text-opacity:1}.secondary_button,.small_secondary_button{background-color:rgb(45 219 146/var(--tw-bg-opacity));color:rgb(45 219 146/var(--tw-text-opacity))}.small_secondary_button{--tw-bg-opacity:0.2;--tw-text-opacity:1}.small_primary_button,.small_secondary_button{font-size:.875rem!important;line-height:1.25rem!important;padding-bottom:6px!important;padding-top:6px!important;text-transform:none!important}.small_primary_button{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(45 219 146/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.small_danger_button{font-size:.875rem!important;line-height:1.25rem!important;padding-bottom:6px!important;padding-top:6px!important;text-transform:none!important}.danger_button,.small_danger_button{--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:rgb(255 66 66/var(--tw-bg-opacity));color:rgb(255 66 66/var(--tw-text-opacity))}.small_yellow_button{--tw-bg-opacity:0.1;background-color:rgb(255 202 124/var(--tw-bg-opacity));color:rgb(255 202 124/var(--tw-text-opacity));padding-bottom:6px!important;padding-top:6px!important}.link_button,.small_yellow_button{--tw-text-opacity:1;font-size:.875rem!important;line-height:1.25rem!important;text-transform:none!important}.link_button{color:rgb(45 219 146/var(--tw-text-opacity));padding:0 .25rem!important}.link_button,.tab_button{width:-moz-fit-content!important;width:fit-content!important}.tab_button{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(45 219 146/var(--tw-bg-opacity));border-radius:30px;color:rgb(255 255 255/var(--tw-text-opacity));font-size:.875rem;font-weight:400!important;line-height:1.25rem;padding:.5rem 1.25rem!important;text-transform:none!important}@media (min-width:1023px){.tab_button{border-radius:15px!important;font-size:1rem!important;line-height:1.5rem!important}}";
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
var styles = {"loader":"loader-module_loader__-0lqS","rotation":"loader-module_rotation__YIDbH"};
styleInject(css_248z$1,{"insertAt":"top"});

const Loader = ({
  style,
  text
}) => {
  return React__default.createElement("div", {
    className: "flex flex-row items-center justify-center gap-3"
  }, React__default.createElement("span", {
    className: styles.loader,
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
  console.log(css_248z);
  const buttonClasses = [css_248z.button, className, variant === "primary" && css_248z.primary_button, variant === "secondary" && css_248z.secondary_button, variant === "small-secondary" && css_248z.small_secondary_button, variant === "small-primary" && css_248z.small_primary_button, variant === "small-danger" && css_248z.small_danger_button, variant === "danger" && css_248z.danger_button, variant === "small-yellow" && css_248z.small_yellow_button, variant === "link" && css_248z.link_button, variant === "tab" && css_248z.tab_button].filter(Boolean).join(" ");
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

var css_248z$2 = "/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.relative{position:relative}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.block{display:block}.flex{display:flex}.h-4{height:1rem}.h-5{height:1.25rem}.h-\\[120px\\]{height:120px}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.w-4{width:1rem}.w-5{width:1.25rem}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.min-w-\\[190px\\]{min-width:190px}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.appearance-none{appearance:none}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-3{gap:.75rem}.gap-\\[10px\\]{gap:10px}.gap-\\[6px\\]{gap:6px}.rounded-\\[15px\\]{border-radius:15px}.rounded-\\[30px\\]{border-radius:30px}.border-\\[1px\\]{border-width:1px}.\\!border-danger-red{--tw-border-opacity:1!important;border-color:rgb(255 66 66/var(--tw-border-opacity))!important}.border-light-gray{--tw-border-opacity:1;border-color:rgb(245 245 245/var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.bg-dark-gray{--tw-bg-opacity:1;background-color:rgb(153 153 153/var(--tw-bg-opacity))}.bg-light-gray{--tw-bg-opacity:1;background-color:rgb(245 245 245/var(--tw-bg-opacity))}.bg-main-green{--tw-bg-opacity:1;background-color:rgb(45 219 146/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.object-contain{object-fit:contain}.p-\\[10px\\]{padding:10px}.px-\\[10px\\]{padding-left:10px;padding-right:10px}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[5px\\]{padding-bottom:5px;padding-top:5px}.py-\\[6px\\]{padding-bottom:6px;padding-top:6px}.\\!pr-9{padding-right:2.25rem!important}.pr-\\[15px\\]{padding-right:15px}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-normal{font-weight:400}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-danger-red{--tw-text-opacity:1;color:rgb(255 66 66/var(--tw-text-opacity))}.text-dark-gray{--tw-text-opacity:1;color:rgb(153 153 153/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.placeholder\\:text-dark-gray::placeholder{--tw-text-opacity:1;color:rgb(153 153 153/var(--tw-text-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:bottom-0:after{bottom:0;content:var(--tw-content)}.after\\:right-4:after{content:var(--tw-content);right:1rem}.after\\:top-0:after{content:var(--tw-content);top:0}.after\\:my-auto:after{content:var(--tw-content);margin-bottom:auto;margin-top:auto}.after\\:h-2:after{content:var(--tw-content);height:.5rem}.after\\:w-2:after{content:var(--tw-content);width:.5rem}.after\\:rotate-\\[134deg\\]:after{--tw-rotate:134deg;content:var(--tw-content);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.after\\:border-r-2:after{border-right-width:2px;content:var(--tw-content)}.after\\:border-t-2:after{border-top-width:2px;content:var(--tw-content)}.after\\:border-dark-gray:after{--tw-border-opacity:1;border-color:rgb(153 153 153/var(--tw-border-opacity));content:var(--tw-content)}.after\\:transition-all:after{content:var(--tw-content);transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.after\\:duration-300:after{content:var(--tw-content);transition-duration:.3s}.child\\:h-4>*{height:1rem}.child\\:h-5>*{height:1.25rem}.child\\:w-4>*{width:1rem}.child\\:w-5>*{width:1.25rem}@media (min-width:1023px){.md\\:rounded-\\[15px\\]{border-radius:15px}.md\\:border-light-gray{--tw-border-opacity:1;border-color:rgb(245 245 245/var(--tw-border-opacity))}.md\\:border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.md\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.md\\:p-\\[10px\\]{padding:10px}.md\\:py-2{padding-bottom:.5rem;padding-top:.5rem}.md\\:py-\\[7px\\]{padding-bottom:7px;padding-top:7px}.md\\:pr-\\[10px\\]{padding-right:10px}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}}";
styleInject(css_248z$2,{"insertAt":"top"});

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.ErrorText = ErrorText;
exports.Icon = Icon;
exports.Loader = Loader;
//# sourceMappingURL=ui-kit.cjs.development.js.map
