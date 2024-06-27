import React from 'react'

const Footer = () => {
    return (
      <footer>
        <div className="banner"> 
            <div className="title">
                <h1>KING's</h1>
                <p>Events and Wedding</p>
            </div>
            <div className="tag">
                <label>Newsletter</label>
                <div>
                    <input type='text' placeholder='Email'/>
                    <button>Subscribe</button>
                </div>
                <p>Sign up with your email to receive news and updates</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer