import { CSSProperties, FC } from "react";

type Props = {
  style?: CSSProperties;
  text?: string;
};

const Loader: FC<Props> = ({ style, text }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <span className={`w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary`} style={style}></span>
      {text && <span className="text-base">{text}</span>}
    </div>
  );
};

export default Loader;
