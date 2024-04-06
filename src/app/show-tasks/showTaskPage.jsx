"use client";
import { removeTask, showTasks } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTaskPage = () => {
  const context = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  const loadTasks = async (userId) => {
    try {
      const data = await showTasks(userId);
      setTasks([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const res = await removeTask(taskId);
      if (res) {
        setTasks(tasks.filter((item) => item._id !== taskId));
        toast.success("task deleted Successfully");
      }
    } catch (error) {
      toast.error("Could not delete Task");
    }
  };

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3">Your Tasks: ({tasks.length})</h1>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task task={task} key={task._id} deleteTask={deleteTask} />
          ))
        ) : (
          <h2>No Tasks Found</h2>
        )}
      </div>
    </div>
  );
};

export default ShowTaskPage;
