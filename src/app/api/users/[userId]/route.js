import { User } from "@/models/users";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });

    return NextResponse.json({
      success: true,
      message: "user deleted!!",
    });
  } catch (error) {
    return NextResponse.json({
      message: "error deleting user!!",
    });
  }
  return NextResponse.json(userId);
};
