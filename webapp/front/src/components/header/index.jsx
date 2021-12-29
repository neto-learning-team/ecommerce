const React = require('react');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faPhoneAlt, faEnvelope } = require('@fortawesome/free-solid-svg-icons');
const { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faBehance } = require('@fortawesome/free-brands-svg-icons');


export default function Header(props) {

    return <header >
        <div className='header'>
            <ul className='contact'>
                <li><a href=''><FontAwesomeIcon icon={faPhoneAlt} /></a></li>
                <li><h3>+1 123 456 789</h3></li>
                <li className='pipe'></li>
                <li><a href=''><FontAwesomeIcon size='sm' icon={faEnvelope} /></a></li>
                <li> <h3>info@company.com</h3></li>
            </ul>
            <ul className='social-media'>
                <li><a href=''><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href=''><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href=''><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href=''><FontAwesomeIcon icon={faBehance} /></a></li>
            </ul>
        </div>
    </header>
}