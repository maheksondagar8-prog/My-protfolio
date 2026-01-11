import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils";
import { MdWork } from 'react-icons/md';
import './styles.scss'

const Resume = () => {
    return (
        <section className="resume">
            <PageHeaderContain
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="timeline">
                <div className="timeline_experience">
                    <h3 className="timeline_experience_header-text">Experience</h3>
                    <VerticalTimeline layout={'1-column'}
                        lineColor="var(--blue-theme-main-color)">
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i} className="timeline_experience_vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--blue-theme-sub-text-color)',
                                        border: '1.5px solid var(--blue-theme-main-color)'
                                    }}
                                    date={item.duration}
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--blue-theme-main-color)'
                                    }}>
                                    <div className="Vertical-timeline-element-title-warpper">
                                        <div>{item.title}</div>
                                        <div>{item.subTitle}</div>
                                    </div>
                                    <p className="Vertical-timeline-element-title-warpper-description">{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className="timeline_education">
                    <h3 className="timeline_education_header-text">Education</h3>
                    <VerticalTimeline layout={'1-column'}
                        lineColor="var(--blue-theme-main-color)">
                        {
                            data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i} className="timeline_education_vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--blue-theme-sub-text-color)',
                                        border: '1.5px solid var(--blue-theme-main-color)'
                                    }}
                                    date={item.duration}
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--blue-theme-main-color)'
                                    }}>
                                    <div className="Vertical-timeline-element-title-warpper">
                                        <div>{item.title}</div>
                                        <div>{item.subTitle}</div>
                                    </div>
                                    <p className="Vertical-timeline-element-title-warpper-description">{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}
export default Resume;