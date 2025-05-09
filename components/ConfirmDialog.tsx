"use client";

import {
  AlertDialogTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";

interface ConfirmModelProps {
  children: React.ReactNode;
  onConfirm: () => void;
  disabled: boolean;
  header: string;
  description: string;
}

export const ConfirmModel = ({
  children,
  onConfirm,
  header,
  description,
  disabled,
}: ConfirmModelProps) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={handleConfirm}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
