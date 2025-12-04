import { FC, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import useDebounce from "../hooks/useDebounce";
import Icon from "../Icon/Icon";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

type Options = {
  label: string;
  value: string;
  icon?: string;
};

type Props = {
  options: Options[];
  field?: ControllerRenderProps<any, any>;
  className?: string;
  placeholder?: string;
} & InputAttributes;

const MultiSelectSearch: FC<Props> = ({
  options,
  field,
  className,
  ...inputProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 100);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    if (!field) return;

    const current = Array.isArray(field.value) ? field.value : [];

    if (current.includes(value)) {
      field.onChange(current.filter((item) => item !== value));
    } else {
      field.onChange([...current, value]);
    }
  };

  const displayValue =
    (isOpen && search) ||
    (!isOpen &&
      Array.isArray(field?.value) &&
      field?.value
        .map(
          (val: string) => options.find((option) => option.value === val)?.label
        )
        .filter(Boolean)
        .join(", ")) ||
    "";

  return (
    <div ref={wrapperRef} className="relative">
      <div className="h-fit w-full">
        {isOpen && (
          <Icon
            name="search"
            className="w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
          />
        )}

        <input
          {...inputProps}
          ref={inputRef}
          className={twMerge(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none w-full px-3 py-2 text-sm",
            className
          )}
          value={displayValue}
          onFocus={() => setIsOpen(true)}
          placeholder={
            isOpen ? "Поиск..." : inputProps.placeholder || "Выбрать"
          }
          onChange={(e) => setSearch(e.target.value)}
          readOnly={!isOpen}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          {options
            .filter((option) =>
              option.label.toLowerCase().includes(debouncedSearch.toLowerCase())
            )
            .map((option) => {
              const isSelected =
                Array.isArray(field?.value) &&
                field?.value?.includes(option.value);

              return (
                <li
                  onClick={() => handleSelect(option.value)}
                  key={option.value}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="flex flex-row items-center gap-2">
                    {option.icon && <Icon name={option.icon} />}
                    <button
                      type="button"
                      className={twMerge(
                        "w-full text-left !p-0 !text-sm !font-normal",
                        isSelected ? "text-primary" : "text-dark"
                      )}
                      value={option.value}
                    >
                      {option.label}
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default MultiSelectSearch;
