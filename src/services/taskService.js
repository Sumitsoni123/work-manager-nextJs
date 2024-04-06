import { httpAxios } from "@/helper/httpHelper";

export const addTask = async (task) => {
  const response = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);

  return response;
};

export const showTasks = async (userId) => {
  const response = await httpAxios
    .get(`/api/users/${userId}/tasks`)
    .then((response) => response.data);

  return response;
};

export const removeTask = async (taskId) => {
  const response = await httpAxios
    .delete(`/api/tasks/${taskId}`)
    .then((response) => response.data);

  return response;
};
