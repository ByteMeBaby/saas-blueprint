"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function TopNavigation() {
  return (
    <nav className="p-3 flex justify-between items-center bg-white">
      <div>
        <div className="w-40 h-10 bg-gray-200" />
      </div>
      <div className="flex items-center justify-between">
        <Button variant="secondary" className="mr-3" size="sm">
          <PlusCircle />
        </Button>

        <UserButton
          afterSignOutUrl="/sign-in"
          userProfileUrl="/dashboard/user-profile"
          userProfileMode="modal"
        />
      </div>
    </nav>
  );
}
