import { useState } from "react";
import { useRouter } from "next/router";
import Nav from "../../components/nav";

export default function PostJob() {
  return (
    <>
      <Nav />
      <div className="max-w-2xl bg-gray-100 p-4 px-8 m-auto mt-12 border rounded">
        <div className="p-2 font-bold text-2xl ">Profile</div>
        <div></div>
        <div className="flex flex-col">
          <input
            className="p-2 rounded border  m-2 mr-0 flex-1" type="email"
            placeholder="Email"
          />
          <div className="flex">
            <input
              className="p-2 rounded border m-2 mr-0 flex-1 " type="text"
              placeholder="First Name"
            />
            <input
              className="p-2 rounded border  m-2 mr-0 flex-1" type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex">
            <input
              className="p-2 rounded border  m-2 mr-0 flex-1 " type="text"
              placeholder="Location"
            />
            <input
              className="p-2 rounded border  m-2 mr-0 flex-1 " type="text"
              placeholder="Phone Number"
            />
          </div>
          <input
            className="p-2 rounded border  m-2 mr-0 flex-1 " type="text"
            placeholder="Professional Headline"
          />
          <textarea
            className="p-2 rounded border  m-2 mr-0   h-32"
            placeholder="Short Bio About Yourself"
          />
          <div className="flex">
            <input
              className="p-2 rounded border  m-2 mr-0 flex-1 rounded-r-none"
              type="text"
              placeholder=""
            />
            <button className="bg-purple-300 px-2  rounded rounded-l-none m-2 mr-0 ml-0 w-32 ">
              Upload CV
            </button>
          </div>
          <div className="flex ml-auto mt-4">
            <button className="underline text-gray-500  ">Cancel</button>
            <button className="bg-purple-300 p-2 px-4  rounded  ml-6  ">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
