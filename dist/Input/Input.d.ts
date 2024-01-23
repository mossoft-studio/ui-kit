import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
declare type InputAttributes = InputHTMLAttributes<HTMLInputElement>;
declare type InputProps = {
    type?: HTMLInputTypeAttribute | ("password" | "tel" | "text");
    placeholder?: string;
    field?: ControllerRenderProps<any, any>;
    fieldState?: ControllerFieldState;
    format?: string;
    decimalScale?: number;
    defaultValue?: string | number | null;
    postfix?: string;
} & InputAttributes;
export declare const MaskRules: {
    [key in "number"]?: {
        allowNegative: boolean;
        allowLeadingZeros: boolean;
        thousandSeparator: string;
        thousandsGroupStyle?: "thousand" | "lakh" | "wan";
    };
};
declare const Input: FC<InputProps>;
export default Input;
