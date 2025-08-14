import { ComponentProps } from 'react';
import { ControllerFieldState } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { FC } from 'react';
import { FieldError } from 'react-hook-form';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { InputHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { ReactNode } from 'react';
import { RefObject } from 'react';
import { SelectHTMLAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';
import { UseFormStateReturn } from 'react-hook-form';
import { UseInfiniteQueryResult } from '@tanstack/react-query';

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

export declare const Icon: default_2.NamedExoticComponent<Props_5>;

export declare const InfiniteScroll: <T>({ infiniteData, renderItem, className, iconClassName, emptyComponent, emptyClassName, loaderComponent, isScrollTopButton, }: Props_15<T>) => JSX_2.Element;

export declare const Input: <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ size, type, field, label, fieldState, postfix, labelClassName, parentClassName, className, numberWrapperClassname, format, wrapperClassName, decimalScale, ...rest }: Props_6<TFieldValues, TName>) => JSX_2.Element;

declare type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

export declare const List: default_2.FC<Props_7>;

declare type ListItems = {
    label: string;
    value: any;
    row?: string;
};

export declare const Loader: FC<Props_8>;

declare type MotionButtonProps = ComponentProps<typeof motion.button>;

export declare const MultiSelectSearch: FC<Props_9>;

declare type Options = {
    label: string;
    value: string;
    icon?: string;
};

declare type Props = {
    onClick: () => void;
    debounceTimeMs?: number;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    variant: "primary" | "secondary" | "danger" | "link" | "small-primary" | "small-secondary" | "small-danger" | "tab";
    icon?: string;
} & MotionButtonProps;

declare type Props_10 = {
    placeholder?: string;
    value: string;
    parentClassName?: string;
    className?: string;
    setValue: (value: string) => void;
};

declare type Props_11 = {
    options: SelectOptions[] | undefined;
    field?: ControllerRenderProps<any, any>;
    fieldState?: ControllerFieldState;
    className?: string;
    placeholder?: string;
    parentClassName?: string;
    wrapperClassName?: string;
    label?: string;
    labelClassName?: string;
    formState?: UseFormStateReturn<any>;
} & SelectAttributes;

declare type Props_12 = {
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

declare type Props_13 = {
    className?: string;
    field?: ControllerRenderProps<any, any>;
    fieldState?: ControllerFieldState;
} & TextareaAttributes;

declare type Props_14 = {
    className?: string;
};

/**
 * A InfiniteScroll component
 * @param {object} props
 * @property infiniteData - Use TanStack Query to integrate with this component.
 * @property renderItem - A function that returns card JSX.Element
 */
declare type Props_15<T> = {
    infiniteData: UseInfiniteQueryResult<InfiniteData<T[], unknown>, Error>;
    className?: string;
    renderItem: (item: T, index: number) => JSX.Element;
    iconClassName?: string;
    emptyClassName?: string;
    isScrollTopButton?: boolean;
    emptyComponent?: ReactNode;
    loaderComponent?: ReactNode;
};

declare type Props_16 = {
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

declare type Props_6<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
    size?: Size;
    type?: HTMLInputTypeAttribute | ("password" | "tel" | "text");
    field?: ControllerRenderProps<TFieldValues, TName>;
    fieldState?: ControllerFieldState;
    formState?: UseFormStateReturn<TFieldValues>;
    format?: string;
    labelClassName?: string;
    label?: string;
    decimalScale?: number;
    wrapperClassName?: string;
    value?: TFieldValues[TName];
    parentClassName?: string;
    defaultValue?: string | number | null;
    postfix?: string;
    numberWrapperClassname?: string;
    errorPlace?: "bottom" | "right";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

declare type Props_7 = {
    data: ListItems[];
    className?: string;
    onClick: (value: any) => void;
};

declare type Props_8 = {
    style?: CSSProperties;
    text?: string;
};

declare type Props_9 = {
    options: Options[];
    field?: ControllerRenderProps<any, any>;
    className?: string;
    placeholder?: string;
} & InputAttributes;

export declare const ScrollTopButton: FC<Props_16>;

export declare const Search: default_2.FC<Props_10>;

export declare const Select: default_2.FC<Props_11>;

declare type SelectAttributes = SelectHTMLAttributes<HTMLSelectElement>;

declare type SelectOptions = {
    value: any;
    label: string;
};

declare type Size = "sm" | "md" | "lg";

export declare const Table: FC<Props_12>;

export declare const Textarea: FC<Props_13>;

declare type TextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;

export declare function useDebounce(value: string, delay: number): string;

export declare const useScroll: () => (RefObject<HTMLDivElement> | (() => void | undefined))[];

export declare const Wrapper: default_2.FC<PropsWithChildren<Props_14>>;

export { }
