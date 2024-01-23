import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Wrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={`bg-main rounded-[25px] py-5 px-[30px] ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
