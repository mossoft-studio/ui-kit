import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Checkbox from "../Checkbox/Checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
   title: 'Primary',
  },
};
