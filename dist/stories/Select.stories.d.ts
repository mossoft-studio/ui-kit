/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<{
        options: import("../Select/Select").SelectOptions[] | undefined;
        field?: import("react-hook-form").ControllerRenderProps<any, any> | undefined;
        fieldState?: import("react-hook-form").ControllerFieldState | undefined;
        className?: string | undefined;
        placeholder?: string | undefined;
        parentClassName?: string | undefined;
    } & import("react").SelectHTMLAttributes<HTMLSelectElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        color: {
            control: "color";
        };
    };
    args: {
        onChange: import("@vitest/spy").Mock<[event: import("react").ChangeEvent<HTMLSelectElement>], void>;
        placeholder: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
