export default function SideBar() {
  return (
    <aside className="flex flex-col h-full text-nowrap">
      <nav className="flex-grow">
        <div>
          <span className="px-3 py-1 text-sm">Main section</span>
        </div>
        <div>
          <span className="px-3 py-1 text-sm mt-4">Secondary section</span>
        </div>
      </nav>
      <footer className="p-3"></footer>
    </aside>
  );
}
