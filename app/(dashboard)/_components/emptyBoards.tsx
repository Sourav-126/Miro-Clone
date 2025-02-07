"use client";

import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { useOrganization } from "@clerk/clerk-react";
import { UseApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = UseApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) {
      return;
    }
    mutate({
      orgId: organization.id,
      title: "untitled",
    })
      .then(() => {
        //id
        toast.success("Board Created");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Nothing Found" height={150} width={150} />
      <h2 className="text-2xl font-semibold mt-6">Create your First Board! </h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Start by creating board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
