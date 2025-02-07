import { Canvas } from "./_components/canva";
import { Room } from "@/components/Room";
import { Loading } from "./_components/loading";

interface BoardIdProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdProps) => {
  return (
    <div>
      <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;
