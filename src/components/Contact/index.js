import React from "react";
import './style.js';
import { ContactSection, ContactTitle, TitleSpan, Form, FormInput, InputName, InputEmail, InputSubject, Textarea, Submit } from "./style.js";
import Footer from '../Footer';


const Contact = () => {
    return (
        <>
        <ContactSection>
            <div className="container">
                <ContactTitle><TitleSpan>Drop </TitleSpan>Me A line</ContactTitle>
                <Form action="">
                    <FormInput>
                        <InputName type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputSubject type="text" className="sub" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <Submit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer />
        </>
    );
}

export default Contact;
