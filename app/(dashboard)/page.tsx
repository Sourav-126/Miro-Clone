"use client";
import { BoardList } from "./_components/BoardList";
import { EmptyOrg } from "./_components/EmptyOrg";
import { useSearchParams } from "next/navigation";
import { useOrganization } from "@clerk/clerk-react";

interface DashBoardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({}: DashBoardPageProps) => {
  const searchParams = useSearchParams();
  const { organization } = useOrganization();
  const search = searchParams.get("search") || "";
  const favorites = searchParams.get("favorites") || "";

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={{ search, favorites }} />
      )}
    </div>
  );
};

export default DashboardPage;
