import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
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
  padding: string;
  text: string;
  postfixPadding: string;
  innerTopPad: string;
};
const sizeStyles: Record<Size, SizeOptions> = {
  sm: {
    height: "h-8",
    padding: "px-2",
    text: "text-sm",
    postfixPadding: "pr-2",
    innerTopPad: "pt-5",
  },
  md: {
    height: "h-10",
    padding: "px-3",
    text: "text-base",
    postfixPadding: "pr-3",
    innerTopPad: "pt-6",
  },
  lg: {
    height: "h-12",
    padding: "px-4",
    text: "text-lg",
    postfixPadding: "pr-4",
    innerTopPad: "pt-7",
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
  requiredMark,
  onFocus,
  onBlur,
  ...rest
}: Props<TFieldValues, TName>) => {
  const hasError = !!fieldState?.error;
  const sz = sizeStyles[size];

  const [focused, setFocused] = useState(false);
  const rawValue =
    field?.value ?? (rest as any)?.value ?? (rest as any)?.defaultValue;
  const hasContent = useMemo(() => {
    if (rawValue === 0) return true;
    return !!rawValue && String(rawValue).length > 0;
  }, [rawValue]);

  const baseField =
    "w-full bg-white text-black placeholder:text-dark-gray " +
    `${sz.text} font-normal rounded-xl border transition-[border,box-shadow] duration-200 outline-none ` +
    "border-gray focus:border-primary focus:shadow-[0_0_0_3px_rgba(20,162,184,0.10)] " +
    "disabled:bg-gray-trans disabled:text-dark-gray disabled:cursor-not-allowed";

  const errorClass =
    "!border-danger focus:shadow-[0_0_0_3px_rgba(254,72,69,0.12)]";

  const FloatingLabel = () => {
    if (!label) return null;
    const floated = focused || hasContent;
    return (
      <span
        className={
          "pointer-events-none absolute left-3 -top-2 z-[1] inline-flex items-center " +
          "px-1 rounded bg-white transition-all duration-200 " +
          (floated
            ? "text-primary scale-90 -translate-y-1"
            : "text-dark-gray opacity-80 translate-y-3") +
          " " +
          (labelClassName || "")
        }
      >
        {label}
        {requiredMark ? <span className="ml-0.5 text-danger">*</span> : null}
      </span>
    );
  };

  const handleFocus = (e: React.FocusEvent<any>) => {
    setFocused(true);
    onFocus?.(e as any);
    (rest as any)?.onFocus?.(e as any);
  };
  const handleBlur = (e: React.FocusEvent<any>) => {
    setFocused(false);
    onBlur?.(e as any);
    (rest as any)?.onBlur?.(e as any);
  };

  return (
    <label className={`relative w-full ${wrapperClassName || ""}`}>
      <FloatingLabel />

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
          className={`${baseField} ${sz.padding} ${sz.innerTopPad} ${
            hasError ? errorClass : ""
          } ${className || ""}`}
          aria-invalid={hasError || undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
            className={`flex-1 bg-transparent border-0 ${sz.padding} ${sz.innerTopPad} ${sz.text} placeholder:text-dark-gray focus:outline-none`}
            aria-invalid={hasError || undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
          className={`${baseField} ${sz.padding} ${sz.innerTopPad} ${
            hasError ? errorClass : ""
          } ${className || ""}`}
          aria-invalid={hasError || undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
