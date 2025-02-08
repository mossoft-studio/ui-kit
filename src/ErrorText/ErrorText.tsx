import { FC } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

const ErrorText: FC<Props> = ({ error }) => {
  return (
    <div className="">
      {error && Object.keys(error).length ? (
        <span className="block text-danger text-[12px] text-center">
          {typeof error.message !== "string"
            ? "Что-то пошло не так"
            : error.message}
        </span>
      ) : null}
    </div>
  );
};

export default ErrorText;
