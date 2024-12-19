import Slider from "react-slick";
import { Card } from "./Card";
import { ratings } from "../../../utils/ratings";

export const TestimonySlider = () => {

    const responsiveShow = () => {
        const width = window.innerWidth;
        if(width >= 1036) return 3;
        if(width >= 730) return 2;
        return 1;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: responsiveShow(),
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