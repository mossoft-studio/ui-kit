import type { Meta, StoryObj } from "@storybook/react";
import ErrorText from "./ErrorText";
import type { FieldError } from "react-hook-form";

const meta: Meta<typeof ErrorText> = {
  title: "UI/ErrorText",
  component: ErrorText,
  args: {
    error: {
      type: "manual",
      message: "Это ошибка",
    } as FieldError,
  },
  argTypes: {
    error: {
      control: "object",
      description: "FieldError из react-hook-form",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorText>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    error: undefined,
  },
};

export const NonStringMessage: Story = {
  args: {
    error: {
      type: "manual",
      message: { text: "obj" } as unknown as string,
    },
  },
};
