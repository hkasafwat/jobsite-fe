import { useState } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function LoginRegisterModal(props) {
    const { login, setLogin } = props;
    const [toggle, setToggle] = useState(true);

    if (login == false) return null;

    return (
        <>
            <div className="fixed w-full h-full bg-gray-600 bg-opacity-75 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="max-w-lg min-w-lg flex flex-col bg-gray-300 h-auto pb-4 rounded shadow-lg fixed m-auto top-1/4 left-1/2 transform -translate-x-1/2 --translate-y-1/2">
                    <div className="flex p-2">
                        <button className="bg-red-600 hover:bg-red-700 w-10 h-10 ml-auto rounded" onClick={() => setLogin(false)}>X</button>
                    </div>
                    {toggle ?
                        (
                            <>
                                <LoginForm />

                                <button className="text-md text-purple-400 hover:text-purple-600 mt-2 font-bold" onClick={() => setToggle(false)}>
                                    Register
                                </button>
                            </>
                        ) :
                        (
                            <>
                                <RegisterForm />

                                <button className="text-md text-purple-400 hover:text-purple-600 mt-2 font-bold" onClick={() => setToggle(true)}>
                                    Already have an account?
                                </button>
                            </>
                        )
                    }
                </ div>
            </div>
        </>
    );
}
