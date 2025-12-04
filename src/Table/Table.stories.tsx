import type { Meta, StoryObj } from "@storybook/react";
import DraggableList, { HeaderData } from "./Table";

const headerData: HeaderData[] = [
  {
    title: "ID",
    name: ["id"],
  },
  {
    title: "Название",
    name: ["name"],
  },
  {
    title: "Город",
    name: ["city"],
  },
  {
    title: "Сумма",
    name: ["amount"],
    unit: "₽",
    transform: (value: any) =>
      typeof value === "number" ? value.toLocaleString("ru-RU") : value,
  },
];

const data = [
  { id: 1, name: "Объект №1", city: "Москва", amount: 120000 },
  { id: 2, name: "Объект №2", city: "Санкт-Петербург", amount: 95000 },
  { id: 3, name: "Объект №3", city: "Казань", amount: 73000 },
  { id: 4, name: "Объект №4", city: "Новосибирск", amount: 56000 },
];

const meta: Meta<typeof DraggableList> = {
  title: "UI/DraggableList",
  component: DraggableList,
  args: {
    headerData,
    data,
    className: "p-4 bg-light-gray rounded-2xl",
    isDragDisabled: false,
    haveLinks: true,
    isLoading: false,
    sort: "",
  },
  argTypes: {
    onRowClick: { action: "rowClick" },
    setSort: { action: "setSort" },
    isDragDisabled: {
      control: "boolean",
    },
    haveLinks: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
    sort: {
      control: "text",
    },
    className: {
      control: "text",
    },
    headerData: {
      control: "object",
    },
    data: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DraggableList>;

export const Default: Story = {};

export const DragDisabled: Story = {
  args: {
    isDragDisabled: true,
  },
};

export const WithoutLinks: Story = {
  args: {
    haveLinks: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    data: [],
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};
