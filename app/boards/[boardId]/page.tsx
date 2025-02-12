import { Canvas } from "./_components/canva";
import { Room } from "@/components/Room";
import { Loading } from "./_components/loading";

interface BoardIdProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = async ({ params }: BoardIdProps) => {
  const { boardId } = params;
  return (
    <div>
      <Room roomId={boardId} fallback={<Loading />}>
        <Canvas boardId={boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;
