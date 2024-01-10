import React, { FC, TextareaHTMLAttributes } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

type TextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = {
  className?: string;
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
} & TextareaAttributes;

const Textarea: FC<Props> = ({ className, field, fieldState, ...rest }) => {
  return (
    <textarea
      {...field}
      {...rest}
      className={`${className} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`}
    ></textarea>
  );
};

export default Textarea;
