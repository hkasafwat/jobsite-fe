
import Nav from "../components/nav";

export default function Login() {
  return (
    <>
      <Nav />
      <div className="max-w-lg bg-gray-100 p-4 px-8 m-auto mt-12 border rounded shadow-md">
        <div className="text-3xl text-center font-bold mb-8 mt-3">Sign in to your account</div>
        <form className="flex flex-col w-11/12 m-auto">
          <input id="email" type="text" name="email" placeholder="Email" className="p-2 rounded border mb-3" />
          <input id="password" type="text" name="password" placeholder="Password" className="p-2 rounded border" />
          <div className="flex my-3">
          <input id="keepSignedIn" name="keepSignedIn" type="checkbox" className="self-center mr-2" />
          <label htmlFor="keepSignedIn">Keep me signed in</label>
          </div>
          <button className="bg-purple-300 hover:bg-purple-400 py-2 px-5 rounded shadow text-xl font-bold mx-auto mb-6 mt-4 w-full"> Sign In</button>
          <button className="text-sm text-purple-400 hover:text-purple-600"> Forgot your password?</button>
          <button className="text-sm text-purple-400 hover:text-purple-600 mt-2"> Register</button>
        </form>
      </div>
    </>
  );
}
