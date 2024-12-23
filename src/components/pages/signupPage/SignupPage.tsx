import { Link } from "react-router-dom";
import { Button } from "../../shared/Button";
import { Form } from "../../shared/Form";

export const SignupPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center text-white">
            <Form>
                <label htmlFor="name" className="w-full">Name</label>
                <input type="text" id="name" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500"/>
                <label htmlFor="email" className="w-full">Email</label>
                <input type="email" id="email" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500"/>
                <label htmlFor="password" className="w-full">Password</label>
                <input type="password" id="password" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500"/>
                <label htmlFor="password-conf" className="w-full">Confirm Password</label>
                <input type="password" id="password-conf" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500"/>
                <select className="text-black w-full h-6 text-center rounded-md" onChange={(e) => console.log(e.target.value)}>
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