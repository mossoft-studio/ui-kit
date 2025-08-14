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
  const hasError = !!fieldState?.error;

  const baseField =
    "h-10 w-full bg-white text-black placeholder:text-dark-gray " +
    "text-sm md:text-base font-normal rounded-xl " +
    "border border-gray transition-[border,box-shadow] duration-200 outline-none " +
    "focus:border-primary focus:shadow-[0_0_0_3px_rgba(20,162,184,0.10)] " +
    "hover:border-primary/70 " +
    "disabled:bg-gray-trans disabled:text-dark-gray disabled:cursor-not-allowed";
  const errorClass =
    "!border-danger focus:shadow-[0_0_0_3px_rgba(254,72,69,0.12)] hover:!border-danger";
  const padding = "px-3";

  return (
    <label className={`relative w-full ${wrapperClassName || ""}`}>
      {label && (
        <span
          className={`absolute left-[14px] -top-[10px] z-[1] px-[6px] bg-white text-xs md:text-sm text-primary ${
            labelClassName || ""
          }`}
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
          className={`${baseField} ${padding} ${hasError ? errorClass : ""} ${
            className || ""
          }`}
          format={format}
          aria-invalid={hasError || undefined}
          {...rest}
        />
      ) : type === "number" ? (
        <div
          className={`flex items-center justify-between rounded-xl border border-gray bg-white ${
            numberWrapperClassname || ""
          } ${hasError ? errorClass : ""}`}
        >
          <NumericFormat
            decimalScale={decimalScale}
            style={{ fontSize: "16px" }}
            onValueChange={(values) =>
              field?.onChange(+values.value.replace("_", "")?.toString())
            }
            value={
              typeof field?.value === "number"
                ? field?.value
                : Number(field?.value ?? 0)
            }
            className={`h-10 flex-1 bg-transparent border-0 ${padding} text-black placeholder:text-dark-gray rounded-xl focus:outline-none`}
            aria-invalid={hasError || undefined}
            {...rest}
            {...MaskRules["number"]}
          />
          {postfix ? (
            <span className="pr-3 text-sm md:text-base text-dark-gray select-none">
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
          className={`${baseField} ${padding} ${hasError ? errorClass : ""} ${
            className || ""
          }`}
          aria-invalid={hasError || undefined}
        />
      )}

      <div className="absolute w-full items-center flex justify-center flex-row min-h-[24px]">
        <AnimatePresence>
          {fieldState?.error && Object.keys(fieldState.error).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="w-full flex justify-center"
            >
              <ErrorText error={fieldState.error} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </label>
  );
};

export default Input;
