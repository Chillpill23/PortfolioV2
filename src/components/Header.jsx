import { useState } from 'react'
import { Scroll } from '../utils/Scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import { MainLinks } from '../constants/Navlinks'

import Logo from '../assets/Logo-1.png'
import '../css/Header.css'

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="header__wrapper container">
        <img className='header__logo' src={Logo} alt="ML Logo" />
        <nav className={isOpen ? 'open' : null }>
          <ul>
            {MainLinks.map((link,index) => {
              return(
                <li key={link.name}>
                    <a title={link.title} 
                     className='header__link' 
                     onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(!isOpen)
                      Scroll(link.url)
                     }}
                    ><span>0{index + 1}. </span>{link.name}</a>
                </li>
              )
            })}

            <a href="" title="Explore my Resume">Resume</a>
          </ul>
        </nav>
        <FontAwesomeIcon icon={faBarsStaggered} onClick={()=> {setIsOpen(!isOpen)}} className='header__mobile' />
      </div>
    </header>
  )
}

export default Header