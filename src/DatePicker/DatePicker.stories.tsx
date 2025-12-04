import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "./DatePicker";
import Button from "../Button/Button";

type FormValues = {
  date: string | null;
};

const DatePickerPlayground: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { date: null },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("submit", data);
  };

  const today = new Date();
  const max = new Date(
    today.getFullYear(),
    today.getMonth() + 2,
    today.getDate()
  );

  return (
    <div className="max-w-md mx-auto space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="date"
          control={control}
          rules={{ required: "Укажите дату" }}
          render={({ field, fieldState }) => (
            <DatePicker
              label="Дата"
              value={field.value}
              onChange={field.onChange}
              errorText={fieldState.error?.message}
              minDate={today}
              maxDate={max}
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

const meta: Meta<typeof DatePickerPlayground> = {
  title: "UI/DatePicker",
  component: DatePickerPlayground,
};

export default meta;

type Story = StoryObj<typeof DatePickerPlayground>;

export const Default: Story = {};
