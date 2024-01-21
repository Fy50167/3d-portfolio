import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>           
            <NavLink id = 'about' to='/' activeClassName = 'active' className = 'gold nav-link'>About</NavLink>
            <NavLink id = 'work' to='/projects' activeClassName = 'active' className = 'gold nav-link'>Work</NavLink>
            <NavLink id = 'resume' to='/resume' activeClassName = 'active' className = 'gold nav-link'>Resume</NavLink>
            <NavLink id = 'contact' to='/contact' activeClassName = 'active' className = 'gold nav-link'>Contact</NavLink>
        </>
    )
}