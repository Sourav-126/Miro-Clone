import { OrgSidebar } from "./_components/OrgSidebar";
import { SideBar } from "./_components/sidebar";
import { Navbar } from "./_components/Navbar";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="pt-[60] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoardLayout;
