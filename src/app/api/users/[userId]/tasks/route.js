import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { userId } = params;

  try {
    const alltasks = await Task.find({ userId: userId });
    return NextResponse.json(alltasks);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Task not found",
    });
  }
};
