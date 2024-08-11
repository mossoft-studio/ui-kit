/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("react").PropsWithChildren<{
        onClick: () => void;
        className?: string | undefined;
        disabled?: boolean | undefined;
        isLoading?: boolean | undefined;
        loadType?: "" | "1C" | undefined;
        variant: "link" | "primary" | "secondary" | "danger" | "small-primary" | "small-secondary" | "small-danger" | "tab";
        icon?: string | undefined;
    }>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onClick: import("@vitest/spy").Mock<[], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Danger: Story;
export declare const Link: Story;
export declare const Small: Story;
