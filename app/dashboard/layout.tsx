"use client";

import SideBar from "../_common/sidebar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TopNavigation from "../_common/topNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-[#f4f4f4] flex flex-col">
      <TopNavigation />
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg border"
      >
        <ResizablePanel
          defaultSize={25}
          maxSize={25}
          minSize={10}
          className="h-full"
        >
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}> second {children} </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
