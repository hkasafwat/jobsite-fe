import { useState } from "react";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userType, setUserType] = useState("");
    const [companyName, setCompanyName] = useState("");

    const register = async (event) => {
        event.preventDefault();
        const body = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            user_type: userType,
            company_name: companyName
        };
        console.log(body)
        // fetch("http://localhost:8080/register", {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(body),
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data));
    };

    return (
        <>
            <form className="flex flex-col w-11/12 m-auto" onSubmit={register}>
                <div className="flex flex-col  md:flex-row justify-between">
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
                <div onChange={() => setUserType(event.target.value)}
                    className="pt-3 ">
                    <div><input type="radio" id="choice1" name="userType" value="seeker" className="mr-2" />
                        <label htmlFor="choice1">Looking for work</label></div>
                    <div> <input type="radio" id="choice2" name="userType" value="employer" className="mr-2" />
                        <label htmlFor="choice2">Looking for an employee</label></div>
                </div>
                {userType == 'employer' ?
                    (
                        <input
                            id="companyName"
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            className="p-2 mt-3 rounded border"
                            onChange={() => setCompanyName(event.target.value)}
                        />
                    ) :
                    ('')}
                <button className="bg-purple-300 hover:bg-purple-400 py-2 px-5 rounded shadow text-xl font-bold mx-auto mb-6 mt-8 w-full">
                    Register
                </button>
            </form>
        </>
    );
}
