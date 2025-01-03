import { PropsWithChildren } from "react"

export const Form = ({ children, onSubmit }: PropsWithChildren & props) => {
    return (
        <form className="flex flex-col items-center py-[50px] px-[20px] bg-slate-500 rounded-md gap-y-2 shadow-2xl" onSubmit={onSubmit}>
            {
                children
            }
        </form>
    )
}

type props = {
    onSubmit: any;
}