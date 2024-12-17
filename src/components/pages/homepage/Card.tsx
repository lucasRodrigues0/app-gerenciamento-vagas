import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-slate-400 flex flex-col flex-1 items-center h-80 min-w-[280px] max-w-[280px] rounded-md mx-5 px-5">
            {children}
        </div>
    )
} 