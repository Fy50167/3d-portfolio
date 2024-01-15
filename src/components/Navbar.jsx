import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className = 'header'>
            <NavLink to = "/" className = 'w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
                <p classname = 'blue-gradient_text'>FY</p>
            </NavLink>
            <nav classname = 'flex text-lg gap-7 font-medium'>
                <NavLink to = '/about' classname = {({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to = '/projects' classname = {({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}