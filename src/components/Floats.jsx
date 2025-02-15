import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../css/Floats.css'

function Floats() {
  return (
    <div className='floats__wrapper'>
      <div className='floats__social'>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedinIn} />
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