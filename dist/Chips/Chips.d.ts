import React, { CSSProperties } from "react";
type Props = {
    items: {
        title: string | number;
    }[];
    disable?: boolean;
    color?: string | null;
    style?: CSSProperties;
};
declare const Chips: React.FC<Props>;
export default Chips;
