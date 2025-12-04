"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

export type Step = {
  id: string;
  label: string;
  description?: string;
  disabled?: boolean;
};

type Props = {
  steps: Step[];
  currentStepId: string;
  onStepChange?: (id: string) => void;
  clickable?: boolean;
  className?: string;
  stepClassName?: string;
};

const Stepper: FC<Props> = ({
  steps,
  currentStepId,
  onStepChange,
  clickable = true,
  className,
  stepClassName,
}) => {
  const currentIndex = steps.findIndex((s) => s.id === currentStepId);

  return (
    <div className={twMerge("w-full flex flex-col gap-6", className)}>
      <div className="flex items-start justify-between gap-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;

          const status: "completed" | "current" | "upcoming" = isCompleted
            ? "completed"
            : isCurrent
            ? "current"
            : "upcoming";

          const canClick = clickable && !step.disabled && !!onStepChange;

          return (
            <button
              key={step.id}
              type="button"
              disabled={!canClick}
              onClick={() => canClick && onStepChange?.(step.id)}
              className={twMerge(
                "flex-1 flex flex-col items-center gap-2 group focus-visible:outline-none",
                canClick && "cursor-pointer",
                !canClick && "cursor-default",
                stepClassName
              )}
            >
              {/* линия */}
              <div className="relative flex w-full items-center">
                {/* левая линия (кроме первого шага) */}
                {index > 0 && (
                  <div className="absolute left-0 right-1/2 h-[2px]">
                    <div
                      className={twMerge(
                        "h-full w-full bg-gray-200",
                        index <= currentIndex && "bg-blue-500"
                      )}
                    />
                  </div>
                )}

                {/* правая линия (кроме последнего шага) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 right-0 h-[2px]">
                    <div
                      className={twMerge(
                        "h-full w-full bg-gray-200",
                        index < currentIndex && "bg-blue-500"
                      )}
                    />
                  </div>
                )}

                {/* кружок шага */}
                <div className="relative z-10 mx-auto">
                  <div
                    className={twMerge(
                      "flex h-9 w-9 items-center justify-center rounded-full border bg-white text-sm font-medium transition-colors duration-150",
                      status === "completed" &&
                        "border-blue-500 bg-blue-500 text-white",
                      status === "current" &&
                        "border-blue-500 text-blue-600 bg-white shadow-md",
                      status === "upcoming" && "border-gray-300 text-gray-500",
                      step.disabled && "opacity-50"
                    )}
                  >
                    <AnimatePresence mode="wait">
                      {status === "completed" ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.6, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <motion.span
                          key="index"
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.6, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          {index + 1}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* подписи */}
              <div className="flex flex-col items-center text-center max-w-[160px]">
                <span
                  className={twMerge(
                    "text-xs md:text-sm font-medium",
                    status === "current"
                      ? "text-blue-700"
                      : status === "completed"
                      ? "text-gray-700"
                      : "text-gray-500",
                    step.disabled && "opacity-60"
                  )}
                >
                  {step.label}
                </span>
                {step.description && (
                  <span className="mt-0.5 text-[11px] md:text-xs text-gray-500">
                    {step.description}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
