import React from "react";
import ErrorText from "../ErrorText/ErrorText";
var Checkbox = function (_a) {
    var onChange = _a.onChange, title = _a.title, secondaryTitle = _a.secondaryTitle, labelClassName = _a.labelClassName, className = _a.className, titleClassName = _a.titleClassName, error = _a.error, checked = _a.checked, disabled = _a.disabled;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { onClick: function (e) { return e.stopPropagation(); }, className: "bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ".concat(labelClassName) },
            React.createElement("span", { className: "text-sm text-dark-gray font-normal ".concat(titleClassName) }, title),
            secondaryTitle && (React.createElement("span", { className: "text-center text-sm text-dark-gray font-normal" }, secondaryTitle)),
            React.createElement("input", { disabled: disabled, checked: checked, onChange: function (e) { return onChange(e.target.checked); }, type: "checkbox", className: className })),
        error && React.createElement(ErrorText, { error: error })));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map