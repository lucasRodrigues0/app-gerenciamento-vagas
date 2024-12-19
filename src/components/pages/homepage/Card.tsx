import { FaStar } from "react-icons/fa";

export const Card = ({ rating }: props) => {
    return (
        <div className="bg-slate-400 flex flex-col flex-1 items-center h-80 rounded-md shadow-md" key={`k-rating${rating.comment.substring(0, 13)}`}>
            <img src={rating.img} alt="User Image" className="w-20 h-20 mt-2 mb-4" />
            <span className="flex flex-row justify-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
            </span>
            <p className="text-white text-md text-center mt-10">{rating.comment}</p>
        </div>
    )
}

type props = {
    rating: {
        img: string,
        comment: string
    }
}