import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown, { DropdownItem } from "./Dropdown";

const items: DropdownItem[] = [
  { label: "Профиль", value: "profile", icon: "user" },
  { label: "Настройки", value: "settings", icon: "settings" },
  { label: "Уведомления", value: "notifications", icon: "bell" },
  { label: "Удалить аккаунт", value: "delete", icon: "trash", danger: true },
];

type PlaygroundProps = {
  size?: "sm" | "md";
  align?: "left" | "right";
  disabled?: boolean;
};

const DropdownPlayground: React.FC<PlaygroundProps> = (args) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto space-y-4">
      <Dropdown
        items={items}
        onSelect={(val) => {
          setSelected(val);
          console.log("selected:", val);
        }}
        size={args.size}
        align={args.align}
        disabled={args.disabled}
        label="Меню пользователя"
      />

      <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-800">
        Выбрано:{" "}
        <span className="font-semibold">{selected ?? "ничего не выбрано"}</span>
      </div>
    </div>
  );
};

const meta: Meta<typeof DropdownPlayground> = {
  title: "UI/Dropdown",
  component: DropdownPlayground,
  args: {
    size: "md",
    align: "left",
    disabled: false,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
    },
    align: {
      control: "inline-radio",
      options: ["left", "right"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownPlayground>;

export const Playground: Story = {};

export const SmallRight: Story = {
  args: {
    size: "sm",
    align: "right",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
