"use client";
import { memo } from "react";
import { Cursor } from "./cursor";
import { useOthersConnectionIds } from "@liveblocks/react";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionIds) => {
        <Cursor key={connectionIds} connectionId={connectionIds} />;
      })}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorPresence";
