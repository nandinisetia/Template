import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
import Camera from "./Camera";
export default function Registration() {
  const [imageURL, setImageURL] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formDataObject = new FormData();
  formDataObject.append("username", formData.username);
  formDataObject.append("email", formData.email);
  formDataObject.append("password", formData.password);
  // formDataObject.append("image", imageURL);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/submitForm", {
      formData,
      imageURL,
    });
  };
  return (
    <div>
      <Nav2 />
      <div className="flex flex-col items-center min-h-screen pt-6 justify-center bg-[#F3F4ED]">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold tracking-wide text-[#424642]">
              REGISTER
            </h3>
          </a>
        </div>
        <div className="w-10/12 px-6 py-4 mt-6 overflow-hidden bg-white min-h-[380px] shadow-md sm:max-w-md rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#536162] mt-12 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start ">
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  className="block w-full mt-1 border-b-2 border-[#C06014] rounded-sm shadow-sm focus:border-[#F3F4ED] focus:ring focus:ring-[#F3F4ED] focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#536162] undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="block w-full mt-1 border-b-2 border-[#C06014] rounded-sm shadow-sm focus:border-[#F3F4ED] focus:ring focus:ring-[#F3F4ED] focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#536162] undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="block w-full mt-1 border-b-2 border-[#C06014] rounded-sm shadow-sm focus:border-[#F3F4ED] focus:ring focus:ring-[#F3F4ED] focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <Camera setImageURL={setImageURL} />
              {imageURL && <img src={imageURL} alt="Taken" />}
            </div>
            <div className="flex items-center justify-end mt-12">
              <Link
                className="text-sm text-[#536162] underline hover:text-[#C06014]"
                to="/login"
              >
                Already registered?
              </Link>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-[#424642] border border-transparent rounded-md active:bg-[#C06014] false"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
