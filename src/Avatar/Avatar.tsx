"use client";

import { FC, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon from "../Icon/Icon";

type Size = "xs" | "sm" | "md" | "lg";
type Shape = "circle" | "rounded";
type Status = "online" | "offline" | "busy" | "none";

type Props = {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: Size;
  shape?: Shape;
  status?: Status;
  className?: string;
  clickable?: boolean;
};

const sizeMap: Record<Size, { wrapper: string; text: string; status: string }> =
  {
    xs: {
      wrapper: "w-6 h-6 text-[10px]",
      text: "text-[10px]",
      status: "w-2 h-2",
    },
    sm: {
      wrapper: "w-8 h-8 text-xs",
      text: "text-xs",
      status: "w-2.5 h-2.5",
    },
    md: {
      wrapper: "w-10 h-10 text-sm",
      text: "text-sm",
      status: "w-3 h-3",
    },
    lg: {
      wrapper: "w-12 h-12 text-base",
      text: "text-base",
      status: "w-3.5 h-3.5",
    },
  };

const statusColor: Record<Exclude<Status, "none">, string> = {
  online: "bg-emerald-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
};

const Avatar: FC<Props> = ({
  src,
  alt,
  name,
  size = "md",
  shape = "circle",
  status = "none",
  className,
  clickable,
}) => {
  const [broken, setBroken] = useState(false);

  const fallbackInitials = useMemo(() => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (!parts.length) return "";
    if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "";
    return (
      (parts[0][0]?.toUpperCase() ?? "") + (parts[1][0]?.toUpperCase() ?? "")
    );
  }, [name]);

  const showImage = src && !broken;

  const sz = sizeMap[size];

  const borderRadius = shape === "circle" ? "rounded-full" : "rounded-xl";

  return (
    <div
      className={twMerge(
        "relative inline-flex items-center justify-center select-none",
        sz.wrapper,
        borderRadius,
        "bg-blue-100 text-blue-800 font-medium",
        clickable && "cursor-pointer hover:brightness-95 transition",
        className
      )}
    >
      {showImage ? (
        <img
          src={src as string}
          alt={alt ?? name ?? ""}
          className={twMerge("w-full h-full object-cover", borderRadius)}
          onError={() => setBroken(true)}
        />
      ) : fallbackInitials ? (
        <span className={twMerge("uppercase", sz.text)}>
          {fallbackInitials}
        </span>
      ) : (
        <Icon
          name="user"
          className={twMerge(
            "text-blue-400",
            size === "xs"
              ? "w-3.5 h-3.5"
              : size === "sm"
              ? "w-4 h-4"
              : size === "md"
              ? "w-5 h-5"
              : "w-6 h-6"
          )}
        />
      )}

      {status !== "none" && (
        <span
          className={twMerge(
            "absolute bottom-0 right-0 rounded-full ring-2 ring-white",
            sz.status,
            statusColor[status as Exclude<Status, "none">]
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
