import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Icon from "../Icon/Icon";
var Search = function (_a) {
    var placeholder = _a.placeholder, setValue = _a.setValue, value = _a.value, parentClassName = _a.parentClassName;
    var _b = useState(value), localValue = _b[0], setLocalValue = _b[1];
    var debounced = useDebounce(localValue, 300);
    useEffect(function () {
        setValue === null || setValue === void 0 ? void 0 : setValue(debounced);
    }, [debounced]);
    return (React.createElement("div", { className: "relative h-fit w-full ".concat(parentClassName) },
        React.createElement(Icon, { name: "search", className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto" }),
        React.createElement("input", { placeholder: placeholder, onChange: function (e) { return setLocalValue(e.target.value); }, value: localValue, type: "search", className: "!pl-[40px] md:!pl-[50px] w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300" })));
};
export default Search;
//# sourceMappingURL=Search.js.map