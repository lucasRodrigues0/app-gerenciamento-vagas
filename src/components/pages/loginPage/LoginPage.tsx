import { Button } from "../../shared/Button"
import { Form } from "../../shared/Form"

export const LoginPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center text-white">
            <Form>
                <label htmlFor="email" className="w-full">Email</label>
                <input type="email" id="email" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500" />
                <label htmlFor="password" className="w-full">Password</label>
                <input type="password" id="password-conf" className="w-[300px] h-[35px] rounded-md text-black px-2 focus:outline-none focus:border-2 focus:border-violet-500" />
                <Button>
                    Login
                </Button>
            </Form>
        </div>
    )
}