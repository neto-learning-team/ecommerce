import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './style.css'
import { faPhoneAlt, faEnvelope, faFacebook } from "@fortawesome/free-solid-svg-icons/"
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faBehance } from "@fortawesome/free-brands-svg-icons"


export default function Header(props) {

    return <header >
        <div className='header'>
            <div className='contact'>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <h3>+1 123 456 789</h3>
                <div className='pipe'></div>
                <FontAwesomeIcon icon={faEnvelope} />
                <h3>info@company.com</h3>
            </div>
            <div className='social-media'>
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faBehance} />
            </div>
        </div>
    </header>
}