import React from "react";
type Props = {
    name: Icons;
    className?: string;
};
export type Icons = "brigadier" | "verification" | "greenhouse" | "notification" | "privacy" | "exit" | "salary" | "search" | "disease" | "start" | "pause" | "stop" | "plus" | "scan" | "market" | "forecast" | "plant" | "proposal" | "success" | "error" | "point";
declare const Icon: React.FC<Props>;
export default Icon;
