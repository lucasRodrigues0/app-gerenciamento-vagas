export const Hero = () => {
    return (
        <section id="hero" className="bg-hero w-full h-[350px] bg-cover bg-center bg-no-repeat">
            <div className="backdrop-blur-sm h-full w-full flex flex-row justify-center">
                <div className="flex flex-col justify-center items-center h-full w-[50%]">
                    <h1 className="text-white text-4xl text-center">Your job search ends here!</h1>
                    <h3 className="text-white text-md  text-center mt-1">Find the opportunities that better suit you</h3>
                    <button className="text-white text-xl bg-violet-600 h-12 w-44 rounded-md shadow-md mt-4">Join now</button>
                </div>
            </div>
        </section>
    )
}