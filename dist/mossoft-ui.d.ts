import { ControllerFieldState } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { FC } from 'react';
import { FieldError } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';
import { InputHTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';
import { RefObject } from 'react';
import { SelectHTMLAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';
import { UseFormStateReturn } from 'react-hook-form';

export declare const Button: FC<PropsWithChildren<Props>>;

export declare const Checkbox: default_2.FC<Props_2>;

export declare const Chips: default_2.FC<Props_3>;

export declare const ErrorText: FC<Props_4>;

export declare type HeaderData = {
    name: string[];
    title: string;
    unit?: string;
    transform?: (value: any, i: number) => any;
};

export declare const Icon: default_2.FC<Props_5>;

export declare const Input: FC<InputProps>;

declare type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

declare type InputAttributes_2 = InputHTMLAttributes<HTMLInputElement>;

declare type InputProps = {
    type?: HTMLInputTypeAttribute | ("password" | "tel" | "text");
    placeholder?: string;
    field?: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    format?: string;
    decimalScale?: number;
    defaultValue?: string | number | null;
    postfix?: string;
    parentClassName?: string;
    labelClassName?: string;
    label?: string;
    formState?: UseFormStateReturn<any>;
} & InputAttributes;

export declare const List: default_2.FC<Props_6>;

declare type ListItems = {
    label: string;
    value: any;
    row?: string;
};

export declare const Loader: FC<Props_7>;

export declare const MultiSelectSearch: FC<Props_8>;

declare type Options = {
    label: string;
    value: string;
    icon?: string;
};

declare type Props = {
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    loadType?: "1C" | "";
    variant: "primary" | "secondary" | "danger" | "link" | "small-primary" | "small-secondary" | "small-danger" | "tab";
    icon?: string;
};

declare type Props_10 = {
    options: SelectOptions[] | undefined;
    field?: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    className?: string;
    placeholder?: string;
    parentClassName?: string;
    label?: string;
    labelClassName?: string;
    formState?: UseFormStateReturn<any>;
} & SelectAttributes;

declare type Props_11 = {
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

declare type Props_12 = {
    className?: string;
    field?: ControllerRenderProps<any, any>;
    fieldState?: ControllerFieldState;
} & TextareaAttributes;

declare type Props_13 = {
    className?: string;
};

declare type Props_2 = {
    onChange: (value: any) => void;
    title: string;
    secondaryTitle?: string;
    labelClassName?: string;
    className?: string;
    titleClassName?: string;
    checked?: boolean;
    disabled?: boolean;
    error?: FieldError;
};

declare type Props_3 = {
    items: {
        title: string | number;
    }[];
    disable?: boolean;
    color?: string | null;
    style?: CSSProperties;
};

declare type Props_4 = {
    error: FieldError | undefined;
};

declare type Props_5 = {
    name: string;
    className?: string;
};

declare type Props_6 = {
    data: ListItems[];
    className?: string;
    onClick: (value: any) => void;
};

declare type Props_7 = {
    style?: CSSProperties;
    text?: string;
};

declare type Props_8 = {
    options: Options[];
    field?: ControllerRenderProps<any, any>;
    className?: string;
    placeholder?: string;
} & InputAttributes_2;

declare type Props_9 = {
    placeholder?: string;
    value: string;
    parentClassName?: string;
    setValue: (value: string) => void;
};

export declare const Search: default_2.FC<Props_9>;

export declare const Select: default_2.FC<Props_10>;

declare type SelectAttributes = SelectHTMLAttributes<HTMLSelectElement>;

declare type SelectOptions = {
    value: any;
    label: string;
};

export declare const Table: FC<Props_11>;

export declare const Textarea: FC<Props_12>;

declare type TextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;

export declare function useDebounce(value: string, delay: number): string;

export declare const useScroll: () => (RefObject<HTMLDivElement> | (() => void | undefined))[];

export declare const Wrapper: default_2.FC<PropsWithChildren<Props_13>>;

export { }
