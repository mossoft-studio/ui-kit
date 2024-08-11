/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<{
        onChange: (value: any) => void;
        title: string;
        secondaryTitle?: string | undefined;
        labelClassName?: string | undefined;
        className?: string | undefined;
        titleClassName?: string | undefined;
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        error?: import("react-hook-form").FieldError | undefined;
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onChange: import("@vitest/spy").Mock<[value: any], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
