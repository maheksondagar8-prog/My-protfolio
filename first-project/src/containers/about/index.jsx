import React from "react";
import './styles.scss';
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { DiReact, DiAngularSimple, DiAndroid, DiApple } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const personalDetails = [
    {
        label: "Name:",
        Value: "Mahek Sondagar",
        icon: <FaUser />
    },
    {
        label: "Address:",
        Value: "Gandhinagar, Gujrat, India",
        icon: <FaMapMarkerAlt />
    },
    {
        label: "Email:",
        Value: "maheksondagar8@gmail.com",
        icon: <FaEnvelope />
    },
    {
        label: "Contact:",
        Value: "+918154057021",
        icon: <FaPhone />
    }
]

const JobSummary = "I’m a Front-End Developer who builds responsive and user-friendly web applications using Angular. Proficient in HTML, CSS, SCSS, and TypeScript, with strong skills in developing reusable components and implementing clean UI architectures. Experienced in debugging, identifying functionality issues, and resolving complex front-end problems efficiently. Adept at collaborating with backend teams, optimizing performance, and ensuring cross-browser compatibility. Passionate about writing maintainable code and continuously improving user experience."

const About = () => {
    return (
        <section className="about">
            <PageHeaderContain
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="about_content">
                <div className="about_content_personalWrapper">
                    <h2>Job Summary</h2>
                    <p>{JobSummary}</p>
                    <div>
                        <h2 className="personalInformationHederText">Personal Information</h2>
                        {
                            personalDetails.map((item, i) => (
                                <div key={i} className="personalInfo-card">
                                    <div className="personalInfo-card_icon">{item.icon}</div>
                                    <div className="personalInfo-card_icon_label">{item.label}</div>
                                    <div>{item.Value}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="about_content_serviceWrapper">
                    <div className="about_content_serviceWrapper_interContent">
                        <div>
                            <FaDev size={60} color="var(--blue-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--blue-theme-main-color)" />
                        </div>
                        <div>
                            <DiReact size={60} color="var(--blue-theme-main-color)" />
                        </div>
                        <div>
                            <DiApple size={60} color="var(--blue-theme-main-color)" />
                        </div>
                        <div>
                            <DiAngularSimple size={60} color="var(--blue-theme-main-color)" />
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--blue-theme-main-color)" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;