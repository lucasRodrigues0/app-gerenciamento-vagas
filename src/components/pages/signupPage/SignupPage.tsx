import { Link } from "react-router-dom";
import { Button } from "../../shared/Button";
import { Form } from "../../shared/Form";
import { useState } from "react";
import { register } from "../../../service/authService";

export const SignupPage = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [type, setType] = useState<string>('candidate');

    const info = {
        name,
        email,
        password,
        confPassword: confirm,
        type
    }

    const submit = (e: any) => {
        e.preventDefault();
        register(info);
    }

    return (
        <div className="w-full h-screen flex justify-center items-center text-white">
            <Form onSubmit={submit}>
                <label htmlFor="name" className="w-full">Name</label>
                <input type="text" id="name" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email" className="w-full">Email</label>
                <input type="email" id="email" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password" className="w-full">Password</label>
                <input type="password" id="password" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500" onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password-conf" className="w-full">Confirm Password</label>
                <input type="password" id="password-conf" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500" onChange={(e) => setConfirm(e.target.value)} />
                <select className="text-black w-full h-6 text-center rounded-md" onChange={(e) => setType(e.target.value.toLowerCase())}>
                    <option value="candidate" >Candidate</option>
                    <option value="recruiter">Recruiter</option>
                </select>
                <Button style="w-full">
                    Sign-up
                </Button>
                <Link to={'/login'} className="hover:text-violet-400 transition-all text-sm">Already have an account ? sign-in</Link>
            </Form>
        </div>
    )
}