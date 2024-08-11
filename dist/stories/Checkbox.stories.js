import { fn } from "@storybook/test";
import Checkbox from "../Checkbox/Checkbox";
var meta = {
    title: "UI/Checkbox",
    component: Checkbox,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: { onChange: fn() },
};
export default meta;
export var Primary = {
    args: {
        title: 'Primary',
    },
};
//# sourceMappingURL=Checkbox.stories.js.map