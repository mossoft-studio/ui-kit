import React from "react";
var Chips = function (_a) {
    var items = _a.items, disable = _a.disable, color = _a.color, style = _a.style;
    return (React.createElement("div", { className: "flex flex-wrap gap-[6px]" }, items.map(function (item) { return (React.createElement(React.Fragment, null, item.title ? (React.createElement("div", { style: style, key: item.title, className: "".concat(disable ? "bg-dark-gray" : color ? color : "bg-primary", " rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit") }, item.title)) : (React.createElement(React.Fragment, null)))); })));
};
export default Chips;
//# sourceMappingURL=Chips.js.map