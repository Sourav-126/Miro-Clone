import Image from "next/image";

import { Button } from "@/components/ui/button";

import { CreateOrganization } from "@clerk/clerk-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Image" height={200} width={200} />
      <h2 className="font-semibold text-2xl mt-6">Welcome to board!</h2>
      <p>Create an organization to get started</p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <VisuallyHidden.Root>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
          </VisuallyHidden.Root>
        </Dialog>
      </div>
    </div>
  );
};
