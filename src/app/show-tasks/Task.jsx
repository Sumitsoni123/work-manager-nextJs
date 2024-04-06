"use client";
import React, { useContext } from "react";
import UserContext from "../context/userContext";
import { GiCancel } from "react-icons/gi";

const Task = ({ task, deleteTask }) => {
  const { user } = useContext(UserContext);

  const removeTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div
      className={`shadow-lg mt-3 rounded-md ${
        task.status === "completed"
          ? "bg-green-600 hover:bg-green-400"
          : "bg-yellow-600 hover:bg-yellow-400"
      }`}
    >
      <div className="p-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <span
            onClick={() => {
              removeTask(task._id);
            }}
          >
            <GiCancel />
          </span>
        </div>
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status:{" "}
            <span className="font-bold">{task.status.toUpperCase()}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
