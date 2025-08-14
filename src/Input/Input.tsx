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
  paddingX: string;
  text: string;
  postfixPadding: string;
  labelMb: string;
};
const sizeStyles: Record<Size, SizeOptions> = {
  sm: {
    height: "h-10",
    paddingX: "px-2",
    text: "text-sm",
    postfixPadding: "pr-2",
    labelMb: "mb-1",
  },
  md: {
    height: "h-12",
    paddingX: "px-3",
    text: "text-base",
    postfixPadding: "pr-3",
    labelMb: "mb-1.5",
  },
  lg: {
    height: "h-14",
    paddingX: "px-4",
    text: "text-lg",
    postfixPadding: "pr-4",
    labelMb: "mb-2",
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

export const MaskRules = {
  number: {
    allowNegative: false,
    allowLeadingZeros: false,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand" as const,
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
  className,
  numberWrapperClassname,
  format,
  wrapperClassName,
  decimalScale = 1,
  ...rest
}: Props<TFieldValues, TName>) => {
  const hasError = !!fieldState?.error;
  const sz = sizeStyles[size];

  const baseField =
    `${sz.height} w-full bg-white text-black placeholder:text-dark-gray ${sz.text} ` +
    `rounded-xl border transition-colors duration-150 outline-none ` +
    `border-gray focus:border-primary ` +
    `disabled:bg-gray-trans disabled:text-dark-gray disabled:cursor-not-allowed`;
  const errorClass = "!border-danger focus:border-danger";

  return (
    <label className={`relative block w-full ${wrapperClassName || ""}`}>
      {format ? (
        <PatternFormat
          format={format}
          onValueChange={(values) => {
            field?.onChange(values.value.replace("_", "")?.toString());
          }}
          value={field?.value?.toString()}
          valueIsNumericString
          allowEmptyFormatting
          type={type as "password" | "tel" | "text"}
          mask="_"
          style={{ fontSize: "16px" }}
          className={`${baseField} ${sz.paddingX} ${
            hasError ? errorClass : ""
          } ${className || ""}`}
          aria-invalid={hasError || undefined}
          {...rest}
        />
      ) : type === "number" ? (
        <div
          className={`flex items-center justify-between rounded-xl border bg-white ${
            sz.height
          } ${hasError ? "border-danger" : "border-gray"} ${
            numberWrapperClassname || ""
          }`}
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
            className={`flex-1 bg-transparent border-0 ${sz.paddingX} ${sz.text} placeholder:text-dark-gray focus:outline-none`}
            aria-invalid={hasError || undefined}
            {...rest}
            {...MaskRules.number}
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
          className={`${baseField} ${sz.paddingX} ${
            hasError ? errorClass : ""
          } ${className || ""}`}
          aria-invalid={hasError || undefined}
        />
      )}

      <div className="absolute w-full items-center flex justify-center flex-row min-h-6">
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
