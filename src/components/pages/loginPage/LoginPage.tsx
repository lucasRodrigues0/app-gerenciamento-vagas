import { useState } from "react";
import { Button } from "../../shared/Button"
import { Form } from "../../shared/Form"
import { login } from "../../../service/authService";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const info = {
        email,
        password
    }

    const submit = (e: any) => {
        e.preventDefault();
        login(info).then(response => {
            if(response.status === 200) {
                navigate('/profile');
            }
        });
    }

    return (
        <div className="w-full h-screen flex justify-center items-center text-white">
            <Form onSubmit={submit}>
                <label htmlFor="email" className="w-full">Email</label>
                <input type="email" id="email" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password" className="w-full">Password</label>
                <input type="password" id="password-conf" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500" onChange={(e) => setPassword(e.target.value)}/>
                <Button style="w-full">
                    Login
                </Button>
            </Form>
        </div>
    )
}