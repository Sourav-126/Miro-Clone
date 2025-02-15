"use client"; // Only add this if necessary

import * as React from "react";
import { useParams } from "next/navigation"; // Use client-side routing for params

import { Canvas } from "./_components/canva";
import { Room } from "@/components/Room";
import { Loading } from "./_components/loading";

const BoardIdPage = () => {
  const params = useParams(); // Fetch params on the client
  const boardId = params?.boardId as string; // Ensure boardId is always a string

  return (
    <div>
      <Room roomId={boardId} fallback={<Loading />}>
        <Canvas boardId={boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;
