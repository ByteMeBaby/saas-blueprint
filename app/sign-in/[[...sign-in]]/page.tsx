import FullScreen from "@/components/custom/full-screen";
import Logo from "@/components/custom/logo";
import { SignIn } from "@clerk/nextjs";
import appearance from "../../../consts/styles/auth/appearance";

export default function SignInPage() {
  return (
    <FullScreen className="bg-gray-50">
      <Logo className="mb-12" />
      <SignIn appearance={appearance} />
    </FullScreen>
  );
}