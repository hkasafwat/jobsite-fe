import { useState } from "react";
import { useRouter } from "next/router";
import Nav from "../components/nav";
import RegisterForm from "../components/registerForm";
export default function Register() {
  const router = useRouter();

  return (
    <>
      <Nav />
      <div className="max-w-lg bg-gray-100 p-4 px-8 m-auto mt-8 border rounded shadow-md">
        <div className="text-3xl text-center font-bold mb-8 mt-3">Register</div>
       <RegisterForm />
       <button className="text-purple-500 font-bold flex m-auto" onClick={() => router.push('/login')}>Already Have An Account?</button>
      </div>
    </>
  );
}
