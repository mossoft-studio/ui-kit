import { FC, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import useDebounce from "../hooks/useDebounce";
import Icon from "../Icon/Icon";
import React from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    field?.onChange(
      (Array.isArray(field?.value) &&
        field?.value.includes(value) &&
        field?.value.filter((item) => item !== value)) ||
        (Array.isArray(field?.value) && [...field?.value, value]) || [value]
    );
  };

  return (
    <div ref={inputRef} className="relative">
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
            `bg-[#f6f7fa] rounded-[20px] focus:outline-none`,
            className
          )}
          value={
            (isOpen && search) ||
            (!isOpen &&
              Array.isArray(field?.value) &&
              field?.value
                .map(
                  (val: string) =>
                    options.find((option) => option.value === val)?.label
                )
                .join(", ")) ||
            ""
          }
          onFocus={() => setIsOpen(true)}
          placeholder={isOpen ? "Поиск..." : "Выбрать"}
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
            .map((option) => (
              <li
                onClick={() => handleSelect(option.value)}
                key={option.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex flex-row">
                  {option.icon && <Icon name={option.icon} />}
                  <button
                    className={`w-full text-left !p-0 !text-sm text-dark !font-normal ${
                      Array.isArray(field?.value) &&
                      field?.value?.includes(option.value) &&
                      "text-primary"
                    }`}
                    value={option.value}
                  >
                    {option.label}
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelectSearch;
