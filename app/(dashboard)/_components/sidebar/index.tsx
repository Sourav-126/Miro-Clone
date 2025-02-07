import { NewButton } from "../newButton";
import { List } from "./list";

export const SideBar = () => {
  return (
    <div>
      <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
        <List />
        <NewButton />
      </aside>
    </div>
  );
};
