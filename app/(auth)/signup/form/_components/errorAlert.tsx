"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { FaExclamation, FaMagic } from "react-icons/fa";

export default function ErrorAlert({ errors }: { errors: string[] }) {
  return (
    <Alert variant="destructive" className="bg-red-50 border-0 mb-3">
      <FaExclamation className="w-4 h-4" />
      <AlertDescription className="font-bold">
        <ul className="flex flex-col">
          {errors.map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
