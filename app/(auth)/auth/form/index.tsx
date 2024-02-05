"use client";

import * as z from "zod";
import AlertSuccess from "@/components/wrappers/alerts/success";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FaExclamation, FaMagic } from "react-icons/fa";
import { useState } from "react";
import schema from "@/schema/magicLink";
import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormMessage,
} from "@/components/ui/form";

import { redirect } from "next/navigation";

import {
  MagicLinkErrorCode,
  isMagicLinkError,
  useClerk,
  useSignUp,
} from "@clerk/nextjs";

function AuthForm() {
  const [isSent, setIsSent] = useState(false);
  const [errors] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const { signUp, isLoaded, setActive } = useSignUp();

  if (!isLoaded) {
    return null;
  }

  const { startMagicLinkFlow, cancelMagicLinkFlow } =
    signUp.createMagicLinkFlow();

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    console.log(data);
    try {
      const x = await signUp.create({ emailAddress: data.email });
      console.log(x);

      const su = await startMagicLinkFlow({
        redirectUrl: "http://localhost:3000/auth",
      });

      console.log(su, "sju");

      // Check the verification result.
      const verification = su.verifications.emailAddress;

      console.log(verification, "verification");
      if (su.status === "complete") {
        // Sign up is complete, we have a session.
        // Navigate to the after sign up URL.
        setActive({
          session: su.createdSessionId,
          beforeEmit: () => redirect("/dashboard"),
        });
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isSent) {
    return <AlertSuccess text="Check your email for a login link" />;
  }

  if (errors) {
    return (
      <Alert variant="destructive" className="bg-red-50 border-0">
        <FaExclamation className="w-4 h-4" />
        <AlertDescription className="font-bold">
          Something went wrong
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Form {...form}>
      works
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Email" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" className="mt-3 w-full">
          Send a login link
          <FaMagic className="ml-2" />
        </Button>
      </form>
    </Form>
  );
}

export default AuthForm;
