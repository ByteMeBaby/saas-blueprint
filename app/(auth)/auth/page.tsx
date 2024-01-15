"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ThematicBreak from "@/components/ui/thematicBreak";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FcBinoculars } from "react-icons/fc";
import * as z from "zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

function SigninPage() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (data: any) => {
    console.log(data);
  };

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
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <p className="w-96 text-sm text-center text-gray-600 mt-6">
        No account? Sign in above, and it&apos;ll create one for you!!!
      </p>
    </div>
  );
}

export default SigninPage;
