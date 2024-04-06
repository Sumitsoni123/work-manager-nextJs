import { httpAxios } from "@/helper/httpHelper";

export const signUp = async (user) => {
  const response = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);

  return response;
};

export const login = async (user) => {
  const response = await httpAxios
    .post("/api/login", user)
    .then((response) => response.data);

  return response;
};

export const currentUser = async () => {
  const response = await httpAxios
    .get("/api/current")
    .then((response) => response.data);

  return response;
};

export const logout = async () => {
  const response = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);

  return response;
};
