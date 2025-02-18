import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../css/Floats.css'

function Floats() {
  return (
    <div className='floats__wrapper'>
      <div className='floats__social'>
        <a href='https://github.com/Chillpill23' title='Check my other projects in Github'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/mark-l-8583051b4/' title='Explore my Linkedin profile'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <div className="floats__line"></div>
      </div>
      <div className='floats__email'>
        <a href='mailto:mj.lagarta@gmail.com'>mj.lagarta00@gmail.com</a>
        <div className="floats__line"></div>
      </div>
    </div>
  )
}

export default Floats