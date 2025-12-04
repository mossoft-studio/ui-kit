import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type {
  InfiniteData,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import InfiniteScroll from "./InfiniteScroll";

type Item = {
  id: number;
  title: string;
};

const createPage = (page: number, size = 12): Item[] =>
  Array.from({ length: size }, (_, i) => {
    const id = page * size + i + 1;
    return { id, title: `Карточка #${id}` };
  });

const InfiniteScrollDemo = () => {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState<Item[][]>([createPage(0)]);

  const hasNextPage = page < 2;

  const fetchNextPage = async () => {
    if (!hasNextPage) return;
    const next = page + 1;
    setPage(next);
    setPages((prev) => [...prev, createPage(next)]);
  };

  const data: InfiniteData<Item[], unknown> = {
    pages,
    pageParams: [],
  };

  const infiniteData: UseInfiniteQueryResult<
    InfiniteData<Item[], unknown>,
    Error
  > = {
    data,
    hasNextPage,
    //@ts-ignore
    fetchNextPage,
    isFetchingNextPage: false,
    isLoading: false,
    isPending: false,
  };

  return (
    <InfiniteScroll<Item>
      infiniteData={infiniteData}
      renderItem={(item) => (
        <div
          key={item.id}
          className="w-full rounded-xl border border-gray-200 p-4 shadow-sm bg-white"
        >
          <div className="text-sm text-gray-500">ID: {item.id}</div>
          <div className="mt-1 font-medium text-gray-900">{item.title}</div>
        </div>
      )}
      loaderComponent={
        <div className="text-sm text-gray-500">Загрузка ещё...</div>
      }
      emptyComponent={<div className="text-sm text-gray-400">Нет данных</div>}
    />
  );
};

const meta: Meta<typeof InfiniteScrollDemo> = {
  title: "UI/InfiniteScroll",
  component: InfiniteScrollDemo,
};

export default meta;

type Story = StoryObj<typeof InfiniteScrollDemo>;

export const Default: Story = {};
