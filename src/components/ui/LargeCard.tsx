import StackCard from "./StackCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import { Reveal } from "../../utils/Reveal"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { memo } from "react";
import { Stack } from "../../constants/Stack";

interface LargeCardProps {
  category:string;
  section:string;
  name:string;
  year:string;
  thumbnail:string;
  images?:string[];
  desc1:string;
  desc2?:string;
  frontend:string[];
  backend?:string[];
  database?:string[];
  url?:string;
  onClick?:() => void;
  github?:string;
}

const LargeCard = memo(({category, section, name, year, thumbnail, desc1, desc2, frontend, backend, database, url, onClick,github}:LargeCardProps) => {

  return (
    <article className={`${section}__lCard`}>

        {category === "personal" ? (
          <a className="lCard__image" target='_blank' rel="noopener noreferrer" href={url}>
            <picture>
              <source className='springy' srcSet={thumbnail} media='(min-width:768px)'/>
              <img loading='lazy' className='springy' src={thumbnail} alt={`${name} thumbnail`}/>
            </picture>
          </a>
        ) : (
          <picture className="lCard__image" onClick={onClick}>
            <source className='springy' srcSet={thumbnail} media='(min-width:768px)'/>
            <img loading='lazy' className='springy' src={thumbnail} alt={`${name} thumbnail`}/>
          </picture>
        )}


        <div className="lCard__info">
          <div className="lCard__wrapper">
            <Reveal width="unset">
              <h6 className="lCard__subtitle">{category === 'personal' ? 'Personal ' : 'Client ' }Project</h6>
              <h4 className="lCard__title">{name}</h4>     
            </Reveal> 

            {/* <span className="lCard__year">{year}</span> */}
          </div>

          <Reveal width="unset">
              <p>{desc1}</p> 

              {desc2 && (
                <p>{desc2}</p> 
              )}
          </Reveal>
          
          <div className="lCard__outer__wrapper">
            <h5 className="lCard__stack__title">Frontend</h5>
            <div className="lCard__stack stack-wrapper">

                {frontend.map((tech) => {
                  const stackItem = Stack.find((s) => s.name === tech)
                  if(!stackItem) return null

                  return(
                    <Reveal padding='0.5rem 0' key={tech}>
                      <StackCard 
                        name={stackItem.name} 
                        logo={stackItem.logo}
                      />
                    </Reveal>
                  )
                })}
            </div>
          </div>

          {backend ? (
            <div className="lCard__outer__wrapper">
              <h5 className="lCard__stack__title">Backend</h5>
              <div className="lCard__stack stack-wrapper">

                  {backend.map((tech) => {
                    const stackItem = Stack.find((s) => s.name === tech)
                    if(!stackItem) return null

                    return(
                      <Reveal padding='0.5rem 0' key={tech}>
                        <StackCard 
                          name={stackItem.name} 
                          logo={stackItem.logo}
                        />
                      </Reveal>
                    )
                  })}
              </div>
            </div>
          ) : null}

          {category === "personal" ? (
            <div className="lCard__link__wrapper">
              <a 
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='' 
                role='button' 
                aria-label='View site'
                title="View Live site"
              >
                  <FontAwesomeIcon className="icon" size="lg" icon={faUpRightFromSquare} />
              </a>

              <a 
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                className='' 
                role='button' 
                aria-label='View Github repository'
                title="View Github repository"
              >
                  <FontAwesomeIcon className="icon" size="lg" icon={faGithub} />
              </a>
            </div>
            
          ) : (
            // <button 
            //   className='cta lCard__cta' 
            //   role='button' 
            //   aria-label='View site snapshots' 
            //   onClick={onClick}
            //   >
            //       <FontAwesomeIcon icon={faEye} />
            //       View Gallery
            // </button>
            null
          )}
        </div>
    </article>
  )
})

export default LargeCard