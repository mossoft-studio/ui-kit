"use client";

import { FC } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import ErrorText from "../ErrorText/ErrorText";

type Size = "sm" | "md";

type Option<T extends string> = {
  label: string;
  value: T;
  description?: string;
  disabled?: boolean;
};

type Props<
  TFieldValues extends FieldValues = any,
  TName extends FieldPath<TFieldValues> = any,
  TVal extends string = string
> = {
  options: Option<TVal>[];
  value?: TVal;
  onChange?: (value: TVal) => void;
  size?: Size;
  direction?: "row" | "column";
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
  field?: ControllerRenderProps<TFieldValues, TName>;
  fieldState?: ControllerFieldState;
  name?: string;
};

const RadioGroup: FC<Props> = ({
  options,
  value,
  onChange,
  size = "md",
  direction = "column",
  disabled,
  className,
  wrapperClassName,
  field,
  fieldState,
}) => {
  const hasError = !!fieldState?.error;

  const currentValue =
    (field?.value as string | undefined) ?? value ?? undefined;

  const handleChange = (val: string) => {
    if (disabled) return;
    field?.onChange?.(val);
    onChange?.(val as any);
  };

  const radioSize =
    size === "sm"
      ? { outer: "w-4 h-4", inner: "w-2 h-2" }
      : { outer: "w-5 h-5", inner: "w-2.5 h-2.5" };

  return (
    <div className={twMerge("flex flex-col gap-1", wrapperClassName)}>
      <div
        className={twMerge(
          "flex gap-3",
          direction === "column" && "flex-col",
          direction === "row" && "flex-row flex-wrap",
          className
        )}
      >
        {options.map((opt) => {
          const isChecked = currentValue === opt.value;
          const isDisabled = disabled || opt.disabled;

          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleChange(opt.value)}
              disabled={isDisabled}
              className={twMerge(
                "flex items-center gap-2 text-left select-none",
                "transition-opacity duration-150",
                isDisabled && "opacity-60 cursor-not-allowed"
              )}
            >
              <span
                className={twMerge(
                  "relative rounded-full border flex items-center justify-center transition-colors duration-150",
                  radioSize.outer,
                  isChecked
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-white"
                )}
              >
                <span
                  className={twMerge(
                    "rounded-full bg-blue-600 transition-transform duration-150",
                    radioSize.inner,
                    isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                />
              </span>

              <span className="flex flex-col">
                <span className="text-sm md:text-base text-gray-900">
                  {opt.label}
                </span>
                {opt.description && (
                  <span className="text-xs md:text-sm text-gray-500">
                    {opt.description}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div className="min-h-5 flex justify-center">
        <AnimatePresence>
          {hasError && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="w-full flex justify-center"
            >
              <ErrorText error={fieldState!.error} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RadioGroup;
