import { Loader } from "@mossoft/ui-kit";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ScrollTopButton from "@/ScrollTopButton/ScrollTopButton";

/**
 * A InfinityScroll component
 * @param {object} props
 * @property infiniteData - Use TanStack Query to integrate with this component.
 * @property renderItem - A function that returns card JSX.Element
 */

type Props<T> = {
  infiniteData: UseInfiniteQueryResult<InfiniteData<T[], unknown>, Error>;
  className?: string;
  renderItem: (item: T, index: number) => JSX.Element;
  iconClassName?: string;
  isScrollTopButton?: boolean;
};

const InfiniteScroll = <T,>({
  infiniteData,
  renderItem,
  className,
  iconClassName,
  isScrollTopButton = true,
}: Props<T>) => {
  const { hasNextPage, fetchNextPage, isFetchingNextPage, isLoading, data } =
    infiniteData;

  const flattenPages = data?.pages.flatMap((page) => page);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  return (
    <>
      {isScrollTopButton && <ScrollTopButton className={iconClassName} />}
      <div
        className={`grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${className}`}
      >
        {!!flattenPages?.length &&
          flattenPages.map((item, index) => renderItem(item, index))}
      </div>
      <div
        className="h-4 flex mt-8 flex-row items-center justify-center"
        ref={ref}
      >
        {((isFetchingNextPage || isLoading) && (
          <Loader text="Загрузка" style={{ width: 40, height: 40 }} />
        )) ||
          (!Boolean(flattenPages?.length) && (
            <span className="text-primary font-medium text-basetext-2xl text-2xl">
              К сожалению, по Вашему запросу ничего не найдено 😓
            </span>
          ))}
      </div>
    </>
  );
};

export default InfiniteScroll;
