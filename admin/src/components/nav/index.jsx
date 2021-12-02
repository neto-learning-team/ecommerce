import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { faShoppingCart, faSearch, faBars } from "@fortawesome/free-solid-svg-icons/"


export default function Nav(props) {

    return <nav className='navigation'>
        <div id='RENOSHOPBEE'><a href='/'><span className='RENOSHOPBEE-GREEN'>RENOSHOP</span>BEE</a></div>
        <ul className='nav-list'>
            <li><a href='/' >HOME</a></li>
            <li><a href='/'>WOMEN</a></li>
            <li><a href='/'>MEN</a></li>
            <li><a href='/'>KIDS</a></li>
            <li><a href='/'>JEWELLERY</a></li>
            <li><a href='/aa'>ACCESSORIES</a></li>
        </ul>
        <ul className='icons'>
            <li><a href='/'><FontAwesomeIcon icon={faShoppingCart} /></a></li>
            <li><a href='/'><FontAwesomeIcon icon={faSearch} /></a></li>
            <li><a href='/'><FontAwesomeIcon icon={faBars} /></a></li>
        </ul>
    </nav>

}