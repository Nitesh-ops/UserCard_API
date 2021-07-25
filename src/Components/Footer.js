import React from "react"
import { Container } from "reactstrap";
import {FaFacebook ,FaInstagram,FaLinkedin,FaGithub,FaCopyright} from "react-icons/fa";

const Footer = () => {
    return (
        <Container
            fluid
            tag="footer"
            className="text-center bg-dark text-white fixed-bottom p-3"
        >
        <FaFacebook size={22}/>{" "}
        <FaInstagram size={22}/>{" "}
        <FaLinkedin size={22}/>{" "}
        <FaGithub size={22}/>{" "}
        <br/>
       <FaCopyright/>  Created by Nitesh Singh 2021
        </Container>
    )
}

export default Footer