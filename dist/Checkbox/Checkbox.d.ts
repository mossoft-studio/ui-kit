import React from "react";
import { FieldError } from "react-hook-form";
type Props = {
    onChange: (value: any) => void;
    title: string;
    secondaryTitle?: string;
    labelClassName?: string;
    className?: string;
    titleClassName?: string;
    checked?: boolean;
    disabled?: boolean;
    error?: FieldError;
};
declare const Checkbox: React.FC<Props>;
export default Checkbox;
