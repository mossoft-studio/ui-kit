import React from "react";

type Props = {
  name: Icons;
  className?: string;
};

export type Icons =
  | "brigadier"
  | "verification"
  | "greenhouse"
  | "notification"
  | "privacy"
  | "exit"
  | "salary"
  | "search"
  | "disease"
  | "start"
  | "pause"
  | "stop"
  | "plus"
  | "scan"
  | "market"
  | "forecast"
  | "plant"
  | "proposal"
  | "success"
  | "error"
  | "point";

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
