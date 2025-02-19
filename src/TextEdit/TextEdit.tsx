import ErrorText from "@/ErrorText/ErrorText";
import { FC } from "react";
import { FieldError } from "react-hook-form";
import ReactQuill, { Value } from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  readOnly?: boolean;
  value: string;
  onChange?: any;
  error?: FieldError;
  className?: string;
  taskList?: boolean;
  image?: boolean;
};

const TextEditor: FC<Props> = ({
  value,
  onChange,
  error,
  readOnly = false,
  className,
  taskList = false,
  image = false,
}) => {
  // Define custom toolbar options
  const modules = taskList
    ? {
        toolbar: [
          [
            { list: "ordered" },
            { list: "bullet" },
            taskList && { list: "check" },
          ],
          ["bold", "italic", "underline"],
          image ? ["image"] : [],
          ["clean"],
          // ["link"],
        ],
      }
    : {
        toolbar: [
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          image ? ["image"] : [],
          ["clean"],
          // ["link"],
        ],
      };

  const formats = [
    "list",
    "bullet",
    taskList ? "check" : "",
    "bold",
    "italic",
    image ? "image" : "",
    // "link",
  ];

  return (
    <>
      <ReactQuill
        readOnly={readOnly}
        value={value as Value}
        onChange={onChange}
        theme="snow"
        modules={modules}
        formats={formats}
        className={`${className} w-full bg-primary-light rounded-[30px] overflow-hidden md:border-white md:rounded-[15px] text-black text-sm md:text-base !border-none break-all`}
      />
      <ErrorText error={error} />
    </>
  );
};

export default TextEditor;
