"use client";

import { FC, TextareaHTMLAttributes } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import ErrorText from "../ErrorText/ErrorText";

type TextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = {
  className?: string;
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  wrapperClassName?: string;
} & TextareaAttributes;

const Textarea: FC<Props> = ({
  className,
  field,
  fieldState,
  wrapperClassName,
  ...rest
}) => {
  const hasError = !!fieldState?.error;

  const base =
    "w-full resize-none h-[120px] bg-white rounded-[15px] text-black " +
    "text-sm md:text-base font-normal placeholder:text-gray-400 block p-[12px] " +
    "transition-all duration-200 border";

  const normalBorder =
    "border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0 " +
    "focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]";

  const errorBorder =
    "border-danger focus:border-danger focus:shadow-[0_0_0_3px_rgba(220,38,38,0.15)]";

  const disabledStyles =
    "bg-gray-100 text-gray-400 cursor-not-allowed opacity-75";

  return (
    <div className={twMerge("relative w-full", wrapperClassName)}>
      <textarea
        {...field}
        {...rest}
        className={twMerge(
          base,
          hasError ? errorBorder : normalBorder,
          rest.disabled && disabledStyles,
          className
        )}
      />

      <div className="absolute w-full flex justify-center min-h-6 mt-1">
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

export default Textarea;
