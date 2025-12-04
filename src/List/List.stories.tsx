import type { Meta, StoryObj } from "@storybook/react";
import List from "./List";

const sampleData = [
  { label: "Москва", value: "msk", row: "10 объектов" },
  { label: "Санкт-Петербург", value: "spb", row: "7 объектов" },
  { label: "Казань", value: "kzn", row: "3 объекта" },
];

const meta: Meta<typeof List> = {
  title: "UI/List",
  component: List,
  args: {
    data: sampleData,
    className: "",
  },
  argTypes: {
    onClick: {
      action: "itemClick",
    },
    className: {
      control: "text",
    },
    data: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {};

export const ManyItems: Story = {
  args: {
    data: Array.from({ length: 12 }).map((_, i) => ({
      label: `Пункт ${i + 1}`,
      value: i + 1,
      row: i % 2 === 0 ? `${i + 2} объекта` : undefined,
    })),
  },
};

export const WithoutRows: Story = {
  args: {
    data: [
      { label: "Опция 1", value: "1" },
      { label: "Опция 2", value: "2" },
      { label: "Опция 3", value: "3" },
    ],
  },
};
