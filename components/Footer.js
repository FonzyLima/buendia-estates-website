import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer-section">
                <div><img className="footer-logo" src="logo-horizontal-white.png"></img></div>
                
                <div className="explore">
                    <h3>EXPLORE</h3> <br></br>
                    <p><Link href="/"><a>Home</a></Link></p>
                    <p><Link href="/properties"><a>Properties</a></Link></p>
                    <p><Link href="/Booking"><a>Book a Viewing</a></Link></p>
                </div>
                <div className="connect">
                    <h3>CONNECT</h3> <br></br>
                    <p><a href="https://www.instagram.com/">Instagram</a></p>
                    <p><a href="https://www.facebook.com/">Facebook</a></p>
                </div>
                <div className="contact">
                    <h3>CONTACT</h3> <br></br>
                    <p>lourdene_buendia@yahoo.com</p>
                    <p>0918 337 1307</p>
                </div>
            </div>
            <div className="footer-end">
                <div className="footer-end-section">
                    <div className="footer-end-text1">© Lourdene Buendia 2022. All rights reserved.</div>
                    <div className="footer-end-text2">Powered by Growth</div>
                </div>
            </div>
        </div>
    )
}
