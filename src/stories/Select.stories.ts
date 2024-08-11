import type { Meta, StoryObj } from "@storybook/react";
import Select from "../Select/Select";
import { fn } from "@storybook/test";

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {color: {control: 'color'}},
  args: { onChange: fn(), placeholder: 'Select' },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  options: [
  {label: 'Option 1', value: '1'}, 
  {label: 'Option 2', value: '2'}
    ],
  },
};
