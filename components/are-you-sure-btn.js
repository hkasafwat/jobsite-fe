import { useState } from "react";

export default function AreYouSureBtn({
  buttonText,
  buttonColor,
  functionToExecute,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={`p-2 rounded bg-${buttonColor}-400 w-24 font-bold`}
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>

      {showModal ? (
        <div className="fixed w-full h-full bg-gray-600 bg-opacity-75 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="max-w-lg min-w-lg flex flex-col bg-gray-300 p-4 rounded shadow-lg fixed m-auto top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col p-4">
              <div className="text-lg font-bold mb-6 ">
                Are you sure you would like to {buttonText} this post?
              </div>
              <div className="flex self-center">
                <button className="p-2 w-32 bg-yellow-300 rounded font-bold mr-2" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button
                  className="p-2 rounded bg-blue-300 font-bold w-32 ml-2"
                  onClick={functionToExecute}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
