"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { FormEventHandler } from "react";
import { api } from "@/convex/_generated/api";
import { UseApiMutation } from "@/hooks/useApiMutation";
import { useRenameModel } from "@/store/useRenameModel";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { VisuallyHidden } from "radix-ui";

export const RenameModal = () => {
  const { mutate, pending } = UseApiMutation(api.board.update);

  const { isOpen, onClose, initialValues } = useRenameModel();

  const [title, setTitle] = useState(initialValues.title);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({
      id: initialValues.id,
      title,
    })
      .then(() => {
        toast.success("Board title updated");
      })
      .catch(() => toast.error("Failed to update board title"))
      .finally(onClose);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <VisuallyHidden.Root>
        <DialogContent>
          <DialogHeader>Edit board title</DialogHeader>
          <DialogDescription>
            Enter a new title for this board
          </DialogDescription>
          <form onSubmit={onSubmit} className="space-y-4">
            <Input
              disabled={pending}
              required
              maxLength={60}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Board title"
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button disabled={pending} type="submit">
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </VisuallyHidden.Root>
    </Dialog>
  );
};
