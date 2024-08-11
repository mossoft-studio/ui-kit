import React from "react";
type ListItems = {
    label: string;
    value: any;
    row?: string;
};
type Props = {
    data: ListItems[];
    className?: string;
    onClick: (value: any) => void;
};
declare const List: React.FC<Props>;
export default List;
