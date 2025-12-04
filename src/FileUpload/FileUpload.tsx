"use client";

import {
  DragEvent,
  FC,
  useCallback,
  useRef,
  useState,
  ChangeEvent,
} from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import ErrorText from "../ErrorText/ErrorText";
import Icon from "../Icon/Icon";

export type FileUploadValue = File[];

type Props = {
  label?: string;
  helperText?: string;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  maxSizeMb?: number;
  className?: string;
  wrapperClassName?: string;
  dropzoneClassName?: string;
  listClassName?: string;
  // RHF
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  // uncontrolled / controlled usage
  value?: FileUploadValue;
  onChange?: (files: FileUploadValue) => void;
};

const bytesInMb = 1024 * 1024;

const FileUpload: FC<Props> = ({
  label,
  helperText,
  multiple = true,
  accept,
  disabled,
  maxSizeMb = 10,
  className,
  wrapperClassName,
  dropzoneClassName,
  listClassName,
  field,
  fieldState,
  value,
  onChange,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const hasError = !!fieldState?.error;

  const externalValue = (field?.value as FileUploadValue | undefined) ?? value;
  const files: FileUploadValue = Array.isArray(externalValue)
    ? externalValue
    : [];

  const updateFiles = (next: FileUploadValue) => {
    field?.onChange?.(next);
    onChange?.(next);
  };

  const handleClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const processFileList = (fileList: FileList | null) => {
    if (!fileList) return;
    const list = Array.from(fileList);

    const filtered = list.filter((file) => {
      if (!maxSizeMb) return true;
      return file.size <= maxSizeMb * bytesInMb;
    });

    let next: FileUploadValue;

    if (multiple) {
      const existing = files ?? [];
      const map = new Map<string, File>();
      [...existing, ...filtered].forEach((f) => {
        const key = `${f.name}_${f.size}_${f.lastModified}`;
        if (!map.has(key)) map.set(key, f);
      });
      next = Array.from(map.values());
    } else {
      next = filtered.slice(0, 1);
    }

    updateFiles(next);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    processFileList(e.target.files);
    e.target.value = "";
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragOver(true);
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragOver(false);
    processFileList(e.dataTransfer.files);
  };

  const removeFile = useCallback(
    (index: number) => {
      const next = files.filter((_, i) => i !== index);
      updateFiles(next);
    },
    [files]
  );

  return (
    <div className={twMerge("w-full flex flex-col gap-2", wrapperClassName)}>
      {label && (
        <span className="text-sm md:text-base font-medium text-gray-900">
          {label}
        </span>
      )}

      <div
        className={twMerge(
          "relative flex flex-col items-center justify-center rounded-2xl border border-dashed px-4 py-6 text-center cursor-pointer",
          "bg-gray-50 hover:bg-gray-100 border-gray-300 hover:border-blue-500",
          "transition-colors duration-150",
          isDragOver && "bg-blue-50 border-blue-500",
          disabled && "opacity-60 cursor-not-allowed",
          hasError && "border-danger bg-red-50/40",
          dropzoneClassName
        )}
        onClick={handleClick}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          disabled={disabled}
          className="hidden"
          onChange={onInputChange}
        />

        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
            {/* Инлайновый SVG-иконка загрузки */}
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-600"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.9997 18.9609C10.1655 18.9609 10.3244 18.8951 10.4416 18.7779C10.5588 18.6607 10.6247 18.5017 10.6247 18.3359L10.6247 9.19177L12.0247 10.8259C12.0781 10.8883 12.1433 10.9396 12.2165 10.9768C12.2897 11.0139 12.3695 11.0364 12.4514 11.0427C12.5332 11.049 12.6156 11.0392 12.6936 11.0137C12.7717 10.9883 12.844 10.9477 12.9064 10.8943C12.9687 10.8409 13.02 10.7757 13.0572 10.7025C13.0944 10.6293 13.1168 10.5495 13.1231 10.4676C13.1295 10.3857 13.1196 10.3034 13.0942 10.2253C13.0687 10.1473 13.0281 10.075 12.9747 10.0126L10.4747 7.09594C10.416 7.02732 10.3432 6.97224 10.2612 6.93447C10.1792 6.8967 10.09 6.87714 9.9997 6.87714C9.90942 6.87714 9.82021 6.8967 9.73821 6.93447C9.65622 6.97224 9.58337 7.02732 9.5247 7.09594L7.0247 10.0126C6.97129 10.075 6.9307 10.1473 6.90523 10.2253C6.87976 10.3034 6.86992 10.3857 6.87627 10.4676C6.88261 10.5495 6.90502 10.6293 6.94221 10.7025C6.97941 10.7757 7.03065 10.8409 7.09303 10.8943C7.15541 10.9477 7.2277 10.9883 7.30576 11.0137C7.38383 11.0392 7.46615 11.049 7.54802 11.0427C7.62989 11.0364 7.70971 11.0139 7.78292 10.9768C7.85613 10.9396 7.92129 10.8883 7.9747 10.8259L9.3747 9.1926L9.3747 18.3359C9.3747 18.5017 9.44055 18.6607 9.55776 18.7779C9.67497 18.8951 9.83394 18.9609 9.9997 18.9609Z"
                fill="currentColor"
              />
              <path
                d="M8.1237 12.5L8.1237 12.185C7.73422 12.3234 7.30991 12.3292 6.9168 12.2015C6.52368 12.0737 6.18383 11.8196 5.95013 11.4787C5.71644 11.1377 5.60201 10.7291 5.62466 10.3164C5.64731 9.90365 5.80576 9.50999 6.07537 9.19667L8.57537 6.28C8.75139 6.07473 8.96973 5.90997 9.21541 5.797C9.46109 5.68404 9.72829 5.62555 9.9987 5.62555C10.2691 5.62555 10.5363 5.68404 10.782 5.797C11.0277 5.90997 11.246 6.07473 11.422 6.28L13.922 9.19667C14.1909 9.51017 14.3487 9.90367 14.371 10.3161C14.3933 10.7285 14.2788 11.1367 14.0453 11.4773C13.8118 11.818 13.4723 12.072 13.0797 12.2C12.687 12.3279 12.2631 12.3227 11.8737 12.185L11.8737 12.5L13.332 12.5C15.6887 12.5 16.8679 12.5 17.5995 11.7675C18.332 11.0358 18.332 9.85667 18.332 7.5L18.332 6.66667C18.332 4.31 18.332 3.13083 17.5995 2.39917C16.8679 1.66667 15.6887 1.66667 13.332 1.66667L6.66537 1.66667C4.3087 1.66667 3.12953 1.66667 2.39787 2.39917C1.66537 3.13083 1.66537 4.31 1.66537 6.66667L1.66537 7.5C1.66537 9.85667 1.66537 11.0358 2.39786 11.7675C3.12953 12.5 4.3087 12.5 6.66537 12.5L8.1237 12.5Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="flex flex-col items-center text-sm text-gray-700">
            <span className="font-medium">
              Перетащите файлы сюда или{" "}
              <span className="text-blue-600 underline">
                выберите на устройстве
              </span>
            </span>
            <span className="text-xs text-gray-500 mt-1">
              {multiple ? "Можно загрузить несколько файлов" : "Один файл"} · до{" "}
              {maxSizeMb} МБ каждый
              {accept && (
                <>
                  {" "}
                  · допустимые форматы: <span>{accept}</span>
                </>
              )}
            </span>
          </div>
        </div>
      </div>

      {helperText && !hasError && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}

      <div className="min-h-[20px] flex justify-center">
        <AnimatePresence>
          {hasError && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="w-full flex justify-center"
            >
              <ErrorText error={fieldState!.error} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={twMerge("space-y-1", listClassName)}>
        {files.map((file, index) => (
          <div
            key={`${file.name}_${file.size}_${file.lastModified}_${index}`}
            className={twMerge(
              "flex items-center justify-between rounded-xl bg-white border border-gray-200 px-3 py-2",
              "text-sm text-gray-800"
            )}
          >
            <div className="flex items-center gap-2 min-w-0">
              <Icon
                name="file"
                className="w-4 h-4 text-gray-400 flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="truncate">{file.name}</span>
                <span className="text-xs text-gray-500">
                  {(file.size / bytesInMb).toFixed(2)} МБ
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => removeFile(index)}
              className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="pointer-events-none"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {className && <div className={className} />}
    </div>
  );
};

export default FileUpload;
