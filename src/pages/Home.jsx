// Components import
import Button from '../components/Button'
import SmallCard from '../components/SmallCard';
import LargeCard from '../components/LargeCard';
import StackCard from '../components/StackCard';

// Constants import
import { Experience } from '../constants/Experience';
import { Projects } from '../constants/Projects';
import { About } from '../constants/About';

// Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Images import
import moon1 from "../assets/hero/moon-1.png";
import moon2 from "../assets/hero/moon-2.png";
import moon3 from "../assets/hero/moon-3.png";
import moon4 from "../assets/hero/moon-4.png";
import moon5 from "../assets/hero/moon-5.png";
import wolf from '../assets/hero/wolf-layer.png'
import mountain from '../assets/hero/mountain-layer.png'

// Styles import
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

      <section className="projects">
        <div className="projects__wrapper container">
          <h4 className='section-header'>
             <span className="sublight">02.</span> 
             <span className='section__title'>Some Things I've Built</span>
          </h4>

          <div className="projects__cards">
              {Projects.map((project) => {
                return(
                  <LargeCard 
                    key={project.name}
                    section={project.section}
                    name={project.name}
                    thumbnail={project.thumbnail}
                    desc1={project.desc1}
                    desc2={project.desc2}
                    stack={project.stack}
                    images={project.images}
                  />
                )
              })}
          </div>
        </div>
      </section>


      <section className="about">
        <div className="about__wrapper container">
          <h4 className='section-header'>
             <span className="sublight">03.</span> 
             <span className='section__title'>About Me</span>
          </h4>

          {About.map((me) => {
            return(         
              <div key={me.name} className="about__content">
                <div className="about__image">
                  <img src={me.image} alt={me.name} />
                </div>

                <div className="about__info">
                  <h4><span className="highlight">Hello</span>, I'm {me.name}</h4>
                  <p>{me.desc1}</p>
                  <p>{me.desc2}</p>
                  <small>I'm currently working on the following technologies</small> <br />
                  <div className="stack-wrapper">
                    {me.stack.map((tech) => {
                      return(
                        <StackCard key={tech} tech={tech}/>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="contact">
        <div className="contact__wrapper container">
          <h4 className='section-header'>
             <span className="sublight">04.</span> 
             <span className='section__title'>What's Next?</span>
          </h4>

          <article className="contact__info">
            <h5>Get In Touch</h5>
            <p>I am eager to embrace new challenges and currently seeking an opportunity to contribute my skills.</p>
            <p>I am particularly passionate about React web development and excited to explore roles in this field.</p>

            <Button
                class='hero__cta cta'
                name="View My Works"
                // onClick={}
                icon={<FontAwesomeIcon icon={faEnvelope} />}
            />
          </article>
        </div>
      </section>
    </main>
  )
}
