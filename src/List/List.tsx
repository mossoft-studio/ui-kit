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
  const activeItemClass: string =
    "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green";

  const [activeItem] = useState<string | null>(null);

  return (
    <Wrapper className={`md:h-full flex ${className}`}>
      <div className="md:overflow-y-auto w-full grid gap-1">
        {data.map((item) => (
          <div
            key={item.value}
            onClick={() => onClick(item.value)}
            className={`relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${
              activeItem === item.value && activeItemClass
            }`}
          >
            <span className=" text-sm text-black font-normal transition-all duration-300">
              {item.label}
            </span>
            {item.row && (
              <span className="text-sm text-dark-gray font-normal transition-all duration-300 m-auto">
                {item.row}
              </span>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default List;
