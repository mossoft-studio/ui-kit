import React from "react";
var ErrorText = function (_a) {
    var error = _a.error;
    return error && Object.keys(error).length ? (React.createElement("span", { className: "block text-danger text-[10px] text-center mt-[2px]" }, typeof error.message !== "string"
        ? "Что-то пошло не так"
        : error.message)) : null;
};
export default ErrorText;
//# sourceMappingURL=ErrorText.js.map