"use client";

import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

type Size = "sm" | "md" | "lg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  size?: Size;
  closeOnOverlay?: boolean;
  hideCloseButton?: boolean;
  className?: string;
  contentClassName?: string;
  footer?: ReactNode;
};

const sizeClasses: Record<Size, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

const Modal: FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  title,
  size = "md",
  closeOnOverlay = true,
  hideCloseButton,
  className,
  contentClassName,
  footer,
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!mounted) return null;
  if (typeof document === "undefined") return null;

  const handleOverlayClick = () => {
    if (!closeOnOverlay) return;
    onClose();
  };

  const stopPropagation: React.MouseEventHandler<HTMLDivElement> = (e) =>
    e.stopPropagation();

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={twMerge(
            "fixed inset-0 z-50 flex items-center justify-center",
            "bg-black/40 backdrop-blur-[1px]"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            onClick={stopPropagation}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.18 }}
            className={twMerge(
              "w-full rounded-2xl bg-white shadow-xl",
              "mx-4",
              sizeClasses[size],
              className
            )}
          >
            {(title || !hideCloseButton) && (
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <div className="mr-4">
                  {typeof title === "string" ? (
                    <h2 className="text-base md:text-lg font-semibold text-gray-900">
                      {title}
                    </h2>
                  ) : (
                    title
                  )}
                </div>

                {!hideCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Закрыть"
                  >
                    <svg
                      width="18"
                      height="18"
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
              </div>
            )}

            <div
              className={twMerge(
                "px-5 py-4 max-h-[70vh] overflow-y-auto",
                contentClassName
              )}
            >
              {children}
            </div>

            {footer && (
              <div className="px-5 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
