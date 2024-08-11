import React from "react";
import styles from "./loader.module.css";
var Loader = function (_a) {
    var style = _a.style, text = _a.text;
    return (React.createElement("div", { className: "flex flex-row items-center justify-center gap-3" },
        React.createElement("span", { className: "".concat(styles.loader, " !border-b-primary"), style: style }),
        text && React.createElement("span", { className: "text-base" }, text)));
};
export default Loader;
//# sourceMappingURL=Loader.js.map