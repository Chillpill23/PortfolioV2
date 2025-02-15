import StackCard from "./StackCard"
import { Reveal } from "../utils/Reveal"

function LargeCard({section, name, thumbnail, images, desc1, desc2, stack}) {
  return (
    <article className={`${section}__lCard`}>
        <div className="lCard__wrapper">
          <Reveal width="unset">
            <h6 className="lCard__subtitle">Featured Project</h6>
            <h4 className="lCard__title">{name}</h4>     
          </Reveal> 
        </div>

        <picture className="lCard__image">
          <source srcSet={thumbnail} media='(min-width:768px)'/>
          <img src={thumbnail} alt={`${name} thumbnail`}/>
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
                <Reveal padding='0.5rem 0'>
                  <StackCard 
                    key={tech}
                    tech={tech}
                  />
                </Reveal>
              )
            })}
          </div>
        </div>
    </article>
  )
}

export default LargeCard