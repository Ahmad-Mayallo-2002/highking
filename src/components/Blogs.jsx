import img_1 from "../assets/img1_1.jpg";
import img_2 from "../assets/img2_1.jpg";
import img_3 from "../assets/img3_1.jpg";
import company_1 from "../assets/com-1.png";
import company_2 from "../assets/com-2.png";
import company_3 from "../assets/com-3.png";
import company_4 from "../assets/com-4.png";
import company_5 from "../assets/com-5.png";
const images = [
    {
        image: company_1,
        width: 283,
        height: 40
    },
    {
        image: company_2,
        width: 238,
        height: 36
    },
    {
        image: company_3,
        width: 332,
        height: 32
    },
    {
        image: company_4,
        width: 165,
        height: 48
    },
    {
        image: company_5,
        width: 272,
        height: 46
    },
]
export const Blog = () => {
    return (
        <section className="blogs section-padding">
            <div className="container">
                <div className="blog-1 blog d-grid section-padding">
                    <figure>
                        <img src={img_1} alt="Image" />
                    </figure>
                    <article>
                        <h3>Safe, Affordable, And Trusted</h3>
                        <p>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
                        <button className="special-button">Contact Us</button>
                    </article>
                </div>
                <div className="companies mb-5">
                    <p className="text-center mt-5 small-p">Safe Journey</p>
                    <h3 className="mb-5 text-center">Trusted by Big Companies </h3>
                    <figure>
                        {
                            images.map(
                                (value, key) => {
                                    const {image, width, height} = value;
                                    return (
                                        <img key={key} src={image} style={{width: `${width}px`, height: `${height}px`}} />
                                    )
                                }
                            )
                        }
                    </figure>
                </div>
                <div className="blog-2 blog d-grid section-padding">
                    <article>
                        <h3>Enjoy Your Life With Us Now!</h3>
                        <p>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
                        <button className="special-button">Contact Us</button>
                    </article>
                    <figure>
                        <img src={img_2} alt="Image" />
                    </figure>
                </div>
                <div className="blog-3 blog d-grid section-padding">
                    <figure>
                        <img src={img_3} alt="Image" />
                    </figure>
                    <article>
                        <h3>Let’s Enjoy Nature With Us</h3>
                        <p>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
                        <button className="special-button">Contact Us</button>
                    </article>
                </div>
            </div>
        </section>
    )
}