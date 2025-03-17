import { Reveal } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
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
  )
}

export default Projects