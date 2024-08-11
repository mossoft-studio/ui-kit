import { fn } from "@storybook/test";
import Button from "../Button/Button";
var meta = {
    title: "UI/Button",
    component: Button,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: { onClick: fn() },
};
export default meta;
export var Primary = {
    args: {
        children: "Primary",
        variant: "primary",
    },
};
export var Danger = {
    args: {
        children: "Danger",
        variant: "danger",
    },
};
export var Link = {
    args: {
        children: "Link",
        variant: "link",
    },
};
export var Small = {
    args: {
        children: "Small",
        variant: "small-primary",
    },
};
//# sourceMappingURL=Button.stories.js.map