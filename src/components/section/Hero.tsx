import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { Reveal } from '../../utils'
import { Button } from '../ui';


const Hero = () => {

  const images = import.meta.glob("../../assets/hero/*.webp", { eager: true });

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
            Frontend Developer
          </small>
        </Reveal>

        <Reveal>
          <h1 className="hero__title">
            Mark Lagarta
          </h1>
        </Reveal>

        <Reveal>
          <p className="hero__caption">
            Crafting beautiful sites that people will remember
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
              Explore My Resume
            </a>

            <Button
              btnStyle='hero__cta cta secondary'
              name="View My Works"
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