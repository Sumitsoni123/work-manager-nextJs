"use client";
import { signUp } from "@/services/userService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signUp(values);
      toast.success("Your user is added !!", {
        position: "top-right",
      });

      setValues({
        name: "",
        email: "",
        password: "",
        about: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("failed to create user !!", {
        position: "top-right",
      });
    }
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <h1 className="text-3xl text-center">Signup Here</h1>
          <form onSubmit={onSubmit} className="mt-5">
            <div className="mt-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name here"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                name="name"
                value={values.name}
                onChange={(event) => {
                  setValues({
                    ...values,
                    name: event.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="email"
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
                htmlFor="password"
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
            <div className="mt-3">
              <label
                htmlFor="about"
                className="block text-sm font-medium mb-2 ps-2"
              >
                About
              </label>
              <textarea
                type="text"
                placeholder="Enter about you here"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                rows={4}
                name="about"
                value={values.about}
                onChange={(event) => {
                  setValues({
                    ...values,
                    about: event.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-3 flex justify-center space-x-3">
              <button
                type="submit"
                className="px-2 py-3 bg-green-600 rounded hover:bg-green-400"
              >
                Signup
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

export default Signup;
