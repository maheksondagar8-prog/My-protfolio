import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContain from "../../components/pageHeaderContent";
import './styles.scss';

const ContactUs = () => {
    return (
        <section className="contact">
            <PageHeaderContain
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="contact_content">
                <h3 className="contact_content_header-text">Let`s Talk</h3>
                <div className="contact_content_form_controlwrapper">
                    <div className="nameWrapper">
                        <input required name="name" className="inputName" type={'text'}></input>
                        <label htmlFor="name" className="nameLabel">Name</label>
                    </div>
                    <div className="emailWrapper">
                        <input required name="email" className="inputEmail" type={'text'}></input>
                        <label htmlFor="email" className="emailLabel">Email</label>
                    </div>
                    <div className="descriptionWrapper">
                        <textarea required name="description" className="inputDescription" type={'text'} rows={5}></textarea>
                        <label htmlFor="description" className="descriptionLabel">Description</label>
                    </div>
                </div>
                <button>Submit</button>
            </div>
        </section>
    )
}
export default ContactUs;