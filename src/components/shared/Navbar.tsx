import { navbarOptions } from "../../utils/navbarOptions"

export const Navbar = () => {

    const role: string | null = null;

    return (
        <div className="w-full bg-slate-500 shadow-lg flex flex-row min-h-16 items-center justify-center">
            <div className="container flex flex-row justify-end">
                <div className="flex flex-row w-fit">
                    {
                        navbarOptions
                            .filter(
                                item => !role ? item.role.length === 0 : item.role.includes(role)
                            )
                            .map(
                                option =>
                                    <div key={`k-${option.name}`} className="text-white hover:text-violet-300 transition-all mx-1.5">
                                        {option.name}
                                    </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}