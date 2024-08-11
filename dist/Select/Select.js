import { __assign, __rest } from "tslib";
import React from "react";
import ErrorText from "../ErrorText/ErrorText";
var Select = function (_a) {
    var placeholder = _a.placeholder, options = _a.options, className = _a.className, field = _a.field, fieldState = _a.fieldState, parentClassName = _a.parentClassName, rest = __rest(_a, ["placeholder", "options", "className", "field", "fieldState", "parentClassName"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ".concat(parentClassName) },
            React.createElement("select", __assign({}, field, rest, { className: "w-full cursor-pointer appearance-none bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ".concat(className) }),
                React.createElement("option", { value: "", selected: true }, placeholder), options === null || options === void 0 ? void 0 :
                options.map(function (option, i) { return (React.createElement("option", { value: option.value, key: i, className: "text-black" }, option.label)); }))),
        React.createElement(ErrorText, { error: fieldState === null || fieldState === void 0 ? void 0 : fieldState.error })));
};
export default Select;
//# sourceMappingURL=Select.js.map