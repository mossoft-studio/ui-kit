import React, { SelectHTMLAttributes } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";

export type SelectOptions = {
  value: any;
  label: string;
};

type SelectAttributes = SelectHTMLAttributes<HTMLSelectElement>;

type Props = {
  options: SelectOptions[] | undefined;
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  className?: string;
  placeholder?: string;
  parentClassName?: string;
  wrapperClassName?: string;
  label?: string;
  labelClassName?: string;
  formState?: UseFormStateReturn<any>;
} & SelectAttributes;

const Select: React.FC<Props> = ({
  placeholder,
  options,
  className,
  field,
  fieldState,
  wrapperClassName,
  labelClassName,
  parentClassName,
  formState,
  label,
  ...rest
}) => {
  const errorClass = "!border-danger";

  return (
    <label className={`relative w-full ${wrapperClassName}`}>
      {label && (
        <span className={`text-primary  ${labelClassName}`}>{label}</span>
      )}
      <div
        className={`relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${parentClassName}`}
      >
        <select
          {...field}
          {...rest}
          defaultValue={""}
          className={`w-full ${
            fieldState?.error ? errorClass : ""
          } cursor-pointer appearance-none bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${className}`}
        >
          <option value="">{placeholder}</option>
          {options?.map((option, i) => (
            <option value={option.value} key={i} className="text-black">
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="absolute w-full items-center flex justify-center flex-row">
        {fieldState?.error && Object.keys(fieldState?.error)?.length && (
          <ErrorText error={fieldState?.error} />
        )}
      </div>
    </label>
  );
};

export default Select;
