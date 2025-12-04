import React, { FC, MouseEvent } from "react";
import { FieldError } from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";

type Props = {
  onChange: (value: boolean) => void;
  title: string;
  secondaryTitle?: string;
  labelClassName?: string;
  className?: string;
  titleClassName?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: FieldError;
};

const Checkbox: FC<Props> = ({
  onChange,
  title,
  secondaryTitle,
  labelClassName,
  className,
  titleClassName,
  error,
  checked,
  disabled,
}) => {
  const handleClickLabel = (e: MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation();
  };

  const baseLabelClasses =
    "w-fit flex items-center gap-2 rounded-full md:rounded-2xl px-4 py-1.5 md:py-2 " +
    "bg-gray-100 hover:bg-gray-200 active:bg-gray-300 " +
    "transition-colors duration-200 ease-out cursor-pointer";

  const labelClasses = [
    baseLabelClasses,
    disabled && "cursor-not-allowed opacity-60",
    labelClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const titleClasses = ["text-sm text-gray-800 font-normal", titleClassName]
    .filter(Boolean)
    .join(" ");

  const checkboxClasses = [
    "w-4 h-4 rounded border-gray-300 text-blue-600",
    "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none",
    "transition-colors duration-200 ease-out",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <label onClick={handleClickLabel} className={labelClasses}>
        <span className={titleClasses}>{title}</span>
        {secondaryTitle && (
          <span className="text-sm text-gray-600 font-normal text-center">
            {secondaryTitle}
          </span>
        )}
        <input
          disabled={disabled}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
          className={checkboxClasses}
        />
      </label>
      {error && <ErrorText error={error} />}
    </>
  );
};

export default Checkbox;
