import { useState } from "react";
import icon_1 from "../assets/icon-1.png";
import icon_2 from "../assets/icon-2.png";
import icon_3 from "../assets/icon-3.png";
import ScrollTrigger from "react-scroll-trigger";
export const Features = () => {
    const [variable, method] = useState(false);
    return (
        <section className="features section-padding">
            <div className="container">
                <ScrollTrigger onEnter={() => method(true)} onExit={() => method(false)}>
                    <div className="feature d-grid">
                        <article style={{transitionDelay: "0s"}} className={`${variable && "feature-active"}`} >
                            <img src={icon_1} width={76} alt="Icon 1" />
                            <h3>Secret Locations</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href="/">Read More</a>
                        </article>
                        <article style={{transitionDelay: ".2s"}} className={`${variable && "feature-active"}`} >
                            <img src={icon_2} width={76} alt="Icon 2" />
                            <h3>Safe Adventure</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href="/">Read More</a>
                        </article>
                        <article style={{transitionDelay: ".4s"}} className={`${variable && "feature-active"}`} >
                            <img src={icon_3} width={76} alt="Icon 3" />
                            <h3>Professional Hikers</h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href="/">Read More</a>
                        </article>
                    </div>
                </ScrollTrigger>
                <p className="note">
                    Don't hesitate to contact us to get better Information. <a href="/"><b>EXPLORE ALL TREKKING.</b></a>
                </p>
            </div>
        </section>
    )
}