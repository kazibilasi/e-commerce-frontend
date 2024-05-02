/* eslint-disable no-unused-vars */
import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


export const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2> NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon}></img>
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>
                        Latest Collection
                    </div>
                    <img src={arrow_icon}></img>

                </div>
            </div>

            <div className='hero-right'>
                <img src={hero_image}>

                </img>

            </div>
        </div>
    )
}
