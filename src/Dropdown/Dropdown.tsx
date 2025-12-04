"use client";

import { FC, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Icon/Icon";

export type DropdownItem = {
  label: string;
  value: string;
  icon?: string;
  danger?: boolean;
  disabled?: boolean;
};

type Size = "sm" | "md";

type Props = {
  items: DropdownItem[];
  onSelect: (value: string) => void;
  label?: string;
  icon?: string;
  size?: Size;
  align?: "left" | "right";
  className?: string;
  menuClassName?: string;
  disabled?: boolean;
  placeholder?: string;
};

const sizeClasses: Record<
  Size,
  { button: string; text: string; icon: string }
> = {
  sm: {
    button: "px-3 py-1.5 text-sm",
    text: "text-sm",
    icon: "w-3.5 h-3.5",
  },
  md: {
    button: "px-4 py-2 text-sm md:text-base",
    text: "text-sm md:text-base",
    icon: "w-4 h-4",
  },
};

const Dropdown: FC<Props> = ({
  items,
  onSelect,
  label,
  icon,
  size = "md",
  align = "left",
  className,
  menuClassName,
  disabled,
  placeholder = "Выбрать",
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownItem | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const sz = sizeClasses[size];

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const handleSelect = (item: DropdownItem) => {
    if (item.disabled) return;
    setSelected(item);
    onSelect(item.value);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={twMerge("relative inline-flex", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        className={twMerge(
          "inline-flex items-center gap-2 rounded-xl border bg-white text-gray-800",
          "border-gray-300 hover:border-gray-400 hover:bg-gray-50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
          "transition-colors duration-150",
          disabled && "opacity-60 cursor-not-allowed",
          sz.button
        )}
      >
        {icon && (
          <Icon name={icon} className={twMerge(sz.icon, "text-gray-500")} />
        )}
        <span className={twMerge("truncate", sz.text)}>
          {selected?.label ?? label ?? placeholder}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className={twMerge(
            "ml-1 text-gray-400 transition-transform duration-150",
            open && "rotate-180"
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.16 }}
            className={twMerge(
              "absolute z-50 mt-2 min-w-[180px] rounded-xl border border-gray-200 bg-white shadow-lg",
              "py-1",
              align === "left" && "left-0",
              align === "right" && "right-0",
              menuClassName
            )}
          >
            {items.map((item) => {
              const isSelected = selected?.value === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  disabled={item.disabled}
                  onClick={() => handleSelect(item)}
                  className={twMerge(
                    "w-full flex items-center gap-2 px-3 py-2 text-sm text-left",
                    "transition-colors duration-100",
                    item.disabled && "opacity-60 cursor-not-allowed",
                    !item.disabled &&
                      (item.danger
                        ? "hover:bg-red-50 text-red-700"
                        : "hover:bg-gray-100"),
                    isSelected && !item.danger && "bg-blue-50 text-blue-700"
                  )}
                >
                  {item.icon && (
                    <Icon
                      name={item.icon}
                      className={twMerge(
                        "w-4 h-4",
                        item.danger ? "text-red-500" : "text-gray-500"
                      )}
                    />
                  )}
                  <span className="truncate">{item.label}</span>
                  {isSelected && !item.danger && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="ml-auto text-blue-600"
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
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
