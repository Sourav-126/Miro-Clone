import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "radix-ui";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
      </DialogTrigger>
      <VisuallyHidden.Root>
        <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
          <OrganizationProfile routing="hash" />
        </DialogContent>
      </VisuallyHidden.Root>
    </Dialog>
  );
};

export default InviteButton;
