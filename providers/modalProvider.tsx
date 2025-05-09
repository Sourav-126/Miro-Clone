"use client";

import { useEffect, useState } from "react";

import { RenameModal } from "@/components/modals/renameModel";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <RenameModal />
    </>
  );
};
