import "../../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__wrapper container">
        <div className="footer__socials">
          <a
            href="https://github.com/Chillpill23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mark-l-8583051b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <p className="smaller-text">
          Designed in <span className="highlight">Figma</span>, Coded in{" "}
          <span className="highlight">Visual Studio</span>, and built with{" "}
          <span className="highlight">React & TypeScript</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
