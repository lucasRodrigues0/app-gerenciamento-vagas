export const Navbar = () => {
    return (
        <div className="w-full bg-slate-500 shadow-lg flex flex-row min-h-16 items-center justify-center">
            <div className="container flex flex-row justify-end">
                <div className="flex flex-row w-fit">
                    <div className="text-white hover:text-violet-300 transition-all mx-1.5">About</div>
                    <div className="text-white hover:text-violet-300 transition-all mx-1.5">Login</div>
                    <div className="text-white hover:text-violet-300 transition-all mx-1.5">Register</div>
                </div>
            </div>
        </div>
    )
}