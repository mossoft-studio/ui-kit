import { FC } from "react";
export type HeaderData = {
    name: string[];
    title: string;
    unit?: string;
    transform?: (value: any, i: number) => any;
};
type Props = {
    headerData: HeaderData[];
    data?: any[];
    className: string;
    isDragDisabled?: boolean;
    haveLinks: boolean;
    onRowClick?: (id: any) => void;
    isLoading?: boolean;
    itemClickKey?: string;
    setSort?: (value: string) => void;
    sort?: string;
};
declare const DraggableList: FC<Props>;
export default DraggableList;
