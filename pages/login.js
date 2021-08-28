import { useState, useContext } from "react";
import { useAppContext } from "../context/state";
import { useRouter } from "next/router";
import Nav from "../components/nav";
import LoginForm from "../components/loginForm"
export default function Login() {
  const router = useRouter();
  
  return (
    <>
      <Nav />
      <div className="max-w-lg bg-gray-100 p-4 px-8 mt-8 m-auto border rounded shadow-md">
      <div className="text-3xl text-center font-bold mb-8 mt-3">
          Sign in to your account
        </div>
      <LoginForm />
      <button className="text-purple-500 font-bold flex m-auto" onClick={() => router.push('/register')}>Don't Have An Account?</button>
      </div>
    </>
  );
}
