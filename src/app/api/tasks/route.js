import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (request) => {
  const { title, content, status } = await request.json();
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);

  try {
    const task = new Task({
      title,
      content,
      status,
      userId: data._id,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to create Task",
    });
  }
};

export const GET = async () => {
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 404,
      message: "Error getting data",
    });
  }
};
