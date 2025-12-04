import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tabs, { TabItem } from "./Tabs";

const items: TabItem[] = [
  { label: "Общая информация", value: "general", icon: "info" },
  { label: "Документы", value: "docs", icon: "file" },
  { label: "История", value: "history", icon: "clock" },
];

type PlaygroundProps = {
  size?: "sm" | "md";
  fullWidth?: boolean;
};

const TabsPlayground: React.FC<PlaygroundProps> = (args) => {
  const [tab, setTab] = useState<string>("general");

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Tabs
        items={items}
        value={tab}
        onChange={setTab}
        size={args.size}
        fullWidth={args.fullWidth}
      />

      <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-800">
        Текущая вкладка: <span className="font-semibold">{tab}</span>
      </div>
    </div>
  );
};

const meta: Meta<typeof TabsPlayground> = {
  title: "UI/Tabs",
  component: TabsPlayground,
  args: {
    size: "md",
    fullWidth: true,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TabsPlayground>;

export const Playground: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const CompactInline: Story = {
  args: {
    fullWidth: false,
  },
};
