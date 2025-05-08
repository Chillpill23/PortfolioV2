import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { Reveal } from '../../utils'
import { Button } from '../ui';


const Hero = () => {

  const images = import.meta.glob("../../assets/hero/*.webp", { eager: true });

  const profile = images["../../assets/hero/profile.webp"].default
  const wolf = images["../../assets/hero/wolf-layer.webp"].default;
  const mountain = images["../../assets/hero/mountain-layer.webp"].default;

  const moons = Object.keys(images)
    .filter((key) => key.includes("moon"))
    .sort() 
    .map((key) => images[key].default);

  return (
    <section className="hero">
    <div className="hero__wrapper">
      <div className="hero__content container">

        <Reveal>
          <small className="hero__subtitle">
            <img src={profile} alt="Profile image"/>
            <span><span className='circle'></span>Open for work</span>
          </small>
        </Reveal>

        <Reveal>
          <h1 className="hero__title">
            Frontend Developer
          </h1>
        </Reveal>

        <Reveal>
          <p className="hero__caption">
          To me, every interface is a canvas and every user journey a narrative. Where every scroll, click, and animation is part of a seamless experience.
          </p>
        </Reveal>

        <Reveal>
          <div className="hero__cta-wrapper">

            <a 
              href="/PortfolioV2/Lagarta-Resume.pdf" 
              target='_blank' 
              rel="noopener noreferrer" 
              className='hero__cta cta' 
              aria-label="Explore My Resume"
            >
              <FontAwesomeIcon icon={faCopy} />
              View Resume
            </a>

            <Button
              btnStyle='hero__cta cta secondary'
              name="Explore Projects"
              url='projects'
              icon={<FontAwesomeIcon className="hero__cta__icon" icon={faArrowDown} />}
              pos='right'
            />
          </div>
        </Reveal>
      </div>

      <div className="hero__background">
        <div className="hero__wolf">
          <img src={wolf} alt="Wolf layer background for the hero section" />
          <img src={mountain} alt="Mountain layer background for the hero section" />
        </div>

        <div className="hero__moon">
          {moons.map((src, index) => (
            <img key={index} src={src} alt={`Moon layer ${index + 1}`} />
          ))}
        </div>

        <div className="hero__shooting-stars">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero