import React from "react";

type Props = {
  name: string;
  className?: string;
};

const Icon: React.FC<Props> = ({ name, className }) => {
  return (
    <svg className={`transition-all duration-300 text-dark-gray ${className}`}>
      <use
        className="w-full h-full object-contain"
        href={`/icons/sprite.svg#${name}`}
      ></use>
    </svg>
  );
};

export default Icon;
