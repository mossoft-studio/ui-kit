import type { Meta, StoryObj } from "@storybook/react";
import Chips from "../Chips/Chips";

const meta = {
  title: "UI/Chips",
  component: Chips,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {color: {control: 'color'}},
  args: { color: "bg-primary"},
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  items: [{title: 'Primary'}, {title: 'Primary2'}],
  },
};
