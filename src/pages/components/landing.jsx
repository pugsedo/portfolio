import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ScrollBtn from './scroll_arrow';

import '../css/landing.scss';

export default function LandingPage() {
  return (
    <header className="landing">
        <section>
            <h1>Mikhail Makarov</h1>
            <p>Python and Full-Stack Web Developer</p>
        </section>
        <div className="links">
            <a href="https://www.github.com/pugsedo">
                <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} />
            </a>
            <a href="https://www.linkedin.com/in/mikhail-makarov-a4ab0b293/">
                <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
            </a>
            <a href="mailto:mmikeb72@proton.me">
                <FontAwesomeIcon icon={faSquareEnvelope} style={{color: "#ffffff",}} />
            </a>
        </div>
        {/* <div className="links">
            <a href="https://www.google.com/">a</a>
            <a href="https://www.google.com/">a</a>
        </div> */}

    <ScrollBtn/>
    </header>
  );
}