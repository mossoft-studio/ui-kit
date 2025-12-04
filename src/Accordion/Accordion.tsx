"use client";

import { FC, ReactNode, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Icon/Icon";

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
  subtitle?: string;
  leftIcon?: string;
  disabled?: boolean;
};

type Props = {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpenIds?: string[];
  defaultOpenId?: string;
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
};

const Accordion: FC<Props> = ({
  items,
  multiple = false,
  defaultOpenIds,
  defaultOpenId,
  className,
  itemClassName,
  headerClassName,
  contentClassName,
}) => {
  const initialOpen = useMemo(() => {
    if (multiple) {
      if (defaultOpenIds && defaultOpenIds.length) return defaultOpenIds;
      return [];
    } else {
      if (defaultOpenId) return [defaultOpenId];
      if (items[0]) return [items[0].id];
      return [];
    }
  }, [multiple, defaultOpenIds, defaultOpenId, items]);

  const [openIds, setOpenIds] = useState<string[]>(initialOpen);

  const toggleId = (id: string, disabled?: boolean) => {
    if (disabled) return;

    setOpenIds((prev) => {
      const isOpen = prev.includes(id);

      if (multiple) {
        if (isOpen) return prev.filter((x) => x !== id);
        return [...prev, id];
      } else {
        if (isOpen) return [];
        return [id];
      }
    });
  };

  return (
    <div className={twMerge("w-full space-y-2", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={twMerge(
              "rounded-2xl border border-gray-200 bg-white overflow-hidden",
              item.disabled && "opacity-60",
              itemClassName
            )}
          >
            <button
              type="button"
              onClick={() => toggleId(item.id, item.disabled)}
              disabled={item.disabled}
              className={twMerge(
                "w-full flex items-center gap-3 px-4 py-3 md:px-5 md:py-4",
                "text-left transition-colors duration-150",
                "hover:bg-gray-50",
                headerClassName
              )}
            >
              {item.leftIcon && (
                <Icon
                  name={item.leftIcon}
                  className={twMerge(
                    "w-5 h-5 flex-shrink-0",
                    isOpen ? "text-blue-600" : "text-gray-400"
                  )}
                />
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base font-medium text-gray-900 truncate">
                    {item.title}
                  </span>
                </div>
                {item.subtitle && (
                  <div className="mt-0.5 text-xs md:text-sm text-gray-500 line-clamp-2">
                    {item.subtitle}
                  </div>
                )}
              </div>

              <Icon
                name="chevron-down"
                className={twMerge(
                  "w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-150",
                  isOpen && "rotate-180 text-blue-600"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <div
                    className={twMerge(
                      "px-4 pb-4 pt-0 md:px-5 md:pb-4 text-sm md:text-sm text-gray-700 border-t border-gray-100",
                      contentClassName
                    )}
                  >
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
