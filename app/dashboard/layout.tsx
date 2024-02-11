"use client";

import SideBar from "../_common/sidebar";
import useResize from "@/hooks/useResize";
import { TfiHandDrag } from "react-icons/tfi";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { width, isDragging, startResizing } = useResize();

  return (
    <div className="w-full h-full bg-[#f4f4f4] flex">
      <div
        className="bg-white flex left-0 top-0 h-full relative w-80 items-stretch"
        style={{ width: `${width}px` }}
      >
        <div
          className={
            "absolute flex px-1 py-2 right-0 top-0 select-none " +
            (isDragging ? "cursor-grabbing" : "cursor-grab")
          }
          onMouseDown={startResizing}
        >
          <FiChevronsLeft />
          <TfiHandDrag />
          <FiChevronsRight />
        </div>
        <SideBar />
      </div>

      <main
        className="h-full"
        style={{
          width: `calc(100% - ${width}px)`,
        }}
      >
        {children}
      </main>
    </div>
  );
}
