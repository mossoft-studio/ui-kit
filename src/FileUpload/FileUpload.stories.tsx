import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import FileUpload from "./FileUpload";
import Button from "../Button/Button";

type FormValues = {
  files: File[];
};

const FileUploadPlayground: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      files: [],
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("submit files:", data.files);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="files"
          control={control}
          rules={{
            validate: (value) =>
              value && value.length > 0
                ? true
                : "Нужно добавить хотя бы один файл",
          }}
          render={({ field, fieldState }) => (
            <FileUpload
              label="Файлы"
              helperText="Загрузите документы, сканы, изображения и т.п."
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              maxSizeMb={15}
              field={field}
              fieldState={fieldState}
            />
          )}
        />

        <Button type="submit" variant="primary">
          Отправить
        </Button>
      </form>
    </div>
  );
};

const meta: Meta<typeof FileUploadPlayground> = {
  title: "UI/FileUpload",
  component: FileUploadPlayground,
};

export default meta;

type Story = StoryObj<typeof FileUploadPlayground>;

export const Playground: Story = {};
