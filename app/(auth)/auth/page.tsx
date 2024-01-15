"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import ThematicBreak from "@/components/ui/thematicBreak";
import { FcBinoculars } from "react-icons/fc";
import AuthForm from "./form";

function SigninPage() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <FcBinoculars className="text-6xl" />
      <h1 className="text-2xl font-bold mb-8">Welcome Back!</h1>
      <Card className="w-96">
        <CardContent>
          <CardDescription className="my-6">Continue with</CardDescription>
          <div className=" flex justify-between ">
            <Button size="lg" className="w-40" variant="outline">
              <FcGoogle className="text-2xl mr-1" />
            </Button>
            <Button size="lg" className="w-40" variant="outline">
              <FaGithub className="text-2xl mr-1" />
            </Button>
          </div>

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
