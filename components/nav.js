import Link from "next/link";

export default function Nav() {
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
          <Link href="/login">
            <a>login</a>
          </Link>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
