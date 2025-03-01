import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faProjectDiagram, faComments, faPalette } from '@fortawesome/free-solid-svg-icons'
import { ExprienceType } from '../types/data'

export const Experience:ExprienceType[] = [
  {
    name:'sites',
    stats:15,
    desc:'Led front-end development for 15+ client websites and maintained even more.',
    icon:''
  },
  {
    name:'tickets',
    stats:250,
    desc:'Resolved 250+ updates, maintenance, and client requests tickets.',
    icon:''
  },
  {
    name:'communication',
    stats:20,
    desc:'Provided client communication and step-by-step CMS training.',
    icon:<FontAwesomeIcon icon={faComments} />
  },
  {
    name:'documentation',
    stats:12,
    desc:'Created process and code documentation to enhance coding efficiency and team collaboration.',
    icon:<FontAwesomeIcon icon={faProjectDiagram} />
  },
  {
    name:'UI/UX',
    stats:98,
    desc:'Redesigned the company\'s core website template, improving UI/UX and Core Web Vitals scores.',
    icon:<FontAwesomeIcon icon={faPalette} />
  },
  {
    name:'integrations',
    stats:7,
    desc:'Spearheaded integration with key third-party services reusable code for efficient deployment.',
    icon: <FontAwesomeIcon icon={faLaptopCode} />
  },
]