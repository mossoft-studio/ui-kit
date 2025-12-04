import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { CSSProperties, FC, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Wrapper from "../Wrapper/Wrapper";

export type HeaderData = {
  name: string[]; // путь до поля (можно вложенность)
  title: string;
  unit?: string;
  transform?: (value: any, i: number) => any;
};

type Props = {
  headerData: HeaderData[];
  data?: any[];
  className?: string;
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

  const activeItemClass =
    "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green";

  const handleItemClick = (id: any) => {
    onRowClick?.(id);
    setActiveItem(String(id));
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || !dropArray?.length) return;

    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const copy = [...dropArray];
    const [moved] = copy.splice(startIndex, 1);
    copy.splice(endIndex, 0, moved);
    setDropArray(copy);
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
              {(droppableProvided) => (
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-dark-gray font-medium">
                      {headerData.map((item, i) => {
                        const sortKey = item.name.find(Boolean) ?? "";
                        const isAsc = sort === sortKey;
                        return (
                          <td
                            key={i}
                            onClick={() =>
                              setSort?.(isAsc ? `-${sortKey}` : sortKey)
                            }
                            className={`first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative cursor-pointer
                              ${
                                sort &&
                                "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"
                              }
                              ${
                                isAsc
                                  ? "after:rotate-[-45deg]"
                                  : "after:rotate-[135deg]"
                              } after:transition-all after:duration-300`}
                          >
                            {item.title}
                            {item.unit && (
                              <span className="ml-1 text-xs text-gray-400">
                                {item.unit}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody
                    className="before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray"
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                  >
                    {dropArray?.map((rowData: any, index: number) => (
                      <Draggable
                        isDragDisabled={isDragDisabled}
                        key={rowData?.id}
                        draggableId={rowData?.id?.toString()}
                        index={index}
                      >
                        {(dragProvided) => {
                          const style: CSSProperties = {
                            ...dragProvided.draggableProps.style,
                          };

                          const rowId = itemClickKey
                            ? rowData[itemClickKey]
                            : rowData.id;

                          return (
                            <tr
                              className={`relative transition-all duration-300 px-[10px] cursor-pointer ${
                                activeItem === String(rowId) && activeItemClass
                              }`}
                              onClick={() => handleItemClick(rowId)}
                              ref={dragProvided.innerRef}
                              {...dragProvided.draggableProps}
                              {...dragProvided.dragHandleProps}
                              style={style}
                            >
                              {headerData.map((item, i) => {
                                const rawValue = item.name.reduce(
                                  (acc, name) => acc?.[name],
                                  dropArray[index]
                                );

                                const value = item.transform
                                  ? item.transform(rawValue, index)
                                  : rawValue;

                                return (
                                  <td
                                    key={i}
                                    className={`text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300
                                      first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px]
                                      last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4
                                      ${
                                        haveLinks &&
                                        "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"
                                      }`}
                                  >
                                    {value}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        }}
                      </Draggable>
                    ))}
                    {droppableProvided.placeholder}
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
