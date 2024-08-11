import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Search from "../Search/Search";

const meta = {
  title: "UI/Search",
  component: Search,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {placeholder: {control: 'text'}},
  args: {setValue: fn(), placeholder: 'Search' },
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  placeholder: 'Search',
  value: 'Search',
  },
};
