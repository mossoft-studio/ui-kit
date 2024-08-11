import { useRef } from "react";
export var useScroll = function () {
    var elRef = useRef(null);
    var executeScroll = function () {
        var _a;
        return (_a = elRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    };
    return [executeScroll, elRef];
};
//# sourceMappingURL=useScroll.js.map