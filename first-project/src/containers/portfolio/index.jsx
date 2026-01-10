import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";

const Portfolio = () => {
    return (
        <section className="about">
            <PageHeaderContain
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />} />
        </section>
    )
}
export default Portfolio;