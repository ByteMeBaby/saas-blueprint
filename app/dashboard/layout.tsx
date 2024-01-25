import Logo from "./_common/logo";
import SideBar from "./_common/sidebar";
import TopNavigation from "./_common/topNavigation";

export default function LayoutI({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-[#f4f4f4]">
      <div className="bg-white hidden lg:flex lg:fixed left-0 top-0 h-full w-80 items-stretch">
        <SideBar />
      </div>

      <div className="fixed flex w-full justify-between bg-white py-4 px-3">
        <Logo />
        <TopNavigation />
      </div>

      <main>{children}</main>
    </div>
  );
}
