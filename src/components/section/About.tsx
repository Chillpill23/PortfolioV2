import { Reveal } from '../../utils'
import { StackCard } from '../ui'

// Constants import
import { About } from '../../constants';
import { useMemo } from 'react';

const AboutSection = () => {
  const aboutContent = useMemo(() => (
    About.map((me) => (         
      <div key={me.name} className="about__content">
        <Reveal>
          <div className="about__image">
            <img loading="lazy" src={me.image} alt={me.name} />
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
            {me.stack.map((tech) => (
              <Reveal padding="0.5rem 0" key={tech}>
                <StackCard tech={tech} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    ))
  ), [About]);

  return (
    <section className="about" id='about'>
      <div className="about__wrapper container">
        <Reveal>
          <h3 className='section-header'>
            <span className="sublight">01.</span> 
            <span className='section__title'>About Me</span>
          </h3>
        </Reveal>

        {aboutContent}
      </div>
    </section>
  )
}

export default AboutSection