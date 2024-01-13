import React from "react";
type Props = {
    items: {
        title: string | number;
    }[];
    disable?: boolean;
    color?: string | null;
};
declare const Chips: React.FC<Props>;
export default Chips;
