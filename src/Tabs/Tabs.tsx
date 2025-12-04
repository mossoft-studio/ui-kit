"use client";

import { FC, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";

type Size = "sm" | "md";

export type TabItem = {
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
};

type Props = {
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  wrapperClassName?: string;
};

const Tabs: FC<Props> = ({
  items,
  value,
  onChange,
  size = "md",
  fullWidth = false,
  className,
  wrapperClassName,
}) => {
  const [internalValue, setInternalValue] = useState(value ?? items[0]?.value);

  const currentValue = value ?? internalValue;

  const handleChange = (val: string, disabled?: boolean) => {
    if (disabled) return;
    setInternalValue(val);
    onChange?.(val);
  };

  const sz =
    size === "sm"
      ? { py: "py-1.5", px: "px-3", text: "text-sm" }
      : { py: "py-2", px: "px-4", text: "text-sm md:text-base" };

  const activeIndex = useMemo(
    () => items.findIndex((t) => t.value === currentValue),
    [items, currentValue]
  );

  return (
    <div className={twMerge("w-full", wrapperClassName)}>
      <div
        className={twMerge(
          "relative inline-flex items-center rounded-xl bg-gray-100 p-1",
          "overflow-x-auto no-scrollbar",
          fullWidth && "w-full",
          className
        )}
      >
        {items.map((tab, index) => {
          const isActive = tab.value === currentValue;
          const isDisabled = tab.disabled;

          return (
            <button
              key={tab.value}
              type="button"
              disabled={isDisabled}
              onClick={() => handleChange(tab.value, tab.disabled)}
              className={twMerge(
                "relative inline-flex items-center gap-2 whitespace-nowrap rounded-lg",
                sz.py,
                sz.px,
                sz.text,
                "font-medium transition-colors duration-150",
                isActive
                  ? "text-blue-700"
                  : "text-gray-600 hover:text-gray-800",
                isDisabled && "opacity-60 cursor-not-allowed",
                fullWidth && "flex-1 justify-center"
              )}
            >
              {tab.icon && (
                <Icon
                  name={tab.icon}
                  className={twMerge(
                    "w-4 h-4",
                    isActive ? "text-blue-700" : "text-gray-500"
                  )}
                />
              )}
              <span>{tab.label}</span>
            </button>
          );
        })}

        {activeIndex >= 0 && (
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="absolute top-1 bottom-1 rounded-lg bg-white shadow-sm"
            style={{
              left: `calc(${activeIndex} * 100% / ${items.length})`,
              width: `calc(100% / ${items.length})`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Tabs;
