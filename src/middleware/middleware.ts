import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked 'async' if using await inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path == "/login" ||
    path === "/register" ||
    path === "/" ||
    path === "/forgottenPassword";

  const token = request.cookies.get("token")?.value || "";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// see "Matching Paths" below to learn more
export const config = {
  matchers: ["/", "/profile", "/login", "/register"],
};
