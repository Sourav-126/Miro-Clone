"use client";
import { Plus } from "lucide-react";

import { CreateOrganization } from "@clerk/clerk-react";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Hint } from "./hint";
import { VisuallyHidden } from "radix-ui";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            sideOffset={18}
            side="right"
            align="start"
          >
            <button className="bg-white/25 h-full w-full rounded-md flex justify-center items-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white"></Plus>
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <VisuallyHidden.Root>
      <DialogContent className="p-0 bg-transparent border-none max-w -[480px]">
        <CreateOrganization />
      </DialogContent>
      </VisuallyHidden.Root>
    </Dialog>
  );
};
