import { __assign, __rest, __spreadArray } from "tslib";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useDebounce from "../hooks/useDebounce";
import Icon from "../Icon/Icon";
import React from "react";
var MultiSelectSearch = function (_a) {
    var options = _a.options, field = _a.field, className = _a.className, inputProps = __rest(_a, ["options", "field", "className"]);
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(""), search = _c[0], setSearch = _c[1];
    var debouncedSearch = useDebounce(search, 100);
    var inputRef = useRef(null);
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (inputRef.current &&
                !inputRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, []);
    var handleSelect = function (value) {
        field === null || field === void 0 ? void 0 : field.onChange((Array.isArray(field === null || field === void 0 ? void 0 : field.value) &&
            (field === null || field === void 0 ? void 0 : field.value.includes(value)) &&
            (field === null || field === void 0 ? void 0 : field.value.filter(function (item) { return item !== value; }))) ||
            (Array.isArray(field === null || field === void 0 ? void 0 : field.value) && __spreadArray(__spreadArray([], field === null || field === void 0 ? void 0 : field.value, true), [value], false)) || [value]);
    };
    return (React.createElement("div", { ref: inputRef, className: "relative" },
        React.createElement("div", { className: "h-fit w-full" },
            isOpen && (React.createElement(Icon, { name: "search", className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark" })),
            React.createElement("input", __assign({}, inputProps, { ref: inputRef, className: twMerge("bg-[#f6f7fa] rounded-[20px] focus:outline-none", className), value: (isOpen && search) ||
                    (!isOpen &&
                        Array.isArray(field === null || field === void 0 ? void 0 : field.value) &&
                        (field === null || field === void 0 ? void 0 : field.value.map(function (val) { var _a; return (_a = options.find(function (option) { return option.value === val; })) === null || _a === void 0 ? void 0 : _a.label; }).join(", "))) ||
                    "", onFocus: function () { return setIsOpen(true); }, placeholder: isOpen ? "Поиск..." : "Выбрать", onChange: function (e) { return setSearch(e.target.value); }, readOnly: !isOpen }))),
        isOpen && (React.createElement("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent" }, options
            .filter(function (option) {
            return option.label.toLowerCase().includes(debouncedSearch.toLowerCase());
        })
            .map(function (option) {
            var _a;
            return (React.createElement("li", { onClick: function () { return handleSelect(option.value); }, key: option.value, className: "px-4 py-2 hover:bg-gray-100 cursor-pointer" },
                React.createElement("div", { className: "flex flex-row" },
                    option.icon && React.createElement(Icon, { name: option.icon }),
                    React.createElement("button", { className: "w-full text-left !p-0 !text-sm text-dark !font-normal ".concat(Array.isArray(field === null || field === void 0 ? void 0 : field.value) &&
                            ((_a = field === null || field === void 0 ? void 0 : field.value) === null || _a === void 0 ? void 0 : _a.includes(option.value)) &&
                            "text-primary"), value: option.value }, option.label))));
        })))));
};
export default MultiSelectSearch;
//# sourceMappingURL=MultiSelectSearch.js.map