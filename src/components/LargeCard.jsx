import StackCard from "./StackCard"

function LargeCard({section, name, thumbnail, images, desc1, desc2, stack}) {
  return (
    <article className={`${section}__lCard`}>
      <div className="lCard__wrapper">
        <h6 className="lCard__subtitle">Featured Project</h6>
        <h4 className="lCard__title">{name}</h4>      
      </div>

      <picture className="lCard__image">
        <source srcSet={thumbnail} media='(min-width:768px)'/>
        <img src={thumbnail} alt={`${name} thumbnail`}/>
      </picture>

      <div className="lCard__info">
        <p>{desc1}</p> 
        <p>{desc2}</p> 

        <div className="lCard__stack stack-wrapper">
          {stack.map((tech) => {
            return(
              <StackCard 
                key={tech}
                tech={tech}
              />
            )
          })}
        </div>
      </div>

    </article>
  )
}

export default LargeCard