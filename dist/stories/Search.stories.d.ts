/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<{
        placeholder?: string | undefined;
        value: string;
        parentClassName?: string | undefined;
        setValue: (value: string) => void;
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        placeholder: {
            control: "text";
        };
    };
    args: {
        setValue: import("@vitest/spy").Mock<[value: string], void>;
        placeholder: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
