import { PropsWithChildren } from "react";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}