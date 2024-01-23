import { FC } from "react";
export declare type HeaderData = {
    name: string[];
    title: string;
    unit?: string;
    transform?: (value: any, i: number) => any;
};
declare type Props = {
    headerData: HeaderData[];
    data?: any[];
    isDragDisabled?: boolean;
    haveLinks: boolean;
    onRowClick?: (id: string) => void;
    isLoading?: boolean;
    itemClickKey?: string;
    setSort?: (value: string) => void;
    sort?: string;
};
declare const DraggableList: FC<Props>;
export default DraggableList;
