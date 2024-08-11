import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick, className = _a.className, loadType = _a.loadType, isLoading = _a.isLoading, variant = _a.variant, icon = _a.icon, disabled = _a.disabled;
    var _b = useState(""), loadMessage = _b[0], setLoadMessage = _b[1];
    var handleLoadMessage = function () {
        if (isLoading && loadType === "1C") {
            setLoadMessage("Отправляем запрос в 1С");
            setTimeout(function () {
                return loadType === "1C"
                    ? setLoadMessage("1С обрабатывает документы")
                    : setLoadMessage("");
            }, 4000);
        }
    };
    useEffect(function () {
        loadType === "1C" && handleLoadMessage();
    }, [isLoading]);
    var buttonClasses = [
        "flex items-center justify-center py-[14px] px-[6px] w-full h-fit rounded-[30px] md:rounded-[15px] text-base md:text-lg uppercase font-medium border border-transparent active:opacity-[0.6] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-[0.6]",
        className,
        variant === "primary" && "text-white bg-primary",
        variant === "secondary" && "text-primary bg-primary bg-opacity-10",
        variant === "small-secondary" &&
            "!normal-case !py-[6px] !text-sm text-primary bg-primary bg-opacity-20",
        variant === "small-primary" &&
            "!normal-case !py-[6px] !text-sm text-white bg-primary",
        variant === "small-danger" &&
            "!normal-case !py-[6px] !text-sm text-danger bg-danger bg-opacity-10",
        variant === "danger" && "text-danger bg-danger bg-opacity-10",
        variant === "link" &&
            "text-primary !text-sm !py-0 !px-1 !normal-case !w-fit",
        variant === "tab" &&
            "bg-primary text-white text-sm md:!text-base !px-5 !py-2 !font-normal rounded-[30px] md:!rounded-[15px] !normal-case !w-fit",
    ]
        .filter(Boolean)
        .join(" ");
    return (React.createElement("button", { disabled: disabled || isLoading, onClick: onClick, className: buttonClasses },
        isLoading ? (React.createElement(Loader, { text: loadType === "1C" ? loadMessage : undefined })) : (children),
        icon && !isLoading && (React.createElement(Icon, { name: icon, className: variant.includes("small")
                ? "w-4 h-4 child:w-4 child:h-4"
                : "w-5 h-5 child:w-5 child:h-5" }))));
};
export default Button;
//# sourceMappingURL=Button.js.map