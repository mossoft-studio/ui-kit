import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./button.module.css";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";

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
    | "small-yellow"
    | "small-secondary"
    | "small-danger"
    | "tab";
  icon?: "plus" | "start" | "pause" | "stop" | "scan";
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  className,
  loadType,
  isLoading,
  variant,
  icon,
  disabled,
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

  console.log(loadMessage);

  const buttonClasses = [
    styles.button,
    className,
    variant === "primary" && styles.primary_button,
    variant === "secondary" && styles.secondary_button,
    variant === "small-secondary" && styles.small_secondary_button,
    variant === "small-primary" && styles.small_primary_button,
    variant === "small-danger" && styles.small_danger_button,
    variant === "danger" && styles.danger_button,
    variant === "small-yellow" && styles.small_yellow_button,
    variant === "link" && styles.link_button,
    variant === "tab" && styles.tab_button,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      disabled={disabled || isLoading}
      className={buttonClasses}
      onClick={onClick}
    >
      {icon && !isLoading && (
        <Icon
          name={icon}
          className={
            variant.includes("small")
              ? "w-4 h-4 child:w-4 child:h-4 mr-1"
              : "w-5 h-5 child:w-5 child:h-5 mr-2"
          }
        />
      )}

      {isLoading ? (
        <Loader text={loadType === "1C" ? loadMessage : undefined} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
