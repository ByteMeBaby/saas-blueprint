// https://nextjs.org/docs/app/building-your-application/routing/middleware
// https://authjs.dev/reference/nextjs#in-middleware
import authConfig from "@/config/auth";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  console.log(req.auth);
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
