import {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadType?: "1C" | "";
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
} & ButtonAttributes;

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  className,
  loadType,
  isLoading,
  variant,
  icon,
  disabled,
  ...rest
}) => {
  const [loadMessage, setLoadMessage] = useState("");

  const handleLoadMessage = () => {
    if (isLoading && loadType === "1C") {
      setLoadMessage("Отправляем запрос в 1С");
      setTimeout(
        () =>
          loadType === "1C"
            ? setLoadMessage("1С обрабатывает документы")
            : setLoadMessage(""),
        4000
      );
    }
  };

  useEffect(() => {
    loadType === "1C" && handleLoadMessage();
  }, [isLoading]);

  const buttonClasses = [
    "flex items-center justify-center py-[14px] px-[6px] w-full h-fit rounded-[30px] md:rounded-[15px] text-base md:text-lg uppercase font-medium border border-transparent active:opacity-[0.6] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-[0.6]",
    className,
    variant === "primary" && "text-white bg-primary",
    variant === "secondary" && "text-primary bg-primary bg-opacity-10",
    variant === "small-secondary" &&
      "!normal-case !py-[6px] !text-sm text-primary bg-primary bg-opacity-20",
    variant === "small-primary" &&
      "!normal-case !py-[6px] !text-sm text-white bg-primary",
    variant === "small-danger" &&
      "!normal-case !py-[6px] !text-sm text-danger bg-danger bg-opacity-10",
    variant === "danger" && "text-danger bg-danger bg-opacity-10",
    variant === "link" &&
      "text-primary !text-sm !py-0 !px-1 !normal-case !w-fit",
    variant === "tab" &&
      "bg-primary text-white text-sm md:!text-base !px-5 !py-2 !font-normal rounded-[30px] md:!rounded-[15px] !normal-case !w-fit",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      disabled={disabled || isLoading}
      onClick={onClick}
      className={buttonClasses}
      {...rest}
    >
      {isLoading ? (
        <Loader text={loadType === "1C" ? loadMessage : undefined} />
      ) : (
        children
      )}
      {icon && !isLoading && (
        <Icon
          name={icon}
          className={
            variant.includes("small")
              ? "w-4 h-4 child:w-4 child:h-4"
              : "w-5 h-5 child:w-5 child:h-5"
          }
        />
      )}
    </button>
  );
};

export default Button;
