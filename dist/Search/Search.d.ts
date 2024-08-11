import React from "react";
type Props = {
    placeholder?: string;
    value: string;
    parentClassName?: string;
    setValue: (value: string) => void;
};
declare const Search: React.FC<Props>;
export default Search;
