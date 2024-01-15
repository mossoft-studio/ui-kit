import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    variant: "danger",
    onClick: () => null,
    children: "123123",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: "123123",
    variant: "danger",
    loadType: "1C",
  },
};

export const Secondary: Story = {
  args: {
    children: 123,
    variant: "primary",
    onClick: () => null,
  },
};
