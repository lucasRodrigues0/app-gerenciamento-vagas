import { NavLink,  } from "react-router-dom";
import { navbarOptions } from "../../utils/navbarOptions"

export const Navbar = () => {

    const role: string | null = null;

    const activeStyle = ({ isActive }: any) => isActive ? 'text-violet-300 hover:text-white text-md font-thin cursor-pointer transition-all mx-1.5' : 'text-white hover:text-violet-300 text-md font-thin cursor-pointer transition-all mx-1.5';

    return (
        <div className="bg-slate-500 shadow-lg flex flex-row w-full min-h-16 items-center justify-center">
            <div className="container flex flex-row justify-end">
                <div className="flex flex-row w-fit">
                    {
                        navbarOptions
                            .filter(
                                item => !role ? item.role.length === 0 : item.role.includes(role)
                            )
                            .map(
                                option =>
                                    <div key={`k-${option.name}`} >
                                        <NavLink to={option.linkTo} className={activeStyle}>
                                            {option.name}
                                        </NavLink>
                                    </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}