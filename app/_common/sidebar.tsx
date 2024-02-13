"use client";
import Logo from "../../components/custom/logo";
import { UserButton } from "@clerk/nextjs";

export default function SideBar() {
  return (
    <aside className="flex flex-col w-full min-w-[300px]">
      <div className="flex w-full items-center justify-center mb-3 p-3">
        <Logo />
        <p className="text-gray-600 text-2xl font-medium">SaaS Blueprint</p>
      </div>
      <nav className="flex-grow">
        <div>
          <span className="px-3 py-1 text-sm">Main section</span>
        </div>
        <div>
          <span className="px-3 py-1 text-sm mt-4">Secondary section</span>
        </div>
      </nav>
      <footer className="p-3">
        <UserButton
          afterSignOutUrl="/sign-in"
          userProfileUrl="/dashboard/user-profile"
          userProfileMode="modal"
        />
      </footer>
    </aside>
  );
}
