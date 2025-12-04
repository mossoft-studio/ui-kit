import React, { CSSProperties, FC } from "react";

type ChipItem = {
  title: string | number;
};

type Props = {
  items: ChipItem[];
  disable?: boolean;
  color?: string | null;
  style?: CSSProperties;
};

const Chips: FC<Props> = ({ items, disable, color, style }) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item, index) => {
        if (!item.title) return null;

        const classes = [
          disable
            ? "bg-gray-400 text-white"
            : color
            ? color
            : "bg-blue-600 text-white",
          "px-3 py-1 text-sm rounded-full h-fit",
          "transition-colors duration-200 ease-out",
          !disable && "hover:bg-blue-700",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div key={index} className={classes} style={style}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Chips;
