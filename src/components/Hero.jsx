import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section className='hero'>
        <img src='restaurant.jpg'></img>
        <div className="item">
            <h3>Dream Maker</h3>
            <div>
                <h1>Your personal dream maker</h1>
                <p>We believe that it is all about the BIG DREAMS and small events</p>
                <Link to='contact' spy={true} smooth={true} duration={500}>BOOK NOW</Link>

            </div>
        </div>
    </section>
  )
}

export default Hero