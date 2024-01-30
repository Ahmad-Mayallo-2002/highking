import { useRef } from "react";
import logo from "../assets/logo.png";
export const Header = () => {
    const ref = useRef(null);
    const handleActive = () => {
        ref.current.classList.toggle("list-active");
    }
    return (
        <header className="position-relative">
            <div className="container d-flex justify-content-between align-items-center">
                <figure className="mb-0">
                    <img src={logo} width={130} alt="Logo" />
                </figure>
                <nav>
                    <ul ref={ref} className="mb-0 ps-0 d-flex column-gap-5">
                        <li><a href="/">Location</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Testimonials</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                    <div onClick={handleActive} className="toggle fs-2 d-md-none">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
            </div>
        </header>
    )
}