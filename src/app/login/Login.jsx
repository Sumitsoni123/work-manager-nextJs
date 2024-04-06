"use client";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "../context/userContext";

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await login(values);
      if (result) {
        toast.success("Logged In");
        setValues({
          email: "",
          password: "",
        });
        context.setUser(result.user);
        router.push("/profile/user");
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
      });
    }
  };

  const resetForm = () => {
    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <h1 className="text-3xl text-center">Login Here</h1>
          <form className="mt-5" onSubmit={onSubmit}>
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email here"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                id="user_email"
                name="email"
                value={values.email}
                onChange={(event) => {
                  setValues({
                    ...values,
                    email: event.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password here"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                id="user_password"
                name="password"
                value={values.password}
                onChange={(event) => {
                  setValues({
                    ...values,
                    password: event.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-3 flex justify-center space-x-3">
              <button
                type="submit"
                className="px-2 py-3 bg-green-600 rounded hover:bg-green-400"
              >
                Login
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-2 py-3 bg-red-600 rounded hover:bg-red-400"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
