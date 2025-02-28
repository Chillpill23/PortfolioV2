import { useEffect, useState } from 'react'
import { Scroll } from '../utils/Scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

import { MainLinks } from '../constants/Navlinks'

import logo from '../assets/Logo-1.png'
import '../css/Header.css'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header__wrapper container">
        <img className='header__logo' src={logo} alt="ML Logo" />
        <nav className={`${isOpen ? 'open' : null}`}>
          <ul>
            {MainLinks.map((link,index) => {
              return(
                <li key={link.name}>
                    <a title={link.title} 
                     className='header__link' 
                     href={link.url}
                     onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(!isOpen)
                      Scroll({ anchor: link.url })
                     }}
                    ><span>0{index + 1}. </span>{link.name}</a>
                </li>
              )
            })}

            <li>
              <a className='cta secondary resume' href="/PortfolioV2/Lagarta-Resume.pdf" target='_blank' rel="noopener noreferrer" title="Explore my Resume">Resume</a>
            </li>
          </ul>
        </nav>
        <div
          className={`header__mobile ${isOpen ? 'open' : 'close'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBarsStaggered} className="icon bars" />
          <FontAwesomeIcon icon={faXmark} className="icon xmark" />
        </div>
      </div>
    </header>
  )
}

export default Header