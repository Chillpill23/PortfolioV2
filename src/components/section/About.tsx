import { Reveal } from '../../utils'
import { StackCard } from '../ui'

// Constants import
import { About } from '../../constants';
import { useMemo } from 'react';
import { Stack } from '../../constants/Stack';

const AboutSection = () => {
  const aboutContent = useMemo(() => (
    About.map((me) => (
      <>
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
          </div>
        </div>

        <div className='about__stack'>
          <Reveal>
            <h4>Techstack</h4>
          </Reveal>
  
          <div className="stack__wrapper">
            <h6 className='stack__title'>Frontend</h6>
            <div className='stack__tech'>
              {me.frontend.map((tech) => {

                const stackItem = Stack.find((s) => s.name === tech)
                if(!stackItem) return null
              
                return(
                  <Reveal padding="0.5rem 0" key={tech}>
                    <StackCard name={stackItem.name} logo={stackItem.logo}/>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <div className="stack__wrapper">
            <h6 className='stack__title'>Backend</h6>
            
            <div className='stack__tech'>
              {me.backend.map((tech) => {

                const stackItem = Stack.find((s) => s.name === tech)
                if(!stackItem) return null
              
                return(
                  <Reveal padding="0.5rem 0" key={tech}>
                    <StackCard name={stackItem.name} logo={stackItem.logo}/>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <div className="stack__wrapper">
            <h6 className='stack__title'>Database</h6>

            <div className='stack__tech'>
              {me.tools.map((tech) => {

                const stackItem = Stack.find((s) => s.name === tech)
                if(!stackItem) return null
              
                return(
                  <Reveal padding="0.5rem 0" key={tech}>
                    <StackCard name={stackItem.name} logo={stackItem.logo}/>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </>
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