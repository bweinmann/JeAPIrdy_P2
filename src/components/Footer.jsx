import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './FooterStyle.css'

export default function Footer() {
    return (
        <footer className='footer'>
        <div className="social-links">
            <ul>
            <li className="social-items">
                <a href="https://www.linkedin.com/in/blake-weinmann/">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
           </li>
           <li className="social-items">
                <a href="https://github.com/bweinmann">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
          </li>
          </ul> 
    </div>
</footer>
    )
}
