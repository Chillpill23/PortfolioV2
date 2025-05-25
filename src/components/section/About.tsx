import { Reveal } from '../../utils'
import { StackCard } from '../ui'

// Constants import
import { About } from '../../constants';
import { useMemo } from 'react';
import { Stack } from '../../constants/Stack';

const AboutSection = () => {
  const aboutContent = useMemo(() => (
    About.map((me) => (
      <div key={me.name}>
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
          <div className="stack__wrapper">
            <h4 className='stack__title'>Frontend</h4>
            <div className='stack__tech'>
              {me.frontend.map((tech) => {

                const stackItem = Stack.find((s) => s.name === tech)
                if(!stackItem) return null
              
                return(
                  <Reveal padding="0.5rem 0" key={stackItem.name}>
                    <StackCard name={stackItem.name} logo={stackItem.logo}/>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <div className="stack__wrapper">
            <h4 className='stack__title'>Backend</h4>
            
            <div className='stack__tech'>
              {me.backend.map((tech) => {

                const stackItem = Stack.find((s) => s.name === tech)
                if(!stackItem) return null
              
                return(
                  <Reveal padding="0.5rem 0" key={stackItem.name}>
                    <StackCard name={stackItem.name} logo={stackItem.logo}/>
                  </Reveal>
                )
              })}
            </div>
          </div>
                    
          <div className="stack__wrapper">
            <h4 className='stack__title'>Database</h4>

            <div className='stack__tech'>
              {me.database.map((tech) => {

                const stackItem = Stack.find((s) => s.name === tech)
                if(!stackItem) return null
              
                return(
                  <Reveal padding="0.5rem 0" key={stackItem.name}>
                    <StackCard name={stackItem.name} logo={stackItem.logo}/>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <div className="stack__wrapper">
            <h4 className='stack__title'>Tools</h4>

            <div className='stack__tech'>
              {me.tools.map((tech) => {

                const stackItem = Stack.find((s) => s.name === tech)
                if(!stackItem) return null
              
                return(
                  <Reveal padding="0.5rem 0" key={stackItem.name}>
                    <StackCard name={stackItem.name} logo={stackItem.logo}/>
                  </Reveal>
                )
              })}
            </div>
          </div>
          
          <div className="stack__wrapper">
            <h4 className='stack__title'>Design</h4>

            <div className='stack__tech'>
              {me.design.map((tech) => {

                const stackItem = Stack.find((s) => s.name === tech)
                if(!stackItem) return null
              
                return(
                  <Reveal padding="0.5rem 0" key={stackItem.name}>
                    <StackCard name={stackItem.name} logo={stackItem.logo}/>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    ))
  ), [About]);

  return (
    <section className="about" id='about'>
      <div className="about__wrapper container">
        <Reveal>
          <h2 className='section-header'>
            <span className="sublight">01.</span> 
            <span className='section__title'>About Me</span>
          </h2>
        </Reveal>

        {aboutContent}
      </div>
    </section>
  )
}

export default AboutSection