import React, { SelectHTMLAttributes } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
export declare type SelectOptions = {
    value: any;
    label: string;
};
declare type SelectAttributes = SelectHTMLAttributes<HTMLSelectElement>;
declare type Props = {
    options: SelectOptions[];
    field?: ControllerRenderProps<any, any>;
    fieldState?: ControllerFieldState;
    className?: string;
    placeholder?: string;
    parentClassName?: string;
} & SelectAttributes;
declare const Select: React.FC<Props>;
export default Select;
