"use client";
import { signOut, useSession } from "next-auth/react";
import Logo from "./logo";
import Image from "next/image";

export default function SideBar() {
  const session = useSession();

  console.log(session);

  return (
    <aside className="bg-purple-600 hidden lg:flex lg:fixed left-0 top-0 h-full w-80 lg:flex-col items-stretch">
      <div className="py-3 px-3 mt-10 mb-5">
        <Logo />
      </div>
      <nav className="flex-grow">
        <div>
          <span className="px-3 py-1 text-white text-sm">Main section</span>
        </div>
        <div>
          <span className="px-3 py-1 text-white text-sm mt-4">
            Secondary section
          </span>
        </div>
      </nav>
      <footer className="p-3">
        <div className="flex items-center ">
          <Image
            width={36}
            height={36}
            src={
              (session?.data?.user?.image as string) ||
              "https://avatars.githubusercontent.com/u/65569978?v=4"
            }
            alt="User Image"
            className="rounded-full"
          />
          <div className="ml-3 text-white cursor-pointer">
            <span className="text-white" onClick={() => signOut()}>
              Signout
            </span>
          </div>
        </div>
      </footer>
    </aside>
  );
}
