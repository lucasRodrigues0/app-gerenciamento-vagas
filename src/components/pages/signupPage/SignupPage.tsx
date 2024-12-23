import { Button } from "../../shared/Button";
import { Form } from "../../shared/Form";

export const SignupPage = () => {
    return (
        <div className="w-full h-screen border-2 border-red-500 flex justify-center items-center text-white">
            <Form>
                <label htmlFor="name" className="w-full">Name</label>
                <input type="text" id="name" className="w-[300px] h-[35px] rounded-md"/>
                <label htmlFor="email" className="w-full">Email</label>
                <input type="email" id="email" className="w-[300px] h-[35px] rounded-md"/>
                <label htmlFor="password" className="w-full">Password</label>
                <input type="password" id="password" className="w-[300px] h-[35px] rounded-md"/>
                <label htmlFor="password-conf" className="w-full">Confirm Password</label>
                <input type="password" id="password-conf" className="w-[300px] h-[35px] rounded-md"/>
                <div className="flex justify-evenly w-full">
                    <div>
                        <label>candidate</label>
                        <input type="radio" name="candidate" id="candidate" />
                    </div>
                    <div>
                        <label>recruiter</label>
                        <input type="radio" name="candidate" id="recruiter" />
                    </div>
                </div>
                <Button>
                    Sign-up
                </Button>
            </Form>
        </div>
    )
}