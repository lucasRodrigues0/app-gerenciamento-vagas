import { useEffect, useState } from "react"
import { loadUser } from "../../../service/userService";
import { CandidateSection } from "./CandidateSection";

export const ProfilePage = () => {

    const [user, setUser] = useState<any>({});

    useEffect(() => {
        loadUser().then(data => {
            setUser(data);
            console.log(data);
        });
    }, []);

    return (
        <section className="flex flex-col items-center">
            <div className="container">
                <div className="my-5">
                    <h1 className="text-white text-5xl mb-5">User Info</h1>
                    <h3 className="text-white text-3xl">{user.name}</h3>
                    <h3 className="text-white text-xl">{user.email}</h3>
                    <h3 className="text-white text-xl">{user.type}</h3>
                    {
                        user.type === 'candidate' ? <CandidateSection user={user}/> : ''
                    }
                </div>
            </div>
        </section>
    )
}