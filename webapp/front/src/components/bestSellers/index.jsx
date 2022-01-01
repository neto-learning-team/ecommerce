const React = require('react');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function BestSellers(props) {

    return <div className='bestSellers'>
        <div className='square-bestSeller square'>
            <div className='txtBestSellersFromUs'>
                <h3 id='txtBestSellers'>BEST SELLERS</h3>
                <h6>The best productions from us </h6>
            </div>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quibusdam provident debitis itaque cum voluptatum fugiat odio aliquam numquam eum! A officia pariatur tempore alias quia. Aperiam non et deserunt?</span>
        </div>
        <div className='square'>
            <div className=' square-product'>
                <div className='itens'>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faRetweet} />
                    </a>
                </div>
            </div>
            <div className='info-product'>
                <span>Cruise Dual Analog</span>
                <strong>$250,00</strong>
            </div>
        </div>
        <div className='square'>
            <div className=' square-product'>
                <div className='itens'>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faRetweet} />
                    </a>
                </div>
            </div>
            <div>
                <span>Cruise Dual Analog</span>
                <strong>$250,00</strong>
            </div>
        </div>
        <div className='square'>
            <div className=' square-product'>
                <div className='itens'>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faRetweet} />
                    </a>
                </div>
            </div>
            <div>
                <span>Cruise Dual Analog</span>
                <strong>$250,00</strong>
            </div>
        </div>
        <div className='square'>
            <div className=' square-product'>
                <div className='itens'>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    <a href="" className='background-green'>
                        <FontAwesomeIcon icon={faRetweet} />
                    </a>
                </div>
            </div>
            <div>
                <span>Cruise Dual Analog</span>
                <strong>$250,00</strong>
            </div>
        </div>
    </div>
}