import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-slate-400 flex flex-col flex-1 items-center h-80 min-w-[260px] max-w-[260px] rounded-md mx-2 px-5 shadow-md">
            {children}
        </div>
    )
} 