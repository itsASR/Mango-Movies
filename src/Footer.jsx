import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <footer>
        <div className="footer-contact">
            <p>Contact US:9680415819</p>
        </div>
        <div className="footer-container">
          <div className="footer-column1">
            <p>Home</p>
            <p>ABOUT US</p>
            <p>SOCIAL</p>
            <p>PRIVACY</p>
            <p>POLICY</p>
          </div>

          <div className="footer-column2">
            <p>LEGAL</p>
            <p>CLAIM</p>
            <p>NOTICE</p>
            <p>CAREER</p>
            <p>ACCOUNT</p>
          </div>

          <div className="footer-column3">
            <p>COPYRIGHT</p>
            <p>PLATFORM</p>
            <p>PRESS</p>
            <p>FORM</p>
          </div>
            
           
        </div>
        <div className="credit">
          <p>Creted By Mango Movies INC</p>
        </div>
    </footer>
    
    </>
  )
}

export default Footer