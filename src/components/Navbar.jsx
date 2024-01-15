import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className = 'header'>
            <NavLink to = "/">
                <p>FY</p>
            </NavLink>
        </header>
    )
}