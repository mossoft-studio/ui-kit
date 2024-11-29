import { FC } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

const ErrorText: FC<Props> = ({ error }) => {
  return (
    <div className="h-6">
      {error && Object.keys(error).length ? (
        <span className="block text-danger text-[12px] text-center mt-[2px]">
          {typeof error.message !== "string"
            ? "Что-то пошло не так"
            : error.message}
        </span>
      ) : null}
    </div>
  );
};

export default ErrorText;
