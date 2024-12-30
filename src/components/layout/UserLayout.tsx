import { PropsWithChildren } from "react";
import { Navbar } from "../shared/Navbar";

export const UserLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}