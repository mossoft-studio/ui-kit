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
      primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",

      secondary:
        "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400",

      danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",

      link:
        "bg-transparent text-blue-600 px-2 py-1 rounded-md " +
        "hover:text-blue-700 hover:underline active:text-blue-800",

      tab:
        "bg-blue-600 text-white px-5 py-2 rounded-full " +
        "hover:bg-blue-700 active:bg-blue-800",
    }[variant] || "";

  const classes = [
    "inline-flex items-center justify-center cursor-pointer font-semibold",
    "transition-opacity transition-colors duration-200 ease-out",
    "hover:opacity-90 active:opacity-80",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
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
              className={
                size === "xs"
                  ? "ml-2 w-3 h-3"
                  : size === "sm"
                  ? "ml-2 w-4 h-4"
                  : "ml-2 w-5 h-5"
              }
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
