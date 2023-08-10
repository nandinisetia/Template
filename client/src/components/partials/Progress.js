import React from "react";

export default function Progress({}) {
  const storedData = JSON.parse(localStorage.getItem("userData"));
  let count = storedData.progress;
  return (
    <>
      <div className="progressBar mt-5">
        <h2 className="text-2xl font-semibold">Your Progress Level:</h2>
        <div className="relative h-8 bg-gray-300 mt-2">
          <div
            className="absolute h-full bg-green-400 "
            style={{ width: count + "%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Advanced</span>
        </div>
      </div>
    </>
  );
}
