import {
  FC,
  PropsWithChildren,
  ComponentProps,
  useRef,
  useCallback,
  MouseEvent,
} from "react";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";

type MotionButtonProps = ComponentProps<typeof motion.button>;

type Props = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  debounceTimeMs?: number;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant:
    | "primary"
    | "secondary"
    | "danger"
    | "link"
    | "small-primary"
    | "small-secondary"
    | "small-danger"
    | "tab";
  icon?: string;
} & MotionButtonProps;

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  debounceTimeMs = 500,
  className,
  isLoading,
  variant,
  icon,
  disabled,
  ...rest
}) => {
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (debounceTimerRef.current) return;

      onClick?.(e);

      debounceTimerRef.current = setTimeout(() => {
        debounceTimerRef.current = null;
      }, debounceTimeMs);
    },
    [onClick, debounceTimeMs]
  );

  const buttonClasses = [
    "relative inline-flex items-center justify-center font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    "rounded-2xl px-6 py-3 text-sm md:text-base",
    className,
    variant === "primary" &&
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    variant === "secondary" &&
      "bg-primary/10 text-primary hover:bg-primary/20 focus:ring-primary",
    variant === "danger" &&
      "bg-danger/10 text-danger hover:bg-danger/20 focus:ring-danger",
    variant === "link" &&
      "bg-transparent text-primary hover:underline px-2 py-1 focus:ring-primary",
    variant === "small-primary" &&
      "bg-primary text-white text-xs px-4 py-2 hover:bg-primary/90 focus:ring-primary",
    variant === "small-secondary" &&
      "bg-primary/20 text-primary text-xs px-4 py-2 hover:bg-primary/30 focus:ring-primary",
    variant === "small-danger" &&
      "bg-danger/10 text-danger text-xs px-4 py-2 hover:bg-danger/20 focus:ring-danger",
    variant === "tab" &&
      "bg-primary text-white text-sm md:text-base px-5 py-2 rounded-full focus:ring-primary",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.button
      disabled={disabled || isLoading}
      onClick={debouncedOnClick}
      className={buttonClasses}
      {...rest}
      whileTap={{ scale: 0.96 }}
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : undefined}
    >
      {isLoading ? (
        <Loader style={{ width: 20, height: 20 }} />
      ) : (
        <>
          {children}
          {icon && (
            <Icon
              name={icon}
              className={`ml-2 ${
                variant.includes("small") ? "w-4 h-4" : "w-5 h-5"
              }`}
            />
          )}
        </>
      )}
    </motion.button>
  );
};

export default Button;
