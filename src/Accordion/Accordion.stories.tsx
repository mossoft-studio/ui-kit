import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Accordion, { AccordionItem } from "./Accordion";

const items: AccordionItem[] = [
  {
    id: "three",
    title: "Тайтл",
    subtitle: "Сабтайтл",
    leftIcon: "moon",
    content: <p>Описание</p>,
  },
];

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  args: {
    items,
    multiple: false,
    defaultOpenId: "one",
  },
  argTypes: {
    multiple: {
      control: "boolean",
    },
    defaultOpenId: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Single: Story = {};

export const Multiple: Story = {
  args: {
    multiple: true,
    defaultOpenIds: ["one", "two"],
    defaultOpenId: undefined,
  },
};
