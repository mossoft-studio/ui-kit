import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ScrollTopButton from "@/ScrollTopButton/ScrollTopButton";
import { twMerge } from "tailwind-merge";

/**
 * A InfiniteScroll component
 * @param {object} props
 * @property infiniteData - Use TanStack Query to integrate with this component.
 * @property renderItem - A function that returns card JSX.Element
 */

type Props<T> = {
  infiniteData: UseInfiniteQueryResult<InfiniteData<T[], unknown>, Error>;
  className?: string;
  renderItem: (item: T, index: number) => JSX.Element;
  iconClassName?: string;
  emptyClassName?: string;
  isScrollTopButton?: boolean;
  emptyComponent?: ReactNode;
  loaderComponent?: ReactNode;
};

const InfiniteScroll = <T,>({
  infiniteData,
  renderItem,
  className,
  iconClassName,
  emptyComponent,
  emptyClassName,
  loaderComponent,
  isScrollTopButton = true,
}: Props<T>) => {
  const {
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    data,
    isPending,
  } = infiniteData;

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
        className={twMerge(
          "flex mt-8 flex-row items-center justify-center",
          emptyClassName
        )}
        ref={ref}
      >
        {isLoading || isPending
          ? loaderComponent
          : !flattenPages?.length
          ? emptyComponent
          : isFetchingNextPage
          ? loaderComponent
          : null}
      </div>
    </>
  );
};

export default InfiniteScroll;
