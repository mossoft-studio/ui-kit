import { FC, InputHTMLAttributes } from "react";
import { ControllerRenderProps } from "react-hook-form";
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
declare const MultiSelectSearch: FC<Props>;
export default MultiSelectSearch;
