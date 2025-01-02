import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../../service/authService";

export const AuthGuard = ({children}: PropsWithChildren) => {

    const navigate = useNavigate();

    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        checkToken().then(response => { 
            if(response?.status === 204) {
                setChecked(true);
            } else {
                navigate('/login')
            }
        }).catch(() => navigate('/login'));
    }, [navigate]);

    if(!checked) {
        return null;
    }

    return (
        <>
            {children}
        </>
    )
}