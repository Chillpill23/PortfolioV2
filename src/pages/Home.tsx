import { useState } from 'react';

// Components import
import { Button, SmallCard, LargeCard, StackCard, Modal } from '../components';

// Constants import
import { Experience, Projects, About } from '../constants';

// Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faEnvelope, faMapMarkerAlt, faArrowDown } from '@fortawesome/free-solid-svg-icons'

// Styles import
import '../css/Home.css'
import '../animations/Stars.css'

// Utils import
import { Reveal, ScrollToTop } from '../utils';
import { ProjectType } from '../types/data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  
  const images = import.meta.glob("../assets/hero/*.webp", { eager: true });

  const wolf = images["../assets/hero/wolf-layer.webp"].default;
  const mountain = images["../assets/hero/mountain-layer.webp"].default;

  const moons = Object.keys(images)
    .filter((key) => key.includes("moon"))
    .sort() 
    .map((key) => images[key].default);

  return (
    <main>
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

      <section className="about" id='about'>
        <div className="about__wrapper container">
          <Reveal>
            <h3 className='section-header'>
              <span className="sublight">01.</span> 
              <span className='section__title'>About Me</span>
            </h3>
          </Reveal>

          {About.map((me) => {
            return(         
              <div key={me.name} className="about__content">
                <Reveal>
                  <div className="about__image">
                    <img loading='lazy' src={me.image} alt={me.name} />
                  </div>
                </Reveal>


                  <div className="about__info">
                    <Reveal>
                     <h4><span className="highlight">Hello</span>, I&apos;m {me.name}</h4>
                    </Reveal>

                    <Reveal>
                      <p>{me.desc1}</p>
                    </Reveal>

                    <Reveal>
                      <p>{me.desc2}</p>
                    </Reveal>
                    <Reveal>
                      <small>I&apos;m currently working on the following technologies</small> <br />
                    </Reveal>

                    <div className="stack-wrapper">
                      {me.stack.map((tech) => {
                        return(
                          <Reveal padding='0.5rem 0' key={tech} >
                            <StackCard tech={tech}/>
                          </Reveal>
                        )
                      })}
                    </div>
                  </div>

              </div>
            )
          })}
        </div>
      </section>

      <section className="exp" id='experience'>
        <div className="exp__wrapper container">
          <Reveal>
            <h3 className='section-header'>
              <span className="sublight">02.</span> 
              <span className='section__title'>Where I&apos;ve Worked</span>
            </h3>
          </Reveal>

          <div className='exp__content'>
            <Reveal>
              <div className="exp__caption">
                <h6 className="exp__title">
                  Frontend Developer <span className="highlight">@Webshop Manager</span>
                </h6>
                <small className="exp__subtitle">2022-2024 - <FontAwesomeIcon icon={faMapMarkerAlt} /> San Diego, CA (Remote)</small>
              </div>
            </Reveal>

            
              <div className="exp__cards">
                {Experience.map((exp) => {
                  return(
                    <Reveal key={exp.name}>
                      <SmallCard 
                        section='exp'
                        stats={exp.stats}
                        icon={exp.icon}
                        desc={exp.desc}
                      />
                    </Reveal>
                  )
                })}
              </div>
          </div>
        </div>
      </section>

      <section className="projects" id='projects'>
        <div className="projects__wrapper container">
          <Reveal>
            <h3 className='section-header'>
              <span className="sublight">03.</span> 
              <span className='section__title'>Some Things I&apos;ve Built</span>
            </h3>
          </Reveal>


          <div className="projects__cards">
              {Projects.map((project) => {
                return(
                  <LargeCard 
                    key={project.name}
                    category={project.category}
                    section={project.section}
                    name={project.name}
                    thumbnail={project.thumbnail}
                    desc1={project.desc1}
                    desc2={project.desc2}
                    stack={project.stack}
                    images={project.images}
                    onClick={() => {setSelectedProject(project)}}
                    url={project.url}
                    github={project.github}
                  />
                )
              })}
          </div>

          <Modal project={selectedProject} onClose={() => setSelectedProject(null)}/>
        </div>
      </section>

      <section className="contact" id='contact'>
        <div className="contact__wrapper container">
          <Reveal>
            <h3 className='section-header'>
              <span className="sublight">04.</span> 
              <span className='section__title'>What&apos;s Next?</span>
            </h3>
          </Reveal>

          <Reveal>
            <article className="contact__info">
              <h5>Get In Touch</h5>
              <p>I am eager to embrace new challenges and currently seeking an opportunity to contribute my skills.</p>
              <p>I am particularly passionate about React web development and excited to explore roles in this field.</p>
              
              <div className='contact__socials__wrapper'>
                <a 
                  href='mailto:mj.lagarta00@gmail.com' 
                  className='contact__email' 
                  title='Get in touch' 
                  aria-label="Get in touch"
                >
                  <FontAwesomeIcon size='lg' className='icon' icon={faEnvelope} />
                  mj.lagarta00@gmail.com
                </a>

                <span>or</span>
                <div className='contact__socials'>
                  <a
                    href="https://github.com/Chillpill23"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Check my other projects in Github"
                    aria-label="Github profile"
                  >
                    <FontAwesomeIcon className='icon' size="xl" icon={faGithub} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mark-l-8583051b4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Explore my Linkedin profile"
                    aria-label="LinkedIn profile"
                  >
                    <FontAwesomeIcon className='icon' size="xl" icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
              
            </article>
          </Reveal>
        </div>
      </section>

      <ScrollToTop />
    </main>
  )
}
