import { useState } from "react";
import Nav from "../components/nav";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = async (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    };

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Nav />
      <div className="max-w-lg bg-gray-100 p-4 px-8 m-auto mt-12 border rounded shadow-md">
        <div className="text-3xl text-center font-bold mb-8 mt-3">Register</div>
        <form className="flex flex-col w-11/12 m-auto" onSubmit={register}>
          <div className="flex justify-between">
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-2 rounded border mb-3"
              onChange={() => setFirstName(event.target.value)}
            />
            <input
              id="lastName"
              type="text"
              name="LastName"
              placeholder="Last Name"
              className="p-2 rounded border mb-3"
              onChange={() => setLastName(event.target.value)}
            />
          </div>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            className="p-2 rounded border mb-3"
            onChange={() => setEmail(event.target.value)}
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 rounded border"
            onChange={() => setPassword(event.target.value)}
          />
          <button className="bg-purple-300 hover:bg-purple-400 py-2 px-5 rounded shadow text-xl font-bold mx-auto mb-6 mt-8 w-full">
            Register
          </button>
          <button className="text-sm text-purple-400 hover:text-purple-600">
            Already have an account?
          </button>
        </form>
      </div>
    </>
  );
}
