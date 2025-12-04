import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Кнопка",
    variant: "primary",
    size: "md",
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "danger", "link", "tab"],
    },
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const Link: Story = {
  args: { variant: "link" },
};

export const Tab: Story = {
  args: { variant: "tab" },
};
