import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import MultiSelectSearch from "./MultiSelectSearch";

type FormValues = {
  tags: string[];
};

const sampleOptions = [
  { label: "Москва", value: "msk" },
  { label: "Санкт-Петербург", value: "spb" },
  { label: "Казань", value: "kzn" },
  { label: "Новосибирск", value: "nsk" },
  { label: "Екатеринбург", value: "ekb" },
];

type PlaygroundProps = {
  options: { label: string; value: string; icon?: string }[];
  placeholder?: string;
};

const MultiSelectSearchDemo: React.FC<PlaygroundProps> = (args) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      tags: [],
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
          name="tags"
          control={control}
          render={(inputFields) => (
            <MultiSelectSearch
              options={args.options}
              placeholder={args.placeholder}
              {...inputFields}
            />
          )}
        />
      </form>
    </div>
  );
};

const meta: Meta<typeof MultiSelectSearchDemo> = {
  title: "UI/MultiSelectSearch",
  component: MultiSelectSearchDemo,
  args: {
    options: sampleOptions,
    placeholder: "Выбрать",
  },
  argTypes: {
    options: {
      control: "object",
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelectSearchDemo>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: {
    options: [
      { label: "Москва", value: "msk", icon: "city" },
      { label: "Санкт-Петербург", value: "spb", icon: "city" },
      { label: "Казань", value: "kzn", icon: "city" },
      { label: "Новосибирск", value: "nsk", icon: "city" },
    ],
  },
};
