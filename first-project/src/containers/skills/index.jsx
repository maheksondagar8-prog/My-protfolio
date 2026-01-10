import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";

const Skills=()=>{
    return (
        <section className="about">
            <PageHeaderContain
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />} />
        </section>
    )
}
export default Skills;