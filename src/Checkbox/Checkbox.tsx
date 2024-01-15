import React from "react";
import { FieldError } from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";

type Props = {
  onChange: (value: any) => void;

  title: string;
  secondaryTitle?: string;
  labelClassName?: string;
  className?: string;
  titleClassName?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: FieldError;
};

const Checkbox: React.FC<Props> = ({
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
  return (
    <>
      <label
        onClick={(e) => e.stopPropagation()}
        className={`bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${labelClassName}`}
      >
        <span
          className={`text-sm text-dark-gray font-normal ${titleClassName}`}
        >
          {title}
        </span>
        {secondaryTitle && (
          <span className="text-center text-sm text-dark-gray font-normal">
            {secondaryTitle}
          </span>
        )}
        <input
          disabled={disabled}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
          className={className}
        />
      </label>
      {error && <ErrorText error={error} />}
    </>
  );
};

export default Checkbox;
