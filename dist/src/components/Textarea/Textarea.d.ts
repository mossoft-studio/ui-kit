import { FC, TextareaHTMLAttributes } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
type TextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;
type Props = {
    className?: string;
    field?: ControllerRenderProps<any, any>;
    fieldState?: ControllerFieldState;
} & TextareaAttributes;
declare const Textarea: FC<Props>;
export default Textarea;
