import logo from "../assets/logo.png";
import social from "../assets/social.png";
import mail from "../assets/mail.png";
export const Contact = () => {
    return (
        <>
            <section className="section-padding contact">
                <div className="container">
                    <article>
                        <h3 className="lh-base text-center">Subscribe to Our Newsletter For Weekly Article Update.</h3>
                        <p className="lh-base text-center">We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.</p>
                        <form action="#" className="gap-3 w-100 text-center d-flex">
                            <div className="position-relative">
                                <img className="position-absolute" src={mail} width={26} height={26} alt="Mail" />
                                <input className="rounded-pill" type="email" placeholder="Enter your e-mail address" />
                            </div>
                            <input className="rounded-pill special-button" type="submit" value="Subscribe" />
                        </form>
                    </article>
                    <div className="information mt-5">
                        <div className="info">
                            <img width={127} className="mb-3" src={logo} alt="Logo" />
                            <p>We envision a world where everyone feels welcome in the American hiking community.</p>
                            <img src={social} alt="Social Media" />
                        </div>
                        <div className="info">
                            <h4>Location</h4>
                            <p>America</p>
                            <p>Asia</p>
                            <p>Europe</p>
                            <p>Africa</p>
                        </div>
                        <div className="info">
                            <h4>Contact</h4>
                            <p>About Me</p>
                            <p>Teams</p>
                            <p>Profille</p>
                            <p>FAQ</p>
                        </div>
                        <div className="info">
                            <h4>Legals</h4>
                            <p>Privacy</p>
                            <p>Disclaimer</p>
                            <p>Terms</p>
                            <p>Company</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="text-center">
                Copyright &copy; 2021. All Right Reserved.
            </footer>
        </>
    )
}