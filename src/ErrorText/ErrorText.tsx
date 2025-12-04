import { FC } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

const ErrorText: FC<Props> = ({ error }) => {
  if (!error || !Object.keys(error).length) return null;

  const message =
    typeof error.message !== "string" ? "Что-то пошло не так" : error.message;

  return (
    <span className="block text-red-600 text-xs text-center">{message}</span>
  );
};

export default ErrorText;
