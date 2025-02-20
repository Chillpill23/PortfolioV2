import StackCard from "./StackCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { Reveal } from "../utils/Reveal"

function LargeCard({section, name, thumbnail, images, desc1, desc2, stack, onClick}) {
  return (
    <article className={`${section}__lCard`}>
        <div className="lCard__wrapper">
          <Reveal width="unset">
            <h6 className="lCard__subtitle">Featured Project</h6>
            <h4 className="lCard__title">{name}</h4>     
          </Reveal> 
        </div>

        <picture className="lCard__image" onClick={onClick}>
          <source className='springy' srcSet={thumbnail} media='(min-width:768px)'/>
          <img loading='lazy' className='springy' src={thumbnail} alt={`${name} thumbnail`}/>
        </picture>

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

          <button className='cta secondary lCard__cta' role='button' aria-label='View site snapshots' onClick={onClick}><FontAwesomeIcon icon={faEye} />View site snapshots</button>
        </div>
    </article>
  )
}

export default LargeCard