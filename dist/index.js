!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.mossoft=t(require("react")):n.mossoft=t(n.react)}(self,(n=>(()=>{var t={991:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"\n\n\n.button {\n\n    display: flex;\n\n    height: -moz-fit-content;\n\n    height: fit-content;\n\n    width: 100%;\n\n    align-items: center;\n\n    justify-content: center;\n\n    border-radius: 30px;\n\n    border-width: 1px;\n\n    border-color: transparent;\n\n    padding-top: 14px;\n\n    padding-bottom: 14px;\n\n    padding-left: 6px;\n\n    padding-right: 6px;\n\n    font-size: 1rem;\n\n    line-height: 1.5rem;\n\n    font-weight: 500;\n\n    text-transform: uppercase;\n\n    transition-property: all;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 300ms\n}\n\n.button:active {\n\n    opacity: 0.6\n}\n\n.button:disabled {\n\n    cursor: not-allowed;\n\n    opacity: 0.6\n}\n\n@media (min-width: 1023px) {\n\n    .button {\n\n        border-radius: 15px;\n\n        font-size: 1.125rem;\n\n        line-height: 1.75rem\n    }\n}\n\n.primary_button {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(45 219 146 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.secondary_button {\n\n    background-color: rgb(45 219 146 / var(--tw-bg-opacity));\n\n    --tw-bg-opacity: 0.1;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(45 219 146 / var(--tw-text-opacity))\n}\n\n.small_secondary_button {\n\n    background-color: rgb(45 219 146 / var(--tw-bg-opacity));\n\n    --tw-bg-opacity: 0.2;\n\n    padding-top: 6px !important;\n\n    padding-bottom: 6px !important;\n\n    font-size: 0.875rem !important;\n\n    line-height: 1.25rem !important;\n\n    text-transform: none !important;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(45 219 146 / var(--tw-text-opacity))\n}\n\n.small_primary_button {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(45 219 146 / var(--tw-bg-opacity));\n\n    padding-top: 6px !important;\n\n    padding-bottom: 6px !important;\n\n    font-size: 0.875rem !important;\n\n    line-height: 1.25rem !important;\n\n    text-transform: none !important;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.small_danger_button {\n\n    background-color: rgb(255 66 66 / var(--tw-bg-opacity));\n\n    --tw-bg-opacity: 0.1;\n\n    padding-top: 6px !important;\n\n    padding-bottom: 6px !important;\n\n    font-size: 0.875rem !important;\n\n    line-height: 1.25rem !important;\n\n    text-transform: none !important;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 66 66 / var(--tw-text-opacity))\n}\n\n.danger_button {\n\n    background-color: rgb(255 66 66 / var(--tw-bg-opacity));\n\n    --tw-bg-opacity: 0.1;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 66 66 / var(--tw-text-opacity))\n}\n\n.small_yellow_button {\n\n    background-color: rgb(255 202 124 / var(--tw-bg-opacity));\n\n    --tw-bg-opacity: 0.1;\n\n    padding-top: 6px !important;\n\n    padding-bottom: 6px !important;\n\n    font-size: 0.875rem !important;\n\n    line-height: 1.25rem !important;\n\n    text-transform: none !important;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 202 124 / var(--tw-text-opacity))\n}\n\n.link_button {\n\n    width: -moz-fit-content !important;\n\n    width: fit-content !important;\n\n    padding-top: 0px !important;\n\n    padding-bottom: 0px !important;\n\n    padding-left: 0.25rem !important;\n\n    padding-right: 0.25rem !important;\n\n    font-size: 0.875rem !important;\n\n    line-height: 1.25rem !important;\n\n    text-transform: none !important;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(45 219 146 / var(--tw-text-opacity))\n}\n\n.tab_button {\n\n    width: -moz-fit-content !important;\n\n    width: fit-content !important;\n\n    border-radius: 30px;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(45 219 146 / var(--tw-bg-opacity));\n\n    padding-left: 1.25rem !important;\n\n    padding-right: 1.25rem !important;\n\n    padding-top: 0.5rem !important;\n\n    padding-bottom: 0.5rem !important;\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem;\n\n    font-weight: 400 !important;\n\n    text-transform: none !important;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n@media (min-width: 1023px) {\n\n    .tab_button {\n\n        border-radius: 15px !important;\n\n        font-size: 1rem !important;\n\n        line-height: 1.5rem !important\n    }\n}",""]);const s=i},614:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,".Dl0J0PeKjcKZkkoeclGp {\n    width: 22px;\n    height: 22px;\n    border: 5px solid #FFF;\n    border-bottom-color: rgb(45 219 146);\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: xBirJtFl4Lm467JXL_yz 1s linear infinite;\n    }\n  \n    @keyframes xBirJtFl4Lm467JXL_yz {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n    } ",""]),i.locals={loader:"Dl0J0PeKjcKZkkoeclGp",rotation:"xBirJtFl4Lm467JXL_yz"};const s=i},383:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.relative {\n  position: relative;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-\\[120px\\] {\n  height: 120px;\n}\n.h-fit {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.h-full {\n  height: 100%;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-\\[190px\\] {\n  min-width: 190px;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.resize-none {\n  resize: none;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-\\[10px\\] {\n  gap: 10px;\n}\n.gap-\\[6px\\] {\n  gap: 6px;\n}\n.rounded-\\[15px\\] {\n  border-radius: 15px;\n}\n.rounded-\\[30px\\] {\n  border-radius: 30px;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.\\!border-danger-red {\n  --tw-border-opacity: 1 !important;\n  border-color: rgb(255 66 66 / var(--tw-border-opacity)) !important;\n}\n.border-light-gray {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 245 / var(--tw-border-opacity));\n}\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.bg-dark-gray {\n  --tw-bg-opacity: 1;\n  background-color: rgb(153 153 153 / var(--tw-bg-opacity));\n}\n.bg-light-gray {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 245 / var(--tw-bg-opacity));\n}\n.bg-main-green {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 219 146 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.p-\\[10px\\] {\n  padding: 10px;\n}\n.px-\\[10px\\] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.px-\\[15px\\] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.py-\\[5px\\] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.py-\\[6px\\] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.\\!pr-9 {\n  padding-right: 2.25rem !important;\n}\n.pr-\\[15px\\] {\n  padding-right: 15px;\n}\n.text-center {\n  text-align: center;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-normal {\n  font-weight: 400;\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-danger-red {\n  --tw-text-opacity: 1;\n  color: rgb(255 66 66 / var(--tw-text-opacity));\n}\n.text-dark-gray {\n  --tw-text-opacity: 1;\n  color: rgb(153 153 153 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.placeholder\\:text-dark-gray::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(153 153 153 / var(--tw-text-opacity));\n}\n.placeholder\\:text-dark-gray::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(153 153 153 / var(--tw-text-opacity));\n}\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n.after\\:bottom-0::after {\n  content: var(--tw-content);\n  bottom: 0px;\n}\n.after\\:right-4::after {\n  content: var(--tw-content);\n  right: 1rem;\n}\n.after\\:top-0::after {\n  content: var(--tw-content);\n  top: 0px;\n}\n.after\\:my-auto::after {\n  content: var(--tw-content);\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.after\\:h-2::after {\n  content: var(--tw-content);\n  height: 0.5rem;\n}\n.after\\:w-2::after {\n  content: var(--tw-content);\n  width: 0.5rem;\n}\n.after\\:rotate-\\[134deg\\]::after {\n  content: var(--tw-content);\n  --tw-rotate: 134deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.after\\:border-r-2::after {\n  content: var(--tw-content);\n  border-right-width: 2px;\n}\n.after\\:border-t-2::after {\n  content: var(--tw-content);\n  border-top-width: 2px;\n}\n.after\\:border-dark-gray::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(153 153 153 / var(--tw-border-opacity));\n}\n.after\\:transition-all::after {\n  content: var(--tw-content);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.after\\:duration-300::after {\n  content: var(--tw-content);\n  transition-duration: 300ms;\n}\n.child\\:h-4 > * {\n  height: 1rem;\n}\n.child\\:h-5 > * {\n  height: 1.25rem;\n}\n.child\\:w-4 > * {\n  width: 1rem;\n}\n.child\\:w-5 > * {\n  width: 1.25rem;\n}\n@media (min-width: 1023px) {\n\n  .md\\:rounded-\\[15px\\] {\n    border-radius: 15px;\n  }\n\n  .md\\:border-light-gray {\n    --tw-border-opacity: 1;\n    border-color: rgb(245 245 245 / var(--tw-border-opacity));\n  }\n\n  .md\\:border-white {\n    --tw-border-opacity: 1;\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n  }\n\n  .md\\:bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  }\n\n  .md\\:p-\\[10px\\] {\n    padding: 10px;\n  }\n\n  .md\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .md\\:py-\\[7px\\] {\n    padding-top: 7px;\n    padding-bottom: 7px;\n  }\n\n  .md\\:pr-\\[10px\\] {\n    padding-right: 10px;\n  }\n\n  .md\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .md\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n\n",""]);const s=i},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:n=>{"use strict";n.exports=function(n){return n[1]}},680:(n,t,e)=>{var r=e(991);"string"==typeof r&&(r=[[n.id,r,""]]);e(723)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},978:(n,t,e)=>{var r=e(614);"string"==typeof r&&(r=[[n.id,r,""]]);e(723)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},428:(n,t,e)=>{var r=e(383);"string"==typeof r&&(r=[[n.id,r,""]]);e(723)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(n.exports=r.locals)},723:(n,t,e)=>{var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n,t){return t?t.querySelector(n):document.querySelector(n)},l=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=s.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),d=null,c=0,p=[],u=e(947);function f(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(y(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(y(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function m(n,t){for(var e=[],r={},o=0;o<n.length;o++){var a=n[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):e.push(r[i]={id:i,parts:[s]})}return e}function b(n,t){var e=l(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),p.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(n.insertAt.before,e);e.insertBefore(t,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=p.indexOf(n);t>=0&&p.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=e.nc;r&&(n.attrs.nonce=r)}return w(t,n.attrs),b(n,t),t}function w(n,t){Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])}))}function y(n,t){var e,r,o,a;if(t.transform&&n.css){if(!(a="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=a}if(t.singleton){var i=c++;e=d||(d=h(t)),r=k.bind(null,e,i,!1),o=k.bind(null,e,i,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",w(t,n.attrs),b(n,t),t}(t),r=z.bind(null,e,t),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),r=_.bind(null,e),o=function(){g(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=m(n,t);return f(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var i=e[o];(s=a[i.id]).refs--,r.push(s)}for(n&&f(m(n,t),t),o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var x,v=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function k(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=v(t,o);else{var a=document.createTextNode(o),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function _(n,t){var e=t.css,r=t.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function z(n,t,e){var r=e.css,o=e.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=u(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}},947:n=>{n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,t){var o,a=t.trim().replace(/^"(.*)"$/,(function(n,t){return t})).replace(/^'(.*)'$/,(function(n,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?n:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?e+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},683:function(n,t,e){"use strict";var r=this&&this.__createBinding||(Object.create?function(n,t,e,r){void 0===r&&(r=e);var o=Object.getOwnPropertyDescriptor(t,e);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(n,r,o)}:function(n,t,e,r){void 0===r&&(r=e),n[r]=t[e]}),o=this&&this.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)"default"!==e&&Object.prototype.hasOwnProperty.call(n,e)&&r(t,n,e);return o(t,n),t},i=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(e(156)),l=i(e(680)),d=i(e(370)),c=i(e(469));e(428),e(680),t.default=({children:n,onClick:t,className:e,loadType:r,isLoading:o,variant:a,icon:i,disabled:p})=>{const[u,f]=(0,s.useState)("");(0,s.useEffect)((()=>{"1C"===r&&o&&"1C"===r&&(f("Отправляем запрос в 1С"),setTimeout((()=>f("1C"===r?"1С обрабатывает документы":"")),4e3))}),[o]),console.log(l.default);const m=[l.default.button,e,"primary"===a&&l.default.primary_button,"secondary"===a&&l.default.secondary_button,"small-secondary"===a&&l.default.small_secondary_button,"small-primary"===a&&l.default.small_primary_button,"small-danger"===a&&l.default.small_danger_button,"danger"===a&&l.default.danger_button,"small-yellow"===a&&l.default.small_yellow_button,"link"===a&&l.default.link_button,"tab"===a&&l.default.tab_button].filter(Boolean).join(" ");return s.default.createElement("button",{disabled:p||o,onClick:t,className:m},i&&!o&&s.default.createElement(d.default,{name:i,className:a.includes("small")?"w-4 h-4 child:w-4 child:h-4 mr-1":"w-5 h-5 child:w-5 child:h-5 mr-2"}),o?s.default.createElement(c.default,{text:"1C"===r?u:void 0}):n)}},605:function(n,t,e){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(e(156)),a=r(e(865));t.default=({onChange:n,title:t,secondaryTitle:e,labelClassName:r,className:i,titleClassName:s,error:l,checked:d,disabled:c})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("label",{onClick:n=>n.stopPropagation(),className:`bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${r}`},o.default.createElement("span",{className:`text-sm text-dark-gray font-normal ${s}`},t),e&&o.default.createElement("span",{className:"text-center text-sm text-dark-gray font-normal"},e),o.default.createElement("input",{disabled:c,checked:d,onChange:t=>n(t.target.checked),type:"checkbox",className:i})),l&&o.default.createElement(a.default,{error:l}))},865:function(n,t,e){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(e(156));t.default=({error:n})=>n&&Object.keys(n).length?o.default.createElement("span",{className:"block text-danger-red text-xs md:text-sm text-center mt-1"},"string"!=typeof(null==n?void 0:n.message)?"Что-то пошло не так":null==n?void 0:n.message):null},370:function(n,t,e){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(e(156));t.default=({name:n,className:t})=>o.default.createElement("svg",{className:`transition-all duration-300 text-dark-gray ${t}`},o.default.createElement("use",{className:"w-full h-full object-contain",href:`/icons/sprite.svg#${n}`}))},469:function(n,t,e){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(e(156)),a=r(e(978));t.default=({style:n,text:t})=>o.default.createElement("div",{className:"flex flex-row items-center justify-center gap-3"},o.default.createElement("span",{className:a.default.loader,style:n}),t&&o.default.createElement("span",{className:"text-base"},t))},607:function(n,t,e){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorText=t.Checkbox=t.Loader=t.Icon=t.Button=void 0,e(428);const o=r(e(683));t.Button=o.default;const a=r(e(370));t.Icon=a.default;const i=r(e(469));t.Loader=i.default;const s=r(e(605));t.Checkbox=s.default;const l=r(e(865));t.ErrorText=l.default},156:t=>{"use strict";t.exports=n}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}return r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.nc=void 0,r(607)})()));