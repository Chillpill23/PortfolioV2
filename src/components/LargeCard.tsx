import StackCard from "./StackCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import { Reveal } from "../utils/Reveal"

interface LargeCardProps {
  category:string;
  section:string;
  name:string;
  thumbnail:string;
  images?:string[];
  desc1:string;
  desc2?:string;
  stack:string[];
  url?:string;
  onClick?:() => void;
}

function LargeCard({category, section, name, thumbnail, desc1, desc2, stack, url, onClick}:LargeCardProps) {

  return (
    <article className={`${section}__lCard`}>
        <div className="lCard__wrapper">
          <Reveal width="unset">
            <h6 className="lCard__subtitle">Featured Project</h6>
            <h4 className="lCard__title">{name}</h4>     
          </Reveal> 
        </div>
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
          <Reveal width="unset">
            <p>{desc1}</p> 
          </Reveal>

          <Reveal>
            <p>{desc2}</p> 
          </Reveal>

          <div className="lCard__stack stack-wrapper">
            {stack.map((tech) => {
              return(
                <Reveal padding='0.5rem 0' key={tech}>
                  <StackCard 
                    tech={tech}
                  />
                </Reveal>
              )
            })}
          </div>

          {category === "personal" ? (
            <a 
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='cta secondary lCard__cta' 
              role='button' 
              aria-label='View Site' 
              >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                  View {name}
            </a>
          ) : (
            <button 
              className='cta secondary lCard__cta' 
              role='button' 
              aria-label='View site snapshots' 
              onClick={onClick}
              >
                  <FontAwesomeIcon icon={faEye} />
                  View site snapshots
            </button>
          )}


        </div>
    </article>
  )
}

export default LargeCard