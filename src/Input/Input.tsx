import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { NumericFormat, PatternFormat } from "react-number-format";
import React from "react";
import ErrorText from "../ErrorText/ErrorText";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  type?: HTMLInputTypeAttribute | ("password" | "tel" | "text");
  placeholder?: string;
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  format?: string;
  decimalScale?: number;
  defaultValue?: string | number | null;
  postfix?: string;
  parentClassName?: string;
} & InputAttributes;

export const MaskRules: {
  [key in "number"]?: {
    allowNegative: boolean;
    allowLeadingZeros: boolean;
    thousandSeparator: string;
    thousandsGroupStyle?: "thousand" | "lakh" | "wan";
  };
} = {
  number: {
    allowNegative: false,
    allowLeadingZeros: false,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand",
  },
};

const Input: FC<InputProps> = ({
  type,
  field,
  fieldState,
  postfix,
  className,
  format,
  parentClassName,
  decimalScale = 1,
  ...rest
}) => {
  const errorClass = "!border-danger";

  return (
    <>
      {format ? (
        <PatternFormat
          onValueChange={(values) => {
            field?.onChange(values.value.replace("_", "")?.toString());
          }}
          value={field?.value?.toString()}
          valueIsNumericString
          allowEmptyFormatting
          type={type as "password" | "tel" | "text"}
          mask="_"
          className={`${!!fieldState?.error && errorClass} ${className} w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300`}
          format={format}
          {...rest}
        />
      ) : type === "number" ? (
        <div
          className={`${
            !!fieldState?.error && errorClass
          } ${parentClassName} flex items-center justify-between w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] transition-all duration-300`}
        >
          <NumericFormat
            decimalScale={decimalScale}
            onValueChange={(values) =>
              field?.onChange(values.value.replace("_", "")?.toString())
            }
            value={field?.value?.toString()}
            className={`${className} w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300`}
            {...rest}
            {...MaskRules["number"]}
          />
          {postfix ? (
            <span className="text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]">
              {postfix}
            </span>
          ) : null}
        </div>
      ) : (
        <input
          {...field}
          {...rest}
          type={type}
          className={`${!!fieldState?.error && errorClass} ${className} w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300`}
        />
      )}
      <ErrorText error={fieldState?.error} />
    </>
  );
};

export default Input;
