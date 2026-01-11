import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";
import './styles.scss'
import { projects } from './utils'

const Projects = () => {
    return (
        <section className="project">
            <PageHeaderContain
                headerText="My Project"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="project_content">
                <div className="project_content">
                    {
                        projects.map((project, i) => (
                            <div className="project_content_infoWrapper" key={i}>
                                <h2>{project.title}</h2>

                                <div className="project_content_infoWrapper_keypoints">
                                    {project.keyPoints.map((skill, i) => (
                                        <span key={i}>{skill}</span>
                                    ))}
                                </div>

                                <p>{project.summary}</p>

                                <div className="project_content_infoWrapper_codelink">
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Source Code
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Projects;