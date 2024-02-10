import SideBar from "../_common/sidebar";

export default function LayoutI({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-[#f4f4f4]">
      <div className="bg-white hidden lg:flex lg:fixed left-0 top-0 h-full w-80 items-stretch">
        <SideBar />
      </div>

      <main className="w-full h-full">{children}</main>
    </div>
  );
}
