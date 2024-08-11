import { __assign, __rest } from "tslib";
import { NumericFormat, PatternFormat } from "react-number-format";
import React from "react";
import ErrorText from "../ErrorText/ErrorText";
export var MaskRules = {
    number: {
        allowNegative: false,
        allowLeadingZeros: false,
        thousandSeparator: " ",
        thousandsGroupStyle: "thousand",
    },
};
var Input = function (_a) {
    var _b, _c;
    var type = _a.type, field = _a.field, fieldState = _a.fieldState, postfix = _a.postfix, className = _a.className, format = _a.format, parentClassName = _a.parentClassName, _d = _a.decimalScale, decimalScale = _d === void 0 ? 1 : _d, rest = __rest(_a, ["type", "field", "fieldState", "postfix", "className", "format", "parentClassName", "decimalScale"]);
    var errorClass = "!border-danger";
    return (React.createElement(React.Fragment, null,
        format ? (React.createElement(PatternFormat, __assign({ onValueChange: function (values) {
                var _a;
                field === null || field === void 0 ? void 0 : field.onChange((_a = values.value.replace("_", "")) === null || _a === void 0 ? void 0 : _a.toString());
            }, value: (_b = field === null || field === void 0 ? void 0 : field.value) === null || _b === void 0 ? void 0 : _b.toString(), valueIsNumericString: true, allowEmptyFormatting: true, type: type, mask: "_", className: "".concat(!!(fieldState === null || fieldState === void 0 ? void 0 : fieldState.error) && errorClass, " ").concat(className, " w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300"), format: format }, rest))) : type === "number" ? (React.createElement("div", { className: "".concat(!!(fieldState === null || fieldState === void 0 ? void 0 : fieldState.error) && errorClass, " ").concat(parentClassName, " flex items-center justify-between w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] transition-all duration-300") },
            React.createElement(NumericFormat, __assign({ decimalScale: decimalScale, onValueChange: function (values) { var _a; return field === null || field === void 0 ? void 0 : field.onChange((_a = values.value.replace("_", "")) === null || _a === void 0 ? void 0 : _a.toString()); }, value: (_c = field === null || field === void 0 ? void 0 : field.value) === null || _c === void 0 ? void 0 : _c.toString(), className: "".concat(className, " w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300") }, rest, MaskRules["number"])),
            postfix ? (React.createElement("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]" }, postfix)) : null)) : (React.createElement("input", __assign({}, field, rest, { type: type, className: "".concat(!!(fieldState === null || fieldState === void 0 ? void 0 : fieldState.error) && errorClass, " ").concat(className, " w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300") }))),
        React.createElement(ErrorText, { error: fieldState === null || fieldState === void 0 ? void 0 : fieldState.error })));
};
export default Input;
//# sourceMappingURL=Input.js.map