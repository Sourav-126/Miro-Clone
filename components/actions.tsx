"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { ConfirmModel } from "./ConfirmDialog";
import { UseApiMutation } from "@/hooks/useApiMutation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useRenameModel } from "@/store/useRenameModel";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  const { onOpen } = useRenameModel();
  const { mutate, pending } = UseApiMutation(api.board.remove);

  const CopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast.success("Link Copied!");
      })
      .catch(() => {
        toast.error("Failed to Copy Link!");
      });
  };

  const onDelete = () => {
    mutate({
      id,
    })
      .then(() => {
        toast.success("Board Deleted");
      })
      .catch(() => {
        toast.error("Failed to Delete board");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => {
          e.stopPropagation();
        }}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem onClick={CopyLink} className="p-3 cursor-pointer">
          <Link2 className="h-4 w-4 mr-2" />
          Copy Board Link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="p-3 cursor-pointer"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <ConfirmModel
          header="Delete Board?"
          description="This will delete the board and all of its contents"
          onConfirm={onDelete}
          disabled={pending}
        >
          <Button
            variant="ghost"
            className=" text-small w-full justify-start font-normal p-3 cursor-pointer"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Board
          </Button>
        </ConfirmModel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
