import { useState, useContext } from "react";
import { useAppContext } from "../context/state";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();

  const { dispatchEvent } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatchEvent("LOGIN", {
          rememberMe: rememberMe,
          user: {
            id: data._id,
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email,
            token: data.token,
          },
        });

        router.push(`/profile/${data._id}`);
      });
  };

  return (
    <>
        <form className="flex flex-col w-11/12 m-auto" onSubmit={login}>
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
          <div className="flex my-3">
            <input
              id="keepSignedIn"
              name="keepSignedIn"
              type="checkbox"
              className="self-center mr-2"
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="keepSignedIn">Keep me signed in</label>
          </div>
          <button className="bg-purple-300 hover:bg-purple-400 py-2 px-5 rounded shadow text-xl font-bold mx-auto mb-6 mt-4 w-full">
            Sign In
          </button>
        </form>
    </>
  );
}
