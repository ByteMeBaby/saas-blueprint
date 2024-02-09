"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import ThematicBreak from "@/components/ui/thematicBreak";
import { FcBinoculars } from "react-icons/fc";
import AuthForm from "./form";
import { RxBorderDotted } from "react-icons/rx";
import SocialLogins from "./socialLogins";

function SigninPage() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <FcBinoculars className="text-6xl" />
      <h1 className="text-2xl font-bold">Welcome Back!</h1>
      <RxBorderDotted className="mb-8 text-lg" />
      <Card className="w-96">
        <CardContent>
          <CardDescription className="my-6">Continue with</CardDescription>
          <SocialLogins />
          <ThematicBreak>
            <CardDescription>Or</CardDescription>
          </ThematicBreak>
          <AuthForm />
        </CardContent>
      </Card>
      <p className="w-96 text-sm text-center text-gray-600 mt-6">
        No account? Sign in above, and it&apos;ll create one for you!!!
      </p>
    </div>
  );
}

export default SigninPage;
