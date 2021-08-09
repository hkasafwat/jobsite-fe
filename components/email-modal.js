import { useState } from "react";

export default function EmailModal(props) {
  const { company, modal, modalHidden } = props;
  if (modalHidden == true) return null;

  return (
    <>
      <div className="fixed w-full h-full bg-gray-600 bg-opacity-75 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-lg min-w-lg flex flex-col bg-gray-300 p-4 rounded shadow-lg fixed m-auto top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex">
            <div className="flex-1 p-2 rounded m-2 mt-0 ml-0 text-lg font-bold">
              Apply To {company}
            </div>
          </div>
          <input
            className="p-2 rounded border  m-2"
            type="text"
            placeholder="email"
          />
          <div className="flex">
            <input
              className="p-2 rounded border  m-2 flex-1"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-2 rounded border  m-2 flex-1"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex">
            <input
              className="p-2 rounded border  m-2 mr-0 flex-1 rounded-r-none"
              type="text"
              placeholder=""
            />
            <button className="bg-purple-300 px-2  rounded rounded-l-none m-2 ml-0 w-32 ">
              Upload CV
            </button>
          </div>
          <textarea
            className="p-2 rounded border  m-2 h-32"
            placeholder="Cover letter"
          ></textarea>

          <div className="flex m-2 mt-3">
            <button
              className="p-3 bg-red-500 rounded font-bold ml-auto mr-2"
              onClick={() => modal(true)}
            >
              {" "}
              Cancel
            </button>
            <button className="p-3 bg-blue-500 rounded font-bold mr-auto ml-2">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
