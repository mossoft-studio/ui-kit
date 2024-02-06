import React, { CSSProperties } from "react";

type Props = {
  items: {
    title: string | number;
  }[];
  disable?: boolean;
  color?: string | null;
  style?: CSSProperties;
};

const Chips: React.FC<Props> = ({ items, disable, color, style }) => {
  return (
    <div className="flex flex-wrap gap-[6px]">
      {items.map((item) => (
        <>
          {item.title ? (
            <div
              style={style}
              key={item.title}
              className={`${
                disable ? "bg-dark-gray" : color ? color : "bg-primary"
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
