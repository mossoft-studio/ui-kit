import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import RadioGroup from "./RadioGroup";

type FormValues = {
  tariff: string;
};

type PlaygroundProps = {
  size?: "sm" | "md";
  direction?: "row" | "column";
  disabled?: boolean;
};

const options = [
  {
    label: "Базовый",
    value: "basic",
    description: "Подходит для небольших проектов",
  },
  {
    label: "Стандарт",
    value: "standard",
    description: "Оптимальный баланс возможностей",
  },
  {
    label: "Премиум",
    value: "premium",
    description: "Максимум функций и поддержки",
  },
];

const RadioGroupPlayground: React.FC<PlaygroundProps> = (args) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      tariff: "standard",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("submit", data);
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="tariff"
          control={control}
          rules={{ required: "Выберите тариф" }}
          render={({ field, fieldState }) => (
            <RadioGroup
              options={options}
              size={args.size}
              direction={args.direction}
              disabled={args.disabled}
              field={field}
              fieldState={fieldState}
            />
          )}
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

const meta: Meta<typeof RadioGroupPlayground> = {
  title: "UI/RadioGroup",
  component: RadioGroupPlayground,
  args: {
    size: "md",
    direction: "column",
    disabled: false,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
    },
    direction: {
      control: "inline-radio",
      options: ["row", "column"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroupPlayground>;

export const Playground: Story = {};

export const Row: Story = {
  args: {
    direction: "row",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
