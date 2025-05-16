import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Reveal } from '../../utils'
import { LargeCard, SmallCard } from '../ui'
import { memo, useEffect, useState } from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Experience, Projects } from '../../constants';
import { ProjectType } from '../../types/data';

const ExperienceSection = memo(() => {

  const [featuredProjects, setFeaturedProjects] = useState<ProjectType[]>([])
  const [generalProjects, setGeneralProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    setFeaturedProjects(Projects.filter(project => project.featured))
    setGeneralProjects(Projects.filter(project => project.featured !== true))
  }, [])
  

  return (
    <>
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
              <span className='section__title'>Featured Projects</span>
            </h3>
          </Reveal>


          <div className="projects__cards">
              {featuredProjects.map((project) => {
                return(
                  <LargeCard
                    key={project.name}
                    category={project.category}
                    section={project.section}
                    type={project.type}
                    featured={project.featured}
                    name={project.name}
                    thumbnail={project.thumbnail}
                    thumbnailHover={project.thumbnailHover}
                    desc1={project.desc1}
                    desc2={project.desc2}
                    frontend={project.frontend}
                    backend={project.backend}
                    images={project.images}
                    url={project.url}
                    github={project.github}
                  />
                )
              })}
          </div>

          <Reveal>
            <h3 className='section-header general'>
              <span className="sublight">|</span> 
              <span className='section__title'>Other Things I've built</span>
            </h3>
          </Reveal>


          <div className='projects__cards-general'>
            {generalProjects.map((project) => {
              return(
                <LargeCard
                  key={project.name}
                  category={project.category}
                  section={project.section}
                  featured={project.featured}
                  name={project.name}
                  thumbnail={project.thumbnail}
                  thumbnailHover={project.thumbnailHover}
                  frontend={project.frontend}
                  backend={project.backend}
                  images={project.images}
                  url={project.url}
                  github={project.github}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
})

export default ExperienceSection