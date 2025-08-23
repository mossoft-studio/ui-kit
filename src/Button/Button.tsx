import {
  FC,
  PropsWithChildren,
  useRef,
  useCallback,
  MouseEvent,
  ButtonHTMLAttributes,
} from "react";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";

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
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "className" | "disabled"
>;

const sizeClasses: Record<Size, string> = {
  xs: "px-3 py-1.5 text-xs rounded-lg",
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-2xl",
};

const loaderSize: Record<Size, number> = { xs: 14, sm: 18, md: 20 };

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
  type = "button",
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

  const variantClasses =
    {
      primary: "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
      secondary:
        "bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/25",
      danger: "bg-danger/10 text-danger hover:bg-danger/20 active:bg-danger/30",
      link: "bg-transparent text-primary hover:underline px-2 py-1 rounded-md",
      tab: "bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 active:bg-primary/80",
    }[variant] || "";

  const classes = [
    "inline-flex items-center justify-center font-semibold",
    "transition-colors duration-200 select-none",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    variant !== "tab" && sizeClasses[size],
    variantClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={debouncedOnClick}
      className={classes}
      {...rest}
    >
      {isLoading ? (
        <Loader style={{ width: loaderSize[size], height: loaderSize[size] }} />
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
    </button>
  );
};

export default Button;
