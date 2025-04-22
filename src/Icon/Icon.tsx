import React, { memo } from "react";

type Props = {
  name: string;
  className?: string;
};

const Icon: React.FC<Props> = ({ name, className, ...rest }) => {
  return (
    <svg
      className={`text-dark-gray ${className}`}
      fill="currentColor"
      {...rest}
    >
      <use className="w-full h-full object-contain" href={`#${name}`}></use>
    </svg>
  );
};

export default memo(Icon);
