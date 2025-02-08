"use client";
import { memo } from "react";
import { Cursor } from "./cursor";
import { useOthers } from "@liveblocks/react";
const Cursors = () => {
  const others = useOthers();

  return (
    <>
      {others.map(({ connectionId, presence }) => {
        if (!presence?.cursor) return null;

        return <Cursor key={connectionId} connectionId={connectionId} />;
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
