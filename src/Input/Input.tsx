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

type Size = "sm" | "md" | "lg";

type SizeOptions = {
  height: string;
  padding: string;
  text: string;
  postfixPadding: string;
};

const sizeStyles: Record<Size, SizeOptions> = {
  sm: {
    height: "h-8",
    padding: "px-2 py-1",
    text: "text-sm",
    postfixPadding: "pr-2",
  },
  md: {
    height: "h-10",
    padding: "px-3 py-2",
    text: "text-base",
    postfixPadding: "pr-3",
  },
  lg: {
    height: "h-12",
    padding: "px-4 py-3",
    text: "text-lg",
    postfixPadding: "pr-4",
  },
};

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  size?: Size;
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
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

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
  size = "md",
  type,
  field,
  label,
  fieldState,
  postfix,
  labelClassName,
  parentClassName,
  className,
  numberWrapperClassname,
  format,
  wrapperClassName,
  decimalScale = 1,
  ...rest
}: Props<TFieldValues, TName>) => {
  const hasError = !!fieldState?.error;
  const sz: SizeOptions = sizeStyles[size];

  const baseField = `${sz.height} w-full bg-white text-black placeholder:text-dark-gray 
    ${sz.text} font-normal rounded-xl border border-gray 
    transition-[border,box-shadow] duration-200 outline-none 
    focus:border-primary focus:shadow-[0_0_0_3px_rgba(20,162,184,0.10)] 
    disabled:bg-gray-trans disabled:text-dark-gray disabled:cursor-not-allowed`;

  const errorClass =
    "!border-danger focus:shadow-[0_0_0_3px_rgba(254,72,69,0.12)] hover:!border-danger";

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
          className={`${baseField} ${sz.padding} ${
            hasError ? errorClass : ""
          } ${className || ""}`}
          format={format}
          aria-invalid={hasError || undefined}
          {...rest}
        />
      ) : type === "number" ? (
        <div
          className={`flex items-center justify-between rounded-xl border border-gray bg-white ${
            numberWrapperClassname || ""
          } ${sz.height} ${hasError ? errorClass : ""}`}
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
            className={`flex-1 bg-transparent border-0 ${sz.padding} ${sz.text} placeholder:text-dark-gray focus:outline-none`}
            aria-invalid={hasError || undefined}
            {...rest}
            {...MaskRules["number"]}
          />
          {postfix ? (
            <span
              className={`${sz.postfixPadding} ${sz.text} text-dark-gray select-none`}
            >
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
          className={`${baseField} ${sz.padding} ${
            hasError ? errorClass : ""
          } ${className || ""}`}
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
