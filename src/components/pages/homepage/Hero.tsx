import { Link } from "react-router-dom"
import { Button } from "../../shared/Button"

export const Hero = () => {
    return (
        <section id="hero" className="bg-hero w-full h-[350px] bg-cover bg-center bg-no-repeat">
            <div className="backdrop-blur-sm h-full w-full flex flex-row justify-center">
                <div className="flex flex-col justify-center items-center h-full w-[50%]">
                    <h1 className="text-white text-4xl text-center">Your job search ends here!</h1>
                    <h3 className="text-white text-md  text-center mt-1">Find the opportunities that better suit you</h3>
                    <Link to={'/signup'}>
                        <Button style="hover:scale-105">
                            Join now!
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}