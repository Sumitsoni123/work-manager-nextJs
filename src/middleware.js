import { NextResponse } from "next/server";

export const middleware = (request) => {
  const authToken = request.cookies.get("authToken")?.value;
  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  )
    return;

  const publicUrls = ["/login", "/signup"];
  if (authToken) {
    if (publicUrls.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    // if not authenticated and trying to access protected routes
    if (!publicUrls.includes(request.nextUrl.pathname)) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            message: "Access Denied",
            success: false,
          },
          {
            status: 401,
          }
        );
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/api/:path*",
    "/profile/:path*",
  ],
};
