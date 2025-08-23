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

type Size = "xs" | "sm" | "md";

type Props = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  debounceTimeMs?: number;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant: "primary" | "secondary" | "danger" | "link" | "tab";
  size?: Size;
  icon?: string;
} & MotionButtonProps;

const sizeClasses: Record<Size, string> = {
  xs: "px-3 py-1.5 text-xs rounded-lg",
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-2xl",
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  debounceTimeMs = 500,
  className,
  isLoading,
  variant,
  size = "md",
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

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-primary/10 text-primary hover:bg-primary/20 focus:ring-primary",
    danger: "bg-danger/10 text-danger hover:bg-danger/20 focus:ring-danger",
    link: "bg-transparent text-primary hover:underline focus:ring-primary px-2 py-1",
    tab: "bg-primary text-white focus:ring-primary px-5 py-2 rounded-full",
  }[variant];

  const buttonClasses = [
    "relative inline-flex items-center justify-center font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    sizeClasses[size],
    variantClasses,
    className,
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
                size === "xs"
                  ? "w-3 h-3"
                  : size === "sm"
                  ? "w-4 h-4"
                  : "w-5 h-5"
              }`}
            />
          )}
        </>
      )}
    </motion.button>
  );
};

export default Button;
