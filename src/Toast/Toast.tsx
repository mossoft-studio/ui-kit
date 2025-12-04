"use client";

import { FC, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";

type Variant = "success" | "error" | "info" | "warning";

type Props = {
  id?: string | number;
  variant?: Variant;
  title?: string;
  description?: string;
  onClose?: () => void;
  autoCloseMs?: number;
  className?: string;
};

const variantStyles: Record<
  Variant,
  { container: string; icon: string; iconName: string }
> = {
  success: {
    container: "bg-green-50 border-green-200 text-green-800",
    icon: "text-green-600",
    iconName: "check",
  },
  error: {
    container: "bg-red-50 border-red-200 text-red-800",
    icon: "text-red-600",
    iconName: "close",
  },
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-800",
    icon: "text-blue-600",
    iconName: "info",
  },
  warning: {
    container: "bg-amber-50 border-amber-200 text-amber-800",
    icon: "text-amber-600",
    iconName: "alert",
  },
};

const Toast: FC<Props> = ({
  variant = "info",
  title,
  description,
  onClose,
  autoCloseMs = 4000,
  className,
}) => {
  useEffect(() => {
    if (!autoCloseMs || !onClose) return;
    const timer = setTimeout(onClose, autoCloseMs);
    return () => clearTimeout(timer);
  }, [autoCloseMs, onClose]);

  const styles = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 40, y: 10 }}
      transition={{ duration: 0.2 }}
      className={twMerge(
        "flex w-full max-w-sm items-start gap-3 rounded-xl border px-4 py-3 shadow-lg bg-white/90",
        styles.container,
        className
      )}
    >
      <div className="mt-0.5">
        <Icon
          name={styles.iconName}
          className={twMerge("w-5 h-5", styles.icon)}
        />
      </div>

      <div className="flex-1 min-w-0">
        {title && (
          <div className="text-sm font-semibold leading-snug truncate">
            {title}
          </div>
        )}
        {description && (
          <div className="mt-0.5 text-xs text-gray-700 leading-snug">
            {description}
          </div>
        )}
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-black/5 transition-colors"
          aria-label="Закрыть"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="pointer-events-none"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </motion.div>
  );
};

export default Toast;
