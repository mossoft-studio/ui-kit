"use client";

import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

type ListItems = {
  label: string;
  value: any;
  row?: string;
};

type Props = {
  data: ListItems[];
  className?: string;
  onClick: (value: any) => void;
};

const List: React.FC<Props> = ({ data, className, onClick }) => {
  const [activeItem, setActiveItem] = useState<any | null>(null);

  const activeItemClass =
    "bg-white text-blue-700 after:border-blue-600 [&>span]:text-gray-900";

  const baseItemClass =
    "relative flex gap-4 items-center px-[10px] py-[10px] md:py-[15px] " +
    "rounded-[15px] cursor-pointer transition-all duration-200 " +
    "bg-gray-50 hover:bg-gray-100 " +
    "after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto " +
    "after:w-2 after:h-2 after:border-t-2 after:border-r-2 " +
    "after:border-transparent after:rotate-45 after:transition-all duration-200";

  return (
    <Wrapper className={`md:h-full flex ${className || ""}`}>
      <div className="md:overflow-y-auto w-full grid gap-1">
        {data.map((item, index) => {
          const isActive = activeItem === item.value;

          return (
            <div
              key={String(item.value ?? index)}
              onClick={() => {
                setActiveItem(item.value);
                onClick(item.value);
              }}
              className={`${baseItemClass} ${isActive ? activeItemClass : ""}`}
            >
              <span className="text-sm text-gray-800 font-normal transition-all duration-200">
                {item.label}
              </span>

              {item.row && (
                <span className="text-sm text-gray-500 font-normal transition-all duration-200 ml-auto">
                  {item.row}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default List;
