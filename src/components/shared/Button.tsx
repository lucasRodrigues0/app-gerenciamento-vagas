import { PropsWithChildren } from "react"

export const Button = ({ children, style }: PropsWithChildren & props) => {
    return (
        <button className={`text-white text-xl bg-violet-600 h-12 w-44 rounded-md shadow-md mt-4 transition-all hover:bg-violet-400 ${style}`}>
            {
                children
            }
        </button>
    )
}

interface props {
    style?: string
}