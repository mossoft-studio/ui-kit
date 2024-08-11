import { fn } from "@storybook/test";
import Search from "../Search/Search";
var meta = {
    title: "UI/Search",
    component: Search,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { placeholder: { control: 'text' } },
    args: { setValue: fn(), placeholder: 'Search' },
};
export default meta;
export var Primary = {
    args: {
        placeholder: 'Search',
        value: 'Search',
    },
};
//# sourceMappingURL=Search.stories.js.map