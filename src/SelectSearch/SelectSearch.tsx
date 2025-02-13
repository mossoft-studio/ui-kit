import ErrorText from "@/ErrorText/ErrorText";
import useDebounce from "@/hooks/useDebounce";
import Icon from "@/Icon/Icon";
import {
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { ControllerRenderProps, FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

type Options<T> = {
  label: string;
  value: T;
  icon?: string;
};

type Props<T> = {
  options: Options<T>[];
  field?: ControllerRenderProps<any, any>;
  className?: string;
  parentClassName?: string;
  listClassname?: string;
  onChange: (value: T | null) => void;
  value: T | undefined | null;
  placeholder?: string;
  error?: FieldError | undefined;
  trigger?: ReactNode;
} & Omit<InputAttributes, "value">;

const SelectSearch = <T,>({
  options,
  field,
  onChange,
  className,
  value,
  parentClassName,
  listClassname,
  trigger,
  error,
  ...inputProps
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 100);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState("below");

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

  useEffect(() => {
    if (isOpen) {
      const container = inputRef.current;
      if (container) {
        const { bottom } = container.getBoundingClientRect();
        const spaceBelow = window.innerHeight - bottom;
        const spaceAbove = container.getBoundingClientRect().top;
        const dropdownHeight = 200;

        if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
          setDropdownPosition("below");
        } else {
          setDropdownPosition("above");
        }
      }
    }
  }, [isOpen]);

  const handleSelect = (val: T) => {
    onChange(val === value ? null : val);
    setIsOpen(false);
  };

  const sortedAndFilteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const dropdownClassName =
    dropdownPosition === "below" ? "top-[100%]" : "bottom-[120%]";

  return (
    <div ref={inputRef} className="relative">
      <div className={`h-fit w-full cursor-pointer ${parentClassName}`}>
        {trigger && !isOpen ? (
          trigger
        ) : (
          <>
            <input
              {...inputProps}
              ref={inputRef}
              className={twMerge(
                `bg-[#f6f7fa] rounded-[20px] focus:outline-none cursor-pointer`,
                className,
                "!pr-9"
              )}
              value={
                value
                  ? options.find((option) => option.value === value)?.label
                  : ""
              }
              onFocus={() => setIsOpen(true)}
              placeholder="Выбрать"
              readOnly
            />
            <Icon
              name="arrow-down"
              className="w-[11px] h-[10px] absolute right-[14px] top-0 bottom-0 my-auto !text-[#797A7F] cursor-pointer pointer-events-none"
            />
          </>
        )}
      </div>

      {isOpen && (
        <div
          className={`absolute ${dropdownClassName} ${listClassname} z-10 w-full py-2 px-2 bg-white shadow-[1px_1px_11px_0_rgb(174_178_191)] max-h-60 mt-1 rounded-[20px] overflow-auto scrollbar-thin scrollbar-thumb-[#A6B9FF] scrollbar-track-transparent`}
        >
          <div className="h-fit w-full relative mb-1">
            <Icon
              name="search"
              className="w-[14px] h-[14px] absolute left-[6px] top-0 bottom-0 my-auto !text-primary"
            />
            <input
              {...inputProps}
              className="bg-[#f6f7fa] rounded-[20px] focus:outline-none p-1 !pl-7 placeholder:!text-sm !text-sm !w-full"
              value={(isOpen && search) || ""}
              placeholder={"Поиск..."}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className="flex flex-col gap-1">
            {sortedAndFilteredOptions?.map((option) => (
              <li
                onClick={() => handleSelect(option.value)}
                key={+option.value}
                className={`rounded-[20px] relative px-2 py-1 !pl-[24px] hover:bg-gray-100 cursor-pointer ${
                  value === option.value && "bg-[#A6B9FF]"
                }`}
              >
                <div className="flex flex-row items-center justify-between gap-2">
                  {value === option.value && (
                    <Icon
                      name="checked"
                      className="w-4 h-4 text-white z-20 absolute left-2 top-0 bottom-0 my-auto"
                    />
                  )}
                  <button
                    className={`w-full text-left !p-0 !text-sm text-dark !font-normal !rounded-none ${
                      value === option.value && "text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ErrorText error={error} />
    </div>
  );
};

export default SelectSearch;
