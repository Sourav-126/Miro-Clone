"use client";

import { EmptyBoards } from "./emptyBoards";
import { EmptyFavorites } from "./emptyFavorites";
import { EmptySearch } from "./emptySearch";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./boardCard";
import { NewBoardButton } from "./newBoardButton";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId, ...query });

  if (data === undefined) {
    return <BoardCard.Skeleton />;
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }
  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorites Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            imageUrl={board.imageUrl}
            title={board.title}
            createdAt={board._creationTime}
            authorId={board.authorId}
            authorName={board.authorName}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
