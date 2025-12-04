import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  args: {
    title: "Согласен с условиями",
    secondaryTitle: "",
    checked: false,
    disabled: false,
  },
  argTypes: {
    onChange: { action: "changed" },
    title: { control: "text" },
    secondaryTitle: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const WithSecondary: Story = {
  args: {
    secondaryTitle: "Дополнительный текст",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
