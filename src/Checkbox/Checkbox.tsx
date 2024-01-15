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
          className={
            className
              ? className
              : "appearance-none flex-shrink-0 relative bg-transparent h-[23px] w-[23px] transition-all cursor-pointer rounded-full inline-flex text-center justify-center items-center border border-dark-gray checked:bg-main-green checked:border-main-green after:h-5 after:w-5 after:absolute checked:after:bg-[url('/icons/checked.svg')]"
          }
        />
      </label>
      {error && <ErrorText error={error} />}
    </>
  );
};

export default Checkbox;
