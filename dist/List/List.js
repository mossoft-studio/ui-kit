"use client";
import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
var List = function (_a) {
    var data = _a.data, className = _a.className, onClick = _a.onClick;
    var activeItemClass = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green";
    var activeItem = useState(null)[0];
    return (React.createElement(Wrapper, { className: "md:h-full flex ".concat(className) },
        React.createElement("div", { className: "md:overflow-y-auto w-full grid gap-1" }, data.map(function (item) { return (React.createElement("div", { key: item.value, onClick: function () { return onClick(item.value); }, className: "relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ".concat(activeItem === item.value && activeItemClass) },
            React.createElement("span", { className: " text-sm text-black font-normal transition-all duration-300" }, item.label),
            item.row && (React.createElement("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto" }, item.row)))); }))));
};
export default List;
//# sourceMappingURL=List.js.map