import { Card } from "./Card";
import { FaStar } from "react-icons/fa";
import { ratings } from "../../../utils/ratings";

export const Opinions = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }

    return (
        <section className="border-2 border-red-500 flex flex-row justify-center py-5">
            <div className="container flex flex-col items-center">
                <h1 className="text-white text-4xl">Users opinions</h1>
                <div className="flex flex-row flex-wrap justify-center w-[80%] mt-14 ">
                    {
                        ratings.map((rating, index) => {
                            return (
                                <Card key={`k-rating${index}`}>
                                    <img src={rating.img} alt="User Image" className="w-20 h-20 -mt-10 mb-4" />
                                    <span className="flex flex-row justify-center">
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </span>
                                    <p className="text-white text-md text-center mt-10">{rating.comment}</p>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}