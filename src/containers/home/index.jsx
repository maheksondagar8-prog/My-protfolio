import './styles.scss';
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
const Home = () => {

    const navigate = useNavigate()
    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    }

    return (
        <section className="home">
            <div className="home_text-wrapper">
                <h1>Hello,  I'm Mahek
                    <br />
                    Front end Devloper
                </h1>
            </div>

            <div className="home_contact-me">
                {/* Hire Me button */}
                <button onClick={handleNavigateToContactMePage}>Hire Me</button>

                {/* LinkedIn */}
                <div className="home_contact-me_social-media">
                    <a
                        href="https://www.linkedin.com/in/mahek-sondagar-470406247"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home_contact-me_social-media_icon-btn-linkedin"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>

                {/* GitHub */}
                <div className="home_contact-me_social-media">
                    <a
                        href="https://github.com/maheksondagar8-prog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home_contact-me_social-media_icon-btn-github"
                    >
                        <FaGithub size={22} />
                    </a>
                </div>

                {/* Download CV */}
                <div className="home_contact-me_social-media">
                    <a
                        href="/Mahek_sondagar_resume.pdf"
                        download="Mahek_sondagar_resume.pdf"
                        className="home_contact-me_social-media_icon-btn-cv"
                    >
                        <FaFileDownload size={22} />
                    </a>
                </div>
            </div>

        </section>
    )
}
export default Home;