const React = require('react');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faPhoneAlt, faEnvelope } = require('@fortawesome/free-solid-svg-icons');
const { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faBehance } = require('@fortawesome/free-brands-svg-icons');


export default function Header(props) {

    return <header >
        <div className='header'>
            <ul className='contact'>
                <li><FontAwesomeIcon icon={faPhoneAlt} /></li>
                <li><h3>+1 123 456 789</h3></li>
                <li className='pipe'></li>
                <li><FontAwesomeIcon icon={faEnvelope} /></li>
                <li> <h3>info@company.com</h3></li>
            </ul>
            <ul className='social-media'>
                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                <li><FontAwesomeIcon icon={faBehance} /></li>
            </ul>
        </div>
    </header>
}