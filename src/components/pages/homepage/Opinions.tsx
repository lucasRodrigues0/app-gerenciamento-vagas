import { TestimonySlider } from "./TestimonySlider";

export const Opinions = () => {

    return (
        <section className="border-2 border-red-500 flex flex-row justify-center py-5">
            <div className="container flex flex-col items-center">
                <h1 className="text-white text-4xl">Users opinions</h1>
                <TestimonySlider />
            </div>
        </section >
    )
}