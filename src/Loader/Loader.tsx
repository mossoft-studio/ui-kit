import React, { CSSProperties, FC } from "react";

type Props = {
  style?: CSSProperties;
  text?: string;
};

const Loader: FC<Props> = ({ style, text }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <span style={style}></span>
      {text && <span className="text-base">{text}</span>}
    </div>
  );
};

export default Loader;
