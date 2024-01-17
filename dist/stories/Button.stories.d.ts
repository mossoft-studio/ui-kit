/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import "../index.css";
declare const meta: {
    title: string;
    component: import("react").FC<import("react").PropsWithChildren<{
        onClick: () => void;
        className?: string | undefined;
        disabled?: boolean | undefined;
        isLoading?: boolean | undefined;
        loadType?: "" | "1C" | undefined;
        variant: "primary" | "secondary" | "danger" | "link" | "small-primary" | "small-yellow" | "small-secondary" | "small-danger" | "tab";
        icon?: "plus" | "start" | "pause" | "stop" | "scan" | undefined;
    }>>;
    parameters: {
        variant: string;
        onClick: () => null;
        children: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
