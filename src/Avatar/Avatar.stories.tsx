import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  args: {
    name: "Иван Иванов",
    size: "md",
    shape: "circle",
    status: "online",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg"],
    },
    shape: {
      control: "inline-radio",
      options: ["circle", "rounded"],
    },
    status: {
      control: "inline-radio",
      options: ["none", "online", "offline", "busy"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Иван Иванов" size="xs" />
      <Avatar name="Иван Иванов" size="sm" />
      <Avatar name="Иван Иванов" size="md" />
      <Avatar name="Иван Иванов" size="lg" />
    </div>
  ),
};

export const WithStatuses: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Online" status="online" />
        <span className="text-xs text-gray-600">online</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Offline" status="offline" />
        <span className="text-xs text-gray-600">offline</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Busy" status="busy" />
        <span className="text-xs text-gray-600">busy</span>
      </div>
    </div>
  ),
};

export const WithImageFallback: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Avatar
        name="С картинкой"
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
        size="md"
      />
      <Avatar
        name="Битый src"
        src="https://example.com/not-found.jpg"
        size="md"
      />
      <Avatar name="Без src" size="md" />
      <Avatar size="md" />
    </div>
  ),
};
