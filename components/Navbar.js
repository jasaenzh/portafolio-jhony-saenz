import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter();

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleClick = (event) => {
        event.stopPropagation();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* <Link href="/" className="navbar-brand">
                    Jhony Saenz
                </Link> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                href="/"
                                className={`nav-link ${router.pathname === "/" ? "active" : ""}`}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/blog"
                                className={`nav-link ${router.pathname === "/blog" ? "active" : ""
                                    }`}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/github"
                                className={`nav-link ${router.pathname === "/github" ? "active" : ""
                                    }`}
                            >
                                Github
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
