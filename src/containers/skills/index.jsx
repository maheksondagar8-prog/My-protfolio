import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";
import { skillsDetails } from './utils';
import './styles.scss';
import { Line } from "rc-progress";

const Skills = () => {
    return (
        <section className="skills">
            <PageHeaderContain
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="skills_content-wrapper">
                {
                    skillsDetails.map((item, i) => (
                        <div key={i} className="skills_content-wrapper_inner-content">
                            <div className="skills_content-wrapper_inner-content_category-text">
                                <div>{item.icon}</div>
                                <div>{item.label}</div>
                            </div>
                            <div className="skills_content-wrapper_inner-content_progressbar-container">
                                {
                                    item.data.map((skillsItem, j) => (
                                        <div key={j} className="progressbar-wrapper">
                                            <p>{skillsItem.SkillName}</p>
                                            <span className="percentage-text">{skillsItem.percentage}%</span>
                                            <Line
                                                percent={skillsItem.percentage}
                                                strokeWidth="2"
                                                strokeColor="var(--blue-theme-main-color)"
                                                trailWidth="2"
                                                strokeLinecap="square" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Skills;
