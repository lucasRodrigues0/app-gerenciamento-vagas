import { TestimonySlider } from "./TestimonySlider";

export const Opinions = () => {

    return (
        <section className="border-2 border-red-500 flex flex-col justify-center items-center py-5">
            <div className="container">
                <h1 className="text-white text-4xl">Users opinions</h1>
                <TestimonySlider />
            </div>
        </section >
    )
}