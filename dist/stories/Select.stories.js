import Select from "../Select/Select";
import { fn } from "@storybook/test";
var meta = {
    title: "UI/Select",
    component: Select,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { color: { control: 'color' } },
    args: { onChange: fn(), placeholder: 'Select' },
};
export default meta;
export var Primary = {
    args: {
        options: [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' }
        ],
    },
};
//# sourceMappingURL=Select.stories.js.map