import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Use the default export pattern for Auth.js v5
export default NextAuth(authConfig).auth;

export const config = {
  // Updated matcher to exclude static files more reliably
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";

// export const { auth: middleware } = NextAuth(authConfig);

// //configure which paths the middleware should run on

// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*", "/appointments/:path*"],
// };
