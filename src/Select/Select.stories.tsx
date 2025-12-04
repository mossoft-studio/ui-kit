import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import Select, { SelectOption } from "./Select";

type FormValues = {
  city: string;
};

const cityOptions: SelectOption<string>[] = [
  { label: "Москва", value: "msk" },
  { label: "Санкт-Петербург", value: "spb" },
  { label: "Казань", value: "kzn" },
  { label: "Новосибирск", value: "nsk" },
  { label: "Екатеринбург", value: "ekb" },
];

type PlaygroundProps = {
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  disabled?: boolean;
  options: SelectOption<string>[];
};

const SelectPlayground: React.FC<PlaygroundProps> = (args) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      city: "",
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
          name="city"
          control={control}
          rules={{ required: "Выберите город" }}
          render={({ field, fieldState }) => (
            <Select<FormValues, "city", string>
              size={args.size}
              placeholder={args.placeholder}
              disabled={args.disabled}
              options={args.options}
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

const meta: Meta<typeof SelectPlayground> = {
  title: "UI/Select",
  component: SelectPlayground,
  args: {
    size: "md",
    placeholder: "Выберите город",
    disabled: false,
    options: cityOptions,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    options: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SelectPlayground>;

export const Playground: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Preselected: Story = {
  render: (args) => {
    const { control, handleSubmit, setValue } = useForm<FormValues>({
      defaultValues: {
        city: "msk",
      },
    });

    const onSubmit = (data: FormValues) => {
      console.log("submit", data);
    };

    setValue("city", "msk");

    return (
      <div className="max-w-md mx-auto space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="city"
            control={control}
            render={(inputFields) => (
              <Select<FormValues, "city", string>
                size={args.size}
                placeholder={args.placeholder}
                disabled={args.disabled}
                options={args.options}
                {...inputFields}
              />
            )}
          />
        </form>
      </div>
    );
  },
};
