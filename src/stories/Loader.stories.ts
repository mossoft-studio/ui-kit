import type { Meta, StoryObj } from "@storybook/react";
import Loader from "../Loader/Loader";

const meta = {
  title: "UI/Loader",
  component: Loader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {},
  args: { text: 'Loading...'},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  text: 'Loading'
  },

};
