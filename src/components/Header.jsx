import LOGO from '../assets/images/KD_Logo.png';
import Navigation from './Navigation';
import { Link } from "react-router-dom";



export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <img className = 'logo navbar-brand' src = {LOGO} alt = 'logo' />
                    <Link to='/' className="d-flex flex-column justify-content-center h-100">
                        <h1 className = 'gold stylized mobile-header'>FRANCIS YANG</h1>
                        <p className = 'gold stylized'>Software Developer</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Navigation />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}