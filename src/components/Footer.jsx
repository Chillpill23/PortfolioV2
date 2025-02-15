import '../css/Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="footer__wrapper container">
        <div className='footer__socials'>
          <span><FontAwesomeIcon icon={faGithub} /></span>
          <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
        </div>
        <p className='smaller-text'>Designed in <span className="highlight">Figma</span>, Coded in <span className="highlight">Visual Studio</span>, and built with <span className="highlight">React</span></p>
      </div>
    </footer>
  )
}

export default Footer