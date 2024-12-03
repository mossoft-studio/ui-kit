import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";
import { NumericFormat, PatternFormat } from "react-number-format";
import ErrorText from "../ErrorText/ErrorText";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  type?: HTMLInputTypeAttribute | ("password" | "tel" | "text");
  placeholder?: string;
  field?: ControllerRenderProps<any, any>;
  fieldState: ControllerFieldState;
  format?: string;
  decimalScale?: number;
  defaultValue?: string | number | null;
  postfix?: string;
  parentClassName?: string;
  labelClassName?: string;
  label?: string;
  formState?: UseFormStateReturn<any>;
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
  labelClassName,
  decimalScale = 1,
  formState,
  label,
  ...rest
}) => {
  const errorClass = "!border-danger";
  const { error } = fieldState;
  return (
    <label>
      {label && (
        <span className={`text-primary ${labelClassName}`}>{label}</span>
      )}
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
          className={`${
            error ? errorClass : ""
          } w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${className}`}
          format={format}
          {...rest}
        />
      ) : type === "number" ? (
        <div
          className={`${
            error ? errorClass : ""
          } ${parentClassName} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`}
        >
          <NumericFormat
            decimalScale={decimalScale}
            onValueChange={(values) =>
              field?.onChange(values.value.replace("_", "")?.toString())
            }
            value={field?.value?.toString()}
            className={`w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${className}`}
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
          className={`${
            error ? errorClass : ""
          } w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${className}`}
        />
      )}

      <ErrorText error={error} />
    </label>
  );
};

export default Input;
