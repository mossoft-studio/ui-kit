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
import { motion, AnimatePresence } from "framer-motion";

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
        <span
          className={`absolute left-[20px] -top-[10px] px-[6px] text-primary text-xs md:text-sm bg-white z-[1] ${labelClassName}`}
        >
          {label}
        </span>
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
          className={`$${
            fieldState?.error ? errorClass : ""
          } w-full border border-primary rounded-xl md:border-primary md:bg-white text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 outline-none ${className}`}
          format={format}
          {...rest}
        />
      ) : type === "number" ? (
        <div
          className={`$${
            fieldState?.error ? errorClass : ""
          } ${parentClassName} flex items-center justify-between w-full border-[1px] border-primary rounded-xl bg-white transition-all duration-300`}
        >
          <NumericFormat
            decimalScale={decimalScale}
            style={{ fontSize: "16px" }}
            onValueChange={(values) =>
              field?.onChange(+values.value.replace("_", "")?.toString())
            }
            value={+field?.value!}
            className={`w-full border-[1px] border-primary rounded-xl md:border-primary bg-white text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${className}`}
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
          className={`$${
            fieldState?.error ? errorClass : ""
          } w-full bg-white border outline-none border-primary rounded-xl text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${className}`}
        />
      )}

      <div className="absolute w-full items-center flex justify-center flex-row min-h-[24px]">
        <AnimatePresence>
          {fieldState?.error && Object.keys(fieldState?.error)?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="w-full flex justify-center"
            >
              <ErrorText error={fieldState?.error} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </label>
  );
};

export default Input;
