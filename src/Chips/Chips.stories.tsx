import type { Meta, StoryObj } from "@storybook/react";
import Chips from "./Chips";

const meta: Meta<typeof Chips> = {
  title: "UI/Chips",
  component: Chips,
  args: {
    items: [
      { title: "Москва" },
      { title: "Санкт-Петербург" },
      { title: "Казань" },
    ],
    disable: false,
    color: null,
    style: {},
  },
  argTypes: {
    color: {
      control: "text",
      description: "Tailwind класс цвета (например: bg-red-500)",
    },
    disable: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chips>;

export const Default: Story = {};

export const Colored: Story = {
  args: {
    color: "bg-green-600",
  },
};

export const Disabled: Story = {
  args: {
    disable: true,
  },
};
