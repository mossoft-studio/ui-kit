import React from "react";
declare type ListItems = {
    label: string;
    value: any;
    row?: string;
};
declare type Props = {
    data: ListItems[];
    className?: string;
    onClick: (value: any) => void;
};
declare const List: React.FC<Props>;
export default List;
