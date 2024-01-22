import { auth } from "@/auth";
export default function Page() {
  const session = auth();

  session.then((session) => {
    console.log("session", session);
  });

  return <div>this is page</div>;
}
