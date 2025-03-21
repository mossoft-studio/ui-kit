import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import { NumericFormat, PatternFormat } from "react-number-format";
import ErrorText from "../ErrorText/ErrorText";

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  type?: HTMLInputTypeAttribute | ("password" | "tel" | "text");
  field?: ControllerRenderProps<TFieldValues, TName>;
  fieldState?: ControllerFieldState;
  formState?: UseFormStateReturn<TFieldValues>;
  format?: string;
  labelClassName?: string;
  label?: string;
  decimalScale?: number;
  wrapperClassName?: string;
  value?: TFieldValues[TName];
  parentClassName?: string;
  defaultValue?: string | number | null;
  postfix?: string;
  numberWrapperClassname?: string;
  errorPlace?: "bottom" | "right";
} & InputHTMLAttributes<HTMLInputElement>;

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

const Input = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  type,
  field,
  label,
  fieldState,
  postfix,
  labelClassName,
  errorPlace = "right",
  parentClassName,
  className,
  formState,
  numberWrapperClassname,
  format,
  wrapperClassName,
  decimalScale = 1,
  ...rest
}: Props<TFieldValues, TName>) => {
  const errorClass = "!border-danger";

  return (
    <label className={`relative w-full ${wrapperClassName}`}>
      {label && (
        <span className={`text-primary  ${labelClassName}`}>{label}</span>
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
          style={{ fontSize: "16px" }}
          className={`${
            fieldState?.error ? errorClass : ""
          } w-full border-[1px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 outline-none ${className}`}
          format={format}
          {...rest}
        />
      ) : type === "number" ? (
        <div
          className={`${
            fieldState?.error ? errorClass : ""
          } ${parentClassName} flex items-center justify-between w-full border-[1px] border-primary rounded-[30px] bg-white md:rounded-[15px] transition-all duration-300`}
        >
          <NumericFormat
            decimalScale={decimalScale}
            style={{ fontSize: "16px" }}
            onValueChange={(values) =>
              field?.onChange(+values.value.replace("_", "")?.toString())
            }
            value={+field?.value!}
            className={`w-full border-[1px] border-primary rounded-[30px] md:border-primary bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${className}`}
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
          style={{ fontSize: "16px" }}
          className={`${
            fieldState?.error ? errorClass : ""
          } w-full bg-white border-[1px] outline-none border-primary rounded-[30px] md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${className}`}
        />
      )}

      <div className="absolute w-full items-center flex justify-center flex-row">
        {fieldState?.error && Object.keys(fieldState?.error)?.length && (
          <ErrorText error={fieldState?.error} />
        )}
      </div>
    </label>
  );
};

export default Input;
