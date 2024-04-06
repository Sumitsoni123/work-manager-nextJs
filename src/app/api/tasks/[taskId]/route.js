import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { taskId } = params;

  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Task not found",
    });
  }
};

export const PUT = async (request, { params }) => {
  const { taskId } = params;
  const { title, content, status } = await request.json();

  try {
    let task = await Task.findById(taskId);
    task.title = title;
    task.content = content;
    task.status = status;
    const updatedTask = await task.save();

    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Task not updated",
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { taskId } = params;
    await Task.deleteOne({
      _id: taskId,
    });
    return NextResponse.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Task not deleted",
    });
  }
};
