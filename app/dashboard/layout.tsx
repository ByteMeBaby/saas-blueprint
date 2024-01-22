import SideBar from "./_common/sidebar";

export default function LayoutI({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gray-50">
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
