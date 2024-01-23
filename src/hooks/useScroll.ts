import { useRef } from "react";

export const useScroll = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const executeScroll = () =>
    elRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  return [executeScroll, elRef];
};
