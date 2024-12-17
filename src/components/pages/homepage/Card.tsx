import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-slate-400 flex flex-col items-center h-80 w-60 rounded-md mx-5 px-5">
            {children}
        </div>
    )
} 