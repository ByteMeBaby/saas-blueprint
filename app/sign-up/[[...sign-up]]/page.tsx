import FullScreen from "@/components/custom/full-screen";
import { SignUp } from "@clerk/nextjs";
import appearance from "../../../consts/styles/auth/appearance";
import Logo from "@/components/custom/logo";

export default function SignUpPage() {
  return (
    <FullScreen className="bg-gray-50">
      <Logo className="mb-12" />
      <SignUp appearance={appearance} />
    </FullScreen>
  );
}
