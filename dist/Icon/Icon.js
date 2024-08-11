import React from "react";
var Icon = function (_a) {
    var name = _a.name, className = _a.className;
    return (React.createElement("svg", { className: "transition-all duration-300 text-dark-gray ".concat(className) },
        React.createElement("use", { className: "w-full h-full object-contain", href: "/icons/sprite.svg#".concat(name) })));
};
export default Icon;
//# sourceMappingURL=Icon.js.map