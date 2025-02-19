import { ErrorText } from "@mossoft/ui-kit";
import dynamic from "next/dynamic";
import { FC } from "react";
import { FieldError } from "react-hook-form";
import { Value } from "react-quill";
import "react-quill/dist/quill.snow.css";

// Use dynamic import for ReactQuill
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

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
