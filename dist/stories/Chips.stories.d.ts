/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<{
        items: {
            title: string | number;
        }[];
        disable?: boolean | undefined;
        color?: string | null | undefined;
        style?: import("react").CSSProperties | undefined;
    }>;
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
        color: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
