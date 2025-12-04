"use client";

import { FC } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import ErrorText from "../ErrorText/ErrorText";

type Props = {
  checked?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  description?: string;
  size?: "sm" | "md";
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
};

const sizes = {
  sm: {
    track: "w-9 h-5",
    thumb: "w-4 h-4",
    translateX: 16,
  },
  md: {
    track: "w-11 h-6",
    thumb: "w-5 h-5",
    translateX: 20,
  },
};

const Switch: FC<Props> = ({
  checked,
  onChange,
  label,
  description,
  size = "md",
  disabled,
  className,
  wrapperClassName,
  field,
  fieldState,
}) => {
  const hasError = !!fieldState?.error;
  const sz = sizes[size];

  const valueFromField =
    typeof field?.value === "boolean" ? field.value : undefined;

  const isChecked = valueFromField ?? checked ?? false;

  const handleToggle = () => {
    if (disabled) return;
    const next = !isChecked;
    field?.onChange?.(next);
    onChange?.(next);
  };

  return (
    <div className={twMerge("flex flex-col gap-1", wrapperClassName)}>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleToggle}
        className={twMerge(
          "flex items-center gap-3 select-none",
          disabled && "cursor-not-allowed opacity-70",
          className
        )}
      >
        <div
          className={twMerge(
            "relative rounded-full transition-colors duration-200",
            "flex items-center",
            sz.track,
            isChecked ? "bg-blue-600" : "bg-gray-300",
            disabled && "bg-gray-300"
          )}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={twMerge(
              "absolute left-0 top-0 bottom-0 my-auto rounded-full bg-white shadow-md",
              sz.thumb
            )}
            style={{
              transform: isChecked
                ? `translateX(${sz.translateX}px)`
                : "translateX(2px)",
            }}
          />
        </div>

        {(label || description) && (
          <div className="flex flex-col items-start text-left">
            {label && (
              <span className="text-sm md:text-base text-gray-900">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs md:text-sm text-gray-500">
                {description}
              </span>
            )}
          </div>
        )}
      </button>

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

export default Switch;
