import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({children}: PropsWithChildren) => {

    const canAccess = false;

    return (
        <>
            {
                canAccess ? children : <Navigate to='/login' />
            }
        </>
    )
}