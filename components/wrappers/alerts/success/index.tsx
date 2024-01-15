import { GoRocket } from "react-icons/go";

import { Alert, AlertDescription } from "@/components/ui/alert";

function AlertSuccess({ text }: { text: string }) {
  return (
    <Alert className="bg-green-50 border-0">
      <span className="flex font-bold text-green-700">
        <GoRocket className="h-4 w-4 mr-3" />
        <AlertDescription>{text} </AlertDescription>
      </span>
    </Alert>
  );
}

export default AlertSuccess;
