import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";

const Resume = () => {
    return (
        <section className="about">
            <PageHeaderContain
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />} />
        </section>
    )
}
export default Resume;