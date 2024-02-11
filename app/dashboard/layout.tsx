"use client";

import SideBar from "../_common/sidebar";
import { useCallback, useState, MouseEvent } from "react";
import { TfiHandDrag } from "react-icons/tfi";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
export default function LayoutI({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState(350); // Initial width of the component
  const [isDragging, setIsDragging] = useState(false);

  const startResizing = useCallback(
    (mouseDownEvent: React.MouseEvent<HTMLElement>) => {
      setIsDragging(true);

      const startWidth = width;
      const startX = mouseDownEvent.clientX;

      const doDrag = (mouseMoveEvent: MouseEvent) => {
        const currentX = mouseMoveEvent.clientX;
        const newWidth = startWidth + (currentX - startX);

        if (newWidth < 250 || newWidth > 500) {
          return;
        }
        setWidth(newWidth);
      };

      const stopDrag = () => {
        setIsDragging(false);
        document?.removeEventListener(
          "mousemove",
          doDrag as unknown as EventListener,
        );
        document.removeEventListener("mouseup", stopDrag);
      };

      document.addEventListener(
        "mousemove",
        doDrag as unknown as EventListener,
      );
      document.addEventListener("mouseup", stopDrag);
    },
    [width],
  );

  return (
    <div className="w-full h-full bg-[#f4f4f4]">
      <div
        className="bg-white hidden lg:flex lg:fixed left-0 top-0 h-full w-80 items-stretch"
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

      <main className="w-full h-full">{children}</main>
    </div>
  );
}
