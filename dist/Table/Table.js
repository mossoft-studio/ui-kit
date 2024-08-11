import { __assign, __spreadArray } from "tslib";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, } from "@hello-pangea/dnd";
import Loader from "../Loader/Loader";
import Wrapper from "../Wrapper/Wrapper";
var DraggableList = function (_a) {
    var data = _a.data, headerData = _a.headerData, setSort = _a.setSort, sort = _a.sort, _b = _a.isDragDisabled, isDragDisabled = _b === void 0 ? true : _b, isLoading = _a.isLoading, onRowClick = _a.onRowClick, itemClickKey = _a.itemClickKey, haveLinks = _a.haveLinks, className = _a.className;
    var _c = useState(null), activeItem = _c[0], setActiveItem = _c[1];
    var _d = useState(data), dropArray = _d[0], setDropArray = _d[1];
    useEffect(function () {
        setDropArray(data);
    }, [data]);
    var activeItemClass = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green";
    var handleItemClick = function (id) {
        onRowClick === null || onRowClick === void 0 ? void 0 : onRowClick(id);
        setActiveItem(id);
    };
    var handleDragEnd = function (result) {
        if (!result.destination || !(dropArray === null || dropArray === void 0 ? void 0 : dropArray.length))
            return;
        var startIndex = result.source.index;
        var endIndex = result.destination.index;
        var copyTodos = __spreadArray([], dropArray, true);
        var reorderTodo = copyTodos.splice(startIndex, 1)[0];
        copyTodos.splice(endIndex, 0, reorderTodo);
        setDropArray(copyTodos);
    };
    if (!(data === null || data === void 0 ? void 0 : data.length) && !isLoading) {
        return (React.createElement("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8" },
            "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043F\u043E \u0412\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443",
            " ",
            React.createElement("span", { className: "text-main-green" }, "\u043D\u0438\u0447\u0435\u0433\u043E"),
            " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \uD83D\uDE13"));
    }
    if (isLoading) {
        return (React.createElement("div", { className: "mx-auto w-fit block mt-20" },
            React.createElement(Loader, { style: { width: 40, height: 40 } })));
    }
    return (React.createElement(Wrapper, { className: className },
        React.createElement("div", { className: "h-full overflow-auto w-full" },
            React.createElement("div", { className: "min-w-[900px] w-full" },
                React.createElement(DragDropContext, { onDragEnd: handleDragEnd },
                    React.createElement(Droppable, { droppableId: "dropArray", direction: "vertical" }, function (provided) { return (React.createElement("table", { className: "w-full" },
                        React.createElement("thead", null,
                            React.createElement("tr", { className: "text-sm text-dark-gray font-medium" }, headerData.map(function (item, i) { return (React.createElement("td", { key: i, onClick: function () {
                                    var _a, _b;
                                    return setSort === null || setSort === void 0 ? void 0 : setSort(sort === item.name.find(function (item) { return item; })
                                        ? "-".concat((_a = item.name.find(function (item) { return item; })) !== null && _a !== void 0 ? _a : "")
                                        : (_b = item.name.find(function (item) { return item; })) !== null && _b !== void 0 ? _b : "");
                                }, className: "".concat(sort &&
                                    "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray", " first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ").concat(sort === item.name.find(function (item) { return item; })
                                    ? "after:rotate-[-45deg]"
                                    : "after:rotate-[135deg]", " after:transition-all after:duration-300 cursor-pointer") }, item.title)); }))),
                        React.createElement("tbody", __assign({ className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray" }, provided.droppableProps, { ref: provided.innerRef }), dropArray === null || dropArray === void 0 ? void 0 :
                            dropArray.map(function (rowData, index) {
                                var _a;
                                return (React.createElement(Draggable, { isDragDisabled: isDragDisabled, key: rowData === null || rowData === void 0 ? void 0 : rowData.id, draggableId: (_a = rowData === null || rowData === void 0 ? void 0 : rowData.id) === null || _a === void 0 ? void 0 : _a.toString(), index: index }, function (provided) {
                                    var style = __assign({}, provided.draggableProps.style);
                                    return (React.createElement("tr", __assign({ className: "relative transition-all duration-300 px-[10px] cursor-pointer ".concat(activeItem === dropArray[index] &&
                                            activeItemClass), onClick: function () {
                                            return handleItemClick(itemClickKey
                                                ? rowData[itemClickKey]
                                                : rowData.id);
                                        }, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { style: style }), headerData.map(function (item, i) {
                                        var _a;
                                        var value = (_a = item === null || item === void 0 ? void 0 : item.name) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, name) { return acc === null || acc === void 0 ? void 0 : acc[name]; }, dropArray === null || dropArray === void 0 ? void 0 : dropArray[index]);
                                        return (React.createElement("td", { key: i, className: "text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ".concat(haveLinks &&
                                                "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300") }, item.transform
                                            ? item.transform(value, index)
                                            : value));
                                    })));
                                }));
                            }),
                            provided.placeholder))); }))))));
};
export default DraggableList;
//# sourceMappingURL=Table.js.map