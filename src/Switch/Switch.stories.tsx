import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import Switch from "./Switch";

type FormValues = {
  notifications: boolean;
};

type PlaygroundProps = {
  size?: "sm" | "md";
  disabled?: boolean;
  label?: string;
  description?: string;
};

const SwitchPlayground: React.FC<PlaygroundProps> = (args) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      notifications: false,
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
          name="notifications"
          control={control}
          render={({ field, fieldState }) => (
            <Switch
              size={args.size}
              disabled={args.disabled}
              label={args.label}
              description={args.description}
              field={field}
              fieldState={fieldState}
            />
          )}
        />
      </form>
    </div>
  );
};

const meta: Meta<typeof SwitchPlayground> = {
  title: "UI/Switch",
  component: SwitchPlayground,
  args: {
    size: "md",
    disabled: false,
    label: "Уведомления",
    description: "Присылать пуши и email-уведомления",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
    },
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SwitchPlayground>;

export const Playground: Story = {};

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
