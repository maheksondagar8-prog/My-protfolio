import './styles.scss';
import { useNavigate } from 'react-router-dom'

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
                <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            </div>

        </section>
    )
}
export default Home;