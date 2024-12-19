import { TestimonySlider } from "./TestimonySlider";

export const Opinions = () => {

    return (
        <section className="py-5 flex flex-row justify-center">
            <div className="container flex flex-col justify-center items-center ">
                <h1 className="text-white text-4xl">Users opinions</h1>
                <TestimonySlider />
            </div>
        </section >
    )
}