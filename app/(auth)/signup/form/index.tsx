"use client";

import * as z from "zod";
import AlertSuccess from "@/components/wrappers/alerts/success";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FaMagic } from "react-icons/fa";
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
import ErrorAlert from "./_components/errorAlert";

function AuthForm() {
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const { signUp, isLoaded, setActive } = useSignUp();
  const [verified, setVerified] = useState(false);

  if (!isLoaded) {
    return null;
  }

  const { startMagicLinkFlow, cancelMagicLinkFlow } =
    signUp.createMagicLinkFlow();

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const x = await signUp.create({ emailAddress: data.email });

      const su = await startMagicLinkFlow({
        redirectUrl: "http://localhost:3000/auth-completed",
      });

      setIsSent(true);

      // Check the verification result.
      const verification = su.verifications.emailAddress;

      if (verification.status === "expired") {
        setErrors(["The magic link has expired. Please try again."]);
      }

      if (su.status === "complete") {
        setActive({
          session: su.createdSessionId,
        });

        setVerified(true);
        return;
      }
    } catch (error: any) {
      if (error?.errors) {
        const messages = error.errors.map((error: any) => {
          return error.message;
        });

        setErrors((errors) => [...errors, ...messages]);
      }
    }
  };

  if (isSent) {
    return <AlertSuccess text="Check your email for a login link" />;
  }

  if (verified) {
    redirect("/dashboard");
  }

  if (signUp.status === "complete" && signUp.createdSessionId) {
    redirect("/dashboard");
  }

  return (
    <>
      {errors?.length > 0 && <ErrorAlert errors={errors} />}

      <Form {...form}>
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
    </>
  );
}

export default AuthForm;
