"use client";
import { addTask } from "@/services/taskService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTask = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await addTask(values);
      console.log(res);
      toast.success("Your task is added !!", {
        position: "top-right",
      });

      setValues({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("failed to create task !!", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <h1 className="text-3xl text-center">Add Task Component</h1>

        <form action="#" onSubmit={onSubmit}>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="task_title"
              value={values.title}
              onChange={(event) => {
                setValues({
                  ...values,
                  title: event.target.value,
                });
              }}
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              value={values.content}
              onChange={(event) => {
                setValues({
                  ...values,
                  content: event.target.value,
                });
              }}
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              name="task_status"
              value={values.status}
              onChange={(event) => {
                setValues({
                  ...values,
                  status: event.target.value,
                });
              }}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Todo
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
