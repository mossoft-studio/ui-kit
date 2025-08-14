import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";

export type SelectOptions = {
  value: string | number;
  label: string;
};

type Props = {
  options: SelectOptions[];
  placeholder?: string;
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  className?: string;
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
};

export default function StyledSelect({
  options,
  placeholder = "Выберите",
  field,
  fieldState,
  className,
  label,
  labelClassName,
  wrapperClassName,
}: Props) {
  const hasError = !!fieldState?.error;

  return (
    <label className={`relative w-full ${wrapperClassName || ""}`}>
      {label && (
        <span
          className={`absolute left-[14px] -top-[10px] z-[1] px-[6px] bg-white text-xs md:text-sm text-primary ${
            labelClassName || ""
          }`}
        >
          {label}
        </span>
      )}

      <div className="relative">
        <select
          {...field}
          defaultValue=""
          className={`h-10 w-full min-w-[200px] rounded-xl border bg-white px-3 text-sm appearance-none
            flex items-center justify-between text-black transition focus:outline-none
            ${
              hasError
                ? "!border-danger focus:shadow-[0_0_0_3px_rgba(254,72,69,0.12)]"
                : "border-gray focus:border-primary focus:shadow-[0_0_0_3px_rgba(20,162,184,0.10)]"
            }
            ${className || ""}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark-gray"
        >
          <path
            d="M7 10l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {hasError && (
        <div className="absolute w-full flex justify-center mt-1">
          <ErrorText error={fieldState.error} />
        </div>
      )}
    </label>
  );
}
