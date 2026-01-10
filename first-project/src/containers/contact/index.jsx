import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";

const ContactUs = () => {
    return (
        <section className="about">
            <PageHeaderContain
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />} />
        </section>
    )
}
export default ContactUs;