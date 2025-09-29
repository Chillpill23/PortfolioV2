import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faProjectDiagram, faComments, faPalette } from '@fortawesome/free-solid-svg-icons'
import { ExprienceType } from '../types/data'

export const Experience:ExprienceType[] = [
  {
    name:'sites',
    stats:24,
    desc:'Client websites built, optimized, and deployed.',
    icon:''
  },
  {
    name:'tickets',
    stats:310,
    desc:'Updates, maintenance, and client requests tickets resolved.',
    icon:''
  },
  {
    name:'communication',
    stats:25,
    desc:'Step-by-step CMS training conducted. Improving client independence by 40%',
    icon:<FontAwesomeIcon icon={faComments} />
  },
  {
    name:'documentation',
    stats:22,
    desc:'Process and code documentation created to enhance work efficiency and team collaboration.',
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
    desc:'Key third-party services integrated and created reusable code for efficient deployment.',
    icon: <FontAwesomeIcon icon={faLaptopCode} />
  },
]