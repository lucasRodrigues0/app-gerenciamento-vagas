import { PropsWithChildren, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { checkToken } from "../../service/authService";

export const AuthGuard = ({children}: PropsWithChildren) => {

    let canAccess: boolean = false;

    useEffect(() => {
        checkToken().then(response => { 
            if(response?.status === 204) {
                canAccess = true;
                console.log(canAccess);
                //ver por que não está redirecionando
            }
        });
    }, []);

    return (
        <>
            {
                canAccess ? children : <Navigate to='/login' />
            }
        </>
    )
}