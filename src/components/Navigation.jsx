import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>           
            <NavLink id = 'about' to='/about' activeClassName = 'active' className = 'gold nav-link stylized'>About</NavLink>
            <NavLink id = 'work' to='/work' activeClassName = 'active' className = 'gold nav-link stylized'>Work</NavLink>
            <NavLink id = 'resume' to='/resume' activeClassName = 'active' className = 'gold nav-link stylized'>Resume</NavLink>
            <NavLink id = 'contact' to='/contact' activeClassName = 'active' className = 'gold nav-link stylized'>Contact</NavLink>
        </>
    )
}