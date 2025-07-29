import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const Wrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "bg-main rounded-2xl p-5 border-primary/10 border",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
