import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";
export default function Nav() {
  const {user, dispatchEvent} = useAppContext();
  
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const value = localStorage.getItem("jobsite_user");
  //   const user = !!value ? JSON.parse(value) : undefined;
  //   setUser(user);
  // }, []);

  console.log(user);
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex">
        <Link href="/">
          <a className="flex-start">JobSite</a>
        </Link>
        <div className="ml-auto flex space-x-4">
          <Link href="/">
            <a>All Jobs</a>
          </Link>
          <Link href="/post-job">
            <a>Post a Job</a>
          </Link>
          <p>|</p>
          {user ? (
            <>
              <Link href={`/profile/${user.id}`}>
                <a>
                  {user.firstName} {user.lastName}
                </a>
              </Link>
              <Link href="/login">
                <a onClick={() => dispatchEvent("LOGOUT")}>Logout</a>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <a>login</a>
              </Link>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
