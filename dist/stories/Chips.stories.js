import Chips from "../Chips/Chips";
var meta = {
    title: "UI/Chips",
    component: Chips,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: { color: { control: 'color' } },
    args: { color: "bg-primary" },
};
export default meta;
export var Primary = {
    args: {
        items: [{ title: 'Primary' }, { title: 'Primary2' }],
    },
};
//# sourceMappingURL=Chips.stories.js.map