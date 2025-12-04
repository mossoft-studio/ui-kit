import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useId,
  useMemo,
  useState,
} from "react";
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
  labelLeft: string;
};

const sizeStyles: Record<Size, SizeOptions> = {
  sm: {
    height: "h-10",
    paddingX: "px-2",
    text: "text-sm",
    postfixPadding: "pr-2",
    labelMb: "mb-1",
    labelLeft: "left-2",
  },
  md: {
    height: "h-12",
    paddingX: "px-3",
    text: "text-base",
    postfixPadding: "pr-3",
    labelMb: "mb-1.5",
    labelLeft: "left-3",
  },
  lg: {
    height: "h-14",
    paddingX: "px-4",
    text: "text-lg",
    postfixPadding: "pr-4",
    labelMb: "mb-2",
    labelLeft: "left-4",
  },
};

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  size?: Size;
  type?: HTMLInputTypeAttribute | "password" | "tel" | "text";
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
  floatingLabel?: boolean;
  requiredMark?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export const MaskRules = {
  number: {
    allowNegative: false,
    allowLeadingZeros: false,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand" as const,
  },
};

const isEmpty = (v: unknown) =>
  v === undefined || v === null || (typeof v === "string" && v.trim() === "");

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
  floatingLabel = false,
  requiredMark,
  id,
  ...rest
}: Props<TFieldValues, TName>) => {
  const hasError = !!fieldState?.error;
  const sz = sizeStyles[size];
  const autoId = useId();
  const inputId = id || autoId;

  const [focused, setFocused] = useState(false);

  const currentValue =
    field?.value ?? (rest as any)?.value ?? rest.defaultValue;

  const hasValue = useMemo(
    () => !isEmpty(currentValue) || currentValue === 0,
    [currentValue]
  );

  const shouldUseFloating = floatingLabel && !!label;
  const active =
    shouldUseFloating && (focused || hasValue || !!rest.placeholder);

  const effectivePlaceholder = shouldUseFloating
    ? active
      ? rest.placeholder
      : ""
    : rest.placeholder;

  const baseField =
    `${sz.height} w-full bg-white text-black placeholder:text-gray-500 ${sz.text} ` +
    `rounded-xl border outline-none ` +
    `transition-all duration-150 ` +
    `border-gray-300 hover:border-gray-400 focus:border-gray-500 ` +
    `disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`;

  const errorClass = "!border-red-500 focus:!border-red-600";

  const onFocus = (e: React.FocusEvent<any>) => {
    setFocused(true);
    rest.onFocus?.(e);
  };
  const onBlur = (e: React.FocusEvent<any>) => {
    setFocused(false);
    field?.onBlur?.();
    rest.onBlur?.(e);
  };

  return (
    <div className={`relative w-full ${wrapperClassName || ""}`}>
      {shouldUseFloating && (
        <motion.label
          htmlFor={inputId}
          className={`pointer-events-none absolute ${sz.labelLeft} z-[5] ${
            labelClassName || ""
          }`}
          initial={false}
          animate={
            active
              ? { top: -10, scale: 0.85, opacity: 1 }
              : { top: "50%", translateY: "-50%", scale: 1, opacity: 0.9 }
          }
          transition={{ type: "tween", duration: 0.18 }}
        >
          <span className="px-1 rounded bg-white text-gray-600">
            {label}
            {requiredMark ? (
              <span className="text-red-500 ml-0.5">*</span>
            ) : null}
          </span>
        </motion.label>
      )}

      {format ? (
        <PatternFormat
          id={inputId}
          placeholder={effectivePlaceholder}
          format={format}
          onValueChange={(values) => {
            field?.onChange(values.value.replace("_", ""));
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
          onFocus={onFocus}
          onBlur={onBlur}
          {...rest}
        />
      ) : type === "number" ? (
        <div
          className={
            `flex items-center justify-between rounded-xl border bg-white ${sz.height} transition-all duration-150 ` +
            `${
              hasError
                ? "border-red-500 focus-within:border-red-600"
                : "border-gray-300 hover:border-gray-400 focus-within:border-gray-500"
            } ` +
            `${numberWrapperClassname || ""}`
          }
        >
          <NumericFormat
            id={inputId}
            placeholder={effectivePlaceholder}
            decimalScale={decimalScale}
            style={{ fontSize: "16px" }}
            onValueChange={(values) =>
              field?.onChange(Number(values.value.replace("_", "")))
            }
            value={
              typeof field?.value === "number"
                ? field?.value
                : field?.value === undefined || field?.value === null
                ? undefined
                : Number(field?.value)
            }
            className={`flex-1 bg-transparent border-0 ${sz.paddingX} ${
              sz.text
            } placeholder:text-gray-500 focus:outline-none ${className || ""}`}
            aria-invalid={hasError || undefined}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
            {...MaskRules.number}
          />

          {postfix ? (
            <span
              className={`${sz.postfixPadding} ${sz.text} text-gray-500 select-none`}
            >
              {postfix}
            </span>
          ) : null}
        </div>
      ) : (
        //
        // DEFAULT INPUT
        //
        <input
          id={inputId}
          {...field}
          {...rest}
          type={type}
          placeholder={effectivePlaceholder}
          style={{ fontSize: "16px" }}
          className={`${baseField} ${sz.paddingX} ${
            hasError ? errorClass : ""
          } ${className || ""}`}
          aria-invalid={hasError || undefined}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}

      <div className="absolute w-full flex items-center justify-center min-h-6">
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
    </div>
  );
};

export default Input;
