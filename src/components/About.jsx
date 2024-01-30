import { useState } from "react";
import about_1 from "../assets/avatar-1.png";
import about_2 from "../assets/avatar-2.png";
import about_3 from "../assets/avatar-3.png";
import vector from "../assets/vector.png";
import ScrollTrigger from "react-scroll-trigger";
const data = [about_1, about_2, about_3];
export const About = () => {
    const [variable, method] = useState(false);
    return (
        <section className="section-padding about">
            <div className="container">
                <p className="small-p">Happy Hikers</p>
                <h3>Client’s Say About Us</h3>
                <ScrollTrigger onEnter={() => method(true)} onExit={() => method(false)}>
                    <div className="users d-grid">
                        {
                            data.map(
                                (value, key) => 
                                <article style={{transitionDelay: `${(key + 1) * 0.2}s`}} className={`shadow p-4 position-relative ${variable ? "about-active" : null}`} key={key}>
                                    <img width={75} className="position-absolute" src={vector} alt="Vector" />
                                    <img width={104} src={value} alt="Avatar" />
                                    <h4>Omar Gouse</h4>
                                    <span>Happy Client</span>
                                    <p className="text-center">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</p>
                                    <div className="stars d-flex column-gap-1">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </article>
                            )
                        }
                    </div>
                </ScrollTrigger>
            </div>
        </section>
    )
}