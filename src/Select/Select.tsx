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
const sizeStyles = {
  sm: { height: "h-8", paddingX: "px-2", text: "text-sm" },
  md: { height: "h-10", paddingX: "px-3", text: "text-base" },
  lg: { height: "h-12", paddingX: "px-4", text: "text-lg" },
};

export type SelectOption<T extends string> = { value: T; label: string };

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TVal extends string
> = {
  value: TVal;
  onChange: (v: TVal) => void;
  options: readonly SelectOption<TVal>[];
  placeholder?: string;
  size?: Size;
  field?: ControllerRenderProps<TFieldValues, TName>;
  fieldState?: ControllerFieldState;
  className?: string;
  wrapperClassName?: string;
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
      Math.max(
        0,
        options.findIndex((o) => o.value === value)
      ),
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
    const opt = options[idx];
    if (!opt) return;
    field?.onChange?.(opt.value);
    onChange(opt.value);
    setOpen(false);
  };

  const selected = options[currentIndex];

  return (
    <label className={`block w-full ${wrapperClassName || ""}`}>
      <div ref={rootRef} className="relative">
        <button
          type="button"
          className={cn(
            `${sz.height} ${sz.paddingX} ${sz.text} w-full rounded-xl border bg-white text-black`,
            "flex items-center justify-between border-gray focus:border-primary transition outline-none",
            hasError && "!border-danger focus:border-danger",
            className
          )}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("truncate", !selected && "text-dark-gray")}>
            {selected ? selected.label : placeholder}
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className={cn(
              "ml-2 shrink-0 transition",
              open ? "rotate-180 text-primary" : "text-dark-gray"
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
              "absolute z-50 mt-2 w-full rounded-xl border border-gray bg-white shadow",
              "max-h-72 overflow-auto"
            )}
          >
            {options.map((opt, idx) => {
              const isSelected = opt.value === value;
              const isActive = idx === activeIndex;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    "cursor-pointer px-3 py-2 text-sm flex items-center justify-between",
                    isActive && "bg-gray-trans",
                    isSelected && "text-primary"
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
                      className="text-primary"
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
