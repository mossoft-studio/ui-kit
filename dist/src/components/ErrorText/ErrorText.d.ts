import { FC } from "react";
import { FieldError } from "react-hook-form";
type Props = {
    error: FieldError | undefined;
};
declare const ErrorText: FC<Props>;
export default ErrorText;
