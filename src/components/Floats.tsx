import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "../css/Floats.css";

const Floats: React.FC = () => {
  return (
    <div className="floats__wrapper">
      <div className="floats__social">
        <a
          href="https://github.com/Chillpill23"
          target="_blank"
          rel="noopener noreferrer"
          title="Check my other projects in Github"
          aria-label="Github profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-l-8583051b4/"
          target="_blank"
          rel="noopener noreferrer"
          title="Explore my Linkedin profile"
          aria-label="LinkedIn profile"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <div className="floats__line"></div>
      </div>
      <div className="floats__email">
        <a href="mailto:mj.lagarta@gmail.com" aria-label="Send email">
          mj.lagarta@gmail.com
        </a>
        <div className="floats__line"></div>
      </div>
    </div>
  );
};

export default Floats;
