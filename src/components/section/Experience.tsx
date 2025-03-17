import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Reveal } from '../../utils'
import { LargeCard, SmallCard } from '../ui'
import { lazy, memo, Suspense, useState } from 'react';
import { ProjectType } from '../../types/data';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Experience, Projects } from '../../constants';

const ExperienceSection = memo(() => {

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const LazyModal = lazy(() => import("../ui/Modal"));

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
              <span className='section__title'>Some Things I&apos;ve Built</span>
            </h3>
          </Reveal>


          <div className="projects__cards">
              {Projects.map((project) => {
                return(
                  <LargeCard 
                    key={project.name}
                    category={project.category}
                    section={project.section}
                    name={project.name}
                    thumbnail={project.thumbnail}
                    desc1={project.desc1}
                    desc2={project.desc2}
                    stack={project.stack}
                    images={project.images}
                    onClick={() => {setSelectedProject(project)}}
                    url={project.url}
                    github={project.github}
                  />
                )
              })}
          </div>

          {selectedProject && (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            </Suspense>
          )}
        </div>
      </section>
    </>
  )
})

export default ExperienceSection