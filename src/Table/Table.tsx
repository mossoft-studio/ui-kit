import React, { CSSProperties, FC, useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import Loader from "../Loader/Loader";
import Wrapper from "../Wrapper/Wrapper";

export type HeaderData = {
  name: string[];
  title: string;
  unit?: string;
  transform?: (value: any, i: number) => any;
};

type Props = {
  headerData: HeaderData[];
  data?: any[];
  className: string;
  isDragDisabled?: boolean;
  haveLinks: boolean;
  onRowClick?: (id: any) => void;
  isLoading?: boolean;
  itemClickKey?: string;
  setSort?: (value: string) => void;
  sort?: string;
};

const DraggableList: FC<Props> = ({
  data,
  headerData,
  setSort,
  sort,
  isDragDisabled = true,
  isLoading,
  onRowClick,
  itemClickKey,
  haveLinks,
  className,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [dropArray, setDropArray] = useState(data);

  useEffect(() => {
    setDropArray(data);
  }, [data]);

  const activeItemClass: string =
    "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green";

  const handleItemClick = (id: string) => {
    onRowClick?.(id);
    setActiveItem(id);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || !dropArray?.length) return;

    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const copyTodos = [...dropArray];
    const [reorderTodo] = copyTodos.splice(startIndex, 1);
    copyTodos.splice(endIndex, 0, reorderTodo);
    setDropArray(copyTodos);
  };

  if (!data?.length && !isLoading) {
    return (
      <span className="text-center text-xl font-normal mx-auto w-fit block mt-8">
        К сожалению, по Вашему запросу{" "}
        <span className="text-main-green">ничего</span> не найдено 😓
      </span>
    );
  }

  if (isLoading) {
    return (
      <div className="mx-auto w-fit block mt-20">
        <Loader style={{ width: 40, height: 40 }} />
      </div>
    );
  }

  return (
    <Wrapper className={className}>
      <div className="h-full overflow-auto w-full">
        <div className="min-w-[900px] w-full">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="dropArray" direction="vertical">
              {(provided) => (
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-dark-gray font-medium">
                      {headerData.map((item, i) => (
                        <td
                          key={i}
                          onClick={() =>
                            setSort?.(
                              sort === item.name.find((item) => item)
                                ? `-${item.name.find((item) => item) ?? ""}`
                                : item.name.find((item) => item) ?? ""
                            )
                          }
                          className={`${
                            sort &&
                            "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"
                          } first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${
                            sort === item.name.find((item) => item)
                              ? "after:rotate-[-45deg]"
                              : "after:rotate-[135deg]"
                          } after:transition-all after:duration-300 cursor-pointer`}
                        >
                          {item.title}
                        </td>
                      ))}
                    </tr>
                  </thead>
                  <tbody
                    className="before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {dropArray?.map((rowData, index) => (
                      <Draggable
                        isDragDisabled={isDragDisabled}
                        key={rowData?.id}
                        draggableId={rowData?.id?.toString()}
                        index={index}
                      >
                        {(provided) => {
                          const style: CSSProperties = {
                            ...provided.draggableProps.style, //Тут стили , которые применяются при перемещении
                          };

                          return (
                            <tr
                              className={`relative transition-all duration-300 px-[10px] cursor-pointer ${
                                activeItem === dropArray[index] &&
                                activeItemClass
                              }`}
                              onClick={() =>
                                handleItemClick(
                                  itemClickKey
                                    ? rowData[itemClickKey]
                                    : rowData.id
                                )
                              }
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={style}
                            >
                              {headerData.map((item, i) => {
                                let value = item?.name?.reduce(
                                  (acc, name) => acc?.[name],
                                  dropArray?.[index]
                                );

                                return (
                                  <td
                                    key={i}
                                    className={`text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${
                                      haveLinks &&
                                      "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"
                                    }`}
                                  >
                                    {item.transform
                                      ? item.transform(value, index)
                                      : value}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        }}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                </table>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </Wrapper>
  );
};

export default DraggableList;
