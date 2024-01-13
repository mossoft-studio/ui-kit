import { FC, PropsWithChildren } from "react";
type Props = {
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    loadType?: "1C" | "";
    variant: "primary" | "secondary" | "danger" | "link" | "small-primary" | "small-yellow" | "small-secondary" | "small-danger" | "tab";
    icon?: "plus" | "start" | "pause" | "stop" | "scan";
};
declare const Button: FC<PropsWithChildren<Props>>;
export default Button;
