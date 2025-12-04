"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";
import { motion, AnimatePresence } from "framer-motion";

type Size = "sm" | "md" | "lg";

const sizeStyles: Record<
  Size,
  { height: string; paddingX: string; text: string }
> = {
  sm: { height: "h-10", paddingX: "px-2", text: "text-sm" },
  md: { height: "h-12", paddingX: "px-3", text: "text-base" },
  lg: { height: "h-14", paddingX: "px-4", text: "text-lg" },
};

export type SelectOption<T extends any> = {
  label: string;
  value: T;
};

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TVal extends string
> = {
  value?: TVal;
  onChange?: (v: TVal) => void;
  options?: readonly SelectOption<TVal>[];
  placeholder?: string;
  size?: Size;
  field?: ControllerRenderProps<TFieldValues, TName>;
  fieldState?: ControllerFieldState;
  className?: string;
  wrapperClassName?: string;
  disabled?: boolean;
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const Select = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TVal extends string
>({
  value,
  onChange,
  options,
  placeholder,
  size = "md",
  field,
  disabled,
  fieldState,
  className,
  wrapperClassName,
}: Props<TFieldValues, TName, TVal>) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const sz = sizeStyles[size];
  const hasError = !!fieldState?.error;

  const currentIndex = useMemo(
    () =>
      options?.length
        ? Math.max(
            0,
            options.findIndex((o) => o.value === value)
          )
        : -1,
    [options, value]
  );

  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => setActiveIndex(currentIndex), [currentIndex]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const selectByIndex = (idx: number) => {
    if (!options?.length) return;
    const opt = options[idx];
    if (!opt) return;
    field?.onChange?.(opt.value as any);
    onChange?.(opt.value);
    setOpen(false);
  };

  const selected =
    currentIndex !== -1 && options ? options[currentIndex] : undefined;

  return (
    <label className={cn("relative block w-full", wrapperClassName)}>
      <div ref={rootRef} className="relative">
        <button
          type="button"
          disabled={disabled}
          className={cn(
            `${sz.height} ${sz.paddingX} ${sz.text} w-full rounded-xl bg-white text-black`,
            "flex items-center justify-between border border-gray-300",
            "transition-colors duration-150 outline-none",
            "hover:border-gray-400",
            "focus:border-blue-600",
            disabled && "bg-gray-100 text-gray-400 cursor-not-allowed",
            hasError && "!border-red-500 focus:!border-red-600",
            className
          )}
          onClick={() => !disabled && setOpen((v) => !v)}
        >
          <span className={cn("truncate", !selected && "text-gray-500")}>
            {selected ? selected.label : placeholder}
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className={cn(
              "ml-2 shrink-0 transition-transform duration-150",
              open ? "rotate-180 text-blue-600" : "text-gray-400"
            )}
          >
            <path
              d="M7 10l5 5 5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <ul
            className={cn(
              "absolute z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg",
              "max-h-72 overflow-auto"
            )}
          >
            {options?.map((opt, idx) => {
              const isSelected = opt.value === value;
              const isActive = idx === activeIndex;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    "cursor-pointer px-3 py-2 text-sm flex items-center justify-between",
                    isActive && "bg-gray-100",
                    isSelected && "text-blue-600"
                  )}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => selectByIndex(idx)}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="text-blue-600"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="absolute w-full flex justify-center min-h-6">
        <AnimatePresence>
          {hasError && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="w-full flex justify-center"
            >
              <ErrorText error={fieldState!.error} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </label>
  );
};

export default Select;
