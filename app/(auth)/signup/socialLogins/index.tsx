import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";

function SocialLogins() {
  return (
    <div className=" flex justify-between ">
      <Button size="lg" className="w-40" variant="outline">
        <FcGoogle className="text-2xl mr-1" />
      </Button>
      <Button size="lg" className="w-40" variant="outline">
        <FaGithub className="text-2xl mr-1" />
      </Button>
    </div>
  );
}

export default SocialLogins;
