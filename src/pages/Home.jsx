import Button from '../components/Button'
import SmallCard from '../components/SmallCard';

import { Experience } from '../constants/Experience';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

import moon1 from "../assets/hero/moon-1.png";
import moon2 from "../assets/hero/moon-2.png";
import moon3 from "../assets/hero/moon-3.png";
import moon4 from "../assets/hero/moon-4.png";
import moon5 from "../assets/hero/moon-5.png";
import wolf from '../assets/hero/wolf-layer.png'
import mountain from '../assets/hero/mountain-layer.png'

import '../css/Home.css'
import '../animations/Stars.css'


export default function Home() {

  return (
    <main>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content container">
            <small className="hero__subtitle">
              Frontend Developer
            </small>

            <h1 className="hero__title">
              Mark Lagarta
            </h1>

            <p className="hero__caption">
              Crafting beautiful sites that people will remember
            </p>
            <div className="hero__cta-wrapper">
              <Button
                class='hero__cta cta'
                name="View My Works"
                // onClick={}
                icon={<FontAwesomeIcon icon={faCopy} />}
              />

              <Button
                class='hero__cta cta secondary'
                name="Explore My Resume"
                // onClick={}
              />
            </div>
          </div>

          <div className="hero__background">
            <div className="hero__wolf">
              <img src={wolf} alt="Wolf layer background for the hero section" />
              <img src={mountain} alt="Mountain layer background for the hero section" />
            </div>

            <div className="hero__moon">
              <img src={moon1} alt="moon layer 1" />
              <img src={moon2} alt="moon layer 1" />
              <img src={moon3} alt="moon layer 1" />
              <img src={moon4} alt="moon layer 1" />
              <img src={moon5} alt="moon layer 1" />
            </div>

            <div className="hero__shooting-stars">
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
            </div>
          </div>
        </div>
      </section>


      <section className="exp">
        <div className="exp__wrapper container">
          <h4 className='section-header'>
             <span className="sublight">01.</span> 
             <span className='section__title'>Where I've Worked</span>
          </h4>

          <div className='exp__content'>
            <div className="exp__caption">
              <h6 className="exp__title">
                Frontend Developer <span className="highlight">@Webshop Manager</span>
              </h6>
              <small className="exp__subtitle">2022-2024</small>
            </div>

            <div className="exp__cards">
              {Experience.map((exp) => {
                return(
                  <SmallCard 
                    section='exp'
                    key={exp.name}
                    stats={exp.stats}
                    icon={exp.icon}
                    desc={exp.desc}
                  />
                )
              })}
            </div>
          </div>
        </div>


      </section>
    </main>
  )
}
