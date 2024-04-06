import { NextResponse } from "next/server";

export const POST = (request) => {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.set("authToken", "", {
    expires: new Date(0),
  });

  return response;
};
