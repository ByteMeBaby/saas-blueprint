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
    <div className="w-full h-full bg-white flex flex-col">
      <TopNavigation />
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg "
      >
        <ResizablePanel
          defaultSize={25}
          maxSize={25}
          minSize={10}
          className="h-full hidden md:flex"
        >
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-gray-50 hidden md:flex" />
        <ResizablePanel defaultSize={75}> {children} </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
