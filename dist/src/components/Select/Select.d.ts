import React, { SelectHTMLAttributes } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
export type SelectOptions = {
    value: any;
    label: string;
};
type SelectAttributes = SelectHTMLAttributes<HTMLSelectElement>;
type Props = {
    options: SelectOptions[];
    field?: ControllerRenderProps<any, any>;
    fieldState?: ControllerFieldState;
    className?: string;
    placeholder?: string;
} & SelectAttributes;
declare const Select: React.FC<Props>;
export default Select;
