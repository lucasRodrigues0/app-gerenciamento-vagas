import Slider from "react-slick";
import { Card } from "./Card";
import { FaStar } from "react-icons/fa";
import { ratings } from "../../../utils/ratings";

export const TestimonySlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-slate-600 container border-2 border-blue-500 w-3/4 flex flex-col h-[400px] justify-around">
            <Slider {...settings} >
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
            </Slider>
        </div>
    )
}