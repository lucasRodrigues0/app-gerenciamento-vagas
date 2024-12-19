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
        <Slider {...settings} >
            {
                ratings.map((rating, index) => {
                    return (
                        <Card rating={rating} key={index}/>
                    )
                })
            }
        </Slider>
    )
}