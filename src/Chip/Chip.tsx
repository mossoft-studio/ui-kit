import React from "react";

type Props = {
  items: {
    title: string | number;
  }[];
  disable?: boolean;
  color?: string | null;
};

const Chips: React.FC<Props> = ({ items, disable, color }) => {

  return (
    <div className="flex flex-wrap gap-[6px]">
      {items.map((item) => (
        <>
          {item.title ? (
            <div
              key={item.title}
              className={`${
                disable ? "bg-dark-gray" : color ? color : "bg-main-green"
              } rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`}
            >
              {item.title}
            </div>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  );
};

export default Chips;
