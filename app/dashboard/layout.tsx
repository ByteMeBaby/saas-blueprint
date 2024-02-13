"use client";

import SideBar from "../_common/sidebar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-[#f4f4f4] flex">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg border"
      >
        <ResizablePanel defaultSize={25} maxSize={25} className="h-full">
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}> second {children} </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
