import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Tooltip } from 'bootstrap';

const Header = () => {
    const getTogglers = () => {
        const togglers = document.querySelectorAll('[data-bs-toggle = "tooltip"]')
        togglers.forEach(el => { new Tooltip(el) })
        return (togglers.length)
    }

    useEffect(() => { setTimeout(() => { getTogglers() }, 500) }, [])

    return(
        <header style={{zIndex: 2}} className='navbar row navbar-dark navbar-expand-md bg-primary text-white position-sticky'>
            <Link to="/" className='navbar-brand bg-primary fw-bold col-md-2 text-center'>PortalAI</Link>
            <nav className='navbar col-md bg-primary p-1'>
                <ul className="nav justify-content-center">
                    <li className="nav-item mx-4">
                        <Link 
                            to="/search/type-pick" 
                            className={`nav-header-link ${window.location.href.includes("search")? "nav-header-active" : ""}`} 
                            aria-current="page"
                        >
                            Search
                        </Link>
                    </li>
                    <li className="nav-item mx-4">
                        <Link 
                            to="/message" 
                            className={`nav-header-link ${window.location.href.includes("message") ? "nav-header-active" : ""}`}
                            aria-current="page"
                        >
                            Message
                        </Link>
                    </li>
                </ul>
                <div
                    className="btn btn-primary btn-outline-light ms-auto me-4"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Sign In is currently unavailable"
                    id="header-sign-in"
                >
                    Sign in
                </div>
            </nav>
        </header>    
    )
}

export default Header;