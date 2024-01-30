import { useEffect } from "react";
import image from "../assets/Hero.png";
export const Hero = () => {
    useEffect(() => {
        const article = document.querySelector("main article");
        const figure = document.querySelector("main figure");
        const handleWindowLoad = () => {
          article.classList.add("hero-active");
          figure.classList.add("hero-active");
        };
        window.addEventListener("load", handleWindowLoad);
    }, []);
    return (
        <main className="overflow-hidden">
            <div className="container">
                <article>
                    <h1>Be prepared for the mountains and beyond.</h1>
                    <p>Are you looking for amazing hiking travel? Don't worry! We got it for you!</p>
                    <div className="buttons">
                        <button className="special-button">Contact Us</button>
                        <button>Watch Video</button>
                    </div>
                </article>
                <figure className="mb-0">
                    <img src={image} alt="Hero" />
                </figure>
            </div>
        </main>
    )
}