import FullScreen from "@/components/custom/full-screen";
import { SignUp } from "@clerk/nextjs";
import Logo from "@/components/custom/logo";

export default function SignUpPage() {
  return (
    <FullScreen className="bg-gray-50">
      <Logo className="mb-12" />
      <SignUp
        appearance={{
          elements: {
            card: "shadow-none",
            "signIn-start": "shadow-none",
            rootBox: "rounded-md border border-gray-100",
          },
        }}
      />
    </FullScreen>
  );
}
