import { useState } from "react";
import { useRouter } from "next/router";
import Nav from "../../components/nav";

export default function PostJob() {
  return (
    <>
      <Nav />
      <div className="max-w-2xl bg-gray-100 p-4 px-8 m-auto mt-12 border rounded">
        <div className="p-2 font-bold text-2xl ">Edit User Settings</div>
        <div></div>
        <div className="flex flex-col">
          <input
            className="p-2 rounded border  m-2 mr-0 flex-1 " type="email"
            placeholder="Email"
          />
          <div className="flex">
            <input
              className="p-2 rounded border m-2 mr-0 flex-1 " type="password"
              placeholder="Password"
            />
            <input
              className="p-2 rounded border  m-2 mr-0 flex-1 " type="password"
              placeholder="Password Confirmation"
            />
          </div>
          <input
            className="p-2 rounded border  m-2 mr-0 flex-1 " type="password"
            placeholder="Current Password"
          />
          <div className="flex ml-auto mt-4">
            <button className="underline text-gray-500  ">Cancel</button>
            <button className="bg-purple-300 p-2 px-4  rounded  ml-6  ">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
