import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Icon from "../Icon/Icon";

type Props = {
  placeholder?: string;
  value: string;
  parentClassName?: string;
  className?: string;
  setValue: (value: string) => void;
};

const Search: React.FC<Props> = ({
  placeholder,
  setValue,
  value,
  className,
  parentClassName,
}) => {
  const [localValue, setLocalValue] = useState<any>(value);
  const debounced = useDebounce(localValue, 300);

  useEffect(() => {
    setValue?.(debounced);
  }, [debounced]);

  return (
    <div className={`relative h-fit w-full ${parentClassName}`}>
      <Icon
        name="search"
        className="w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      />
      <input
        placeholder={placeholder}
        onChange={(e) => setLocalValue(e.target.value)}
        value={localValue}
        type="search"
        className={`!pl-[40px] md:!pl-[50px] w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${className}`}
      />
    </div>
  );
};

export default Search;
