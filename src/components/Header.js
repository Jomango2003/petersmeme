import React from 'react'
import dog from '../images/corndoggg.png'

export default function Header(){
    return(
        <div className="header">
            <img className='header-dog'src={dog}></img>
            <p className='header-title'>Peter's Meme Distributor</p>
        </div>
    );
}