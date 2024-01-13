import React from "react";
import { FC } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

const ErrorText: FC<Props> = ({ error }) => {
  return error && Object.keys(error).length ? (
    <span className="block text-danger-red text-xs md:text-sm text-center mt-1">
      {typeof error?.message !== "string"
        ? "Что-то пошло не так"
        : error?.message}
    </span>
  ) : null;
};

export default ErrorText;
