import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";
import './styles.scss'

const projectSummary = "Designed and developed a personal portfolio website using React to showcase projects, skills, and experience. Implemented reusable components, responsive layouts, and clean UI with smooth navigation and performance-focused rendering."
const projectKeyPoint = "HTML,SCSS,React Js"

const Projects = () => {
    return (
        <section className="project">
            <PageHeaderContain
                headerText="My Project"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="project_content">
                <div className="project_content_infoWrapper">
                    <h2>My Portfolio</h2>
                    <div className="project_content_infoWrapper_keypoints">
                        <span>{projectKeyPoint}</span>
                    </div>
                    <p>{projectSummary}</p>
                    <div className="project_content_infoWrapper_codelink">
                        <a
                            href="https://github.com/maheksondagar8-prog/My-protfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Source Code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;