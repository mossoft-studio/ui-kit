import { Icon } from "@mossoft/ui-kit";
import { FC, useEffect, useState } from "react";

type Props = { className?: string };

const ScrollTopButton: FC<Props> = ({ className }) => {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -400);
      setTimeout(handlerScrollUp, 1);
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      onClick={(e) => {
        handlerScrollUp();
        e.preventDefault();
      }}
      className={`fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${className}`}
    >
      <Icon
        name="arrow-down"
        className="rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
      />
    </div>
  );
};

export default ScrollTopButton;
